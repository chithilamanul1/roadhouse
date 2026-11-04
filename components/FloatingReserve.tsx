"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingReserve() {
  const openWhatsApp = () => {
    const phone = "94777702044"; 
    const text = encodeURIComponent("Hi RoadHouse! I would like to book a table / inquire about food.");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <button 
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-black font-black py-3.5 px-6 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-105 transition-transform flex items-center gap-2.5 font-sans group border-2 border-white/20"
      title="Book a table on WhatsApp"
    >
      <MessageCircle size={22} className="group-hover:rotate-12 transition-transform text-black" />
      <span className="font-bold text-sm tracking-wide text-black">BOOK TABLE / WHATSAPP</span>
    </button>
  );
}
