import React from 'react';
import { Flame, ShoppingCart, Check, Tag } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';

interface DealsSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const DealsSection: React.FC<DealsSectionProps> = ({ onAddToCart }) => {
  const deals = MENU_ITEMS.filter((item) => item.category === 'Deals');

  return (
    <section id="deals" className="py-16 md:py-20 bg-[#0D0D0D] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b border-white/5 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-orange-500 font-extrabold text-xs uppercase tracking-widest mb-1">
              <Flame className="w-4 h-4 text-orange-500 animate-bounce" />
              <span>Unbeatable Savings</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white uppercase">
              SPECIAL <span className="text-orange-500">DEALS</span> <span className="text-sm font-normal text-gray-400 font-sans tracking-normal">(1 TO 13)</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-orange-400 font-bold bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full">
            <Tag className="w-4 h-4 text-orange-500" />
            <span>13 Exclusive Saver Combos</span>
          </div>
        </div>

        {/* Deals Cards Grid matching Immersive UI pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col relative overflow-hidden group hover:border-orange-500/40 transition-all shadow-xl"
            >
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-[10px] font-black rounded-bl-xl tracking-wider uppercase z-20 shadow-md">
                DEAL #{deal.dealNumber}
              </div>

              {/* Deal Banner Image */}
              <div className="relative h-44 -mx-6 -mt-6 mb-4 overflow-hidden bg-black/40">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />

                {deal.badge && (
                  <div className="absolute top-3 left-3 bg-orange-500 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider z-20">
                    {deal.badge}
                  </div>
                )}
              </div>

              {/* Deal Title & Description */}
              <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-wide">
                {deal.name}
              </h3>

              {/* Food Items List */}
              {deal.dealItems && (
                <div className="space-y-1.5 my-3 bg-white/5 rounded-2xl p-3 border border-white/5 flex-1">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Includes:</p>
                  <ul className="space-y-1">
                    {deal.dealItems.map((food, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        <span>{food}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Bottom Price & Add Button */}
              <div className="mt-auto pt-3 flex items-end justify-between border-t border-white/5">
                <div>
                  <span className="text-[10px] text-gray-500 font-bold block uppercase">Combo Price</span>
                  <span className="text-2xl font-black text-orange-500">
                    Rs. {deal.price}
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(deal)}
                  className="bg-white text-black w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl hover:bg-orange-500 hover:text-white transition-colors shadow-lg"
                  aria-label={`Add ${deal.name} to cart`}
                  title="Add to Cart"
                >
                  +
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
