97
Performance
100
Accessibility
100
Best Practices
100
SEO
2/3
Agentic Browsing
97
FCP
+10
LCP
+23
TBT
+30
CLS
+25
SI
+9
Performance
Values are estimated and may vary. The performance score is calculated directly from these metrics.See calculator.
0–49
50–89
90–100
Final Screenshot

Metrics
Expand view
First Contentful Paint
0.6 s
Largest Contentful Paint
1.1 s
Total Blocking Time
10 ms
Cumulative Layout Shift
0.011
Speed Index
1.4 s
View Treemap
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Show audits relevant to:

All

FCP

LCP

TBT

CLS
Insights
Forced reflow
A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about forced reflows and possible mitigations.Unscored
Top function call
Total reflow time
react-vendor-ClzsAD1n.js:18
35 ms
Source
Total reflow time
gsap-vendor-CzGW6FVa.js:15
21 ms
index-BWgzHg0j.js:37
15 ms
Network dependency tree
Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCPUnscored
Maximum critical path latency: 103 ms
Initial Navigation
http://localhost:4173 - 53 ms, 1.11 KiB
/assets/index-BWgzHg0j.js(localhost) - 83 ms, 47.87 KiB
/assets/motion-ve….js(localhost) - 103 ms, 45.71 KiB
/assets/gsap-vend….js(localhost) - 100 ms, 27.53 KiB
/assets/index-CgO-hMrg.css(localhost) - 78 ms, 13.02 KiB
Preconnected origins
preconnect hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.
Origin
Source
https://fonts.googleapis.com/
link
https://fonts.gstatic.com/
link
Unused preconnect. Check that the `crossorigin` attribute is used properly.
Preconnect candidates
Add preconnect hints to your most important origins, but try to use no more than 4.
Origin
Est LCP savings
https://fonts.gstatic.com
200 ms
Improve image delivery Est savings of 89 KiB
Reducing the download time of images can improve the perceived load time of the page and LCP. Learn more about optimizing image sizeFCPLCPUnscored
URL
Resource Size
Est Savings
localhost 1st party
127.4 KiB	89.2 KiB
Zack River / Abdallah Wageeh
<img src="http://localhost:4173/zack-photo-new.webp" srcset="/zack-photo-new-sm.webp 560w, /zack-photo-new.webp 1100w" sizes="(max-width: 768px) 320px, (max-width: 1280px) 550px, 700px" alt="Zack River / Abdallah Wageeh" fetchpriority="high" width="560" height="841" class="absolute inset-0 w-full h-full object-cover object-center grayscale contra…">
/zack-photo-new.webp(localhost)
127.4 KiB
89.2 KiB
This image file is larger than it needs to be (1100x1375) for its displayed dimensions (550x826). Use responsive images to reduce the image download size.
89.2 KiB
Render-blocking requests
Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path.FCPLCPUnscored
URL
Transfer Size
Duration
localhost 1st party
13.0 KiB	0 ms
/assets/index-CgO-hMrg.css(localhost)
13.0 KiB
Layout shift culprits
Optimize DOM size
LCP breakdown
3rd parties
These insights are also available in the Chrome DevTools Performance Panel - record a trace to view more detailed information.
Diagnostics
Reduce unused JavaScript Est savings of 33 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript.FCPLCPUnscored
URL
Transfer Size
Est Savings
localhost 1st party
45.4 KiB	33.3 KiB
/assets/motion-ve….js(localhost)
45.4 KiB
33.3 KiB
Avoid long main-thread tasks 2 long tasks found
Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. Learn how to avoid long main-thread tasksTBTUnscored
URL
Start Time
Duration
localhost 1st party
111 ms
/assets/react-ven….js(localhost)
691 ms
61 ms
/assets/gsap-vend….js(localhost)
752 ms
50 ms
More information about the performance of your application. These numbers don't directly affect the Performance score.
Passed audits (19)
Show
100
Accessibility
These checks highlight opportunities to improve the accessibility of your web app. Automatic detection can only detect a subset of issues and does not guarantee the accessibility of your web app, so manual testing is also encouraged.
Best practices
Identical links have the same purpose.
These items highlight common accessibility best practices.
Additional items to manually check (10)
Show
These items address areas which an automated testing tool cannot cover. Learn more in our guide on conducting an accessibility review.
Passed audits (22)
Show
Not applicable (40)
Show
100
Best Practices
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
100
SEO
These checks ensure that your page is following basic search engine optimization advice. There are many additional factors Lighthouse does not score here that may affect your search ranking, including performance on Core Web Vitals. Learn more about Google Search Essentials.
Additional items to manually check (1)
Hide
Structured data is valid
Run these additional validators on your site to check additional SEO best practices.
Passed audits (9)
Show
Not applicable (1)
Show
2/3
Agentic Browsing
These checks ensure high-quality, browsable websites for AI agents and validate the correctness of WebMCP integrations. This category is still under development and subject to change.
Agent Accessibility
llms.txt does not follow recommendations
If your llms.txt file does not follow recommendations, large language models may not be able to understand how you want your website to be crawled or used for training. The llms.txt file should be a Markdown file containing at least one H1 header. Learn more about the llms.txt audit.
Error
File is missing a required H1 header (e.g., "# Title").
File does not appear to contain any links.
These audits highlight best practices for improving the accessibility of the website for AI agents.
Passed audits (2)
Hide
Accessibility tree is well-formed All audits passed
Cumulative Layout Shift 0.011
Not applicable (3)
Hide
WebMCP form coverage
Consider adding WebMCP annotations to the forms listed below. This helps AI agents identify and interact with these forms more reliably.Unscored
WebMCP tools registered
Lists the WebMCP tools registered at the time of analysis.Unscored
WebMCP schemas are valid
Valid WebMCP schemas are required for AI agents to understand and interact with tools correctly. Please fix any errors or warnings reported by the browser.Unscored