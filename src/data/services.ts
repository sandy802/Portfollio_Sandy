import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-apps",
    title: "Full-Stack Web Apps",
    shortDesc:
      "Modern, reactive web applications built with Next.js, React, Node.js, and TypeScript. Optimized for high performance and seamless user experience.",
    deliverables: [
      "Dynamic client & server rendering",
      "Robust state management & auth (OAuth/JWT)",
      "Real-time updates & WebSockets",
      "Interactive data tables & dashboards",
    ],
    icon: "LayoutDashboard",
    badge: "Most Requested",
  },
  {
    id: "business-sites",
    title: "High-Converting Business Websites",
    shortDesc:
      "Ultra-fast, responsive web experiences crafted to convert visitors into inquiries. Bespoke design, smooth animations, and top-tier SEO.",
    deliverables: [
      "100/100 Core Web Vitals optimization",
      "Custom responsive bento-style design",
      "Structured SEO & OpenGraph marketing tags",
      "Lead generation forms & instant WhatsApp CTA",
    ],
    icon: "Globe",
    badge: "Growth Focus",
  },
  {
    id: "admin-portals",
    title: "Custom Admin Dashboards & Portals",
    shortDesc:
      "Tailor-made management portals that replace messy spreadsheets with automated workflows, role-based access, and real-time operational analytics.",
    deliverables: [
      "Role-based permission controls (RBAC)",
      "CRUD workflows & bulk CSV operations",
      "Interactive analytics & reporting charts",
      "Audit logging & data security",
    ],
    icon: "ShieldCheck",
  },
  {
    id: "backend-api",
    title: "Backend & API Engineering",
    shortDesc:
      "Scalable RESTful & GraphQL APIs designed with Node.js, Express, Python, and SQL databases. Reliable, secure, and built for high concurrency.",
    deliverables: [
      "PostgreSQL / MySQL schema architecture",
      "Third-party integrations (Stripe, Razorpay, SMS)",
      "Caching layer with Redis",
      "Automated unit testing & Swagger documentation",
    ],
    icon: "Server",
  },
  {
    id: "deployment-maintenance",
    title: "Cloud Deployment & Maintenance",
    shortDesc:
      "End-to-end production hosting, CI/CD pipeline setup, and ongoing technical maintenance so your business operates 24/7 without disruptions.",
    deliverables: [
      "Vercel, AWS EC2, or Docker containerization",
      "Automated GitHub Actions CI/CD pipelines",
      "SSL, custom domain & DNS orchestration",
      "Monthly health checks & security updates",
    ],
    icon: "CloudLightning",
  },
];
