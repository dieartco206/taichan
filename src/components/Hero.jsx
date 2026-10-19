import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero({ onExploreMenu, onOrderDirect }) {
  return (
    <section className="relative min-h-[82vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
      
      {/* Atmospheric Sizzling Charcoal Grill Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/brand/bg_hero_grill.jpg" 
          alt="Sate Taichan Grill Atmosphere" 
          className="w-full h-full object-cover object-center opacity-45 scale-100 filter brightness-95 contrast-115"
        />
        {/* Radiant Vignette & Atmospheric Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d111e]/60 via-[#0d111e]/80 to-[#0d111e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0d111e]/60 to-[#0d111e]" />
        
        {/* Luminous Neon & Warm Ember Glows */}
        <div className="absolute -top-10 left-1/4 w-[650px] h-[650px] bg-neonPink/25 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-neonCyan/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-orange-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center"
        >
          
          {/* Top Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-neonPink/30 backdrop-blur-md shadow-[0_0_20px_rgba(255,26,117,0.25)] mb-5 max-w-full">
            <span className="flex h-2 w-2 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonPink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neonPink"></span>
            </span>
            <span className="text-[11px] sm:text-xs md:text-sm font-bold text-slate-200 tracking-wide truncate">
              <span className="text-neonCyan">SATE TAICHAN DEPOK</span> • {RESTAURANT_INFO.tagline}
            </span>
          </div>

          {/* Main Brand Headline (Full Width, Grand & Symmetric) */}
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-5">
            <span className="neon-text-cyan">56</span> <span className="neon-text-pink">TAICHAN</span> <span className="text-white">DJOEANDA</span>
          </h1>

          {/* Sub-headline slogan */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto mb-6">
            Kuliner Sate Taichan Daging Tebal, Mozarella Melt, Kulit Crispy & Sambal Rawit Segar di Margonda.
          </p>

          {/* Social Proof & Hours (Spacious Centered Pills) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-sm text-slate-300 mb-8">
            <div className="inline-flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="font-bold text-white">4.8 / 5.0</span>
              <span className="text-slate-400 hidden xs:inline">(GoFood • Grab • ShopeeFood)</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-neonCyan/30">
              <span className="w-2 h-2 rounded-full bg-neonCyan"></span>
              <span className="font-bold text-neonCyan">Buka 18.00 - 02.00</span>
              <span className="text-slate-400 hidden xs:inline">(Dine-in & Bungkus)</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-neonPink/30">
              <span className="w-2 h-2 rounded-full bg-neonPink"></span>
              <span className="font-bold text-neonPink">100% Halal & Segar</span>
            </div>
          </div>

          {/* Call To Action Buttons (Side-by-side) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-md mx-auto mb-6">
            <button
              onClick={onOrderDirect}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-neonPink via-rose-600 to-neonCyan text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_24px_rgba(255,26,117,0.4)] hover:shadow-[0_0_32px_rgba(255,26,117,0.6)] transition-all flex items-center justify-center gap-2 group active:scale-95"
            >
              <span>Pesan Sekarang</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreMenu}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl bg-charcoal-900/90 hover:bg-charcoal-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-neonCyan/30 hover:border-neonCyan transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Lihat Menu</span>
            </button>
          </div>

          {/* Online Delivery Sub-link */}
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-400 mb-2">
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
            <span className="text-slate-300 font-medium">GoFood</span>
            <span>•</span>
            <span className="text-slate-300 font-medium">GrabFood</span>
          </div>

          {/* Location Info */}
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-neonPink flex-shrink-0" />
            <span>Jl. Margonda Raya (Samping KFC Margonda, Depok)</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
