"use client";

import { motion } from "framer-motion";
import { fadeInScale, defaultTransition, viewportConfig } from "@/lib/animations";
import { useT } from "@/lib/i18n/LocaleProvider";

export default function Differentiator() {
  const t = useT();

  return (
    <section className="bg-surface py-32 md:py-40 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-3xl mx-auto text-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeInScale}
        transition={{ ...defaultTransition, duration: 0.8 }}
      >
        <span
          className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8rem] leading-none font-serif text-primary/[0.08] select-none pointer-events-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <blockquote className="relative z-10">
          <p className="font-display text-2xl md:text-4xl font-medium leading-snug text-text-primary italic heading-glow">
            {t.differentiator.quote}
          </p>
        </blockquote>

        <p className="mt-8 text-text-muted max-w-xl mx-auto leading-relaxed">
          {t.differentiator.body}
        </p>
      </motion.div>
    </section>
  );
}
