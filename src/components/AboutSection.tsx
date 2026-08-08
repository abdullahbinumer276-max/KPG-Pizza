import React from 'react';
import { Flame, Sparkles, HeartHandshake, ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#0D0D0D] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-orange-500 font-extrabold text-xs uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
              <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
              <span>Our Passion</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white uppercase leading-none">
              MORE THAN JUST <span className="text-orange-500">PIZZA</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              At <strong className="text-orange-500 font-bold">KPG Pizza</strong>, we believe every slice should be a celebration of flavor. Located opposite Arif Khan Shopping Mall in Sidh, we bring you freshly hand-tossed dough, 100% real mozzarella cheese, and rich signature spices prepared fresh daily for every craving.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2 hover:border-orange-500/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-black">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wide">Fresh Ingredients</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  100% fresh chicken boti, crisp vegetables, and proprietary sauce blends.
                </p>
              </div>

              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2 hover:border-orange-500/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-black">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wide">Freshly Baked</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Baked hot in high-temperature stone ovens for that perfect golden crispy crust.
                </p>
              </div>

              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2 hover:border-orange-500/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-black">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wide">Affordable Prices</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Generous family deals and budget-friendly pricing so everyone can feast.
                </p>
              </div>

              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2 hover:border-orange-500/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-black">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-wide">Fast Hot Delivery</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Speedy thermal-insulated delivery straight to your doorstep across Kharian.
                </p>
              </div>
            </div>
          </div>

          {/* Right Highlights Visual Box */}
          <div className="lg:col-span-5 bg-zinc-900/90 p-8 rounded-3xl border border-orange-500/30 shadow-2xl relative">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Award className="w-8 h-8 text-orange-500" />
                <div>
                  <h4 className="text-lg font-black italic text-white uppercase tracking-tight">KPG Quality Standard</h4>
                  <p className="text-xs text-gray-400">Serving Sidh & Kharian with Pride</p>
                </div>
              </div>

              <div className="space-y-4 text-xs font-semibold text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center shrink-0 font-bold">1</span>
                  <p>Handcrafted sourdough pizza dough fermented naturally for optimal crunch and softness.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center shrink-0 font-bold">2</span>
                  <p>Pure halal spiced chicken marinated in authentic Tikka, Fajita, Tandoori & Malai spices.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center shrink-0 font-bold">3</span>
                  <p>Hygienic kitchen preparation with strict temperature and sanitation controls.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-gray-400 uppercase font-bold">Founded By</p>
                  <p className="text-sm font-black text-white">{RESTAURANT_INFO.owner}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-gray-400 uppercase font-bold">Location</p>
                  <p className="text-sm font-black text-orange-500">Sidh, Kharian</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
