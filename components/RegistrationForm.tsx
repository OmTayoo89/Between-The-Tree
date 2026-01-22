
import React, { useState } from 'react';
import { ORG_EMAIL } from '../constants';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    education: '',
    email: '',
    whatsapp: '',
    cvName: '',
    reason: ''
  });

  const wordCount = formData.reason.trim() === '' ? 0 : formData.reason.trim().split(/\s+/).length;
  const isReasonValid = wordCount >= 150 && wordCount <= 500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isReasonValid) {
      alert('Alasan bergabung harus antara 150 - 500 kata.');
      return;
    }

    const subject = `Pendaftaran Anggota: ${formData.fullName}`;
    const body = `Formulir Pendaftaran Between The Tree\n
Nama Lengkap: ${formData.fullName}
Tanggal Lahir: ${formData.dob}
Pendidikan: ${formData.education}
Email: ${formData.email}
Nomor WA: ${formData.whatsapp}
Nama File CV: ${formData.cvName} (Pastikan melampirkan file CV asli di email ini)

Alasan Bergabung (${wordCount} kata):
${formData.reason}`;

    window.location.href = `mailto:${ORG_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-[#e1ebdc] space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label className="block text-xs font-black text-[#2d4d22] uppercase tracking-widest ml-1">Nama Lengkap</label>
          <input 
            required
            type="text" 
            className="w-full px-5 py-4 rounded-2xl border border-[#e1ebdc] focus:ring-2 focus:ring-[#76a543] focus:outline-none transition-all font-medium text-neutral-800"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>

        {/* DOB */}
        <div className="space-y-2">
          <label className="block text-xs font-black text-[#2d4d22] uppercase tracking-widest ml-1">Tanggal Lahir</label>
          <input 
            required
            type="date" 
            className="w-full px-5 py-4 rounded-2xl border border-[#e1ebdc] focus:ring-2 focus:ring-[#76a543] focus:outline-none transition-all font-medium text-neutral-800"
            value={formData.dob}
            onChange={(e) => setFormData({...formData, dob: e.target.value})}
          />
        </div>

        {/* Education */}
        <div className="space-y-2">
          <label className="block text-xs font-black text-[#2d4d22] uppercase tracking-widest ml-1">Pendidikan Terakhir</label>
          <select 
            required
            className="w-full px-5 py-4 rounded-2xl border border-[#e1ebdc] focus:ring-2 focus:ring-[#76a543] focus:outline-none transition-all font-medium text-neutral-800 bg-white"
            value={formData.education}
            onChange={(e) => setFormData({...formData, education: e.target.value})}
          >
            <option value="">Pilih Pendidikan</option>
            <option value="SMA">SMA</option>
            <option value="S1 (Saat ini)">S1 (Sedang Menempuh)</option>
            <option value="S1 (Lulus)">S1 (Sudah Lulus)</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-xs font-black text-[#2d4d22] uppercase tracking-widest ml-1">Email Aktif</label>
          <input 
            required
            type="email" 
            className="w-full px-5 py-4 rounded-2xl border border-[#e1ebdc] focus:ring-2 focus:ring-[#76a543] focus:outline-none transition-all font-medium text-neutral-800"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        {/* WA */}
        <div className="space-y-2">
          <label className="block text-xs font-black text-[#2d4d22] uppercase tracking-widest ml-1">Nomor WhatsApp</label>
          <input 
            required
            type="tel" 
            className="w-full px-5 py-4 rounded-2xl border border-[#e1ebdc] focus:ring-2 focus:ring-[#76a543] focus:outline-none transition-all font-medium text-neutral-800"
            value={formData.whatsapp}
            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
          />
        </div>

        {/* CV Upload Mock */}
        <div className="space-y-2">
          <label className="block text-xs font-black text-[#2d4d22] uppercase tracking-widest ml-1">Curriculum Vitae (CV)</label>
          <div className="relative">
            <input 
              required
              type="file" 
              className="hidden" 
              id="cv-upload"
              onChange={(e) => setFormData({...formData, cvName: e.target.files?.[0]?.name || ''})}
            />
            <label 
              htmlFor="cv-upload"
              className="flex items-center gap-3 w-full px-5 py-4 rounded-2xl border border-dashed border-[#76a543] bg-[#76a543]/5 hover:bg-[#76a543]/10 cursor-pointer transition-all font-medium text-neutral-600 overflow-hidden text-ellipsis whitespace-nowrap"
            >
              <span className="bg-[#76a543] text-white p-1 rounded-md text-[10px] shrink-0 font-bold">PILIH FILE</span>
              {formData.cvName || 'Upload File CV (PDF/JPG)'}
            </label>
          </div>
        </div>
      </div>

      {/* Reason */}
      <div className="space-y-2">
        <div className="flex justify-between items-end">
          <label className="block text-xs font-black text-[#2d4d22] uppercase tracking-widest ml-1">Alasan Bergabung</label>
          <span className={`text-[10px] font-bold ${isReasonValid ? 'text-green-600' : 'text-red-500'}`}>
            {wordCount} / 500 kata (Min 150)
          </span>
        </div>
        <textarea 
          required
          rows={10} 
          placeholder="Jelaskan alasan Anda ingin bergabung dengan Between The Tree..." 
          className="w-full px-6 py-5 rounded-[2rem] border border-[#e1ebdc] focus:ring-2 focus:ring-[#76a543] focus:outline-none transition-all font-medium text-neutral-800 text-justify"
          value={formData.reason}
          onChange={(e) => setFormData({...formData, reason: e.target.value})}
        />
      </div>

      <button 
        type="submit" 
        className={`w-full py-5 rounded-2xl font-black text-white shadow-2xl transition-all duration-500 uppercase tracking-[0.2em] text-sm
          ${isReasonValid ? 'bg-[#2d4d22] hover:bg-[#76a543] hover:scale-[1.02]' : 'bg-neutral-300 cursor-not-allowed'}`}
        disabled={!isReasonValid}
      >
        Kirim Pendaftaran
      </button>

      <p className="text-[10px] text-center text-neutral-400 italic">
        *Data akan secara otomatis diformat dan dikirimkan ke email resmi kami melalui aplikasi email Anda.
      </p>
    </form>
  );
};

export default RegistrationForm;
