import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
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
    { label: "Menu", href: "#menu" },
    { label: "Level Pedas", href: "#spicy-meter" },
    { label: "Keunggulan", href: "#why-us" },
    { label: "Instagram", href: "#instagram" },
    { label: "Lokasi", href: "#lokasi" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07080d]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.9)] py-3' 
        : 'bg-gradient-to-b from-[#07080d]/95 to-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Clean Brand Logo (Strict Single-Line on Mobile & Desktop) */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <TaichanLogo size="sm" className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
            <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap flex-shrink-0">
              <span className="font-display font-black text-lg sm:text-xl text-white tracking-tight whitespace-nowrap">
                <span className="text-neonCyan">56</span> <span className="text-neonPink">TAICHAN</span>
              </span>
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-300 font-medium whitespace-nowrap flex-shrink-0">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                <span className="whitespace-nowrap">{isOpenNow ? 'Buka' : '18.00-02.00'}</span>
              </span>
            </div>
          </a>

          {/* Center: Clean & Airy Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-slate-300 hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions (Mobile Optimized) */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            
            {/* Instagram Icon (Desktop only, available in mobile drawer) */}
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-xl text-slate-300 hover:text-neonPink hover:bg-white/5 transition-colors"
              title="Instagram @taichan56djoeanda"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* Primary Cart CTA */}
            <button
              onClick={onOpenCart}
              className="px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-neonPink to-rose-600 hover:from-neonPink/90 hover:to-rose-500 text-white font-bold text-xs flex items-center gap-1.5 sm:gap-2 shadow-[0_0_15px_rgba(255,26,117,0.35)] hover:shadow-[0_0_22px_rgba(255,26,117,0.55)] transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden xs:inline">Pesanan</span>
              {cartCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-white text-[10px] font-black">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-charcoal-800 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-charcoal-900/98 border border-white/10 backdrop-blur-2xl space-y-2 animate-in fade-in slide-in-from-top duration-200 shadow-2xl">
            <div className="p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between mb-2 bg-white/5 border border-white/10">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
                <span className="text-white">{isOpenNow ? 'Buka Sekarang (18:00 - 02:00 WIB)' : 'Buka Jam 18:00 - 02:00 WIB'}</span>
              </div>
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

            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-pink-300 text-xs font-bold"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href={RESTAURANT_INFO.shopeefoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-bold"
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
