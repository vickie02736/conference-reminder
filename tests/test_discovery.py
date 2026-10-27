import json
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from discover_conferences import (  # noqa: E402
    canonical_url,
    discover,
    merge_candidates,
    parse_search_response,
)


CONFIG = json.loads((ROOT / "data/discovery-config.json").read_text(encoding="utf-8"))
NOW = "2026-10-27T06:17:00Z"


class DiscoveryTests(unittest.TestCase):
    def test_canonical_url_removes_fragments_and_tracking_parameters(self):
        self.assertEqual(
            canonical_url("HTTPS://WWW.Example.org/events/?utm_source=search&id=7#dates"),
            "https://example.org/events?id=7",
        )
        self.assertEqual(canonical_url("mailto:person@example.org"), "")

    def test_search_response_keeps_relevant_results_and_excludes_social_domains(self):
        payload = {
            "web": {"results": [
                {"title": "2027 AI for Materials Conference", "url": "https://example.org/event/", "description": "Call for papers and important dates."},
                {"title": "2027 AI for Materials Conference", "url": "https://www.linkedin.com/events/123", "description": "Conference announcement."},
                {"title": "A random recipe", "url": "https://example.org/recipe", "description": "Dinner ideas."},
            ]}
        }
        candidates, total = parse_search_response(payload, "2027 materials conference", NOW, [2026, 2027, 2028], CONFIG)
        self.assertEqual(total, 3)
        self.assertEqual(len(candidates), 1)
        self.assertEqual(candidates[0]["url"], "https://example.org/event")
        self.assertIn("AI for materials and chemistry", candidates[0]["topics"])
        self.assertEqual(candidates[0]["status"], "needs_review")

    def test_you_search_response_reads_web_and_news_results(self):
        payload = {
            "results": {
                "web": [{
                    "title": "2027 Porous Materials Symposium",
                    "url": "https://example.org/porous-2027",
                    "description": "Important dates and call for papers.",
                }],
                "news": [{
                    "title": "2028 AI Materials Conference",
                    "url": "https://example.org/ai-2028",
                    "snippets": ["Conference registration and abstract submission."],
                }],
            }
        }
        candidates, total = parse_search_response(
            payload, "2027 materials conference", NOW, [2026, 2027, 2028], CONFIG, provider="you"
        )
        self.assertEqual(total, 2)
        self.assertEqual(len(candidates), 2)
        self.assertEqual(candidates[1]["description"], "Conference registration and abstract submission.")

    def test_merge_preserves_manual_status_and_deduplicates_results(self):
        previous = [{
            "id": "web-old", "name": "Old event", "url": "https://example.org/event",
            "status": "dismissed", "first_seen_at": "2026-10-20T06:17:00Z", "seen_count": 2,
        }]
        found = [{
            "id": "web-new", "name": "Updated event", "url": "https://www.example.org/event/?utm_medium=search",
            "description": "New snippet", "score": 9, "queries": ["q"], "status": "needs_review",
            "last_seen_at": NOW,
        }]
        merged = merge_candidates(previous, found, NOW)
        self.assertEqual(len(merged), 1)
        self.assertEqual(merged[0]["status"], "dismissed")
        self.assertEqual(merged[0]["url"], "https://example.org/event")
        self.assertEqual(merged[0]["seen_count"], 3)
        self.assertEqual(merged[0]["description"], "New snippet")

    def test_discover_runs_queries_and_merges_candidates(self):
        config = {**CONFIG, "provider": "brave", "endpoint": "https://api.search.brave.com/res/v1/web/search",
                  "years_ahead": 0, "queries": ["{year} AI conference"], "request_delay_seconds": 0}
        calls = []

        def fake_fetch(endpoint, token, query, count, country, search_lang, timeout):
            calls.append((endpoint, token, query, count, country, search_lang, timeout))
            return {"web": {"results": [{
                "title": "2026 AI for Materials Conference",
                "url": "https://example.org/2026-ai-materials",
                "description": "Conference call for papers and important dates.",
            }]}}

        result = discover(config, "test-token", {"candidates": []}, NOW, fetcher=fake_fetch)
        self.assertEqual(len(calls), 1)
        self.assertEqual(calls[0][1], "test-token")
        self.assertEqual(result["metadata"]["query_count"], 1)
        self.assertEqual(result["metadata"]["result_count"], 1)
        self.assertEqual(result["metadata"]["candidate_count"], 1)
        self.assertEqual(result["candidates"][0]["status"], "needs_review")

    def test_discover_selects_you_response_parser(self):
        config = {**CONFIG, "provider": "you", "endpoint": "https://ydc-index.io/v1/search",
                  "years_ahead": 0, "queries": ["{year} AI conference"], "request_delay_seconds": 0}

        def fake_fetch(endpoint, token, query, count, country, search_lang, timeout):
            self.assertEqual(endpoint, "https://ydc-index.io/v1/search")
            self.assertEqual(token, "test-token")
            return {"results": {"web": [{
                "title": "2026 AI Materials Conference",
                "url": "https://example.org/2026-ai-materials",
                "snippets": ["Conference call for papers and important dates."],
            }]}}

        result = discover(config, "test-token", {"candidates": []}, NOW, fetcher=fake_fetch)
        self.assertEqual(result["metadata"]["provider"], "you")
        self.assertEqual(result["metadata"]["result_count"], 1)
        self.assertEqual(result["candidates"][0]["status"], "needs_review")


if __name__ == "__main__":
    unittest.main()
