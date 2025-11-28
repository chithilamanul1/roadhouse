import Hero from "@/components/Hero";
import FlightBoard from "@/components/FlightBoard";
import MenuGrid from "@/components/MenuGrid";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen selection:bg-brand-orange selection:text-black">

      {/* 1. The Hacker/Industrial Hero Section */}
      <Hero />

      {/* 2. The Seeduwa Airport-Style Menu Board */}
      <FlightBoard />

      {/* 3. The 3D Tilted Food Cards */}
      <MenuGrid />

      {/* 4. Simple Industrial Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-white/30 font-montserrat text-sm bg-black">
        <p className="tracking-widest">ROAD HOUSE &copy; 2025. SEEDUWA. ALL SYSTEMS ONLINE.</p>
      </footer>
    </main>
  );
}