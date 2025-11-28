"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TIMELINE = [
  { year: "2023", title: "THE SPARK", desc: "The idea was simple: Seeduwa needed a place that wasn't just a 'Kade'. It needed a Headquarters. A place for petrolheads, foodies, and night owls." },
  { year: "2024", title: "BREAKING GROUND", desc: "We took an old structure near the Airport Road and stripped it to the bone. Exposed brick, raw steel, dark asphalt. The 'Neo-Brutalist' identity was born." },
  { year: "NOW", title: "ONLINE", desc: "Road House isn't just a restaurant. It's a culture. From the 'Wolf Pack' community to the 'Asphalt' grills, we are defining the new standard." },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      
      {/* HEADER */}
      <section className="h-[60vh] flex items-center justify-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
         <h1 className="relative z-10 text-[12vw] font-[family-name:var(--font-blackops)] text-white text-center leading-none mix-blend-difference">
            THE<br/><span className="text-[#ff5722]">ORIGIN</span>
         </h1>
      </section>

      {/* THE BLUEPRINT TIMELINE */}
      <section ref={containerRef} className="py-24 max-w-4xl mx-auto px-6 relative">
         
         {/* The "Road" Line */}
         <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-[#ff5722] shadow-[0_0_15px_#ff5722]" 
            />
         </div>

         <div className="space-y-32">
            {TIMELINE.map((item, i) => (
               <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 bg-white/5 border border-white/10 p-8 rounded-lg relative hover:border-[#ff5722] transition-colors group"
                  >
                     <span className="absolute -top-4 -right-4 text-6xl font-[family-name:var(--font-blackops)] text-white/5 group-hover:text-[#ff5722]/20 transition-colors">
                        {item.year}
                     </span>
                     <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-4 tracking-wider">{item.title}</h3>
                     <p className="font-mono text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>

                  {/* Center Dot */}
                  <div className="w-4 h-4 rounded-full bg-[#050505] border-2 border-[#ff5722] relative z-10 shadow-[0_0_10px_#ff5722]" />

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden md:block" />
               </div>
            ))}
         </div>

      </section>

      {/* THE MANIFESTO */}
      <section className="py-24 bg-[#ff5722] text-black text-center">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-bebas)] mb-6">WE DON'T SERVE FOOD.<br/>WE SERVE FUEL.</h2>
            <p className="font-bold font-mono tracking-widest">SEEDUWA • SRI LANKA</p>
         </div>
      </section>

      <Footer />
    </div>
  );
}
