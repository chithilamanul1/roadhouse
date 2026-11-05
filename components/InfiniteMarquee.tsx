"use client";

import { motion } from "framer-motion";

const OFFERS = [
  "NOW OPEN: DELICIOUS FOOD & COLD DRINKS DAILY",
  "BEST RESTAURANT NEAR KATUNAYAKE AIRPORT & SEEDUWA",
  "HOT BUTTER CUTTLEFISH & SPICY DEVILLED KOTTU",
  "FREE CUSTOMER PARKING FOR 15+ VEHICLES",
  "FRESH JUICE BAR: SHAKES, MOJITOS & COFFEE",
  "SCAN TABLE QR TO ORDER DIRECTLY TO YOUR SEAT",
];

export default function InfiniteMarquee() {
  return (
    <div className="w-full bg-[#ff5722] py-3.5 overflow-hidden relative z-30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex gap-8 items-center transform-gpu will-change-transform"
        >
          {[...OFFERS, ...OFFERS].map((offer, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span className="text-black font-black text-lg md:text-2xl font-[family-name:var(--font-bebas)] uppercase tracking-wider">
                {offer}
              </span>
              <span className="text-black text-base">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}