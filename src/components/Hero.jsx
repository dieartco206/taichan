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
      
      {/* Warm Ambient Bistro Hearth Backdrop with Abstract Artistic Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f3] via-[#fbf8f3] to-[#fbf8f3]" />
        
        {/* Abstract Fluid Organic Gradient Pods (Warm & Visible) */}
        <div className="absolute -top-24 -left-16 w-[480px] h-[480px] bg-gradient-to-br from-amber-300/35 via-orange-200/30 to-transparent rounded-[45%_55%_70%_35%] blur-2xl" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-rose-200/35 via-amber-200/30 to-orange-100/20 rounded-[60%_40%_45%_55%] blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[400px] bg-gradient-to-tr from-orange-200/25 via-amber-100/30 to-transparent rounded-[50%_60%_30%_70%] blur-2xl" />

        {/* Abstract Flowing Contour Waves SVG */}
        <svg 
          className="absolute inset-0 w-full h-full text-stone-400/[0.18]" 
          viewBox="0 0 1440 800" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path 
            d="M-100 250 C 250 150, 450 380, 800 240 C 1150 100, 1350 320, 1600 200" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeDasharray="6 8"
          />
          <path 
            d="M-50 450 C 300 350, 600 580, 950 420 C 1300 260, 1400 480, 1600 380" 
            stroke="currentColor" 
            strokeWidth="1.2" 
          />
          <path 
            d="M100 680 C 400 560, 750 720, 1100 610 C 1350 530, 1500 640, 1650 590" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeDasharray="4 6"
          />
        </svg>

        {/* Abstract Aroma Ripple Rings behind Food Showcase (Right Side) */}
        <svg 
          className="absolute -top-10 right-4 sm:right-16 lg:right-24 w-[500px] sm:w-[620px] h-[500px] sm:h-[620px] text-amber-500/[0.16]" 
          viewBox="0 0 400 400" 
          fill="none"
        >
          <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 5" />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="185" stroke="currentColor" strokeWidth="1.2" strokeDasharray="8 8" />
        </svg>

        {/* Floating Abstract Spice Star & Sparkle Accents */}
        <div className="absolute top-28 left-12 text-amber-500/35 hidden sm:block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-6 text-rose-500/25 hidden md:block">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
          </svg>
        </div>
        <div className="absolute bottom-24 right-1/3 text-orange-500/30 hidden lg:block">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
          </svg>
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
