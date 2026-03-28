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
    title: "Entendemos antes que otros",
    description:
      "Nos sumergimos en tu operación antes de escribir una sola línea de código. Eso nos permite proponer soluciones que realmente resuelven, no parches genéricos.",
  },
  {
    icon: Zap,
    title: "Semanas, no meses",
    description:
      "Nuestro proceso está diseñado para entregar valor rápido. Prototipamos, validamos y construimos en ciclos cortos para que veas resultados desde el día uno.",
  },
  {
    icon: Users,
    title: "Tú al negocio, nosotros al sistema",
    description:
      "No te pedimos que aprendas tecnología. Nosotros traducimos tu visión en software funcional mientras tú te enfocas en lo que mejor sabes hacer.",
  },
];

export default function ValueProposition() {
  return (
    <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold text-center mb-16 section-heading text-gradient-subtle"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          Lo que nos hace diferentes
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 transition-colors hover:bg-white/[0.05]"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <card.icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-medium mb-3 text-text-primary">
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
