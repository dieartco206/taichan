import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import TaichanGrillAnimation from './TaichanGrillAnimation';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero({ onExploreMenu, onOrderDirect }) {
  return (
    <section className="relative min-h-[86vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden">
      
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

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start"
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
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white tracking-tight leading-tight sm:leading-none">
              <span className="neon-text-cyan">56</span> <span className="neon-text-pink">TAICHAN</span> <span className="text-white">DJOEANDA</span>
            </h1>

            {/* Sub-headline slogan */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 font-medium leading-relaxed max-w-xl">
              Kuliner Sate Taichan Daging Tebal, Mozarella Melt, Kulit Crispy & Sambal Rawit Segar di Margonda.
            </p>

            {/* Social Proof & Hours (Clean Pill Badges) */}
            <div className="pt-0.5 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs text-slate-300">
              <div className="inline-flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-white">4.8 / 5.0</span>
                <span className="text-slate-400 hidden xs:inline">(GoFood • Grab • ShopeeFood)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-sm px-3 py-1.5 rounded-full border border-neonCyan/30">
                <span className="w-1.5 h-1.5 rounded-full bg-neonCyan"></span>
                <span className="font-bold text-neonCyan">Buka 18.00 - 02.00</span>
                <span className="text-slate-400 hidden xs:inline">(Dine-in & Bungkus)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-white/[0.06] backdrop-blur-sm px-3 py-1.5 rounded-full border border-neonPink/30">
                <span className="w-1.5 h-1.5 rounded-full bg-neonPink"></span>
                <span className="font-bold text-neonPink">100% Halal</span>
              </div>
            </div>

            {/* Call To Action Buttons (Side-by-side) */}
            <div className="pt-1 space-y-2.5 w-full sm:w-auto">
              <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-start gap-2.5 sm:gap-3">
                <button
                  onClick={onOrderDirect}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-neonPink via-rose-600 to-neonCyan text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(255,26,117,0.35)] hover:shadow-[0_0_28px_rgba(255,26,117,0.55)] transition-all flex items-center justify-center gap-1.5 group active:scale-95"
                >
                  <span>Pesan Sekarang</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={onExploreMenu}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl bg-charcoal-900/90 hover:bg-charcoal-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-neonCyan/30 hover:border-neonCyan transition-all flex items-center justify-center gap-1.5 active:scale-95"
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

          {/* Right Column: Interactive Animated Charcoal Taichan Grill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center w-full"
          >
            <TaichanGrillAnimation />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
