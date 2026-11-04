"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingReserve from "@/components/FloatingReserve";
import Link from "next/link";
import { Sparkles, Utensils, GlassWater, Clock, MapPin, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0]">
      <Navbar />
      <FloatingReserve />
      
      {/* HERO SECTION */}
      <section className="h-[55vh] flex items-center justify-center relative overflow-hidden">
         <img 
            src="/gallery-dining.jpg" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Inside RoadHouse Restaurant"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/70 to-[#050505]" />
         
         <div className="relative z-20 text-center px-6 max-w-3xl">
            <p className="text-[#ff5722] font-mono text-xs tracking-[0.3em] uppercase mb-2 font-bold">
               Our Story
            </p>
            <h1 className="text-4xl md:text-7xl font-[family-name:var(--font-blackops)] text-white mb-3">
               WELCOME TO <span className="text-[#ff5722]">ROADHOUSE</span>
            </h1>
            <p className="text-neutral-300 text-sm md:text-base max-w-xl mx-auto">
               Seeduwa&apos;s favourite cafe, restro, and grill house. Good food, cold drinks, and chill vibes for everyone.
            </p>
         </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 max-w-6xl mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
               <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-blackops)] text-white">
                  GREAT FOOD. <br /><span className="text-[#ff5722]">UNFORGETTABLE NIGHTS.</span>
               </h2>
               
               <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                  RoadHouse Café &amp; Restro was created with one simple idea: to give local food lovers, families, and travellers arriving at the airport a comfortable, vibrant place to enjoy delicious meals and cold drinks.
               </p>

               <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                  Located right on Kotugoda Road in Seeduwa, we are just 10 minutes away from Bandaranaike International Airport (Katunayake). Whether you want sizzling charcoal-grilled BBQ chicken, authentic hot spicy kottu, fresh seafood rice, or refreshing fruit smoothies, our kitchen prepares everything fresh every single day.
               </p>

               <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-neutral-900/60 rounded-xl border border-white/5 flex items-center gap-3">
                     <CheckCircle2 size={20} className="text-[#ff5722] shrink-0" />
                     <span className="text-xs font-bold text-white">Open Daily 11 AM - 1 AM</span>
                  </div>
                  <div className="p-4 bg-neutral-900/60 rounded-xl border border-white/5 flex items-center gap-3">
                     <CheckCircle2 size={20} className="text-[#ff5722] shrink-0" />
                     <span className="text-xs font-bold text-white">Free Parking 15+ Cars</span>
                  </div>
               </div>

               <div className="pt-4 flex gap-4">
                  <Link 
                     href="/menu"
                     className="bg-[#ff5722] text-black font-black font-[family-name:var(--font-bebas)] text-xl px-8 py-3 rounded-lg hover:bg-white transition-all shadow-[0_0_15px_rgba(255,87,34,0.3)]"
                  >
                     VIEW OUR MENU
                  </Link>

                  <a 
                     href="https://wa.me/94777702044?text=Hi%20RoadHouse!%20I%20would%20like%20to%20reserve%20a%20table."
                     target="_blank"
                     rel="noopener noreferrer"
                     className="border border-white/20 text-white font-bold font-[family-name:var(--font-bebas)] text-xl px-8 py-3 rounded-lg hover:border-[#ff5722] hover:text-[#ff5722] transition-colors"
                  >
                     RESERVE TABLE
                  </a>
               </div>
            </div>

            {/* REAL IMAGES COLLAGE */}
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                  <div className="h-56 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                     <img src="/gallery-bar.jpg" alt="RoadHouse Bar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="h-40 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                     <img src="/gallery-night.jpg" alt="RoadHouse Exterior at Night" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
               </div>
               <div className="space-y-4 pt-6">
                  <div className="h-40 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                     <img src="/gallery-exterior.jpg" alt="RoadHouse Signboard" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="h-56 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                     <img src="/gallery-lounge.jpg" alt="RoadHouse Lounge Area" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
               </div>
            </div>

         </div>
      </section>

      <Footer />
    </div>
  );
}