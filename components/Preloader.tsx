"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    // 1. Progress Simulation (Non-linear for realism)
    const interval = setInterval(() => {
      setFillPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 800); // Wait a bit after 100%
          return 100;
        }
        // Randomize speed: fast at start, slow at end
        const jump = Math.random() * 15; 
        return Math.min(prev + jump, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader-overlay"
          exit={{ opacity: 0 }} // Fade out smoothly
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* BACKGROUND AMBIANCE (Subtle pulsing glow behind everything) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <motion.div 
               animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="w-[500px] h-[500px] bg-[#ff5722] rounded-full blur-[150px] opacity-20"
             />
          </div>

          <div className="relative z-10 flex flex-col items-center">
             
             {/* --- THE ADVANCED LIQUID LOGO --- */}
             <div className="relative w-80 h-48 mb-10">
               
               {/* Layer 1: The "Empty" Container (Dark Ghost) */}
               <img 
                 src="/logo-full.png" 
                 alt="Logo Base"
                 className="absolute inset-0 w-full h-full object-contain opacity-20 grayscale brightness-50"
               />

               {/* Layer 2: The "Molten" Liquid Fill */}
               {/* We use maskImage to clip the wave inside the logo text/shape */}
               <div 
                 className="absolute inset-0 w-full h-full"
                 style={{
                    maskImage: `url("/logo-full.png")`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskImage: `url("/logo-full.png")`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                 }}
               >
                 {/* The Liquid Container (Rising) */}
                 <div 
                    className="absolute bottom-0 left-0 w-full bg-[#ff5722]"
                    style={{ height: `${fillPercent}%`, transition: "height 0.3s ease-out" }}
                 >
                    {/* The Wave Surface (Animation) */}
                    <motion.div 
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute -top-4 left-0 w-[200%] h-8 bg-[#ff5722]"
                        style={{ 
                            borderRadius: "40%",
                            opacity: 0.8
                        }}
                    />
                    
                    {/* The "Hot" Surface Glow Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-white blur-[2px] opacity-80" />
                 </div>
               </div>
             </div>
             
             {/* --- STATS DASHBOARD --- */}
             <div className="flex items-center gap-4 font-mono text-xs tracking-widest">
                <div className="flex flex-col items-end text-neutral-500">
                   <span>SYSTEM</span>
                   <span>IGNITION</span>
                </div>
                
                {/* Vertical Divider */}
                <div className="h-8 w-[1px] bg-[#ff5722]/50" />
                
                <div className="flex flex-col w-12">
                   <span className="text-[#ff5722] font-bold text-lg leading-none">
                     {Math.floor(fillPercent)}%
                   </span>
                </div>
             </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
