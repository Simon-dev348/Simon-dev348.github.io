import Reveal from "./Reveal";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Endpoint Security",
    year: "July 2026",
    provider: "Cisco Networking Academy",
    badge: "/images/endpoint_security_badge.png",
    credentialUrl: "https://www.credly.com/badges/b7b4c1e4-f138-4347-b8d2-c205f9b13e55/public_url",
  },
  {
    title: "Introduction to Cybersecurity",
    year: "March 2026",
    provider: "Cisco Networking Academy",
    badge: "/images/introduction_to_cybersecurity_badge.png",
    credentialUrl: "https://www.credly.com/badges/8942971c-b548-4fba-bcde-a6e473f0b3e0/public_url",
  },
  {
    title: "Microsoft 365 Fundamentals",
    year: "August 2024",
    provider: "Microsoft Learn",
    badge: "/images/microsoft-certified-fundamentals-badge.svg",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/SIMONMAINA-0757/7638FBF054DD947E?sharingId=966F20B09053BB8D",
  },
  {
    title: "Business Central: The Ultimate Beginner's Guide",
    year: "June 2024",
    provider: "Udemy",
    badge: "/images/Business-Central.svg",
    credentialUrl: "https://www.udemy.com/certificate/UC-0dcae844-7e20-494a-bdd2-4eb240f41ed0/",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative border-t border-line px-6 py-24 md:px-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            04 · Certifications
          </span>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <Reveal key={certification.title} delay={index * 0.08} className="min-w-0">
              <article className="flex h-full flex-col justify-between gap-6 rounded-xl border border-line bg-surface/50 p-6 transition-colors hover:border-cyan/40">
                <div className="flex items-center gap-3">
                  <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center">
                    <img
                      src={certification.badge}
                      alt={`${certification.title} certification badge`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h2 className="font-display text-xl leading-snug text-ink md:text-2xl">
                    {certification.title}
                  </h2>
                </div>
                <div className="flex min-w-0 items-center gap-3 border-t border-line pt-4">
                  <p className="min-w-0 flex-1 truncate font-mono text-[10px] uppercase tracking-[0.1em] text-muted sm:text-xs">
                    {certification.provider}
                  </p>
                  <p className="shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-violet sm:text-sm">
                    {certification.year}
                  </p>
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex shrink-0 items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[10px] text-ink transition-colors hover:border-cyan hover:text-cyan sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
                  >
                    Show credential
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
