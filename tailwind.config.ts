import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F2EE",      // arena (brand kit)
        surface: "#FBFAF7",         // superficie elevada
        ink: "#12223D",             // marino — texto principal y bloques invertidos
        muted: "#4A5468",           // pizarra — texto secundario (6.8:1 sobre arena)
        primary: "#E8603C",         // coral — ÚNICO acento (display/gráfica en claro; texto normal solo sobre marino)
        "primary-soft": "#E8603C",  // coral sobre fondo marino (4.7:1)
        line: "rgba(18,34,61,0.14)",// hairlines marino
      },
      fontFamily: {
        sans: ["var(--font-lexend)", "system-ui", "sans-serif"],
        display: ["var(--font-lexend)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
