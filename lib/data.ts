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
    "Robotics Process Automation · django · next.js · typescript · postgresql · docker",
    "simon@nairobi:~$ status",
    "available for new work →",
  ],
};

export const stack = {
  RPA : ["UiPath", "Microsoft Power Automate"],
  Frontend: ["Next.js", "TypeScript", "Tailwind CSS","JavaScript", "React", "React Query", "Zustand"],
  Backend: ["Python", "Java", "Spring Boot", "Django REST Framework", "Fastify", "simplejwt", "BullMQ"],
  Data: ["MongoDB", "PostgreSQL", "Redis"],
  Integrations: ["REST APIs", "FastAPI", "M-Pesa Daraja API"],
  Hosting: ["Vercel", "Contabo", "AWS", "Azure"],  
  AI_Tools: ["Claude", "Github Copilot", "Codex"],
  Frameworks: ["Next.js", "Django REST Framework", "Spring Boot"],
  DevOps: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins","Nginx"],
};

export const projects = [
   {
    id: "Health Clinics Appointment Booking System",
    name: "Carewise",
    tag: "Project on Progress",
    description:
      "An end-to-end appointment booking system for healthcare clinics, built with FastAPI, Next.js, Prisma and PostgreSQL for healtcare clinics and centers in Kenya and beyond.",
    stack: ["Next.js 14", "React", "Bootstrap", "Framer Motion"],
    highlights: [
      "Designed and developed an appointment booking system for managing patient appointments and clinic schedules",
      "Built workflows for patient registration, appointment booking, rescheduling, and cancellation, ensuring a seamless user experience.",
      "Tested and refined automation workflows to improve accuracy and efficiency in appointment data processing.",
      "Designing the user interfaces for optimal usability and efficiency",
      "Automated appointment data entry and processing using UiPath.",
      "Implemented automated appointment status updates and basic data management.",
      "Created UiPath workflows to validate booking information and reduce manual data-entry tasks.",
      "Choosing the right technologies and frameworks for the project, the system requirements, hosting plan and deployment strategy",
      "Gathering, documenting and turning system requirements into actionable development tasks",
    ],
    year: "2026",
    projectUrl: "https://github.com/Simon-dev348",
  },
  {
    id: "Inventory & POS Management-System",
    name: "Keen Inventory & POS Management System",
    tag: "Collaboration with a developer team",
    description:
      "A comprehensive inventory and point-of-sale management system designed to streamline operations for retail businesses.",
    stack: ["Next.js 14", "TypeScript","React","Tailwind CSS", "Framer Motion"],
    highlights: [
      "Implementation of a robust inventory management system with real-time tracking and reporting",
      "Deploying Hosting the system on Contabo Hosting with Docker and PostgreSQL for scalability and reliability",
      "Testing and debugging the live system to ensure smooth operation and user experience",
      "Designing the system's process workflows and user interfaces for optimal usability and efficiency",
      "Choosing the right technologies and frameworks for the project, the system requirements, hosting plan and deployment strategy",
      "Gathering, documenting and turning system requirements into actionable development tasks",
    ],
    year: "2026",
    projectUrl: "https://github.com/Simon-dev348",
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
    projectUrl: "https://github.com/Simon-dev348",
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
    projectUrl: "https://github.com/Simon-dev348",
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
    projectUrl: "https://github.com/Simon-dev348",
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
    projectUrl: "https://github.com/Simon-dev348",
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
    role: "IT Support Specialist",
    org: "Contract",
    period: "Jan 2024 — May 2026",
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
  {
    role: "Video Editor & Graphic Designer",
    org: "Independent / Contract",
    period: "Jan 2022 — Present",
    description:
      "Designing and editing video content for social media, marketing, and corporate communications, alongside creating graphics and visual assets.",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/Simon-dev348" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/simon-githuo-20101323a" },
  { label: "Email", href: "mailto:simongithuo73@gmail.com" },
];
