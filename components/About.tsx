export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-center font-display text-2xl font-bold text-fog">
        About Me
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-brand-gradient" />

      <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-muted">
        I'm a results-driven developer with a background spanning IT support,
        system administration, and full-stack web development. I like taking
        a business problem all the way from requirements to a deployed,
        secure product — whether that's a Django API, a Next.js dashboard, or
        the cloud infrastructure underneath it.
      </p>
    </section>
  );
}
