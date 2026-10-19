import React from 'react';
import { motion } from 'framer-motion';
import { Drumstick, Flame, Sparkles, MapPin, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { WHY_US_FEATURES, RESTAURANT_INFO } from '../data/restaurantData';

export default function WhyTaichanSection() {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'drumstick': return <Drumstick className="w-6 h-6" />;
      case 'flame': return <Flame className="w-6 h-6" />;
      case 'sparkles': return <Sparkles className="w-6 h-6" />;
      case 'map-pin': return <MapPin className="w-6 h-6" />;
      default: return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-charcoal-900/40 border-t border-white/5">
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-flame-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-flame-500/10 border border-flame-500/20 text-flame-400 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Standar Kualitas Taichan 56</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Kenapa Harus Sate <br />
              <span className="text-gradient-flame">Taichan 56 Djoeanda?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Kami percaya sate taichan yang berkelas bukan sekadar pedas, tapi tentang keseimbangan sari daging ayam empuk, bumbu marinasi gurih yang meresap, serta sambal segar dengan aroma jeruk nipis murni.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {[
                "Daging dipotong dadu tebal & bersih dari urat kasar",
                "Dibakar di atas arang panas dengan tingkat kematangan juicy",
                "Sambal rawit uleg murni tanpa pewarna & pengawet sintetis",
                "Tempat bersih, parkir mudah di samping KFC Margonda",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quote box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-400 italic">
              "Sekali coba bumbu gurihnya, rasa kangen sambal Taichan 56 Margonda bakal bikin kamu balik lagi tiap malam."
            </div>
          </div>

          {/* Right Column: 4 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {WHY_US_FEATURES.map((feat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-flame-500/30 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-flame-500/20 to-chili-600/20 text-flame-400 border border-flame-500/30 flex items-center justify-center mb-5 shadow-inner">
                    {getIcon(feat.icon)}
                  </div>
                  
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {feat.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Jaminan Rasa</span>
                  <span className="text-flame-400 font-semibold">100% Authentic</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Milestone counter banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-charcoal-900 via-charcoal-850 to-charcoal-900 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-2 md:pt-0">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-gradient-flame block">
                {RESTAURANT_INFO.skewersSoldThisMonth}
              </span>
              <span className="text-xs text-slate-400 mt-1 block">Tusuk Terbakar / Bulan</span>
            </div>
            
            <div className="pt-4 md:pt-0">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-white block">
                {RESTAURANT_INFO.rating} ⭐
              </span>
              <span className="text-xs text-slate-400 mt-1 block">Rating Pelanggan Online</span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-white block">
                18:00 - 02:00
              </span>
              <span className="text-xs text-slate-400 mt-1 block">Jam Buka Kuliner Malam</span>
            </div>

            <div className="pt-4 md:pt-0">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-gradient-gold block">
                100%
              </span>
              <span className="text-xs text-slate-400 mt-1 block">Ayam Segar & Halal</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
