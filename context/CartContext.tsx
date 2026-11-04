"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
  category?: string;
};

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "qty">) => void;
  decreaseQty: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  total: number;
  totalCount: number;
  toggleCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  tableNumber: string;
  setTableNumber: (table: string) => void;
  customerNote: string;
  setCustomerNote: (note: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [tableNumber, setTableNumber] = useState("Takeaway / Delivery");
  const [customerNote, setCustomerNote] = useState("");

  // Check URL query parameters for ?table=X on load (when scanned via QR code)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tableParam = params.get("table");
      if (tableParam) {
        setTableNumber(`Table ${tableParam.toUpperCase()}`);
      }
    }
  }, []);

  const addToCart = (newItem: Omit<CartItem, "qty">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id);
      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...newItem, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const decreaseQty = (id: string) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalCount = items.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        decreaseQty,
        removeFromCart,
        clearCart,
        total,
        totalCount,
        toggleCart,
        isCartOpen,
        setIsCartOpen,
        tableNumber,
        setTableNumber,
        customerNote,
        setCustomerNote,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
