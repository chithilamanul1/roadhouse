"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-[#050505] text-white flex items-center justify-center h-screen flex-col font-mono">
        <h2 className="text-[#ff5722] text-4xl mb-4 font-bold">SYSTEM CRITICAL</h2>
        <p className="text-neutral-500 mb-8">An unexpected error has occurred.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 border border-[#ff5722] text-[#ff5722] hover:bg-[#ff5722] hover:text-black transition-colors uppercase tracking-widest"
        >
          Reboot System
        </button>
      </body>
    </html>
  );
}
