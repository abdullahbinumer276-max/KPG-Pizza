import React from 'react';
import { Flame, ShoppingBag, ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';
import { HERO_PIZZA_IMAGE, RESTAURANT_INFO } from '../data/menuData';

interface HeroProps {
  onOrderNow: () => void;
  onViewMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow, onViewMenu }) => {
  return (
    <section className="relative overflow-hidden py-10 md:py-16 bg-[radial-gradient(circle_at_50%_0%,#221100_0%,#0D0D0D_70%)]">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(249,115,22,0.35)_0%,transparent_70%)] rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Card Container */}
        <div className="relative rounded-3xl bg-zinc-900/90 border border-white/5 p-8 sm:p-12 shadow-2xl overflow-hidden">
          
          {/* Ambient Orange Circle Flare */}
          <div className="absolute -right-20 top-0 w-96 h-96 bg-[radial-gradient(circle,rgba(249,115,22,0.3)_0%,transparent_70%)] rounded-full filter blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div>
                <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded inline-block tracking-widest uppercase shadow-md">
                  HOT • FRESH • LOADED
                </span>
              </div>

              {/* Main Bold Italic Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black italic tracking-tighter leading-none text-white uppercase">
                ELITE <br />
                <span className="text-orange-500">CHEEZIOUS</span>
              </h1>

              {/* Subheading */}
              <p className="text-gray-400 max-w-lg text-sm sm:text-base leading-relaxed font-normal mx-auto lg:mx-0">
                {RESTAURANT_INFO.subtagline}
              </p>

              {/* CTA Pill Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={onOrderNow}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-orange-500/30 transition-all uppercase transform hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-white" />
                  <span>ORDER NOW</span>
                </button>

                <button
                  onClick={onViewMenu}
                  className="border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-white/5 transition-all uppercase"
                >
                  VIEW MENU
                </button>
              </div>

              {/* Feature Highlights */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-white/10 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-full bg-orange-500/10 text-orange-500 shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Free Delivery</h4>
                    <p className="text-[10px] text-gray-500">In Sidh & Kharian</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-full bg-orange-500/10 text-orange-500 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">100% Fresh</h4>
                    <p className="text-[10px] text-gray-500">Hand-tossed dough</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-full bg-orange-500/10 text-orange-500 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Fast & Hot</h4>
                    <p className="text-[10px] text-gray-500">30-45 min rider</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Hero Image Showcase with Fiery Radial Drop Shadow */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#1a1a1a] group">
                <img
                  src={HERO_PIZZA_IMAGE}
                  alt="Cheese Loaded KPG Special Pizza"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Floating Price Pill Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0D0D0D]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-between shadow-xl">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase block">KPG Special Pizza</span>
                    <span className="text-lg font-black text-orange-500">From Rs. 499</span>
                  </div>
                  <button
                    onClick={onOrderNow}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase px-4 py-2 rounded-full transition-all"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
