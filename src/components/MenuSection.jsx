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
    <section id="menu" className="py-20 relative overflow-hidden bg-charcoal-950">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neonPink/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-neonCyan/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header (Strict Single-Line on Desktop) */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-neonPink text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Katalog Resmi & Harga Tertera</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight whitespace-normal md:whitespace-nowrap">
            Menu Juara <span className="text-gradient-flame">Taichan 56 Djoeanda Margonda</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base whitespace-normal lg:whitespace-nowrap">
            Semua sate disajikan segar dengan marinasi bumbu gurih, sambal rawit uleg asli, dan potongan jeruk nipis wangi.
          </p>
        </div>

        {/* Category Filter Tabs (Single-line row) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
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

        {/* Menu Cards Grid (Responsive 4-columns on XL screen, perfectly balanced) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
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
                    <div className="relative h-48 w-full overflow-hidden bg-charcoal-900">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />

                      {/* Top Badges in Single Line */}
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

                    {/* Card Content (Clean single-line title and concise description) */}
                    <div className="p-4 space-y-1">
                      <h3 className="font-display font-bold text-base text-white group-hover:text-neonPink transition-colors whitespace-nowrap truncate" title={item.name}>
                        {item.name}
                      </h3>
                      
                      <p className="text-xs text-slate-400 whitespace-nowrap truncate" title={item.description}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Price & Add Button (Strict Single Line) */}
                  <div className="p-4 pt-1 flex items-center justify-between">
                    <div className="whitespace-nowrap">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-medium">Harga</span>
                      <span className="font-display font-extrabold text-base text-white">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all duration-300 whitespace-nowrap ${
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
