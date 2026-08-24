import React from 'react';
import { PROJECTS } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';

export const ProjectGrid: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 space-y-10 scroll-mt-12 md:scroll-mt-16">
      {/* Section Heading */}
      <div className="space-y-2 border-b border-neutral-200 pb-6">
        <div className="text-xs font-mono font-bold tracking-widest text-[#3b82f6] uppercase">
          PROJECTS
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
          Things I've built, tested and shipped.
        </h2>

        <p className="text-sm text-neutral-500 max-w-xl">
          From computer vision research and drone-detection pipelines to practical machine-learning and NLP applications.
        </p>
      </div>

      {/* 2 Cards per row on Large Desktop Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};
