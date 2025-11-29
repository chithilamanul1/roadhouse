import HeroWow from "@/components/HeroWow";
import LaunchControl from "@/components/LaunchControl";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import InteractiveMenu from "@/components/InteractiveMenu";
import FeaturedSpecials from "@/components/FeaturedSpecials";
import PhotoGallery from "@/components/PhotoGallery";
import ParkingInfo from "@/components/ParkingInfo";
import OpeningHours from "@/components/OpeningHours";
import BrandTicker from "@/components/BrandTicker";
import SuggestionBox from "@/components/SuggestionBox";
import Newsletter from "@/components/Newsletter";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505]">
      
      {/* 1. THE HYPE (Hero & Status) */}
      <HeroWow />
      <LaunchControl />
      
      {/* 2. THE TICKER */}
      <div className="-mt-10 relative z-40">
        <InfiniteMarquee />
      </div>

      {/* 3. THE FOOD (Menu & Signatures) */}
      <InteractiveMenu />
      <FeaturedSpecials />

      {/* 4. THE VIBE (Gallery & Parking) */}
      <PhotoGallery />
      <ParkingInfo />

      {/* 5. OPERATIONS (Hours & Partners) */}
      <OpeningHours />
      <BrandTicker />

      {/* 6. ENGAGEMENT (Feedback & Email) */}
      <SuggestionBox />
      <Newsletter />

      {/* 7. FINAL INFO (Map & Footer) */}
      <LocationSection />
      <Footer />
      
    </div>
  );
}
