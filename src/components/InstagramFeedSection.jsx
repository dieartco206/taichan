import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import Instagram from './InstagramIcon';
import TaichanLogo from './TaichanLogo';
import { INSTAGRAM_POSTS, RESTAURANT_INFO } from '../data/restaurantData';

export default function InstagramFeedSection() {
  return (
    <section id="instagram" className="py-20 relative overflow-hidden bg-charcoal-950">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-neonPink/15 via-purple-600/10 to-neonCyan/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Instagram Profile Header Showcase matching official profile screenshot */}
        <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-neonPink/30 mb-10 shadow-[0_0_35px_rgba(255,26,117,0.18)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Avatar & Bio (Horizontal Single-Line on Desktop) */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              
              {/* Official Profile Avatar with Neon Ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-neonCyan via-neonPink to-purple-600 shadow-xl flex-shrink-0">
                <TaichanLogo size="lg" className="border-2 border-charcoal-950" />
              </div>

              {/* Bio & Details matching screenshot */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white whitespace-nowrap">
                    @{RESTAURANT_INFO.instagramHandle}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-neonPink/20 text-neonPink border border-neonPink/30 text-[11px] font-bold whitespace-nowrap">
                    {RESTAURANT_INFO.officialTitle}
                  </span>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-slate-300 font-medium whitespace-nowrap">
                  <span><strong>3</strong> posts</span>
                  <span><strong>90</strong> followers</span>
                  <span><strong>1</strong> following</span>
                </div>

                <div className="text-xs text-slate-300 flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1.5 leading-relaxed">
                  <span className="font-bold text-neonCyan">{RESTAURANT_INFO.tagline}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">Available on : GoFood • GrabFood • ShopeeFood</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">Take away & Dine in</span>
                </div>
              </div>
            </div>

            {/* Right: Instagram & ShopeeFood CTA Buttons in Single Row */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center flex-shrink-0">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-neonPink to-rose-600 hover:from-purple-500 hover:to-neonPink text-white font-bold text-xs sm:text-sm shadow-xl shadow-neonPink/25 transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={RESTAURANT_INFO.shopeefoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-500/15 hover:bg-orange-500/25 text-orange-400 border border-orange-500/40 font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap"
              >
                <span>ShopeeFood</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Section Title (Strict Single-Line on Desktop) */}
        <div className="text-center space-y-1.5 mb-8">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white whitespace-normal md:whitespace-nowrap">
            Galeri Feed Asli <span className="text-gradient-flame">@{RESTAURANT_INFO.instagramHandle}</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm whitespace-normal lg:whitespace-nowrap">
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
              className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-neonPink/40 card-hover-effect flex flex-col justify-between"
            >
              {/* Media Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-charcoal-900">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover overlay with IG stats */}
                <div className="absolute inset-0 bg-charcoal-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white backdrop-blur-xs">
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <Heart className="w-5 h-5 text-neonPink fill-neonPink" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <MessageCircle className="w-5 h-5 text-slate-200 fill-slate-200" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Caption & Post link */}
              <div className="p-4 space-y-2">
                <h4 className="font-display font-bold text-sm text-white line-clamp-1" title={post.title}>
                  {post.title}
                </h4>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed" title={post.caption}>
                  {post.caption}
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 whitespace-nowrap">
                  <span className="flex items-center gap-1 font-medium text-neonPink">
                    <Instagram className="w-3.5 h-3.5" />
                    taichan56djoeanda
                  </span>
                  
                  <a
                    href={RESTAURANT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white flex items-center gap-1 font-semibold group-hover:text-neonCyan transition-colors"
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
