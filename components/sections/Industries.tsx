"use client";

import { motion } from "framer-motion";
import { Heart, Car, Briefcase } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  defaultTransition,
  viewportConfig,
} from "@/lib/animations";

const industries = [
  {
    icon: Heart,
    name: "Salud",
    areas: ["Expediente clínico", "Agendamiento", "Telemedicina"],
  },
  {
    icon: Car,
    name: "Automotriz",
    areas: ["Gestión de inventario", "CRM dealers", "Logística"],
  },
  {
    icon: Briefcase,
    name: "Servicios B2B",
    areas: ["Portales cliente", "Automatización", "Reporteo"],
  },
];

export default function Industries() {
  return (
    <section id="industrias" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold text-center mb-16 section-heading text-gradient-subtle"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          Industrias que ya transformamos
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 overflow-hidden transition-all"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(124,58,237,0.15) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <industry.icon
                  className="w-12 h-12 text-primary mb-5"
                  strokeWidth={1.5}
                />
                <h3 className="text-2xl font-medium mb-4 text-text-primary">
                  {industry.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industry.areas.map((area) => (
                    <span
                      key={area}
                      className="text-xs px-3 py-1 rounded-full bg-white/[0.06] text-text-muted border border-white/[0.08]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-text-muted mt-12 text-sm"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          ¿No ves tu industria? La siguiente puede ser la tuya.
        </motion.p>
      </div>
    </section>
  );
}
