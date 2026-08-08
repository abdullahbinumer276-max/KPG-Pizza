import React, { useState } from 'react';
import { X, Phone, MessageSquare, MapPin, User, FileText, CheckCircle, Flame, ShieldAlert, Truck } from 'lucide-react';
import { CartItem, OrderDetails } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderComplete: (order: OrderDetails) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderComplete,
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  // Validate form
  const validate = () => {
    const errs: Record<string, string> = {};
    if (!customerName.trim()) errs.name = 'Full name is required';
    if (!phone.trim()) errs.phone = 'Phone number is required';
    if (!address.trim()) errs.address = 'Delivery address is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Build WhatsApp pre-filled text
  const generateWhatsAppMessage = () => {
    let msg = `*NEW KPG PIZZA ORDER*\n\n`;
    msg += `*Name:* ${customerName || 'Customer'}\n`;
    msg += `*Phone:* ${phone || 'N/A'}\n`;
    msg += `*WhatsApp:* ${whatsapp || phone || 'N/A'}\n`;
    msg += `*Address:* ${address || 'Sidh, Kharian'}\n`;
    if (instructions) msg += `*Instructions:* ${instructions}\n`;
    msg += `\n*ORDER ITEMS:*\n`;

    cartItems.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.item.name}`;
      if (item.selectedSize) msg += ` (${item.selectedSize})`;
      msg += ` x${item.quantity} = Rs. ${item.totalPrice}\n`;
      if (item.selectedExtras.length > 0) {
        msg += `   Extras: ${item.selectedExtras.map((e) => e.name).join(', ')}\n`;
      }
    });

    msg += `\n*Subtotal:* Rs. ${subtotal}`;
    msg += `\n*Delivery:* FREE (Rs. 0)`;
    msg += `\n*TOTAL PAYABLE:* Rs. ${total}`;
    msg += `\n*Payment Method:* Cash on Delivery`;
    return encodeURIComponent(msg);
  };

  const handleWhatsAppOrder = () => {
    if (!validate()) return;
    const msg = generateWhatsAppMessage();
    const url = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${msg}`;
    window.open(url, '_blank');

    // Submit order state
    submitOrderState();
  };

  const handleCashOnDeliveryOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    submitOrderState();
  };

  const submitOrderState = () => {
    const orderId = `KPG-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: OrderDetails = {
      orderId,
      customerName,
      phone,
      whatsapp: whatsapp || phone,
      address,
      instructions,
      paymentMethod: 'Cash on Delivery',
      items: cartItems,
      subtotal,
      deliveryFee: 0,
      total,
      status: 'Preparing',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      estimatedDeliveryMinutes: 35,
    };

    onOrderComplete(newOrder);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#161622] border border-orange-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-[#1b1b2a] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-red-500 animate-pulse" />
            <h2 className="text-2xl font-black uppercase text-white tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
              CHECKOUT & DELIVERY DETAILS
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-[#252536] text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleCashOnDeliveryOrder} className="overflow-y-auto p-6 space-y-6">
          
          {/* Free Delivery Banner */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-red-600/30 via-orange-500/20 to-yellow-500/20 border border-orange-500/30 flex items-center gap-3">
            <Truck className="w-6 h-6 text-yellow-400 shrink-0" />
            <p className="text-xs text-gray-200 font-semibold">
              <strong className="text-yellow-400">FREE HOME DELIVERY:</strong> Opposite Arif Khan Shopping Mall, Kharian Kotla road, Sidh area.
            </p>
          </div>

          {/* Form Inputs Grid */}
          <div className="space-y-4">
            
            {/* Name */}
            <div>
              <label className="text-xs font-bold uppercase text-gray-300 tracking-wider flex items-center gap-1.5 mb-1.5">
                <User className="w-3.5 h-3.5 text-yellow-400" />
                <span>Full Name *</span>
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Malik Muhammad"
                className={`w-full bg-[#12121a] text-white placeholder-gray-500 px-4 py-3 rounded-xl border ${
                  errors.name ? 'border-red-500' : 'border-white/10 focus:border-yellow-400'
                } focus:outline-none text-sm font-medium`}
              />
              {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
            </div>

            {/* Phones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase text-gray-300 tracking-wider flex items-center gap-1.5 mb-1.5">
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0326-7938936"
                  className={`w-full bg-[#12121a] text-white placeholder-gray-500 px-4 py-3 rounded-xl border ${
                    errors.phone ? 'border-red-500' : 'border-white/10 focus:border-yellow-400'
                  } focus:outline-none text-sm font-medium`}
                />
                {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-300 tracking-wider flex items-center gap-1.5 mb-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Number (Optional)</span>
                </label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Same as phone"
                  className="w-full bg-[#12121a] text-white placeholder-gray-500 px-4 py-3 rounded-xl border border-white/10 focus:border-yellow-400 focus:outline-none text-sm font-medium"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="text-xs font-bold uppercase text-gray-300 tracking-wider flex items-center gap-1.5 mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Complete Delivery Address *</span>
              </label>
              <textarea
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="House No / Street / Landmark near Sidh, Kharian"
                className={`w-full bg-[#12121a] text-white placeholder-gray-500 px-4 py-3 rounded-xl border ${
                  errors.address ? 'border-red-500' : 'border-white/10 focus:border-yellow-400'
                } focus:outline-none text-sm font-medium`}
              />
              {errors.address && <p className="text-[11px] text-red-400 mt-1">{errors.address}</p>}
            </div>

            {/* Instructions */}
            <div>
              <label className="text-xs font-bold uppercase text-gray-300 tracking-wider flex items-center gap-1.5 mb-1.5">
                <FileText className="w-3.5 h-3.5 text-yellow-400" />
                <span>Special Cooking or Delivery Instructions</span>
              </label>
              <input
                type="text"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="e.g. Make it extra spicy, call upon arrival"
                className="w-full bg-[#12121a] text-white placeholder-gray-500 px-4 py-3 rounded-xl border border-white/10 focus:border-yellow-400 focus:outline-none text-sm font-medium"
              />
            </div>

            {/* Payment Method Option */}
            <div className="p-4 rounded-2xl bg-[#12121a] border border-yellow-400/40 space-y-2">
              <label className="text-xs font-black uppercase text-yellow-400 tracking-wider block">
                Payment Method:
              </label>
              <div className="flex items-center gap-3 text-sm font-bold text-white bg-[#1c1c28] p-3 rounded-xl border border-white/10">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>Cash on Delivery (Pay when rider arrives)</span>
              </div>
            </div>

            {/* Order Summary Summary Box */}
            <div className="p-4 rounded-2xl bg-[#1b1b28] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Items ({cartItems.reduce((a, b) => a + b.quantity, 0)})</span>
                <span className="text-white font-bold">Rs. {subtotal}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Delivery Fee</span>
                <span className="text-emerald-400 font-black">FREE (Rs. 0)</span>
              </div>
              <div className="flex items-center justify-between text-base font-black text-white pt-2 border-t border-white/10">
                <span>Total Amount</span>
                <span className="text-xl text-yellow-400">Rs. {total}</span>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {/* WhatsApp Direct Order Button */}
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>ORDER ON WHATSAPP</span>
            </button>

            {/* Standard Cash on Delivery Submit */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all"
            >
              <Flame className="w-5 h-5 text-yellow-300" />
              <span>PLACE ORDER (COD)</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
