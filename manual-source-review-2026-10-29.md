# 待人工来源逐条复核（2026-10-29）

复核时间：2026-10-29T12:26:53Z。本次完整处理原审计的13条待人工记录。

最终处置：原址恢复0；找到可用替代来源7；仍需人工6；无信息可恢复的彻底失败0。

注意：机器抓取状态另列。2条 AIchemy API 的 curl 下载成功，但当前 urllib 监测仍连接重置；InterPore API 虽恢复，截止日期冲突尚未解决。原始403/超时记录保留。

## 原记录 4：AIchemy Annual Conference 2027

最终状态：可用替代来源；自动抓取：monitor_verified。

原址：[官方页面](https://aichemy.ac.uk/event/aichemy-annual-conference-2027/)

原因与处理：原活动页连接重置；发现并下载同站 WordPress 官方事件 API，正文和事件元数据可读。

核对结果：2027-04-14 至 2027-04-15，Imperial College London；注册和海报征集尚未公布截止日期。

剩余限制：全天事件的 00:00/23:59:59 是系统占位时间，未写入精确提醒。

最终来源：

- [可验证来源 1](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522)

逐次尝试：

- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/event/aichemy-annual-conference-2027/", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/event/aichemy-annual-conference-2027/feed/", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/event/aichemy-annual-conference-2027/?ical=1", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/our-events/", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events?per_page=100", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events?per_page=20&_fields=id,slug,link,title,meta", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/?rest_route=/wp/v2/tribe_events&per_page=100", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522", "ok": true, "type": "application/json", "size": 17540}
- {"method": "existing daily monitor fetch_sources", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14522", "ok": true, "content_type": "application/json", "http_status": 200}

## 原记录 5：Introduction to Machine Learning for Chemists Workshop

最终状态：可用替代来源；自动抓取：curl_verified_monitor_reset。

原址：[官方页面](https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/)

原因与处理：原页、RSS、集合 API 和 slug API 连接重置；浏览器页头提供事件 ID，curl HTTP/1.1 下载该 ID 的官方 API 成功。

核对结果：2027-01-22，Imperial College London；正文与 API 元数据写 10:00–16:00，详细议程却写 16:30 Close。

剩余限制：结束时间冲突仍保留，里程碑维持日期精度；现有 urllib 监测再次连接重置，不能称日常抓取已稳定。

最终来源：

- [可验证来源 1](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552)

逐次尝试：

- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/feed/", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/?ical=1", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/our-events/", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events?per_page=100", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events?per_page=20&_fields=id,slug,link,title,meta", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/?rest_route=/wp/v2/tribe_events&per_page=100", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "existing daily monitor fetch_sources", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552", "ok": false, "message": "[Errno 54] Connection reset by peer"}
- {"method": "curl HTTP/1.1 with project user agent", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/14552", "ok": true, "http_status": 200, "size": 13852, "sha256": "72677543383df75a644b9539397baa6ab587b4264d1bf1450777dfcaa23b5cc3"}

## 原记录 6：AIchemy Winter School 2026

最终状态：可用替代来源；自动抓取：curl_verified_monitor_reset。

原址：[官方页面](https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/)

原因与处理：原页及多个替代入口连接重置；浏览器页头提供事件 ID，curl HTTP/1.1 下载官方 API 成功。

核对结果：2026-11-23 至 2026-11-27，Liverpool；申请已关闭，申请截止 2026-08-24；7 位讲者和具名组织委员会可读。

剩余限制：现有 urllib 监测仍连接重置；全天事件元数据不作精确时刻使用。

最终来源：

- [可验证来源 1](https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897)

逐次尝试：

- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/feed/", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/?ical=1", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/our-events/", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events?per_page=100", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events?per_page=20&_fields=id,slug,link,title,meta", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/?rest_route=/wp/v2/tribe_events&per_page=100", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "direct HTTP or CDX lookup", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897", "ok": false, "error": "[Errno 54] Connection reset by peer"}
- {"method": "existing daily monitor fetch_sources", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897", "ok": false, "message": "[Errno 54] Connection reset by peer"}
- {"method": "curl HTTP/1.1 with project user agent", "url": "https://aichemy.ac.uk/wp-json/wp/v2/tribe_events/7897", "ok": true, "http_status": 200, "size": 33392, "sha256": "26a2bf86a5401d2d361663346f8e0b4f955ca52ce380326f9bb08b0bf9840477"}

## 原记录 10：InterPore2027 submission

最终状态：仍需人工；自动抓取：monitor_verified_conflict_pending。

原址：[官方页面](https://event.fourwaves.com/interpore2027/submission)

原因与处理：原页仅有 Nuxt 外壳；从公开脚本定位无需登录的官方 API，并用真实浏览器读取动态投稿页。抓取问题已绕过，但内容冲突仍在。

核对结果：动态页显示 2027-01-12；API submissionEndDate=2027-01-12T07:00:00Z，event.timeZone=America/Buenos_Aires，换算后仍为 1 月 12 日；Important Dates 页写 1 月 11 日。

剩余限制：没有官方更正说明可确定哪个日期优先；不能把时差推测当作解决。保留两候选日期，不启用单一截止提醒。

最终来源：

- [可验证来源 1](https://api.fourwaves.com/api/events/interpore2027)
- [可验证来源 2](https://event.fourwaves.com/interpore2027/submission)
- [可验证来源 3](https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a)

逐次尝试：

- {"method": "direct HTTP or CDX lookup", "url": "https://event.fourwaves.com/interpore2027/submission", "ok": true, "type": "text/html", "size": 17561}
- {"method": "direct HTTP or CDX lookup", "url": "https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a", "ok": true, "type": "text/html", "size": 46408}
- {"method": "direct HTTP or CDX lookup", "url": "https://cdn.fourwaves.com/assets/event_website/3b3c594dce51d790cd702a9dfb08fdc70db4dceb/_nuxt/CU8QvzIx.js", "ok": true, "type": "text/javascript", "size": 719698}
- {"method": "direct HTTP or CDX lookup", "url": "https://api.fourwaves.com/api/events/interpore2027", "ok": true, "type": "application/json", "size": 44829}
- {"method": "existing daily monitor fetch_sources", "url": "https://api.fourwaves.com/api/events/interpore2027", "ok": true, "content_type": "application/json", "http_status": 200}
- {"method": "rendered browser / official web search and read", "url": "https://event.fourwaves.com/interpore2027/submission", "result": "动态页显示 2027-01-12；API submissionEndDate=2027-01-12T07:00:00Z，event.timeZone=America/Buenos_Aires，换算后仍为 1 月 12 日；Important Dates 页写 1 月 11 日。"}

## 原记录 11：MM27 Molecular Modelling 2027

最终状态：可用替代来源；自动抓取：monitor_verified。

原址：[官方页面](https://uon-comp-chem.github.io/mm2027/)

原因与处理：HTTP 200 的 React 页面没有正文；从 GitHub Pages 对应官方仓库定位 App.jsx，并与当前部署的 JS bundle 核对。

核对结果：2027-09-26 至 2027-09-29，Newcastle, Australia；Alister Page 主席等6位委员会成员。

剩余限制：摘要、注册、节目仍为 Details Coming Soon，不填造日期；源文件由哈希监测，尚不支持自动抽取事实。

最终来源：

- [可验证来源 1](https://raw.githubusercontent.com/UON-comp-chem/mm2027/main/src/App.jsx)
- [可验证来源 2](https://github.com/UON-comp-chem/mm2027/blob/main/src/App.jsx)

逐次尝试：

- {"method": "direct HTTP or CDX lookup", "url": "https://uon-comp-chem.github.io/mm2027/", "ok": true, "type": "text/html", "size": 485}
- {"method": "direct HTTP or CDX lookup", "url": "https://api.github.com/repos/UoN-Comp-Chem/mm2027/contents/", "ok": true, "type": "application/json", "size": 7334}
- {"method": "direct HTTP or CDX lookup", "url": "https://api.github.com/repos/UoN-Comp-Chem/mm2027/git/trees/main?recursive=1", "ok": true, "type": "application/json", "size": 1208236}
- {"method": "direct HTTP or CDX lookup", "url": "https://api.github.com/repos/UoN-Comp-Chem/mm2027/contents/src/App.jsx", "ok": true, "type": "application/json", "size": 18369}
- {"method": "direct HTTP or CDX lookup", "url": "https://raw.githubusercontent.com/UON-comp-chem/mm2027/main/src/App.jsx", "ok": true, "type": "text/plain", "size": 12755}
- {"method": "existing daily monitor fetch_sources", "url": "https://raw.githubusercontent.com/UON-comp-chem/mm2027/main/src/App.jsx", "ok": true, "content_type": "text/plain", "http_status": 200}

## 原记录 14：IZC22 organization

最终状态：仍需人工；自动抓取：blocked_403_content_verified。

原址：[官方页面](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization)

原因与处理：原址持续 403；检索组织方 IZA 入口及网页缓存，Wayback CDX 对该 URL 的 2026 年记录为空。网页检索工具可读取官方正文。

核对结果：IZA 与 AIChE 合作组织；2028-07-23 至 2028-07-28，Philadelphia。

剩余限制：未找到能直接下载且覆盖原页组织信息的官方镜像、PDF 或 RSS；现有自动抓取仍 403。

最终来源：

- [可验证来源 1](https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization)

逐次尝试：

- {"method": "direct HTTP or CDX lookup", "url": "https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization", "ok": false, "error": "HTTP Error 403: Forbidden"}
- {"method": "direct HTTP or CDX lookup", "url": "https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.aiche.org%2Fconferences%2Finternational-zeolite-conference%2F2028%2Fabout-conference-organization&output=json&filter=statuscode:200&filter=mimetype:text/html&collapse=timestamp:6&filter=timestamp:2026.*", "ok": true, "type": "application/json", "size": 3}
- {"method": "rendered browser / official web search and read", "url": "https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization", "result": "IZA 与 AIChE 合作组织；2028-07-23 至 2028-07-28，Philadelphia。"}

## 原记录 15：IZC22 Program Committee

最终状态：仍需人工；自动抓取：blocked_403_content_verified。

原址：[官方页面](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee)

原因与处理：原址持续 403；检索官方委员会页面和缓存，Wayback CDX 对该 URL 的 2026 年记录为空。网页工具可读官方委员名单。

核对结果：执行规划委员会含 Jeffrey Rimer、Dongxia Liu、Tina Nenoff、Rajamani Gounder、Michele Sarazen；与已有组织信息核对。

剩余限制：未找到覆盖完整委员会名单的可下载官方镜像/PDF/RSS；现有自动抓取仍 403。

最终来源：

- [可验证来源 1](https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee)

逐次尝试：

- {"method": "direct HTTP or CDX lookup", "url": "https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee", "ok": false, "error": "HTTP Error 403: Forbidden"}
- {"method": "direct HTTP or CDX lookup", "url": "https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.aiche.org%2Fconferences%2Finternational-zeolite-conference%2F2028%2Fprogram-committee&output=json&filter=statuscode:200&filter=mimetype:text/html&collapse=timestamp:6&filter=timestamp:2026.*", "ok": true, "type": "application/json", "size": 3}
- {"method": "rendered browser / official web search and read", "url": "https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee", "result": "执行规划委员会含 Jeffrey Rimer、Dongxia Liu、Tina Nenoff、Rajamani Gounder、Michele Sarazen；与已有组织信息核对。"}

## 原记录 20：SIAM MS27

最终状态：仍需人工；自动抓取：blocked_403_content_verified。

原址：[官方页面](https://www.siam.org/conferences-events/siam-conferences/ms27/)

原因与处理：原址 403；主页和投稿页通过网页工具核对；Wayback 找到 2026-01-09 快照，但重放返回 429，且旧快照不能证明当前截止。

核对结果：会议 2027-05-02 至 2027-05-05，Bellevue；顶部明确的延期公告将 minisymposium proposal 截止延至 2026-11-02，优先于下方旧 10 月 5 日文案。

剩余限制：未恢复自动抓取；延期公告没有独立确认新的精确钟点，不将旧截止的 23:59 沿用到新日期。

最终来源：

- [可验证来源 1](https://www.siam.org/conferences-events/siam-conferences/ms27/)
- [可验证来源 2](https://www.siam.org/conferences-events/siam-conferences/ms27/submissions/)

逐次尝试：

- {"method": "direct HTTP or CDX lookup", "url": "https://www.siam.org/conferences-events/siam-conferences/ms27/", "ok": false, "error": "HTTP Error 403: Forbidden"}
- {"method": "direct HTTP or CDX lookup", "url": "https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.siam.org%2Fconferences-events%2Fsiam-conferences%2Fms27%2F&output=json&filter=statuscode:200&filter=mimetype:text/html&collapse=timestamp:6&filter=timestamp:2026.*", "ok": true, "type": "application/json", "size": 277}
- {"method": "direct HTTP or CDX lookup", "url": "https://web.archive.org/web/20260109003404id_/https://www.siam.org/conferences-events/siam-conferences/ms27/", "ok": false, "error": "HTTP Error 429: Too Many Requests"}
- {"method": "rendered browser / official web search and read", "url": "https://www.siam.org/conferences-events/siam-conferences/ms27/", "result": "会议 2027-05-02 至 2027-05-05，Bellevue；顶部明确的延期公告将 minisymposium proposal 截止延至 2026-11-02，优先于下方旧 10 月 5 日文案。"}

## 原记录 21：AEMS 2027

最终状态：仍需人工；自动抓取：blocked_403_content_verified。

原址：[官方页面](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx)

原因与处理：原站及 archive.tms.org 相同页面均 403；官方首页与 Technical Topics 通过网页工具交叉核对；Wayback CDX 未返回该页 2026 年快照。

核对结果：2027-06-13 至 2027-06-17，Chicago；摘要 2026-12-01，优惠注册 2027-04-30；主席 Aaron Stebner、编程主席 Sean Donegan。

剩余限制：未发现覆盖该会议日期及组织委员会的可直接抓取官方镜像、PDF 或 RSS；自动抓取仍 403。

最终来源：

- [可验证来源 1](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx)
- [可验证来源 2](https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx)

逐次尝试：

- {"method": "direct HTTP or CDX lookup", "url": "https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx", "ok": false, "error": "HTTP Error 403: Forbidden"}
- {"method": "direct HTTP or CDX lookup", "url": "https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/AEMS2027--Technical-Topics.aspx", "ok": false, "error": "HTTP Error 403: Forbidden"}
- {"method": "direct HTTP or CDX lookup", "url": "https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.tms.org%2FSpecialtyCongress2027%2FSpecialtyCongress2027%2FAEMS2027%2Fdefault.aspx&output=json&filter=statuscode:200&filter=mimetype:text/html&collapse=timestamp:6&filter=timestamp:2026.*", "ok": true, "type": "application/json", "size": 3}
- {"method": "rendered browser / official web search and read", "url": "https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx", "result": "2027-06-13 至 2027-06-17，Chicago；摘要 2026-12-01，优惠注册 2027-04-30；主席 Aaron Stebner、编程主席 Sean Donegan。"}

## 原记录 22：TMS2027 FAQ

最终状态：仍需人工；自动抓取：blocked_403_content_verified。

原址：[官方页面](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx)

原因与处理：原站及 archive 域同页 403；网页工具可读官方 FAQ，官方专题 CFA PDF 可下载，但只覆盖一个专题，不能充作整个 FAQ。Wayback CDX 无 2026 年快照。 已定位并读取 TMS 官方 LinkedIn 的延期公告，补全此前缺失的原始来源。

核对结果：FAQ 的 2026-07-01 为原始常规摘要截止；TMS 官方 LinkedIn 明确宣布延期至 2026-07-15，故 FAQ 的原日期未同步。当前技术节目的两个后续专题截止不代表常规投稿重开。

剩余限制：完整 FAQ 仍无可直接抓取替代，原站和 archive 域均 403。7 月 15 日延期已补上官方公告链接并核实为历史日期；未公布的精确钟点仍不填写。

最终来源：

- [可验证来源 1](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx)

补充证据（仅覆盖具体内容）：

- [补充来源 1](https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf)
- [补充来源 2](https://www.programmaster.org/TMS2027)
- [补充来源 3](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)
- [补充来源 4](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)

逐次尝试：

- {"method": "direct HTTP or CDX lookup", "url": "https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx", "ok": false, "error": "HTTP Error 403: Forbidden"}
- {"method": "direct HTTP or CDX lookup", "url": "https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf", "ok": true, "type": "application/pdf", "size": 218105}
- {"method": "direct HTTP or CDX lookup", "url": "https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.tms.org%2FTMS2027%2FTMS2027%2FAttendee-Toolbox%2FFrequently_Asked_Questions.aspx&output=json&filter=statuscode:200&filter=mimetype:text/html&collapse=timestamp:6&filter=timestamp:2026.*", "ok": true, "type": "application/json", "size": 3}
- {"method": "rendered browser / official web search and read", "url": "https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx", "result": "FAQ 的 2026-07-01 是原始常规摘要截止；当前技术节目只对 Bladesmithing 和 Student Poster 指定后续截止，不代表全部常规投稿重开。"}

- [TMS 官方延期公告](https://www.linkedin.com/posts/the-minerals-metals-materials-society_tms2027-tmsannualmeeting-activity-7479881986120208384-xxzm)

## 原记录 23：TMS2027 Technical Program

最终状态：可用替代来源；自动抓取：monitor_verified。

原址：[官方页面](https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx)

原因与处理：原站及 archive 域同页 403；跟随官网 ProgramMaster 链接，完整专题目录及两个仍收稿专题的独立页面均可直接抓取。

核对结果：专题目录与会议日期 2027-03-14 至 2027-03-18；Bladesmithing 截止 2026-10-31，Student Poster Contest 截止 2027-01-22。

剩余限制：ProgramMaster 是专题清单，不能当作尚未发布的逐场最终会议日程。原网站入口 403 仍保留审计。

最终来源：

- [可验证来源 1](https://www.programmaster.org/TMS2027)
- [可验证来源 2](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)
- [可验证来源 3](https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5)

逐次尝试：

- {"method": "direct HTTP or CDX lookup", "url": "https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx", "ok": false, "error": "HTTP Error 403: Forbidden"}
- {"method": "direct HTTP or CDX lookup", "url": "https://web.archive.org/cdx/search/cdx?url=https%3A%2F%2Fwww.tms.org%2FTMS2027%2FTMS2027%2FProgramming%2FTMS2027_Technical_Program.aspx&output=json&filter=statuscode:200&filter=mimetype:text/html&collapse=timestamp:6&filter=timestamp:2026.*", "ok": true, "type": "application/json", "size": 3}
- {"method": "existing daily monitor fetch_sources", "url": "https://www.programmaster.org/TMS2027", "ok": true, "content_type": "text/html", "http_status": 200}
- {"method": "existing daily monitor fetch_sources", "url": "https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/5EC2E80056B700DB85258DC4005722AE?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5", "ok": true, "content_type": "text/html", "http_status": 200}
- {"method": "existing daily monitor fetch_sources", "url": "https://www.programmaster.org/PM/PM.nsf/UpcomingSymposia/DE2F65183C807C6885258D90005F3D28?OpenDocument=&ParentUNID=A79798B673220E9885258B13005BB1F5", "ok": true, "content_type": "text/html", "http_status": 200}
- {"method": "rendered browser / official web search and read", "url": "https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx", "result": "专题目录与会议日期 2027-03-14 至 2027-03-18；Bladesmithing 截止 2026-10-31，Student Poster Contest 截止 2027-01-22。"}

## 原记录 24：ARIC Advanced Adsorption Course

最终状态：可用替代来源；自动抓取：monitor_verified。

原址：[官方页面](https://www.carboncapture.eng.ed.ac.uk/ARIC_Course)

原因与处理：原课程页 HTTPS/HTTP/打印入口均超时；Wayback 虽有快照索引，重放 429；找到同一大学的官方报名页面并成功直接抓取。

核对结果：报名页确认 2027-02-16 至 2027-02-18，与课程正文一致；主办者 Stefano Brandani、Enzo Mangano 匹配；最后报名日 2027-02-12。

剩余限制：旧表的 Tuesday 17th/Wednesday 18th/Thursday 19th 与 2026 年星期相符，结合报名页判为旧表未同步（推断）；不把旧日程钟点迁到 2027 年。

最终来源：

- [可验证来源 1](https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027)

逐次尝试：

- {"method": "direct HTTP or CDX lookup", "url": "https://www.carboncapture.eng.ed.ac.uk/ARIC_Course", "ok": false, "error": "<urlopen error timed out>"}
- {"method": "direct HTTP or CDX lookup", "url": "https://www.carboncapture.eng.ed.ac.uk/ARIC_Course?print=1", "ok": false, "error": "<urlopen error timed out>"}
- {"method": "direct HTTP or CDX lookup", "url": "https://web.archive.org/web/20260512062007id_/https://www.carboncapture.eng.ed.ac.uk/ARIC_Course", "ok": false, "error": "HTTP Error 429: Too Many Requests"}
- {"method": "existing daily monitor fetch_sources", "url": "https://www.epay.ed.ac.uk/conferences-and-events/college-of-science-and-engineering/school-of-engineering/aric-advanced-adsorption-course-2027", "ok": true, "content_type": "text/html", "http_status": 200}
- {"method": "rendered browser / official web search and read", "url": "https://www.carboncapture.eng.ed.ac.uk/ARIC_Course", "result": "报名页确认 2027-02-16 至 2027-02-18，与课程正文一致；主办者 Stefano Brandani、Enzo Mangano 匹配；最后报名日 2027-02-12。"}

## 原记录 29：TMS2027 Organizer Tools

最终状态：可用替代来源；自动抓取：monitor_verified。

原址：[官方页面](https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx)

原因与处理：原站及 archive 域页面 403；沿官方页面列出的 archive.tms.org 下载链接，演示模板和三张宣传图全部 HTTP 200。

核对结果：PPTX 模板 328079 字节（ZIP/PK 内容），三张 PNG 分别 619847、620892、1097336 字节；现有监测器复抓均成功。

剩余限制：下载文件恢复不代表 Organizer Tools HTML 已解除 403；这些素材不能用于证明日期或讲者。

最终来源：

- [可验证来源 1](https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx)
- [可验证来源 2](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png)
- [可验证来源 3](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png)
- [可验证来源 4](https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png)

逐次尝试：

- {"method": "direct HTTP or CDX lookup", "url": "https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx", "ok": false, "error": "HTTP Error 403: Forbidden"}
- {"method": "direct HTTP or CDX lookup", "url": "https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx", "ok": true, "type": "application/vnd.openxmlformats-officedocument.presentationml.presentation", "size": 328079}
- {"method": "direct HTTP or CDX lookup", "url": "https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png", "ok": true, "type": "image/png", "size": 619847}
- {"method": "direct HTTP or CDX lookup", "url": "https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png", "ok": true, "type": "image/png", "size": 620892}
- {"method": "direct HTTP or CDX lookup", "url": "https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png", "ok": true, "type": "image/png", "size": 1097336}
- {"method": "existing daily monitor fetch_sources", "url": "https://archive.tms.org/TMS2027/downloads/TMS2027-PPT-Template.pptx", "ok": true, "content_type": "application/vnd.openxmlformats-officedocument.presentationml.presentation", "http_status": 200}
- {"method": "existing daily monitor fetch_sources", "url": "https://archive.tms.org/TMS2027/downloads/TMS2027-Social-JoinMe-Background.png", "ok": true, "content_type": "image/png", "http_status": 200}
- {"method": "existing daily monitor fetch_sources", "url": "https://archive.tms.org/TMS2027/downloads/TMS2027-Social-SeeMyTalk-Background.png", "ok": true, "content_type": "image/png", "http_status": 200}
- {"method": "existing daily monitor fetch_sources", "url": "https://archive.tms.org/TMS2027/downloads/TMS2027-Social-Attending.png", "ok": true, "content_type": "image/png", "http_status": 200}
- {"method": "rendered browser / official web search and read", "url": "https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx", "result": "PPTX 模板 328079 字节（ZIP/PK 内容），三张 PNG 分别 619847、620892、1097336 字节；现有监测器复抓均成功。"}

