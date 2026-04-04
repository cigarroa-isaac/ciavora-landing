"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateBarHeights() {
  return Array.from({ length: 12 }, () => randomBetween(25, 95));
}

function generateMetricWidths() {
  return [randomBetween(40, 85), randomBetween(45, 90), randomBetween(35, 80)];
}

function generateRowWidths() {
  return [randomBetween(60, 95), randomBetween(50, 90), randomBetween(55, 85)];
}

const entryDelay = 1.5;
const liveDelay = 4;

export default function HeroMockup() {
  const [isLive, setIsLive] = useState(false);
  const [barHeights, setBarHeights] = useState([35, 55, 40, 70, 50, 80, 60, 90, 75, 65, 85, 95]);
  const [metricWidths, setMetricWidths] = useState([50, 65, 80]);
  const [rowWidths, setRowWidths] = useState([80, 70, 75]);
  const [activeRow, setActiveRow] = useState(-1);

  // Start live mode after initial animation completes
  useEffect(() => {
    const timer = setTimeout(() => setIsLive(true), liveDelay * 1000);
    return () => clearTimeout(timer);
  }, []);

  // Cycle chart bars
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => setBarHeights(generateBarHeights()), 3000);
    return () => clearInterval(interval);
  }, [isLive]);

  // Cycle metric widths
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => setMetricWidths(generateMetricWidths()), 3500);
    return () => clearInterval(interval);
  }, [isLive]);

  // Cycle row widths + active row
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setRowWidths(generateRowWidths());
      setActiveRow((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, [isLive]);

  const metricColors = [
    "rgba(124,58,237,0.35)",
    "rgba(6,182,212,0.35)",
    "rgba(124,58,237,0.25)",
  ];

  return (
    <motion.div
      className="relative w-full max-w-2xl mx-auto mt-16 md:mt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glow behind */}
      <div className="absolute inset-0 -inset-x-8 -inset-y-4 bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Browser frame */}
      <div className="relative bg-surface/80 backdrop-blur-md border border-white/[0.1] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        {/* Browser toolbar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <div className="flex-1 mx-8">
            <div className="bg-white/[0.05] rounded-md h-5 flex items-center px-3">
              <span className="text-[10px] text-text-muted/50">app.tuempresa.com</span>
            </div>
          </div>
        </div>

        {/* App content - live dashboard */}
        <div className="p-5 space-y-4 min-h-[240px]">
          {/* Top nav bar */}
          <div className="flex items-center justify-between">
            <motion.div
              className="h-3 bg-white/[0.08] rounded"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: entryDelay, duration: 0.5 }}
            />
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-3 bg-white/[0.06] rounded"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 40, opacity: 1 }}
                  transition={{ delay: entryDelay + 0.1 + i * 0.1, duration: 0.4 }}
                />
              ))}
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-3 space-y-2"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: entryDelay + 0.6 + i * 0.12, duration: 0.5 }}
              >
                <div className="h-2 w-8 bg-text-muted/20 rounded" />
                <motion.div
                  className="h-4 rounded"
                  animate={{ width: `${metricWidths[i]}%` }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ background: metricColors[i] }}
                />
              </motion.div>
            ))}
          </div>

          {/* Live chart */}
          <motion.div
            className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: entryDelay + 1.2, duration: 0.5 }}
          >
            <div className="flex items-end gap-1.5 h-16">
              {barHeights.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-sm origin-bottom"
                  style={{
                    background: i >= 9
                      ? "rgba(124,58,237,0.5)"
                      : i >= 6
                      ? "rgba(124,58,237,0.3)"
                      : "rgba(124,58,237,0.15)",
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{
                    duration: isLive ? 0.8 : 0.5,
                    delay: isLive ? 0 : entryDelay + 1.5 + i * 0.05,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Live table rows */}
          <div className="space-y-1.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 h-7 px-2 rounded-md transition-colors duration-500"
                style={{
                  background: activeRow === i ? "rgba(124,58,237,0.08)" : "transparent",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: entryDelay + 2 + i * 0.1, duration: 0.4 }}
              >
                <motion.div
                  className="w-1 h-4 rounded-full"
                  animate={{
                    background: activeRow === i ? "rgba(124,58,237,0.8)" : "rgba(124,58,237,0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="w-2 h-2 rounded-full bg-primary/30" />
                <motion.div
                  className="h-2 bg-white/[0.05] rounded"
                  animate={{ width: `${rowWidths[i]}%` }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ flex: 1, maxWidth: `${rowWidths[i]}%` }}
                />
                <motion.div
                  className="w-10 h-2 rounded"
                  animate={{
                    background: activeRow === i ? "rgba(124,58,237,0.25)" : "rgba(255,255,255,0.06)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
