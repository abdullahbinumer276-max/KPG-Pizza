import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, Flame, Phone, Bike, Home, Sparkles, X } from 'lucide-react';
import { OrderDetails } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';

interface OrderTrackerModalProps {
  order: OrderDetails | null;
  onClose: () => void;
}

export const OrderTrackerModal: React.FC<OrderTrackerModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const [currentStepIndex, setCurrentStepIndex] = useState(1); // 0: Received, 1: Preparing, 2: Baking, 3: Out for delivery, 4: Delivered

  // Simulate progress
  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStepIndex(2), 8000);
    const timer2 = setTimeout(() => setCurrentStepIndex(3), 18000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const steps = [
    { title: 'Order Received', desc: 'Received at KPG Kitchen', icon: CheckCircle2 },
    { title: 'Kitchen Preparing', desc: 'Fresh hand-tossing & topping', icon: Sparkles },
    { title: 'Oven Baking', desc: 'Baking in hot stone oven', icon: Flame },
    { title: 'Out for Delivery', desc: 'Thermal bag rider en route', icon: Bike },
    { title: 'Delivered', desc: 'Hot & fresh at your door', icon: Home },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#161622] border border-orange-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-yellow-300 animate-bounce" />
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
                ORDER TRACKER #{order.orderId}
              </h2>
              <p className="text-xs text-yellow-100 font-medium">Placed at {order.createdAt}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Estimated Time Badge */}
          <div className="bg-[#1f1f2e] p-4 rounded-2xl border border-yellow-400/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400">
                <Clock className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">Estimated Delivery Time</p>
                <p className="text-2xl font-black text-yellow-400">30 – 40 Minutes</p>
              </div>
            </div>
            <span className="bg-emerald-500/20 text-emerald-400 font-extrabold text-xs px-3 py-1.5 rounded-xl border border-emerald-500/30">
              On Schedule
            </span>
          </div>

          {/* Stepper Progress */}
          <div className="space-y-4 relative pl-2">
            <h3 className="text-xs font-black uppercase text-gray-400 tracking-wider">
              Live Cooking & Delivery Status:
            </h3>

            <div className="space-y-6 relative before:absolute before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-white/10">
              {steps.map((step, idx) => {
                const StepIcon = step.icon;
                const isDone = idx < currentStepIndex;
                const isCurrent = idx === currentStepIndex;

                return (
                  <div key={idx} className="relative flex items-start gap-4 z-10">
                    {/* Circle Icon */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                        isDone
                          ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg'
                          : isCurrent
                          ? 'bg-gradient-to-r from-red-600 to-orange-500 border-yellow-400 text-white animate-pulse shadow-lg scale-110'
                          : 'bg-[#181824] border-white/10 text-gray-500'
                      }`}
                    >
                      <StepIcon className="w-5 h-5" />
                    </div>

                    {/* Step Text */}
                    <div className="pt-1">
                      <h4 className={`text-sm font-black uppercase ${isCurrent ? 'text-yellow-400' : isDone ? 'text-white' : 'text-gray-500'}`}>
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Customer & Address Details */}
          <div className="bg-[#1a1a26] p-4 rounded-2xl border border-white/10 space-y-2 text-xs">
            <div className="flex justify-between text-gray-300">
              <span>Customer Name:</span>
              <strong className="text-white">{order.customerName}</strong>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Contact Phone:</span>
              <strong className="text-yellow-300">{order.phone}</strong>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Address:</span>
              <strong className="text-white text-right max-w-[220px]">{order.address}</strong>
            </div>
            <div className="flex justify-between text-gray-300 pt-2 border-t border-white/5">
              <span>Payment Method:</span>
              <strong className="text-emerald-400">Cash on Delivery (Rs. {order.total})</strong>
            </div>
          </div>

          {/* Need Assistance? Call Restaurant */}
          <div className="bg-[#20202e] p-4 rounded-2xl border border-white/10 flex items-center justify-between">
            <div className="text-xs">
              <p className="font-bold text-white uppercase">Questions about your order?</p>
              <p className="text-gray-400">Call KPG Pizza directly</p>
            </div>
            <a
              href={`tel:${RESTAURANT_INFO.phones[0]}`}
              className="flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs uppercase px-3.5 py-2 rounded-xl transition-colors shadow"
            >
              <Phone className="w-3.5 h-3.5 text-red-600 fill-current" />
              <span>Call Hotline</span>
            </a>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#121218] border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full bg-[#2a2a3a] hover:bg-[#36364a] text-white font-black text-xs uppercase py-3.5 rounded-xl transition-colors"
          >
            CLOSE TRACKER
          </button>
        </div>

      </div>
    </div>
  );
};
