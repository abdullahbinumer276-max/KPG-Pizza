import React from 'react';
import { KPG_LOGO_IMAGE } from '../data/menuData';

interface KpgLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const KpgLogo: React.FC<KpgLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const badgeSizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-11 h-11 text-base',
    lg: 'w-14 h-14 text-xl'
  };

  return (
    <div className={`flex items-center gap-2.5 font-black tracking-tight select-none cursor-pointer group ${className}`}>
      {/* Flame & Pizza Icon / Generated Logo / KPG Badge */}
      <div className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-orange-500 font-black italic text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] group-hover:scale-105 transition-transform duration-300 shrink-0 ${badgeSizes[size]}`}>
        <img 
          src={KPG_LOGO_IMAGE} 
          alt="KPG Pizza Logo" 
          className="w-full h-full object-cover rounded-full"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <span className="absolute inset-0 flex items-center justify-center font-black italic rounded-full text-white bg-gradient-to-br from-red-600 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity">
          KPG
        </span>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span className="text-white font-black italic tracking-wider text-xs sm:text-sm bg-red-600/90 px-2 py-0.5 rounded shadow-sm">
            KPG
          </span>
          <span className={`font-black italic tracking-tighter text-white group-hover:text-orange-500 transition-colors ${sizeClasses[size]}`}>
            PIZZA
          </span>
        </div>
        <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest pl-0.5 mt-0.5">
          Hot • Fresh • Loaded
        </span>
      </div>
    </div>
  );
};

