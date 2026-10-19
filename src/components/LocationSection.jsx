import React from 'react';
import { MapPin, Clock, Navigation, ExternalLink, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-16 sm:py-20 relative overflow-hidden bg-charcoal-950">
      
      {/* Background night street ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/brand/bg_night_street.jpg" 
          alt="Night Street Margonda Atmosphere" 
          className="w-full h-full object-cover object-center opacity-20 filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080d] via-[#07080d]/80 to-[#07080d]" />
        
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neonPink/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header (Strict Single-Line on Desktop) */}
        <div className="text-center space-y-1.5 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-neonPink text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kunjungi Kedai Taichan 56</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white whitespace-normal md:whitespace-nowrap">
            Lokasi Kedai & Jam Buka <span className="text-gradient-flame">Margonda Depok</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base whitespace-normal lg:whitespace-nowrap">
            Strategis di jalur utama Jl. Margonda Raya, persis samping KFC Margonda. Parkir luas untuk motor dan mobil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Detail Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5 p-6 sm:p-7 rounded-3xl glass-panel border border-white/10">
            
            <div className="space-y-5">
              
              {/* Address card */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-neonPink/15 text-neonPink border border-neonPink/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white whitespace-nowrap">Alamat Lengkap Kedai</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {RESTAURANT_INFO.fullAddress}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-bold text-neonPink bg-neonPink/10 px-2.5 py-0.5 rounded-md border border-neonPink/25 whitespace-nowrap">
                    📍 Patokan: Tepat di samping KFC Margonda
                  </span>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-neonCyan/15 text-neonCyan border border-neonCyan/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white whitespace-nowrap">Jam Operasional Malam</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 whitespace-nowrap">
                    Setiap Hari: <strong className="text-white font-bold">{RESTAURANT_INFO.operationalHours}</strong> (Senin s/d Minggu)
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">
                    Tersedia Take away & Dine in langsung di lokasi
                  </p>
                </div>
              </div>

              {/* Features list in Single Lines */}
              <div className="pt-2 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dine-In (Makan di tempat suasana santai malam Depok)</span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Take Away (Bungkus rapi dengan sambal dipisah)</span>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Online Delivery: GoFood • GrabFood • ShopeeFood</span>
                </div>
              </div>

            </div>

            {/* Direction Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-white font-bold text-xs sm:text-sm border border-white/15 hover:border-neonPink/50 flex items-center justify-center gap-2 transition-all shadow-lg whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 text-neonPink" />
                <span>Rute Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={RESTAURANT_INFO.shopeefoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-orange-500/15 hover:bg-orange-500/25 text-orange-400 font-bold text-xs sm:text-sm border border-orange-500/30 flex items-center justify-center gap-1.5 transition-all whitespace-nowrap"
              >
                <span>ShopeeFood</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl relative min-h-[350px]">
            <iframe 
              src={RESTAURANT_INFO.mapsEmbedQuery}
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '360px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Sate Taichan 56 Djoeanda Margonda"
              className="grayscale-[20%] contrast-[110%] w-full h-full"
            />
            
            {/* Map overlay card */}
            <div className="absolute top-3.5 left-3.5 bg-charcoal-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 shadow-xl whitespace-nowrap">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neonPink animate-ping" />
                <span className="text-xs font-bold text-white">Taichan 56 Margonda</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">Samping KFC Margonda Raya Depok</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
