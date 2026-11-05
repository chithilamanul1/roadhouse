"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";

const MENU_HIGHLIGHTS = [
  { 
    id: 1, 
    name: "Double Smash Burger", 
    price: "Rs. 2,200", 
    desc: "Juicy beef patties with melted cheese and crispy seasoned fries",
    img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 2, 
    name: "Hot Butter Cuttlefish", 
    price: "Rs. 1,800", 
    desc: "Crispy battered cuttlefish tossed in spicy butter and green chillies",
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
    desc: "Wok-fried fragrant basmati rice with fresh prawns, calamari and chili paste",
    img: "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 5, 
    name: "Fresh Passion Mojito", 
    price: "Rs. 750", 
    desc: "Chilled tropical passion fruit, fresh mint, and sparkling lime soda",
    img: "https://images.pexels.com/photos/4784/alcohol-bar-party-cocktail.jpg?auto=compress&cs=tinysrgb&w=800" 
  },
];

export default function InteractiveMenu() {
  const [activeItem, setActiveItem] = useState(MENU_HIGHLIGHTS[0]);

  return (
    <section className="py-24 bg-[#050505] relative z-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left: The Early Style Big Typography List */}
        <div className="w-full md:w-1/2">
          <p className="text-[#ff5722] font-mono tracking-widest uppercase text-xs font-bold mb-3">
            Customer Favorites
          </p>
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-blackops)] text-white mb-8 leading-none">
            WHAT EVERYONE <span className="text-[#ff5722]">ORDERS</span>
          </h2>

          <div className="divide-y divide-white/10">
            {MENU_HIGHLIGHTS.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveItem(item)}
                onClick={() => setActiveItem(item)}
                className={`py-5 cursor-pointer group flex justify-between items-center transition-all ${
                  activeItem.id === item.id ? "bg-white/5 px-4 rounded-xl" : "hover:px-2"
                }`}
              >
                <div>
                  <h3 className={`text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-bebas)] tracking-wide transition-all group-hover:text-[#ff5722] group-hover:translate-x-2 ${
                    activeItem.id === item.id ? "text-[#ff5722] translate-x-2" : "text-white"
                  }`}>
                    {item.name}
                  </h3>
                  <p className="text-neutral-400 text-xs mt-0.5 line-clamp-1">
                    {item.desc}
                  </p>
                </div>
                <span className="font-mono text-sm sm:text-base font-bold text-white shrink-0 ml-4">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 bg-[#ff5722] text-black font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(255,87,34,0.3)]"
            >
              <span>See Full Menu &amp; Order Online</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right: Dynamic High-Performance Preview Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-[460px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-900 group">
            <img
              src={activeItem.img}
              alt={activeItem.name}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-black bg-[#ff5722] font-mono text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-2">
                Fresh &amp; Made to Order
              </span>
              <h3 className="text-3xl font-[family-name:var(--font-bebas)] text-white">
                {activeItem.name}
              </h3>
              <p className="text-neutral-300 text-xs mt-1">
                {activeItem.desc}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}