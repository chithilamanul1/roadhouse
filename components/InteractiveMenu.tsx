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
    <section className="py-24 bg-[#050811] relative z-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left: The List */}
        <div className="w-full md:w-1/2 space-y-3">
          <p className="text-[#00D2FF] font-mono tracking-widest uppercase text-xs font-bold">
            Customer Favorites
          </p>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-blackops)] text-white mb-6">
            WHAT EVERYONE <span className="text-[#00D2FF]">ORDERS</span>
          </h2>

          <div className="space-y-2">
            {MENU_HIGHLIGHTS.map((item) => (
              <div 
                key={item.id}
                onMouseEnter={() => setActiveItem(item)}
                onClick={() => setActiveItem(item)}
                className={`border-b border-white/10 p-5 rounded-xl cursor-pointer transition-all duration-300 flex justify-between items-center ${
                  activeItem.id === item.id 
                    ? "bg-[#0C172E] border-[#00D2FF]/40 shadow-[0_0_20px_rgba(0,210,255,0.15)]" 
                    : "hover:bg-white/5"
                }`}
              >
                <div>
                  <h3 className={`text-2xl md:text-3xl font-[family-name:var(--font-bebas)] transition-colors ${
                    activeItem.id === item.id ? "text-[#00D2FF]" : "text-white"
                  }`}>
                    {item.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">{item.desc}</p>
                </div>
                <span className="font-mono text-sm font-bold text-[#00D2FF]">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-white hover:text-[#00D2FF] font-bold text-sm tracking-wider uppercase transition-colors"
            >
              See Full Menu with 30+ Dishes <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right: The Changing Image */}
        <div className="w-full md:w-1/2 h-[450px] relative overflow-hidden rounded-2xl border border-[#00D2FF]/20 shadow-2xl bg-black">
           <motion.img
             key={activeItem.img}
             src={activeItem.img}
             referrerPolicy="no-referrer"
             initial={{ scale: 1.1, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.4 }}
             className="w-full h-full object-cover"
             alt={activeItem.name}
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
             <div>
               <p className="text-white font-[family-name:var(--font-bebas)] text-2xl tracking-wider">
                 {activeItem.name}
               </p>
               <p className="text-[#00D2FF] font-mono text-sm font-bold">
                 {activeItem.price}
               </p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
