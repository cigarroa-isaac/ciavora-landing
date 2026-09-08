"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";
import { useT } from "@/lib/i18n/LocaleProvider";

export default function Hero() {
  const t = useT();

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Retícula de columnas tipo plano técnico */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden="true">
        <div className="max-w-6xl mx-auto h-full grid grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-l border-ink/[0.05] last:border-r" />
          ))}
        </div>
      </div>

      <motion.div
        className="relative max-w-6xl mx-auto min-h-[92svh] flex flex-col justify-center pt-28 pb-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-7">
            <motion.p className="eyebrow" variants={fadeInUp} transition={defaultTransition}>
              {t.hero.eyebrow}
            </motion.p>

            <motion.h1
              className="font-display font-medium text-ink text-[clamp(2.6rem,5.4vw,4.9rem)] leading-[1.04] tracking-[-0.02em] mt-8"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <span className="block [text-wrap:balance]">{t.hero.titleLine1}</span>
              <em className="block text-primary [text-wrap:balance]">{t.hero.titleLine2}</em>
            </motion.h1>

            <motion.p
              className="mt-8 text-muted text-lg leading-relaxed max-w-md"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-6"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <a
                href="#contacto"
                className="bg-ink text-background px-7 py-3.5 rounded-md text-sm font-medium hover:bg-primary transition-colors"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#proceso"
                className="group inline-flex items-center gap-2 text-sm text-ink underline underline-offset-4 decoration-[rgba(24,20,16,0.3)] hover:decoration-ink"
              >
                {t.hero.ctaSecondary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Bitácora del proyecto — tarjeta terminal en tinta */}
          <motion.div
            className="lg:col-span-5 mt-16 lg:mt-0"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <div className="relative max-w-md lg:max-w-none mx-auto lg:mx-0">
              {/* Marcas de registro de imprenta */}
              <span className="absolute -top-3 -left-3 font-mono text-xs text-muted/70 select-none" aria-hidden="true">+</span>
              <span className="absolute -top-3 -right-3 font-mono text-xs text-muted/70 select-none" aria-hidden="true">+</span>
              <span className="absolute -bottom-3 -left-3 font-mono text-xs text-muted/70 select-none" aria-hidden="true">+</span>
              <span className="absolute -bottom-3 -right-3 font-mono text-xs text-muted/70 select-none" aria-hidden="true">+</span>

              <div className="bg-ink rounded-lg overflow-hidden shadow-[0_32px_64px_-32px_rgba(24,20,16,0.45)]">
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.07]">
                  <span className="font-mono text-[11px] text-background/40">
                    {t.hero.terminal.file}
                  </span>
                  <span className="font-mono text-[11px] text-background/40">
                    {t.speed.milestones[3].week}
                  </span>
                </div>

                <div className="px-5 py-5 font-mono text-[13px] leading-relaxed">
                  <p className="text-background/80">
                    <span className="text-background/40">$ </span>
                    {t.hero.terminal.prompt}
                  </p>

                  <div className="mt-4 space-y-2.5">
                    {t.speed.milestones.map((m, i) => (
                      <motion.div
                        key={i}
                        className="flex items-baseline gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 + i * 0.35, duration: 0.3 }}
                      >
                        <span className="text-background/40 w-16 shrink-0 text-[11px] uppercase tracking-[0.08em]">
                          {m.week}
                        </span>
                        <span className="text-background/85">{m.label}</span>
                        <span className="flex-1 border-b border-dotted border-white/[0.16] translate-y-[-3px]" />
                        <span className="text-primary-soft">ok</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.p
                    className="mt-5 text-background/85"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.3 }}
                  >
                    <span className="text-primary-soft">✓ </span>
                    {t.hero.terminal.done}
                    <span className="caret" aria-hidden="true" />
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 md:mt-24 border-t border-line pt-5 flex flex-col sm:flex-row sm:justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <span>{t.industries.items.map((i) => i.name).join(" · ")}</span>
          <span>{t.footer.location}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
