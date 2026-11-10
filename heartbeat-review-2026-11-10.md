# 2026-11-10 Conference Reminder 复核结果

定时来源检查 [运行器 42782536651](https://github.com/vickie02736/conference-reminder/actions/runs/42782536651) 成功；使用匹配运行器hash的完整正文，已读取全部历史复核记录。独立checkout工作，未stash/reset。

语义：上一轮队列88，本轮日常新增19、移出0，开始88；解决10、部分核实1，剩余78条／74个来源。
传输：活跃34条（{'unverifiable': 31, 'failed': 3}），替代来源覆盖3条；全部37条有限重试。新增失败0，本轮未宣称任何稳定自动恢复。历史替代旧址12条继续审计，不重复报警。

## 重要变化

- [官方来源](https://www.ukairs.ac.uk/i/Registration)：UKAIRS注册截止今日10 November 2026；四个来源仅新增Sponsors导航，日期、截止及组织者机构未变，已清除复核标记。
- [官方来源](https://www.cecam.org/workshop-details/1272)：CECAM生物分子相分离工作坊新增确认讲者Tatiana Morozova（CNRS/ENS Lyon），登记讲题及机构；11–14 January 2027、注册15 November未变。
- [官方来源](https://www.tvt.tf.fau.de/ankuendigung-der-cpm-10-internationaler-workshop-zur-charakterisierung-poroeser-materialien-kommt-2027-nach-deutschland/)：FAU官方页面浏览器核实CPM-10 23–26 May 2027及两位组织者；运行器正文是Anubis挑战，因此按browser复核且不改hash。
- [官方来源](https://www.materialsscienceconference.com/registration)：材料大会收费卡片顺序噪声已用精确归一化及回归测试处理；日期、金额、票种事实未变，并按运行器正文迁移标准hash。
- [官方来源](https://attend.ieee.org/ssci-2027/)：IEEE SSCI主页运行器正文变为CSS/WordPress导出片段，无法重新核实主页字段；保留camera-ready 10/17 November冲突及未知注册截止。

## 本轮逐条复核证据

1. `uk-ai-research-symposium-ukairs-2026` — [原址](https://www.ukairs.ac.uk/Home/Welcome)；`content_changed` → `resolved`；核实于2026-11-10T09:10:55.914052+00:00。与11月9日运行器正文逐行比较，仅导航新增Sponsors链接；会议日期24–25 November 2026、投稿26 June已关闭、注册截止10 November 2026、既有组织者/委员会及机构均未变。页面未给注册截止钟点或时区，保留日级日期。
2. `uk-ai-research-symposium-ukairs-2026` — [原址](https://www.ukairs.ac.uk/i/ConferenceCommittees)；`content_changed` → `resolved`；核实于2026-11-10T09:10:55.914052+00:00。与11月9日运行器正文逐行比较，仅导航新增Sponsors链接；会议日期24–25 November 2026、投稿26 June已关闭、注册截止10 November 2026、既有组织者/委员会及机构均未变。页面未给注册截止钟点或时区，保留日级日期。
3. `uk-ai-research-symposium-ukairs-2026` — [原址](https://www.ukairs.ac.uk/i/Registration)；`content_changed` → `resolved`；核实于2026-11-10T09:10:55.914052+00:00。与11月9日运行器正文逐行比较，仅导航新增Sponsors链接；会议日期24–25 November 2026、投稿26 June已关闭、注册截止10 November 2026、既有组织者/委员会及机构均未变。页面未给注册截止钟点或时区，保留日级日期。
4. `uk-ai-research-symposium-ukairs-2026` — [原址](https://www.ukairs.ac.uk/i/SubmissionThemes)；`content_changed` → `resolved`；核实于2026-11-10T09:10:55.914052+00:00。与11月9日运行器正文逐行比较，仅导航新增Sponsors链接；会议日期24–25 November 2026、投稿26 June已关闭、注册截止10 November 2026、既有组织者/委员会及机构均未变。页面未给注册截止钟点或时区，保留日级日期。
5. `advanced-materials-world-congress-2027` — [原址](https://www.materialsscienceconference.com/)；`content_changed` → `resolved`；核实于2026-11-10T09:10:55.914052+00:00。与11月9日运行器正文逐行比对，差异限于往届照片/SEO Tags随机内容；22–23 March 2027、注册13 November/30 December/22 March日期及既有人名角色机构未变。精确图库/标签规则保留事实并使正文归一化hash稳定，回归测试覆盖日期、金额、人员、机构变化仍触发hash。
6. `advanced-materials-world-congress-2027` — [原址](https://www.materialsscienceconference.com/registration)；`content_changed` → `resolved`；核实于2026-11-10T09:10:55.914052+00:00。与11月9日运行器正文逐行比对，仅E-POSTER、ACCOMPANYING PERSON、ONE DAY REGISTRATION三张完整收费卡片排序变化；13 Nov 2026、30 Dec 2026、22 Mar 2027、金额和票种均未变。新增精确卡片排序归一化，保留全部票种/金额/日期并用回归测试确认事实变化仍触发hash。
7. `theory-and-simulation-of-biomolecular-phase-separation-and-aggregation` — [原址](https://www.cecam.org/workshop-details/1272)；`content_changed` → `resolved`；核实于2026-11-10T09:10:55.914052+00:00。与11月9日运行器正文逐行比较：新增Tatiana MOROZOVA（CNRS/ENS Lyon, France），列为Confirmed invited speaker，报告题目为“From single chains to biomolecular condensates: explicit-solvent coarse-grained modeling with martini 3”；其余日期11–14 January 2027、注册截止15 November 2026、既有人员/机构未变。没有新的钟点/时区或投稿截止；签证通知12月1日属录用通知，不建提醒节点。
8. `defects2027` — [原址](https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a)；`content_changed` → `resolved`；核实于2026-11-10T09:10:55.914052+00:00。与11月9日正文逐行差异仅Cambridge网站导航项替换；活动6–8 January 2027、摘要23 November、海报/注册16 December、人员角色机构均未变；无新钟点/时区。
9. `eazc2027` — [原址](https://www.eazc2027.com/index/page.html?id=1843)；`content_changed` → `resolved`；核实于2026-11-10T09:10:55.914052+00:00。与11月9日正文逐行差异仅Suk Bong Hong条目新增Presentation Title: Recent Advances in Intergrowth Zeolite Synthesis；其POSTECH机构、讲者身份及所有会议/投稿/注册日期未变。题目不建立提醒节点，未新增钟点/时区。
10. `cpm10` — [原址](https://www.tvt.tf.fau.de/ankuendigung-der-cpm-10-internationaler-workshop-zur-charakterisierung-poroeser-materialien-kommt-2027-nach-deutschland/)；`content_changed` → `resolved`；核实于2026-11-10T09:10:55.914052+00:00。review_method=browser：最新运行器file是Anubis JavaScript proof-of-work挑战，不能作为正文；FAU官方页面浏览器正文核实CPM-10为23–26 May 2027、Garmisch-Partenkirchen，Matthias Thommes（FAU Erlangen-Nürnberg）和Alexander Neimark（Rutgers University）组织并与DECHEMA合作。页面更新时间15:54是发布元数据，不是活动钟点；未公布摘要/注册截止钟点或时区。未写入或修改hash。
11. `ieee-ssci-2027` — [原址](https://attend.ieee.org/ssci-2027/)；`content_changed` → `partial`；核实于2026-11-10T09:10:55.914052+00:00。运行器匹配hash正文仅含CSS/导出代码，浏览器入口本轮不可读；同活动官方CFP来源仍可读并保留此前日期事实。未写入新reviewed_hash，未替换现有hash。 未解：运行器正文变为CSS/WordPress导出片段，无法从该正文核实日期、截止或人员；主页与CFP的camera-ready日期冲突仍保留。。

## 所有剩余语义复核项

1. `esat-2027-35th-european-symposium-on-applied-thermodynamics` — [原址](https://www.esat2027.com/speakers/)；原因：Florence Vermeire affiliation: heading University of South Carolina vs biography KU Leuven；待核实字段：Florence Vermeire affiliation: heading University of South Carolina vs biography KU Leuven。此前hash未变且无新官方差异，跳过重复语义核对。
2. `camml2027` — [原址](https://spring2027.camml.ac.uk/about/)；原因：Official conflicts remain: accommodation 4 vs 5 nights; acceptance notification 17 vs 19 December. Registration status and support-letter year are resolved.；待核实字段：accommodation nights: PSDI 4 vs about 5, acceptance notification: PSDI 2026-12-17 vs about 2026-12-19 (no reminder)。此前hash未变且无新官方差异，跳过重复语义核对。
3. `7th-fems-industry-symposium-materials-assisted-by-digital-science` — [原址](https://fems.org/industry-symposium-frankfurt-14-january-2027/)；原因：speaker confirmation: Wide Hogenhout in confirmed list vs preliminary Dr Wide slot to be confirmed；待核实字段：speaker confirmation: Wide Hogenhout in confirmed list vs preliminary Dr Wide slot to be confirmed。此前hash未变且无新官方差异，跳过重复语义核对。
4. `bmss-bioms-sig-2027` — [原址](https://www.bmss.org.uk/biomacromolecular-structure-sig-meeting-2027/)；原因：The overview still says registration is open until 12 January 2027 while the Day 1 booking page says it closes at midnight on Tuesday 15 January 2027; no official statement resolves this.；待核实字段：registration deadline (conflict 2027-01-12 vs 2027-01-15)。此前hash未变且无新官方差异，跳过重复语义核对。
5. `bmss-bioms-sig-2027` — [原址](https://www.bmss.org.uk/meeting-booking/biomacromolecular-structure-training-event-2027-day-1/)；原因：The booking page's 'midnight on Tuesday 15th of January 2027' is internally inconsistent (15 January 2027 is a Friday; 12 January is a Tuesday) and contradicts the overview's 12 January; BMSS must confirm.；待核实字段：registration deadline (conflict 2027-01-12 vs 2027-01-15)。此前hash未变且无新官方差异，跳过重复语义核对。
6. `computational-chemistry-day-2027` — [原址](https://www.compchemday.org/)；原因：The official site still only says the 7th Computational Chemistry Day is planned for spring 2027; exact dates, venue and registration details are not yet published.；待核实字段：start/end, location, registration opening/deadline, people。此前hash未变且无新官方差异，跳过重复语义核对。
7. `digital-chemistry2027` — [原址](https://www.rsc.org/events/find-an-event/digital-chemistry-discovery-faraday-discussion)；原因：oral abstract deadline: 2026-12-14 vs 2027-03-14；待核实字段：oral abstract deadline: 2026-12-14 vs 2027-03-14。此前hash未变且无新官方差异，跳过重复语义核对。
8. `euromof2027` — [原址](https://euromof2027.com/)；原因：registration availability: homepage open vs registration page SOON available；待核实字段：registration availability: homepage open vs registration page SOON available。此前hash未变且无新官方差异，跳过重复语义核对。
9. `euromof2027` — [原址](https://euromof2027.com/registration/)；原因：registration availability: homepage open vs registration page SOON available；待核实字段：registration availability: homepage open vs registration page SOON available。未完成项，下轮按优先级续接。
10. `icfmce-2027` — [原址](https://www.icfmce.org/Chinese.html)；原因：registration deadline: important-dates 2027-07-11 vs regular-fee window through 2027-09-23；待核实字段：registration deadline: important-dates 2027-07-11 vs regular-fee window through 2027-09-23。此前hash未变且无新官方差异，跳过重复语义核对。
11. `ieee-ssci-2027` — [原址](https://attend.ieee.org/ssci-2027/)；原因：运行器正文变为CSS/WordPress导出片段，无法从该正文核实日期、截止或人员；主页与CFP的camera-ready日期冲突仍保留。；待核实字段：homepage runner body is CSS export; camera-ready deadline conflict 2026-11-10 vs 2026-11-17, final registration deadline unknown, current homepage people/roles cannot be verified。本轮部分核实，保留明确未解字段。
12. `interpore2027` — [原址](https://api.fourwaves.com/api/events/interpore2027)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
13. `interpore2027` — [原址](https://event.fourwaves.com/interpore2027)；原因：abstract deadline: Important Dates 2027-01-11 vs platform 2027-01-12 04:00 UTC-03；待核实字段：abstract deadline: Important Dates 2027-01-11 vs platform 2027-01-12 04:00 UTC-03。此前hash未变且无新官方差异，跳过重复语义核对。
14. `interpore2027` — [原址](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a)；原因：abstract deadline: Important Dates 2027-01-11 vs platform 2027-01-12 04:00 UTC-03；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
15. `interpore2027` — [原址](https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
16. `interpore2027` — [原址](https://event.fourwaves.com/interpore2027/submission)；原因：The submission page says January 12, 2027 while Important Dates says 11 January 2027; unresolved. The page is a JS app the daily fetcher cannot read, but it is live in a browser.；待核实字段：abstract deadline conflict。此前hash未变且无新官方差异，跳过重复语义核对。
17. `tyc20-celebration-of-the-thomas-young-centre-at-20` — [原址](https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce)；原因：registration deadline: TYC 2026-11-01 vs KCL eStore 2026-11-08; no official extension explanation; student-ticket availability: historical Fully Booked vs current runner Book Event; current acceptance not verified；待核实字段：registration deadline: TYC 2026-11-01 vs KCL eStore 2026-11-08; no official extension explanation, student-ticket availability: historical Fully Booked vs current runner Book Event; current acceptance not verified。此前hash未变且无新官方差异，跳过重复语义核对。
18. `tyc20-celebration-of-the-thomas-young-centre-at-20` — [原址](https://thomasyoungcentre.org/event/tyc20-celebration-of-the-thomas-young-centre-at-20/)；原因：registration deadline: TYC 2026-11-01 vs KCL eStore 2026-11-08; no official extension explanation; student-ticket availability: historical Fully Booked vs current runner Book Event; current acceptance not verified; end clock: event page 17:00 vs programme closing remarks 16:40; timezone unpublished；待核实字段：registration deadline: TYC 2026-11-01 vs KCL eStore 2026-11-08; no official extension explanation, student-ticket availability: historical Fully Booked vs current runner Book Event; current acceptance not verified, end clock: event page 17:00 vs programme closing remarks 16:40; timezone unpublished。此前hash未变且无新官方差异，跳过重复语义核对。
19. `tyc20-celebration-of-the-thomas-young-centre-at-20` — [原址](https://www.thomasyoungcentre.org/wp-content/uploads/2025/11/20261106-TYC20-Summary-Programme.pdf)；原因：end clock: programme 16:40 vs event page 17:00; timezone unpublished；待核实字段：end clock: programme 16:40 vs event page 17:00; timezone unpublished。未完成项，下轮按优先级续接。
20. `ai4mat-neurips-2026` — [原址](https://sites.google.com/view/ai4mat/schedule)；原因：The authoritative AI4Mat schedule sentence is missing or ambiguous.；待核实字段：dates, times, timezones, people_roles_affiliations。此前hash未变且无新官方差异，跳过重复语义核对。
21. `ai4x-2027` — [原址](https://ai4x.cc/2027/about/committees/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
22. `ai4x-2027` — [原址](https://ai4x.cc/2027/speakers/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
23. `aiml-2027-urf` — [原址](https://artificialintelligence-forum.com/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
24. `aiml-2027-urf` — [原址](https://artificialintelligence-forum.com/important-dates.php)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
25. `aimse2027` — [原址](https://dgm.de/aimse/2027/about/contact)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
26. `aixmat-2026-ai-in-materials-research-summit` — [原址](https://aixmat.candela.org.pl/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
27. `aric-advanced-adsorption-course-kinetic-measurements-using-macroscopic-techniques` — [原址](https://www.carboncapture.eng.ed.ac.uk/ARIC_Course)；原因：The course website timed out for the daily fetcher, WebFetch (504) and curl, so the early-registration date, the limited-places status and the guest lecturer cannot be re-verified; existing facts are kept unchanged.；待核实字段：early_registration 2027-01-08, status: limited places, people.speakers: Peter Ravikovitch, people.organizers: University of Edinburgh Adsorption Group, daily schedule times。此前hash未变且无新官方差异，跳过重复语义核对。
28. `aric-advanced-adsorption-course-kinetic-measurements-using-macroscopic-techniques` — [原址](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
29. `automated-intelligent-chemistry-2026` — [原址](https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
30. `biomolecular-dynamics-berlin-2027` — [原址](https://www.biophysics.org/events-calendar)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
31. `biomolecular-dynamics-berlin-2027` — [原址](https://www.biophysics.org/upcoming-thematic-meetings/biomolecular-dynamics-integrating-experiments-and-computation)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
32. `bps-annual-meeting-2027` — [原址](https://www.biophysics.org/events-calendar)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
33. `bps-protons-in-biology-2027` — [原址](https://www.biophysics.org/blog/message-from-the-organizers)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
34. `ccg-ugm-europe-2027` — [原址](https://www.chemcomp.com/en/UGM-2027-Europe.htm)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
35. `ccg-ugm-north-america-2027` — [原址](https://www.chemcomp.com/en/UGM-2027-North_America.htm)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
36. `dgm-aimse-2027` — [原址](https://dgm.de/aimse/2027/about/contact)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
37. `dpg-school2027` — [原址](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
38. `dpg-school2027` — [原址](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
39. `e-mrs-spring-meeting-2027` — [原址](https://www.european-mrs.com/computations-materials-%E2%80%93-discovery-design-and-role-ai-emrs)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
40. `e-mrs-spring-meeting-2027` — [原址](https://www.european-mrs.com/materials-properties-finite-temperature-atomic-scale-modelling-methodologies-applications-and-beyond)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
41. `e-mrs-spring-meeting-2027` — [原址](https://www.european-mrs.com/meetings/2027-spring-meeting-exhibit)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
42. `ecomat-conference-2026` — [原址](https://events.polyu.edu.hk/ecomat2026/home)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
43. `embo-computational-structural-biology-2027` — [原址](https://www.embl.org/about/info/course-and-conference-office/events/csb27-01/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
44. `euromof2027` — [原址](https://euromof2027.com/abstracts/)；原因：submission availability: SOON available heading vs submission portal link; Submission platform status is no longer recognised; verify it before changing the status.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
45. `fems-euromat-2027` — [原址](https://fems.org/fems-euromat-2027/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。此前hash未变且无新官方差异，跳过重复语义核对。
46. `feza2029-11th-conference-of-the-federation-of-european-zeolite-associations` — [原址](https://www.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
47. `ibs-2027` — [原址](https://www.chem.iitb.ac.in/ibs2027/program.php)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
48. `iclr-2027` — [原址](https://www.iclr.cc/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
49. `icml-2027` — [原址](https://icml.cc/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
50. `introduction-to-machine-learning-for-chemists-workshop` — [原址](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
51. `materials-chemistry-poster-symposium-2026` — [原址](https://www.rsc.org/events/find-an-event/materials-chemistry-poster-symposium)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
52. `materials-science-2027-src` — [原址](https://www.srcmeetings.com/upcoming-conferences/materials-science-2027-advanced-materials-nanotechnology-structural-composites)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
53. `materials-today-conference-2027` — [原址](https://www.elsevier.com/en-gb/events/conferences/all/materials-today-conference/committee-and-speakers)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
54. `mc18-18th-international-conference-on-materials-chemistry` — [原址](https://www.rsc.org/events/find-an-event/18th-international-conference-on-materials-chemistry-%28mc18%29)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
55. `mmm12-12th-international-conference-on-multiscale-materials-modeling` — [原址](https://www.mmm12.org/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
56. `moansi-2026` — [原址](https://moansi2026.pages.math.cnrs.fr/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
57. `mrs-fall2026` — [原址](https://www.mrs.org/meetings-events/annual-meetings)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
58. `nanoporous-grc2027` — [原址](https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/)；原因：Chair and vice-chair names are rendered as images with no alt text; neither the full DOM text, the alt-text list, nor the GRC conference-history page (WebFetch) contains them as text, so the four committee entries still need a visual/screenshot check.；待核实字段：people: committee (chairs/vice chairs, names rendered as images without alt text)。此前hash未变且无新官方差异，跳过重复语义核对。
59. `nanoporous-grs2027` — [原址](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/)；原因：The chair names are images with no alt text; neither the full DOM, the alt-text list nor the GRS conference-history page (WebFetch) contains them as text, so the two recorded co-chairs still need a visual check. All dates, deadlines and venue match.；待核实字段：people.committee: Hafsa Abdul Ghuffar, Haley Wellman (chair names rendered as images without alt text)。此前hash未变且无新官方差异，跳过重复语义核对。
60. `neurips-2026` — [原址](https://neurips.cc/Conferences/2026/Dates)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
61. `neurips-2026` — [原址](https://nips.cc/Conferences/2026)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
62. `new-frontiers-in-nonequilibrium-statistical-physics-of-glasses` — [原址](https://mephysociety.wordpress.com/2026/05/06/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-vienna-nov30-dec4-2026/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
63. `new-frontiers-in-nonequilibrium-statistical-physics-of-glasses` — [原址](https://www.esi.ac.at/events/e610/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
64. `pmea2028-porous-materials-for-environmental-applications` — [原址](https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf)；原因：The unibook.upjs.sk host times out entirely (the main www.upjs.sk site responds), so the PMEA2026 proceedings PDF and its 2028 announcement cannot be re-read; the record's unknown dates are left unchanged.；待核实字段：status: 2028 return to Slovakia announcement, location: Slovakia。此前hash未变且无新官方差异，跳过重复语义核对。
65. `sampling-with-agents-2026` — [原址](https://www.thomasyoungcentre.org/event/tyc-soft-bio-interest-group-frontiers-in-molecular-sampling-rare-events-free-energies-and-kinetics/)；原因：The TYC page only mentions the hackathon in passing (Institute of Physics, 8 December); no hackathon-specific official page with dates, registration or organisers was available, so dates remain unconfirmed.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
66. `sapem-2026-8th-symposium-on-the-acoustics-of-poro-elastic-materials` — [原址](https://sapem2026.matelys.com/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
67. `slas-europe-2027` — [原址](https://slas.org/events)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
68. `slas2027` — [原址](https://slas.org/events)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
69. `the-advanced-materials-show-2027` — [原址](https://event-partners.com/our-shows/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
70. `the-future-of-materials-discovery` — [原址](https://www.royalsociety.org/science-events-and-lectures/2027/03/future-of-materials-discovery/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
71. `tms2027` — [原址](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
72. `tms2027` — [原址](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
73. `tms2027` — [原址](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
74. `tu-darmstadt-sdl-workshop-2026` — [原址](https://www.tu-darmstadt.de/synbio/workshop/sdl_workshop/sdlworkshop.de.jsp)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
75. `tyc-frontiers-molecular-sampling-2026` — [原址](https://www.thomasyoungcentre.org/event/tyc-soft-bio-interest-group-frontiers-in-molecular-sampling-rare-events-free-energies-and-kinetics/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
76. `vii-annual-spain-interpore-meeting` — [原址](https://spaininterpore.webs.upv.es/vii-annual-meeting-meet-the-speakers/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
77. `vii-annual-spain-interpore-meeting` — [原址](https://spaininterpore.webs.upv.es/vii-annual-meeting-registration-open/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。
78. `wmt-2026-when-materials-think` — [原址](https://wmt2026workshop.github.io/)；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；待核实字段：dates, times, timezones, people_roles_affiliations。未完成项，下轮按优先级续接。

## 全部活跃传输问题

1. [原址](https://ai4science-amsterdam.github.io/news/chemai/)；原失败：Official source returned no readable page content.；尝试：bounded_direct_retry：正文为空、过短或访问挑战，不能核实活动事实。；[替代入口](https://www.acnetwork.nl/chemai)。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:25.148441+00:00。
2. [原址](https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/)；原失败：IncompleteRead(7761 bytes read)；尝试：bounded_direct_retry：[Errno 54] Connection reset by peer；bounded_direct_retry：[Errno 54] Connection reset by peer；[替代入口](https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a)、[替代入口](https://psi-k.net/workshops/)、[替代入口](https://psi-k.net/wp-content/uploads/2026/03/2026_Psik_Poster_v1.pdf)。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:26.472425+00:00。
3. [原址](https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/)；原失败：IncompleteRead(7661 bytes read)；尝试：bounded_direct_retry：[Errno 54] Connection reset by peer；bounded_direct_retry：[Errno 54] Connection reset by peer；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:27.252737+00:00。
4. [原址](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897)；原失败：IncompleteRead(14691 bytes read)；尝试：bounded_direct_retry：[Errno 54] Connection reset by peer；bounded_direct_retry：[Errno 54] Connection reset by peer；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:26.264852+00:00。
5. [原址](https://aicmsn2027.synergiasummits.com/)；原失败：<urlopen error timed out>；尝试：bounded_direct_retry：3rd Annual International Conference on
Materials Science and Nanoscience
April 26–28, 2027 | Athens, Greece
Register
Abstract
AICMSN2027
April 26–28, 2027 | Athens, Greece
Register
Abstract
Suggest A Colleague
Suggest A Colleague
Send Sugge；[替代入口](https://aicmsn2027.synergiasummits.com/abstract)、[替代入口](https://aicmsn2027.synergiasummits.com/register)、[替代入口](https://aicmsn2027.synergiasummits.com/venue)、[替代入口](https://aicmsn2027.synergiasummits.com/committee)。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:25.982339+00:00。
6. [原址](https://ceramics.org/event/acers-spring-meeting-2027/symposium-23-ai-ml-for-materials-discovery-and-intelligent-manufacturing/)；原失败：HTTP Error 403: Forbidden；尝试：bounded_direct_retry：HTTP Error 403: Forbidden；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:25.075064+00:00。
7. [原址](https://ceramics.org/wp-content/uploads/2026/08/SpringMeeting27-CFP-2.pdf)；原失败：HTTP Error 403: Forbidden；尝试：bounded_direct_retry：HTTP Error 403: Forbidden；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:25.078714+00:00。
8. [原址](https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce)；原失败：HTTP Error 404: Not Found；尝试：bounded_direct_retry：HTTP Error 404: Not Found；[替代入口](https://thomasyoungcentre.org/event/tyc20-celebration-of-the-thomas-young-centre-at-20/)、[替代入口](https://www.thomasyoungcentre.org/wp-content/uploads/2025/11/20261106-TYC20-Summary-Programme.pdf)。最终`failed`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:25.248031+00:00。
9. [原址](https://icc2027.ieee-icc.org/authors/call-symposium-papers)；原失败：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1011)>；尝试：bounded_direct_retry：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1082)>；bounded_direct_retry：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1082)>；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:26.009707+00:00。
10. [原址](https://indico.ictp.it/event/11409)；原失败：HTTP Error 404: NOT FOUND；尝试：bounded_direct_retry：Europe/Rome
English
Administration
Search
Search in Conferences:
Overview
Scientific Programme
Programme
Contribution List
Author List
Apply here
Secretariat:
smr4335@ictp.it
Home
23rd International Workshop on Computational Physics and Mat；无本轮可用等价替代入口。最终`failed`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:29.122186+00:00。
11. [原址](https://materialscienceconferences.com/)；原失败：<urlopen error timed out>；尝试：bounded_direct_retry：Abstract Submission Deadline - 17th Nov 2026 | Early Bird Registration Deadline - 19th Nov 2026
Event on: April | 29-30 | 2027
16
th
International Conference on
Materials Science & Engineering
Theme : Beyond Materials, Towards Meaningful In；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:26.620644+00:00。
12. [原址](https://physical-theoreticalchemistry.annualcongress.com/)；原失败：The read operation timed out；尝试：bounded_direct_retry：Renowned Speakers
Vassiliki-Alexandra Glezakou
Pacific Northwest National Laboratory, USA USA
Lei Zhu
University at Albany, USA USA
Tadashi Ogitsu
Lawrence Livermore National Laboratory USA USA
Emanuele Curotto
Arcadia University, USA USA U；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:25.758970+00:00。
13. [原址](https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf)；原失败：<urlopen error timed out>；尝试：bounded_direct_retry：<urlopen error timed out>；bounded_direct_retry：<urlopen error timed out>；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:49.830809+00:00。
14. [原址](https://watoc2028.org/)；原失败：Official source returned no readable page content.；尝试：bounded_direct_retry：正文为空、过短或访问挑战，不能核实活动事实。；[替代入口](https://www.watoc.net/watoc.congress.html)。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:26.544231+00:00。
15. [原址](https://www.aiche.org/conferences/aiche-annual-meeting/2026/2026-registration-info)；原失败：HTTP Error 403: Forbidden；尝试：bounded_direct_retry：HTTP Error 403: Forbidden；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:26.505347+00:00。
16. [原址](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization)；原失败：HTTP Error 403: Forbidden；尝试：bounded_direct_retry：HTTP Error 403: Forbidden；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:26.542851+00:00。
17. [原址](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee)；原失败：HTTP Error 403: Forbidden；尝试：bounded_direct_retry：HTTP Error 403: Forbidden；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:26.557914+00:00。
18. [原址](https://www.carboncapture.eng.ed.ac.uk/ARIC_Course)；原失败：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self-signed certificate (_ssl.c:1011)>；尝试：bounded_direct_retry：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self-signed certificate (_ssl.c:1082)>；bounded_direct_retry：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self-signed certificate (_ssl.c:1082)>；[替代入口](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027)。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:26.703290+00:00。
19. [原址](https://www.grc.org/chemistry-and-physics-of-liquids-grs-conference/2027/)；原失败：HTTP Error 404: Not Found；尝试：bounded_direct_retry：Phishing Alert
- GRC SPEAKERS AND DISCUSSION LEADERS ARE BEING TARGETED BY PHISHING ATTEMPTS DESIGNED TO COLLECT PAYMENT FOR REGISTRATION OR LODGING.
CLICK HERE FOR MORE DETAILS
Chemistry and Physics of Liquids (GRS)
Gordon Research Seminar；无本轮可用等价替代入口。最终`failed`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:27.324746+00:00。
20. [原址](https://www.grc.org/computer-aided-drug-design-conference/2027/)；原失败：Official source returned no readable page content.；尝试：bounded_direct_retry：Phishing Alert
- GRC SPEAKERS AND DISCUSSION LEADERS ARE BEING TARGETED BY PHISHING ATTEMPTS DESIGNED TO COLLECT PAYMENT FOR REGISTRATION OR LODGING.
CLICK HERE FOR MORE DETAILS
Computer Aided Drug Design
Gordon Research Conference
The Conv；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:27.349079+00:00。
21. [原址](https://www.grc.org/computer-aided-drug-design-grs-conference/2027/)；原失败：Official source returned no readable page content.；尝试：bounded_direct_retry：Phishing Alert
- GRC SPEAKERS AND DISCUSSION LEADERS ARE BEING TARGETED BY PHISHING ATTEMPTS DESIGNED TO COLLECT PAYMENT FOR REGISTRATION OR LODGING.
CLICK HERE FOR MORE DETAILS
Computer Aided Drug Design (GRS)
Gordon Research Seminar
Optim；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:27.352440+00:00。
22. [原址](https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/)；原失败：Official source returned no readable page content.；尝试：bounded_direct_retry：Phishing Alert
- GRC SPEAKERS AND DISCUSSION LEADERS ARE BEING TARGETED BY PHISHING ATTEMPTS DESIGNED TO COLLECT PAYMENT FOR REGISTRATION OR LODGING.
CLICK HERE FOR MORE DETAILS
Nanoporous Materials and Their Applications
Gordon Research Co；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:27.616440+00:00。
23. [原址](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/)；原失败：Official source returned no readable page content.；尝试：bounded_direct_retry：HTTP Error 404: Not Found；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:27.062922+00:00。
24. [原址](https://www.grc.org/soft-condensed-matter-physics-conference/2027/)；原失败：Official source returned no readable page content.；尝试：bounded_direct_retry：正文为空、过短或访问挑战，不能核实活动事实。；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:27.349488+00:00。
25. [原址](https://www.grc.org/soft-condensed-matter-physics-grs-conference/2027/)；原失败：Official source returned no readable page content.；尝试：bounded_direct_retry：正文为空、过短或访问挑战，不能核实活动事实。；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:27.684565+00:00。
26. [原址](https://www.mmm12.org/)；原失败：The read operation timed out；尝试：bounded_direct_retry：MMM12
Multiscale Materials Modeling
The 12th International Conference
November 8–13, 2026 · Jeju, Korea
Now in Progress
🎫
On-site registration is open at the venue
Please visit the registration desk
Important Dates
First Announcement
Oct 31；[替代入口](https://www.mmm12.org/symposia/)、[替代入口](https://www.mmm12.org/organizing-committee-of-mmm12/)。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:29.338306+00:00。
27. [原址](https://www.siam.org/conferences-events/siam-conferences/ms27/)；原失败：HTTP Error 403: Forbidden；尝试：bounded_direct_retry：Back to top
Announcement
Submit Now: Minisymposium Proposal Submission Deadline Extended
November 2, 2026
Submit Now: Contributed Lecture, Poster, and Minisymposium Presentation Abstract Submission Deadline
November 2, 2026
Apply Now: Trave；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:28.042860+00:00。
28. [原址](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/)；原失败：HTTP Error 403: Forbidden；尝试：bounded_direct_retry：HTTP Error 403: Forbidden；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:27.646159+00:00。
29. [原址](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx)；原失败：HTTP Error 403: Forbidden；尝试：bounded_direct_retry：The 1st World Congress on Autonomous Materials Science & Experimentation (AEMS 2027)
June 13–17, 2027 • Hyatt Regency McCormick Place • Chicago, Illinois, USA
Technical Topics
Submit an Abstract
Submission Deadline: December 1, 2026
Abstrac；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:28.285103+00:00。
30. [原址](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx)；原失败：HTTP Error 403: Forbidden；尝试：bounded_direct_retry：HTTP Error 403: Forbidden；无本轮可用等价替代入口。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。未找到本轮可读官方等价替代入口，保留可信事实。 核实于2026-11-10T09:08:27.704227+00:00。
31. [原址](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx)；原失败：HTTP Error 403: Forbidden；尝试：bounded_direct_retry：HTTP Error 403: Forbidden；[替代入口](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[替代入口](https://www.programmaster.org/TMS2027)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png)、[替代入口](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:27.715745+00:00。
32. [原址](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx)；原失败：HTTP Error 403: Forbidden；尝试：bounded_direct_retry：HTTP Error 403: Forbidden；[替代入口](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[替代入口](https://www.programmaster.org/TMS2027)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png)、[替代入口](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:27.751185+00:00。
33. [原址](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx)；原失败：HTTP Error 403: Forbidden；尝试：bounded_direct_retry：HTTP Error 403: Forbidden；[替代入口](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[替代入口](https://www.programmaster.org/TMS2027)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png)、[替代入口](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:27.786927+00:00。
34. [原址](https://www.tms.org/TMS2027/TMS2027/RegTravel/registration.aspx)；原失败：HTTP Error 403: Forbidden；尝试：bounded_direct_retry：Register for TMS2027
Registration is now open for the TMS 2027 Annual Meeting & Exhibition. Before you register, please review the list of
professional development courses
and
networking events
planned for the meeting to determine which eve；[替代入口](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[替代入口](https://www.programmaster.org/TMS2027)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png)、[替代入口](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png)、[替代入口](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:28.313721+00:00。

## 替代来源覆盖传输问题

1. [原址](https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/)；原失败：IncompleteRead(15945 bytes read)；尝试：bounded_direct_retry：[Errno 54] Connection reset by peer；bounded_direct_retry：[Errno 54] Connection reset by peer；[替代入口](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552)。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:29.069019+00:00。
2. [原址](https://event.fourwaves.com/interpore2027/submission)；原失败：Official source returned no readable page content.；尝试：bounded_direct_retry：正文为空、过短或访问挑战，不能核实活动事实。；[替代入口](https://event.fourwaves.com/interpore2027)、[替代入口](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a)、[替代入口](https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4)、[替代入口](https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj)、[替代入口](https://api.fourwaves.com/api/events/interpore2027)。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:28.211324+00:00。
3. [原址](https://uon-comp-chem.github.io/mm2027/)；原失败：Official source returned no readable page content.；尝试：bounded_direct_retry：正文为空、过短或访问挑战，不能核实活动事实。；[替代入口](https://raw.githubusercontent.com/UON-comp-chem/mm2027/main/src/App.jsx)、[替代入口](https://github.com/UON-comp-chem/mm2027/blob/main/src/App.jsx)。最终`unverifiable`；内容核实=False，自动抓取恢复=false；未解：最新GitHub运行器仍失败；有限重试结果不能证明自动抓取恢复。存在可读官方替代入口，覆盖范围以证据为准。 核实于2026-11-10T09:08:28.226265+00:00。

## 新失败及恢复观察

- 本轮无稳定自动抓取恢复；单次成功观察：0条。

## 历史失效旧址

- [旧址](https://ai4am.net/) → [替代来源](https://ai4am.net/2027/index.php)；historical_replaced，仅审计。
- [旧址](https://euromof2027.com/abstracts.html) → [替代来源](https://euromof2027.com/abstracts/)；historical_replaced，仅审计。
- [旧址](https://euromof2027.com/index.html) → [替代来源](https://euromof2027.com/)；historical_replaced，仅审计。
- [旧址](https://euromof2027.com/registration.html) → [替代来源](https://euromof2027.com/registration/)；historical_replaced，仅审计。
- [旧址](https://web.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc) → [替代来源](https://www.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc)；historical_replaced，仅审计。
- [旧址](https://www.cecam.org/program?location=all&month=all&page=0&type=flagship_workshop) → [替代来源](None)；historical_replaced，仅审计。
- [旧址](https://www.cecam.org/program?location=all&month=all&page=2&type=all) → [替代来源](None)；historical_replaced，仅审计。
- [旧址](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/) → [替代来源](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/)；historical_replaced，仅审计。
- [旧址](https://fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027) → [替代来源](https://www.fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027)；historical_replaced，仅审计。
- [旧址](https://euromof2027.com/committees.html) → [替代来源](https://euromof2027.com/committees/)；historical_replaced，仅审计。
- [旧址](https://euromof2027.com/speakers.html) → [替代来源](https://euromof2027.com/speakers/)；historical_replaced，仅审计。
- [旧址](https://www.rsc.org/getContentAsset/711ed80e-95d2-4169-905d-afa1bb46dab5/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en) → [替代来源](https://www.rsc.org/getContentAsset/c2e08575-581a-45fd-9375-1307e0333e1d/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en)；historical_replaced，仅审计。

## 用户决定

无。官方冲突保留并继续自动跟踪。

## 测试、发布及续接

- python3 scripts/validate_catalog.py：171个已排期、8个观察项有效。
- npm test脚本已通过Bundled pnpm等价执行：116个Node、56个Python测试；本轮2个票卡顺序hash迁移见 [迁移审计](data/fingerprint-migration-2026-11-10.json)。
- 完整机器记录：[data/heartbeat-review-2026-11-10.json](data/heartbeat-review-2026-11-10.json)。
