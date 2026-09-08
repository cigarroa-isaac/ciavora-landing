"use client";

import { useT } from "@/lib/i18n/LocaleProvider";

export default function Footer() {
  const t = useT();

  const links = [
    { label: t.nav.links.servicios, href: "#servicios" },
    { label: t.nav.links.proceso, href: "#proceso" },
    { label: t.nav.links.industrias, href: "#industrias" },
    { label: t.footer.links.contact, href: "#contacto" },
  ];

  return (
    <footer className="bg-ink text-background border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <span className="font-display text-2xl font-medium">Ciavora</span>
            <p className="text-sm text-background/50 mt-2">{t.footer.tagline}</p>
            <p className="text-sm text-background/35 mt-1">{t.footer.location}</p>
          </div>

          <nav className="flex gap-6 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-background/60 hover:text-background transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.08] font-mono text-[11px] text-background/40">
          {t.footer.copyright(new Date().getFullYear())}
        </div>
      </div>
    </footer>
  );
}
