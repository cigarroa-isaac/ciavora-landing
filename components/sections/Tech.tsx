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

// Duplicate for seamless loop
const marqueeItems = [...techNames, ...techNames];

export default function Tech() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeIn}
        transition={defaultTransition}
      >
        <p className="text-sm uppercase tracking-widest text-text-muted mb-10 text-center">
          Velocidad posible gracias a
        </p>

        {/* Marquee */}
        <div className="relative mb-10">
          <div className="overflow-hidden">
            <div className="animate-marquee flex whitespace-nowrap">
              {marqueeItems.map((name, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-6 mx-6 text-lg md:text-2xl font-display font-bold text-text-muted/30 select-none"
                >
                  {name}
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-text-muted max-w-2xl mx-auto text-sm leading-relaxed text-center">
          Usamos inteligencia artificial como acelerador, no como reemplazo. La
          IA no sustituye el criterio de un equipo experimentado — lo amplifica
          para entregar más rápido sin sacrificar calidad.
        </p>
      </motion.div>
    </section>
  );
}
