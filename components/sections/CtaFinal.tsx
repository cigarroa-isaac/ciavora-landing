"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, defaultTransition, viewportConfig } from "@/lib/animations";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useT } from "@/lib/i18n/LocaleProvider";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbxUWFQnv6EDN9GUC_cvHipniY8MF-HfxOUDD3FdzbKeuoVxN6iyGBWH5TQ_hjQCWSrFCw/exec";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function CtaFinal() {
  const t = useT();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const validate = (): boolean => {
    const newErrors: FieldErrors = {};

    if (!name.trim()) newErrors.name = t.cta.errors.required;
    if (!email.trim()) {
      newErrors.email = t.cta.errors.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t.cta.errors.invalidEmail;
    }
    if (!message.trim()) newErrors.message = t.cta.errors.required;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (field: keyof FieldErrors) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async () => {
    if (status === "sending" || status === "sent") return;
    if (!validate()) return;

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
      }).catch(() => {});

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputBase =
    "input-premium w-full bg-white/[0.05] rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted/50 text-sm outline-none transition-all duration-300";
  const inputNormal = `${inputBase} border border-white/[0.1] focus:border-primary focus:ring-1 focus:ring-primary`;
  const inputError = `${inputBase} border border-primary/60 ring-1 ring-primary/30 shadow-[0_0_15px_rgba(124,58,237,0.15)]`;

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
              {t.cta.headingPart1}{" "}
              <span className="text-primary">{t.cta.headingHighlight}</span>
              {t.cta.headingPart2}
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
              {t.cta.subtitle}
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} transition={defaultTransition}>
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center text-center gap-4 py-12"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 12 }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {t.cta.success.title}
                  </h3>
                  <p className="text-text-muted text-sm">
                    {t.cta.success.body}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-primary text-sm hover:underline mt-2"
                  >
                    {t.cta.success.reset}
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] uppercase tracking-[0.12em] text-text-muted">
                          {t.cta.labels.name}
                        </label>
                        <AnimatePresence>
                          {errors.name && (
                            <motion.span
                              initial={{ opacity: 0, x: 8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 8 }}
                              transition={{ duration: 0.25 }}
                              className="text-[11px] text-primary/80 flex items-center gap-1"
                            >
                              <AlertCircle className="w-3 h-3" />
                              {errors.name}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); clearError("name"); }}
                        placeholder={t.cta.placeholders.name}
                        className={errors.name ? inputError : inputNormal}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] uppercase tracking-[0.12em] text-text-muted">
                          {t.cta.labels.email}
                        </label>
                        <AnimatePresence>
                          {errors.email && (
                            <motion.span
                              initial={{ opacity: 0, x: 8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 8 }}
                              transition={{ duration: 0.25 }}
                              className="text-[11px] text-primary/80 flex items-center gap-1"
                            >
                              <AlertCircle className="w-3 h-3" />
                              {errors.email}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); clearError("email"); }}
                        placeholder={t.cta.placeholders.email}
                        className={errors.email ? inputError : inputNormal}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-[11px] uppercase tracking-[0.12em] text-text-muted">
                        {t.cta.labels.message}
                      </label>
                      <AnimatePresence>
                        {errors.message && (
                          <motion.span
                            initial={{ opacity: 0, x: 8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 8 }}
                            transition={{ duration: 0.25 }}
                            className="text-[11px] text-primary/80 flex items-center gap-1"
                          >
                            <AlertCircle className="w-3 h-3" />
                            {errors.message}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                    <textarea
                      value={message}
                      onChange={(e) => { setMessage(e.target.value); clearError("message"); }}
                      placeholder={t.cta.placeholders.message}
                      rows={4}
                      className={`${errors.message ? inputError : inputNormal} resize-none`}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                    className="btn-press shimmer self-start px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all text-sm shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? t.cta.buttons.sending : status === "error" ? t.cta.buttons.error : t.cta.buttons.idle}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
