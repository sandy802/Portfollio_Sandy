import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Engineering",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Proficient" },
      { name: "HTML5 / Modern CSS", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "State Management", level: "Proficient" },
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Python", level: "Proficient" },
      { name: "RESTful API Design", level: "Expert" },
      { name: "FastAPI", level: "Working Knowledge" },
      { name: "Next.js Server Actions", level: "Advanced" },
      { name: "JWT & OAuth Auth", level: "Proficient" },
    ],
  },
  {
    category: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "SQLite", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },
      { name: "Prisma ORM", level: "Proficient" },
      { name: "Database Schema Design", level: "Advanced" },
    ],
  },
  {
    category: "Tools, AI & DevOps",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker Basics", level: "Working Knowledge" },
      { name: "Streamlit", level: "Proficient" },
      { name: "Groq / LLM Integration", level: "Proficient" },
      { name: "Postman / Thunder Client", level: "Advanced" },
      { name: "Vercel / Cloud Deployment", level: "Advanced" },
      { name: "Linux / Bash Shell", level: "Proficient" },
    ],
  },
];

// Flat list for continuous marquee display
export const marqueeSkills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Express.js",
  "Prisma ORM",
  "MySQL",
  "Streamlit",
  "Groq AI",
  "Docker",
  "Git & GitHub",
  "Framer Motion",
  "REST APIs",
  "Linux CLI",
  "Vercel",
];
