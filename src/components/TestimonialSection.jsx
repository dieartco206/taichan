import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export default function TestimonialSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#fbf8f3]">
      
      {/* Warm Ambient Radiance with Abstract Quote Silhouette & Contours */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Organic Fluid Pods */}
        <div className="absolute top-1/2 -right-16 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-bl from-amber-200/35 via-orange-100/25 to-transparent rounded-[50%_50%_70%_30%] blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-[480px] h-[480px] bg-gradient-to-tr from-rose-200/30 via-amber-200/20 to-transparent rounded-[40%_60%_35%_65%] blur-3xl" />

        {/* Giant Artistic Quote Mark Watermark in Background */}
        <div className="absolute top-12 left-10 text-stone-300/[0.16] select-none pointer-events-none hidden sm:block">
          <svg width="220" height="220" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Abstract Smooth Wave Curve SVG */}
        <svg 
          className="absolute inset-0 w-full h-full text-stone-400/[0.14]" 
          viewBox="0 0 1440 600" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path 
            d="M-50 400 C 350 250, 750 500, 1150 350 C 1300 300, 1450 380, 1600 320" 
            stroke="currentColor" 
            strokeWidth="1.2" 
            strokeDasharray="6 8"
          />
        </svg>

        {/* Floating Abstract Sparkles */}
        <div className="absolute top-28 right-1/4 text-amber-500/25 hidden md:block">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header (Strict Single-Line on Desktop) */}
        <div className="text-center space-y-1.5 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-2xs">
            <Quote className="w-3.5 h-3.5" />
            <span>Cerita Pelanggan Margonda</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-stone-900 whitespace-normal md:whitespace-nowrap">
            Kata Mereka Tentang <span className="text-gradient-flame">Taichan 56 Djoeanda</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base whitespace-normal lg:whitespace-nowrap">
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
              className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 hover:border-red-400/50 shadow-sm hover:shadow-lg transition-all card-hover-effect flex flex-col justify-between"
            >
              <div>
                {/* Star rating in Single Line */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {Array.from({ length: testi.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                  <span className="text-xs font-bold text-stone-700 ml-1.5 whitespace-nowrap">5.0 Star</span>
                </div>

                {/* Comment quote */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-4 italic">
                  "{testi.comment}"
                </p>
              </div>

              {/* Author & Favorite in Single Line */}
              <div className="pt-3 flex items-center justify-between gap-2 whitespace-nowrap border-t border-stone-100">
                <div className="truncate">
                  <h4 className="font-display font-bold text-sm text-stone-900 truncate">{testi.name}</h4>
                  <span className="text-[11px] text-stone-500 truncate block">{testi.role}</span>
                </div>
                
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200 flex-shrink-0">
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
