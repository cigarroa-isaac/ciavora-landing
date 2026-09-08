"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, defaultTransition, viewportConfig } from "@/lib/animations";
import { AlertCircle } from "lucide-react";
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
    "w-full bg-transparent border-0 border-b rounded-none px-0 py-3 text-background placeholder:text-background/30 font-mono text-[13px] focus:outline-none focus:ring-0 transition-colors";
  const inputNormal = `${inputBase} border-white/[0.18] focus:border-primary-soft`;
  const inputError = `${inputBase} border-red-300/70`;

  return (
    <section id="contacto" className="bg-ink text-background py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <motion.p className="eyebrow-invert" variants={fadeInUp} transition={defaultTransition}>
              05 — {t.cta.eyebrow}
            </motion.p>

            <motion.h2
              className="font-display text-4xl md:text-5xl font-medium leading-[1.1] mt-6"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              {t.cta.headingPart1}{" "}
              <em className="italic text-primary-soft">{t.cta.headingHighlight}</em>
              {t.cta.headingPart2}
            </motion.h2>

            <motion.p
              className="mt-6 text-background/60 max-w-md leading-relaxed"
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="py-10 font-mono text-[14px] leading-relaxed"
                >
                  <p className="text-background/50">$ {t.cta.terminal.prompt}</p>
                  <motion.p
                    className="mt-3 text-background"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <span className="text-primary-soft">✓ </span>
                    {t.cta.terminal.sent}
                  </motion.p>
                  <motion.p
                    className="mt-1 text-background/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                  >
                    {"→ "}
                    {t.cta.terminal.reply}
                    <span className="caret" aria-hidden="true" />
                  </motion.p>
                  <motion.button
                    onClick={() => setStatus("idle")}
                    className="mt-8 font-mono text-[13px] text-primary-soft hover:underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                  >
                    {t.cta.success.reset}
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 font-mono text-[11px] text-background/40">
                    <span>{t.cta.formFile}</span>
                    <span>&lt; 24h</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="font-mono text-[11px] uppercase tracking-[0.1em] text-background/50">
                          {t.cta.labels.name}
                        </label>
                        <AnimatePresence>
                          {errors.name && (
                            <motion.span
                              initial={{ opacity: 0, x: 8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 8 }}
                              transition={{ duration: 0.25 }}
                              className="text-[11px] text-red-300 flex items-center gap-1"
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
                        <label className="font-mono text-[11px] uppercase tracking-[0.1em] text-background/50">
                          {t.cta.labels.email}
                        </label>
                        <AnimatePresence>
                          {errors.email && (
                            <motion.span
                              initial={{ opacity: 0, x: 8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 8 }}
                              transition={{ duration: 0.25 }}
                              className="text-[11px] text-red-300 flex items-center gap-1"
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
                      <label className="font-mono text-[11px] uppercase tracking-[0.1em] text-background/50">
                        {t.cta.labels.message}
                      </label>
                      <AnimatePresence>
                        {errors.message && (
                          <motion.span
                            initial={{ opacity: 0, x: 8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 8 }}
                            transition={{ duration: 0.25 }}
                            className="text-[11px] text-red-300 flex items-center gap-1"
                          >
                            <AlertCircle className="w-3 h-3" />
                            {errors.message}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="relative">
                      <span
                        className="absolute left-0 top-3 font-mono text-[13px] text-background/40 select-none pointer-events-none"
                        aria-hidden="true"
                      >
                        $
                      </span>
                      <textarea
                        value={message}
                        onChange={(e) => { setMessage(e.target.value); clearError("message"); }}
                        placeholder={t.cta.placeholders.message}
                        rows={4}
                        className={`${errors.message ? inputError : inputNormal} resize-none pl-5`}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                    className="self-start px-7 py-3 rounded-md bg-background text-ink text-sm font-medium hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
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
