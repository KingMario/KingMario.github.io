
import React from 'react';
import { OPEN_SOURCE } from '@/data/portfolio';
import { Section } from './Section';

export const OpenSource = () => {
  return (
    <Section id="open-source">
      <h2 className="text-3xl font-bold text-slate-900 mb-12">Open Source Contributions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {OPEN_SOURCE.map((item, index) => (
          <div key={index} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span>
              {item.category}
            </h3>
            <ul className="space-y-4 mb-8">
              {item.contributions.map((contribution, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1.5">•</span>
                  <span className="text-slate-600 leading-relaxed">{contribution}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-lg">
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
