"use client";

import { motion } from "framer-motion";
import { fadeInScale, defaultTransition, viewportConfig } from "@/lib/animations";

export default function Differentiator() {
  return (
    <section className="bg-surface py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-3xl mx-auto text-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeInScale}
        transition={{ ...defaultTransition, duration: 0.8 }}
      >
        {/* Decorative quotes */}
        <span
          className="absolute -top-8 left-1/2 -translate-x-1/2 text-[12rem] leading-none font-serif text-primary/[0.15] select-none pointer-events-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <blockquote className="relative z-10">
          <p className="text-2xl md:text-4xl font-light leading-snug text-text-primary italic">
            El cliente no sabe lo que quiere hasta que lo tiene.
          </p>
        </blockquote>

        <p className="mt-8 text-text-muted max-w-xl mx-auto leading-relaxed">
          Por eso no te pedimos un documento de 80 páginas. Escuchamos tu
          problema, proponemos una solución concreta, y te mostramos un
          prototipo funcional en días — no en meses. Iteramos juntos hasta que
          dices: &ldquo;esto es exactamente lo que necesitaba&rdquo;.
        </p>
      </motion.div>
    </section>
  );
}
