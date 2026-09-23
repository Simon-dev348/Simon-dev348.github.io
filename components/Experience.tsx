"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  const [selectedId, setSelectedId] = useState(experience[0].id);
  const selected = experience.find((position) => position.id === selectedId)!;
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative scroll-mt-24 border-t border-line px-6 py-28 md:px-16">
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

        <p className="mt-5 text-sm text-muted">Select a position to explore my work and responsibilities.</p>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] lg:gap-8">
          <div role="group" aria-label="Select an experience" className="flex gap-3 overflow-x-auto p-1 pb-4 lg:flex-col lg:overflow-visible lg:pb-1">
            {experience.map((position) => {
              const active = position.id === selectedId;
              return (
                <button
                  key={position.id}
                  id={`position-${position.id}`}
                  type="button"
                  aria-pressed={active}
                  aria-controls="experience-details"
                  onClick={() => setSelectedId(position.id)}
                  className={`relative w-[260px] shrink-0 rounded-xl border p-5 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan lg:w-full ${active ? "border-cyan/60 bg-cyan/5" : "border-line bg-surface/50 hover:border-cyan/30 hover:bg-cyan/5"}`}
                >
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">{position.period}</span>
                  <span className={`mt-3 flex items-start justify-between gap-3 font-display text-lg ${active ? "text-cyan" : "text-ink"}`}>
                    {position.role}
                    <ArrowUpRight size={18} aria-hidden="true" className={`mt-1 shrink-0 transition-transform duration-300 ${active ? "rotate-45" : ""}`} />
                  </span>
                  <span className="mt-2 block text-xs leading-relaxed text-muted">{position.org}</span>
                </button>
              );
            })}
          </div>

          <motion.div
            layout={reduceMotion ? false : "size"}
            transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
            className="overflow-hidden rounded-2xl border border-line bg-surface/50"
          >
            <div id="experience-details" role="region" aria-label="Selected position details" aria-live="polite" aria-atomic="true">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={selected.id}
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
                  className="p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3 font-mono text-xs text-cyan">
                    <BriefcaseBusiness size={18} aria-hidden="true" />
                    <span>{selected.period}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-ink sm:text-3xl">{selected.role}</h3>
                  <p className="mt-2 text-sm text-cyan">{selected.org}</p>
                  <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">{selected.description}</p>
                  {selected.highlights.length > 0 && (
                    <div className="mt-7 border-t border-line pt-6">
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Key responsibilities</h4>
                      <ul className="mt-5 space-y-4">
                        {selected.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-ink/90">
                            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.article>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
