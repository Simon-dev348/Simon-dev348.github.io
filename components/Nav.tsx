"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  const handleMobileLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMenuOpen(false);
    window.history.pushState(null, "", href);

    window.requestAnimationFrame(() => {
      document.getElementById(href.slice(1))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-void/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 md:px-16">
        <a href="#" className="flex min-w-0 items-center gap-2 whitespace-nowrap font-mono text-sm font-medium text-ink">
          <img src="/images/logo.png" alt="Simon.dev logo" className="h-8 w-8 object-contain" />
          {profile.name.toLowerCase()}<span className="text-cyan">.</span>dev
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-line px-5 py-2 font-mono text-xs text-ink transition-colors hover:border-violet hover:text-violet md:block"
        >
          Hire me
        </a>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-10 rounded-md border border-line p-2 text-ink transition-colors hover:border-cyan hover:text-cyan md:hidden"
        >
          {menuOpen ? <X size={19} strokeWidth={1.5} /> : <Menu size={19} strokeWidth={1.5} />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-void/95 backdrop-blur-xl md:hidden"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.03, delayChildren: 0 } },
                closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
              }}
              className="mx-auto max-w-6xl px-6 py-4"
            >
              {links.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    open: { opacity: 1, y: 0, rotate: 0, skewX: 0 },
                    closed: { opacity: 0, y: -18, rotate: -4, skewX: -5 },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "top center" }}
                >
                  <a
                    href={link.href}
                    onClick={(event) => handleMobileLinkClick(event, link.href)}
                    className="block border-b border-line/70 py-4 font-mono text-sm uppercase tracking-wider text-muted transition-colors hover:pl-2 hover:text-cyan"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  open: { opacity: 1, y: 0, rotate: 0, skewX: 0 },
                  closed: { opacity: 0, y: -18, rotate: -4, skewX: -5 },
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "top center" }}
              >
                <a
                  href="#contact"
                  onClick={(event) => handleMobileLinkClick(event, "#contact")}
                  className="mt-4 inline-flex rounded-full border border-line px-5 py-2 font-mono text-xs text-ink transition-colors hover:border-violet hover:text-violet"
                >
                  Hire me
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
