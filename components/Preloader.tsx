"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Glowing Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#ff5722] blur-[80px] opacity-20 animate-pulse" />
            <img 
              src="https://i.ibb.co/Jw4wdwxV/Gemini-Generated-Image-3e5orv3e5orv3e5o.png" 
              alt="Loading"
              className="h-40 w-auto relative z-10 drop-shadow-2xl"
            />
          </motion.div>

          {/* Loading Bar */}
          <div className="mt-12 w-64 h-1 bg-neutral-800 rounded-full overflow-hidden relative">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-[#ff5722] shadow-[0_0_15px_#ff5722]"
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 font-mono text-[10px] text-[#ff5722] tracking-[0.5em] uppercase"
          >
            Igniting Systems...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
