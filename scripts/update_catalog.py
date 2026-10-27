#!/usr/bin/env python3
"""Check registered official sources and conservatively update supported facts.

This is a source monitor, not an unrestricted conference discovery agent. A changed
page is not evidence that its dates changed. Failed fetches never erase facts.
"""

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from copy import deepcopy
from datetime import date, datetime, timezone
import hashlib
from html.parser import HTMLParser
from http.client import HTTPException
import json
from pathlib import Path
import re
import sys
import threading
from urllib.error import HTTPError, URLError
from urllib.parse import urldefrag, urlparse
from urllib.request import Request, urlopen

try:
    from validate_catalog import validate_catalog
except ModuleNotFoundError:
    from scripts.validate_catalog import validate_catalog

MAX_BYTES = 4 * 1024 * 1024
MONTHS = {name.lower(): number for number, name in enumerate(
    ("", "January", "February", "March", "April", "May", "June", "July",
     "August", "September", "October", "November", "December")) if name}
ENGLISH_DATE = r"(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}"
USER_AGENT = "ConferenceReminder/1.0 (+https://github.com/vickie02736/conference-reminder)"


class MainContentParser(HTMLParser):
    """Prefer main/article content; omit common navigation and script noise."""

    VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}
    SKIP = {"script", "style", "noscript", "head", "nav", "footer", "header", "svg"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.all_text = []
        self.main_text = []
        self.jsonld = []
        self.ld_parts = None
        self.ld_depth = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "script" and attrs.get("type", "").split(";")[0].lower() == "application/ld+json":
            self.ld_parts = []
            self.ld_depth = len(self.stack)
        if tag not in self.VOID:
            parent_skip = self.stack[-1][1] if self.stack else False
            skip = parent_skip or tag in self.SKIP
            parent_main = self.stack[-1][2] if self.stack else False
            main = parent_main or tag in {"main", "article"} or attrs.get("role") == "main"
            self.stack.append((tag, skip, main))

    def handle_startendtag(self, tag, attrs):
        pass

    def handle_endtag(self, tag):
        if tag == "script" and self.ld_parts is not None:
            try:
                self.jsonld.append(json.loads("".join(self.ld_parts)))
            except (ValueError, TypeError):
                pass
            self.ld_parts = None
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        if self.ld_parts is not None:
            self.ld_parts.append(data)
        if self.stack and self.stack[-1][1]:
            return
        text = re.sub(r"\s+", " ", data).strip()
        if text:
            self.all_text.append(text)
            if self.stack and self.stack[-1][2]:
                self.main_text.append(text)

    def result(self):
        return "\n".join(self.main_text or self.all_text), self.jsonld


def parse_html(raw):
    parser = MainContentParser()
    parser.feed(raw)
    return parser.result()


def fingerprint(text):
    return hashlib.sha256(re.sub(r"\s+", " ", text).strip().encode("utf-8")).hexdigest()


def canonical_url(value):
    return urldefrag(value)[0].rstrip("/")


def english_date(value, expected_year):
    match = re.fullmatch(r"([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})", value.strip())
    if not match or match[1].lower() not in MONTHS or int(match[3]) != expected_year:
        raise ValueError("Date is missing, ambiguous, or outside the configured conference year.")
    return date(int(match[3]), MONTHS[match[1].lower()], int(match[2])).isoformat()


def labelled_date(text, label, year):
    pattern = re.escape(label) + r"\s*:?\s*(?:Until\s+)?(" + ENGLISH_DATE + r")"
    values = {english_date(m, year) for m in re.findall(pattern, text, flags=re.I)}
    if len(values) != 1:
        raise ValueError(f"Expected one unambiguous date immediately after '{label}'.")
    return values.pop()


def empty_observation():
    return {"facts": {}, "milestones": [], "status_parts": {}, "verified": False, "review": [],
            "pause_reminders": False, "pause_reason": None}


def known_adapter(text, config):
    result = empty_observation()
    year = config["expected_year"]
    parser = config["parser"]
    try:
        if parser == "euromof_abstracts":
            value = labelled_date(text, "Submission deadline", year)
            result["milestones"].append({"kind": "abstract", "label": "Abstract submission", "date": value,
                                         "evidence": f"Submission deadline: {value}."})
            if re.search(r"Guidelines in preparation", text, re.I):
                result["status_parts"]["submission"] = "Abstract deadline announced; submission platform not yet open"
            elif re.search(r"(?:Abstract submission is open|Abstract submissions are open)", text, re.I):
                result["status_parts"]["submission"] = "Abstract submission is open"
            else:
                result["review"].append("Submission platform status is no longer recognised; verify it before changing the status.")
        elif parser == "euromof_registration":
            for label, kind, title in (("Early bird", "early_registration", "Early registration"),
                                       ("Regular fee", "registration", "Regular registration rate")):
                value = labelled_date(text, label, year)
                result["milestones"].append({"kind": kind, "label": title, "date": value,
                                             "evidence": f"{label}: until {value}."})
            if re.search(r"online registration platform will open shortly", text, re.I):
                result["status_parts"]["registration"] = "Registration platform not yet open"
            elif re.search(r"(?:Online registration is open|Registration is now open)", text, re.I):
                result["status_parts"]["registration"] = "Registration is open"
            else:
                result["review"].append("Registration platform status is no longer recognised; verify it before changing the status.")
        elif parser == "ai4mat_schedule":
            pattern = r"workshop is scheduled to be on\s+(?:[A-Za-z]+,\s+)?(" + ENGLISH_DATE + r")"
            matches = {english_date(x, year) for x in re.findall(pattern, text, re.I)}
            if len(matches) != 1 or not re.search(r"NeurIPS\s+2026", text, re.I):
                raise ValueError("The authoritative AI4Mat schedule sentence is missing or ambiguous.")
            value = matches.pop()
            result["facts"] = {"start": value, "end": value}
            result["evidence"] = f"Authoritative schedule: workshop on {value}, during NeurIPS 2026."
        else:
            raise ValueError(f"Unknown configured parser: {parser}.")
        result["verified"] = True
    except (KeyError, ValueError) as exc:
        # Do not partially apply a malformed page or a changed template.
        result = empty_observation()
        result["review"].append(str(exc))
    return result


def walk_jsonld(value):
    if isinstance(value, list):
        for child in value:
            yield from walk_jsonld(child)
    elif isinstance(value, dict):
        yield value
        if "@graph" in value:
            yield from walk_jsonld(value["@graph"])


def normalized_name(value):
    return "".join(c for c in str(value).casefold() if c.isalnum())


def jsonld_observation(documents, event, source):
    result = empty_observation()
    candidates = []
    expected_years = set(re.findall(r"\b20\d{2}\b", event["name"]))
    for document in documents:
        for item in walk_jsonld(document):
            types = item.get("@type", [])
            types = types if isinstance(types, list) else [types]
            if not any(str(t).split("/")[-1] == "Event" for t in types):
                continue
            if normalized_name(item.get("name", "")) != normalized_name(event["name"]):
                continue
            identity = item.get("url") or item.get("@id")
            if identity and (not isinstance(identity, str) or canonical_url(identity) not in
                             {canonical_url(s) for s in event["sources"] + [event["url"]]}):
                continue
            if canonical_url(source) != canonical_url(event["url"]) and not identity:
                continue
            event_status = str(item.get("eventStatus", "")).split("/")[-1]
            if event_status in {"EventCancelled", "EventPostponed", "EventRescheduled"}:
                reason = {
                    "EventCancelled": "Official structured data reports that this event is cancelled.",
                    "EventPostponed": "Official structured data reports that this event is postponed.",
                    "EventRescheduled": "Official structured data reports that this event is rescheduled.",
                }[event_status]
                result["pause_reminders"] = True
                result["pause_reason"] = reason + " Dates and email reminders are paused until manual verification."
                result["review"].append(result["pause_reason"])
                # Cancellation notices need not retain a valid old start/end date.
                # Identity and name have already matched the registered conference.
                continue
            try:
                start_raw, end_raw = item.get("startDate"), item.get("endDate")
                if not isinstance(start_raw, str) or not isinstance(end_raw, str):
                    continue
                # ISO date or ISO datetime only; never infer locale, year, or time zone.
                iso_pattern = r"\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?)?"
                if not re.fullmatch(iso_pattern, start_raw) or not re.fullmatch(iso_pattern, end_raw):
                    continue
                start, end = date.fromisoformat(start_raw[:10]), date.fromisoformat(end_raw[:10])
                if expected_years and str(start.year) not in expected_years:
                    continue
                if end < start or (end - start).days > 60:
                    continue
            except (TypeError, ValueError):
                continue
            candidates.append((start.isoformat(), end.isoformat()))
    if result["pause_reminders"]:
        # A stale active Event on the same page cannot outweigh an explicit notice.
        return result
    distinct = set(candidates)
    if len(distinct) == 1:
        start, end = distinct.pop()
        result["facts"] = {"start": start, "end": end}
        result["verified"] = True
        result["evidence"] = f"Official JSON-LD Event with matching name and identity: {start} to {end}."
    elif len(distinct) > 1:
        result["review"].append("Matching structured events contain conflicting conference dates.")
    return result


def fetch_sources(urls, workers=6, timeout=20):
    host_locks = {urlparse(url).netloc: threading.Semaphore(2) for url in urls}

    def fetch(url):
        with host_locks[urlparse(url).netloc]:
            try:
                request = Request(url, headers={"User-Agent": USER_AGENT, "Accept": "text/html,application/ld+json,application/pdf;q=0.5,*/*;q=0.1"})
                with urlopen(request, timeout=timeout) as response:
                    raw = response.read(MAX_BYTES + 1)
                    if len(raw) > MAX_BYTES:
                        raise ValueError("Official source exceeds the 4 MB fetch limit.")
                    content_type = response.headers.get_content_type()
                    if content_type in {"text/html", "application/xhtml+xml"}:
                        html = raw.decode(response.headers.get_content_charset() or "utf-8", errors="replace")
                        text, documents = parse_html(html)
                        if not text.strip():
                            raise ValueError("Official source returned no readable page content.")
                        if len(text) < 1500 and re.search(r"(?:access denied|verify you are human|checking your browser|just a moment\.\.\.)", text, re.I):
                            raise ValueError("Official source returned an access challenge, not conference content.")
                        return {"ok": True, "hash": fingerprint(text), "text": text, "jsonld": documents,
                                "content_type": content_type, "http_status": response.status}
                    return {"ok": True, "hash": hashlib.sha256(raw).hexdigest(), "text": "", "jsonld": [],
                            "content_type": content_type, "http_status": response.status}
            except (HTTPError, URLError, HTTPException, OSError, ValueError, LookupError) as exc:
                return {"ok": False, "message": str(exc)[:400]}

    results = {}
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {pool.submit(fetch, url): url for url in urls}
        for future in as_completed(futures):
            results[futures[future]] = future.result()
    return results


def update_catalog(catalog, state, adapter_config, fetched, now):
    """Pure merge function, accepting fixture fetches for deterministic tests."""
    result, next_state = deepcopy(catalog), deepcopy(state)
    next_state.setdefault("schema_version", 1)
    states = next_state.setdefault("sources", {})
    adapters = {(item["event_id"], canonical_url(item["url"])): item
                for item in adapter_config.get("adapters", [])}
    protected = {item["event_id"]: set(item["kinds"]) for item in adapter_config.get("protected_fields", [])}
    old_states = deepcopy(states)
    for url, fetch in fetched.items():
        record = states.setdefault(url, {})
        record["last_checked_at"] = now
        if fetch["ok"]:
            changed = record.get("hash") != fetch["hash"]
            record.update({"status": "checked", "hash": fetch["hash"], "last_success_at": now,
                           "content_type": fetch.get("content_type", "text/html"), "message": None})
            if changed:
                record["changed_at"] = now
        else:
            record.update({"status": "failed", "message": fetch.get("message", "Fetch failed.")})
    updates = []

    for event in result.get("events", []) + result.get("watchlist", []):
        reviews, failures, verified = [], [], False
        status_parts = {}
        deadline_changed = False
        facts_by_field = {}
        observations = []
        urls = list(dict.fromkeys(event.get("sources", []) + [event["url"]]))
        for url in urls:
            fetch = fetched.get(url, {"ok": False, "message": "Source was not checked."})
            if not fetch["ok"]:
                failures.append(f"{url}: {fetch.get('message', 'Fetch failed.')}")
                continue
            adapter = adapters.get((event["id"], canonical_url(url)))
            structured = jsonld_observation(fetch.get("jsonld", []), event, url)
            observation = known_adapter(fetch.get("text", ""), adapter) if adapter else structured
            if adapter and structured["pause_reminders"]:
                # A source-specific date adapter must not hide a cancellation
                # notice embedded in the same official page's structured data.
                observation["pause_reminders"] = True
                observation["pause_reason"] = structured["pause_reason"]
                observation["review"].extend(structured["review"])
            previous = old_states.get(url, {})
            prior_review = previous.get("checks", {}).get(event["id"], {}).get("review_required", False)
            changed = previous.get("hash") != fetch["hash"]
            pending = bool(observation["review"]) or ((changed or prior_review) and not observation["verified"])
            message = "; ".join(observation["review"])
            if pending and not message:
                message = "Initial source baseline requires verification." if not previous.get("hash") else "Official content changed; no trusted adapter can verify all affected facts."
            states[url].setdefault("checks", {})[event["id"]] = {"review_required": pending, "message": message or None}
            if pending:
                reviews.append(f"{url}: {message}")
            verified = verified or observation["verified"]
            status_parts.update(observation["status_parts"])
            observations.append((url, observation))
            for field, value in observation["facts"].items():
                authoritative = bool(adapter and field in adapter.get("authoritative_fields", []))
                facts_by_field.setdefault(field, []).append((value, url, observation.get("evidence", ""), authoritative))

        def record_change(field, previous, value, source, evidence):
            if previous != value:
                updates.append({"at": now, "event_id": event["id"], "event_name": event["name"],
                                "field": field, "previous": previous, "value": value,
                                "source": source, "evidence": evidence})

        notices = [(source, observation) for source, observation in observations if observation["pause_reminders"]]
        if notices and not event.get("reminders_paused"):
            source, notice = notices[0]
            record_change("reminders_paused", event.get("reminders_paused", False), True, source, notice["pause_reason"])
            event["reminders_paused"] = True
            event["reminders_pause_reason"] = notice["pause_reason"]
        paused = event.get("reminders_paused") is True
        if paused:
            # Removing the notice from a later fetch is not a manual confirmation
            # that the event has resumed. An owner must explicitly clear this flag.
            reviews.append(event.get("reminders_pause_reason") or "Dates and email reminders remain paused pending manual verification.")
            facts_by_field = {}

        resolved = {}
        for field, candidates in facts_by_field.items():
            if any(item[3] for item in candidates):
                candidates = [item for item in candidates if item[3]]
            if len({item[0] for item in candidates}) != 1:
                reviews.append(f"Official sources disagree about {field}; existing value retained.")
            else:
                resolved[field] = candidates[0][:3]
        new_start = resolved.get("start", (event.get("start"),))[0]
        new_end = resolved.get("end", (event.get("end"),))[0]
        if new_start and new_end and new_end < new_start:
            reviews.append("Proposed conference end precedes its start; existing dates retained.")
            resolved = {}
        for field, (value, source, evidence) in resolved.items():
            record_change(field, event.get(field), value, source, evidence)
            event[field] = value
        if resolved and event.get("start") and event.get("end"):
            event["date"] = event["start"] if event["start"] == event["end"] else f"{event['start']} — {event['end']}"

        milestones = event.setdefault("milestones", [])
        for source, observation in observations:
            if paused:
                continue
            proposals = list(observation["milestones"])
            if "start" in resolved and observation["facts"].get("start") == resolved["start"][0]:
                proposals.append({"kind": "conference_start", "label": "Conference starts", "date": resolved["start"][0],
                                  "evidence": observation.get("evidence", "")})
            for proposal in proposals:
                kind = proposal["kind"]
                matches = [node for node in milestones if node["kind"] == kind]
                if kind in protected.get(event["id"], set()) or any(node["status"] == "conflict" for node in matches):
                    reviews.append(f"{kind}: conflicting milestone requires human verification; no automatic change applied.")
                    continue
                if len(matches) > 1:
                    matches = [node for node in matches if canonical_url(node.get("source") or "") == canonical_url(source)]
                if len(matches) > 1:
                    reviews.append(f"{kind}: multiple matching milestones require human verification.")
                    continue
                existing = matches[0] if matches else None
                node = deepcopy(existing) if existing else {"id": f"{event['id']}-{kind}", "kind": kind, "label": proposal["label"], "version": 1}
                # A date-only observation does not establish or preserve an exact cutoff time.
                if existing and existing.get("date") == proposal["date"] and existing.get("precision") == "datetime":
                    # Reconfirming the date must not discard an independently verified time.
                    pass
                else:
                    node.update({"time": None, "timezone": None, "precision": "date"})
                node.update({"date": proposal["date"], "status": "verified", "source": source, "evidence": proposal["evidence"]})
                changed_schedule = existing is None or any(existing.get(key) != node.get(key)
                    for key in ("date", "time", "timezone", "precision", "status"))
                if existing and changed_schedule:
                    node["version"] = existing["version"] + 1
                if existing:
                    milestones[milestones.index(existing)] = node
                else:
                    # Defensive guard against an unexpected ID already used by another kind.
                    if any(m["id"] == node["id"] for m in milestones):
                        reviews.append(f"{kind}: generated milestone ID already exists.")
                        continue
                    milestones.append(node)
                if changed_schedule:
                    record_change(f"milestones.{node['id']}", existing, node, source, proposal["evidence"])
                    deadline_changed = deadline_changed or kind != "conference_start"

        # Only this known event has a complete, narrowly scoped platform-status adapter.
        if not paused and event["id"] == "euromof2027" and set(status_parts) == {"submission", "registration"}:
            status = ". ".join(status_parts[key] for key in ("submission", "registration")) + "."
            record_change("status", event.get("status"), status, event["url"], "Explicit submission and registration platform statements on the official pages.")
            event["status"] = status
        if deadline_changed:
            event.setdefault("deadline_notes", event.get("deadline", ""))
            event["deadline"] = "; ".join(f"{node['label']}: {node.get('date') or 'Date TBA'}" +
                                          (" (conflicting official dates)" if node["status"] == "conflict" else "")
                                          for node in milestones if node["kind"] != "conference_start")
        check = event.setdefault("check", {})
        check["last_checked_at"] = now
        if reviews:
            check["status"] = "review_required"
        elif failures:
            check["status"] = "failed"
        else:
            check["status"] = "checked"
        check["message"] = " | ".join(reviews + failures)[:3000] or None
        if verified and not reviews and not failures:
            check["last_verified_at"] = now
            event["verified_on"] = now[:10]

    result["metadata"]["last_checked_at"] = now
    if updates:
        result["metadata"]["last_updated_at"] = now
    result["updates"] = (list(reversed(updates)) + result.get("updates", []))[:200]
    next_state["last_checked_at"] = now
    return result, next_state, updates


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(path)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--catalog", default="data/conferences.json")
    parser.add_argument("--state", default="data/source-checks.json")
    parser.add_argument("--adapters", default="data/source-adapters.json")
    parser.add_argument("--workers", type=int, default=6)
    parser.add_argument("--timeout", type=int, default=20)
    parser.add_argument("--dry-run", action="store_true", help="Check and report without writing any files.")
    args = parser.parse_args()
    try:
        catalog = json.loads(Path(args.catalog).read_text(encoding="utf-8"))
        adapter_config = json.loads(Path(args.adapters).read_text(encoding="utf-8"))
        state_path = Path(args.state)
        state = json.loads(state_path.read_text(encoding="utf-8")) if state_path.exists() else {"schema_version": 1, "sources": {}}
        errors = validate_catalog(catalog)
        if errors:
            raise ValueError("\n".join(errors))
        urls = sorted({url for event in catalog["events"] + catalog["watchlist"] for url in event["sources"] + [event["url"]]})
        fetched = fetch_sources(urls, workers=max(1, min(args.workers, 12)), timeout=max(1, min(args.timeout, 60)))
        now = datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")
        updated, next_state, updates = update_catalog(catalog, state, adapter_config, fetched, now)
        errors = validate_catalog(updated)
        if errors:
            raise ValueError("Refusing to publish invalid updated data:\n" + "\n".join(errors))
        if not args.dry_run:
            write_json(Path(args.catalog), updated)
            write_json(state_path, next_state)
        failures = sum(not item["ok"] for item in fetched.values())
        reviews = sum(event["check"]["status"] == "review_required" for event in updated["events"] + updated["watchlist"])
        print(f"Checked {len(urls)} official sources; {failures} fetch failures; {len(updates)} supported fact changes; {reviews} entries need review.")
        if failures:
            print("Fetch failures retained previous facts and are visible in source-checks.json.")
        if args.dry_run:
            print("Dry run: no files written.")
        return 0
    except (OSError, KeyError, TypeError, ValueError, json.JSONDecodeError) as exc:
        print(f"Catalogue check failed: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
