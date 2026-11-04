"use client";

import { Send, Tag } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0070F3] via-[#00A3FF] to-[#00D2FF] text-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
         
         <div className="inline-flex items-center gap-2 bg-black/10 border border-black/20 px-4 py-1 rounded-full text-xs font-mono font-bold uppercase mb-4">
            <Tag size={14} /> VIP Offers &amp; Updates
         </div>

         <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-blackops)] mb-3">
            GET 10% OFF YOUR NEXT MEAL
         </h2>
         <p className="font-sans font-bold text-base md:text-lg mb-8 max-w-lg mx-auto opacity-90">
            Sign up with your email to receive special discounts, weekend specials, and live music announcements.
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
              placeholder="Enter your email address" 
              className="flex-1 p-4 bg-white/90 border-2 border-black placeholder:text-neutral-600 font-bold focus:bg-white transition-colors outline-none rounded-lg text-sm"
              required
            />
            <button 
               type="submit"
               className="bg-black text-[#00D2FF] font-black px-8 py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 uppercase tracking-wide rounded-lg text-sm"
            >
               Join Club <Send size={16} />
            </button>
         </form>

      </div>
    </section>
  );
}
