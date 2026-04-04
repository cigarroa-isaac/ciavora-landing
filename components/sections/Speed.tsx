"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeInUp, defaultTransition, viewportConfig } from "@/lib/animations";

const milestones = [
  { label: "Descubrimiento", week: "Sem 1" },
  { label: "Diseño", week: "Sem 2" },
  { label: "Desarrollo", week: "Sem 2–4" },
  { label: "Entrega", week: "Sem 4" },
];

const metrics = [
  { target: 30, label: "días", description: "de idea a producción" },
  { target: 4, label: "sprints", description: "de entrega continua" },
  { target: 1, label: "semana", description: "para el primer prototipo" },
];

function useAnimatedCount(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function RotatingCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const [counting, setCounting] = useState(false);

  const count = useAnimatedCount(
    metrics[activeIndex].target,
    metrics[activeIndex].target > 10 ? 2500 : 1500,
    counting
  );

  // Start counting when in view
  useEffect(() => {
    if (isInView) setCounting(true);
  }, [isInView]);

  // Rotate metrics
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setCounting(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % metrics.length);
        setCounting(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView]);

  const metric = metrics[activeIndex];

  return (
    <div ref={ref} className="text-center mb-20">
      {/* Number */}
      <div className="font-display text-[clamp(6rem,15vw,12rem)] font-extrabold leading-none text-gradient tracking-[-0.05em] glow-pulse">
        {count}
      </div>

      {/* Label + description with crossfade */}
      <div className="relative h-16 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="text-2xl md:text-3xl font-light text-text-muted tracking-[0.1em] uppercase">
              {metric.label}
            </p>
            <p className="text-text-muted mt-2 text-sm">
              {metric.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {metrics.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCounting(false);
              setTimeout(() => {
                setActiveIndex(i);
                setCounting(true);
              }, 200);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-primary w-6"
                : "bg-white/[0.15] hover:bg-white/[0.25]"
            }`}
            aria-label={`Métrica ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Speed() {
  return (
    <section className="py-32 md:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <RotatingCounter />
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
              <div className="flex flex-col items-center md:items-center">
                <div className="flex items-center gap-3 md:flex-col md:gap-2">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-primary border-2 border-primary/30 shrink-0 dot-pulse"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.2,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                  <span className="text-sm font-display font-medium text-text-muted md:mt-1 whitespace-nowrap">
                    {milestone.label}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-primary/50 md:mt-0.5">
                    {milestone.week}
                  </span>
                </div>
              </div>

              {i < milestones.length - 1 && (
                <>
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
