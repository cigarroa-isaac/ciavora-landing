"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Animated grid background */}
      <div className="hero-grid-bg absolute inset-0" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(124,58,237,0.18) 0%, rgba(6,182,212,0.06) 40%, transparent 70%)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-text-muted tracking-wide uppercase">
            Desarrollo de software a medida
          </span>
        </motion.div>

        <motion.h1
          className="text-gradient heading-glow text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          Tu operación en digital.
          <br />
          En semanas, no años.
        </motion.h1>

        <motion.p
          className="mt-8 text-base md:text-lg text-text-muted max-w-xl mx-auto leading-relaxed font-light"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
        >
          Construimos el sistema exacto que tu negocio necesita — porque
          conocemos tu industria antes de escribir la primera línea de código.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          <a
            href="#contacto"
            className="group relative px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all text-sm overflow-hidden shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]"
          >
            Platícanos tu reto
          </a>
          <a
            href="#proceso"
            className="group flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/[0.1] text-text-primary hover:bg-white/[0.05] hover:border-white/[0.15] transition-all text-sm"
          >
            Ver cómo trabajamos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
