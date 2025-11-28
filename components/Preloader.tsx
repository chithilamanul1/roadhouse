"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 2.5 seconds, then hide
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader-overlay"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
             {/* Wolf Icon Pulse */}
             <motion.img 
                src="https://i.ibb.co/Jw4wdwxV/Gemini-Generated-Image-3e5orv3e5orv3e5o.png"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 mb-6 object-cover rounded-full border-2 border-[#ff5722] drop-shadow-[0_0_30px_rgba(255,87,34,0.6)]"
             />
             
             {/* Stencil Text Effect */}
             <div className="overflow-hidden text-center">
               <motion.h1 
                 initial={{ y: 100 }}
                 animate={{ y: 0 }}
                 transition={{ delay: 0.3, duration: 0.8, ease: "circOut" }}
                 className="text-6xl md:text-8xl font-[family-name:var(--font-blackops)] text-white tracking-tighter"
               >
                 ROAD HOUSE
               </motion.h1>
             </div>
             
             {/* Progress Bar */}
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "200px" }}
               transition={{ delay: 0.5, duration: 1.5 }}
               className="h-1 bg-[#ff5722] mt-4 rounded-full shadow-[0_0_10px_#ff5722]"
             />
             
             <p className="mt-4 font-mono text-xs text-[#ff5722] animate-pulse tracking-[0.3em]">
                INITIALIZING...
             </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
