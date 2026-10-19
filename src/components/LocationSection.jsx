import React from 'react';
import { MapPin, Clock, Navigation, ExternalLink, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-16 sm:py-20 relative overflow-hidden bg-[#0b090d]/95">
      
      {/* Background night street ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/brand/bg_night_street.jpg" 
          alt="Night Street Margonda Atmosphere" 
          className="w-full h-full object-cover object-center opacity-35 filter brightness-85 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b090d] via-[#0b090d]/80 to-[#0b090d]" />
        
        {/* Luminous ambient glows */}
        <div className="absolute top-1/2 -left-10 w-[550px] h-[550px] bg-red-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -right-10 w-[450px] h-[450px] bg-amber-500/12 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header (Strict Single-Line on Desktop) */}
        <div className="text-center space-y-1.5 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
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
                <div className="w-10 h-10 rounded-xl bg-red-950/40 text-rose-400 border border-red-500/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white whitespace-nowrap">Alamat Lengkap Kedai</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {RESTAURANT_INFO.fullAddress}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-bold text-rose-400 bg-red-950/40 px-2.5 py-0.5 rounded-md border border-red-500/30 whitespace-nowrap">
                    📍 Patokan: Tepat di samping KFC Margonda
                  </span>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white">Jam Buka</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Setiap Hari: <strong className="text-white font-bold">{RESTAURANT_INFO.operationalHours}</strong>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Dine in & Take away di tempat
                  </p>
                </div>
              </div>

              {/* Features list */}
              <div className="pt-2 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dine-In (Makan di tempat)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Bungkus (Take Away)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Online: GoFood • Grab • Shopee</span>
                </div>
              </div>

            </div>

            {/* Direction Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-white font-bold text-xs sm:text-sm border border-white/15 hover:border-red-500/50 flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Navigation className="w-4 h-4 text-rose-400" />
                <span>Google Maps</span>
              </a>

              <a
                href={RESTAURANT_INFO.shopeefoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-orange-500/15 hover:bg-orange-500/25 text-orange-400 font-bold text-xs sm:text-sm border border-orange-500/30 flex items-center justify-center gap-1.5 transition-all"
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
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
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
