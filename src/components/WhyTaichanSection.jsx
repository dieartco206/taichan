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
    <section id="why-us" className="py-20 relative overflow-hidden bg-charcoal-900/30">
      
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header (Strict Single-Line on Desktop) */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
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
              className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-red-500/40 card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-950/40 text-rose-400 border border-red-500/30 flex items-center justify-center mb-4 shadow-inner">
                  {getIcon(feat.icon)}
                </div>
                
                <h3 className="font-display font-bold text-base text-white mb-1.5" title={feat.title}>
                  {feat.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-4 pt-1 flex items-center justify-between text-[11px] whitespace-nowrap">
                <span className="text-slate-500">Jaminan Rasa</span>
                <span className="text-amber-400 font-bold">100% Authentic</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Key Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-10">
          {[
            "Daging dipotong dadu tebal & bersih dari lemak urat",
            "Dibakar di atas arang panas dengan kematangan juicy",
            "Sambal rawit uleg asli tanpa cabai bubuk sintetis",
            "Tempat bersih, parkir nyaman samping KFC Margonda",
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="leading-normal">{item}</span>
            </div>
          ))}
        </div>

        {/* Milestone Counter Banner */}
        <div className="p-4 sm:p-6 rounded-2xl bg-charcoal-900 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 text-center">
            <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 sm:border-transparent sm:bg-transparent">
              <span className="font-display font-black text-xl sm:text-2xl md:text-3xl text-gradient-flame block">
                {RESTAURANT_INFO.skewersSoldThisMonth}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 mt-1 block">Tusuk / Bulan</span>
            </div>
            
            <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 sm:border-transparent sm:bg-transparent">
              <span className="font-display font-black text-xl sm:text-2xl md:text-3xl text-white block">
                {RESTAURANT_INFO.rating} ⭐
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 mt-1 block">Rating Resto</span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 sm:border-transparent sm:bg-transparent">
              <span className="font-display font-black text-xl sm:text-2xl md:text-3xl text-amber-400 block">
                18:00 - 02:00
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 mt-1 block">Buka Malam</span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 sm:border-transparent sm:bg-transparent">
              <span className="font-display font-black text-xl sm:text-2xl md:text-3xl text-red-500 block">
                100% Halal
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 mt-1 block">Ayam Segar</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
