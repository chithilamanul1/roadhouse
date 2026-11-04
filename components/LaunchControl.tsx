"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LaunchControl() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // AUTOMATION: Check if it's 2026
    const openDate = new Date("2024-01-01T00:00:00").getTime();
    if (new Date().getTime() >= openDate) {
      setIsOpen(true);
    }
  }, []);

  return (
    <section className="py-20 bg-[#ff5722] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        {/* TOP STATUS LABEL */}
        <h2 className="text-black font-mono text-sm tracking-[0.5em] mb-6 font-bold uppercase">
          PROJECT STATUS: {isOpen ? "OPERATIONAL" : "UNDER CONSTRUCTION"}
        </h2>

        {/* MAIN DISPLAY */}
        <div className="bg-black text-white p-8 md:p-12 skew-x-[-5deg] inline-block shadow-[10px_10px_0px_rgba(0,0,0,0.2)]">
           <div className="skew-x-[5deg] flex flex-col items-center">
              <h3 className="text-4xl md:text-6xl font-[family-name:var(--font-blackops)] leading-none mb-2">
                 {isOpen ? "NOW SERVING" : "COMING SOON"}
              </h3>
              <p className="font-mono text-[#ff5722] tracking-widest text-sm md:text-lg">
                 {isOpen ? "SEEDUWA HQ IS LIVE" : "TARGET: LATE 2025"}
              </p>
           </div>
        </div>

        {/* PROGRESS BAR (Only shows if NOT open yet) */}
        {!isOpen && (
          <div className="max-w-2xl mx-auto mt-12">
             <div className="flex justify-between text-[10px] font-mono font-bold text-black mb-2 uppercase">
                <span>Foundation</span>
                <span>Structure</span>
                <span>Interiors</span>
                <span>Testing</span>
                <span>Launch</span>
             </div>
             
             <div className="h-4 w-full bg-black/20 rounded-full overflow-hidden relative">
                <motion.div 
                   initial={{ width: "0%" }}
                   whileInView={{ width: "85%" }}
                   transition={{ duration: 2, ease: "circOut" }}
                   className="h-full bg-black relative"
                >
                   <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2))] bg-[size:1rem_1rem] opacity-30" />
                </motion.div>
             </div>
             
             <p className="mt-4 font-bold font-mono text-black text-xs">
                CURRENT PHASE: FINAL PREPARATIONS
             </p>
          </div>
        )}

      </div>
    </section>
  );
}
