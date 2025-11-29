"use client";

const PHOTOS = [
  "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800"
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
                 {/* FIXED IMAGE TAG */}
                 <img 
                    src={src} 
                    alt="Gallery" 
                    referrerPolicy="no-referrer"
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
