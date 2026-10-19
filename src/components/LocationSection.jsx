import React from 'react';
import { MapPin, Clock, Navigation, ExternalLink, Phone, Bike, Sparkles, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-24 relative overflow-hidden bg-charcoal-950">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-flame-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-flame-500 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kunjungi Kedai Kami</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Lokasi & Jam Buka <span className="text-gradient-flame">Margonda</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Strategis di jalan utama Margonda Raya, persis di samping KFC Margonda. Parkir motor dan mobil mudah & leluasa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Detail Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 p-7 sm:p-8 rounded-3xl glass-panel border border-white/10">
            
            <div className="space-y-6">
              
              {/* Address card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-flame-500/20 text-flame-400 border border-flame-500/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">Alamat Lengkap</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {RESTAURANT_INFO.fullAddress}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-flame-400 bg-flame-500/10 px-2.5 py-1 rounded-md border border-flame-500/20">
                    📍 Patokan: Tepat di samping KFC Margonda
                  </span>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 border border-gold-500/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">Jam Operasional</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Setiap Hari: <strong className="text-white font-semibold">{RESTAURANT_INFO.operationalHours}</strong>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Senin s/d Minggu tanpa libur (Kuliner Malam)
                  </p>
                </div>
              </div>

              {/* Features list */}
              <div className="pt-2 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Dine-In (Makan di tempat suasana malam seru)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Take Away (Bungkus rapi aman sambal dipisah)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Order Online via GoFood, GrabFood & WhatsApp</span>
                </div>
              </div>

            </div>

            {/* Direction Action Button */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-2xl bg-charcoal-800 hover:bg-charcoal-700 text-white font-bold text-xs sm:text-sm border border-white/15 hover:border-flame-500/50 flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Navigation className="w-4 h-4 text-flame-500" />
                <span>Buka Rute di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl relative min-h-[360px]">
            <iframe 
              src={RESTAURANT_INFO.mapsEmbedQuery}
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '380px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Sate Taichan 56 Djoeanda Margonda"
              className="grayscale-[20%] contrast-[110%] w-full h-full"
            />
            
            {/* Map overlay card */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto bg-charcoal-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-flame-500 animate-ping" />
                <span className="text-xs font-bold text-white">Taichan 56 Margonda</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Samping KFC Margonda Raya Depok</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
