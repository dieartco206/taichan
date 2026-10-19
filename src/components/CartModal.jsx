import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function CartModal({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onClearCart }) {
  const [orderType, setOrderType] = useState('takeaway'); // takeaway, dinein, delivery
  const [sambalOption, setSambalOption] = useState('pisah'); // pisah, campur
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
  };

  const handleSendToWhatsApp = () => {
    if (cartItems.length === 0) return;

    // Build WhatsApp message format
    let message = `*HALO TAICHAN 56 DJOEANDA MARGONDA* 🍢🔥\n`;
    message += `Saya mau pesan sate taichan dengan detail berikut:\n\n`;
    message += `👤 *Nama:* ${customerName.trim() || 'Pelanggan Margonda'}\n`;
    message += `📋 *Tipe Pesanan:* ${orderType === 'dinein' ? 'Dine-In (Makan di Tempat)' : orderType === 'delivery' ? 'Delivery / Antar' : 'Take Away (Bungkus)'}\n`;
    message += `🌶️ *Sambal:* ${sambalOption === 'pisah' ? 'Dipisah (Rekomendasi)' : 'Dicampur Langsung'}\n`;

    if (orderType === 'delivery' && customerAddress.trim()) {
      message += `📍 *Alamat Pengiriman:* ${customerAddress.trim()}\n`;
    }

    message += `\n*DAFTAR PESANAN:*\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.portion}) x ${item.qty} = ${formatPrice(item.price * item.qty)}\n`;
    });

    message += `\n💰 *TOTAL ESTIMASI:* ${formatPrice(totalAmount)}\n`;

    if (specialNotes.trim()) {
      message += `📝 *Catatan Khusus:* ${specialNotes.trim()}\n`;
    }

    message += `\nMohon konfirmasi ketersediaan & totalnya ya. Terima kasih! 🙏`;

    // Confetti effect
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-lg max-h-[90vh] bg-charcoal-900 border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-charcoal-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-neonPink/20 text-neonPink flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white whitespace-nowrap">Keranjang Pesanan Taichan 56</h3>
              <span className="text-[11px] text-slate-400 whitespace-nowrap">{totalQty} item dipilih</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1">
          
          {/* Cart Empty State */}
          {cartItems.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-500">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-base text-white">Keranjangmu Masih Kosong</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Yuk pilih Sate Taichan favoritmu di daftar menu dan tambahkan ke keranjang.
              </p>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-sm text-white truncate">{item.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                        <span>{item.portion}</span>
                        <span>•</span>
                        <span className="text-flame-400 font-semibold">{formatPrice(item.price)}</span>
                      </div>
                    </div>

                    {/* Qty controls */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-charcoal-950 border border-white/10 rounded-xl overflow-hidden">
                        <button
                          onClick={() => onUpdateQty(item.id, item.qty - 1)}
                          className="p-1.5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-white min-w-[24px] text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, item.qty + 1)}
                          className="p-1.5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-slate-500 hover:text-chili-500 transition-colors"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Options */}
              <div className="pt-3 border-t border-white/10 space-y-4">
                
                {/* Tipe Pesanan */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Tipe Pesanan
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'takeaway', label: 'Take Away (Bungkus)' },
                      { id: 'dinein', label: 'Dine-In (Makan di Tempat)' },
                      { id: 'delivery', label: 'Delivery (Antar)' }
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setOrderType(type.id)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                          orderType === type.id 
                            ? 'bg-flame-500 text-white border-flame-400 shadow-md' 
                            : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pilihan Sambal */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Pilihan Sambal & Jeruk Nipis
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSambalOption('pisah')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        sambalOption === 'pisah' 
                          ? 'bg-flame-500/20 text-flame-300 border-flame-500/50' 
                          : 'bg-white/5 border-white/10 text-slate-400'
                      }`}
                    >
                      Sambal Dipisah (Rekomendasi)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSambalOption('campur')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        sambalOption === 'campur' 
                          ? 'bg-flame-500/20 text-flame-300 border-flame-500/50' 
                          : 'bg-white/5 border-white/10 text-slate-400'
                      }`}
                    >
                      Langsung Disiram
                    </button>
                  </div>
                </div>

                {/* Nama & Alamat Input */}
                <div className="space-y-2.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Nama Pemesan</label>
                    <input
                      type="text"
                      placeholder="Contoh: Kak Dika (Margonda)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-flame-500"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Alamat Pengiriman</label>
                      <input
                        type="text"
                        placeholder="Contoh: Kost Margonda Residence / Jl. Margonda No. 12"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-flame-500"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Catatan Tambahan (Opsional)</label>
                    <input
                      type="text"
                      placeholder="Contoh: Jeruk nipis lebihin, bakar kering, sambal uleg ekstra pedas"
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-flame-500"
                    />
                  </div>
                </div>

              </div>
            </>
          )}

        </div>

        {/* Modal Footer: Total & WA Button */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-charcoal-950 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Total Estimasi</span>
                <span className="font-display font-extrabold text-xl text-white">
                  {formatPrice(totalAmount)}
                </span>
              </div>
              
              <button
                onClick={onClearCart}
                className="text-xs text-slate-500 hover:text-slate-300 underline"
              >
                Kosongkan
              </button>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.01]"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Format Order ke WhatsApp</span>
            </button>
            
            <p className="text-[11px] text-center text-slate-500">
              Pesan langsung terkirim ke WhatsApp resmi Taichan 56 Margonda.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
