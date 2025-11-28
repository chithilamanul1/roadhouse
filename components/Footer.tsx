import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-500 py-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Brand */}
        <div className="text-left">
          <h4 className="text-2xl font-[family-name:var(--font-blackops)] text-white">ROAD HOUSE</h4>
          <p className="text-xs font-mono text-[#ff5722]">EST. 2024 // SEEDUWA</p>
        </div>

        {/* Contact Info (The Ordinary Details) */}
        <div className="flex flex-col gap-2 font-mono text-sm">
           <div className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin size={14} className="text-[#ff5722]" />
              <span>24 Kotugoda Rd, Seeduwa</span>
           </div>
           <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-[#ff5722]" />
              <span>077 733 4078</span>
           </div>
           <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} className="text-[#ff5722]" />
              <span>roadhouseseeduwa@gmail.com</span>
           </div>
        </div>

        {/* Socials & Copyright */}
        <div className="text-left md:text-right">
          <div className="flex gap-4 mb-2 md:justify-end">
             <a href="#" className="hover:text-[#ff5722] transition-colors"><Instagram size={20} /></a>
             <a href="#" className="hover:text-[#ff5722] transition-colors"><Facebook size={20} /></a>
          </div>
          <p className="text-[10px] font-mono opacity-50">© 2025 ROAD HOUSE. ALL RIGHTS RESERVED.</p>
        </div>
        
      </div>
    </footer>
  );
}
