"use client";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      
      {/* 1. Base Dark Layer (Asphalt Color) */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* 2. The Texture Image (Static, High Performance) */}
      <img 
        src="https://i.ibb.co/fdVp3GPV/abstract-blur-coffee-shop-cafe-interior.jpg"
        alt="Background Texture"
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
      />

      {/* 3. A Simple Vignette (Dark Edges) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80" />

      {/* 4. Film Grain (Static Noise) - Adds "Grit" without lag */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
