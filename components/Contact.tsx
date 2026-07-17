const SOCIALS = [
  { label: "Email", href: "mailto:simongithuo73@gmail.com" },
  { label: "GitHub", href: "https://github.com/Gthuo-github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/simon-githuo-20101323a" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 pb-20 pt-4">
      <div className="rounded-2xl border border-panelBorder bg-panel p-10 text-center">
        <h2 className="font-display text-2xl font-bold text-fog">
          Let's build something with data.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">
          Open to Web and Mobile App Development roles, Remote IT Support, freelance projects, and interesting
          collaborations. Reach out any time.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="rounded-lg border border-cyan px-6 py-2.5 text-sm font-semibold text-cyan transition-colors hover:bg-cyan/10"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
