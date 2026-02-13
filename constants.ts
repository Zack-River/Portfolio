import { Project, SkillCategory, Education, Experience } from './types';
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
  title: "Backend Software Engineer",
  subtitle: "Full Stack MERN Specialist",
  email: "zackriver.dev@gmail.com",
  phone: "+20 1201024880",
  linkedin: "linkedin.com/in/labdallah-wageehl",
  github: "github.com/Zack-River",
  bio: "Entry-level Backend Software Engineer specializing in Node.js and NestJS. I build secure, scalable RESTful APIs and robust architectures. My focus is on high-performance systems handling 10K+ requests, clean code, and database optimization.",
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
    image: "/StreamFlow.png"
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
    image: "/ShopStream.jpg"
  }
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