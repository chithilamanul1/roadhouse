import HeroWow from "@/components/HeroWow";
import LaunchControl from "@/components/LaunchControl";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import InteractiveMenu from "@/components/InteractiveMenu";
import FeaturedSpecials from "@/components/FeaturedSpecials";
import SuggestionBox from "@/components/SuggestionBox";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

// The New "Ordinary" Components
import ParkingInfo from "@/components/ParkingInfo";
import PhotoGallery from "@/components/PhotoGallery";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505]">
      
      {/* 1. HERO & INTRO */}
      <HeroWow />
      <LaunchControl />
      
      <div className="-mt-10 relative z-40">
        <InfiniteMarquee />
      </div>

      {/* 2. FOOD SECTION */}
      <InteractiveMenu />
      <FeaturedSpecials />

      {/* 3. FACILITIES & VIBE (Clean Versions) */}
      <PhotoGallery />
      <ParkingInfo />

      {/* 4. ENGAGEMENT (Clean Versions) */}
      <SuggestionBox />
      <Newsletter />

      {/* 5. INFO */}
      <LocationSection />
      <Footer />
      
    </div>
  );
}
