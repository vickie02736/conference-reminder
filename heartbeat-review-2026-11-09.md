# 2026-11-09 Conference Reminder 复核结果

日常[来源检查及发布42582737047](https://github.com/vickie02736/conference-reminder/actions/runs/42582737047)成功；本轮未重复执行。已读取会议数据、source-checks、队列及全部历史复核记录，使用独立checkout，未stash/reset主目录。

语义积压：上轮71，日常新增7、移出0，本轮开始78；批次新增0，解决9、部分核实4，剩余69条／65个来源。
来源传输：36条活跃（{'unverifiable': 30, 'failed': 6}），3条由替代来源覆盖；全部39条均完成有限重试及已有替代入口检查。新失败6；活跃中13条有本轮运行器可用官方替代入口（不保证全字段等价），11条本机当次可读。原址稳定恢复0；单次日常成功1，连续两次6，连续三次4，均分列观察。
历史已替代旧址12条保留审计，本轮未新增旧址替换，不重复报警。

## 重要变化

- [官方来源](https://cecamsimul.eu/events/events-2026)：官方实时页面200确认CECAM–ESI学校2027年8月23日至9月3日、Vienna及3位组织者机构；从观察项移入已排期，解除因日期未核实的暂停。注册/申请截止、精确场地、钟点时区未公布，保持未知；运行器403继续列传输问题。
- [官方来源](https://www.ai4am.net/2027/speakers.php)：AI4AM新增Juan Carrasquilla Alvarez（ETH Zürich，W4）和Aditi S Krishnapriyan（UC Berkeley，W1），补全Eunah Kim为W4邀请角色；主页精选更换不代表撤下Eunah。
- [官方来源](https://fems.org/industry-symposium-frankfurt-14-january-2027/)：FEMS补录Wide Hogenhout为已列名讲者，明确保留名单confirmed与初步节目to be confirmed的确认状态冲突。
- [官方来源](https://rscfirst.org.cn/)：首页注册横幅现指向11月15日，与目录已存标准注册日期一致；不当作新增延期，未补钟点/时区。
- [官方来源](https://www.iswpm26.org/)：修复ISWPM结构化URL编码后缀噪声；同时修复Chemistry注册3张独立收费卡随机排序，完整保留金额/日期/票种；使用本轮运行器正文迁移3个hash并保存原始指纹审计，避免每天重复结案。

## 本轮逐条证据

1. `rsc-first-2026-ai-in-chemistry` — [原址](https://rscfirst.org.cn/)；原问题`content_changed` → `resolved`；核实于2026-11-09T09:05:11.846361+00:00。与11月8日运行器逐行差异仅首页横幅从“Deadline：15 October 2026”改为“Deadline: 15 November 2026”。下方标准注册15 November、早鸟15 October、摘要15 September及主席/6位大会讲者角色机构未变；与目录已存标准注册2026-11-15一致，不算新增延期。未声明截止钟点/时区，保留日级。
2. `advanced-chemistry-world-congress-2027` — [原址](https://www.chemistryconferences.com/registration)；原问题`content_changed` → `resolved`；核实于2026-11-09T09:05:11.846361+00:00。与11月8日运行器逐行比对，仅E-POSTER、POSTER、ONE DAY REGISTRATION三张独立票种卡片排序变化；各自全部金额、18 Nov 2026、18 Jan 2027、18 Mar 2027及其他字段原样。新增受控卡片排序归一化，完整保留票种/金额/日期/文本，回归测试验证事实变更仍触发hash。未补钟点/时区。
3. `17th-international-symposium-on-wettability-and-porous-media-7th-interpore-benelux-meeting-iswpm26` — [原址](https://www.iswpm26.org/)；原问题`content_changed` → `resolved`；核实于2026-11-09T09:05:11.846361+00:00。与11月8日运行器逐行差异仅结构化URL尾部version=latest累积编码JSON闭合符；2026-11-30至12-02及Amsterdam、5位LOC姓名角色机构未改，作者注册页仍仅账户表单。已为这个域名/路径/已观察编码后缀增加精确VOLATILE_TEXT规则及防误删测试。未公布新截止、钟点/时区；不据账户入口断言接受迟交。
4. `17th-international-symposium-on-wettability-and-porous-media-7th-interpore-benelux-meeting-iswpm26` — [原址](https://www.iswpm26.org/172246/author?version=latest)；原问题`content_changed` → `resolved`；核实于2026-11-09T09:05:11.846361+00:00。与11月8日运行器逐行差异仅结构化URL尾部version=latest累积编码JSON闭合符；2026-11-30至12-02及Amsterdam、5位LOC姓名角色机构未改，作者注册页仍仅账户表单。已为这个域名/路径/已观察编码后缀增加精确VOLATILE_TEXT规则及防误删测试。未公布新截止、钟点/时区；不据账户入口断言接受迟交。
5. `interpore2027` — [原址](https://event.fourwaves.com/interpore2027)；原问题`content_changed` → `partial_conflict`；核实于2026-11-09T09:05:11.846361+00:00。与11月8日逐行差异仅新增Bronze Sponsor标题；日期/钟点/时区与人员不变。平台仍显示摘要期末January 12, 2027 - 4:00 AM -03，Important Dates为11 January；无官方延期说明，冲突继续保留。 未解：abstract deadline: Important Dates 2027-01-11 vs platform 2027-01-12 04:00 UTC-03。
6. `icfmce-2027` — [原址](https://www.icfmce.org/Chinese.html)；原问题`content_changed` → `partial_conflict`；核实于2026-11-09T09:05:11.846361+00:00。与11月8日逐行差异仅新增往届“ICFMCE 2025已见刊”及ISBN通知，不属于2027日期节点。当前会议9月24–26、摘要3月18、全文4月1、早鸟6月23及主承协办关系原样；未公布钟点/时区。重要日期表注册7月11与收费表常规注册至9月23仍不同，未说明类别，保留冲突。 未解：registration deadline: important-dates 2027-07-11 vs regular-fee window through 2027-09-23。
7. `tyc20-celebration-of-the-thomas-young-centre-at-20` — [原址](https://www.thomasyoungcentre.org/wp-content/uploads/2025/11/20261106-TYC20-Summary-Programme.pdf)；原问题`content_changed` → `partial_conflict`；核实于2026-11-09T09:05:11.846361+00:00。review_method=browser：运行器PDF ok=true但没有file，不登记runner_text或本机hash。本轮官方PDF下载与11月8日已逐页目视复核的两页PDF字节一致；14–15 December、讲者与7位主持未变。Closing remarks为16:30–16:40，活动页结束17:00且均未明示时区；继续保留该差异。 未解：end clock: programme 16:40 vs event page 17:00; timezone unpublished。
8. `7th-fems-industry-symposium-materials-assisted-by-digital-science` — [原址](https://fems.org/industry-symposium-frankfurt-14-january-2027/)；原问题`content_changed` → `partial_conflict`；核实于2026-11-09T09:05:11.846361+00:00。11月3日复核对应附件已空/过期；最早可用11月5日与本轮正文逐行一致，另对照存储字段完整核对。14 January 2027、Fraport-Visitor Center、免费且注册开放，无截止日/截止钟点/时区；节目08:30签到至17:00结束属初步节目钟点，未当截止。两位主席、5位委员会和既存讲者机构相符。名单增加此前漏收Wide Hogenhout（European Commission, DG Research and Innovation）；名单说confirmed，初步节目Dr Wide写to be confirmed，确认状态保留。 未解：speaker confirmation: Wide Hogenhout in confirmed list vs preliminary Dr Wide slot to be confirmed。
9. `aaai-2027` — [原址](https://aaai.org/conference/aaai/aaai-27/)；原问题`content_changed` → `resolved`；核实于2026-11-09T09:05:11.846361+00:00。最早可用11月5日至本轮正文逐行一致；此前无review_run，按存储事实完整核对：Montréal 16–23 February 2027；主论文July28 11:59 PM UTC-12对应23:59 Etc/GMT+12，组织者AAAI无变。作者反馈两组日期原文并存但不属提醒截止；November30仅录用通知不建节点。December14 camera-ready有日期但没有专属钟点，未猜测23:59。
10. `aaai-2027` — [原址](https://aaai.org/conference/aaai/aaai-27/conference-organizers-2/)；原问题`content_changed` → `resolved`；核实于2026-11-09T09:05:11.846361+00:00。最早可用11月5日至本轮逐行一致；此前无review_run，完整对照目录所收8位：Kevin Leyton-Brown/UBC大会委员会主席，Edith Elkind/Northwestern总主席，Yan Liu/USC与Balaraman Ravindran/IIT Madras程序共同主席，Dylan Hadfield-Menell/MIT AI Alignment主席，Bryan Wilder/CMU、Andrew Perrault/Ohio State、Sarath Sreedharan/Colorado State为AI for Social Impact共同主席，均相符。会议日期未改，无新的截止钟点/时区或讲者名册。
11. `ai4am-2027-ai-for-advanced-materials` — [原址](https://www.ai4am.net/2027/speakers.php)；原问题`content_changed` → `resolved`；核实于2026-11-09T09:05:11.846361+00:00。与最早可用11月5日运行器逐行对比：新增Juan Carrasquilla Alvarez（ETH Zürich，Invited W4）及Aditi S Krishnapriyan（University of California Berkeley，Invited W1），其余讲者机构与主旨/邀请角色原样；将已有Eunah Kim按明确W4邀请角色补全。19–22 October 2027、San Sebastián未改，无新截止或钟点时区。
12. `ai4am-2027-ai-for-advanced-materials` — [原址](https://ai4am.net/2027/index.php)；原问题`content_changed` → `resolved`；核实于2026-11-09T09:05:11.846361+00:00。与11月5日运行器差异：主页精选讲者由Eunah Kim/Cornell换为Aditi S Krishnapriyan/UC Berkeley，计数25变27；主页精选不等于移除Eunah，其仍在完整名单W4。两位新增讲者角色机构由完整讲者页核实。会议19–22 October 2027、San Sebastián及QuAI并行活动不变；无新截止/钟点/时区。
13. `cecam-esi-simulation-scales-2027` — [原址](https://cecamsimul.eu/events/events-2026)；原问题`content_changed` → `resolved`；核实于2026-11-09T09:05:11.846361+00:00。review_method=browser：本轮官方实时HTML返回200，已读取对应学校完整条目，核实23.08.2027–03.09.2027、Wien, Austria及3位组织者/机构。明确注释此为2027活动，消除仅搜索快照的临时日期问题；registration will open next year，仍未给申请/注册截止、精确场地、钟点或时区，保持unknown。最新运行器403，无file，不修改已有hash；本机单次内容可核实不等于日常恢复。

## 全部剩余语义复核项

1. `esat-2027-35th-european-symposium-on-applied-thermodynamics` — [原址](https://www.esat2027.com/speakers/)；Florence Vermeire affiliation: heading University of South Carolina vs biography KU Leuven；待核实字段：Florence Vermeire affiliation: heading University of South Carolina vs biography KU Leuven。此前部分核实且hash未变；无新官方解释，跳过重复核对。
2. `camml2027` — [原址](https://spring2027.camml.ac.uk/about/)；Official conflicts remain: accommodation 4 vs 5 nights; acceptance notification 17 vs 19 December. Registration status and support-letter year are resolved.；待核实字段：accommodation nights: PSDI 4 vs about 5, acceptance notification: PSDI 2026-12-17 vs about 2026-12-19 (no reminder)。此前部分核实且hash未变；无新官方解释，跳过重复核对。
3. `7th-fems-industry-symposium-materials-assisted-by-digital-science` — [原址](https://fems.org/industry-symposium-frankfurt-14-january-2027/)；speaker confirmation: Wide Hogenhout in confirmed list vs preliminary Dr Wide slot to be confirmed；待核实字段：speaker confirmation: Wide Hogenhout in confirmed list vs preliminary Dr Wide slot to be confirmed。本轮部分核实；仅保留所列未解字段。
4. `bmss-bioms-sig-2027` — [原址](https://www.bmss.org.uk/biomacromolecular-structure-sig-meeting-2027/)；The overview still says registration is open until 12 January 2027 while the Day 1 booking page says it closes at midnight on Tuesday 15 January 2027; no official statement resolves this.；待核实字段：registration deadline (conflict 2027-01-12 vs 2027-01-15)。此前部分核实且hash未变；无新官方解释，跳过重复核对。
5. `bmss-bioms-sig-2027` — [原址](https://www.bmss.org.uk/meeting-booking/biomacromolecular-structure-training-event-2027-day-1/)；The booking page's 'midnight on Tuesday 15th of January 2027' is internally inconsistent (15 January 2027 is a Friday; 12 January is a Tuesday) and contradicts the overview's 12 January; BMSS must confirm.；待核实字段：registration deadline (conflict 2027-01-12 vs 2027-01-15)。此前部分核实且hash未变；无新官方解释，跳过重复核对。
6. `computational-chemistry-day-2027` — [原址](https://www.compchemday.org/)；The official site still only says the 7th Computational Chemistry Day is planned for spring 2027; exact dates, venue and registration details are not yet published.；待核实字段：start/end, location, registration opening/deadline, people。此前部分核实且hash未变；无新官方解释，跳过重复核对。
7. `digital-chemistry2027` — [原址](https://www.rsc.org/events/find-an-event/digital-chemistry-discovery-faraday-discussion)；oral abstract deadline: 2026-12-14 vs 2027-03-14；待核实字段：oral abstract deadline: 2026-12-14 vs 2027-03-14。此前部分核实且hash未变；无新官方解释，跳过重复核对。
8. `euromof2027` — [原址](https://euromof2027.com/)；registration availability: homepage open vs registration page SOON available；待核实字段：registration availability: homepage open vs registration page SOON available。此前部分核实且hash未变；无新官方解释，跳过重复核对。
9. `euromof2027` — [原址](https://euromof2027.com/abstracts/)；submission availability: SOON available heading vs submission portal link; Submission platform status is no longer recognised; verify it before changing the status.；待核实字段：submission availability: SOON available heading vs submission portal link。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
10. `euromof2027` — [原址](https://euromof2027.com/registration/)；registration availability: homepage open vs registration page SOON available；待核实字段：registration availability: homepage open vs registration page SOON available。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
11. `icfmce-2027` — [原址](https://www.icfmce.org/Chinese.html)；registration deadline: important-dates 2027-07-11 vs regular-fee window through 2027-09-23；待核实字段：registration deadline: important-dates 2027-07-11 vs regular-fee window through 2027-09-23。本轮部分核实；仅保留所列未解字段。
12. `interpore2027` — [原址](https://event.fourwaves.com/interpore2027)；abstract deadline: Important Dates 2027-01-11 vs platform 2027-01-12 04:00 UTC-03；待核实字段：abstract deadline: Important Dates 2027-01-11 vs platform 2027-01-12 04:00 UTC-03。本轮部分核实；仅保留所列未解字段。
13. `interpore2027` — [原址](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a)；abstract deadline: Important Dates 2027-01-11 vs platform 2027-01-12 04:00 UTC-03；待核实字段：abstract deadline: Important Dates 2027-01-11 vs platform 2027-01-12 04:00 UTC-03。此前部分核实且hash未变；无新官方解释，跳过重复核对。
14. `interpore2027` — [原址](https://event.fourwaves.com/interpore2027/submission)；The submission page says January 12, 2027 while Important Dates says 11 January 2027; unresolved. The page is a JS app the daily fetcher cannot read, but it is live in a browser.；待核实字段：abstract deadline conflict。此前部分核实且hash未变；无新官方解释，跳过重复核对。
15. `tyc20-celebration-of-the-thomas-young-centre-at-20` — [原址](https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce)；registration deadline: TYC 2026-11-01 vs KCL eStore 2026-11-08; no official extension explanation; student-ticket availability: historical Fully Booked vs current runner Book Event; current acceptance not verified；待核实字段：registration deadline: TYC 2026-11-01 vs KCL eStore 2026-11-08; no official extension explanation, student-ticket availability: historical Fully Booked vs current runner Book Event; current acceptance not verified。此前部分核实且hash未变；无新官方解释，跳过重复核对。
16. `tyc20-celebration-of-the-thomas-young-centre-at-20` — [原址](https://thomasyoungcentre.org/event/tyc20-celebration-of-the-thomas-young-centre-at-20/)；registration deadline: TYC 2026-11-01 vs KCL eStore 2026-11-08; no official extension explanation; student-ticket availability: historical Fully Booked vs current runner Book Event; current acceptance not verified; end clock: event page 17:00 vs programme closing remarks 16:40; timezone unpublished；待核实字段：registration deadline: TYC 2026-11-01 vs KCL eStore 2026-11-08; no official extension explanation, student-ticket availability: historical Fully Booked vs current runner Book Event; current acceptance not verified, end clock: event page 17:00 vs programme closing remarks 16:40; timezone unpublished。此前部分核实且hash未变；无新官方解释，跳过重复核对。
17. `tyc20-celebration-of-the-thomas-young-centre-at-20` — [原址](https://www.thomasyoungcentre.org/wp-content/uploads/2025/11/20261106-TYC20-Summary-Programme.pdf)；end clock: programme 16:40 vs event page 17:00; timezone unpublished；待核实字段：end clock: programme 16:40 vs event page 17:00; timezone unpublished。本轮部分核实；仅保留所列未解字段。
18. `advanced-materials-world-congress-2027` — [原址](https://www.materialsscienceconference.com/)；Dynamic welcome-message excerpts vary; factual fields verified, safe normalization still needs evidence.；待核实字段：dynamic welcome-message excerpt normalization: must preserve dates, times, roles and institutions。此前部分核实且hash未变；无新官方解释，跳过重复核对。
19. `ai4mat-neurips-2026` — [原址](https://sites.google.com/view/ai4mat/schedule)；The authoritative AI4Mat schedule sentence is missing or ambiguous.；待核实字段：dates, times, timezones, people_roles_affiliations。此前部分核实且hash未变；无新官方解释，跳过重复核对。
20. `ai4x-2027` — [原址](https://ai4x.cc/2027/about/committees/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
21. `ai4x-2027` — [原址](https://ai4x.cc/2027/speakers/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
22. `aiml-2027-urf` — [原址](https://artificialintelligence-forum.com/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
23. `aiml-2027-urf` — [原址](https://artificialintelligence-forum.com/important-dates.php)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
24. `aimse2027` — [原址](https://dgm.de/aimse/2027/about/contact)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
25. `aixmat-2026-ai-in-materials-research-summit` — [原址](https://aixmat.candela.org.pl/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
26. `aric-advanced-adsorption-course-kinetic-measurements-using-macroscopic-techniques` — [原址](https://www.carboncapture.eng.ed.ac.uk/ARIC_Course)；The course website timed out for the daily fetcher, WebFetch (504) and curl, so the early-registration date, the limited-places status and the guest lecturer cannot be re-verified; existing facts are kept unchanged.；待核实字段：early_registration 2027-01-08, status: limited places, people.speakers: Peter Ravikovitch, people.organizers: University of Edinburgh Adsorption Group, daily schedule times。此前部分核实且hash未变；无新官方解释，跳过重复核对。
27. `aric-advanced-adsorption-course-kinetic-measurements-using-macroscopic-techniques` — [原址](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
28. `automated-intelligent-chemistry-2026` — [原址](https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
29. `biomolecular-dynamics-berlin-2027` — [原址](https://www.biophysics.org/events-calendar)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
30. `biomolecular-dynamics-berlin-2027` — [原址](https://www.biophysics.org/upcoming-thematic-meetings/biomolecular-dynamics-integrating-experiments-and-computation)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
31. `bps-annual-meeting-2027` — [原址](https://www.biophysics.org/events-calendar)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
32. `bps-protons-in-biology-2027` — [原址](https://www.biophysics.org/blog/message-from-the-organizers)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
33. `ccg-ugm-europe-2027` — [原址](https://www.chemcomp.com/en/UGM-2027-Europe.htm)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
34. `dgm-aimse-2027` — [原址](https://dgm.de/aimse/2027/about/contact)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
35. `dpg-school2027` — [原址](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
36. `dpg-school2027` — [原址](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
37. `e-mrs-spring-meeting-2027` — [原址](https://www.european-mrs.com/computations-materials-%E2%80%93-discovery-design-and-role-ai-emrs)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
38. `e-mrs-spring-meeting-2027` — [原址](https://www.european-mrs.com/materials-properties-finite-temperature-atomic-scale-modelling-methodologies-applications-and-beyond)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
39. `e-mrs-spring-meeting-2027` — [原址](https://www.european-mrs.com/meetings/2027-spring-meeting-exhibit)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
40. `ecomat-conference-2026` — [原址](https://events.polyu.edu.hk/ecomat2026/home)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
41. `fems-euromat-2027` — [原址](https://fems.org/fems-euromat-2027/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。此前部分核实且hash未变；无新官方解释，跳过重复核对。
42. `feza2029-11th-conference-of-the-federation-of-european-zeolite-associations` — [原址](https://www.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
43. `ibs-2027` — [原址](https://www.chem.iitb.ac.in/ibs2027/program.php)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
44. `iclr-2027` — [原址](https://www.iclr.cc/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
45. `introduction-to-machine-learning-for-chemists-workshop` — [原址](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
46. `materials-chemistry-poster-symposium-2026` — [原址](https://www.rsc.org/events/find-an-event/materials-chemistry-poster-symposium)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
47. `materials-science-2027-src` — [原址](https://www.srcmeetings.com/upcoming-conferences/materials-science-2027-advanced-materials-nanotechnology-structural-composites)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
48. `materials-today-conference-2027` — [原址](https://www.elsevier.com/en-gb/events/conferences/all/materials-today-conference/committee-and-speakers)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
49. `mmm12-12th-international-conference-on-multiscale-materials-modeling` — [原址](https://www.mmm12.org/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
50. `moansi-2026` — [原址](https://moansi2026.pages.math.cnrs.fr/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
51. `mrs-fall2026` — [原址](https://www.mrs.org/meetings-events/annual-meetings)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
52. `nanoporous-grc2027` — [原址](https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/)；Chair and vice-chair names are rendered as images with no alt text; neither the full DOM text, the alt-text list, nor the GRC conference-history page (WebFetch) contains them as text, so the four committee entries still need a visual/screenshot check.；待核实字段：people: committee (chairs/vice chairs, names rendered as images without alt text)。此前部分核实且hash未变；无新官方解释，跳过重复核对。
53. `nanoporous-grs2027` — [原址](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/)；The chair names are images with no alt text; neither the full DOM, the alt-text list nor the GRS conference-history page (WebFetch) contains them as text, so the two recorded co-chairs still need a visual check. All dates, deadlines and venue match.；待核实字段：people.committee: Hafsa Abdul Ghuffar, Haley Wellman (chair names rendered as images without alt text)。此前部分核实且hash未变；无新官方解释，跳过重复核对。
54. `neurips-2026` — [原址](https://neurips.cc/Conferences/2026/Dates)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
55. `neurips-2026` — [原址](https://nips.cc/Conferences/2026)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
56. `new-frontiers-in-nonequilibrium-statistical-physics-of-glasses` — [原址](https://mephysociety.wordpress.com/2026/05/06/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-vienna-nov30-dec4-2026/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。此前部分核实且hash未变；无新官方解释，跳过重复核对。
57. `new-frontiers-in-nonequilibrium-statistical-physics-of-glasses` — [原址](https://www.esi.ac.at/events/e610/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
58. `pmea2028-porous-materials-for-environmental-applications` — [原址](https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf)；The unibook.upjs.sk host times out entirely (the main www.upjs.sk site responds), so the PMEA2026 proceedings PDF and its 2028 announcement cannot be re-read; the record's unknown dates are left unchanged.；待核实字段：status: 2028 return to Slovakia announcement, location: Slovakia。此前部分核实且hash未变；无新官方解释，跳过重复核对。
59. `sampling-with-agents-2026` — [原址](https://www.thomasyoungcentre.org/event/tyc-soft-bio-interest-group-frontiers-in-molecular-sampling-rare-events-free-energies-and-kinetics/)；The TYC page only mentions the hackathon in passing (Institute of Physics, 8 December); no hackathon-specific official page with dates, registration or organisers was available, so dates remain unconfirmed.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
60. `sapem-2026-8th-symposium-on-the-acoustics-of-poro-elastic-materials` — [原址](https://sapem2026.matelys.com/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
61. `slas-europe-2027` — [原址](https://slas.org/events)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
62. `slas2027` — [原址](https://slas.org/events)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
63. `the-advanced-materials-show-2027` — [原址](https://event-partners.com/our-shows/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
64. `the-future-of-materials-discovery` — [原址](https://www.royalsociety.org/science-events-and-lectures/2027/03/future-of-materials-discovery/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
65. `tms2027` — [原址](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
66. `tms2027` — [原址](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
67. `tms2027` — [原址](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
68. `tu-darmstadt-sdl-workshop-2026` — [原址](https://www.tu-darmstadt.de/synbio/workshop/sdl_workshop/sdlworkshop.de.jsp)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。
69. `tyc-frontiers-molecular-sampling-2026` — [原址](https://www.thomasyoungcentre.org/event/tyc-soft-bio-interest-group-frontiers-in-molecular-sampling-rare-events-free-energies-and-kinetics/)；官方正文变化后尚未完成该条所列字段的逐项复核。；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项；下轮按优先级续接，不以缺适配器或可下载作为结案理由。

## 全部活跃传输问题

1. [原址](https://ai4science-amsterdam.github.io/news/chemai/)；原失败：Official source returned no readable page content.；本轮尝试：bounded_direct_retry：正文为空、过短或访问挑战，不能核实活动事实。 [证据](https://ai4science-amsterdam.github.io/news/chemai/)；[替代入口](https://www.acnetwork.nl/chemai)。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
2. [原址](https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/)；原失败：IncompleteRead(7761 bytes read)；本轮尝试：bounded_direct_retry：[Errno 54] Connection reset by peer；bounded_direct_retry：[Errno 54] Connection reset by peer；[替代入口](https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a)、[替代入口](https://psi-k.net/workshops/)、[替代入口](https://psi-k.net/wp-content/uploads/2026/03/2026_Psik_Poster_v1.pdf)。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
3. [原址](https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/)；原失败：IncompleteRead(15945 bytes read)；本轮尝试：bounded_direct_retry：[Errno 54] Connection reset by peer；bounded_direct_retry：[Errno 54] Connection reset by peer；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
4. [原址](https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/)；原失败：IncompleteRead(15943 bytes read)；本轮尝试：bounded_direct_retry：[Errno 54] Connection reset by peer；bounded_direct_retry：[Errno 54] Connection reset by peer；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
5. [原址](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552)；原失败：IncompleteRead(7641 bytes read)；本轮尝试：bounded_direct_retry：[Errno 54] Connection reset by peer；bounded_direct_retry：无可核实正文。 [证据](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552)；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
6. [原址](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897)；原失败：IncompleteRead(8192 bytes read)；本轮尝试：bounded_direct_retry：[Errno 54] Connection reset by peer；bounded_direct_retry：[Errno 54] Connection reset by peer；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
7. [原址](https://cecamsimul.eu/events/events-2026)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：Events 2026
Title
Date
Event type
Location
More info
Addressing key issues of software engineering for molecular medicine: from mixed precision calculations to quantum centric approaches and AI
Organi [证据](https://cecamsimul.eu/events/events-2026)；live_official_html：review_method=browser：本轮官方实时HTML返回200，已读取对应学校完整条目，核实23.08.2027–03.09.2027、Wien, Austria及3位组织者/机构。明确注释此为2027活动，消除仅搜索快照的临时日期问题；registration will open next year，仍未给申请/注册截止、精确场地、钟点或时区，保持unknown。最新运行器403，无file，不修改已有hash；本机单次内容可核实不等于日常恢复。 [证据](https://cecamsimul.eu/events/events-2026)；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=True，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；本机原址本轮可读，仅单次内容可取，不能证明日常自动抓取稳定恢复。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
8. [原址](https://ceramics.org/event/acers-spring-meeting-2027/symposium-23-ai-ml-for-materials-discovery-and-intelligent-manufacturing/)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：The symposium focuses on AI/ML applications in autonomous experimentation and self-driving laboratories for materials discovery and manufacturing. Special attention will be given to synergistic human– [证据](https://ceramics.org/event/acers-spring-meeting-2027/symposium-23-ai-ml-for-materials-discovery-and-intelligent-manufacturing/)；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；本机原址本轮可读，仅单次内容可取，不能证明日常自动抓取稳定恢复。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
9. [原址](https://ceramics.org/wp-content/uploads/2026/08/SpringMeeting27-CFP-2.pdf)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：HTTP Error 403: Forbidden；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
10. [原址](https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce)；原失败：HTTP Error 404: Not Found；本轮尝试：bounded_direct_retry：HTTP Error 404: Not Found；canonical_url_without_token：去token入口也404；浏览器首次有缓存，后续同址读取404，不能将其登记为可用替代来源或认定永久撤会。 [证据](https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20)；official_programme_pdf：PDF与前轮已逐页复核版本字节一致，支持日期及节目人员；不覆盖票务受理、余票或注册截止冲突。 [证据](https://www.thomasyoungcentre.org/wp-content/uploads/2025/11/20261106-TYC20-Summary-Programme.pdf)；[替代入口](https://thomasyoungcentre.org/event/tyc20-celebration-of-the-thomas-young-centre-at-20/)、[替代入口](https://www.thomasyoungcentre.org/wp-content/uploads/2025/11/20261106-TYC20-Summary-Programme.pdf)。最终`failed`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
11. [原址](https://github.com/UON-comp-chem/mm2027/blob/main/src/App.jsx)；原失败：HTTP Error 504: Gateway Time-out；本轮尝试：bounded_direct_retry：Files
Expand file tree
main
/
App.jsx
Copy path
Blame
More file actions
Blame
More file actions
Latest commit
History
History
History
379 lines (352 loc) · 12.5 KB
main
/
App.jsx
Copy path
Top
File me [证据](https://github.com/UON-comp-chem/mm2027/blob/main/src/App.jsx)；official_raw_source：官方仓库raw源码入口运行器ok=true，本轮浏览器亦可读；GitHub包装页504而源码可用，不修改包装页hash。未自动认为raw与GitHub网页的全部内容等价。 [证据](https://raw.githubusercontent.com/UON-comp-chem/mm2027/main/src/App.jsx)；[替代入口](https://raw.githubusercontent.com/UON-comp-chem/mm2027/main/src/App.jsx)。最终`failed`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；本机原址本轮可读，仅单次内容可取，不能证明日常自动抓取稳定恢复。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
12. [原址](https://icc2027.ieee-icc.org/authors/call-symposium-papers)；原失败：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1011)>；本轮尝试：bounded_direct_retry：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1082)>；bounded_direct_retry：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1082)>；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
13. [原址](https://spaininterpore.webs.upv.es/vii-annual-meeting-meet-the-speakers/)；原失败：HTTP Error 404: Not Found；本轮尝试：bounded_direct_retry：Home
»
Uncategorized
»
VII Annual Meeting: Meet the speakers
VII Annual Meeting: Meet the speakers
By
Marco Dentz
in
Uncategorized
on
October 22, 2026
The
VII Annual Meeting
is approaching. There stil [证据](https://spaininterpore.webs.upv.es/vii-annual-meeting-meet-the-speakers/)；official_browser_cache_and_institute_mirror：官方新闻缓存列5位既存讲者，身份机构相符；CIMNE机构页核对17–18 November及31 October注册/摘要，讲者页的运行器404与本机200并存，尚不足判永久失效或稳定恢复。 [证据](https://spaininterpore.webs.upv.es/vii-annual-meeting-meet-the-speakers/)；[替代入口](https://spaininterpore.webs.upv.es/vii-annual-meeting-registration-open/)、[替代入口](https://interpore.org/event/vii-annual-spain-interpore-meeting)。最终`failed`；内容核实=True，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；本机原址本轮可读，仅单次内容可取，不能证明日常自动抓取稳定恢复。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
14. [原址](https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf)；原失败：<urlopen error timed out>；本轮尝试：bounded_direct_retry：<urlopen error timed out>；bounded_direct_retry：<urlopen error timed out>；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
15. [原址](https://watoc2028.org/)；原失败：Official source returned no readable page content.；本轮尝试：bounded_direct_retry：正文为空、过短或访问挑战，不能核实活动事实。 [证据](https://watoc2028.org/)；[替代入口](https://www.watoc.net/watoc.congress.html)。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
16. [原址](https://www.aiche.org/conferences/aiche-annual-meeting/2026/2026-registration-info)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：HTTP Error 403: Forbidden；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
17. [原址](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：HTTP Error 403: Forbidden；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
18. [原址](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：HTTP Error 403: Forbidden；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
19. [原址](https://www.carboncapture.eng.ed.ac.uk/ARIC_Course)；原失败：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self-signed certificate (_ssl.c:1011)>；本轮尝试：bounded_direct_retry：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self-signed certificate (_ssl.c:1082)>；bounded_direct_retry：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self-signed certificate (_ssl.c:1082)>；[替代入口](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027)。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
20. [原址](https://www.euromat2027.com/)；原失败：<urlopen error [Errno 101] Network is unreachable>；本轮尝试：bounded_direct_retry：September 12 – 16, 2027 · Graz, Austria
19th European Congress & Exhibition on Advanced Materials and Processes
September 12–16, 2027
Graz, Austria
ASMET
Submit Abstract
Learn More
About FEMS EUROMAT  [证据](https://www.euromat2027.com/)；browser_cache：官网可读，日期12–16 September 2027、Graz、摘要31 January 2027及已存2位大会主席/2位Area D人员机构一致；当前日常网络失败，保留原hash。 [证据](https://www.euromat2027.com/)；[替代入口](https://fems.org/about-fems/fems-euromat-conference-series/fems-euromat/)、[替代入口](https://fems.org/fems-euromat-2027/)、[替代入口](https://fems.org/abtract-submission-is-now-open-for-fems-euromat-2027/)。最终`failed`；内容核实=True，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；本机原址本轮可读，仅单次内容可取，不能证明日常自动抓取稳定恢复。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
21. [原址](https://www.euromat2027.com/committee.html)；原失败：<urlopen error [Errno 101] Network is unreachable>；本轮尝试：bounded_direct_retry：Scientific Committee
Conference Chairs
The congress FEMS EUROMAT 2027 is organized by ASMET — The Austrian Society for Metallurgy and Materials — and is jointly chaired by Prof. Christof Sommitsch (TU [证据](https://www.euromat2027.com/committee.html)；browser_cache：官网可读，日期12–16 September 2027、Graz、摘要31 January 2027及已存2位大会主席/2位Area D人员机构一致；当前日常网络失败，保留原hash。 [证据](https://www.euromat2027.com/committee.html)；[替代入口](https://fems.org/about-fems/fems-euromat-conference-series/fems-euromat/)、[替代入口](https://fems.org/fems-euromat-2027/)、[替代入口](https://fems.org/abtract-submission-is-now-open-for-fems-euromat-2027/)。最终`failed`；内容核实=True，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；本机原址本轮可读，仅单次内容可取，不能证明日常自动抓取稳定恢复。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
22. [原址](https://www.grc.org/chemistry-and-physics-of-liquids-grs-conference/2027/)；原失败：HTTP Error 404: Not Found；本轮尝试：bounded_direct_retry：Phishing Alert
- GRC SPEAKERS AND DISCUSSION LEADERS ARE BEING TARGETED BY PHISHING ATTEMPTS DESIGNED TO COLLECT PAYMENT FOR REGISTRATION OR LODGING.
CLICK HERE FOR MORE DETAILS
Chemistry and Physics  [证据](https://www.grc.org/chemistry-and-physics-of-liquids-grs-conference/2027/)；本轮监测列表无可用等价替代入口。最终`failed`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；本机原址本轮可读，仅单次内容可取，不能证明日常自动抓取稳定恢复。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
23. [原址](https://www.grc.org/computer-aided-drug-design-conference/2027/)；原失败：Official source returned no readable page content.；本轮尝试：bounded_direct_retry：Phishing Alert
- GRC SPEAKERS AND DISCUSSION LEADERS ARE BEING TARGETED BY PHISHING ATTEMPTS DESIGNED TO COLLECT PAYMENT FOR REGISTRATION OR LODGING.
CLICK HERE FOR MORE DETAILS
Computer Aided Drug De [证据](https://www.grc.org/computer-aided-drug-design-conference/2027/)；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；本机原址本轮可读，仅单次内容可取，不能证明日常自动抓取稳定恢复。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
24. [原址](https://www.grc.org/computer-aided-drug-design-grs-conference/2027/)；原失败：Official source returned no readable page content.；本轮尝试：bounded_direct_retry：Phishing Alert
- GRC SPEAKERS AND DISCUSSION LEADERS ARE BEING TARGETED BY PHISHING ATTEMPTS DESIGNED TO COLLECT PAYMENT FOR REGISTRATION OR LODGING.
CLICK HERE FOR MORE DETAILS
Computer Aided Drug De [证据](https://www.grc.org/computer-aided-drug-design-grs-conference/2027/)；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；本机原址本轮可读，仅单次内容可取，不能证明日常自动抓取稳定恢复。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
25. [原址](https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/)；原失败：Official source returned no readable page content.；本轮尝试：bounded_direct_retry：Phishing Alert
- GRC SPEAKERS AND DISCUSSION LEADERS ARE BEING TARGETED BY PHISHING ATTEMPTS DESIGNED TO COLLECT PAYMENT FOR REGISTRATION OR LODGING.
CLICK HERE FOR MORE DETAILS
Nanoporous Materials a [证据](https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/)；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；本机原址本轮可读，仅单次内容可取，不能证明日常自动抓取稳定恢复。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
26. [原址](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/)；原失败：Official source returned no readable page content.；本轮尝试：bounded_direct_retry：HTTP Error 404: Not Found；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
27. [原址](https://www.grc.org/soft-condensed-matter-physics-conference/2027/)；原失败：Official source returned no readable page content.；本轮尝试：bounded_direct_retry：正文为空、过短或访问挑战，不能核实活动事实。 [证据](https://www.grc.org/soft-condensed-matter-physics-conference/2027/)；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
28. [原址](https://www.grc.org/soft-condensed-matter-physics-grs-conference/2027/)；原失败：Official source returned no readable page content.；本轮尝试：bounded_direct_retry：正文为空、过短或访问挑战，不能核实活动事实。 [证据](https://www.grc.org/soft-condensed-matter-physics-grs-conference/2027/)；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
29. [原址](https://www.siam.org/conferences-events/siam-conferences/ms27/)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：HTTP Error 403: Forbidden；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
30. [原址](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：HTTP Error 403: Forbidden；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
31. [原址](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：HTTP Error 403: Forbidden；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
32. [原址](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：HTTP Error 403: Forbidden；本轮监测列表无可用等价替代入口。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。现有监测列表无本轮运行器可用的等价替代入口；继续保留已知事实。 核实于2026-11-09T09:05:11.846361+00:00。
33. [原址](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：HTTP Error 403: Forbidden；[替代入口](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[替代入口](https://www.programmaster.org/TMS2027)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
34. [原址](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：Organizer Tools
Thank you for participating in the TMS 2027 Annual Meeting & Exhibition. This page contains tools that can assist you in generating interest in your symposium or presentation, includin [证据](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx)；[替代入口](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[替代入口](https://www.programmaster.org/TMS2027)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；本机原址本轮可读，仅单次内容可取，不能证明日常自动抓取稳定恢复。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
35. [原址](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：HTTP Error 403: Forbidden；[替代入口](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[替代入口](https://www.programmaster.org/TMS2027)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
36. [原址](https://www.tms.org/TMS2027/TMS2027/RegTravel/registration.aspx)；原失败：HTTP Error 403: Forbidden；本轮尝试：bounded_direct_retry：HTTP Error 403: Forbidden；[替代入口](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[替代入口](https://www.programmaster.org/TMS2027)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。

## 替代来源覆盖的传输问题

1. [原址](https://aichemy.ac.uk/event/aichemy-annual-conference-2027/)；原失败：IncompleteRead(7761 bytes read)；本轮尝试：bounded_direct_retry：[Errno 54] Connection reset by peer；bounded_direct_retry：[Errno 54] Connection reset by peer；[替代入口](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522)。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
2. [原址](https://event.fourwaves.com/interpore2027/submission)；原失败：Official source returned no readable page content.；本轮尝试：bounded_direct_retry：正文为空、过短或访问挑战，不能核实活动事实。 [证据](https://event.fourwaves.com/interpore2027/submission)；[替代入口](https://event.fourwaves.com/interpore2027)、[替代入口](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a)、[替代入口](https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4)、[替代入口](https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj)、[替代入口](https://api.fourwaves.com/api/events/interpore2027)。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。
3. [原址](https://uon-comp-chem.github.io/mm2027/)；原失败：Official source returned no readable page content.；本轮尝试：bounded_direct_retry：正文为空、过短或访问挑战，不能核实活动事实。 [证据](https://uon-comp-chem.github.io/mm2027/)；[替代入口](https://raw.githubusercontent.com/UON-comp-chem/mm2027/main/src/App.jsx)。最终`unverifiable`；内容核实=False，稳定自动抓取恢复=false；未解：最新GitHub运行器仍失败；原址有限重试未取得可核实正文。存在可读官方替代入口，但其覆盖范围以逐条证据为准。 核实于2026-11-09T09:05:11.846361+00:00。

## 本轮新增抓取失败

- [来源](https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce)
- [来源](https://www.euromat2027.com/)
- [来源](https://spaininterpore.webs.upv.es/vii-annual-meeting-meet-the-speakers/)
- [来源](https://www.euromat2027.com/committee.html)
- [来源](https://github.com/UON-comp-chem/mm2027/blob/main/src/App.jsx)
- [来源](https://cecamsimul.eu/events/events-2026)

## 单次日常成功观察

- [来源](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522)

## 连续两次日常成功观察

- [来源](https://euromof2027.com/)
- [来源](https://euromof2027.com/abstracts/)
- [来源](https://euromof2027.com/committees/)
- [来源](https://euromof2027.com/programme/)
- [来源](https://euromof2027.com/registration/)
- [来源](https://euromof2027.com/speakers/)

## 连续三次日常成功观察

- [来源](https://www.chemistryconferences.com/)
- [来源](https://www.chemistryconferences.com/registration)
- [来源](https://www.materialsscienceconference.com/)
- [来源](https://www.materialsscienceconference.com/registration)

## 历史失效旧址

- [旧址](https://ai4am.net/) → [替代来源](https://ai4am.net/2027/index.php)；historical_replaced，仅审计不重复报警。
- [旧址](https://euromof2027.com/abstracts.html) → [替代来源](https://euromof2027.com/abstracts/)；historical_replaced，仅审计不重复报警。
- [旧址](https://euromof2027.com/index.html) → [替代来源](https://euromof2027.com/)；historical_replaced，仅审计不重复报警。
- [旧址](https://euromof2027.com/registration.html) → [替代来源](https://euromof2027.com/registration/)；historical_replaced，仅审计不重复报警。
- [旧址](https://web.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc) → [替代来源](https://www.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc)；historical_replaced，仅审计不重复报警。
- [旧址](https://www.cecam.org/program?location=all&month=all&page=0&type=flagship_workshop) → [替代来源](None)；historical_replaced，仅审计不重复报警。
- [旧址](https://www.cecam.org/program?location=all&month=all&page=2&type=all) → [替代来源](None)；historical_replaced，仅审计不重复报警。
- [旧址](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/) → [替代来源](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/)；historical_replaced，仅审计不重复报警。
- [旧址](https://fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027) → [替代来源](https://www.fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027)；historical_replaced，仅审计不重复报警。
- [旧址](https://euromof2027.com/committees.html) → [替代来源](https://euromof2027.com/committees/)；historical_replaced，仅审计不重复报警。
- [旧址](https://euromof2027.com/speakers.html) → [替代来源](https://euromof2027.com/speakers/)；historical_replaced，仅审计不重复报警。
- [旧址](https://www.rsc.org/getContentAsset/711ed80e-95d2-4169-905d-afa1bb46dab5/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en) → [替代来源](https://www.rsc.org/getContentAsset/c2e08575-581a-45fd-9375-1307e0333e1d/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en)；historical_replaced，仅审计不重复报警。

## 用户决定

无必须由用户决定的事项。官方未解释的日期及角色冲突继续自动跟踪，无需用户代替官方裁决。

## 测试、发布及续接

- npm test：116个Node、55个Python测试通过。
- python3 scripts/validate_catalog.py：171个已排期、8个观察项有效。
- 3个受影响hash从匹配的运行器完整正文迁移，保留原始附件hash及正文SHA256：[迁移审计](data/fingerprint-migration-2026-11-09.json)。
- 提交前再次pull，推送后确认Pages部署及线上5个JSON逐字节一致：[发布凭据](publication-review-2026-11-09.json)。
- [完整机器记录](data/heartbeat-review-2026-11-09.json)包含所有尝试、状态、来源、核实日期及未解原因；下轮按review-progress继续，避免重复已核实未变字段。
