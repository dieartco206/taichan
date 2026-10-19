import React from 'react';
import { Flame, MapPin, Clock, Phone, Heart } from 'lucide-react';
import Instagram from './InstagramIcon';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-flame-500 to-chili-600 flex items-center justify-center shadow-lg shadow-flame-500/30 text-white">
                <Flame className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                  TAICHAN 56 DJOEANDA
                </span>
                <span className="text-xs text-flame-400 font-semibold">
                  Kuliner Malam Legendaris Margonda Depok
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Sate taichan daging ayam tebal & juicy dibakar bumbu gurih meresap, disajikan bersama sambal uleg cabai rawit merah segar, perasan jeruk nipis asli, dan kelezatan nasi daun jeruk.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500 hover:text-pink-400 flex items-center justify-center transition-colors text-slate-300"
                title="Instagram Resmi"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-flame-500 hover:text-flame-400 flex items-center justify-center transition-colors text-slate-300"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Nav Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-flame-400 transition-colors">Menu Sate & Paket Hemat</a>
              </li>
              <li>
                <a href="#spicy-meter" className="hover:text-flame-400 transition-colors">Level Pedas Rawit Merah</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-flame-400 transition-colors">Kualitas & Keunggulan</a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-flame-400 transition-colors">Feed Instagram @taichan56djoeanda</a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-flame-400 transition-colors">Lokasi Samping KFC Margonda</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Outlet & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Kedai Margonda Depok
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-chili-500 flex-shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Buka Setiap Hari: 18:00 - 02:00 WIB</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a 
                  href={RESTAURANT_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                >
                  @{RESTAURANT_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Sate Taichan 56 Djoeanda. Seluruh hak cipta dilindungi.
          </div>
          <div className="flex items-center gap-1">
            <span>Dibuat dengan</span>
            <Flame className="w-3.5 h-3.5 text-flame-500 fill-flame-500" />
            <span>untuk pecinta kuliner malam sejati.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
