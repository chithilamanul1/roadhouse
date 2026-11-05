"use client";

import { Flame, Utensils, GlassWater, Car, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function LaunchControl() {
  const features = [
    {
      icon: <Flame size={24} className="text-[#ff5722]" />,
      title: "CHARCOAL GRILLS",
      desc: "Juicy BBQ chicken, pork chops, sausages, and hot platters cooked over real fire.",
    },
    {
      icon: <Utensils size={24} className="text-[#ff5722]" />,
      title: "DEVILLED KOTTU & RICE",
      desc: "Sizzling cheese kottu, spicy seafood fried rice, and crispy hot butter cuttlefish.",
    },
    {
      icon: <GlassWater size={24} className="text-[#ff5722]" />,
      title: "BAR & JUICE LOUNGE",
      desc: "Fresh fruit juices, chilled mojitos, hot coffee, and cold beers at our bar counter.",
    },
    {
      icon: <Car size={24} className="text-[#ff5722]" />,
      title: "FREE PARKING & NEAR AIRPORT",
      desc: "10 mins from Katunayake Airport with free secure parking for 15+ vehicles.",
    },
  ];

  return (
    <section className="py-20 bg-[#ff5722] relative overflow-hidden text-black">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        {/* TOP STATUS LABEL (Early style) */}
        <p className="font-mono text-xs sm:text-sm tracking-[0.4em] mb-6 font-black uppercase text-black">
          STATUS: NOW OPEN &amp; OPERATIONAL
        </p>

        {/* MAIN SKEWED BLACK BOX (The early signature element) */}
        <div className="bg-black text-white p-8 md:p-12 skew-x-[-5deg] inline-block shadow-[10px_10px_0px_rgba(0,0,0,0.25)] mb-14">
           <div className="skew-x-[5deg] flex flex-col items-center">
              <h3 className="text-4xl md:text-7xl font-[family-name:var(--font-blackops)] leading-none mb-2">
                 NOW SERVING
              </h3>
              <p className="font-mono text-[#ff5722] tracking-widest text-sm md:text-xl font-bold uppercase">
                 SEEDUWA HQ IS LIVE • WALK-INS WELCOME
              </p>
           </div>
        </div>

        {/* 4 FEATURE CARDS (Dark on orange for maximum contrast and readability) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-black/95 text-white p-6 rounded-2xl shadow-xl border border-black/40 flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ff5722]/15 border border-[#ff5722]/40 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-[family-name:var(--font-bebas)] text-2xl text-white tracking-wide mb-2">
                  {item.title}
                </h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Dine-In • Takeaway</span>
                <span className="text-[#ff5722] font-bold">✓ Daily</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}