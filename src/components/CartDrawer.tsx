import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Flame, Truck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onProceedToCheckout: () => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryFee = 0; // FREE DELIVERY
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#14141c] border-l border-orange-500/30 text-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#191924]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-orange-400" />
              <h2 className="text-xl font-black uppercase tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
                YOUR CART ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-red-400 hover:text-red-300 font-semibold px-2 py-1 rounded hover:bg-red-900/30 transition-colors"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl bg-[#222230] text-gray-400 hover:text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Free Delivery Promo Bar */}
          <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs px-4 py-2 font-black flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 animate-bounce" />
              <span>FREE HOME DELIVERY APPLIED!</span>
            </div>
            <span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-[10px] uppercase font-black">
              Rs. 0 Fee
            </span>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-white/5">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 rounded-full bg-[#1e1e2c] border border-white/10 flex items-center justify-center text-3xl">
                  🍕
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase">Your cart is empty</h3>
                  <p className="text-xs text-gray-400 max-w-xs mt-1">
                    Add some hot pizzas, loaded burgers or crisp deals to start your order!
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs uppercase px-6 py-3 rounded-xl transition-all"
                >
                  BROWSE MENU NOW
                </button>
              </div>
            ) : (
              cartItems.map((cartItem) => (
                <div key={cartItem.cartItemId} className="pt-4 first:pt-0 flex gap-3 items-start">
                  {/* Thumbnail */}
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10"
                    referrerPolicy="no-referrer"
                  />

                  {/* Details */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-black text-white uppercase">
                        {cartItem.item.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(cartItem.cartItemId)}
                        className="text-gray-500 hover:text-red-400 p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Size & Extras */}
                    <div className="text-xs space-y-0.5">
                      {cartItem.selectedSize && (
                        <span className="inline-block bg-[#222230] text-yellow-300 font-bold px-1.5 py-0.5 rounded text-[10px] mr-1">
                          Size: {cartItem.selectedSize}
                        </span>
                      )}

                      {cartItem.selectedExtras.length > 0 && (
                        <p className="text-[11px] text-gray-400">
                          Extras: {cartItem.selectedExtras.map((e) => e.name).join(', ')}
                        </p>
                      )}
                    </div>

                    {/* Price & Quantity Adjuster */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-black text-yellow-400">
                        Rs. {cartItem.totalPrice}
                      </span>

                      <div className="flex items-center gap-2 bg-[#222230] px-2 py-1 rounded-lg border border-white/10">
                        <button
                          onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity - 1)}
                          className="w-6 h-6 rounded bg-[#2a2a3c] text-white flex items-center justify-center hover:bg-red-600 text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white w-4 text-center">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity + 1)}
                          className="w-6 h-6 rounded bg-[#2a2a3c] text-white flex items-center justify-center hover:bg-orange-500 text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-[#191924] border-t border-white/10 space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-gray-400 font-medium">
                  <span>Subtotal</span>
                  <span className="text-white font-bold">Rs. {subtotal}</span>
                </div>
                <div className="flex items-center justify-between text-gray-400 font-medium">
                  <span>Delivery Charge</span>
                  <span className="text-emerald-400 font-black">FREE (Rs. 0)</span>
                </div>
                <div className="flex items-center justify-between text-base font-black text-white pt-2 border-t border-white/10">
                  <span>Total Payable</span>
                  <span className="text-xl text-yellow-400">Rs. {total}</span>
                </div>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-xl transition-all transform active:scale-95"
              >
                <Flame className="w-5 h-5 text-yellow-200" />
                <span>CHECKOUT (Rs. {total})</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
