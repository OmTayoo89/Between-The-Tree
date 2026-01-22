
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

interface FooterProps {
  slogan: string;
}

const Footer: React.FC<FooterProps> = ({ slogan }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-[#e1ebdc] py-5 px-6 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Social Media Buttons */}
        <div className="flex gap-6 mb-4">
          <a 
            href={SOCIAL_LINKS.INSTAGRAM} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-[#76a543]/10 text-[#76a543] rounded-full hover:bg-[#76a543] hover:text-white transition-all duration-300"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.669-.072-4.948-.197-4.354-2.612-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href={SOCIAL_LINKS.LINKEDIN} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-[#2d4d22]/10 text-[#2d4d22] rounded-full hover:bg-[#2d4d22] hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a 
            href={SOCIAL_LINKS.TWITTER} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-black/10 text-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
            aria-label="Twitter X"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        <p className="text-center text-[#2d4d22] font-semibold italic text-xs md:text-sm leading-relaxed max-w-2xl px-4 animate-fade-in">
          "{slogan}"
        </p>
        
        <div className="mt-3 flex items-center gap-2 opacity-30">
           <div className="w-1 h-1 rounded-full bg-[#76a543]"></div>
           <div className="w-16 h-[1px] bg-[#76a543]"></div>
           <div className="w-1 h-1 rounded-full bg-[#76a543]"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
