"use client";

import { useT } from "@/lib/i18n/LocaleProvider";

export default function Footer() {
  const t = useT();

  return (
    <footer className="bg-surface overflow-hidden">
      <div className="accent-gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div
          className="font-display text-[clamp(4rem,14vw,10rem)] font-extrabold leading-none tracking-[-0.04em] watermark-gradient select-none pointer-events-none"
          aria-hidden="true"
        >
          CIAVORA
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-bold tracking-[0.12em] text-text-primary">
              CIAVORA
            </span>
            <p className="text-text-muted text-sm mt-1">
              {t.footer.tagline}
            </p>
            <p className="text-text-muted/50 text-xs mt-2">
              {t.footer.location}
            </p>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.1em] text-text-muted">
            <a href="#" className="hover-line hover:text-text-primary transition-colors">
              {t.footer.links.privacy}
            </a>
            <a href="#" className="hover-line hover:text-text-primary transition-colors">
              {t.footer.links.terms}
            </a>
            <a href="#" className="hover-line hover:text-text-primary transition-colors">
              {t.footer.links.contact}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-text-muted">
          {t.footer.copyright(new Date().getFullYear())}
        </div>
      </div>
    </footer>
  );
}
