import React from 'react';
import { Truck, Phone, MessageSquare, Flame, Clock, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO, DEAL_BANNER_IMAGE } from '../data/menuData';

interface FreeDeliveryBannerProps {
  onOrderNow: () => void;
}

export const FreeDeliveryBanner: React.FC<FreeDeliveryBannerProps> = ({ onOrderNow }) => {
  return (
    <section className="py-12 md:py-16 bg-[#0c0c0f] relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-950 via-red-900 to-orange-950 border-2 border-orange-500/40 p-8 sm:p-12 shadow-2xl">
          
          {/* Background Decorative Graphic */}
          <div className="absolute inset-0 opacity-25">
            <img
              src={DEAL_BANNER_IMAGE}
              alt="Free Delivery Banner Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-lg">
                <Truck className="w-4 h-4 text-red-600 animate-bounce" />
                <span>SPECIAL PROMOTION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none" style={{ fontFamily: 'Impact, sans-serif' }}>
                FREE HOME DELIVERY
              </h2>

              <p className="text-lg sm:text-xl text-yellow-300 font-bold max-w-2xl">
                Your favorite pizza, delivered piping hot to your door anywhere in Sidh & Kharian Kotla Road!
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-gray-200 pt-2">
                <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-white/10">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>30–45 Mins Fast Dispatch</span>
                </div>

                <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-yellow-400" />
                  <span>Hot Thermal Box Sealed</span>
                </div>

                <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-white/10">
                  <Flame className="w-4 h-4 text-red-400" />
                  <span>Zero Delivery Fee</span>
                </div>
              </div>
            </div>

            {/* Right Direct Call & Order Action */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-3">
              <a
                href={`tel:${RESTAURANT_INFO.phones[0]}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-sm uppercase px-6 py-4 rounded-2xl shadow-xl transition-all transform hover:scale-105"
              >
                <Phone className="w-5 h-5 text-red-600 fill-current" />
                <span>CALL: {RESTAURANT_INFO.phones[0]}</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Hi KPG Pizza! I would like to place an order for delivery.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase px-6 py-4 rounded-2xl shadow-xl transition-all transform hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WHATSAPP ORDER</span>
              </a>

              <button
                onClick={onOrderNow}
                className="w-full sm:w-auto text-xs text-yellow-300 font-bold uppercase underline tracking-wider pt-1 hover:text-white"
              >
                Or order online via website cart →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
