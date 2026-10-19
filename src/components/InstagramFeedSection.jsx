import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Play, ExternalLink, Flame } from 'lucide-react';
import Instagram from './InstagramIcon';
import { INSTAGRAM_POSTS, RESTAURANT_INFO } from '../data/restaurantData';

export default function InstagramFeedSection() {
  return (
    <section id="instagram" className="py-24 relative overflow-hidden bg-charcoal-950">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-purple-900/15 via-pink-600/10 to-orange-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Instagram Profile Header Showcase */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-pink-500/20 mb-12 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Left: Avatar & Bio */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
              
              {/* Profile Avatar with Instagram gradient ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-xl">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-charcoal-950 border-2 border-charcoal-950 overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-flame-500 to-chili-600 flex flex-col items-center justify-center text-white">
                    <Flame className="w-8 h-8 animate-pulse" />
                    <span className="text-[10px] font-extrabold tracking-tighter mt-0.5">56 DJOEANDA</span>
                  </div>
                </div>
              </div>

              {/* Bio & Username */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    @{RESTAURANT_INFO.instagramHandle}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 text-[11px] font-semibold">
                    Akun Resmi
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                  🍢 <strong>Sate Taichan 56 Djoeanda Depok</strong> <br />
                  📍 Samping KFC Margonda Raya, Beji - Depok <br />
                  ⏰ Buka Setiap Hari: 18.00 - 02.00 WIB <br />
                  🛵 Available on GoFood & GrabFood
                </p>
              </div>
            </div>

            {/* Right: Instagram CTA Button */}
            <div>
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-pink-600/25 transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                <span>Kunjungi Instagram Resmi</span>
                <ExternalLink className="w-4 h-4" />
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
