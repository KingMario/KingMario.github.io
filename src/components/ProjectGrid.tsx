
import React from 'react';
import { PROJECTS } from '@/data/portfolio';
import { Section } from './Section';

const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => {
  return (
    <a 
      href={project.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase">
          {project.category}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
        {project.name}
      </h3>
      
      <p className="text-slate-600 text-sm mb-6 line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs text-slate-500 font-mono">
            #{tag}
          </span>
        ))}
      </div>
    </a>
  );
};

export const ProjectGrid = () => {
  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Open Source & Projects</h2>
      <p className="text-slate-600 mb-12 max-w-2xl">
        A selection of contributions to the Vue and Angular ecosystems, along with my latest experiments in 3D web technologies.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};
