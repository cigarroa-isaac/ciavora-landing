"use client";

import { motion } from "framer-motion";
import { fadeIn, defaultTransition, viewportConfig } from "@/lib/animations";

const techNames = [
  "LLMs",
  "Asistentes de código",
  "Automatización",
  "Cloud nativo",
  "CI/CD inteligente",
];

export default function Tech() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeIn}
        transition={defaultTransition}
      >
        <p className="text-sm uppercase tracking-widest text-text-muted mb-10">
          Velocidad posible gracias a
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-10">
          {techNames.map((name) => (
            <span
              key={name}
              className="text-lg md:text-xl font-medium text-text-muted/50 select-none"
            >
              {name}
            </span>
          ))}
        </div>

        <p className="text-text-muted max-w-2xl mx-auto text-sm leading-relaxed">
          Usamos inteligencia artificial como acelerador, no como reemplazo. La
          IA no sustituye el criterio de un equipo experimentado — lo amplifica
          para entregar más rápido sin sacrificar calidad.
        </p>
      </motion.div>
    </section>
  );
}
