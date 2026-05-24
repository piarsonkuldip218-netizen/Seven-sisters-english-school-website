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
        navy: {
          DEFAULT: "#0A1628",
          50: "#E6EAF0",
          100: "#C2CCD9",
          200: "#8FA0B8",
          300: "#5C7596",
          400: "#2F4A75",
          500: "#1B2D4F",
          600: "#142340",
          700: "#0D1A30",
          800: "#0A1628",
          900: "#060E1B",
        },
        cream: {
          DEFAULT: "#F8F4E9",
          50: "#FDFBF6",
          100: "#F8F4E9",
          200: "#F0EAD6",
          300: "#E5DCBE",
          400: "#D8CBA0",
        },
        gold: {
          DEFAULT: "#C9A961",
          50: "#F7F1E0",
          100: "#EFE2C0",
          200: "#DFC589",
          300: "#C9A961",
          400: "#A88A4A",
          500: "#8A6F36",
          600: "#6B5527",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          soft: "#4A4A4A",
          muted: "#7A7A7A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(1.75rem, 4vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
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
      },
    },
  },
  plugins: [],
};

export default config;
