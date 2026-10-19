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
    <section id="why-us" className="py-20 relative overflow-hidden bg-[#fbf8f3]">
      
      {/* Warm ambient radiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-200/25 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header (Strict Single-Line on Desktop) */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-2xs">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Standar Kualitas Taichan 56</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight whitespace-normal md:whitespace-nowrap">
            Kenapa Harus Sate <span className="text-gradient-flame">Taichan 56 Djoeanda?</span>
          </h2>

          <p className="text-stone-600 text-xs sm:text-sm md:text-base whitespace-normal lg:whitespace-nowrap">
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
              className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 hover:border-red-400/60 shadow-sm hover:shadow-lg transition-all card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-200/80 flex items-center justify-center mb-4 shadow-2xs">
                  {getIcon(feat.icon)}
                </div>
                
                <h3 className="font-display font-bold text-base text-stone-900 mb-1.5" title={feat.title}>
                  {feat.title}
                </h3>
                
                <p className="text-xs text-stone-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-4 pt-1 flex items-center justify-between text-[11px] whitespace-nowrap border-t border-stone-100">
                <span className="text-stone-500">Jaminan Rasa</span>
                <span className="text-amber-600 font-bold">100% Authentic</span>
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
            <div key={idx} className="p-3.5 rounded-xl bg-white border border-stone-200/90 flex items-start gap-2.5 text-xs text-stone-700 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="leading-normal font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Milestone Counter Banner */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 text-center">
            <div className="p-3 sm:p-4 rounded-xl bg-stone-50 border border-stone-200/60">
              <span className="font-display font-black text-xl sm:text-2xl md:text-3xl text-gradient-flame block">
                {RESTAURANT_INFO.skewersSoldThisMonth}
              </span>
              <span className="text-[11px] sm:text-xs text-stone-500 mt-1 block font-medium">Tusuk / Bulan</span>
            </div>
            
            <div className="p-3 sm:p-4 rounded-xl bg-stone-50 border border-stone-200/60">
              <span className="font-display font-black text-xl sm:text-2xl md:text-3xl text-stone-900 block">
                {RESTAURANT_INFO.rating} ⭐
              </span>
              <span className="text-[11px] sm:text-xs text-stone-500 mt-1 block font-medium">Rating Resto</span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-stone-50 border border-stone-200/60">
              <span className="font-display font-black text-xl sm:text-2xl md:text-3xl text-amber-600 block">
                18:00 - 02:00
              </span>
              <span className="text-[11px] sm:text-xs text-stone-500 mt-1 block font-medium">Buka Malam</span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-stone-50 border border-stone-200/60">
              <span className="font-display font-black text-xl sm:text-2xl md:text-3xl text-red-600 block">
                100% Halal
              </span>
              <span className="text-[11px] sm:text-xs text-stone-500 mt-1 block font-medium">Ayam Segar</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
