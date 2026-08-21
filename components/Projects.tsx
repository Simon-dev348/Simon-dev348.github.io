"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-line px-6 py-28 md:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-magenta">
            03 · Projects
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl text-ink md:text-5xl">
            Systems I&apos;ve shipped.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group relative overflow-hidden rounded-2xl border border-line bg-surface/40 p-7 md:p-10"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-signal opacity-0 transition-opacity duration-500 group-hover:opacity-[0.06]" />

                <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl text-ink md:text-3xl">
                        {project.name}
                      </h3>
                      <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-cyan">
                        {project.tag}
                      </span>
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                      {project.description}
                    </p>

                    <ul className="mt-5 space-y-1.5">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2 text-sm text-ink/70 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-violet"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-surface-2 px-3 py-1 font-mono text-xs text-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="font-mono text-sm text-muted/60 md:text-right">
                    {project.year}
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
