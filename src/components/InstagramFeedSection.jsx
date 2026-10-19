import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import Instagram from './InstagramIcon';
import TaichanLogo from './TaichanLogo';
import { INSTAGRAM_POSTS, RESTAURANT_INFO } from '../data/restaurantData';
import { DoodleSate, DoodleLime, DoodleChili } from './FoodDoodles';

export default function InstagramFeedSection() {
  return (
    <section id="instagram" className="py-20 relative overflow-hidden bg-[#fef8ed] border-b border-amber-200/60">
      
      {/* Background with Food Doodles & Fluid Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Organic Fluid Pods */}
        <div className="absolute -top-16 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-rose-200/35 via-orange-100/30 to-transparent rounded-[60%_40%_50%_50%] blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-amber-200/35 via-orange-200/25 to-transparent rounded-[45%_55%_70%_30%] blur-3xl" />

        {/* Food Doodles */}
        {/* Top-Left: Sate Skewer */}
        <div className="absolute top-12 left-10 select-none opacity-35">
          <DoodleSate className="w-24 h-24 text-amber-700/30" rotate={30} />
        </div>

        {/* Top-Right: Lime Slice */}
        <div className="absolute top-16 right-12 select-none opacity-40">
          <DoodleLime className="w-20 h-20 text-emerald-700/30" rotate={-15} />
        </div>

        {/* Bottom-Left: Chili Pepper */}
        <div className="absolute bottom-12 left-16 select-none opacity-40 hidden sm:block">
          <DoodleChili className="w-18 h-18 text-red-600/35" rotate={25} />
        </div>

        {/* Bottom-Right: Second Sate Skewer */}
        <div className="absolute bottom-10 right-14 select-none opacity-35 hidden sm:block">
          <DoodleSate className="w-24 h-24 text-amber-800/25" rotate={-40} />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Instagram Profile Header Showcase matching official profile screenshot */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 mb-10 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Avatar & Bio (Horizontal Single-Line on Desktop) */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              
              {/* Official Profile Avatar with Warm Flame Ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-red-600 shadow-sm flex-shrink-0">
                <TaichanLogo size="lg" className="border-2 border-white" />
              </div>

              {/* Bio & Details matching screenshot */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-stone-900 whitespace-nowrap">
                    @{RESTAURANT_INFO.instagramHandle}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-[11px] font-bold whitespace-nowrap">
                    {RESTAURANT_INFO.officialTitle}
                  </span>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-stone-600 font-medium whitespace-nowrap">
                  <span><strong className="text-stone-900">3</strong> posts</span>
                  <span><strong className="text-stone-900">90</strong> followers</span>
                  <span><strong className="text-stone-900">1</strong> following</span>
                </div>

                <div className="text-xs text-stone-600 flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1.5 leading-relaxed">
                  <span className="font-bold text-amber-700">{RESTAURANT_INFO.tagline}</span>
                  <span className="text-stone-300">•</span>
                  <span className="text-stone-500">Available on : GoFood • GrabFood • ShopeeFood</span>
                  <span className="text-stone-300">•</span>
                  <span className="text-stone-500">Take away & Dine in</span>
                </div>
              </div>
            </div>

            {/* Right: Instagram & ShopeeFood CTA Buttons in Single Row */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center flex-shrink-0">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-600/25 transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={RESTAURANT_INFO.shopeefoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap"
              >
                <span>ShopeeFood</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Section Title (Strict Single-Line on Desktop) */}
        <div className="text-center space-y-1.5 mb-8">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-stone-900 whitespace-normal md:whitespace-nowrap">
            Galeri Feed Asli <span className="text-gradient-flame">@{RESTAURANT_INFO.instagramHandle}</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm whitespace-normal lg:whitespace-nowrap">
            Foto autentik dari sajian sate taichan panggangan, lelehan keju mozarella, dan sambal rawit jeruk nipis.
          </p>
        </div>

        {/* 3 Real Posts Grid (Wide, Balanced Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {INSTAGRAM_POSTS.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-stone-200 hover:border-red-400/50 shadow-sm hover:shadow-lg transition-all card-hover-effect flex flex-col justify-between"
            >
              {/* Media Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover overlay with IG stats */}
                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white backdrop-blur-xs">
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <MessageCircle className="w-5 h-5 text-white fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Caption & Post link */}
              <div className="p-4 space-y-2">
                <h4 className="font-display font-bold text-sm text-stone-900 line-clamp-1" title={post.title}>
                  {post.title}
                </h4>

                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed" title={post.caption}>
                  {post.caption}
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px] text-stone-500 whitespace-nowrap border-t border-stone-100">
                  <span className="flex items-center gap-1 font-semibold text-rose-600">
                    <Instagram className="w-3.5 h-3.5" />
                    taichan56djoeanda
                  </span>
                  
                  <a
                    href={RESTAURANT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-700 hover:text-stone-950 flex items-center gap-1 font-semibold group-hover:text-amber-700 transition-colors"
                  >
                    <span>Lihat di IG</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
