"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import Reveal from "./Reveal";
import { socials } from "@/lib/data";

function MagneticLink({ href, label }: { href: string; label: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="rounded-full border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-magenta hover:text-magenta"
    >
      {label}
    </motion.a>
  );
}

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const senderEmail = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = `Portfolio contact from ${senderEmail}`;
    const body = `Sender email: ${senderEmail}\n\n${message}`;

    window.location.href = `mailto:simongithuo73@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative border-t border-line px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet">
            05 · Get in touch
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-[0.98] text-ink md:text-6xl">
            Let&apos;s make something <span className="text-gradient">useful.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Open to full-stack builds, compliance integrations, and infrastructure work. Based in Nairobi, working with clients anywhere.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.3} className="h-full">
            <div className="relative flex aspect-[4/5] h-full min-h-[280px] items-end overflow-hidden border border-line bg-surface/50">
              <img
                src="/images/profile.png"
                alt="Simon Githuo"
                className="absolute inset-0 h-full w-full object-contain grayscale transition duration-700 hover:grayscale-0"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
              <div className="relative z-10 p-6 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">Profile</p>
                <p className="mt-2 font-display text-2xl text-ink">Simon Githuo</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.4} className="h-full">
            <div className="flex h-full flex-col justify-between border border-line bg-surface/50 p-6 md:p-8">
            <div className="relative z-10 flex items-center justify-between border-b border-line pb-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Currently available</p>
                <p className="mt-2 text-sm text-ink">For thoughtful, practical work.</p>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_14px_#22d3ee]" />
            </div>
            <div className="relative z-10 align-center mt-2 flex flex-col items-center justify-center">
              <p className="mt-2 text-md text-gradient">Contact me for opportunities via this form</p>
            </div>
            <form onSubmit={handleSubmit} className="group relative z-10 space-y-4 overflow-hidden rounded-[10px] border border-line bg-surface/50 p-5 transition-[background,box-shadow] duration-500 hover:rounded-[10px] hover:border-transparent hover:bg-[linear-gradient(rgba(10,14,23,0.5),rgba(10,14,23,0.5))_padding-box,linear-gradient(90deg,#22d3ee_0%,#8b5cf6_50%,#ec4899_100%)_border-box] hover:shadow-[0_0_28px_rgba(34,211,238,0.16),0_0_50px_rgba(139,92,246,0.12)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_8%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(236,72,153,0.1),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <label className="relative z-10 block">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Your email</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full border-b border-line bg-transparent px-0 py-3 font-mono text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-cyan"
                />
              </label>
              <label className="relative z-10 block">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Message</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me about the work..."
                  className="mt-2 w-full resize-y border-b border-line bg-transparent px-0 py-3 text-sm leading-relaxed text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-cyan"
                />
              </label>
              <button
                type="submit"
                className="group relative z-10 flex items-center gap-3 border border-cyan px-5 py-3 font-mono text-sm text-cyan transition-colors hover:bg-cyan hover:text-void"
              >
                Send message
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </form>
            <div className="relative z-10 align-center mt-6 flex flex-col items-center justify-center">
              <p className="mt-2 text-md text-gradient">Or contact me via this my socials</p>
            </div>
            <div className="relative z-10 mt-2 flex flex-wrap gap-3 border-t border-line pt-6">
              {socials.map((s) => (
                <MagneticLink
                  key={s.label}
                  href={s.href}
                  label={s.label === "Email" ? "simongithuo73@gmail.com" : s.label}
                />
              ))}
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
