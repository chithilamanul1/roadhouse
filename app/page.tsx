"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [headline, setHeadline] = useState("COMING SOON");
  const [subline, setSubline] = useState("PREPARING FOR LAUNCH");

  useEffect(() => {
    const targetDate = new Date("2025-12-30T00:00:00").getTime();
    if (new Date().getTime() >= targetDate) {
      setHeadline("WE ARE OPEN");
      setSubline("WELCOME TO THE BASE");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="h-[60vh] flex items-center justify-center relative overflow-hidden">
         <div className="absolute inset-0 bg-black/60 z-10" />
         <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            alt="Interior"
         />
         
         <div className="relative z-20 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-blackops)] text-white mb-4">
               {headline.includes("OPEN") ? "WE ARE" : "COMING"} <span className="text-[#ff5722]">{headline.includes("OPEN") ? "OPEN" : "SOON"}</span>
            </h1>
            <p className="font-mono text-xl text-neutral-300 tracking-widest uppercase">
               {subline}
            </p>
         </div>
      </section>

      {/* VISION SECTION */}
      <section className="py-24 max-w-4xl mx-auto px-6">
         <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="w-full md:w-1/2">
               <h2 className="text-4xl font-[family-name:var(--font-bebas)] text-white mb-6">
                  PREMIUM FLAVORS IN <span className="text-[#ff5722]">SEEDUWA</span>
               </h2>
               <p className="text-neutral-400 leading-relaxed mb-6 font-sans">
                  Road House is Seeduwa's premier culinary destination. We have built a space where high-quality ingredients meet a relaxed, industrial atmosphere.
               </p>
               <p className="text-neutral-400 leading-relaxed font-sans">
                  Whether you are looking for a heavy BBQ dinner, a quick coffee stop, or a place to hang out with friends, 
                  Road House is your designated spot.
               </p>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
               <img 
                 src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" 
                 className="rounded-lg mb-8 opacity-80" alt="Grill"
               />
               <img 
                 src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" 
                 className="rounded-lg mt-8 opacity-80" alt="Cafe"
               />
            </div>

         </div>
      </section>

      <Footer />
    </div>
  );
}
