
import React from 'react';
import { EXPERIENCE } from '@/data/portfolio';
import { Section } from './Section';

export const Timeline = () => {
  return (
    <Section id="experience" className="bg-slate-50">
      <h2 className="text-3xl font-bold text-slate-900 mb-12">Professional Journey</h2>
      <div className="relative border-l-2 border-slate-200 ml-4 space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline mb-2">
              <h3 className="text-xl font-bold text-slate-900 mr-4">{exp.role}</h3>
              <span className="text-slate-500 font-medium">{exp.company}</span>
            </div>
            
            <div className="text-sm font-semibold text-blue-600 mb-4 uppercase tracking-wide">
              {exp.period}
            </div>
            
            <p className="text-slate-600 mb-4 leading-relaxed max-w-3xl whitespace-pre-line">
              {exp.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-slate-200 text-slate-700 text-xs rounded-full font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
