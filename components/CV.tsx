import { Download, FileText } from "lucide-react";
import Reveal from "./Reveal";

export default function CV() {
  return (
    <section
      id="cv"
      aria-labelledby="cv-heading"
      className="relative scroll-mt-24 border-t border-line px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-8 rounded-2xl border border-line bg-surface/50 p-6 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
                <FileText size={18} aria-hidden="true" />
                05 · Curriculum vitae
              </span>
              <h2 id="cv-heading" className="mt-4 font-display text-3xl text-ink md:text-5xl">
                My experience, <span className="text-gradient">in one place.</span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
                Download my CV for a closer look at my experience, education, and skills.
              </p>
            </div>
            <a
              href="/cv/SIMON%20GITHUO%20MAINA%20CV.pdf"
              download="Simon-Githuo-Maina-CV.pdf"
              className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-ink px-6 py-3 font-mono text-sm font-medium text-void transition-colors hover:bg-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan md:self-auto"
            >
              <Download size={18} aria-hidden="true" />
              Download CV (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
