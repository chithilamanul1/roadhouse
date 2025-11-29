"use client";

const PHOTOS = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544025162-d76690b6d015?q=80&w=800&auto=format&fit=crop"
];

export default function PhotoGallery() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
           <h2 className="text-4xl font-[family-name:var(--font-bebas)] text-white">
              LIFE AT <span className="text-[#ff5722]">ROAD HOUSE</span>
           </h2>
           <p className="text-neutral-500 text-sm mt-2">GOOD FOOD. GOOD VIBES.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {PHOTOS.map((src, i) => (
              <div key={i} className="h-[250px] overflow-hidden rounded-sm group relative">
                 <img 
                    src={src} 
                    alt="Gallery" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
           ))}
        </div>

      </div>
    </section>
  );
}
