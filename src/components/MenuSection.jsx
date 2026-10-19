import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Plus, Check, UtensilsCrossed } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';

export default function MenuSection({ onAddToCart, cartItems }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedItemId, setAddedItemId] = useState(null);

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleAdd = (item) => {
    onAddToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 1200);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <section id="menu" className="py-16 sm:py-20 relative overflow-hidden bg-[#0d111e]/80">
      
      {/* Background culinary charcoal texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/brand/bg_dark_texture.jpg" 
          alt="Charcoal Texture Backdrop" 
          className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d111e] via-transparent to-[#0d111e]" />
        
        {/* Luminous ambient neon glows */}
        <div className="absolute top-1/4 -right-10 w-[550px] h-[550px] bg-neonPink/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -left-10 w-[550px] h-[550px] bg-neonCyan/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-neonPink text-xs font-bold uppercase tracking-wider">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Katalog Resmi & Harga Tertera</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight whitespace-normal md:whitespace-nowrap">
            Menu Juara <span className="text-gradient-flame">Taichan 56 Djoeanda Margonda</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Semua sate disajikan segar dengan marinasi bumbu gurih, sambal rawit uleg asli, dan potongan jeruk nipis wangi.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-6 sm:mb-8 no-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
                  isActive 
                    ? 'bg-gradient-to-r from-neonPink to-rose-600 text-white shadow-[0_0_15px_rgba(255,26,117,0.4)] scale-105' 
                    : 'bg-charcoal-900 text-slate-300 hover:text-white hover:bg-charcoal-800 border border-white/10'
                }`}
              >
                <span>{cat.name}</span>
                {cat.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/30 text-white' : 'bg-neonPink/20 text-neonPink'
                  }`}>
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              const inCartCount = cartItems?.find(ci => ci.id === item.id)?.qty || 0;
              const isJustAdded = addedItemId === item.id;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  key={item.id}
                  className="group relative glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-neonPink/40 card-hover-effect flex flex-col justify-between"
                >
                  <div>
                    {/* Image thumbnail */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-charcoal-900">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 whitespace-nowrap">
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded-full bg-neonPink/90 text-white font-bold text-[10px] backdrop-blur-md shadow-md">
                            {item.badge}
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-full bg-charcoal-900/80 text-slate-300 font-semibold text-[10px] backdrop-blur-md border border-white/10">
                          {item.portion}
                        </span>
                      </div>

                      {/* Spicy Flames Indicator */}
                      {item.spicyLevel > 0 && (
                        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-white/10 flex items-center gap-0.5">
                          {Array.from({ length: item.spicyLevel }).map((_, i) => (
                            <Flame key={i} className="w-3 h-3 text-neonPink fill-neonPink" />
                          ))}
                        </div>
                      )}

                      {/* In Cart Indicator */}
                      {inCartCount > 0 && (
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-full bg-emerald-500 text-white font-bold text-[11px] flex items-center gap-1 shadow-md whitespace-nowrap">
                          <Check className="w-3 h-3" />
                          <span>{inCartCount} di keranjang</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content (Readable Title & Description) */}
                    <div className="p-3.5 sm:p-4 space-y-1">
                      <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-neonPink transition-colors line-clamp-1" title={item.name}>
                        {item.name}
                      </h3>
                      
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed" title={item.description}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Price & Add Button */}
                  <div className="p-3.5 sm:p-4 pt-1 flex items-center justify-between">
                    <div className="whitespace-nowrap">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-medium">Harga</span>
                      <span className="font-display font-extrabold text-sm sm:text-base text-white">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`px-3 sm:px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all duration-300 whitespace-nowrap ${
                        isJustAdded 
                          ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30' 
                          : 'bg-neonPink/15 hover:bg-neonPink text-neonPink hover:text-white border border-neonPink/30 hover:border-transparent'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Ditambahkan!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Pilih Menu</span>
                        </>
                      )}
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
