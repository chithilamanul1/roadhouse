"use client";

import { Clock, Calendar, Utensils } from "lucide-react";

export default function OpeningHours() {
  return (
    <section className="py-20 bg-[#050811] border-t border-[#00D2FF]/10">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="flex flex-col items-center gap-2 mb-10 text-center">
           <div className="w-12 h-12 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF] flex items-center justify-center text-[#00D2FF] mb-2">
             <Clock size={24} />
           </div>
           <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-blackops)] text-white uppercase">
              OPENING <span className="text-[#00D2FF]">HOURS</span>
           </h2>
           <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              Come eat with us or order takeaway anytime
           </p>
        </div>

        <div className="bg-[#0C172E] border border-[#00D2FF]/30 p-8 rounded-2xl relative overflow-hidden shadow-2xl">
           <div className="space-y-6">
              
              {/* Weekdays */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-5 gap-2">
                 <div>
                    <span className="text-2xl font-[family-name:var(--font-bebas)] text-white tracking-wide block">
                      MONDAY — THURSDAY
                    </span>
                    <span className="text-xs text-neutral-400">Lunch, Dinner, Cafe &amp; Drinks</span>
                 </div>
                 <span className="text-[#00D2FF] font-mono font-black text-lg bg-[#00D2FF]/10 border border-[#00D2FF]/30 px-4 py-1.5 rounded-lg">
                    11:00 AM — 11:00 PM
                 </span>
              </div>

              {/* Weekends */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-5 gap-2">
                 <div>
                    <span className="text-2xl font-[family-name:var(--font-bebas)] text-white tracking-wide block">
                      FRIDAY — SUNDAY
                    </span>
                    <span className="text-xs text-neutral-400">Late Night Grills, Music &amp; Blue Neon Bar</span>
                 </div>
                 <span className="text-[#00D2FF] font-mono font-black text-lg bg-[#00D2FF]/10 border border-[#00D2FF]/30 px-4 py-1.5 rounded-lg">
                    11:00 AM — 01:00 AM
                 </span>
              </div>

              {/* Poya Days */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                 <div>
                    <span className="text-2xl font-[family-name:var(--font-bebas)] text-white tracking-wide block">
                      POYA DAYS &amp; HOLIDAYS
                    </span>
                    <span className="text-xs text-neutral-400">Open for full food menu &amp; fresh juices (No alcohol)</span>
                 </div>
                 <span className="text-white font-mono font-bold text-sm bg-white/10 px-4 py-1.5 rounded-lg">
                    OPEN NORMAL HOURS
                 </span>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
