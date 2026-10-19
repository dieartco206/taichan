import React, { useState, useEffect } from 'react';
import { Flame, ShoppingBag, MapPin, Clock, Menu, X } from 'lucide-react';
import Instagram from './InstagramIcon';
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

  // Cek jam operasional (18:00 - 02:00 WIB)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      // Konversi ke WIB (UTC+7)
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const wibTime = new Date(utc + (3600000 * 7));
      const hours = wibTime.getHours();

      // Buka antara jam 18:00 sampai 02:00 subuh
      const open = (hours >= 18 || hours < 2);
      setIsOpenNow(open);
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
    { label: "Lokasi Margonda", href: "#lokasi" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-charcoal-950/85 backdrop-blur-md border-b border-white/10 shadow-2xl py-3' 
        : 'bg-gradient-to-b from-charcoal-950/90 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-flame-500 to-chili-600 flex items-center justify-center shadow-lg shadow-flame-500/30 group-hover:scale-105 transition-transform duration-300">
              <Flame className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-flame-500 transition-colors">
                  TAICHAN 56
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-flame-500/20 text-flame-500 border border-flame-500/30">
                  DJOEANDA
                </span>
              </div>
              <div className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                <MapPin className="w-3 h-3 text-chili-500" />
                <span>Margonda Raya, Depok</span>
              </div>
            </div>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Live status & Cart / Order */}
          <div className="flex items-center gap-3">
            {/* Live Status Pill */}
            <div className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-md ${
              isOpenNow 
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
              <span>{isOpenNow ? 'BUKA SEKARANG (18:00 - 02:00)' : 'BUKA SORE INI 18:00 WIB'}</span>
            </div>

            {/* Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-charcoal-800 border border-white/10 hover:border-flame-500/50 hover:bg-charcoal-700 transition-all text-slate-200 hover:text-white"
              title="Keranjang Pesanan"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-flame-500 text-white font-bold text-[11px] flex items-center justify-center animate-bounce shadow-md shadow-flame-500/50">
                  {cartCount}
                </span>
              )}
            </button>

            {/* IG Official Profile Link */}
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 border border-pink-500/30 text-pink-300 text-xs font-semibold transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>@taichan56djoeanda</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-charcoal-800 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-charcoal-900/95 border border-white/10 backdrop-blur-xl space-y-2 animate-in fade-in slide-in-from-top duration-200">
            <div className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 mb-3 ${
              isOpenNow 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
              <span>{isOpenNow ? 'BUKA SEKARANG (18:00 - 02:00 WIB)' : 'BUKA PUKUL 18:00 - 02:00 WIB'}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-pink-500/30 text-pink-200 text-xs font-bold"
              >
                <Instagram className="w-4 h-4" />
                Follow @taichan56djoeanda
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
