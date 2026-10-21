export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack Web App' | 'Business System' | 'CLI / DevTool' | 'AI / Data';
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  accent: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  icon: string;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  rating: number;
  avatar?: string;
  highlight: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}
