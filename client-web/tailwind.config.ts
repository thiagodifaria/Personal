import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        muted: "var(--muted)",
        signal: "var(--signal)",
        acid: "var(--acid)",
        wine: "var(--wine)",
        coral: "var(--coral)",
        aqua: "var(--aqua)",
        violet: "var(--violet)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ['"SFMono-Regular"', "Consolas", '"Liberation Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
