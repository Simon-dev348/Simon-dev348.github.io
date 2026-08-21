import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-line px-6 py-28 md:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            04 · Experience
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-ink md:text-5xl">
            Where the hours went.
          </h2>
        </Reveal>

        <div className="mt-16 border-l border-line pl-8">
          {experience.map((role, i) => (
            <Reveal key={role.role} delay={i * 0.1}>
              <div className="relative pb-14 last:pb-0">
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-void ring-2 ring-cyan" />
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  {role.period}
                </span>
                <h3 className="mt-2 font-display text-xl text-ink md:text-2xl">
                  {role.role} <span className="text-muted">— {role.org}</span>
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                  {role.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
