# Conference Reminder 维护复核 — 2026-11-01

本次范围：104 个已排期活动、6 个待日期活动；最新每日运行已成功，255 个来源状态已读取，未重复运行每日 updater。针对全部待复核/失败来源及替代入口新失败，逐条处理 188 条。

互斥处理结果：{'manual': 166, 'alternative': 7, 'success': 15}。success 仅表示原址本次可读；日常自动抓取确认恢复为 0。

自 10 月 29 日人工记录以来新增每日失败/不可核实 5 条。本地失败不改写 GitHub 成功状态。

全部记录逐条执行了读取/重试/替代入口检查并保留具体受影响字段。没有把哈希稳定、HTTP 200、缓存索引响应或部分字段匹配视为整页事实核实；未完成的语义核对仍明确保留待人工。

## 有证据的更新

- 官方现明确 Closed for admission，更新原先仍标开放的状态说明。 [官方来源](https://www.chalmers.se/en/current/calendar/joint-kist-chalmers-symposium-understanding-and-developing-porous-framework-systems-function-synthesis-characterization-and-modeling/)
- CECAM 明确容量已满，申请于 2026-09-28 关闭；修正剩余席位未核实的说明。 [官方来源](https://www.cecam.org/workshop-details/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-1497)
- Sydney/Atlanta 候补于 10 月 30 日 11 am PDT 启用，日常释放名额；不推广至 Paris。 [官方来源](https://nips.cc/Conferences/2026)
- 普通摘要 2026-11-02 23:59 Eastern Time 明确；节点升为 datetime，版本 2。Proposal 仍日期精度。 [官方来源](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/)

## 每条记录：尝试、未解原因与证据链接

### 1. ijcai-2027

- 原址：[https://2027.ijcai.org/ijcai-2027-call-for-papers-main-track/](https://2027.ijcai.org/ijcai-2027-call-for-papers-main-track/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://2027.ijcai.org/ijcai-2027-call-for-papers-main-track/) → 200
- 可复查来源：[1](https://2027.ijcai.org/ijcai-2027-call-for-papers-main-track/)

### 2. aaai-2027

- 原址：[https://aaai.org/conference/aaai/aaai-27/](https://aaai.org/conference/aaai/aaai-27/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://aaai.org/conference/aaai/aaai-27/) → 200
- 可复查来源：[1](https://aaai.org/conference/aaai/aaai-27/)

### 3. actc-2027-american-conference-on-theoretical-chemistry

- 原址：[https://actc2027.com/](https://actc2027.com/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://actc2027.com/) → 200
- 可复查来源：[1](https://actc2027.com/)

### 4. the-advanced-materials-show-2027

- 原址：[https://advancedmaterialsshow.com/full-conference/](https://advancedmaterialsshow.com/full-conference/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://advancedmaterialsshow.com/full-conference/) → 200
- 可复查来源：[1](https://advancedmaterialsshow.com/full-conference/)

### 5. ai4am-2027-ai-for-advanced-materials

- 原址：[https://ai4am.net/](https://ai4am.net/)
- 原问题：Official source returned no readable page content.
- 本次结果：alternative；内容核实范围：False；日常恢复：否。
- 未解决：Official source returned no readable page content.；可用其他官方入口只覆盖其明确发布的字段，不能证明原页专有内容已核实。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://ai4am.net/) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://ai4am.net/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.ai4am.net/2027/deadlines.php) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.ai4am.net/2027/organisersCommittees.php) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.ai4am.net/2027/speakers.php) → 200
- 可复查来源：[1](https://www.ai4am.net/2027/deadlines.php)、[2](https://www.ai4am.net/2027/organisersCommittees.php)、[3](https://www.ai4am.net/2027/speakers.php)

### 6. chemai-2026

- 原址：[https://ai4science-amsterdam.github.io/news/chemai/](https://ai4science-amsterdam.github.io/news/chemai/)
- 原问题：Official source returned no readable page content.
- 本次结果：alternative；内容核实范围：False；日常恢复：否。
- 未解决：Official source returned no readable page content.；可用其他官方入口只覆盖其明确发布的字段，不能证明原页专有内容已核实。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://ai4science-amsterdam.github.io/news/chemai/) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://ai4science-amsterdam.github.io/news/chemai/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.acnetwork.nl/chemai) → 200
- 可复查来源：[1](https://www.acnetwork.nl/chemai)

### 7. ai4x-2027

- 原址：[https://ai4x.cc/2027/call-for-papers/important-dates/](https://ai4x.cc/2027/call-for-papers/important-dates/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://ai4x.cc/2027/call-for-papers/important-dates/) → 200
- 可复查来源：[1](https://ai4x.cc/2027/call-for-papers/important-dates/)

### 8. ai4x-2027

- 原址：[https://ai4x.cc/2027/speakers/](https://ai4x.cc/2027/speakers/)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://ai4x.cc/2027/speakers/) → 200
- 可复查来源：[1](https://ai4x.cc/2027/speakers/)

### 9. aichemy-annual-conference-2027

- 原址：[https://aichemy.ac.uk/event/aichemy-annual-conference-2027/](https://aichemy.ac.uk/event/aichemy-annual-conference-2027/)
- 原问题：IncompleteRead(7658 bytes read)
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。 历史未解事项：全天事件的 00:00/23:59:59 是系统占位时间，未写入精确提醒。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://aichemy.ac.uk/event/aichemy-annual-conference-2027/) → [Errno 54] Connection reset by peer；[bounded curl HTTP/1.1 retry](https://aichemy.ac.uk/event/aichemy-annual-conference-2027/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522) → The read operation timed out
- 可复查来源：[1](https://aichemy.ac.uk/event/aichemy-annual-conference-2027/)

### 10. defects2027

- 原址：[https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/](https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/)
- 原问题：IncompleteRead(15945 bytes read)
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/) → [Errno 54] Connection reset by peer；[bounded curl HTTP/1.1 retry](https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://psi-k.net/workshops/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://psi-k.net/wp-content/uploads/2026/03/2026_Psik_Poster_v1.pdf) → 200
- 可复查来源：[1](https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/)、[2](https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a)、[3](https://psi-k.net/workshops/)、[4](https://psi-k.net/wp-content/uploads/2026/03/2026_Psik_Poster_v1.pdf)

### 11. introduction-to-machine-learning-for-chemists-workshop

- 原址：[https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/](https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/)
- 原问题：IncompleteRead(7761 bytes read)
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。 历史未解事项：结束时间冲突仍保留，里程碑维持日期精度；现有 urllib 监测再次连接重置，不能称日常抓取已稳定。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/) → [Errno 54] Connection reset by peer；[bounded curl HTTP/1.1 retry](https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552) → [Errno 54] Connection reset by peer
- 可复查来源：[1](https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/)

### 12. aichemy-winter-school-robotics-and-ai-for-materials-chemistry-2026

- 原址：[https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/](https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/)
- 原问题：IncompleteRead(15943 bytes read)
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。 历史未解事项：现有 urllib 监测仍连接重置；全天事件元数据不作精确时刻使用。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/) → [Errno 54] Connection reset by peer；[bounded curl HTTP/1.1 retry](https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897) → [Errno 54] Connection reset by peer
- 可复查来源：[1](https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/)

### 13. introduction-to-machine-learning-for-chemists-workshop

- 原址：[https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552)
- 原问题：IncompleteRead(7641 bytes read)
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552) → [Errno 54] Connection reset by peer；[bounded curl HTTP/1.1 retry](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/) → [Errno 54] Connection reset by peer
- 可复查来源：[1](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552)

### 14. aichemy-winter-school-robotics-and-ai-for-materials-chemistry-2026

- 原址：[https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897)
- 原问题：IncompleteRead(14691 bytes read)
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897) → [Errno 54] Connection reset by peer；[bounded curl HTTP/1.1 retry](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/) → [Errno 54] Connection reset by peer
- 可复查来源：[1](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897)

### 15. aicmsn-2027

- 原址：[https://aicmsn2027.synergiasummits.com/abstract](https://aicmsn2027.synergiasummits.com/abstract)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://aicmsn2027.synergiasummits.com/abstract) → 200
- 可复查来源：[1](https://aicmsn2027.synergiasummits.com/abstract)

### 16. aisb-convention-2027

- 原址：[https://aisb.org.uk/call-for-symposia-proposals-aisb-2027-university-of-liverpool/](https://aisb.org.uk/call-for-symposia-proposals-aisb-2027-university-of-liverpool/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://aisb.org.uk/call-for-symposia-proposals-aisb-2027-university-of-liverpool/) → 200
- 可复查来源：[1](https://aisb.org.uk/call-for-symposia-proposals-aisb-2027-university-of-liverpool/)

### 17. aistats-2027

- 原址：[https://aistats.org/aistats2027/committee.html](https://aistats.org/aistats2027/committee.html)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://aistats.org/aistats2027/committee.html) → 200
- 可复查来源：[1](https://aistats.org/aistats2027/committee.html)

### 18. 历史来源（当前无活动关联）

- 原址：[https://aistats.org/aistats2027/dates.html](https://aistats.org/aistats2027/dates.html)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 0 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://aistats.org/aistats2027/dates.html) → 200
- 可复查来源：[1](https://aistats.org/aistats2027/dates.html)

### 19. aixmat-2026-ai-in-materials-research-summit

- 原址：[https://aixmat.candela.org.pl/](https://aixmat.candela.org.pl/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://aixmat.candela.org.pl/) → 200
- 可复查来源：[1](https://aixmat.candela.org.pl/)

### 20. world-conference-on-carbon-2027

- 原址：[https://carbon2027.or.kr/](https://carbon2027.or.kr/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://carbon2027.or.kr/) → 200
- 可复查来源：[1](https://carbon2027.or.kr/)

### 21. world-conference-on-carbon-2027

- 原址：[https://carbon2027.or.kr/cfp.html](https://carbon2027.or.kr/cfp.html)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://carbon2027.or.kr/cfp.html) → 200
- 可复查来源：[1](https://carbon2027.or.kr/cfp.html)

### 22. ukpormat2027

- 原址：[https://composites.blogs.bristol.ac.uk/2026/06/19/1058/](https://composites.blogs.bristol.ac.uk/2026/06/19/1058/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://composites.blogs.bristol.ac.uk/2026/06/19/1058/) → 200
- 可复查来源：[1](https://composites.blogs.bristol.ac.uk/2026/06/19/1058/)

### 23. materiais-2027-xxiii-portuguese-materials-congress-xiv-international-symposium-on-materials

- 原址：[https://congressomateriais.pt/editions/2027](https://congressomateriais.pt/editions/2027)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://congressomateriais.pt/editions/2027) → 200
- 可复查来源：[1](https://congressomateriais.pt/editions/2027)

### 24. do-androids-dream-of-electric-papers-benchmarking-ai-scientists

- 原址：[https://constructorlabs.org/event/do-androids-dream-of-electric-papers/](https://constructorlabs.org/event/do-androids-dream-of-electric-papers/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://constructorlabs.org/event/do-androids-dream-of-electric-papers/) → 200
- 可复查来源：[1](https://constructorlabs.org/event/do-androids-dream-of-electric-papers/)

### 25. next-cops-conference-cops-xiii

- 原址：[https://cops-xii.org/](https://cops-xii.org/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://cops-xii.org/) → 200
- 可复查来源：[1](https://cops-xii.org/)

### 26. cpm10

- 原址：[https://cpm-workshop.org/](https://cpm-workshop.org/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://cpm-workshop.org/) → 200
- 可复查来源：[1](https://cpm-workshop.org/)

### 27. feza2029-11th-conference-of-the-federation-of-european-zeolite-associations

- 原址：[https://cqe.tecnico.ulisboa.pt/cqe-researchers-organize-the-xiii-encmp-and-iv-rgc/](https://cqe.tecnico.ulisboa.pt/cqe-researchers-organize-the-xiii-encmp-and-iv-rgc/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：HTTP Error 503: Service Unavailable；本次未获得覆盖全部受影响字段的可读取官方替代内容。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://cqe.tecnico.ulisboa.pt/cqe-researchers-organize-the-xiii-encmp-and-iv-rgc/) → HTTP Error 503: Service Unavailable；[bounded curl HTTP/1.1 retry](https://cqe.tecnico.ulisboa.pt/cqe-researchers-organize-the-xiii-encmp-and-iv-rgc/) → 503；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc) → <urlopen error [Errno 8] nodename nor servname provided, or not known>
- 可复查来源：本次未取得可核实的正文，原址保留以供复查。

### 28. cpm10

- 原址：[https://dechema.de/en/cpm10.html](https://dechema.de/en/cpm10.html)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://dechema.de/en/cpm10.html) → 200
- 可复查来源：[1](https://dechema.de/en/cpm10.html)

### 29. dzt38

- 原址：[https://dechema.de/en/dzt38.html](https://dechema.de/en/dzt38.html)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://dechema.de/en/dzt38.html) → 200
- 可复查来源：[1](https://dechema.de/en/dzt38.html)

### 30. aimse2027, dgm-aimse-2027

- 原址：[https://dgm.de/aimse/2027](https://dgm.de/aimse/2027)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.; Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 2 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://dgm.de/aimse/2027) → 200
- 可复查来源：[1](https://dgm.de/aimse/2027)

### 31. aimse2027, dgm-aimse-2027

- 原址：[https://dgm.de/aimse/2027/](https://dgm.de/aimse/2027/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.; Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 2 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://dgm.de/aimse/2027/) → 200
- 可复查来源：[1](https://dgm.de/aimse/2027/)

### 32. aimse2027

- 原址：[https://dgm.de/aimse/2027/submission/abstract-submission](https://dgm.de/aimse/2027/submission/abstract-submission)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://dgm.de/aimse/2027/submission/abstract-submission) → 200
- 可复查来源：[1](https://dgm.de/aimse/2027/submission/abstract-submission)

### 33. ecai-2027-european-conference-on-artificial-intelligence

- 原址：[https://ecai2027.org/](https://ecai2027.org/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://ecai2027.org/) → 200
- 可复查来源：[1](https://ecai2027.org/)

### 34. ecml-pkdd-2027

- 原址：[https://ecmlpkdd.org/2027/](https://ecmlpkdd.org/2027/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://ecmlpkdd.org/2027/) → 200
- 可复查来源：[1](https://ecmlpkdd.org/2027/)

### 35. ecml-pkdd-2027

- 原址：[https://ecmlpkdd.org/2027/organisation-chairs/](https://ecmlpkdd.org/2027/organisation-chairs/)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://ecmlpkdd.org/2027/organisation-chairs/) → 200
- 可复查来源：[1](https://ecmlpkdd.org/2027/organisation-chairs/)

### 36. 6th-emmc-international-workshop-2027

- 原址：[https://emmc.eu/events/emmc2027/](https://emmc.eu/events/emmc2027/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://emmc.eu/events/emmc2027/) → 200
- 可复查来源：[1](https://emmc.eu/events/emmc2027/)

### 37. 6th-emmc-international-workshop-2027

- 原址：[https://emmc.eu/events/emmc2027/committees/](https://emmc.eu/events/emmc2027/committees/)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://emmc.eu/events/emmc2027/committees/) → 200
- 可复查来源：[1](https://emmc.eu/events/emmc2027/committees/)

### 38. tyc20-celebration-of-the-thomas-young-centre-at-20

- 原址：[https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce](https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce) → 200
- 可复查来源：[1](https://estore.kcl.ac.uk/conferences-and-events/academic-faculties/faculty-of-natural-mathematical-sciences/department-of-physics/tyc20-celebration-of-the-thomas-young-centre-at-20?token=e83fd11fa6d4e9ba026f4abc11256bce)

### 39. euromof2027

- 原址：[https://euromof2027.com/abstracts.html](https://euromof2027.com/abstracts.html)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://euromof2027.com/abstracts.html) → 200
- 可复查来源：[1](https://euromof2027.com/abstracts.html)

### 40. mofschool2027, euromof2027

- 原址：[https://euromof2027.com/index.html](https://euromof2027.com/index.html)
- 原问题：Recovered source content differs from the prior successful fetch; facts require review.; Recovered source content differs from the prior successful fetch; facts require review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 2 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://euromof2027.com/index.html) → 200
- 可复查来源：[1](https://euromof2027.com/index.html)

### 41. euromof2027

- 原址：[https://euromof2027.com/registration.html](https://euromof2027.com/registration.html)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://euromof2027.com/registration.html) → 200
- 可复查来源：[1](https://euromof2027.com/registration.html)

### 42. world-conference-on-carbon-2027

- 原址：[https://europeancarbon.eu/index.php/event/world-conference-on-carbon-2027-carbon-2027/](https://europeancarbon.eu/index.php/event/world-conference-on-carbon-2027-carbon-2027/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://europeancarbon.eu/index.php/event/world-conference-on-carbon-2027-carbon-2027/) → 200
- 可复查来源：[1](https://europeancarbon.eu/index.php/event/world-conference-on-carbon-2027-carbon-2027/)

### 43. interpore2027

- 原址：[https://event.fourwaves.com/interpore2027](https://event.fourwaves.com/interpore2027)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://event.fourwaves.com/interpore2027) → 200
- 可复查来源：[1](https://event.fourwaves.com/interpore2027)

### 44. interpore2027

- 原址：[https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a) → 200
- 可复查来源：[1](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a)

### 45. interpore2027

- 原址：[https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4](https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4) → 200
- 可复查来源：[1](https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4)

### 46. interpore2027

- 原址：[https://event.fourwaves.com/interpore2027/submission](https://event.fourwaves.com/interpore2027/submission)
- 原问题：Official source returned no readable page content.
- 本次结果：manual；内容核实范围：listed facts only；日常恢复：否。
- 未解决：浏览器确认 2027-01-12；Important Dates 仍为 2027-01-11；公开 API 配置不能消解官方冲突。 历史未解事项：没有官方更正说明可确定哪个日期优先；不能把时差推测当作解决。保留两候选日期，不启用单一截止提醒。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://event.fourwaves.com/interpore2027/submission) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://event.fourwaves.com/interpore2027/submission) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://api.fourwaves.com/api/events/interpore2027) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://event.fourwaves.com/interpore2027) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj) → 200；[rendered browser / official web reader; 2026-11-01](https://event.fourwaves.com/interpore2027/submission) → True
- 可复查来源：[1](https://event.fourwaves.com/interpore2027/submission)、[2](https://api.fourwaves.com/api/events/interpore2027)、[3](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a)、[4](https://event.fourwaves.com/interpore2027)、[5](https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4)、[6](https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj)

### 47. ecomat-conference-2026

- 原址：[https://events.polyu.edu.hk/ecomat2026/home](https://events.polyu.edu.hk/ecomat2026/home)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://events.polyu.edu.hk/ecomat2026/home) → 200
- 可复查来源：[1](https://events.polyu.edu.hk/ecomat2026/home)

### 48. 历史来源（当前无活动关联）

- 原址：[https://fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027](https://fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027)
- 原问题：已找到并实抓官方替代来源；仅覆盖该来源明确提供的事实，旧来源的专有内容仍保留核实要求。
- 本次结果：alternative；内容核实范围：False；日常恢复：否。
- 未解决：HTTP Error 404: Not Found；可用其他官方入口只覆盖其明确发布的字段，不能证明原页专有内容已核实。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027) → HTTP Error 404: Not Found；[bounded curl HTTP/1.1 retry](https://fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027) → 404；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027) → 200
- 可复查来源：[1](https://www.fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027)

### 49. fems-euromat-2027

- 原址：[https://fems.org/about-fems/fems-euromat-conference-series/fems-euromat/](https://fems.org/about-fems/fems-euromat-conference-series/fems-euromat/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://fems.org/about-fems/fems-euromat-conference-series/fems-euromat/) → 200
- 可复查来源：[1](https://fems.org/about-fems/fems-euromat-conference-series/fems-euromat/)

### 50. 7th-fems-industry-symposium-materials-assisted-by-digital-science

- 原址：[https://fems.org/industry-symposium-frankfurt-14-january-2027/](https://fems.org/industry-symposium-frankfurt-14-january-2027/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://fems.org/industry-symposium-frankfurt-14-january-2027/) → 200
- 可复查来源：[1](https://fems.org/industry-symposium-frankfurt-14-january-2027/)

### 51. fomms2027

- 原址：[https://fomms.cache.org/](https://fomms.cache.org/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://fomms.cache.org/) → 200
- 可复查来源：[1](https://fomms.cache.org/)

### 52. fomms2027

- 原址：[https://fomms.cache.org/2027/important-dates](https://fomms.cache.org/2027/important-dates)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://fomms.cache.org/2027/important-dates) → 200
- 可复查来源：[1](https://fomms.cache.org/2027/important-dates)

### 53. icml-2027

- 原址：[https://icml.cc/Conferences/FutureMeetings](https://icml.cc/Conferences/FutureMeetings)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://icml.cc/Conferences/FutureMeetings) → 200
- 可复查来源：[1](https://icml.cc/Conferences/FutureMeetings)

### 54. 23rd-international-workshop-on-computational-physics-and-materials-science-total-energy-and-force-methods

- 原址：[https://indico.ictp.it/event/11409](https://indico.ictp.it/event/11409)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：The read operation timed out；本次未获得覆盖全部受影响字段的可读取官方替代内容。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://indico.ictp.it/event/11409) → The read operation timed out；[bounded curl HTTP/1.1 retry](https://indico.ictp.it/event/11409) → 000
- 可复查来源：本次未取得可核实的正文，原址保留以供复查。

### 55. 17th-international-symposium-on-wettability-and-porous-media-7th-interpore-benelux-meeting-iswpm26

- 原址：[https://interpore.org/event/7th-interpore-benelux-chapter-meeting](https://interpore.org/event/7th-interpore-benelux-chapter-meeting)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://interpore.org/event/7th-interpore-benelux-chapter-meeting) → 200
- 可复查来源：[1](https://interpore.org/event/7th-interpore-benelux-chapter-meeting)

### 56. 9th-norway-national-workshop-in-porous-media

- 原址：[https://interpore.org/event/9th-norway-national-workshop-porous-media](https://interpore.org/event/9th-norway-national-workshop-porous-media)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://interpore.org/event/9th-norway-national-workshop-porous-media) → 200
- 可复查来源：[1](https://interpore.org/event/9th-norway-national-workshop-porous-media)

### 57. vii-annual-spain-interpore-meeting

- 原址：[https://interpore.org/event/vii-annual-spain-interpore-meeting](https://interpore.org/event/vii-annual-spain-interpore-meeting)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://interpore.org/event/vii-annual-spain-interpore-meeting) → 200
- 可复查来源：[1](https://interpore.org/event/vii-annual-spain-interpore-meeting)

### 58. colt-2027-conference-on-learning-theory

- 原址：[https://learningtheory.org/colt2027/](https://learningtheory.org/colt2027/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://learningtheory.org/colt2027/) → 200
- 可复查来源：[1](https://learningtheory.org/colt2027/)

### 59. materials-2027-magnus

- 原址：[https://magnusconferences.com/materials-science/](https://magnusconferences.com/materials-science/)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://magnusconferences.com/materials-science/) → 200
- 可复查来源：[1](https://magnusconferences.com/materials-science/)

### 60. materials-2027-magnus

- 原址：[https://magnusconferences.com/materials-science/information/important-dates](https://magnusconferences.com/materials-science/information/important-dates)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://magnusconferences.com/materials-science/information/important-dates) → 200
- 可复查来源：[1](https://magnusconferences.com/materials-science/information/important-dates)

### 61. materials-2027-magnus

- 原址：[https://magnusconferences.com/materials-science/register](https://magnusconferences.com/materials-science/register)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://magnusconferences.com/materials-science/register) → 200
- 可复查来源：[1](https://magnusconferences.com/materials-science/register)

### 62. new-frontiers-in-nonequilibrium-statistical-physics-of-glasses

- 原址：[https://mephysociety.wordpress.com/2026/05/06/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-vienna-nov30-dec4-2026/](https://mephysociety.wordpress.com/2026/05/06/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-vienna-nov30-dec4-2026/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://mephysociety.wordpress.com/2026/05/06/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-vienna-nov30-dec4-2026/) → 200
- 可复查来源：[1](https://mephysociety.wordpress.com/2026/05/06/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-vienna-nov30-dec4-2026/)

### 63. metfoam2027

- 原址：[https://metfoam2027.com/](https://metfoam2027.com/)
- 原问题：<urlopen error [Errno 101] Network is unreachable>
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://metfoam2027.com/) → 200
- 可复查来源：[1](https://metfoam2027.com/)

### 64. mof2028

- 原址：[https://mof-international.org/mof-conferences/](https://mof-international.org/mof-conferences/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://mof-international.org/mof-conferences/) → 200
- 可复查来源：[1](https://mof-international.org/mof-conferences/)

### 65. mofschool2027

- 原址：[https://mofs.lakecomoschool.org/](https://mofs.lakecomoschool.org/)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://mofs.lakecomoschool.org/) → 200
- 可复查来源：[1](https://mofs.lakecomoschool.org/)

### 66. neurips-2026

- 原址：[https://neurips.cc/Conferences/2026/Dates](https://neurips.cc/Conferences/2026/Dates)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://neurips.cc/Conferences/2026/Dates) → 200
- 可复查来源：[1](https://neurips.cc/Conferences/2026/Dates)

### 67. neurips-2026

- 原址：[https://nips.cc/Conferences/2026](https://nips.cc/Conferences/2026)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://nips.cc/Conferences/2026) → 200
- 可复查来源：[1](https://nips.cc/Conferences/2026)

### 68. neurips-2026

- 原址：[https://nips.cc/Conferences/2026/Committees](https://nips.cc/Conferences/2026/Committees)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://nips.cc/Conferences/2026/Committees) → 200
- 可复查来源：[1](https://nips.cc/Conferences/2026/Committees)

### 69. defects2027

- 原址：[https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a](https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a) → 200
- 可复查来源：[1](https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a)

### 70. pbast10

- 原址：[https://pbast10.org/](https://pbast10.org/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://pbast10.org/) → 200
- 可复查来源：[1](https://pbast10.org/)

### 71. defects2027, automating-atomistic-machine-learning, theoretical-spectroscopy-lectures

- 原址：[https://psi-k.net/workshops/](https://psi-k.net/workshops/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.; Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.; Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 3 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://psi-k.net/workshops/) → 200
- 可复查来源：[1](https://psi-k.net/workshops/)

### 72. modelling-water-across-scales

- 原址：[https://register1.icts.res.in/mwas](https://register1.icts.res.in/mwas)
- 原问题：<urlopen error timed out>
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：<urlopen error timed out>；可用其他官方入口只覆盖其明确发布的字段，不能证明原页专有内容已核实。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://register1.icts.res.in/mwas) → <urlopen error timed out>；[bounded curl HTTP/1.1 retry](https://register1.icts.res.in/mwas) → 000；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.icts.res.in/program/mwas) → 200
- 可复查来源：[1](https://www.icts.res.in/program/mwas)

### 73. the-future-of-porous-frameworks

- 原址：[https://registration.telluridescience.org/workshops/the-future-of-porous-frameworks](https://registration.telluridescience.org/workshops/the-future-of-porous-frameworks)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://registration.telluridescience.org/workshops/the-future-of-porous-frameworks) → 200
- 可复查来源：[1](https://registration.telluridescience.org/workshops/the-future-of-porous-frameworks)

### 74. rsc-first-2026-ai-in-chemistry

- 原址：[https://rscfirst.org.cn/](https://rscfirst.org.cn/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://rscfirst.org.cn/) → 200
- 可复查来源：[1](https://rscfirst.org.cn/)

### 75. sapem-2026-8th-symposium-on-the-acoustics-of-poro-elastic-materials

- 原址：[https://sapem2026.matelys.com/](https://sapem2026.matelys.com/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://sapem2026.matelys.com/) → 200
- 可复查来源：[1](https://sapem2026.matelys.com/)

### 76. ai4mat-neurips-2026

- 原址：[https://sites.google.com/view/ai4mat/home](https://sites.google.com/view/ai4mat/home)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://sites.google.com/view/ai4mat/home) → 200
- 可复查来源：[1](https://sites.google.com/view/ai4mat/home)

### 77. ai4mat-neurips-2026

- 原址：[https://sites.google.com/view/ai4mat/schedule](https://sites.google.com/view/ai4mat/schedule)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.; The authoritative AI4Mat schedule sentence is missing or ambiguous.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://sites.google.com/view/ai4mat/schedule) → 200
- 可复查来源：[1](https://sites.google.com/view/ai4mat/schedule)

### 78. ai4mat-neurips-2026

- 原址：[https://sites.google.com/view/ai4mat/submissions](https://sites.google.com/view/ai4mat/submissions)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://sites.google.com/view/ai4mat/submissions) → 200
- 可复查来源：[1](https://sites.google.com/view/ai4mat/submissions)

### 79. vii-annual-spain-interpore-meeting

- 原址：[https://spaininterpore.webs.upv.es/vii-annual-meeting-registration-open/](https://spaininterpore.webs.upv.es/vii-annual-meeting-registration-open/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://spaininterpore.webs.upv.es/vii-annual-meeting-registration-open/) → 200
- 可复查来源：[1](https://spaininterpore.webs.upv.es/vii-annual-meeting-registration-open/)

### 80. camml2027

- 原址：[https://spring2027.camml.ac.uk/](https://spring2027.camml.ac.uk/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://spring2027.camml.ac.uk/) → 200
- 可复查来源：[1](https://spring2027.camml.ac.uk/)

### 81. camml2027

- 原址：[https://spring2027.camml.ac.uk/registration/](https://spring2027.camml.ac.uk/registration/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://spring2027.camml.ac.uk/registration/) → 200
- 可复查来源：[1](https://spring2027.camml.ac.uk/registration/)

### 82. 45th-rsc-solid-state-chemistry-group-christmas-meeting-sscg2026

- 原址：[https://sscg.uk/2026-sscg-christmas-meeting](https://sscg.uk/2026-sscg-christmas-meeting)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://sscg.uk/2026-sscg-christmas-meeting) → 200
- 可复查来源：[1](https://sscg.uk/2026-sscg-christmas-meeting)

### 83. tyc20-celebration-of-the-thomas-young-centre-at-20

- 原址：[https://thomasyoungcentre.org/event/tyc20-celebration-of-the-thomas-young-centre-at-20/](https://thomasyoungcentre.org/event/tyc20-celebration-of-the-thomas-young-centre-at-20/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://thomasyoungcentre.org/event/tyc20-celebration-of-the-thomas-young-centre-at-20/) → 200
- 可复查来源：[1](https://thomasyoungcentre.org/event/tyc20-celebration-of-the-thomas-young-centre-at-20/)

### 84. pmea2028-porous-materials-for-environmental-applications

- 原址：[https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf](https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf)
- 原问题：<urlopen error timed out>
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：<urlopen error timed out>；本次未获得覆盖全部受影响字段的可读取官方替代内容。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf) → <urlopen error timed out>；[bounded curl HTTP/1.1 retry](https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf) → 000
- 可复查来源：本次未取得可核实的正文，原址保留以供复查。

### 85. mm27-molecular-modelling-2027

- 原址：[https://uon-comp-chem.github.io/mm2027/](https://uon-comp-chem.github.io/mm2027/)
- 原问题：Official source returned no readable page content.
- 本次结果：alternative；内容核实范围：False；日常恢复：否。
- 未解决：Official source returned no readable page content.；可用其他官方入口只覆盖其明确发布的字段，不能证明原页专有内容已核实。 历史未解事项：摘要、注册、节目仍为 Details Coming Soon，不填造日期；源文件由哈希监测，尚不支持自动抽取事实。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://uon-comp-chem.github.io/mm2027/) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://uon-comp-chem.github.io/mm2027/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://raw.githubusercontent.com/UON-comp-chem/mm2027/main/src/App.jsx) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://github.com/UON-comp-chem/mm2027/blob/main/src/App.jsx) → 200
- 可复查来源：[1](https://raw.githubusercontent.com/UON-comp-chem/mm2027/main/src/App.jsx)、[2](https://github.com/UON-comp-chem/mm2027/blob/main/src/App.jsx)

### 86. 历史来源（当前无活动关联）

- 原址：[https://virtual.aistats.org/](https://virtual.aistats.org/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 0 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://virtual.aistats.org/) → 200
- 可复查来源：[1](https://virtual.aistats.org/)

### 87. watoc-2028-14th-triennial-congress

- 原址：[https://watoc2028.org/](https://watoc2028.org/)
- 原问题：Official source returned no readable page content.
- 本次结果：alternative；内容核实范围：False；日常恢复：否。
- 未解决：Official source returned no readable page content.；可用其他官方入口只覆盖其明确发布的字段，不能证明原页专有内容已核实。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://watoc2028.org/) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://watoc2028.org/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.watoc.net/watoc.congress.html) → 200
- 可复查来源：[1](https://www.watoc.net/watoc.congress.html)

### 88. feza2029-11th-conference-of-the-federation-of-european-zeolite-associations

- 原址：[https://web.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc](https://web.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc)
- 原问题：<urlopen error [Errno -2] Name or service not known>
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：<urlopen error [Errno 8] nodename nor servname provided, or not known>；本次未获得覆盖全部受影响字段的可读取官方替代内容。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://web.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc) → <urlopen error [Errno 8] nodename nor servname provided, or not known>；[bounded curl HTTP/1.1 retry](https://web.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc) → 000；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://cqe.tecnico.ulisboa.pt/cqe-researchers-organize-the-xiii-encmp-and-iv-rgc/) → HTTP Error 503: Service Unavailable
- 可复查来源：本次未取得可核实的正文，原址保留以供复查。

### 89. wmt-2026-when-materials-think

- 原址：[https://wmt2026workshop.github.io/](https://wmt2026workshop.github.io/)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://wmt2026workshop.github.io/) → 200
- 可复查来源：[1](https://wmt2026workshop.github.io/)

### 90. chemai-2026

- 原址：[https://www.acnetwork.nl/chemai](https://www.acnetwork.nl/chemai)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.acnetwork.nl/chemai) → 200
- 可复查来源：[1](https://www.acnetwork.nl/chemai)

### 91. ai4am-2027-ai-for-advanced-materials

- 原址：[https://www.ai4am.net/2027/deadlines.php](https://www.ai4am.net/2027/deadlines.php)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.ai4am.net/2027/deadlines.php) → 200
- 可复查来源：[1](https://www.ai4am.net/2027/deadlines.php)

### 92. 22nd-international-zeolite-conference-izc22

- 原址：[https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization)
- 原问题：HTTP Error 403: Forbidden
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。 历史未解事项：未找到能直接下载且覆盖原页组织信息的官方镜像、PDF 或 RSS；现有自动抓取仍 403。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.aiche.org%2Fconferences%2Finternational-zeolite-conference%2F2028%2Fabout-conference-organization&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization)

### 93. 22nd-international-zeolite-conference-izc22

- 原址：[https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee)
- 原问题：HTTP Error 403: Forbidden
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。 历史未解事项：未找到覆盖完整委员会名单的可下载官方镜像/PDF/RSS；现有自动抓取仍 403。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.aiche.org%2Fconferences%2Finternational-zeolite-conference%2F2028%2Fprogram-committee&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee)

### 94. ai-2026-sgai-international-conference-on-artificial-intelligence

- 原址：[https://www.bcs-sgai.org/ai2026/](https://www.bcs-sgai.org/ai2026/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.bcs-sgai.org/ai2026/) → 200
- 可复查来源：[1](https://www.bcs-sgai.org/ai2026/)

### 95. ai-2026-sgai-international-conference-on-artificial-intelligence

- 原址：[https://www.bcs-sgai.org/ai2026/?section=registration](https://www.bcs-sgai.org/ai2026/?section=registration)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.bcs-sgai.org/ai2026/?section=registration) → 200
- 可复查来源：[1](https://www.bcs-sgai.org/ai2026/?section=registration)

### 96. fomms2027

- 原址：[https://www.cache.org/fomms-2027-abstract-submissions-are-now-open](https://www.cache.org/fomms-2027-abstract-submissions-are-now-open)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.cache.org/fomms-2027-abstract-submissions-are-now-open) → 200
- 可复查来源：[1](https://www.cache.org/fomms-2027-abstract-submissions-are-now-open)

### 97. world-conference-on-carbon-2028

- 原址：[https://www.carbon2028.org/](https://www.carbon2028.org/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.carbon2028.org/) → 200
- 可复查来源：[1](https://www.carbon2028.org/)

### 98. aric-advanced-adsorption-course-kinetic-measurements-using-macroscopic-techniques

- 原址：[https://www.carboncapture.eng.ed.ac.uk/ARIC_Course](https://www.carboncapture.eng.ed.ac.uk/ARIC_Course)
- 原问题：<urlopen error timed out>
- 本次结果：alternative；内容核实范围：False；日常恢复：否。
- 未解决：<urlopen error timed out>；可用其他官方入口只覆盖其明确发布的字段，不能证明原页专有内容已核实。 历史未解事项：旧表的 Tuesday 17th/Wednesday 18th/Thursday 19th 与 2026 年星期相符，结合报名页判为旧表未同步（推断）；不把旧日程钟点迁到 2027 年。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.carboncapture.eng.ed.ac.uk/ARIC_Course) → <urlopen error timed out>；[bounded curl HTTP/1.1 retry](https://www.carboncapture.eng.ed.ac.uk/ARIC_Course) → 000；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027) → 200
- 可复查来源：[1](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027)

### 99. automating-atomistic-machine-learning, cecam-mlthermo2027, computational-electrochemistry-in-the-era-of-ai

- 原址：[https://www.cecam.org/program?location=all&month=all&page=0&type=flagship_workshop](https://www.cecam.org/program?location=all&month=all&page=0&type=flagship_workshop)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.; Official content changed; recognised fields may be updated, but the remaining content requires review.; Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 3 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.cecam.org/program?location=all&month=all&page=0&type=flagship_workshop) → 200
- 可复查来源：[1](https://www.cecam.org/program?location=all&month=all&page=0&type=flagship_workshop)

### 100. theoretical-spectroscopy-lectures, selfassembly2027, challenges-in-ionic-fluids-theory-simulation-and-experiment, 2nd-quantum-transport-methods-and-algorithms-meeting-from-particles-to-waves-approaches, mathematics-for-quantum-dynamics

- 原址：[https://www.cecam.org/program?location=all&month=all&page=2&type=all](https://www.cecam.org/program?location=all&month=all&page=2&type=all)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.; Official content changed; recognised fields may be updated, but the remaining content requires review.; Official content changed; recognised fields may be updated, but the remaining content requires review.; Official content changed; recognised fields may be updated, but the remaining content requires review.; Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 5 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.cecam.org/program?location=all&month=all&page=2&type=all) → 200
- 可复查来源：[1](https://www.cecam.org/program?location=all&month=all&page=2&type=all)

### 101. theory-and-simulation-of-biomolecular-phase-separation-and-aggregation

- 原址：[https://www.cecam.org/workshop-details/1272](https://www.cecam.org/workshop-details/1272)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.cecam.org/workshop-details/1272) → 200
- 可复查来源：[1](https://www.cecam.org/workshop-details/1272)

### 102. cecam-mlthermo2027

- 原址：[https://www.cecam.org/workshop-details/1480](https://www.cecam.org/workshop-details/1480)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.cecam.org/workshop-details/1480) → 200
- 可复查来源：[1](https://www.cecam.org/workshop-details/1480)

### 103. 2nd-quantum-transport-methods-and-algorithms-meeting-from-particles-to-waves-approaches

- 原址：[https://www.cecam.org/workshop-details/2nd-quantum-transport-methods-and-algorithms-meeting-from-particles-to-waves-approaches-1490](https://www.cecam.org/workshop-details/2nd-quantum-transport-methods-and-algorithms-meeting-from-particles-to-waves-approaches-1490)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.cecam.org/workshop-details/2nd-quantum-transport-methods-and-algorithms-meeting-from-particles-to-waves-approaches-1490) → 200
- 可复查来源：[1](https://www.cecam.org/workshop-details/2nd-quantum-transport-methods-and-algorithms-meeting-from-particles-to-waves-approaches-1490)

### 104. automating-atomistic-machine-learning

- 原址：[https://www.cecam.org/workshop-details/automating-atomistic-machine-learning-1494](https://www.cecam.org/workshop-details/automating-atomistic-machine-learning-1494)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.cecam.org/workshop-details/automating-atomistic-machine-learning-1494) → 200
- 可复查来源：[1](https://www.cecam.org/workshop-details/automating-atomistic-machine-learning-1494)

### 105. mathematics-for-quantum-dynamics

- 原址：[https://www.cecam.org/workshop-details/mathematics-for-quantum-dynamics-1486](https://www.cecam.org/workshop-details/mathematics-for-quantum-dynamics-1486)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.cecam.org/workshop-details/mathematics-for-quantum-dynamics-1486) → 200
- 可复查来源：[1](https://www.cecam.org/workshop-details/mathematics-for-quantum-dynamics-1486)

### 106. new-frontiers-in-nonequilibrium-statistical-physics-of-glasses

- 原址：[https://www.cecam.org/workshop-details/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-1497](https://www.cecam.org/workshop-details/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-1497)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.cecam.org/workshop-details/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-1497) → 200
- 可复查来源：[1](https://www.cecam.org/workshop-details/new-frontiers-in-nonequilibrium-statistical-physics-of-glasses-1497)

### 107. selfassembly2027

- 原址：[https://www.cecam.org/workshop-details/self-assembly-of-materials-merging-direct-experiments-with-simulations-at-different-resolutions-and-data-science-techniques-1522](https://www.cecam.org/workshop-details/self-assembly-of-materials-merging-direct-experiments-with-simulations-at-different-resolutions-and-data-science-techniques-1522)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.cecam.org/workshop-details/self-assembly-of-materials-merging-direct-experiments-with-simulations-at-different-resolutions-and-data-science-techniques-1522) → 200
- 可复查来源：[1](https://www.cecam.org/workshop-details/self-assembly-of-materials-merging-direct-experiments-with-simulations-at-different-resolutions-and-data-science-techniques-1522)

### 108. theoretical-spectroscopy-lectures

- 原址：[https://www.cecam.org/workshop-details/theoretical-spectroscopy-lectures-1482](https://www.cecam.org/workshop-details/theoretical-spectroscopy-lectures-1482)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.cecam.org/workshop-details/theoretical-spectroscopy-lectures-1482) → 200
- 可复查来源：[1](https://www.cecam.org/workshop-details/theoretical-spectroscopy-lectures-1482)

### 109. joint-kist-chalmers-symposium-understanding-and-developing-porous-framework-systems

- 原址：[https://www.chalmers.se/en/current/calendar/joint-kist-chalmers-symposium-understanding-and-developing-porous-framework-systems-function-synthesis-characterization-and-modeling/](https://www.chalmers.se/en/current/calendar/joint-kist-chalmers-symposium-understanding-and-developing-porous-framework-systems-function-synthesis-characterization-and-modeling/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.chalmers.se/en/current/calendar/joint-kist-chalmers-symposium-understanding-and-developing-porous-framework-systems-function-synthesis-characterization-and-modeling/) → 200
- 可复查来源：[1](https://www.chalmers.se/en/current/calendar/joint-kist-chalmers-symposium-understanding-and-developing-porous-framework-systems-function-synthesis-characterization-and-modeling/)

### 110. dpg-school2027

- 原址：[https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools](https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.dpg-physik.de%2Faktivitaeten-und-programme%2Fprogramme%2Fbad-honnef-physics-schools&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools)

### 111. dpg-school2027

- 原址：[https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.dpg-physik.de%2Fveranstaltungen%2F2027%2Fmachine_learning_for_atomistic_simulations_of_materials&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → <urlopen error [Errno 61] Connection refused>
- 可复查来源：[1](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials)

### 112. dpg-school2027

- 原址：[https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.dpg-physik.de/aktivitaeten-und-programme/programme/bad-honnef-physics-schools) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.dpg-physik.de%2Fveranstaltungen%2F2027%2Fmachine_learning_for_atomistic_simulations_of_materials%3Fset_language%3Den&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.dpg-physik.de/veranstaltungen/2027/machine_learning_for_atomistic_simulations_of_materials?set_language=en)

### 113. eazc2027

- 原址：[https://www.eazc2027.com/](https://www.eazc2027.com/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：listed facts only；日常恢复：否。
- 未解决：浏览器核对 2027-01-17 至 20；常规摘要延期至 2026-08-31，Recent Reports 2026-11-30，注册 2026-12-31；与已有事实相符。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.eazc2027.com/) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://www.eazc2027.com/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.eazc2027.com/index/page.html?id=1844) → Official source returned no readable page content.；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.eazc2027.com/index/page.html?id=1835) → Official source returned no readable page content.；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.eazc2027.com/index/page.html?id=1843) → Official source returned no readable page content.；[rendered browser / official web reader; 2026-11-01](https://www.eazc2027.com/) → True
- 可复查来源：[1](https://www.eazc2027.com/)

### 114. eazc2027

- 原址：[https://www.eazc2027.com/index/page.html?id=1844](https://www.eazc2027.com/index/page.html?id=1844)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：listed facts only；日常恢复：否。
- 未解决：浏览器核对主文仍为旧 7 月 31 日，侧栏明确延期至 8 月 31 日；后者优先，现有数据无需更改。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.eazc2027.com/index/page.html?id=1844) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://www.eazc2027.com/index/page.html?id=1844) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.eazc2027.com/) → Official source returned no readable page content.；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.eazc2027.com/index/page.html?id=1835) → Official source returned no readable page content.；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.eazc2027.com/index/page.html?id=1843) → Official source returned no readable page content.；[rendered browser / official web reader; 2026-11-01](https://www.eazc2027.com/index/page.html?id=1844) → True
- 可复查来源：[1](https://www.eazc2027.com/index/page.html?id=1844)

### 115. materials-today-conference-2027

- 原址：[https://www.elsevier.com/en-gb/events/conferences/all/materials-today-conference/committee-and-speakers](https://www.elsevier.com/en-gb/events/conferences/all/materials-today-conference/committee-and-speakers)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.elsevier.com/en-gb/events/conferences/all/materials-today-conference/committee-and-speakers) → 200
- 可复查来源：[1](https://www.elsevier.com/en-gb/events/conferences/all/materials-today-conference/committee-and-speakers)

### 116. materials-today-conference-2027

- 原址：[https://www.elsevier.com/en-in/events/conferences/all/materials-today-conference/committee-and-speakers](https://www.elsevier.com/en-in/events/conferences/all/materials-today-conference/committee-and-speakers)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.elsevier.com/en-in/events/conferences/all/materials-today-conference/committee-and-speakers) → 200
- 可复查来源：[1](https://www.elsevier.com/en-in/events/conferences/all/materials-today-conference/committee-and-speakers)

### 117. materials-today-conference-2027

- 原址：[https://www.elsevier.com/events/conferences/all/materials-today-conference](https://www.elsevier.com/events/conferences/all/materials-today-conference)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.elsevier.com/events/conferences/all/materials-today-conference) → 200
- 可复查来源：[1](https://www.elsevier.com/events/conferences/all/materials-today-conference)

### 118. aric-advanced-adsorption-course-kinetic-measurements-using-macroscopic-techniques

- 原址：[https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027) → 200
- 可复查来源：[1](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027)

### 119. esat-2027-35th-european-symposium-on-applied-thermodynamics

- 原址：[https://www.esat2027.com/](https://www.esat2027.com/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.esat2027.com/) → 200
- 可复查来源：[1](https://www.esat2027.com/)

### 120. new-frontiers-in-nonequilibrium-statistical-physics-of-glasses

- 原址：[https://www.esi.ac.at/events/e610/](https://www.esi.ac.at/events/e610/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.esi.ac.at/events/e610/) → 200
- 可复查来源：[1](https://www.esi.ac.at/events/e610/)

### 121. euchems-compchem-2027

- 原址：[https://www.euchems.eu/divisions/computational-chemistry-2/honours/](https://www.euchems.eu/divisions/computational-chemistry-2/honours/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.euchems.eu/divisions/computational-chemistry-2/honours/) → 200
- 可复查来源：[1](https://www.euchems.eu/divisions/computational-chemistry-2/honours/)

### 122. fems-euromat-2027

- 原址：[https://www.euromat2027.com/](https://www.euromat2027.com/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.euromat2027.com/) → 200
- 可复查来源：[1](https://www.euromat2027.com/)

### 123. e-mrs-spring-meeting-2027

- 原址：[https://www.european-mrs.com/computations-materials-%E2%80%93-discovery-design-and-role-ai-emrs](https://www.european-mrs.com/computations-materials-%E2%80%93-discovery-design-and-role-ai-emrs)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.european-mrs.com/computations-materials-%E2%80%93-discovery-design-and-role-ai-emrs) → 200
- 可复查来源：[1](https://www.european-mrs.com/computations-materials-%E2%80%93-discovery-design-and-role-ai-emrs)

### 124. e-mrs-spring-meeting-2027

- 原址：[https://www.european-mrs.com/materials-properties-finite-temperature-atomic-scale-modelling-methodologies-applications-and-beyond](https://www.european-mrs.com/materials-properties-finite-temperature-atomic-scale-modelling-methodologies-applications-and-beyond)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.european-mrs.com/materials-properties-finite-temperature-atomic-scale-modelling-methodologies-applications-and-beyond) → 200
- 可复查来源：[1](https://www.european-mrs.com/materials-properties-finite-temperature-atomic-scale-modelling-methodologies-applications-and-beyond)

### 125. e-mrs-fall-meeting-2027

- 原址：[https://www.european-mrs.com/meetings/2027-fall-meeting-exhibit](https://www.european-mrs.com/meetings/2027-fall-meeting-exhibit)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.european-mrs.com/meetings/2027-fall-meeting-exhibit) → 200
- 可复查来源：[1](https://www.european-mrs.com/meetings/2027-fall-meeting-exhibit)

### 126. e-mrs-spring-meeting-2027

- 原址：[https://www.european-mrs.com/meetings/2027-spring-meeting-exhibit](https://www.european-mrs.com/meetings/2027-spring-meeting-exhibit)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.european-mrs.com/meetings/2027-spring-meeting-exhibit) → 200
- 可复查来源：[1](https://www.european-mrs.com/meetings/2027-spring-meeting-exhibit)

### 127. challenges-in-ionic-fluids-theory-simulation-and-experiment

- 原址：[https://www.fluxionic.org/events](https://www.fluxionic.org/events)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.fluxionic.org/events) → 200
- 可复查来源：[1](https://www.fluxionic.org/events)

### 128. challenges-in-ionic-fluids-theory-simulation-and-experiment

- 原址：[https://www.fluxionic.org/events/challenges-ionic-fluids-2027](https://www.fluxionic.org/events/challenges-ionic-fluids-2027)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.fluxionic.org/events/challenges-ionic-fluids-2027) → 200
- 可复查来源：[1](https://www.fluxionic.org/events/challenges-ionic-fluids-2027)

### 129. foa16

- 原址：[https://www.foa16.com/](https://www.foa16.com/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.foa16.com/) → 200
- 可复查来源：[1](https://www.foa16.com/)

### 130. foa16

- 原址：[https://www.foa16.com/registrations](https://www.foa16.com/registrations)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.foa16.com/registrations) → 200
- 可复查来源：[1](https://www.foa16.com/registrations)

### 131. nanoporous-grc2027

- 原址：[https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/](https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/) → 200
- 可复查来源：[1](https://www.grc.org/nanoporous-materials-and-their-applications-conference/2027/)

### 132. nanoporous-grs2027

- 原址：[https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/)
- 原问题：HTTP Error 404: Not Found
- 本次结果：manual；内容核实范围：listed facts only；日常恢复：否。
- 未解决：无年份旧入口本次监测 404；有年份官网可经网页读取核实日期和申请截止，但该入口的自动正文读取也未恢复。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/) → HTTP Error 404: Not Found；[bounded curl HTTP/1.1 retry](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/) → Official source returned no readable page content.；[rendered browser / official web reader; 2026-11-01](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/) → True
- 可复查来源：[1](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/)

### 133. nanoporous-grs2027

- 原址：[https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/)
- 原问题：Official source returned no readable page content.
- 本次结果：manual；内容核实范围：listed facts only；日常恢复：否。
- 未解决：官方网页读取确认 2027-07-31 至 08-01、口头报告申请 04-25、参会申请 07-03。原监测仍无法读取正文；主席名为图片，未据缺失文本删除姓名。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/) → HTTP Error 404: Not Found；[rendered browser / official web reader; 2026-11-01](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/) → True
- 可复查来源：[1](https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/)

### 134. iclr-2027

- 原址：[https://www.iclr.cc/](https://www.iclr.cc/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.iclr.cc/) → 200
- 可复查来源：[1](https://www.iclr.cc/)

### 135. school-on-advanced-structural-analysis-in-mofs-and-cofs

- 原址：[https://www.icmm.csic.es/es/node/37130](https://www.icmm.csic.es/es/node/37130)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.icmm.csic.es/es/node/37130) → 200
- 可复查来源：[1](https://www.icmm.csic.es/es/node/37130)

### 136. modelling-water-across-scales

- 原址：[https://www.icts.res.in/program/mwas](https://www.icts.res.in/program/mwas)
- 原问题：<urlopen error timed out>
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.icts.res.in/program/mwas) → 200
- 可复查来源：[1](https://www.icts.res.in/program/mwas)

### 137. 17th-international-symposium-on-wettability-and-porous-media-7th-interpore-benelux-meeting-iswpm26

- 原址：[https://www.iswpm26.org/](https://www.iswpm26.org/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.iswpm26.org/) → 200
- 可复查来源：[1](https://www.iswpm26.org/)

### 138. 17th-international-symposium-on-wettability-and-porous-media-7th-interpore-benelux-meeting-iswpm26

- 原址：[https://www.iswpm26.org/172246/author?version=latest](https://www.iswpm26.org/172246/author?version=latest)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.iswpm26.org/172246/author?version=latest) → 200
- 可复查来源：[1](https://www.iswpm26.org/172246/author?version=latest)

### 139. tenth-north-of-england-chemoinformatics-meeting

- 原址：[https://www.leachresearchgroup.net/home/chemoinformatics-conference-2027](https://www.leachresearchgroup.net/home/chemoinformatics-conference-2027)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.leachresearchgroup.net/home/chemoinformatics-conference-2027) → 200
- 可复查来源：[1](https://www.leachresearchgroup.net/home/chemoinformatics-conference-2027)

### 140. interpore2027

- 原址：[https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj](https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj) → 200
- 可复查来源：[1](https://www.linkedin.com/posts/interpore_interpore2027-activity-7474766886942142464-6qdj)

### 141. tms2027

- 原址：[https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)
- 原问题：Official content changed; recognised fields may be updated, but the remaining content requires review.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm) → 200
- 可复查来源：[1](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)

### 142. medpore2027

- 原址：[https://www.linkedin.com/posts/youssef-belmabkhout-6a18abb_medpore2023-medpore2025-acercoe-activity-7333905933359632384-31gE](https://www.linkedin.com/posts/youssef-belmabkhout-6a18abb_medpore2023-medpore2025-acercoe-activity-7333905933359632384-31gE)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.linkedin.com/posts/youssef-belmabkhout-6a18abb_medpore2023-medpore2025-acercoe-activity-7333905933359632384-31gE) → 200
- 可复查来源：[1](https://www.linkedin.com/posts/youssef-belmabkhout-6a18abb_medpore2023-medpore2025-acercoe-activity-7333905933359632384-31gE)

### 143. mmm12-12th-international-conference-on-multiscale-materials-modeling

- 原址：[https://www.mmm12.org/](https://www.mmm12.org/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.mmm12.org/) → 200
- 可复查来源：[1](https://www.mmm12.org/)

### 144. mmm12-12th-international-conference-on-multiscale-materials-modeling

- 原址：[https://www.mmm12.org/symposia/](https://www.mmm12.org/symposia/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.mmm12.org/symposia/) → 200
- 可复查来源：[1](https://www.mmm12.org/symposia/)

### 145. mrs-fall2026

- 原址：[https://www.mrs.org/meetings-events/annual-meetings](https://www.mrs.org/meetings-events/annual-meetings)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.mrs.org/meetings-events/annual-meetings) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/meetings-events/annual-meetings) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.mrs.org%2Fmeetings-events%2Fannual-meetings&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.mrs.org/meetings-events/annual-meetings)

### 146. mrs-fall2026

- 原址：[https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.mrs.org/meetings-events/annual-meetings) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.mrs.org%2Fmeetings-events%2Fannual-meetings%2F2026-mrs-fall-meeting%2Fcall-for-abstracts&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → <urlopen error [Errno 61] Connection refused>
- 可复查来源：[1](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/call-for-abstracts)

### 147. mrs-spring2027

- 原址：[https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.mrs.org%2Fmeetings-events%2Fannual-meetings%2F2027-mrs-spring-meeting-exhibit&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit)

### 148. mrs-spring2027

- 原址：[https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.mrs.org%2Fmeetings-events%2Fannual-meetings%2F2027-mrs-spring-meeting-exhibit%2Fcall-for-abstracts&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts)

### 149. mrs-spring2027

- 原址：[https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit](https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit/call-for-abstracts) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.mrs.org/meetings-events/annual-meetings/2027-mrs-spring-meeting-exhibit) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.mrs.org%2Fmeetings-events%2Fannual-meetings%2Farchive%2Fmeeting%2F2027-mrs-spring-meeting-exhibit&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.mrs.org/meetings-events/annual-meetings/archive/meeting/2027-mrs-spring-meeting-exhibit)

### 150. northern-lights-deep-learning-conference-2027

- 原址：[https://www.nldl.org/](https://www.nldl.org/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.nldl.org/) → 200
- 可复查来源：[1](https://www.nldl.org/)

### 151. northern-lights-deep-learning-conference-2027

- 原址：[https://www.nldl.org/submission/call-for-papers](https://www.nldl.org/submission/call-for-papers)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.nldl.org/submission/call-for-papers) → 200
- 可复查来源：[1](https://www.nldl.org/submission/call-for-papers)

### 152. camml2027

- 原址：[https://www.psdi.ac.uk/event/camml-2027/](https://www.psdi.ac.uk/event/camml-2027/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.psdi.ac.uk/event/camml-2027/) → 200
- 可复查来源：[1](https://www.psdi.ac.uk/event/camml-2027/)

### 153. the-future-of-materials-discovery

- 原址：[https://www.royalsociety.org/science-events-and-lectures/2027/03/future-of-materials-discovery/](https://www.royalsociety.org/science-events-and-lectures/2027/03/future-of-materials-discovery/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.royalsociety.org/science-events-and-lectures/2027/03/future-of-materials-discovery/) → 200
- 可复查来源：[1](https://www.royalsociety.org/science-events-and-lectures/2027/03/future-of-materials-discovery/)

### 154. mc18-18th-international-conference-on-materials-chemistry

- 原址：[https://www.rsc.org/events/find-an-event/18th-international-conference-on-materials-chemistry-%28mc18%29](https://www.rsc.org/events/find-an-event/18th-international-conference-on-materials-chemistry-%28mc18%29)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.rsc.org/events/find-an-event/18th-international-conference-on-materials-chemistry-%28mc18%29) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/18th-international-conference-on-materials-chemistry-%28mc18%29) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2F18th-international-conference-on-materials-chemistry-%2528mc18%2529&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.rsc.org/events/find-an-event/18th-international-conference-on-materials-chemistry-%28mc18%29)

### 155. automated-intelligent-chemistry-2026

- 原址：[https://www.rsc.org/events/find-an-event/automated-intelligent-chemistry](https://www.rsc.org/events/find-an-event/automated-intelligent-chemistry)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.rsc.org/events/find-an-event/automated-intelligent-chemistry) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/automated-intelligent-chemistry) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Fautomated-intelligent-chemistry&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → <urlopen error [Errno 61] Connection refused>
- 可复查来源：[1](https://www.rsc.org/events/find-an-event/automated-intelligent-chemistry)、[2](https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026)

### 156. characterisation-of-catalysts

- 原址：[https://www.rsc.org/events/find-an-event/characterisation-of-catalysts](https://www.rsc.org/events/find-an-event/characterisation-of-catalysts)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.rsc.org/events/find-an-event/characterisation-of-catalysts) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/characterisation-of-catalysts) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Fcharacterisation-of-catalysts&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.rsc.org/events/find-an-event/characterisation-of-catalysts)

### 157. chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning

- 原址：[https://www.rsc.org/events/find-an-event/chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning](https://www.rsc.org/events/find-an-event/chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.rsc.org/events/find-an-event/chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.rsc.org/getContentAsset/c2e08575-581a-45fd-9375-1307e0333e1d/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Fchemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → <urlopen error [Errno 61] Connection refused>
- 可复查来源：[1](https://www.rsc.org/events/find-an-event/chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning)、[2](https://www.rsc.org/getContentAsset/c2e08575-581a-45fd-9375-1307e0333e1d/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en)

### 158. digital-chemistry2027

- 原址：[https://www.rsc.org/events/find-an-event/digital-chemistry-discovery-faraday-discussion](https://www.rsc.org/events/find-an-event/digital-chemistry-discovery-faraday-discussion)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.rsc.org/events/find-an-event/digital-chemistry-discovery-faraday-discussion) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/digital-chemistry-discovery-faraday-discussion) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Fdigital-chemistry-discovery-faraday-discussion&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.rsc.org/events/find-an-event/digital-chemistry-discovery-faraday-discussion)

### 159. materials-chemistry-poster-symposium-2026

- 原址：[https://www.rsc.org/events/find-an-event/materials-chemistry-poster-symposium](https://www.rsc.org/events/find-an-event/materials-chemistry-poster-symposium)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.rsc.org/events/find-an-event/materials-chemistry-poster-symposium) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/materials-chemistry-poster-symposium) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Fmaterials-chemistry-poster-symposium&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.rsc.org/events/find-an-event/materials-chemistry-poster-symposium)

### 160. rsc-first-2026-ai-in-chemistry

- 原址：[https://www.rsc.org/events/find-an-event/rsc-first-2026-ai-in-chemistry](https://www.rsc.org/events/find-an-event/rsc-first-2026-ai-in-chemistry)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.rsc.org/events/find-an-event/rsc-first-2026-ai-in-chemistry) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/rsc-first-2026-ai-in-chemistry) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.rscfirst.org.cn/en/web/index/36624_3190136) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://rscfirst.org.cn/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Frsc-first-2026-ai-in-chemistry&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.rsc.org/events/find-an-event/rsc-first-2026-ai-in-chemistry)、[2](https://www.rscfirst.org.cn/en/web/index/36624_3190136)、[3](https://rscfirst.org.cn/)

### 161. rsc-theoretical-chemistry-group-graduate-student-meeting

- 原址：[https://www.rsc.org/events/find-an-event/rsc-theoretical-chemistry-group-graduate-student-meeting](https://www.rsc.org/events/find-an-event/rsc-theoretical-chemistry-group-graduate-student-meeting)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：HTTP Error 403: Forbidden；本次未获得覆盖全部受影响字段的可读取官方替代内容。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.rsc.org/events/find-an-event/rsc-theoretical-chemistry-group-graduate-student-meeting) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.rsc.org/events/find-an-event/rsc-theoretical-chemistry-group-graduate-student-meeting) → 403；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.rsc.org%2Fevents%2Ffind-an-event%2Frsc-theoretical-chemistry-group-graduate-student-meeting&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：本次未取得可核实的正文，原址保留以供复查。

### 162. 历史来源（当前无活动关联）

- 原址：[https://www.rsc.org/getContentAsset/711ed80e-95d2-4169-905d-afa1bb46dab5/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en](https://www.rsc.org/getContentAsset/711ed80e-95d2-4169-905d-afa1bb46dab5/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en)
- 原问题：官网活动页的Speakers链接已更换资源ID；新PDF已成功完整下载（12页），旧链接确认为404。
- 本次结果：alternative；内容核实范围：False；日常恢复：否。
- 未解决：HTTP Error 404: Not Found；可用其他官方入口只覆盖其明确发布的字段，不能证明原页专有内容已核实。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.rsc.org/getContentAsset/711ed80e-95d2-4169-905d-afa1bb46dab5/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en) → HTTP Error 404: Not Found；[bounded curl HTTP/1.1 retry](https://www.rsc.org/getContentAsset/711ed80e-95d2-4169-905d-afa1bb46dab5/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en) → 404；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.rsc.org/getContentAsset/c2e08575-581a-45fd-9375-1307e0333e1d/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en) → 200
- 可复查来源：[1](https://www.rsc.org/getContentAsset/c2e08575-581a-45fd-9375-1307e0333e1d/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en)

### 163. rsc-first-2026-ai-in-chemistry

- 原址：[https://www.rscfirst.org.cn/en/web/index/36624_3190136](https://www.rscfirst.org.cn/en/web/index/36624_3190136)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.rscfirst.org.cn/en/web/index/36624_3190136) → 200
- 可复查来源：[1](https://www.rscfirst.org.cn/en/web/index/36624_3190136)

### 164. applications-of-artificial-intelligence-to-process-chemistry-scientific-update

- 原址：[https://www.scientificupdate.com/training/applications-of-artificial-intelligence-to-process-chemistry/2-november-2026/](https://www.scientificupdate.com/training/applications-of-artificial-intelligence-to-process-chemistry/2-november-2026/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.scientificupdate.com/training/applications-of-artificial-intelligence-to-process-chemistry/2-november-2026/) → 200
- 可复查来源：[1](https://www.scientificupdate.com/training/applications-of-artificial-intelligence-to-process-chemistry/2-november-2026/)

### 165. siam-ms27-mathematical-aspects-of-materials-science

- 原址：[https://www.siam.org/conferences-events/siam-conferences/ms27/](https://www.siam.org/conferences-events/siam-conferences/ms27/)
- 原问题：HTTP Error 403: Forbidden
- 本次结果：manual；内容核实范围：listed facts only；日常恢复：否。
- 未解决：Proposal 明确延期至 2026-11-02；保留下方旧 10 月 5 日文案差异记录。未给新的 proposal 钟点；自动抓取仍 403。 历史未解事项：未恢复自动抓取；延期公告没有独立确认新的精确钟点，不将旧截止的 23:59 沿用到新日期。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.siam.org/conferences-events/siam-conferences/ms27/) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.siam.org/conferences-events/siam-conferences/ms27/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.siam.org%2Fconferences-events%2Fsiam-conferences%2Fms27%2F&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200；[rendered browser / official web reader; 2026-11-01](https://www.siam.org/conferences-events/siam-conferences/ms27/) → True
- 可复查来源：[1](https://www.siam.org/conferences-events/siam-conferences/ms27/)

### 166. siam-ms27-mathematical-aspects-of-materials-science

- 原址：[https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/)
- 原问题：HTTP Error 403: Forbidden
- 本次结果：manual；内容核实范围：listed facts only；日常恢复：否。
- 未解决：普通摘要明确为 2026-11-02 23:59 Eastern Time；补充 America/New_York 精度。Proposal 延期仅日期明确，不沿用旧截止钟点。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.siam.org/conferences-events/siam-conferences/ms27/) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.siam.org%2Fconferences-events%2Fsiam-conferences%2Fms27%2Fsubmissions%2F&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200；[rendered browser / official web reader; 2026-11-01](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/) → True
- 可复查来源：[1](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/)

### 167. automated-intelligent-chemistry-2026

- 原址：[https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026](https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026) → 200
- 可复查来源：[1](https://www.soci.org/events/young-chemists-panel/2026/automated-intelligent-chemistry-2026)

### 168. materiais-2027-xxiii-portuguese-materials-congress-xiv-international-symposium-on-materials

- 原址：[https://www.spmateriais.pt/eventos/materiais-2027](https://www.spmateriais.pt/eventos/materiais-2027)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.spmateriais.pt/eventos/materiais-2027) → 200
- 可复查来源：[1](https://www.spmateriais.pt/eventos/materiais-2027)

### 169. aems-2027

- 原址：[https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx)
- 原问题：HTTP Error 403: Forbidden
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.tms.org%2FSpecialtyCongress2027%2FSpecialtyCongress2027%2FAEMS2027%2FAEMS2027--Technical-Topics.aspx&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx)

### 170. aems-2027

- 原址：[https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx)
- 原问题：HTTP Error 403: Forbidden
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。 历史未解事项：未发现覆盖该会议日期及组织委员会的可直接抓取官方镜像、PDF 或 RSS；自动抓取仍 403。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.tms.org%2FSpecialtyCongress2027%2FSpecialtyCongress2027%2FAEMS2027%2Fdefault.aspx&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx)

### 171. tms2027

- 原址：[https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx)
- 原问题：HTTP Error 403: Forbidden
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。 历史未解事项：完整 FAQ 仍无可直接抓取替代，原站和 archive 域均 403。7 月 15 日延期已补上官方公告链接并核实为历史日期；未公布的精确钟点仍不填写。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.programmaster.org/TMS2027) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.tms.org%2FTMS2027%2FTMS2027%2FAttendee-Toolbox%2FFrequently_Asked_Questions.aspx&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx)、[2](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[3](https://www.programmaster.org/TMS2027)、[4](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[5](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[6](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx)、[7](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png)、[8](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png)、[9](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png)、[10](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)

### 172. tms2027

- 原址：[https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx)
- 原问题：HTTP Error 403: Forbidden
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。 历史未解事项：下载文件恢复不代表 Organizer Tools HTML 已解除 403；这些素材不能用于证明日期或讲者。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.programmaster.org/TMS2027) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.tms.org%2FTMS2027%2FTMS2027%2FAttendee-Toolbox%2FOrganizer-Tools.aspx&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx)、[2](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx)、[3](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png)、[4](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png)、[5](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png)、[6](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[7](https://www.programmaster.org/TMS2027)、[8](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[9](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[10](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)

### 173. tms2027

- 原址：[https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx)
- 原问题：HTTP Error 403: Forbidden
- 本次结果：success；内容核实范围：False；日常恢复：否。
- 未解决：本次原址已可读取（部分仅 curl HTTP/1.1）；现有日常 urllib 路径尚未证明恢复，保留自动失败/不可核实状态和未核实字段。 历史未解事项：ProgramMaster 是专题清单，不能当作尚未发布的逐场最终会议日程。原网站入口 403 仍保留审计。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.programmaster.org/TMS2027) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx) → HTTP Error 403: Forbidden；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm) → 200；[official alternative / cache index lookup (index success is not evidence of a snapshot)](https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.tms.org%2FTMS2027%2FTMS2027%2FProgramming%2FTMS2027_Technical_Program.aspx&output=json&filter=statuscode%3A200&collapse=timestamp%3A6&from=2026) → 200
- 可复查来源：[1](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx)、[2](https://www.programmaster.org/TMS2027)、[3](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[4](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)、[5](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)、[6](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx)、[7](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png)、[8](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png)、[9](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png)、[10](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)

### 174. cpm10

- 原址：[https://www.tvt.tf.fau.de/ankuendigung-der-cpm-10-internationaler-workshop-zur-charakterisierung-poroeser-materialien-kommt-2027-nach-deutschland/](https://www.tvt.tf.fau.de/ankuendigung-der-cpm-10-internationaler-workshop-zur-charakterisierung-poroeser-materialien-kommt-2027-nach-deutschland/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.tvt.tf.fau.de/ankuendigung-der-cpm-10-internationaler-workshop-zur-charakterisierung-poroeser-materialien-kommt-2027-nach-deutschland/) → 200
- 可复查来源：[1](https://www.tvt.tf.fau.de/ankuendigung-der-cpm-10-internationaler-workshop-zur-charakterisierung-poroeser-materialien-kommt-2027-nach-deutschland/)

### 175. new-frontiers-in-nonequilibrium-statistical-physics-of-glasses

- 原址：[https://www.uibk.ac.at/en/th-physik/bio-nano/events/](https://www.uibk.ac.at/en/th-physik/bio-nano/events/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.uibk.ac.at/en/th-physik/bio-nano/events/) → 200
- 可复查来源：[1](https://www.uibk.ac.at/en/th-physik/bio-nano/events/)

### 176. uk-ai-research-symposium-ukairs-2026

- 原址：[https://www.ukairs.ac.uk/Home/Welcome](https://www.ukairs.ac.uk/Home/Welcome)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.ukairs.ac.uk/Home/Welcome) → 200
- 可复查来源：[1](https://www.ukairs.ac.uk/Home/Welcome)

### 177. uk-ai-research-symposium-ukairs-2026

- 原址：[https://www.ukairs.ac.uk/i/Registration](https://www.ukairs.ac.uk/i/Registration)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.ukairs.ac.uk/i/Registration) → 200
- 可复查来源：[1](https://www.ukairs.ac.uk/i/Registration)

### 178. uk-ai-research-symposium-ukairs-2026

- 原址：[https://www.ukairs.ac.uk/i/SubmissionThemes](https://www.ukairs.ac.uk/i/SubmissionThemes)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.ukairs.ac.uk/i/SubmissionThemes) → 200
- 可复查来源：[1](https://www.ukairs.ac.uk/i/SubmissionThemes)

### 179. ukpormat2027

- 原址：[https://www.ukpormat.com/](https://www.ukpormat.com/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.ukpormat.com/) → 200
- 可复查来源：[1](https://www.ukpormat.com/)

### 180. watoc-2028-14th-triennial-congress

- 原址：[https://www.watoc.net/watoc.congress.html](https://www.watoc.net/watoc.congress.html)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://www.watoc.net/watoc.congress.html) → 200
- 可复查来源：[1](https://www.watoc.net/watoc.congress.html)

### 181. zmpc2027

- 原址：[https://zmpc.org/](https://zmpc.org/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://zmpc.org/) → 200
- 可复查来源：[1](https://zmpc.org/)

### 182. zmpc2027

- 原址：[https://zmpc.org/call-for-abstracts/](https://zmpc.org/call-for-abstracts/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://zmpc.org/call-for-abstracts/) → 200
- 可复查来源：[1](https://zmpc.org/call-for-abstracts/)

### 183. zmpc2027

- 原址：[https://zmpc.org/dates/](https://zmpc.org/dates/)
- 原问题：Source fingerprint upgraded to include previously ignored clock times; review the current published dates and exact times before clearing this flag.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:07:19+00:00
- 尝试：[existing monitor fetch_sources; focused review (not daily updater)](https://zmpc.org/dates/) → 200
- 可复查来源：[1](https://zmpc.org/dates/)

### 184. aichemy-annual-conference-2027

- 原址：[https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522)
- 原问题：The read operation timed out
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:12:38+00:00
- 尝试：[additional official entry tested during fallback review](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522) → The read operation timed out；[bounded curl HTTP/1.1 retry](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522) → 200
- 可复查来源：[1](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522)

### 185. eazc2027

- 原址：[https://www.eazc2027.com/index/page.html?id=1835](https://www.eazc2027.com/index/page.html?id=1835)
- 原问题：Official source returned no readable page content.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：Official source returned no readable page content.；本次未获得覆盖全部受影响字段的可读取官方替代内容。
- 核实/尝试日期：2026-11-01T18:12:38+00:00
- 尝试：[additional official entry tested during fallback review](https://www.eazc2027.com/index/page.html?id=1835) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://www.eazc2027.com/index/page.html?id=1835) → 200
- 可复查来源：本次未取得可核实的正文，原址保留以供复查。

### 186. mrs-fall2026

- 原址：[https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs)
- 原问题：HTTP Error 403: Forbidden
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:12:38+00:00
- 尝试：[additional official entry tested during fallback review](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs) → 200
- 可复查来源：[1](https://www.mrs.org/meetings-events/annual-meetings/2026-mrs-fall-meeting/meeting-chairs)

### 187. mrs-fall2026

- 原址：[https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting](https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting)
- 原问题：HTTP Error 403: Forbidden
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：来源可读，但现有 1 个活动关联仍需完整核对截止钟点/时区与人员；本次保留原人工标记。
- 核实/尝试日期：2026-11-01T18:12:38+00:00
- 尝试：[additional official entry tested during fallback review](https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting) → HTTP Error 403: Forbidden；[bounded curl HTTP/1.1 retry](https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting) → 200
- 可复查来源：[1](https://www.mrs.org/publications-digital-content/news/press-room/press-release/2026/08/28/dierk-raabe-named-fred-kavli-distinguished-lecturer-in-materials-science-for-2026-mrs-fall-meeting)

### 188. eazc2027

- 原址：[https://www.eazc2027.com/index/page.html?id=1843](https://www.eazc2027.com/index/page.html?id=1843)
- 原问题：Official source returned no readable page content.
- 本次结果：manual；内容核实范围：False；日常恢复：否。
- 未解决：Official source returned no readable page content.；本次未获得覆盖全部受影响字段的可读取官方替代内容。
- 核实/尝试日期：2026-11-01T18:12:38+00:00
- 尝试：[additional official entry tested during fallback review](https://www.eazc2027.com/index/page.html?id=1843) → Official source returned no readable page content.；[bounded curl HTTP/1.1 retry](https://www.eazc2027.com/index/page.html?id=1843) → 200
- 可复查来源：本次未取得可核实的正文，原址保留以供复查。

## 验证与发布

PASS: npm test (109 JavaScript + 40 Python); python3 scripts/validate_catalog.py; git diff --check. No emails sent.
本次数据提交：71dad2e13013dd0b91bccd0e3cceae75bf472991，已推送 origin/main。

[发布工作流 41335479003](https://github.com/vickie02736/conference-reminder/actions/runs/41335479003) 已完成，conclusion=success。线上 data/conferences.json HTTP 200，与该提交的本地文件逐字节相同，SHA-256：64b3659b0918a7aa69195e4c685d97b31b5be1aefc11e9fbb2e3205d4a24b035。推送触发的发布跳过了已完成的日常来源更新与发现步骤。

处置分类为原址本次可读 15、可用替代 7、待人工 166、无可用入口且归为 failed 0；其中原址单次成功不等于自动抓取恢复，稳定恢复仍为 0。原每日来源状态保留 225 checked、26 unverifiable、4 failed；这些状态包含仍保留的旧地址，不能与互斥处置分类相加。

166 条待人工的逐字段语义核对尚未完成；本次对所有记录都作了读取、有限重试或替代入口检查，但不以此清除待人工标记。上方每条均附原问题、本次尝试、具体未解原因和链接；JSON 还保存受影响的既有里程碑、尚未从当前文本确认的人员姓名和最近三次日常检查状态。
