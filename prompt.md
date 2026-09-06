Metrics
Expand view
First Contentful Paint
1.0 s
Largest Contentful Paint
1.1 s
Total Blocking Time
0 ms
Cumulative Layout Shift
0.006
Speed Index
1.7 s

Insights
Improve image delivery Est savings of 138 KiB
Reducing the download time of images can improve the perceived load time of the page and LCP. [Learn more about optimizing image size](https://developer.chrome.com/docs/performance/insights/image-delivery?utm_source=lighthouse&utm_medium=devtools)FCPLCPUnscored
URL
Resource Size
Est Savings
zackriver.com
1st party
214.4 KiB
138.2 KiB
Zack River / Abdallah Wageeh
<img src="/zack-photo-new.jpg" alt="Zack River / Abdallah Wageeh" class="absolute inset-0 w-full h-full object-cover object-center grayscale contra…">
[/zack-photo-new.jpg](https://www.zackriver.com/zack-photo-new.jpg)(www.zackriver.com)
205.6 KiB
131.7 KiB
Using a modern image format (WebP, AVIF) or increasing the image compression could improve this image's download size.
57.4 KiB
This image file is larger than it needs to be (853x1067) for its displayed dimensions (550x825). Use responsive images to reduce the image download size.
103.1 KiB
[/logo.png](https://www.zackriver.com/logo.png)(www.zackriver.com)
8.8 KiB
6.5 KiB
This image file is larger than it needs to be (437x318) for its displayed dimensions (224x163). Use responsive images to reduce the image download size.
6.5 KiB
Forced reflow
A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about [forced reflows](https://developer.chrome.com/docs/performance/insights/forced-reflow?utm_source=lighthouse&utm_medium=devtools) and possible mitigations.Unscored
Top function call
Total reflow time
react-vendor-ClzsAD1n.js:18
42 ms
Source
Total reflow time
gsap-vendor-CzGW6FVa.js:15
50 ms
index-DorQFzf5.js:52
19 ms
index-DorQFzf5.js:73
0 ms
motion-vendor-Bk1H7Oxh.js:17
0 ms
index-DorQFzf5.js:59
3 ms
index-DorQFzf5.js:59
1 ms
LCP request discovery
[Optimize LCP](https://developer.chrome.com/docs/performance/insights/lcp-discovery?utm_source=lighthouse&utm_medium=devtools) by making the LCP image discoverable from the HTML immediately, and avoiding lazy-loadingLCPUnscored
fetchpriority=high should be applied
Request is discoverable in initial document
LCP resources should not use loading=lazy
Network dependency tree
[Avoid chaining critical requests](https://developer.chrome.com/docs/performance/insights/network-dependency-tree?utm_source=lighthouse&utm_medium=devtools) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCPUnscored
Maximum critical path latency: 344 ms
Initial Navigation
[https://www.zackriver.com](https://www.zackriver.com/)
- 142 ms, 1.12 KiB
[/assets/index-DorQFzf5.js](https://www.zackriver.com/assets/index-DorQFzf5.js)(www.zackriver.com)
- 260 ms, 48.28 KiB
[/assets/three-ven….js](https://www.zackriver.com/assets/three-vendor-BCCcb89N.js)(www.zackriver.com)
- 344 ms, 0.92 KiB
[/assets/gsap-vend….js](https://www.zackriver.com/assets/gsap-vendor-CzGW6FVa.js)(www.zackriver.com)
- 343 ms, 28.58 KiB
[/assets/index-gxf2YvpU.css](https://www.zackriver.com/assets/index-gxf2YvpU.css)(www.zackriver.com)
- 239 ms, 12.55 KiB
Preconnected origins
[preconnect](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools) hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.
Origin
Source
https://fonts.googleapis.com/
https://fonts.gstatic.com/
Preconnect candidates
Add [preconnect](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools) hints to your most important origins, but try to use no more than 4.
No additional origins are good candidates for preconnecting
Render-blocking requests
Requests are blocking the page's initial render, which may delay LCP. [Deferring or inlining](https://developer.chrome.com/docs/performance/insights/render-blocking?utm_source=lighthouse&utm_medium=devtools) can move these network requests out of the critical path.FCPLCPUnscored
URL
Transfer Size
Duration
zackriver.com
1st party
12.5 KiB
0 ms
[/assets/index-gxf2YvpU.css](https://www.zackriver.com/assets/index-gxf2YvpU.css)(www.zackriver.com)
12.5 KiB
Layout shift culprits
Layout shifts occur when elements move absent any user interaction. [Investigate the causes of layout shifts](https://developer.chrome.com/docs/performance/insights/cls-culprit?utm_source=lighthouse&utm_medium=devtools), such as elements being added, removed, or their fonts changing as the page loads.CLSUnscored
Element
Layout shift score
Total
0.000
Services
<button class="group flex items-center justify-center px-3 py-3 md:px-4 md:py-2.5 rounded…" aria-label="Services">
0.000
Element
Layout shift score
Total
0.006
SOFTWARE ENGINEER ABDALLAH ZACK WAGEEH RIVER Building scalable backend architec…
<div class="relative z-10 container mx-auto px-[4vw] w-full h-full flex flex-col justi…">
0.006
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
70 ms
Resource load delay
390 ms
Resource load duration
140 ms
Element render delay
200 ms
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
1 KiB
0 ms
These insights are also available in the Chrome DevTools Performance Panel - [record a trace](https://developer.chrome.com/docs/devtools/performance/reference?utm_source=lighthouse&utm_medium=devtools) to view more detailed information.
Diagnostics
Reduce unused JavaScript Est savings of 33 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/?utm_source=lighthouse&utm_medium=devtools).FCPLCPUnscored
URL
Transfer Size
Est Savings
zackriver.com
1st party
47.9 KiB
32.6 KiB
[/assets/motion-ve….js](https://www.zackriver.com/assets/motion-vendor-Bk1H7Oxh.js)(www.zackriver.com)
47.9 KiB
32.6 KiB
Avoid non-composited animations 4 animated elements found
Animations which are not composited can be janky and increase CLS. [Learn how to avoid non-composited animations](https://developer.chrome.com/docs/lighthouse/performance/non-composited-animations/?utm_source=lighthouse&utm_medium=devtools)CLSUnscored
Element
Name
div.relative > svg.w-[150%] > g.data-pulses > path.pulse-2
<path d="M100,400 L300,400 L400,600 L600,600" class="pulse-2">
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
div.relative > svg.w-[150%] > g.data-pulses > path.pulse-3
<path d="M300,400 L600,400" class="pulse-3">
Unsupported CSS Property: stroke-dashoffset
pulseAnim
Avoid long main-thread tasks 2 long tasks found
Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn how to avoid long main-thread tasks](https://web.dev/articles/optimize-long-tasks?utm_source=lighthouse&utm_medium=devtools)TBTUnscored
URL
Start Time
Duration
zackriver.com
1st party
118 ms
[/assets/react-ven….js](https://www.zackriver.com/assets/react-vendor-ClzsAD1n.js)(www.zackriver.com)
602 ms
67 ms
[https://www.zackriver.com](https://www.zackriver.com/)
356 ms
51 ms
More information about the performance of your application. These numbers don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/?utm_source=lighthouse&utm_medium=devtools) the Performance score.
Passed audits (17)
Show
Use efficient cache lifetimes
A long cache lifetime can speed up repeat visits to your page. [Learn more about caching](https://developer.chrome.com/docs/performance/insights/cache?utm_source=lighthouse&utm_medium=devtools).FCPLCPUnscored
Document request latency
Your first network request is the most important. [Reduce its latency](https://developer.chrome.com/docs/performance/insights/document-latency?utm_source=lighthouse&utm_medium=devtools) by avoiding redirects, ensuring a fast server response, and enabling text compression.FCPLCPUnscored
Avoids redirects
Server responds quickly (observed 64 ms)
Applies text compression
Duplicated JavaScript
Remove large, [duplicate JavaScript modules](https://developer.chrome.com/docs/performance/insights/duplicated-javascript?utm_source=lighthouse&utm_medium=devtools) from bundles to reduce unnecessary bytes consumed by network activity.FCPLCPUnscored
Font display
Consider setting [font-display](https://developer.chrome.com/docs/performance/insights/font-display?utm_source=lighthouse&utm_medium=devtools) to swap or optional to ensure text is consistently visible. swap can be further optimized to mitigate layout shifts with [font metric overrides](https://developer.chrome.com/blog/font-fallbacks?utm_source=lighthouse&utm_medium=devtools).Unscored
INP breakdown
Start investigating [how to improve INP](https://developer.chrome.com/docs/performance/insights/inp-breakdown?utm_source=lighthouse&utm_medium=devtools) by looking at the longest subpart.Unscored
Legacy JavaScript
Polyfills and transforms enable older browsers to use new JavaScript features. However, many aren't necessary for modern browsers. Consider modifying your JavaScript build process to not transpile [Baseline](https://web.dev/articles/baseline-and-polyfills?utm_source=lighthouse&utm_medium=devtools) features, unless you know you must support older browsers. [Learn why most sites can deploy ES6+ code without transpiling](https://developer.chrome.com/docs/performance/insights/legacy-javascript?utm_source=lighthouse&utm_medium=devtools)FCPLCPUnscored
Modern HTTP
HTTP/2 and HTTP/3 offer many benefits over HTTP/1.1, such as multiplexing. [Learn more about using modern HTTP](https://developer.chrome.com/docs/performance/insights/modern-http?utm_source=lighthouse&utm_medium=devtools).FCPLCPUnscored
Optimize viewport for mobile
Tap interactions may be [delayed by up to 300 ms](https://developer.chrome.com/docs/performance/insights/viewport?utm_source=lighthouse&utm_medium=devtools) if the viewport is not optimized for mobile.Unscored
Minify CSS
Minifying CSS files can reduce network payload sizes. [Learn how to minify CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/?utm_source=lighthouse&utm_medium=devtools).FCPLCPUnscored
Minify JavaScript
Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/?utm_source=lighthouse&utm_medium=devtools).FCPLCPUnscored
Reduce unused CSS
Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/?utm_source=lighthouse&utm_medium=devtools).FCPLCPUnscored
Avoids enormous network payloads Total size was 558 KiB
Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/?utm_source=lighthouse&utm_medium=devtools).Unscored
URL
Transfer Size
zackriver.com
1st party
430.7 KiB
[/zack-photo-new.jpg](https://www.zackriver.com/zack-photo-new.jpg)(www.zackriver.com)
205.9 KiB
[/assets/react-ven….js](https://www.zackriver.com/assets/react-vendor-ClzsAD1n.js)(www.zackriver.com)
60.2 KiB
[/assets/index-DorQFzf5.js](https://www.zackriver.com/assets/index-DorQFzf5.js)(www.zackriver.com)
48.3 KiB
[/assets/motion-ve….js](https://www.zackriver.com/assets/motion-vendor-Bk1H7Oxh.js)(www.zackriver.com)
48.0 KiB
[/assets/gsap-vend….js](https://www.zackriver.com/assets/gsap-vendor-CzGW6FVa.js)(www.zackriver.com)
28.6 KiB
[/assets/ui-vendor-BJ28CS_-.js](https://www.zackriver.com/assets/ui-vendor-BJ28CS_-.js)(www.zackriver.com)
27.2 KiB
[/assets/index-gxf2YvpU.css](https://www.zackriver.com/assets/index-gxf2YvpU.css)(www.zackriver.com)
12.5 KiB
Google Fonts
cdn
99.7 KiB
[…v20/UcC73FwrK….woff2](https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2)(fonts.gstatic.com)
47.4 KiB
[…v24/tDbv2o-fl….woff2](https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yK0BNntkaToggR7BYZbNPxDcwgknk-4.woff2)(fonts.gstatic.com)
30.3 KiB
[…v22/V8mDoQDjQ….woff2](https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4C_k3HqU.woff2)(fonts.gstatic.com)
21.9 KiB
User Timing marks and measures
Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more about User Timing marks](https://developer.chrome.com/docs/lighthouse/performance/user-timings/?utm_source=lighthouse&utm_medium=devtools).Unscored
JavaScript execution time 0.3 s
Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to reduce Javascript execution time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/?utm_source=lighthouse&utm_medium=devtools).TBTUnscored
URL
Total CPU Time
Script Evaluation
Script Parse
zackriver.com
1st party
1,048 ms
328 ms
5 ms
[https://www.zackriver.com](https://www.zackriver.com/)
443 ms
86 ms
4 ms
[/assets/gsap-vend….js](https://www.zackriver.com/assets/gsap-vendor-CzGW6FVa.js)(www.zackriver.com)
277 ms
44 ms
0 ms
[/assets/react-ven….js](https://www.zackriver.com/assets/react-vendor-ClzsAD1n.js)(www.zackriver.com)
269 ms
147 ms
0 ms
[/assets/index-DorQFzf5.js](https://www.zackriver.com/assets/index-DorQFzf5.js)(www.zackriver.com)
59 ms
52 ms
0 ms
Unattributable
135 ms
3 ms
0 ms
Unattributable
135 ms
3 ms
0 ms
Minimizes main-thread work 1.2 s
Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/?utm_source=lighthouse&utm_medium=devtools)TBTUnscored
Category
Time Spent
Other
412 ms
Style & Layout
358 ms
Script Evaluation
334 ms
Rendering
74 ms
Parse HTML & CSS
8 ms
Script Parsing & Compilation
5 ms
Garbage Collection
2 ms
Image elements have explicit width and height
Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls?utm_source=lighthouse&utm_medium=devtools#images_without_dimensions)CLSUnscored
Page didn't prevent back/forward cache restoration
Many navigations are performed by going back to a previous page, or forwards again. The back/forward cache (bfcache) can speed up these return navigations. [Learn more about the bfcache](https://developer.chrome.com/docs/lighthouse/performance/bf-cache/?utm_source=lighthouse&utm_medium=devtools)Unscored
96Accessibility
These checks highlight opportunities to [improve the accessibility of your web app](https://developer.chrome.com/docs/lighthouse/accessibility/?utm_source=lighthouse&utm_medium=devtools). Automatic detection can only detect a subset of issues and does not guarantee the accessibility of your web app, so [manual testing](https://web.dev/articles/how-to-review?utm_source=lighthouse&utm_medium=devtools) is also encouraged.
Contrast
Background and foreground colors do not have a sufficient contrast ratio.
Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.12/color-contrast).
Failing Elements
ABOUT
<div class="hidden md:block absolute left-[calc(min(50vw,40rem)-50vw-4rem)] md:left-[c…">
01 The Developer EDUCATION & JOURNEY ABOUT ABOUT Software Engineer specializ…
<section id="about" class="py-24 md:py-32 bg-canvas-light dark:bg-canvas-dark transition-colors durat…">
0:00 / 0:27
<div class="text-right mt-0.5 font-mono text-[8.5px] text-white/40">
VOICE REVIEW 0:00 / 0:27
<div class="mt-3 rounded-xl bg-white/5 border border-electric/10 p-2 flex items-center…">
Mostafa N. fb "Honestly, working with Zack was very comfortable. He understand…
<div class="shrink-0 w-[320px] md:w-95 bg-white/5 border border-white/10 rounded-3xl p…">
04 Client Reviews WHAT PEOPLE SAY Mostafa N. fb "Honestly, working with Zack…
<section id="testimonials" class="py-24 md:py-32 bg-canvas-dark dark:bg-canvas-dark text-canvas-light relati…">
These are opportunities to improve the legibility of your content.
Best practices
Identical links have the same purpose.
These items highlight common accessibility best practices.
Additional items to manually check (10)
Show
These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://web.dev/articles/how-to-review?utm_source=lighthouse&utm_medium=devtools).
Passed audits (20)
Show
Not applicable (41)
Show
100Best Practices
Trust and Safety
Ensure CSP is effective against XSS attacks
Use a strong HSTS policy
Ensure proper origin isolation with COOP
Mitigate clickjacking with XFO or CSP
Mitigate DOM-based XSS with Trusted Types
Browser Compatibility
Baseline Features
Passed audits (13)
Show
Not applicable (2)
Show
100SEO
These checks ensure that your page is following basic search engine optimization advice. There are many additional factors Lighthouse does not score here that may affect your search ranking, including performance on [Core Web Vitals](https://web.dev/explore/vitals?utm_source=lighthouse&utm_medium=devtools). [Learn more about Google Search Essentials](https://support.google.com/webmasters/answer/35769).
Additional items to manually check (1)
Hide
Structured data is valid
Run these additional validators on your site to check additional SEO best practices.
Passed audits (9)
Show
Not applicable (1)
Show
Captured at Sep 6, 2026, 11:16 AM GMT+3
Emulated Desktop with Lighthouse 13.4.1
Single page session
Initial page load
Custom throttling
Using Chromium 152.0.0.0 with devtools
Generated by Lighthouse 13.4.1 | [File an issue](https://github.com/GoogleChrome/Lighthouse/issues)

using all local skills enhance this website performance and accessibilty by first making a full audit on the home page and its components and identifying all issues
