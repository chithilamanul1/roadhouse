"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Quick, buttery smooth intro that doesn't block the user
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center pointer-events-none"
        >
          {/* LOGO */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-48 md:w-56 mb-4"
          >
            <img
              src="/logo-full.png"
              alt="RoadHouse"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* ULTRA LIGHT PROGRESS BAR */}
          <div className="w-40 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full bg-[#ff5722]"
            />
          </div>

          <p className="text-neutral-500 font-mono text-[9px] tracking-[0.3em] uppercase mt-3 font-bold">
            SEEDUWA • NOW OPEN
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}