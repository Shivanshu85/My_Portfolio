import React from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { CURRENTLY_EXPLORING, CERTIFICATIONS } from '../../data/skills';
import { GraduationCap, Award, Compass, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 space-y-12 scroll-mt-12 md:scroll-mt-16">
      {/* About Me Story */}
      <div className="space-y-6">
        <div className="space-y-2 border-b border-neutral-200 pb-6">
          <div className="text-xs font-mono font-bold tracking-widest text-[#3b82f6] uppercase">
            A LITTLE ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Where AI stops being a demo and becomes a useful system.
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-300/80 shadow-3d-card space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
          {PROFILE_DATA.aboutText.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>

      {/* Currently Exploring Rows */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#3b82f6] uppercase">
          <Compass className="w-4 h-4 text-[#3b82f6]" />
          <span>CURRENTLY EXPLORING</span>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-300/80 shadow-3d-card divide-y divide-neutral-200/80 overflow-hidden">
          {CURRENTLY_EXPLORING.map((item, idx) => (
            <div key={idx} className="p-4 flex items-center justify-between hover:bg-neutral-50/80 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#3b82f6]">0{idx + 1}</span>
                <span className="text-sm font-medium text-neutral-800">{item}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Education Card */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-300/80 shadow-3d-card space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#3b82f6] uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>EDUCATION</span>
          </div>
          <div className="space-y-3.5">
            {PROFILE_DATA.educationList.map((edu, idx) => (
              <div key={idx} className="border-b border-neutral-100 pb-2.5 last:border-0 last:pb-0">
                <h3 className="text-sm font-bold text-neutral-900">{edu.degree}</h3>
                <p className="text-xs font-medium text-neutral-600 mt-0.5">{edu.institution}</p>
                <span className="inline-block text-[11px] font-mono text-neutral-500 mt-1">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Card */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-300/80 shadow-3d-card space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#3b82f6] uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>CERTIFICATIONS</span>
          </div>
          <div className="space-y-2.5">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="flex justify-between items-baseline border-b border-neutral-100 pb-1.5 last:border-0 last:pb-0">
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">{cert.title}</h4>
                  <p className="text-[11px] text-neutral-500">{cert.issuer}</p>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
