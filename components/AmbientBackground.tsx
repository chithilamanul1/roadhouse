"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* 1. Grain/Noise Overlay (The Film Look) */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-[1]"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
        }}
      />

      {/* 2. Floating Orange Smoke/Glow (Bottom Right) */}
      <motion.div 
        animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1], 
            rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-[#ff5722] rounded-full blur-[150px] opacity-10"
      />

      {/* 3. Floating Blue/Cold Glow (Top Left) - Contrast */}
      <motion.div 
        animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.1, 0.05], 
            x: [0, 100, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-900 rounded-full blur-[150px] opacity-10"
      />

    </div>
  );
}
