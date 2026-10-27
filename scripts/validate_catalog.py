#!/usr/bin/env python3
"""Validate the public catalogue before it is published or used for reminders."""

import argparse
from datetime import date, datetime
import json
from pathlib import Path
import re
import sys
from urllib.parse import urlparse
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError

KINDS = {"abstract", "paper", "poster", "application", "early_registration",
         "registration", "funding", "conference_start", "conference_end", "other"}
CHECK_STATUSES = {"not_checked", "checked", "review_required", "failed"}


def valid_url(value):
    try:
        parsed = urlparse(value)
        return parsed.scheme in {"http", "https"} and bool(parsed.netloc) and not parsed.username
    except (TypeError, ValueError):
        return False


def validate_catalog(catalog):
    """Return actionable errors; never fill in missing dates or time zones."""
    errors = []
    if not isinstance(catalog, dict):
        return ["Catalogue must be an object."]
    metadata = catalog.get("metadata", {})
    if metadata.get("schema_version") != 1:
        errors.append("metadata.schema_version must be 1.")
    all_ids = set()
    for collection in ("events", "watchlist"):
        rows = catalog.get(collection)
        if not isinstance(rows, list):
            errors.append(f"{collection} must be an array.")
            continue
        for event in rows:
            if not isinstance(event, dict):
                errors.append(f"{collection} contains a non-object entry.")
                continue
            event_id = event.get("id")
            prefix = str(event_id or "<missing id>")
            if not isinstance(event_id, str) or not re.fullmatch(r"[a-z0-9][a-z0-9-]*", event_id):
                errors.append(f"{prefix}: invalid stable ID.")
            if event_id in all_ids:
                errors.append(f"{prefix}: duplicate stable ID.")
            all_ids.add(event_id)
            if not event.get("name"):
                errors.append(f"{prefix}: name is required.")
            if "reminders_paused" in event and not isinstance(event["reminders_paused"], bool):
                errors.append(f"{prefix}: reminders_paused must be a boolean.")
            if event.get("reminders_paused") is True and (not isinstance(event.get("reminders_pause_reason"), str) or not event["reminders_pause_reason"].strip()):
                errors.append(f"{prefix}: paused reminders require a visible verification reason.")
            if event.get("region") not in {"UK", "Europe", "Other"}:
                errors.append(f"{prefix}: region must be UK, Europe or Other.")
            if not valid_url(event.get("url")):
                errors.append(f"{prefix}: official website must use HTTP(S).")
            sources = event.get("sources", [])
            if not isinstance(sources, list) or not sources or any(not valid_url(s) for s in sources):
                errors.append(f"{prefix}: at least one valid official source is required.")
            parsed_dates = {}
            for field in ("start", "end"):
                value = event.get(field)
                if value is not None:
                    try:
                        parsed_dates[field] = date.fromisoformat(value)
                    except (TypeError, ValueError):
                        errors.append(f"{prefix}: {field} must be an ISO date or null.")
            if parsed_dates.get("start") and parsed_dates.get("end") and parsed_dates["end"] < parsed_dates["start"]:
                errors.append(f"{prefix}: conference end precedes start.")
            if collection == "events" and (not parsed_dates.get("start") or not parsed_dates.get("end")):
                errors.append(f"{prefix}: scheduled events require start and end dates.")
            check = event.get("check", {})
            if check.get("status") not in CHECK_STATUSES:
                errors.append(f"{prefix}: invalid check status.")
            for field in ("last_checked_at", "last_verified_at"):
                value = check.get(field)
                if value is not None:
                    try:
                        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
                        if parsed.tzinfo is None:
                            raise ValueError("missing zone")
                    except (AttributeError, TypeError, ValueError):
                        errors.append(f"{prefix}: check.{field} must be a timestamp with a time zone or null.")
            milestones = event.get("milestones")
            if not isinstance(milestones, list):
                errors.append(f"{prefix}: milestones must be an array.")
                continue
            node_ids = set()
            for node in milestones:
                label = f"{prefix}/{node.get('id', '<missing id>')}" if isinstance(node, dict) else prefix
                if not isinstance(node, dict):
                    errors.append(f"{label}: milestone must be an object.")
                    continue
                if not isinstance(node.get("id"), str) or not node["id"]:
                    errors.append(f"{label}: stable milestone ID is required.")
                if node.get("id") in node_ids:
                    errors.append(f"{label}: duplicate milestone ID.")
                node_ids.add(node.get("id"))
                if node.get("kind") not in KINDS:
                    errors.append(f"{label}: invalid milestone kind.")
                if not node.get("label"):
                    errors.append(f"{label}: English label is required.")
                if node.get("status") not in {"verified", "conflict", "unknown"}:
                    errors.append(f"{label}: invalid milestone status.")
                if node.get("precision") not in {"date", "datetime", "unknown"}:
                    errors.append(f"{label}: invalid date precision.")
                value = node.get("date")
                if value is not None:
                    try:
                        date.fromisoformat(value)
                    except (TypeError, ValueError):
                        errors.append(f"{label}: milestone date must be ISO or null.")
                if node.get("precision") in {"date", "datetime"} and not value:
                    errors.append(f"{label}: known precision requires a date.")
                time_value, timezone = node.get("time"), node.get("timezone")
                if time_value is not None and (not isinstance(time_value, str) or not re.fullmatch(r"(?:[01]\d|2[0-3]):[0-5]\d", time_value)):
                    errors.append(f"{label}: time must be HH:mm or null.")
                if node.get("precision") == "datetime" and (not time_value or not timezone):
                    errors.append(f"{label}: precise timestamps require both time and time zone.")
                if timezone is not None:
                    try:
                        ZoneInfo(timezone)
                    except (TypeError, ValueError, ZoneInfoNotFoundError):
                        errors.append(f"{label}: use an IANA time zone (AoE is Etc/GMT+12).")
                if node.get("status") == "verified" and (not value or not valid_url(node.get("source"))):
                    errors.append(f"{label}: verified milestones require a date and official source.")
                if not isinstance(node.get("version"), int) or isinstance(node.get("version"), bool) or node["version"] < 1:
                    errors.append(f"{label}: version must be a positive integer.")
    if not isinstance(catalog.get("updates", []), list):
        errors.append("updates must be an array.")
    return errors


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("catalog", nargs="?", default="data/conferences.json")
    args = parser.parse_args()
    try:
        catalog = json.loads(Path(args.catalog).read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        print(f"Cannot read catalogue: {exc}", file=sys.stderr)
        return 1
    errors = validate_catalog(catalog)
    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print(f"Catalogue valid: {len(catalog['events'])} scheduled events and {len(catalog['watchlist'])} watchlist entries.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
