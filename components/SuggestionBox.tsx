"use client";

import { Send, Star, MessageSquare } from "lucide-react";

export default function SuggestionBox() {
  return (
    <section className="py-20 bg-[#0a0a0a] text-white border-t border-white/10" id="reviews">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Google Review CTA */}
        <div className="mb-14 bg-neutral-900/60 border border-white/10 p-10 rounded-3xl shadow-[0_0_40px_rgba(255,87,34,0.1)]">
          <div className="flex justify-center gap-1.5 text-amber-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} fill="currentColor" />
            ))}
          </div>

          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-blackops)] mb-3">
            DID YOU VISIT <span className="text-[#ff5722]">ROADHOUSE?</span>
          </h2>
          <p className="text-neutral-300 font-sans text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            If you enjoyed our food and atmosphere, please leave us a 5-star Google review! Your review helps travellers and local food lovers find us.
          </p>

          <a
            href="https://share.google/HiEDjYVkfO7hPATl4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#ff5722] text-black font-black px-10 py-4 uppercase tracking-wider hover:bg-white transition-all text-base md:text-lg rounded-xl shadow-[0_0_25px_rgba(255,87,34,0.4)]"
          >
            <Star size={20} fill="currentColor" />
            Write a Quick Google Review
          </a>
        </div>

        {/* Suggestion Box */}
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-[family-name:var(--font-blackops)] mb-2">
            HAVE A <span className="text-[#ff5722]">DISH SUGGESTION?</span>
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
            <input
              type="text"
              name="suggestion"
              placeholder="e.g. Crispy Honey Chicken Wings..."
              className="flex-1 bg-black/60 border border-white/20 p-4 rounded-xl text-white font-mono text-sm placeholder:text-neutral-600 outline-none focus:border-[#ff5722]"
              required
            />
            <button
              type="submit"
              className="bg-[#ff5722] text-black font-black px-8 py-4 uppercase tracking-wider text-sm rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              <span>Send</span>
              <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}