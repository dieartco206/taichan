import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import Instagram from './InstagramIcon';
import TaichanLogo from './TaichanLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero({ onExploreMenu, onOrderDirect }) {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Neon Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 -translate-y-1/2 w-[700px] h-[700px] bg-neonPink/12 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-neonCyan/10 rounded-full blur-[140px]" />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(rgba(255, 26, 117, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action Buttons (Strict Single-Line Design) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-5 text-center lg:text-left"
          >
            
            {/* Top Tagline Pill (Single Line) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-neonPink/30 backdrop-blur-md shadow-[0_0_15px_rgba(255,26,117,0.2)] whitespace-nowrap">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonPink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neonPink"></span>
              </span>
              <span className="text-xs font-bold text-slate-200 tracking-wide">
                <span className="text-neonCyan">SATE TAICHAN DEPOK</span> • {RESTAURANT_INFO.tagline}
              </span>
            </div>

            {/* Main Brand Headline (Single Line across desktop) */}
            <div className="flex items-center justify-center lg:justify-start gap-3.5">
              <TaichanLogo size="lg" className="hidden sm:flex flex-shrink-0" />
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white tracking-tight leading-none whitespace-nowrap">
                <span className="neon-text-cyan">56</span> <span className="neon-text-pink">TAICHAN</span> <span className="text-white">DJOEANDA</span>
              </h1>
            </div>

            {/* Sub-headline slogan (Single Line on desktop) */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-normal whitespace-normal lg:whitespace-nowrap">
              Kuliner Sate Taichan Daging Tebal, Mozarella Melt, Kulit Crispy & Sambal Rawit Segar di Margonda.
            </p>

            {/* Social Proof & Metrics in Single Line Bar */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2 bg-charcoal-900/90 px-3.5 py-2 rounded-xl border border-neonPink/25 shadow-sm whitespace-nowrap">
                <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                <span className="font-bold text-white">Rating 4.8 / 5.0</span>
                <span className="text-slate-400">(GoFood • GrabFood • ShopeeFood)</span>
              </div>

              <div className="flex items-center gap-2 bg-charcoal-900/90 px-3.5 py-2 rounded-xl border border-neonCyan/25 shadow-sm whitespace-nowrap">
                <Flame className="w-4 h-4 text-neonPink" />
                <span className="font-bold text-neonCyan">Buka 18.00 - 02.00 WIB</span>
                <span className="text-slate-400">(Take away & Dine in)</span>
              </div>
            </div>

            {/* Call To Action Buttons (Strictly Single Line) */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onOrderDirect}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-neonPink via-rose-600 to-neonCyan text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(255,26,117,0.4)] hover:shadow-[0_0_30px_rgba(255,26,117,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-[1.02] whitespace-nowrap"
              >
                <span>Pesan Sekarang (WhatsApp)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="px-6 py-3.5 rounded-2xl bg-charcoal-900 hover:bg-charcoal-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-neonCyan/30 hover:border-neonCyan transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Lihat Menu & Harga</span>
              </button>

              <a
                href={RESTAURANT_INFO.shopeefoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-2xl bg-orange-500/15 hover:bg-orange-500/25 text-orange-400 hover:text-orange-300 font-bold text-xs sm:text-sm border border-orange-500/40 transition-all duration-300 flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>Order ShopeeFood</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location Pill (Single Line) */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400 whitespace-nowrap">
              <MapPin className="w-4 h-4 text-neonPink flex-shrink-0" />
              <span>Lokasi: Jl. Margonda Raya (Samping KFC Margonda, Beji - Depok)</span>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual Card (Clean & Expansive) */}
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
              <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-white/10 text-center text-xs">
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
