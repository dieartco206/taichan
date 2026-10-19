import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import Instagram from './InstagramIcon';
import TaichanLogo from './TaichanLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero({ onExploreMenu, onOrderDirect }) {
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

            {/* Main Showcase Card */}
            <div className="relative glass-panel rounded-3xl p-4 sm:p-5 overflow-hidden border border-neonPink/30 shadow-[0_0_30px_rgba(255,26,117,0.2)]">
              
              {/* Product Hero Image */}
              <div className="relative h-72 sm:h-84 md:h-96 w-full rounded-2xl overflow-hidden group bg-charcoal-900">
                <img 
                  src="/brand/post_mozzarella.png" 
                  alt="Sate Taichan 56 Djoeanda Mozarella Melt" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-90" />

                {/* Sizzle Hot Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-charcoal-950/85 backdrop-blur-md border border-neonPink/40 text-neonPink text-xs font-bold flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                  <Flame className="w-3.5 h-3.5 fill-neonPink animate-bounce" />
                  <span>The Grill Taichan 🔥</span>
                </div>

                {/* Instagram Tag Badge */}
                <a 
                  href={RESTAURANT_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-charcoal-950/85 backdrop-blur-md border border-neonCyan/40 text-neonCyan text-xs font-semibold flex items-center gap-1.5 hover:bg-charcoal-900 transition-colors whitespace-nowrap"
                >
                  <Instagram className="w-3.5 h-3.5 text-neonPink" />
                  <span>@taichan56djoeanda</span>
                </a>

                {/* Bottom Image Caption in Single Line */}
                <div className="absolute bottom-3 left-4 right-4 text-left">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-neonCyan block">Menu Resmi Instagram</span>
                  <h3 className="font-display font-black text-xl text-white whitespace-nowrap truncate">Sate Taichan Mozarella Melt</h3>
                  <p className="text-xs text-slate-300 whitespace-nowrap truncate">Daging tebal dibalut keju mozarella meleleh + sambal rawit uleg & jeruk nipis segar</p>
                </div>
              </div>

              {/* 3 Quick Specs in Single Line */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-1 text-center text-xs">
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 whitespace-nowrap">
                  <span className="block text-[10px] text-slate-400 font-semibold uppercase">Pilihan Daging</span>
                  <span className="font-bold text-white">Dada, Paha & Kulit</span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 whitespace-nowrap">
                  <span className="block text-[10px] text-slate-400 font-semibold uppercase">Sambal Khas</span>
                  <span className="font-bold text-neonPink">Rawit Merah Uleg</span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 whitespace-nowrap">
                  <span className="block text-[10px] text-slate-400 font-semibold uppercase">Nasi Harum</span>
                  <span className="font-bold text-neonCyan">Daun Jeruk Segar</span>
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
