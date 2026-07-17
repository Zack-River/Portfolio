import {
  Project,
  SkillCategory,
  Education,
  Experience,
  Service,
} from "./types";
import {
  Server,
  Database,
  Globe,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "Abdallah Wageeh Ahmed",
  title: "Software Engineer",
  subtitle:
    "Building scalable web applications and backend systems with a focus on performance, clean architecture, and long-term maintainability.",
  email: "zackriver.dev@gmail.com",
  phone: "+201201024880",
  linkedin: "linkedin.com/in/labdallah-wageehl",
  github: "github.com/Zack-River",
  bio: "Software Engineer specializing in full-stack and backend development and Freelancer with a strong focus on scalable architecture, performance, and maintainability with +3 years of Experience. I build modern web applications, REST APIs, authentication systems, CMS platforms, and real-time solutions while emphasizing clean code and long-term reliability. My goal is to create software that not only works today but continues to scale as products grow.",
};

export const PROJECTS: Project[] = [
  {
    id: "beeplayer-qa",
    title: "BeePlayer Smart TV",
    subtitle: "End-to-End QA Testing & Certification (Samsung Tizen)",
    description:
      "This project involved a complete End-to-End Quality Assurance cycle for the BeePlayer Smart TV application built for Samsung Tizen OS. The goal was not only to detect functional defects, but to validate full system readiness for production deployment, including UI behavior, media playback stability, remote control interactions, and Smart TV platform compliance. A full structured QA deliverable was produced, including Test Case Execution Logs, Use Case Documentation, Bug Tracking Report, and System-level certification audit.",
    tags: ["QA Testing", "Samsung Tizen", "Smart TV", "Test Cases"],
    stats: [
      "100% Test Case Coverage",
      "System-level Tizen audit",
      "4K Cross-resolution testing",
    ],
    image: "/projects/beeplayer/Cover.webp",
    gallery: [
      "/projects/beeplayer/gallery/bug-1.webp",
      "/projects/beeplayer/gallery/bug-2.webp",
      "/projects/beeplayer/gallery/bug-3.webp",
    ],
    useCases: [
      {
        id: "UC-001",
        title: "Invalid Login Handling",
        description:
          "Verify the system prevents access using invalid credentials and provides clear UX feedback.",
        steps:
          "1. Navigate to Login. 2. Enter invalid Username/Password. 3. Submit.",
        expectedResult:
          "Access denied. A red span element must display indicating wrong credentials.",
      },
      {
        id: "UC-008",
        title: "Password Update Validation",
        description:
          "Verify the system rejects password updates that identically match the current password.",
        steps:
          "1. Navigate to Account settings. 2. Attempt to update password to the exact same string.",
        expectedResult:
          "System rejects the update with a 'Must be a new password' validation error.",
      },
      {
        id: "UC-002",
        title: "Focus Management on Keyboard Dismissal",
        description:
          "Verify element focus is correctly released when the OS-level virtual keyboard is closed.",
        steps:
          "1. Select an input field to open the TV keyboard. 2. Press 'Done' or 'Back' on the remote. 3. Attempt D-Pad navigation.",
        expectedResult:
          "The input field triggers a .blur() event to release focus, allowing standard spatial navigation to resume smoothly.",
      },
      {
        id: "UC-003",
        title: "Hardware Media Keys Registration",
        description:
          "Verify Samsung physical remote media keys are registered with the OS and functional.",
        steps:
          "1. Launch video playback. 2. Press physical Play, Pause, Fast Forward, and Menu keys.",
        expectedResult:
          "Video playback and UI respond correctly to hardware media keys via Tizen's tvinputdevice API.",
      },
      {
        id: "UC-004",
        title: "D-Pad Spatial Navigation Parity",
        description:
          "Verify all interactive elements are easily reachable via physical D-Pad arrows without a mouse.",
        steps:
          "1. Launch app. 2. Navigate exclusively using Up/Down/Left/Right arrows.",
        expectedResult:
          "Focus states (:focus) move logically to adjacent UI elements in all directions.",
      },
      {
        id: "UC-011",
        title: "Contextual Back Navigation",
        description:
          "Verify standard 'Back' / 'Return' behavior when deep inside nested categories.",
        steps:
          "1. Navigate to a specific sub-filter or category. 2. Enter a channel. 3. Press physical Back key.",
        expectedResult:
          "User is returned to the previously active category or filter state, not hard-redirected to the root 'All' section.",
      },
      {
        id: "UC-013",
        title: "Media Playback Initialization",
        description:
          "Verify live channels and VOD movies load and play successfully from the CDN.",
        steps: "1. Select media from the catalog. 2. Press Play/OK.",
        expectedResult:
          "Media buffers and plays smoothly without codec errors or permanent loading screens.",
      },
      {
        id: "UC-019",
        title: "Play/Pause Controls",
        description:
          "Verify core video control functionality via the player UI overlay.",
        steps:
          "1. During active playback, select the on-screen Play/Pause button.",
        expectedResult:
          "Video pauses and resumes synchronously with the UI state toggle.",
      },
      {
        id: "UC-023",
        title: "Resolution Control",
        description:
          "Verify manual video quality selection for bandwidth management.",
        steps: "1. Open player controls. 2. Select resolution toggle.",
        expectedResult:
          "App provides options for 720p, 1080p, and Auto, transitioning seamlessly between streams.",
      },
      {
        id: "UC-015",
        title: "Keyword Search Execution",
        description:
          "Verify search accuracy and API response for exact-match English titles.",
        steps: "1. Enter known English movie title in search. 2. Submit.",
        expectedResult: "Accurate media results are returned instantly.",
      },
      {
        id: "UC-006 & UC-018",
        title: "Favorites (Love) Synchronization",
        description:
          "Verify favorite toggles update the global application state instantly.",
        steps:
          "1. Click 'Love' on a movie/series poster. 2. Navigate to Favorites list.",
        expectedResult:
          "Item is instantly bound/unbound and visible in the Favorites menu without requiring an app restart.",
      },
      {
        id: "UC-028",
        title: "4K Resolution Responsiveness",
        description: "Verify UI viewport scaling on Ultra-HD displays.",
        steps: "1. Launch app on 3840x2160 Tizen environment.",
        expectedResult:
          "App utilizes proper Tizen viewport tags or relative CSS (vw/vh) to scale the UI dynamically, filling the entire physical screen.",
      },
    ],
    featured: true,
  },
  {
    id: "streamflow",
    title: "Streamflow",
    subtitle: "Production SaaS Music Streaming Platform",
    description:
      "A production-inspired MERN audio streaming platform designed to deliver a Spotify-like experience for listeners while providing artists and administrators with powerful content management tools.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    repo: "https://github.com/Zack-River/Stream_Flow",
    link: "https://streamflow-online.vercel.app/",
    stats: [
      "74 REST APIs & 4-Level RBAC",
      "34 Req/sec under load testing",
      "Optimized compound/text indexing",
    ],
    image: "/projects/streamflow/Cover.webp",
    gallery: [
      "/projects/streamflow/01-Home-Logged-In-Hero.webp",
      "/projects/streamflow/02-Home-Landing.webp",
      "/projects/streamflow/03-Artist-Dashboard.webp",
      "/projects/streamflow/04-Artist-Uploads.webp",
      "/projects/streamflow/05-Song-Upload.webp",
      "/projects/streamflow/06-Album-Creation.webp",
      "/projects/streamflow/07-Playlist-Creation.webp",
      "/projects/streamflow/08-Playlist-View.webp",
      "/projects/streamflow/09-Search.webp",
      "/projects/streamflow/10-Artist-Profile.webp",
      "/projects/streamflow/11-Admin-Dashboard.webp",
      "/projects/streamflow/12-Users-Management.webp",
      "/projects/streamflow/13-Songs-Management.webp",
      "/projects/streamflow/14-Pending-Songs.webp",
      "/projects/streamflow/15-Pending-Albums.webp",
      "/projects/streamflow/16-Mobile-Dark.webp",
      "/projects/streamflow/17-Mobile-Light.webp",
    ],
    featured: true,
  },
  {
    id: "karbala",
    title: "Qarbla",
    subtitle: "Interactive Educational Platform",
    description:
      "A fully structured digital experience delivering sequential content over 13 nights. Transforms passive reading into an active, gamified learning journey with interactive quizzes and assessments.",
    tags: ["React", "LMS", "Gamification", "Interactive Design"],
    repo: "https://github.com/Zack-River/Karbala",
    link: "https://jaffer-hassan.com/",
    stats: [
      "13-night structured curriculum",
      "High retention rates",
      "Gamified learning journey",
    ],
    image: "/projects/QarbalaCover.webp",
    gallery: [
      "/projects/karbala/01-Home-Hero.webp",
      "/projects/karbala/02-Home-About.webp",
      "/projects/karbala/03-Home-Nights.webp",
      "/projects/karbala/04-Home-Gallery.webp",
      "/projects/karbala/04-Home-Snippets.webp",
      "/projects/karbala/05-Home-Footer.webp",
      "/projects/karbala/06-Cards-Page.webp",
      "/projects/karbala/07-Magales-Page.webp",
      "/projects/karbala/08-Admin-Home.webp",
      "/projects/karbala/09-Admin-Season.webp",
      "/projects/karbala/10-Admin-Author.webp",
      "/projects/karbala/11-Admin-Nights.webp",
      "/projects/karbala/12-Admin-Quizes.webp",
      "/projects/karbala/13-Admin-Cards.webp",
      "/projects/karbala/14-Admin-Resources.webp",
      "/projects/karbala/15-Admin-Attachments.webp",
      "/projects/karbala/16-Admin-Magales.webp",
      "/projects/karbala/17-Admin-Gallery.webp",
      "/projects/karbala/18-Admin-Profile.webp",
      "/projects/karbala/19-Admin-Nights-Form.webp",
      "/projects/karbala/20-Admin-Quizes-Form.webp",
      "/projects/karbala/21-Admin-Cards-Form.webp",
      "/projects/karbala/22-Admin-Magles-Form.webp",
    ],
    featured: true,
  },
  {
    id: "smartq",
    title: "SmartQ",
    subtitle: "Gamified Interactive Quiz Platform",
    description:
      "A modern educational platform designed to transform traditional testing into an engaging, gamified experience. Empowers students with interactive quizzes and provides instructors with advanced management tools.",
    tags: ["React", "Node.js", "Express", "Gamification"],
    repo: "https://github.com/SmartQ-System",
    link: "https://smartq-zack.vercel.app/",
    stats: [
      "Increased student engagement",
      "Streamlined instructor workflows",
      "Interactive gamification engine",
    ],
    image: "/projects/Smartq.webp",
    gallery: [
      "/projects/smartq/01-Landing-Hero-Dark.webp",
      "/projects/smartq/02-Landing-Hero-Light.webp",
      "/projects/smartq/03-Landing-Why-Smartq.webp",
      "/projects/smartq/04-SignUP.webp",
      "/projects/smartq/05-Login.webp",
      "/projects/smartq/06-Student-Home.webp",
      "/projects/smartq/07-Student-Quiz-Menu.webp",
      "/projects/smartq/08-Student-LeaderBoard.webp",
      "/projects/smartq/09-Student-Settings.webp",
      "/projects/smartq/10-Student-Quiz-Game.webp",
      "/projects/smartq/11-Student-Answer.webp",
      "/projects/smartq/12-Student-Quiz-Result.webp",
      "/projects/smartq/13-Admin-Dashboard-Home.webp",
      "/projects/smartq/14-Admin-Quizes-Manage.webp",
      "/projects/smartq/15-Admin-Add-Quiz-Modal.webp",
      "/projects/smartq/16-Admin-Users-Manage.webp",
      "/projects/smartq/17-Admin-Categories-Manage.webp",
      "/projects/smartq/18-Admin-Playlists-Manage.webp",
      "/projects/smartq/19-Admin-Settings-Main.webp",
      "/projects/smartq/20-Admin-Settings-Themes.webp",
      "/projects/smartq/21-Admin-Dashboard-Dark.webp",
    ],
    featured: true,
  },
  {
    id: "dr-sara-ragab",
    title: "Dr. Sara Ragab",
    subtitle: "Landing Page Design & Deployment",
    description:
      "Designed and developed a responsive, high-conversion landing page for a Saudi AI educational initiative. Included minimalist design, WhatsApp integration, domain setup, DNS configuration, and a future-ready subdomain architecture.",
    tags: ["Landing Page", "Vercel", "DNS", "UI/UX"],
    repo: "",
    link: "https://sa.drsara-ragab.site/",
    stats: [
      "Responsive UI",
      "Domain and DNS setup",
      "Future-ready architecture",
    ],
    image: "/projects/sara-ragab/COVER.webp",
    gallery: [
      "/projects/sara-ragab/01-Home.webp",
      "/projects/sara-ragab/02-For-Who.webp",
      "/projects/sara-ragab/03-Deliverables.webp",
      "/projects/sara-ragab/04-Audience.webp",
      "/projects/sara-ragab/05-Rates.webp",
      "/projects/sara-ragab/06-CTA.webp",
    ],
    featured: false,
  },
  {
    id: "mostafa-nawareg",
    title: "Dr. Mostafa Nawareg",
    subtitle: "Consulting & Training Portfolio",
    description:
      "A professional portfolio and landing page for a business consultant and author of 40 books. Designed to highlight expertise, academic achievements, and marketing consultation services.",
    tags: [
      "Wordpress",
      "Astra",
      "Elementor",
      "W3Cache",
      "PHP",
      "JS",
      "HTML",
      "CSS",
    ],
    repo: "",
    link: "https://mostafanawareg.com/",
    stats: [
      "Showcased 40 published books",
      "Integrated consulting funnels",
      "Responsive global audience reach",
    ],
    image: "/projects/Mostafa-Nawareg.webp",
    gallery: [
      "/projects/mostafa-nawareg/01-Home-Hero.webp",
      "/projects/mostafa-nawareg/02-Home-Packs.webp",
      "/projects/mostafa-nawareg/03-Home-About.webp",
      "/projects/mostafa-nawareg/04-Home-Clients.webp",
      "/projects/mostafa-nawareg/05-Book-Hero.webp",
      "/projects/mostafa-nawareg/06-Book-Numbers-and-rates.webp",
      "/projects/mostafa-nawareg/07-Book-Methodolgy.webp",
      "/projects/mostafa-nawareg/08-Book-What-You-Gain.webp",
      "/projects/mostafa-nawareg/09-Book-When-u-need-us.webp",
      "/projects/mostafa-nawareg/10-Book-Faq.webp",
      "/projects/mostafa-nawareg/11-Book-Testo.webp",
      "/projects/mostafa-nawareg/12-Book-Difference.webp",
      "/projects/mostafa-nawareg/13-Book-Why-Us.webp",
      "/projects/mostafa-nawareg/14-Books-and-Packs-Hero.webp",
      "/projects/mostafa-nawareg/15-Books-Packs.webp",
      "/projects/mostafa-nawareg/16-Books-Offer.webp",
      "/projects/mostafa-nawareg/17-Books-Rate.webp",
      "/projects/mostafa-nawareg/18-Books-About.webp",
      "/projects/mostafa-nawareg/19-Book-Faq.webp",
    ],
    featured: true,
  },
  {
    id: "ding",
    title: "Ding",
    subtitle: "Emotionally-Aware AI Social Network",
    description:
      "A novel social networking platform explicitly designed to prioritize positive mental health using deep learning and affective computing to detect real-time sentiment without compromising privacy.",
    tags: ["AI", "Deep Learning", "Affective Computing", "Python"],
    repo: "https://github.com/Ding-Platform",
    link: "#",
    stats: [
      "Real-time sentiment analysis",
      "Cross-platform architecture",
      "Privacy-first design",
    ],
    image: "/projects/Ding.webp",
    gallery: [
      "/projects/ding/01-Landing-Page.webp",
      "/projects/ding/02-Login-Screen.webp",
      "/projects/ding/03-Feed-Page.webp",
      "/projects/ding/04-Post-Screen-and-comments.webp",
      "/projects/ding/05-Feed-Dark.webp",
      "/projects/ding/06-Chat-Rooms.webp",
      "/projects/ding/07-Noro-Ai-Chat.webp",
      "/projects/ding/08-Reels.webp",
      "/projects/ding/09-User-Profile.webp",
      "/projects/ding/10-User-Settings.webp",
      "/projects/ding/11-Privacy-Settings-and-Light.webp",
      "/projects/ding/12-Profile-Edit.webp",
      "/projects/ding/13-Account-Control.webp",
      "/projects/ding/14-Noro-Chat-Light.webp",
      "/projects/ding/15-Noro-Posing.webp",
      "/projects/ding/16-Noro-Posing-2.webp",
      "/projects/ding/17-Noro-Posing-3.webp",
      "/projects/ding/18-Noro-Response.webp",
      "/projects/ding/19-Noro-Response-2.webp",
      "/projects/ding/20-Media-and-video-preview.webp",
    ],
    featured: true,
  },
  {
    id: "omnipos",
    title: "OmniPOS",
    subtitle: "Local-First POS Desktop Application",
    description:
      "A professional, ultra-fast point-of-sale (POS) desktop system designed for small and medium businesses. Built as a fully local (Local-First) application, it eliminates the need for internet connectivity or monthly subscriptions while providing real-time inventory management, instantaneous barcode scanning, and reliable thermal printing with background retry mechanisms.",
    tags: [".NET 10", "Avalonia UI", "MVVM", "SQLite", "Dapper", "ClosedXML"],
    stats: [
      "Zero-latency barcode scanning",
      "Offline-first architecture",
      "Atomic transaction safety",
    ],
    image: "/projects/pos/Cover.webp",
    schemaImage: "/projects/pos/Schema.webp",
    useCaseImage: "/projects/pos/UseCase.webp",
    gallery: [
      "/projects/pos/Dashboard-Home.webp",
      "/projects/pos/Dashboard-Cash.webp",
      "/projects/pos/Dashboard-Products.webp",
      "/projects/pos/Dashboard-Inovices.webp",
      "/projects/pos/Dashboard-Settings.webp",
      "/projects/pos/Add-Product.webp",
      "/projects/pos/Inovice.webp",
    ],
    featured: true,
  },
  {
    id: "luxe-dental",
    title: "Luxe Dental",
    subtitle: "Premium Dental Clinic Website",
    description:
      "A high-end healthcare website focusing on patient experience and trust. Features luxury hospitality design aesthetics, transparent treatment information, and seamless appointment booking.",
    tags: ["Web Design", "Healthcare", "UI/UX", "Next.js"],
    repo: "https://github.com/Zack-River/LUXE-Dental",
    link: "https://luxe-dental-livid.vercel.app/",
    stats: [
      "Luxury hospitality aesthetics",
      "Patient-first transparent flow",
      "Optimized booking conversions",
    ],
    image: "/projects/luxe-dental.webp",
    gallery: [
      "/projects/luxe-dental/01-Home-Hero-Light-Ar.webp",
      "/projects/luxe-dental/01-Home-Hero-Light-En.webp",
      "/projects/luxe-dental/02-Home-Hero-Dark.webp",
      "/projects/luxe-dental/03-Home-About.webp",
      "/projects/luxe-dental/04-Home-Experience.webp",
      "/projects/luxe-dental/05-Home-Features.webp",
      "/projects/luxe-dental/06-Home-Services.webp",
      "/projects/luxe-dental/07-Home-Plans.webp",
      "/projects/luxe-dental/08-Home-Footer.webp",
      "/projects/luxe-dental/09-Services-Hero.webp",
      "/projects/luxe-dental/10-Services-Filters.webp",
      "/projects/luxe-dental/11-About-Hero.webp",
      "/projects/luxe-dental/12-About-Results.webp",
      "/projects/luxe-dental/13-About-Staff.webp",
      "/projects/luxe-dental/14-About-Prices.webp",
      "/projects/luxe-dental/15-Testo-Hero.webp",
      "/projects/luxe-dental/16-Testo-Clients.webp",
      "/projects/luxe-dental/17-Gallery-Hero.webp",
      "/projects/luxe-dental/18-Gallery-Images.webp",
      "/projects/luxe-dental/19-Contact-.webp",
      "/projects/luxe-dental/19-Contact-Page.webp",
    ],
    featured: false,
  },
  {
    id: "hotel-pro",
    title: "Hotel Pro",
    subtitle: "SaaS Hotel Management System",
    description:
      "A comprehensive SaaS landing page for luxury hotels and resorts. Replaces standard technical features with an emotion-driven narrative that feels like a 5-star hotel lobby.",
    tags: ["SaaS", "React", "Tailwind", "Hospitality"],
    repo: "https://github.com/Zack-River/Hotel-Pro",
    link: "https://hotel-pro.vercel.app/",
    stats: [
      "Emotion-driven narrative",
      "SaaS technical feature showcase",
      "High-end visual branding",
    ],
    image: "/projects/Hotel-Pro.webp",
    gallery: [
      "/projects/hotel-pro/01-Home-Hero.webp",
      "/projects/hotel-pro/02-Home-Stats.webp",
      "/projects/hotel-pro/03-Home-Features.webp",
      "/projects/hotel-pro/04-Home-Preview.webp",
      "/projects/hotel-pro/05-Home-How-it-works.webp",
      "/projects/hotel-pro/06-Home-Testo.webp",
      "/projects/hotel-pro/07-Home-Plans.webp",
      "/projects/hotel-pro/08-Home-FAQ.webp",
      "/projects/hotel-pro/09-Home-Call-to-Action.webp",
      "/projects/hotel-pro/10-Home-Footer.webp",
    ],
    featured: false,
  },
  {
    id: "khaled-nasser",
    title: "Khaled Nasser",
    subtitle: "Personal Branding Portfolio",
    description:
      "A striking personal portfolio built with deep blue brand accents, highlighting workflows, professional results, and service offerings in a clean, modern interface.",
    tags: ["UI/UX", "Portfolio", "Web Design"],
    repo: "https://github.com/Zack-River/Khaled-Nasser",
    link: "http://khaled-nasser.vercel.app/",
    stats: [
      "Deep brand accent integration",
      "Service and workflow showcases",
      "High-performance rendering",
    ],
    image: "/projects/Khaled-Nasser-Portfolio.webp",
    gallery: [
      "/projects/khaled-nasser/01-Home-Hero-Blue.webp",
      "/projects/khaled-nasser/02-Home-Hero-Colors.webp",
      "/projects/khaled-nasser/03-Home-Stats-and-WorkFlow.webp",
      "/projects/khaled-nasser/04-Vision-Hero.webp",
      "/projects/khaled-nasser/05-Results.webp",
      "/projects/khaled-nasser/06-Contact.webp",
      "/projects/khaled-nasser/07-Services.webp",
      "/projects/khaled-nasser/08-Work-Flow.webp",
      "/projects/khaled-nasser/09-About.webp",
      "/projects/khaled-nasser/10-Time-Line.webp",
      "/projects/khaled-nasser/11-Change-Point.webp",
    ],
    featured: false,
  },
  {
    id: "ahmed-hakim",
    title: "Ahmed Hakim",
    subtitle: "Creative Professional Portfolio",
    description:
      "A highly visual and interactive digital portfolio showcasing creative projects, achievements, and professional background with smooth transition effects.",
    tags: ["Frontend", "Animation", "Framer Motion"],
    repo: "https://github.com/Zack-River/Ahmed-Hakim-Landing-Page",
    link: "https://ahmed-hakim.vercel.app/",
    stats: [
      "Framer Motion integrations",
      "Immersive visual storytelling",
      "Smooth layout transitions",
    ],
    image: "/projects/Ahmed-Hakim-Portfolio.webp",
    gallery: [
      "/projects/ahmed-hakim/01-Home-Hero.webp",
      "/projects/ahmed-hakim/02-Home-Stats-and-logo-slider.webp",
      "/projects/ahmed-hakim/03-Home-Experience.webp",
      "/projects/ahmed-hakim/04-Home-Story.webp",
      "/projects/ahmed-hakim/05-About-Hero.webp",
      "/projects/ahmed-hakim/06-Services-Hero.webp",
      "/projects/ahmed-hakim/07-Results.webp",
    ],
    featured: false,
  },
];

export const SERVICES: Service[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    description:
      "Scalable, production-grade REST APIs and server architectures built to handle growth from day one.",
    highlights: [
      "REST API Design",
      "Authentication & Authorization",
      "Rate Limiting & Caching",
      "Database Optimization",
    ],
    icon: "Server",
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "End-to-end web application development with modern frameworks, clean architecture, and maintainable codebases.",
    highlights: [
      "React / Next.js Frontends",
      "Node.js & NestJS Backends",
      "CI/CD Integration",
      "Performance Tuning",
    ],
    icon: "Globe",
  },
  {
    id: "database",
    title: "Database Architecture",
    description:
      "Designing resilient, high-performance data layers using the right tool for the right job.",
    highlights: [
      "Schema Design & Modeling",
      "MongoDB & PostgreSQL",
      "Redis Caching Strategies",
      "Query Optimization",
    ],
    icon: "Database",
  },
  {
    id: "security",
    title: "Security & DevOps",
    description:
      "Hardening APIs and systems against vulnerabilities while automating deployment pipelines.",
    highlights: [
      "JWT / OAuth2 Implementation",
      "Docker Containerization",
      "Environment Management",
      "Bcrypt & Encryption",
    ],
    icon: "ShieldCheck",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Engineering",
    skills: [
      "NestJS",
      "Express.js",
      "Laravel",
      "ASP.NET Core",
      "REST APIs",
      "Authentication",
      "Authorization",
      "JWT",
      "OAuth2",
      "Google Auth",
      "Bcrypt",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Redux",
      "Zustand",
      "Three.js",
      "React Three Fiber",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Redis"],
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Nginx",
      "PM2",
      "RabbitMQ",
      "BullMQ",
      "AWS",
    ],
  },
  {
    title: "Architecture & System Design",
    skills: [
      "Multi-Tenant SaaS",
      "Scalable Systems",
      "Clean Architecture",
      "Performance Optimization",
      "Security",
      "Production Deployment",
    ],
  },
  {
    title: "Real-Time Systems",
    skills: ["WebSockets", "Socket.IO", "WebRTC"],
  },
  {
    title: "Integrations",
    skills: [
      "Stripe",
      "Paymob",
      "Salla",
      "Cloudinary",
      "External APIs",
      "Delivery APIs",
    ],
  },
  {
    title: "Engineering & Documentation",
    skills: [
      "IEEE Documentation",
      "SRS",
      "Use Cases",
      "ERD",
      "Database Design",
      "Technical Documentation",
      "Agile",
      "Backlogs",
    ],
  },
  {
    title: "Project Experience",
    skills: [
      "Multi-Vendor Marketplaces",
      "Booking Platforms",
      "CMS",
      "Admin Dashboards",
      "Internal Business Systems",
      "AI Applications",
      "Data Analytics",
      "Real-Time Platforms",
    ],
  },
];

export const EDUCATION: Education = {
  degree: "Bachelor of Computer Science",
  institution: "SHA Academy Higher Institute",
  period: "10/2022 – 07/2026",
  grade: "Very Good",
};

export const TRAINING: Experience[] = [
  {
    role: "Full Stack Developer (ASP .Net Core & Angular)",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "06/2024 – 05/2025",
    details: [
      "Developed an e-commerce platform utilizing .NET Core & Angular, with Stripe and Redis.",
    ],
  },
  {
    role: "Full Stack Trainee (MEAN Stack)",
    company: "National Telecommunication Institute (NTI)",
    period: "06/2025 – 10/2025",
    details: [
      "Developed full-stack Instagram clone with full functionality.",
      "Built Backend Spotify clone focusing on performance.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Pointer Advertising",
    period: "09/2025 – Present",
    details: [
      "Currently engineering scalable software solutions and high-performance web applications for digital advertising campaigns.",
      "Leading technical decisions and collaborating with cross-functional teams to deliver impactful digital experiences.",
      "Focusing on system architecture, performance optimization, and creating robust data pipelines for ad analytics.",
    ],
  },
];
