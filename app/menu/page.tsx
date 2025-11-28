"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingReserve from "@/components/FloatingReserve";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/lib/menuData";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("starters");

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <FloatingReserve />

      <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-bebas)] text-white mb-8 text-center">
          OUR <span className="text-[#ff5722]">MENU</span>
        </h1>

        {/* Scrollable Categories */}
        <div className="flex overflow-x-auto gap-4 mb-10 pb-4 no-scrollbar sticky top-20 z-40 bg-[#050505]/95 backdrop-blur py-4">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-bold uppercase text-sm transition-all border ${
                activeTab === cat.id
                  ? "bg-[#ff5722] text-black border-[#ff5722]"
                  : "bg-transparent text-neutral-400 border-neutral-800 hover:border-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg group"
              >
                {/* Image Area */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur px-3 py-1 rounded text-[#ff5722] font-bold">
                    {item.price} LKR
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-1 uppercase font-[family-name:var(--font-bebas)] tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-neutral-400 text-xs mb-4 min-h-[40px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}
