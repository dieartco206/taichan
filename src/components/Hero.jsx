import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6 flex flex-col items-center justify-center max-w-4xl mx-auto"
        >
          
          {/* Main Appetite Headline (Strictly 2 Lines) */}
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.12] drop-shadow-2xl">
            <span className="text-gradient-flame block whitespace-nowrap">Daging Tebal.</span>
            <span className="text-white block whitespace-nowrap">Sambal Rawit Segar.</span>
          </h1>

          {/* Clean 1-Sentence Tagline */}
          <p className="text-sm sm:text-lg text-stone-200/90 font-medium leading-relaxed max-w-xl mx-auto drop-shadow-md">
            Sate taichan daging ayam paha empuk juicy dengan siraman sambal rawit uleg pedas segar khas Margonda.
          </p>

          {/* Clean Action Buttons */}
          <div className="pt-2 w-full max-w-xs sm:max-w-sm mx-auto">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onOrderDirect}
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-red-600/40 hover:shadow-red-600/50 transition-all flex items-center justify-center gap-1.5 group active:scale-95 whitespace-nowrap"
              >
                <span>Pesan Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-xs sm:text-sm border border-white/30 hover:border-white/50 transition-all shadow-lg flex items-center justify-center gap-1.5 active:scale-95 whitespace-nowrap"
              >
                <span>Lihat Menu</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
