# Conference Reminder 复核 — 2026-11-03

检查 166 个正式活动、8 个观察项；今日全量更新及发布已成功（[运行 41599574838](https://github.com/vickie02736/conference-reminder/actions/runs/41599574838)），本轮未重复执行。使用隔离工作树，避免混入主目录未提交修改。

本轮定向处理 11 条来源记录；排队语义复核由 37 降至 30：本批新增 0、解决 7、剩余 30。与凌晨复核相比，今日监测重新打开 21 项。另核实此前未排队的 AI 注册标签冲突。原址稳定恢复 0；新增官方替代页面 2，覆盖失败原址 3；传输问题仍为 33（failed 3、unverifiable 30）。12 个历史替换地址保留审计，不作为新故障。TMS 注册页 403 在凌晨记录已知，本次属于首次写入监测状态；真正新故障为 EUROMAT 两个503地址。

## 有证据的变化

- WCAMD：首轮摘要 11月2日 → **11月9日**；预早鸟注册 11月3日 → **11月10日**。官网当前明确日期各延后一周，但无带日期延期公告，不添加“延期公告”或钟点/时区。
- AI and Machine Learning 2027：浏览器可见注册卡片明确早鸟 **2026-11-22**、普通费率 **2027-01-22**、最终注册 **2027-03-22**；解除标签映射冲突，注册实际完成性仍未确认。
- CPM-10 的两位组织者及机构、Materiais 两位主席及八位组委逐一与官方正文匹配；清除对应 content_changed。商业会议只核实库中关联的机构组织者，不把官网个人宣传等同于独立机构背书。
- EUROMAT 两地址仍503；新增可读 FEMS 官方公告作为事实证据，不宣称原址恢复。

## 本批逐条证据

### advanced-materials-world-congress-2027
- 原址：https://www.materialsscienceconference.com/registration
- 原问题：content_changed
- 尝试：今日既有监测已成功；本轮仅定向下载、阅读完整正文并逐字段核对；非重复运行全量更新。
- 结论：content_verified；核实日期 2026-11-03T09:14:25Z
- 证据：逐档核对 academia/industry 等价目：早鸟 2026-11-13、普通费率 2026-12-30、现场 2027-03-22，与既有三节点一致。无钟点/时区；现场费率日期不是最终注册截止。无关联个人角色或机构字段。未测试付款流程，注册可完成性未确认。
- 链接：https://www.materialsscienceconference.com/registration
- 未解决：关联已记录字段已完成核对；未公布字段仍保持 unknown。

### materiais-2027-xxiii-portuguese-materials-congress-xiv-international-symposium-on-materials
- 原址：https://www.spmateriais.pt/eventos/materiais-2027
- 原问题：content_changed
- 尝试：今日既有监测已成功；本轮仅定向下载、阅读完整正文并逐字段核对；非重复运行全量更新。
- 结论：content_verified；核实日期 2026-11-03T09:14:25Z
- 证据：SPM 公告核实 2027-03-22 至 24、Instituto Superior de Engenharia do Porto (ISEP)。逐名核对 Chairs António Gonçalves Magalhães、João Francisco Silva；组委会 Jorge Lino Alves、Manuel Jorge Castro、Púria Esfandiari、Rui Filipe Rego、Ana Rita Carreiras、Olga Coutinho Paiva、Valentina Maria Domingues、Paulo Jorge Nóvoa，与库一致。页面无各人的机构，不臆填；无活动钟点/时区或截止，不覆盖其他已核实来源的摘要延期日期。
- 链接：https://www.spmateriais.pt/eventos/materiais-2027
- 未解决：关联已记录字段已完成核对；未公布字段仍保持 unknown。

### ai-machine-learning-2027-conference-series
- 原址：https://artificialintelligence.conferenceseries.com/
- 原问题：content_changed
- 尝试：今日既有监测已成功；本轮仅定向下载、阅读完整正文并逐字段核对；非重复运行全量更新。
- 结论：content_verified；核实日期 2026-11-03T09:14:25Z
- 证据：本届主页为第 8 届 AI and Machine Learning，2027-03-22 至 23、Rome，Conference Series 组织声明与记录一致，无会议起止钟点/时区。主页无明确投稿截止，保持 unknown。原库无关联个人名单，不推断讲者出席或机构背书。注册页日期标签另经浏览器逐列核实，见该来源记录。
- 链接：https://artificialintelligence.conferenceseries.com/
- 未解决：关联已记录字段已完成核对；未公布字段仍保持 unknown。

### wcamd-2027
- 原址：https://www.machinelearning.theiconicmeetings.com/
- 原问题：content_changed
- 尝试：今日既有监测已成功；本轮仅定向下载、阅读完整正文并逐字段核对；非重复运行全量更新。
- 结论：content_verified；核实日期 2026-11-03T09:14:25Z
- 证据：官网 Important News 首轮摘要现为 2026-11-09、预早鸟注册为 2026-11-10（原记录分别为 11-02/11-03）；会议仍为 2027-08-23 至 25、Berlin。The Iconic Meetings 主办方声明无变。检查主页所列讲者姓名、职位与机构均为主办方自述，原库未导入个人名单，不能据此声称机构背书或确认出席。日程有无时区且互相重叠的示意钟点，不作为起止或截止瞬时；两个截止均仅精确到日期。最终注册截止未公布。
- 链接：https://www.machinelearning.theiconicmeetings.com/
- 未解决：关联已记录字段已完成核对；未公布字段仍保持 unknown。

### advanced-chemistry-world-congress-2027
- 原址：https://www.chemistryconferences.com/
- 原问题：content_changed
- 尝试：今日既有监测已成功；本轮仅定向下载、阅读完整正文并逐字段核对；非重复运行全量更新。
- 结论：content_verified；核实日期 2026-11-03T09:14:25Z
- 证据：主页欢迎词和本届标题均给出 2027-03-18 至 19、Vienna；Peers Alley Conferences 主办声明相符。同步复查官方 registration 页，早鸟 2026-11-18、普通费率 2027-01-18、现场 2027-03-18 相符，均无钟点/时区。原库仅导入机构组织者，未将主办方宣传的人物名单当作独立机构认可；摘要及最终注册截止保持 unknown。
- 链接：https://www.chemistryconferences.com/
- 未解决：关联已记录字段已完成核对；未公布字段仍保持 unknown。

### advanced-materials-world-congress-2027
- 原址：https://www.materialsscienceconference.com/
- 原问题：content_changed
- 尝试：今日既有监测已成功；本轮仅定向下载、阅读完整正文并逐字段核对；非重复运行全量更新。
- 结论：content_verified；核实日期 2026-11-03T09:14:25Z
- 证据：主页会议日期 2027-03-22 至 23、Vienna 与记录一致；Peers Alley Conferences 主办声明相符。页内 9th/10th 届次文案不一致，不用届次推断日期。原库只关联机构组织者，未导入个人讲者或委员会，官网自述不升级为独立机构确认。未见摘要/最终注册截止、明确截止钟点或时区，继续 unknown。
- 链接：https://www.materialsscienceconference.com/
- 未解决：关联已记录字段已完成核对；未公布字段仍保持 unknown。

### cpm10
- 原址：https://www.tvt.tf.fau.de/ankuendigung-der-cpm-10-internationaler-workshop-zur-charakterisierung-poroeser-materialien-kommt-2027-nach-deutschland/
- 原问题：content_changed
- 尝试：今日既有监测已成功；本轮仅定向下载、阅读完整正文并逐字段核对；非重复运行全量更新。
- 结论：content_verified；核实日期 2026-11-03T09:14:25Z
- 证据：FAU 正文核实 CPM-10 为 2027-05-23 至 26、Garmisch-Partenkirchen；组织者 Matthias Thommes（FAU Erlangen-Nürnberg）、Alexander Neimark（Rutgers University, NJ, USA）与 DECHEMA 合作，姓名、角色、机构均与库一致。15:54 是 2026-06-22 页面更新时间，非活动钟点。本页没有摘要/注册截止或时区，其他来源已证实的 12-01 摘要截止不被覆盖。
- 链接：https://www.tvt.tf.fau.de/ankuendigung-der-cpm-10-internationaler-workshop-zur-charakterisierung-poroeser-materialien-kommt-2027-nach-deutschland/
- 未解决：关联已记录字段已完成核对；未公布字段仍保持 unknown。

### ai-machine-learning-2027-conference-series
- 原址：https://artificialintelligence.conferenceseries.com/registration.php
- 原问题：registration date labels conflict in event milestone
- 尝试：静态全文逐列核对；Chrome 读取可见注册卡片（只读，未填表/付款）；一次无 User-Agent 诊断请求为403；项目抓取 UA 的成功结果和日常状态未改成失败
- 结论：content_verified；核实日期 2026-11-03T09:14:25Z
- 证据：Chrome 可见正文逐卡核实早鸟 2026-11-22、普通 2027-01-22、最终 2027-03-22，均标 On or Before；无钟点/时区。静态原始文本含 under new development，但浏览器显示三张带明确标签的卡片及表单，故日期映射已解决；注册可完成性未测试。
- 链接：https://artificialintelligence.conferenceseries.com/registration.php
- 未解决：关联已记录字段已完成核对；未公布字段仍保持 unknown。

### fems-euromat-2027
- 原址：https://www.euromat2027.com/
- 原问题：HTTP Error 503: Service Unavailable
- 尝试：使用项目 User-Agent 定向读取两次，均失败；核对官方学会公告/官方 PDF 替代入口
- 结论：alternative_content_transport_unresolved；核实日期 2026-11-03T09:14:25Z
- 证据：原址两次仍为503；FEMS替代公告覆盖会议日期、摘要截止、主办与共同主席，但不覆盖完整委员会名单及机构。
- 链接：https://fems.org/abtract-submission-is-now-open-for-fems-euromat-2027/
- 未解决：原址两次仍为503；FEMS替代公告覆盖会议日期、摘要截止、主办与共同主席，但不覆盖完整委员会名单及机构。

### fems-euromat-2027
- 原址：https://www.euromat2027.com/committee.html
- 原问题：HTTP Error 503: Service Unavailable
- 尝试：使用项目 User-Agent 定向读取两次，均失败；核对官方学会公告/官方 PDF 替代入口
- 结论：alternative_content_transport_unresolved；核实日期 2026-11-03T09:14:25Z
- 证据：原址两次仍为503；FEMS替代公告覆盖会议日期、摘要截止、主办与共同主席，但不覆盖完整委员会名单及机构。
- 链接：https://fems.org/abtract-submission-is-now-open-for-fems-euromat-2027/
- 未解决：原址两次仍为503；FEMS替代公告覆盖会议日期、摘要截止、主办与共同主席，但不覆盖完整委员会名单及机构。

### tms2027
- 原址：https://www.tms.org/TMS2027/TMS2027/RegTravel/registration.aspx
- 原问题：HTTP Error 403: Forbidden
- 尝试：使用项目 User-Agent 定向读取两次，均失败；核对官方学会公告/官方 PDF 替代入口
- 结论：alternative_content_transport_unresolved；核实日期 2026-11-03T09:14:25Z
- 证据：原址两次403；官方PDF再次确认2027-01-31优惠注册截止；PDF旧称10月开放与注册页11月开放不同，沿用较新注册页的月份，不推断实际已开放。
- 链接：https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf
- 未解决：原址两次403；官方PDF再次确认2027-01-31优惠注册截止；PDF旧称10月开放与注册页11月开放不同，沿用较新注册页的月份，不推断实际已开放。

## 全部未完成语义复核（下轮从此队列继续）

- **camml2027** — https://spring2027.camml.ac.uk/about/；原因：The about page is unchanged and still says registration is closed, gives 19 December for acceptance (PSDI: 17 December), a stale 6 December 2025 letter-of-support date and five nights (PSDI: four); no dated official notice resolves these, so the application availability must stay unconfirmed.；未核字段：registration open vs closed (about vs home/registration)、acceptance decision 2026-12-17 (PSDI) vs 2026-12-19 (about)、supervisor letter deadline (about says 6 December 2025)、accommodation nights (PSDI 4 vs about 5)。本轮未复核，原状态保留。
- **bmss-bioms-sig-2027** — https://www.bmss.org.uk/biomacromolecular-structure-sig-meeting-2027/；原因：The overview still says registration is open until 12 January 2027 while the Day 1 booking page says it closes at midnight on Tuesday 15 January 2027; no official statement resolves this.；未核字段：registration deadline (conflict 2027-01-12 vs 2027-01-15)。本轮未复核，原状态保留。
- **bmss-bioms-sig-2027** — https://www.bmss.org.uk/meeting-booking/biomacromolecular-structure-training-event-2027-day-1/；原因：The booking page's 'midnight on Tuesday 15th of January 2027' is internally inconsistent (15 January 2027 is a Friday; 12 January is a Tuesday) and contradicts the overview's 12 January; BMSS must confirm.；未核字段：registration deadline (conflict 2027-01-12 vs 2027-01-15)。本轮未复核，原状态保留。
- **cecam-esi-simulation-scales-2027** — https://cecamsimul.eu/events/events-2026；原因：The CECAM-IT-SIMUL page still returns 403 to every client (fetcher, Chrome, WebFetch, curl); the 23 August–3 September 2027 dates are only visible in a search-engine snapshot, which is weaker than the live organiser page, so the provisional status must remain.；未核字段：start/end、registration、location/venue、people: organisers。本轮未复核，原状态保留。
- **computational-chemistry-day-2027** — https://www.compchemday.org/；原因：The official site still only says the 7th Computational Chemistry Day is planned for spring 2027; exact dates, venue and registration details are not yet published.；未核字段：start/end、location、registration opening/deadline、people。本轮未复核，原状态保留。
- **digital-chemistry2027** — https://www.rsc.org/events/find-an-event/digital-chemistry-discovery-faraday-discussion；原因：The hidden Abstract submission tab still says oral abstracts are due 'by 14 March 2027' while the Deadlines panels say '14 Dec 2026'; no dated extension notice resolves it, so the milestone must stay a conflict.；未核字段：oral abstract conflict (2026-12-14 vs 2027-03-14) still unresolved on official page。本轮未复核，原状态保留。
- **interpore2027** — https://event.fourwaves.com/interpore2027；原因：The platform homepage gives the submission period end as January 12, 2027 4:00 AM -03 while the Important Dates page says Monday 11 January 2027; no official notice reconciles the two, so the abstract milestone stays in conflict.；未核字段：abstract deadline conflict (11 Jan vs 12 Jan 04:00 -03)。本轮未复核，原状态保留。
- **interpore2027** — https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a；原因：Important Dates still says 11 January 2027 while the submission platform says 12 January 2027 (04:00 -03); the conflict is unresolved.；未核字段：abstract deadline conflict。本轮未复核，原状态保留。
- **interpore2027** — https://event.fourwaves.com/interpore2027/submission；原因：The submission page says January 12, 2027 while Important Dates says 11 January 2027; unresolved. The page is a JS app the daily fetcher cannot read, but it is live in a browser.；未核字段：abstract deadline conflict。本轮未复核，原状态保留。
- **interpore2027** — https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。
- **sampling-with-agents-2026** — https://www.thomasyoungcentre.org/event/tyc-soft-bio-interest-group-frontiers-in-molecular-sampling-rare-events-free-energies-and-kinetics/；原因：The TYC page only mentions the hackathon in passing (Institute of Physics, 8 December); no hackathon-specific official page with dates, registration or organisers was available, so dates remain unconfirmed.；未核字段：start/end (hackathon's own announcement)、registration / participation details、organisers。本轮未复核，原状态保留。
- **tyc20-celebration-of-the-thomas-young-centre-at-20** — https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce；原因：The KCL eStore gives 8 November 2026 as the last booking date while the TYC page gives 1 November 2026 as the registration deadline; no dated extension notice resolves this, so the registration milestone should be a conflict.；未核字段：registration deadline conflict: 2026-11-01 (TYC) vs 2026-11-08 (KCL eStore last booking date)。本轮未复核，原状态保留。
- **tyc20-celebration-of-the-thomas-young-centre-at-20** — https://thomasyoungcentre.org/event/tyc20-celebration-of-the-thomas-young-centre-at-20/；原因：The TYC page's 1 November 2026 registration deadline conflicts with the KCL eStore's 8 November 2026 last booking date; the clock times 9:00 am / 5:00 pm are published without a time zone and were not recorded.；未核字段：registration deadline conflict with KCL eStore (2026-11-08)。本轮未复核，原状态保留。
- **modelling-water-across-scales** — https://register1.icts.res.in/mwas；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。
- **17th-international-symposium-on-wettability-and-porous-media-7th-interpore-benelux-meeting-iswpm26** — https://interpore.org/event/7th-interpore-benelux-chapter-meeting；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。
- **7th-fems-industry-symposium-materials-assisted-by-digital-science** — https://fems.org/industry-symposium-frankfurt-14-january-2027/；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。
- **ai4mat-neurips-2026** — https://sites.google.com/view/ai4mat/schedule；原因：The authoritative AI4Mat schedule sentence is missing or ambiguous.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。
- **aicmsn-2027** — https://aicmsn2027.synergiasummits.com/abstract；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。
- **aric-advanced-adsorption-course-kinetic-measurements-using-macroscopic-techniques** — https://www.carboncapture.eng.ed.ac.uk/ARIC_Course；原因：The course website timed out for the daily fetcher, WebFetch (504) and curl, so the early-registration date, the limited-places status and the guest lecturer cannot be re-verified; existing facts are kept unchanged.；未核字段：early_registration 2027-01-08、status: limited places、people.speakers: Peter Ravikovitch、people.organizers: University of Edinburgh Adsorption Group、daily schedule times。本轮未复核，原状态保留。
- **biomolecular-dynamics-berlin-2027** — https://www.biophysics.org/upcoming-thematic-meetings/biomolecular-dynamics-integrating-experiments-and-computation；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。
- **bps-protons-in-biology-2027** — https://www.biophysics.org/blog/message-from-the-organizers；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。
- **challenges-in-ionic-fluids-theory-simulation-and-experiment** — https://www.cecam.org/workshop-details/challenges-in-ionic-fluids-theory-simulation-and-experiment-1483；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。
- **computational-electrochemistry-in-the-era-of-ai** — https://www.cecam.org/workshop-details/computational-electrochemistry-in-the-era-of-ai-1501；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。
- **feza2029-11th-conference-of-the-federation-of-european-zeolite-associations** — https://www.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。
- **grc-liquids-2027** — https://www.grc.org/chemistry-and-physics-of-liquids-conference/2027/；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。
- **nanoporous-grc2027** — https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/；原因：Chair and vice-chair names are rendered as images with no alt text; neither the full DOM text, the alt-text list, nor the GRC conference-history page (WebFetch) contains them as text, so the four committee entries still need a visual/screenshot check.；未核字段：people: committee (chairs/vice chairs, names rendered as images without alt text)。本轮未复核，原状态保留。
- **nanoporous-grs2027** — https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/；原因：The chair names are images with no alt text; neither the full DOM, the alt-text list nor the GRS conference-history page (WebFetch) contains them as text, so the two recorded co-chairs still need a visual check. All dates, deadlines and venue match.；未核字段：people.committee: Hafsa Abdul Ghuffar, Haley Wellman (chair names rendered as images without alt text)。本轮未复核，原状态保留。
- **new-frontiers-in-nonequilibrium-statistical-physics-of-glasses** — https://mephysociety.wordpress.com/2026/05/06/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-vienna-nov30-dec4-2026/；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。
- **pmea2028-porous-materials-for-environmental-applications** — https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf；原因：The unibook.upjs.sk host times out entirely (the main www.upjs.sk site responds), so the PMEA2026 proceedings PDF and its 2028 announcement cannot be re-read; the record's unknown dates are left unchanged.；未核字段：status: 2028 return to Slovakia announcement、location: Slovakia。本轮未复核，原状态保留。
- **tms2027** — https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm；原因：Official content changed; recognised fields may be updated, but the remaining content requires review.；未核字段：dates、times、timezones、people_roles_affiliations。本轮未复核，原状态保留。

## 全部未解决传输问题（与语义积压分列）

- https://ai4science-amsterdam.github.io/news/chemai/ — unverifiable；Official source returned no readable page content.。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://aichemy.ac.uk/event/aichemy-annual-conference-2027/ — unverifiable；IncompleteRead(17385 bytes read)。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/ — unverifiable；IncompleteRead(15945 bytes read)。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/ — unverifiable；IncompleteRead(7761 bytes read)。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/ — unverifiable；IncompleteRead(15943 bytes read)。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897 — unverifiable；IncompleteRead(8192 bytes read)。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://cecamsimul.eu/events/events-2026 — unverifiable；HTTP Error 403: Forbidden。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://event.fourwaves.com/interpore2027/submission — unverifiable；Official source returned no readable page content.。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://icc2027.ieee-icc.org/authors/call-symposium-papers — unverifiable；<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1010)>。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf — unverifiable；<urlopen error timed out>。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://uon-comp-chem.github.io/mm2027/ — unverifiable；Official source returned no readable page content.。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://watoc2028.org/ — unverifiable；Official source returned no readable page content.。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.aiche.org/conferences/aiche-annual-meeting/2026/2026-registration-info — unverifiable；HTTP Error 403: Forbidden。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization — unverifiable；HTTP Error 403: Forbidden。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee — unverifiable；HTTP Error 403: Forbidden。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.carboncapture.eng.ed.ac.uk/ARIC_Course — unverifiable；<urlopen error timed out>。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.euromat2027.com/ — failed；HTTP Error 503: Service Unavailable。本轮两次重试及官方替代证据见上；未证明日常恢复。
- https://www.euromat2027.com/committee.html — failed；HTTP Error 503: Service Unavailable。本轮两次重试及官方替代证据见上；未证明日常恢复。
- https://www.grc.org/chemistry-and-physics-of-liquids-grs-conference/2027/ — failed；HTTP Error 404: Not Found。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.grc.org/computer-aided-drug-design-conference/2027/ — unverifiable；Official source returned no readable page content.。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.grc.org/computer-aided-drug-design-grs-conference/2027/ — unverifiable；Official source returned no readable page content.。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/ — unverifiable；Official source returned no readable page content.。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/ — unverifiable；Official source returned no readable page content.。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.grc.org/soft-condensed-matter-physics-conference/2027/ — unverifiable；Official source returned no readable page content.。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.grc.org/soft-condensed-matter-physics-grs-conference/2027/ — unverifiable；Official source returned no readable page content.。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.siam.org/conferences-events/siam-conferences/ms27/ — unverifiable；HTTP Error 403: Forbidden。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/ — unverifiable；HTTP Error 403: Forbidden。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx — unverifiable；HTTP Error 403: Forbidden。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx — unverifiable；HTTP Error 403: Forbidden。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx — unverifiable；HTTP Error 403: Forbidden。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx — unverifiable；HTTP Error 403: Forbidden。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx — unverifiable；HTTP Error 403: Forbidden。沿用今日监测及既有逐条复核证据；本批未重试，不宣称新增故障或恢复。
- https://www.tms.org/TMS2027/TMS2027/RegTravel/registration.aspx — unverifiable；HTTP Error 403: Forbidden。本轮两次重试及官方替代证据见上；未证明日常恢复。

## 需要用户决定的事项

无。官方内容冲突继续自动跟进，不要求用户替官方解释。

## 测试与发布

本地验证已通过：109 项 Node 测试、45 项 Python 测试；目录校验 166 个正式活动、8 个观察项；证据哈希与队列计数校验通过；git diff --check 通过。发布验证待推送后补充。完整机器记录：data/heartbeat-review-2026-11-03.json。
