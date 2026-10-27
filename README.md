# Conference Reminder

[Visit the website](https://vickie02736.github.io/conference-reminder/)

An English conference catalogue for AI, AI for Materials, MOF/COF, porous materials, adsorption and simulation, with a focus on the UK and Europe. The initial research snapshot, verified on 27 October 2026, includes **96 scheduled activities and six announcements awaiting dates**. It is a curated collection rather than an exhaustive search engine. Associated workshops, schools and GRC/GRS meetings can be separate entries.

## Sharing with the research group

Share [the public website](https://vickie02736.github.io/conference-reminder/) directly. Each visitor chooses their own conferences, dates, lead times and email address; no Google sign-in is required. They must confirm their email before reminders become active. Private management links show only that email address’s subscriptions; each person’s choices remain independent.

**Send reminder** is the reminder action on each conference card. Email reminders continue with the page closed. A blocked confirmation request explicitly says no email was sent and asks the visitor to retry, so it cannot be mistaken for a saved subscription.

## Explore and set reminders

- Search and filter by region, status and sorting in the main bar. **More filters** contains topic, activity, year and source-check status; its count shows active choices. UK & Europe is the default, including the NeurIPS Paris attendance option.
- **Sources to review**, **Source errors** and **Sources not automatically checkable** show all affected activities worldwide. Use the separate Source check filter to combine evidence status with other filters. Source review is distinct from unconfirmed conference dates or attendance availability. Bot challenges, JavaScript-only pages and timeouts are marked unverifiable rather than failed.
- Scheduled and pending totals use the same classification as the cards. Announced but unverified dates remain provisional; pending activities show **Dates not confirmed** until reminders can be offered.
- Each entry links to its official website and evidence. Closed submissions, full events, invitation-only attendance and conflicting dates remain visible.
- Each conference card can show several current statuses together, including registration, oral/abstract/poster/paper submission, opening soon, closed routes and an ongoing meeting. The Status filter matches these labels and works with the other filters. Oral and poster routes are distinguished only when the published information identifies them. A deadline alone does not confirm that a platform is open: those routes are explicitly labelled “opening unconfirmed”; selecting Finished also enables past events.
- **Send reminder** opens the Google Apps Script service in a new tab. Select dates and lead times, then verify your email to activate server reminders.
- Changing a reminder time zone refreshes date availability before submitting. Existing subscribers can still unsubscribe if the public conference catalogue is temporarily unavailable.

The former local date tracker and browser notification interface have been retired. Existing `academic-conferences-v1` records are left untouched in browser storage. They are not automatically converted into email subscriptions; choose **Send reminder** and verify your email to activate email reminders.

## Daily official-source checks

`site.yml` checks registered source URLs daily at **06:17 UTC** and supports [manual runs](https://github.com/vickie02736/conference-reminder/actions/workflows/site.yml). Choose **Run workflow**, keeping `refresh_sources` enabled. Running it requires repository access.

The updater recognises narrowly scoped EuroMOF deadline/platform statements, the authoritative AI4Mat schedule, and matching official JSON-LD Event records. Other sources are monitored for content changes and marked for review once; a later check with the same normalised page hash clears a hash-only review. Dynamic pages, PDFs, ambiguous dates and site changes are not silently converted into deadlines. A failed or unverifiable fetch retains the last trusted facts. Explicit cancellation or rescheduling evidence pauses email scheduling until reviewed.

The website distinguishes the last attempted source check from initial research/latest supported-fact verification. Fetching a page successfully does not verify every fact. Check status, source hashes and a bounded change history are public; fetched page bodies are not stored.

GitHub Actions schedules can be delayed, and public-repository schedules can be disabled after 60 days without repository activity. The site marks checks older than 48 hours as overdue. See [GitHub’s schedule documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule).

To verify an unadapted source manually, review its current official content and all affected fields, update the corresponding facts and evidence in `data/conferences.json`, and clear that event’s `review_required` flag/message under the URL in `data/source-checks.json`. Record the actual verification date. Clear `reminders_paused` only after resolving any cancellation/rescheduling notice. Adding an adapter with representative tests enables future automatic parsing. No workflow searches the entire web for new conferences.

## Free email service

See [Google Apps Script setup](google-apps-script/README.md) for the source, first-time owner authorisation and deployment steps. No paid server, custom domain or external email provider is required.

Visitors open **Send reminder**, choose verified nodes, select 1/3/7 days and a time zone, and confirm their email. They can manage or cancel subscriptions using links in the emails. Confirmation and unsubscribe links show a review page before taking action, so an email scanner cannot activate or cancel a subscription by fetching the link.

Subscriptions, token hashes and delivery records are stored in an owner-only Google Sheet, never in this public repository. An Apps Script trigger runs every 15 minutes even when the website is closed. Date-only announcements use 09:00 in the visitor’s chosen zone, explicitly labelled as a reminder time rather than an official cutoff. Precise deadlines use the published zone and local calendar-day offsets. Conflicting and unknown nodes cannot be subscribed to.

Personal Google accounts currently have a **100 recipient deliveries per day** quota shared by confirmation, management and reminder emails; this is not a subscriber count. Sending checks remaining quota, reserves capacity for reminders and merges reminders due for the same recipient. It suits a small audience, and timing is approximate. MailApp has no documented provider idempotency key: an uncertain send is retained for owner review and is not automatically retried. See [Google quotas](https://developers.google.com/apps-script/guides/services/quotas).

The production service is configured in `config.json`. When replacing it, keep `emailRemindersEnabled` set to `false` until anonymous access, a real verified subscription and scheduled delivery have been checked. The sender is the Google account that owns the service. To pause new website subscriptions, disable that flag; to stop all outgoing mail, also run `disableEmailSending()` in the Apps Script editor.

## Development and publishing

No frontend build or runtime dependency is required. Use Node 24 and Python 3.9+:

```sh
npm test
python3 scripts/validate_catalog.py
npm run serve
# Open http://localhost:8000
```

Check official sources locally with `python3 scripts/update_catalog.py`; add `--dry-run` to report without saving. Only supported facts are automatically changed. Tests use saved fixtures and mocked Google services, without sending emails.

GitHub Pages uses **GitHub Actions**, not legacy branch publishing. The combined workflow validates and tests changes, optionally updates catalogue data with a normal commit, and explicitly deploys only `index.html`, `config.json`, `assets/` and `data/`. Email service code, tests, owner documentation and research intermediates are excluded from the public Pages artifact. A bot data commit alone would not trigger legacy Pages publishing.
