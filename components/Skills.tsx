import Reveal from "./Reveal";
import { stack } from "@/lib/data";

const flat = Object.values(stack).flat();

export default function Skills() {
  return (
    <section id="stack" className="relative overflow-hidden border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-16">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            02 · Tech Stack
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-ink md:text-5xl">
            Tools I reach for by default.
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-14 flex select-none overflow-hidden border-y border-line py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />
        <div className="flex shrink-0 animate-marquee gap-10">
          {[...flat, ...flat].map((item, i) => (
            <span
              key={i}
              className="font-mono text-lg text-muted/70 md:text-2xl"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 px-6 sm:grid-cols-2 md:px-16 lg:grid-cols-3">
        {Object.entries(stack).map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.08}>
            <div className="h-full rounded-xl border border-line bg-surface/50 p-6 transition-colors hover:border-cyan/40">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-violet">
                {category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-sm text-ink/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
