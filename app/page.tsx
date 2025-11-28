import MenuGrid from "@/components/MenuGrid";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505]">
      
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        <div className="z-10 text-center px-4">
          <p className="text-[#ff5722] font-mono text-sm md:text-base tracking-[0.2em] mb-4 animate-pulse">
            Eat N Go
          </p>
          <h1 className="text-7xl md:text-[10rem] font-[family-name:var(--font-bebas)] text-[#e0e0e0] leading-[0.85] tracking-tighter">
            ROAD<br/>HOUSE
          </h1>
          <p className="text-neutral-400 mt-6 max-w-md mx-auto font-sans">
            Premium Grill & Cafe. Seeduwa's designated pitstop
          </p>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="py-20 bg-[#050505] relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-[family-name:var(--font-bebas)] text-white">THE <span className="text-[#ff5722] underline decoration-4 underline-offset-8">GRILL</span></h2>
        </div>
        <MenuGrid />
      </section>

      {/* LOCATION SECTION */}
      <LocationSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
