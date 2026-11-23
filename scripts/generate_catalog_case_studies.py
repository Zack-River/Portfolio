#!/usr/bin/env python3
"""Generate evidence-first case-study bundles for the portfolio catalog only."""

from __future__ import annotations

import json
import sys
from pathlib import Path

SKILL_ROOT = Path("/home/zack-river/.codex/skills/portfolio-case-study-bundle")
sys.path.insert(0, str(SKILL_ROOT / "scripts"))
from scaffold_case_study_bundle import scaffold  # type: ignore  # noqa: E402

ROOT = Path("/home/zack-river/Documents/Projects/03-Done/Portfolio/Portfolio-Standalone")
OUTPUT_ROOT = ROOT / "portfolio-documentation" / "projects"


def section(eyebrow: str, title: str, paragraph: str, image: str) -> dict:
    return {"id": eyebrow.split(" /")[0].lower(), "eyebrow": eyebrow, "title": title, "paragraphs": [paragraph], "primaryImage": image}


CATALOG = [
    {
        "slug": "beeplayer-qa", "name": "BeePlayer Smart TV", "label": "Case Study / QA & Certification",
        "subtitle": "An evidence-led QA cycle for validating a Smart TV media product across playback, remote navigation, and Tizen behavior.",
        "description": "The portfolio catalog describes a complete end-to-end QA cycle for a Samsung Tizen Smart TV application, including test execution logs, use cases, bug tracking, and a system-level certification audit.",
        "role": [], "stack": ["QA Testing", "Samsung Tizen", "Smart TV"],
        "hook": "The product could play media, but a Smart TV app is only useful when every interaction survives a remote, a real screen, and the platform rules.",
        "goal": "The goal was to validate user-visible behavior end to end: authentication, spatial navigation, media playback, hardware media keys, resolution controls, favorites, and responsive behavior up to 4K.",
        "reality": "TV interfaces do not have a mouse fallback. Focus, D-pad movement, keyboard dismissal, contextual Back behavior, and hardware keys are part of the product contract.",
        "plan": "The documented plan was to turn the product surface into explicit use cases with steps and expected results, then execute them against Samsung Tizen environments and record the evidence.",
        "friction": "The source material names platform-specific risk areas: focus release after the virtual keyboard, D-pad parity, contextual Back navigation, playback initialization, resolution changes, and 4K viewport scaling.",
        "turning": "The work shifted from checking isolated buttons to validating the complete interaction model of a Smart TV product.",
        "architecture": "The resulting bundle separates use-case intent, execution evidence, defect records, and the certification-level audit so a release decision can be traced back to observable behavior.",
        "performance": "The catalog records 100% test-case coverage and 4K cross-resolution testing as project outcomes; no broader performance claim is added here.",
        "product": "The deliverable is a structured QA system: test cases, use cases, bug reports, execution logs, and a Tizen readiness audit.",
        "result": "BeePlayer is presented as a release-readiness story rather than a feature list. The remaining quality bar is continued execution on the real device matrix and regression coverage for future builds.",
        "open": "The supplied material does not state the author's exact role, final defect count, or a signed certification outcome. Those claims remain intentionally open.",
        "sources": ["Portfolio catalog constants.ts", "QA_BeePlayer/QA_EXECUTION_JOURNAL.md", "QA_BeePlayer/QA_RETROSPECTIVE_AUDIT.md", "QA_BeePlayer/IOSApp/TEST_EXECUTION_REPORT.md", "QA_BeePlayer/AndroidTV/TEST_EXECUTION_REPORT.md"],
        "cover": "/projects/beeplayer/Cover.webp", "gallery": ["/projects/beeplayer/gallery/bug-1.webp", "/projects/beeplayer/gallery/bug-2.webp", "/projects/beeplayer/gallery/bug-3.webp"],
    },
    {
        "slug": "streamflow", "name": "Streamflow", "label": "Case Study / Music Streaming Platform",
        "subtitle": "A full-stack music platform where authentication, uploads, playback, playlists, moderation, and recovery have to feel like one product.",
        "description": "Streamflow is documented as a MERN audio streaming platform for listeners, artists, and administrators. The source describes JWT authentication, audio and cover uploads, streaming, playlists, moderation, persistent playback, search, and admin tooling.",
        "role": [], "stack": ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
        "hook": "A music player looks simple until the first person uploads a track, leaves halfway through it, returns on another device, and expects the system to remember.",
        "goal": "The intended experience connects discovery, authentication, upload, streaming, queue control, favorites, playlists, artist workflows, and administrative moderation in one continuous product.",
        "reality": "The platform has two very different truths to keep aligned: the browser's live audio state and the backend's durable user and media state.",
        "plan": "The documented plan combines a React/Vite client with an Express/MongoDB API, JWT-protected routes, media storage, reusable API utilities, and a centralized music context for queue and playback state.",
        "friction": "The project log records playback continuation, queue progression, shuffle/repeat behavior, mobile player layout, search scale, Cloudinary fallback, role conflicts, and stale playlist state as recurring sources of failure.",
        "turning": "The deeper problem was not a single player bug. It was drift between local UI state, server state, storage providers, and role-specific workflows.",
        "architecture": "The documented response was to centralize playback state, protect route boundaries, prioritize fresh backend data over stale local context, and preserve local media when Cloudinary upload fails.",
        "performance": "The catalog records 34 requests per second under load testing and optimized compound/text indexing. These remain scoped project measurements, not universal guarantees.",
        "product": "The product that emerged includes listener pages, artist uploads and profiles, playlists and favorites, a persistent player, search, admin moderation, protected routes, and recovery paths.",
        "result": "Streamflow moved from a streaming demo toward a documented platform boundary. The remaining work called out in the source includes true multi-bitrate transcoding behind the existing audio-quality UI.",
        "open": "The source contains historical and current README variants. Claims should be reconciled against the latest running branch before publication.",
        "sources": ["Stream_Flow/README.md", "Stream_Flow/changes.md", "Stream_Flow/TODO_BACKLOG.md", "Stream_Flow/server/streamflow_readme.md", "Stream_Flow/client/README.md", "Portfolio catalog constants.ts"],
        "cover": "/projects/streamflow/Cover.webp", "gallery": ["/projects/streamflow/01-Home-Logged-In-Hero.webp", "/projects/streamflow/03-Artist-Dashboard.webp", "/projects/streamflow/11-Admin-Dashboard.webp", "/projects/streamflow/16-Mobile-Dark.webp"],
    },
    {
        "slug": "karbala", "name": "Karbala Awareness Platform", "label": "Case Study / Educational Platform",
        "subtitle": "An Arabic-first educational season that turns thirteen nights of content into a navigable, measurable learning experience.",
        "description": "The Karbala source describes a Next.js platform with public content, timed quizzes, quiz analytics, visitor analytics, an admin dashboard, and a managed Supabase gallery.",
        "role": [], "stack": ["Next.js", "TypeScript", "Tailwind CSS", "Supabase PostgreSQL", "Supabase Auth", "Supabase Storage"],
        "hook": "A content season can be published as a set of pages, but that does not make it feel like a journey.",
        "goal": "The product goal was to let visitors browse the season, explore all nights, read content, access resources, listen to recordings, view cards, and participate in timed quizzes while administrators manage the material.",
        "reality": "Arabic-first, RTL-first, mobile-first content must remain readable while quiz timing, grading, media, and admin operations stay trustworthy.",
        "plan": "The project combines Next.js App Router routes, Supabase PostgreSQL/Auth/Storage, public content components, quiz state, analytics, and an admin surface for the season's data.",
        "friction": "The documented system has to protect quiz answers until submission, enforce schedule and late-submit rules, manage gallery storage, and recover once from stale deployment chunks.",
        "turning": "The platform became more than a content site when each public interaction needed a corresponding state, policy, or operational workflow.",
        "architecture": "The source separates public routes, admin routes, API routes, Supabase migrations and RLS, storage helpers, quiz components, and shared types so content operations do not leak into the learner experience.",
        "performance": "The documented deployment process explicitly treats standalone static assets as part of runtime correctness; missing them can cause ChunkLoadError or 404s.",
        "product": "The result is a public season experience with nights, cards, resources, quizzes, gallery, and an admin dashboard for managing the same content.",
        "result": "Karbala is best presented as a structured educational product whose trust comes from content flow, quiz safeguards, analytics, and operational control—not only from its visual theme.",
        "open": "The source describes implementation and deployment checks but does not provide a public learning-outcome benchmark. Avoid claiming retention or conversion improvements as measured results.",
        "sources": ["Karbala/README.md", "Karbala/docs/project-overview.md", "Karbala/docs/database-schema.md", "Karbala/docs/admin-requirements.md", "Karbala/PROJECT_STATUS.md", "Portfolio catalog constants.ts"],
        "cover": "/projects/QarbalaCover.webp", "gallery": ["/projects/karbala/01-Home-Hero.webp", "/projects/karbala/03-Home-Nights.webp", "/projects/karbala/12-Admin-Quizes.webp", "/projects/karbala/17-Admin-Gallery.webp"],
    },
    {
        "slug": "smartq", "name": "SmartQ", "label": "Case Study / Gamified Quiz Platform",
        "subtitle": "A quiz product concept that makes the student loop visible while giving instructors a control surface for content and progress.",
        "description": "The portfolio catalog describes SmartQ as an educational platform with interactive quizzes, student experiences, instructor management, and a gamification engine. The supplied local evidence is primarily the catalog and exported interface views.",
        "role": [], "stack": ["React", "Node.js", "Express", "Gamification"],
        "hook": "A quiz can score an answer and still fail to make learning feel active.",
        "goal": "SmartQ was positioned around an engaging student quiz journey alongside instructor tools for managing quizzes, users, categories, playlists, and settings.",
        "reality": "The product has to balance game-like momentum with the clarity needed for answers, results, settings, and administration.",
        "plan": "The available catalog and screens point to separate student and admin surfaces, with a quiz game loop, answer state, result view, leaderboard, and content-management views.",
        "friction": "The supplied project folder does not include the implementation source or test logs, so runtime behavior and backend decisions cannot be promoted to verified claims.",
        "turning": "For this project, the honest turning point is the evidence boundary: screenshots can show the intended experience, not prove the full system behind it.",
        "architecture": "This bundle treats the role-based screen map and quiz flow as the primary evidence and leaves API, persistence, scoring, and accessibility behavior open until source material is available.",
        "performance": "No benchmark or runtime performance evidence was supplied.",
        "product": "The visual product surface includes landing, authentication, student home, quiz menu, quiz game, answers, results, leaderboard, and administrator screens.",
        "result": "SmartQ has a clear visual case-study foundation. A production narrative should be updated when repository source, QA notes, or deployed behavior are available.",
        "open": "Source code, role implementation, data model, test evidence, exact ownership, and measured outcomes are not present in the supplied project directory.",
        "sources": ["Portfolio catalog constants.ts", "Portfolio/Project_Images_Export/smartq/", "Portfolio/Project_Images_Export/Smartq/"],
        "cover": "/projects/Smartq.webp", "gallery": ["/projects/smartq/01-Landing-Hero-Dark.webp", "/projects/smartq/06-Student-Home.webp", "/projects/smartq/10-Student-Quiz-Game.webp", "/projects/smartq/13-Admin-Dashboard-Home.webp"],
    },
    {
        "slug": "dr-sara-ragab", "name": "Dr. Sara Ragab", "label": "Case Study / Landing Page",
        "subtitle": "A focused landing page for a Saudi AI education initiative, carried through design, conversion, deployment, and domain setup.",
        "description": "The portfolio catalog describes a responsive, high-conversion landing page with WhatsApp integration, Vercel deployment, DNS configuration, and future-ready subdomain architecture.",
        "role": [], "stack": ["Landing Page", "UI/UX", "Vercel", "DNS"],
        "hook": "A landing page has one job: make the next action feel obvious without making the visitor work for it.",
        "goal": "The goal was to communicate the AI educational offer clearly, work responsively, and move interested visitors toward the WhatsApp contact path.",
        "reality": "The page had to connect visual hierarchy with real deployment concerns: domain ownership, DNS, and a structure that would not block future expansion.",
        "plan": "The documented scope combines a minimalist responsive interface with a direct WhatsApp CTA, Vercel hosting, DNS setup, and a future-ready subdomain approach.",
        "friction": "The available source material focuses on delivered surface and infrastructure setup rather than a recorded experiment log; unsupported conversion numbers are intentionally excluded.",
        "turning": "The important decision was treating deployment and domain structure as part of the product handoff, not as an afterthought to the visual page.",
        "architecture": "The page is documented as a focused landing experience with a clear CTA and deployment boundary, while future subdomains remain an extension point.",
        "performance": "No measured Lighthouse or conversion benchmark is included in the supplied source.",
        "product": "The final surface is a responsive promotional page with sections for audience, deliverables, rates, and a WhatsApp-oriented call to action.",
        "result": "The project shows how a small page can still require product, deployment, and domain decisions to be complete.",
        "open": "Exact author role, analytics data, and post-launch conversion outcomes are not documented in the supplied material.",
        "sources": ["Portfolio catalog constants.ts", "Portfolio/Project_Images_Export/sara-ragab/"],
        "cover": "/projects/sara-ragab/COVER.webp", "gallery": ["/projects/sara-ragab/01-Home.webp", "/projects/sara-ragab/02-For-Who.webp", "/projects/sara-ragab/05-Rates.webp", "/projects/sara-ragab/06-CTA.webp"],
    },
    {
        "slug": "mostafa-nawareg", "name": "Dr. Mostafa Nawareg", "label": "Case Study / Consulting Portfolio",
        "subtitle": "A professional portfolio that turns a large body of books, credentials, and consulting offers into a path visitors can understand.",
        "description": "The catalog describes a portfolio for a business consultant and author of 40 books, built around expertise, academic achievements, and marketing consultation services. The source folder contains SEO and structured-data repair logs.",
        "role": [], "stack": ["WordPress", "Astra", "Elementor", "W3Cache", "PHP", "JavaScript", "HTML", "CSS"],
        "hook": "When expertise spans books, training, and consulting, the challenge is not adding more sections—it is making trust legible.",
        "goal": "The page needed to present authority, published work, consulting packages, and contact paths for a broad audience.",
        "reality": "A content-heavy marketing site also lives inside search engines, where structured data, breadcrumbs, profile entities, and dates must describe the same page as the visitor sees.",
        "plan": "The documented work combines WordPress page construction with responsive presentation, consulting funnels, and structured-data maintenance.",
        "friction": "The SEO logs record invalid null JSON-LD, a missing Person name, incomplete BreadcrumbList items, invalid dateModified values, and encoded mailto links that affected page quality and discoverability.",
        "turning": "The project became an information-architecture and data-quality exercise as much as a visual portfolio build.",
        "architecture": "The correction path kept visible content, Schema.org entities, breadcrumbs, dates, and internal links aligned instead of treating SEO markup as detached metadata.",
        "performance": "The source documents validation and fixes, but no universal traffic or performance uplift is claimed.",
        "product": "The result combines home, consulting offers, book-focused pages, testimonials, FAQs, and contact paths with repaired structured data.",
        "result": "The portfolio is a case study in making a mature body of expertise easier to navigate and easier for search systems to interpret.",
        "open": "The supplied logs do not provide a complete before/after organic traffic report or a verified conversion delta.",
        "sources": ["Portfolio catalog constants.ts", "nawareg/gsc_warranty_fixes_summary.md", "nawareg/gsc_issues_tasks.md", "nawareg/project-management/"],
        "cover": "/projects/Mostafa-Nawareg.webp", "gallery": ["/projects/mostafa-nawareg/01-Home-Hero.webp", "/projects/mostafa-nawareg/05-Book-Hero.webp", "/projects/mostafa-nawareg/10-Book-Faq.webp", "/projects/mostafa-nawareg/18-Books-About.webp"],
    },
    {
        "slug": "ding", "name": "Ding", "label": "Case Study / Emotionally-Aware Social Platform",
        "subtitle": "A social platform whose architecture connects real-time communication, recommendations, media, and an emotional wellbeing layer.",
        "description": "Ding is documented as a modular NestJS social backend with PostgreSQL/Prisma, Redis, Neo4j, Bull, MeiliSearch, Cloudinary, Socket.IO, WebRTC, and an AI wellbeing layer called Noro.",
        "role": [], "stack": ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Neo4j", "Redis", "Bull", "MeiliSearch", "Socket.IO", "WebRTC", "Cloudinary"],
        "hook": "A social feed can connect people while still making the emotional context of that connection invisible.",
        "goal": "The product vision combines social identity, posts and feeds, chat and calls, creator features, recommendations, moderation, marketplace roles, and an emotional wellbeing assistant.",
        "reality": "The system has to coordinate transactional data, graph relationships, caches, search indexes, queues, media, sockets, and safety-sensitive AI behavior without pretending those systems are interchangeable.",
        "plan": "The source describes a modular monolith with Prisma/PostgreSQL as the primary relational store, Neo4j for graph traversal, Redis for caching and queues, MeiliSearch for search, and focused feature modules.",
        "friction": "The documented challenges include feed composition, graph synchronization, sentiment pipelines, chat state, media fallbacks, marketplace governance, and the difference between estimated and runtime-verified performance.",
        "turning": "The turning point is the decision to make boundaries explicit: relational truth, graph projections, asynchronous work, and user-facing real-time state each get a defined job.",
        "architecture": "The result uses feature modules, shared guards and validators, Bull workers, a PostgreSQL schema, graph relationships, Redis cache keys, and independent search/media boundaries.",
        "performance": "The technical analysis reports scoped estimates such as Redis feed improvements and graph/search comparisons, while explicitly noting that exact runtime APM measurements are still required.",
        "product": "Ding's visible surface includes social feeds, profiles, chat rooms, Noro interactions, reels, settings, privacy controls, and media previews.",
        "result": "Ding is best told as an architecture case study about making a large social product governable while keeping the emotional goal visible.",
        "open": "The source calls out real payment settlement as future scope and distinguishes estimated benchmark values from instrumented runtime measurements.",
        "sources": ["Graduation/TECHNICAL_ANALYSIS.md", "Graduation/CV_SECTION.md", "Graduation/Ding-Platform-Backend/_documentations/PROJECT_FULL_OVERVIEW.md", "Graduation/Ding-Platform-Backend/_documentations/PROGRESS.md", "Portfolio catalog constants.ts"],
        "cover": "/projects/Ding.webp", "gallery": ["/projects/ding/01-Landing-Page.webp", "/projects/ding/03-Feed-Page.webp", "/projects/ding/06-Chat-Rooms.webp", "/projects/ding/07-Noro-Ai-Chat.webp"],
    },
    {
        "slug": "omnipos", "name": "OmniPOS", "label": "Case Study / Local-First POS",
        "subtitle": "A desktop checkout system designed around fast scanning, local reliability, inventory truth, and safe invoice export.",
        "description": "The POS documentation defines a local-first desktop MVP with product CRUD, barcode lookup, cart checkout, discounts, SQLite persistence, and Excel export using Avalonia, ReactiveUI, Dapper, and ClosedXML.",
        "role": [], "stack": [".NET 10", "Avalonia UI", "ReactiveUI", "SQLite", "Dapper", "ClosedXML"],
        "hook": "A cashier cannot wait for a cloud round trip every time a barcode enters the cart.",
        "goal": "The target experience is product lookup, cart building, discount application, checkout, invoice history, and export from a desktop app that remains useful without internet access.",
        "reality": "POS correctness lives in small boundaries: barcode input arrives as keyboard-wedge events, invoice items need price snapshots, and stock and totals must remain consistent.",
        "plan": "The documented architecture separates Avalonia views, ReactiveUI view models, services, repositories, SQLite migrations, and helpers for barcode input and Excel export.",
        "friction": "The source emphasizes scan speed, transaction safety, local persistence, printer/export concerns, and the need to keep business logic out of the UI and database layers.",
        "turning": "The product is shaped by the decision to treat offline reliability and atomic local state as primary requirements, not fallback behavior.",
        "architecture": "A local-first application boundary combines MVVM, DI, Dapper repositories, SQLite schema initialization, product/cart/invoice services, and explicit export helpers.",
        "performance": "The catalog describes zero-latency barcode scanning; the source supports the input design but does not provide a measured latency benchmark.",
        "product": "The documented MVP includes dashboard, cashier flow, products, invoices, settings, barcode lookup, discounts, and Excel exports.",
        "result": "OmniPOS is a case study in designing operational software around the rhythm of a real counter instead of a generic CRUD dashboard.",
        "open": "The supplied material describes the MVP plan and design system; production printer certification and measured cashier throughput are not established here.",
        "sources": ["POS/POS_MVP_Plan.md", "POS/DESIGN.md", "POS/design-plan.md", "POS/POSApp/README.md", "Portfolio catalog constants.ts", "Ui-Ux-Screens/omnipos_design_system/DESIGN.md"],
        "cover": "/projects/pos/Cover.webp", "gallery": ["/projects/pos/Dashboard-Home.webp", "/projects/pos/Dashboard-Cash.webp", "/projects/pos/Dashboard-Products.webp", "/projects/pos/Inovice.webp"],
    },
    {
        "slug": "luxe-dental", "name": "Luxe Dental", "label": "Case Study / Healthcare Website",
        "subtitle": "A premium dental experience that uses hospitality cues to make treatment, trust, and booking easier to understand.",
        "description": "The portfolio catalog describes a high-end healthcare website with luxury hospitality aesthetics, transparent treatment information, and appointment booking. Local evidence is limited to catalog data and exported screens.",
        "role": [], "stack": ["Next.js", "Web Design", "Healthcare", "UI/UX"],
        "hook": "A healthcare website is often the first appointment experience, long before a patient reaches the clinic.",
        "goal": "The page was intended to make the clinic feel trustworthy, explain services and plans clearly, and guide visitors toward booking.",
        "reality": "Luxury visual language must not obscure treatment details, prices, staff information, accessibility, or the next action.",
        "plan": "The catalog and screens point to a multi-page experience covering home, services, about, results, staff, prices, testimonials, gallery, and contact.",
        "friction": "No implementation history, issue log, or runtime test evidence is available in the supplied source directory.",
        "turning": "The reliable story here is visual-system coherence: hospitality-inspired polish has to remain subordinate to patient clarity.",
        "architecture": "This bundle records the documented interface scope while leaving implementation and integration details explicitly unverified.",
        "performance": "No performance or booking-conversion measurement is supplied.",
        "product": "The visible product is a responsive healthcare marketing experience with service discovery, treatment information, social proof, and contact paths.",
        "result": "Luxe Dental has enough visual evidence for a design-led case study, but not enough source evidence for technical claims.",
        "open": "Repository source, ownership, analytics, accessibility audit, and production deployment details remain open.",
        "sources": ["Portfolio catalog constants.ts", "Portfolio/Project_Images_Export/luxe-dental/"],
        "cover": "/projects/luxe-dental.webp", "gallery": ["/projects/luxe-dental/01-Home-Hero-Light-Ar.webp", "/projects/luxe-dental/06-Home-Services.webp", "/projects/luxe-dental/14-About-Prices.webp", "/projects/luxe-dental/19-Contact-Page.webp"],
    },
    {
        "slug": "hotel-pro", "name": "Hotel Pro", "label": "Case Study / SaaS Landing Page",
        "subtitle": "A hospitality SaaS story designed to make operational software feel as considered as the hotels it serves.",
        "description": "The catalog describes Hotel Pro as a SaaS landing page for luxury hotels and resorts, using an emotion-driven narrative and a technical feature showcase. Local evidence is visual-only.",
        "role": [], "stack": ["React", "Tailwind CSS", "SaaS", "Hospitality"],
        "hook": "Hotel software is usually introduced through features; Hotel Pro starts with the atmosphere those features are meant to protect.",
        "goal": "The landing page was intended to make a hotel operator understand the product's value, workflow, plans, and next step in one calm narrative.",
        "reality": "A premium visual direction still has to explain an operational product without hiding the details behind mood.",
        "plan": "The catalog and exported screens show a sequence of hero, stats, features, preview, how-it-works, testimonials, plans, FAQ, CTA, and footer.",
        "friction": "No repository implementation notes, analytics, or measured outcomes are present in the supplied source directory.",
        "turning": "The core design decision is to frame technical capability through the emotional standard of a five-star hospitality experience.",
        "architecture": "This bundle documents the page narrative and screen system while keeping code-level and deployment claims unverified.",
        "performance": "No benchmark is supplied.",
        "product": "The result is an emotion-led SaaS marketing surface with feature explanation, product preview, plans, FAQ, and conversion CTA.",
        "result": "Hotel Pro is ready for a visual case study; a technical case study needs the source repository or delivery notes.",
        "open": "Exact implementation role, accessibility evidence, deployment, and business outcomes are not documented locally.",
        "sources": ["Portfolio catalog constants.ts", "Portfolio/Project_Images_Export/hotel-pro/"],
        "cover": "/projects/Hotel-Pro.webp", "gallery": ["/projects/hotel-pro/01-Home-Hero.webp", "/projects/hotel-pro/03-Home-Features.webp", "/projects/hotel-pro/04-Home-Preview.webp", "/projects/hotel-pro/07-Home-Plans.webp"],
    },
    {
        "slug": "khaled-nasser", "name": "Khaled Nasser", "label": "Case Study / Personal Branding Portfolio",
        "subtitle": "A deep-blue personal brand system that turns workflows, results, and services into a clear professional narrative.",
        "description": "The catalog describes a striking personal portfolio with deep blue brand accents, workflow and service showcases, and high-performance rendering. Local evidence is limited to catalog data and screenshots.",
        "role": [], "stack": ["UI/UX", "Portfolio", "Web Design"],
        "hook": "A personal portfolio has to do more than look polished; it has to show how the person thinks and works.",
        "goal": "The experience was intended to communicate professional results, services, workflow, timeline, and contact without diluting the personal brand.",
        "reality": "A strong accent color can become decoration unless the content structure gives it a job in the hierarchy.",
        "plan": "The exported screens describe a sequence across hero, stats/workflow, vision, results, contact, services, about, timeline, and change point.",
        "friction": "No source repository or test evidence was supplied for technical or performance claims.",
        "turning": "The visual system uses brand color as a structural signal for progress, results, and movement through the story.",
        "architecture": "This bundle separates verified visual evidence from unverified implementation detail.",
        "performance": "The catalog says high-performance rendering, but no benchmark is included, so the claim remains a catalog label rather than a measured result.",
        "product": "The product is a compact personal brand site with service, workflow, result, about, and contact views.",
        "result": "Khaled Nasser has a strong design-led case-study basis and needs source or delivery records for a deeper engineering narrative.",
        "open": "Implementation stack, author role, accessibility, deployment, and outcome metrics are not locally documented.",
        "sources": ["Portfolio catalog constants.ts", "Portfolio/Project_Images_Export/khaled-nasser/"],
        "cover": "/projects/Khaled-Nasser-Portfolio.webp", "gallery": ["/projects/khaled-nasser/01-Home-Hero-Blue.webp", "/projects/khaled-nasser/03-Home-Stats-and-WorkFlow.webp", "/projects/khaled-nasser/08-Work-Flow.webp", "/projects/khaled-nasser/10-Time-Line.webp"],
    },
    {
        "slug": "ahmed-hakim", "name": "Ahmed Hakim", "label": "Case Study / Creative Portfolio",
        "subtitle": "A visual portfolio built around motion, transitions, and a professional story that unfolds instead of stacking cards.",
        "description": "The catalog describes a highly visual interactive portfolio with creative projects, achievements, professional background, and smooth transition effects. Local evidence is visual-only.",
        "role": [], "stack": ["Frontend", "Animation", "Framer Motion"],
        "hook": "A portfolio can show work, or it can make the act of discovering that work feel intentional.",
        "goal": "The page was intended to present creative work, experience, results, services, and story through a guided visual flow.",
        "reality": "Motion earns its place only when it clarifies relationships and keeps the visitor oriented.",
        "plan": "The exported views cover hero, stats and logo slider, experience, story, about, services, and results, with smooth transition effects as the visual spine.",
        "friction": "No source repository, motion specification, accessibility review, or runtime evidence is included locally.",
        "turning": "The visual concept treats transition as part of the storytelling rather than a decorative animation layer.",
        "architecture": "This bundle records the interface evidence and explicitly leaves implementation details open.",
        "performance": "No measured performance claim is supplied.",
        "product": "The result is a motion-led creative portfolio with work, experience, services, results, and story sections.",
        "result": "Ahmed Hakim is ready for a visual case study and should gain a deeper technical narrative only after source or delivery evidence is recovered.",
        "open": "Exact implementation role, component architecture, reduced-motion behavior, deployment, and outcomes are not documented.",
        "sources": ["Portfolio catalog constants.ts", "Portfolio/Project_Images_Export/ahmed-hakim/"],
        "cover": "/projects/Ahmed-Hakim-Portfolio.webp", "gallery": ["/projects/ahmed-hakim/01-Home-Hero.webp", "/projects/ahmed-hakim/03-Home-Experience.webp", "/projects/ahmed-hakim/04-Home-Story.webp", "/projects/ahmed-hakim/07-Results.webp"],
    },
]


def payload(spec: dict, language: str) -> dict:
    rtl = language == "ar"
    prefix = "هذا المشروع موثق من مواد البورتفوليو المتاحة فقط. " if rtl else "This project is written only from the supplied portfolio evidence. "
    p = spec
    if rtl:
        ui = {"backToProjects": "العودة للمشاريع", "back": "رجوع", "languageStatus": "اللغة", "switchLanguage": "English", "caseStudy": "دراسة حالة", "heroEyebrow": p["label"], "roleLabel": "الدور", "contextLabel": "السياق", "contextValue": "مشروع من كتالوج البورتفوليو", "stackLabel": "التقنيات"}
        sections = [
            section("01 / البداية", "الفكرة التي بدت بسيطة", prefix + f"بدأ {p['name']} من حاجة تبدو مباشرة، لكن الاستخدام الحقيقي كشف أن القيمة لا تأتي من تنفيذ الفكرة فقط، بل من ضبط التفاصيل التي تجعلها قابلة للاعتماد.", "لقطة افتتاحية توضّح الفكرة الأساسية"),
            section("02 / الهدف", "التجربة التي أردنا الوصول إليها", f"كان الهدف من {p['name']} بناء تجربة واضحة تقود المستخدم إلى النتيجة الأساسية بأقل قدر من الالتباس، مع الحفاظ على الوظائف التي يثبتها المصدر.", "لقطة توضّح التجربة المستهدفة"),
            section("03 / الواقع", "القيد الحقيقي", "أظهر تحليل المشروع أن المشكلة ليست في الواجهة وحدها؛ فالسياق، والحالات المختلفة، وحدود البيانات أو المنصة تؤثر في النتيجة التي يراها المستخدم.", "مخطط يوضح القيد أو التعقيد"),
            section("04 / الخطة", "النموذج الأول", "بدأ التنفيذ بتقسيم التجربة إلى طبقات ومسؤوليات واضحة، ثم ربط الواجهة بالمنطق والبيانات وفق ما توضحه مستندات المشروع.", "مخطط التدفق الأول"),
            section("05 / الاحتكاك", "عندما بدأت التفاصيل في المقاومة", "مع ظهور الحالات الواقعية، ظهرت نقاط احتكاك في التفاعل، والحالات الحدية، والتشغيل، والتكامل. لذلك بقيت هذه النقاط جزءًا من القصة بدل إخفائها.", "لقطة للمشكلة أو الحالة الحدية"),
            section("06 / التجارب", "الحلول التي احتاجت مراجعة", "لم تكن كل فكرة أولية مناسبة للسياق. تكشف الأدلة المتاحة أين احتاجت القرارات إلى مراجعة، وما الذي يجب التحقق منه قبل وصفه كحل نهائي.", "مقارنة قبل وبعد التجربة"),
            section("07 / نقطة التحول", "المشكلة كانت أعمق من عطل منفرد", "كانت نقطة التحول هي إدراك أن بعض المشكلات ناتجة عن تداخل المسؤوليات وتعدد تفسيرات الحالة نفسها، لا عن عنصر واحد معطوب.", "مخطط تشتت المسؤوليات"),
            section("08 / مصدر واحد للحقيقة", "إعادة بناء الحدود", "أصبحت الحدود أوضح: لكل طبقة وظيفة محددة، وتعود القرارات الأساسية إلى مصدر واحد يمكن فحصه وتحديثه دون أن تتباعد بقية الأجزاء.", "مخطط معماري موحد"),
            section("09 / الأداء", "الأداء كجزء من المنتج", "تُذكر أرقام الأداء أو الاعتمادية هنا فقط داخل نطاق الاختبار الموثق. لا ينبغي تحويل نتيجة حالة محددة إلى وعد عام لكل الأجهزة أو المدخلات.", "لقطة benchmark أو قياس موثق"),
            section("10 / المنتج", "ما الذي ظهر في النهاية", f"في الصورة النهائية، تجمع {p['name']} بين الفكرة الأساسية، وطبقات التنفيذ، والواجهة التي يستطيع المستخدم التعامل معها، مع إبقاء حدود ما لم يُثبت واضحة.", "لقطة المنتج النهائي"),
            section("11 / النتيجة", "ما تغيّر وما بقي مفتوحًا", "النتيجة ليست ادعاء اكتمال مطلق؛ إنها توثيق لما تدعمه الأدلة الآن، وما يحتاج إلى مصدر أو مراجعة إضافية قبل نشره كحقيقة.", "لقطة النتيجة أو التسليم"),
        ]
        gallery = {"eyebrow": "المعرض / لقطات مختارة", "title": "مشاهد من الرحلة", "description": "صور داعمة للقصة، وليست بديلًا عن الدليل النصي.", "items": ["المشهد الرئيسي", "تفصيل من التجربة", "حالة أو مشكلة موثقة", "النتيجة النهائية"]}
        cta = {"eyebrow": "التالي", "title": "هل نحل المشكلة التالية؟", "label": "استكشف باقي المشاريع", "href": "/projects"}
        title = p["name"]
        subtitle = f"دراسة حالة موثقة لمشروع {p['name']}، من الفكرة الأولى إلى النتيجة الحالية وحدود التحقق المتبقية."
        meta = f"توثيق عربي قائم على الأدلة لمشروع {p['name']} كما يظهر في كتالوج البورتفوليو ومصادره المتاحة."
    else:
        ui = {"backToProjects": "Back to Projects", "back": "Back", "languageStatus": "Language", "switchLanguage": "العربية", "caseStudy": "Case Study", "heroEyebrow": p["label"], "roleLabel": "My role", "contextLabel": "Context", "contextValue": "Portfolio catalog project", "stackLabel": "Core stack"}
        sections = [
            section("01 / The hook", "The idea looked simple", p["hook"], "Opening scene that establishes the product tension"),
            section("02 / The goal", "The experience the product needed", p["goal"], "Target user journey or primary product surface"),
            section("03 / Reality check", "The constraint underneath", p["reality"], "Domain constraint or edge-case visual"),
            section("04 / The original plan", "A credible first model", p["plan"], "First flow or architecture diagram"),
            section("05 / When things started breaking", "The friction of real use", p["friction"], "Broken state, issue capture, or boundary case"),
            section("06 / Failed experiments", "The reasonable fixes that needed revision", p["friction"], "Before/after experiment or regression"),
            section("07 / The turning point", "The deeper system problem", p["turning"], "Fragmented responsibility visual"),
            section("08 / One source of truth", "Rebuilding the boundaries", p["architecture"], "Canonical architecture or workflow"),
            section("09 / Performance or reliability", "Product quality under real conditions", p["performance"], "Scoped benchmark, test evidence, or reliability check"),
            section("10 / The product", "What emerged", p["product"], "Final product surface"),
            section("11 / The result", "What changed and what remains open", p["result"], "Outcome or handoff evidence"),
        ]
        gallery = {"eyebrow": "Gallery / selected views", "title": "A few scenes from the journey", "description": "Supporting visuals that reinforce the story without replacing evidence.", "items": ["Primary product view", "Interaction detail", "Constraint or issue view", "Final result"]}
        cta = {"eyebrow": "Next", "title": "Should we solve the next problem?", "label": "Explore more projects", "href": "/projects"}
        title = p["name"]
        subtitle = p["subtitle"]
        meta = p["description"]
    return {
        "project": {"id": p["slug"], "title": title, "label": p["label"], "language": language, "direction": "rtl" if rtl else "ltr", "subtitle": subtitle, "metaDescription": meta, "role": p["role"], "coreStack": p["stack"], "heroImage": p["cover"], "heroImageAlt": f"{p['name']} project cover", "ui": ui},
        "sections": sections, "gallery": gallery, "cta": cta,
        "editorialGuardrails": [p["open"] if not rtl else "لا تحوّل وصف الكتالوج إلى نتيجة مقاسة من دون مصدر.", "Do not convert catalog descriptions into measured outcomes without a source." if not rtl else "أبقِ الدور والتنفيذ والنتائج المقاسة معلقة حتى يثبتها مصدر واضح.", "Keep implementation role empty until a project source documents it." if not rtl else "حافظ على أسماء التقنيات وخصائص العقد كما هي عند الحاجة إلى الدقة التقنية."],
    }


def write_bundle(spec: dict) -> None:
    out = OUTPUT_ROOT / spec["slug"]
    if not out.exists():
        scaffold(spec["name"], spec["slug"], out, True)
    prefix = spec["slug"].upper().replace("-", "_")
    (out / "README.md").write_text(f"# {spec['name']} Portfolio Documentation Bundle\n\n{spec['description']}\n\n## Evidence boundary\n\n" + "\n".join(f"- `{source}`" for source in spec["sources"]) + f"\n\nOpen work: {spec['open']}\n", encoding="utf-8")
    journey = f"# {spec['name']}: Engineering Journey\n\n## The hook\n\n{spec['hook']}\n\n## The goal\n\n{spec['goal']}\n\n## The reality check\n\n{spec['reality']}\n\n## The original plan\n\n{spec['plan']}\n\n## When things started breaking\n\n{spec['friction']}\n\n## The turning point\n\n{spec['turning']}\n\n## One source of truth\n\n{spec['architecture']}\n\n## Performance and reliability\n\n{spec['performance']}\n\n## The product that emerged\n\n{spec['product']}\n\n## The result\n\n{spec['result']}\n\n## Evidence boundary\n\n{spec['open']}\n"
    (out / f"{prefix}_ENGINEERING_JOURNEY.md").write_text(journey, encoding="utf-8")
    (out / f"{prefix}_CASE_STUDY_CONTENT.json").write_text(json.dumps(payload(spec, "en"), ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (out / f"{prefix}_CASE_STUDY_CONTENT_AR.json").write_text(json.dumps(payload(spec, "ar"), ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    prompts = ["# " + spec["name"] + " Case Study — Image Prompt Brief\n", "\nUse the existing screenshot or a faithful diagram. Do not invent metrics, text, controls, or states. One primary visual per story section:\n"]
    for item in payload(spec, "en")["sections"]:
        prompts.append(f"\n## [{item['id']}] {item['title']}\n\n- Asset / placeholder: `{item['primaryImage']}`\n- Main idea: Visualize the decision or tension at this beat.\n- Narrative goal: Prove the paragraph without turning the page into a screenshot dump.\n- Must show: The smallest set of real UI, diagram, or evidence needed.\n- Format: Landscape, mobile-safe center crop, readable at page width.\n- Avoid: Invented data, unreadable fake copy, stock imagery, and unrelated decorative screens.\n")
    (out / f"{prefix}_CASE_STUDY_IMAGE_PROMPTS.md").write_text("".join(prompts), encoding="utf-8")
    chapter_titles = ["Project Identity", "Product Idea", "Technology Stack and Architecture", "Goal, Value, and Users", "Engineering Challenges", "Solutions, Experiments, and Lessons", "Quality and Authoring Workflow", "From Prototype to Product"]
    chapter_bodies = [spec["description"], spec["hook"], spec["architecture"], spec["goal"], spec["friction"], spec["turning"], spec["open"], spec["result"]]
    for index, (title, body) in enumerate(zip(chapter_titles, chapter_bodies), 1):
        filename = sorted((out / "chapters").glob(f"{index:02d}-*.md"))[0]
        filename.write_text(f"# {spec['name']}: {title}\n\n{body}\n\n## Sources\n\n" + "\n".join(f"- `{source}`" for source in spec["sources"]) + "\n", encoding="utf-8")
    (out / "evidence" / "README.md").write_text("# Evidence\n\n" + "\n".join(f"- `{source}`" for source in spec["sources"]) + f"\n\n## Limitations\n\n{spec['open']}\n", encoding="utf-8")
    (out / "evaluation" / "README.md").write_text(f"# Evaluation and Quality Workflow\n\nDocumented quality boundary: {spec['open']}\n\nDo not call catalog copy, a screenshot, or a planned feature a verified runtime result.\n", encoding="utf-8")
    (out / "PORTFOLIO_BUNDLE_GUIDE_PROMPT.md").write_text(f"# {spec['name']} Bundle Guide\n\nRead the evidence list before editing copy. Keep the story connected: tension → constraint → plan → friction → turning point → architecture → result. Preserve the open-work boundary.\n", encoding="utf-8")


if __name__ == "__main__":
    OUTPUT_ROOT.mkdir(parents=True, exist_ok=True)
    for item in CATALOG:
        write_bundle(item)
        print(item["slug"])
