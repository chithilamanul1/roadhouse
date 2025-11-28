import HeroWow from "@/components/HeroWow";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import FeaturedSpecials from "@/components/FeaturedSpecials";
import InteractiveMenu from "@/components/InteractiveMenu"; // NEW
import LocationSection from "@/components/LocationSection"; // Re-add location
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      
      {/* 1. Kinetic Hero */}
      <HeroWow />

      {/* 2. Breaking News Ticker */}
      <div className="-mt-10 relative z-40">
        <InfiniteMarquee />
      </div>

      {/* 3. The Interactive "favorites" list */}
      <InteractiveMenu />

      {/* 4. The Horizontal Specials Scroll */}
      <FeaturedSpecials />

      {/* 5. Location Map */}
      <LocationSection />

      {/* 6. Footer */}
      <Footer />
      
    </div>
  );
}
