"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Total load time: 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Generate 30 random particles for the "Convergence" effect
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 1000 - 500, // Random start X
    y: Math.random() * 1000 - 500, // Random start Y
    duration: Math.random() * 1 + 0.5, // Random speed
  }));

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* 1. THE PARTICLES (Flying In) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
                animate={{ x: 0, y: 0, opacity: [0, 1, 0], scale: [0, 1.5, 0] }} // Fly to center and vanish
                transition={{ duration: 1.5, ease: "easeIn", delay: 0.2 }}
                className="absolute w-2 h-2 bg-[#ff5722] rounded-full blur-[1px]"
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center">
             
             {/* 2. THE LOGO REVEAL (Liquid Fill Effect) */}
             <div className="relative w-64 h-40 mb-8">
               {/* Background Ghost (Faint outline) */}
               <img 
                 src="/logo-full.png" 
                 alt="Logo Base"
                 className="absolute inset-0 w-full h-full object-contain opacity-20 grayscale"
               />
               
               {/* The Liquid Fill Layer */}
               <motion.div
                 initial={{ height: "0%" }}
                 animate={{ height: "100%" }}
                 transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                 className="absolute bottom-0 left-0 w-full overflow-hidden"
                 style={{ filter: "drop-shadow(0 0 10px #ff5722)" }}
               >
                 <img 
                   src="/logo-full.png" 
                   alt="Logo Fill"
                   className="absolute bottom-0 left-0 w-full h-40 object-contain"
                 />
               </motion.div>
             </div>
             
             {/* 3. LOADING BAR */}
             <div className="w-64 h-1 bg-neutral-800 rounded-full overflow-hidden relative">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 2.8, ease: "linear" }}
                 className="h-full bg-[#ff5722] shadow-[0_0_15px_#ff5722]"
               />
             </div>
             
             <div className="flex justify-between w-64 mt-2">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="font-mono text-[10px] text-[#ff5722] animate-pulse"
                >
                  SYSTEM LOADING
                </motion.span>
                <motion.span 
                   animate={{ opacity: [1, 0, 1] }}
                   transition={{ repeat: Infinity, duration: 0.5 }}
                   className="font-mono text-[10px] text-white"
                >
                   100%
                </motion.span>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
