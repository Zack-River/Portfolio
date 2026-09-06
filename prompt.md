Speed Index1.4 s
Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/?utm_source=lighthouse&utm_medium=devtools).
View Treemap
Show audits relevant to:AllFCPLCPTBTCLS
Insights
Forced reflow
A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about [forced reflows](https://developer.chrome.com/docs/performance/insights/forced-reflow?utm_source=lighthouse&utm_medium=devtools) and possible mitigations.Unscored
Top function call
Total reflow time
motion-vendor-Bk1H7Oxh.js:10
88 ms
Source
Total reflow time
motion-vendor-Bk1H7Oxh.js:17
88 ms
gsap-vendor-CzGW6FVa.js:15
20 ms
index-BiI9K9LQ.js:53
15 ms
Network dependency tree
[Avoid chaining critical requests](https://developer.chrome.com/docs/performance/insights/network-dependency-tree?utm_source=lighthouse&utm_medium=devtools) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCPUnscored
Maximum critical path latency: 119 ms
Initial Navigation
[http://localhost:4173](http://localhost:4173/)
- 65 ms, 1.12 KiB
[/assets/index-BiI9K9LQ.js](http://localhost:4173/assets/index-BiI9K9LQ.js)(localhost)
- 100 ms, 47.81 KiB
[/assets/motion-ve….js](http://localhost:4173/assets/motion-vendor-Bk1H7Oxh.js)(localhost)
- 119 ms, 45.73 KiB
[/assets/gsap-vend….js](http://localhost:4173/assets/gsap-vendor-CzGW6FVa.js)(localhost)
- 113 ms, 27.53 KiB
[/assets/index-DuK_HFOi.css](http://localhost:4173/assets/index-DuK_HFOi.css)(localhost)
- 93 ms, 13.00 KiB
Preconnected origins
[preconnect](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools) hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.
Origin
Source
https://fonts.googleapis.com/
https://fonts.gstatic.com/
Unused preconnect. Check that the `crossorigin` attribute is used properly.
Preconnect candidates
Add [preconnect](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools) hints to your most important origins, but try to use no more than 4.
Origin
Est LCP savings
https://fonts.gstatic.com
210 ms
Improve image delivery Est savings of 17 KiB
Reducing the download time of images can improve the perceived load time of the page and LCP. [Learn more about optimizing image size](https://developer.chrome.com/docs/performance/insights/image-delivery?utm_source=lighthouse&utm_medium=devtools)FCPLCPUnscored
URL
Resource Size
Est Savings
localhost
1st party
67.4 KiB
17.4 KiB
Zack River / Abdallah Wageeh
<img src="/zack-photo-new-sm.webp" srcset="/zack-photo-new-sm.webp 700w, /zack-photo-new.webp 1100w" sizes="(max-width: 768px) 320px, (max-width: 1280px) 550px, 700px" alt="Zack River / Abdallah Wageeh" fetchpriority="high" width="700" height="1051" class="absolute inset-0 w-full h-full object-cover object-center grayscale contra…">
[/zack-photo-new-sm.webp](http://localhost:4173/zack-photo-new-sm.webp)(localhost)
67.4 KiB
17.4 KiB
This image file is larger than it needs to be (700x875) for its displayed dimensions (550x826). Use responsive images to reduce the image download size.
17.4 KiB
Render-blocking requests
Requests are blocking the page's initial render, which may delay LCP. [Deferring or inlining](https://developer.chrome.com/docs/performance/insights/render-blocking?utm_source=lighthouse&utm_medium=devtools) can move these network requests out of the critical path.FCPLCPUnscored
URL
Transfer Size
Duration
localhost
1st party
13.0 KiB
0 ms
[/assets/index-DuK_HFOi.css](http://localhost:4173/assets/index-DuK_HFOi.css)(localhost)
13.0 KiB
Layout shift culprits
Layout shifts occur when elements move absent any user interaction. [Investigate the causes of layout shifts](https://developer.chrome.com/docs/performance/insights/cls-culprit?utm_source=lighthouse&utm_medium=devtools), such as elements being added, removed, or their fonts changing as the page loads.CLSUnscored
Element
Layout shift score
Total
0.000
Services
<button class="group flex items-center justify-center px-3 py-3 md:px-4 md:py-2.5 rounded…" aria-label="Services">
0.000
[…v24/tDbv2o-fl….woff2](https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yK0BNntkaToggR7BYZbNPxDcwgknk-4.woff2)(fonts.gstatic.com)
Web font
[…v20/UcC73FwrK….woff2](https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2)(fonts.gstatic.com)
Web font
[…v22/V8mDoQDjQ….woff2](https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2)(fonts.gstatic.com)
Web font
Element
Layout shift score
Total
0.011
SOFTWARE ENGINEER ABDALLAH ZACK WAGEEH RIVER Building scalable backend architec…
<div class="relative z-10 container mx-auto px-[4vw] w-full h-full flex flex-col justi…">
0.011
Optimize DOM size
A large DOM can increase the duration of style calculations and layout reflows, impacting page responsiveness. A large DOM will also increase memory usage. [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/performance/insights/dom-size?utm_source=lighthouse&utm_medium=devtools).Unscored
Statistic
Element
Value
Total elements
1,149
DOM depth
div.flex > a.flex > svg.lucide > path
<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
17
Most children
div.bg-canvas-dark > main.scroll-smooth > section#skills > div.absolute
<div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
21
LCP breakdown
Each [subpart has specific improvement strategies](https://developer.chrome.com/docs/performance/insights/lcp-breakdown?utm_source=lighthouse&utm_medium=devtools). Ideally, most of the LCP time should be spent on loading the resources, not within delays.LCPUnscored
Subpart
Duration
Time to first byte
10 ms
Element render delay
700 ms
RIVER
<h1 class="col-start-1 row-start-1 backface-hidden rotate-x-180 font-black uppercase …" style="font-size: clamp(3.5rem, 7vw, 9rem);">
3rd parties
3rd party code can significantly impact load performance. [Reduce and defer loading of 3rd party code](https://developer.chrome.com/docs/performance/insights/third-parties?utm_source=lighthouse&utm_medium=devtools) to prioritize your page's content.Unscored
3rd party
Transfer size
Main thread time
Google Fonts
cdn
101 KiB
0 ms
[…v20/UcC73FwrK….woff2](https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2)(fonts.gstatic.com)
47 KiB
0 ms
[…v24/tDbv2o-fl….woff2](https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yK0BNntkaToggR7BYZbNPxDcwgknk-4.woff2)(fonts.gstatic.com)
30 KiB
0 ms
[…v22/V8mDoQDjQ….woff2](https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2)(fonts.gstatic.com)
22 KiB
0 ms
[/css2?family=…](https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap)(fonts.googleapis.com)
2 KiB
0 ms
These insights are also available in the Chrome DevTools Performance Panel - [record a trace](https://developer.chrome.com/docs/devtools/performance/reference?utm_source=lighthouse&utm_medium=devtools) to view more detailed information.
Diagnostics
Reduce unused JavaScript Est savings of 31 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/?utm_source=lighthouse&utm_medium=devtools).FCPLCPUnscored
URL
Transfer Size
Est Savings
localhost
1st party
45.4 KiB
30.9 KiB
[/assets/motion-ve….js](http://localhost:4173/assets/motion-vendor-Bk1H7Oxh.js)(localhost)
45.4 KiB
30.9 KiB
Avoid non-composited animations 4 animated elements found
Animations which are not composited can be janky and increase CLS. [Learn how to avoid non-composited animations](https://developer.chrome.com/docs/lighthouse/performance/non-composited-animations/?utm_source=lighthouse&utm_medium=devtools)CLSUnscored
Element
Name
div.relative > svg.w-[150%] > g.data-pulses > path.pulse-2
<path d="M100,400 L300,400 L400,600 L600,600" class="pulse-2">
Unsupported CSS Property: stroke-dashoffset
pulseAnim
div.relative > svg.w-[150%] > g.data-pulses > path.pulse-3
<path d="M300,400 L600,400" class="pulse-3">
Unsupported CSS Property: stroke-dashoffset
pulseAnim
div.relative > svg.w-[150%] > g.data-pulses > path.pulse-1
<path d="M100,400 L300,400 L400,200 L600,200" class="pulse-1">
Unsupported CSS Property: stroke-dashoffset
pulseAnim
div.relative > svg.w-[150%] > g.data-pulses > path.pulse-4
<path d="M400,200 L600,400 L750,400" class="pulse-4">
Unsupported CSS Property: stroke-dashoffset
pulseAnim
Avoid long main-thread tasks 1 long task found
Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn how to avoid long main-thread tasks](https://web.dev/articles/optimize-long-tasks?utm_source=lighthouse&utm_medium=devtools)TBTUnscored
URL
Start Time
Duration
localhost
1st party
57 ms
[/assets/react-ven….js](http://localhost:4173/assets/react-vendor-ClzsAD1n.js)(localhost)
647 ms
57 ms
More information about the performance of your application. These numbers don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/?utm_source=lighthouse&utm_medium=devtools) the Performance score.