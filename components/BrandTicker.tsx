"use client";

import { motion } from "framer-motion";

const BRANDS = [
  "UBER EATS", "PICKME FOOD", "COCA COLA", "RED BULL", "CARLSBERG", "LION", "UBER EATS", "PICKME FOOD"
];

export default function BrandTicker() {
  return (
    <section className="py-12 bg-black border-y border-white/10 overflow-hidden relative">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="flex gap-16 md:gap-32 transform-gpu will-change-transform"
        >
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-[family-name:var(--font-blackops)] text-white/20 uppercase select-none"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
    </section>
  );
}