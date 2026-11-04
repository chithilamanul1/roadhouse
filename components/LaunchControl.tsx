"use client";

import { Flame, Utensils, GlassWater, Car, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function LaunchControl() {
  const highlights = [
    {
      icon: <Flame size={28} className="text-[#00D2FF]" />,
      title: "CHARCOAL BBQ & GRILLS",
      desc: "Juicy BBQ chicken, pork ribs, grilled sausages, and hot platters cooked fresh over open flame.",
    },
    {
      icon: <Utensils size={28} className="text-[#00D2FF]" />,
      title: "DEVILLED KOTTU & RICE",
      desc: "Authentic Sri Lankan spices, sizzling cheese kottu, seafood fried rice, and crispy cuttlefish.",
    },
    {
      icon: <GlassWater size={28} className="text-[#00D2FF]" />,
      title: "NEON BAR & JUICE LOUNGE",
      desc: "Fresh fruit smoothies, iced mojitos, hot coffee, and cold beers at our blue neon bar.",
    },
    {
      icon: <Car size={28} className="text-[#00D2FF]" />,
      title: "FREE PARKING & NEAR AIRPORT",
      desc: "Located on Kotugoda Rd, 10 mins from Katunayake Airport with free secure parking for 15+ vehicles.",
    },
  ];

  return (
    <section className="py-16 bg-[#070D1C] border-y border-[#00D2FF]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <p className="text-[#00D2FF] font-mono text-xs tracking-[0.3em] uppercase mb-2 font-bold">
            Why People Love RoadHouse
          </p>
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-blackops)] text-white">
            THE BEST FOOD &amp; DRINKS <span className="text-[#00D2FF]">NEAR YOU</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-xl mx-auto">
            Whether you are on your way to the airport, meeting friends, or dining with family, we have great food ready for you.
          </p>
        </div>

        {/* 4 FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0C172E] border border-[#00D2FF]/15 hover:border-[#00D2FF] p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,210,255,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM QUICK BADGES */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-neutral-400">
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-[#00D2FF]" /> Open Daily from 11:00 AM
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#00D2FF]" /> Free Customer Parking
          </span>
          <span className="flex items-center gap-2">
            <Utensils size={16} className="text-[#00D2FF]" /> Dine In &amp; Takeaway
          </span>
        </div>

      </div>
    </section>
  );
}
