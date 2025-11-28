"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      
      <div className="min-h-screen flex flex-col md:flex-row pt-24">
         
         {/* LEFT: INFO PANEL */}
         <div className="w-full md:w-1/2 p-6 md:p-20 flex flex-col justify-center border-r border-white/5">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
               <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-blackops)] text-white mb-12">
                  ESTABLISH<br/><span className="text-[#ff5722]">UPLINK</span>
               </h1>

               <div className="space-y-10">
                  {/* Phone */}
                  <div className="group">
                     <p className="font-mono text-neutral-500 text-xs mb-2">HOTLINE</p>
                     <a href="tel:+94777334078" className="flex items-center gap-4 text-3xl md:text-4xl font-[family-name:var(--font-bebas)] text-white group-hover:text-[#ff5722] transition-colors">
                        <Phone size={32} />
                        077 733 4078
                     </a>
                     <p className="text-neutral-600 text-xs mt-1 font-mono">More lines coming soon...</p>
                  </div>

                  {/* Email (Added this) */}
                  <div className="group">
                     <p className="font-mono text-neutral-500 text-xs mb-2">EMAIL FREQUENCY</p>
                     <a href="mailto:roadhouseseeduwa@gmail.com" className="flex items-center gap-4 text-xl md:text-2xl font-[family-name:var(--font-bebas)] text-white group-hover:text-[#ff5722] transition-colors">
                        <Mail size={28} />
                        roadhouseseeduwa@gmail.com
                     </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="group">
                     <p className="font-mono text-neutral-500 text-xs mb-2">SECURE CHAT</p>
                     <a 
                        href="https://wa.me/94777334078" 
                        target="_blank"
                        className="flex items-center gap-4 text-3xl md:text-4xl font-[family-name:var(--font-bebas)] text-[#25D366] group-hover:text-white transition-colors"
                     >
                        <MessageCircle size={32} />
                        OPEN WHATSAPP
                     </a>
                  </div>

                  {/* Address */}
                  <div className="group">
                     <p className="font-mono text-neutral-500 text-xs mb-2">BASE LOCATION</p>
                     <div className="flex items-start gap-4">
                        <MapPin size={32} className="text-[#ff5722] mt-1" />
                        <div>
                           <p className="text-xl font-[family-name:var(--font-bebas)] text-white">SEEDUWA HQ</p>
                           <p className="font-mono text-sm text-neutral-400">24 Kotugoda Rd,<br/>Seeduwa, Sri Lanka.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>

         {/* RIGHT: MAP VISUAL */}
         <div className="w-full md:w-1/2 bg-neutral-900 relative min-h-[50vh] overflow-hidden group">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.815579986303!2d79.882!3d7.128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjQgS290dWdvZGEgUmQsIFNlZWR1d2E!5e0!3m2!1sen!2slk!4v1625000000000!5m2!1sen!2slk" 
               className="absolute inset-0 w-full h-full opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 invert"
               style={{ border: 0 }} 
               loading="lazy"
            ></iframe>
            
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 border-[20px] border-[#050505] pointer-events-none" />
            
            <div className="absolute bottom-10 left-10 bg-black/80 backdrop-blur border border-[#ff5722] p-4 pointer-events-none">
               <p className="font-mono text-[#ff5722] text-xs animate-pulse">● LIVE SATELLITE FEED</p>
            </div>
         </div>

      </div>

      <Footer />
    </div>
  );
}
