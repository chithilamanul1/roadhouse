import HeroWow from "@/components/HeroWow";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import FeaturedSpecials from "@/components/FeaturedSpecials";
import Footer from "@/components/Footer";

// We import MenuGrid from previous steps, but wrap it for visuals
import MenuGrid from "@/components/MenuGrid"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505]">
      
      {/* 1. Kinetic Hero */}
      <HeroWow />

      {/* 2. Breaking News Ticker */}
      <div className="-mt-10 relative z-40">
        <InfiniteMarquee />
      </div>

      {/* 3. The Highlight Reel (Horizontal Scroll) */}
      <FeaturedSpecials />

      {/* 4. The Full Grill (Grid) */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
            <h2 className="text-4xl font-[family-name:var(--font-bebas)] text-white">THE FULL <span className="text-[#ff5722]">LINEUP</span></h2>
            <p className="text-neutral-500 mt-2">Burgers • Grills • Rice • Juice</p>
        </div>
        <MenuGrid />
      </section>

      {/* 5. Footer */}
      <Footer />
      
    </div>
  );
}
