import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, ArrowRight, ExternalLink, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

const SHOWCASE_ITEMS = [
  {
    id: "taichan-mix",
    name: "Sate Taichan Mix (Dada + Kulit)",
    image: "/menu/sate_taichan_jakarta.jpg",
  },
  {
    id: "taichan-paha",
    name: "Sate Taichan Daging Paha",
    image: "/menu/sate_taichan_semarang.jpg",
  },
  {
    id: "paket-sultan",
    name: "Paket Sultan 30 Tusuk",
    image: "/menu/paket_sultan.jpg",
  }
];

export default function Hero({ onExploreMenu, onOrderDirect }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentItem = SHOWCASE_ITEMS[currentIndex];

  return (
    <section className="relative min-h-[86vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden">
      
      {/* Warm Atmospheric Sizzling Charcoal Grill Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/brand/bg_hero_grill.jpg" 
          alt="Sate Taichan Grill Atmosphere" 
          className="w-full h-full object-cover object-center opacity-45 scale-100 filter brightness-95 contrast-115"
        />
        {/* Warm Vignette & Radiant Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b090d]/65 via-[#0b090d]/80 to-[#0b090d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0b090d]/60 to-[#0b090d]" />
        
        {/* Warm Amber & Fiery Red Ambient Hearth Glows */}
        <div className="absolute -top-10 left-1/4 w-[650px] h-[650px] bg-red-600/25 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-orange-500/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-amber-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action Buttons (Appetite-Driven & Warm) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            
            {/* Top Brand Pill (Warm & Punchy) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/45 border border-red-500/35 backdrop-blur-md shadow-[0_0_20px_rgba(225,29,72,0.25)] max-w-full">
              <span className="flex h-2 w-2 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-slate-200 tracking-wide truncate">
                <span className="text-orange-400 font-extrabold">TAICHAN 56 MARGONDA</span> • Buka 18.00 - 02.00 WIB
              </span>
            </div>

            {/* Main Appetite Headline: Hunger-Inducing & Confident */}
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white tracking-tight leading-tight sm:leading-none">
              <span className="text-gradient-flame">Daging Tebal.</span> <br className="hidden sm:inline" />
              <span className="text-white">Sambal Rawit Segar.</span>
            </h1>

            {/* Sub-headline slogan */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 font-medium leading-relaxed max-w-xl">
              Sate taichan daging ayam paha empuk juicy, kulit crispy gurih & siraman sambal rawit merah uleg jeruk nipis asli khas Taichan 56 Margonda. Buka sampai 02.00 WIB.
            </p>

            {/* Social Proof & Hours (Warm Pill Badges) */}
            <div className="pt-0.5 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs text-slate-300">
              <div className="inline-flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="font-bold text-white">4.8 / 5.0</span>
                <span className="text-slate-400 hidden xs:inline">(GoFood • Grab • ShopeeFood)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-orange-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                <span className="font-bold text-orange-400">Buka 18.00 - 02.00</span>
                <span className="text-slate-400 hidden xs:inline">(Dine-in & Bungkus)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-red-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                <span className="font-bold text-red-400">100% Halal</span>
              </div>
            </div>

            {/* Call To Action Buttons (1 Baris di Mobile & Desktop) */}
            <div className="pt-1 w-full max-w-sm sm:max-w-md">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                <button
                  onClick={onOrderDirect}
                  className="w-full px-3 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(225,29,72,0.45)] hover:shadow-[0_0_35px_rgba(225,29,72,0.65)] transition-all flex items-center justify-center gap-1.5 group active:scale-95 whitespace-nowrap"
                >
                  <span>Pesan Sekarang</span>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={onExploreMenu}
                  className="w-full px-3 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-charcoal-900/90 hover:bg-charcoal-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-orange-500/35 hover:border-orange-400 transition-all flex items-center justify-center gap-1.5 active:scale-95 whitespace-nowrap"
                >
                  <span>Lihat Menu</span>
                </button>
              </div>
            </div>

            {/* Online Delivery Sub-link */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[11px] text-slate-400 pt-0.5">
              <span>Tersedia di:</span>
              <a
                href={RESTAURANT_INFO.shopeefoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-0.5 transition-colors"
              >
                ShopeeFood <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <span>•</span>
              <span className="text-slate-300">GoFood</span>
              <span>•</span>
              <span className="text-slate-300">GrabFood</span>
            </div>

            {/* Location Info */}
            <div className="pt-0.5 flex items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs text-slate-400 text-center lg:text-left">
              <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
              <span className="truncate">Jl. Margonda Raya (Samping KFC Margonda, Depok)</span>
            </div>

          </motion.div>

          {/* Right Column: Gourmet Circular Platter Showcase with Thin Border */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center py-2"
          >
            {/* Warm Hearth Halo Glow Behind Platter */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/35 via-orange-500/25 to-amber-400/20 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Circular Gourmet Plate Presentation (Thin 1px Border & Zero Card Clutter) */}
            <div className="relative w-[320px] h-[320px] sm:w-[410px] sm:h-[410px] lg:w-[460px] lg:h-[460px] rounded-full overflow-hidden border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1.15 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img 
                    src={currentItem.image} 
                    alt={currentItem.name} 
                    className="w-full h-full object-cover object-[42%_center] group-hover:scale-120 transition-transform duration-700"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Subtle Soft Vignette Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/45 via-transparent to-black/15 pointer-events-none" />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
