"use client";

import { motion } from "framer-motion";
import { fadeIn, defaultTransition, viewportConfig } from "@/lib/animations";
import { useT } from "@/lib/i18n/LocaleProvider";

export default function Tech() {
  const t = useT();

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeIn}
        transition={defaultTransition}
      >
        <p className="eyebrow">{t.tech.eyebrow}</p>
        <p className="mt-6 font-display text-xl md:text-2xl text-ink leading-snug">
          {t.tech.names.join(" · ")}
        </p>
        <p className="mt-6 text-sm text-muted leading-relaxed">{t.tech.body}</p>
      </motion.div>
    </section>
  );
}
