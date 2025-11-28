"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="h-[60vh] flex items-center justify-center relative overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 bg-black/50 z-10" />
         <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt="Restaurant Interior"
         />
         
         <div className="relative z-20 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-blackops)] text-white mb-4">
               COMING <span className="text-[#ff5722]">SOON</span>
            </h1>
            <p className="font-mono text-xl text-neutral-300 tracking-widest">DECEMBER 2025</p>
         </div>
      </section>

      {/* THE VISION SECTION */}
      <section className="py-24 max-w-4xl mx-auto px-6">
         <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="w-full md:w-1/2">
               <h2 className="text-4xl font-[family-name:var(--font-bebas)] text-white mb-6">
                  BRINGING PREMIUM FLAVORS TO <span className="text-[#ff5722]">SEEDUWA</span>
               </h2>
               <p className="text-neutral-400 leading-relaxed mb-6 font-sans">
                  Road House isn't just another restaurant. It's a brand new culinary experience coming to Kotugoda Road. 
                  We are building a space where high-quality ingredients meet a relaxed, industrial atmosphere.
               </p>
               <p className="text-neutral-400 leading-relaxed font-sans">
                  Whether you are looking for a heavy BBQ dinner, a quick coffee stop, or a place to hang out with friends, 
                  we are designing Road House to be your designated spot.
               </p>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
               <img 
                 src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" 
                 className="rounded-lg mb-8"
                 alt="Grill"
               />
               <img 
                 src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" 
                 className="rounded-lg mt-8"
                 alt="Cafe Vibes"
               />
            </div>

         </div>
      </section>

      {/* LOCATION & INFO STRIP */}
      <section className="py-20 bg-neutral-900 text-center">
         <div className="max-w-3xl mx-auto px-6">
            <h3 className="text-3xl font-[family-name:var(--font-bebas)] text-white mb-8">THE LOCATION</h3>
            <p className="text-lg text-neutral-300 font-sans mb-8">
               We are currently under construction at <span className="text-[#ff5722] font-bold">24 Kotugoda Rd, Seeduwa</span>. 
               Get ready for the grand opening.
            </p>
         </div>
      </section>

      <Footer />
    </div>
  );
}
