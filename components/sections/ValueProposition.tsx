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

const cards = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Entendemos antes que otros",
    description:
      "Mapeamos cómo opera tu negocio hoy — no cómo crees que opera. Eso nos permite construir el sistema que realmente necesitas, no el que sonaba bien en la primera reunión.",
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
          className="font-display text-3xl md:text-5xl font-bold text-center mb-4 section-heading text-gradient-subtle"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          Lo que nos hace diferentes
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
          {cards.map((card) => (
            <motion.div
              key={card.title}
              className="card-lift group bg-white/[0.04] border border-white/[0.1] rounded-2xl p-8 hover:bg-white/[0.07] hover:border-primary/30"
              variants={scaleRotateIn}
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
