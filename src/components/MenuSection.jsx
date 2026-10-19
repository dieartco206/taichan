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
    <section id="menu" className="py-16 sm:py-20 relative overflow-hidden bg-[#faf6ee]/70 border-y border-stone-200/70">
      
      {/* Warm Ambient Radiance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-10 w-[550px] h-[550px] bg-amber-200/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -left-10 w-[550px] h-[550px] bg-orange-200/25 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Katalog Resmi & Harga Tertera</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-tight whitespace-normal md:whitespace-nowrap">
            Menu Juara <span className="text-gradient-flame">Taichan 56 Djoeanda Margonda</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
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
                    ? 'bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 text-white shadow-md shadow-red-600/30 scale-105' 
                    : 'bg-white text-stone-700 hover:text-stone-950 hover:bg-stone-50 border border-stone-200 shadow-2xs'
                }`}
              >
                <span>{cat.name}</span>
                {cat.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/30 text-white' : 'bg-red-50 text-red-600 border border-red-200'
                  }`}>
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid (2-columns on mobile, responsive up to 4-cols) */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
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
                  className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-red-400/60 shadow-sm hover:shadow-xl transition-all card-hover-effect flex flex-col justify-between"
                >
                  <div>
                    {/* Image thumbnail */}
                    <div className="relative h-32 sm:h-44 md:h-48 w-full overflow-hidden bg-stone-100">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-2 left-2 flex flex-wrap items-center gap-1">
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded-full bg-red-600 text-white font-bold text-[9px] sm:text-[10px] shadow-sm">
                            {item.badge}
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-full bg-stone-900/85 text-white font-semibold text-[9px] sm:text-[10px] backdrop-blur-xs">
                          {item.portion}
                        </span>
                      </div>

                      {/* Spicy Flames Indicator */}
                      {item.spicyLevel > 0 && (
                        <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-stone-900/85 backdrop-blur-xs text-white hidden xs:flex items-center gap-0.5">
                          {Array.from({ length: item.spicyLevel }).map((_, i) => (
                            <Flame key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500 fill-red-500" />
                          ))}
                        </div>
                      )}

                      {/* In Cart Indicator */}
                      {inCartCount > 0 && (
                        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded-full bg-emerald-600 text-white font-bold text-[9px] sm:text-[11px] flex items-center gap-1 shadow-md">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span>{inCartCount}</span>
                          <span className="hidden sm:inline">di keranjang</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content (Readable Title & Description) */}
                    <div className="p-3 sm:p-4 space-y-1">
                      <h3 className="font-display font-bold text-xs sm:text-sm md:text-base text-stone-900 group-hover:text-red-600 transition-colors line-clamp-1" title={item.name}>
                        {item.name}
                      </h3>
                      
                      <p className="text-[10px] sm:text-xs text-stone-500 line-clamp-2 leading-relaxed" title={item.description}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Price & Add Button */}
                  <div className="p-3 sm:p-4 pt-0 sm:pt-1 flex items-center justify-between gap-1.5 border-t border-stone-100/80">
                    <div className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-wider block font-medium">Harga</span>
                      <span className="font-display font-black text-xs sm:text-sm md:text-base text-stone-900 truncate block">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`p-2 sm:px-3 sm:py-2 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition-all flex-shrink-0 ${
                        isJustAdded 
                          ? 'bg-emerald-600 text-white shadow-sm' 
                          : 'bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-200/80 hover:border-transparent shadow-2xs'
                      }`}
                      title="Tambah ke pesanan"
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline text-xs">Ditambah</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline text-xs">Pesan</span>
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
