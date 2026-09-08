"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  viewportConfig,
} from "@/lib/animations";
import { useT } from "@/lib/i18n/LocaleProvider";

export default function Industries() {
  const t = useT();

  return (
    <section id="industrias" className="px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="md:max-w-md">
          <p className="eyebrow">03 — {t.industries.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.12] font-medium text-ink mt-4">
            {t.industries.heading}
          </h2>
        </div>

        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-x-10 gap-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {t.industries.items.map((industry, i) => (
            <motion.div
              key={i}
              className="border-t border-line pt-6"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <h3 className="font-display text-2xl font-medium text-ink">
                {industry.name}
              </h3>
              <p className="mt-3 text-[15px] text-muted leading-relaxed">
                {industry.description}
              </p>
              <ul className="mt-5 space-y-1.5">
                {industry.areas.map((area, j) => (
                  <li key={j} className="text-sm text-ink/75 flex gap-2">
                    <span className="text-primary">—</span>
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-12 text-sm text-muted">{t.industries.cta}</p>
      </div>
    </section>
  );
}
