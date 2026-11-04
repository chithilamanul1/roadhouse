"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  delay: number;
};

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * window.innerWidth * 1.5,
      y: (Math.random() - 0.5) * window.innerHeight * 1.5,
      delay: Math.random() * 0.4,
    }));
    setParticles(generatedParticles);

    // Fast, smooth loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* PARTICLES */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ x: p.x, y: p.y, opacity: 0, scale: 0.5 }}
                animate={{ 
                    x: 0, 
                    y: 0, 
                    opacity: [0, 1, 0], 
                    scale: [0.5, 1.5, 0] 
                }} 
                transition={{ 
                    duration: 1.0, 
                    ease: "circIn", 
                    delay: p.delay 
                }}
                className="absolute w-1.5 h-1.5 bg-[#ff5722] rounded-full shadow-[0_0_12px_#ff5722]"
              />
            ))}
          </div>

          {/* LOGO */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-44 md:w-60 mb-6"
          >
            <img
              src="/logo-full.png"
              alt="RoadHouse Logo"
              className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(255,87,34,0.6)]"
            />
          </motion.div>

          {/* PROGRESS BAR */}
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative z-10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-[#ff5722] shadow-[0_0_15px_#ff5722]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-neutral-500 font-mono text-[10px] tracking-[0.3em] uppercase mt-4"
          >
            ROADHOUSE • SEEDUWA
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}