
import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolio';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="font-semibold text-white">{PERSONAL_INFO.name}</p>
          <p className="text-sm mt-1">Built with Next.js, Tailwind & TypeScript</p>
        </div>
        <div className="flex gap-6">
          <a href={PERSONAL_INFO.socials.github} className="hover:text-white transition-colors">GitHub</a>
          <a href={PERSONAL_INFO.socials.npm} className="hover:text-white transition-colors">NPM</a>
          {/* <a href={PERSONAL_INFO.socials.linkedin} className="hover:text-white transition-colors">LinkedIn</a> */}
        </div>
      </div>
    </footer>
  );
};
