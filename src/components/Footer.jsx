import React from 'react';
import { Flame, MapPin, Clock } from 'lucide-react';
import Instagram from './InstagramIcon';
import TaichanLogo from './TaichanLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  return (
    <footer className="bg-stone-900 pt-16 pb-12 text-stone-400 text-xs sm:text-sm border-t border-stone-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <TaichanLogo size="md" />
              <div>
                <span className="font-display font-black text-xl tracking-tight text-white block whitespace-nowrap">
                  <span className="text-amber-400">56</span> <span className="text-red-500">TAICHAN</span> DJOEANDA
                </span>
                <span className="text-xs text-amber-300 font-semibold whitespace-nowrap">
                  {RESTAURANT_INFO.officialTitle} • {RESTAURANT_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-stone-300 text-xs leading-relaxed max-w-md">
              Sate taichan daging ayam tebal juicy dibakar gurih, disajikan dengan sambal rawit uleg asli, perasan jeruk nipis segar, dan kelezatan nasi daun jeruk legendaris.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-stone-800 border border-stone-700 hover:border-red-500 hover:text-red-400 flex items-center justify-center transition-colors text-stone-300"
                title="Instagram Resmi"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-stone-800 border border-stone-700 hover:border-amber-400 hover:text-amber-400 flex items-center justify-center transition-colors text-stone-300"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Nav Quick Links (Single Lines) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider whitespace-nowrap">
              Navigasi Halaman
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-300">
              <li>
                <a href="#menu" className="hover:text-red-400 transition-colors">Menu Sate & Paket</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-red-400 transition-colors">Kualitas & Keunggulan</a>
              </li>
              <li>
                <a href="#cinematic-sate" className="hover:text-red-400 transition-colors">Sensasi Sate Meluncur</a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-red-400 transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-red-400 transition-colors">Lokasi Margonda</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Outlet & Hours (Single Lines) */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider whitespace-nowrap">
              Kedai Margonda Depok
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{RESTAURANT_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Buka Setiap Hari: 18:00 - 02:00 WIB</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Instagram className="w-4 h-4 text-red-400 flex-shrink-0" />
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

        {/* Bottom copyright in Single Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 whitespace-nowrap">
          <div>
            © {new Date().getFullYear()} Sate Taichan 56 Djoeanda. Seluruh hak cipta dilindungi.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Dibuat dengan</span>
            <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>untuk pecinta kuliner malam sejati.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
