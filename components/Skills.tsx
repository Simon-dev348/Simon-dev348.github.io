const GROUPS = [
  {
    label: "Languages & Frameworks",
    items: ["Django", "TypeScript", "React / Next.js", "Tailwind CSS", "ShadCN UI"],
  },
  {
    label: "Data & Infrastructure",
    items: ["PostgreSQL", "PostGIS", "Redis", "Celery", "MongoDB", "Docker"],
  },
  {
    label: "Cloud & Tools",
    items: ["Microsoft Azure", "Nginx", "Cloudflare", "Git", "MPESA Daraja API"],
  },
];

const OTHER_SKILLS = ["Problem Solving", "Cross-Functional Collaboration", "Technical Training"];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-center font-display text-2xl font-bold text-fog">
        Skills &amp; Tools
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-brand-gradient" />

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {GROUPS.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-panelBorder bg-panel px-3 py-1 text-sm text-fog"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
          Other Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {OTHER_SKILLS.map((item) => (
            <span
              key={item}
              className="rounded-full border border-panelBorder bg-panel px-3 py-1 text-sm text-fog"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
