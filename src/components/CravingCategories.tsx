import React from 'react';
import { Flame } from 'lucide-react';

interface CravingCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
  selectedCategory: string;
}

export const CravingCategories: React.FC<CravingCategoriesProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  const cravingCategories = [
    { id: 'Pizza - Regular', label: 'Pizza', icon: '🍕' },
    { id: 'Burgers', label: 'Burgers', icon: '🍔' },
    { id: 'Shawarma & Paratha', label: 'Shawarma', icon: '🌯' },
    { id: 'Wraps', label: 'Wraps', icon: '🌯' },
    { id: 'Wings & Appetizers', label: 'Wings', icon: '🍗' },
    { id: 'Fries & Loaded Fries', label: 'Fries', icon: '🍟' },
    { id: 'Pasta', label: 'Pasta', icon: '🍝' },
    { id: 'Drinks', label: 'Drinks', icon: '🥤' },
  ];

  return (
    <section className="py-12 bg-[#0D0D0D] border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
              What are you craving?
            </h3>
            <h2 className="text-2xl sm:text-4xl font-black italic tracking-tighter uppercase text-white">
              CRAVING <span className="text-orange-500">CATEGORIES</span>
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xs">
            Tap any item below to filter the hot menu immediately!
          </p>
        </div>

        {/* Craving Category Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {cravingCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id || (selectedCategory.startsWith('Pizza') && cat.id.startsWith('Pizza'));
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-3 p-3.5 transition-all duration-200 cursor-pointer rounded-2xl ${
                  isSelected
                    ? 'bg-orange-500/10 border-l-4 border-orange-500 text-orange-500 font-bold shadow-lg shadow-orange-500/10'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white border border-white/5'
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs font-bold uppercase tracking-wide truncate">
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
