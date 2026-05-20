import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#1d4ed8",
            600: "#1e40af",
            700: "#1e3a8a",
            800: "#1e3270",
            900: "#172554",
          },
          red: {
            50: "#fff1f2",
            100: "#ffe4e6",
            200: "#fecdd3",
            300: "#fda4af",
            400: "#fb7185",
            500: "#dc2626",
            600: "#b91c1c",
            700: "#991b1b",
            800: "#7f1d1d",
            900: "#6b1a1a",
          },
          green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            500: "#16a34a",
            600: "#15803d",
            700: "#166534",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          "radial-gradient(ellipse at top left, rgba(29, 78, 216, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(220, 38, 38, 0.08) 0%, transparent 50%)",
        "medical-grid":
          "linear-gradient(rgba(29,78,216,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "24px 24px",
        "grid-md": "40px 40px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,0.08), 0 4px 16px -2px rgba(0,0,0,0.06)",
        "card-hover":
          "0 4px 6px -1px rgba(0,0,0,0.1), 0 10px 30px -5px rgba(0,0,0,0.08)",
        premium:
          "0 0 0 1px rgba(29,78,216,0.08), 0 8px 32px -4px rgba(29,78,216,0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
