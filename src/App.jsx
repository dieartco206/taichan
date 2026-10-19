import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import WhyTaichanSection from './components/WhyTaichanSection';
import InstagramFeedSection from './components/InstagramFeedSection';
import TestimonialSection from './components/TestimonialSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import TaichanLogo from './components/TaichanLogo';
import { ShoppingBag, Flame, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  const [cartItems, setCartItems] = useState([
    // Pre-populate with signature mix for instant delight
    {
      id: "taichan-mix",
      name: "Sate Taichan Mix (Dada + Kulit)",
      portion: "10 Tusuk",
      price: 35000,
      qty: 1
    },
    {
      id: "nasi-daun-jeruk",
      name: "Nasi Gurih Daun Jeruk",
      portion: "1 Porsi",
      price: 10000,
      qty: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart Handlers
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prevItems, { ...item, qty: 1 }];
    });
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderDirect = () => {
    setIsCartOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="min-h-screen bg-[#0c101d] text-slate-100 flex flex-col selection:bg-neonPink selection:text-white relative overflow-x-hidden">
      {/* Global Ambient Charcoal Dot Texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-0" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Global Ambient Radiant Glow Orbs */}
      <div className="fixed top-0 left-1/4 w-[700px] h-[700px] bg-neonPink/[0.08] rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-10 w-[600px] h-[600px] bg-neonCyan/[0.07] rounded-full blur-[170px] pointer-events-none z-0" />
      <div className="fixed top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/[0.05] rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Top Navbar */}
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-1 pb-24 sm:pb-0 relative z-10">
        {/* Hero Section */}
        <Hero 
          onExploreMenu={handleExploreMenu} 
          onOrderDirect={handleOrderDirect} 
        />

        {/* Menu & Pricing Catalog */}
        <MenuSection 
          onAddToCart={handleAddToCart} 
          cartItems={cartItems} 
        />

        {/* Quality Features & Milestones */}
        <WhyTaichanSection />

        {/* Instagram Profile & Feed Showcase (@taichan56djoeanda) */}
        <InstagramFeedSection />

        {/* Customer Testimonials from Margonda */}
        <TestimonialSection />

        {/* Physical Location, Hours & Map */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart & WhatsApp Checkout Modal */}
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Sticky Mobile Order Bar */}
      <div className="fixed bottom-4 left-4 right-4 sm:hidden z-40">
        <div className="p-3 rounded-2xl bg-charcoal-900/95 border border-flame-500/40 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <TaichanLogo size="sm" />
            <div>
              <span className="text-xs font-bold text-white block">56 Taichan Djoeanda</span>
              <span className="text-[10px] text-neonCyan font-medium">Buka 18:00 - 02:00 WIB</span>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-neonPink to-rose-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-neonPink/30"
          >
            <div className="relative flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
              {totalCartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-3.5 min-w-[14px] px-0.5 items-center justify-center rounded-full bg-white text-charcoal-950 text-[9px] font-black shadow-sm leading-none">
                  {totalCartCount}
                </span>
              )}
            </div>
            <span>Pesan</span>
          </button>
        </div>
      </div>
    </div>
  );
}
