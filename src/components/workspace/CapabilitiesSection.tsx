import React from 'react';
import { CAPABILITIES, TECH_STACK } from '../../data/skills';
import { Cpu, Eye, Database, Layers, Check } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const getCapabilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return Cpu;
      case 'Eye': return Eye;
      case 'Database': return Database;
      default: return Layers;
    }
  };

  return (
    <section id="capabilities" className="py-16 sm:py-24 lg:py-28 space-y-12 scroll-mt-12 md:scroll-mt-16">
      {/* Primary Capabilities */}
      <div className="space-y-6">
        <div className="space-y-2 border-b border-neutral-200 pb-6">
          <div className="text-xs font-mono font-bold tracking-widest text-[#3b82f6] uppercase">
            CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            What I Actually Do.
          </h2>
          <p className="text-sm text-neutral-500">
            No percentage bars or artificial ratings — just proven engineering domains and production tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = getCapabilityIcon(cap.iconName);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-neutral-300/80 shadow-3d-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900">{cap.title}</h3>
                      <p className="text-xs font-mono text-neutral-500">{cap.subtitle}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {cap.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5 text-xs text-neutral-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Categorized Tech Stack */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
          Tech Stack & Tooling
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_STACK.map((group, idx) => (
            <div key={idx} className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
              <div className="text-xs font-mono font-bold text-[#3b82f6] uppercase tracking-wider mb-2">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="bg-white text-neutral-800 text-xs font-mono px-2.5 py-1 rounded-md border border-neutral-200/80 shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
