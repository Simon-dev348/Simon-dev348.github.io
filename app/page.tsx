import CursorGlow from "@/components/CursorGlow";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-void">
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Experience />
      <Contact />
      <footer className="border-t border-line px-6 py-6 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
        Simon Githuo @2026
      </footer>
    </main>
  );
}
