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
          dark: "#050505",      // Darker than black (Asphalt)
          gray: "#121212",      // Card backgrounds
          orange: "#ff5722",    // The Road House Flare
          orangeHover: "#e64a19",
          smoke: "#e0e0e0",     // Text
        },
      },
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        montserrat: ["var(--font-montserrat)"],
      },
      animation: {
        'flicker': 'flicker 2s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter: 'drop-shadow(0 0 1px rgba(255,87,34,1)) drop-shadow(0 0 15px rgba(255,87,34,0.7)) drop-shadow(0 0 1px rgba(255,87,34,1))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;