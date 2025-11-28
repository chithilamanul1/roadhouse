"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import AmbientBackground from "@/components/AmbientBackground";

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <AmbientBackground />
      {children}
    </ReactLenis>
  );
}
