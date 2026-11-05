"use client";

import { Clock } from "lucide-react";

export default function OpeningHours() {
  return (
    <section className="py-20 bg-[#050505] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="flex flex-col items-center gap-2 mb-10 text-center">
           <div className="w-12 h-12 rounded-full bg-[#ff5722]/10 border border-[#ff5722] flex items-center justify-center text-[#ff5722] mb-2">
             <Clock size={24} />
           </div>
           <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-blackops)] text-white uppercase">
              OPENING <span className="text-[#ff5722]">HOURS</span>
           </h2>
           <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              Open 7 days a week for lunch, dinner &amp; late night
           </p>
        </div>

        <div className="bg-neutral-900/80 border border-white/10 p-8 rounded-2xl shadow-xl">
           <div className="space-y-6">
              
              {/* Weekdays */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-5 gap-2">
                 <div>
                    <span className="text-2xl font-[family-name:var(--font-bebas)] text-white tracking-wide block">
                      MONDAY — THURSDAY
                    </span>
                    <span className="text-xs text-neutral-400">Lunch, Dinner, Cafe &amp; Drinks</span>
                 </div>
                 <span className="text-[#ff5722] font-mono font-black text-lg bg-[#ff5722]/10 border border-[#ff5722]/30 px-4 py-1.5 rounded-lg">
                    11:00 AM — 11:00 PM
                 </span>
              </div>

              {/* Weekends */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-5 gap-2">
                 <div>
                    <span className="text-2xl font-[family-name:var(--font-bebas)] text-white tracking-wide block">
                      FRIDAY — SUNDAY
                    </span>
                    <span className="text-xs text-neutral-400">Late Night Grills, Music &amp; Bar</span>
                 </div>
                 <span className="text-[#ff5722] font-mono font-black text-lg bg-[#ff5722]/10 border border-[#ff5722]/30 px-4 py-1.5 rounded-lg">
                    11:00 AM — 01:00 AM
                 </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-neutral-400 gap-2">
                 <span>📍 24 Kotugoda Rd, Seeduwa (10 mins from Airport)</span>
                 <span className="text-[#ff5722] font-bold">Hotline: 077 770 2044</span>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}