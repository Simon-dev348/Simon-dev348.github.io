import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="relative border-t border-line px-6 py-24 md:px-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            03 · Education
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col justify-between gap-5 border-y border-line py-6 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">🎓</span>
                <h2 className="font-display text-2xl text-ink md:text-4xl">
                  BSc Computer Science
                </h2>
              </div>
              <p className="mt-3 pl-11 font-mono text-sm text-muted">
                Kirinyaga University
              </p>
            </div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-violet">
              2017 - 2021
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
