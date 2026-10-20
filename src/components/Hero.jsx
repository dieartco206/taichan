import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowUpRight, Flame, Plus, Check } from 'lucide-react';

const HERO_DISHES = [
  {
    id: "taichan-mix",
    name: "Sate Taichan Mix (Dada + Kulit)",
    portion: "10 Tusuk + Sambal Rawit",
    price: 35000,
    priceFormatted: "Rp 35.000",
    image: "/menu/sate_taichan_jakarta.jpg",
    badge: "Best Seller"
  },
  {
    id: "taichan-paha",
    name: "Sate Taichan Daging Paha",
    portion: "10 Tusuk Full Paha Empuk",
    price: 35000,
    priceFormatted: "Rp 35.000",
    image: "/menu/sate_taichan_semarang.jpg",
    badge: "Super Juicy"
  },
  {
    id: "sate-kulit",
    name: "Sate Kulit Ayam Crispy",
    portion: "10 Tusuk Kulit Renyah",
    price: 32000,
    priceFormatted: "Rp 32.000",
    image: "/menu/sate_kulit.jpg",
    badge: "Garing Gurih"
  },
  {
    id: "paket-sultan",
    name: "Paket Sultan 30 Tusuk",
    portion: "Porsi Rombongan + Lontong",
    price: 115000,
    priceFormatted: "Rp 115.000",
    image: "/menu/paket_sultan.jpg",
    badge: "Paling Hemat"
  }
];

export default function Hero({ onExploreMenu, onOrderDirect, onAddToCart }) {
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const [addedId, setAddedId] = useState(null);

  // Auto-switch main hero dish
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % HERO_DISHES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentDish = HERO_DISHES[currentHeroIdx];

  const handleCardAdd = (dish) => {
    if (onAddToCart) {
      onAddToCart({
        id: dish.id,
        name: dish.name,
        portion: dish.portion,
        price: dish.price,
        qty: 1
      });
      setAddedId(dish.id);
      setTimeout(() => setAddedId(null), 1200);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      
      {/* ==========================================================
          TOP HALF: WARM CREAM LINEN BACKGROUND (#f4efe6)
          ========================================================== */}
      <section className="relative bg-[#f4efe6] pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        
        {/* Subtle decorative curved ambient lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none">
            <path d="M-100,200 C300,50 800,350 1540,120" stroke="#f26922" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 6" />
            <path d="M-50,380 C400,250 900,450 1500,280" stroke="#d97706" strokeWidth="1.2" strokeOpacity="0.25" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Hero Layout: Left Typography vs Right Description & CTA */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-8 sm:mb-12">
            
            {/* Left: Signature Dribbble Split-Colored Headline */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-stone-900">
                <span>Daging </span>
                <span className="text-[#f26922]">Paha</span> <br />
                <span className="text-[#f26922]">Ayam</span>
                <span> Tebal &</span> <br />
                <span className="text-stone-400">Juicy</span>
              </h1>
            </div>

            {/* Right: Subtitle & Reserve / Order Button */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-4 pt-2 text-center lg:text-left">
              <p className="text-xs sm:text-sm md:text-base text-stone-600 font-medium leading-relaxed max-w-sm">
                100% daging ayam paha empuk, kulit crispy gurih & siraman sambal rawit merah uleg jeruk nipis asli khas Taichan 56 Margonda.
              </p>

              <button
                onClick={onOrderDirect}
                className="px-6 py-3 rounded-xl bg-[#f26922] hover:bg-[#e05914] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 active:scale-95 transition-all flex items-center gap-2 group"
              >
                <span>Pesan Sekarang</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* ==========================================================
              CENTERPIECE: GIANT CIRCULAR DISH OVERLAPPING THE DIVIDER
              ========================================================== */}
          <div className="relative flex flex-col items-center justify-center -mb-36 sm:-mb-48 md:-mb-56 z-30">
            
            {/* The Main Round Dish Presentation */}
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[440px] aspect-square rounded-full p-2.5 sm:p-3 bg-white shadow-[0_24px_70px_rgba(20,41,35,0.28)] border-4 sm:border-8 border-white flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentDish.id}
                  src={currentDish.image} 
                  alt={currentDish.name}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.55 }}
                  className="w-full h-full object-cover rounded-full"
                />
              </AnimatePresence>

              {/* Glistening Light Reflection Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/15 via-transparent to-white/20 pointer-events-none" />
            </div>

            {/* FLOATING PILL 1 (LEFT): 10,000+ Happy Guests / Customers */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 sm:left-10 lg:left-24 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/75 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/20 shadow-xl flex items-center gap-2.5 text-white z-40 transition-colors"
            >
              <div className="flex -space-x-1.5 overflow-hidden">
                <img className="inline-block h-6 w-6 rounded-full ring-1 ring-white object-cover" src="/brand/post_1.png" alt="Customer" />
                <img className="inline-block h-6 w-6 rounded-full ring-1 ring-white object-cover" src="/brand/post_2.png" alt="Customer" />
                <img className="inline-block h-6 w-6 rounded-full ring-1 ring-white object-cover" src="/brand/post_3.png" alt="Customer" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold whitespace-nowrap">
                10,000+ Pelanggan Puas
              </span>
            </motion.div>

            {/* FLOATING PILL 2 (RIGHT): 4.8 Rating */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-2 sm:right-10 lg:right-24 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/75 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/20 shadow-xl flex items-center gap-2 text-white z-40 transition-colors"
            >
              <span className="text-xs sm:text-sm font-black text-amber-400">4.8 / 5.0</span>
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span className="text-[10px] sm:text-xs text-stone-300 font-medium hidden xs:inline">
                GoFood & Grab
              </span>
            </motion.div>

            {/* Carousel Dots Under Dish */}
            <div className="mt-4 flex items-center justify-center gap-2 z-40">
              {HERO_DISHES.map((dish, idx) => (
                <button
                  key={dish.id}
                  onClick={() => setCurrentHeroIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentHeroIdx === idx 
                      ? 'w-7 bg-[#f26922] shadow-sm' 
                      : 'w-2 bg-stone-400/80 hover:bg-stone-500'
                  }`}
                  aria-label={`Pilih ${dish.name}`}
                />
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* ==========================================================
          THE ORGANIC BRUSH / RAGGED EDGE DIVIDER
          ========================================================== */}
      <div className="relative w-full bg-[#f4efe6] overflow-hidden leading-none -mb-1 z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          className="w-full h-12 sm:h-16 md:h-20 text-[#142923] fill-current"
        >
          {/* Authentic Ragged Splatter Brush Edge Path */}
          <path d="M0,0 Q30,55 70,30 Q110,65 150,38 Q190,75 230,42 Q270,80 310,35 Q350,68 390,40 Q430,78 470,32 Q510,65 550,44 Q590,82 630,36 Q670,72 710,40 Q750,85 790,34 Q830,76 870,42 Q910,80 950,36 Q990,70 1030,45 Q1070,85 1110,38 Q1150,75 1190,44 Q1230,80 1270,35 Q1310,68 1350,40 Q1390,75 1440,30 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* ==========================================================
          BOTTOM HALF: DEEP FOREST EMERALD (#142923) POPULAR MENU
          ========================================================== */}
      <section className="relative bg-[#142923] pt-36 sm:pt-48 md:pt-56 pb-20 sm:pb-24 overflow-hidden text-white z-10">
        
        {/* Subtle Ambient Decorative Wavy Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
            <path d="M-100,500 C400,300 800,650 1540,400" stroke="#f26922" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M-50,650 C500,450 900,750 1500,520" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.3" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-3 mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-white/20 bg-white/5 text-stone-300 text-xs font-semibold tracking-wide backdrop-blur-md">
              <Flame className="w-3.5 h-3.5 text-[#f26922]" />
              <span>Popular Menu</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight max-w-xl mx-auto">
              Discover our chef's most loved and trending dishes.
            </h2>
          </div>

          {/* 4 Popular Dishes Grid (Cards Inspired by Dribbble) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-10">
            {HERO_DISHES.map((dish) => {
              const isAdded = addedId === dish.id;

              return (
                <div 
                  key={dish.id}
                  className="group relative bg-[#1b342d] hover:bg-[#203e36] border border-white/10 hover:border-[#f26922]/60 rounded-2xl p-3 sm:p-4.5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-lg"
                >
                  {/* Dish Circular Food Photo */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black/20 mb-3 flex items-center justify-center p-2">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Quick Add Button Hover Overlay */}
                    <button
                      onClick={() => handleCardAdd(dish)}
                      className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl"
                      title="Tambah ke Keranjang"
                    >
                      <div className="w-10 h-10 rounded-full bg-white text-[#142923] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        {isAdded ? <Check className="w-5 h-5 text-emerald-600" /> : <Plus className="w-5 h-5 text-[#f26922]" />}
                      </div>
                    </button>
                  </div>

                  {/* Dish Title & Price */}
                  <div className="text-center space-y-1">
                    <h3 className="font-display font-bold text-xs sm:text-sm text-white line-clamp-1 group-hover:text-[#f26922] transition-colors" title={dish.name}>
                      {dish.name}
                    </h3>
                    <div className="text-xs sm:text-sm font-black text-[#f26922]">
                      {dish.priceFormatted}
                    </div>
                  </div>

                  {/* Add to Cart Mobile Helper */}
                  <div className="pt-2 sm:hidden">
                    <button
                      onClick={() => handleCardAdd(dish)}
                      className="w-full py-1 rounded-lg bg-white/10 hover:bg-[#f26922] text-[10px] font-bold text-white transition-colors flex items-center justify-center gap-1"
                    >
                      {isAdded ? <Check className="w-3 h-3 text-emerald-400" /> : <Plus className="w-3 h-3" />}
                      <span>{isAdded ? "Ditambah" : "Tambah"}</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Action: Explore All Menu Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={onExploreMenu}
              className="px-6 py-3 rounded-xl bg-[#f26922] hover:bg-[#e05914] text-white font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/20 active:scale-95 transition-all flex items-center gap-2 group"
            >
              <span>Explore all Menu</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </section>

    </div>
  );
}
