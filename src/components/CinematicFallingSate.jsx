import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function CinematicFallingSate({ onOrderDirect, onExploreMenu }) {
  const containerRef = useRef(null);

  // Track scroll position across the 320vh height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Butter-smooth spring interpolation (Apple-style inertia)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 25,
    restDelta: 0.001
  });

  // ==========================================================
  // IMAGE OPACITY & SCALE TRANSFORMS (APPLE CAMERA ZOOM SEQUENCE)
  // ==========================================================
  
  // Photo 1: Sizzling Grill over Charcoal (Phase 1: 0.0 - 0.38)
  const photo1Opacity = useTransform(smoothProgress, [0.0, 0.28, 0.38], [1, 1, 0]);
  const photo1Scale = useTransform(smoothProgress, [0.0, 0.38], [1.1, 1.0]);

  // Photo 2: Macro Close-Up Sate Skewers Descending (Phase 2: 0.30 - 0.72)
  const photo2Opacity = useTransform(smoothProgress, [0.30, 0.38, 0.65, 0.72], [0, 1, 1, 0]);
  const photo2Y = useTransform(smoothProgress, [0.30, 0.70], [-180, 20]);
  const photo2Scale = useTransform(smoothProgress, [0.30, 0.70], [1.25, 1.0]);

  // Photo 3: Landed on Plate with Sambal Rawit (Phase 3: 0.68 - 1.0)
  const photo3Opacity = useTransform(smoothProgress, [0.68, 0.76, 1.0], [0, 1, 1]);
  const photo3Scale = useTransform(smoothProgress, [0.68, 1.0], [0.92, 1.05]);
  const photo3Y = useTransform(smoothProgress, [0.68, 1.0], [40, 0]);

  // ==========================================================
  // TYPOGRAPHY SEQUENCING (APPLE MINIMALIST TEXT OVERLAYS)
  // ==========================================================
  
  // Stage 1 Text: "Dari bara arang kelapa."
  const text1Opacity = useTransform(smoothProgress, [0.0, 0.22, 0.32], [1, 1, 0]);
  const text1Y = useTransform(smoothProgress, [0.0, 0.32], [0, -40]);

  // Stage 2 Text: "Jatuh empuk & juicy."
  const text2Opacity = useTransform(smoothProgress, [0.34, 0.44, 0.60, 0.68], [0, 1, 1, 0]);
  const text2Y = useTransform(smoothProgress, [0.34, 0.44, 0.60, 0.68], [40, 0, 0, -40]);

  // Stage 3 Text: "Mendarat di piringmu."
  const text3Opacity = useTransform(smoothProgress, [0.72, 0.82, 1.0], [0, 1, 1]);
  const text3Y = useTransform(smoothProgress, [0.72, 0.82], [40, 0]);

  return (
    <section 
      id="cinematic-sate" 
      ref={containerRef} 
      className="relative h-[320vh] bg-black text-white select-none"
    >
      
      {/* Apple-Style Pinned Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-black">
        
        {/* Subtle Apple-style Mini Sub-Nav */}
        <div className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-8 pt-5 sm:pt-6 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-300 tracking-tight text-sm">Taichan 56</span>
            <span className="text-stone-600">•</span>
            <span className="text-stone-500 font-medium hidden xs:inline">Sensasi Rasa Margonda</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onExploreMenu}
              className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 text-stone-300 hover:text-white font-medium text-xs transition-colors backdrop-blur-md"
            >
              Explore
            </button>
            <button
              onClick={onOrderDirect}
              className="px-3.5 py-1 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              Pesan
            </button>
          </div>
        </div>

        {/* ==========================================================
            CENTER CINEMATIC MACRO STAGE (APPLE CAMERA APERTURE STYLE)
            ========================================================== */}
        <div className="relative z-10 w-full flex-1 flex items-center justify-center px-4 sm:px-6">
          
          {/* Main Visual Container: Giant High-Res Photo Portal */}
          <div className="relative w-full max-w-4xl h-[56vh] sm:h-[68vh] md:h-[74vh] rounded-3xl overflow-hidden bg-stone-950 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.9)] flex items-center justify-center">
            
            {/* PHOTO 1: Sizzling Skewers on the Grill */}
            <motion.div 
              style={{
                opacity: photo1Opacity,
                scale: photo1Scale
              }}
              className="absolute inset-0"
            >
              <img 
                src="/brand/bg_hero_grill.jpg" 
                alt="Sate Taichan di atas bara arang" 
                className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
              />
              {/* Deep Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
            </motion.div>

            {/* PHOTO 2: Macro Close-up of Sate Descending Through Air */}
            <motion.div 
              style={{
                opacity: photo2Opacity,
                y: photo2Y,
                scale: photo2Scale
              }}
              className="absolute inset-0"
            >
              <img 
                src="/menu/sate_taichan_semarang.jpg" 
                alt="Daging paha sate taichan juicy" 
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
              />
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/70" />
            </motion.div>

            {/* PHOTO 3: Sate Landed on Plate with Sambal Rawit & Jeruk Nipis */}
            <motion.div 
              style={{
                opacity: photo3Opacity,
                scale: photo3Scale,
                y: photo3Y
              }}
              className="absolute inset-0"
            >
              <img 
                src="/menu/sate_taichan_jakarta.jpg" 
                alt="Sate Taichan mendarat di piring dengan sambal rawit" 
                className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
              />
              {/* Warm Rim Lighting Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
            </motion.div>

            {/* Apple-style Outer Vignette Frame */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-3xl" />

            {/* ==========================================================
                APPLE-STYLE TYPOGRAPHY OVERLAYS (CENTERED OVER VISUAL)
                ========================================================== */}
            
            {/* Stage 1: Arang Batok Kelapa */}
            <motion.div 
              style={{
                opacity: text1Opacity,
                y: text1Y
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
            >
              <span className="text-amber-400/90 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3 drop-shadow">
                Arang Batok Kelapa Asli
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight drop-shadow-2xl max-w-2xl">
                Bara api yang menyala.
              </h2>
              <p className="text-stone-300 text-xs sm:text-base font-medium max-w-md mx-auto mt-2 sm:mt-3 drop-shadow-md">
                Daging ayam segar pilihan dipanggang langsung di atas arang membara hingga matang merata.
              </p>
            </motion.div>

            {/* Stage 2: Sate Meluncur Jatuh */}
            <motion.div 
              style={{
                opacity: text2Opacity,
                y: text2Y
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
            >
              <span className="text-orange-400/90 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3 drop-shadow">
                Daging Paha & Kulit Crispy
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight drop-shadow-2xl max-w-2xl">
                Jatuh empuk & juicy.
              </h2>
              <p className="text-stone-300 text-xs sm:text-base font-medium max-w-md mx-auto mt-2 sm:mt-3 drop-shadow-md">
                Tekstur luar garing keemasan dengan kaldu gurih meresap di setiap tusukan.
              </p>
            </motion.div>

            {/* Stage 3: Mendarat di Piring */}
            <motion.div 
              style={{
                opacity: text3Opacity,
                y: text3Y
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-auto"
            >
              <span className="text-red-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3 drop-shadow">
                Sambal Rawit Uleg Mendadak
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight drop-shadow-2xl max-w-2xl">
                Mendarat di piringmu.
              </h2>
              <p className="text-stone-300 text-xs sm:text-base font-medium max-w-md mx-auto mt-2 sm:mt-3 drop-shadow-md">
                Disiram sambal rawit merah uleg pedas segar & perasan jeruk nipis asli khas Margonda.
              </p>

              {/* Apple-style CTA Pills */}
              <div className="mt-5 sm:mt-6 flex items-center justify-center gap-3">
                <button
                  onClick={onOrderDirect}
                  className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-red-600/40 active:scale-95 transition-all flex items-center gap-2 group"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Pesan Sekarang</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onExploreMenu}
                  className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
                >
                  Lihat Menu
                </button>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Apple-Style Minimalist Stage Indicator Dots (Bottom Center) */}
        <div className="relative z-30 pb-6 sm:pb-8 flex items-center gap-3">
          {/* Dot 1 */}
          <motion.div 
            style={{
              opacity: useTransform(smoothProgress, [0, 0.35, 0.40], [1, 1, 0.3]),
              scale: useTransform(smoothProgress, [0, 0.35, 0.40], [1.3, 1.3, 1])
            }}
            className="w-2 h-2 rounded-full bg-white transition-transform"
          />
          {/* Dot 2 */}
          <motion.div 
            style={{
              opacity: useTransform(smoothProgress, [0.35, 0.45, 0.65, 0.72], [0.3, 1, 1, 0.3]),
              scale: useTransform(smoothProgress, [0.35, 0.45, 0.65, 0.72], [1, 1.3, 1.3, 1])
            }}
            className="w-2 h-2 rounded-full bg-white transition-transform"
          />
          {/* Dot 3 */}
          <motion.div 
            style={{
              opacity: useTransform(smoothProgress, [0.70, 0.78, 1], [0.3, 1, 1]),
              scale: useTransform(smoothProgress, [0.70, 0.78, 1], [1, 1.3, 1.3])
            }}
            className="w-2 h-2 rounded-full bg-white transition-transform"
          />
        </div>

      </div>

    </section>
  );
}
