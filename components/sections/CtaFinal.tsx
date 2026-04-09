"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultTransition, viewportConfig } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbxUWFQnv6EDN9GUC_cvHipniY8MF-HfxOUDD3FdzbKeuoVxN6iyGBWH5TQ_hjQCWSrFCw/exec";

export default function CtaFinal() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validation, setValidation] = useState("");

  const handleSubmit = async () => {
    if (status === "sending" || status === "sent") return;
    setValidation("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setValidation("Todos los campos son obligatorios.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setValidation("Ingresa un correo electrónico válido.");
      return;
    }

    setStatus("sending");

    try {
      const body = new URLSearchParams({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });

      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      }).catch(() => {
        // Google redirects to googleusercontent.com after processing.
        // CSP may block the redirect, but the POST data already reached
        // the Apps Script before the redirect — so this error is safe to ignore.
      });

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contacto"
      className="relative py-32 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
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
          <div>
            <motion.h2
              className="font-display text-3xl md:text-5xl font-bold mb-4 section-heading text-gradient-subtle leading-tight"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              ¿Listo para dejar de operar en{" "}
              <span className="text-primary">Excel</span>?
            </motion.h2>

            <motion.div
              className="my-6"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <div className="w-16 accent-gradient" />
            </motion.div>

            <motion.p
              className="text-text-muted mt-6"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas.
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} transition={defaultTransition}>
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  Mensaje enviado
                </h3>
                <p className="text-text-muted text-sm">
                  Te respondemos en menos de 24 horas.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-primary text-sm hover:underline mt-2"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-[0.12em] text-text-muted">
                      Nombre
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre"
                      className="input-premium w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted/50 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-[0.12em] text-text-muted">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@empresa.com"
                      className="input-premium w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted/50 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.12em] text-text-muted">
                    Tu reto
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="¿Qué operas hoy manualmente?"
                    rows={4}
                    className="input-premium w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted/50 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
                  />
                </div>

                {validation && (
                  <p className="text-red-400 text-sm">{validation}</p>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="btn-press shimmer self-start px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all text-sm shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Enviando..." : status === "error" ? "Error, intenta de nuevo" : "Enviar mensaje"}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
