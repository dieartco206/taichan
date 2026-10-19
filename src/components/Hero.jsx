import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, ArrowRight, ExternalLink, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { DoodleSate, DoodleChili, DoodleLime, DoodleFlame, DoodleSmoke, DoodleSpice } from './FoodDoodles';

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
      
      {/* Warm Ambient Bistro Hearth Backdrop with Culinary Abstract Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f3] via-[#fbf8f3] to-[#fbf8f3]" />
        
        {/* Abstract Fluid Organic Gradient Pods (Warm & Visible) */}
        <div className="absolute -top-24 -left-16 w-[480px] h-[480px] bg-gradient-to-br from-amber-300/35 via-orange-200/30 to-transparent rounded-[45%_55%_70%_35%] blur-2xl" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-rose-200/35 via-amber-200/30 to-orange-100/20 rounded-[60%_40%_45%_55%] blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[400px] bg-gradient-to-tr from-orange-200/25 via-amber-100/30 to-transparent rounded-[50%_60%_30%_70%] blur-2xl" />

        {/* Abstract Food Line Art Doodles - Sate Taichan Theme */}
        {/* Sate Skewer 1 (Top Left) */}
        <div className="absolute top-16 left-8 sm:left-14 select-none opacity-40 hover:opacity-70 transition-opacity">
          <DoodleSate className="w-24 h-24 sm:w-28 sm:h-28 text-amber-700/30" rotate={25} />
        </div>

        {/* Cabai Rawit (Top Center) */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 select-none opacity-35 hidden sm:block">
          <DoodleChili className="w-16 h-16 text-red-600/35" rotate={-15} />
        </div>

        {/* Jeruk Nipis Slice (Mid Left) */}
        <div className="absolute top-1/2 -left-4 sm:left-6 select-none opacity-40">
          <DoodleLime className="w-20 h-20 sm:w-24 sm:h-24 text-emerald-700/30" rotate={35} />
        </div>

        {/* Sate Skewer 2 (Behind Showcase Platter Right) */}
        <div className="absolute top-20 right-6 sm:right-16 select-none opacity-40">
          <DoodleSate className="w-28 h-28 sm:w-36 sm:h-36 text-amber-800/25" rotate={-45} />
        </div>

        {/* Smoke Swirls (Behind Platter Right) */}
        <div className="absolute top-1/3 right-1/4 select-none opacity-30 hidden md:block">
          <DoodleSmoke className="w-28 h-28 text-stone-500/25" rotate={10} />
        </div>

        {/* Cabai Rawit Merah (Bottom Left) */}
        <div className="absolute bottom-20 left-1/4 select-none opacity-40 hidden sm:block">
          <DoodleChili className="w-20 h-20 text-red-600/35" rotate={40} />
        </div>

        {/* Flame Ember (Bottom Center) */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 select-none opacity-35">
          <DoodleFlame className="w-24 h-24 text-orange-600/30" rotate={0} />
        </div>

        {/* Jeruk Nipis (Bottom Right) */}
        <div className="absolute bottom-16 right-10 select-none opacity-40 hidden sm:block">
          <DoodleLime className="w-20 h-20 text-emerald-700/30" rotate={-20} />
        </div>

        {/* Spice Stars & Sparkles */}
        <div className="absolute top-36 left-1/3 opacity-30 hidden lg:block">
          <DoodleSpice className="w-12 h-12 text-amber-600/30" rotate={15} />
        </div>
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
            
            {/* Main Appetite Headline: Hunger-Inducing & Confident */}
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-stone-900 tracking-tight leading-tight sm:leading-none">
              <span className="text-gradient-flame">Daging Tebal.</span> <br className="hidden sm:inline" />
              <span className="text-stone-900">Sambal Rawit Segar.</span>
            </h1>

            {/* Sub-headline slogan */}
            <p className="text-xs sm:text-sm md:text-base text-stone-600 font-medium leading-relaxed max-w-xl">
              Sate taichan daging ayam paha empuk juicy, kulit crispy gurih & siraman sambal rawit merah uleg jeruk nipis asli khas Taichan 56 Margonda. Buka sampai 02.00 WIB.
            </p>

            {/* Social Proof & Hours (Warm Pill Badges) */}
            <div className="pt-0.5 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs text-stone-700">
              <div className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-stone-200 shadow-2xs">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span className="font-bold text-stone-900">4.8 / 5.0</span>
                <span className="text-stone-500 hidden xs:inline">(GoFood • Grab • ShopeeFood)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-orange-200 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span className="font-bold text-orange-700">Buka 18.00 - 02.00</span>
                <span className="text-stone-500 hidden xs:inline">(Dine-in & Bungkus)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span className="font-bold text-emerald-700">100% Halal</span>
              </div>
            </div>

            {/* Call To Action Buttons (1 Baris di Mobile & Desktop) */}
            <div className="pt-1 w-full max-w-sm sm:max-w-md">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                <button
                  onClick={onOrderDirect}
                  className="w-full px-3 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-red-600/30 hover:shadow-red-600/40 transition-all flex items-center justify-center gap-1.5 group active:scale-95 whitespace-nowrap"
                >
                  <span>Pesan Sekarang</span>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={onExploreMenu}
                  className="w-full px-3 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 hover:text-stone-950 font-bold text-xs sm:text-sm border border-stone-300 hover:border-stone-400 transition-all shadow-2xs flex items-center justify-center gap-1.5 active:scale-95 whitespace-nowrap"
                >
                  <span>Lihat Menu</span>
                </button>
              </div>
            </div>

            {/* Online Delivery Sub-link */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[11px] text-stone-500 pt-0.5">
              <span>Tersedia di:</span>
              <a
                href={RESTAURANT_INFO.shopeefoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center gap-0.5 transition-colors"
              >
                ShopeeFood <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <span>•</span>
              <span className="text-stone-600 font-medium">GoFood</span>
              <span>•</span>
              <span className="text-stone-600 font-medium">GrabFood</span>
            </div>

            {/* Location Info */}
            <div className="pt-0.5 flex items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs text-stone-600 text-center lg:text-left">
              <MapPin className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
              <span className="truncate">Jl. Margonda Raya (Samping KFC Margonda, Depok)</span>
            </div>

          </motion.div>

          {/* Right Column: Gourmet Circular Platter Showcase with Thin Rim */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center py-2"
          >
            {/* Warm Hearth Halo Glow Behind Platter */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/40 via-orange-300/30 to-red-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Circular Gourmet Plate Presentation (Clean White Rim & Soft Natural Shadow) */}
            <div className="relative w-[320px] h-[320px] sm:w-[410px] sm:h-[410px] lg:w-[460px] lg:h-[460px] rounded-full overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(28,25,23,0.18)] group">
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
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-stone-900/25 via-transparent to-transparent pointer-events-none" />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
