"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, defaultTransition, viewportConfig } from "@/lib/animations";

const milestones = [
  { label: "Descubrimiento" },
  { label: "Diseño" },
  { label: "Desarrollo" },
  { label: "Entrega" },
];

function AnimatedCounter({
  target,
  duration = 2000,
}: {
  target: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Speed() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Counter */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <div className="text-[clamp(5rem,12vw,10rem)] font-semibold leading-none text-gradient tracking-[-0.05em]">
            <AnimatedCounter target={30} />
          </div>
          <p className="text-2xl md:text-3xl font-light text-text-muted mt-3 tracking-[0.1em] uppercase">
            días
          </p>
          <p className="text-text-muted mt-4 text-sm">
            de idea a producción
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          {milestones.map((milestone, i) => (
            <div
              key={milestone.label}
              className="flex items-center md:flex-1 w-full"
            >
              {/* Node */}
              <div className="flex flex-col items-center md:items-center">
                <div className="flex items-center gap-3 md:flex-col md:gap-2">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-primary border-2 border-primary/30 shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.2,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                  <span className="text-sm text-text-muted md:mt-1 whitespace-nowrap">
                    {milestone.label}
                  </span>
                </div>
              </div>

              {/* Connecting line (not after last) */}
              {i < milestones.length - 1 && (
                <>
                  {/* Desktop: horizontal line */}
                  <motion.div
                    className="hidden md:block flex-1 h-0.5 bg-primary/30 mx-2 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.2 + 0.15,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                  {/* Mobile: vertical line */}
                  <motion.div
                    className="md:hidden w-0.5 h-10 bg-primary/30 ml-[7px] my-1 origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.2 + 0.15,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
