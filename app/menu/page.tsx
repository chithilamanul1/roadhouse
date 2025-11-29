"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingReserve from "@/components/FloatingReserve";
import { getMasterData } from "@/lib/storage"; 
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  { id: "starters", label: "Starters" },
  { id: "subs_burgers", label: "Subs/Burgers" },
  { id: "mains", label: "BBQ & Grill" },
  { id: "rice_kottu", label: "Rice/Kottu" },
  { id: "portions", label: "Portions" },
  { id: "drinks", label: "Drinks" },
  { id: "dessert", label: "Dessert" },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("starters");
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMenu() {
        const data = await getMasterData();
        if (data && data.menu) {
            setMenuItems(data.menu);
        }
        setLoading(false);
    }
    fetchMenu();
  }, []);

  const filteredItems = menuItems.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <FloatingReserve />

      <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-blackops)] text-white mb-8 text-center">
          OUR <span className="text-[#ff5722]">MENU</span>
        </h1>

        <div className="flex overflow-x-auto gap-4 mb-10 pb-4 no-scrollbar sticky top-20 z-40 bg-[#050505]/95 backdrop-blur py-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-bold uppercase text-sm transition-all border ${
                activeTab === cat.id ? "bg-[#ff5722] text-black border-[#ff5722]" : "bg-transparent text-neutral-400 border-neutral-800 hover:border-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
            <div className="text-center text-white font-mono animate-pulse mt-20">LOADING LIVE MENU...</div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
                {filteredItems.map((item, i) => (
                <motion.div
                    layout
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg group border border-white/5"
                >
                    <div className="h-48 overflow-hidden relative">
                    <img 
                        src={item.image || "https://via.placeholder.com/400x300?text=No+Image"} 
                        alt={item.name} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur px-3 py-1 rounded text-[#ff5722] font-bold">
                        {item.price} LKR
                    </div>
                    </div>

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
            </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
