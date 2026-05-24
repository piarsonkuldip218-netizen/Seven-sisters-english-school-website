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
        // Deeper, richer obsidian — premium black with subtle purple undertone
        midnight: {
          DEFAULT: "#0B0F2C",
          50: "#E8EAF5",
          100: "#C5C9E0",
          200: "#9099BD",
          300: "#5C6996",
          400: "#374376",
          500: "#222C5C",
          600: "#161D45",
          700: "#0E1437",
          800: "#0B0F2C",
          900: "#050917",
          950: "#020410",
        },
        // Premium champagne gold — richer warmth, multi-stop
        gold: {
          DEFAULT: "#F4D079",
          50: "#FFFAEC",
          100: "#FFF4D2",
          200: "#FCE5A4",
          300: "#F4D079",
          400: "#E5B33A",
          500: "#C8932A",
          600: "#9F731F",
          700: "#7A5816",
        },
        // Jewel teal/jade — premium gemstone feel
        ice: {
          DEFAULT: "#5EEAD4",
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
        },
        // Pearl — warm off-white for body text (more premium than pure white)
        pearl: {
          DEFAULT: "#FFFAF0",
          50: "#FFFEF7",
          100: "#FFFAF0",
          200: "#FFF5E1",
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
        "glow-gold": "0 0 32px rgba(244, 208, 121, 0.4)",
        "glow-ice": "0 0 32px rgba(94, 234, 212, 0.4)",
        "glass": "inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 8px 32px rgba(2, 4, 16, 0.5)",
        "glass-lg": "inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 16px 48px rgba(2, 4, 16, 0.6)",
        "premium": "0 24px 64px -12px rgba(2, 4, 16, 0.7), 0 0 0 1px rgba(244, 208, 121, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
