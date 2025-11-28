import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-500 py-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-[family-name:var(--font-bebas)] text-white">ROAD HOUSE</h4>
          <p className="text-xs font-mono">EST. 2024 // SEEDUWA</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-[#ff5722] transition-colors"><Instagram size={24} /></a>
          <a href="#" className="hover:text-[#ff5722] transition-colors"><Facebook size={24} /></a>
        </div>

        <div className="text-center md:text-right text-xs font-mono">
          <p>© 2025 ROAD HOUSE.</p>
          <p>ALL RIGHTS RESERVED.</p>
        </div>
        
      </div>
    </footer>
  );
}
