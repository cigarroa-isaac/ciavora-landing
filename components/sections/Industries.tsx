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
    description: "Sistemas que cumplen regulación y simplifican la operación clínica.",
    areas: ["Expediente clínico", "Agenda", "Portal de pacientes"],
  },
  {
    icon: Car,
    name: "Automotriz",
    description: "Plataformas que conectan toda la cadena, del piso de ventas a postventa.",
    areas: ["Gestión de inventario", "CRM dealers", "Logística", "Portal de servicios"],
  },
  {
    icon: Briefcase,
    name: "Servicios B2B",
    description: "Software que elimina trabajo manual y da visibilidad en tiempo real.",
    areas: ["Portales cliente", "Automatización", "Reporteo", "Integraciones"],
  },
];

export default function Industries() {
  return (
    <section id="industrias" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-5xl font-bold text-center mb-4 section-heading text-gradient-subtle"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          Industrias que ya transformamos
        </motion.h2>

        <motion.div
          className="flex justify-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
        >
          <div className="w-16 accent-gradient" />
        </motion.div>

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
              className="card-lift group bg-white/[0.04] border border-white/[0.1] rounded-2xl p-8 hover:bg-white/[0.07] hover:border-primary/30"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <industry.icon
                className="w-12 h-12 text-primary mb-5"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-2xl font-semibold mb-2 text-text-primary group-hover:text-primary transition-colors duration-300">
                {industry.name}
              </h3>
              <p className="text-text-muted text-xs mb-4 leading-relaxed">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {industry.areas.map((area) => (
                  <span
                    key={area}
                    className="text-xs px-3 py-1 rounded-full bg-white/[0.06] text-text-muted border border-white/[0.08] transition-colors duration-300 group-hover:border-secondary/20"
                  >
                    {area}
                  </span>
                ))}
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
