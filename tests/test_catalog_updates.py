"""Realistic source-change scenarios; no network or email is used."""

from copy import deepcopy
import json
from pathlib import Path
import unittest

from scripts.update_catalog import fingerprint, known_adapter, parse_html, update_catalog
from scripts.validate_catalog import validate_catalog

FIXTURES = Path(__file__).parent / "fixtures"
NOW = "2026-10-27T12:00:00Z"
ADAPTERS = json.loads((Path(__file__).parents[1] / "data/source-adapters.json").read_text())


def event(event_id="example2027", name="Example 2027", url="https://example.org/2027"):
    return {"id": event_id, "name": name, "url": url, "sources": [url], "region": "UK",
            "start": "2027-06-01", "end": "2027-06-03", "date": "2027-06-01 — 2027-06-03",
            "deadline": "Abstract date not yet announced.", "status": "Upcoming; dates announced.",
            "milestones": [], "check": {"status": "not_checked", "last_checked_at": None,
                                        "last_verified_at": "2026-10-27T00:00:00Z", "message": None}}


def catalog(row):
    return {"metadata": {"schema_version": 1}, "events": [row], "watchlist": [], "updates": []}


def fetched(html):
    text, documents = parse_html(html)
    return {"ok": True, "hash": fingerprint(text), "text": text, "jsonld": documents, "content_type": "text/html"}


def jsonld_html(name="Example 2027", start="2027-06-05", end="2027-06-07", identity="https://example.org/2027"):
    payload = {"@context": "https://schema.org", "@type": "Event", "name": name,
               "url": identity, "startDate": start, "endDate": end}
    return '<html><body><main>Official conference dates.</main><script type="application/ld+json">' + json.dumps(payload) + '</script></body></html>'


class SourceUpdateTests(unittest.TestCase):
    def merge(self, row, fetches, state=None, adapters=None):
        return update_catalog(catalog(row), state or {}, adapters or ADAPTERS, fetches, NOW)

    def test_navigation_and_whitespace_do_not_change_fingerprint(self):
        first = fetched("<nav>Old menu</nav><main><p>Conference 2027</p><p>June 1</p></main><footer>2026</footer>")
        second = fetched("<nav>New menu</nav><main>Conference 2027   June 1</main><footer>2027</footer>")
        self.assertEqual(first["hash"], second["hash"])

    def test_labelled_update_timestamps_do_not_hide_real_deadline_changes(self):
        for before, after in (
            ("Last updated: 2026-10-26T09:10:00Z", "Last updated: 2026-10-27T12:20:00Z"),
            ("Last modified on 26 October 2026 at 09:10 BST", "Last modified on 27 October 2026 at 12:20 GMT"),
            ("Last checked at 09:10 UTC", "Last checked at 12:20 UTC"),
        ):
            with self.subTest(before=before):
                deadline = ". Paper deadline: December 1, 2026 at 17:00 GMT."
                self.assertEqual(fingerprint(before + deadline), fingerprint(after + deadline))
                self.assertNotEqual(fingerprint(after + deadline),
                                    fingerprint(after + deadline.replace("17:00", "12:00")))

    def test_exact_deadline_time_changes_trigger_review_without_guessing_new_times(self):
        row = event()
        for before, after in (
            ("Paper deadline: December 1, 2026 at 17:00 GMT.", "Paper deadline: December 1, 2026 at 12:00 GMT."),
            ("Paper deadline: 2026-12-01T17:00:00Z.", "Paper deadline: 2026-12-01T12:00:00Z."),
            ("Paper deadline: 2026-12-01T17:00:00+01:00.", "Paper deadline: 2026-12-01T17:00:00+02:00."),
        ):
            with self.subTest(before=before):
                first, state, _ = self.merge(row, {row["url"]: fetched("<main>" + before + "</main>")})
                second, _, changes = update_catalog(first, state, ADAPTERS,
                    {row["url"]: fetched("<main>" + after + "</main>")}, "2026-10-28T12:00:00Z")
                actual = second["events"][0]
                self.assertEqual(actual["check"]["status"], "review_required")
                self.assertIn("Official content changed", actual["check"]["message"])
                self.assertEqual(actual["milestones"], row["milestones"])
                self.assertEqual(actual["check"]["last_verified_at"], row["check"]["last_verified_at"])
                self.assertEqual(changes, [])

    def test_generic_first_baseline_records_hash_without_review_or_guessed_dates(self):
        row = event()
        original = deepcopy(row)
        updated, state, changes = self.merge(row, {row["url"]: fetched("<main>June 25, 2027. Book your hotel.</main>")})
        actual = updated["events"][0]
        self.assertEqual(actual["start"], original["start"])
        self.assertEqual(actual["check"]["status"], "checked")
        self.assertEqual(actual["check"]["last_verified_at"], original["check"]["last_verified_at"])
        self.assertEqual(changes, [])
        self.assertFalse(state["sources"][row["url"]]["checks"][row["id"]]["review_required"])
        self.assertEqual(state["sources"][row["url"]]["fingerprint_version"], 2)
        self.assertEqual(row, original, "Merge must not mutate input objects.")

    def test_unadapted_change_stays_pending_until_manually_reviewed(self):
        row = event()
        first_html = fetched("<main>Abstract deadline: December 1, 2026.</main>")
        second_html = fetched("<main>Abstract deadline: November 1, 2026.</main>")
        baseline, state, _ = self.merge(row, {row["url"]: first_html})
        first, state, _ = self.merge(baseline["events"][0], {row["url"]: second_html}, state)
        original_message = first["events"][0]["check"]["message"]
        for day in (28, 29):
            first, state, changes = update_catalog(first, state, ADAPTERS,
                {row["url"]: second_html}, f"2026-10-{day}T12:00:00Z")
            self.assertEqual(first["events"][0]["check"]["status"], "review_required")
            self.assertEqual(first["events"][0]["check"]["message"], original_message)
            self.assertEqual(first["events"][0]["deadline"], row["deadline"])
            self.assertEqual(changes, [])
        # A human can acknowledge the review after checking/updating the facts.
        del state["sources"][row["url"]]["checks"][row["id"]]
        cleared, state, _ = update_catalog(first, state, ADAPTERS,
            {row["url"]: second_html}, "2026-10-30T12:00:00Z")
        self.assertEqual(cleared["events"][0]["check"]["status"], "checked")
        self.assertFalse(state["sources"][row["url"]]["checks"][row["id"]]["review_required"])

    def test_date_only_jsonld_does_not_verify_a_changed_deadline_clock(self):
        row = event()
        before = fetched(jsonld_html() + "<main>Paper deadline: December 1, 2026 at 17:00 GMT.</main>")
        after = fetched(jsonld_html() + "<main>Paper deadline: December 1, 2026 at 12:00 GMT.</main>")
        updated, state, _ = self.merge(row, {row["url"]: before})
        verified_at = updated["events"][0]["check"]["last_verified_at"]
        for day in (28, 29, 30):
            updated, state, changes = update_catalog(updated, state, ADAPTERS,
                {row["url"]: after}, f"2026-10-{day}T12:00:00Z")
            actual = updated["events"][0]
            self.assertEqual(actual["check"]["status"], "review_required")
            self.assertEqual(actual["check"]["last_verified_at"], verified_at)
            self.assertEqual(actual["start"], "2027-06-05")
            self.assertEqual(changes, [])
            self.assertTrue(state["sources"][row["url"]]["checks"][row["id"]]["review_required"])

    def test_dedicated_adapter_updates_scoped_fields_without_verifying_other_changes(self):
        row = event("euromof2027", "EuroMOF 2027", "https://euromof2027.com/abstracts.html")
        html = (FIXTURES / "euromof-abstracts.html").read_text()
        updated, state, _ = self.merge(row, {row["url"]: fetched(html)})
        changed = fetched(html.replace("February 1, 2027", "February 2, 2027") +
                          "<main>Conference starts at 14:00 GMT.</main>")
        verified_at = updated["events"][0]["check"]["last_verified_at"]
        for day in (28, 29):
            updated, state, changes = update_catalog(updated, state, ADAPTERS,
                {row["url"]: changed}, f"2026-10-{day}T12:00:00Z")
            actual = updated["events"][0]
            self.assertEqual(next(m for m in actual["milestones"] if m["kind"] == "abstract")["date"], "2027-02-02")
            self.assertEqual(actual["check"]["status"], "review_required")
            self.assertEqual(actual["check"]["last_verified_at"], verified_at)
            if day == 28:
                self.assertTrue(any(change["field"].startswith("milestones.") for change in changes))
            else:
                self.assertEqual(changes, [])

    def test_trusted_parser_can_resolve_its_own_error_on_stable_content(self):
        row = event()
        page = fetched(jsonld_html())
        state = {"sources": {row["url"]: {"hash": page["hash"], "fingerprint_version": 2,
            "checks": {row["id"]: {"review_required": True, "message": "Parser could not resolve the date.", "reason": "observation"}}}}}
        updated, state, _ = self.merge(row, {row["url"]: page}, state)
        self.assertEqual(updated["events"][0]["start"], "2027-06-05")
        self.assertEqual(updated["events"][0]["check"]["status"], "checked")
        self.assertFalse(state["sources"][row["url"]]["checks"][row["id"]]["review_required"])

    def test_legacy_fingerprint_upgrade_needs_persistent_time_review(self):
        row = event()
        state = {"sources": {row["url"]: {"hash": "legacy-hash-with-clock-times-removed"}}}
        fetches = {row["url"]: fetched(jsonld_html() + "<main>Conference starts at 14:00 GMT.</main>")}
        updated, state, _ = self.merge(row, fetches, state)
        for day in (28, 29):
            self.assertEqual(updated["events"][0]["check"]["status"], "review_required")
            self.assertIn("fingerprint upgraded", updated["events"][0]["check"]["message"])
            self.assertIn("previously ignored clock times", updated["events"][0]["check"]["message"])
            self.assertEqual(state["sources"][row["url"]]["fingerprint_version"], 2)
            updated, state, _ = update_catalog(updated, state, ADAPTERS, fetches,
                                               f"2026-10-{day}T12:00:00Z")
        # Verifying date-only JSON-LD does not verify the previously ignored clock.
        self.assertEqual(updated["events"][0]["check"]["status"], "review_required")
        state["sources"][row["url"]]["checks"][row["id"]]["review_required"] = False
        cleared, state, _ = update_catalog(updated, state, ADAPTERS, fetches, "2026-10-30T12:00:00Z")
        self.assertEqual(cleared["events"][0]["check"]["status"], "checked")

    def test_real_review_is_not_cleared_by_an_unchanged_page(self):
        row = event()
        fetches = {row["url"]: fetched(jsonld_html() + jsonld_html(start="2027-07-05", end="2027-07-07"))}
        first, state, _ = self.merge(row, fetches)
        self.assertEqual(first["events"][0]["check"]["status"], "review_required")
        second, _, _ = update_catalog(first, state, ADAPTERS, fetches, "2026-10-28T12:00:00Z")
        self.assertEqual(second["events"][0]["check"]["status"], "review_required")

    def test_fetch_failure_preserves_dates_and_last_successful_hash(self):
        row = event()
        state = {"sources": {row["url"]: {"hash": "old-hash", "last_success_at": "2026-10-26T12:00:00Z"}}}
        updated, new_state, changes = self.merge(row, {row["url"]: {"ok": False, "message": "HTTP Error 404"}}, state)
        self.assertEqual(updated["events"][0]["start"], row["start"])
        self.assertEqual(updated["events"][0]["status"], row["status"])
        self.assertEqual(updated["events"][0]["check"]["status"], "failed")
        self.assertEqual(new_state["sources"][row["url"]]["hash"], "old-hash")
        self.assertEqual(new_state["sources"][row["url"]]["last_success_at"], "2026-10-26T12:00:00Z")
        self.assertEqual(changes, [])

    def test_bot_challenge_empty_page_and_timeout_are_unverifiable(self):
        row = event()
        for message in (
            "HTTP Error 403: Forbidden",
            "Official source returned no readable page content.",
            "Official source returned an access challenge, not conference content.",
            "<urlopen error timed out>",
            "IncompleteRead(24132 bytes read)",
        ):
            with self.subTest(message=message):
                updated, state, _ = self.merge(row, {row["url"]: {"ok": False, "message": message}})
                self.assertEqual(updated["events"][0]["check"]["status"], "unverifiable")
                self.assertEqual(state["sources"][row["url"]]["status"], "unverifiable")
                self.assertEqual(updated["events"][0]["start"], row["start"])

    def test_matching_official_jsonld_updates_dates_and_records_evidence(self):
        row = event()
        updated, _, changes = self.merge(row, {row["url"]: fetched(jsonld_html())})
        actual = updated["events"][0]
        self.assertEqual(actual["start"], "2027-06-05")
        self.assertEqual(actual["end"], "2027-06-07")
        self.assertEqual(actual["check"]["status"], "checked")
        self.assertEqual(actual["check"]["last_verified_at"], NOW)
        self.assertTrue(all(change["source"] == row["url"] and change["evidence"] for change in changes))
        self.assertEqual(validate_catalog(updated), [])

    def test_jsonld_reschedules_start_and_end_nodes_without_changing_deadline_summary(self):
        row = event()
        row["milestones"] = [
            {"id": "stable-start", "kind": "conference_start", "label": "Activity starts", "date": row["start"],
             "time": None, "timezone": None, "precision": "date", "status": "verified", "source": row["url"],
             "evidence": "Previously published activity dates.", "version": 2},
            {"id": "stable-end", "kind": "conference_end", "label": "Activity ends", "date": row["end"],
             "time": None, "timezone": None, "precision": "date", "status": "verified", "source": row["url"],
             "evidence": "Previously published activity dates.", "version": 3}
        ]
        updated, state, changes = self.merge(row, {row["url"]: fetched(jsonld_html())})
        actual = updated["events"][0]
        nodes = {node["kind"]: node for node in actual["milestones"]}
        self.assertEqual((nodes["conference_start"]["id"], nodes["conference_start"]["date"], nodes["conference_start"]["version"]),
                         ("stable-start", "2027-06-05", 3))
        self.assertEqual((nodes["conference_end"]["id"], nodes["conference_end"]["date"], nodes["conference_end"]["version"]),
                         ("stable-end", "2027-06-07", 4))
        self.assertTrue(all(node["precision"] == "date" and node["time"] is None and node["timezone"] is None for node in nodes.values()))
        self.assertEqual(actual["deadline"], row["deadline"])
        self.assertNotIn("deadline_notes", actual)
        self.assertTrue(any(change["field"] == "milestones.stable-end" for change in changes))
        self.assertEqual(validate_catalog(updated), [])
        second, _, changes = update_catalog(updated, state, ADAPTERS, {row["url"]: fetched(jsonld_html())}, "2026-10-28T12:00:00Z")
        self.assertEqual(changes, [])
        self.assertEqual(second["events"][0]["milestones"], actual["milestones"])

    def test_conflicting_end_node_is_not_silently_resolved_by_jsonld(self):
        row = event()
        row["milestones"] = [{"id": "end", "kind": "conference_end", "label": "Activity ends", "date": None,
                              "time": None, "timezone": None, "precision": "unknown", "status": "conflict",
                              "source": row["url"], "evidence": "Official end dates disagree.", "version": 1}]
        updated, _, _ = self.merge(row, {row["url"]: fetched(jsonld_html())})
        node = next(node for node in updated["events"][0]["milestones"] if node["kind"] == "conference_end")
        self.assertEqual(node, row["milestones"][0])
        self.assertEqual(updated["events"][0]["end"], row["end"])
        self.assertEqual(updated["events"][0]["check"]["status"], "review_required")

    def test_deadline_summary_excludes_both_activity_start_and_end(self):
        row = event("euromof2027", "EuroMOF 2027", "https://euromof2027.com/abstracts.html")
        row["milestones"] = [
            {"id": "start", "kind": "conference_start", "label": "Activity starts", "date": row["start"],
             "time": None, "timezone": None, "precision": "date", "status": "verified", "source": row["url"],
             "evidence": "Official activity dates.", "version": 1},
            {"id": "end", "kind": "conference_end", "label": "Activity ends", "date": row["end"],
             "time": None, "timezone": None, "precision": "date", "status": "verified", "source": row["url"],
             "evidence": "Official activity dates.", "version": 1}
        ]
        updated, _, _ = self.merge(row, {row["url"]: fetched((FIXTURES / "euromof-abstracts.html").read_text())})
        self.assertEqual(updated["events"][0]["deadline"], "Abstract submission: 2027-02-01")

    def test_different_conference_or_year_cannot_overwrite_dates(self):
        row = event()
        for html in (jsonld_html(name="Another Conference 2027"), jsonld_html(start="2026-06-05", end="2026-06-07"),
                     jsonld_html(identity="https://unrelated.example/conference")):
            with self.subTest(html=html):
                updated, _, changes = self.merge(row, {row["url"]: fetched(html)})
                self.assertEqual(updated["events"][0]["start"], row["start"])
                self.assertEqual(changes, [])

    def test_two_matching_jsonld_events_with_different_dates_require_review(self):
        row = event()
        html = jsonld_html() + jsonld_html(start="2027-07-05", end="2027-07-07")
        updated, _, changes = self.merge(row, {row["url"]: fetched(html)})
        self.assertEqual(updated["events"][0]["start"], row["start"])
        self.assertEqual(updated["events"][0]["check"]["status"], "review_required")
        self.assertEqual(changes, [])

    def test_explicit_cancellation_quarantines_stale_active_dates(self):
        row = event()
        html = (FIXTURES / "cancelled-with-stale-active-event.html").read_text()
        updated, state, changes = self.merge(row, {row["url"]: fetched(html)})
        actual = updated["events"][0]
        self.assertEqual((actual["start"], actual["end"]), (row["start"], row["end"]))
        self.assertEqual(actual["status"], row["status"])
        self.assertEqual(actual["milestones"], row["milestones"])
        self.assertTrue(actual["reminders_paused"])
        self.assertIn("cancelled", actual["reminders_pause_reason"])
        self.assertEqual(actual["check"]["status"], "review_required")
        self.assertFalse(any(change["field"] in {"start", "end"} for change in changes))
        # A later stale/active page must not silently resume scheduled reminders.
        resumed, _, _ = update_catalog(updated, state, ADAPTERS, {row["url"]: fetched(jsonld_html())}, "2026-10-28T12:00:00Z")
        self.assertTrue(resumed["events"][0]["reminders_paused"])
        self.assertEqual(resumed["events"][0]["start"], row["start"])
        self.assertEqual(resumed["events"][0]["check"]["status"], "review_required")

    def test_cancellation_on_another_registered_source_blocks_date_proposals(self):
        row = event()
        notice_url = "https://example.org/2027/notice"
        row["sources"].append(notice_url)
        cancellation = '<script type="application/ld+json">' + json.dumps({
            "@type": "Event", "name": row["name"], "url": row["url"],
            "eventStatus": "https://schema.org/EventPostponed"}) + '</script><main>Postponement notice</main>'
        updated, _, _ = self.merge(row, {row["url"]: fetched(jsonld_html()), notice_url: fetched(cancellation)})
        actual = updated["events"][0]
        self.assertTrue(actual["reminders_paused"])
        self.assertIn("postponed", actual["reminders_pause_reason"])
        self.assertEqual(actual["start"], row["start"])

    def test_unrelated_cancelled_event_does_not_pause_registered_conference(self):
        row = event()
        unrelated = '<script type="application/ld+json">' + json.dumps({
            "@type": "Event", "name": "Different Conference 2027", "url": "https://elsewhere.example/2027",
            "eventStatus": "https://schema.org/EventCancelled"}) + '</script>'
        updated, _, _ = self.merge(row, {row["url"]: fetched(jsonld_html() + unrelated)})
        self.assertFalse(updated["events"][0].get("reminders_paused", False))
        self.assertEqual(updated["events"][0]["start"], "2027-06-05")

    def test_cancellation_is_not_hidden_by_a_source_specific_date_adapter(self):
        row = event("ai4mat-neurips-2026", "AI4Mat @ NeurIPS 2026", "https://sites.google.com/view/ai4mat/schedule")
        row["start"] = row["end"] = "2026-12-11"
        notice = '<script type="application/ld+json">' + json.dumps({
            "@type": "Event", "name": row["name"], "url": row["url"],
            "eventStatus": "https://schema.org/EventRescheduled"}) + '</script>'
        html = (FIXTURES / "ai4mat-schedule.html").read_text() + notice
        updated, _, _ = self.merge(row, {row["url"]: fetched(html)})
        actual = updated["events"][0]
        self.assertTrue(actual["reminders_paused"])
        self.assertIn("rescheduled", actual["reminders_pause_reason"])
        self.assertEqual(actual["start"], "2026-12-11")

    def test_euromof_dates_do_not_imply_open_platforms(self):
        row = event("euromof2027", "EuroMOF 2027", "https://euromof2027.com/index.html")
        row["sources"] = ["https://euromof2027.com/abstracts.html", "https://euromof2027.com/registration.html"]
        fetches = {row["url"]: fetched("<main>EuroMOF 2027</main>")}
        for filename, url in (("euromof-abstracts.html", row["sources"][0]), ("euromof-registration.html", row["sources"][1])):
            fetches[url] = fetched((FIXTURES / filename).read_text())
        updated, _, changes = self.merge(row, fetches)
        actual = updated["events"][0]
        dates = {m["kind"]: m["date"] for m in actual["milestones"]}
        self.assertEqual(dates, {"abstract": "2027-02-01", "early_registration": "2027-04-05", "registration": "2027-07-03"})
        self.assertIn("submission platform not yet open", actual["status"])
        self.assertIn("Registration platform not yet open", actual["status"])
        self.assertEqual(actual["deadline_notes"], row["deadline"])
        self.assertTrue(changes)

    def test_fee_opening_transitions_are_not_generated_as_reminder_nodes(self):
        config = next(a for a in ADAPTERS["adapters"] if a["parser"] == "euromof_registration")
        text, _ = parse_html((FIXTURES / "euromof-registration.html").read_text() +
                             "<main><h2>Onsite fee</h2><p>From July 4, 2027</p><h2>Late fee opens</h2><p>July 4, 2027</p></main>")
        observation = known_adapter(text, config)
        self.assertEqual([node["kind"] for node in observation["milestones"]], ["early_registration", "registration"])
        self.assertFalse(any(node["date"] == "2027-07-04" for node in observation["milestones"]))

    def test_adapter_template_change_preserves_existing_facts(self):
        config = next(a for a in ADAPTERS["adapters"] if a["parser"] == "euromof_abstracts")
        observation = known_adapter("New site: conference information will be published later.", config)
        self.assertFalse(observation["verified"])
        self.assertEqual(observation["milestones"], [])
        self.assertTrue(observation["review"])

    def test_authoritative_ai4mat_schedule_wins_over_unadapted_old_page(self):
        row = event("ai4mat-neurips-2026", "AI4Mat @ NeurIPS 2026", "https://sites.google.com/view/ai4mat/home")
        row["start"] = row["end"] = "2026-12-11"
        schedule = "https://sites.google.com/view/ai4mat/schedule"
        old = "https://sites.google.com/view/ai4mat/submissions"
        row["sources"] = [row["url"], schedule, old]
        updated, _, _ = self.merge(row, {row["url"]: fetched("<main>AI4Mat 2026</main>"),
                                       schedule: fetched((FIXTURES / "ai4mat-schedule.html").read_text()),
                                       old: fetched("<main>Workshop date: December 11 or 12, 2026.</main>")})
        self.assertEqual(updated["events"][0]["start"], "2026-12-12")

    def test_existing_conflicting_abstract_is_never_silently_resolved(self):
        row = event("euromof2027", "EuroMOF 2027", "https://euromof2027.com/abstracts.html")
        row["milestones"] = [{"id": "abstract", "kind": "abstract", "label": "Abstract submission", "date": None,
                              "time": None, "timezone": None, "precision": "unknown", "status": "conflict",
                              "source": row["url"], "evidence": "Official dates disagree.", "version": 1}]
        updated, _, _ = self.merge(row, {row["url"]: fetched((FIXTURES / "euromof-abstracts.html").read_text())})
        self.assertEqual(updated["events"][0]["milestones"][0], row["milestones"][0])
        self.assertEqual(updated["events"][0]["check"]["status"], "review_required")

    def test_deadline_change_increments_version_and_keeps_stable_id(self):
        row = event("euromof2027", "EuroMOF 2027", "https://euromof2027.com/abstracts.html")
        row["milestones"] = [{"id": "abstract", "kind": "abstract", "label": "Abstract submission", "date": "2027-01-15",
                              "time": "23:59", "timezone": "Europe/Rome", "precision": "datetime", "status": "verified",
                              "source": row["url"], "evidence": "Old announcement.", "version": 2}]
        fetches = {row["url"]: fetched((FIXTURES / "euromof-abstracts.html").read_text())}
        updated, state, _ = self.merge(row, fetches)
        node = updated["events"][0]["milestones"][0]
        self.assertEqual((node["id"], node["version"], node["date"]), ("abstract", 3, "2027-02-01"))
        self.assertEqual((node["precision"], node["time"], node["timezone"]), ("date", None, None))
        second, _, changes = update_catalog(updated, state, ADAPTERS, fetches, "2026-10-28T12:00:00Z")
        self.assertEqual(second["events"][0]["milestones"][0]["version"], 3)
        self.assertEqual(changes, [])

    def test_history_is_bounded(self):
        row = event()
        data = catalog(row)
        data["updates"] = [{"old": i} for i in range(200)]
        updated, _, _ = update_catalog(data, {}, ADAPTERS, {row["url"]: fetched(jsonld_html())}, NOW)
        self.assertEqual(len(updated["updates"]), 200)

    def test_validator_rejects_exact_time_without_timezone_and_duplicate_nodes(self):
        row = event()
        node = {"id": "abstract", "kind": "abstract", "label": "Abstract", "date": "2027-01-01", "time": "23:59",
                "timezone": None, "precision": "datetime", "status": "verified", "source": row["url"], "evidence": "Official.", "version": 1}
        row["milestones"] = [node, deepcopy(node)]
        errors = validate_catalog(catalog(row))
        self.assertTrue(any("time zone" in error for error in errors))
        self.assertTrue(any("duplicate milestone" in error for error in errors))


if __name__ == "__main__":
    unittest.main()
