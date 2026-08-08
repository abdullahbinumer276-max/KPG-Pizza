import React from 'react';
import { MapPin, Phone, MessageSquare, ExternalLink, Clock, User } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const LocationContact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0D0D0D] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/5 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-orange-500 font-extrabold text-xs uppercase tracking-widest mb-1">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Visit Us Or Order Direct</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter text-white uppercase">
              LOCATION & <span className="text-orange-500">CONTACT</span>
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-sm">
            Located in Sidh on Kharian Kotla Road. Call or WhatsApp us anytime for hot home delivery!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white/5 rounded-3xl p-8 border border-white/10 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              
              {/* Location Box */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Restaurant Address</h4>
                  <p className="text-base font-bold text-white mt-1 leading-snug">
                    {RESTAURANT_INFO.location}
                  </p>
                </div>
              </div>

              {/* Phone Numbers Box */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Order Hotline Numbers</h4>
                  <div className="flex flex-col gap-1">
                    <a
                      href={`tel:${RESTAURANT_INFO.phones[0]}`}
                      className="text-lg font-black text-orange-500 hover:underline flex items-center gap-2"
                    >
                      <span>{RESTAURANT_INFO.phones[0]}</span>
                    </a>
                    <a
                      href={`tel:${RESTAURANT_INFO.phones[1]}`}
                      className="text-lg font-black text-orange-500 hover:underline flex items-center gap-2"
                    >
                      <span>{RESTAURANT_INFO.phones[1]}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Opening Hours</h4>
                  <p className="text-sm font-bold text-white mt-1">
                    {RESTAURANT_INFO.hours}
                  </p>
                </div>
              </div>

              {/* Contact Person */}
              <div className="flex items-center gap-3 px-2 text-xs text-gray-400">
                <User className="w-4 h-4 text-gray-500" />
                <span>Contact Person: <strong className="text-white">{RESTAURANT_INFO.owner}</strong></span>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="grid sm:grid-cols-3 gap-2.5 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Hello KPG Pizza! I would like to order.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider transition-colors text-center gap-1 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phones[0]}`}
                className="flex flex-col items-center justify-center p-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider transition-colors text-center gap-1 shadow-md shadow-orange-500/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-black text-xs uppercase tracking-wider border border-white/10 transition-colors text-center gap-1"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Map / Visual Location Mock Card */}
          <div className="lg:col-span-7 bg-white/5 rounded-3xl overflow-hidden border border-white/10 relative min-h-[350px] flex flex-col justify-between p-6">
            {/* Map Frame / Graphics */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-orange-500 text-white font-black text-xs uppercase px-3.5 py-1 rounded-full shadow-md">
                  📍 KPG Pizza Location Map
                </span>
                <span className="text-xs text-orange-400 font-bold">Kharian Kotla Road, Sidh</span>
              </div>

              <div className="bg-[#0D0D0D]/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3 max-w-md">
                <h3 className="text-xl font-black italic text-white uppercase tracking-tight">Opposite Arif Khan Shopping Mall</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Located right on the main Kharian Kotla road in Sidh. Easily accessible for dine-in pickup or rapid home delivery riders.
                </p>
                <div className="pt-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-bold uppercase">Kitchen Open & Baking Fresh</span>
                </div>
              </div>
            </div>

            {/* Bottom Maps Launch CTA */}
            <div className="relative z-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <div className="text-xs text-gray-400">
                Need directions? Open directly in Google Maps application.
              </div>
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase px-6 py-3 rounded-full shadow-lg shadow-orange-500/20 transition-transform transform hover:scale-105"
              >
                <MapPin className="w-4 h-4 text-white" />
                <span>OPEN GOOGLE MAPS LOCATION</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
