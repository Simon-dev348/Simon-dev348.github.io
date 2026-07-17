import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pb-20 pt-16 text-center">
      <div className="fade-up mx-auto mb-8 h-32 w-32 rounded-full ring-gradient fade-up p-[3px]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-panel border: animate-pulse">
          <Image
            src="/My Photo.jpg"
            alt="Simon Githuo Maina"
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <h1
        className="fade-up font-display text-4xl font-bold text-fog sm:text-5xl"
        style={{ animationDelay: "80ms" }}
      >
        Simon Githuo Maina
      </h1>

      <p
        className="fade-up mt-4 font-display text-lg font-medium text-gradient"
        style={{ animationDelay: "150ms" }}
      >
        Building Secure, Scalable Web Systems.
      </p>

      <p
        className="fade-up mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted"
        style={{ animationDelay: "220ms" }}
      >
        Full-stack developer and IT professional with 3+ years across system
        administration, cloud infrastructure, and full-stack web development
        with Django, React/Next.js, and PostgreSQL.
      </p>

      <div
        className="fade-up mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row prefers-reduced-motion"
        style={{ animationDelay: "300ms" }}
      >
        <a
          href="#resume"
          className="w-full rounded-lg bg-brand-gradient px-8 py-3 text-center font-semibold text-ink transition-transform hover:scale-[1.02] sm:w-auto"
        >
          View My Resume
        </a>
        <a
          href="#projects"
          className="w-full rounded-lg border border-cyan px-8 py-3 text-center font-semibold text-cyan transition-colors hover:bg-cyan/10 hover:scale-[1.02] sm:w-auto border: animate-bounce"
        >
          Explore Projects
        </a>
      </div>
    </section>
  );
}
