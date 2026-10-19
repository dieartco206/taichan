import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Play, ExternalLink, Flame } from 'lucide-react';
import Instagram from './InstagramIcon';
import TaichanLogo from './TaichanLogo';
import { INSTAGRAM_POSTS, RESTAURANT_INFO } from '../data/restaurantData';

export default function InstagramFeedSection() {
  return (
    <section id="instagram" className="py-24 relative overflow-hidden bg-charcoal-950">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-purple-900/15 via-pink-600/10 to-orange-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Instagram Profile Header Showcase matching official profile */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-neonPink/30 mb-12 shadow-[0_0_35px_rgba(255,26,117,0.2)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Left: Avatar & Bio */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 sm:gap-6">
              
              {/* Official Profile Avatar with Neon Ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-neonCyan via-neonPink to-purple-600 shadow-xl">
                <TaichanLogo size="lg" className="border-2 border-charcoal-950" />
              </div>

              {/* Bio & Username matching screenshot */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                    @{RESTAURANT_INFO.instagramHandle}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-neonPink/20 text-neonPink border border-neonPink/30 text-[11px] font-bold">
                    {RESTAURANT_INFO.officialTitle}
                  </span>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-slate-300 font-medium">
                  <span><strong>3</strong> posts</span>
                  <span><strong>90</strong> followers</span>
                  <span><strong>1</strong> following</span>
                </div>

                <div className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed pt-1 border-t border-white/10">
                  <p className="font-semibold text-neonCyan">{RESTAURANT_INFO.tagline}</p>
                  <p className="text-slate-400">Available on : GoFood • GrabFood • ShopeeFood</p>
                  <p className="text-slate-400">Take away & Dine in</p>
                </div>
              </div>
            </div>

            {/* Right: Instagram & ShopeeFood CTA Buttons */}
            <div className="flex flex-col gap-2.5 w-full sm:w-auto">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-neonPink to-rose-600 hover:from-purple-500 hover:to-neonPink text-white font-bold text-xs sm:text-sm shadow-xl shadow-neonPink/25 transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                <span>Buka Instagram Resmi</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_INFO.shopeefoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 border border-orange-500/40 font-bold text-xs transition-all duration-300"
              >
                <span>Order ShopeeFood</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Momen & Feed <span className="text-gradient-flame">@taichan56djoeanda</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Lihat langsung keseruan malam, panggangan sate mengepul, dan ulasan pelanggan setia di Margonda.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-pink-500/40 card-hover-effect flex flex-col"
            >
              {/* Media Image */}
              <div className="relative h-64 w-full overflow-hidden bg-charcoal-900">
                <img 
                  src={post.imageUrl} 
                  alt="Post Taichan 56 Djoeanda" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Reels badge if any */}
                {post.isReel && (
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white backdrop-blur-md">
                    <Play className="w-3.5 h-3.5 fill-white" />
                  </div>
                )}

                {/* Hover overlay with IG stats */}
                <div className="absolute inset-0 bg-charcoal-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white backdrop-blur-xs">
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <MessageCircle className="w-5 h-5 text-slate-200 fill-slate-200" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Caption & IG link footer */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>

                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 font-medium text-pink-400">
                    <Instagram className="w-3.5 h-3.5" />
                    taichan56djoeanda
                  </span>
                  
                  <a
                    href={RESTAURANT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white flex items-center gap-1 font-semibold group-hover:text-flame-400 transition-colors"
                  >
                    <span>Buka Post</span>
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
