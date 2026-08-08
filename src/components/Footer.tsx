import React from 'react';
import { KpgLogo } from './KpgLogo';
import { RESTAURANT_INFO } from '../data/menuData';
import { Phone, MapPin, Clock, MessageSquare, Instagram, Heart, Flame } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0a0a0d] border-t border-white/10 text-gray-400 text-xs relative z-10">
      
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <KpgLogo size="lg" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm pt-2">
              {RESTAURANT_INFO.subtagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hi`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors border border-emerald-500/30"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phones[0]}`}
                className="w-9 h-9 rounded-xl bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors border border-red-500/30"
                aria-label="Call Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-pink-600/20 text-pink-400 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors border border-pink-500/30"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-yellow-400 transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-yellow-400 transition-colors">
                  Full Menu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('deals')} className="hover:text-yellow-400 transition-colors">
                  Hot Deals (1 to 13)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-yellow-400 transition-colors">
                  About KPG Pizza
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-yellow-400 transition-colors">
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Popular Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-orange-400 transition-colors">
                  Regular & Premium Pizza
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-orange-400 transition-colors">
                  Zinger & Patty Burgers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-orange-400 transition-colors">
                  Chicken & Zinger Shawarma
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-orange-400 transition-colors">
                  Crispy Paratha Rolls
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-orange-400 transition-colors">
                  Pizza Fries & Loaded Fries
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Contact & Hours
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="font-bold text-yellow-300">{RESTAURANT_INFO.phones.join(' / ')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{RESTAURANT_INFO.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500">
          <p>© {new Date().getFullYear()} KPG Pizza. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Flame className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>for pizza lovers in Sidh & Kharian</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
