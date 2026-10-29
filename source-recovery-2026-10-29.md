# 30条抓取失败处理结果（2026-10-29）

四类互斥，共30条；抓取恢复不等于会议事实全部核实。已保留原失败来源及每次尝试，未恢复的抓取状态标记为failed并附原因。

替代来源: 7；待人工处理: 13；原址恢复: 9；仍失败: 1

## 1. 替代来源 — chemai-2026

原地址：https://ai4science-amsterdam.github.io/news/chemai/

原失败：Official source returned no readable page content.

最终来源：https://www.acnetwork.nl/chemai

结论：已找到并实抓官方替代来源；仅覆盖该来源明确提供的事实，旧来源的专有内容仍保留核实要求。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "Official source returned no readable page content."}
- {"method": "urllib retry", "ok": false, "reason": "Official source returned no readable page content."}
- {"url": "https://ai4science-amsterdam.github.io/news/chemai/", "http_status": "200", "error": "", "ok": false}
- {"method": "official alternative curl retry", "url": "https://www.acnetwork.nl/chemai", "http_status": "200", "error": "", "ok": true, "content_type": "text/html", "text_length": 12500}

## 2. 替代来源 — ai4am-2027-ai-for-advanced-materials

原地址：https://ai4am.net/

原失败：Official source returned no readable page content.

最终来源：https://www.ai4am.net/2027/deadlines.php

结论：已找到并实抓官方替代来源；仅覆盖该来源明确提供的事实，旧来源的专有内容仍保留核实要求。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "Official source returned no readable page content."}
- {"method": "urllib retry", "ok": false, "reason": "Official source returned no readable page content."}
- {"url": "https://ai4am.net/", "http_status": "200", "error": "", "ok": false}
- {"method": "official alternative curl retry", "url": "https://www.ai4am.net/2027/deadlines.php", "http_status": "200", "error": "", "ok": true, "content_type": "text/html", "text_length": 1203}
- {"method": "official alternative curl retry", "url": "https://www.ai4am.net/2027/organisersCommittees.php", "http_status": "200", "error": "", "ok": true, "content_type": "text/html", "text_length": 2644}
- {"method": "official alternative curl retry", "url": "https://www.ai4am.net/2027/speakers.php", "http_status": "200", "error": "", "ok": true, "content_type": "text/html", "text_length": 3403}

## 3. 替代来源 — defects2027

原地址：https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/

原失败：IncompleteRead(7658 bytes read)

最终来源：https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a

结论：已找到并实抓官方替代来源；仅覆盖该来源明确提供的事实，旧来源的专有内容仍保留核实要求。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "IncompleteRead(7658 bytes read)"}
- {"method": "urllib retry", "ok": false, "reason": "[Errno 54] Connection reset by peer"}
- {"url": "https://aichemy.ac.uk/event/computational-methods-for-defects-in-solids-workshop/", "http_status": "200", "error": "curl: (56) Recv failure: Connection reset by peer\n", "ok": false}
- {"method": "official alternative curl retry", "url": "https://onlinesales.admin.cam.ac.uk/conferences-and-events/yusuf-hamied-department-of-chemistry/computational-defect-modelling/computational-defect-modelling-workshop-6-8-january-2027?token=7d13b0a7f6493524e58a324d4b49c16a", "http_status": "200", "error": "", "ok": true, "content_type": "text/html", "text_length": 4716}
- {"method": "official alternative curl retry", "url": "https://psi-k.net/workshops/", "http_status": "200", "error": "", "ok": true, "content_type": "text/html", "text_length": 3217}
- {"method": "official alternative curl retry", "url": "https://psi-k.net/wp-content/uploads/2026/03/2026_Psik_Poster_v1.pdf", "http_status": "200", "error": "", "ok": true, "content_type": "application/pdf", "text_length": 322346}

## 4. 待人工处理 — aichemy-annual-conference-2027

原地址：https://aichemy.ac.uk/event/aichemy-annual-conference-2027/

原失败：IncompleteRead(7658 bytes read)

最终来源：https://aichemy.ac.uk/event/aichemy-annual-conference-2027/

结论：多次完整下载均连接重置/截断；搜索可发现官方活动内容，仍需人工浏览器核对或修复传输。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "IncompleteRead(7658 bytes read)"}
- {"method": "urllib retry", "ok": false, "reason": "[Errno 54] Connection reset by peer"}
- {"url": "https://aichemy.ac.uk/event/aichemy-annual-conference-2027/", "http_status": "200", "error": "curl: (56) Recv failure: Connection reset by peer\n", "ok": false}
- {"method": "web search/open", "result": "多次完整下载均连接重置/截断；搜索可发现官方活动内容，仍需人工浏览器核对或修复传输。"}

## 5. 待人工处理 — introduction-to-machine-learning-for-chemists-workshop

原地址：https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/

原失败：IncompleteRead(24129 bytes read)

最终来源：https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/

结论：多次完整下载均连接重置/截断；搜索可发现官方活动内容，仍需人工浏览器核对或修复传输。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "IncompleteRead(24129 bytes read)"}
- {"method": "urllib retry", "ok": false, "reason": "[Errno 54] Connection reset by peer"}
- {"url": "https://aichemy.ac.uk/event/introduction-to-machine-learning-for-chemists-workshop/", "http_status": "200", "error": "curl: (56) Recv failure: Connection reset by peer\n", "ok": false}
- {"method": "web search/open", "result": "多次完整下载均连接重置/截断；搜索可发现官方活动内容，仍需人工浏览器核对或修复传输。"}

## 6. 待人工处理 — aichemy-winter-school-robotics-and-ai-for-materials-chemistry-2026

原地址：https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/

原失败：IncompleteRead(7764 bytes read)

最终来源：https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/

结论：多次完整下载均连接重置/截断；搜索可发现官方活动内容，仍需人工浏览器核对或修复传输。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "IncompleteRead(7764 bytes read)"}
- {"method": "urllib retry", "ok": false, "reason": "[Errno 54] Connection reset by peer"}
- {"url": "https://aichemy.ac.uk/event/winter-school-robotics-and-ai-for-materials-chemistry-2026/", "http_status": "200", "error": "curl: (56) Recv failure: Connection reset by peer\n", "ok": false}
- {"method": "web search/open", "result": "多次完整下载均连接重置/截断；搜索可发现官方活动内容，仍需人工浏览器核对或修复传输。"}

## 7. 原址恢复 — euromof2027

原地址：https://euromof2027.com/abstracts.html

原失败：Official source returned no readable page content.

最终来源：https://euromof2027.com/abstracts.html

结论：原地址本次已返回可读正文；先前为临时网络/响应异常。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "Official source returned no readable page content."}
- {"method": "urllib retry", "ok": true, "reason": null}

## 8. 原址恢复 — mofschool2027, euromof2027

原地址：https://euromof2027.com/index.html

原失败：Official source returned no readable page content.

最终来源：https://euromof2027.com/index.html

结论：原地址本次已返回可读正文；先前为临时网络/响应异常。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "Official source returned no readable page content."}
- {"method": "urllib retry", "ok": true, "reason": null}

## 9. 原址恢复 — euromof2027

原地址：https://euromof2027.com/registration.html

原失败：Official source returned no readable page content.

最终来源：https://euromof2027.com/registration.html

结论：原地址本次已返回可读正文；先前为临时网络/响应异常。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "Official source returned no readable page content."}
- {"method": "urllib retry", "ok": true, "reason": null}

## 10. 待人工处理 — interpore2027

原地址：https://event.fourwaves.com/interpore2027/submission

原失败：Official source returned no readable page content.

最终来源：https://event.fourwaves.com/interpore2027/submission

结论：投稿页仅返回JavaScript外壳；已抓到官方主页和日期/节目页，但不能代替投稿平台状态，日期冲突仍需人工核实。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "Official source returned no readable page content."}
- {"method": "urllib retry", "ok": false, "reason": "Official source returned no readable page content."}
- {"url": "https://event.fourwaves.com/interpore2027/submission", "http_status": "200", "error": "", "ok": false}
- {"method": "official alternative curl retry", "url": "https://event.fourwaves.com/interpore2027", "http_status": "200", "error": "", "ok": true, "content_type": "text/html", "text_length": 1053}
- {"method": "official alternative curl retry", "url": "https://event.fourwaves.com/interpore2027/pages/c1c7480d-d48d-455f-a834-00e508ce196a", "http_status": "200", "error": "", "ok": true, "content_type": "text/html", "text_length": 672}
- {"method": "official alternative curl retry", "url": "https://event.fourwaves.com/interpore2027/pages/d4b1cb36-7fc0-481a-8595-2cfd0c1293e4", "http_status": "200", "error": "", "ok": true, "content_type": "text/html", "text_length": 44644}
- {"method": "web search/open", "result": "投稿页仅返回JavaScript外壳；已抓到官方主页和日期/节目页，但不能代替投稿平台状态，日期冲突仍需人工核实。"}

## 11. 待人工处理 — mm27-molecular-modelling-2027

原地址：https://uon-comp-chem.github.io/mm2027/

原失败：Official source returned no readable page content.

最终来源：https://uon-comp-chem.github.io/mm2027/

结论：HTTP 200但仅返回React入口；搜索可读官方会议内容，自动监测需要渲染支持。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "Official source returned no readable page content."}
- {"method": "urllib retry", "ok": false, "reason": "Official source returned no readable page content."}
- {"url": "https://uon-comp-chem.github.io/mm2027/", "http_status": "200", "error": "", "ok": false}
- {"method": "web search/open", "result": "HTTP 200但仅返回React入口；搜索可读官方会议内容，自动监测需要渲染支持。"}

## 12. 替代来源 — watoc-2028-14th-triennial-congress

原地址：https://watoc2028.org/

原失败：Official source returned no readable page content.

最终来源：https://www.watoc.net/watoc.congress.html

结论：已找到并实抓官方替代来源；仅覆盖该来源明确提供的事实，旧来源的专有内容仍保留核实要求。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "Official source returned no readable page content."}
- {"method": "urllib retry", "ok": false, "reason": "Official source returned no readable page content."}
- {"url": "https://watoc2028.org/", "http_status": "200", "error": "", "ok": false}
- {"method": "official alternative curl retry", "url": "https://www.watoc.net/watoc.congress.html", "http_status": "200", "error": "", "ok": true, "content_type": "text/html", "text_length": 2134}

## 13. 替代来源 — feza2029-11th-conference-of-the-federation-of-european-zeolite-associations

原地址：https://web.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc

原失败：<urlopen error [Errno -2] Name or service not known>

最终来源：https://cqe.tecnico.ulisboa.pt/cqe-researchers-organize-the-xiii-encmp-and-iv-rgc/

结论：已找到并实抓官方替代来源；仅覆盖该来源明确提供的事实，旧来源的专有内容仍保留核实要求。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "<urlopen error [Errno -2] Name or service not known>"}
- {"method": "urllib retry", "ok": false, "reason": "<urlopen error [Errno 8] nodename nor servname provided, or not known>"}
- {"url": "https://web.isel.pt/noticias/isel-acolhe-xiii-encmp-e-iv-rgc", "http_status": "000", "error": "curl: (6) Could not resolve host: web.isel.pt\n", "ok": false}
- {"method": "official alternative curl retry", "url": "https://cqe.tecnico.ulisboa.pt/cqe-researchers-organize-the-xiii-encmp-and-iv-rgc/", "http_status": "200", "error": "", "ok": true, "content_type": "text/html", "text_length": 4962}

## 14. 待人工处理 — 22nd-international-zeolite-conference-izc22

原地址：https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization

原失败：HTTP Error 403: Forbidden

最终来源：https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization

结论：urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"method": "urllib retry", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"url": "https://www.aiche.org/conferences/international-zeolite-conference/2028/about-conference-organization", "http_status": "403", "error": "", "ok": false}
- {"method": "web search/open", "result": "urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。"}

## 15. 待人工处理 — 22nd-international-zeolite-conference-izc22

原地址：https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee

原失败：HTTP Error 403: Forbidden

最终来源：https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee

结论：urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"method": "urllib retry", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"url": "https://www.aiche.org/conferences/international-zeolite-conference/2028/program-committee", "http_status": "403", "error": "", "ok": false}
- {"method": "web search/open", "result": "urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。"}

## 16. 原址恢复 — fems-euromat-2027

原地址：https://www.euromat2027.com/

原失败：<urlopen error [Errno 101] Network is unreachable>

最终来源：https://www.euromat2027.com/

结论：原地址本次已返回可读正文；先前为临时网络/响应异常。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "<urlopen error [Errno 101] Network is unreachable>"}
- {"method": "urllib retry", "ok": true, "reason": null}

## 17. 原址恢复 — nanoporous-grs2027

原地址：https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/

原失败：HTTP Error 404: Not Found

最终来源：https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/

结论：原地址本次已返回可读正文；先前为临时网络/响应异常。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "HTTP Error 404: Not Found"}
- {"method": "urllib retry", "ok": true, "reason": null}

## 18. 原址恢复 — nanoporous-grs2027

原地址：https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/

原失败：Official source returned no readable page content.

最终来源：https://www.grc.org/nanoporous-materials-and-their-applications-grs-conference/2027/

结论：原地址本次已返回可读正文；先前为临时网络/响应异常。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "Official source returned no readable page content."}
- {"method": "urllib retry", "ok": true, "reason": null}

## 19. 仍失败 — pmea2028-porous-materials-for-environmental-applications

原地址：https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf

原失败：<urlopen error timed out>

最终来源：未找到可确认来源

结论：urllib、curl及网页工具均超时；两次针对PMEA2028及会议全名的搜索未找到可确认的新官方地址。需主办方提供可用文件。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "<urlopen error timed out>"}
- {"method": "urllib retry", "ok": false, "reason": "<urlopen error timed out>"}
- {"url": "https://unibook.upjs.sk/img/cms/2026/PF/pmea-2026.pdf", "http_status": "000", "error": "curl: (28) Connection timed out after 20003 milliseconds\n", "ok": false}

## 20. 待人工处理 — siam-ms27-mathematical-aspects-of-materials-science

原地址：https://www.siam.org/conferences-events/siam-conferences/ms27/

原失败：HTTP Error 403: Forbidden

最终来源：https://www.siam.org/conferences-events/siam-conferences/ms27/

结论：urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"method": "urllib retry", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"url": "https://www.siam.org/conferences-events/siam-conferences/ms27/", "http_status": "403", "error": "", "ok": false}
- {"method": "web search/open", "result": "urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。"}

## 21. 待人工处理 — aems-2027

原地址：https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx

原失败：HTTP Error 403: Forbidden

最终来源：https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx

结论：urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"method": "urllib retry", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"url": "https://www.tms.org/SpecialtyCongress2027/SpecialtyCongress2027/AEMS2027/default.aspx", "http_status": "403", "error": "", "ok": false}
- {"method": "web search/open", "result": "urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。"}

## 22. 待人工处理 — tms2027

原地址：https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx

原失败：HTTP Error 403: Forbidden

最终来源：https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx

结论：urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"method": "urllib retry", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"url": "https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Frequently_Asked_Questions.aspx", "http_status": "403", "error": "", "ok": false}
- {"method": "official alternative curl retry", "url": "https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf", "http_status": "200", "error": "", "ok": true, "content_type": "application/pdf", "text_length": 218105}
- {"method": "web search/open", "result": "urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。"}

## 23. 待人工处理 — tms2027

原地址：https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx

原失败：HTTP Error 403: Forbidden

最终来源：https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx

结论：urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"method": "urllib retry", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"url": "https://www.tms.org/TMS2027/TMS2027/Programming/TMS2027_Technical_Program.aspx", "http_status": "403", "error": "", "ok": false}
- {"method": "official alternative curl retry", "url": "https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf", "http_status": "200", "error": "", "ok": true, "content_type": "application/pdf", "text_length": 218105}
- {"method": "web search/open", "result": "urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。"}

## 24. 待人工处理 — aric-advanced-adsorption-course-kinetic-measurements-using-macroscopic-techniques

原地址：https://www.carboncapture.eng.ed.ac.uk/ARIC_Course

原失败：<urlopen error timed out>

最终来源：https://www.carboncapture.eng.ed.ac.uk/ARIC_Course

结论：urllib、curl与网页打开均超时；搜索可读官方页面，但其日期表存在既有矛盾，需要人工核实。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "<urlopen error timed out>"}
- {"method": "urllib retry", "ok": false, "reason": "<urlopen error timed out>"}
- {"url": "https://www.carboncapture.eng.ed.ac.uk/ARIC_Course", "http_status": "000", "error": "curl: (28) Connection timed out after 20005 milliseconds\n", "ok": false}
- {"method": "web search/open", "result": "urllib、curl与网页打开均超时；搜索可读官方页面，但其日期表存在既有矛盾，需要人工核实。"}

## 25. 替代来源 — fda-cheminformatics-resources-2027

原地址：https://fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027

原失败：HTTP Error 404: Not Found

最终来源：https://www.fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027

结论：已找到并实抓官方替代来源；仅覆盖该来源明确提供的事实，旧来源的专有内容仍保留核实要求。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "HTTP Error 404: Not Found"}
- {"method": "urllib retry", "ok": false, "reason": "HTTP Error 404: Not Found"}
- {"url": "https://fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027", "http_status": "404", "error": "", "ok": false}
- {"method": "official alternative curl retry", "url": "https://www.fda.gov/drugs/news-events-human-drugs/cheminformatics-resources-us-governmental-organizations-2027-workshop-04122027", "http_status": "200", "error": "", "ok": true, "content_type": "text/html", "text_length": 4934}

## 26. 原址恢复 — euromof2027

原地址：https://euromof2027.com/committees.html

原失败：Official source returned no readable page content.

最终来源：https://euromof2027.com/committees.html

结论：原地址本次已返回可读正文；先前为临时网络/响应异常。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "Official source returned no readable page content."}
- {"method": "urllib retry", "ok": true, "reason": null}

## 27. 原址恢复 — euromof2027

原地址：https://euromof2027.com/speakers.html

原失败：Official source returned no readable page content.

最终来源：https://euromof2027.com/speakers.html

结论：原地址本次已返回可读正文；先前为临时网络/响应异常。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "Official source returned no readable page content."}
- {"method": "urllib retry", "ok": true, "reason": null}

## 28. 替代来源 — chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning

原地址：https://www.rsc.org/getContentAsset/711ed80e-95d2-4169-905d-afa1bb46dab5/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en

原失败：HTTP Error 404: Not Found

最终来源：https://www.rsc.org/getContentAsset/c2e08575-581a-45fd-9375-1307e0333e1d/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en

结论：官网活动页的Speakers链接已更换资源ID；新PDF已成功完整下载（12页），旧链接确认为404。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "HTTP Error 404: Not Found"}
- {"method": "urllib retry", "ok": false, "reason": "HTTP Error 404: Not Found"}
- {"url": "https://www.rsc.org/getContentAsset/711ed80e-95d2-4169-905d-afa1bb46dab5/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en", "http_status": "404", "error": "", "ok": false}
- {"method": "official alternative curl retry", "url": "https://www.rsc.org/events/find-an-event/chemical-science-symposium-2026-digital-chemistry-in-the-age-of-ai-and-machine-learning", "http_status": "403", "error": "", "ok": false}
- {"method": "web search/open", "result": "PDF两次返回404；已搜索文件名并找到官方活动页的下载入口，尚未恢复该讲者PDF，不能用活动摘要替代完整讲者证据。"}
- {"method": "follow official event Speakers link and urllib fetch", "url": "https://www.rsc.org/getContentAsset/c2e08575-581a-45fd-9375-1307e0333e1d/f4c91d86-ac3e-4675-bdf3-f8325ded9710/Chem-Sci-speakers-v4.pdf?language=en", "ok": true, "content_type": "application/pdf"}

## 29. 待人工处理 — tms2027

原地址：https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx

原失败：HTTP Error 403: Forbidden

最终来源：https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx

结论：urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"method": "urllib retry", "ok": false, "reason": "HTTP Error 403: Forbidden"}
- {"url": "https://www.tms.org/TMS2027/TMS2027/Attendee-Toolbox/Organizer-Tools.aspx", "http_status": "403", "error": "", "ok": false}
- {"method": "official alternative curl retry", "url": "https://www.tms.org/tms2027/downloads/flyers/TMS2027-CFA-Flyer-022.pdf", "http_status": "200", "error": "", "ok": true, "content_type": "application/pdf", "text_length": 218105}
- {"method": "web search/open", "result": "urllib和curl均403；搜索/网页工具能读部分官方内容，但自动抓取限制尚未解除，需人工核对。"}

## 30. 原址恢复 — fems-euromat-2027

原地址：https://www.euromat2027.com/committee.html

原失败：<urlopen error [Errno 101] Network is unreachable>

最终来源：https://www.euromat2027.com/committee.html

结论：原地址本次已返回可读正文；先前为临时网络/响应异常。

尝试：
- {"method": "scheduled urllib fetch", "ok": false, "reason": "<urlopen error [Errno 101] Network is unreachable>"}
- {"method": "urllib retry", "ok": true, "reason": null}

