"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const MENU_HIGHLIGHTS = [
  { id: 1, name: "Double Smash Burger", price: "2,200", img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 2, name: "Spicy Pork Ribs", price: "3,500", img: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 3, name: "Seafood Platter", price: "6,000", img: "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 4, name: "Mojito Pitcher", price: "2,500", img: "https://images.pexels.com/photos/4784/alcohol-bar-party-cocktail.jpg?auto=compress&cs=tinysrgb&w=800" },
];

export default function InteractiveMenu() {
  const [activeImg, setActiveImg] = useState(MENU_HIGHLIGHTS[0].img);

  return (
    <section className="py-24 bg-transparent relative z-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left: The List */}
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-[#ff5722] font-mono mb-6 tracking-widest uppercase text-sm">Our Favorites</p>
          {MENU_HIGHLIGHTS.map((item) => (
            <div 
              key={item.id}
              onMouseEnter={() => setActiveImg(item.img)}
              className="border-b border-white/10 py-8 cursor-pointer group flex justify-between items-center hover:bg-white/5 transition-colors px-4"
            >
              <h3 className="text-3xl md:text-5xl font-[family-name:var(--font-bebas)] text-white group-hover:text-[#ff5722] transition-colors group-hover:translate-x-4 transform duration-300">
                {item.name}
              </h3>
              <span className="font-mono text-neutral-500 group-hover:text-white">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Right: The Changing Image */}
        <div className="w-full md:w-1/2 h-[500px] relative overflow-hidden rounded-lg">
           <div className="absolute inset-0 bg-black/20 z-10" />
           {/* FIXED IMAGE TAG */}
           <motion.img
             key={activeImg}
             src={activeImg}
             referrerPolicy="no-referrer"
             initial={{ scale: 1.1, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.5 }}
             className="w-full h-full object-cover"
             alt="Menu Preview"
           />
        </div>

      </div>
    </section>
  );
}
