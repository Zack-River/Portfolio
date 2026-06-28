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
    id: "streamflow",
    title: "StreamFlow",
    subtitle: "Music Management System (Spotify Clone)",
    description: "A high-performance backend system for music streaming. Built RESTful APIs handling heavy loads with optimized MongoDB schemas.",
    tags: ["Node.js", "Express", "MongoDB", "Redis", "JWT", "Cloudinary"],
    repo: "https://github.com/Zack-River/Stream_Flow",
    stats: [
      "Handled 10K+ simulated requests",
      "Reduced response time by ~35% via validation",
      "Optimized buffered audio streaming"
    ],
    image: "/StreamFlow.png",
    gallery: ["/StreamFlow.png"],
    featured: true,
  },
  {
    id: "shopstream",
    title: "ShopStream",
    subtitle: "Multi-Vendor E-commerce (UberEats Clone)",
    description: "Designed a complex multi-vendor backend architecture for restaurants, menus, and orders with role-based access control.",
    tags: ["NestJS", "Stripe", "PostgreSQL", "Docker", "Winston"],
    repo: "https://github.com/NTI-ProjectHub/ShopStream-Backend",
    stats: [
      "Improved retrieval speed by ~30%",
      "Reduced unauthorized token reuse by ~50%",
      "Implemented role-based access control (RBAC)"
    ],
    image: "/ShopStream.jpg",
    gallery: ["/ShopStream.jpg"],
    featured: true,
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
    title: "Backend Core",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "Web Sockets"]
  },
  {
    title: "Data Persistence",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Neo4J", "SQL Server", "Redis"]
  },
  {
    title: "Security & Ops",
    skills: ["JWT", "Bcrypt", "Docker", "Linux", "Git", "Rate Limiting"]
  },
  {
    title: "Architecture",
    skills: ["MVC", "SOLID Principles", "Microservices", "Design Patterns", "OOP"]
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