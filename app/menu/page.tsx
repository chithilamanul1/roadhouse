"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingReserve from "@/components/FloatingReserve";
import { getMasterData } from "@/lib/storage"; 
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/menuData";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Plus, Check, ShoppingBag, Search, Sparkles } from "lucide-react";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("starters");
  const [menuItems, setMenuItems] = useState<any[]>(MENU_ITEMS);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const { addToCart, tableNumber } = useCart();

  useEffect(() => {
    async function fetchMenu() {
      try {
        const data = await getMasterData();
        if (data && data.menu && data.menu.length > 0) {
          setMenuItems(data.menu);
        }
      } catch (e) {
        console.error("Using local menu fallback", e);
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, []);

  const handleAdd = (item: any) => {
    const numericPrice = typeof item.price === "string" 
      ? parseInt(item.price.replace(/[^0-9]/g, ""), 10) || 0 
      : item.price;

    addToCart({
      id: item.id || item.name,
      name: item.name,
      price: numericPrice,
      image: item.image,
      category: item.category,
    });

    setJustAdded(item.id || item.name);
    setTimeout(() => setJustAdded(null), 1500);
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeTab === "all" || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050811] text-[#E2E8F0]">
      <Navbar />
      <FloatingReserve />

      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">

        {/* TABLE QR BANNER (Shows if customer scanned QR at table) */}
        {tableNumber && tableNumber !== "Takeaway / Delivery" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/40 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#00D2FF] animate-ping" />
              <div>
                <p className="text-white font-bold text-sm">
                  Ordering for <span className="text-[#00D2FF] font-mono uppercase font-black">{tableNumber}</span>
                </p>
                <p className="text-xs text-neutral-400">
                  Select your dishes below and tap &quot;Send Order&quot; to send directly to the kitchen.
                </p>
              </div>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest bg-[#00D2FF] text-black px-3 py-1 font-black rounded">
              Dine In
            </span>
          </motion.div>
        )}

        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-[#00D2FF] font-mono text-xs tracking-[0.3em] uppercase mb-2">
            Fresh &amp; Made to Order
          </p>
          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-blackops)] text-white">
            OUR <span className="text-[#00D2FF]">MENU</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-lg mx-auto">
            Choose your food, add to your order, and send directly to our kitchen via WhatsApp.
          </p>

          {/* SEARCH BAR */}
          <div className="max-w-md mx-auto mt-6 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for kottu, burger, soup, juice..."
              className="w-full bg-[#0A1224] border border-[#00D2FF]/30 text-white pl-11 pr-4 py-3 rounded-full text-sm outline-none focus:border-[#00D2FF] placeholder:text-neutral-500 transition-colors"
            />
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex overflow-x-auto gap-3 mb-10 pb-4 no-scrollbar sticky top-20 z-40 bg-[#050811]/95 backdrop-blur py-3">
          <button
            onClick={() => setActiveTab("all")}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold uppercase text-xs tracking-wider transition-all border ${
              activeTab === "all"
                ? "bg-[#00D2FF] text-black border-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.4)]"
                : "bg-[#0A1224] text-neutral-400 border-white/10 hover:border-[#00D2FF]/50 hover:text-white"
            }`}
          >
            All Items
          </button>

          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold uppercase text-xs tracking-wider transition-all border ${
                activeTab === cat.id
                  ? "bg-[#00D2FF] text-black border-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.4)]"
                  : "bg-[#0A1224] text-neutral-400 border-white/10 hover:border-[#00D2FF]/50 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* DISHES GRID */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 text-neutral-500">
            <p className="text-xl font-[family-name:var(--font-bebas)] text-white">No dishes found</p>
            <p className="text-sm mt-1">Try another search or select another category above.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div
                  layout
                  key={item.id || i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="bg-[#0A1224] rounded-2xl overflow-hidden border border-white/5 hover:border-[#00D2FF]/40 transition-all duration-300 flex flex-col group shadow-lg hover:shadow-[0_0_25px_rgba(0,210,255,0.1)]"
                >
                  {/* Image */}
                  <div className="h-52 overflow-hidden relative bg-black/40">
                    <img 
                      src={item.image || "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800"} 
                      alt={item.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur border border-[#00D2FF]/30 px-3 py-1 rounded-full text-[#00D2FF] font-mono text-xs font-bold shadow-md">
                      Rs. {typeof item.price === "string" ? item.price : Number(item.price).toLocaleString()}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1.5 uppercase font-[family-name:var(--font-bebas)] tracking-wide group-hover:text-[#00D2FF] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                        {item.description || "Freshly made with authentic spices & quality ingredients."}
                      </p>
                    </div>

                    {/* Order Button */}
                    <button
                      onClick={() => handleAdd(item)}
                      className={`w-full py-3 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                        justAdded === (item.id || item.name)
                          ? "bg-emerald-500 text-black"
                          : "bg-[#00D2FF] text-black hover:bg-white hover:shadow-[0_0_15px_rgba(0,210,255,0.4)]"
                      }`}
                    >
                      {justAdded === (item.id || item.name) ? (
                        <>
                          <Check size={16} /> Added to Order!
                        </>
                      ) : (
                        <>
                          <Plus size={16} /> Add to Order
                        </>
                      )}
                    </button>
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
