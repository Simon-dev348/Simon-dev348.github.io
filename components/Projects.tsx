import SystemGlyph from "./SystemGlyph";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  href: string;
  glyph: "pipeline" | "integration" | "security" | "marketplace" | "procure-to-pay" | "dashboard" | "default" ;
};

const PROJECTS: Project[] = [
  {
    title: "Procure-to-Pay App",
    category: "Full-Stack Project",
    description:
      "A procurement platform where customer-side officers create purchase requests, review supplier proposals, approve a supplier, and complete procurement through payment, with role-based auth separating customer and supplier portals.",
    tags: ["Django REST", "Next.js", "PostgreSQL", "RBAC"],
    href: "#",
    glyph: "procure-to-pay",
  },
  {
    title: "Homiqa",
    category: "Real Estate Marketplace",
    description:
      "A geo-aware real estate marketplace where students, professionals, and tenants find their ideal properties, and landlords manage and showcase listings — built as a microservices architecture with M-Pesa payments.",
    tags: ["Django REST", "PostGIS", "Next.js 14", "Celery", "M-Pesa"],
    href: "#",
    glyph: "marketplace",
  },
  {
    title: "API System Compliance Bridge",
    category: "Production System",
    description:
      "A compliance integration bridge connecting enterprise clients to government platforms for health insurance claims and fiscal invoicing, with async job processing for reliable submissions.",
    tags: ["Fastify", "TypeScript", "BullMQ", "Redis", "Django REST"],
    href: "#",
    glyph: "pipeline",
  },
  {
    title: "Government Health System Integration",
    category: "Systems Integration",
    description:
      "Built fiscal invoicing and health-claims integrations against government EDI and API specs, handling retries, validation, and audit trails for every submission.",
    tags: ["Node.js", "REST APIs", "EDI", "Queue Processing"],
    href: "#",
    glyph: "integration",
  },
  {
    title: "Identity & Access Service",
    category: "Security & Auth",
    description:
      "A dedicated identity service handling authentication, RBAC, and JWT session management, built to satisfy Kenya's Data Protection Act and ODPC requirements.",
    tags: ["Django", "DRF", "simplejwt", "RBAC"],
    href: "#",
    glyph: "security",
  },
  {
    title: "Procurement Management System",
    category: "Full-Stack Project",
    description:
      "An end-to-end procurement platform with a typed API client, auth state management, and a dashboard for tracking requests, approvals, and vendors.",
    tags: ["Next.js 14", "Zustand", "React Query", "PostgreSQL"],
    href: "#",
    glyph: "dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-center font-display text-2xl font-bold text-fog">
        My Projects
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-brand-gradient" />
      <p className="mx-auto mt-5 max-w-md text-center text-sm text-muted">
        A showcase of backend, integration, and full-stack web application work.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group flex flex-col overflow-hidden rounded-xl border border-panelBorder bg-panel transition-colors hover:border-cyan/60 hover:scale-[1.02]"
          >
              <div className="flex h-36 items-center bg-ink px-4">
              <SystemGlyph variant={project.glyph as any} />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="font-display text-lg font-semibold text-cyan group-hover:text-gradient">
                {project.title}
              </h3>
              <span className="text-xs uppercase tracking-wider text-muted">
                {project.category}
              </span>
              <p className="text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-panelBorder bg-ink px-2.5 py-1 text-xs text-fog"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}