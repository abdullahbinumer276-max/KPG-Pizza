import React from 'react';

export const FlameEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top red-orange light glow */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[400px] h-[400px] bg-yellow-500/05 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating Sparkles / Embers */}
      <div className="absolute top-20 left-[10%] w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse blur-[1px] opacity-70" />
      <div className="absolute top-40 right-[15%] w-2 h-2 bg-orange-500 rounded-full animate-bounce blur-[1px] opacity-60" style={{ animationDuration: '3s' }} />
      <div className="absolute top-3/4 left-[20%] w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse blur-[1px] opacity-60" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-[25%] w-2.5 h-2.5 bg-yellow-500 rounded-full animate-ping opacity-40" style={{ animationDuration: '5s' }} />
    </div>
  );
};
