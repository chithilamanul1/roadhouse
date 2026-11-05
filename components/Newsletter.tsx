"use client";

import { Send, Tag } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
         
         <div className="inline-flex items-center gap-2 bg-[#ff5722]/10 border border-[#ff5722]/40 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase text-[#ff5722] mb-4">
            <Tag size={14} /> VIP Offers &amp; Updates
         </div>

         <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-blackops)] mb-3 text-white">
            GET 10% OFF YOUR NEXT MEAL
         </h2>
         <p className="font-sans text-neutral-400 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Drop your email below to get discount coupons, weekend special menus, and live music announcements.
         </p>

         <form 
           action="https://formsubmit.co/roadhouseseeduwa@gmail.com" 
           method="POST"
           className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
         >
            <input type="hidden" name="_subject" value="New Customer Discount Subscriber" />
            <input type="hidden" name="_captcha" value="false" />

            <input 
              type="email" 
              name="email"
              placeholder="Enter your email address..." 
              className="flex-1 p-4 bg-neutral-900 border border-white/15 text-white placeholder:text-neutral-500 font-sans focus:border-[#ff5722] transition-colors outline-none rounded-xl text-sm"
              required
            />
            <button 
               type="submit"
               className="bg-[#ff5722] text-black font-black px-8 py-4 hover:bg-white transition-colors flex items-center justify-center gap-2 uppercase tracking-wide rounded-xl text-sm shadow-[0_0_15px_rgba(255,87,34,0.3)] shrink-0"
            >
               Join VIP Club <Send size={16} />
            </button>
         </form>

      </div>
    </section>
  );
}