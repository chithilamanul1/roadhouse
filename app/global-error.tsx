"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-[#050505] text-white flex items-center justify-center h-screen flex-col font-mono p-4">
        <h2 className="text-[#ff5722] text-3xl md:text-4xl mb-4 font-bold tracking-wider">SOMETHING WENT WRONG</h2>
        <p className="text-neutral-400 mb-8 text-center text-sm">Please refresh the page or try again in a moment.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 border border-[#ff5722] text-[#ff5722] hover:bg-[#ff5722] hover:text-black transition-colors uppercase tracking-widest font-bold rounded-lg"
        >
          Reload Page
        </button>
      </body>
    </html>
  );
}