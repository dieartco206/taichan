import React from 'react';
import { MapPin, Clock, Navigation, ExternalLink, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { DoodleSate, DoodleLime, DoodleCobek, DoodleChili } from './FoodDoodles';

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-16 sm:py-20 relative overflow-hidden bg-[#f4efe6] border-t border-stone-200/80">
      
      {/* Warm Ambient Radiance with Food Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Organic Fluid Pods */}
        <div className="absolute -top-10 -left-16 w-[540px] h-[540px] bg-gradient-to-tr from-rose-200/35 via-orange-100/25 to-transparent rounded-[60%_40%_50%_50%] blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-[520px] h-[520px] bg-gradient-to-bl from-amber-200/35 via-orange-200/25 to-transparent rounded-[45%_55%_65%_35%] blur-3xl" />

        {/* Food Doodles */}
        {/* Top-Right: Sate Skewer */}
        <div className="absolute top-12 right-12 select-none opacity-35">
          <DoodleSate className="w-24 h-24 text-amber-700/30" rotate={-35} />
        </div>

        {/* Mid-Left: Cobek Ulek Sambal */}
        <div className="absolute top-1/2 -left-2 sm:left-6 select-none opacity-35">
          <DoodleCobek className="w-24 h-24 text-stone-600/30" rotate={15} />
        </div>

        {/* Bottom-Left: Lime Slice */}
        <div className="absolute bottom-10 left-12 select-none opacity-40 hidden sm:block">
          <DoodleLime className="w-20 h-20 text-emerald-700/30" rotate={25} />
        </div>

        {/* Bottom-Right: Chili Pepper */}
        <div className="absolute bottom-12 right-16 select-none opacity-35 hidden sm:block">
          <DoodleChili className="w-20 h-20 text-red-600/35" rotate={-20} />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header (Strict Single-Line on Desktop) */}
        <div className="text-center space-y-1.5 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-2xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kunjungi Kedai Taichan 56</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-stone-900 whitespace-normal md:whitespace-nowrap">
            Lokasi Kedai & Jam Buka <span className="text-gradient-flame">Margonda Depok</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base whitespace-normal lg:whitespace-nowrap">
            Strategis di jalur utama Jl. Margonda Raya, persis samping KFC Margonda. Parkir luas untuk motor dan mobil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Detail Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5 p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-md">
            
            <div className="space-y-5">
              
              {/* Address card */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-stone-900 whitespace-nowrap">Alamat Lengkap Kedai</h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    {RESTAURANT_INFO.fullAddress}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded-md border border-red-200 whitespace-nowrap">
                    📍 Patokan: Tepat di samping KFC Margonda
                  </span>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-stone-900">Jam Buka</h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Setiap Hari: <strong className="text-stone-900 font-bold">{RESTAURANT_INFO.operationalHours}</strong>
                  </p>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Dine in & Take away di tempat
                  </p>
                </div>
              </div>

              {/* Features list */}
              <div className="pt-2 space-y-2 text-xs text-stone-700 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Dine-In (Makan di tempat)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Bungkus (Take Away)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
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
                className="flex-1 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                <Navigation className="w-4 h-4 text-red-400" />
                <span>Google Maps</span>
              </a>

              <a
                href={RESTAURANT_INFO.shopeefoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold text-xs sm:text-sm border border-orange-200 flex items-center justify-center gap-1.5 transition-all"
              >
                <span>ShopeeFood</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-md relative min-h-[350px]">
            <iframe 
              src={RESTAURANT_INFO.mapsEmbedQuery}
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '360px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Sate Taichan 56 Djoeanda Margonda"
              className="w-full h-full"
            />
            
            {/* Map overlay card */}
            <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-stone-200 shadow-md whitespace-nowrap">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                <span className="text-xs font-bold text-stone-900">Taichan 56 Margonda</span>
              </div>
              <p className="text-[10px] text-stone-500 mt-0.5">Samping KFC Margonda Raya Depok</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
