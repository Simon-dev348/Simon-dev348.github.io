type TimelineItem = {
  title: string;
  meta: string;
  org: string;
  points?: string[];
};

const EDUCATION: TimelineItem[] = [
  {
    title: "BSc Computer Science",
    meta: "2021",
    org: "Kirinyaga University",
  },
];

const EXPERIENCE: TimelineItem[] = [
  {
    title: "Full Stack Developer",
    meta: "Nov 2025 – Present",
    org: "Freelance",
    points: [
      "Built and deployed full-stack apps with Django, React/Next.js, PostgreSQL, and MongoDB.",
      "Integrated secure auth, geolocation, and MPESA Daraja payments into production apps.",
      "Containerized services with Docker and ran CI/CD pipelines for reliable releases.",
    ],
  },
  {
    title: "IT Support Specialist",
    meta: "Jan 2024 – Oct 2025",
    org: "Microhouse Technologies Limited",
    points: [
      "Managed hardware, networks, and Microsoft 365 / Azure environments for the organization.",
      "Supported HRMS deployment: gathered requirements, prepped server environments, and validated releases.",
      "Implemented security controls including MFA, RBAC, and Azure AD identity management.",
    ],
  },
  {
    title: "IT Support Intern",
    meta: "Sep – Dec 2023",
    org: "Microhouse Technologies Limited",
    points: [
      "Supported HRMS inception and requirements workshops alongside the dev team.",
      "Built UI in React/CSS from Figma designs and deployed sites via Netlify and cPanel.",
    ],
  },
];

const CERTIFICATIONS: TimelineItem[] = [
  { title: "Endpoint Security", meta: "2026", org: "Cisco Networking Academy" },
  { title: "Introduction to Cybersecurity", meta: "2026", org: "Cisco Networking Academy" },
  { title: "Microsoft 365 Fundamentals", meta: "2024", org: "Microsoft Learn" },
  { title: "Microsoft Dynamics 365 Business Central — Beginners Guide", meta: "2024", org: "Udemy" },
];

function Card({ item }: { item: TimelineItem }) {
  return (
    <div className="border-l-2 border-cyan/60 pl-5">
      <h4 className="font-display text-base font-semibold text-fog">{item.title}</h4>
      <p className="mt-1 text-sm text-cyan">{item.meta}</p>
      <p className="text-sm font-medium text-emerald-400">{item.org}</p>
      {item.points && (
        <ul className="mt-2 space-y-1.5">
          {item.points.map((point) => (
            <li key={point} className="text-sm leading-relaxed text-muted">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-center font-display text-2xl font-bold text-fog">
        Resume &amp; Professional Background
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-brand-gradient" />
      <p className="mx-auto mt-5 max-w-md text-center text-sm text-muted">
        Qualifications and experience, at a glance.
      </p>

      <div className="mt-12 space-y-12">
        <div>
          <h3 className="mb-5 font-display text-lg font-semibold text-cyan">🎓 Education</h3>
          <div className="space-y-6 hover:scale-[1.08] transition-transform">
            {EDUCATION.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-semibold text-cyan">💼 Work Experience</h3>
          <div className="space-y-6 hover:scale-[1.08] transition-transform">
            {EXPERIENCE.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-semibold text-cyan">📜 Certifications</h3>
          <div className="space-y-6 hover:scale-[1.08] transition-transform">
            {CERTIFICATIONS.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="mb-4 text-sm text-muted">Want a PDF copy of the full resume?</p>
        <a
          href="/Simon Githuo Resume.pdf"
          download
          className="inline-block w-full rounded-lg bg-brand-gradient px-8 py-3 text-center font-semibold text-ink transition-transform hover:scale-[1.02] sm:w-auto"
        >
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}
