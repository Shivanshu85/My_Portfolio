import React from 'react';
import { HOW_I_BUILD_STEPS } from '../../data/skills';

export const HowIBuildSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-28 space-y-10 scroll-mt-12 md:scroll-mt-16">
      <div className="space-y-2 border-b border-neutral-200 pb-6">
        <div className="text-xs font-mono font-bold tracking-widest text-[#3b82f6] uppercase">
          PROCESS
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
          How I Build.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {HOW_I_BUILD_STEPS.map((step) => (
          <div
            key={step.num}
            className="bg-white rounded-2xl p-5 border border-neutral-300/80 shadow-3d-card flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl font-black font-mono text-[#3b82f6]/40">{step.num}</span>
              <h3 className="text-base font-bold text-neutral-900 mt-2">{step.title}</h3>
              <p className="text-xs text-neutral-600 leading-relaxed mt-2">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
