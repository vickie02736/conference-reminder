# Free email reminders with Google Apps Script

The website stays on GitHub Pages. This optional backend uses the owner's Google account, Apps Script and a **private** Google spreadsheet. No custom domain, Resend account or paid server is required. Visitors can use any valid email address and do not need a Google account.

Email sending is **off by default**. Neither installing these source files nor running `setup()` sends an email. Only the owner can enable sending. The public website must keep `emailRemindersEnabled: false` until the public deployment has been checked.

## One-time owner setup

1. Sign in to the Google account that should send the reminders, then create a standalone project at [Apps Script](https://script.google.com/). The sender address is visible to recipients; use an account you are comfortable using for this service.
2. Replace `Code.gs` with this directory's `Code.gs`. Add an HTML file named **Index** and copy `Index.html` into it. In **Project Settings**, enable **Show appsscript.json manifest file in editor** and copy this directory's `appsscript.json` into the manifest.
3. Save, select **setup**, and press **Run** in the editor. The account owner must complete Google's authorization prompt personally. The manifest requests sending mail, creating/accessing spreadsheets, reading the public catalogue, managing this script's trigger and checking the owner's identity. `MailApp` does not read the Gmail inbox.
4. `setup()` creates the private spreadsheet, four tables and one approximately 15-minute trigger. Find its URL in the execution log. Keep the spreadsheet private; do not publish it or share it with visitors. Running setup again reuses the same spreadsheet and trigger.
5. Choose **Deploy → New deployment → Web app**. Set **Execute as: Me** and **Who has access: Anyone** (anonymous access, not “Anyone with a Google account”). Deploy and copy the URL ending in **/exec**, not `/dev`. A Workspace administrator may restrict anonymous deployments; a consumer Google account is a simple option for this small service.
6. In **Project Settings → Script properties**, set `PUBLIC_APP_URL` to that exact `/exec` URL. `PUBLIC_CATALOG_URL` defaults to `https://vickie02736.github.io/conference-reminder/data/conferences.json`; change it only when moving the website. Keep `EMAIL_ENABLED` set to `false` while checking the deployment.
7. Open `/exec?eventId=EVENT_ID_FROM_THE_DIRECTORY` in an **incognito window**. Confirm that the English form opens without Google sign-in, shows the correct conference and official link, and says that email sending is not yet activated. Opening a form sends nothing.
8. When those checks pass, run **enableEmailSending** from the Apps Script editor. This validates the deployment URL and catalogue, then enables sending; the function itself sends no email. This step is the owner's explicit activation of the backend.
9. Update the repository's root `config.json` with the `/exec` URL and enable the website button:

   ```json
   {
     "emailReminderUrl": "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
     "emailRemindersEnabled": true
   }
   ```

10. The owner can now test using their own email: open **Send reminder**, select a future node and lead time, submit, open the confirmation email and press **Confirm**. Check the spam folder. Opening the confirmation URL alone must leave the subscription pending. This manual test sends real email only when the owner submits it.

When updating code, create a new deployment version under **Manage deployments** while retaining the same deployment URL. Keep the repository source and deployed version aligned. The owner must authorize any additional scopes if a later change requires them.

The optional `.clasp.json.example` describes a local `clasp` configuration. Copy it to `.clasp.json`, fill in your own project ID and use the official [clasp workflow](https://developers.google.com/apps-script/guides/clasp). Authentication belongs to the account owner. Do not commit local credentials or `.clasp.json`.

## Owner-only delivery smoke test

After owner authorization, `setup()`, production deployment and `enableEmailSending()`, the owner can test the **actual installed clock trigger**, including delivery with the browser closed:

1. In the Apps Script editor, select **scheduleOwnerDeliverySmokeTest** and press **Run**. The function accepts **no recipient or content parameters**. It queues one private `Deliveries` record addressed only to the already-configured owner account and logs its test ID. This action itself sends no email. Repeating it while a test is pending does not queue duplicates.
2. Close the Apps Script tab or browser. The existing **dispatchReminders_** time-driven trigger should pick up the test on its next approximately 15-minute check. Do **not** manually run the dispatcher for this test: doing so would not establish that a scheduled trigger worked while the browser was closed.
3. Look for **[TEST] Conference Reminder — scheduled delivery check** in the owner's inbox or spam folder. The email includes the private test ID and queued/attempted UTC timestamps. It is separate from genuine conference reminders, even if both are due for the same email address.
4. Reopen Apps Script **Executions** and verify that `dispatchReminders_` ran with type **Time Driven** after the queue time. In the private `Deliveries` sheet, the matching test ID should have `status: "sent"`, `groupId`, `attemptedAt` and `sentAt`. An inbox receipt plus that execution is evidence of scheduled delivery after browser closure. A successful MailApp call alone does not establish inbox delivery.

The smoke test uses the ordinary claim → flush → MailApp → sent/uncertain path and consumes **one recipient delivery** from the Google quota. It changes no canonical conference, milestone or public catalogue and creates no conference subscription or visitor management token. It never repeats automatically. Once a test has finished, another explicit owner invocation can queue a new one.

To stop a queued test before it is claimed, run **cancelOwnerDeliverySmokeTest** from the owner editor. A pending test also expires after the ordinary one-hour lateness window. Catalogue failure freezes it and an uncertain send is not retried, just like genuine reminders. While `EMAIL_ENABLED=false`, nothing dispatches. A public/anonymous caller cannot schedule or cancel an owner test; the same owner-identity check used for setup is required. There is no public arbitrary-email test endpoint.

## Behaviour

- **Send reminder** opens the Apps Script form in a new tab with only the public event ID. Emails never appear in request URLs. The hosted form calls server functions through `google.script.run`; there is no CORS proxy or iframe dependency.
- Visitors choose verified future milestones, any combination of **1 day / 3 days / 1 week**, and an IANA time zone. The default is **3 days** and the browser's time zone.
- Changing the time zone refreshes available milestones and preserves choices that remain valid. Submission waits for the latest response; an invalid zone or failed check must be corrected or retried before saving.
- Watchlist announcements have an explanatory detail page with no sign-up form. They cannot schedule reminders until they move into the verified scheduled catalogue.
- For a date without a published deadline time, the reminder is scheduled at **09:00 in the visitor's time zone** on the selected earlier calendar date. The message explicitly says that the deadline time was not published. The service does not invent a conference deadline of 23:59.
- For a verified exact deadline, the reminder uses the **same local clock time in the published deadline's time zone**, 1, 3 or 7 calendar days earlier. DST is respected. Ambiguous/nonexistent source clock times are not guessed. AoE is represented by `Etc/GMT+12`.
- Past lead times are skipped when scheduling. Confirmation revalidates the current conference, selected nodes and future reminder times before consuming the token or activating the subscription. If all selected times have elapsed, or a selected node/conference has been paused, removed or marked conflicting, the subscription stays pending and the form explains how to choose available dates again. A scheduled task more than **one hour late** expires rather than sending a misleading catch-up reminder. Checks run approximately every 15 minutes; this is not precise minute-level delivery.
- Each reminder run fetches the public catalogue anew. A failed or invalid catalogue fetch freezes dispatch; there is no fallback to a potentially stale cached catalogue.
- A catalogue outage does not prevent private subscription management or cancellation. Management pages still list only the authenticated email's subscriptions and allow unsubscribe; editing dates waits for the catalogue to recover.
- Only `status: "verified"` milestones with a source URL can schedule email. Removed/conflicting nodes, explicitly cancelled/disabled events and `reminders_paused: true` cancel pending tasks. A closed CFP or fully booked conference is not treated as a cancelled conference.
- Changed dates cancel the old unsent jobs and create future jobs for the new date. Already submitted email records remain in the ledger. Changing a visitor's time zone does not repeat a reminder that has already been sent for that node/date version/lead time.
- Due reminders for the same email are combined in one message. Recipients never see other subscribers' addresses. The messages use canonical conference details from the catalogue; a caller cannot supply an arbitrary email subject, HTML or website URL.
- Confirmation links expire in **24 hours**, are single-use and require a button click. Management links expire in **90 days**; a visitor can request a fresh one by email. Every reminder contains management and unsubscribe links.
- **GET requests never activate or cancel subscriptions.** A link opens a review page; a button makes the state-changing server call. This avoids email link scanners silently confirming or cancelling. MailApp does not support custom `List-Unsubscribe` headers here; the service provides an email-body unsubscribe link and confirmation page, not an RFC 8058 mailbox-client one-click header.

## Free capacity and abuse limits

Google currently documents **100 email-recipient deliveries per day for consumer accounts**, shared across that account's Apps Script usage. Confirmation, management and reminder emails all consume this quota. The quota resets on Google's 24-hour cycle; do not assume midnight. It is not a limit of 100 subscriptions. Google may change these limits.

The backend permits at most **20 public confirmation/management requests per 24-hour application window**, waits **five minutes between requests for the same email**, and stops public auth emails when **10 or fewer** Google recipient deliveries remain. Reminders can use the remaining quota. A hidden honeypot rejects basic automated submissions. This is a small public service, not protection against a sustained attack; the global cap limits how much unsolicited mail a public endpoint can produce. Requests for nonexistent accounts return the same generic response and still consume the public request allowance.

The five-minute cooldown applies across conferences and management-link requests for the same email address. A request during that period displays the remaining wait and explicitly says that **no email was sent and no new reminder choices were saved**. Existing subscriptions and confirmation links remain unchanged. Submit the next conference again after the wait; it is not queued automatically. Rejected cooldown attempts do not extend the wait or consume another public request allowance. Existing and nonexistent accounts receive the same cooldown feedback.

The dispatcher sends at most **30 combined emails per run** and stops starting new sends after **four minutes** of execution, leaving unclaimed jobs pending for the next trigger. This accommodates the consumer account's 100-recipient daily quota within four approximately 15-minute checks when service runtime permits, including a batch with the same 09:00 reminder time. Google also limits consumer trigger runtime to 90 minutes/day, individual executions to 6 minutes and concurrent execution counts. Slow service calls, delayed triggers or quota exhaustion can still result in expired reminders. The form and footer describe delivery as best effort. Check the official website for important deadlines.

## Private storage and duplicate handling

Each sheet has `key` and `record_json` columns. Records are JSON cells beginning with `{`, so user-provided text cannot become a spreadsheet formula. The private tables are:

- `Subscriptions`: normalized email, selected catalogue IDs, lead days, time zone, verification status and timestamps.
- `Tokens`: random link-token hashes, purpose and expiration. Raw tokens exist only in the email links; they are not persisted in the sheet or placed in logs.
- `Milestones`: the last successful catalogue facts for owner inspection. Dispatch still requires a fresh catalogue fetch.
- `Deliveries`: each logical subscription/node/date-version/lead-time task and its durable state.

All mutations use `getScriptLock()` and flush spreadsheet writes before releasing the lock. The delivery sequence is `pending → sending → sent`, with `sending` persisted **before** calling MailApp. `sent` means MailApp accepted the call; there is no delivery/bounce webhook in this free backend.

MailApp has no documented idempotency key or returned send ID. If a run fails after claiming a task, or the sending outcome is unknown, that task becomes **uncertain and is never automatically retried**. This chooses avoiding duplicate emails over retrying a potentially delivered message. It can miss a reminder in an uncertain failure. Inspect `Deliveries` and Apps Script execution history; do not reset an uncertain row automatically. Explicit owner intervention is required to send a replacement.

Email addresses remain only in the owner's private Google storage and outgoing recipient fields. The repository, catalogue and public management URLs contain no subscriber email addresses. Management URLs are private bearer links; do not share them. The form sets `no-referrer` so navigating to conference sites does not forward the private token URL.

## Pause, monitor and remove

Run **disableEmailSending** in the editor to stop all new emails. Cancellation/management of existing subscriptions remains available. Disable `emailRemindersEnabled` in the website configuration as well when taking the service offline. Inspect **Executions** and the **Triggers** page for failures; no browser needs to stay open.

The owner can inspect or delete the private data in the spreadsheet. Before editing rows manually, disable sending to avoid races. Do not remove/reorder the table headers or edit ledger states casually. For a complete reset, disable sending, delete the Apps Script trigger and deployment, remove the private spreadsheet and clear `SPREADSHEET_ID`; running `setup()` later creates a new empty backend.

## Validation

Run from the repository root:

```sh
node --test tests/email.test.mjs tests/email-ui.test.mjs
```

Tests run the backend in a Node VM with Google services stubbed. They cover opt-in, token expiry, safe GET links, unsubscribe, limits, locks, DST/AoE, catalogue validation/failure, rescheduling, paused events, grouping, deduplication and uncertain sends. They do not send real mail or create Google resources. A real anonymous `/exec` deployment and owner-approved email round trip still require the one-time owner steps above.

Official references: [Web apps](https://developers.google.com/apps-script/guides/web), [anonymous/owner deployment settings](https://developers.google.com/apps-script/manifest/web-app-api-executable), [HTML-service RPC](https://developers.google.com/apps-script/guides/html/communication), [MailApp](https://developers.google.com/apps-script/reference/mail/mail-app), [quotas](https://developers.google.com/apps-script/guides/services/quotas), [time triggers](https://developers.google.com/apps-script/reference/script/clock-trigger-builder), [locks](https://developers.google.com/apps-script/reference/lock/lock-service).
