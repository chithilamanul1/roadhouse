"use client";

import { motion } from "framer-motion";

// Update these deals from your Admin/CMS later
const OFFERS = [
  "HAPPY HOUR: 1-for-1 Mojitos (5PM - 7PM)",
  "NEW: Hot Butter Cuttlefish Now Available", 
  "FRIDAY: Live Acoustic Night @ 8PM",
  "LUNCH: Free Iced Tea with any Rice Dish",
];

export default function InfiniteMarquee() {
  return (
    <div className="w-full bg-[#ff5722] py-4 overflow-hidden relative z-30 rotate-1">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-12 items-center"
        >
          {[...OFFERS, ...OFFERS, ...OFFERS].map((offer, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-black font-black text-2xl md:text-4xl font-[family-name:var(--font-bebas)] uppercase tracking-wide">
                {offer}
              </span>
              <span className="text-black text-2xl">✦</span> {/* Star Separator */}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
