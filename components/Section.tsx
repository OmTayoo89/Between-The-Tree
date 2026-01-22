
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <h3 className="heading-font text-2xl text-green-900 font-bold whitespace-nowrap">
          {title}
        </h3>
        <div className="h-[2px] w-full bg-gradient-to-r from-green-200 to-transparent"></div>
      </div>
      <div className="text-neutral-600">
        {children}
      </div>
    </section>
  );
};

export default Section;
