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
      <section className="relative bg-[#f4efe6] pt-24 sm:pt-28 pb-4 sm:pb-6 overflow-hidden">
        
        {/* Subtle decorative curved ambient lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
          <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none">
            <path d="M-100,200 C300,50 800,350 1540,120" stroke="#f26922" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 6" />
            <path d="M-50,380 C400,250 900,450 1500,280" stroke="#dc2626" strokeWidth="1.2" strokeOpacity="0.25" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Hero Layout: Left Typography vs Right Description & CTA */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-6 sm:mb-8">
            
            {/* Left: Signature Dribbble Split-Colored Headline */}
            <div className="lg:col-span-8 text-center lg:text-left">
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-stone-900">
                <span>Daging </span>
                <span className="text-[#f26922]">Paha</span> <br />
                <span className="text-[#f26922]">Ayam</span>
                <span> Tebal &</span> <br />
                <span className="text-stone-400">Juicy</span>
              </h1>
            </div>

            {/* Right: Subtitle & Order Button */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-3.5 pt-1 text-center lg:text-left">
              <p className="text-xs sm:text-sm md:text-base text-stone-600 font-medium leading-relaxed max-w-sm">
                100% daging ayam paha empuk, kulit crispy gurih & siraman sambal rawit merah uleg jeruk nipis asli khas Taichan 56 Margonda.
              </p>

              <button
                onClick={onOrderDirect}
                className="px-6 py-2.5 sm:py-3 rounded-xl bg-[#f26922] hover:bg-[#e05914] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 active:scale-95 transition-all flex items-center gap-2 group"
              >
                <span>Pesan Sekarang</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* ==========================================================
              CENTERPIECE: GIANT CIRCULAR DISH OVERLAPPING THE DIVIDER
              Positioned right on the boundary between cream & deep red!
              ========================================================== */}
          <div className="relative flex flex-col items-center justify-center -mb-36 sm:-mb-44 md:-mb-52 z-30">
            
            {/* The Main Round Dish Presentation */}
            <div className="relative w-64 sm:w-80 md:w-96 lg:w-[420px] aspect-square rounded-full p-2.5 sm:p-3 bg-white shadow-[0_25px_70px_rgba(54,12,16,0.35)] border-4 sm:border-8 border-white flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentDish.id}
                  src={currentDish.image} 
                  alt={currentDish.name}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.55 }}
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </AnimatePresence>

              {/* Glistening Light Reflection Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/15 via-transparent to-white/20 pointer-events-none" />
            </div>

            {/* FLOATING PILL 1 (LEFT): 10,000+ Pelanggan Puas */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 sm:left-8 lg:left-20 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/85 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/20 shadow-xl flex items-center gap-2.5 text-white z-40 transition-colors"
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
              className="absolute right-2 sm:right-8 lg:right-20 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/85 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/20 shadow-xl flex items-center gap-2 text-white z-40 transition-colors"
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
          THE AUTHENTIC DRY-BRUSH SPLATTER DIVIDER (#360c10)
          Zero rounded waves! Real jagged dry-brush bristle path.
          ========================================================== */}
      <div className="relative w-full bg-[#f4efe6] overflow-hidden leading-none -mb-1 z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1440 70" 
          preserveAspectRatio="none" 
          className="w-full h-12 sm:h-16 md:h-20 text-[#360c10] fill-current"
        >
          {/* Jagged dry-brush paint splatter path */}
          <path d="M0,70 L0,38 L14,42 L28,26 L42,44 L56,34 L70,48 L84,30 L98,46 L112,27 L128,45 L144,36 L160,50 L176,31 L192,47 L208,33 L224,49 L240,30 L256,46 L272,35 L288,52 L304,32 L320,48 L336,29 L352,46 L368,36 L384,52 L400,33 L416,48 L432,31 L448,47 L464,35 L480,51 L496,32 L512,48 L528,29 L544,47 L560,35 L576,52 L592,33 L608,49 L624,30 L640,47 L656,35 L672,52 L688,32 L704,48 L720,29 L736,47 L752,35 L768,52 L784,32 L800,48 L816,30 L832,47 L848,35 L864,52 L880,32 L896,48 L912,30 L928,47 L944,35 L960,52 L976,33 L992,49 L1008,30 L1024,47 L1040,35 L1056,52 L1072,32 L1088,48 L1104,29 L1120,47 L1136,35 L1152,52 L1168,32 L1184,48 L1200,30 L1216,47 L1232,35 L1248,52 L1264,32 L1280,48 L1296,29 L1312,47 L1328,35 L1344,52 L1360,32 L1376,48 L1392,31 L1408,46 L1424,35 L1440,50 L1440,70 Z" />
          {/* Paint splatter flecks along the edge */}
          <circle cx="95" cy="22" r="3" />
          <circle cx="210" cy="24" r="2.5" />
          <circle cx="340" cy="19" r="3" />
          <circle cx="470" cy="23" r="2.5" />
          <circle cx="610" cy="20" r="3.5" />
          <circle cx="750" cy="18" r="2.5" />
          <circle cx="890" cy="22" r="3" />
          <circle cx="1030" cy="19" r="2.5" />
          <circle cx="1180" cy="21" r="3" />
          <circle cx="1320" cy="20" r="2.5" />
        </svg>
      </div>

      {/* ==========================================================
          BOTTOM HALF: DEEP TAICHAN CHILI CRIMSON-RED (#360c10)
          The authentic red matching Taichan's spicy rawit & fire!
          ========================================================== */}
      <section className="relative bg-[#360c10] pt-40 sm:pt-48 md:pt-56 pb-20 sm:pb-24 overflow-hidden text-white z-10">
        
        {/* Subtle Ambient Decorative Wavy Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
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
                  className="group relative bg-[#4a1217] hover:bg-[#58161c] border border-red-500/20 hover:border-[#f26922]/70 rounded-2xl p-3 sm:p-4.5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-lg"
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
                      <div className="w-10 h-10 rounded-full bg-white text-[#360c10] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
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
