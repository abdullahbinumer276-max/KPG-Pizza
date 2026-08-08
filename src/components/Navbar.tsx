import React, { useState, useEffect } from 'react';
import { ShoppingCart, Phone, Menu, X, Flame, MapPin } from 'lucide-react';
import { KpgLogo } from './KpgLogo';
import { RESTAURANT_INFO } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onNavigate,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'deals', label: 'Deals' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white text-xs py-1.5 px-4 font-bold shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Flame className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
            <span className="tracking-widest uppercase font-extrabold text-[11px] sm:text-xs">
              FREE HOME DELIVERY IN SIDH & KHARIAN KOTLA ROAD!
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href={`tel:${RESTAURANT_INFO.phones[0]}`}
              className="flex items-center gap-1 hover:text-yellow-300 transition-colors font-bold"
            >
              <Phone className="w-3 h-3 text-yellow-300" />
              <span>{RESTAURANT_INFO.phones[0]}</span>
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phones[1]}`}
              className="hidden sm:flex items-center gap-1 hover:text-yellow-300 transition-colors font-bold"
            >
              <Phone className="w-3 h-3 text-yellow-300" />
              <span>{RESTAURANT_INFO.phones[1]}</span>
            </a>
            <a
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-yellow-200 hover:underline font-bold"
            >
              <MapPin className="w-3 h-3" />
              <span>Opposite Arif Khan Shopping Mall</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 border-b border-white/5 ${
          isScrolled
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md shadow-2xl py-3'
            : 'bg-[#0D0D0D]/90 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => handleLinkClick('home')}>
            <KpgLogo size="md" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors duration-200 py-1 ${
                  activeSection === link.id
                    ? 'text-orange-500 font-extrabold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Order Now Pill Button */}
            <button
              onClick={() => handleLinkClick('menu')}
              className="hidden sm:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-black text-xs tracking-wider shadow-lg shadow-orange-500/20 transition-all transform hover:scale-105 active:scale-95 uppercase"
            >
              <Flame className="w-4 h-4 text-white animate-bounce" />
              <span>ORDER NOW</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 hover:bg-white/5 rounded-full cursor-pointer transition-colors text-gray-200 hover:text-white"
              aria-label="Open Cart"
            >
              <ShoppingCart className="w-6 h-6 text-white" />
              {cartCount > 0 ? (
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-600 text-[10px] font-black text-white flex items-center justify-center rounded-full border border-black shadow-md">
                  {cartCount}
                </span>
              ) : (
                <span className="absolute top-0 right-0 w-4 h-4 bg-zinc-800 text-[9px] font-bold text-gray-400 flex items-center justify-center rounded-full border border-black">
                  0
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-white p-2 rounded-xl bg-white/5 border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-orange-500" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111111] border-t border-white/5 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                  activeSection === link.id
                    ? 'bg-orange-500/10 text-orange-500 border-l-4 border-orange-500'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 border-t border-white/5 flex flex-col gap-2">
              <button
                onClick={() => handleLinkClick('menu')}
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-full shadow-lg shadow-orange-500/20"
              >
                <Flame className="w-4 h-4 text-white" />
                <span>ORDER NOW</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
