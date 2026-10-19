import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Plus, Check, ShoppingBag, Sparkles, Star } from 'lucide-react';
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
    <section id="menu" className="py-24 relative overflow-hidden bg-charcoal-950">
      
      {/* Ambient background lights */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-flame-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-chili-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-flame-500 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog Resmi & Harga Tertera</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Menu Juara <span className="text-gradient-flame">Taichan 56</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Semua sate taichan disajikan segar dengan bumbu bakar gurih khas, sambal rawit merah uleg asli, dan potongan jeruk nipis wangi.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  isActive 
                    ? 'bg-gradient-to-r from-flame-500 to-chili-600 text-white shadow-lg shadow-flame-500/25 scale-105' 
                    : 'bg-charcoal-900 text-slate-300 hover:text-white hover:bg-charcoal-800 border border-white/10'
                }`}
              >
                <span>{cat.name}</span>
                {cat.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/30 text-white' : 'bg-flame-500/20 text-flame-400'
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              const inCartCount = cartItems?.find(ci => ci.id === item.id)?.qty || 0;
              const isJustAdded = addedItemId === item.id;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group relative glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-flame-500/40 card-hover-effect flex flex-col justify-between"
                >
                  <div>
                    {/* Image thumbnail */}
                    <div className="relative h-52 w-full overflow-hidden bg-charcoal-900">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {item.badge && (
                          <span className="px-2.5 py-1 rounded-full bg-flame-500/90 text-white font-bold text-[11px] backdrop-blur-md shadow-md">
                            {item.badge}
                          </span>
                        )}
                        <span className="px-2.5 py-1 rounded-full bg-charcoal-900/80 text-slate-300 font-semibold text-[11px] backdrop-blur-md border border-white/10">
                          {item.portion}
                        </span>
                      </div>

                      {/* Spicy Flames Indicator */}
                      {item.spicyLevel > 0 && (
                        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-white/10 flex items-center gap-0.5">
                          {Array.from({ length: item.spicyLevel }).map((_, i) => (
                            <Flame key={i} className="w-3 h-3 text-flame-500 fill-flame-500" />
                          ))}
                        </div>
                      )}

                      {/* In Cart Indicator */}
                      {inCartCount > 0 && (
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 shadow-lg">
                          <Check className="w-3.5 h-3.5" />
                          <span>{inCartCount} di keranjang</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-flame-400 transition-colors">
                        {item.name}
                      </h3>
                      
                      <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Price & Add Button */}
                  <div className="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-2">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-medium">Harga</span>
                      <span className="font-display font-extrabold text-lg text-white">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all duration-300 ${
                        isJustAdded 
                          ? 'bg-emerald-500 text-white scale-105 shadow-lg shadow-emerald-500/30' 
                          : 'bg-flame-500/10 hover:bg-flame-500 text-flame-400 hover:text-white border border-flame-500/30 hover:border-transparent'
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
                          <span>Tambah</span>
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
