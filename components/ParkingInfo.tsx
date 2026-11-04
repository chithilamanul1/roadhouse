"use client";

import { Car, ShieldCheck, CheckCircle } from "lucide-react";

export default function ParkingInfo() {
  return (
    <section className="py-20 bg-[#070D1C] border-t border-[#00D2FF]/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Text Info */}
        <div className="flex-1">
           <p className="text-[#00D2FF] font-mono text-xs tracking-[0.3em] uppercase mb-2 font-bold">
              Hassle-Free Arrival
           </p>
           <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-blackops)] text-white mb-6">
              FREE &amp; SAFE <span className="text-[#00D2FF]">PARKING</span>
           </h2>
           <p className="text-neutral-400 font-sans mb-6 leading-relaxed text-sm md:text-base">
              Parking near restaurants in Seeduwa and along the main airport road can often be difficult. At RoadHouse, you do not have to worry. We have our own private, secure parking lot with plenty of room for all our guests.
           </p>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 bg-[#0C172E] border border-white/5 p-4 rounded-xl">
                 <div className="p-3 bg-[#00D2FF]/10 text-[#00D2FF] rounded-lg">
                    <Car size={24} />
                 </div>
                 <div>
                    <p className="text-white font-bold text-sm">15+ VEHICLES</p>
                    <p className="text-xs text-neutral-400">Cars, vans &amp; bikes</p>
                 </div>
              </div>

              <div className="flex items-center gap-4 bg-[#0C172E] border border-white/5 p-4 rounded-xl">
                 <div className="p-3 bg-[#00D2FF]/10 text-[#00D2FF] rounded-lg">
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
        <div className="flex-1 h-[320px] w-full bg-black rounded-2xl overflow-hidden relative border border-[#00D2FF]/20 shadow-xl">
           <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
              alt="RoadHouse Parking Area" 
              className="w-full h-full object-cover opacity-75"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#070D1C] via-transparent to-transparent" />
           <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur border border-[#00D2FF]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#00D2FF] flex items-center gap-1.5 font-bold">
             <CheckCircle size={14} /> Free for all dining customers
           </div>
        </div>

      </div>
    </section>
  );
}
