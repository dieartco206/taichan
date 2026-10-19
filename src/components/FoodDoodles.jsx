import React from 'react';

/**
 * Modern Culinary Line-Art Doodles for Sate Taichan 56
 * Authentic icons: Sate ayam skewers, Chili rawit, Lime slice, Cobek uleg, Flames, Daun jeruk, Bawang putih.
 */

export function DoodleSate({ className = "w-16 h-16 text-amber-600/20", rotate = 0 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Bamboo skewer stick */}
      <line x1="12" y1="88" x2="88" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Skewer tip */}
      <path d="M85 15 L91 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Meat Chunk 1 */}
      <rect x="24" y="60" width="16" height="16" rx="4" transform="rotate(-45 32 68)" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" />
      {/* Meat Chunk 2 */}
      <rect x="38" y="46" width="17" height="17" rx="4" transform="rotate(-45 46.5 54.5)" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
      {/* Meat Chunk 3 */}
      <rect x="52" y="32" width="16" height="16" rx="4" transform="rotate(-45 60 40)" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" />
      {/* Meat Chunk 4 (Top) */}
      <rect x="65" y="19" width="14" height="14" rx="4" transform="rotate(-45 72 26)" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="2" />
      {/* Grill char mark accents */}
      <line x1="33" y1="65" x2="38" y2="70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="47" y1="51" x2="53" y2="57" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="61" y1="37" x2="66" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleChili({ className = "w-14 h-14 text-red-600/20", rotate = 0 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Chili stem */}
      <path d="M58 20 C 62 14, 68 12, 74 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Stem calyx / leaf cap */}
      <path d="M50 25 C 55 21, 62 22, 65 27 C 62 31, 56 31, 50 25 Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" />
      {/* Curving fiery chili body */}
      <path 
        d="M52 26 C 68 38, 72 62, 58 78 C 48 89, 36 94, 28 92 C 30 84, 38 72, 42 58 C 45 46, 46 34, 52 26 Z" 
        fill="currentColor" 
        fillOpacity="0.12" 
        stroke="currentColor" 
        strokeWidth="2.2" 
        strokeLinejoin="round" 
      />
      {/* Inner spicy highlight vein */}
      <path d="M50 36 C 56 46, 57 60, 48 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleLime({ className = "w-14 h-14 text-emerald-600/20", rotate = 0 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Outer rind ring */}
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5" />
      {/* Inner white pith ring */}
      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
      {/* Center core */}
      <circle cx="50" cy="50" r="4.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
      {/* 6 Lime segments */}
      <path d="M 50 44 C 47 30, 40 22, 50 18 C 60 22, 53 30, 50 44 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 54 48 C 68 45, 76 38, 80 48 C 76 58, 68 51, 54 48 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 53 53 C 65 60, 70 70, 60 76 C 52 70, 57 59, 53 53 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 47 54 C 44 68, 38 76, 28 72 C 26 62, 37 59, 47 54 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 45 49 C 31 52, 23 59, 19 49 C 23 39, 31 46, 45 49 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 48 45 C 36 38, 31 28, 41 22 C 49 28, 44 39, 48 45 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function DoodleCobek({ className = "w-16 h-16 text-stone-600/20", rotate = 0 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Stone Mortar (Cobek Batu) Oval */}
      <ellipse cx="50" cy="58" rx="40" ry="24" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2.5" />
      <ellipse cx="50" cy="56" rx="34" ry="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      {/* Stone base thickness */}
      <path d="M 12 58 C 12 74, 88 74, 88 58" stroke="currentColor" strokeWidth="2" />
      {/* Wooden/Stone Pestle (Ulekan) */}
      <path 
        d="M 54 52 C 58 48, 76 22, 70 16 C 64 10, 48 34, 46 44 Z" 
        fill="currentColor" 
        fillOpacity="0.15" 
        stroke="currentColor" 
        strokeWidth="2.2" 
        strokeLinejoin="round" 
      />
      {/* Sambal rawit droplets in mortar */}
      <circle cx="44" cy="58" r="2.5" fill="currentColor" />
      <circle cx="52" cy="62" r="2" fill="currentColor" />
      <circle cx="36" cy="54" r="1.8" fill="currentColor" />
      <circle cx="58" cy="55" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function DoodleFlame({ className = "w-14 h-14 text-orange-600/20", rotate = 0 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Outer wild flame */}
      <path 
        d="M 50 12 C 54 26, 68 34, 72 48 C 76 62, 70 78, 56 86 C 42 94, 26 84, 24 68 C 22 54, 30 42, 38 32 C 39 42, 44 48, 48 44 C 52 40, 46 24, 50 12 Z" 
        fill="currentColor" 
        fillOpacity="0.12" 
        stroke="currentColor" 
        strokeWidth="2.2" 
        strokeLinejoin="round" 
      />
      {/* Inner flame core */}
      <path 
        d="M 50 48 C 55 56, 58 64, 54 72 C 50 78, 42 80, 38 74 C 35 68, 40 60, 44 56 C 47 53, 48 50, 50 48 Z" 
        fill="currentColor" 
        fillOpacity="0.2" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      {/* Sparks */}
      <circle cx="68" cy="24" r="2" fill="currentColor" />
      <circle cx="30" cy="28" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function DoodleDaunJeruk({ className = "w-12 h-12 text-emerald-700/20", rotate = 0 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Double kaffir lime leaves */}
      {/* Top Leaf */}
      <path 
        d="M 50 14 C 64 24, 66 40, 50 50 C 34 40, 36 24, 50 14 Z" 
        fill="currentColor" 
        fillOpacity="0.12" 
        stroke="currentColor" 
        strokeWidth="2" 
      />
      {/* Bottom Leaf */}
      <path 
        d="M 50 50 C 66 60, 68 76, 50 86 C 32 76, 34 60, 50 50 Z" 
        fill="currentColor" 
        fillOpacity="0.15" 
        stroke="currentColor" 
        strokeWidth="2" 
      />
      {/* Central vein */}
      <line x1="50" y1="14" x2="50" y2="86" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Branch stem */}
      <path d="M 50 86 C 50 90, 52 94, 55 96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleBawang({ className = "w-12 h-12 text-amber-700/20", rotate = 0 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Garlic bulb/clove */}
      <path 
        d="M 50 16 C 52 28, 76 44, 74 68 C 72 82, 58 88, 50 88 C 42 88, 28 82, 26 68 C 24 44, 48 28, 50 16 Z" 
        fill="currentColor" 
        fillOpacity="0.1" 
        stroke="currentColor" 
        strokeWidth="2.2" 
        strokeLinejoin="round" 
      />
      {/* Garlic segments */}
      <path d="M 50 18 C 44 38, 42 66, 50 88" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 50 18 C 56 38, 58 66, 50 88" stroke="currentColor" strokeWidth="1.5" />
      {/* Root base */}
      <path d="M 44 88 C 46 92, 54 92, 56 88" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function DoodleSmoke({ className = "w-16 h-16 text-stone-400/20", rotate = 0 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Swirling grill aroma smoke puffs */}
      <path 
        d="M 35 85 C 25 70, 45 60, 38 45 C 32 32, 50 20, 42 12" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeDasharray="4 4"
      />
      <path 
        d="M 55 88 C 65 72, 48 58, 62 42 C 72 30, 56 18, 66 10" 
        stroke="currentColor" 
        strokeWidth="2.2" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

export function DoodleSpice({ className = "w-10 h-10 text-amber-500/25", rotate = 0 }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Star anise / spice sprinkle */}
      <path 
        d="M 50 10 L 53 40 L 80 25 L 60 50 L 90 50 L 60 55 L 75 80 L 50 62 L 25 80 L 40 55 L 10 50 L 40 50 L 20 25 L 47 40 Z" 
        fill="currentColor" 
        fillOpacity="0.2" 
        stroke="currentColor" 
        strokeWidth="1.8" 
      />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}
