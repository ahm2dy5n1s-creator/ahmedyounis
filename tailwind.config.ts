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
        background: "#1A1A24",
        surface: "#20202D",
        "surface-elevated": "#252533",
        "surface-card": "#1E1E2B",
        accent: {
          cyan: "#00E5FF",
          cyanHover: "#33EBFF",
          green: "#00FA9A",
          greenHover: "#33FBAE",
        },
        text: {
          primary: "#F4F7FB",
          secondary: "#A5AFBF",
          muted: "#758194",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(0, 229, 255, 0.25)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        'elevated': '0 10px 30px -5px rgba(0, 0, 0, 0.5)',
        'glow-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.25)',
        'glow-green': '0 0 25px -5px rgba(0, 250, 154, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
export default config;
