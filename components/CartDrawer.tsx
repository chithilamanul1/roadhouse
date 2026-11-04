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
          className="fixed bottom-24 right-6 z-50 bg-[#ff5722] text-black font-black py-3.5 px-6 rounded-full shadow-[0_0_25px_rgba(255,87,34,0.6)] flex items-center gap-3 hover:scale-105 transition-transform"
        >
          <div className="relative">
            <ShoppingBag size={22} />
            <span className="absolute -top-2 -right-2 bg-black text-[#ff5722] text-xs font-mono font-bold rounded-full w-5 h-5 flex items-center justify-center border border-[#ff5722]">
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
              className="relative w-full max-w-md bg-[#0d0d0d] border-l border-white/10 h-full flex flex-col shadow-2xl z-10"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#050505]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-center text-[#ff5722]">
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-[family-name:var(--font-blackops)] text-white tracking-wide">
                      YOUR <span className="text-[#ff5722]">ORDER</span>
                    </h2>
                    <p className="text-xs font-mono text-neutral-400">
                      {totalCount} item{totalCount === 1 ? "" : "s"} selected
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Table / Order Location Selector */}
              <div className="p-4 bg-neutral-900/60 border-b border-white/10">
                <label className="block text-[11px] font-mono text-[#ff5722] uppercase tracking-wider font-bold mb-1.5">
                  Dining Location / Table
                </label>
                <select
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="w-full bg-[#050505] border border-white/20 rounded-lg p-2.5 text-sm font-bold text-white outline-none focus:border-[#ff5722]"
                >
                  {TABLES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-neutral-500">
                    <ShoppingBag size={48} className="mb-3 opacity-30 text-[#ff5722]" />
                    <p className="font-[family-name:var(--font-bebas)] text-xl text-white">Your tray is empty</p>
                    <p className="text-xs font-mono text-neutral-400 mt-1 max-w-xs">
                      Tap &quot;+ Add to Order&quot; on any dish in the menu to build your order!
                    </p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-neutral-900/80 border border-white/10 p-3.5 rounded-xl flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-white truncate">{item.name}</h4>
                        <p className="text-xs font-mono text-[#ff5722] mt-0.5">
                          Rs. {item.price.toLocaleString()} each
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-[#050505] border border-white/10 rounded-lg p-1 shrink-0">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="w-7 h-7 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-300 hover:text-white"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center font-mono font-bold text-sm text-white">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="w-7 h-7 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-300 hover:text-white"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Line Total & Remove */}
                      <div className="text-right shrink-0">
                        <p className="font-mono text-sm font-bold text-white">
                          Rs. {(item.price * item.qty).toLocaleString()}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[11px] text-neutral-500 hover:text-red-400 font-mono mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Special Instructions Note */}
              {items.length > 0 && (
                <div className="p-4 border-t border-white/10 bg-[#070707]">
                  <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    Special Kitchen Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    placeholder="e.g. Less spicy, extra sauce, ice in drink..."
                    className="w-full bg-[#050505] border border-white/10 p-2.5 rounded-lg text-xs font-mono text-white placeholder:text-neutral-600 outline-none focus:border-[#ff5722]"
                  />
                </div>
              )}

              {/* Footer / Send Button */}
              {items.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-[#050505] space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">Subtotal</span>
                    <span className="text-2xl font-[family-name:var(--font-bebas)] text-white tracking-wide">
                      Rs. {total.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={handleSendOrder}
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-black py-4 px-6 rounded-xl font-[family-name:var(--font-bebas)] text-xl tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all"
                  >
                    <Send size={20} /> Send Order to Kitchen (WhatsApp)
                  </button>

                  <div className="flex justify-between items-center text-[11px] text-neutral-500 font-mono">
                    <span>Direct to 077 770 2044</span>
                    <button onClick={clearCart} className="hover:text-red-400 underline">
                      Clear Tray
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