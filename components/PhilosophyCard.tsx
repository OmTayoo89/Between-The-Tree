
import React from 'react';

interface PhilosophyCardProps {
  label: string;
  description: string;
  index: number;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ label, description, index }) => {
  return (
    <div 
      className="relative bg-white p-8 rounded-[2rem] border border-[#e1ebdc] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#76a543]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#76a543]/10 rounded-xl">
             <div className="w-3 h-3 bg-[#76a543] rounded-full animate-pulse"></div>
          </div>
          <h4 className="font-black text-xl text-[#2d4d22] uppercase tracking-tighter">{label}</h4>
        </div>
        
        <p className="text-neutral-600 leading-relaxed font-medium">
          "{description}"
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#bcc447]/30 to-transparent"></div>
    </div>
  );
};

export default PhilosophyCard;
