import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export default function TestimonialSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-charcoal-900/50 border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-neonPink/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header (Strict Single-Line on Desktop) */}
        <div className="text-center space-y-1.5 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-gold-400 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            <Quote className="w-3.5 h-3.5" />
            <span>Cerita Pelanggan Margonda</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white whitespace-normal md:whitespace-nowrap">
            Kata Mereka Tentang <span className="text-gradient-flame">Taichan 56 Djoeanda</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base whitespace-normal lg:whitespace-nowrap">
            Ulasan jujur dari mahasiswa UI, Gunadarma, dan para pecinta kuliner malam di Depok.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid (Wide on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/10 hover:border-neonPink/30 card-hover-effect flex flex-col justify-between"
            >
              <div>
                {/* Star rating in Single Line */}
                <div className="flex items-center gap-1 text-gold-400 mb-3">
                  {Array.from({ length: testi.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-300 ml-1.5 whitespace-nowrap">5.0 Star</span>
                </div>

                {/* Comment quote */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 italic">
                  "{testi.comment}"
                </p>
              </div>

              {/* Author & Favorite in Single Line */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 whitespace-nowrap">
                <div className="truncate">
                  <h4 className="font-display font-bold text-sm text-white truncate">{testi.name}</h4>
                  <span className="text-[11px] text-slate-400 truncate block">{testi.role}</span>
                </div>
                
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neonPink/15 text-neonPink border border-neonPink/25 flex-shrink-0">
                  {testi.favorite}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
