"use client";

import { motion } from "framer-motion";
import { Lightbulb, Zap, Users } from "lucide-react";
import {
  fadeInUp,
  scaleRotateIn,
  staggerContainerSlow,
  defaultTransition,
  viewportConfig,
} from "@/lib/animations";
import { useT } from "@/lib/i18n/LocaleProvider";

const icons = [Lightbulb, Zap, Users];
const numbers = ["01", "02", "03"];

export default function ValueProposition() {
  const t = useT();

  return (
    <section id="servicios" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-5xl font-bold text-center mb-4 section-heading text-gradient-subtle"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          {t.valueProp.heading}
        </motion.h2>

        <motion.div
          className="flex justify-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
        >
          <div className="w-16 accent-gradient" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainerSlow}
        >
          {t.valueProp.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                className="card-lift group bg-white/[0.04] border border-white/[0.1] rounded-2xl p-8 hover:bg-white/[0.07] hover:border-primary/30"
                variants={scaleRotateIn}
                transition={defaultTransition}
              >
                <div className="flex items-center justify-between mb-5">
                  <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  <span className="font-display text-xs text-primary/40 font-semibold tracking-wider">
                    {numbers[i]}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-text-primary group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
