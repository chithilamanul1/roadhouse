"use client";

// High-performance pure CSS dark background with zero image downloads or blend-mode lag
export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.03)_0%,transparent_70%)]" />
    </div>
  );
}