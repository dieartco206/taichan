import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, UtensilsCrossed, Share2, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SPICE_LEVELS } from '../data/restaurantData';
import { DoodleChili, DoodleCobek, DoodleFlame, DoodleLime } from './FoodDoodles';

export default function SpicyMeterGimmick() {
  const [selectedLevelIndex, setSelectedLevelIndex] = useState(2); // Level 3: Nampol 56
  const [copied, setCopied] = useState(false);

  const currentLevel = SPICE_LEVELS[selectedLevelIndex];

  const handleSelectLevel = (idx) => {
    setSelectedLevelIndex(idx);
    if (idx === 3) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#e11d48', '#f97316', '#f59e0b', '#dc2626']
      });
    }
  };

  const handleChallengeFriend = () => {
    const text = `Gue tantang lu makan Sate Taichan 56 Djoeanda di Margonda Depok ${currentLevel.name}! Berani ga lu? Cek menunya di https://www.instagram.com/taichan56djoeanda/ 🔥🍢`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#e11d48', '#f97316', '#f59e0b']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="spicy-meter" className="py-20 relative overflow-hidden bg-[#fff2ee] border-b border-red-200/70">
      
      {/* Background glow dynamic with Spicy Food Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[140px] transition-all duration-700 opacity-25"
          style={{
            backgroundColor: selectedLevelIndex === 3 ? '#f43f5e' : selectedLevelIndex === 2 ? '#fb923c' : '#fbbf24'
          }}
        />

        {/* Food Doodles - Chili & Flame Focus */}
        {/* Top-Left: Large Fiery Chili */}
        <div className="absolute top-10 left-10 select-none opacity-40">
          <DoodleChili className="w-22 h-22 sm:w-28 sm:h-28 text-red-600/35" rotate={-25} />
        </div>

        {/* Top-Right: Flame Ember */}
        <div className="absolute top-12 right-12 select-none opacity-40">
          <DoodleFlame className="w-24 h-24 sm:w-28 sm:h-28 text-orange-600/35" rotate={15} />
        </div>

        {/* Mid-Left: Cobek Ulek Sambal Batu */}
        <div className="absolute top-1/2 -left-2 sm:left-8 select-none opacity-35">
          <DoodleCobek className="w-24 h-24 sm:w-28 sm:h-28 text-stone-600/30" rotate={-10} />
        </div>

        {/* Mid-Right: Second Chili Pepper */}
        <div className="absolute top-1/2 -right-2 sm:right-10 select-none opacity-40">
          <DoodleChili className="w-20 h-20 sm:w-24 sm:h-24 text-red-600/35" rotate={40} />
        </div>

        {/* Bottom-Left: Fire Flame */}
        <div className="absolute bottom-12 left-1/4 select-none opacity-35 hidden sm:block">
          <DoodleFlame className="w-20 h-20 text-orange-600/30" rotate={-15} />
        </div>

        {/* Bottom-Right: Lime Slice (Penenang Pedas) */}
        <div className="absolute bottom-12 right-1/4 select-none opacity-40 hidden sm:block">
          <DoodleLime className="w-20 h-20 text-emerald-700/30" rotate={30} />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header (Strict Single-Line on Desktop) */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-sm">
            <Flame className="w-3.5 h-3.5 fill-red-600 text-red-600" />
            <span>Spiciness Simulator Taichan 56</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-stone-900 whitespace-normal md:whitespace-nowrap">
            Seberapa Kuat Lidahmu di <span className="text-gradient-flame">Taichan 56 Djoeanda?</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base whitespace-normal lg:whitespace-nowrap">
            Racikan cabai rawit merah segar diuleg mendadak berpadu perasan jeruk nipis murni. Tentukan level kepedasan favoritmu!
          </p>
        </div>

        {/* Level Selector Tabs (4 Columns on Desktop, Single-line labels) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {SPICE_LEVELS.map((lvl, index) => {
            const isSelected = selectedLevelIndex === index;
            return (
              <button
                key={lvl.level}
                onClick={() => handleSelectLevel(index)}
                className={`relative p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-white border-red-500 shadow-md ring-2 ring-red-500/20' 
                    : 'bg-white/80 border-stone-200 hover:border-stone-300 hover:bg-white shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-bold tracking-wider uppercase whitespace-nowrap ${isSelected ? 'text-red-600' : 'text-stone-500'}`}>
                      Level {lvl.level}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: lvl.flameCount }).map((_, i) => (
                        <Flame 
                          key={i} 
                          className={`w-3.5 h-3.5 ${
                            isSelected ? 'text-red-600 fill-red-600 animate-pulse' : 'text-stone-300'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  <h4 className={`font-display font-bold text-sm sm:text-base whitespace-nowrap truncate ${isSelected ? 'text-stone-900' : 'text-stone-700'}`}>
                    {lvl.name.split(':')[1]?.trim() || lvl.name}
                  </h4>
                </div>

                <div className="mt-3 pt-1 flex items-center justify-between text-[11px] whitespace-nowrap border-t border-stone-100">
                  <span className="text-stone-500 font-mono">{lvl.scoville}</span>
                  <span className={`font-bold ${isSelected ? 'text-red-600' : 'text-stone-400'}`}>
                    {lvl.heatPercentage}% Heat
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Animated Details Box (Wide & Single-line where possible) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLevel.level}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 relative overflow-hidden shadow-xl shadow-stone-200/50"
          >
            {/* Heat Meter Progress Bar */}
            <div className="mb-5">
              <div className="flex items-center justify-between text-xs font-semibold mb-2 whitespace-nowrap">
                <span className="text-stone-600 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <Flame className="w-4 h-4 text-red-600 fill-red-600" />
                  Tingkat Kepedasan Cabai Rawit Merah
                </span>
                <span className="text-stone-900 font-mono font-bold">{currentLevel.heatPercentage}% - {currentLevel.scoville}</span>
              </div>
              <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden p-0.5 border border-stone-200">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${currentLevel.heatPercentage}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-600`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
              
              {/* Left description */}
              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    {currentLevel.tagline}
                  </span>
                  <span className="text-stone-300 hidden sm:inline">•</span>
                  <h3 className="font-display font-black text-lg sm:text-2xl text-stone-900">
                    {currentLevel.name}
                  </h3>
                </div>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {currentLevel.description}
                </p>

                {/* Recommendation Pill */}
                <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-start sm:items-center gap-2.5 sm:gap-3 text-xs">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0 font-bold">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-relaxed">
                    <span className="font-bold text-stone-900 mr-1.5">Saran Pendamping:</span>
                    <span className="text-stone-600">{currentLevel.recommendation}</span>
                  </div>
                </div>
              </div>

              {/* Right Challenge Button */}
              <div className="lg:col-span-4 flex flex-col gap-2 justify-center">
                <button
                  onClick={handleChallengeFriend}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.01] shadow-lg shadow-red-600/20"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="text-white font-bold">Teks Tantangan Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 text-white flex-shrink-0" />
                      <span>Tantang Teman ({currentLevel.name.split(':')[0]})</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-stone-500">
                  Pesan langsung via GoFood, GrabFood, ShopeeFood & Dine-in.
                </p>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
