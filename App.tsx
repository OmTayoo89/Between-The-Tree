
import React, { useState, useEffect } from 'react';
import { CONTENT, LOGO_URL, COVER_URL } from './constants';
import SplashScreen from './components/SplashScreen';
import Section from './components/Section';
import Footer from './components/Footer';
import PhilosophyCard from './components/PhilosophyCard';
import ContactBox from './components/ContactBox';
import RegistrationForm from './components/RegistrationForm';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'about' | 'vision' | 'philosophy' | 'join'>('about');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-[#fcfdfa] flex flex-col items-center pb-64">
      {/* Hero Header */}
      <header className="relative w-full h-[50vh] md:h-[55vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#1b2e15]">
          <img 
            src={COVER_URL} 
            alt="Nature Background" 
            className="w-full h-full object-cover opacity-60 scale-110 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b2e15] via-transparent to-black/20"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          {/* Logo Container */}
          <div className="relative mb-6">
            <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative bg-white flex items-center justify-center p-4 md:p-5 rounded-full shadow-2xl border-4 border-[#76a543] animate-float">
              {!imgError ? (
                <img 
                  src={LOGO_URL} 
                  alt="Between The Tree Logo" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain block"
                  loading="eager"
                  onError={() => {
                    console.error("Hero Logo failed to load:", LOGO_URL);
                    setImgError(true);
                  }}
                />
              ) : (
                <div className="w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center text-[#2d4d22] text-center">
                  <span className="font-black text-2xl">BTT</span>
                </div>
              )}
            </div>
          </div>
          
          <h1 className="text-white text-2xl md:text-5xl font-black tracking-widest mb-2 heading-font drop-shadow-2xl uppercase">
            Between The Tree
          </h1>
          <div className="flex items-center gap-4">
             <div className="h-[2px] w-6 md:w-10 bg-[#bcc447]"></div>
             <p className="text-[#bcc447] text-[10px] md:text-lg font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">
               {CONTENT.SLOGAN_LOGO}
             </p>
             <div className="h-[2px] w-6 md:w-10 bg-[#bcc447]"></div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <nav className="w-full sticky top-0 bg-white shadow-md z-30 flex border-b border-[#e1ebdc] overflow-x-auto no-scrollbar">
        {(['about', 'vision', 'philosophy', 'join'] as const).map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-w-[120px] py-5 text-[10px] md:text-xs font-black transition-all duration-300 relative uppercase tracking-widest
              ${activeTab === tab ? 'text-[#2d4d22]' : 'text-neutral-400'}`}
          >
            {tab === 'about' ? 'Tentang Kami' : 
             tab === 'vision' ? 'Visi & Misi' : 
             tab === 'philosophy' ? 'Filosofi Logo' : 'Join with us'}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#76a543]"></div>
            )}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className="w-full max-w-4xl px-6 py-12">
        {activeTab === 'about' && (
          <div className="animate-fade-in-up">
            <Section title="Our Purpose">
              <div className="space-y-6">
                {CONTENT.ABOUT_US.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-neutral-700 leading-relaxed text-lg text-justify font-medium">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Section>
            
            <Section title="Hubungi Kami">
              <ContactBox />
            </Section>
          </div>
        )}

        {activeTab === 'vision' && (
          <div className="animate-fade-in-up space-y-16">
            <Section title="Visi Organisasi">
              <div className="space-y-6">
                {CONTENT.VISI.map((item, idx) => (
                  <div key={idx} className="flex gap-5 p-6 rounded-3xl bg-white border border-[#e1ebdc] shadow-sm hover:border-[#76a543] transition-colors">
                    <span className="text-3xl font-black text-[#76a543]/20 shrink-0">{idx + 1}</span>
                    <p className="text-neutral-800 font-semibold leading-relaxed text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Misi Kami">
              <div className="grid grid-cols-1 gap-6">
                {CONTENT.MISI.map((item, idx) => {
                  const [title, ...desc] = item.split(':');
                  return (
                    <div key={idx} className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-[#e1ebdc]">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-2 h-8 bg-[#bcc447] rounded-full"></div>
                        <h4 className="font-black text-[#2d4d22] text-lg md:text-xl">{title}</h4>
                      </div>
                      <p className="text-neutral-600 text-base md:text-lg leading-relaxed">{desc.join(':').trim()}</p>
                    </div>
                  );
                })}
              </div>
            </Section>
          </div>
        )}

        {activeTab === 'philosophy' && (
          <div className="animate-fade-in-up">
            <Section title="Filosofi Logo">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {CONTENT.PHILOSOPHY.map((item, idx) => (
                  <PhilosophyCard key={idx} label={item.item} description={item.desc} index={idx} />
                ))}
              </div>
            </Section>
          </div>
        )}

        {activeTab === 'join' && (
          <div className="animate-fade-in-up">
            <Section title="Join with us">
              <p className="text-neutral-600 mb-8 leading-relaxed font-medium text-justify">
                Kami mencari segala talenta yang align dengan purpose kami. Silakan isi formulir di bawah ini untuk menjadi bagian dari perjalanan kami menuju Indonesia Emas.
              </p>
              <RegistrationForm />
            </Section>
          </div>
        )}
      </main>

      <Footer slogan={CONTENT.SLOGAN_MAIN} />

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes subtle-zoom {
          from { transform: scale(1.1); }
          to { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 25s infinite alternate linear;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
