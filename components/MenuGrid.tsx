"use client";

import { motion } from "framer-motion";

const MOCK_MENU = [
  { id: "01", name: "Classic Chicken Burger", price: 1800, desc: "Grilled chicken patty with cheese and lettuce." },
  { id: "02", name: "Iced Americano", price: 800, desc: "Chilled espresso with water and ice." },
  { id: "03", name: "BBQ Pork Ribs", price: 3200, desc: "Slow-cooked ribs with BBQ glaze." },
  { id: "04", name: "Cheesy Fries", price: 900, desc: "French fries topped with melted cheese." },
  { id: "05", name: "Mixed Fried Rice", price: 1500, desc: "Sri Lankan style wok-fried rice." },
  { id: "06", name: "Spicy Seafood Pasta", price: 2100, desc: "Penne pasta in a spicy tomato sauce." },
];

export default function MenuGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 max-w-7xl mx-auto">
      {MOCK_MENU.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-neutral-900/50 border border-white/10 p-6 hover:border-[#ff5722] transition-colors relative overflow-hidden rounded-md group"
        >
          <div className="flex justify-between items-start mb-2">
             <h3 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-white group-hover:text-[#ff5722] transition-colors">{item.name}</h3>
             <span className="text-[#ff5722] font-bold text-lg">{item.price}</span>
          </div>
          
          <p className="text-neutral-400 font-sans text-sm mb-6 min-h-[40px]">{item.desc}</p>
          
          {/* Changed Button: Now purely aesthetic/informative, or leads to a Gallery */}
          <div className="w-full bg-white/5 text-neutral-500 font-mono text-xs py-3 text-center uppercase rounded-sm border border-white/5">
            Dine-In Only
          </div>
        </motion.div>
      ))}
    </div>
  );
}
