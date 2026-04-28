"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { fadeInUp, defaultTransition, viewportConfig } from "@/lib/animations";
import { useT } from "@/lib/i18n/LocaleProvider";

const numbers = ["01", "02", "03", "04"];

export default function Process() {
  const t = useT();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <section id="proceso" className="relative py-32 md:py-40 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="font-display text-3xl md:text-5xl font-bold text-center mb-4 section-heading text-gradient-subtle"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeInUp}
        transition={defaultTransition}
      >
        {t.process.heading}
      </motion.h2>

      <motion.p
        className="text-text-muted text-center text-sm mb-20 max-w-md mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeInUp}
        transition={{ ...defaultTransition, delay: 0.1 }}
      >
        {t.process.subheading}
      </motion.p>

      <div ref={containerRef} className="relative max-w-3xl mx-auto">
        <div className="absolute left-[15px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/[0.08]" />

        <motion.div
          className="absolute left-[15px] md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-primary origin-top"
          style={{ scaleY: scrollYProgress, height: "100%" }}
        />

        <div className="relative space-y-16 md:space-y-20">
          {t.process.steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={numbers[i]}
                className={`relative flex items-start gap-8 ${
                  isEven
                    ? "md:flex-row md:text-right"
                    : "md:flex-row-reverse md:text-left"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={fadeInUp}
                transition={{ ...defaultTransition, delay: i * 0.05 }}
              >
                <div
                  className={`absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background z-10 dot-pulse`}
                />

                <div className="hidden md:block md:w-1/2" />
                <div className="pl-10 md:pl-0 md:w-1/2">
                  <span className="text-sm font-mono text-primary/70">
                    {numbers[i]}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-text-primary mt-1">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
