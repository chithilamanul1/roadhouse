"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingReserve() {
  const openWhatsApp = () => {
    // Your Real Number: 077 733 4078
    const phone = "94777334078"; 
    const text = encodeURIComponent("Hi Road House, I would like to make a reservation/order.");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <button 
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white font-bold py-4 px-6 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center gap-3 font-sans group"
    >
      <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
      <span className="tracking-wide">WHATSAPP US</span>
    </button>
  );
}
