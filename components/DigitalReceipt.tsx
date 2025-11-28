"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { X, ShoppingBag } from "lucide-react"; // Changed Printer to ShoppingBag
import { useEffect, useRef } from "react";

export default function DigitalReceipt() {
  const { items, total, isCartOpen, toggleCart, removeFromCart } = useCart();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current && isCartOpen) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [items, isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-[#f5f5f5] z-50 text-black shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-300 bg-white">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold uppercase font-[family-name:var(--font-bebas)] tracking-wider">Your Order</h2>
                <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 bg-[#f5f5f5]">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <ShoppingBag size={48} className="mb-4 opacity-50" />
                  <p className="text-sm font-medium">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-white p-4 rounded shadow-sm border border-gray-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-sm text-gray-800">
                          {item.qty}x {item.name}
                        </span>
                        <span className="font-semibold text-sm">{(item.price * item.qty).toLocaleString()} LKR</span>
                      </div>
                      <div className="flex justify-end">
                        <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-red-500 hover:text-red-700 font-medium"
                        >
                            Remove
                        </button>
                      </div>
                    </motion.div>
                  ))}
                  <div ref={bottomRef} />
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>{total.toLocaleString()} LKR</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Service Charge (10%)</span>
                  <span>{(total * 0.1).toLocaleString()} LKR</span>
                </div>
                <div className="flex justify-between text-xl font-bold border-t border-dashed border-gray-300 pt-4 mt-2">
                  <span>Total</span>
                  <span className="text-[#ff5722]">{ (total * 1.1).toLocaleString() } LKR</span>
                </div>
              </div>

              <button className="w-full bg-[#050505] text-white py-4 font-bold uppercase text-lg hover:bg-[#ff5722] transition-colors rounded-sm flex items-center justify-center gap-2">
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
