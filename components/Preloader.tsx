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
          className="fixed inset-0 z-[9999] bg-[#050811] flex flex-col items-center justify-center overflow-hidden"
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
                className="absolute w-1.5 h-1.5 bg-[#00D2FF] rounded-full shadow-[0_0_12px_#00D2FF]"
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center px-4">
             {/* Logo */}
             <div className="relative w-64 md:w-80 h-36 mb-6 flex items-center justify-center">
                <motion.div 
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1.5, 2] }}
                   transition={{ delay: 0.6, duration: 0.6 }}
                   className="absolute w-44 h-44 bg-[#00D2FF] rounded-full blur-[80px]"
                />

                <motion.img 
                  src="/logo-full.png" 
                  alt="RoadHouse Café & Restro"
                  initial={{ opacity: 0, scale: 1.3, filter: "blur(15px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ delay: 0.7, duration: 0.8, ease: "circOut" }}
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(0,210,255,0.7)]"
                />
             </div>
             
             {/* Loading Bar */}
             <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "180px" }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="h-[3px] bg-neutral-800 rounded-full overflow-hidden relative"
             >
               <motion.div 
                 initial={{ x: "-100%" }}
                 animate={{ x: "0%" }}
                 transition={{ delay: 0.9, duration: 0.9, ease: "linear" }}
                 className="h-full bg-[#00D2FF] shadow-[0_0_12px_#00D2FF]"
               />
             </motion.div>
             
             <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="mt-3 font-mono text-[10px] text-[#00D2FF] tracking-[0.4em] font-bold"
             >
                WELCOME TO ROADHOUSE
             </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
