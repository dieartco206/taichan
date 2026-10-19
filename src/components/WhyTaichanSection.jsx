import React from 'react';
import { motion } from 'framer-motion';
import { Drumstick, Flame, Leaf, MapPin, CheckCircle2, HeartHandshake, Utensils } from 'lucide-react';
import { WHY_US_FEATURES, RESTAURANT_INFO } from '../data/restaurantData';

export default function WhyTaichanSection() {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'drumstick': return <Drumstick className="w-5 h-5" />;
      case 'flame': return <Flame className="w-5 h-5" />;
      case 'leaf': return <Leaf className="w-5 h-5" />;
      case 'map-pin': return <MapPin className="w-5 h-5" />;
      default: return <Utensils className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-us" className="py-20 relative overflow-hidden bg-charcoal-900/40 border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neonPink/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header (Strict Single-Line on Desktop) */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neonPink/10 border border-neonPink/30 text-neonPink text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Standar Kualitas Taichan 56</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight whitespace-normal md:whitespace-nowrap">
            Kenapa Harus Sate <span className="text-gradient-flame">Taichan 56 Djoeanda?</span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm md:text-base whitespace-normal lg:whitespace-nowrap">
            Daging ayam tebal empuk juicy, marinasi kaldu gurih meresap, dan sambal cabai rawit merah uleg asli berpadu jeruk nipis segar.
          </p>
        </div>

        {/* 4 Feature Cards in a Full 4-Column Grid on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {WHY_US_FEATURES.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-neonPink/40 card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-neonPink/15 text-neonPink border border-neonPink/30 flex items-center justify-center mb-4 shadow-inner">
                  {getIcon(feat.icon)}
                </div>
                
                <h3 className="font-display font-bold text-base text-white mb-1.5 whitespace-nowrap truncate" title={feat.title}>
                  {feat.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] whitespace-nowrap">
                <span className="text-slate-500">Jaminan Rasa</span>
                <span className="text-neonCyan font-bold">100% Authentic</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Single-Line Key Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {[
            "Daging dipotong dadu tebal & bersih dari lemak urat",
            "Dibakar di atas arang panas dengan kematangan juicy",
            "Sambal rawit uleg asli tanpa cabai bubuk sintetis",
            "Tempat bersih, parkir nyaman samping KFC Margonda",
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5 text-xs text-slate-300 whitespace-nowrap truncate" title={item}>
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>

        {/* Milestone Counter Banner (Full 4-column single-line stats) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-charcoal-900 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="pt-2 sm:pt-0 whitespace-nowrap">
              <span className="font-display font-black text-2xl sm:text-3xl text-gradient-flame block">
                {RESTAURANT_INFO.skewersSoldThisMonth}
              </span>
              <span className="text-xs text-slate-400 mt-0.5 block">Tusuk Terbakar / Bulan</span>
            </div>
            
            <div className="pt-3 sm:pt-0 whitespace-nowrap">
              <span className="font-display font-black text-2xl sm:text-3xl text-white block">
                {RESTAURANT_INFO.rating} ⭐
              </span>
              <span className="text-xs text-slate-400 mt-0.5 block">Rating GoFood, Grab & Shopee</span>
            </div>

            <div className="pt-3 sm:pt-0 whitespace-nowrap">
              <span className="font-display font-black text-2xl sm:text-3xl text-neonCyan block">
                18:00 - 02:00
              </span>
              <span className="text-xs text-slate-400 mt-0.5 block">Jam Operasional Kuliner Malam</span>
            </div>

            <div className="pt-3 sm:pt-0 whitespace-nowrap">
              <span className="font-display font-black text-2xl sm:text-3xl text-neonPink block">
                100% Halal
              </span>
              <span className="text-xs text-slate-400 mt-0.5 block">Ayam Segar Pilihan Setiap Hari</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
