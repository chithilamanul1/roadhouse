"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MENU_HIGHLIGHTS = [
  { 
    id: 1, 
    name: "Double Smash Burger", 
    price: "Rs. 2,200", 
    desc: "Juicy beef patties with melted cheese and crispy fries",
    img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 2, 
    name: "Hot Butter Cuttlefish", 
    price: "Rs. 1,800", 
    desc: "Crispy battered cuttlefish tossed in spicy butter and chillies",
    img: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 3, 
    name: "Spicy Devilled Kottu", 
    price: "Rs. 1,400", 
    desc: "Chopped flatbread stir-fried with meat, eggs, and authentic spices",
    img: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 4, 
    name: "Mixed Seafood Rice", 
    price: "Rs. 1,600", 
    desc: "Fragrant wok-fried basmati rice with prawns, calamari and chili paste",
    img: "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 5, 
    name: "Fresh Passion Mojito", 
    price: "Rs. 750", 
    desc: "Chilled tropical passion fruit, mint leaves, and sparkling lime",
    img: "https://images.pexels.com/photos/4784/alcohol-bar-party-cocktail.jpg?auto=compress&cs=tinysrgb&w=800" 
  },
];

export default function InteractiveMenu() {
  const [activeItem, setActiveItem] = useState(MENU_HIGHLIGHTS[0]);

  return (
    <section className="py-24 bg-[#050505] relative z-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left: The List */}
        <div className="w-full md:w-1/2 space-y-3">
          <p className="text-[#ff5722] font-mono tracking-widest uppercase text-xs font-bold">
            Customer Favorites
          </p>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-blackops)] text-white mb-6">
            WHAT EVERYONE <span className="text-[#ff5722]">ORDERS</span>
          </h2>

          <div className="space-y-2">
            {MENU_HIGHLIGHTS.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveItem(item)}
                onClick={() => setActiveItem(item)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  activeItem.id === item.id
                    ? "bg-neutral-900 border-[#ff5722] shadow-[0_0_20px_rgba(255,87,34,0.15)]"
                    : "bg-transparent border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className={`text-xl font-[family-name:var(--font-bebas)] tracking-wide transition-colors ${
                    activeItem.id === item.id ? "text-[#ff5722]" : "text-white"
                  }`}>
                    {item.name}
                  </h3>
                  <span className="font-mono text-sm font-bold text-white">
                    {item.price}
                  </span>
                </div>
                <p className="text-neutral-400 text-xs mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-[#ff5722] text-black font-black text-sm uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-white transition-all shadow-[0_0_15px_rgba(255,87,34,0.3)]"
            >
              <span>See Full Menu &amp; Order Online</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right: Active Preview Card */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-[#ff5722]/30 shadow-2xl group"
          >
            <img
              src={activeItem.img}
              alt={activeItem.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[#ff5722] font-mono text-xs font-bold uppercase tracking-widest bg-black/80 px-3 py-1 rounded-full border border-white/10">
                Fresh &amp; Hot
              </span>
              <h3 className="text-3xl font-[family-name:var(--font-bebas)] text-white mt-2">
                {activeItem.name}
              </h3>
              <p className="text-neutral-300 text-sm mt-1">
                {activeItem.desc}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}