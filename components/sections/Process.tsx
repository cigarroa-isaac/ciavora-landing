"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { fadeInUp, defaultTransition, viewportConfig } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Escuchamos",
    description:
      "Nos reunimos contigo para entender tu operación, tus dolores y tus objetivos. Sin jerga técnica, sin formularios eternos. Una conversación honesta.",
  },
  {
    number: "02",
    title: "Proponemos",
    description:
      "Diseñamos una solución a medida con alcance claro, tiempos realistas y presupuesto transparente. Sabes exactamente qué vas a recibir y cuándo.",
  },
  {
    number: "03",
    title: "Construimos rápido",
    description:
      "Desarrollamos en ciclos cortos con entregables visibles cada semana. Puedes tocar, probar y dar feedback desde el primer sprint.",
  },
  {
    number: "04",
    title: "Evolucionamos",
    description:
      "Después del lanzamiento seguimos contigo. Medimos resultados, optimizamos y escalamos tu sistema conforme crece tu negocio.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <section id="proceso" className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-3xl md:text-5xl font-semibold text-center mb-20 section-heading text-gradient-subtle"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeInUp}
        transition={defaultTransition}
      >
        Así trabajamos
      </motion.h2>

      <div ref={containerRef} className="relative max-w-3xl mx-auto">
        {/* Background line */}
        <div className="absolute left-[15px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/[0.08]" />

        {/* Animated fill line */}
        <motion.div
          className="absolute left-[15px] md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-primary origin-top"
          style={{ scaleY: scrollYProgress, height: "100%" }}
        />

        {/* Steps */}
        <div className="relative space-y-16 md:space-y-20">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.number}
                className={`relative flex items-start gap-8 ${
                  // On desktop, alternate sides
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
                {/* Dot on the line */}
                <div
                  className={`absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background z-10`}
                />

                {/* Content - left side on desktop for even, right side for odd */}
                <div className="hidden md:block md:w-1/2" />
                <div className="pl-10 md:pl-0 md:w-1/2">
                  <span className="text-sm font-mono text-primary/70">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-medium text-text-primary mt-1">
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
