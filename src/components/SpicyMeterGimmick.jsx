import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, ShieldAlert, Sparkles, Citrus, GlassWater, Share2, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SPICE_LEVELS } from '../data/restaurantData';

export default function SpicyMeterGimmick() {
  const [selectedLevelIndex, setSelectedLevelIndex] = useState(2); // default Level 3: Nampol 56
  const [copied, setCopied] = useState(false);

  const currentLevel = SPICE_LEVELS[selectedLevelIndex];

  const handleSelectLevel = (idx) => {
    setSelectedLevelIndex(idx);
    if (idx === 3) {
      // Fire confetti when choosing level Dewa!
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#ff4d00', '#ef4444', '#f59e0b']
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
    <section id="spicy-meter" className="py-20 relative overflow-hidden bg-charcoal-900/60 border-y border-white/5">
      
      {/* Background glow dynamic */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] transition-all duration-700 opacity-20"
          style={{
            backgroundColor: selectedLevelIndex === 3 ? '#dc2626' : selectedLevelIndex === 2 ? '#ff4d00' : '#f59e0b'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-flame-500/10 border border-flame-500/30 text-flame-500 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 fill-flame-500" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Seberapa Kuat Lidahmu di <span className="text-gradient-flame">Taichan 56?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Sambal Taichan 56 diuleg dari cabai rawit merah segar pilihan dan kucuran jeruk nipis murni. Pilih level kepedasan favoritmu sebelum memesan!
          </p>
        </div>

        {/* Level Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
          {SPICE_LEVELS.map((lvl, index) => {
            const isSelected = selectedLevelIndex === index;
            return (
              <button
                key={lvl.level}
                onClick={() => handleSelectLevel(index)}
                className={`relative p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-charcoal-800 border-flame-500 shadow-lg shadow-flame-500/20 ring-1 ring-flame-500/50' 
                    : 'bg-charcoal-900/80 border-white/10 hover:border-white/20 hover:bg-charcoal-800/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      Level {lvl.level}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: lvl.flameCount }).map((_, i) => (
                        <Flame 
                          key={i} 
                          className={`w-3.5 h-3.5 ${
                            isSelected ? 'text-flame-500 fill-flame-500 animate-pulse' : 'text-slate-500'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  <h4 className={`font-display font-bold text-sm sm:text-base leading-snug ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {lvl.name.split(':')[1]?.trim() || lvl.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono">{lvl.scoville}</span>
                  <span className={`font-semibold ${isSelected ? 'text-flame-400' : 'text-slate-500'}`}>
                    {lvl.heatPercentage}% Heat
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Animated Details Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLevel.level}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-flame-500/30 relative overflow-hidden"
          >
            {/* Heat Meter Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-flame-500" />
                  Indeks Kepedasan
                </span>
                <span className="text-white font-mono">{currentLevel.heatPercentage}% - {currentLevel.scoville}</span>
              </div>
              <div className="h-3 w-full bg-charcoal-950 rounded-full overflow-hidden p-0.5 border border-white/10">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${currentLevel.heatPercentage}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${currentLevel.color}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left description */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <div className="text-xs font-bold text-flame-500 uppercase tracking-wider mb-1">
                    {currentLevel.tagline}
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {currentLevel.name}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {currentLevel.description}
                </p>

                {/* Pairing Recommendation */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-flame-500/20 text-flame-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-300">Rekomendasi Chef Taichan 56:</span>
                    <p className="text-xs text-slate-400 mt-0.5">{currentLevel.recommendation}</p>
                  </div>
                </div>
              </div>

              {/* Right CTA / Challenge button */}
              <div className="md:col-span-4 flex flex-col gap-3 justify-center">
                <button
                  onClick={handleChallengeFriend}
                  className="w-full py-3.5 px-4 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 border border-flame-500/40 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Teks Tantangan Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 text-flame-500" />
                      <span>Tantang Teman Makan {currentLevel.name.split(':')[0]}!</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  Tersedia di semua cabang & online delivery Taichan 56 Margonda.
                </p>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
