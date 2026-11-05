"use client";

import React from "react";

// Optimized wrapper: Uses pure native hardware-accelerated smooth scrolling
// Eliminates heavy Lenis RAF loop and scroll-jacking for buttery 120 FPS performance
export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen bg-[#050505]">
      {children}
    </div>
  );
}