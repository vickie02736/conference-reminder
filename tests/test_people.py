from copy import deepcopy
from email.message import Message
from io import BytesIO
import unittest
from unittest.mock import patch

from scripts.validate_catalog import validate_people
from scripts.update_catalog import fetch_sources, update_catalog


class PeopleValidationTests(unittest.TestCase):
    def test_anubis_http_200_is_failure_and_preserves_trusted_baseline(self):
        url = "https://example.org/workshop"

        class Response(BytesIO):
            status = 200

            def __init__(self):
                super().__init__(b"<main>Making sure you're not a bot!<p>Anubis could not load its JavaScript.</p></main>")
                self.headers = Message()
                self.headers["Content-Type"] = "text/html; charset=utf-8"

        with patch("scripts.update_catalog.urlopen", side_effect=lambda *args, **kwargs: Response()):
            fetched = fetch_sources([url], workers=1)
        self.assertFalse(fetched[url]["ok"])
        self.assertNotIn("hash", fetched[url])
        self.assertIn("access challenge", fetched[url]["message"])
        row = {"id": "example", "name": "Workshop", "url": url, "sources": [url],
               "start": "2027-05-23", "end": "2027-05-26", "milestones": [], "check": {}}
        catalog = {"metadata": {}, "events": [row], "watchlist": [], "updates": []}
        state = {"sources": {url: {"hash": "trusted-baseline", "status": "checked"}}}
        changed, next_state, updates = update_catalog(catalog, state, {}, fetched, "2026-11-19T08:55:00Z")
        self.assertEqual(next_state["sources"][url]["hash"], "trusted-baseline")
        self.assertEqual(changed["events"][0]["start"], row["start"])
        self.assertEqual(changed["events"][0]["end"], row["end"])
        self.assertEqual(updates, [])

    def example(self):
        return {"organizers": [], "committee": [], "speakers": [
            {"name": "Example Researcher", "role": "Invited speaker", "source": "https://example.org/2027/speakers"}
        ], "participants": [], "checked_on": "2026-10-28", "status": "published", "note": "Selected announced speakers.",
            "sources": ["https://example.org/2027/speakers"]}

    def test_sourced_people_and_explicit_gaps_are_valid(self):
        people = self.example()
        self.assertEqual(validate_people(people, "example"), [])
        people["speakers"] = []
        people["status"] = "unavailable"
        self.assertEqual(validate_people(people, "example"), [])

    def test_missing_evidence_roles_or_review_dates_are_rejected(self):
        for field, value in (("source", "javascript:alert(1)"), ("role", ""), ("name", None)):
            with self.subTest(field=field):
                people = deepcopy(self.example())
                people["speakers"][0][field] = value
                self.assertTrue(validate_people(people, "example"))
        people = self.example()
        people["checked_on"] = "unknown"
        self.assertTrue(validate_people(people, "example"))

    def test_availability_cannot_contradict_published_entries(self):
        people = self.example()
        people["status"] = "unavailable"
        self.assertTrue(validate_people(people, "example"))
        people["status"] = "published"
        people["speakers"] = []
        self.assertTrue(validate_people(people, "example"))

    def test_people_outside_main_are_monitored_without_expanding_date_parsing(self):
        url = "https://example.org/2027/contact"

        class Response(BytesIO):
            status = 200

            def __init__(self, html):
                super().__init__(html.encode())
                self.headers = Message()
                self.headers["Content-Type"] = "text/html; charset=utf-8"

        def fetched(name, monitor_people=True):
            html = f"<main>Contact</main><section><h2>Programme chair</h2><p>{name}</p></section>"
            with patch("scripts.update_catalog.urlopen", side_effect=lambda *args, **kwargs: Response(html)):
                return fetch_sources([url], workers=1, people_urls={url} if monitor_people else set())

        before, after = fetched("Original Chair"), fetched("Replacement Chair")
        self.assertEqual(before[url]["text"], "Contact")
        self.assertEqual(after[url]["text"], "Contact")
        self.assertNotEqual(before[url]["hash"], after[url]["hash"])
        self.assertEqual(fetched("Original Chair", False)[url]["hash"], fetched("Replacement Chair", False)[url]["hash"])
        row = {"id": "example", "name": "Example 2027", "url": url, "sources": [url], "region": "UK",
               "start": "2027-07-01", "end": "2027-07-03", "milestones": [], "check": {}, "people": self.example()}
        catalog = {"metadata": {"schema_version": 1}, "events": [row], "watchlist": [], "updates": []}
        initial, state, _ = update_catalog(catalog, {}, {}, before, "2026-10-28T10:00:00Z")
        changed, _, updates = update_catalog(initial, state, {}, after, "2026-10-29T10:00:00Z")
        self.assertEqual(changed["events"][0]["check"]["status"], "review_required")
        self.assertEqual(changed["events"][0]["people"], row["people"])
        self.assertEqual(changed["events"][0]["start"], row["start"])
        self.assertEqual(updates, [])
