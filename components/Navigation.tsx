"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OWNER } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#battlelog" },
  { label: "Skills", href: "#tech-stack" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingScrollRef = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScrollY || current < 80);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleMobileNavigation = (href: string) => {
    pendingScrollRef.current = href;
    setMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -64, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50 flex items-center px-4 md:px-8 py-4 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md"
        >
          <span className="font-mono text-sm text-[var(--accent)] tracking-wider font-semibold">
            ABDULLAH
          </span>

          <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-[var(--foreground)]/60 hover:text-[var(--accent)] transition-colors duration-200 font-mono tracking-wide"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href={OWNER.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block absolute right-[68px] top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-sm border font-mono text-xs tracking-wide transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
          >
            Resume →
          </a>

          <button
            type="button"
            className="absolute right-4 md:hidden w-9 h-9 flex items-center justify-center rounded-sm border"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block w-4 h-px bg-current" />
              <span className="block w-4 h-px bg-current" />
              <span className="block w-4 h-px bg-current" />
            </span>
          </button>

          <AnimatePresence
            onExitComplete={() => {
              if (pendingScrollRef.current) {
                const target = pendingScrollRef.current;
                pendingScrollRef.current = null;
                scrollTo(target);
              }
            }}
          >
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute top-full left-0 right-0 md:hidden overflow-hidden border-b"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--background)",
                }}
              >
                <ul className="flex flex-col px-4 py-3">
                  {NAV_LINKS.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.04 }}
                      className="border-b last:border-0"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <button
                        type="button"
                        onClick={() => handleMobileNavigation(link.href)}
                        className="w-full py-3 text-left text-sm text-[var(--foreground)]/70 hover:text-[var(--accent)] transition-colors duration-200 font-mono tracking-wide"
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                  <li
                    className="flex items-center justify-between gap-4 py-3 border-b"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <a
                      href={OWNER.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-sm border font-mono text-xs tracking-wide transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--foreground)",
                      }}
                    >
                      Resume →
                    </a>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[var(--foreground)]/60">
                        Theme
                      </span>
                      <ThemeToggle mobile />
                    </div>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
