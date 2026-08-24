import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Project } from '../../types';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectScreenshotMock } from './ProjectScreenshotMock';
import { EASE_OUT } from '../../motion';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.article
      className="bg-white rounded-[24px] border border-neutral-800/10 p-4 sm:p-5 shadow-3d-card flex flex-col justify-between group transition-[border-color,box-shadow] duration-300 hover:border-neutral-800/20"
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      whileTap={shouldReduceMotion ? undefined : { y: -1, scale: 0.995 }}
      transition={{ duration: 0.28, ease: EASE_OUT }}
    >
      {/* Upper Screenshot Section with Inset Frame */}
      <div className="w-full aspect-[16/9] bg-[#14161a] rounded-[16px] border border-neutral-900/10 overflow-hidden relative shadow-inner group/thumb">
        <ProjectScreenshotMock
          projectId={project.id}
          title={project.title}
          imageAlt={project.imageAlt}
        />
      </div>

      {/* Content Section below Screenshot */}
      <div className="pt-4 flex-1 flex flex-col justify-between space-y-4 transition-transform duration-300 ease-out group-hover:translate-y-0.5">
        <div>
          {/* Header row: Title & Year */}
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight group-hover:text-[#3b82f6] transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-neutral-400 font-medium">{project.year}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-neutral-600 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Show a demo only when the project has a real public deployment. */}
        <div className="flex items-center gap-2 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-[#171717] hover:bg-[#3b82f6] text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow-3d-button flex items-center justify-center gap-2 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`${project.liveUrl ? "" : "flex-1"} bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-medium py-2.5 px-3.5 rounded-xl border border-neutral-300/80 flex items-center justify-center gap-1.5 transition-colors`}
              title="View GitHub Repository"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
