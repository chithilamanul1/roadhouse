"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      
      <div className="min-h-screen flex flex-col md:flex-row pt-24">
         
         {/* LEFT: INFO PANEL */}
         <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-20 flex flex-col justify-center border-r border-white/5">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
               <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-blackops)] text-white mb-8">
                  CONTACT <span className="text-[#ff5722]">BASE</span>
               </h1>

               <div className="space-y-10 mb-12">
                  {/* Phone */}
                  <div>
                     <p className="font-mono text-neutral-500 text-xs mb-1 tracking-widest">HOTLINE</p>
                     <a href="tel:+94777702044" className="flex items-center gap-3 text-2xl md:text-3xl font-[family-name:var(--font-bebas)] text-white hover:text-[#ff5722] transition-colors">
                        <Phone size={24} />
                        077 770 2044
                     </a>
                  </div>

                  {/* Email */}
                  <div>
                     <p className="font-mono text-neutral-500 text-xs mb-1 tracking-widest">EMAIL</p>
                     <a href="mailto:roadhouseseeduwa@gmail.com" className="flex items-center gap-3 text-xl md:text-2xl font-[family-name:var(--font-bebas)] text-white hover:text-[#ff5722] transition-colors break-all">
                        <Mail size={24} />
                        roadhouseseeduwa@gmail.com
                     </a>
                  </div>

                  {/* Address */}
                  <div>
                     <p className="font-mono text-neutral-500 text-xs mb-1 tracking-widest">LOCATION</p>
                     <div className="flex items-start gap-3 text-xl md:text-2xl font-[family-name:var(--font-bebas)] text-white">
                        <MapPin size={24} className="text-[#ff5722] mt-1 shrink-0" />
                        <span>24 Kotugoda Rd,<br/>Seeduwa, Sri Lanka.</span>
                     </div>
                  </div>
               </div>

               {/* Quick Message Form */}
               <form 
                 action="https://formsubmit.co/roadhouseseeduwa@gmail.com"
                 method="POST"
                 className="space-y-4"
               >
                  <input type="hidden" name="_subject" value="Contact Page Inquiry" />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <input 
                    type="text" 
                    name="message" 
                    placeholder="SEND A QUICK MESSAGE..." 
                    className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder:text-neutral-600 focus:border-[#ff5722] outline-none font-mono text-sm"
                    required 
                  />
                  <button className="bg-[#ff5722] text-black font-bold px-6 py-3 uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center gap-2">
                     Transmit <Send size={16} />
                  </button>
               </form>

            </motion.div>
         </div>

         {/* RIGHT: MAP VISUAL */}
         <div className="w-full md:w-1/2 bg-neutral-900 relative min-h-[50vh] overflow-hidden group">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63359.39050967393!2d79.85411774999999!3d7.118683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c63236701%3A0x6095907409c2565!2sSeeduwa!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
               className="absolute inset-0 w-full h-full opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 invert"
               style={{ border: 0 }} 
               loading="lazy"
            ></iframe>
            
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            
            <div className="absolute bottom-8 left-8 bg-black/90 backdrop-blur border border-[#ff5722] p-4 pointer-events-none">
               <p className="font-mono text-[#ff5722] text-xs animate-pulse">● LIVE SATELLITE FEED</p>
            </div>
         </div>

      </div>

      <Footer />
    </div>
  );
}
