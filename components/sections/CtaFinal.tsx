"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultTransition, viewportConfig } from "@/lib/animations";

export default function CtaFinal() {
  return (
    <section
      id="contacto"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, transparent 50%, rgba(6,182,212,0.06) 100%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-4 section-heading text-gradient-subtle"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          ¿Listo para dejar de operar en Excel?
        </motion.h2>

        <motion.p
          className="text-text-muted mb-12"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas.
        </motion.p>

        <motion.form
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={fadeInUp}
          transition={defaultTransition}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            className="bg-white/[0.05] border border-white/[0.08] rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            className="bg-white/[0.05] border border-white/[0.08] rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-sm"
          />
          <textarea
            name="message"
            placeholder="Cuéntanos brevemente sobre tu proyecto"
            rows={4}
            className="sm:col-span-2 bg-white/[0.05] border border-white/[0.08] rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none text-sm"
          />
          <button
            type="submit"
            className="sm:col-span-2 px-8 py-3.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-sm"
          >
            Enviar mensaje
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
