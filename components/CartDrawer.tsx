"use client";

import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, Trash2, ShoppingBag, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TABLES = [
  "Table 1", "Table 2", "Table 3", "Table 4", "Table 5", "Table 6",
  "Table 7", "Table 8", "Bar Counter", "Outdoor Seating", "Takeaway / Pickup"
];

export default function CartDrawer() {
  const {
    items,
    removeFromCart,
    addToCart,
    decreaseQty,
    clearCart,
    total,
    totalCount,
    isCartOpen,
    setIsCartOpen,
    tableNumber,
    setTableNumber,
    customerNote,
    setCustomerNote,
  } = useCart();

  const handleSendOrder = () => {
    if (items.length === 0) return;

    let message = `🍽️ *NEW ORDER — ROADHOUSE CAFÉ & RESTRO*\n`;
    message += `📍 *Order Type / Location:* ${tableNumber}\n`;
    message += `--------------------------------\n`;

    items.forEach((item) => {
      const lineTotal = item.price * item.qty;
      message += `• ${item.qty}x ${item.name} — Rs. ${lineTotal.toLocaleString()}\n`;
    });

    message += `--------------------------------\n`;
    message += `💵 *TOTAL: Rs. ${total.toLocaleString()}*\n`;

    if (customerNote.trim()) {
      message += `💬 *Special Instructions:* ${customerNote.trim()}\n`;
    }

    message += `\n_Sent via RoadHouse Digital Menu_`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/94777702044?text=${encoded}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* FLOATING CART BUTTON (BOTTOM RIGHT) */}
      {totalCount > 0 && !isCartOpen && (
        <motion.button
          initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-24 right-6 z-50 bg-[#00D2FF] text-black font-black py-3.5 px-6 rounded-full shadow-[0_0_25px_rgba(0,210,255,0.6)] flex items-center gap-3 hover:scale-105 transition-transform"
        >
          <div className="relative">
            <ShoppingBag size={22} />
            <span className="absolute -top-2 -right-2 bg-black text-[#00D2FF] text-xs font-mono font-bold rounded-full w-5 h-5 flex items-center justify-center border border-[#00D2FF]">
              {totalCount}
            </span>
          </div>
          <span className="font-[family-name:var(--font-bebas)] text-lg tracking-wider">
            VIEW ORDER (Rs. {total.toLocaleString()})
          </span>
        </motion.button>
      )}

      {/* DRAWER MODAL */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Sidebar Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="relative w-full max-w-md bg-[#0A1124] border-l border-[#00D2FF]/30 h-full flex flex-col shadow-2xl z-10"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#060B16]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF] flex items-center justify-center text-[#00D2FF]">
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-bebas)] text-white tracking-wider">
                      YOUR FOOD ORDER
                    </h3>
                    <p className="text-xs text-[#38BDF8] font-mono">
                      {totalCount} item{totalCount !== 1 ? "s" : ""} selected
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Table / Location Selector */}
                <div className="bg-[#0D1832] border border-[#00D2FF]/20 p-4 rounded-lg">
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-2 font-bold">
                    📍 Where are you sitting?
                  </label>
                  <select
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    className="w-full bg-[#060B16] border border-[#00D2FF]/40 text-white font-bold p-3 rounded text-sm outline-none focus:border-[#00D2FF]"
                  >
                    {TABLES.map((tbl) => (
                      <option key={tbl} value={tbl}>
                        {tbl}
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-neutral-400 mt-2">
                    Scanned at a table? Select your table number so the waiter brings food directly to you.
                  </p>
                </div>

                {/* Items List */}
                {items.length === 0 ? (
                  <div className="text-center py-16 text-neutral-500">
                    <ShoppingBag size={48} className="mx-auto mb-4 opacity-40 text-[#00D2FF]" />
                    <p className="text-lg font-[family-name:var(--font-bebas)] text-white">Your tray is empty</p>
                    <p className="text-sm mt-1">Tap &quot;Add to Order&quot; on any delicious dish from our menu.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#0D1832] border border-white/5 p-4 rounded-lg flex items-center justify-between gap-4"
                      >
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-sm">{item.name}</h4>
                          <p className="text-[#38BDF8] font-mono text-xs mt-0.5">
                            Rs. {item.price.toLocaleString()} each
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="w-7 h-7 rounded bg-[#060B16] border border-white/20 text-white flex items-center justify-center hover:border-[#00D2FF] hover:text-[#00D2FF]"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-6 text-center font-bold text-white font-mono text-sm">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => addToCart({ id: item.id, name: item.name, price: item.price })}
                            className="w-7 h-7 rounded bg-[#060B16] border border-white/20 text-white flex items-center justify-center hover:border-[#00D2FF] hover:text-[#00D2FF]"
                          >
                            <Plus size={12} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-2 text-neutral-500 hover:text-red-400 p-1"
                            title="Remove"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* Special Instructions Note */}
                    <div className="pt-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Any special requests? (Optional)
                      </label>
                      <input
                        type="text"
                        value={customerNote}
                        onChange={(e) => setCustomerNote(e.target.value)}
                        placeholder="e.g. Extra spicy, no onions, ice on the side..."
                        className="w-full bg-[#0D1832] border border-white/10 text-white p-3 rounded text-sm outline-none focus:border-[#00D2FF]"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-[#060B16] space-y-4">
                  <div className="flex justify-between items-center text-white">
                    <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">TOTAL</span>
                    <span className="font-[family-name:var(--font-bebas)] text-3xl text-[#00D2FF]">
                      Rs. {total.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={handleSendOrder}
                    className="w-full bg-[#25D366] text-black font-black font-[family-name:var(--font-bebas)] text-xl py-4 rounded tracking-wider hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                  >
                    <Send size={18} />
                    SEND ORDER TO KITCHEN (WHATSAPP)
                  </button>

                  <div className="flex justify-between items-center text-[11px] text-neutral-500">
                    <span>Direct order to RoadHouse kitchen</span>
                    <button
                      onClick={clearCart}
                      className="text-neutral-400 hover:text-red-400 underline"
                    >
                      Clear All
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
