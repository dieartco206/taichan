import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, UtensilsCrossed, Share2, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SPICE_LEVELS } from '../data/restaurantData';

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
        colors: ['#ff1a75', '#00e5ff', '#ff8843']
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
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="spicy-meter" className="py-20 relative overflow-hidden bg-charcoal-900/40">
      
      {/* Background glow dynamic */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] transition-all duration-700 opacity-20"
          style={{
            backgroundColor: selectedLevelIndex === 3 ? '#ff1a75' : selectedLevelIndex === 2 ? '#ff4d00' : '#00e5ff'
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header (Strict Single-Line on Desktop) */}
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neonPink/10 border border-neonPink/30 text-neonPink text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            <Flame className="w-3.5 h-3.5 fill-neonPink" />
            <span>Spiciness Simulator Taichan 56</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white whitespace-normal md:whitespace-nowrap">
            Seberapa Kuat Lidahmu di <span className="text-gradient-flame">Taichan 56 Djoeanda?</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base whitespace-normal lg:whitespace-nowrap">
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
                    ? 'bg-charcoal-800 border-neonPink shadow-[0_0_20px_rgba(255,26,117,0.3)] ring-1 ring-neonPink/50' 
                    : 'bg-charcoal-900/80 border-white/10 hover:border-white/20 hover:bg-charcoal-800/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase whitespace-nowrap">
                      Level {lvl.level}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: lvl.flameCount }).map((_, i) => (
                        <Flame 
                          key={i} 
                          className={`w-3.5 h-3.5 ${
                            isSelected ? 'text-neonPink fill-neonPink animate-pulse' : 'text-slate-500'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  <h4 className={`font-display font-bold text-sm sm:text-base whitespace-nowrap truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {lvl.name.split(':')[1]?.trim() || lvl.name}
                  </h4>
                </div>

                <div className="mt-3 pt-1 flex items-center justify-between text-[11px] whitespace-nowrap">
                  <span className="text-slate-400 font-mono">{lvl.scoville}</span>
                  <span className={`font-semibold ${isSelected ? 'text-neonPink' : 'text-slate-500'}`}>
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
            className="glass-panel rounded-3xl p-6 sm:p-7 border border-neonPink/30 relative overflow-hidden shadow-2xl"
          >
            {/* Heat Meter Progress Bar */}
            <div className="mb-5">
              <div className="flex items-center justify-between text-xs font-semibold mb-2 whitespace-nowrap">
                <span className="text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-neonPink" />
                  Tingkat Kepedasan Cabai Rawit Merah
                </span>
                <span className="text-white font-mono">{currentLevel.heatPercentage}% - {currentLevel.scoville}</span>
              </div>
              <div className="h-2.5 w-full bg-charcoal-950 rounded-full overflow-hidden p-0.5 border border-white/10">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${currentLevel.heatPercentage}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r from-neonCyan via-neonPink to-rose-600`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left description */}
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-neonPink uppercase tracking-wider whitespace-nowrap">
                    {currentLevel.tagline}
                  </span>
                  <span className="text-slate-600">•</span>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white whitespace-nowrap">
                    {currentLevel.name}
                  </h3>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-normal xl:whitespace-nowrap">
                  {currentLevel.description}
                </p>

                {/* Recommendation Pill (Single Line) */}
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 text-xs">
                  <div className="w-7 h-7 rounded-lg bg-neonCyan/15 text-neonCyan flex items-center justify-center flex-shrink-0">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex items-center gap-1.5 whitespace-nowrap truncate">
                    <span className="font-bold text-slate-200">Saran Pendamping:</span>
                    <span className="text-slate-400">{currentLevel.recommendation}</span>
                  </div>
                </div>
              </div>

              {/* Right Challenge Button (Single Line) */}
              <div className="lg:col-span-4 flex flex-col gap-2 justify-center">
                <button
                  onClick={handleChallengeFriend}
                  className="w-full py-3 px-4 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 border border-neonPink/40 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.01] shadow-lg whitespace-nowrap"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Teks Tantangan Disalin ke Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 text-neonPink" />
                      <span>Tantang Teman Makan {currentLevel.name.split(':')[0]}!</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500 whitespace-nowrap">
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
