"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultTransition, viewportConfig } from "@/lib/animations";
import { useT } from "@/lib/i18n/LocaleProvider";

export default function Differentiator() {
  const t = useT();

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
      >
        <motion.p className="eyebrow" variants={fadeInUp} transition={defaultTransition}>
          {t.differentiator.eyebrow}
        </motion.p>

        <motion.blockquote className="mt-8" variants={fadeInUp} transition={defaultTransition}>
          <p className="font-display italic text-2xl md:text-[2.4rem] leading-[1.3] text-ink">
            “{t.differentiator.quote}”
          </p>
        </motion.blockquote>

        <motion.p
          className="mt-8 text-muted leading-relaxed"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          {t.differentiator.body}
        </motion.p>
      </motion.div>
    </section>
  );
}
