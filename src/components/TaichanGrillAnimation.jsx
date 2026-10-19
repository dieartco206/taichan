import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Wind, Sparkles } from 'lucide-react';

// Generates stable random spark particles
const SPARKS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${15 + (i * 4.2) + (Math.sin(i * 1.7) * 6)}%`,
  size: 3 + (i % 3) * 1.5,
  duration: 1.8 + (i % 5) * 0.4,
  delay: (i * 0.18) % 2.5,
  drift: (i % 2 === 0 ? 1 : -1) * (15 + (i % 4) * 8),
  color: i % 3 === 0 ? '#ffea79' : i % 3 === 1 ? '#ff7828' : '#ff2a5f'
}));

// Generates smoke plumes
const SMOKE_PLUMES = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  left: `${20 + i * 15}%`,
  width: 70 + (i % 3) * 25,
  height: 90 + (i % 3) * 30,
  duration: 3 + i * 0.5,
  delay: i * 0.6,
  drift: (i % 2 === 0 ? -25 : 25)
}));

export default function TaichanGrillAnimation() {
  const [isFanning, setIsFanning] = useState(false);
  const [fannedCount, setFannedCount] = useState(0);

  const handleFanGrill = () => {
    setIsFanning(true);
    setFannedCount(prev => prev + 1);
    setTimeout(() => setIsFanning(false), 900);
  };

  return (
    <div className="relative w-full max-w-[480px] mx-auto select-none">
      
      {/* Ambient Radiant Heat Glow behind the grill */}
      <motion.div 
        animate={{
          scale: isFanning ? [1, 1.15, 1.05] : [1, 1.04, 0.98, 1],
          opacity: isFanning ? [0.6, 0.9, 0.7] : [0.45, 0.6, 0.45],
        }}
        transition={{ duration: isFanning ? 0.8 : 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-4 bg-gradient-to-tr from-rose-600/40 via-orange-500/35 to-amber-400/25 rounded-[2.5rem] blur-3xl -z-10 pointer-events-none"
      />

      {/* Main Charcoal Grill Frame */}
      <div 
        onClick={handleFanGrill}
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#14121a] via-[#0d0c12] to-[#08070b] border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] cursor-pointer group"
        title="Klik untuk mengipasi arang! 🔥"
      >
        {/* Subtle Top Metallic Grill Lip Highlight */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 opacity-60 z-30" />
        <div className="absolute bottom-0 inset-x-0 h-2 bg-black/80 z-30" />

        {/* --- LAYER 1: GLOWING CHARCOAL BED (BARA ARANG MENYALA) --- */}
        <div className="absolute inset-x-4 bottom-4 top-16 rounded-2xl bg-black overflow-hidden">
          {/* Intense Heat Radial Gradient */}
          <motion.div 
            animate={{
              opacity: isFanning ? [0.8, 1, 0.85] : [0.75, 0.95, 0.75],
              scale: isFanning ? [1, 1.08, 1.02] : [1, 1.03, 1],
            }}
            transition={{ duration: isFanning ? 0.7 : 1.8, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#ff9a3c_0%,_#ea580c_35%,_#b91c1c_65%,_#2b0d0d_95%)]"
          />

          {/* Deep Ember Core */}
          <motion.div 
            animate={{ opacity: isFanning ? [0.9, 1, 0.85] : [0.5, 0.8, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="absolute inset-x-8 bottom-3 top-8 bg-gradient-to-t from-orange-500/80 via-amber-400/70 to-yellow-200/50 blur-md rounded-xl"
          />

          {/* Lump Charcoal Rocks (Siluet Bongkahan Arang Kelapa) */}
          <div className="absolute inset-0 flex flex-wrap justify-around items-center p-3 opacity-90 mix-blend-multiply pointer-events-none">
            <div className="w-16 h-10 bg-zinc-950 rounded-2xl rotate-12 blur-[1px] shadow-inner" />
            <div className="w-20 h-12 bg-zinc-900 rounded-3xl -rotate-6 blur-[1px]" />
            <div className="w-14 h-9 bg-zinc-950 rounded-xl rotate-45 blur-[1px]" />
            <div className="w-24 h-11 bg-zinc-900 rounded-2xl -rotate-12 blur-[1px]" />
            <div className="w-18 h-10 bg-zinc-950 rounded-3xl rotate-6 blur-[1px]" />
            <div className="w-20 h-12 bg-zinc-900 rounded-2xl rotate-18 blur-[1px]" />
            <div className="w-14 h-8 bg-zinc-950 rounded-xl -rotate-25 blur-[1px]" />
            <div className="w-22 h-11 bg-zinc-900 rounded-2xl rotate-3 blur-[1px]" />
          </div>

          {/* Sizzling Fire Flickers Beneath Grill (Lidah Api Arang) */}
          <div className="absolute inset-x-8 bottom-6 flex justify-around items-end h-28 pointer-events-none">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <motion.div
                key={idx}
                animate={{
                  scaleY: isFanning ? [1.2, 1.9, 1.4, 2] : [0.9, 1.4, 0.8, 1.3],
                  scaleX: [0.9, 1.15, 0.95, 1],
                  opacity: isFanning ? [0.8, 1, 0.75] : [0.55, 0.85, 0.5],
                }}
                transition={{
                  duration: 0.5 + (idx * 0.1),
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: idx * 0.12,
                }}
                className="w-8 sm:w-10 origin-bottom bg-gradient-to-t from-red-600 via-orange-500 to-amber-300 rounded-t-full blur-[2px] opacity-75"
                style={{ height: `${40 + (idx % 3) * 18}px` }}
              />
            ))}
          </div>
        </div>

        {/* --- LAYER 2: METAL GRILL WIRE GRATES (JERUJI BESI PANGGANGAN) --- */}
        <div className="absolute inset-x-3 inset-y-6 flex flex-col justify-between pointer-events-none z-10 opacity-85">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className="w-full h-1 bg-gradient-to-r from-zinc-700 via-zinc-300 to-zinc-700 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
            />
          ))}
        </div>

        {/* --- LAYER 3: SATE TAICHAN SKEWERS (TUSUKAN SATE TAICHAN DI ATAS PANGGANGAN) --- */}
        <div className="absolute inset-x-6 top-8 bottom-8 flex justify-center items-center gap-3.5 sm:gap-5 z-20 pointer-events-none">
          
          {/* Skewer 1: Sate Taichan Paha Daging Tebal */}
          <motion.div 
            animate={{ y: [0, -1.5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex flex-col items-center h-full justify-between"
          >
            {/* Bamboo Stick Top */}
            <div className="w-1.5 h-7 bg-gradient-to-b from-[#e3c28e] to-[#c69a58] rounded-t-sm shadow-sm" />
            
            {/* 4 Plump Juicy Meat Cubes with Char Marks */}
            <div className="space-y-1 my-auto flex flex-col items-center">
              <div className="w-7 sm:w-8 h-8 rounded-lg bg-gradient-to-br from-[#fff7e6] via-[#f7e4be] to-[#dfbb7d] shadow-md border-t border-amber-900/40 relative overflow-hidden">
                <div className="absolute inset-x-0 top-2 h-1 bg-amber-950/60 rounded-full" />
                <div className="absolute right-1 top-4 w-1.5 h-1.5 rounded-full bg-red-600/70" />
              </div>
              <div className="w-8 sm:w-9 h-9 rounded-lg bg-gradient-to-br from-[#fffdf5] via-[#f5e0b6] to-[#d6af6c] shadow-md relative overflow-hidden">
                <div className="absolute inset-x-1 top-3 h-1 bg-amber-950/70 rounded-full" />
                <div className="absolute left-1 bottom-1 w-1.5 h-1.5 rounded-full bg-red-600/80" />
              </div>
              <div className="w-7 sm:w-8 h-8 rounded-lg bg-gradient-to-br from-[#fff6e3] via-[#f2dda9] to-[#cca158] shadow-md relative overflow-hidden">
                <div className="absolute inset-x-0 top-2 h-1.5 bg-amber-950/65 rounded-full" />
              </div>
              <div className="w-7 sm:w-8 h-7 rounded-lg bg-gradient-to-br from-[#fffaee] via-[#ecd59d] to-[#c2964b] shadow-md relative overflow-hidden">
                <div className="absolute inset-x-1 top-2 h-1 bg-amber-950/60 rounded-full" />
              </div>
            </div>

            {/* Bamboo Skewer Handle */}
            <div className="w-1.5 h-12 bg-gradient-to-b from-[#c69a58] to-[#9e7539] rounded-b-sm shadow-sm" />
          </motion.div>

          {/* Skewer 2: Sate Taichan Kulit Crispy (Golden Brown & Garing) */}
          <motion.div 
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="relative flex flex-col items-center h-full justify-between"
          >
            {/* Bamboo Stick Top */}
            <div className="w-1.5 h-6 bg-gradient-to-b from-[#e3c28e] to-[#c69a58] rounded-t-sm shadow-sm" />
            
            {/* Crispy Ruffled Skin Texture */}
            <div className="space-y-0.5 my-auto flex flex-col items-center">
              <div className="w-7 sm:w-8 h-6 rounded-md bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#b45309] shadow-md border-t border-amber-950/60 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#fff_0%,_transparent_60%)] opacity-25" />
              </div>
              <div className="w-8 sm:w-9 h-7 rounded-md bg-gradient-to-r from-[#b45309] via-[#f59e0b] to-[#d97706] shadow-md relative">
                <div className="absolute inset-x-0 top-2 h-1 bg-amber-950/80 rounded-full" />
              </div>
              <div className="w-8 sm:w-9 h-7 rounded-md bg-gradient-to-r from-[#d97706] via-[#fbbf24] to-[#92400e] shadow-md relative">
                <div className="absolute right-1 top-1 w-2 h-1 bg-red-600/70 rounded-full" />
              </div>
              <div className="w-7 sm:w-8 h-6 rounded-md bg-gradient-to-r from-[#b45309] via-[#d97706] to-[#78350f] shadow-md relative">
                <div className="absolute inset-x-1 top-2 h-1 bg-amber-950/70 rounded-full" />
              </div>
            </div>

            {/* Bamboo Skewer Handle */}
            <div className="w-1.5 h-12 bg-gradient-to-b from-[#c69a58] to-[#9e7539] rounded-b-sm shadow-sm" />
          </motion.div>

          {/* Skewer 3: Sate Taichan Signature Dada Tebal & Sambal Uleg */}
          <motion.div 
            animate={{ y: [0, -2.5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
            className="relative flex flex-col items-center h-full justify-between"
          >
            {/* Bamboo Stick Top */}
            <div className="w-1.5 h-8 bg-gradient-to-b from-[#e3c28e] to-[#c69a58] rounded-t-sm shadow-sm" />
            
            {/* Juicy Meat with Hot Sambal Drips */}
            <div className="space-y-1 my-auto flex flex-col items-center">
              <div className="w-8 sm:w-9 h-8 rounded-lg bg-gradient-to-br from-[#fffdf5] via-[#faebd1] to-[#deb87a] shadow-lg relative overflow-hidden">
                <div className="absolute inset-x-1 top-2 h-1 bg-amber-950/75 rounded-full" />
                {/* Red Rawit Chili Glaze */}
                <div className="absolute inset-x-2 bottom-1 h-3 bg-red-600/80 rounded-full blur-[0.5px]" />
              </div>
              <div className="w-9 sm:w-10 h-9 rounded-lg bg-gradient-to-br from-[#ffffff] via-[#f7e4be] to-[#cca25c] shadow-lg relative overflow-hidden">
                <div className="absolute inset-x-2 top-3 h-1.5 bg-amber-950/80 rounded-full" />
                <div className="absolute right-1 top-2 w-2.5 h-2.5 bg-red-600 rounded-full shadow-sm" />
              </div>
              <div className="w-8 sm:w-9 h-9 rounded-lg bg-gradient-to-br from-[#fffcf2] via-[#eed8a7] to-[#c89e53] shadow-lg relative overflow-hidden">
                <div className="absolute inset-x-1 top-3 h-1 bg-amber-950/70 rounded-full" />
                <div className="absolute left-2 bottom-1.5 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <div className="w-7 sm:w-8 h-7 rounded-lg bg-gradient-to-br from-[#fff7e6] via-[#e5cb93] to-[#bc8f42] shadow-lg relative overflow-hidden">
                <div className="absolute inset-x-0 top-2 h-1 bg-amber-950/65 rounded-full" />
              </div>
            </div>

            {/* Bamboo Skewer Handle */}
            <div className="w-1.5 h-12 bg-gradient-to-b from-[#c69a58] to-[#9e7539] rounded-b-sm shadow-sm" />
          </motion.div>

          {/* Skewer 4: Sate Taichan Paha Tender Juicy */}
          <motion.div 
            animate={{ y: [0, -1.8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
            className="relative flex flex-col items-center h-full justify-between"
          >
            {/* Bamboo Stick Top */}
            <div className="w-1.5 h-6 bg-gradient-to-b from-[#e3c28e] to-[#c69a58] rounded-t-sm shadow-sm" />
            
            {/* Tender Chicken Cubes */}
            <div className="space-y-1 my-auto flex flex-col items-center">
              <div className="w-7 sm:w-8 h-8 rounded-lg bg-gradient-to-br from-[#fff9ea] via-[#f4dcab] to-[#d6ad66] shadow-md relative overflow-hidden">
                <div className="absolute inset-x-0 top-2 h-1 bg-amber-950/60 rounded-full" />
              </div>
              <div className="w-8 sm:w-9 h-8 rounded-lg bg-gradient-to-br from-[#fffef8] via-[#eed49c] to-[#cba055] shadow-md relative overflow-hidden">
                <div className="absolute inset-x-1 top-3 h-1 bg-amber-950/70 rounded-full" />
                <div className="absolute right-1 bottom-1 w-1.5 h-1.5 rounded-full bg-red-600/70" />
              </div>
              <div className="w-8 sm:w-9 h-8 rounded-lg bg-gradient-to-br from-[#fff7e5] via-[#e5c98f] to-[#be9042] shadow-md relative overflow-hidden">
                <div className="absolute inset-x-0 top-2 h-1.5 bg-amber-950/65 rounded-full" />
              </div>
              <div className="w-7 sm:w-8 h-7 rounded-lg bg-gradient-to-br from-[#fff3dc] via-[#dac084] to-[#ad8036] shadow-md relative overflow-hidden">
                <div className="absolute inset-x-1 top-2 h-1 bg-amber-950/60 rounded-full" />
              </div>
            </div>

            {/* Bamboo Skewer Handle */}
            <div className="w-1.5 h-12 bg-gradient-to-b from-[#c69a58] to-[#9e7539] rounded-b-sm shadow-sm" />
          </motion.div>

        </div>

        {/* --- LAYER 4: RISING SMOKE (ASAP AROMA PANGGANGAN ARANG) --- */}
        <div className="absolute inset-0 pointer-events-none z-25 overflow-hidden">
          {SMOKE_PLUMES.map((smoke) => (
            <motion.div
              key={smoke.id}
              initial={{ y: 80, x: 0, opacity: 0, scale: 0.6 }}
              animate={{
                y: -130,
                x: smoke.drift,
                opacity: isFanning ? [0, 0.45, 0] : [0, 0.25, 0],
                scale: [0.6, 1.4, 2],
              }}
              transition={{
                duration: smoke.duration,
                repeat: Infinity,
                delay: smoke.delay,
                ease: "easeOut",
              }}
              style={{
                left: smoke.left,
                width: `${smoke.width}px`,
                height: `${smoke.height}px`,
              }}
              className="absolute bottom-16 bg-white/30 rounded-full blur-2xl filter"
            />
          ))}
        </div>

        {/* --- LAYER 5: FLOATING SPARKS & EMBERS (PERCIKAN BARA API) --- */}
        <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
          {SPARKS.map((spark) => (
            <motion.div
              key={spark.id}
              initial={{ y: 50, x: 0, opacity: 0, scale: 0 }}
              animate={{
                y: -210,
                x: [0, spark.drift * 0.4, spark.drift],
                opacity: isFanning ? [0, 1, 0.8, 0] : [0, 0.9, 0.6, 0],
                scale: [0, 1, 0.4, 0],
              }}
              transition={{
                duration: isFanning ? spark.duration * 0.65 : spark.duration,
                repeat: Infinity,
                delay: spark.delay,
                ease: "easeOut",
              }}
              style={{
                left: spark.left,
                bottom: "22%",
                width: `${isFanning ? spark.size * 1.5 : spark.size}px`,
                height: `${isFanning ? spark.size * 1.5 : spark.size}px`,
                backgroundColor: spark.color,
                boxShadow: `0 0 8px ${spark.color}`,
              }}
              className="absolute rounded-full"
            />
          ))}
        </div>

        {/* --- TOP BADGE: SIZZLE STATUS --- */}
        <div className="absolute top-3 left-3 z-30 pointer-events-none flex items-center gap-2">
          <div className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-lg">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="text-amber-300">Panggangan Arang Panas</span>
          </div>
        </div>

        {/* --- BOTTOM INTERACTIVE FANNING CTA --- */}
        <div className="absolute bottom-3 inset-x-3 z-30 flex items-center justify-between pointer-events-none">
          <div className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-slate-300 flex items-center gap-1.5 shadow-md">
            <Flame className="w-3.5 h-3.5 text-neonPink fill-neonPink animate-pulse" />
            <span>100% Arang Kelapa Asli</span>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            className="pointer-events-auto px-3 py-1 rounded-full bg-gradient-to-r from-neonPink/80 to-rose-600/80 hover:from-neonPink hover:to-rose-500 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-lg border border-white/20 transition-all"
          >
            <Wind className={`w-3.5 h-3.5 ${isFanning ? 'animate-spin' : ''}`} />
            <span>{isFanning ? 'Bara Membara! 🔥' : 'Kipas Arang'}</span>
          </motion.div>
        </div>

      </div>

      {/* Interactive Micro-hint below */}
      <p className="text-center text-[11px] text-slate-400/90 mt-2.5 flex items-center justify-center gap-1.5">
        <Sparkles className="w-3 h-3 text-amber-400" />
        <span>Sentuh atau klik panggangan untuk mengipasi bara sate!</span>
      </p>

    </div>
  );
}
