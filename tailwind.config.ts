import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#050811",      // Deep midnight navy
          gray: "#0B132B",      // Card backgrounds
          card: "#0C172E",
          blue: "#00D2FF",      // RoadHouse signature electric blue
          blueGlow: "#38BDF8",  // Neon cyan glow
          blueDark: "#0070F3",  // Deep vibrant blue
          smoke: "#E2E8F0",     // Text
        },
      },
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        montserrat: ["var(--font-montserrat)"],
        blackops: ["var(--font-blackops)"],
      },
      animation: {
        'flicker': 'flicker 2s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter: 'drop-shadow(0 0 2px rgba(0,210,255,1)) drop-shadow(0 0 18px rgba(0,210,255,0.75))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.5',
            filter: 'none',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
