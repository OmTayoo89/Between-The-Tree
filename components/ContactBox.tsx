
import React, { useState } from 'react';
import { ORG_EMAIL } from '../constants';

const ContactBox: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Kerja Sama: ${formData.name}`;
    const body = `Halo Between The Tree,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`;
    window.location.href = `mailto:${ORG_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-[#e1ebdc] relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#76a543]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
      
      <h4 className="text-2xl font-black text-[#2d4d22] mb-6 flex items-center gap-3">
        <span className="p-2 bg-[#76a543]/10 rounded-xl">🤝</span>
        Kerja Sama & Kolaborasi
      </h4>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            required
            type="text" 
            placeholder="Nama Lengkap" 
            className="w-full px-5 py-4 rounded-2xl border border-[#e1ebdc] focus:ring-2 focus:ring-[#76a543] focus:outline-none transition-all font-medium text-neutral-800"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            required
            type="email" 
            placeholder="Email Anda" 
            className="w-full px-5 py-4 rounded-2xl border border-[#e1ebdc] focus:ring-2 focus:ring-[#76a543] focus:outline-none transition-all font-medium text-neutral-800"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <textarea 
          required
          rows={4} 
          placeholder="Tulis pesan kerja sama Anda di sini..." 
          className="w-full px-5 py-4 rounded-2xl border border-[#e1ebdc] focus:ring-2 focus:ring-[#76a543] focus:outline-none transition-all font-medium text-neutral-800"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
        <button 
          type="submit" 
          className="w-full py-4 bg-[#2d4d22] text-white font-black rounded-2xl shadow-lg hover:bg-[#76a543] transition-all duration-300 uppercase tracking-widest text-sm transform hover:-translate-y-1"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default ContactBox;
