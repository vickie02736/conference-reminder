# Conference Reminder

[Visit the website](https://vickie02736.github.io/conference-reminder/)

An English conference catalogue for AI, AI for Materials, MOF/COF, porous materials, adsorption and simulation, with a focus on the UK and Europe. The research snapshot includes **166 dated activities (including 2 finished meetings kept for reference) and 8 announcements awaiting confirmed dates**. Conference dates were initially researched on 27 October 2026; molecular and atomistic simulation coverage was expanded on 2 November 2026 with 33 dated activities and six pending announcements. Each entry records its own verification date. It is a curated collection rather than an exhaustive search engine. Associated workshops, schools and GRC/GRS meetings can be separate entries.

The [simulation coverage review](research/simulation-expansion-2026-11-02.md) records the sources searched, inclusion rules and unresolved announcements. New activities include molecular dynamics, enhanced sampling, free energies, multiscale modelling, computational chemistry, biomolecular simulation and relevant soft-matter meetings. Vendor training and broader adjacent conferences are labelled in their research-fit notes. Conflicting deadlines and dates visible only in indexed announcements remain unavailable for reminders until verified.

The [approved candidate-review decisions](research/candidate-review-decisions-2026-11-03.md) add 25 activities, resolve 10 duplicate leads, dismiss 54 excluded leads and retain nine uncertain candidates. Existing ICML 2027 now has confirmed dates and has moved out of the watchlist. Duplicate and exclusion reasons, original links and stable IDs remain in the [decision ledger](data/candidate-review-decisions-2026-11-03.json), so dismissed URLs remain suppressed during future discovery.

## Sharing with the research group

Share [the public website](https://vickie02736.github.io/conference-reminder/) directly. Each visitor chooses their own conferences, dates, lead times and email address; no Google sign-in is required. They must confirm their email before reminders become active. Private management links show only that email address’s subscriptions; each person’s choices remain independent.

**Send reminder** is the reminder action on each conference card. Email reminders continue with the page closed. A blocked confirmation request explicitly says no email was sent and asks the visitor to retry, so it cannot be mistaken for a saved subscription.

## Explore and set reminders

- Search and filter by region, status and sorting in the main bar. **Registration deadline** and **Submission deadline** sort by the next verified future cutoff for that route, with unavailable dates last. **More filters** contains topic, activity, year and source-check status; its count shows active choices. UK & Europe is the default, including the NeurIPS Paris attendance option.
- **Search conferences & people** also searches organisers, hosts, committee members, chairs, invited speakers, announced participants, affiliations and roles. Search words can span different fields, and unaccented names match accented spellings. Choose **Worldwide** to search every region. Matching people details open automatically when all search words occur in the people information.
- **Organisers, committee & speakers** on each card lists published names, roles, institutions, source links and the people-source review date. Large committees and programmes may have selected entries, as stated in the note. Missing current-edition lists remain explicit; earlier editions are not substituted, and a role announcement is not a private attendance list.
- **Topic** groups related keywords into seven categories: AI & Machine Learning; AI for Materials & Chemistry; MOFs, COFs & Porous Materials; Adsorption & Separations; Simulation & Theory; Materials & Characterisation; and Automation & Digital Chemistry. Cards show these same groups. Detailed research keywords remain searchable and appear under **Dates, research fit & sources**; schools and courses belong to **Activity**.
- The scrollable **Timeline** uses exactly the visible conference results. It shows conference dates by default, or the selected registration, submission, application or opening dates. Dates awaiting confirmation stay explicit. Select an entry to jump to its highlighted card, then use **Back to timeline** to return.
- **Sources to review**, **Source errors** and **Sources not automatically checkable** show all affected activities worldwide. Use the separate Source check filter to combine evidence status with other filters. Source review is distinct from unconfirmed conference dates or attendance availability. Bot challenges, JavaScript-only pages and timeouts are marked unverifiable rather than failed.
- Scheduled and pending totals use the same classification as the cards. Announced but unverified dates remain provisional; pending activities show **Dates not confirmed** until reminders can be offered.
- Each entry links to its official website and evidence. Closed submissions, full events, invitation-only attendance and conflicting dates remain visible.
- Each conference card can show several current statuses together, including registration, oral/abstract/poster/paper submission, opening soon, closed routes and an ongoing meeting. The Status filter matches these labels and works with the other filters. Oral and poster routes are distinguished only when the published information identifies them. A deadline alone does not confirm that a platform is open: those routes are explicitly labelled “opening unconfirmed”; selecting Finished also enables past events.
- **Send reminder** opens the Google Apps Script service in a new tab. Select dates and lead times, then verify your email to activate server reminders.
- Changing a reminder time zone refreshes date availability before submitting. Existing subscribers can still unsubscribe if the public conference catalogue is temporarily unavailable.

The former local date tracker and browser notification interface have been retired. Existing `academic-conferences-v1` records are left untouched in browser storage. They are not automatically converted into email subscriptions; choose **Send reminder** and verify your email to activate email reminders.

## Daily official-source checks

`site.yml` checks registered source URLs daily at **01:17 UTC** (01:17 in UK winter time, 02:17 in UK summer time) and supports [manual runs](https://github.com/vickie02736/conference-reminder/actions/workflows/site.yml). Choose **Run workflow**, keeping `refresh_sources` enabled. Running it requires repository access.

The updater recognises narrowly scoped EuroMOF deadline/platform statements, the authoritative AI4Mat schedule, and matching official JSON-LD Event records. Other sources are monitored for content changes and remain marked for review until reviewed; a stable page hash or a parser that verifies only some fields does not verify other changed facts. Fingerprints preserve published clock times and ignore only labelled update timestamps. The first check after upgrading an older fingerprint may require a one-time review of previously ignored times. Dynamic pages, PDFs, ambiguous dates and site changes are not silently converted into deadlines. A failed or unverifiable fetch retains the last trusted facts. Explicit cancellation or rescheduling evidence pauses email scheduling until reviewed.

The website distinguishes the last attempted source check from initial research/latest supported-fact verification. Fetching a page successfully does not verify every fact. Check status, source hashes and a bounded change history are public. Fetched page bodies are not committed; each source-check run keeps the exact fingerprinted text as a `source-text` workflow artifact for 7 days, so manual reviews can read what the hash describes.

GitHub Actions schedules can be delayed, and public-repository schedules can be disabled after 60 days without repository activity. The site marks checks older than 48 hours as overdue. See [GitHub’s schedule documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule).

To verify an unadapted source manually, review its current official content and all affected fields, update the corresponding facts and evidence in `data/conferences.json`, and clear that event’s `review_required` flag/message under the URL in `data/source-checks.json`. Record the actual verification date. Review against the text the daily check fingerprinted: download it with `gh run download <run-id> -n source-text`, where `index.json` maps each URL to its hash and text file, and set `reviewed_hash` to that stored hash. A page fetched from another network can differ from the runner’s copy, so a locally computed hash would reopen the review on the next check. When a source is new or replaced, do not write a `hash` for it; the next scheduled check records the first baseline without reopening the review. If a site blocks the runner, review it in a browser and keep its last trusted facts. Clear `reminders_paused` only after resolving any cancellation/rescheduling notice. Adding an adapter with representative tests enables future automatic parsing.

People are stored on each event in `people`, with `organizers`, `committee`, `speakers` and `participants` arrays. Each entry requires a name, published role and source; affiliation is optional. `people.sources` records the pages reviewed, and `checked_on` records that separate review date. People source URLs also enter the event’s monitored `sources`; the daily checker flags page changes for review and preserves the curated names. People pages use the readable body for monitoring so rosters outside a page’s main landmark are included; date parsing retains its original scope. The first check of an existing source under this wider fingerprint can require a one-time review. The checker does not automatically extract or verify people lists.

## Daily web discovery

The same daily workflow can search the web for possible new conferences with the [You.com Web Search API](https://you.com/docs/guides/search). The default provider is configured in `data/discovery-config.json` and currently uses `https://ydc-index.io/v1/search`; add the repository secret `YOU_API_KEY` before enabling it. The key is read only by GitHub Actions and is never written to the repository or sent to the browser. For a Brave deployment, change `provider` and `endpoint` back to Brave and add `BRAVE_SEARCH_API_KEY`; the workflow exposes both secrets to keep the provider switch configuration-only.

These results are leads for review. A search title or snippet is not official evidence, so candidates are not added to `events` or `watchlist`, cannot receive reminders, and do not enter the source-check updater automatically. Review the linked organiser page, add a confirmed activity to `data/conferences.json`, and register its official URLs in `data/source-adapters.json` when a parser is appropriate. Candidate review status can be kept in the JSON file; the public site displays the latest candidates separately. If the secret is missing, the scheduled step exits cleanly and reports that discovery was skipped. The search index is broad but cannot guarantee exhaustive internet coverage, and its API may impose quotas or costs.

The query set, topic terms, score threshold and candidate cap are in `data/discovery-config.json`. Run a local dry check with `YOU_API_KEY=… python3 scripts/discover_conferences.py --dry-run` (or use `--api-key-env BRAVE_SEARCH_API_KEY` for Brave). The workflow also exposes a **discover_conferences** switch for manual runs; the scheduled run keeps it enabled every day.

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

### 来源语义复核：以运行器正文为准

从独立工作树开始，先 `git pull`；提交前再次拉取，避免覆盖其他维护者的更新。不要对原工作目录执行 stash 或 reset。

1. 用 `gh run list --workflow site.yml -L 5` 找最近实际执行来源检查的定时运行或 `refresh_sources=true` 手动运行。用 `gh run download <运行编号> -n source-text -D /tmp/source-text-<运行编号>` 下载附件（保留 7 天）。先确认 `index.json` 的 URL 哈希与当前 `data/source-checks.json` 一致；不一致应换用更新运行的附件。
2. 按 `data/review-progress.json` 的 `(event_id, source)` 队列，将附件指定的完整正文与此前运行正文逐行比较，只核对差异涉及的日期、钟点、时区、截止、状态、人员及机构。事实修改须有官方原文引用；冲突保持 `conflict`，不推断钟点或时区；录用通知不建提醒节点。
3. 完成核实的来源活动检查写入 `review_required=false`、`reason=null`、`message=null`，`reviewed_hash` 直接采用匹配附件中的值，`reviewed_at` 用实际 UTC 时间，`review_method="runner_text"`、`review_run` 用运行编号，`evidence` 保存中文证据摘要。部分核实仍保留未解字段。重算活动的 `check.status` 与 `check.message`，再运行 `python3 scripts/review_backlog.py`。
4. 附件 `ok=false` 且没有正文文件时可用浏览器核实，记录 `review_method="browser"` 并在证据中说明；保留原有可信事实，不写入或修改来源哈希。新增或替换 URL 只写检查记录，下一次日常检查自行建立首个哈希基准。
5. 验证码、计数器、随机令牌等持续噪声应在 `VOLATILE_TEXT` 中增加精确模式并补回归测试，使用附件正文迁移受影响的已存哈希；不能用本机正文登记已完成复核或每天手动结案。

提交前必须通过 `npm test` 与 `python3 scripts/validate_catalog.py`；推送后确认发布及线上数据一致。历史复核记录保持原样，纠正记录应另存并保留前后来源。

GitHub Pages uses **GitHub Actions**, not legacy branch publishing. The combined workflow validates and tests changes, optionally updates catalogue data with a normal commit, and explicitly deploys only `index.html`, `config.json`, `assets/` and `data/`. Email service code, tests, owner documentation and research intermediates are excluded from the public Pages artifact. A bot data commit alone would not trigger legacy Pages publishing.
