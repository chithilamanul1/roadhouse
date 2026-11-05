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
          dark: "#050505",      // Deep asphalt black
          gray: "#121212",      // Card backgrounds
          card: "#18181b",
          orange: "#ff5722",    // Road House Signature Orange Flare
          orangeHover: "#e64a19",
          smoke: "#e0e0e0",     // Text
        },
      },
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        montserrat: ["var(--font-montserrat)"],
        blackops: ["var(--font-blackops)"],
      },
    },
  },
  plugins: [],
};
export default config;