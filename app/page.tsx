import HeroWow from "@/components/HeroWow";
import LaunchControl from "@/components/LaunchControl";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import InteractiveMenu from "@/components/InteractiveMenu";
import FeaturedSpecials from "@/components/FeaturedSpecials";
import ParkingInfo from "@/components/ParkingInfo";
import PhotoGallery from "@/components/PhotoGallery";
import SuggestionBox from "@/components/SuggestionBox";
import Newsletter from "@/components/Newsletter";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

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

      {/* 3. FACILITIES & VIBE */}
      <PhotoGallery />
      <ParkingInfo />

      {/* 4. ENGAGEMENT */}
      <SuggestionBox />
      <Newsletter />

      {/* 5. INFO */}
      <LocationSection />
      <Footer />
      
    </div>
  );
}
