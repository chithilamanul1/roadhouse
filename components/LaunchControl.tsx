"use client";

import { Flame, Utensils, GlassWater, Car } from "lucide-react";
import Link from "next/link";

export default function LaunchControl() {
  const highlights = [
    {
      icon: <Flame size={28} className="text-[#ff5722]" />,
      title: "CHARCOAL BBQ & GRILLS",
      desc: "Juicy BBQ chicken, pork ribs, grilled sausages, and hot platters cooked fresh over open flame.",
    },
    {
      icon: <Utensils size={28} className="text-[#ff5722]" />,
      title: "DEVILLED KOTTU & RICE",
      desc: "Authentic Sri Lankan spices, sizzling cheese kottu, seafood fried rice, and crispy cuttlefish.",
    },
    {
      icon: <GlassWater size={28} className="text-[#ff5722]" />,
      title: "BAR & JUICE LOUNGE",
      desc: "Fresh fruit smoothies, iced mojitos, hot coffee, and cold drinks at our neon bar.",
    },
    {
      icon: <Car size={28} className="text-[#ff5722]" />,
      title: "FREE PARKING & NEAR AIRPORT",
      desc: "Located on Kotugoda Rd, 10 mins from Katunayake Airport with free secure parking for 15+ vehicles.",
    },
  ];

  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <p className="text-[#ff5722] font-mono text-xs tracking-[0.3em] uppercase mb-2 font-bold">
            Why People Love RoadHouse
          </p>
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-blackops)] text-white">
            THE BEST FOOD &amp; DRINKS <span className="text-[#ff5722]">NEAR YOU</span>
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
              className="bg-neutral-900/60 border border-white/10 hover:border-[#ff5722] p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,87,34,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>Dine-in • Takeaway</span>
                <span className="text-[#ff5722]">✓ Fresh</span>
              </div>
            </div>
          ))}
        </div>

        {/* QUICK LINK BAR */}
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm font-bold font-mono text-[#ff5722] hover:text-white transition-colors"
          >
            <span>Explore our full food and beverage menu</span> &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}