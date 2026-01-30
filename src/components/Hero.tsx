
import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolio';

export const Hero = () => {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden min-h-[60vh] flex items-center">
      {/* Abstract Background for "3D/CAD" feel */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-30"></div>
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{PERSONAL_INFO.name.split(' ')[0]}</span>.
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
          {PERSONAL_INFO.title}
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          {PERSONAL_INFO.tagline}
        </p>
        <div className="flex gap-4">
          <a 
            href={PERSONAL_INFO.socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            View GitHub
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-400 hover:text-white transition-colors"
          >
            See Projects
          </a>
        </div>
      </div>
    </div>
  );
};
