import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#101214",
        surface: "#181B1F",
        "surface-hover": "#1E2227",
        ink: "#F5F7FA",
        muted: "#9BA3AE",
        line: "#292E35",
        accent: "#A8D8FF",
        "accent-hover": "#8CCBFF",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        wordmark: ["var(--font-sora)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "10px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },
      maxWidth: {
        content: "1160px",
      },
      transitionDuration: {
        250: "250ms",
      },
      // One deliberate treatment for the hero avatar: an accent rim, an accent
      // halo, and a dark ambient drop. Three layers on a single element on
      // purpose, not a glow sprinkled across the page.
      boxShadow: {
        avatar:
          "0 0 0 1px rgba(168,216,255,0.10), 0 0 44px -6px rgba(168,216,255,0.35), 0 28px 60px -28px rgba(0,0,0,0.9)",
        "avatar-hover":
          "0 0 0 1px rgba(168,216,255,0.18), 0 0 64px -4px rgba(168,216,255,0.55), 0 28px 70px -28px rgba(0,0,0,0.95)",
      },
      keyframes: {
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "reveal-up": "reveal-up 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
