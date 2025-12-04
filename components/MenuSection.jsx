'use client';
import { useState } from 'react';
import { Utensils, Coffee, Beer, IceCream } from 'lucide-react';

const categories = [
  { id: 'street', name: 'Street Food', icon: <Utensils size={18} />, items: [
      { name: 'Dolphin Kottu', price: '1,200', desc: 'Cheesy, spicy, heavy.' },
      { name: 'Egg Hoppers (3)', price: '450', desc: 'With Lunu Miris.' },
      { name: 'BBQ Chicken Leg', price: '950', desc: 'Charcoal grilled.' },
      { name: 'Seafood Rice', price: '1,500', desc: 'Wok fried street style.' }
  ]},
  { id: 'bites', name: 'Bites & BYOB', icon: <Beer size={18} />, items: [
      { name: 'Hot Butter Cuttlefish', price: '1,800', desc: 'The classic.' },
      { name: 'Devilled Cashew', price: '1,200', desc: 'Spicy roast.' },
      { name: 'Pepper Pork', price: '1,600', desc: 'Black pepper dry fry.' },
      { name: 'French Fries', price: '800', desc: 'Thick cut.' }
  ]},
  { id: 'cafe', name: 'Cafe & Juice', icon: <Coffee size={18} />, items: [
      { name: 'Iced Milo', price: '400', desc: 'Extra chocolatey.' },
      { name: 'Cappuccino', price: '600', desc: 'Fresh brew.' },
      { name: 'Passion Mojito', price: '750', desc: 'Mint & lime refresher.' },
      { name: 'Chocolate Waffle', price: '900', desc: 'With ice cream.' }
  ]}
];

export default function MenuSection() {
  const [active, setActive] = useState('street');

  return (
    <section id="menu" className="py-24 px-6 bg-[#4a4448]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-4xl md:text-6xl font-black text-[#efecca] uppercase italic">
             The <span className="text-[#f7ff58]">Menu</span>
           </h2>
           <p className="text-[#a9cbb7] font-mono tracking-widest uppercase text-xs mt-2">Fuel for the Road</p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-widest text-sm border-2 transition-all skew-x-[-10deg] ${active === cat.id ? 'bg-[#ff934f] border-[#ff934f] text-[#5e565a]' : 'border-[#a9cbb7] text-[#a9cbb7] hover:border-[#f7ff58] hover:text-[#f7ff58]'}`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {categories.find(c => c.id === active).items.map((item, i) => (
             <div key={i} className="bg-[#5e565a] p-6 border-l-4 border-[#f7ff58] flex justify-between items-start group hover:bg-[#27272a] transition-colors">
                <div>
                   <h4 className="text-xl font-bold text-[#efecca] uppercase group-hover:text-[#f7ff58] transition-colors">{item.name}</h4>
                   <p className="text-sm text-[#a9cbb7] mt-1">{item.desc}</p>
                </div>
                <span className="text-xl font-black text-[#ff934f]">{item.price}</span>
             </div>
           ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="/contact" className="inline-block border-b-2 border-[#efecca] text-[#efecca] font-bold uppercase tracking-widest hover:text-[#ff934f] hover:border-[#ff934f] transition-colors">
             Download Full Menu (PDF)
           </a>
        </div>
      </div>
    </section>
  );
}