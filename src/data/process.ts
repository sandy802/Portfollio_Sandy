import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    duration: "Day 1 – 3",
    description:
      "We unpack your business goals, target audience, technical scope, and exact requirements. No jargon, just clear outcomes and a defined timeline.",
    deliverables: [
      "Technical architecture plan",
      "Feature specification checklist",
      "Milestone roadmap & fixed estimate",
    ],
  },
  {
    step: "02",
    title: "UX Design & Architecture",
    duration: "Day 4 – 7",
    description:
      "Creating sleek, conversion-focused wireframes, database schemas, and API design specifications before writing production code.",
    deliverables: [
      "Interactive UI component design",
      "Database schema & API contracts",
      "Design token & theme alignment",
    ],
  },
  {
    step: "03",
    title: "Agile Development & Demos",
    duration: "Week 2 – 3",
    description:
      "Rapid, modular coding with continuous git commits and weekly demo links. You see real progress and can provide immediate feedback.",
    deliverables: [
      "Fully responsive frontend & backend",
      "Live preview deployment on Vercel/staging",
      "Clean, documented TypeScript codebase",
    ],
  },
  {
    step: "04",
    title: "Launch & 30-Day Support",
    duration: "Week 4 & Beyond",
    description:
      "Final production deployment to your custom domain, performance checks, security audit, and 30 days of complimentary post-launch support.",
    deliverables: [
      "Production deployment & SSL configuration",
      "Code handover & walkthrough session",
      "30-day bugfix & warranty period",
    ],
  },
];
