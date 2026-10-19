import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
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
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      
      {/* Full-Bleed Sate Taichan Background - Clean & Free of White Wash */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Taichan Food Photography Canvas */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={currentItem.image} 
              alt={currentItem.name} 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Clear Cinematic Culinary Dark Tint - Zero Milky White Wash */}
        <div className="absolute inset-0 bg-stone-950/55 backdrop-blur-[0.5px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5 sm:space-y-6 flex flex-col items-center justify-center max-w-3xl mx-auto"
        >
          
          {/* Main Appetite Headline: Centered, Bold & Confident */}
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl xl:text-7xl text-white tracking-tight leading-tight sm:leading-none drop-shadow-xl">
            <span className="text-gradient-flame">Daging Tebal.</span> <br />
            <span className="text-white">Sambal Rawit Segar.</span>
          </h1>

          {/* Sub-headline slogan */}
          <p className="text-xs sm:text-base md:text-lg text-stone-200 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Sate taichan daging ayam paha empuk juicy, kulit crispy gurih & siraman sambal rawit merah uleg jeruk nipis asli khas Taichan 56 Margonda. Buka sampai 02.00 WIB.
          </p>

          {/* Social Proof & Hours (Frosted Dark Glass Badges) */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs">
            <div className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white shadow-lg">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-white">4.8 / 5.0</span>
              <span className="text-stone-300 hidden xs:inline">(GoFood • Grab • ShopeeFood)</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-orange-400/40 text-orange-300 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="font-bold">Buka 18.00 - 02.00</span>
              <span className="text-stone-300 hidden xs:inline">(Dine-in & Bungkus)</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-400/40 text-emerald-300 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="font-bold">100% Halal</span>
            </div>
          </div>

          {/* Call To Action Buttons (Strict Single Row on Mobile & Desktop) */}
          <div className="pt-2 w-full max-w-sm sm:max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
              <button
                onClick={onOrderDirect}
                className="w-full px-3 sm:px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-red-600/40 hover:shadow-red-600/50 transition-all flex items-center justify-center gap-1.5 group active:scale-95 whitespace-nowrap"
              >
                <span>Pesan Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="w-full px-3 sm:px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white hover:text-white font-bold text-xs sm:text-sm border border-white/30 hover:border-white/50 transition-all shadow-lg flex items-center justify-center gap-1.5 active:scale-95 whitespace-nowrap"
              >
                <span>Lihat Menu</span>
              </button>
            </div>
          </div>

          {/* Online Delivery Sub-link */}
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-stone-300 pt-1 drop-shadow">
            <span>Tersedia di:</span>
            <a
              href={RESTAURANT_INFO.shopeefoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center gap-0.5 transition-colors underline"
            >
              ShopeeFood <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span>•</span>
            <span className="font-medium text-white">GoFood</span>
            <span>•</span>
            <span className="font-medium text-white">GrabFood</span>
          </div>

          {/* Location Info */}
          <div className="pt-1 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-stone-300 text-center drop-shadow">
            <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
            <span>Jl. Margonda Raya (Samping KFC Margonda, Depok)</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
