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
          TOP HALF: WARM CREAM LINEN BACKGROUND (#f5efe6)
          Compact & Tight Spacing matching Dribbble Reference
          ========================================================== */}
      <section className="relative bg-[#f5efe6] pt-24 sm:pt-28 pb-0 overflow-visible">
        
        {/* Subtle decorative curved ambient lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1440 500" fill="none">
            <path d="M-100,160 C300,40 800,280 1540,100" stroke="#f26922" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 6" />
            <path d="M-50,300 C400,180 900,380 1500,220" stroke="#dc2626" strokeWidth="1.2" strokeOpacity="0.25" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Hero Layout: Left Typography vs Right Description & CTA */}
          <div className="grid lg:grid-cols-12 gap-6 items-center mb-4 sm:mb-6">
            
            {/* Left: Signature Dribbble Split-Colored Headline */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-stone-900">
                <span>Daging </span>
                <span className="text-[#f26922]">Paha</span> <br />
                <span className="text-[#f26922]">Ayam</span>
                <span> Tebal &</span> <br />
                <span className="text-stone-400">Juicy</span>
              </h1>
            </div>

            {/* Right: Subtitle & Order Button */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-3 pt-1 text-center lg:text-left">
              <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed max-w-sm">
                100% daging ayam paha empuk, kulit crispy gurih & siraman sambal rawit merah uleg jeruk nipis asli khas Taichan 56 Margonda.
              </p>

              <button
                onClick={onOrderDirect}
                className="px-6 py-2.5 sm:py-3 rounded-xl bg-[#f26922] hover:bg-[#e05914] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/25 active:scale-95 transition-all flex items-center gap-2 group whitespace-nowrap"
              >
                <span>Pesan Sekarang</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* ==========================================================
              CENTERPIECE: GIANT CIRCULAR DISH OVERLAPPING THE DIVIDER
              Exactly 50% on Cream & 50% on Dark Red (#2d080b)
              ========================================================== */}
          <div className="relative flex flex-col items-center justify-center -mb-32 sm:-mb-44 lg:-mb-52 z-30">
            
            {/* The Main Round Dish Presentation */}
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[410px] aspect-square rounded-full p-2.5 sm:p-3 bg-white shadow-[0_20px_60px_rgba(45,8,11,0.28)] border-4 sm:border-8 border-white flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentDish.id}
                  src={currentDish.image} 
                  alt={currentDish.name}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </AnimatePresence>

              {/* Glistening Light Reflection Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/15 via-transparent to-white/20 pointer-events-none" />
            </div>

            {/* FLOATING PILL 1 (LEFT): 10,000+ Pelanggan Puas */}
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 sm:left-6 lg:left-14 top-1/2 -translate-y-1/2 bg-black/75 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/20 shadow-xl flex items-center gap-2.5 text-white z-40 transition-colors"
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
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-2 sm:right-6 lg:right-14 top-1/2 -translate-y-1/2 bg-black/75 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/20 shadow-xl flex items-center gap-2 text-white z-40 transition-colors"
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
            <div className="mt-3 flex items-center justify-center gap-2 z-40">
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
          SMOOTH ORGANIC CURVE TRANSITION (NO JAGGED TEETH!)
          Clean, elegant wave dividing Cream & Deep Chili Red
          ========================================================== */}
      <div className="relative w-full bg-[#f5efe6] overflow-hidden leading-none -mt-0.5 z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1440 60" 
          preserveAspectRatio="none" 
          className="w-full h-10 sm:h-14 md:h-16 text-[#2d080b] fill-current"
        >
          <path d="M0,25 C360,55 1080,55 1440,25 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* ==========================================================
          BOTTOM HALF: DEEP CHILI CRIMSON RED (#2d080b)
          Popular Menu Section on rich dark red
          ========================================================== */}
      <section className="relative bg-[#2d080b] pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-24 overflow-hidden text-white z-10">
        
        {/* Subtle Ambient Decorative Wavy Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
            <path d="M-100,500 C400,300 800,650 1540,400" stroke="#f26922" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M-50,650 C500,450 900,750 1500,520" stroke="#ef4444" strokeWidth="1.2" strokeOpacity="0.3" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2.5 mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-red-400/30 bg-red-500/10 text-red-200 text-xs font-semibold tracking-wide backdrop-blur-md">
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
                  className="group relative bg-[#3d0d12] hover:bg-[#4a1016] border border-red-500/20 hover:border-[#f26922]/70 rounded-2xl p-3 sm:p-4.5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-lg"
                >
                  {/* Dish Circular Food Photo */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black/25 mb-3 flex items-center justify-center p-2">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover object-center rounded-full group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Quick Add Button Hover Overlay */}
                    <button
                      onClick={() => handleCardAdd(dish)}
                      className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl"
                      title="Tambah ke Keranjang"
                    >
                      <div className="w-10 h-10 rounded-full bg-white text-[#2d080b] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
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
