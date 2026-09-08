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
        background: "#F6F3EC",      // papel marfil
        surface: "#FBF9F4",         // superficie elevada
        ink: "#181410",             // texto principal y bloques invertidos
        muted: "#655E52",           // texto secundario cálido (5.8:1 sobre papel)
        primary: "#4B2FCB",         // violeta profundo — ÚNICO acento
        "primary-soft": "#B4A3FF",  // acento sobre fondo ink
        line: "rgba(24,20,16,0.14)",// hairlines
      },
      fontFamily: {
        sans: ["var(--font-instrument)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
