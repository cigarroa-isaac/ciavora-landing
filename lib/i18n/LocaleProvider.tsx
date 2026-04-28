"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { dictionary, type Locale, type Dict } from "./dictionary";

const STORAGE_KEY = "ciavora-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dict;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function safeStore(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* localStorage may be blocked (Safari private mode) */
  }
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Always start with "es" to match the statically pre-rendered HTML.
  // After hydration completes, an effect reads the bootstrap-set attribute
  // and switches to "en" if needed. EN users see Spanish for ~1 frame, then
  // strings swap. This trade-off avoids hydration mismatches that would
  // cause a full client re-render.
  const [locale, setLocaleState] = useState<Locale>("es");

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    safeStore(next);
  }, []);

  // On mount: pick up locale chosen by the pre-hydration bootstrap script
  useEffect(() => {
    const fromAttr = document.documentElement.dataset.locale;
    if (fromAttr === "en" || fromAttr === "es") {
      if (fromAttr !== locale) setLocaleState(fromAttr);
    }
    // We intentionally do not read localStorage here — bootstrap already did.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync <html lang>, document.title, and meta description on every locale change
  useEffect(() => {
    const t = dictionary[locale];
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t.meta.description);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dictionary[locale] as Dict }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}

export function useT() {
  return useLocale().t;
}
