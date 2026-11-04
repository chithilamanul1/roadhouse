"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingReserve from "@/components/FloatingReserve";
import Link from "next/link";
import { Sparkles, Utensils, GlassWater, Clock, MapPin, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050811] text-[#E2E8F0]">
      <Navbar />
      <FloatingReserve />
      
      {/* HERO SECTION */}
      <section className="h-[55vh] flex items-center justify-center relative overflow-hidden">
         <img 
            src="/gallery-dining.jpg" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Inside RoadHouse Restaurant"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/90 via-[#050811]/70 to-[#050811]" />
         
         <div className="relative z-20 text-center px-6 max-w-3xl">
            <p className="text-[#00D2FF] font-mono text-xs tracking-[0.3em] uppercase mb-2 font-bold">
               Our Story
            </p>
            <h1 className="text-4xl md:text-7xl font-[family-name:var(--font-blackops)] text-white mb-3">
               WELCOME TO <span className="text-[#00D2FF]">ROADHOUSE</span>
            </h1>
            <p className="text-neutral-300 text-sm md:text-base max-w-xl mx-auto">
               Seeduwa&apos;s favourite cafe, restro, and blue neon bar. Good food, cold drinks, and chill vibes for everyone.
            </p>
         </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 max-w-6xl mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
               <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-blackops)] text-white">
                  GREAT FOOD. <br /><span className="text-[#00D2FF]">UNFORGETTABLE NIGHTS.</span>
               </h2>
               
               <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                  RoadHouse Café &amp; Restro was created with one simple idea: to give local food lovers, families, and travellers arriving at the airport a comfortable, vibrant place to enjoy delicious meals and cold drinks.
               </p>

               <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                  Located right on Kotugoda Road in Seeduwa, we are just 10 minutes away from Bandaranaike International Airport (Katunayake). Whether you want sizzling charcoal-grilled BBQ chicken, authentic hot spicy kottu, fresh seafood rice, or refreshing fruit smoothies, our kitchen prepares everything fresh every single day.
               </p>

               <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#0C172E] rounded-xl border border-[#00D2FF]/20 flex items-center gap-3">
                     <CheckCircle2 size={20} className="text-[#00D2FF] shrink-0" />
                     <span className="text-xs font-bold text-white">Open Daily 11 AM - 1 AM</span>
                  </div>
                  <div className="p-4 bg-[#0C172E] rounded-xl border border-[#00D2FF]/20 flex items-center gap-3">
                     <CheckCircle2 size={20} className="text-[#00D2FF] shrink-0" />
                     <span className="text-xs font-bold text-white">Free Parking on Site</span>
                  </div>
               </div>

               <div className="pt-2">
                  <Link
                    href="/menu"
                    className="inline-block bg-[#00D2FF] text-black font-black font-[family-name:var(--font-bebas)] text-xl px-8 py-3.5 rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(0,210,255,0.4)]"
                  >
                    SEE OUR FULL MENU
                  </Link>
               </div>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-2 gap-4">
               <img 
                 src="/gallery-bar.jpg" 
                 className="rounded-2xl border border-white/10 w-full h-56 object-cover shadow-lg"
                 alt="RoadHouse Blue Neon Bar"
               />
               <img 
                 src="/gallery-exterior.jpg" 
                 className="rounded-2xl border border-white/10 w-full h-56 object-cover shadow-lg mt-6"
                 alt="RoadHouse Outside"
               />
               <img 
                 src="/gallery-lounge.jpg" 
                 className="rounded-2xl border border-white/10 w-full h-56 object-cover shadow-lg -mt-6"
                 alt="RoadHouse Lounge Seating"
               />
               <img 
                 src="/gallery-night.jpg" 
                 className="rounded-2xl border border-white/10 w-full h-56 object-cover shadow-lg"
                 alt="RoadHouse Night View"
               />
            </div>

         </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 bg-[#0C172E] border-t border-[#00D2FF]/20 text-center px-6">
         <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-blackops)] text-white">
               JOIN US TODAY
            </h3>
            <p className="text-neutral-400 text-sm">
               Drop in for lunch, evening snacks, or a late-night feast. We would love to welcome you!
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
               <a
                  href="https://wa.me/94777702044"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-black font-black font-[family-name:var(--font-bebas)] text-xl px-8 py-3.5 rounded-lg hover:bg-white transition-all"
               >
                  Book a Table on WhatsApp
               </a>
               <Link
                  href="/location"
                  className="bg-white/10 text-white font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg hover:bg-white/20 transition-all flex items-center gap-2"
               >
                  <MapPin size={16} /> View Location &amp; Directions
               </Link>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
