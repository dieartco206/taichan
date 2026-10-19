import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export default function TestimonialSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-charcoal-900/50 border-t border-white/5">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-flame-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cerita Pelanggan Margonda</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Kata Mereka Tentang <span className="text-gradient-flame">Taichan 56</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Komentar jujur dari para pecinta kuliner malam, mahasiswa, dan foodies di Depok.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl glass-panel border border-white/10 hover:border-flame-500/30 card-hover-effect flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-gold-400 mb-4">
                  {Array.from({ length: testi.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400" />
                  ))}
                </div>

                {/* Comment quote */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{testi.comment}"
                </p>
              </div>

              {/* Author & Favorite */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-white">{testi.name}</h4>
                  <span className="text-[11px] text-slate-400">{testi.role}</span>
                </div>
                
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-flame-500/15 text-flame-400 border border-flame-500/20 max-w-[140px] truncate">
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
