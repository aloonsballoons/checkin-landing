import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF4EA",
        sand: "#F3E8D6",
        paper: "#FFFCF6",
        ink: {
          DEFAULT: "#2C2520",
          soft: "#5E544A",
          faint: "#8A7E70",
        },
        clay: {
          DEFAULT: "#C0613F",
          deep: "#A8492C",
          soft: "#E8C2AE",
          wash: "#F6E5DA",
        },
        sage: {
          DEFAULT: "#7E8C6E",
          deep: "#5F6C50",
          soft: "#D7DDCB",
        },
        line: "#E9DDCB",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(44, 37, 32, 0.04), 0 12px 32px rgba(44, 37, 32, 0.06)",
        lift: "0 4px 12px rgba(44, 37, 32, 0.05), 0 24px 56px rgba(44, 37, 32, 0.10)",
        glow: "0 18px 50px rgba(192, 97, 63, 0.22)",
      },
      keyframes: {
        ring: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "10%, 30%": { transform: "rotate(-9deg)" },
          "20%, 40%": { transform: "rotate(9deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        pulsering: {
          "0%": { transform: "scale(0.85)", opacity: "0.6" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        ring: "ring 2.6s ease-in-out infinite",
        pulsering: "pulsering 2.6s ease-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
