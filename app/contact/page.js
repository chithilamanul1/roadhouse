import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Book a Table | Road House",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#5e565a]">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
         <div className="max-w-3xl mx-auto bg-[#4a4448] p-8 md:p-12 border-t-8 border-[#ff934f] shadow-2xl relative">
            {/* Stamp Effect */}
            <div className="absolute top-8 right-8 border-4 border-[#f7ff58] text-[#f7ff58] font-black text-xl px-4 py-2 -rotate-12 opacity-50 pointer-events-none">
               OPEN 365 DAYS
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-[#efecca] uppercase mb-2">Reserve Your Spot</h1>
            <p className="text-[#a9cbb7] font-mono uppercase tracking-widest text-sm mb-10">Table Reservation Form // RH-001</p>

            <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-[#ff934f] text-xs font-bold uppercase tracking-widest mb-2">Name</label>
                     <input type="text" className="w-full bg-[#5e565a] border-2 border-transparent focus:border-[#f7ff58] p-4 text-white outline-none font-bold" placeholder="YOUR NAME" />
                  </div>
                  <div>
                     <label className="block text-[#ff934f] text-xs font-bold uppercase tracking-widest mb-2">Phone</label>
                     <input type="tel" className="w-full bg-[#5e565a] border-2 border-transparent focus:border-[#f7ff58] p-4 text-white outline-none font-bold" placeholder="07X XXX XXXX" />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                     <label className="block text-[#ff934f] text-xs font-bold uppercase tracking-widest mb-2">Date</label>
                     <input type="date" className="w-full bg-[#5e565a] border-2 border-transparent focus:border-[#f7ff58] p-4 text-white outline-none font-bold" />
                  </div>
                  <div>
                     <label className="block text-[#ff934f] text-xs font-bold uppercase tracking-widest mb-2">Time</label>
                     <input type="time" className="w-full bg-[#5e565a] border-2 border-transparent focus:border-[#f7ff58] p-4 text-white outline-none font-bold" />
                  </div>
                  <div>
                     <label className="block text-[#ff934f] text-xs font-bold uppercase tracking-widest mb-2">Guests</label>
                     <input type="number" className="w-full bg-[#5e565a] border-2 border-transparent focus:border-[#f7ff58] p-4 text-white outline-none font-bold" placeholder="2" />
                  </div>
               </div>

               <div>
                  <label className="block text-[#ff934f] text-xs font-bold uppercase tracking-widest mb-2">Preferred Zone</label>
                  <select className="w-full bg-[#5e565a] border-2 border-transparent focus:border-[#f7ff58] p-4 text-white outline-none font-bold uppercase">
                     <option>Family Restaurant (A/C)</option>
                     <option>Outdoor Garden</option>
                     <option>Karaoke Room</option>
                     <option>BYOB Lounge</option>
                  </select>
               </div>

               <button className="w-full py-5 bg-[#ff934f] hover:bg-[#f7ff58] text-[#5e565a] font-black uppercase tracking-[0.2em] text-lg transition-colors mt-8">
                  Confirm Booking
               </button>
            </form>
         </div>
      </section>

      <Footer />
    </main>
  );
}