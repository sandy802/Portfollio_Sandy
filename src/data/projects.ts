import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "rameshwar-mobility",
    title: "Rameshwar Tours & Travels Platform",
    tagline: "Commercial fleet & booking management system for a Mumbai transport business",
    category: "Business System",
    problem:
      "Rameshwar Tours & Travels was relying on scattered WhatsApp messages, manual paper logs, and phone calls to coordinate daily bus/cab bookings, leading to dispatch delays and accounting confusion.",
    solution:
      "Engineered an integrated web booking engine and password-protected admin portal with real-time vehicle allocation, driver assignment, automated receipt generation, and customer SMS alerts.",
    metrics: [
      { label: "Dispatch Efficiency", value: "+45%" },
      { label: "Manual Errors", value: "-80%" },
      { label: "Daily Active Trips", value: "35+" },
    ],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "REST API"],
    featured: true,
    liveUrl: "https://rameshwartravels.in",
    githubUrl: "https://github.com/sandy802/Rameshwar-Tours-Travels-",
    image: "/projects/rameshwar.webp",
    accent: "from-violet-600/20 to-purple-800/10",
  },
  {
    id: "cmms-platform",
    title: "ESAB CMMS Platform",
    tagline: "Enterprise equipment lifecycle, work-order & preventive maintenance suite",
    category: "Full-Stack Web App",
    problem:
      "Industrial teams struggle with unexpected machine breakdowns, missed inspection schedules, and untracked spare parts inventory, costing thousands in downtime.",
    solution:
      "Built a full-stack Computerized Maintenance Management System (CMMS) featuring automated work-order ticketing, scheduled preventive maintenance calendars, technician allocation, and inventory alerts.",
    metrics: [
      { label: "Downtime Reduction", value: "32%" },
      { label: "Work-Order Turnaround", value: "2.4x" },
      { label: "Asset Tracking", value: "500+" },
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    featured: true,
    liveUrl: "https://esab-cmms-project.vercel.app",
    githubUrl: "https://github.com/sandy802/ESAB-CMMS-Project",
    image: "/projects/cmms.webp",
    accent: "from-blue-600/20 to-cyan-800/10",
  },
  {
    id: "aethel-realty",
    title: "Aethel Realty",
    tagline: "High-performance luxury real estate website with GSAP scroll animations",
    category: "Full-Stack Web App",
    problem:
      "High-end luxury real estate buyers expect ultra-smooth, visually captivating browsing experiences, but traditional property websites suffer from heavy image loading lag and clunky page navigation.",
    solution:
      "Developed a fully responsive luxury real estate showcase using Next.js and GSAP scroll-based animations, ensuring high performance, 60fps fluidity, and clean modular code for scalable property listings.",
    metrics: [
      { label: "Performance Score", value: "98/100" },
      { label: "Animation Smoothness", value: "60 FPS" },
      { label: "Mobile Speed", value: "1.1s" },
    ],
    tags: ["Next.js", "React", "TypeScript", "GSAP", "Tailwind CSS", "Responsive Design"],
    featured: true,
    liveUrl: "https://www.aethelrealty.com",
    image: "/projects/aethel.webp",
    accent: "from-amber-600/20 to-yellow-800/10",
  },
  {
    id: "querylens-ai",
    title: "QueryLens AI Assistant",
    tagline: "Natural language to SQL compiler and visualizer powered by Groq & LLaMA-3",
    category: "AI / Data",
    problem:
      "Non-technical founders and business managers need fast data insights from complex relational databases but cannot write raw SQL queries or joins.",
    solution:
      "Developed an AI-powered conversational analytics application using Streamlit and Groq LLaMA-3 that ingests natural English questions, schema-validates SQL, executes safely, and renders interactive charts.",
    metrics: [
      { label: "Query Accuracy", value: "96.4%" },
      { label: "Inference Latency", value: "< 650ms" },
      { label: "Supported Dialects", value: "Postgres/MySQL" },
    ],
    tags: ["Python", "Streamlit", "Groq API", "LLaMA-3", "LangChain", "SQLAlchemy"],
    featured: true,
    liveUrl: "https://querylens.streamlit.app",
    githubUrl: "https://github.com/sandy802/querylens",
    image: "/projects/querylens.webp",
    accent: "from-violet-600/20 to-purple-800/10",
  },
];
