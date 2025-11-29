"use client";

import Navbar from "@/components/Navbar";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <div className="pt-24">
        <LocationSection />
      </div>
      <Footer />
    </div>
  );
}
