# Conference Reminder 维护复核 — 2026-11-02

检查范围：104 个已排期活动、6 个待日期活动，读取全部 255 个最新来源检查状态及历史复核记录。本次全部异常/待复核来源共 190 条（包含替代入口检查中新发现的两个 ESAT 本地 TLS 失败），未固定沿用历史数量。

今日每日自动更新及发布已成功：[工作流 41407926578](https://github.com/vickie02736/conference-reminder/actions/runs/41407926578)，来源检查时间 07:42:43 UTC；未重复执行每日 updater。

互斥处理结果：原址本次可读（success）15；替代来源 10；待人工/仍需语义复核 165；仍失败且无替代 0。这些不是全页内容通过率。

日常检查状态：{'checked': 227, 'unverifiable': 25, 'failed': 3}。相较昨日新增日常失败 0；ESAT 三个地址新增本地 TLS 问题，未覆盖 GitHub 成功状态。原址日常抓取确认稳定恢复 0；METFOAM 与 ICTS MWAS 今日各有一次定时成功观察，继续观察，不宣布稳定恢复。

全量逐条读取/有界重试/替代入口复查已完成；不把 HTTP 200、哈希一致、CDX 索引或部分字段匹配当作全部内容核实。仍需语义复核的来源逐条保留，日常状态不由本地一次下载改写。

## 有证据的重要变化

- EuroMOF 2027 已开放投稿及注册；摘要 2027-02-01、早鸟 04-05、regular fee 07-03 不变，未补造钟点/时区。[投稿](https://euromof2027.com/abstracts.html) · [注册](https://euromof2027.com/registration.html)
- AISTATS 2027 workshop 提案明确延至 **2026-11-06 22:59 CET（21:59 UTC）**；节点版本升为 2。[11 月 2 日延期公告](https://virtual.aistats.org/Conferences/2027/CallForWorkshops)
- NeurIPS 最新首页将 Sydney/Atlanta 候补启用说明改为 **11 月 1 日 11 am PST**；仍每日释放名额，Paris 分开确认。[官网](https://nips.cc/Conferences/2026)
- E-MRS Symposium KK 组织者 Junjie Zhao 的官网机构已从 Tohoku University 更新为 FunGlass, Alexander Dubček University of Trenčín，写入选录人员。[官网](https://www.european-mrs.com/materials-properties-finite-temperature-atomic-scale-modelling-methodologies-applications-and-beyond)
- EAZC 通过浏览器逐页核实既有会议/截止及已收录委员会、plenary/special 讲者，与现有数据一致；每日自动正文仍不可读。
- InterPore 的 Important Dates 仍为 1 月 11 日，而投稿页为 1 月 12 日；API 不足以解释冲突，继续保留 conflict。

## 每条记录：尝试、状态、未解原因和证据

### 1. ijcai-2027

- 原址：[https://2027.ijcai.org/ijcai-2027-call-for-papers-main-track/](https://2027.ijcai.org/ijcai-2027-call-for-papers-main-track/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-08-07（日期精度）；Conference ends: 2027-08-13（日期精度）；Main / AI4Science abstracts: 2027-01-04 23:59 Etc/GMT+12；Main / AI4Science full papers: 2027-01-11 23:59 Etc/GMT+12；Hengqin satellite starts: 2027-08-15（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://2027.ijcai.org/ijcai-2027-call-for-papers-main-track/) → 200
- 可验证的官方来源/读取入口：[1](https://2027.ijcai.org/ijcai-2027-call-for-papers-main-track/)

### 2. aaai-2027

- 原址：[https://aaai.org/conference/aaai/aaai-27/](https://aaai.org/conference/aaai/aaai-27/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-02-16（日期精度）；Conference ends: 2027-02-23（日期精度）；Main papers: 2026-07-28（日期精度）；尚未在抓取正文确认姓名/角色/机构：Association for the Advancement of Artificial Intelligence (AAAI)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://aaai.org/conference/aaai/aaai-27/) → 200
- 可验证的官方来源/读取入口：[1](https://aaai.org/conference/aaai/aaai-27/)

### 3. actc-2027-american-conference-on-theoretical-chemistry

- 原址：[https://actc2027.com/](https://actc2027.com/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-06-15（日期精度）；Conference ends: 2027-06-18（日期精度）；Abstract deadline: None（日期精度）；Registration: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：Valeria Molinero, Michael Grünwald, Aurora Clark, Jessica Swanson, Ryan Steele
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://actc2027.com/) → 200
- 可验证的官方来源/读取入口：[1](https://actc2027.com/)

### 4. the-advanced-materials-show-2027

- 原址：[https://advancedmaterialsshow.com/full-conference/](https://advancedmaterialsshow.com/full-conference/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Exhibition starts: 2027-06-16（日期精度）；Exhibition ends: 2027-06-17（日期精度）；Submission deadline: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://advancedmaterialsshow.com/full-conference/) → 200
- 可验证的官方来源/读取入口：[1](https://advancedmaterialsshow.com/full-conference/)

### 5. ai4am-2027-ai-for-advanced-materials

- 原址：[https://ai4am.net/](https://ai4am.net/)
- 原失败/待复核原因：Official source returned no readable page content.
- 最终状态：alternative；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：Official source returned no readable page content.；替代入口只覆盖各自明确发布的字段，原页专有内容尚未完整核实。 历史未解原因：Official source returned no readable page content.；可用其他官方入口只覆盖其明确发布的字段，不能证明原页专有内容已核实。
- 关联字段（保留已有事实）：Conference starts: 2027-10-19（日期精度）；Conference ends: 2027-10-22（日期精度）；Oral abstracts: 2027-04-12（日期精度）；Poster abstracts: 2027-06-30（日期精度）；Early registration: 2027-05-21（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://ai4am.net/) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://ai4am.net/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.ai4am.net/2027/deadlines.php) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.ai4am.net/2027/organisersCommittees.php) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.ai4am.net/2027/speakers.php) → 200
- 可验证的官方来源/读取入口：[1](https://www.ai4am.net/2027/deadlines.php)、[2](https://www.ai4am.net/2027/organisersCommittees.php)、[3](https://www.ai4am.net/2027/speakers.php)

### 6. chemai-2026

- 原址：[https://ai4science-amsterdam.github.io/news/chemai/](https://ai4science-amsterdam.github.io/news/chemai/)
- 原失败/待复核原因：Official source returned no readable page content.
- 最终状态：alternative；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：Official source returned no readable page content.；替代入口只覆盖各自明确发布的字段，原页专有内容尚未完整核实。 历史未解原因：Official source returned no readable page content.；可用其他官方入口只覆盖其明确发布的字段，不能证明原页专有内容已核实。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://ai4science-amsterdam.github.io/news/chemai/) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://ai4science-amsterdam.github.io/news/chemai/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.acnetwork.nl/chemai) → 200
- 可验证的官方来源/读取入口：[1](https://www.acnetwork.nl/chemai)

### 7. ai4x-2027

- 原址：[https://ai4x.cc/2027/call-for-papers/important-dates/](https://ai4x.cc/2027/call-for-papers/important-dates/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-06-14（日期精度）；Conference ends: 2027-06-17（日期精度）；Round 1 papers: 2026-12-31 23:59 Etc/GMT+12；Round 2 papers: 2027-02-21 23:59 Etc/GMT+12；Early registration: 2027-04-21（日期精度）；Standard registration: 2027-05-09（日期精度）；Presenting-author registration: 2027-05-09（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://ai4x.cc/2027/call-for-papers/important-dates/) → 200
- 可验证的官方来源/读取入口：[1](https://ai4x.cc/2027/call-for-papers/important-dates/)

### 8. ai4x-2027

- 原址：[https://ai4x.cc/2027/speakers/](https://ai4x.cc/2027/speakers/)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://ai4x.cc/2027/speakers/) → 200
- 可验证的官方来源/读取入口：[1](https://ai4x.cc/2027/speakers/)

### 9. aichemy-annual-conference-2027

- 原址：[https://aichemy.ac.uk/event/aichemy-annual-conference-2027/](https://aichemy.ac.uk/event/aichemy-annual-conference-2027/)
- 原失败/待复核原因：IncompleteRead(7658 bytes read)
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：全天事件的 00:00/23:59:59 是系统占位时间，未写入精确提醒。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://aichemy.ac.uk/event/aichemy-annual-conference-2027/) → [Errno 54] Connection reset by peer；[bounded curl HTTP/1.1 retry](https://aichemy.ac.uk/event/aichemy-annual-conference-2027/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522) → 200
- 可验证的官方来源/读取入口：[1](https://aichemy.ac.uk/event/aichemy-annual-conference-2027/)、[2](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522)

### 10. defects2027

- 原址：[https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/](https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/)
- 原失败/待复核原因：IncompleteRead(15945 bytes read)
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。
- 关联字段（保留已有事实）：Workshop starts: 2027-01-06（日期精度）；Workshop ends: 2027-01-08（日期精度）；Oral abstracts: 2026-11-23（日期精度）；Poster abstracts: 2026-12-16（日期精度）；Registration: 2026-12-16（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/) → [Errno 54] Connection reset by peer；[bounded curl HTTP/1.1 retry](https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://psi-k.net/workshops/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://psi-k.net/wp-content/uploads/2026/03/2026_Psik_Poster_v1.pdf) → 200
- 可验证的官方来源/读取入口：[1](https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/)、[2](https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a)、[3](https://psi-k.net/workshops/)、[4](https://psi-k.net/wp-content/uploads/2026/03/2026_Psik_Poster_v1.pdf)

### 11. introduction-to-machine-learning-for-chemists-workshop

- 原址：[https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/](https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/)
- 原失败/待复核原因：IncompleteRead(7761 bytes read)
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：结束时间冲突仍保留，里程碑维持日期精度；现有 urllib 监测再次连接重置，不能称日常抓取已稳定。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/) → [Errno 54] Connection reset by peer；[bounded curl HTTP/1.1 retry](https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552) → [Errno 54] Connection reset by peer
- 可验证的官方来源/读取入口：[1](https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/)

### 12. aichemy-winter-school-robotics-and-ai-for-materials-chemistry-2026

- 原址：[https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/](https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/)
- 原失败/待复核原因：IncompleteRead(15943 bytes read)
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：现有 urllib 监测仍连接重置；全天事件元数据不作精确时刻使用。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/) → [Errno 54] Connection reset by peer；[bounded curl HTTP/1.1 retry](https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897) → [Errno 54] Connection reset by peer
- 可验证的官方来源/读取入口：[1](https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/)

### 13. aichemy-annual-conference-2027

- 原址：[https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522)
- 原失败/待复核原因：The read operation timed out
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-04-14（日期精度）；Conference ends: 2027-04-15（日期精度）；Poster abstracts: None（日期精度）；Registration: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：AIchemy
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522) → 200
- 可验证的官方来源/读取入口：[1](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522)

### 14. introduction-to-machine-learning-for-chemists-workshop

- 原址：[https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552)
- 原失败/待复核原因：IncompleteRead(7641 bytes read)
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。
- 关联字段（保留已有事实）：School starts: 2027-01-22（日期精度）；School ends: 2027-01-22（日期精度）；Training applications: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552) → [Errno 54] Connection reset by peer；[bounded curl HTTP/1.1 retry](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/) → [Errno 54] Connection reset by peer
- 可验证的官方来源/读取入口：[1](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552)

### 15. aichemy-winter-school-robotics-and-ai-for-materials-chemistry-2026

- 原址：[https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897)
- 原失败/待复核原因：IncompleteRead(14691 bytes read)
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。
- 关联字段（保留已有事实）：School starts: 2026-11-23（日期精度）；School ends: 2026-11-27（日期精度）；School applications: 2026-08-24（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897) → [Errno 54] Connection reset by peer；[bounded curl HTTP/1.1 retry](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/) → [Errno 54] Connection reset by peer
- 可验证的官方来源/读取入口：[1](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897)

### 16. aicmsn-2027

- 原址：[https://aicmsn2027.synergiasummits.com/abstract](https://aicmsn2027.synergiasummits.com/abstract)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：First-round abstract submission deadline: 2026-12-31（日期精度）；尚未在抓取正文确认姓名/角色/机构：Synergia Summits Private Limited
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://aicmsn2027.synergiasummits.com/abstract) → 200
- 可验证的官方来源/读取入口：[1](https://aicmsn2027.synergiasummits.com/abstract)

### 17. aisb-convention-2027

- 原址：[https://aisb.org.uk/call-for-symposia-proposals-aisb-2027-university-of-liverpool/](https://aisb.org.uk/call-for-symposia-proposals-aisb-2027-university-of-liverpool/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-06-01（日期精度）；Conference ends: 2027-06-03（日期精度）；Symposium organisation proposals: 2026-11-15（日期精度）；Individual-symposium papers: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：Society for the Study of Artificial Intelligence and Simulation of Behaviour (AISB)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://aisb.org.uk/call-for-symposia-proposals-aisb-2027-university-of-liverpool/) → 200
- 可验证的官方来源/读取入口：[1](https://aisb.org.uk/call-for-symposia-proposals-aisb-2027-university-of-liverpool/)

### 18. aistats-2027

- 原址：[https://aistats.org/aistats2027/committee.html](https://aistats.org/aistats2027/committee.html)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://aistats.org/aistats2027/committee.html) → 200
- 可验证的官方来源/读取入口：[1](https://aistats.org/aistats2027/committee.html)

### 19. 历史来源

- 原址：[https://aistats.org/aistats2027/dates.html](https://aistats.org/aistats2027/dates.html)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 0 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://aistats.org/aistats2027/dates.html) → 200
- 可验证的官方来源/读取入口：[1](https://aistats.org/aistats2027/dates.html)

### 20. aixmat-2026-ai-in-materials-research-summit

- 原址：[https://aixmat.candela.org.pl/](https://aixmat.candela.org.pl/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2026-11-24（日期精度）；Conference ends: 2026-11-26（日期精度）；Round 2, posters only: 2026-10-29（日期精度）；Regular registration: 2026-10-26（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://aixmat.candela.org.pl/) → 200
- 可验证的官方来源/读取入口：[1](https://aixmat.candela.org.pl/)

### 21. world-conference-on-carbon-2027

- 原址：[https://carbon2027.or.kr/](https://carbon2027.or.kr/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-06-20（日期精度）；Conference ends: 2027-06-25（日期精度）；Abstracts: 2027-01-20（日期精度）；Early registration: 2027-04-09（日期精度）；Presenting-author registration: 2027-04-09（日期精度）；General registration: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：Genicom Co., Ltd.
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://carbon2027.or.kr/) → 200
- 可验证的官方来源/读取入口：[1](https://carbon2027.or.kr/)

### 22. world-conference-on-carbon-2027

- 原址：[https://carbon2027.or.kr/cfp.html](https://carbon2027.or.kr/cfp.html)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://carbon2027.or.kr/cfp.html) → 200
- 可验证的官方来源/读取入口：[1](https://carbon2027.or.kr/cfp.html)

### 23. ukpormat2027

- 原址：[https://composites.blogs.bristol.ac.uk/2026/06/19/1058/](https://composites.blogs.bristol.ac.uk/2026/06/19/1058/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Activity starts: None（日期精度）；Abstracts: None（日期精度）；Registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://composites.blogs.bristol.ac.uk/2026/06/19/1058/) → 200
- 可验证的官方来源/读取入口：[1](https://composites.blogs.bristol.ac.uk/2026/06/19/1058/)

### 24. materiais-2027-xxiii-portuguese-materials-congress-xiv-international-symposium-on-materials

- 原址：[https://congressomateriais.pt/editions/2027](https://congressomateriais.pt/editions/2027)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-03-22（日期精度）；Workshop ends: 2027-03-24（日期精度）；Extended abstracts: 2026-12-01（日期精度）；Reduced-fee registration: 2027-01-01（日期精度）；尚未在抓取正文确认姓名/角色/机构：Sociedade Portuguesa de Materiais (SPM), Instituto Superior de Engenharia do Porto (ISEP)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://congressomateriais.pt/editions/2027) → 200
- 可验证的官方来源/读取入口：[1](https://congressomateriais.pt/editions/2027)

### 25. do-androids-dream-of-electric-papers-benchmarking-ai-scientists

- 原址：[https://constructorlabs.org/event/do-androids-dream-of-electric-papers/](https://constructorlabs.org/event/do-androids-dream-of-electric-papers/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2026-11-25（日期精度）；Workshop ends: 2026-11-25（日期精度）；Workshop applications: 2026-11-02（日期精度）；尚未在抓取正文确认姓名/角色/机构：Advanced Research and Invention Agency (ARIA)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://constructorlabs.org/event/do-androids-dream-of-electric-papers/) → 200
- 可验证的官方来源/读取入口：[1](https://constructorlabs.org/event/do-androids-dream-of-electric-papers/)

### 26. next-cops-conference-cops-xiii

- 原址：[https://cops-xii.org/](https://cops-xii.org/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2029-05-06（日期精度）；Conference ends: 2029-05-09（日期精度）；Abstracts: None（日期精度）；Registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://cops-xii.org/) → 200
- 可验证的官方来源/读取入口：[1](https://cops-xii.org/)

### 27. cpm10

- 原址：[https://cpm-workshop.org/](https://cpm-workshop.org/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-05-23（日期精度）；Workshop ends: 2027-05-26（日期精度）；Abstracts: 2026-12-01（日期精度）；Registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://cpm-workshop.org/) → 200
- 可验证的官方来源/读取入口：[1](https://cpm-workshop.org/)

### 28. feza2029-11th-conference-of-the-federation-of-european-zeolite-associations

- 原址：[https://cqe.tecnico.ulisboa.pt/cqe-researchers-organize-the-xiii-encmp-and-iv-rgc/](https://cqe.tecnico.ulisboa.pt/cqe-researchers-organize-the-xiii-encmp-and-iv-rgc/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：HTTP Error 503: Service Unavailable；本次未获得覆盖全部受影响字段的可读取官方替代内容。
- 关联字段（保留已有事实）：尚未在抓取正文确认姓名/角色/机构：Portuguese Chemical Society (SPQ)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://cqe.tecnico.ulisboa.pt/cqe-researchers-organize-the-xiii-encmp-and-iv-rgc/) → 200
- 可验证的官方来源/读取入口：[1](https://cqe.tecnico.ulisboa.pt/cqe-researchers-organize-the-xiii-encmp-and-iv-rgc/)

### 29. cpm10

- 原址：[https://dechema.de/en/cpm10.html](https://dechema.de/en/cpm10.html)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://dechema.de/en/cpm10.html) → 200
- 可验证的官方来源/读取入口：[1](https://dechema.de/en/cpm10.html)

### 30. dzt38

- 原址：[https://dechema.de/en/dzt38.html](https://dechema.de/en/dzt38.html)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-03-03（日期精度）；Conference ends: 2027-03-05（日期精度）；Oral and poster abstracts: 2026-11-27（日期精度）；Registration: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：Institute of Chemical Technology, Leipzig University
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://dechema.de/en/dzt38.html) → 200
- 可验证的官方来源/读取入口：[1](https://dechema.de/en/dzt38.html)

### 31. aimse2027, dgm-aimse-2027

- 原址：[https://dgm.de/aimse/2027](https://dgm.de/aimse/2027)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.; Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 2 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-11-17（日期精度）；Conference ends: 2027-11-18（日期精度）；Abstracts: None（日期精度）；Registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://dgm.de/aimse/2027) → 200
- 可验证的官方来源/读取入口：[1](https://dgm.de/aimse/2027)

### 32. aimse2027, dgm-aimse-2027

- 原址：[https://dgm.de/aimse/2027/](https://dgm.de/aimse/2027/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.; Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 2 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-11-17（日期精度）；Conference ends: 2027-11-18（日期精度）；Abstract deadline: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://dgm.de/aimse/2027/) → 200
- 可验证的官方来源/读取入口：[1](https://dgm.de/aimse/2027/)

### 33. aimse2027

- 原址：[https://dgm.de/aimse/2027/submission/abstract-submission](https://dgm.de/aimse/2027/submission/abstract-submission)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://dgm.de/aimse/2027/submission/abstract-submission) → 200
- 可验证的官方来源/读取入口：[1](https://dgm.de/aimse/2027/submission/abstract-submission)

### 34. ecai-2027-european-conference-on-artificial-intelligence

- 原址：[https://ecai2027.org/](https://ecai2027.org/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-10-02（日期精度）；Conference ends: 2027-10-07（日期精度）；Full papers: 2027-04-14（日期精度）；尚未在抓取正文确认姓名/角色/机构：University of Piraeus, National Centre of Scientific Research Demokritos
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://ecai2027.org/) → 200
- 可验证的官方来源/读取入口：[1](https://ecai2027.org/)

### 35. ecml-pkdd-2027

- 原址：[https://ecmlpkdd.org/2027/](https://ecmlpkdd.org/2027/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-08-30（日期精度）；Conference ends: 2027-09-03（日期精度）；Paper submissions: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://ecmlpkdd.org/2027/) → 200
- 可验证的官方来源/读取入口：[1](https://ecmlpkdd.org/2027/)

### 36. ecml-pkdd-2027

- 原址：[https://ecmlpkdd.org/2027/organisation-chairs/](https://ecmlpkdd.org/2027/organisation-chairs/)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://ecmlpkdd.org/2027/organisation-chairs/) → 200
- 可验证的官方来源/读取入口：[1](https://ecmlpkdd.org/2027/organisation-chairs/)

### 37. 6th-emmc-international-workshop-2027

- 原址：[https://emmc.eu/events/emmc2027/](https://emmc.eu/events/emmc2027/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-04-20（日期精度）；Workshop ends: 2027-04-22（日期精度）；Abstract deadline: None（日期精度）；Registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://emmc.eu/events/emmc2027/) → 200
- 可验证的官方来源/读取入口：[1](https://emmc.eu/events/emmc2027/)

### 38. 6th-emmc-international-workshop-2027

- 原址：[https://emmc.eu/events/emmc2027/committees/](https://emmc.eu/events/emmc2027/committees/)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：尚未在抓取正文确认姓名/角色/机构：European Materials Modelling Council (EMMC ASBL)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://emmc.eu/events/emmc2027/committees/) → 200
- 可验证的官方来源/读取入口：[1](https://emmc.eu/events/emmc2027/committees/)

### 39. tyc20-celebration-of-the-thomas-young-centre-at-20

- 原址：[https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce](https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce) → 200
- 可验证的官方来源/读取入口：[1](https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce)

### 40. euromof2027

- 原址：[https://euromof2027.com/abstracts.html](https://euromof2027.com/abstracts.html)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：官网明确 Abstract submission is open；摘要截止仍 2027-02-01，未发布精确钟点或时区。已核实该适配器全部字段并清除相应 fingerprint 人工标记。；稳定自动恢复：否。
- 未解决的具体原因/边界：官网明确 Abstract submission is open；摘要截止仍 2027-02-01，未发布精确钟点或时区。已核实该适配器全部字段并清除相应 fingerprint 人工标记。 该页内容已核实；不据此宣称全站自动抓取稳定。
- 关联字段（保留已有事实）：Abstracts: 2027-02-01（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://euromof2027.com/abstracts.html) → 200
- 可验证的官方来源/读取入口：[1](https://euromof2027.com/abstracts.html)

### 41. mofschool2027, euromof2027

- 原址：[https://euromof2027.com/index.html](https://euromof2027.com/index.html)
- 原失败/待复核原因：Recovered source content differs from the prior successful fetch; facts require review.; Recovered source content differs from the prior successful fetch; facts require review.
- 最终状态：manual；内容核实范围：首页确认 2027-07-04 至 07-07，并改为 Registration is now open；投稿/注册页核实开放与三项原有截止日期。其余人工标记保留。；稳定自动恢复：否。
- 未解决的具体原因/边界：首页确认 2027-07-04 至 07-07，并改为 Registration is now open；投稿/注册页核实开放与三项原有截止日期。其余人工标记保留。 其余未列出的字段及监测状态仍保留。
- 关联字段（保留已有事实）：School starts: 2027-06-29（日期精度）；School ends: 2027-07-02（日期精度）；School applications: None（日期精度）；Conference starts: 2027-07-04（日期精度）；Conference ends: 2027-07-07（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://euromof2027.com/index.html) → 200
- 可验证的官方来源/读取入口：[1](https://euromof2027.com/index.html)

### 42. euromof2027

- 原址：[https://euromof2027.com/registration.html](https://euromof2027.com/registration.html)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：官网明确 Registration is open；early bird 2027-04-05、regular fee 2027-07-03，仍日期精度。已核实该适配器全部字段并清除相应 fingerprint 人工标记。；稳定自动恢复：否。
- 未解决的具体原因/边界：官网明确 Registration is open；early bird 2027-04-05、regular fee 2027-07-03，仍日期精度。已核实该适配器全部字段并清除相应 fingerprint 人工标记。 该页内容已核实；不据此宣称全站自动抓取稳定。
- 关联字段（保留已有事实）：Early registration: 2027-04-05（日期精度）；Regular registration rate ends: 2027-07-03（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://euromof2027.com/registration.html) → 200
- 可验证的官方来源/读取入口：[1](https://euromof2027.com/registration.html)

### 43. world-conference-on-carbon-2027

- 原址：[https://europeancarbon.eu/index.php/event/world-conference-on-carbon-2027-carbon-2027/](https://europeancarbon.eu/index.php/event/world-conference-on-carbon-2027-carbon-2027/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://europeancarbon.eu/index.php/event/world-conference-on-carbon-2027-carbon-2027/) → 200
- 可验证的官方来源/读取入口：[1](https://europeancarbon.eu/index.php/event/world-conference-on-carbon-2027-carbon-2027/)

### 44. interpore2027

- 原址：[https://event.fourwaves.com/interpore2027](https://event.fourwaves.com/interpore2027)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Abstracts — conflicting official dates: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://event.fourwaves.com/interpore2027) → 200
- 可验证的官方来源/读取入口：[1](https://event.fourwaves.com/interpore2027)

### 45. interpore2027

- 原址：[https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Early registration: 2027-03-12（日期精度）；In-person oral-presenter registration: 2027-03-26（日期精度）；Poster and online-presenter registration: 2027-04-16（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a) → 200
- 可验证的官方来源/读取入口：[1](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a)

### 46. interpore2027

- 原址：[https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4](https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-05-10（日期精度）；Conference ends: 2027-05-13（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4) → 200
- 可验证的官方来源/读取入口：[1](https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4)

### 47. interpore2027

- 原址：[https://event.fourwaves.com/interpore2027/submission](https://event.fourwaves.com/interpore2027/submission)
- 原失败/待复核原因：Official source returned no readable page content.
- 最终状态：manual；内容核实范围：浏览器本次确认 Submission deadline is January 12, 2027；Important Dates 仍为 2027-01-11；API 的 submissionEndDate 为 2027-01-12T07:00:00Z、timeZone 为 America/Buenos_Aires。API 配置未解释冲突，不用它猜会议截止钟点。保留 conflict。；稳定自动恢复：否。
- 未解决的具体原因/边界：浏览器本次确认 Submission deadline is January 12, 2027；Important Dates 仍为 2027-01-11；API 的 submissionEndDate 为 2027-01-12T07:00:00Z、timeZone 为 America/Buenos_Aires。API 配置未解释冲突，不用它猜会议截止钟点。保留 conflict。 其余未列出的字段及监测状态仍保留。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://event.fourwaves.com/interpore2027/submission) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://event.fourwaves.com/interpore2027/submission) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://api.fourwaves.com/api/events/interpore2027) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://event.fourwaves.com/interpore2027) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj) → 200；[rendered browser](https://event.fourwaves.com/interpore2027/submission) → True
- 可验证的官方来源/读取入口：[1](https://event.fourwaves.com/interpore2027/submission)、[2](https://api.fourwaves.com/api/events/interpore2027)、[3](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a)、[4](https://event.fourwaves.com/interpore2027)、[5](https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4)、[6](https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj)

### 48. ecomat-conference-2026

- 原址：[https://events.polyu.edu.hk/ecomat2026/home](https://events.polyu.edu.hk/ecomat2026/home)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2026-11-29（日期精度）；Conference ends: 2026-12-01（日期精度）；Extended abstracts: 2026-10-30（日期精度）；Extended early registration: 2026-10-30（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://events.polyu.edu.hk/ecomat2026/home) → 200
- 可验证的官方来源/读取入口：[1](https://events.polyu.edu.hk/ecomat2026/home)

### 49. 历史来源

- 原址：[https://fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027](https://fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027)
- 原失败/待复核原因：已找到并实抓官方替代来源；仅覆盖该来源明确提供的事实，旧来源的专有内容仍保留核实要求。
- 最终状态：alternative；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：HTTP Error 404: Not Found；替代入口只覆盖各自明确发布的字段，原页专有内容尚未完整核实。 历史未解原因：HTTP Error 404: Not Found；可用其他官方入口只覆盖其明确发布的字段，不能证明原页专有内容已核实。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027) → HTTP Error 404: Not Found；[bounded curl HTTP/1.1 retry](https://fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027) → 404；[official alternative / cache index; an index response is not a cached snapshot](https://www.fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027) → 200
- 可验证的官方来源/读取入口：[1](https://www.fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027)

### 50. fems-euromat-2027

- 原址：[https://fems.org/about-fems/fems-euromat-conference-series/fems-euromat/](https://fems.org/about-fems/fems-euromat-conference-series/fems-euromat/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://fems.org/about-fems/fems-euromat-conference-series/fems-euromat/) → 200
- 可验证的官方来源/读取入口：[1](https://fems.org/about-fems/fems-euromat-conference-series/fems-euromat/)

### 51. 7th-fems-industry-symposium-materials-assisted-by-digital-science

- 原址：[https://fems.org/industry-symposium-frankfurt-14-january-2027/](https://fems.org/industry-symposium-frankfurt-14-january-2027/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-01-14（日期精度）；Workshop ends: 2027-01-14（日期精度）；Abstract deadline: None（日期精度）；Registration: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：Federation of European Materials Societies (FEMS)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://fems.org/industry-symposium-frankfurt-14-january-2027/) → 200
- 可验证的官方来源/读取入口：[1](https://fems.org/industry-symposium-frankfurt-14-january-2027/)

### 52. fomms2027

- 原址：[https://fomms.cache.org/](https://fomms.cache.org/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://fomms.cache.org/) → 200
- 可验证的官方来源/读取入口：[1](https://fomms.cache.org/)

### 53. fomms2027

- 原址：[https://fomms.cache.org/2027/important-dates](https://fomms.cache.org/2027/important-dates)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-07-11（日期精度）；Conference ends: 2027-07-16（日期精度）；Early registration opens: 2027-01-10（日期精度）；Early registration: 2027-04-30（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://fomms.cache.org/2027/important-dates) → 200
- 可验证的官方来源/读取入口：[1](https://fomms.cache.org/2027/important-dates)

### 54. icml-2027

- 原址：[https://icml.cc/Conferences/FutureMeetings](https://icml.cc/Conferences/FutureMeetings)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Activity starts: None（日期精度）；Paper submissions: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://icml.cc/Conferences/FutureMeetings) → 200
- 可验证的官方来源/读取入口：[1](https://icml.cc/Conferences/FutureMeetings)

### 55. 23rd-international-workshop-on-computational-physics-and-materials-science-total-energy-and-force-methods

- 原址：[https://indico.ictp.it/event/11409](https://indico.ictp.it/event/11409)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：The read operation timed out；本次未获得覆盖全部受影响字段的可读取官方替代内容。
- 关联字段（保留已有事实）：Workshop starts: 2027-01-13（日期精度）；Workshop ends: 2027-01-15（日期精度）；Applications: 2026-10-11（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://indico.ictp.it/event/11409) → 200
- 可验证的官方来源/读取入口：[1](https://indico.ictp.it/event/11409)

### 56. 17th-international-symposium-on-wettability-and-porous-media-7th-interpore-benelux-meeting-iswpm26

- 原址：[https://interpore.org/event/7th-interpore-benelux-chapter-meeting](https://interpore.org/event/7th-interpore-benelux-chapter-meeting)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://interpore.org/event/7th-interpore-benelux-chapter-meeting) → 200
- 可验证的官方来源/读取入口：[1](https://interpore.org/event/7th-interpore-benelux-chapter-meeting)

### 57. 9th-norway-national-workshop-in-porous-media

- 原址：[https://interpore.org/event/9th-norway-national-workshop-porous-media](https://interpore.org/event/9th-norway-national-workshop-porous-media)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2026-11-27（日期精度）；Workshop ends: 2026-11-27（日期精度）；Registration: 2026-11-10（日期精度）；Abstract deadline: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：InterPore Norway National Chapter
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://interpore.org/event/9th-norway-national-workshop-porous-media) → 200
- 可验证的官方来源/读取入口：[1](https://interpore.org/event/9th-norway-national-workshop-porous-media)

### 58. vii-annual-spain-interpore-meeting

- 原址：[https://interpore.org/event/vii-annual-spain-interpore-meeting](https://interpore.org/event/vii-annual-spain-interpore-meeting)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://interpore.org/event/vii-annual-spain-interpore-meeting) → 200
- 可验证的官方来源/读取入口：[1](https://interpore.org/event/vii-annual-spain-interpore-meeting)

### 59. colt-2027-conference-on-learning-theory

- 原址：[https://learningtheory.org/colt2027/](https://learningtheory.org/colt2027/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-06-28（日期精度）；Conference ends: 2027-07-02（日期精度）；Paper submissions: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://learningtheory.org/colt2027/) → 200
- 可验证的官方来源/读取入口：[1](https://learningtheory.org/colt2027/)

### 60. materials-2027-magnus

- 原址：[https://magnusconferences.com/materials-science/](https://magnusconferences.com/materials-science/)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-03-18（日期精度）；Conference ends: 2027-03-20（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://magnusconferences.com/materials-science/) → 200
- 可验证的官方来源/读取入口：[1](https://magnusconferences.com/materials-science/)

### 61. materials-2027-magnus

- 原址：[https://magnusconferences.com/materials-science/information/important-dates](https://magnusconferences.com/materials-science/information/important-dates)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：First-round abstract submission deadline: 2026-10-29 23:59 Asia/Singapore；Second-round abstract submission deadline: 2026-12-29 23:59 Asia/Singapore；Final-round abstract submission deadline: 2027-03-03 23:59 Asia/Singapore；Early-bird registration deadline: 2026-10-31 23:59 Asia/Singapore；Final registration deadline: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://magnusconferences.com/materials-science/information/important-dates) → 200
- 可验证的官方来源/读取入口：[1](https://magnusconferences.com/materials-science/information/important-dates)

### 62. materials-2027-magnus

- 原址：[https://magnusconferences.com/materials-science/register](https://magnusconferences.com/materials-science/register)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://magnusconferences.com/materials-science/register) → 200
- 可验证的官方来源/读取入口：[1](https://magnusconferences.com/materials-science/register)

### 63. new-frontiers-in-nonequilibrium-statistical-physics-of-glasses

- 原址：[https://mephysociety.wordpress.com/2026/05/06/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-vienna-nov30-dec4-2026/](https://mephysociety.wordpress.com/2026/05/06/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-vienna-nov30-dec4-2026/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://mephysociety.wordpress.com/2026/05/06/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-vienna-nov30-dec4-2026/) → 200
- 可验证的官方来源/读取入口：[1](https://mephysociety.wordpress.com/2026/05/06/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-vienna-nov30-dec4-2026/)

### 64. metfoam2027

- 原址：[https://metfoam2027.com/](https://metfoam2027.com/)
- 原失败/待复核原因：<urlopen error [Errno 101] Network is unreachable>
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。
- 关联字段（保留已有事实）：Conference starts: 2027-06-14（日期精度）；Conference ends: 2027-06-17（日期精度）；Abstracts: 2026-11-30（日期精度）；Submit before this date for a €50 registration reduction: 2026-10-31（日期精度）；Early registration: 2027-01-31（日期精度）；Regular registration: 2027-05-31（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://metfoam2027.com/) → 200
- 可验证的官方来源/读取入口：[1](https://metfoam2027.com/)

### 65. mof2028

- 原址：[https://mof-international.org/mof-conferences/](https://mof-international.org/mof-conferences/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2028-05-28（日期精度）；Conference ends: 2028-05-31（日期精度）；Abstracts: None（日期精度）；Registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://mof-international.org/mof-conferences/) → 200
- 可验证的官方来源/读取入口：[1](https://mof-international.org/mof-conferences/)

### 66. mofschool2027

- 原址：[https://mofs.lakecomoschool.org/](https://mofs.lakecomoschool.org/)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://mofs.lakecomoschool.org/) → 200
- 可验证的官方来源/读取入口：[1](https://mofs.lakecomoschool.org/)

### 67. neurips-2026

- 原址：[https://neurips.cc/Conferences/2026/Dates](https://neurips.cc/Conferences/2026/Dates)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Main papers: 2026-05-06（日期精度）；Early registration: 2026-10-30（日期精度）；Paris satellite starts: 2026-12-09（日期精度）；Atlanta satellite starts: 2026-12-09（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://neurips.cc/Conferences/2026/Dates) → 200
- 可验证的官方来源/读取入口：[1](https://neurips.cc/Conferences/2026/Dates)

### 68. neurips-2026

- 原址：[https://nips.cc/Conferences/2026](https://nips.cc/Conferences/2026)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：首页现为 2026-11-01 11 am PST 启用 Sydney/Atlanta 候补；更新昨日 Oct30/PDT 说明。不外推到 Paris，不生成截止节点。；稳定自动恢复：否。
- 未解决的具体原因/边界：首页现为 2026-11-01 11 am PST 启用 Sydney/Atlanta 候补；更新昨日 Oct30/PDT 说明。不外推到 Paris，不生成截止节点。 其余未列出的字段及监测状态仍保留。
- 关联字段（保留已有事实）：Conference starts: 2026-12-06（日期精度）；Conference ends: 2026-12-13（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://nips.cc/Conferences/2026) → 200
- 可验证的官方来源/读取入口：[1](https://nips.cc/Conferences/2026)

### 69. neurips-2026

- 原址：[https://nips.cc/Conferences/2026/Committees](https://nips.cc/Conferences/2026/Committees)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://nips.cc/Conferences/2026/Committees) → 200
- 可验证的官方来源/读取入口：[1](https://nips.cc/Conferences/2026/Committees)

### 70. defects2027

- 原址：[https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a](https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a) → 200
- 可验证的官方来源/读取入口：[1](https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a)

### 71. pbast10

- 原址：[https://pbast10.org/](https://pbast10.org/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-05-31（日期精度）；Conference ends: 2027-06-03（日期精度）；Oral and poster abstracts: 2026-11-30（日期精度）；Early registration: 2027-03-31（日期精度）；Final registration: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：Yonsei University Department of Chemical and Biomolecular Engineering, BK21FOUR Educational Research Group, Korean Institute of Chemical Engineers (KIChE), Division of Separation Technology
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://pbast10.org/) → 200
- 可验证的官方来源/读取入口：[1](https://pbast10.org/)

### 72. defects2027, automating-atomistic-machine-learning, theoretical-spectroscopy-lectures

- 原址：[https://psi-k.net/workshops/](https://psi-k.net/workshops/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.; Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.; Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 3 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://psi-k.net/workshops/) → 200
- 可验证的官方来源/读取入口：[1](https://psi-k.net/workshops/)

### 73. modelling-water-across-scales

- 原址：[https://register1.icts.res.in/mwas](https://register1.icts.res.in/mwas)
- 原失败/待复核原因：<urlopen error timed out>
- 最终状态：alternative；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：<urlopen error timed out>；替代入口只覆盖各自明确发布的字段，原页专有内容尚未完整核实。 历史未解原因：<urlopen error timed out>；可用其他官方入口只覆盖其明确发布的字段，不能证明原页专有内容已核实。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://register1.icts.res.in/mwas) → <urlopen error timed out>；[bounded curl HTTP/1.1 retry](https://register1.icts.res.in/mwas) → 000；[official alternative / cache index; an index response is not a cached snapshot](https://www.icts.res.in/program/mwas) → 200
- 可验证的官方来源/读取入口：[1](https://www.icts.res.in/program/mwas)

### 74. the-future-of-porous-frameworks

- 原址：[https://registration.telluridescience.org/workshops/the-future-of-porous-frameworks](https://registration.telluridescience.org/workshops/the-future-of-porous-frameworks)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-06-07（日期精度）；Workshop ends: 2027-06-11（日期精度）；Invitation / organiser approval: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://registration.telluridescience.org/workshops/the-future-of-porous-frameworks) → 200
- 可验证的官方来源/读取入口：[1](https://registration.telluridescience.org/workshops/the-future-of-porous-frameworks)

### 75. rsc-first-2026-ai-in-chemistry

- 原址：[https://rscfirst.org.cn/](https://rscfirst.org.cn/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://rscfirst.org.cn/) → 200
- 可验证的官方来源/读取入口：[1](https://rscfirst.org.cn/)

### 76. sapem-2026-8th-symposium-on-the-acoustics-of-poro-elastic-materials

- 原址：[https://sapem2026.matelys.com/](https://sapem2026.matelys.com/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2026-11-16（日期精度）；Workshop ends: 2026-11-20（日期精度）；Abstracts: 2026-05-15（日期精度）；Early registration: 2026-07-15（日期精度）；Registration: 2026-11-13（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://sapem2026.matelys.com/) → 200
- 可验证的官方来源/读取入口：[1](https://sapem2026.matelys.com/)

### 77. ai4mat-neurips-2026

- 原址：[https://sites.google.com/view/ai4mat/home](https://sites.google.com/view/ai4mat/home)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2026-12-12（日期精度）；Workshop ends: 2026-12-12（日期精度）；Travel-grant applications: 2026-10-30（日期精度）；尚未在抓取正文确认姓名/角色/机构：Santiago Miret, Mara Schilling-Wilhelmi, Vijay Narasimhan, N. M. Anoop Krishnan, Stefano Martiniani
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://sites.google.com/view/ai4mat/home) → 200
- 可验证的官方来源/读取入口：[1](https://sites.google.com/view/ai4mat/home)

### 78. ai4mat-neurips-2026

- 原址：[https://sites.google.com/view/ai4mat/schedule](https://sites.google.com/view/ai4mat/schedule)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.; The authoritative AI4Mat schedule sentence is missing or ambiguous.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://sites.google.com/view/ai4mat/schedule) → 200
- 可验证的官方来源/读取入口：[1](https://sites.google.com/view/ai4mat/schedule)

### 79. ai4mat-neurips-2026

- 原址：[https://sites.google.com/view/ai4mat/submissions](https://sites.google.com/view/ai4mat/submissions)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop papers: 2026-08-29（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://sites.google.com/view/ai4mat/submissions) → 200
- 可验证的官方来源/读取入口：[1](https://sites.google.com/view/ai4mat/submissions)

### 80. vii-annual-spain-interpore-meeting

- 原址：[https://spaininterpore.webs.upv.es/vii-annual-meeting-registration-open/](https://spaininterpore.webs.upv.es/vii-annual-meeting-registration-open/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2026-11-17（日期精度）；Conference ends: 2026-11-18（日期精度）；Free registration: 2026-10-31（日期精度）；Optional abstracts: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：Spain InterPore Chapter
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://spaininterpore.webs.upv.es/vii-annual-meeting-registration-open/) → 200
- 可验证的官方来源/读取入口：[1](https://spaininterpore.webs.upv.es/vii-annual-meeting-registration-open/)

### 81. camml2027

- 原址：[https://spring2027.camml.ac.uk/](https://spring2027.camml.ac.uk/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：School starts: 2027-04-05（日期精度）；School ends: 2027-04-09（日期精度）；School applications: 2026-11-26（日期精度）；Application opening: 2026-10-15（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://spring2027.camml.ac.uk/) → 200
- 可验证的官方来源/读取入口：[1](https://spring2027.camml.ac.uk/)

### 82. camml2027

- 原址：[https://spring2027.camml.ac.uk/registration/](https://spring2027.camml.ac.uk/registration/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://spring2027.camml.ac.uk/registration/) → 200
- 可验证的官方来源/读取入口：[1](https://spring2027.camml.ac.uk/registration/)

### 83. 45th-rsc-solid-state-chemistry-group-christmas-meeting-sscg2026

- 原址：[https://sscg.uk/2026-sscg-christmas-meeting](https://sscg.uk/2026-sscg-christmas-meeting)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2026-12-15（日期精度）；Conference ends: 2026-12-17（日期精度）；Oral and poster abstracts: 2026-10-30（日期精度）；Registration: 2026-11-25（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://sscg.uk/2026-sscg-christmas-meeting) → 200
- 可验证的官方来源/读取入口：[1](https://sscg.uk/2026-sscg-christmas-meeting)

### 84. tyc20-celebration-of-the-thomas-young-centre-at-20

- 原址：[https://thomasyoungcentre.org/event/tyc20-celebration-of-the-thomas-young-centre-at-20/](https://thomasyoungcentre.org/event/tyc20-celebration-of-the-thomas-young-centre-at-20/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2026-12-14（日期精度）；Workshop ends: 2026-12-15（日期精度）；Registration: 2026-11-01（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://thomasyoungcentre.org/event/tyc20-celebration-of-the-thomas-young-centre-at-20/) → 200
- 可验证的官方来源/读取入口：[1](https://thomasyoungcentre.org/event/tyc20-celebration-of-the-thomas-young-centre-at-20/)

### 85. pmea2028-porous-materials-for-environmental-applications

- 原址：[https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf](https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf)
- 原失败/待复核原因：<urlopen error timed out>
- 最终状态：manual；内容核实范围：原址有界重试仍超时；官方 PDF 的网页阅读缓存可读，封面确认 2026-03-15 至 19、UPJŠ/University of Ostrava/Slovak Chemical Society。仅历史 2026 文献，不外推到未来会议或全部人员。；稳定自动恢复：否。
- 未解决的具体原因/边界：原址有界重试仍超时；官方 PDF 的网页阅读缓存可读，封面确认 2026-03-15 至 19、UPJŠ/University of Ostrava/Slovak Chemical Society。仅历史 2026 文献，不外推到未来会议或全部人员。 其余未列出的字段及监测状态仍保留。
- 关联字段（保留已有事实）：Activity starts: None（日期精度）；Abstracts: None（日期精度）；Registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf) → <urlopen error timed out>；[bounded curl HTTP/1.1 retry](https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf) → 000；[official web reader / cached official PDF](https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf) → True
- 可验证的官方来源/读取入口：[1](https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf)

### 86. mm27-molecular-modelling-2027

- 原址：[https://uon-comp-chem.github.io/mm2027/](https://uon-comp-chem.github.io/mm2027/)
- 原失败/待复核原因：Official source returned no readable page content.
- 最终状态：alternative；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：Official source returned no readable page content.；替代入口只覆盖各自明确发布的字段，原页专有内容尚未完整核实。 历史未解原因：摘要、注册、节目仍为 Details Coming Soon，不填造日期；源文件由哈希监测，尚不支持自动抽取事实。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://uon-comp-chem.github.io/mm2027/) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://uon-comp-chem.github.io/mm2027/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://raw.githubusercontent.com/UON-comp-chem/mm2027/main/src/App.jsx) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://github.com/UON-comp-chem/mm2027/blob/main/src/App.jsx) → 200
- 可验证的官方来源/读取入口：[1](https://raw.githubusercontent.com/UON-comp-chem/mm2027/main/src/App.jsx)、[2](https://github.com/UON-comp-chem/mm2027/blob/main/src/App.jsx)

### 87. 历史来源

- 原址：[https://virtual.aistats.org/](https://virtual.aistats.org/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：首页明确 workshop 提案延期一周至 11 月 6 日；11 月 2 日更新的正式 call 明确 22:59 CET。；稳定自动恢复：否。
- 未解决的具体原因/边界：首页明确 workshop 提案延期一周至 11 月 6 日；11 月 2 日更新的正式 call 明确 22:59 CET。 其余未列出的字段及监测状态仍保留。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://virtual.aistats.org/) → 200
- 可验证的官方来源/读取入口：[1](https://virtual.aistats.org/)

### 88. watoc-2028-14th-triennial-congress

- 原址：[https://watoc2028.org/](https://watoc2028.org/)
- 原失败/待复核原因：Official source returned no readable page content.
- 最终状态：alternative；内容核实范围：WATOC 学会 congress 页面再次确认 Mérida 2028-01-09 至 14、Young WATOC 01-08，以及 Gabriel Merino、Annia Galano 为组织者。原会议入口仍无可解析正文。；稳定自动恢复：否。
- 未解决的具体原因/边界：WATOC 学会 congress 页面再次确认 Mérida 2028-01-09 至 14、Young WATOC 01-08，以及 Gabriel Merino、Annia Galano 为组织者。原会议入口仍无可解析正文。 其余未列出的字段及监测状态仍保留。
- 关联字段（保留已有事实）：Conference starts: 2028-01-09（日期精度）；Conference ends: 2028-01-14（日期精度）；Abstracts: None（日期精度）；Registration: None（日期精度）；Young WATOC: 2028-01-08（日期精度）；尚未在抓取正文确认姓名/角色/机构：Gabriel Merino
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://watoc2028.org/) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://watoc2028.org/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.watoc.net/watoc.congress.html) → 200
- 可验证的官方来源/读取入口：[1](https://www.watoc.net/watoc.congress.html)

### 89. feza2029-11th-conference-of-the-federation-of-european-zeolite-associations

- 原址：[https://web.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc](https://web.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc)
- 原失败/待复核原因：<urlopen error [Errno -2] Name or service not known>
- 最终状态：alternative；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：<urlopen error [Errno 8] nodename nor servname provided, or not known>；替代入口只覆盖各自明确发布的字段，原页专有内容尚未完整核实。 历史未解原因：<urlopen error [Errno 8] nodename nor servname provided, or not known>；本次未获得覆盖全部受影响字段的可读取官方替代内容。
- 关联字段（保留已有事实）：Activity starts: None（日期精度）；Abstracts: None（日期精度）；Registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://web.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc) → <urlopen error [Errno 8] nodename nor servname provided, or not known>；[bounded curl HTTP/1.1 retry](https://web.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc) → 000；[official alternative / cache index; an index response is not a cached snapshot](https://cqe.tecnico.ulisboa.pt/cqe-researchers-organize-the-xiii-encmp-and-iv-rgc/) → 200
- 可验证的官方来源/读取入口：[1](https://cqe.tecnico.ulisboa.pt/cqe-researchers-organize-the-xiii-encmp-and-iv-rgc/)

### 90. wmt-2026-when-materials-think

- 原址：[https://wmt2026workshop.github.io/](https://wmt2026workshop.github.io/)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2026-12-01（日期精度）；Workshop ends: 2026-12-01（日期精度）；Challenge paper submission: 2026-10-15（日期精度）；Author notification: 2026-10-26（日期精度）；Camera-ready: 2026-11-09（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://wmt2026workshop.github.io/) → 200
- 可验证的官方来源/读取入口：[1](https://wmt2026workshop.github.io/)

### 91. chemai-2026

- 原址：[https://www.acnetwork.nl/chemai](https://www.acnetwork.nl/chemai)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2026-11-12（日期精度）；Conference ends: 2026-11-13（日期精度）；Poster participation: None（日期精度）；Registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.acnetwork.nl/chemai) → 200
- 可验证的官方来源/读取入口：[1](https://www.acnetwork.nl/chemai)

### 92. ai4am-2027-ai-for-advanced-materials

- 原址：[https://www.ai4am.net/2027/deadlines.php](https://www.ai4am.net/2027/deadlines.php)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.ai4am.net/2027/deadlines.php) → 200
- 可验证的官方来源/读取入口：[1](https://www.ai4am.net/2027/deadlines.php)

### 93. 22nd-international-zeolite-conference-izc22

- 原址：[https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization)
- 原失败/待复核原因：HTTP Error 403: Forbidden
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：未找到能直接下载且覆盖原页组织信息的官方镜像、PDF 或 RSS；现有自动抓取仍 403。
- 关联字段（保留已有事实）：Conference starts: 2028-07-23（日期精度）；Conference ends: 2028-07-28（日期精度）；Abstracts: None（日期精度）；Early registration: None（日期精度）；Registration: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：American Institute of Chemical Engineers (AIChE)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.aiche.org%2Fconferences%2Finternational-zeolite-conference%2F2028%2Fabout-conference-organization&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization)

### 94. 22nd-international-zeolite-conference-izc22

- 原址：[https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee)
- 原失败/待复核原因：HTTP Error 403: Forbidden
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：未找到覆盖完整委员会名单的可下载官方镜像/PDF/RSS；现有自动抓取仍 403。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.aiche.org%2Fconferences%2Finternational-zeolite-conference%2F2028%2Fprogram-committee&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee)

### 95. ai-2026-sgai-international-conference-on-artificial-intelligence

- 原址：[https://www.bcs-sgai.org/ai2026/](https://www.bcs-sgai.org/ai2026/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2026-12-15（日期精度）；Conference ends: 2026-12-17（日期精度）；Main conference papers: 2026-06-26（日期精度）；Attendance registration: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：British Computer Society Specialist Group on Artificial Intelligence (BCS SGAI)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.bcs-sgai.org/ai2026/) → 200
- 可验证的官方来源/读取入口：[1](https://www.bcs-sgai.org/ai2026/)

### 96. ai-2026-sgai-international-conference-on-artificial-intelligence

- 原址：[https://www.bcs-sgai.org/ai2026/?section=registration](https://www.bcs-sgai.org/ai2026/?section=registration)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.bcs-sgai.org/ai2026/?section=registration) → 200
- 可验证的官方来源/读取入口：[1](https://www.bcs-sgai.org/ai2026/?section=registration)

### 97. fomms2027

- 原址：[https://www.cache.org/fomms-2027-abstract-submissions-are-now-open](https://www.cache.org/fomms-2027-abstract-submissions-are-now-open)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Final abstracts, rolling review: 2027-03-31（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.cache.org/fomms-2027-abstract-submissions-are-now-open) → 200
- 可验证的官方来源/读取入口：[1](https://www.cache.org/fomms-2027-abstract-submissions-are-now-open)

### 98. world-conference-on-carbon-2028

- 原址：[https://www.carbon2028.org/](https://www.carbon2028.org/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2028-07-09（日期精度）；Conference ends: 2028-07-14（日期精度）；Abstracts: None（日期精度）；Early registration: None（日期精度）；Registration: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：Portuguese Carbon Group, Portuguese Chemical Society (SPQ)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.carbon2028.org/) → 200
- 可验证的官方来源/读取入口：[1](https://www.carbon2028.org/)

### 99. aric-advanced-adsorption-course-kinetic-measurements-using-macroscopic-techniques

- 原址：[https://www.carboncapture.eng.ed.ac.uk/ARIC_Course](https://www.carboncapture.eng.ed.ac.uk/ARIC_Course)
- 原失败/待复核原因：<urlopen error timed out>
- 最终状态：alternative；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：<urlopen error timed out>；替代入口只覆盖各自明确发布的字段，原页专有内容尚未完整核实。 历史未解原因：旧表的 Tuesday 17th/Wednesday 18th/Thursday 19th 与 2026 年星期相符，结合报名页判为旧表未同步（推断）；不把旧日程钟点迁到 2027 年。
- 关联字段（保留已有事实）：Early registration: 2027-01-08（日期精度）；尚未在抓取正文确认姓名/角色/机构：University of Edinburgh Adsorption Group, Stefano Brandani, Enzo Mangano, Peter Ravikovitch
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.carboncapture.eng.ed.ac.uk/ARIC_Course) → <urlopen error timed out>；[bounded curl HTTP/1.1 retry](https://www.carboncapture.eng.ed.ac.uk/ARIC_Course) → 000；[official alternative / cache index; an index response is not a cached snapshot](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027) → 200
- 可验证的官方来源/读取入口：[1](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027)

### 100. automating-atomistic-machine-learning, cecam-mlthermo2027, computational-electrochemistry-in-the-era-of-ai

- 原址：[https://www.cecam.org/program?location=all&month=all&page=0&type=flagship_workshop](https://www.cecam.org/program?location=all&month=all&page=0&type=flagship_workshop)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.; Official content changed; recognised fields may be updated, but the remaining content requires review.; Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 3 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-01-11（日期精度）；Workshop ends: 2027-01-14（日期精度）；Abstract deadline: None（日期精度）；Registration: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：Sheng Bi, Jun Cheng, Jure Dobnikar, Mathieu Salanne
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.cecam.org/program?location=all&month=all&page=0&type=flagship_workshop) → 200
- 可验证的官方来源/读取入口：[1](https://www.cecam.org/program?location=all&month=all&page=0&type=flagship_workshop)

### 101. theoretical-spectroscopy-lectures, selfassembly2027, challenges-in-ionic-fluids-theory-simulation-and-experiment, 2nd-quantum-transport-methods-and-algorithms-meeting-from-particles-to-waves-approaches, mathematics-for-quantum-dynamics

- 原址：[https://www.cecam.org/program?location=all&month=all&page=2&type=all](https://www.cecam.org/program?location=all&month=all&page=2&type=all)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.; Official content changed; recognised fields may be updated, but the remaining content requires review.; Official content changed; recognised fields may be updated, but the remaining content requires review.; Official content changed; recognised fields may be updated, but the remaining content requires review.; Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 5 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-03-22（日期精度）；Workshop ends: 2027-03-25（日期精度）；Abstract deadline: None（日期精度）；Registration: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：Stephen Cox, Susan Perkin, Benjamin Rotenberg
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.cecam.org/program?location=all&month=all&page=2&type=all) → 200
- 可验证的官方来源/读取入口：[1](https://www.cecam.org/program?location=all&month=all&page=2&type=all)

### 102. theory-and-simulation-of-biomolecular-phase-separation-and-aggregation

- 原址：[https://www.cecam.org/workshop-details/1272](https://www.cecam.org/workshop-details/1272)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-01-11（日期精度）；Workshop ends: 2027-01-14（日期精度）；Registration: 2026-11-15（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.cecam.org/workshop-details/1272) → 200
- 可验证的官方来源/读取入口：[1](https://www.cecam.org/workshop-details/1272)

### 103. cecam-mlthermo2027

- 原址：[https://www.cecam.org/workshop-details/1480](https://www.cecam.org/workshop-details/1480)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-03-01（日期精度）；Workshop ends: 2027-03-03（日期精度）；Registration: 2026-12-15（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.cecam.org/workshop-details/1480) → 200
- 可验证的官方来源/读取入口：[1](https://www.cecam.org/workshop-details/1480)

### 104. 2nd-quantum-transport-methods-and-algorithms-meeting-from-particles-to-waves-approaches

- 原址：[https://www.cecam.org/workshop-details/2nd-quantum-transport-methods-and-algorithms-meeting-from-particles-to-waves-approaches-1490](https://www.cecam.org/workshop-details/2nd-quantum-transport-methods-and-algorithms-meeting-from-particles-to-waves-approaches-1490)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-07-06（日期精度）；Workshop ends: 2027-07-08（日期精度）；Registration: 2027-06-01（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.cecam.org/workshop-details/2nd-quantum-transport-methods-and-algorithms-meeting-from-particles-to-waves-approaches-1490) → 200
- 可验证的官方来源/读取入口：[1](https://www.cecam.org/workshop-details/2nd-quantum-transport-methods-and-algorithms-meeting-from-particles-to-waves-approaches-1490)

### 105. automating-atomistic-machine-learning

- 原址：[https://www.cecam.org/workshop-details/automating-atomistic-machine-learning-1494](https://www.cecam.org/workshop-details/automating-atomistic-machine-learning-1494)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-01-25（日期精度）；Workshop ends: 2027-01-27（日期精度）；Applications: 2026-10-16（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.cecam.org/workshop-details/automating-atomistic-machine-learning-1494) → 200
- 可验证的官方来源/读取入口：[1](https://www.cecam.org/workshop-details/automating-atomistic-machine-learning-1494)

### 106. mathematics-for-quantum-dynamics

- 原址：[https://www.cecam.org/workshop-details/mathematics-for-quantum-dynamics-1486](https://www.cecam.org/workshop-details/mathematics-for-quantum-dynamics-1486)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-11-23（日期精度）；Workshop ends: 2027-11-25（日期精度）；Registration opens: 2027-04-01（日期精度）；Final registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.cecam.org/workshop-details/mathematics-for-quantum-dynamics-1486) → 200
- 可验证的官方来源/读取入口：[1](https://www.cecam.org/workshop-details/mathematics-for-quantum-dynamics-1486)

### 107. new-frontiers-in-nonequilibrium-statistical-physics-of-glasses

- 原址：[https://www.cecam.org/workshop-details/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-1497](https://www.cecam.org/workshop-details/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-1497)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.cecam.org/workshop-details/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-1497) → 200
- 可验证的官方来源/读取入口：[1](https://www.cecam.org/workshop-details/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-1497)

### 108. selfassembly2027

- 原址：[https://www.cecam.org/workshop-details/self-assembly-of-materials-merging-direct-experiments-with-simulations-at-different-resolutions-and-data-science-techniques-1522](https://www.cecam.org/workshop-details/self-assembly-of-materials-merging-direct-experiments-with-simulations-at-different-resolutions-and-data-science-techniques-1522)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-03-10（日期精度）；Workshop ends: 2027-03-12（日期精度）；Contributed-talk abstracts: 2026-12-04（日期精度）；Registration: 2027-02-05（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.cecam.org/workshop-details/self-assembly-of-materials-merging-direct-experiments-with-simulations-at-different-resolutions-and-data-science-techniques-1522) → 200
- 可验证的官方来源/读取入口：[1](https://www.cecam.org/workshop-details/self-assembly-of-materials-merging-direct-experiments-with-simulations-at-different-resolutions-and-data-science-techniques-1522)

### 109. theoretical-spectroscopy-lectures

- 原址：[https://www.cecam.org/workshop-details/theoretical-spectroscopy-lectures-1482](https://www.cecam.org/workshop-details/theoretical-spectroscopy-lectures-1482)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：School starts: 2027-03-08（日期精度）；School ends: 2027-03-12（日期精度）；School registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.cecam.org/workshop-details/theoretical-spectroscopy-lectures-1482) → 200
- 可验证的官方来源/读取入口：[1](https://www.cecam.org/workshop-details/theoretical-spectroscopy-lectures-1482)

### 110. joint-kist-chalmers-symposium-understanding-and-developing-porous-framework-systems

- 原址：[https://www.chalmers.se/en/current/calendar/joint-kist-chalmers-symposium-understanding-and-developing-porous-framework-systems-function-synthesis-characterization-and-modeling/](https://www.chalmers.se/en/current/calendar/joint-kist-chalmers-symposium-understanding-and-developing-porous-framework-systems-function-synthesis-characterization-and-modeling/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2026-11-02（日期精度）；Workshop ends: 2026-11-03（日期精度）；Registration: 2026-10-23（日期精度）；尚未在抓取正文确认姓名/角色/机构：Chalmers Department of Chemistry and Chemical Engineering, Chalmers Department of Microtechnology and Nanoscience
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.chalmers.se/en/current/calendar/joint-kist-chalmers-symposium-understanding-and-developing-porous-framework-systems-function-synthesis-characterization-and-modeling/) → 200
- 可验证的官方来源/读取入口：[1](https://www.chalmers.se/en/current/calendar/joint-kist-chalmers-symposium-understanding-and-developing-porous-framework-systems-function-synthesis-characterization-and-modeling/)

### 111. dpg-school2027

- 原址：[https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools](https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.dpg-physik.de%2Faktivitaeten-und-programme%2Fprogramme%2Fbad-honnef-physics-schools&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → <urlopen error [Errno 61] Connection refused>
- 可验证的官方来源/读取入口：[1](https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools)

### 112. dpg-school2027

- 原址：[https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.dpg-physik.de%2Fveranstaltungen%2F2027%2Fmachine_learning_for_atomistic_simulations_of_materials&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → <urlopen error [Errno 61] Connection refused>
- 可验证的官方来源/读取入口：[1](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials)

### 113. dpg-school2027

- 原址：[https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：School starts: 2027-04-02（日期精度）；School ends: 2027-04-07（日期精度）；School applications: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.dpg-physik.de%2Fveranstaltungen%2F2027%2Fmachine_learning_for_atomistic_simulations_of_materials%3Fset_language%3Den&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → <urlopen error [Errno 61] Connection refused>
- 可验证的官方来源/读取入口：[1](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en)

### 114. eazc2027

- 原址：[https://www.eazc2027.com/](https://www.eazc2027.com/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：浏览器本次确认：会议主日程 2027-01-18 至 20，报到 01-17；常规摘要延期 2026-08-31、Recent Reports 11-30、注册 12-31；五个现有主办机构均仍列出。与已有事实相符。；稳定自动恢复：否。
- 未解决的具体原因/边界：浏览器本次确认：会议主日程 2027-01-18 至 20，报到 01-17；常规摘要延期 2026-08-31、Recent Reports 11-30、注册 12-31；五个现有主办机构均仍列出。与已有事实相符。 其余未列出的字段及监测状态仍保留。
- 关联字段（保留已有事实）：Conference starts: 2027-01-18（日期精度）；Conference ends: 2027-01-20（日期精度）；Extended regular abstracts: 2026-08-31（日期精度）；Recent Reports: 2026-11-30（日期精度）；Early registration: 2026-10-15（日期精度）；Registration: 2026-12-31（日期精度）；Arrival / registration day: 2027-01-17（日期精度）；尚未在抓取正文确认姓名/角色/机构：Chinese Zeolite Association, Dalian Institute of Chemical Physics, Fuzhou University, Jilin University, Laboratoire de Catalyse et Spectrochimie
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.eazc2027.com/) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://www.eazc2027.com/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.eazc2027.com/index/page.html?id=1844) → Official source returned no readable page content.；[official alternative / cache index; an index response is not a cached snapshot](https://www.eazc2027.com/index/page.html?id=1835) → Official source returned no readable page content.；[official alternative / cache index; an index response is not a cached snapshot](https://www.eazc2027.com/index/page.html?id=1843) → Official source returned no readable page content.；[rendered browser](https://www.eazc2027.com/) → True
- 可验证的官方来源/读取入口：[1](https://www.eazc2027.com/)

### 115. eazc2027

- 原址：[https://www.eazc2027.com/index/page.html?id=1835](https://www.eazc2027.com/index/page.html?id=1835)
- 原失败/待复核原因：Official source returned no readable page content.
- 最终状态：manual；内容核实范围：浏览器确认已收录的 Zhongmin Liu、Valentin Valtchev、Jihong Yu、Xiaojun Bao、Peng Tian 的角色和机构均未变。页面专有委员会事实已核实。；稳定自动恢复：否。
- 未解决的具体原因/边界：浏览器确认已收录的 Zhongmin Liu、Valentin Valtchev、Jihong Yu、Xiaojun Bao、Peng Tian 的角色和机构均未变。页面专有委员会事实已核实。 其余未列出的字段及监测状态仍保留。
- 关联字段（保留已有事实）：尚未在抓取正文确认姓名/角色/机构：Zhongmin Liu, Valentin Valtchev, Jihong Yu, Xiaojun Bao, Peng Tian
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.eazc2027.com/index/page.html?id=1835) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://www.eazc2027.com/index/page.html?id=1835) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.eazc2027.com/) → Official source returned no readable page content.；[official alternative / cache index; an index response is not a cached snapshot](https://www.eazc2027.com/index/page.html?id=1844) → Official source returned no readable page content.；[official alternative / cache index; an index response is not a cached snapshot](https://www.eazc2027.com/index/page.html?id=1843) → Official source returned no readable page content.；[rendered browser](https://www.eazc2027.com/index/page.html?id=1835) → True
- 可验证的官方来源/读取入口：[1](https://www.eazc2027.com/index/page.html?id=1835)

### 116. eazc2027

- 原址：[https://www.eazc2027.com/index/page.html?id=1843](https://www.eazc2027.com/index/page.html?id=1843)
- 原失败/待复核原因：Official source returned no readable page content.
- 最终状态：manual；内容核实范围：浏览器确认已收录的四位 plenary 和 Suk Bong Hong 特别讲者姓名、角色、机构均未变；保留 selected-list 范围，不把其他既有公开讲者误报为新增。；稳定自动恢复：否。
- 未解决的具体原因/边界：浏览器确认已收录的四位 plenary 和 Suk Bong Hong 特别讲者姓名、角色、机构均未变；保留 selected-list 范围，不把其他既有公开讲者误报为新增。 其余未列出的字段及监测状态仍保留。
- 关联字段（保留已有事实）：尚未在抓取正文确认姓名/角色/机构：Svetlana Mintova, Jeroen A. van Bokhoven, Toshiyuki Yokoi, Manuel Moliner, Suk Bong Hong
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.eazc2027.com/index/page.html?id=1843) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://www.eazc2027.com/index/page.html?id=1843) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.eazc2027.com/) → Official source returned no readable page content.；[official alternative / cache index; an index response is not a cached snapshot](https://www.eazc2027.com/index/page.html?id=1844) → Official source returned no readable page content.；[official alternative / cache index; an index response is not a cached snapshot](https://www.eazc2027.com/index/page.html?id=1835) → Official source returned no readable page content.；[rendered browser](https://www.eazc2027.com/index/page.html?id=1843) → True
- 可验证的官方来源/读取入口：[1](https://www.eazc2027.com/index/page.html?id=1843)

### 117. eazc2027

- 原址：[https://www.eazc2027.com/index/page.html?id=1844](https://www.eazc2027.com/index/page.html?id=1844)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：浏览器确认主文仍写旧 2026-07-31，侧栏明确 Extended deadline 2026-08-31；延期期限优先。Recent Reports 11-30、注册 12-31 不变。；稳定自动恢复：否。
- 未解决的具体原因/边界：浏览器确认主文仍写旧 2026-07-31，侧栏明确 Extended deadline 2026-08-31；延期期限优先。Recent Reports 11-30、注册 12-31 不变。 其余未列出的字段及监测状态仍保留。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.eazc2027.com/index/page.html?id=1844) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://www.eazc2027.com/index/page.html?id=1844) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.eazc2027.com/) → Official source returned no readable page content.；[official alternative / cache index; an index response is not a cached snapshot](https://www.eazc2027.com/index/page.html?id=1835) → Official source returned no readable page content.；[official alternative / cache index; an index response is not a cached snapshot](https://www.eazc2027.com/index/page.html?id=1843) → Official source returned no readable page content.；[rendered browser](https://www.eazc2027.com/index/page.html?id=1844) → True
- 可验证的官方来源/读取入口：[1](https://www.eazc2027.com/index/page.html?id=1844)

### 118. materials-today-conference-2027

- 原址：[https://www.elsevier.com/en-gb/events/conferences/all/materials-today-conference/committee-and-speakers](https://www.elsevier.com/en-gb/events/conferences/all/materials-today-conference/committee-and-speakers)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：尚未在抓取正文确认姓名/角色/机构：Cho Nam-Joon
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.elsevier.com/en-gb/events/conferences/all/materials-today-conference/committee-and-speakers) → 200
- 可验证的官方来源/读取入口：[1](https://www.elsevier.com/en-gb/events/conferences/all/materials-today-conference/committee-and-speakers)

### 119. materials-today-conference-2027

- 原址：[https://www.elsevier.com/en-in/events/conferences/all/materials-today-conference/committee-and-speakers](https://www.elsevier.com/en-in/events/conferences/all/materials-today-conference/committee-and-speakers)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.elsevier.com/en-in/events/conferences/all/materials-today-conference/committee-and-speakers) → 200
- 可验证的官方来源/读取入口：[1](https://www.elsevier.com/en-in/events/conferences/all/materials-today-conference/committee-and-speakers)

### 120. materials-today-conference-2027

- 原址：[https://www.elsevier.com/events/conferences/all/materials-today-conference](https://www.elsevier.com/events/conferences/all/materials-today-conference)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-07-18（日期精度）；Conference ends: 2027-07-22（日期精度）；Abstracts: 2027-02-05（日期精度）；Early registration: 2027-04-16（日期精度）；Author registration: 2027-04-16（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.elsevier.com/events/conferences/all/materials-today-conference) → 200
- 可验证的官方来源/读取入口：[1](https://www.elsevier.com/events/conferences/all/materials-today-conference)

### 121. aric-advanced-adsorption-course-kinetic-measurements-using-macroscopic-techniques

- 原址：[https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：School starts: 2027-02-16（日期精度）；School ends: 2027-02-18（日期精度）；Last booking date: 2027-02-12（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027) → 200
- 可验证的官方来源/读取入口：[1](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027)

### 122. esat-2027-35th-european-symposium-on-applied-thermodynamics

- 原址：[https://www.esat2027.com/](https://www.esat2027.com/)
- 原失败/待复核原因：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: Hostname mismatch, certificate is not valid for 'www.esat2027.com'. (_ssl.c:1129)>
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：本地 urllib 与 curl 均因 TLS 主机名证书不匹配失败；去 www 的官方入口同样失败。今日 GitHub 定时抓取成功，故保留其 checked 状态；不绕过证书校验。官网首页可由网页阅读器核实原有日期；委员会/讲者页本次仍未确认。
- 关联字段（保留已有事实）：Workshop starts: 2027-05-09（日期精度）；Workshop ends: 2027-05-12（日期精度）；Oral abstracts: 2026-11-15（日期精度）；Late posters: 2027-03-31（日期精度）；Registration: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：UL Propuls
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.esat2027.com/) → <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: Hostname mismatch, certificate is not valid for 'www.esat2027.com'. (_ssl.c:1129)>；[bounded curl HTTP/1.1 retry](https://www.esat2027.com/) → 000；[official alternative / cache index; an index response is not a cached snapshot](https://www.esat2027.com/committees/) → <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: Hostname mismatch, certificate is not valid for 'www.esat2027.com'. (_ssl.c:1129)>；[official alternative / cache index; an index response is not a cached snapshot](https://www.esat2027.com/speakers/) → <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: Hostname mismatch, certificate is not valid for 'www.esat2027.com'. (_ssl.c:1129)>
- 可验证的官方来源/读取入口：本次未取得可核实正文；原址保留供复查。

### 123. esat-2027-35th-european-symposium-on-applied-thermodynamics

- 原址：[https://www.esat2027.com/committees/](https://www.esat2027.com/committees/)
- 原失败/待复核原因：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: Hostname mismatch, certificate is not valid for 'www.esat2027.com'. (_ssl.c:1129)>
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：本地 urllib 与 curl 均因 TLS 主机名证书不匹配失败；去 www 的官方入口同样失败。今日 GitHub 定时抓取成功，故保留其 checked 状态；不绕过证书校验。官网首页可由网页阅读器核实原有日期；委员会/讲者页本次仍未确认。
- 关联字段（保留已有事实）：尚未在抓取正文确认姓名/角色/机构：Jean-Noël Jaubert, Romain Privat, Andrés-Felipe Cañón Molano, Lucie Coniglio, Clément Panarioux, Haziq Ridwan Bin Asmuni, Eugénia A. Macedo, Sabine Enders, Jean-Noël Jaubert, Maria Grazia de Angelis, Georgios M. Kontogeorgis
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.esat2027.com/committees/) → <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: Hostname mismatch, certificate is not valid for 'www.esat2027.com'. (_ssl.c:1129)>；[bounded curl HTTP/1.1 retry](https://www.esat2027.com/committees/) → 000；[official alternative / cache index; an index response is not a cached snapshot](https://esat2027.com/committees/) → <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: Hostname mismatch, certificate is not valid for 'esat2027.com'. (_ssl.c:1129)>
- 可验证的官方来源/读取入口：本次未取得可核实正文；原址保留供复查。

### 124. esat-2027-35th-european-symposium-on-applied-thermodynamics

- 原址：[https://www.esat2027.com/speakers/](https://www.esat2027.com/speakers/)
- 原失败/待复核原因：<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: Hostname mismatch, certificate is not valid for 'www.esat2027.com'. (_ssl.c:1129)>
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：本地 urllib 与 curl 均因 TLS 主机名证书不匹配失败；去 www 的官方入口同样失败。今日 GitHub 定时抓取成功，故保留其 checked 状态；不绕过证书校验。官网首页可由网页阅读器核实原有日期；委员会/讲者页本次仍未确认。
- 关联字段（保留已有事实）：尚未在抓取正文确认姓名/角色/机构：Marc Bonnissel, Richard Elliott, Amparo Galindo, Guillaume Galliero, Georgios Kontogeorgis, Monika Thol
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.esat2027.com/speakers/) → <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: Hostname mismatch, certificate is not valid for 'www.esat2027.com'. (_ssl.c:1129)>；[bounded curl HTTP/1.1 retry](https://www.esat2027.com/speakers/) → 000；[official alternative / cache index; an index response is not a cached snapshot](https://esat2027.com/speakers/) → <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: Hostname mismatch, certificate is not valid for 'esat2027.com'. (_ssl.c:1129)>
- 可验证的官方来源/读取入口：本次未取得可核实正文；原址保留供复查。

### 125. new-frontiers-in-nonequilibrium-statistical-physics-of-glasses

- 原址：[https://www.esi.ac.at/events/e610/](https://www.esi.ac.at/events/e610/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2026-11-30（日期精度）；Workshop ends: 2026-12-04（日期精度）；Contributed-talk abstracts: 2026-07-15（日期精度）；Poster abstracts: 2026-07-15（日期精度）；Registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.esi.ac.at/events/e610/) → 200
- 可验证的官方来源/读取入口：[1](https://www.esi.ac.at/events/e610/)

### 126. euchems-compchem-2027

- 原址：[https://www.euchems.eu/divisions/computational-chemistry-2/honours/](https://www.euchems.eu/divisions/computational-chemistry-2/honours/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Activity starts: None（日期精度）；Abstracts: None（日期精度）；Registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.euchems.eu/divisions/computational-chemistry-2/honours/) → 200
- 可验证的官方来源/读取入口：[1](https://www.euchems.eu/divisions/computational-chemistry-2/honours/)

### 127. fems-euromat-2027

- 原址：[https://www.euromat2027.com/](https://www.euromat2027.com/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-09-12（日期精度）；Conference ends: 2027-09-16（日期精度）；Abstracts: 2027-01-31（日期精度）；Registration opening expected in April 2027: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：ASMET — Austrian Society for Metallurgy and Materials, Federation of European Materials Societies (FEMS)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.euromat2027.com/) → 200
- 可验证的官方来源/读取入口：[1](https://www.euromat2027.com/)

### 128. e-mrs-spring-meeting-2027

- 原址：[https://www.european-mrs.com/computations-materials-%E2%80%93-discovery-design-and-role-ai-emrs](https://www.european-mrs.com/computations-materials-%E2%80%93-discovery-design-and-role-ai-emrs)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.european-mrs.com/computations-materials-%E2%80%93-discovery-design-and-role-ai-emrs) → 200
- 可验证的官方来源/读取入口：[1](https://www.european-mrs.com/computations-materials-%E2%80%93-discovery-design-and-role-ai-emrs)

### 129. e-mrs-spring-meeting-2027

- 原址：[https://www.european-mrs.com/materials-properties-finite-temperature-atomic-scale-modelling-methodologies-applications-and-beyond](https://www.european-mrs.com/materials-properties-finite-temperature-atomic-scale-modelling-methodologies-applications-and-beyond)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：核对 Symposium organizers 中 Junjie ZHAO 的机构由 Tohoku University 改为 FunGlass, Alexander Dubček University of Trenčín；其他既有字段保留。；稳定自动恢复：否。
- 未解决的具体原因/边界：核对 Symposium organizers 中 Junjie ZHAO 的机构由 Tohoku University 改为 FunGlass, Alexander Dubček University of Trenčín；其他既有字段保留。 其余未列出的字段及监测状态仍保留。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.european-mrs.com/materials-properties-finite-temperature-atomic-scale-modelling-methodologies-applications-and-beyond) → 200
- 可验证的官方来源/读取入口：[1](https://www.european-mrs.com/materials-properties-finite-temperature-atomic-scale-modelling-methodologies-applications-and-beyond)

### 130. e-mrs-fall-meeting-2027

- 原址：[https://www.european-mrs.com/meetings/2027-fall-meeting-exhibit](https://www.european-mrs.com/meetings/2027-fall-meeting-exhibit)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-09-20（日期精度）；Conference ends: 2027-09-23（日期精度）；Symposium proposals: 2026-10-15（日期精度）；Attendee abstracts: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：Warsaw University of Technology, Faculty of Materials Science & Engineering, Joerg K. N. Lindner
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.european-mrs.com/meetings/2027-fall-meeting-exhibit) → 200
- 可验证的官方来源/读取入口：[1](https://www.european-mrs.com/meetings/2027-fall-meeting-exhibit)

### 131. e-mrs-spring-meeting-2027

- 原址：[https://www.european-mrs.com/meetings/2027-spring-meeting-exhibit](https://www.european-mrs.com/meetings/2027-spring-meeting-exhibit)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-05-17（日期精度）；Conference ends: 2027-05-21（日期精度）；Abstract deadline: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.european-mrs.com/meetings/2027-spring-meeting-exhibit) → 200
- 可验证的官方来源/读取入口：[1](https://www.european-mrs.com/meetings/2027-spring-meeting-exhibit)

### 132. challenges-in-ionic-fluids-theory-simulation-and-experiment

- 原址：[https://www.fluxionic.org/events](https://www.fluxionic.org/events)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.fluxionic.org/events) → 200
- 可验证的官方来源/读取入口：[1](https://www.fluxionic.org/events)

### 133. challenges-in-ionic-fluids-theory-simulation-and-experiment

- 原址：[https://www.fluxionic.org/events/challenges-ionic-fluids-2027](https://www.fluxionic.org/events/challenges-ionic-fluids-2027)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.fluxionic.org/events/challenges-ionic-fluids-2027) → 200
- 可验证的官方来源/读取入口：[1](https://www.fluxionic.org/events/challenges-ionic-fluids-2027)

### 134. foa16

- 原址：[https://www.foa16.com/](https://www.foa16.com/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2028-05-28（日期精度）；Conference ends: 2028-06-02（日期精度）；Final registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.foa16.com/) → 200
- 可验证的官方来源/读取入口：[1](https://www.foa16.com/)

### 135. foa16

- 原址：[https://www.foa16.com/registrations](https://www.foa16.com/registrations)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Provisional abstract deadline: 2027-09-15（日期精度）；Provisional early registration: 2028-01-15（日期精度）；Abstracts and registration expected to open in May 2027: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.foa16.com/registrations) → 200
- 可验证的官方来源/读取入口：[1](https://www.foa16.com/registrations)

### 136. nanoporous-grc2027

- 原址：[https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/](https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-08-01（日期精度）；Conference ends: 2027-08-06（日期精度）；Attendance applications: 2027-07-04（日期精度）；尚未在抓取正文确认姓名/角色/机构：Wei Fan, Omar K. Farha, Randall Q. Snurr, Haiying Chen
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/) → 200
- 可验证的官方来源/读取入口：[1](https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/)

### 137. nanoporous-grs2027

- 原址：[https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/)
- 原失败/待复核原因：HTTP Error 404: Not Found
- 最终状态：alternative；内容核实范围：有年份官网经网页阅读器确认原有日期和申请截止；主席图片未完整核实。；稳定自动恢复：否。
- 未解决的具体原因/边界：无年份旧入口原路径返回 404；有年份官方页面经网页阅读器确认 2027-07-31 至 08-01、口头申请 04-25、参会申请 07-03。该替代页自动路径仍没有正文，主席图片未完全核实。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/) → HTTP Error 404: Not Found；[bounded curl HTTP/1.1 retry](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/) → Official source returned no readable page content.
- 可验证的官方来源/读取入口：[有年份官网](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/)

- 补充尝试：[官方网页阅读器读取有年份入口](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/) → 日期与申请截止已核实，自动路径未恢复。

### 138. nanoporous-grs2027

- 原址：[https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/)
- 原失败/待复核原因：Official source returned no readable page content.
- 最终状态：manual；内容核实范围：官方网页阅读器本次可读；会议 2027-07-31 至 08-01、口头报告申请 04-25、参会申请 07-03 与原有事实相符。主席姓名图片未全文确认；自动路径仍无正文。；稳定自动恢复：否。
- 未解决的具体原因/边界：官方网页阅读器本次可读；会议 2027-07-31 至 08-01、口头报告申请 04-25、参会申请 07-03 与原有事实相符。主席姓名图片未全文确认；自动路径仍无正文。 其余未列出的字段及监测状态仍保留。
- 关联字段（保留已有事实）：Seminar starts: 2027-07-31（日期精度）；Seminar ends: 2027-08-01（日期精度）；Oral-presentation applications / speaker abstracts: 2027-04-25（日期精度）；Attendance applications: 2027-07-03（日期精度）；尚未在抓取正文确认姓名/角色/机构：Gordon Research Conferences, Hafsa Abdul Ghuffar, Haley Wellman
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/) → HTTP Error 404: Not Found；[official web reader / cached official PDF](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/) → True
- 可验证的官方来源/读取入口：[1](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/)

### 139. iclr-2027

- 原址：[https://www.iclr.cc/](https://www.iclr.cc/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-04-26（日期精度）；Conference ends: 2027-04-30（日期精度）；Main abstracts: 2026-09-18（日期精度）；Main papers: 2026-09-25（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.iclr.cc/) → 200
- 可验证的官方来源/读取入口：[1](https://www.iclr.cc/)

### 140. school-on-advanced-structural-analysis-in-mofs-and-cofs

- 原址：[https://www.icmm.csic.es/es/node/37130](https://www.icmm.csic.es/es/node/37130)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：School starts: 2026-11-05（日期精度）；School ends: 2026-11-06（日期精度）；School registration / waiting list: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.icmm.csic.es/es/node/37130) → 200
- 可验证的官方来源/读取入口：[1](https://www.icmm.csic.es/es/node/37130)

### 141. modelling-water-across-scales

- 原址：[https://www.icts.res.in/program/mwas](https://www.icts.res.in/program/mwas)
- 原失败/待复核原因：<urlopen error timed out>
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。
- 关联字段（保留已有事实）：School starts: 2027-03-15（日期精度）；School ends: 2027-03-26（日期精度）；Applications: 2026-11-25（日期精度）；Recommendation letters: 2026-12-09（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.icts.res.in/program/mwas) → 200
- 可验证的官方来源/读取入口：[1](https://www.icts.res.in/program/mwas)

### 142. 17th-international-symposium-on-wettability-and-porous-media-7th-interpore-benelux-meeting-iswpm26

- 原址：[https://www.iswpm26.org/](https://www.iswpm26.org/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2026-11-30（日期精度）；Workshop ends: 2026-12-02（日期精度）；Extended abstract deadline: 2026-08-01（日期精度）；Final registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.iswpm26.org/) → 200
- 可验证的官方来源/读取入口：[1](https://www.iswpm26.org/)

### 143. 17th-international-symposium-on-wettability-and-porous-media-7th-interpore-benelux-meeting-iswpm26

- 原址：[https://www.iswpm26.org/172246/author?version=latest](https://www.iswpm26.org/172246/author?version=latest)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.iswpm26.org/172246/author?version=latest) → 200
- 可验证的官方来源/读取入口：[1](https://www.iswpm26.org/172246/author?version=latest)

### 144. tenth-north-of-england-chemoinformatics-meeting

- 原址：[https://www.leachresearchgroup.net/home/chemoinformatics-conference-2027](https://www.leachresearchgroup.net/home/chemoinformatics-conference-2027)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-06-21（日期精度）；Conference ends: 2027-06-23（日期精度）；Abstract opening, announced for November 2026: None（日期精度）；Abstract deadline: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：Molecular Graphics and Modelling Society (MGMS), Manchester Metropolitan University, Andrew Leach, Val Gillet, Steve Maginn, Iva Lukac, Nathan Brown, Noel O’Boyle, Gian Marco Ghiandoni
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.leachresearchgroup.net/home/chemoinformatics-conference-2027) → 200
- 可验证的官方来源/读取入口：[1](https://www.leachresearchgroup.net/home/chemoinformatics-conference-2027)

### 145. interpore2027

- 原址：[https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj](https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：尚未在抓取正文确认姓名/角色/机构：InterPore – International Society for Porous Media
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj) → 200
- 可验证的官方来源/读取入口：[1](https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj)

### 146. tms2027

- 原址：[https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)
- 原失败/待复核原因：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Extended regular abstract deadline: 2026-07-15（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm) → 200
- 可验证的官方来源/读取入口：[1](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)

### 147. medpore2027

- 原址：[https://www.linkedin.com/posts/youssef-belmabkhout-6a18abb_medpore2023-medpore2025-acercoe-activity-7333905933359632384-31gE](https://www.linkedin.com/posts/youssef-belmabkhout-6a18abb_medpore2023-medpore2025-acercoe-activity-7333905933359632384-31gE)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Activity starts: 2027-05-17（日期精度）；Abstracts: None（日期精度）；Registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.linkedin.com/posts/youssef-belmabkhout-6a18abb_medpore2023-medpore2025-acercoe-activity-7333905933359632384-31gE) → 200
- 可验证的官方来源/读取入口：[1](https://www.linkedin.com/posts/youssef-belmabkhout-6a18abb_medpore2023-medpore2025-acercoe-activity-7333905933359632384-31gE)

### 148. mmm12-12th-international-conference-on-multiscale-materials-modeling

- 原址：[https://www.mmm12.org/](https://www.mmm12.org/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2026-11-08（日期精度）；Conference ends: 2026-11-13（日期精度）；Extended regular registration: 2026-10-28（日期精度）；Poster abstracts: 2026-08-15（日期精度）；Early registration: 2026-09-09（日期精度）；尚未在抓取正文确认姓名/角色/机构：Korean Institute of Metals and Materials (KIM)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.mmm12.org/) → 200
- 可验证的官方来源/读取入口：[1](https://www.mmm12.org/)

### 149. mmm12-12th-international-conference-on-multiscale-materials-modeling

- 原址：[https://www.mmm12.org/symposia/](https://www.mmm12.org/symposia/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.mmm12.org/symposia/) → 200
- 可验证的官方来源/读取入口：[1](https://www.mmm12.org/symposia/)

### 150. mrs-fall2026

- 原址：[https://www.mrs.org/meetings-events/annual-meetings](https://www.mrs.org/meetings-events/annual-meetings)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.mrs.org/meetings-events/annual-meetings) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/meetings-events/annual-meetings) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.mrs.org%2Fmeetings-events%2Fannual-meetings&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → <urlopen error [Errno 61] Connection refused>
- 可验证的官方来源/读取入口：[1](https://www.mrs.org/meetings-events/annual-meetings)

### 151. mrs-fall2026

- 原址：[https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2026-11-29（日期精度）；Conference ends: 2026-12-04（日期精度）；Regular abstracts: 2026-06-17（日期精度）；Breaking News round 2 abstracts: 2026-09-16（日期精度）；Discounted preregistration: 2026-10-29 23:59 America/New_York
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.mrs.org%2Fmeetings-events%2Fannual-meetings%2F2026-mrs-fall-meeting%2Fcall-for-abstracts&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → <urlopen error [Errno 61] Connection refused>
- 可验证的官方来源/读取入口：[1](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts)

### 152. mrs-fall2026

- 原址：[https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs)
- 原失败/待复核原因：HTTP Error 403: Forbidden
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：尚未在抓取正文确认姓名/角色/机构：Materials Research Society (MRS)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.mrs.org%2Fmeetings-events%2Fannual-meetings%2F2026-mrs-fall-meeting%2Fmeeting-chairs&output=json&filter=statuscode%3A200&from=2026&collapse=timestamp%3A6) → <urlopen error [Errno 61] Connection refused>
- 可验证的官方来源/读取入口：[1](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs)

### 153. mrs-spring2027

- 原址：[https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.mrs.org%2Fmeetings-events%2Fannual-meetings%2F2027-mrs-spring-meeting-exhibit&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit)

### 154. mrs-spring2027

- 原址：[https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-04-05（日期精度）；Conference ends: 2027-04-09（日期精度）；Abstracts — detailed timeline: 2026-10-14 23:59 America/New_York
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.mrs.org%2Fmeetings-events%2Fannual-meetings%2F2027-mrs-spring-meeting-exhibit%2Fcall-for-abstracts&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts)

### 155. mrs-spring2027

- 原址：[https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit](https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：尚未在抓取正文确认姓名/角色/机构：Materials Research Society (MRS)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.mrs.org%2Fmeetings-events%2Fannual-meetings%2Farchive%2Fmeeting%2F2027-mrs-spring-meeting-exhibit&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit)

### 156. mrs-fall2026

- 原址：[https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting](https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting)
- 原失败/待复核原因：HTTP Error 403: Forbidden
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.mrs.org%2Fpublications-digital-content%2Fnews%2Fpress-room%2Fpress-release%2F2026%2F08%2F28%2Fdierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting&output=json&filter=statuscode%3A200&from=2026&collapse=timestamp%3A6) → <urlopen error [Errno 61] Connection refused>
- 可验证的官方来源/读取入口：[1](https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting)

### 157. northern-lights-deep-learning-conference-2027

- 原址：[https://www.nldl.org/](https://www.nldl.org/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-01-12（日期精度）；Conference ends: 2027-01-14（日期精度）；Paper submissions: 2026-08-14（日期精度）；Registration: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.nldl.org/) → 200
- 可验证的官方来源/读取入口：[1](https://www.nldl.org/)

### 158. northern-lights-deep-learning-conference-2027

- 原址：[https://www.nldl.org/submission/call-for-papers](https://www.nldl.org/submission/call-for-papers)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：尚未在抓取正文确认姓名/角色/机构：UiT Machine Learning Group, Visual Intelligence
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.nldl.org/submission/call-for-papers) → 200
- 可验证的官方来源/读取入口：[1](https://www.nldl.org/submission/call-for-papers)

### 159. camml2027

- 原址：[https://www.psdi.ac.uk/event/camml-2027/](https://www.psdi.ac.uk/event/camml-2027/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.psdi.ac.uk/event/camml-2027/) → 200
- 可验证的官方来源/读取入口：[1](https://www.psdi.ac.uk/event/camml-2027/)

### 160. the-future-of-materials-discovery

- 原址：[https://www.royalsociety.org/science-events-and-lectures/2027/03/future-of-materials-discovery/](https://www.royalsociety.org/science-events-and-lectures/2027/03/future-of-materials-discovery/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-03-15（日期精度）；Workshop ends: 2027-03-16（日期精度）；Poster abstracts: 2027-02-19（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.royalsociety.org/science-events-and-lectures/2027/03/future-of-materials-discovery/) → 200
- 可验证的官方来源/读取入口：[1](https://www.royalsociety.org/science-events-and-lectures/2027/03/future-of-materials-discovery/)

### 161. mc18-18th-international-conference-on-materials-chemistry

- 原址：[https://www.rsc.org/events/find-an-event/18th-international-conference-on-materials-chemistry-%28mc18%29](https://www.rsc.org/events/find-an-event/18th-international-conference-on-materials-chemistry-%28mc18%29)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-07-12（日期精度）；Conference ends: 2027-07-15（日期精度）；Oral abstracts: 2027-02-08（日期精度）；Poster abstracts: 2027-05-04（日期精度）；Early registration: 2027-05-31（日期精度）；Registration: 2027-06-21（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.rsc.org/events/find-an-event/18th-international-conference-on-materials-chemistry-%28mc18%29) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/18th-international-conference-on-materials-chemistry-%28mc18%29) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2F18th-international-conference-on-materials-chemistry-%2528mc18%2529&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.rsc.org/events/find-an-event/18th-international-conference-on-materials-chemistry-%28mc18%29)

### 162. automated-intelligent-chemistry-2026

- 原址：[https://www.rsc.org/events/find-an-event/automated-intelligent-chemistry](https://www.rsc.org/events/find-an-event/automated-intelligent-chemistry)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.rsc.org/events/find-an-event/automated-intelligent-chemistry) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/automated-intelligent-chemistry) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Fautomated-intelligent-chemistry&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.rsc.org/events/find-an-event/automated-intelligent-chemistry)、[2](https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026)

### 163. characterisation-of-catalysts

- 原址：[https://www.rsc.org/events/find-an-event/characterisation-of-catalysts](https://www.rsc.org/events/find-an-event/characterisation-of-catalysts)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-04-07（日期精度）；Conference ends: 2027-04-09（日期精度）；Oral abstracts: 2027-02-26（日期精度）；Poster abstracts: 2027-03-10（日期精度）；Registration: 2027-03-31（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.rsc.org/events/find-an-event/characterisation-of-catalysts) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/characterisation-of-catalysts) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Fcharacterisation-of-catalysts&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.rsc.org/events/find-an-event/characterisation-of-catalysts)

### 164. chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning

- 原址：[https://www.rsc.org/events/find-an-event/chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning](https://www.rsc.org/events/find-an-event/chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2026-10-29（日期精度）；Workshop ends: 2026-10-30（日期精度）；Poster abstracts: 2026-08-20（日期精度）；Early registration: 2026-09-17（日期精度）；Standard registration: 2026-10-08（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.rsc.org/events/find-an-event/chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.rsc.org/getContentAsset/c2e08575-581a-45fd-9375-1307e0333e1d/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Fchemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.rsc.org/events/find-an-event/chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning)、[2](https://www.rsc.org/getContentAsset/c2e08575-581a-45fd-9375-1307e0333e1d/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en)

### 165. digital-chemistry2027

- 原址：[https://www.rsc.org/events/find-an-event/digital-chemistry-discovery-faraday-discussion](https://www.rsc.org/events/find-an-event/digital-chemistry-discovery-faraday-discussion)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2027-09-08（日期精度）；Workshop ends: 2027-09-10（日期精度）；Oral abstracts — conflicting official dates: None（日期精度）；Full paper required for an oral presentation: 2027-04-19（日期精度）；Poster abstracts: 2027-06-28（日期精度）；Early registration: 2027-07-26（日期精度）；Standard registration: 2027-08-30（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.rsc.org/events/find-an-event/digital-chemistry-discovery-faraday-discussion) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/digital-chemistry-discovery-faraday-discussion) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Fdigital-chemistry-discovery-faraday-discussion&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.rsc.org/events/find-an-event/digital-chemistry-discovery-faraday-discussion)

### 166. materials-chemistry-poster-symposium-2026

- 原址：[https://www.rsc.org/events/find-an-event/materials-chemistry-poster-symposium](https://www.rsc.org/events/find-an-event/materials-chemistry-poster-symposium)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2026-12-14（日期精度）；Workshop ends: 2026-12-14（日期精度）；Poster applications: 2026-10-18（日期精度）；尚未在抓取正文确认姓名/角色/机构：Royal Society of Chemistry Materials Chemistry Community
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.rsc.org/events/find-an-event/materials-chemistry-poster-symposium) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/materials-chemistry-poster-symposium) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Fmaterials-chemistry-poster-symposium&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.rsc.org/events/find-an-event/materials-chemistry-poster-symposium)

### 167. rsc-first-2026-ai-in-chemistry

- 原址：[https://www.rsc.org/events/find-an-event/rsc-first-2026-ai-in-chemistry](https://www.rsc.org/events/find-an-event/rsc-first-2026-ai-in-chemistry)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2026-11-19（日期精度）；Conference ends: 2026-11-21（日期精度）；Oral abstracts: 2026-09-15（日期精度）；Poster abstracts: 2026-09-15（日期精度）；Early registration: 2026-10-15（日期精度）；Standard registration: 2026-11-15（日期精度）；尚未在抓取正文确认姓名/角色/机构：Royal Society of Chemistry (RSC)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.rsc.org/events/find-an-event/rsc-first-2026-ai-in-chemistry) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/rsc-first-2026-ai-in-chemistry) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.rscfirst.org.cn/en/web/index/36624_3190136) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://rscfirst.org.cn/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Frsc-first-2026-ai-in-chemistry&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.rsc.org/events/find-an-event/rsc-first-2026-ai-in-chemistry)、[2](https://www.rscfirst.org.cn/en/web/index/36624_3190136)、[3](https://rscfirst.org.cn/)

### 168. rsc-theoretical-chemistry-group-graduate-student-meeting

- 原址：[https://www.rsc.org/events/find-an-event/rsc-theoretical-chemistry-group-graduate-student-meeting](https://www.rsc.org/events/find-an-event/rsc-theoretical-chemistry-group-graduate-student-meeting)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：HTTP Error 403: Forbidden；本次未获得覆盖全部受影响字段的可读取官方替代内容。
- 关联字段（保留已有事实）：Conference starts: 2027-01-15（日期精度）；Conference ends: 2027-01-15（日期精度）；Oral abstracts: 2026-11-30（日期精度）；Poster abstracts: 2026-11-30（日期精度）；Travel support: 2026-11-30（日期精度）；General registration: 2026-12-15（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.rsc.org/events/find-an-event/rsc-theoretical-chemistry-group-graduate-student-meeting) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/rsc-theoretical-chemistry-group-graduate-student-meeting) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Frsc-theoretical-chemistry-group-graduate-student-meeting&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.rsc.org/events/find-an-event/rsc-theoretical-chemistry-group-graduate-student-meeting)

### 169. 历史来源

- 原址：[https://www.rsc.org/getContentAsset/711ed80e-95d2-4169-905d-afa1bb46dab5/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en](https://www.rsc.org/getContentAsset/711ed80e-95d2-4169-905d-afa1bb46dab5/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en)
- 原失败/待复核原因：官网活动页的Speakers链接已更换资源ID；新PDF已成功完整下载（12页），旧链接确认为404。
- 最终状态：alternative；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：HTTP Error 404: Not Found；替代入口只覆盖各自明确发布的字段，原页专有内容尚未完整核实。 历史未解原因：HTTP Error 404: Not Found；可用其他官方入口只覆盖其明确发布的字段，不能证明原页专有内容已核实。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.rsc.org/getContentAsset/711ed80e-95d2-4169-905d-afa1bb46dab5/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en) → HTTP Error 404: Not Found；[bounded curl HTTP/1.1 retry](https://www.rsc.org/getContentAsset/711ed80e-95d2-4169-905d-afa1bb46dab5/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en) → 404；[official alternative / cache index; an index response is not a cached snapshot](https://www.rsc.org/getContentAsset/c2e08575-581a-45fd-9375-1307e0333e1d/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en) → 200
- 可验证的官方来源/读取入口：[1](https://www.rsc.org/getContentAsset/c2e08575-581a-45fd-9375-1307e0333e1d/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en)

### 170. rsc-first-2026-ai-in-chemistry

- 原址：[https://www.rscfirst.org.cn/en/web/index/36624_3190136](https://www.rscfirst.org.cn/en/web/index/36624_3190136)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.rscfirst.org.cn/en/web/index/36624_3190136) → 200
- 可验证的官方来源/读取入口：[1](https://www.rscfirst.org.cn/en/web/index/36624_3190136)

### 171. applications-of-artificial-intelligence-to-process-chemistry-scientific-update

- 原址：[https://www.scientificupdate.com/training/applications-of-artificial-intelligence-to-process-chemistry/2-november-2026/](https://www.scientificupdate.com/training/applications-of-artificial-intelligence-to-process-chemistry/2-november-2026/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：School starts: 2026-11-02（日期精度）；School ends: 2026-11-03（日期精度）；Training booking deadline: None（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.scientificupdate.com/training/applications-of-artificial-intelligence-to-process-chemistry/2-november-2026/) → 200
- 可验证的官方来源/读取入口：[1](https://www.scientificupdate.com/training/applications-of-artificial-intelligence-to-process-chemistry/2-november-2026/)

### 172. siam-ms27-mathematical-aspects-of-materials-science

- 原址：[https://www.siam.org/conferences-events/siam-conferences/ms27/](https://www.siam.org/conferences-events/siam-conferences/ms27/)
- 原失败/待复核原因：HTTP Error 403: Forbidden
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：未恢复自动抓取；延期公告没有独立确认新的精确钟点，不将旧截止的 23:59 沿用到新日期。
- 关联字段（保留已有事实）：Conference starts: 2027-05-02（日期精度）；Conference ends: 2027-05-05（日期精度）；Minisymposium proposals: 2026-11-02（日期精度）；Travel support: 2027-02-01（日期精度）；Early registration: 2027-03-31（日期精度）；尚未在抓取正文确认姓名/角色/机构：Carlos Garcia-Cervera, Anja Schlömerkemper, Virginie Ehrlacher, Miranda Holmes-Cerfon, Carola-Bibiane Schönlieb, Bianca Stroffolini, Xiaodong Yan, Chao Yang, Arash Yavari, Nung Kwan Yip
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.siam.org/conferences-events/siam-conferences/ms27/) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.siam.org/conferences-events/siam-conferences/ms27/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.siam.org%2Fconferences-events%2Fsiam-conferences%2Fms27%2F&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.siam.org/conferences-events/siam-conferences/ms27/)

### 173. siam-ms27-mathematical-aspects-of-materials-science

- 原址：[https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/)
- 原失败/待复核原因：HTTP Error 403: Forbidden
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：普通摘要明确为 2026-11-02 23:59 Eastern Time；补充 America/New_York 精度。Proposal 延期仅日期明确，不沿用旧截止钟点。
- 关联字段（保留已有事实）：Contributed abstracts: 2026-11-02 23:59 America/New_York
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.siam.org/conferences-events/siam-conferences/ms27/) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.siam.org%2Fconferences-events%2Fsiam-conferences%2Fms27%2Fsubmissions%2F&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/)

### 174. automated-intelligent-chemistry-2026

- 原址：[https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026](https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2026-11-24（日期精度）；Workshop ends: 2026-11-24（日期精度）；Early registration: 2026-10-27（日期精度）；Final registration: None（日期精度）；尚未在抓取正文确认姓名/角色/机构：Society of Chemical Industry (SCI) Young Chemists’ Panel
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026)

### 175. materiais-2027-xxiii-portuguese-materials-congress-xiv-international-symposium-on-materials

- 原址：[https://www.spmateriais.pt/eventos/materiais-2027](https://www.spmateriais.pt/eventos/materiais-2027)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.spmateriais.pt/eventos/materiais-2027) → 200
- 可验证的官方来源/读取入口：[1](https://www.spmateriais.pt/eventos/materiais-2027)

### 176. aems-2027

- 原址：[https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx)
- 原失败/待复核原因：HTTP Error 403: Forbidden
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.tms.org%2FSpecialtyCongress2027%2FSpecialtyCongress2027%2FAEMS2027%2FAEMS2027--Technical-Topics.aspx&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx)

### 177. aems-2027

- 原址：[https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx)
- 原失败/待复核原因：HTTP Error 403: Forbidden
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：未发现覆盖该会议日期及组织委员会的可直接抓取官方镜像、PDF 或 RSS；自动抓取仍 403。
- 关联字段（保留已有事实）：Conference starts: 2027-06-13（日期精度）；Conference ends: 2027-06-17（日期精度）；Abstracts: 2026-12-01（日期精度）；Discount registration: 2027-04-30（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.tms.org%2FSpecialtyCongress2027%2FSpecialtyCongress2027%2FAEMS2027%2Fdefault.aspx&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx)

### 178. tms2027

- 原址：[https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx)
- 原失败/待复核原因：HTTP Error 403: Forbidden
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：完整 FAQ 仍无可直接抓取替代，原站和 archive 域均 403。7 月 15 日延期已补上官方公告链接并核实为历史日期；未公布的精确钟点仍不填写。
- 关联字段（保留已有事实）：Conference starts: 2027-03-14（日期精度）；Conference ends: 2027-03-18（日期精度）；Original regular abstract deadline: 2026-07-01（日期精度）；Discount registration: 2027-01-31（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.programmaster.org/TMS2027) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.tms.org%2FTMS2027%2FTMS2027%2FAttendee-Toolbox%2FFrequently_Asked_Questions.aspx&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx)、[2](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[3](https://www.programmaster.org/TMS2027)、[4](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[5](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[6](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)

### 179. tms2027

- 原址：[https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx)
- 原失败/待复核原因：HTTP Error 403: Forbidden
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：下载文件恢复不代表 Organizer Tools HTML 已解除 403；这些素材不能用于证明日期或讲者。
- 关联字段（保留已有事实）：尚未在抓取正文确认姓名/角色/机构：The Minerals, Metals & Materials Society (TMS)
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.programmaster.org/TMS2027) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.tms.org%2FTMS2027%2FTMS2027%2FAttendee-Toolbox%2FOrganizer-Tools.aspx&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx)、[2](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[3](https://www.programmaster.org/TMS2027)、[4](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[5](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[6](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)

### 180. tms2027

- 原址：[https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx)
- 原失败/待复核原因：HTTP Error 403: Forbidden
- 最终状态：success；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：ProgramMaster 是专题清单，不能当作尚未发布的逐场最终会议日程。原网站入口 403 仍保留审计。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.programmaster.org/TMS2027) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm) → 200；[official alternative / cache index; an index response is not a cached snapshot](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index; an index response is not a cached snapshot](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.tms.org%2FTMS2027%2FTMS2027%2FProgramming%2FTMS2027_Technical_Program.aspx&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可验证的官方来源/读取入口：[1](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx)、[2](https://www.programmaster.org/TMS2027)、[3](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[4](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[5](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[6](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)

### 181. cpm10

- 原址：[https://www.tvt.tf.fau.de/ankuendigung-der-cpm-10-internationaler-workshop-zur-charakterisierung-poroeser-materialien-kommt-2027-nach-deutschland/](https://www.tvt.tf.fau.de/ankuendigung-der-cpm-10-internationaler-workshop-zur-charakterisierung-poroeser-materialien-kommt-2027-nach-deutschland/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.tvt.tf.fau.de/ankuendigung-der-cpm-10-internationaler-workshop-zur-charakterisierung-poroeser-materialien-kommt-2027-nach-deutschland/) → 200
- 可验证的官方来源/读取入口：[1](https://www.tvt.tf.fau.de/ankuendigung-der-cpm-10-internationaler-workshop-zur-charakterisierung-poroeser-materialien-kommt-2027-nach-deutschland/)

### 182. new-frontiers-in-nonequilibrium-statistical-physics-of-glasses

- 原址：[https://www.uibk.ac.at/en/th-physik/bio-nano/events/](https://www.uibk.ac.at/en/th-physik/bio-nano/events/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.uibk.ac.at/en/th-physik/bio-nano/events/) → 200
- 可验证的官方来源/读取入口：[1](https://www.uibk.ac.at/en/th-physik/bio-nano/events/)

### 183. uk-ai-research-symposium-ukairs-2026

- 原址：[https://www.ukairs.ac.uk/Home/Welcome](https://www.ukairs.ac.uk/Home/Welcome)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.ukairs.ac.uk/Home/Welcome) → 200
- 可验证的官方来源/读取入口：[1](https://www.ukairs.ac.uk/Home/Welcome)

### 184. uk-ai-research-symposium-ukairs-2026

- 原址：[https://www.ukairs.ac.uk/i/Registration](https://www.ukairs.ac.uk/i/Registration)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Workshop starts: 2026-11-24（日期精度）；Workshop ends: 2026-11-25（日期精度）；Research submissions: 2026-06-26（日期精度）；Registration: 2026-11-10（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.ukairs.ac.uk/i/Registration) → 200
- 可验证的官方来源/读取入口：[1](https://www.ukairs.ac.uk/i/Registration)

### 185. uk-ai-research-symposium-ukairs-2026

- 原址：[https://www.ukairs.ac.uk/i/SubmissionThemes](https://www.ukairs.ac.uk/i/SubmissionThemes)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.ukairs.ac.uk/i/SubmissionThemes) → 200
- 可验证的官方来源/读取入口：[1](https://www.ukairs.ac.uk/i/SubmissionThemes)

### 186. ukpormat2027

- 原址：[https://www.ukpormat.com/](https://www.ukpormat.com/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.ukpormat.com/) → 200
- 可验证的官方来源/读取入口：[1](https://www.ukpormat.com/)

### 187. watoc-2028-14th-triennial-congress

- 原址：[https://www.watoc.net/watoc.congress.html](https://www.watoc.net/watoc.congress.html)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：无此页直接关联的截止或选录人员；保留页面专有内容待核实。
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://www.watoc.net/watoc.congress.html) → 200
- 可验证的官方来源/读取入口：[1](https://www.watoc.net/watoc.congress.html)

### 188. zmpc2027

- 原址：[https://zmpc.org/](https://zmpc.org/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Conference starts: 2027-07-25（日期精度）；Conference ends: 2027-07-29（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://zmpc.org/) → 200
- 可验证的官方来源/读取入口：[1](https://zmpc.org/)

### 189. zmpc2027

- 原址：[https://zmpc.org/call-for-abstracts/](https://zmpc.org/call-for-abstracts/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Oral and poster extended abstracts: 2026-12-15 23:59 Asia/Tokyo；Recent Research Reports: 2027-06-07（日期精度）；Abstract submissions open: 2026-10-01（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://zmpc.org/call-for-abstracts/) → 200
- 可验证的官方来源/读取入口：[1](https://zmpc.org/call-for-abstracts/)

### 190. zmpc2027

- 原址：[https://zmpc.org/dates/](https://zmpc.org/dates/)
- 原失败/待复核原因：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 最终状态：manual；内容核实范围：False；稳定自动恢复：否。
- 未解决的具体原因/边界：来源可读，但该页未被日期/人员专用适配器完整覆盖；仍须核对本条 fact_checks 所列日期钟点/时区、人物角色/机构；保留原人工标记。 历史未解原因：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 关联字段（保留已有事实）：Early registration: 2027-05-07（日期精度）；Registration: 2027-06-07（日期精度）
- 核实/尝试日期：2026-11-02T09:15:10+00:00
- 本次尝试：[focused existing fetch_sources (daily updater not repeated)](https://zmpc.org/dates/) → 200
- 可验证的官方来源/读取入口：[1](https://zmpc.org/dates/)

## 测试、提交与发布

PASS: npm test (109 JavaScript + 41 Python); python3 scripts/validate_catalog.py (104 scheduled + 6 watchlist); git diff --check; full review coverage assertion passed. No emails or organizer contacts. All existing event dates, unrelated milestones, people and daily transport statuses preserved; AISTATS deadline version transition checked.
Pending maintenance push and live catalogue verification.
