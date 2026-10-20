import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, ArrowRight, Flame, Sparkles } from 'lucide-react';
import { DoodleChili, DoodleLime, DoodleFlame, DoodleSate } from './FoodDoodles';

const SHOWCASE_ITEMS = [
  {
    id: "taichan-mix",
    name: "Sate Taichan Mix",
    portion: "10 Tusuk (Daging + Kulit)",
    price: "Rp 35.000",
    image: "/menu/sate_taichan_jakarta.jpg",
    tag: "Paling Laris"
  },
  {
    id: "taichan-paha",
    name: "Sate Taichan Paha",
    portion: "10 Tusuk Daging Paha",
    price: "Rp 35.000",
    image: "/menu/sate_taichan_semarang.jpg",
    tag: "Super Juicy"
  },
  {
    id: "paket-sultan",
    name: "Paket Sultan 30 Tusuk",
    portion: "Porsi Ramean + Lontong",
    price: "Rp 115.000",
    image: "/menu/paket_sultan.jpg",
    tag: "Spesial Rombongan"
  }
];

export default function Hero({ onExploreMenu, onOrderDirect }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto carousel rotation for dish showcase
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentItem = SHOWCASE_ITEMS[currentIndex];

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#fdfbf7]">
      
      {/* ==========================================================
          TWO-TONE SPLIT BACKGROUND (SIGNATURE DRIBBBLE ARCHITECTURE)
          ========================================================== */}
      
      {/* Tone 1: Base Warm Ivory Linen (Full Section) */}
      <div className="absolute inset-0 bg-[#fdfbf7]" />

      {/* Tone 2: Warm Spiced Terracotta Peach Block (Behind Food Showcase) */}
      {/* Mobile: Bottom half with rounded top | Desktop: Right 48% with signature Dribbble curve */}
      <div className="absolute inset-x-0 bottom-0 top-[52%] lg:top-0 lg:left-auto lg:right-0 lg:w-[48%] xl:w-[46%] bg-[#fde5da] border-t lg:border-t-0 lg:border-l border-orange-200/80 rounded-t-[40px] lg:rounded-t-none lg:rounded-l-[120px] xl:rounded-l-[140px] pointer-events-none overflow-hidden shadow-[-16px_0_40px_rgba(28,25,23,0.04)]">
        {/* Soft Warm Radial Hearth Radiance inside Tone 2 */}
        <div className="absolute top-1/4 -right-10 w-[480px] h-[480px] bg-gradient-to-br from-orange-300/40 via-amber-200/35 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-16 left-6 w-[400px] h-[400px] bg-gradient-to-tr from-rose-200/35 to-transparent rounded-full blur-2xl" />
        
        {/* Tone 2 Culinary Doodles */}
        <div className="absolute top-20 right-10 opacity-25 select-none">
          <DoodleChili className="w-22 h-22 text-red-600" rotate={-20} />
        </div>
        <div className="absolute bottom-16 left-12 opacity-25 select-none hidden lg:block">
          <DoodleFlame className="w-18 h-18 text-orange-600" rotate={15} />
        </div>
      </div>

      {/* Tone 1 Ambient Glows & Doodles (Left Side) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-24 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-rose-200/30 via-orange-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-28 left-8 opacity-20 select-none">
          <DoodleLime className="w-20 h-20 text-emerald-700" rotate={20} />
        </div>
        <div className="absolute bottom-16 left-12 opacity-20 select-none hidden sm:block">
          <DoodleSate className="w-24 h-24 text-amber-800" rotate={45} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ==========================================================
              LEFT COLUMN: HERO COPY & CALL-TO-ACTIONS (DRIBBBLE STYLE)
              ========================================================== */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            
            {/* Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold text-red-600 tracking-wide uppercase">
                Sate Taichan Paling Dicari di Margonda
              </span>
            </div>

            {/* Bold Confident Headline */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-[1.12]">
              Daging Ayam Tebal. <br />
              <span className="text-gradient-flame">Sambal Rawit Segar.</span>
            </h1>

            {/* Appetizing Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-stone-600 font-medium leading-relaxed max-w-xl">
              Sate taichan daging ayam paha empuk juicy, kulit crispy gurih & siraman sambal rawit merah uleg jeruk nipis asli khas Taichan 56 Margonda. Dipanggang segar di atas arang batok kelapa asli.
            </p>

            {/* Action Buttons (Strictly 1 Row) */}
            <div className="pt-1 flex flex-row items-center gap-3 w-full max-w-sm sm:max-w-md justify-center lg:justify-start">
              <button
                onClick={onOrderDirect}
                className="flex-1 px-5 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-red-600/30 hover:shadow-red-600/40 active:scale-95 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>Pesan Sekarang</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="flex-1 px-5 sm:px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs sm:text-sm border border-stone-300 hover:border-stone-400 shadow-sm transition-all active:scale-95 flex items-center justify-center whitespace-nowrap"
              >
                <span>Lihat Menu</span>
              </button>
            </div>

            {/* Social Proof & Operating Hours */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-stone-600 border-t border-stone-200/80 w-full max-w-lg">
              <div className="flex items-center gap-1.5 font-bold text-stone-900">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>4.8 / 5.0</span>
                <span className="text-stone-400 font-normal hidden xs:inline">(1.200+ Ulasan)</span>
              </div>
              <span className="text-stone-300">•</span>
              <div className="flex items-center gap-1.5 font-semibold text-stone-700">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>Buka 18.00 - 02.00 WIB</span>
              </div>
            </div>

          </motion.div>

          {/* ==========================================================
              RIGHT COLUMN: SIGNATURE DRIBBBLE FOOD SHOWCASE WITH FLOATING CARDS
              ========================================================== */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative flex items-center justify-center py-6 sm:py-8"
          >
            
            {/* Center Dish Presentation with Multi-Layer Glow */}
            <div className="relative">
              
              {/* Warm Ambient Backlight Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/25 via-amber-400/20 to-red-500/20 rounded-full blur-2xl transform scale-105" />

              {/* Main Circular Plate Presentation */}
              <div className="relative w-64 sm:w-80 md:w-96 lg:w-[410px] aspect-square rounded-full p-2.5 sm:p-3 bg-white shadow-[0_24px_60px_rgba(234,88,12,0.18)] border-4 sm:border-8 border-white flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentItem.id}
                    src={currentItem.image} 
                    alt={currentItem.name}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover rounded-full"
                  />
                </AnimatePresence>

                {/* Subtle Food Gloss Reflection */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/15 via-transparent to-white/20 pointer-events-none" />
              </div>

              {/* FLOATING CARD 1 (Top-Right): Signature Menu Favorit */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 sm:-top-5 sm:-right-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-xl border border-stone-200/90 flex items-center gap-2.5 z-20"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 font-bold flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] sm:text-[11px] text-stone-500 font-semibold block leading-tight">
                    {currentItem.tag}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 block leading-tight">
                    {currentItem.name}
                  </span>
                  <span className="text-xs font-black text-red-600 leading-tight">
                    {currentItem.price}
                  </span>
                </div>
              </motion.div>

              {/* FLOATING CARD 2 (Bottom-Left): 100% Arang Batok */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 -left-2 sm:-bottom-5 sm:-left-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-xl border border-stone-200/90 flex items-center gap-2.5 z-20"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold flex-shrink-0">
                  <Flame className="w-5 h-5 text-orange-600" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] sm:text-[11px] text-orange-600 font-bold block leading-tight">
                    100% Arang Batok
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-stone-900 block leading-tight">
                    Daging Paha Empuk
                  </span>
                  <span className="text-[10px] text-stone-500 font-medium leading-tight">
                    Aroma Smokey Gurih
                  </span>
                </div>
              </motion.div>

              {/* FLOATING BADGE 3 (Bottom-Right): Sambal Rawit Segar */}
              <div className="hidden sm:flex absolute bottom-8 -right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-stone-200/90 items-center gap-2 z-20">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-stone-800">Sambal Rawit Uleg Asli</span>
              </div>

            </div>

            {/* Carousel Switcher Dots */}
            <div className="absolute -bottom-4 inset-x-0 flex items-center justify-center gap-2 z-20">
              {SHOWCASE_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-7 bg-red-600 shadow-sm' 
                      : 'w-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Lihat ${item.name}`}
                />
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
