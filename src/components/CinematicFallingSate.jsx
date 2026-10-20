import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Flame, ArrowRight, Sparkles, UtensilsCrossed, ShoppingBag } from 'lucide-react';

/**
 * High-Craft Authentic Sate Taichan Skewer SVG
 * Features:
 * - Bamboo skewer stick with wood grain & tapered tip
 * - Tender, juicy white chicken meat (daging paha) with golden char marks & oil shine
 * - Crispy golden wavy chicken skin (kulit)
 * - Chili flecks & seasoning speckles
 */
function RealisticSateSkewer({ type = 'daging', className = '', highlight = false }) {
  const isSkin = type === 'kulit';

  return (
    <svg 
      viewBox="0 0 100 380" 
      className={`w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Bamboo skewer gradient */}
        <linearGradient id="bambooGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c29b68" />
          <stop offset="40%" stopColor="#ebd4b0" />
          <stop offset="70%" stopColor="#dfbe8f" />
          <stop offset="100%" stopColor="#ab8352" />
        </linearGradient>

        {/* Meat piece 3D radial gradient (Juicy chicken thigh) */}
        <radialGradient id="meatGrad1" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fffbf2" />
          <stop offset="45%" stopColor="#faecd6" />
          <stop offset="80%" stopColor="#ebd1aa" />
          <stop offset="100%" stopColor="#cfab7e" />
        </radialGradient>

        {/* Charred Grill Mark Gradient */}
        <linearGradient id="charGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#632608" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#3d1403" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#220b02" stopOpacity="0.8" />
        </linearGradient>

        {/* Crispy Skin Gradient */}
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="35%" stopColor="#f59e0b" />
          <stop offset="75%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>

        {/* Oil Shine Highlight */}
        <linearGradient id="oilShine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 1. Bamboo Skewer Stick */}
      {/* Skewer lower handle */}
      <rect x="47.5" y="10" width="5" height="360" rx="2.5" fill="url(#bambooGrad)" />
      {/* Bamboo sharpened tip */}
      <polygon points="47.5,12 50,0 52.5,12" fill="#edd6b4" />
      {/* Bamboo grain lines */}
      <line x1="49" y1="20" x2="49" y2="355" stroke="#966e3b" strokeWidth="0.75" strokeOpacity="0.4" />

      {/* 2. Meat Pieces (Chunks stacked along the upper half) */}
      {!isSkin ? (
        <g>
          {/* Piece 1 (Top chunk near tip) */}
          <g transform="translate(0, 30)">
            <ellipse cx="50" cy="30" rx="26" ry="21" fill="url(#meatGrad1)" />
            {/* 3D Depth Curve */}
            <path d="M 28 32 C 34 46, 66 46, 72 32 C 67 49, 33 49, 28 32 Z" fill="#b88f5e" fillOpacity="0.45" />
            {/* Grill char mark 1 */}
            <path d="M 33 24 Q 48 30 63 22" stroke="url(#charGrad)" strokeWidth="3.5" strokeLinecap="round" />
            {/* Grill char mark 2 */}
            <path d="M 38 35 Q 52 40 67 33" stroke="url(#charGrad)" strokeWidth="3" strokeLinecap="round" />
            {/* Oil sheen curve */}
            <ellipse cx="44" cy="22" rx="10" ry="4" fill="url(#oilShine)" transform="rotate(-15 44 22)" />
            {/* Chili flake */}
            <circle cx="56" cy="36" r="1.8" fill="#e11d48" />
            <circle cx="40" cy="27" r="1.2" fill="#ef4444" />
          </g>

          {/* Piece 2 (Second chunk) */}
          <g transform="translate(0, 72)">
            <ellipse cx="50" cy="30" rx="29" ry="23" fill="url(#meatGrad1)" />
            <path d="M 25 32 C 32 48, 68 48, 75 32 C 70 52, 30 52, 25 32 Z" fill="#b88f5e" fillOpacity="0.5" />
            <path d="M 30 25 Q 48 32 68 23" stroke="url(#charGrad)" strokeWidth="4" strokeLinecap="round" />
            <path d="M 36 37 Q 52 43 66 36" stroke="url(#charGrad)" strokeWidth="3.2" strokeLinecap="round" />
            <ellipse cx="43" cy="21" rx="11" ry="4" fill="url(#oilShine)" transform="rotate(-10 43 21)" />
            <circle cx="62" cy="28" r="1.6" fill="#dc2626" />
            <circle cx="48" cy="39" r="1.4" fill="#f97316" />
          </g>

          {/* Piece 3 (Third chunk - largest, juicy center) */}
          <g transform="translate(0, 116)">
            <ellipse cx="50" cy="30" rx="31" ry="24" fill="url(#meatGrad1)" />
            <path d="M 23 33 C 30 50, 70 50, 77 33 C 71 54, 29 54, 23 33 Z" fill="#b88f5e" fillOpacity="0.5" />
            <path d="M 28 24 Q 50 33 72 23" stroke="url(#charGrad)" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 34 36 Q 52 44 68 36" stroke="url(#charGrad)" strokeWidth="3.5" strokeLinecap="round" />
            <ellipse cx="42" cy="20" rx="12" ry="5" fill="url(#oilShine)" transform="rotate(-12 42 20)" />
            <circle cx="58" cy="34" r="2" fill="#e11d48" />
            <circle cx="36" cy="30" r="1.5" fill="#ef4444" />
          </g>

          {/* Piece 4 (Bottom chunk) */}
          <g transform="translate(0, 160)">
            <ellipse cx="50" cy="30" rx="27" ry="22" fill="url(#meatGrad1)" />
            <path d="M 27 32 C 34 47, 66 47, 73 32 C 68 50, 32 50, 27 32 Z" fill="#b88f5e" fillOpacity="0.5" />
            <path d="M 32 25 Q 48 31 66 23" stroke="url(#charGrad)" strokeWidth="3.8" strokeLinecap="round" />
            <path d="M 36 36 Q 50 42 63 36" stroke="url(#charGrad)" strokeWidth="2.8" strokeLinecap="round" />
            <ellipse cx="44" cy="21" rx="9" ry="4" fill="url(#oilShine)" transform="rotate(-15 44 21)" />
            <circle cx="53" cy="27" r="1.5" fill="#dc2626" />
          </g>
        </g>
      ) : (
        /* Sate Kulit (Crispy undulating skin folds with deep golden brown caramelization) */
        <g>
          {/* Kulit fold 1 */}
          <g transform="translate(0, 32)">
            <path 
              d="M 24 30 C 22 18, 45 14, 52 24 C 60 16, 78 20, 76 34 C 74 46, 55 48, 48 38 C 42 46, 26 44, 24 30 Z" 
              fill="url(#skinGrad)" 
            />
            <path d="M 30 24 Q 48 30 68 22" stroke="url(#charGrad)" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="48" cy="24" rx="8" ry="3" fill="url(#oilShine)" />
            <circle cx="62" cy="32" r="1.6" fill="#dc2626" />
          </g>

          {/* Kulit fold 2 */}
          <g transform="translate(0, 74)">
            <path 
              d="M 22 30 C 20 16, 46 12, 53 23 C 62 14, 80 18, 78 35 C 76 48, 56 50, 48 40 C 40 48, 24 46, 22 30 Z" 
              fill="url(#skinGrad)" 
            />
            <path d="M 28 26 Q 50 34 72 24" stroke="url(#charGrad)" strokeWidth="3.6" strokeLinecap="round" />
            <ellipse cx="46" cy="22" rx="10" ry="3.5" fill="url(#oilShine)" />
            <circle cx="36" cy="34" r="1.8" fill="#ef4444" />
          </g>

          {/* Kulit fold 3 */}
          <g transform="translate(0, 118)">
            <path 
              d="M 20 30 C 18 15, 47 11, 54 22 C 63 13, 82 17, 80 35 C 78 50, 57 52, 49 41 C 41 50, 22 48, 20 30 Z" 
              fill="url(#skinGrad)" 
            />
            <path d="M 26 27 Q 52 35 74 25" stroke="url(#charGrad)" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="45" cy="23" rx="11" ry="4" fill="url(#oilShine)" />
            <circle cx="60" cy="30" r="1.5" fill="#dc2626" />
          </g>

          {/* Kulit fold 4 */}
          <g transform="translate(0, 162)">
            <path 
              d="M 24 30 C 22 18, 46 14, 53 24 C 61 16, 78 19, 76 35 C 74 46, 55 48, 48 38 C 42 46, 26 44, 24 30 Z" 
              fill="url(#skinGrad)" 
            />
            <path d="M 30 25 Q 49 32 68 24" stroke="url(#charGrad)" strokeWidth="3.2" strokeLinecap="round" />
            <ellipse cx="48" cy="24" rx="8" ry="3" fill="url(#oilShine)" />
            <circle cx="40" cy="36" r="1.5" fill="#f97316" />
          </g>
        </g>
      )}

      {/* Golden Seasoning Glow if highlighted */}
      {highlight && (
        <circle cx="50" cy="110" r="42" fill="#f59e0b" fillOpacity="0.12" filter="blur(8px)" />
      )}
    </svg>
  );
}

/**
 * Authentic Indonesian Serving Plate with Banana Leaf & Sambal Rawit Pool
 */
function CinematicPlate({ landingProgress, splashTrigger }) {
  return (
    <div className="relative w-80 sm:w-[480px] md:w-[560px] aspect-[16/10] flex items-center justify-center select-none pointer-events-none">
      
      {/* 1. Deep Ceramic Stoneware Plate Base */}
      <div 
        className="absolute inset-0 rounded-[48%] bg-gradient-to-b from-[#2b2520] via-[#1c1714] to-[#120f0d] shadow-[0_30px_90px_rgba(0,0,0,0.9),inset_0_4px_12px_rgba(255,255,255,0.1)] border border-[#3e352d]/60 flex items-center justify-center overflow-hidden"
      >
        {/* Subtle Stoneware Rim Highlight */}
        <div className="absolute inset-1.5 sm:inset-2 rounded-[48%] border border-white/[0.08]" />

        {/* 2. Banana Leaf Liner (Daun Pisang Tradisional) */}
        <div className="relative w-[92%] h-[88%] rounded-[46%] bg-gradient-to-br from-[#234b1e] via-[#2f5e27] to-[#1e3f19] shadow-inner overflow-hidden flex items-center justify-center border border-[#3e7534]/40">
          
          {/* Banana Leaf Fine Linear Ribs */}
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.15) 5px, transparent 6px)',
            }}
          />

          {/* Banana Leaf Center Midrib Spine */}
          <div className="absolute inset-y-0 w-1.5 bg-[#457e38]/50 blur-[0.5px] rotate-[-12deg]" />

          {/* 3. Pool of Authentic Sambal Rawit Uleg & Jeruk Nipis Oil */}
          <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 w-32 sm:w-44 h-24 sm:h-32 rounded-[50%_40%_60%_45%] bg-gradient-to-br from-red-600 via-rose-700 to-amber-600/90 shadow-[0_0_35px_rgba(225,29,72,0.45)] border border-red-500/40 blur-[0.2px] overflow-hidden flex items-center justify-center">
            {/* Glistening rawit chili oil swirl */}
            <div className="absolute inset-1 rounded-[50%_40%_60%_45%] bg-gradient-to-tr from-amber-500/30 via-red-500/40 to-transparent" />
            
            {/* Chili Seeds & Chopped Rawit Flecks */}
            <div className="absolute top-3 left-6 w-2 h-1.5 rounded-full bg-amber-200/90 shadow-sm" />
            <div className="absolute bottom-4 right-8 w-2 h-1.5 rounded-full bg-amber-100/90 shadow-sm" />
            <div className="absolute top-7 right-5 w-1.5 h-1.5 rounded-full bg-amber-200/80" />
            <div className="absolute bottom-6 left-8 w-2 h-1 rounded-full bg-yellow-100/90" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-4 rounded-full bg-white/20 blur-[1px]" />
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white/90 drop-shadow">
              Sambal Rawit
            </span>
          </div>

          {/* 4. Fresh Lime Wedge (Jeruk Nipis Potong) on the Leaf */}
          <div className="absolute left-6 sm:left-12 bottom-4 sm:bottom-6 w-10 sm:w-14 h-10 sm:h-14 rounded-full bg-emerald-600 border-2 border-emerald-400/80 shadow-md flex items-center justify-center rotate-12 overflow-hidden">
            <div className="w-8 sm:w-11 h-8 sm:h-11 rounded-full bg-emerald-500/90 border border-white/40 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-emerald-200/90" />
            </div>
          </div>

          {/* 5. Crisp Rice / Lontong Daun Wedge hint */}
          <div className="absolute left-6 sm:left-14 top-4 sm:top-6 px-2.5 py-1 rounded-lg bg-emerald-900/60 border border-emerald-500/30 text-[9px] font-bold text-emerald-200/90 shadow">
            Lontong Daun
          </div>

          {/* Landing Splash Rings when Skewers Hit */}
          {splashTrigger && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 1 }}
              animate={{ scale: 1.6, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-10 rounded-full border-2 border-amber-400/50 pointer-events-none"
            />
          )}

        </div>
      </div>

      {/* Realistic Shadow Cast by the Plate onto the table */}
      <div className="absolute -bottom-6 w-3/4 h-8 bg-black/80 rounded-full blur-xl -z-10" />
    </div>
  );
}

export default function CinematicFallingSate({ onOrderDirect, onExploreMenu }) {
  const containerRef = useRef(null);

  // Track scroll progress within this tall interactive container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring physics for butter-smooth cinematic motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001
  });

  // ==========================================================
  // PARALLAX PHYSICS FOR 5 DISTINCT SATE SKEWERS FALLING DOWN
  // ==========================================================

  // Skewer 1: Sate Ayam Daging Paha (Kiri Luar)
  const y1 = useTransform(smoothProgress, [0.12, 0.65], [-550, 0]);
  const rotate1 = useTransform(smoothProgress, [0.12, 0.65], [-35, -12]);
  const scale1 = useTransform(smoothProgress, [0.12, 0.65], [1.3, 0.95]);
  const opacity1 = useTransform(smoothProgress, [0.08, 0.20], [0, 1]);

  // Skewer 2: Sate Kulit Crispy (Kiri Tengah)
  const y2 = useTransform(smoothProgress, [0.18, 0.70], [-600, 8]);
  const rotate2 = useTransform(smoothProgress, [0.18, 0.70], [-20, -5]);
  const scale2 = useTransform(smoothProgress, [0.18, 0.70], [1.35, 0.98]);
  const opacity2 = useTransform(smoothProgress, [0.12, 0.24], [0, 1]);

  // Skewer 3: Sate Taichan Daging Utama (Center Hero Skewer)
  const y3 = useTransform(smoothProgress, [0.22, 0.72], [-650, 0]);
  const rotate3 = useTransform(smoothProgress, [0.22, 0.72], [15, 0]);
  const scale3 = useTransform(smoothProgress, [0.22, 0.72], [1.45, 1.05]);
  const opacity3 = useTransform(smoothProgress, [0.15, 0.28], [0, 1]);

  // Skewer 4: Sate Ayam Daging Paha (Kanan Tengah)
  const y4 = useTransform(smoothProgress, [0.16, 0.68], [-580, 6]);
  const rotate4 = useTransform(smoothProgress, [0.16, 0.68], [25, 7]);
  const scale4 = useTransform(smoothProgress, [0.16, 0.68], [1.3, 0.98]);
  const opacity4 = useTransform(smoothProgress, [0.10, 0.22], [0, 1]);

  // Skewer 5: Sate Kulit Crispy (Kanan Luar)
  const y5 = useTransform(smoothProgress, [0.24, 0.75], [-620, -4]);
  const rotate5 = useTransform(smoothProgress, [0.24, 0.75], [38, 14]);
  const scale5 = useTransform(smoothProgress, [0.24, 0.75], [1.35, 0.95]);
  const opacity5 = useTransform(smoothProgress, [0.18, 0.30], [0, 1]);

  // Dynamic Shadow Opacity on Plate as Skewers Approach
  const shadowOpacity = useTransform(smoothProgress, [0.35, 0.72], [0, 0.75]);
  const shadowScale = useTransform(smoothProgress, [0.35, 0.72], [0.4, 1]);

  // Chili Specks & Splash Particles Fly-in
  const chiliY = useTransform(smoothProgress, [0.55, 0.78], [-200, 0]);
  const chiliOpacity = useTransform(smoothProgress, [0.52, 0.72], [0, 1]);
  const chiliRotate = useTransform(smoothProgress, [0.55, 0.78], [180, 25]);

  // Lime Squeeze Juice Drops
  const limeJuiceScale = useTransform(smoothProgress, [0.68, 0.85], [0, 1.3]);
  const limeJuiceOpacity = useTransform(smoothProgress, [0.68, 0.85, 0.98], [0, 0.9, 0]);

  // Grill Steam Particles Rising when landed
  const steamY = useTransform(smoothProgress, [0.70, 0.98], [0, -70]);
  const steamOpacity = useTransform(smoothProgress, [0.70, 0.85, 1], [0, 0.6, 0.2]);

  // Narrative Text Sequence Transitions
  const stage1Opacity = useTransform(smoothProgress, [0.0, 0.28, 0.36], [1, 1, 0]);
  const stage2Opacity = useTransform(smoothProgress, [0.36, 0.45, 0.65, 0.74], [0, 1, 1, 0]);
  const stage3Opacity = useTransform(smoothProgress, [0.74, 0.84, 1.0], [0, 1, 1]);

  // Percent text for interactive scroll HUD
  const hudProgress = useTransform(smoothProgress, [0, 1], [0, 100]);

  return (
    <section 
      id="cinematic-sate" 
      ref={containerRef} 
      className="relative h-[280vh] bg-[#110f0e] text-white select-none"
    >
      
      {/* Pinned Sticky Stage - Stays fixed on screen while user scrolls through container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between overflow-hidden px-4 sm:px-6 py-8 sm:py-12">
        
        {/* Background Ambient Culinary Lighting (Hot Charcoal Hearth Glow) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top Smoky Ambient Warmth */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-orange-600/15 via-red-600/10 to-transparent rounded-full blur-[120px]" />
          
          {/* Plate Spotlight Glow */}
          <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/12 rounded-full blur-[100px]" />

          {/* Floating Ember Particles */}
          <div className="absolute top-1/4 left-10 w-1.5 h-1.5 rounded-full bg-orange-400 blur-[0.5px] animate-pulse" />
          <div className="absolute top-1/3 right-14 w-2 h-2 rounded-full bg-amber-300 blur-[0.5px] animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-1/4 left-20 w-1 h-1 rounded-full bg-red-400" />
        </div>

        {/* ==========================================================
            HEADER HUD & STORYTELLING HEADLINES (CHANGES ON SCROLL)
            ========================================================== */}
        <div className="relative z-30 w-full max-w-3xl mx-auto text-center pt-10 sm:pt-14">
          
          {/* Stage 1: Fresh From the Grill (0% - 35%) */}
          <motion.div 
            style={{ opacity: stage1Opacity }}
            className="space-y-2 pointer-events-none"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <Flame className="w-3.5 h-3.5 text-orange-400 animate-bounce" />
              <span>Baru Diangkat Dari Panggangan Arang</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight drop-shadow-xl">
              Dipanggang Sempurna Selagi Panas.
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-medium max-w-lg mx-auto">
              Scroll ke bawah perlahan untuk melihat sate meluncur dan mendarat langsung ke piring saji...
            </p>
          </motion.div>

          {/* Stage 2: Sate Falling Through Air (36% - 72%) */}
          <motion.div 
            style={{ opacity: stage2Opacity }}
            className="absolute inset-x-0 top-10 sm:top-14 space-y-2 pointer-events-none"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Daging Ayam Paha Empuk & Kulit Crispy</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight drop-shadow-xl">
              Tebal, Gurih & Kaya Kaldu Gurih.
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-medium max-w-lg mx-auto">
              Potongan daging ayam pilihan berpadu aroma arang batok kelapa khas Margonda.
            </p>
          </motion.div>

          {/* Stage 3: Landed On Plate (75% - 100%) */}
          <motion.div 
            style={{ opacity: stage3Opacity }}
            className="absolute inset-x-0 top-10 sm:top-14 space-y-2 pointer-events-auto"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <UtensilsCrossed className="w-3.5 h-3.5 text-red-400" />
              <span>Siap Santap • Sambal Rawit Melimpah</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight drop-shadow-xl">
              Mendarat Sempurna di Piringmu!
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-medium max-w-lg mx-auto">
              Siraman sambal rawit merah uleg pedas menggigit & perasan jeruk nipis segar asli Taichan 56.
            </p>

            {/* Direct Order Action Button */}
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={onOrderDirect}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-red-600/40 active:scale-95 transition-all flex items-center gap-2 group"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Pesan Porsi Ini Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
              >
                <span>Lihat Menu</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* ==========================================================
            CENTER CINEMATIC SCENE: THE PLATE & FALLING SATE SKEWERS
            ========================================================== */}
        <div className="relative z-20 w-full flex-1 flex flex-col items-center justify-center -mt-6 sm:-mt-8">
          
          {/* Sate Shadows on Plate (Grows darker & sharper as skewers land) */}
          <motion.div 
            style={{ 
              opacity: shadowOpacity,
              scale: shadowScale
            }}
            className="absolute bottom-16 sm:bottom-20 w-64 sm:w-80 h-16 bg-black/60 rounded-[50%] blur-md pointer-events-none -z-0"
          />

          {/* SATE SKEWERS DROPPING IN PARALLAX (5 TUSUK SATE) */}
          <div className="relative w-80 sm:w-96 h-80 sm:h-96 flex items-center justify-center pointer-events-none">
            
            {/* Skewer 1: Ayam Paha (Left-most) */}
            <motion.div 
              style={{
                y: y1,
                rotate: rotate1,
                scale: scale1,
                opacity: opacity1,
                x: -75
              }}
              className="absolute w-20 sm:w-24 h-64 sm:h-76 origin-bottom"
            >
              <RealisticSateSkewer type="daging" />
            </motion.div>

            {/* Skewer 2: Kulit Crispy (Left-mid) */}
            <motion.div 
              style={{
                y: y2,
                rotate: rotate2,
                scale: scale2,
                opacity: opacity2,
                x: -38
              }}
              className="absolute w-20 sm:w-24 h-64 sm:h-76 origin-bottom z-10"
            >
              <RealisticSateSkewer type="kulit" />
            </motion.div>

            {/* Skewer 3: Center Signature Jumbo Taichan (Center Hero) */}
            <motion.div 
              style={{
                y: y3,
                rotate: rotate3,
                scale: scale3,
                opacity: opacity3,
                x: 0
              }}
              className="absolute w-22 sm:w-26 h-68 sm:h-80 origin-bottom z-20"
            >
              <RealisticSateSkewer type="daging" highlight={true} />
            </motion.div>

            {/* Skewer 4: Ayam Paha (Right-mid) */}
            <motion.div 
              style={{
                y: y4,
                rotate: rotate4,
                scale: scale4,
                opacity: opacity4,
                x: 38
              }}
              className="absolute w-20 sm:w-24 h-64 sm:h-76 origin-bottom z-10"
            >
              <RealisticSateSkewer type="daging" />
            </motion.div>

            {/* Skewer 5: Kulit Crispy (Right-most) */}
            <motion.div 
              style={{
                y: y5,
                rotate: rotate5,
                scale: scale5,
                opacity: opacity5,
                x: 75
              }}
              className="absolute w-20 sm:w-24 h-64 sm:h-76 origin-bottom"
            >
              <RealisticSateSkewer type="kulit" />
            </motion.div>

            {/* Flying Sambal Rawit Splashes (Drops with skewers) */}
            <motion.div
              style={{
                y: chiliY,
                opacity: chiliOpacity,
                rotate: chiliRotate,
                x: 55
              }}
              className="absolute z-25 pointer-events-none"
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 shadow-md border border-red-300" />
            </motion.div>

            {/* Lime Juice Splash Drops */}
            <motion.div
              style={{
                scale: limeJuiceScale,
                opacity: limeJuiceOpacity,
                x: -60,
                y: 40
              }}
              className="absolute z-25 pointer-events-none"
            >
              <div className="w-3 h-3 rounded-full bg-emerald-300/80 blur-[0.5px] border border-white" />
            </motion.div>

            {/* Rising Heat Smoke Particles */}
            <motion.div
              style={{
                y: steamY,
                opacity: steamOpacity
              }}
              className="absolute top-10 inset-x-0 flex items-center justify-center pointer-events-none z-30"
            >
              <div className="w-24 h-16 bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full blur-xl animate-pulse" />
            </motion.div>

          </div>

          {/* THE SERVING PLATE (Positioned right beneath the landing zone) */}
          <div className="relative -mt-16 sm:-mt-20 z-0">
            <CinematicPlate />
          </div>

        </div>

        {/* ==========================================================
            BOTTOM CINEMATIC SCROLL PROGRESS HUD
            ========================================================== */}
        <div className="relative z-30 w-full max-w-md mx-auto flex items-center justify-between text-[11px] text-stone-400 font-semibold px-4 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span>Dipanggang</span>
          </div>

          <div className="flex-1 mx-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
              className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-red-500 rounded-full"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span>Siap Santap</span>
            <span className="text-orange-400 font-bold">100%</span>
          </div>
        </div>

      </div>

    </section>
  );
}
