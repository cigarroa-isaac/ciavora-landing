"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultTransition, viewportConfig } from "@/lib/animations";

export default function CtaFinal() {
  return (
    <section
      id="contacto"
      className="relative py-32 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
        className="relative z-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left - headline */}
          <div>
            <motion.h2
              className="font-display text-3xl md:text-5xl font-bold mb-4 section-heading text-gradient-subtle leading-tight"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              ¿Listo para dejar de operar en{" "}
              <span className="text-primary">Excel</span>?
            </motion.h2>

            <motion.p
              className="text-text-muted mt-6"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas.
            </motion.p>
          </div>

          {/* Right - form */}
          <motion.form
            className="flex flex-col gap-6"
            variants={fadeInUp}
            transition={defaultTransition}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[11px] uppercase tracking-[0.12em] text-text-muted mb-2 block">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-text-primary placeholder:text-text-muted/50 text-sm outline-none focus:border-primary transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.12em] text-text-muted mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="tu@empresa.com"
                  className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-text-primary placeholder:text-text-muted/50 text-sm outline-none focus:border-primary transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-[0.12em] text-text-muted mb-2 block">
                Proyecto
              </label>
              <textarea
                name="message"
                placeholder="Cuéntanos brevemente sobre tu proyecto"
                rows={4}
                className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-text-primary placeholder:text-text-muted/50 text-sm outline-none focus:border-primary transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="self-start px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all text-sm shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]"
            >
              Enviar mensaje
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
