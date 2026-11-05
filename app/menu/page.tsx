"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import FloatingReserve from "@/components/FloatingReserve";
import { getMasterData } from "@/lib/storage";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/menuData";
import { useCart } from "@/context/CartContext";
import { Plus, Check, Search } from "lucide-react";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [menuItems, setMenuItems] = useState(MENU_ITEMS);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const { addToCart, tableNumber } = useCart();

  useEffect(() => {
    async function loadMenu() {
      try {
        const master = await getMasterData();
        if (master?.menu && master.menu.length > 0) {
          setMenuItems(master.menu);
        }
      } catch (e) {
        console.error("Failed to load custom menu:", e);
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, []);

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id || `dish-${item.name}`,
      name: item.name,
      price: item.price,
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
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0]">
      <Navbar />
      <FloatingReserve />

      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">

        {/* TABLE QR BANNER */}
        {tableNumber && tableNumber !== "Takeaway / Delivery" && (
          <div className="mb-8 p-4 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#ff5722] animate-ping" />
              <div>
                <p className="text-white font-bold text-sm">
                  Ordering for <span className="text-[#ff5722] font-mono uppercase font-black">{tableNumber}</span>
                </p>
                <p className="text-xs text-neutral-400">
                  Select your dishes below and tap &quot;Send Order&quot; to send directly to the kitchen.
                </p>
              </div>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest bg-[#ff5722] text-black px-3 py-1 font-black rounded">
              Dine In
            </span>
          </div>
        )}

        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-[#ff5722] font-mono text-xs tracking-[0.3em] uppercase mb-2 font-bold">
            Fresh &amp; Made to Order
          </p>
          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-blackops)] text-white">
            OUR <span className="text-[#ff5722]">MENU</span>
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
              className="w-full bg-neutral-900 border border-white/10 text-white pl-11 pr-4 py-3 rounded-full text-sm outline-none focus:border-[#ff5722] placeholder:text-neutral-500 transition-colors"
            />
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex overflow-x-auto gap-3 mb-10 pb-4 no-scrollbar sticky top-20 z-40 bg-[#050505]/95 backdrop-blur py-3">
          <button
            onClick={() => setActiveTab("all")}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold uppercase text-xs tracking-wider transition-all border ${
              activeTab === "all"
                ? "bg-[#ff5722] text-black border-[#ff5722] shadow-[0_0_15px_rgba(255,87,34,0.4)]"
                : "bg-neutral-900 text-neutral-400 border-white/10 hover:border-[#ff5722]/50 hover:text-white"
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
                  ? "bg-[#ff5722] text-black border-[#ff5722] shadow-[0_0_15px_rgba(255,87,34,0.4)]"
                  : "bg-neutral-900 text-neutral-400 border-white/10 hover:border-[#ff5722]/50 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* DISHES GRID (Pure CSS hardware accelerated, zero scroll jank) */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 text-neutral-500">
            <p className="text-xl font-[family-name:var(--font-bebas)]">No dishes found</p>
            <p className="text-sm mt-1">Try another search term or select &quot;All Items&quot;</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item: any) => {
              const isAdded = justAdded === (item.id || item.name);
              return (
                <div
                  key={item.id}
                  className="bg-neutral-900/80 border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff5722] transition-colors flex flex-col group shadow-lg"
                >
                  {/* Dish Image */}
                  <div className="h-48 overflow-hidden relative bg-black">
                    <img
                      src={item.image || "/images/real/real-patio-ambience.png"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-black/90 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                      <span className="font-mono text-sm font-bold text-[#ff5722]">
                        Rs. {item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white tracking-wide group-hover:text-[#ff5722] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-neutral-400 text-xs mt-1 mb-6 line-clamp-2 leading-relaxed">
                      {item.description || "Prepared fresh to order by our kitchen team."}
                    </p>

                    {/* Order Button */}
                    <div className="mt-auto">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className={`w-full py-3 px-4 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-all ${
                          isAdded
                            ? "bg-[#25D366] text-black"
                            : "bg-[#ff5722] hover:bg-white text-black shadow-[0_0_15px_rgba(255,87,34,0.3)]"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check size={16} /> Added to Order!
                          </>
                        ) : (
                          <>
                            <Plus size={16} /> + Add to Order
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}