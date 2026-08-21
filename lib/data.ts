export const profile = {
  name: "Simon",
  role: "Full-Stack Developer & IT Support Specialist",
  location: "Nairobi, Kenya",
  tagline:
    "I am a software developer building practical systems that blend product thinking, infrastructure, and scalable digital experiences.",
  greetings: "Hi, Meet Simon. A creative",
  bootLines: [
    "simon@nairobi:~$ whoami",
    "full-stack developer / it support specialist",
    "simon@nairobi:~$ cat stack.txt",
    "django · next.js · typescript · postgresql · docker",
    "simon@nairobi:~$ status",
    "available for new work →",
  ],
};

export const stack = {
  Frontend: ["Next.js", "TypeScript", "Tailwind CSS","JavaScript", "React", "React Query", "Zustand"],
  Backend: ["Python", "Java", "Spring Boot", "Django REST Framework", "Fastify", "simplejwt", "BullMQ"],
  Data: ["MongoDB", "PostgreSQL", "Redis"],
  Infra: ["Docker", "Nginx", "Cloudflare", "GitHub Actions"],
  Integrations: ["REST APIs", "FastAPI", "M-Pesa Daraja API"],
  Hosting: ["Vercel", "Contabo", "AWS", "Azure"],  
  AI_Tools: ["Claude", "Github Copilot", "Codex"],
};

export const projects = [
  {
    id: "Inventory & POS -Management-System",
    name: "Inventory & POS Management System",
    tag: "Collaboration with a developer team",
    description:
      "A comprehensive inventory and point-of-sale management system designed to streamline operations for retail businesses.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Collaboration on implementing a robust inventory management system with real-time tracking and reporting",
      "Collaboration on developing a user-friendly point-of-sale interface with seamless checkout and payment processing",
      "Collaboration on deploying the system to Contabo Hosting with Docker and PostgreSQL for scalability and reliability",
    ],
    year: "2026",
  },
  {
    id: "procurement-system",
    name: "Procurement System",
    tag: "ERP Procurement Management",
    description:
      "An end-to-end procurement management system covering requisitions, approvals, and payment — built with a Django REST API and a Next.js App Router frontend.",
    stack: ["Django REST Framework", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Docker", "PostgreSQL", "Redis"],
    highlights: [
      "Full App Router routing with role-aware navigation",
      "Procure-to-pay workflow with multi-level approvals and audit trail",
      "Structured Implementation strategy for multi-environment deployment with Docker and PostgreSQL",
      "Intuitive and responsive UI with Tailwind CSS and Framer Motion for smooth interactions",
      "Deployment prepared for cloud hosting with Docker and PostgreSQL, ensuring scalability and reliability",
      "Hosting and deployment strategy for cloud environments, including CI/CD pipelines and automated testing",
    ],
    year: "2026",
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    tag: "Portfolio Site",
    description:
      "This site — a dark, motion-driven portfolio shipped as a static export to GitHub Pages via GitHub Actions, built to present real project work rather than a template.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Static export pipeline tuned to avoid GitHub Pages / Jekyll interference",
      "Reusable scroll-reveal and cursor-glow motion primitives",
      "Content-driven components — one data file, no hardcoded copy",
    ],
    year: "2026",
  },
    {
    id: "borasystems",
    name: "BoraSystems",
    tag: "Compliance Integration Bridge",
    description:
      "A compliance bridge connecting Kenyan enterprise clients to government platforms — KRA eTIMS for fiscal invoicing and SHA/SHIF for health insurance claims. Built as a three-service scaffold with a four-role RBAC matrix, append-only audit trail, and JWT-based identity.",
    stack: ["Fastify", "TypeScript", "BullMQ", "Redis", "Django REST Framework", "simplejwt"],
    highlights: [
      "Four-role RBAC matrix across backend, identity, and frontend services",
      "Append-only audit trail for regulatory traceability",
      "Async job processing for eTIMS / SHIF submissions via BullMQ",
    ],
    year: "2026",
  },
  {
    id: "homiqa",
    name: "Homiqa",
    tag: "Rental Housing Platform",
    description:
      "An end-to-end rental housing platform — built with a Django REST API and a Next.js App Router frontend.",
    stack: ["Django REST Framework", "Next.js 14", "TypeScript", "Zustand", "React Query"],
    highlights: [
      "Full App Router routing with role-aware navigation",
      "Zustand auth store paired with React Query for server state",
      "Structured Django settings for multi-environment deployment",
    ],
    year: "2025",
  },
  
];

export const experience = [
  {
    role: "Full-Stack Developer",
    org: "Independent / Contract",
    period: "Jan 2022 — Present",
    description:
      "Designing and shipping full-stack systems for Kenyan enterprise clients, spanning procurement, compliance, and payments integration.",
  },
  {
    role: "Video Editor & Graphic Designer",
    org: "Independent / Contract",
    period: "Jan 2022 — Present",
    description:
      "Designing and editing video content for social media, marketing, and corporate communications, alongside creating graphics and visual assets.",
  },
  {
    role: "IT Support Specialist",
    org: "Contract",
    period: "Jan 2024 — Oct 2025",
    description:
      "Providing infrastructure and support work alongside development — networking, deployment, and day-to-day systems reliability.",
  },
  {
    role: "IT Support Intern",
    org: "Internship",
    period: "Sept 2023 — Dec 2023",
    description:
      "Providing infrastructure and IT support work to ensure day-to-day systems reliability.",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/Simon-dev348" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/simon-githuo-20101323a" },
  { label: "Email", href: "mailto:simongithuo73@gmail.com" },
];
