import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Instagram from './InstagramIcon';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero({ onExploreMenu, onOrderDirect }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-flame-500/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-chili-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
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
            
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flame-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-flame-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300">
                Kuliner Malam Hits Margonda Depok • Buka 18.00 - 02.00 WIB
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-white">
              Pedas Gurih <br />
              <span className="text-gradient-flame">Nampol di Lidah,</span> <br />
              Daging Ayamnya Tebal!
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Selamat datang di <strong className="text-white font-semibold">Taichan 56 Djoeanda</strong>. 
              Daging dada & paha ayam empuk juicy dibakar harum, berpadu sambal rawit merah uleg asli, perasan jeruk nipis segar murni, dan keharuman nasi daun jeruk legendaris.
            </p>

            {/* Social Proof & Metrics */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5 bg-charcoal-800/80 px-3 py-1.5 rounded-xl border border-white/10">
                <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                <span className="font-bold text-white">4.8 / 5.0</span>
                <span className="text-slate-400">(1.200+ Ulasan GoFood & Grab)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-charcoal-800/80 px-3 py-1.5 rounded-xl border border-white/10">
                <Flame className="w-4 h-4 text-flame-500" />
                <span className="font-bold text-white">25.000+</span>
                <span className="text-slate-400">Tusuk Terbakar / Bulan</span>
              </div>
            </div>

            {/* Dual Call To Action */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOrderDirect}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-flame-500 via-flame-600 to-chili-600 hover:from-flame-600 hover:to-chili-700 text-white font-bold text-sm tracking-wide shadow-xl shadow-flame-500/25 hover:shadow-flame-500/40 transition-all duration-300 flex items-center justify-center gap-2.5 group hover:scale-[1.02]"
              >
                <span>Pesan Sekarang via WA</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-charcoal-800/90 hover:bg-charcoal-700 text-slate-200 hover:text-white font-semibold text-sm border border-white/15 hover:border-flame-500/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Lihat Menu & Harga</span>
              </button>
            </div>

            {/* Location highlight banner */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-chili-500 flex-shrink-0" />
              <span>Lokasi: Samping KFC Margonda Raya, Beji - Depok (Dekat Simpang Juanda)</span>
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
            <div className="absolute inset-0 bg-gradient-to-br from-flame-500/25 to-chili-600/25 rounded-3xl blur-2xl transform rotate-3 scale-95" />

            {/* Main Showcase Card */}
            <div className="relative glass-panel-glow rounded-3xl p-4 sm:p-6 overflow-hidden border border-flame-500/30">
              
              {/* Product Hero Image */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80" 
                  alt="Sate Taichan 56 Djoeanda Spesial" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-85" />

                {/* Sizzle Hot Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-flame-500/40 text-flame-500 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Flame className="w-3.5 h-3.5 fill-flame-500 animate-bounce" />
                  <span>Fresh From The Grill 🔥</span>
                </div>

                {/* Instagram Tag Badge */}
                <a 
                  href={RESTAURANT_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-pink-500/40 text-pink-300 text-xs font-semibold flex items-center gap-1.5 hover:bg-pink-950/80 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@taichan56djoeanda</span>
                </a>

                {/* Bottom Image Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-flame-400">Signature Dish</span>
                  <h3 className="font-display font-extrabold text-xl text-white">Sate Taichan Mix Spesial</h3>
                  <p className="text-xs text-slate-300">10 Tusuk Daging Dada Tebal & Kulit Crispy + Sambal Uleg Jeruk Nipis</p>
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
