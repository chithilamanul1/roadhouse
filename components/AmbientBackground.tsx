"use client";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      
      {/* 1. Base Dark Layer (Asphalt Color) */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* 2. The Texture Image (Static, High Performance) */}
      <img 
        src="https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Background Texture"
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
      />

      {/* 3. A Simple Vignette (Dark Edges) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80" />

      {/* 4. Film Grain (Static Noise) - Adds "Grit" without lag */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
            backgroundImage: `url("https://i.ibb.co/fdVp3GPV/abstract-blur-coffee-shop-cafe-interior.jpg")`,
        }}
      />
    </div>
  );
}
