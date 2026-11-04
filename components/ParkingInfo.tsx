"use client";

import { Car, ShieldCheck } from "lucide-react";

export default function ParkingInfo() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Text Info */}
        <div className="flex-1">
           <p className="text-[#ff5722] font-mono text-xs tracking-[0.3em] uppercase mb-2 font-bold">
              Hassle-Free Arrival
           </p>
           <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-blackops)] text-white mb-6">
              FREE &amp; SAFE <span className="text-[#ff5722]">PARKING</span>
           </h2>
           <p className="text-neutral-400 font-sans mb-6 leading-relaxed text-sm md:text-base">
              Parking near restaurants in Seeduwa and along the main airport road can often be difficult. At RoadHouse, you do not have to worry. We have our own private, secure parking lot with plenty of room for all our guests.
           </p>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                 <div className="p-3 bg-[#ff5722]/10 text-[#ff5722] rounded-lg">
                    <Car size={24} />
                 </div>
                 <div>
                    <p className="text-white font-bold text-sm">15+ VEHICLES</p>
                    <p className="text-xs text-neutral-400">Cars, vans &amp; bikes</p>
                 </div>
              </div>

              <div className="flex items-center gap-4 bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                 <div className="p-3 bg-[#ff5722]/10 text-[#ff5722] rounded-lg">
                    <ShieldCheck size={24} />
                 </div>
                 <div>
                    <p className="text-white font-bold text-sm">SAFE &amp; MONITORED</p>
                    <p className="text-xs text-neutral-400">Well-lit area</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 h-[320px] w-full bg-black rounded-2xl overflow-hidden relative border border-[#ff5722]/20 shadow-xl">
           <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
              alt="RoadHouse Parking Area" 
              className="w-full h-full object-cover opacity-75"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#ff5722] bg-black/80 px-3 py-1.5 rounded-lg border border-white/10">
                 ✓ Free Customer Parking
              </span>
           </div>
        </div>

      </div>
    </section>
  );
}