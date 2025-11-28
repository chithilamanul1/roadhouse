"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { X, Printer } from "lucide-react";
import { useEffect, useRef } from "react";

export default function DigitalReceipt() {
  const { items, total, isCartOpen, toggleCart, removeFromCart } = useCart();
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom like a real printer
  useEffect(() => {
    if (bottomRef.current && isCartOpen) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [items, isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
          />

          {/* The Receipt Paper */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-[#e0e0e0] z-50 text-black font-mono shadow-2xl flex flex-col"
            style={{
                // "Dirty Paper" noise texture
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
            }}
          >
            {/* Header */}
            <div className="p-6 border-b-2 border-dashed border-black/20 bg-[#d6d6d6]">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-black tracking-tighter uppercase font-[family-name:var(--font-bebas)]">Road House</h2>
                  <p className="text-[10px] text-neutral-600">SEEDUWA // AIRPORT RD</p>
                  <p className="text-[10px] text-neutral-600">TERMINAL: 01 // ONLINE</p>
                </div>
                <button onClick={toggleCart} className="p-2 hover:bg-black/10 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Scrollable Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-neutral-400 opacity-50">
                  <Printer size={48} className="mb-4" />
                  <p className="text-sm uppercase tracking-widest">Awaiting Input...</p>
                </div>
              ) : (
                <div className="space-y-4">
                    <div className="flex justify-between text-xs border-b border-black pb-2 mb-4 font-bold">
                        <span>ITEM</span>
                        <span>COST</span>
                    </div>
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="group"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="uppercase font-bold max-w-[200px] leading-tight text-sm">
                            {item.qty}x {item.name}
                          </span>
                          <span className="font-bold text-sm">{(item.price * item.qty).toLocaleString()} LKR</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] text-neutral-500">#{item.id.substring(0,6).toUpperCase()}</span>
                            <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-[10px] text-red-600 underline opacity-0 group-hover:opacity-100 transition-opacity uppercase"
                            >
                                [Remove]
                            </button>
                        </div>
                        <div className="w-full h-[1px] bg-black/10 mt-2" />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <div ref={bottomRef} />
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-[#d6d6d6] border-t-2 border-black relative">
              {/* Jagged Edge Effect */}
              <div 
                className="absolute -top-3 left-0 w-full h-3 bg-[#e0e0e0]" 
                style={{
                    maskImage: 'linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(-45deg, transparent 50%, black 50%)',
                    maskSize: '10px 10px',
                    WebkitMaskImage: 'linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(-45deg, transparent 50%, black 50%)',
                    WebkitMaskSize: '10px 10px',
                }}
              />

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm text-neutral-600">
                  <span>SUBTOTAL</span>
                  <span>{total.toLocaleString()} LKR</span>
                </div>
                <div className="flex justify-between text-sm text-neutral-600">
                  <span>SVC CHG (10%)</span>
                  <span>{(total * 0.1).toLocaleString()} LKR</span>
                </div>
                <div className="flex justify-between text-2xl font-black border-t-2 border-black border-dashed pt-2 mt-2 font-[family-name:var(--font-bebas)]">
                  <span>TOTAL</span>
                  <span className="text-[#ff5722]">{ (total * 1.1).toLocaleString() } LKR</span>
                </div>
              </div>

              <button className="w-full bg-[#050505] text-[#e0e0e0] py-4 font-black uppercase text-lg hover:bg-[#ff5722] hover:text-black transition-all flex items-center justify-center gap-2 group font-[family-name:var(--font-bebas)] tracking-wide">
                <span>Confirm Order</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <p className="text-center text-[10px] mt-4 font-mono opacity-60">THANK YOU FOR SMOKING</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
