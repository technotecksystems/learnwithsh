import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1026",
        backgroundDeep: "#070D20",
        surface: "#131A36",
        burgundy: "#541329",
        crimson: "#C62849",
        crimsonSoft: "#E8416A",
        gold: "#FFBD59",
        electricBlue: "#4778F5",
        cyan: "#18D7F5",
        text: "#F7F7FC",
        textMuted: "#A9B6D3",
        brandBorder: "rgba(255, 255, 255, 0.11)",
      },
      fontFamily: {
        heading: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        handwriting: ["var(--font-caveat)", "cursive"],
      },
      borderRadius: {
        card: "22px",
        pill: "999px",
        button: "999px",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        spinSlow: "spin 14s linear infinite",
        float: "bob 6s ease-in-out infinite",
        pulseGlow: "pu 1.3s infinite",
        doodleDraw: "dr 6s ease-in-out infinite",
        doodleFloat: "fl 7s ease-in-out infinite",
        shimmer: "sh 3.6s infinite",
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pu: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        sh: {
          to: { left: "140%" },
        },
        dr: {
          "0%": { strokeDashoffset: "1" },
          "38%, 78%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-1" },
        },
        fl: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-9px) rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
