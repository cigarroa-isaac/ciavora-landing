"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultTransition, viewportConfig } from "@/lib/animations";
import { useT } from "@/lib/i18n/LocaleProvider";

const numbers = [30, 4, 1];

export default function Speed() {
  const t = useT();

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
      >
        <motion.p className="eyebrow" variants={fadeInUp} transition={defaultTransition}>
          02 — {t.speed.eyebrow}
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-3 gap-x-10 gap-y-10">
          {t.speed.metrics.map((metric, i) => (
            <motion.div
              key={i}
              className="border-t border-line pt-6"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <div className="font-display font-medium text-6xl md:text-7xl text-ink tabular-nums">
                {numbers[i]}
              </div>
              <div className="mt-2 font-mono text-sm uppercase tracking-[0.1em] text-muted">
                {metric.label}
              </div>
              <div className="mt-1 text-sm text-muted">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.speed.milestones.map((milestone, i) => (
            <motion.div key={i} variants={fadeInUp} transition={defaultTransition}>
              <div className="text-sm font-medium text-ink">{milestone.label}</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted mt-1">
                {milestone.week}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
