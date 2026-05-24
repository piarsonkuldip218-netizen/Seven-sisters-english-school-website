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
        midnight: {
          DEFAULT: "#0A0E27",
          50: "#E6E8F2",
          100: "#C2C7DD",
          200: "#8E96BA",
          300: "#5A6597",
          400: "#2F3A6E",
          500: "#1E2548",
          600: "#141939",
          700: "#0E1335",
          800: "#0A0E27",
          900: "#06091B",
          950: "#03050F",
        },
        gold: {
          DEFAULT: "#F4C95D",
          50: "#FEF8E7",
          100: "#FDEFC4",
          200: "#FAE08C",
          300: "#F4C95D",
          400: "#E5B33A",
          500: "#C8932A",
          600: "#9F731F",
        },
        ice: {
          DEFAULT: "#7DD3FC",
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": [
          "clamp(2.75rem, 7vw, 5.75rem)",
          { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "800" },
        ],
        "display-xl": [
          "clamp(2.25rem, 5.5vw, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "800" },
        ],
        "display-lg": [
          "clamp(1.875rem, 4vw, 2.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(1.5rem, 3vw, 2rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 6s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "gradient-shift": "gradientShift 12s ease infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -16px, 0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.15)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glow-gold": "0 0 32px rgba(244, 201, 93, 0.35)",
        "glow-ice": "0 0 32px rgba(125, 211, 252, 0.35)",
        "glass": "inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 8px 32px rgba(6, 9, 27, 0.4)",
        "glass-lg": "inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 16px 48px rgba(6, 9, 27, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
