#!/usr/bin/env python3
"""Discover possible conferences from a web-search index.

Search results are intentionally stored as review candidates.  They are never
promoted to the public catalogue or made eligible for reminders automatically:
search snippets are useful leads, not evidence that an event is official.
"""

import argparse
from copy import deepcopy
from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
import re
import sys
import time
from urllib.error import HTTPError, URLError
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit
from urllib.request import Request, urlopen


USER_AGENT = "ConferenceReminderDiscovery/1.0 (+https://github.com/vickie02736/conference-reminder)"
MAX_RESPONSE_BYTES = 4 * 1024 * 1024
TRACKING_PARAMS = {
    "fbclid", "gclid", "mc_cid", "mc_eid", "ref", "ref_", "source",
    "utm_campaign", "utm_content", "utm_medium", "utm_source", "utm_term",
}
DEFAULT_CONFIG = "data/discovery-config.json"
DEFAULT_OUTPUT = "data/discovered-conferences.json"
DEFAULT_ENDPOINT = "https://api.search.brave.com/res/v1/web/search"
DEFAULT_YOU_ENDPOINT = "https://ydc-index.io/v1/search"
DEFAULT_MINIMUM_SCORE = 4


def canonical_url(value):
    """Return a stable HTTP(S) URL suitable for deduplication."""
    if not isinstance(value, str):
        return ""
    try:
        parsed = urlsplit(value.strip())
    except ValueError:
        return ""
    if parsed.scheme.lower() not in {"http", "https"} or not parsed.netloc:
        return ""
    if parsed.username or parsed.password:
        return ""
    host = (parsed.hostname or "").lower().rstrip(".")
    if not host:
        return ""
    if host.startswith("www."):
        host = host[4:]
    try:
        port = parsed.port
    except ValueError:
        return ""
    netloc = host
    if port and not ((parsed.scheme.lower() == "http" and port == 80) or
                     (parsed.scheme.lower() == "https" and port == 443)):
        netloc += f":{port}"
    path = parsed.path or "/"
    if path != "/":
        path = path.rstrip("/") or "/"
    query = urlencode([(key, val) for key, val in parse_qsl(parsed.query, keep_blank_values=True)
                       if key.casefold() not in TRACKING_PARAMS and not key.casefold().startswith("utm_")])
    return urlunsplit((parsed.scheme.lower(), netloc, path, query, ""))


def normalized_text(value):
    return re.sub(r"\s+", " ", str(value or "")).strip()


def candidate_id(url):
    return "web-" + hashlib.sha256(canonical_url(url).encode("utf-8")).hexdigest()[:20]


def domain_for(url):
    try:
        return (urlsplit(url).hostname or "").lower().removeprefix("www.")
    except ValueError:
        return ""


def infer_topics(text, config):
    lowered = text.casefold()
    topics = []
    for topic, terms in config.get("topic_terms", {}).items():
        if any(str(term).casefold() in lowered for term in terms):
            topics.append(topic)
    return topics


def score_result(title, description, url, years, config):
    """Score a result as a possible conference, with explainable reasons."""
    text = normalized_text(f"{title} {description}").casefold()
    score = 0
    reasons = []
    event_terms = config.get("event_terms", ["conference", "symposium", "workshop", "meeting", "congress", "school"])
    matched_events = [term for term in event_terms if str(term).casefold() in text]
    if matched_events:
        score += 2
        reasons.append("event wording: " + ", ".join(matched_events[:3]))
    call_terms = config.get("call_terms", ["call for papers", "important dates", "abstract submission", "registration"])
    matched_calls = [term for term in call_terms if str(term).casefold() in text]
    if matched_calls:
        score += 2
        reasons.append("conference planning wording: " + ", ".join(matched_calls[:2]))
    year_hits = sorted({str(year) for year in years if re.search(rf"\b{int(year)}\b", text)})
    if year_hits:
        score += 2
        reasons.append("future year: " + ", ".join(year_hits))
    topics = infer_topics(text, config)
    if topics:
        score += min(3, len(topics))
        reasons.append("research topic: " + ", ".join(topics[:3]))
    domain = domain_for(url)
    if domain in {str(item).casefold() for item in config.get("blocked_domains", [])}:
        score -= 10
        reasons.append("blocked social or discussion domain")
    if urlsplit(url).path.lower().endswith(".pdf"):
        reasons.append("PDF result requires an official-page check")
    return score, reasons, topics


def parse_search_response(payload, query, now, years, config, provider="brave"):
    """Convert a provider response into bounded, reviewable candidates."""
    if not isinstance(payload, dict):
        return [], 0
    if provider == "you":
        result_groups = payload.get("results")
        rows = []
        if isinstance(result_groups, dict):
            for group_name in ("web", "news"):
                group = result_groups.get(group_name, [])
                if isinstance(group, list):
                    rows.extend(group)
    else:
        web = payload.get("web")
        rows = web.get("results", []) if isinstance(web, dict) else []
    if not isinstance(rows, list):
        return [], 0
    found = []
    for row in rows:
        if not isinstance(row, dict):
            continue
        url = canonical_url(row.get("url"))
        title = normalized_text(row.get("title"))[:300]
        description = normalized_text(row.get("description"))
        if not description and provider == "you":
            snippets = row.get("snippets", [])
            if isinstance(snippets, list):
                description = normalized_text(" ".join(str(item) for item in snippets))
        if not url or not title:
            continue
        score, reasons, topics = score_result(title, description, url, years, config)
        if score < int(config.get("minimum_score", DEFAULT_MINIMUM_SCORE)):
            continue
        found.append({
            "id": candidate_id(url),
            "name": title,
            "url": url,
            "domain": domain_for(url),
            "description": description[:1200],
            "topics": topics,
            "score": score,
            "reasons": reasons,
            "queries": [query],
            "status": "needs_review",
            "last_seen_at": now,
        })
    return found, len(rows)


def merge_candidates(previous, found, now, max_candidates=250):
    """Merge new results while preserving any owner's review status."""
    existing = previous if isinstance(previous, list) else []
    by_url = {}
    for item in existing:
        if not isinstance(item, dict):
            continue
        url = canonical_url(item.get("url"))
        if url:
            saved = deepcopy(item)
            saved["url"] = url
            saved.setdefault("id", candidate_id(url))
            saved.setdefault("status", "needs_review")
            saved.setdefault("first_seen_at", saved.get("last_seen_at") or now)
            saved.setdefault("queries", [])
            by_url[url] = saved
    for item in found:
        url = canonical_url(item.get("url"))
        if not url:
            continue
        item = deepcopy(item)
        item["url"] = url
        old = by_url.get(url)
        if old:
            old_status = old.get("status", "needs_review")
            old_queries = set(old.get("queries", []))
            old_queries.update(item.get("queries", []))
            old.update({key: value for key, value in item.items() if key not in {"status", "queries"}})
            old["status"] = old_status
            old["queries"] = sorted(old_queries)
            old["first_seen_at"] = old.get("first_seen_at") or now
            try:
                seen_count = int(old.get("seen_count", 0))
            except (TypeError, ValueError):
                seen_count = 0
            old["seen_count"] = seen_count + 1
        else:
            item["first_seen_at"] = now
            item["seen_count"] = 1
            by_url[url] = item
    candidates = list(by_url.values())
    candidates.sort(key=lambda item: (
        item.get("status") not in {"accepted", "dismissed"},
        -int(item.get("score", 0)),
        item.get("last_seen_at", ""),
        item.get("name", "").casefold(),
    ))
    reviewed = [item for item in candidates if item.get("status") in {"accepted", "dismissed"}]
    pending = [item for item in candidates if item.get("status") not in {"accepted", "dismissed"}]
    return reviewed + pending[:max(0, max_candidates - len(reviewed))]


def expanded_queries(config, now):
    year = datetime.fromisoformat(now.replace("Z", "+00:00")).year
    years_ahead = max(0, int(config.get("years_ahead", 2)))
    years = list(range(year, year + years_ahead + 1))
    queries = []
    for template in config.get("queries", []):
        for target_year in years:
            queries.append((str(template).format(year=target_year), target_year))
    return queries, years


def fetch_search(endpoint, token, query, count, country, search_lang, timeout):
    params = urlencode({"q": query, "count": count, "country": country, "search_lang": search_lang})
    request = Request(
        f"{endpoint}?{params}",
        headers={"Accept": "application/json", "User-Agent": USER_AGENT,
                 "X-Subscription-Token": token},
    )
    with urlopen(request, timeout=timeout) as response:
        raw = response.read(MAX_RESPONSE_BYTES + 1)
        if len(raw) > MAX_RESPONSE_BYTES:
            raise ValueError("Search response exceeds the 4 MB limit.")
        return json.loads(raw.decode(response.headers.get_content_charset() or "utf-8", errors="replace"))


def fetch_you_search(endpoint, token, query, count, country, search_lang, timeout):
    payload = json.dumps({
        "query": query,
        "count": count,
        "country": country,
        "language": search_lang,
    }).encode("utf-8")
    request = Request(
        endpoint,
        data=payload,
        method="POST",
        headers={"Accept": "application/json", "Content-Type": "application/json",
                 "User-Agent": USER_AGENT, "X-API-Key": token},
    )
    with urlopen(request, timeout=timeout) as response:
        raw = response.read(MAX_RESPONSE_BYTES + 1)
        if len(raw) > MAX_RESPONSE_BYTES:
            raise ValueError("Search response exceeds the 4 MB limit.")
        return json.loads(raw.decode(response.headers.get_content_charset() or "utf-8", errors="replace"))


def validate_endpoint(endpoint, provider="brave"):
    parsed = urlsplit(str(endpoint))
    allowed_host = "ydc-index.io" if provider == "you" else "api.search.brave.com"
    if parsed.scheme != "https" or parsed.hostname != allowed_host:
        raise ValueError(f"Discovery endpoint must be the official {provider} Search API host.")
    return endpoint


def discover(config, token, previous, now, timeout=30, fetcher=None):
    """Run configured searches.  ``fetcher`` is injectable for deterministic tests."""
    queries, years = expanded_queries(config, now)
    found, result_count, errors = [], 0, []
    provider = str(config.get("provider", "brave")).casefold()
    if provider not in {"brave", "you"}:
        raise ValueError("Discovery provider must be 'brave' or 'you'.")
    default_endpoint = DEFAULT_YOU_ENDPOINT if provider == "you" else DEFAULT_ENDPOINT
    endpoint = validate_endpoint(config.get("endpoint", default_endpoint), provider)
    count = max(1, min(int(config.get("results_per_query", 10)), 20))
    selected_fetcher = fetcher or (fetch_you_search if provider == "you" else fetch_search)
    for index, (query, _) in enumerate(queries):
        try:
            payload = selected_fetcher(endpoint, token, query, count, config.get("country", "US"),
                                       config.get("search_lang", "en"), timeout)
            rows, total = parse_search_response(payload, query, now, years, config, provider)
            found.extend(rows)
            result_count += total
        except (HTTPError, URLError, OSError, ValueError, TypeError, json.JSONDecodeError) as exc:
            errors.append(f"query {index + 1}: {str(exc)[:240]}")
        if index + 1 < len(queries):
            time.sleep(float(config.get("request_delay_seconds", 0.15)))
    merged = merge_candidates(previous.get("candidates", []) if isinstance(previous, dict) else [], found, now,
                              max_candidates=int(config.get("max_candidates", 250)))
    metadata = {
        "provider": provider,
        "last_run_at": now,
        "last_success_at": now if result_count else (previous.get("metadata", {}).get("last_success_at") if isinstance(previous, dict) else None),
        "query_count": len(queries),
        "result_count": result_count,
        "candidate_count": len(merged),
        "error_count": len(errors),
        "errors": errors,
        "note": "Search results are leads for manual verification; they are not official catalogue entries.",
    }
    return {"schema_version": 1, "metadata": metadata, "candidates": merged}


def read_json(path, fallback):
    try:
        return json.loads(Path(path).read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return fallback


def write_json(path, value):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(path)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--config", default=DEFAULT_CONFIG)
    parser.add_argument("--output", default=DEFAULT_OUTPUT)
    parser.add_argument("--api-key-env", default=None,
                        help="Environment variable containing the provider key (defaults to provider-specific name).")
    parser.add_argument("--timeout", type=int, default=30)
    parser.add_argument("--dry-run", action="store_true", help="Search and report without writing the candidate file.")
    args = parser.parse_args()
    config = read_json(args.config, {})
    provider = str(config.get("provider", "brave")).casefold()
    default_api_key_env = "YOU_API_KEY" if provider == "you" else "BRAVE_SEARCH_API_KEY"
    api_key_env = args.api_key_env or default_api_key_env
    token = os.environ.get(api_key_env, "").strip()
    if not token:
        print(f"{api_key_env} is not set; web discovery skipped. Add it as a secret to enable daily searches.")
        return 0
    try:
        if config.get("schema_version") != 1:
            raise ValueError("Discovery config schema_version must be 1.")
        previous = read_json(args.output, {"schema_version": 1, "metadata": {}, "candidates": []})
        now = datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")
        result = discover(config, token, previous, now, timeout=max(1, min(args.timeout, 60)))
        if not args.dry_run:
            write_json(args.output, result)
        metadata = result["metadata"]
        print(f"Ran {metadata['query_count']} web searches; received {metadata['result_count']} results; "
              f"retained {metadata['candidate_count']} review candidates; {metadata['error_count']} query errors.")
        if metadata["errors"]:
            print("Some search queries failed; retained previous candidates and recorded the error count.", file=sys.stderr)
        if args.dry_run:
            print("Dry run: no files written.")
        return 0
    except (OSError, KeyError, TypeError, ValueError, json.JSONDecodeError) as exc:
        print(f"Conference discovery failed: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
