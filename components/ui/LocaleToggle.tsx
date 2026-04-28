"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function LocaleToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={`inline-flex items-center text-[12px] uppercase tracking-[0.12em] font-medium select-none ${className}`}
      aria-label={t.nav.localeAria}
    >
      <button
        type="button"
        onClick={() => setLocale("es")}
        aria-pressed={locale === "es"}
        className={`px-2 py-1 transition-colors ${
          locale === "es" ? "text-text-primary" : "text-text-muted hover:text-text-primary/70"
        }`}
      >
        ES
      </button>
      <span className="text-text-muted/40 mx-0.5">/</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-2 py-1 transition-colors ${
          locale === "en" ? "text-text-primary" : "text-text-muted hover:text-text-primary/70"
        }`}
      >
        EN
      </button>
    </div>
  );
}
