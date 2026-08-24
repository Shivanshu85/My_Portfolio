import React from 'react';
import { EXPERIENCES } from '../../data/experience';
import { CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-28 space-y-10 scroll-mt-12 md:scroll-mt-16">
      <div className="space-y-2 border-b border-neutral-200 pb-6">
        <div className="text-xs font-mono font-bold tracking-widest text-[#3b82f6] uppercase">
          EXPERIENCE
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
          Where I've worked and what I worked on.
        </h2>
      </div>

      <div className="space-y-6">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-2xl p-6 border border-neutral-300/80 shadow-3d-card space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-[#3b82f6] uppercase tracking-wider">
                  {exp.organization}
                </span>
                <h3 className="text-xl font-bold text-neutral-900">{exp.role}</h3>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-xs font-mono font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-lg border border-neutral-200">
                  {exp.period}
                </span>
                <p className="text-[11px] text-neutral-500 font-mono mt-1">{exp.location}</p>
              </div>
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed font-normal">
              {exp.summary}
            </p>

            <ul className="space-y-2 pt-2">
              {exp.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-neutral-100 text-neutral-700 text-[11px] font-mono px-2.5 py-0.5 rounded-md border border-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
