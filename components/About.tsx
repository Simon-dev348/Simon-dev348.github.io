import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative border-t border-line px-6 py-28 md:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet">
              01 · About
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 max-w-3xl font-display text-3xl leading-snug text-ink md:text-5xl">
              I work at the point where{" "}
              <span className="text-gradient">software meets infrastructure</span> —
              writing the API and keeping the server it runs on alive.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Based in Nairobi, I split my time between building full-stack products —
              Django REST APIs paired with Next.js frontends — and the ICT support work
              that keeps real systems running: networking, deployment pipelines, and the
              unglamorous reliability work most portfolios leave out. That combination
              means I design software with its actual operating conditions in mind, not
              just its happy path.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="relative mx-auto aspect-[1.08/1] w-full max-w-[520px] rotate-[-1deg] bg-[#f5eadb] p-3 shadow-[10px_14px_0_rgba(34,211,238,0.16),0_20px_45px_rgba(0,0,0,0.35)] sm:p-5">
            <div className="absolute inset-0 translate-x-2 translate-y-2 -rotate-[2deg] border border-[#e8cfae] bg-[#fff8ed]" />
            <div className="relative z-10 h-full overflow-hidden border border-[#e5c79e] bg-[#f8d4a7] p-5 sm:p-7">
              <div className="relative z-10 flex h-full flex-col justify-between">
                <img
                    src="/images/qualifiedstamp.png"
                    alt="Qualified full-stack developer stamp"
                    className="absolute -bottom-[10%] -left-[24%] z-10 w-[125%] rotate-[-12deg] drop-shadow-[0_3px_4px_rgba(70,45,20,0.2)]"
                  />
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
                    Simon&apos;s stuff
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
