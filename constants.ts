import { Project, SkillCategory, Education, Experience, Service } from './types';
import { 
  Server, 
  Database, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Layers 
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Abdallah Wageeh Ahmed",
  title: "Software Engineer",
  subtitle: "Building scalable web applications and backend systems with a focus on performance, clean architecture, and long-term maintainability.",
  email: "zackriver.dev@gmail.com",
  phone: "+20 1201024880",
  linkedin: "linkedin.com/in/labdallah-wageehl",
  github: "github.com/Zack-River",
  bio: "Software Engineer specializing in full-stack and backend development with a strong focus on scalable architecture, performance, and maintainability. I build modern web applications, REST APIs, authentication systems, CMS platforms, and real-time solutions while emphasizing clean code and long-term reliability. My goal is to create software that not only works today but continues to scale as products grow.",
};

export const PROJECTS: Project[] = [
  {
    id: "smartq",
    title: "SmartQ",
    subtitle: "Gamified Interactive Quiz Platform",
    description: "A modern educational platform designed to transform traditional testing into an engaging, gamified experience. Empowers students with interactive quizzes and provides instructors with advanced management tools.",
    tags: ["React", "Node.js", "Express", "Gamification"],
    repo: "https://github.com/SmartQ-System",
    link: "https://smartq-zack.vercel.app/",
    stats: [
      "Increased student engagement",
      "Streamlined instructor workflows",
      "Interactive gamification engine"
    ],
    image: "/projects/Smartq.webp",
    gallery: [
      "/projects/smartq/01-Landing-Hero-Dark.png",
      "/projects/smartq/02-Landing-Hero-Light.png",
      "/projects/smartq/03-Landing-Why-Smartq.png",
      "/projects/smartq/04-SignUP.png",
      "/projects/smartq/05-Login.png",
      "/projects/smartq/06-Student-Home.png",
      "/projects/smartq/07-Student-Quiz-Menu.png",
      "/projects/smartq/08-Student-LeaderBoard.png",
      "/projects/smartq/09-Student-Settings.png",
      "/projects/smartq/10-Student-Quiz-Game.png",
      "/projects/smartq/11-Student-Answer.png",
      "/projects/smartq/12-Student-Quiz-Result.png",
      "/projects/smartq/13-Admin-Dashboard-Home.png",
      "/projects/smartq/14-Admin-Quizes-Manage.png",
      "/projects/smartq/15-Admin-Add-Quiz-Modal.png",
      "/projects/smartq/16-Admin-Users-Manage.png",
      "/projects/smartq/17-Admin-Categories-Manage.png",
      "/projects/smartq/18-Admin-Playlists-Manage.png",
      "/projects/smartq/19-Admin-Settings-Main.png",
      "/projects/smartq/20-Admin-Settings-Themes.png",
      "/projects/smartq/21-Admin-Dashboard-Dark.png"
    ],
    featured: true,
  },
  {
    id: "ding",
    title: "Ding",
    subtitle: "Emotionally-Aware AI Social Network",
    description: "A novel social networking platform explicitly designed to prioritize positive mental health using deep learning and affective computing to detect real-time sentiment without compromising privacy.",
    tags: ["AI", "Deep Learning", "Affective Computing", "Python"],
    repo: "https://github.com/Ding-Platform",
    link: "#",
    stats: [
      "Real-time sentiment analysis",
      "Cross-platform architecture",
      "Privacy-first design"
    ],
    image: "/projects/Ding.webp",
    gallery: [
      "/projects/ding/01-Landing-Page.png",
      "/projects/ding/02-Login-Screen.png",
      "/projects/ding/03-Feed-Page.png",
      "/projects/ding/04-Post-Screen-and-comments.png",
      "/projects/ding/05-Feed-Dark.png",
      "/projects/ding/06-Chat-Rooms.png",
      "/projects/ding/07-Noro-Ai-Chat.png",
      "/projects/ding/08-Reels.png",
      "/projects/ding/09-User-Profile.png",
      "/projects/ding/10-User-Settings.png",
      "/projects/ding/11-Privacy-Settings-and-Light.png",
      "/projects/ding/12-Profile-Edit.png",
      "/projects/ding/13-Account-Control.png",
      "/projects/ding/14-Noro-Chat-Light.png",
      "/projects/ding/15-Noro-Posing.png",
      "/projects/ding/16-Noro-Posing-2.png",
      "/projects/ding/17-Noro-Posing-3.png",
      "/projects/ding/18-Noro-Response.png",
      "/projects/ding/19-Noro-Response-2.png",
      "/projects/ding/20-Media-and-video-preview.png"
    ],
    featured: true,
  },
  {
    id: "karbala",
    title: "Qarbla: The Ashura Experience",
    subtitle: "Interactive Educational Platform",
    description: "A fully structured digital experience delivering sequential content over 13 nights. Transforms passive reading into an active, gamified learning journey with interactive quizzes and assessments.",
    tags: ["React", "LMS", "Gamification", "Interactive Design"],
    repo: "https://github.com/Zack-River/Karbala",
    link: "https://jaffer-hassan.com/",
    stats: [
      "13-night structured curriculum",
      "High retention rates",
      "Gamified learning journey"
    ],
    image: "/projects/Karbala.webp",
    gallery: [
      "/projects/karbala/01-Home-Hero.png",
      "/projects/karbala/02-Home-About.png",
      "/projects/karbala/03-Home-Nights.png",
      "/projects/karbala/04-Home-Gallery.png",
      "/projects/karbala/04-Home-Snippets.png",
      "/projects/karbala/05-Home-Footer.png",
      "/projects/karbala/06-Cards-Page.png",
      "/projects/karbala/07-Magales-Page.png",
      "/projects/karbala/08-Admin-Home.png",
      "/projects/karbala/09-Admin-Season.png",
      "/projects/karbala/10-Admin-Author.png",
      "/projects/karbala/11-Admin-Nights.png",
      "/projects/karbala/12-Admin-Quizes.png",
      "/projects/karbala/13-Admin-Cards.png",
      "/projects/karbala/14-Admin-Resources.png",
      "/projects/karbala/15-Admin-Attachments.png",
      "/projects/karbala/16-Admin-Magales.png",
      "/projects/karbala/17-Admin-Gallery.png",
      "/projects/karbala/18-Admin-Profile.png",
      "/projects/karbala/19-Admin-Nights-Form.png",
      "/projects/karbala/20-Admin-Quizes-Form.png",
      "/projects/karbala/21-Admin-Cards-Form.png",
      "/projects/karbala/22-Admin-Magles-Form.png"
    ],
    featured: true,
  },
  {
    id: "mostafa-nawareg",
    title: "Dr. Mostafa Nawareg",
    subtitle: "Consulting & Training Portfolio",
    description: "A professional portfolio and landing page for a business consultant and author of 40 books. Designed to highlight expertise, academic achievements, and marketing consultation services.",
    tags: ["Next.js", "Tailwind CSS", "CMS", "Branding"],
    repo: "",
    link: "https://mostafanawareg.com/",
    stats: [
      "Showcased 40 published books",
      "Integrated consulting funnels",
      "Responsive global audience reach"
    ],
    image: "/projects/Mostafa-Nawareg.webp",
    gallery: [
      "/projects/mostafa-nawareg/01-Home-Hero.png",
      "/projects/mostafa-nawareg/02-Home-Packs.png",
      "/projects/mostafa-nawareg/03-Home-Packs-2.png",
      "/projects/mostafa-nawareg/04-Home-About.png",
      "/projects/mostafa-nawareg/05-Home-Experience.png",
      "/projects/mostafa-nawareg/06-Home-Clients.png",
      "/projects/mostafa-nawareg/07-Home-Social.png",
      "/projects/mostafa-nawareg/08-Home-Faq.png",
      "/projects/mostafa-nawareg/09-Home-Footer.png",
      "/projects/mostafa-nawareg/10-Book-Hero.png",
      "/projects/mostafa-nawareg/11-Book-Numbers-and-rates.png",
      "/projects/mostafa-nawareg/12-Book-Methodolgy.png",
      "/projects/mostafa-nawareg/13-Book-What-You-Gain.png",
      "/projects/mostafa-nawareg/14-Book-When-u-need-us.png",
      "/projects/mostafa-nawareg/15-Book-Faq.png",
      "/projects/mostafa-nawareg/16-Book-Testo.png",
      "/projects/mostafa-nawareg/17-Book-Difference.png",
      "/projects/mostafa-nawareg/18-Book-Why-Us.png",
      "/projects/mostafa-nawareg/19-Companies-Training-Hero.png",
      "/projects/mostafa-nawareg/20-Training-About.png",
      "/projects/mostafa-nawareg/21-Training-Definition.png",
      "/projects/mostafa-nawareg/22-Training-Testo.png",
      "/projects/mostafa-nawareg/23-Training-Clients.png",
      "/projects/mostafa-nawareg/24-Training-Packs1.png",
      "/projects/mostafa-nawareg/25-Training-Packs2.png",
      "/projects/mostafa-nawareg/26-Training-Packs3.png",
      "/projects/mostafa-nawareg/27-Training-Who-Needs.png",
      "/projects/mostafa-nawareg/28-Training-Faq.png",
      "/projects/mostafa-nawareg/29-Books-and-Packs-Hero.png",
      "/projects/mostafa-nawareg/30-Books-Packs.png",
      "/projects/mostafa-nawareg/31-Books-Offer.png",
      "/projects/mostafa-nawareg/32-Books-Rate.png",
      "/projects/mostafa-nawareg/33-Books-About.png",
      "/projects/mostafa-nawareg/34-Book-Faq.png",
      "/projects/mostafa-nawareg/35-Marketing-Plan-Hero.png",
      "/projects/mostafa-nawareg/36-Marketing-Intro.png",
      "/projects/mostafa-nawareg/37-Marketing-Research.png",
      "/projects/mostafa-nawareg/38-Marketing-Strategy.png",
      "/projects/mostafa-nawareg/39-Marketing-Ads.png",
      "/projects/mostafa-nawareg/40-Marketing-Content.png",
      "/projects/mostafa-nawareg/41-Marekting-Conc.png",
      "/projects/mostafa-nawareg/42-Conference-Hero.png",
      "/projects/mostafa-nawareg/43-Conference-News.png",
      "/projects/mostafa-nawareg/44-Conference-Moments.png",
      "/projects/mostafa-nawareg/45-Conference-Achievements.png",
      "/projects/mostafa-nawareg/46-Conference-Order.png",
      "/projects/mostafa-nawareg/47-Portfolio-Hero.png",
      "/projects/mostafa-nawareg/48-Portfolio-Story.png",
      "/projects/mostafa-nawareg/49-Portfolio-Experience.png",
      "/projects/mostafa-nawareg/50-Portfolio-Skills.png",
      "/projects/mostafa-nawareg/51-Portfolio-Certs.png",
      "/projects/mostafa-nawareg/52-Portofolio-Testo.png"
    ],
    featured: true,
  },
  {
    id: "luxe-dental",
    title: "Luxe Dental",
    subtitle: "Premium Dental Clinic Website",
    description: "A high-end healthcare website focusing on patient experience and trust. Features luxury hospitality design aesthetics, transparent treatment information, and seamless appointment booking.",
    tags: ["Web Design", "Healthcare", "UI/UX", "Next.js"],
    repo: "https://github.com/Zack-River/LUXE-Dental",
    link: "https://luxe-dental-livid.vercel.app/",
    stats: [
      "Luxury hospitality aesthetics",
      "Patient-first transparent flow",
      "Optimized booking conversions"
    ],
    image: "/projects/luxe-dental-website.webp",
    gallery: [
      "/projects/luxe-dental/01-Home-Hero-Light-Ar.png",
      "/projects/luxe-dental/01-Home-Hero-Light-En.png",
      "/projects/luxe-dental/02-Home-Hero-Dark.png",
      "/projects/luxe-dental/03-Home-About.png",
      "/projects/luxe-dental/04-Home-Experience.png",
      "/projects/luxe-dental/05-Home-Features.png",
      "/projects/luxe-dental/06-Home-Services.png",
      "/projects/luxe-dental/07-Home-Plans.png",
      "/projects/luxe-dental/08-Home-Footer.png",
      "/projects/luxe-dental/09-Services-Hero.png",
      "/projects/luxe-dental/10-Services-Filters.png",
      "/projects/luxe-dental/11-About-Hero.png",
      "/projects/luxe-dental/12-About-Results.png",
      "/projects/luxe-dental/13-About-Staff.png",
      "/projects/luxe-dental/14-About-Prices.png",
      "/projects/luxe-dental/15-Testo-Hero.png",
      "/projects/luxe-dental/16-Testo-Clients.png",
      "/projects/luxe-dental/17-Gallery-Hero.png",
      "/projects/luxe-dental/18-Gallery-Images.png",
      "/projects/luxe-dental/19-Contact-.png",
      "/projects/luxe-dental/19-Contact-Page.png"
    ],
    featured: false,
  },
  {
    id: "hotel-pro",
    title: "Hotel Pro",
    subtitle: "SaaS Hotel Management System",
    description: "A comprehensive SaaS landing page for luxury hotels and resorts. Replaces standard technical features with an emotion-driven narrative that feels like a 5-star hotel lobby.",
    tags: ["SaaS", "React", "Tailwind", "Hospitality"],
    repo: "https://github.com/Zack-River/Hotel-Pro",
    link: "https://hotel-pro.vercel.app/",
    stats: [
      "Emotion-driven narrative",
      "SaaS technical feature showcase",
      "High-end visual branding"
    ],
    image: "/projects/Hotel-Pro.webp",
    gallery: [
      "/projects/hotel-pro/01-Home-Hero.png",
      "/projects/hotel-pro/02-Home-Stats.png",
      "/projects/hotel-pro/03-Home-Features.png",
      "/projects/hotel-pro/04-Home-Preview.png",
      "/projects/hotel-pro/05-Home-How-it-works.png",
      "/projects/hotel-pro/06-Home-Testo.png",
      "/projects/hotel-pro/07-Home-Plans.png",
      "/projects/hotel-pro/08-Home-FAQ.png",
      "/projects/hotel-pro/09-Home-Call-to-Action.png",
      "/projects/hotel-pro/10-Home-Footer.png"
    ],
    featured: false,
  },
  {
    id: "streamflow",
    title: "StreamFlow",
    subtitle: "Music Management System",
    description: "A high-performance backend system for music streaming. Built RESTful APIs handling heavy loads with optimized MongoDB schemas, and buffered audio streaming.",
    tags: ["Node.js", "Express", "MongoDB", "Redis", "Cloudinary"],
    repo: "https://github.com/Zack-River/Stream_Flow",
    link: "https://stream-flow-ui.vercel.app/",
    stats: [
      "Handled 10K+ simulated requests",
      "Reduced response time by ~35%",
      "Optimized buffered audio streaming"
    ],
    image: "/projects/StreamFlow.webp",
    gallery: [
      "/projects/streamflow/StreamFlow.png"
    ],
    featured: false,
  },
  {
    id: "khaled-nasser",
    title: "Khaled Nasser",
    subtitle: "Personal Branding Portfolio",
    description: "A striking personal portfolio built with deep blue brand accents, highlighting workflows, professional results, and service offerings in a clean, modern interface.",
    tags: ["UI/UX", "Portfolio", "Web Design"],
    repo: "https://github.com/Zack-River/Khaled-Nasser",
    link: "#",
    stats: [
      "Deep brand accent integration",
      "Service and workflow showcases",
      "High-performance rendering"
    ],
    image: "/projects/Khaled-Nasser-Portfolio.webp",
    gallery: [
      "/projects/khaled-nasser/01-Home-Hero-Blue.png",
      "/projects/khaled-nasser/02-Home-Hero-Colors.png",
      "/projects/khaled-nasser/03-Home-Stats-and-WorkFlow.png",
      "/projects/khaled-nasser/04-Vision-Hero.png",
      "/projects/khaled-nasser/05-Results.png",
      "/projects/khaled-nasser/06-Contact.png",
      "/projects/khaled-nasser/07-Services.png",
      "/projects/khaled-nasser/08-Work-Flow.png",
      "/projects/khaled-nasser/09-About.png",
      "/projects/khaled-nasser/10-Time-Line.png",
      "/projects/khaled-nasser/11-Change-Point.png"
    ],
    featured: false,
  },
  {
    id: "ahmed-hakim",
    title: "Ahmed Hakim",
    subtitle: "Creative Professional Portfolio",
    description: "A highly visual and interactive digital portfolio showcasing creative projects, achievements, and professional background with smooth transition effects.",
    tags: ["Frontend", "Animation", "Framer Motion"],
    repo: "https://github.com/Zack-River/Ahmed-Hakim-Landing-Page",
    link: "https://ahmed-hakim.vercel.app/",
    stats: [
      "Framer Motion integrations",
      "Immersive visual storytelling",
      "Smooth layout transitions"
    ],
    image: "/projects/Ahmed-Hakim-Portfolio.webp",
    gallery: [
      "/projects/ahmed-hakim/01-Home-Hero.png",
      "/projects/ahmed-hakim/02-Home-Stats-and-logo-slider.png",
      "/projects/ahmed-hakim/03-Home-Experience.png",
      "/projects/ahmed-hakim/04-Home-Story.png",
      "/projects/ahmed-hakim/05-About-Hero.png",
      "/projects/ahmed-hakim/06-Services-Hero.png",
      "/projects/ahmed-hakim/07-Results.png"
    ],
    featured: false,
  },
  {
    id: "tutor-landing-page",
    title: "Tutor Sales Page",
    subtitle: "High-Conversion Course Platform",
    description: "A targeted sales landing page for video courses, designed to guide visitors through a logical purchasing journey without visual clutter to maximize conversion.",
    tags: ["E-learning", "Conversion Optimization", "Landing Page"],
    repo: "https://github.com/Zack-River/Tutor-Landing-Page",
    link: "https://tutor-lp.vercel.app/",
    stats: [
      "Targeted sales funnel",
      "Reduced visual clutter",
      "Optimized purchasing journey"
    ],
    image: "/projects/Tutor-Landing-Page.webp",
    gallery: [
      "/projects/tutor-landing-page/01-Home-Hero.png",
      "/projects/tutor-landing-page/02-Home-Gains.png",
      "/projects/tutor-landing-page/03-Home-Course-Chapters.png",
      "/projects/tutor-landing-page/04-Home-Course-Summary.png",
      "/projects/tutor-landing-page/05-Home-Audience.png",
      "/projects/tutor-landing-page/06-Home-Takeaways.png",
      "/projects/tutor-landing-page/07-Home-Course-Details.png",
      "/projects/tutor-landing-page/08-Home-CTA.png"
    ],
    featured: false,
  }
];

export const SERVICES: Service[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Scalable, production-grade REST APIs and server architectures built to handle growth from day one.",
    highlights: ["REST API Design", "Authentication & Authorization", "Rate Limiting & Caching", "Database Optimization"],
    icon: "Server",
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description: "End-to-end web application development with modern frameworks, clean architecture, and maintainable codebases.",
    highlights: ["React / Next.js Frontends", "Node.js & NestJS Backends", "CI/CD Integration", "Performance Tuning"],
    icon: "Globe",
  },
  {
    id: "database",
    title: "Database Architecture",
    description: "Designing resilient, high-performance data layers using the right tool for the right job.",
    highlights: ["Schema Design & Modeling", "MongoDB & PostgreSQL", "Redis Caching Strategies", "Query Optimization"],
    icon: "Database",
  },
  {
    id: "security",
    title: "Security & DevOps",
    description: "Hardening APIs and systems against vulnerabilities while automating deployment pipelines.",
    highlights: ["JWT / OAuth2 Implementation", "Docker Containerization", "Environment Management", "Bcrypt & Encryption"],
    icon: "ShieldCheck",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Engineering",
    skills: ["NestJS", "Express.js", "Laravel", "ASP.NET Core", "REST APIs", "Authentication", "Authorization", "JWT", "OAuth2", "Google Auth", "Bcrypt"]
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "Angular", "Redux", "Zustand", "Three.js", "React Three Fiber"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Redis"]
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Docker", "Kubernetes", "Terraform", "Nginx", "PM2", "RabbitMQ", "BullMQ", "AWS"]
  },
  {
    title: "Architecture & System Design",
    skills: ["Multi-Tenant SaaS", "Scalable Systems", "Clean Architecture", "Performance Optimization", "Security", "Production Deployment"]
  },
  {
    title: "Real-Time Systems",
    skills: ["WebSockets", "Socket.IO", "WebRTC"]
  },
  {
    title: "Integrations",
    skills: ["Stripe", "Paymob", "Salla", "Cloudinary", "External APIs", "Delivery APIs"]
  },
  {
    title: "Engineering & Documentation",
    skills: ["IEEE Documentation", "SRS", "Use Cases", "ERD", "Database Design", "Technical Documentation", "Agile", "Backlogs"]
  },
  {
    title: "Project Experience",
    skills: ["Multi-Vendor Marketplaces", "Booking Platforms", "CMS", "Admin Dashboards", "Internal Business Systems", "AI Applications", "Data Analytics", "Real-Time Platforms"]
  }
];

export const EDUCATION: Education = {
  degree: "Bachelor of Computer Science",
  institution: "SHA Academy Higher Institute",
  period: "10/2022 – 07/2026",
  grade: "Very Good"
};

export const TRAINING: Experience[] = [
  {
    role: "Full Stack Trainee (MEAN Stack)",
    company: "National Telecommunication Institute (NTI)",
    period: "06/2025 – 10/2025",
    details: [
      "Developed full-stack Instagram clone with full functionality.",
      "Built Backend Spotify clone focusing on performance."
    ]
  }
];