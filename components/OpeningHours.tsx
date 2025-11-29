"use client";

import { Clock } from "lucide-react";

export default function OpeningHours() {
  return (
    <section className="py-20 bg-neutral-900 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-8 justify-center">
           <Clock className="text-[#ff5722]" size={32} />
           <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-blackops)] text-white uppercase">
              Operational <span className="text-[#ff5722]">Hours</span>
           </h2>
        </div>

        <div className="bg-black border border-white/10 p-8 rounded-sm relative overflow-hidden">
           {/* Decorative corner */}
           <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff5722]/10 rounded-bl-full" />

           <div className="space-y-6">
              
              {/* Weekdays */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                 <div className="flex flex-col">
                    <span className="text-xl font-[family-name:var(--font-bebas)] text-white tracking-wide">MONDAY - THURSDAY</span>
                    <span className="text-xs font-mono text-neutral-500">STANDARD SERVICE</span>
                 </div>
                 <span className="text-[#ff5722] font-mono font-bold text-lg">11:00 AM - 11:00 PM</span>
              </div>

              {/* Weekends */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                 <div className="flex flex-col">
                    <span className="text-xl font-[family-name:var(--font-bebas)] text-white tracking-wide">FRIDAY - SUNDAY</span>
                    <span className="text-xs font-mono text-neutral-500">LATE NIGHT GRILL</span>
                 </div>
                 <span className="text-[#ff5722] font-mono font-bold text-lg">11:00 AM - 01:00 AM</span>
              </div>

              {/* Poya/Holidays */}
              <div className="flex justify-between items-center">
                 <div className="flex flex-col">
                    <span className="text-xl font-[family-name:var(--font-bebas)] text-white tracking-wide">POYA DAYS</span>
                    <span className="text-xs font-mono text-neutral-500">SPECIAL HOURS</span>
                 </div>
                 <span className="text-white font-mono font-bold text-lg">OPEN (NO ALCOHOL)</span>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
