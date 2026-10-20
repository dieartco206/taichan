import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Flame, ArrowRight, ShoppingBag, Sparkles, UtensilsCrossed } from 'lucide-react';
import { DoodleChili, DoodleFlame, DoodleCobek, DoodleLime } from './FoodDoodles';

export default function CinematicFallingSate({ onOrderDirect, onExploreMenu }) {
  const containerRef = useRef(null);

  // Track scroll progress across the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Butter-smooth spring physics for organic Apple-style momentum
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001
  });

  // ==========================================================
  // SCROLL-DRIVEN FALLING SATE ANIMATIONS (JATUH KE PIRING)
  // ==========================================================

  // Sate Skewers descending from top down into the plate
  const sateY = useTransform(smoothProgress, [0.15, 0.70], [-260, 0]);
  const sateScale = useTransform(smoothProgress, [0.15, 0.70], [1.35, 1.0]);
  const sateRotate = useTransform(smoothProgress, [0.15, 0.70], [-8, 0]);
  const sateOpacity = useTransform(smoothProgress, [0.08, 0.22], [0, 1]);

  // Shadow on the plate that grows darker and tighter as sate approaches
  const plateShadowOpacity = useTransform(smoothProgress, [0.35, 0.70], [0, 0.65]);
  const plateShadowScale = useTransform(smoothProgress, [0.35, 0.70], [0.5, 1.0]);

  // Plate zoom and focus as sate lands
  const plateScale = useTransform(smoothProgress, [0.10, 0.70, 1.0], [0.92, 1.0, 1.03]);

  // Chili splash particles when sate lands
  const splashScale = useTransform(smoothProgress, [0.68, 0.82], [0.2, 1.2]);
  const splashOpacity = useTransform(smoothProgress, [0.68, 0.78, 0.95], [0, 1, 0.8]);

  // Rising heat smoke when landed
  const steamY = useTransform(smoothProgress, [0.70, 1.0], [0, -40]);
  const steamOpacity = useTransform(smoothProgress, [0.70, 0.85, 1.0], [0, 0.7, 0.4]);

  // ==========================================================
  // STORYTELLING TYPOGRAPHY PHASES
  // ==========================================================
  
  // Phase 1: Dari Panggangan Arang (0% - 35%)
  const phase1Opacity = useTransform(smoothProgress, [0.0, 0.25, 0.35], [1, 1, 0]);
  const phase1Y = useTransform(smoothProgress, [0.0, 0.35], [0, -30]);

  // Phase 2: Meluncur Turun (35% - 70%)
  const phase2Opacity = useTransform(smoothProgress, [0.35, 0.45, 0.62, 0.70], [0, 1, 1, 0]);
  const phase2Y = useTransform(smoothProgress, [0.35, 0.45, 0.62, 0.70], [30, 0, 0, -30]);

  // Phase 3: Mendarat di Piring (72% - 100%)
  const phase3Opacity = useTransform(smoothProgress, [0.72, 0.82, 1.0], [0, 1, 1]);
  const phase3Y = useTransform(smoothProgress, [0.72, 0.82], [30, 0]);

  return (
    <section 
      id="cinematic-sate" 
      ref={containerRef} 
      className="relative h-[270vh] bg-[#fff2ee] border-y border-red-200/70 select-none overflow-hidden"
    >
      
      {/* Background Culinary Food Doodles (Matches Warm Website Theme) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Warm Culinary Ambient Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-amber-300/25 via-rose-300/20 to-orange-200/20 rounded-full blur-[120px]" />
        
        {/* Decorative Culinary Doodles */}
        <div className="absolute top-16 left-10 opacity-30 select-none">
          <DoodleChili className="w-24 h-24 text-red-600/40" rotate={-25} />
        </div>
        <div className="absolute top-20 right-12 opacity-30 select-none">
          <DoodleFlame className="w-24 h-24 text-orange-600/40" rotate={15} />
        </div>
        <div className="absolute bottom-24 left-14 opacity-25 select-none hidden sm:block">
          <DoodleCobek className="w-24 h-24 text-stone-600/35" rotate={-10} />
        </div>
        <div className="absolute bottom-20 right-16 opacity-30 select-none hidden sm:block">
          <DoodleLime className="w-20 h-20 text-emerald-700/35" rotate={30} />
        </div>
      </div>

      {/* Pinned Sticky Stage: Stays centered on screen while user scrolls */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between py-10 sm:py-14 px-4 sm:px-6 overflow-hidden">
        
        {/* ==========================================================
            TOP STORYTELLING HEADLINE (UPDATES WITH SCROLL)
            ========================================================== */}
        <div className="relative z-20 w-full max-w-2xl mx-auto text-center pt-8 sm:pt-10">
          
          {/* Phase 1: Dipanggang Membara */}
          <motion.div 
            style={{ opacity: phase1Opacity, y: phase1Y }}
            className="space-y-2 pointer-events-none"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 border border-orange-300 text-orange-700 text-xs font-bold tracking-wide shadow-sm">
              <Flame className="w-3.5 h-3.5 text-orange-600 animate-bounce" />
              <span>Baru Diangkat Dari Panggangan Arang</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight">
              Dipanggang dengan bara api.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium max-w-lg mx-auto">
              Scroll ke bawah untuk melihat sate taichan meluncur jatuh langsung ke piringmu...
            </p>
          </motion.div>

          {/* Phase 2: Sate Meluncur Turun */}
          <motion.div 
            style={{ opacity: phase2Opacity, y: phase2Y }}
            className="absolute inset-x-0 top-8 sm:top-10 space-y-2 pointer-events-none"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Daging Ayam Paha Empuk & Kulit Crispy</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight">
              Jatuh empuk & juicy.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium max-w-lg mx-auto">
              Semakin di-scroll, semakin dekat sate mendarat di atas piring saji hangat.
            </p>
          </motion.div>

          {/* Phase 3: Mendarat di Piring */}
          <motion.div 
            style={{ opacity: phase3Opacity, y: phase3Y }}
            className="absolute inset-x-0 top-8 sm:top-10 space-y-2 pointer-events-auto"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-100 border border-red-300 text-red-700 text-xs font-bold tracking-wide shadow-sm">
              <UtensilsCrossed className="w-3.5 h-3.5 text-red-600" />
              <span>Siap Disantap • Sambal Rawit Uleg Melimpah</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight">
              Mendarat sempurna di piringmu!
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium max-w-lg mx-auto">
              Disiram sambal rawit merah uleg pedas segar & kucuran jeruk nipis asli khas Margonda.
            </p>

            {/* Action Buttons when landed */}
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={onOrderDirect}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-600/30 active:scale-95 transition-all flex items-center gap-1.5 group"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Pesan Porsi Ini</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs sm:text-sm border border-stone-300 shadow-sm transition-all active:scale-95"
              >
                Lihat Menu
              </button>
            </div>
          </motion.div>

        </div>

        {/* ==========================================================
            CENTER STAGE: SATE JATUH KE PIRING (SCROLL-DRIVEN)
            ========================================================== */}
        <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center -mt-6 sm:-mt-10">
          
          {/* THE SERVING PLATE (PIRING SAJI TAICHAN DI BAWAH) */}
          <motion.div 
            style={{ scale: plateScale }}
            className="relative w-72 sm:w-96 md:w-[440px] aspect-square rounded-full shadow-[0_24px_60px_rgba(28,25,23,0.18)] p-2 bg-gradient-to-b from-stone-200 via-stone-100 to-stone-300 border-4 border-white flex items-center justify-center overflow-hidden"
          >
            {/* Real High-Res Photo of Sate Taichan Serving Plate with Sambal & Lime */}
            <img 
              src="/menu/sate_taichan_jakarta.jpg" 
              alt="Piring Saji Sate Taichan 56" 
              className="w-full h-full object-cover rounded-full filter contrast-105 brightness-95"
            />

            {/* Banana leaf & plate gloss reflection */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/10 via-transparent to-white/20 pointer-events-none" />

            {/* Dynamic Shadow Cast by the Falling Sate onto the Plate */}
            <motion.div 
              style={{
                opacity: plateShadowOpacity,
                scale: plateShadowScale
              }}
              className="absolute inset-8 rounded-full bg-stone-950/40 blur-md pointer-events-none -z-0"
            />

            {/* Sambal & Chili Splash Sparks when Landed */}
            <motion.div 
              style={{
                scale: splashScale,
                opacity: splashOpacity
              }}
              className="absolute inset-0 rounded-full border-4 border-red-500/30 pointer-events-none"
            />
          </motion.div>

          {/* SATE SKEWERS MELUNCUR TURUN KE PIRING (FALLING COMPONENT) */}
          <motion.div 
            style={{
              y: sateY,
              scale: sateScale,
              rotate: sateRotate,
              opacity: sateOpacity
            }}
            className="absolute -top-10 sm:-top-16 w-60 sm:w-80 md:w-96 pointer-events-none z-20 flex flex-col items-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
          >
            {/* Authentic Macro Close-Up of Sate Skewers Cutout */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/60 bg-white/20 backdrop-blur-sm">
              <img 
                src="/menu/sate_taichan_semarang.jpg" 
                alt="Sate Taichan Jatuh ke Piring" 
                className="w-full h-full object-cover object-center filter brightness-100 contrast-110"
              />
              <div className="absolute inset-x-0 bottom-0 py-1.5 px-3 bg-gradient-to-t from-black/75 to-transparent text-white text-[10px] sm:text-xs font-bold text-center">
                🍢 Daging Paha Empuk & Kulit Crispy
              </div>
            </div>

            {/* Realistic Skewer Bamboo Tips pointing down into the plate */}
            <div className="w-1.5 h-10 bg-gradient-to-b from-[#c5925a] to-[#ab8352] rounded-full -mt-1 shadow-md" />
          </motion.div>

          {/* Rising Heat Steam Puff after Landing */}
          <motion.div 
            style={{
              y: steamY,
              opacity: steamOpacity
            }}
            className="absolute top-1/4 w-32 h-16 bg-gradient-to-t from-white/30 via-white/15 to-transparent rounded-full blur-xl pointer-events-none z-30"
          />

        </div>

        {/* ==========================================================
            BOTTOM SCROLL PROGRESS INDICATOR (WARM THEME)
            ========================================================== */}
        <div className="relative z-20 w-full max-w-sm mx-auto flex items-center justify-between text-[11px] text-stone-500 font-semibold px-4 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            <span>Dipanggang</span>
          </div>

          <div className="flex-1 mx-3 h-1.5 bg-red-200/80 rounded-full overflow-hidden">
            <motion.div 
              style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
              className="h-full bg-gradient-to-r from-orange-500 via-rose-500 to-red-600 rounded-full"
            />
          </div>

          <div className="flex items-center gap-1">
            <span>Mendarat</span>
            <span className="text-red-600 font-bold">100%</span>
          </div>
        </div>

      </div>

    </section>
  );
}
