"use client";

import { motion } from "framer-motion";

const OFFERS = [
  "NOW OPEN: Delicious Food & Cool Drinks Daily",
  "BEST RESTAURANT NEAR KATUNAYAKE AIRPORT & SEEDUWA",
  "HOT BUTTER CUTTLEFISH & SPICY DEVILLED KOTTU",
  "FREE CUSTOMER PARKING FOR 15+ VEHICLES",
  "FRESH JUICE BAR: Shakes, Mojitos & Coffee",
  "SCAN TABLE QR TO ORDER DIRECTLY TO YOUR SEAT",
];

export default function InfiniteMarquee() {
  return (
    <div className="w-full bg-[#ff5722] py-3.5 overflow-hidden relative z-30 shadow-[0_0_20px_rgba(255,87,34,0.4)]">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
          className="flex gap-12 items-center"
        >
          {[...OFFERS, ...OFFERS, ...OFFERS].map((offer, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-black font-black text-xl md:text-3xl font-[family-name:var(--font-bebas)] uppercase tracking-wider">
                {offer}
              </span>
              <span className="text-black text-xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}