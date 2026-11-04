"use client";

import { Send, Star, MessageSquare } from "lucide-react";

export default function SuggestionBox() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#070D1C] to-[#050811] text-white border-t border-[#00D2FF]/20" id="reviews">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Google Review CTA */}
        <div className="mb-14 bg-[#0C172E] border border-[#00D2FF]/30 p-10 rounded-3xl shadow-[0_0_40px_rgba(0,210,255,0.1)]">
          <div className="flex justify-center gap-1.5 text-amber-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} fill="currentColor" />
            ))}
          </div>

          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-blackops)] mb-3">
            DID YOU VISIT <span className="text-[#00D2FF]">ROADHOUSE?</span>
          </h2>
          <p className="text-neutral-300 font-sans text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            If you enjoyed our food and blue neon atmosphere, please leave us a 5-star Google review! Your review helps travellers and local food lovers find us.
          </p>

          <a
            href="https://share.google/HiEDjYVkfO7hPATl4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#00D2FF] text-black font-black px-10 py-4 uppercase tracking-wider hover:bg-white transition-all text-base md:text-lg rounded-xl shadow-[0_0_25px_rgba(0,210,255,0.4)]"
          >
            <Star size={20} fill="currentColor" />
            Write a Quick Google Review
          </a>
        </div>

        {/* Suggestion Box */}
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-[family-name:var(--font-blackops)] mb-2">
            HAVE A <span className="text-[#38BDF8]">DISH SUGGESTION?</span>
          </h3>
          <p className="text-neutral-400 font-sans text-sm mb-6">
            Tell us what meal or beverage you want to see on our menu. We listen to every guest!
          </p>

          <form
            action="https://formsubmit.co/roadhouseseeduwa@gmail.com"
            method="POST"
            className="flex flex-col sm:flex-row gap-3"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Customer Suggestion" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="suggestion"
              placeholder="I'd love to eat..."
              className="flex-1 p-3.5 bg-[#0C172E] border border-white/20 text-white placeholder:text-neutral-500 rounded-lg outline-none focus:border-[#00D2FF] transition-colors text-sm"
              required
            />
            <button
              type="submit"
              className="bg-[#00D2FF] text-black font-bold px-8 py-3.5 uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-lg text-sm"
            >
              Send <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
