import React, { useState, useEffect } from 'react';
import { ShoppingBag, MapPin, Menu, X, ExternalLink } from 'lucide-react';
import Instagram from './InstagramIcon';
import TaichanLogo from './TaichanLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const wibTime = new Date(utc + (3600000 * 7));
      const hours = wibTime.getHours();
      setIsOpenNow(hours >= 18 || hours < 2);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "Menu & Harga", href: "#menu" },
    { label: "Level Pedas", href: "#spicy-meter" },
    { label: "Keunggulan", href: "#why-us" },
    { label: "Instagram", href: "#instagram" },
    { label: "Lokasi Kedai", href: "#lokasi" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07080d]/95 backdrop-blur-xl border-b border-[#ff1a75]/20 shadow-[0_4px_30px_rgba(0,0,0,0.85)] py-2.5' 
        : 'bg-gradient-to-b from-[#07080d]/95 to-transparent py-3.5'
    }`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Brand in Single Line */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
            <TaichanLogo size="sm" className="sm:w-11 sm:h-11" />
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="font-display font-black text-lg sm:text-xl lg:text-2xl text-white tracking-tight">
                <span className="text-neonCyan">56</span> <span className="text-neonPink">TAICHAN</span> <span className="hidden sm:inline">DJOEANDA</span>
              </span>
              <span className="hidden md:inline-flex text-[9px] font-bold px-2 py-0.5 rounded-full bg-neonPink/15 text-neonPink border border-neonPink/30 tracking-wider uppercase">
                Margonda
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Only on large screens) */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md whitespace-nowrap flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons (Streamlined & Anti-Overflow) */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            
            {/* Live Status Pill (Responsive) */}
            <div className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-md whitespace-nowrap ${
              isOpenNow 
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
              <span>{isOpenNow ? 'Buka (18:00 - 02:00)' : 'Buka Sore 18:00'}</span>
            </div>

            {/* ShopeeFood Direct Pill (Shown only on extra wide screens) */}
            <a
              href={RESTAURANT_INFO.shopeefoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden 2xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/30 text-orange-400 text-xs font-bold transition-all whitespace-nowrap"
            >
              <span>ShopeeFood</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Cart Trigger Button (Essential Primary CTA) */}
            <button
              onClick={onOpenCart}
              className="relative px-3 sm:px-3.5 py-2 rounded-xl bg-charcoal-800 border border-white/15 hover:border-neonPink/50 hover:bg-charcoal-700 transition-all text-slate-200 hover:text-white flex items-center gap-1.5 sm:gap-2 whitespace-nowrap flex-shrink-0"
              title="Keranjang Pesanan"
            >
              <ShoppingBag className="w-4 h-4 text-neonPink flex-shrink-0" />
              <span className="text-xs font-bold">Pesanan</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-neonPink text-white font-black text-[11px] flex items-center justify-center shadow-[0_0_10px_rgba(255,26,117,0.8)] flex-shrink-0">
                  {cartCount}
                </span>
              )}
            </button>

            {/* IG Official Profile Icon Button (Compact on tablet/laptop, expanded on 2xl) */}
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 border border-pink-500/30 text-pink-300 text-xs font-bold transition-all whitespace-nowrap flex-shrink-0"
              title="Instagram @taichan56djoeanda"
            >
              <Instagram className="w-4 h-4 text-neonPink" />
              <span className="hidden 2xl:inline">@taichan56djoeanda</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-charcoal-800 border border-white/10 text-slate-300 hover:text-white flex-shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 p-4 rounded-2xl bg-charcoal-900/98 border border-white/10 backdrop-blur-2xl space-y-2 animate-in fade-in slide-in-from-top duration-200 shadow-2xl">
            <div className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between mb-2 ${
              isOpenNow 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
            }`}>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
                <span>{isOpenNow ? 'Buka Sekarang (18:00 - 02:00 WIB)' : 'Buka Jam 18:00 - 02:00 WIB'}</span>
              </div>
              <span className="text-[10px] text-slate-400">Margonda Depok</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-pink-500/30 text-pink-200 text-xs font-bold"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href={RESTAURANT_INFO.shopeefoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-bold"
              >
                <span>ShopeeFood</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
