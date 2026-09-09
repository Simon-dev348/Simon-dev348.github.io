"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  SiContabo,
  SiDocker,
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKeycdn,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiFramer,
  SiShadcnui,
  SiSpringboot,
  SiTailwindcss,
  SiUipath,
} from "react-icons/si";
import { FaAws, FaGithub, FaJava, FaMicrosoft } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiTerminalBoxLine } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

function useTypedLines(lines: string[], speed = 28, lineDelay = 320) {
  const [output, setOutput] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        let current = "";
        for (const ch of lines[i]) {
          if (cancelled) return;
          current += ch;
          setOutput((prev) => {
            const next = [...prev];
            next[i] = current;
            return next;
          });
          await new Promise((r) => setTimeout(r, speed));
        }
        await new Promise((r) => setTimeout(r, lineDelay));
      }
      if (!cancelled) setDone(true);
    };
    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { output, done };
}

export default function Hero() {
  const { output, done } = useTypedLines(profile.bootLines);
  const headlineLines = ["Software Engineer", "Full Stack Developer", "ICT Support Specialist", "RPA Enthusiast", "Video Editor", "Graphic Designer",];
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeadlineIndex((current) => (current + 1) % headlineLines.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [headlineLines.length]);

  const orbitIcons = [
    { Icon: SiNextdotjs, label: "Next.js" },
    { Icon: FaJava, label: "Java" },
    { Icon: SiSpringboot, label: "Spring Boot" },
    { Icon: SiPython, label: "Python" },
    { Icon: SiReact, label: "React" },
    { Icon: SiFastapi, label: "FastAPI" },
    { Icon: SiMongodb, label: "MongoDB" },
    { Icon: SiTailwindcss, label: "Tailwind CSS" },
    { Icon: SiDocker, label: "Docker" },
    { Icon: SiGit, label: "Git" },
    { Icon: GiArtificialIntelligence, label: "Agentic AI" },
    { Icon: RiTerminalBoxLine, label: "Linux Shell" },
    { Icon: SiHtml5, label: "HTML5" },
    { Icon: SiKeycdn, label: "CDN" },
    { Icon: SiContabo, label: "Contabo" },
    { Icon: FaMicrosoft, label: "Azure" },
    { Icon: FaGithub, label: "GitHub" },
    { Icon: SiLinux, label: "Linux" },
    { Icon: SiPostgresql, label: "PostgreSQL" },
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: SiShadcnui, label: "shadcn/ui" },
    { Icon: VscAzure, label: "VS Code Azure" },
    { Icon: FaAws, label: "AWS" },
    { Icon: SiFramer, label: "Framer Motion" },
    { Icon: SiUipath, label: "UiPath" },
  ];
  const orbitRings = [
    { inset: "5%", icons: orbitIcons.slice(0, 9), phase: 0, duration: 120 },
    { inset: "15%", icons: orbitIcons.slice(9, 18), phase: 60, duration: 135 },
    { inset: "25%", icons: orbitIcons.slice(18, 25), phase: 90, duration: 150 },
  ];

  return (
    <section className="relative flex min-h-[680px] items-center justify-center overflow-hidden px-6 pb-16 pt-[10px] sm:min-h-[760px] sm:pb-20 md:min-h-screen md:px-16">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />

      <div className="relative z-10 flex w-full max-w-5xl justify-center text-center">
        <div className="relative flex aspect-square w-[min(100vw,1024px)] max-w-5xl items-center justify-center">
          {orbitRings.map(({ inset, icons, phase, duration }, ringIndex) => (
            <motion.div
              key={inset}
              animate={{ rotate: ringIndex % 2 === 0 ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              className="absolute hidden rounded-full border border-line/70 md:block"
              style={{ inset, transformOrigin: "center center" }}
            >
              {icons.map(({ Icon, label }, iconIndex) => (
                <motion.div
                  key={label}
                  className="absolute inset-0"
                  style={{
                    transform: `rotate(${phase + iconIndex * (360 / icons.length)}deg)`,
                    transformOrigin: "center center",
                  }}
                >
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ rotate: ringIndex % 2 === 0 ? -360 : 360 }}
                      transition={{ duration, repeat: Infinity, ease: "linear" }}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-[#090b12] text-white transition-colors hover:border-cyan hover:text-cyan sm:h-10 sm:w-10 md:h-14 md:w-14"
                      style={{ transformOrigin: "center center" }}
                      title={label}
                    >
                      <div
                        className="flex items-center justify-center"
                        style={{
                          transform: (() => {
                            const placementAngle = phase + iconIndex * (360 / icons.length);
                            return `rotate(${-placementAngle}deg)`;
                          })(),
                          transformOrigin: "center center",
                        }}
                      >
                        <Icon
                          className={`h-3.5 w-3.5 sm:h-5 sm:w-5 md:h-6 md:w-6 ${label === "UiPath" ? "w-6 text-white sm:w-8 md:w-10" : ""}`}
                          strokeWidth={1.5}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 -translate-y-8 max-w-[360px] px-6 sm:translate-y-0"
          >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan"
          >
            <span>{profile.location}</span>
            <span>·</span>
            <span className="flex items-center gap-2">
              <span>open to work</span>
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)] animate-pulse" />
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-4 max-w-sm text-[13px] leading-relaxed text-blue md:text-base"
          >
            {profile.greetings}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-1xl font-medium leading-[1.05] tracking-tight text-ink sm:text-2xl md:text-3xl"
          >
            <div className="relative h-[1.1em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={headlineLines[headlineIndex]}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -28 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="absolute left-1/64 top-0 block w-full -translate-x-64 whitespace-nowrap text-center"
                >
                  {headlineIndex === 2 ? (
                    <span className="text-gradient" >{headlineLines[headlineIndex]}</span>
                  ) : (
                    <span className="text-gradient">{headlineLines[headlineIndex]}</span>
                  )}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-4 max-w-sm text-[13px] leading-relaxed text-muted md:text-base"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-ink px-5 py-2.5 font-mono text-xs font-medium text-void transition-transform hover:scale-[1.03]"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-5 py-2.5 font-mono text-xs text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              Get in touch
            </a>
          </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          scroll
        </span>
        <div className="h-10 w-px animate-float bg-gradient-to-b from-cyan via-violet to-transparent" />
      </motion.div>
    </section>
  );
}
