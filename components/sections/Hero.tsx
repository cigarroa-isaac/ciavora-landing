"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, blurIn, staggerContainer, defaultTransition, cinematicTransition } from "@/lib/animations";
import HeroMockup from "@/components/HeroMockup";
import { useT } from "@/lib/i18n/LocaleProvider";

export default function Hero() {
  const t = useT();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise-overlay pt-24 pb-12">
      <div className="hero-grid-bg absolute inset-0 opacity-50" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[18vw] font-extrabold leading-none text-white/[0.02] select-none pointer-events-none tracking-tighter whitespace-nowrap"
        aria-hidden="true"
      >
        CIAVORA
      </div>

      <div className="hero-gradient-animated absolute inset-0 pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="shimmer inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-text-muted tracking-wide uppercase">
            {t.hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-gradient heading-glow text-[clamp(3rem,7.5vw,6rem)] font-bold leading-[1.05] tracking-[-0.04em]"
          variants={blurIn}
          transition={cinematicTransition}
        >
          {t.hero.titleLine1}
          <br />
          {t.hero.titleLine2}
        </motion.h1>

        <motion.p
          className="mt-8 text-base md:text-lg text-text-muted max-w-xl mx-auto leading-relaxed font-light"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          <a
            href="#contacto"
            className="btn-press group relative px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all text-sm overflow-hidden shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#proceso"
            className="group flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/[0.1] text-text-primary hover:bg-white/[0.05] hover:border-white/[0.15] transition-all text-sm"
          >
            {t.hero.ctaSecondary}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Animated dashboard mockup */}
        <HeroMockup />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
