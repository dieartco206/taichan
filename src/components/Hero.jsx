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
      
      {/* Full-Bleed Sate Taichan Background with Warm Editorial Mask */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Taichan Food Photography Canvas */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={currentItem.image} 
              alt={currentItem.name} 
              className="w-full h-full object-cover object-[center_right] sm:object-[65%_center] lg:object-[72%_center]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Seamless Warm Ivory Editorial Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf8f3] via-[#fbf8f3]/95 sm:via-[#fbf8f3]/85 lg:via-[#fbf8f3]/65 to-[#fbf8f3]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f3]/90 via-transparent to-[#fbf8f3]" />
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

          {/* Right Column: Interactive Menu Showcase Badge on Top of the Food Background */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center py-4"
          >
            <div className="p-4 sm:p-5 rounded-3xl bg-white/92 backdrop-blur-md border border-stone-200/90 shadow-[0_12px_36px_rgba(28,25,23,0.12)] max-w-sm space-y-2 text-left pointer-events-auto">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-[10px] font-extrabold uppercase tracking-wide">
                  <Flame className="w-3 h-3 fill-red-600 text-red-600" />
                  Andalan Margonda
                </span>
                <span className="text-[11px] font-bold text-amber-600">★ 4.8</span>
              </div>

              <h3 className="font-display font-extrabold text-base sm:text-lg text-stone-900 leading-snug">
                {currentItem.name}
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed">
                Daging ayam tebal empuk dibakar gurih, disajikan dengan sambal rawit uleg asli dan perasan jeruk nipis segar.
              </p>

              {/* Dish Carousel Switcher */}
              <div className="pt-2 flex items-center justify-between border-t border-stone-100 text-xs">
                <span className="text-[11px] text-stone-500 font-medium">Ganti Tampilan Menu:</span>
                <div className="flex items-center gap-1.5">
                  {SHOWCASE_ITEMS.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        currentIndex === idx 
                          ? 'w-6 bg-red-600 shadow-sm' 
                          : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                      }`}
                      title={item.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
