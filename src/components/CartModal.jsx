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

    // Build WhatsApp message format (clean markdown, zero encoding artifacts)
    let message = `*ORDER SATE TAICHAN 56 MARGONDA*\n\n`;
    message += `*Nama:* ${customerName.trim() || 'Pelanggan'}\n`;
    message += `*Tipe Pesanan:* ${orderType === 'dinein' ? 'Dine In' : orderType === 'delivery' ? 'Delivery' : 'Bungkus'}\n`;
    message += `*Pilihan Sambal:* ${sambalOption === 'pisah' ? 'Dipisah' : 'Dicampur'}\n`;

    if (orderType === 'delivery' && customerAddress.trim()) {
      message += `*Alamat:* ${customerAddress.trim()}\n`;
    }

    message += `\n*DAFTAR PESANAN:*\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.portion}) x${item.qty} = ${formatPrice(item.price * item.qty)}\n`;
    });

    message += `\n*TOTAL:* ${formatPrice(totalAmount)}\n`;

    if (specialNotes.trim()) {
      message += `*Catatan:* ${specialNotes.trim()}\n`;
    }

    message += `\nMohon konfirmasi pesanan ya. Terima kasih!`;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-lg max-h-[90vh] bg-white border border-stone-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-stone-900">Keranjang</h3>
              <span className="text-[11px] text-stone-500 font-medium">{totalQty} item</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          
          {/* Cart Empty State */}
          {cartItems.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mx-auto text-stone-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-base text-stone-900">Keranjang Kosong</h4>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Pilih menu sate lezat untuk mulai pesan.
              </p>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-2.5">
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/90 flex items-center justify-between gap-3 hover:bg-stone-50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-xs sm:text-sm text-stone-900 leading-snug line-clamp-2">{item.name}</h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mt-0.5">
                        <span>{item.portion}</span>
                        <span>•</span>
                        <span className="text-red-600 font-bold">{formatPrice(item.price)}</span>
                      </div>
                    </div>

                    {/* Qty controls */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="flex items-center bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
                        <button
                          onClick={() => onUpdateQty(item.id, item.qty - 1)}
                          className="p-1.5 hover:bg-stone-100 text-stone-600 hover:text-stone-950 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-stone-900 min-w-[20px] text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, item.qty + 1)}
                          className="p-1.5 hover:bg-stone-100 text-stone-600 hover:text-stone-950 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-stone-400 hover:text-red-600 transition-colors"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Options */}
              <div className="pt-2 space-y-3.5">
                
                {/* Tipe Pesanan */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Tipe Pesanan
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'takeaway', label: 'Bungkus' },
                      { id: 'dinein', label: 'Dine In' },
                      { id: 'delivery', label: 'Delivery' }
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setOrderType(type.id)}
                        className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                          orderType === type.id 
                            ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white border-red-500 shadow-sm font-bold' 
                            : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pilihan Sambal */}
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Sambal
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSambalOption('pisah')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        sambalOption === 'pisah' 
                          ? 'bg-red-50 text-red-600 border-red-300 font-bold' 
                          : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      Dipisah
                    </button>
                    <button
                      type="button"
                      onClick={() => setSambalOption('campur')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        sambalOption === 'campur' 
                          ? 'bg-red-50 text-red-600 border-red-300 font-bold' 
                          : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      Dicampur
                    </button>
                  </div>
                </div>

                {/* Nama & Alamat Input */}
                <div className="space-y-2.5">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Nama</label>
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">Alamat</label>
                      <input
                        type="text"
                        placeholder="Alamat lengkap / patokan"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-500 transition-all"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Catatan (Opsional)</label>
                    <input
                      type="text"
                      placeholder="Misal: bakar agak garing, jeruk nipis lebih"
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>

              </div>
            </>
          )}

        </div>

        {/* Modal Footer: Total & WA Button */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-stone-100 bg-stone-50/90 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-500 uppercase tracking-wider block font-semibold">Total</span>
                <span className="font-display font-extrabold text-xl text-stone-900">
                  {formatPrice(totalAmount)}
                </span>
              </div>
              
              <button
                onClick={onClearCart}
                className="text-xs text-stone-500 hover:text-red-600 underline"
              >
                Kosongkan
              </button>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.01]"
            >
              <Send className="w-4 h-4" />
              <span>Pesan via WhatsApp</span>
            </button>
            
            <p className="text-[11px] text-center text-stone-500">
              Otomatis terhubung ke WhatsApp resmi Taichan 56
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
