import React from 'react';

export default function TaichanLogo({ size = "md", className = "" }) {
  const sizeMap = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-20 h-20",
    xl: "w-28 h-28"
  };

  return (
    <div className={`relative flex-shrink-0 rounded-full overflow-hidden bg-white border border-stone-200/90 shadow-sm group ${sizeMap[size] || sizeMap.md} ${className}`}>
      
      {/* Outer Subtle Flame Ring */}
      <div className="absolute inset-0 rounded-full border border-red-500/20 group-hover:border-red-500/50 transition-colors z-10 pointer-events-none" />

      {/* High-res Centered Logo Image */}
      <img 
        src="/brand/logo.png" 
        alt="Logo Sate Taichan 56 Djoeanda" 
        className="w-full h-full object-contain object-center rounded-full group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
