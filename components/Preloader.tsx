"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the particle type to avoid TypeScript errors
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
    // 1. GENERATE PARTICLES (Now safely inside useEffect)
    // This ensures 'window' exists before we try to use it
    const generatedParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * window.innerWidth * 1.5,
      y: (Math.random() - 0.5) * window.innerHeight * 1.5,
      delay: Math.random() * 0.5,
    }));
    setParticles(generatedParticles);

    // 2. TIMING SEQUENCE
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* 1. THE PARTICLE SWARM */}
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
                    duration: 1.2, 
                    ease: "circIn", 
                    delay: p.delay 
                }}
                className="absolute w-1 h-1 bg-[#ff5722] rounded-full shadow-[0_0_10px_#ff5722]"
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center">
             
             {/* 2. THE LOGO FUSION (Blur-to-Focus) */}
             <div className="relative w-80 h-48 mb-8 flex items-center justify-center">
                
                {/* Impact Flash */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.5, 2] }}
                   transition={{ delay: 1.0, duration: 0.5 }}
                   className="absolute w-40 h-40 bg-[#ff5722] rounded-full blur-[80px]"
                />

                <motion.img 
                  src="/logo-full.png" 
                  alt="Road House"
                  initial={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ delay: 1.1, duration: 1.5, ease: "circOut" }}
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(255,87,34,0.3)]"
                />
             </div>
             
             {/* 3. LOADING BAR */}
             <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "200px" }}
                transition={{ delay: 1.8, duration: 1.0 }}
                className="h-[2px] bg-neutral-800 rounded-full overflow-hidden relative"
             >
               <motion.div 
                 initial={{ x: "-100%" }}
                 animate={{ x: "0%" }}
                 transition={{ delay: 1.8, duration: 1.5, ease: "linear" }}
                 className="h-full bg-[#ff5722] shadow-[0_0_10px_#ff5722]"
               />
             </motion.div>
             
             <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
                className="mt-4 font-mono text-[10px] text-[#ff5722] tracking-[0.5em] animate-pulse"
             >
                ONLINE
             </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
