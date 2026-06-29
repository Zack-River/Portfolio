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
      "/projects/smartq/21-Admin-Dashboard-Dark.webp"
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
      "/projects/ding/20-Media-and-video-preview.webp"
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
      "/projects/karbala/22-Admin-Magles-Form.webp"
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
      "/projects/mostafa-nawareg/01-Home-Hero.webp",
      "/projects/mostafa-nawareg/02-Home-Packs.webp",
      "/projects/mostafa-nawareg/03-Home-Packs-2.webp",
      "/projects/mostafa-nawareg/04-Home-About.webp",
      "/projects/mostafa-nawareg/05-Home-Experience.webp",
      "/projects/mostafa-nawareg/06-Home-Clients.webp",
      "/projects/mostafa-nawareg/07-Home-Social.webp",
      "/projects/mostafa-nawareg/08-Home-Faq.webp",
      "/projects/mostafa-nawareg/09-Home-Footer.webp",
      "/projects/mostafa-nawareg/10-Book-Hero.webp",
      "/projects/mostafa-nawareg/11-Book-Numbers-and-rates.webp",
      "/projects/mostafa-nawareg/12-Book-Methodolgy.webp",
      "/projects/mostafa-nawareg/13-Book-What-You-Gain.webp",
      "/projects/mostafa-nawareg/14-Book-When-u-need-us.webp",
      "/projects/mostafa-nawareg/15-Book-Faq.webp",
      "/projects/mostafa-nawareg/16-Book-Testo.webp",
      "/projects/mostafa-nawareg/17-Book-Difference.webp",
      "/projects/mostafa-nawareg/18-Book-Why-Us.webp",
      "/projects/mostafa-nawareg/19-Companies-Training-Hero.webp",
      "/projects/mostafa-nawareg/20-Training-About.webp",
      "/projects/mostafa-nawareg/21-Training-Definition.webp",
      "/projects/mostafa-nawareg/22-Training-Testo.webp",
      "/projects/mostafa-nawareg/23-Training-Clients.webp",
      "/projects/mostafa-nawareg/24-Training-Packs1.webp",
      "/projects/mostafa-nawareg/25-Training-Packs2.webp",
      "/projects/mostafa-nawareg/26-Training-Packs3.webp",
      "/projects/mostafa-nawareg/27-Training-Who-Needs.webp",
      "/projects/mostafa-nawareg/28-Training-Faq.webp",
      "/projects/mostafa-nawareg/29-Books-and-Packs-Hero.webp",
      "/projects/mostafa-nawareg/30-Books-Packs.webp",
      "/projects/mostafa-nawareg/31-Books-Offer.webp",
      "/projects/mostafa-nawareg/32-Books-Rate.webp",
      "/projects/mostafa-nawareg/33-Books-About.webp",
      "/projects/mostafa-nawareg/34-Book-Faq.webp",
      "/projects/mostafa-nawareg/35-Marketing-Plan-Hero.webp",
      "/projects/mostafa-nawareg/36-Marketing-Intro.webp",
      "/projects/mostafa-nawareg/37-Marketing-Research.webp",
      "/projects/mostafa-nawareg/38-Marketing-Strategy.webp",
      "/projects/mostafa-nawareg/39-Marketing-Ads.webp",
      "/projects/mostafa-nawareg/40-Marketing-Content.webp",
      "/projects/mostafa-nawareg/41-Marekting-Conc.webp",
      "/projects/mostafa-nawareg/42-Conference-Hero.webp",
      "/projects/mostafa-nawareg/43-Conference-News.webp",
      "/projects/mostafa-nawareg/44-Conference-Moments.webp",
      "/projects/mostafa-nawareg/45-Conference-Achievements.webp",
      "/projects/mostafa-nawareg/46-Conference-Order.webp",
      "/projects/mostafa-nawareg/47-Portfolio-Hero.webp",
      "/projects/mostafa-nawareg/48-Portfolio-Story.webp",
      "/projects/mostafa-nawareg/49-Portfolio-Experience.webp",
      "/projects/mostafa-nawareg/50-Portfolio-Skills.webp",
      "/projects/mostafa-nawareg/51-Portfolio-Certs.webp",
      "/projects/mostafa-nawareg/52-Portofolio-Testo.webp"
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
      "/projects/luxe-dental/19-Contact-Page.webp"
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
      "/projects/hotel-pro/01-Home-Hero.webp",
      "/projects/hotel-pro/02-Home-Stats.webp",
      "/projects/hotel-pro/03-Home-Features.webp",
      "/projects/hotel-pro/04-Home-Preview.webp",
      "/projects/hotel-pro/05-Home-How-it-works.webp",
      "/projects/hotel-pro/06-Home-Testo.webp",
      "/projects/hotel-pro/07-Home-Plans.webp",
      "/projects/hotel-pro/08-Home-FAQ.webp",
      "/projects/hotel-pro/09-Home-Call-to-Action.webp",
      "/projects/hotel-pro/10-Home-Footer.webp"
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
      "/projects/streamflow/StreamFlow.webp"
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
      "/projects/khaled-nasser/11-Change-Point.webp"
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
      "/projects/ahmed-hakim/01-Home-Hero.webp",
      "/projects/ahmed-hakim/02-Home-Stats-and-logo-slider.webp",
      "/projects/ahmed-hakim/03-Home-Experience.webp",
      "/projects/ahmed-hakim/04-Home-Story.webp",
      "/projects/ahmed-hakim/05-About-Hero.webp",
      "/projects/ahmed-hakim/06-Services-Hero.webp",
      "/projects/ahmed-hakim/07-Results.webp"
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
      "/projects/tutor-landing-page/01-Home-Hero.webp",
      "/projects/tutor-landing-page/02-Home-Gains.webp",
      "/projects/tutor-landing-page/03-Home-Course-Chapters.webp",
      "/projects/tutor-landing-page/04-Home-Course-Summary.webp",
      "/projects/tutor-landing-page/05-Home-Audience.webp",
      "/projects/tutor-landing-page/06-Home-Takeaways.webp",
      "/projects/tutor-landing-page/07-Home-Course-Details.webp",
      "/projects/tutor-landing-page/08-Home-CTA.webp"
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