import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Instagram from './InstagramIcon';
import TaichanLogo from './TaichanLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero({ onExploreMenu, onOrderDirect }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Gradients & Neon Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-neonPink/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-neonCyan/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-neonPink/10 rounded-full blur-[130px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: `radial-gradient(rgba(255, 26, 117, 0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Top Official Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-neonPink/30 backdrop-blur-md shadow-[0_0_15px_rgba(255,26,117,0.2)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonPink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neonPink"></span>
              </span>
              <span className="text-xs font-bold text-slate-200 tracking-wide">
                <span className="text-neonCyan">SATE TAICHAN DEPOK</span> • {RESTAURANT_INFO.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <TaichanLogo size="lg" className="hidden sm:flex" />
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
                  <span className="neon-text-cyan">56</span> <span className="neon-text-pink">TAICHAN</span> <br />
                  <span className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-normal">
                    DJOEANDA DEPOK
                  </span>
                </h1>
              </div>
            </div>

            {/* Description matching bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Sensasi authentic <strong className="text-white font-semibold">THE GRILL TAICHAN 🔥</strong> di Margonda Depok. 
              Daging ayam pilihan tebal juicy, lelehan keju mozarella, kulit krispi kenyal gurih, taburan bumbu racik khas, dan sambal uleg rawit segar jeruk nipis asli.
            </p>

            {/* Social Proof & Metrics */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5 bg-charcoal-900/90 px-3 py-1.5 rounded-xl border border-neonPink/25 shadow-sm">
                <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                <span className="font-bold text-white">4.8 / 5.0</span>
                <span className="text-slate-400">GoFood, GrabFood & ShopeeFood</span>
              </div>
              <div className="flex items-center gap-1.5 bg-charcoal-900/90 px-3 py-1.5 rounded-xl border border-neonCyan/25 shadow-sm">
                <Flame className="w-4 h-4 text-neonPink" />
                <span className="font-bold text-neonCyan">Buka 18.00 - 02.00 WIB</span>
                <span className="text-slate-400">Take Away & Dine In</span>
              </div>
            </div>

            {/* Dual Call To Action */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOrderDirect}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-neonPink via-rose-600 to-neonCyan text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(255,26,117,0.4)] hover:shadow-[0_0_35px_rgba(255,26,117,0.6)] transition-all duration-300 flex items-center justify-center gap-2.5 group hover:scale-[1.02]"
              >
                <span>Pesan Sekarang (WhatsApp / Delivery)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-charcoal-900 hover:bg-charcoal-800 text-slate-200 hover:text-white font-semibold text-sm border border-neonCyan/30 hover:border-neonCyan transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Lihat Menu & Harga</span>
              </button>
            </div>

            {/* Location highlight banner */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-neonPink flex-shrink-0" />
              <span>Lokasi: Samping KFC Margonda Raya, Kemiri Muka, Beji - Depok</span>
            </div>

          </motion.div>

          {/* Right Column: Hero Showcase Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-neonPink/30 via-rose-600/20 to-neonCyan/30 rounded-3xl blur-2xl transform rotate-2 scale-95" />

            {/* Main Showcase Card */}
            <div className="relative glass-panel rounded-3xl p-4 sm:p-5 overflow-hidden border border-neonPink/30 shadow-[0_0_30px_rgba(255,26,117,0.25)]">
              
              {/* Product Hero Image */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden group bg-charcoal-900">
                <img 
                  src="/brand/post_mozzarella.png" 
                  alt="Sate Taichan 56 Djoeanda Mozarella Melt" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-90" />

                {/* Sizzle Hot Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-charcoal-950/85 backdrop-blur-md border border-neonPink/40 text-neonPink text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Flame className="w-3.5 h-3.5 fill-neonPink animate-bounce" />
                  <span>The Grill Taichan 🔥</span>
                </div>

                {/* Instagram Tag Badge */}
                <a 
                  href={RESTAURANT_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-charcoal-950/85 backdrop-blur-md border border-neonCyan/40 text-neonCyan text-xs font-semibold flex items-center gap-1.5 hover:bg-charcoal-900 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-neonPink" />
                  <span>@taichan56djoeanda</span>
                </a>

                {/* Bottom Image Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-neonCyan">Official Menu • Instagram Post</span>
                  <h3 className="font-display font-black text-xl text-white">Sate Taichan Mozarella Melt</h3>
                  <p className="text-xs text-slate-300">Daging ayam tebal dibalut keju mozarella meleleh + sambal rawit uleg & jeruk nipis segar</p>
                </div>
              </div>

              {/* Mini Quick Spec Grid */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-2 border-t border-white/10 text-center">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Daging</span>
                  <span className="text-xs font-bold text-white">Dada & Paha Tebal</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Sambal</span>
                  <span className="text-xs font-bold text-flame-400">Rawit Merah Asli</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Pendamping</span>
                  <span className="text-xs font-bold text-limeaccent-400">Nasi Daun Jeruk</span>
                </div>
              </div>

            </div>

            {/* Floating Trust Badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3.5 rounded-2xl bg-charcoal-900/95 border border-white/15 backdrop-blur-xl shadow-2xl items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-white">100% Halal & Segar</span>
                <span className="text-[11px] text-slate-400">Diproses higienis setiap hari</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
