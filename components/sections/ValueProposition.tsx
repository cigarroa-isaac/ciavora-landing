"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  viewportConfig,
} from "@/lib/animations";
import { useT } from "@/lib/i18n/LocaleProvider";

const numbers = ["01", "02", "03"];

export default function ValueProposition() {
  const t = useT();

  return (
    <section id="servicios" className="px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">01 — {t.valueProp.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.12] font-medium text-ink mt-4">
            {t.valueProp.heading}
          </h2>
        </div>

        <motion.div
          className="md:col-span-8 mt-12 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {t.valueProp.cards.map((card, i) => (
            <motion.div
              key={i}
              className={`border-t border-line py-8 md:grid md:grid-cols-12 md:gap-6 ${
                i === t.valueProp.cards.length - 1 ? "border-b border-line" : ""
              }`}
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <span className="md:col-span-2 font-mono text-sm text-muted pt-2">
                {numbers[i]}
              </span>
              <div className="md:col-span-10">
                <h3 className="font-display text-2xl font-medium text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
