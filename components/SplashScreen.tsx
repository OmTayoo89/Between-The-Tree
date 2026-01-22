
import React, { useState } from 'react';
import { LOGO_URL } from '../constants';

const SplashScreen: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="fixed inset-0 bg-[#1b2e15] flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border-[2px] border-white rounded-full animate-ping-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border-[1px] border-white/50 rounded-full animate-ping-slower"></div>
      </div>

      <div className="relative">
        {/* Glow behind logo */}
        <div className="absolute -inset-16 bg-[#76a543] rounded-full blur-[80px] opacity-30 animate-pulse"></div>
        
        {/* Central Logo */}
        <div className="relative bg-white flex items-center justify-center p-6 md:p-10 rounded-full shadow-[0_30px_70px_rgba(0,0,0,0.6)] animate-reveal scale-110 md:scale-125 border-4 border-[#76a543]">
          {!imgError ? (
            <img 
              src={LOGO_URL} 
              alt="Between The Tree Logo" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain block"
              onError={() => {
                console.error("Logo failed to load at:", LOGO_URL);
                setImgError(true);
              }}
            />
          ) : (
            <div className="w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center text-[#2d4d22] text-center">
              <span className="font-black text-4xl">BTT</span>
              <span className="text-[8px] font-bold opacity-50 uppercase">Logo Error</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-20 text-center px-6">
        <h2 className="text-white text-3xl md:text-4xl font-black tracking-[0.3em] mb-4 heading-font animate-slide-up uppercase drop-shadow-lg">
          Between The Tree
        </h2>
        
        <div className="flex justify-center items-center gap-3 animate-slide-up-delayed opacity-0">
           <div className="h-[1px] w-8 md:w-12 bg-[#bcc447]/40"></div>
           <p className="text-[#bcc447] text-[10px] md:text-sm font-black tracking-[0.4em] md:tracking-[0.6em] uppercase whitespace-nowrap">
             Connecting The Roots
           </p>
           <div className="h-[1px] w-8 md:w-12 bg-[#bcc447]/40"></div>
        </div>
      </div>

      <style>{`
        @keyframes reveal {
          0% { transform: scale(0.3) rotate(-10deg); opacity: 0; filter: blur(20px); }
          100% { transform: scale(1.1) rotate(0); opacity: 1; filter: blur(0); }
        }
        @media (min-width: 768px) {
          @keyframes reveal {
            0% { transform: scale(0.3) rotate(-10deg); opacity: 0; filter: blur(20px); }
            100% { transform: scale(1.25) rotate(0); opacity: 1; filter: blur(0); }
          }
        }
        .animate-reveal {
          animation: reveal 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        @keyframes slide-up {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards 0.4s;
          opacity: 0;
        }
        .animate-slide-up-delayed {
          animation: slide-up 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards 0.8s;
        }
        @keyframes ping-slow {
          0% { transform: translate(-50%, -50%) scale(0.4); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 5s infinite ease-out;
        }
        .animate-ping-slower {
          animation: ping-slow 7s infinite ease-out 2.5s;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
