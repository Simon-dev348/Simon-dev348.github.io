"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { aboutViews } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || hovered || focused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % aboutViews.length);
    }, 10000);
    return () => window.clearInterval(timer);
  }, [activeIndex, paused, hovered, focused, reduceMotion]);

  return (
    <section
      id="about"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      className="relative border-t border-line px-6 py-28 md:px-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet">
              01 · About
            </span>
          </Reveal>
          <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="About views">
            {aboutViews.map((view, index) => (
              <button
                key={view.id}
                type="button"
                aria-pressed={activeIndex === index}
                aria-controls="about-content"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full border px-4 py-2 font-mono text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan ${activeIndex === index ? "border-cyan/60 bg-cyan/10 text-cyan" : "border-line text-muted hover:border-cyan/40 hover:text-ink"}`}
              >
                {view.label}
              </button>
            ))}
            {!reduceMotion && (
              <button
                type="button"
                onClick={() => setPaused((current) => !current)}
                aria-label={paused ? "Resume automatic rotation" : "Pause automatic rotation"}
                className="rounded-full border border-line p-2 text-muted transition-colors hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
              >
                {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
              </button>
            )}
          </div>
          <div id="about-content" className="mt-6 grid">
            {aboutViews.map((view, index) => (
              <motion.div
                key={view.id}
                aria-hidden={activeIndex !== index}
                initial={false}
                animate={{ opacity: activeIndex === index ? 1 : 0, y: reduceMotion || activeIndex === index ? 0 : 8 }}
                transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeInOut" }}
                className={`col-start-1 row-start-1 ${activeIndex === index ? "" : "pointer-events-none select-none"}`}
              >
                <h2 className="max-w-3xl font-display text-3xl leading-snug text-ink md:text-5xl">
                  {view.headlineStart}
                  <span className="text-gradient">{view.headlineHighlight}</span>
                  {view.headlineEnd}
                </h2>
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                  {view.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <Reveal delay={0.25}>
          <div className="relative mx-auto aspect-[1.08/1] w-full max-w-[520px] rotate-[-1deg] bg-[#f5eadb] p-3 shadow-[10px_14px_0_rgba(34,211,238,0.16),0_20px_45px_rgba(0,0,0,0.35)] sm:p-5">
            <div className="absolute inset-0 translate-x-2 translate-y-2 -rotate-[2deg] border border-[#e8cfae] bg-[#fff8ed]" />
            <div className="relative z-10 h-full overflow-hidden border border-[#e5c79e] bg-[#f8d4a7] p-5 sm:p-7">
              <div className="relative z-10 flex h-full flex-col justify-between">
                {aboutViews.map((view, index) => (
                  <motion.img
                    key={view.id}
                    src={view.stamp}
                    alt={view.stampAlt}
                    aria-hidden={activeIndex !== index}
                    initial={false}
                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeInOut" }}
                    className="pointer-events-none absolute -bottom-[10%] -left-[24%] z-10 w-[125%] rotate-[-12deg] drop-shadow-[0_3px_4px_rgba(70,45,20,0.2)]"
                  />
                ))}
                <div className="absolute right-4 top-7 w-[56%] rotate-[8deg] border-[7px] border-white bg-[#38321e] p-1 shadow-[0_5px_10px_rgba(70,45,20,0.25)] sm:right-7 sm:top-9 sm:border-[9px]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src="/images/profile.png"
                      alt="Simon Githuo"
                      className="absolute inset-0 h-full w-full object-cover object-top grayscale"
                    />
                  </div>
                  <div className="absolute -right-8 -top-4 h-6 w-16 rotate-[42deg] bg-white/70" />
                </div>
                <div className="w-fit -rotate-2 bg-[#fffdf8] px-4 py-2 shadow-[0_3px_7px_rgba(70,45,20,0.16)] sm:px-5 sm:py-3">
                  <span className="font-display text-lg font-semibold uppercase tracking-wide text-[#24201d] sm:text-2xl">
                    Behind the work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
