"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate ignition sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds load time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
        >
          {/* Ignition Text Effect */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 1, 0.5, 1, 0.8, 1] }} // Flicker effect
              transition={{ duration: 1.5, times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1] }}
              className="text-6xl md:text-9xl font-bebas text-[#e0e0e0] tracking-tighter"
            >
              ROAD HOUSE
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "circOut" }}
              className="h-1 bg-[#ff5722] mt-2 shadow-[0_0_15px_#ff5722]"
            />
            
            <p className="mt-4 font-mono text-xs text-[#ff5722] animate-pulse">
              INITIALIZING SYSTEMS...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
