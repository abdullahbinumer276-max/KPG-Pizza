import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart, Flame, Check, Sparkles } from 'lucide-react';
import { MenuItem, ExtraOption, PizzaSize, WingSize, FriesSize } from '../types';
import { PIZZA_EXTRA_TOPPINGS, COMMON_EXTRAS } from '../data/menuData';

interface ProductDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
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

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  if (!item) return null;

  // Initial Size state
  const defaultSize = item.sizeType === 'pizza' 
    ? 'M' 
    : item.sizeType === 'wings' 
    ? '5pc' 
    : item.sizeType === 'fries' 
    ? 'L' 
    : undefined;

  const [selectedSize, setSelectedSize] = useState<string | undefined>(defaultSize);
  const [selectedExtras, setSelectedExtras] = useState<ExtraOption[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  // Calculate price dynamically
  const getBasePrice = (): number => {
    if (item.hasSizes && item.sizePrices && selectedSize) {
      return item.sizePrices[selectedSize as PizzaSize | WingSize | FriesSize] || item.price || 0;
    }
    return item.price || 0;
  };

  const getExtraToppingPrice = (): number => {
    if (item.sizeType === 'pizza' && selectedSize) {
      return PIZZA_EXTRA_TOPPINGS[selectedSize] || 0;
    }
    return 0;
  };

  const basePrice = getBasePrice();
  const extrasTotal = selectedExtras.reduce((sum, opt) => sum + opt.price, 0);
  const unitPrice = basePrice + extrasTotal;
  const totalPrice = unitPrice * quantity;

  const toggleExtra = (extra: ExtraOption) => {
    if (selectedExtras.some((e) => e.id === extra.id)) {
      setSelectedExtras(selectedExtras.filter((e) => e.id !== extra.id));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  const handleAddToCartClick = () => {
    onAddToCart(item, selectedSize, basePrice, selectedExtras, quantity);
    onClose();
  };

  const handleBuyNowClick = () => {
    onBuyNow(item, selectedSize, basePrice, selectedExtras, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#161620] border border-orange-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center transition-colors border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 space-y-6">
          {/* Header Image */}
          <div className="relative h-64 -mx-6 -mt-6 overflow-hidden bg-black/40">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161620] via-transparent to-black/30" />
            
            {item.badge && (
              <span className="absolute top-6 left-6 bg-gradient-to-r from-red-600 to-orange-500 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-xl uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-yellow-300" />
                <span>{item.badge}</span>
              </span>
            )}
          </div>

          {/* Title & Description */}
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
                {item.name}
              </h2>
              <span className="text-2xl font-black text-yellow-400 shrink-0">
                Rs. {totalPrice}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Size Selector */}
          {item.hasSizes && item.sizePrices && (
            <div className="space-y-3 bg-[#1e1e2b] p-4 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase text-yellow-400 tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span>Select Size:</span>
                </label>
                {item.sizeType === 'pizza' && (
                  <span className="text-[11px] text-gray-400">
                    Extra Topping: +Rs. {getExtraToppingPrice()}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {Object.entries(item.sizePrices).map(([sizeKey, sizeVal]) => {
                  const isSelected = selectedSize === sizeKey;
                  return (
                    <button
                      key={sizeKey}
                      onClick={() => setSelectedSize(sizeKey)}
                      className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl border font-bold transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white border-yellow-400 shadow-lg shadow-orange-500/30'
                          : 'bg-[#14141d] hover:bg-[#252535] text-gray-300 border-white/10'
                      }`}
                    >
                      <span className="text-sm uppercase tracking-widest">{sizeKey}</span>
                      <span className="text-xs font-extrabold text-yellow-300">Rs. {sizeVal}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Extra Addons & Toppings */}
          <div className="space-y-3 bg-[#1e1e2b] p-4 rounded-2xl border border-white/10">
            <label className="text-xs font-black uppercase text-yellow-400 tracking-wider block">
              Optional Add-ons & Extra Cheese:
            </label>
            <div className="space-y-2">
              {COMMON_EXTRAS.map((extra) => {
                const isChecked = selectedExtras.some((e) => e.id === extra.id);
                return (
                  <div
                    key={extra.id}
                    onClick={() => toggleExtra(extra)}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-red-600/20 border-yellow-400 text-white'
                        : 'bg-[#14141d] border-white/5 text-gray-300 hover:bg-[#252535]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${isChecked ? 'bg-yellow-400 border-yellow-400 text-black' : 'border-gray-500'}`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-bold">{extra.name}</span>
                    </div>
                    <span className="text-xs font-black text-yellow-400">+ Rs. {extra.price}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between bg-[#1e1e2b] p-4 rounded-2xl border border-white/10">
            <span className="text-xs font-black uppercase text-gray-300 tracking-wider">Quantity:</span>
            <div className="flex items-center gap-4 bg-[#14141d] px-3 py-1.5 rounded-xl border border-white/10">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-[#282838] text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-lg font-black text-white w-6 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-[#282838] text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#121218] border-t border-white/10 grid grid-cols-2 gap-3">
          <button
            onClick={handleAddToCartClick}
            className="flex items-center justify-center gap-2 bg-[#282836] hover:bg-[#323244] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl border border-white/15 transition-all"
          >
            <ShoppingCart className="w-4 h-4 text-orange-400" />
            <span>ADD TO CART</span>
          </button>

          <button
            onClick={handleBuyNowClick}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-all"
          >
            <Flame className="w-4 h-4 text-yellow-200" />
            <span>BUY NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
};
