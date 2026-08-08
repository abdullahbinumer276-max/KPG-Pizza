import React, { useState, useMemo } from 'react';
import { Search, Flame, ShoppingCart, Sparkles, Filter, Check } from 'lucide-react';
import { MenuItem, ExtraOption } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { ProductDetailModal } from './ProductDetailModal';

interface MenuSectionProps {
  selectedCategoryFromHome?: string;
  onAddToCart: (
    item: MenuItem,
    selectedSize?: string,
    sizePrice?: number,
    selectedExtras?: ExtraOption[],
    quantity?: number
  ) => void;
  onBuyNow: (
    item: MenuItem,
    selectedSize?: string,
    sizePrice?: number,
    selectedExtras?: ExtraOption[],
    quantity?: number
  ) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategoryFromHome,
  onAddToCart,
  onBuyNow,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    selectedCategoryFromHome || 'All'
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProductForModal, setSelectedProductForModal] = useState<MenuItem | null>(null);

  // Sync prop changes
  React.useEffect(() => {
    if (selectedCategoryFromHome) {
      setActiveCategory(selectedCategoryFromHome);
    }
  }, [selectedCategoryFromHome]);

  const categories = [
    { id: 'All', label: 'All Menu' },
    { id: 'Pizza - Regular', label: 'Regular Pizzas' },
    { id: 'Pizza - Global', label: 'Global Favorites' },
    { id: 'Pizza - Premium', label: 'Premium Pizzas' },
    { id: 'Deals', label: 'Deals & Combos' },
    { id: 'Burgers', label: 'Burgers' },
    { id: 'Shawarma & Paratha', label: 'Shawarma & Rolls' },
    { id: 'Wraps', label: 'Wraps' },
    { id: 'Wings & Appetizers', label: 'Wings & Appetizers' },
    { id: 'Fries & Loaded Fries', label: 'Fries & Loaded Fries' },
    { id: 'Pasta', label: 'Special Pastas' },
    { id: 'Drinks', label: 'Drinks' },
    { id: 'Extras', label: 'Extras & Dips' },
  ];

  // Filter Items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;

      // Search query check
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#0e0e12] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-yellow-400 font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-red-500/30">
            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
            <span>KPG Pizza Full Menu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
            EXPLORE OUR DELICIOUS MENU
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Fresh ingredients, hand-tossed dough, and authentic Pakistani flavor spices cooked to perfection.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-6 mb-12">
          {/* Search Box */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pizza, burgers, shawarma, loaded fries..."
              className="w-full bg-[#181822] text-white placeholder-gray-500 pl-12 pr-10 py-4 rounded-2xl border border-white/10 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all text-sm font-medium shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs Pill Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar scroll-smooth">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 border ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white border-yellow-400 shadow-lg shadow-orange-500/20'
                      : 'bg-[#181822] hover:bg-[#222230] text-gray-400 hover:text-white border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#161620] rounded-3xl border border-white/10 max-w-lg mx-auto">
            <p className="text-4xl mb-3">🍕</p>
            <h3 className="text-xl font-bold text-white mb-1">No items found</h3>
            <p className="text-gray-400 text-sm mb-4">Try searching for something else or change category.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              // Display starting price
              let displayPrice = `Rs. ${item.price}`;
              if (item.hasSizes && item.sizePrices) {
                const prices = Object.values(item.sizePrices).filter((p): p is number => typeof p === 'number');
                const minPrice = Math.min(...prices);
                displayPrice = `From Rs. ${minPrice}`;
              }

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedProductForModal(item)}
                  className="group bg-[#161620] rounded-3xl border border-white/10 hover:border-orange-500/50 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
                >
                  {/* Item Image Header */}
                  <div>
                    <div className="relative h-44 overflow-hidden bg-black/40">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161620] via-transparent to-black/20" />

                      {item.badge && (
                        <span className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-[10px] px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-md">
                          {item.badge}
                        </span>
                      )}

                      {item.isSpicy && (
                        <span className="absolute top-3 right-3 bg-red-600 text-yellow-300 font-extrabold text-[10px] px-2 py-0.5 rounded-md shadow-md">
                          🌶️ Spicy
                        </span>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-yellow-400 transition-colors">
                          {item.name}
                        </h3>
                      </div>

                      <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Display Size Pills if applicable */}
                      {item.hasSizes && item.sizePrices && (
                        <div className="flex items-center gap-1.5 pt-1">
                          <span className="text-[10px] text-gray-500 uppercase font-bold">Sizes:</span>
                          {Object.keys(item.sizePrices).map((sz) => (
                            <span
                              key={sz}
                              className="text-[10px] bg-[#222230] text-yellow-300 px-1.5 py-0.5 rounded font-mono font-bold border border-white/5"
                            >
                              {sz}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Price & Action Buttons */}
                  <div className="p-5 pt-0 space-y-3">
                    <div className="flex items-center justify-between border-t border-white/5 pt-3">
                      <span className="text-xs text-gray-400 font-semibold uppercase">Price</span>
                      <span className="text-lg font-black text-yellow-400">
                        {displayPrice}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item.hasSizes) {
                            setSelectedProductForModal(item);
                          } else {
                            onAddToCart(item);
                          }
                        }}
                        className="w-full flex items-center justify-center gap-1.5 bg-[#222230] hover:bg-[#2c2c3e] text-white font-bold text-[11px] uppercase py-2.5 rounded-xl border border-white/10 transition-colors"
                      >
                        <ShoppingCart className="w-3.5 h-3.5 text-orange-400" />
                        <span>Add</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item.hasSizes) {
                            setSelectedProductForModal(item);
                          } else {
                            onBuyNow(item);
                          }
                        }}
                        className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-black text-[11px] uppercase py-2.5 rounded-xl shadow-md transition-all"
                      >
                        <Flame className="w-3.5 h-3.5 text-yellow-300" />
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        item={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={onAddToCart}
        onBuyNow={onBuyNow}
      />
    </section>
  );
};
