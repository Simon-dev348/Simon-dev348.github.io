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

export const aboutViews = [
  {
    id: "development",
    label: "Full-Stack Developer",
    headlineStart: "I work at the point where ",
    headlineHighlight: "software meets infrastructure",
    headlineEnd: " — writing the API and keeping the server it runs on alive.",
    description:
      "Based in Nairobi, I split my time between building full-stack products — Django REST APIs paired with Next.js frontends — and the ICT support work that keeps real systems running: networking, deployment pipelines, and the unglamorous reliability work most portfolios leave out. That combination means I design software with its actual operating conditions in mind, not just its happy path.",
    stamp: "/images/qualifiedstamp.png",
    stampAlt: "Qualified full-stack developer stamp",
  },
  {
    id: "it-support",
    label: "IT Support Specialist",
    headlineStart: "I keep ",
    headlineHighlight: "people connected and systems reliable",
    headlineEnd: " — from everyday troubleshooting to secure IT infrastructure.",
    description:
      "My IT support experience spans hands-on troubleshooting, Microsoft 365 administration, networking, and endpoint security. I help users resolve hardware, software, and connectivity issues, manage access with Entra ID and MFA, and support backups and device updates. Alongside the technical work, I provide user training and clear documentation that help teams get the most from their systems.",
    stamp: "/images/IT%20Support%20Specialist%20Stamp.png",
    stampAlt: "IT Support Specialist stamp",
  },
];

export const stack = {
  "IT Support": [
    "Hardware & Software Troubleshooting",
    "LAN/Wi-Fi Administration",
    "Microsoft 365 Administration",
    "Remote Tecnical Support (RDP, TeamViewer, AnyDesk)",
    "Endpoint Security",
    "Identity & Access Management",
    "Backup & Recovery",
    "IT Asset & License Management",
    "User Training",
    "Technical Documentation",
  ],
  RPA : ["UiPath", "Microsoft Power Automate"],
  Frontend: ["Next.js", "TypeScript", "Tailwind CSS","JavaScript", "React", "React Query", "Zustand"],
  Backend: ["Python", "Java", "Spring Boot", "Django REST Framework", "Fastify", "simplejwt", "BullMQ"],
  Data: ["MongoDB", "PostgreSQL", "Redis"],
  Integrations: ["REST APIs", "FastAPI", "M-Pesa Daraja API"],
  Hosting: ["Vercel", "Contabo", "AWS", "Azure"],  
  AI_Tools: ["Claude", "Github Copilot", "Codex"],
  Frameworks: ["Next.js", "Django REST Framework", "Spring Boot"],
  DevOps: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins","Nginx"],
  CDN: ["Cloudflare", "AWS CloudFront", "Fastly", "Microsoft Azure CDN"],
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
    projectUrl: "https://applewoodmed.onrender.com/",
  },
  {
    id: "Inventory & POS Management-System",
    name: "Keen Inventory & POS Management System",
    tag: "System is live",
    description:
      "A comprehensive inventory and point-of-sale management system designed to streamline operations for retail businesses.",
    stack: ["Java", "Springboot", "Maven", "TypeScript","React","Tailwind CSS", "Cloudflare"],
    highlights: [
      "Implementation of a robust inventory management system with real-time tracking and reporting",
      "Deploying Hosting the system on Contabo Hosting with Docker and PostgreSQL for scalability and reliability",
      "Testing and debugging the live system to ensure smooth operation and user experience",
      "Designing the system's process workflows and user interfaces for optimal usability and efficiency",
      "Choosing the right technologies and frameworks for the project, the system requirements, hosting plan and deployment strategy",
      "Gathering, documenting and turning system requirements into actionable development tasks",
    ],
    year: "2026",
    projectUrl: "https://github.com/Simon-dev348/Keen-POS",
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
    projectUrl: "https://github.com/Simon-dev348/ProcurementSystem",
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
    projectUrl: "https://github.com/Simon-dev348/Simon-dev348.github.io",
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
    id: "full-stack-developer",
    role: "Full Stack Developer",
    org: "Freelance (Part-time)",
    period: "Jan 2023 — Aug 2026",
    description:
      "Designed and implemented secure, scalable web systems, including a Health Clinic Appointment Booking System, Inventory and POS System, and Procurement System, translating business requirements into reliable digital solutions.",
    highlights: [
      "Designed and deployed full-stack applications using Java, Django, React/Next.js, RESTful APIs, PostgreSQL, and MongoDB.",
      "Integrated payment services including M-Pesa Daraja API and implemented secure authentication and authorization.",
      "Used Docker, GitHub, and CI/CD pipelines for consistent development, testing, and production workflows.",
      "Conducted testing, debugging, performance tuning, and application security improvements.",
    ],
  },
  {
    id: "it-support-specialist",
    role: "IT Support Specialist",
    org: "Microhouse Technologies Limited",
    period: "Jan 2024 — Oct 2025",
    description:
      "Provided technical support and systems administration across IT infrastructure, Microsoft 365, networks, endpoints, security, and business applications.",
    highlights: [
      "Resolved application, system, email, network, and endpoint issues; trained users on IT best practices and cybersecurity awareness.",
      "Provided onsite and remote support using AnyDesk and maintained computers, laptops, phones, printers, and other IT assets.",
      "Maintained documentation for IT assets, software licenses, services, and Microsoft 365 subscriptions.",
      "Configured, monitored, and maintained LAN/Wi-Fi infrastructure for reliable connectivity.",
      "Administered Microsoft 365 accounts and licenses, Outlook, Teams, SharePoint, OneDrive, Intune, Entra ID, MFA, role-based access, and Azure Active Directory audit trails.",
      "Implemented endpoint security using Entra ID and Microsoft Defender for Endpoint.",
      "Maintained company domain DNS records, hosting, and SSL certificates.",
      "Supported backups, recovery, endpoint patching, and security updates using Intune and Microsoft 365 Backups.",
      "Coordinated SwiftHR HRMS schedules, plans, tasks, and meetings using Microsoft Project, Planner, and Teams; gathered and documented client requirements.",
      "Designed automated process flows for Business Central using Microsoft Power Automate.",
      "Maintained technical documentation and collaborated with cross-functional teams on system improvements.",
    ],
  },
  {
    id: "it-support-intern",
    role: "IT Support Intern",
    org: "Microhouse Technologies Limited",
    period: "Sept 2023 — Dec 2023",
    description:
      "Supported organizational IT operations through technical support, system implementations, and the development of digital solutions.",
    highlights: [
      "Provided technical support and guidance on IT infrastructure best practices to company staff.",
      "Maintained LAN, Wi-Fi, portable Wi-Fi, and landline phones to support continuous connectivity.",
      "Supported SwiftHR HRMS technical and functional requirements during client workshops.",
      "Coordinated implementation team tasks and milestones using Microsoft Planner.",
      "Supported development, hosting, and deployment of company web applications to Netlify, Render, and GitHub Pages.",
    ],
  },
  {
    id: "computer-studies-teacher",
    role: "Computer Studies Teacher",
    org: "Kiawambogo Mixed Secondary School",
    period: "Feb 2023 — Mar 2023",
    description: "Taught Computer Studies at Kiawambogo Mixed Secondary School.",
    highlights: [],
  },
  {
    id: "computer-trainer-designer",
    role: "Computer Trainer and Graphic Designer",
    org: "Linkworld Inc. and info Systems",
    period: "Jan 2022 — Jun 2023",
    description: "Worked as a Computer Trainer and Graphic Designer at Linkworld Inc. and info Systems.",
    highlights: [],
  },
  {
    id: "attache",
    role: "Attaché",
    org: "Kiru Tea Factory Company Limited",
    period: "Sept 2021 — Nov 2021",
    description: "Completed an attachment at Kiru Tea Factory Company Limited.",
    highlights: [],
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/Simon-dev348" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/simon-githuo-20101323a" },
  { label: "Email", href: "mailto:simongithuo73@gmail.com" },
];
