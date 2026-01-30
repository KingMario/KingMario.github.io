
import React from 'react';

export const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string, id?: string }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};
