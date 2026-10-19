import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Star, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import Instagram from './InstagramIcon';
import TaichanLogo from './TaichanLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

const SHOWCASE_ITEMS = [
  {
    id: "taichan-mix",
    name: "Sate Taichan Mix (Dada + Kulit)",
    portion: "10 Tusuk",
    price: "Rp 35.000",
    badge: "Signature 56",
    image: "/menu/sate_taichan_jakarta.jpg",
    desc: "Daging tebal juicy & kulit garing dengan sambal uleg segar.",
    tag: "Rawit Uleg Asli"
  },
  {
    id: "taichan-kulit",
    name: "Sate Taichan Kulit Crispy",
    portion: "10 Tusuk",
    price: "Rp 35.000",
    badge: "Kriuk Nagih",
    image: "/menu/sate_kulit.jpg",
    desc: "Kulit ayam renyah garing gurih dengan bumbu marinasi meresap.",
    tag: "Crispy Renyah"
  },
  {
    id: "paket-sultan",
    name: "Paket Sultan 30 Tusuk",
    portion: "30 Tusuk",
    price: "Rp 100.000",
    badge: "Super Hemat",
    image: "/menu/paket_sultan.jpg",
    desc: "Puas rame-rame bebas mix Dada, Paha & Kulit + 2 Sambal.",
    tag: "Paling Hemat"
  },
  {
    id: "pisang-bakar",
    name: "Pisang Bakar Cokelat Keju",
    portion: "1 Porsi",
    price: "Rp 18.000",
    badge: "Penetral Pedas",
    image: "/menu/pisang_bakar.jpg",
    desc: "Pisang dibakar harum bertabur keju melimpah, meses & susu manis.",
    tag: "Dessert Manis"
  },
  {
    id: "es-jeruk",
    name: "Es Jeruk Peras Murni",
    portion: "Gelas Jumbo",
    price: "Rp 10.000",
    badge: "Best Drink",
    image: "/menu/es_jeruk.jpg",
    desc: "Perasan jeruk asli murni dingin langsung mendinginkan lidah.",
    tag: "Segar Dingin"
  }
];

export default function Hero({ onExploreMenu, onOrderDirect }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const currentItem = SHOWCASE_ITEMS[currentIndex];
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden">
      
      {/* Atmospheric Sizzling Charcoal Grill Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/brand/bg_hero_grill.jpg" 
          alt="Sate Taichan Grill Atmosphere" 
          className="w-full h-full object-cover object-center opacity-55 scale-100 filter brightness-95 contrast-115"
        />
        {/* Radiant Vignette & Atmospheric Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d111e]/60 via-[#0d111e]/75 to-[#0d111e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0d111e]/50 to-[#0d111e]" />
        
        {/* Luminous Neon & Warm Ember Glows */}
        <div className="absolute -top-10 left-1/4 w-[650px] h-[650px] bg-neonPink/25 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-neonCyan/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-orange-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action Buttons (Mobile-First Responsive) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left"
          >
            
            {/* Top Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-neonPink/30 backdrop-blur-md shadow-[0_0_15px_rgba(255,26,117,0.2)] max-w-full">
              <span className="flex h-2 w-2 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonPink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neonPink"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-slate-200 tracking-wide truncate">
                <span className="text-neonCyan">SATE TAICHAN DEPOK</span> • {RESTAURANT_INFO.tagline}
              </span>
            </div>

            {/* Main Brand Headline */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <TaichanLogo size="lg" className="hidden sm:flex flex-shrink-0" />
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white tracking-tight leading-tight sm:leading-none whitespace-normal sm:whitespace-nowrap">
                <span className="neon-text-cyan">56</span> <span className="neon-text-pink">TAICHAN</span> <span className="text-white">DJOEANDA</span>
              </h1>
            </div>

            {/* Sub-headline slogan */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Kuliner Sate Taichan Daging Tebal, Mozarella Melt, Kulit Crispy & Sambal Rawit Segar di Margonda.
            </p>

            {/* Social Proof & Hours (Compact Pill Badges) */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs text-slate-300">
              <div className="inline-flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <span className="font-bold text-white">4.8 / 5.0</span>
                <span className="text-slate-400 hidden xs:inline">(GoFood • Grab • ShopeeFood)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-sm px-3 py-1.5 rounded-full border border-neonCyan/30">
                <span className="w-1.5 h-1.5 rounded-full bg-neonCyan"></span>
                <span className="font-bold text-neonCyan">Buka 18.00 - 02.00</span>
                <span className="text-slate-400 hidden xs:inline">(Dine-in & Bungkus)</span>
              </div>
            </div>

            {/* Call To Action Buttons (Side-by-side on Mobile, Zero Clutter) */}
            <div className="pt-1 space-y-2.5">
              <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-start gap-2.5 sm:gap-3">
                <button
                  onClick={onOrderDirect}
                  className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-neonPink via-rose-600 to-neonCyan text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(255,26,117,0.35)] hover:shadow-[0_0_28px_rgba(255,26,117,0.55)] transition-all flex items-center justify-center gap-1.5 group active:scale-95"
                >
                  <span>Pesan Sekarang</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={onExploreMenu}
                  className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-xl bg-charcoal-900/90 hover:bg-charcoal-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-neonCyan/30 hover:border-neonCyan transition-all flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <span>Lihat Menu</span>
                </button>
              </div>

              {/* Online Delivery Sub-link */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[11px] text-slate-400">
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
            </div>

            {/* Location Info */}
            <div className="pt-0.5 flex items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs text-slate-400 text-center lg:text-left">
              <MapPin className="w-3.5 h-3.5 text-neonPink flex-shrink-0" />
              <span className="truncate">Jl. Margonda Raya (Samping KFC Margonda, Depok)</span>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-neonPink/25 via-purple-600/15 to-neonCyan/25 rounded-3xl blur-2xl transform rotate-2 scale-95" />

            {/* Main Showcase Card with Clean Luxury Layout */}
            <div className="relative glass-panel rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              
              {/* Product Hero Image Carousel (Clean & Unobstructed) */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-charcoal-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentItem.id}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={currentItem.image} 
                      alt={currentItem.name} 
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Subtle bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <Flame className="w-3.5 h-3.5 text-neonPink fill-neonPink" />
                      <span>{currentItem.badge}</span>
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-slate-200 text-xs font-semibold shadow-lg">
                      {currentItem.portion}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dedicated Card Body Below Photo */}
              <div className="p-4 sm:p-5 space-y-3 bg-charcoal-900/90">
                {/* Title & Description with smooth transition */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentItem.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-1"
                  >
                    <h3 className="font-display font-black text-base sm:text-lg text-white">
                      {currentItem.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {currentItem.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Feature Tags */}
                <div className="flex items-center gap-2 pt-0.5">
                  <span className="px-2.5 py-0.5 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] text-slate-300 font-medium">
                    {currentItem.tag}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-neonPink/10 border border-neonPink/25 text-[11px] text-neonPink font-semibold">
                    100% Halal
                  </span>
                </div>

                {/* Bottom Row: Price + Carousel Dots + Order CTA */}
                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Harga Porsi</span>
                    <span className="font-display font-black text-xl sm:text-2xl text-white">
                      {currentItem.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Carousel Dots */}
                    <div className="flex items-center gap-1">
                      {SHOWCASE_ITEMS.map((item, idx) => (
                        <button
                          key={item.id}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentIndex 
                              ? 'w-4 bg-neonPink shadow-[0_0_8px_rgba(255,26,117,0.8)]' 
                              : 'w-1.5 bg-white/20 hover:bg-white/40'
                          }`}
                          title={item.name}
                          aria-label={item.name}
                        />
                      ))}
                    </div>

                    {/* Order Button */}
                    <button
                      onClick={onOrderDirect}
                      className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-neonPink to-rose-600 hover:from-neonPink/90 hover:to-rose-500 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-neonPink/25 hover:shadow-neonPink/40 transition-all hover:scale-[1.02] active:scale-95 flex-shrink-0"
                    >
                      <span>Pesan</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
