import React from 'react';

export default function TaichanLogo({ size = "md", className = "" }) {
  const sizeMap = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-20 h-20",
    xl: "w-28 h-28"
  };

  return (
    <div className={`relative flex-shrink-0 rounded-full overflow-hidden bg-[#07080e] border border-[#ff1a75]/40 shadow-[0_0_20px_rgba(255,26,117,0.4)] group ${sizeMap[size] || sizeMap.md} ${className}`}>
      
      {/* Outer Cyan Glow Ring */}
      <div className="absolute inset-0 rounded-full border border-[#00e5ff]/40 group-hover:border-[#00e5ff]/80 transition-colors z-10 pointer-events-none" />

      {/* High-res Centered Logo Image */}
      <img 
        src="/brand/logo.png" 
        alt="Logo Sate Taichan 56 Djoeanda" 
        className="w-full h-full object-cover object-center rounded-full group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
