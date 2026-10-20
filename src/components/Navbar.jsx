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
    { label: "Keunggulan", href: "#why-us" },
    { label: "Instagram", href: "#instagram" },
    { label: "Lokasi", href: "#lokasi" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-[0_4px_24px_rgba(28,25,23,0.06)] py-3' 
        : 'bg-[#fdfbf7]/80 backdrop-blur-md py-4 sm:py-5 border-b border-stone-200/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Clean Brand Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <TaichanLogo size="sm" className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
            <span className="font-display font-black text-lg sm:text-xl tracking-tight whitespace-nowrap text-stone-900">
              <span className="text-amber-500">56</span> <span className="text-red-600">TAICHAN</span>
            </span>
          </a>

          {/* Center: Clean & Airy Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold text-stone-600 hover:text-stone-950 transition-colors tracking-wide py-1 px-2.5 rounded-lg hover:bg-stone-100/70"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            
            {/* Instagram Icon */}
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-xl text-stone-600 hover:text-red-600 hover:bg-stone-100 transition-colors"
              title="Instagram @taichan56djoeanda"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* Primary Cart CTA with Floating Badge */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white flex items-center justify-center shadow-md shadow-red-600/30 hover:scale-105 active:scale-95 transition-all flex-shrink-0"
              title="Keranjang Pesanan"
              aria-label="Keranjang Pesanan"
            >
              <div className="relative flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2.5 -right-2.5 flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-stone-900 text-white text-[10px] font-black shadow-md border border-white leading-none">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 hover:text-stone-900"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white/98 border border-stone-200 backdrop-blur-2xl space-y-2 animate-in fade-in slide-in-from-top duration-200 shadow-xl">
            <div className="p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between mb-2 bg-stone-50 border border-stone-200">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'}`}></span>
                <span className="text-stone-800">{isOpenNow ? 'Buka Sekarang (18:00 - 02:00 WIB)' : 'Buka Jam 18:00 - 02:00 WIB'}</span>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-rose-600 text-xs font-bold"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href={RESTAURANT_INFO.shopeefoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold"
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
