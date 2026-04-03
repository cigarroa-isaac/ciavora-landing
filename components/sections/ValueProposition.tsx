"use client";

import { motion } from "framer-motion";
import { Lightbulb, Zap, Users } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  viewportConfig,
} from "@/lib/animations";

const cards = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Entendemos antes que otros",
    description:
      "Nos sumergimos en tu operación antes de escribir una sola línea de código. Eso nos permite proponer soluciones que realmente resuelven, no parches genéricos.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Semanas, no meses",
    description:
      "Nuestro proceso está diseñado para entregar valor rápido. Prototipamos, validamos y construimos en ciclos cortos para que veas resultados desde el día uno.",
  },
  {
    icon: Users,
    number: "03",
    title: "Tú al negocio, nosotros al sistema",
    description:
      "No te pedimos que aprendas tecnología. Nosotros traducimos tu visión en software funcional mientras tú te enfocas en lo que mejor sabes hacer.",
  },
];

export default function ValueProposition() {
  return (
    <section id="servicios" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-5xl font-bold text-center mb-16 section-heading text-gradient-subtle"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          Lo que nos hace diferentes
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`group bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 transition-all hover:bg-white/[0.05] hover:border-primary/20 ${
                i === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""
              }`}
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <div className="flex items-center justify-between mb-5">
                <card.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                <span className="font-display text-xs text-primary/40 font-semibold tracking-wider">
                  {card.number}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-text-primary group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
