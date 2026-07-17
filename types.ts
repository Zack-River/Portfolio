export interface UseCase {
  id: string;
  title: string;
  description: string;
  steps: string;
  expectedResult: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  image?: string;
  gallery?: string[];
  schemaImage?: string;
  useCaseImage?: string;
  useCases?: UseCase[];
  stats: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  icon: string; // lucide icon name
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
  certificate?: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  image: string;
  link?: string;
  voiceNote?: string;
}