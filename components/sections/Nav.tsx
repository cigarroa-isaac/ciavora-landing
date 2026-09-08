"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useT } from "@/lib/i18n/LocaleProvider";
import LocaleToggle from "@/components/ui/LocaleToggle";

export default function Nav() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.links.servicios, href: "#servicios" },
    { label: t.nav.links.proceso, href: "#proceso" },
    { label: t.nav.links.industrias, href: "#industrias" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-semibold text-ink">
          Ciavora
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <LocaleToggle />
          <a
            href="#contacto"
            className="bg-ink text-background rounded-md px-4 py-2 text-sm font-medium hover:bg-primary transition-colors"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? t.nav.menuClose : t.nav.menuOpen}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-line"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-muted hover:text-ink transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-line flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.12em] text-muted">
                  {t.nav.localeAria}
                </span>
                <LocaleToggle />
              </div>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center bg-ink text-background rounded-md px-4 py-2.5 text-sm font-medium hover:bg-primary transition-colors mt-2"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
