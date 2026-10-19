import React from 'react';

export default function TaichanLogo({ size = "md", className = "" }) {
  // Size classes
  const sizeMap = {
    sm: "w-9 h-9 text-[10px]",
    md: "w-12 h-12 text-xs",
    lg: "w-20 h-20 text-base",
    xl: "w-28 h-28 text-xl"
  };

  return (
    <div className={`relative flex-shrink-0 flex items-center justify-center rounded-full bg-[#050608] border border-[#ff1a75]/40 shadow-[0_0_20px_rgba(255,26,117,0.35)] overflow-hidden group ${sizeMap[size] || sizeMap.md} ${className}`}>
      
      {/* Outer subtle glow ring */}
      <div className="absolute inset-0 rounded-full border border-[#00e5ff]/30 group-hover:border-[#00e5ff]/60 transition-colors" />

      {/* Actual official logo image with crisp display */}
      <img 
        src="/brand/logo.png" 
        alt="Logo Sate Taichan 56 Djoeanda" 
        className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          // If image fails, fallback to pure CSS neon logo
          e.target.style.display = 'none';
        }}
      />

      {/* Ambient neon backglow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/10 via-[#ff1a75]/15 to-[#00e5ff]/10 pointer-events-none mix-blend-screen" />
    </div>
  );
}
