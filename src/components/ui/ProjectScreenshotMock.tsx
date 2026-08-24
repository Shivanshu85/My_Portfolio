import React from 'react';
import { Crosshair } from 'lucide-react';

interface ProjectScreenshotMockProps {
  projectId: string;
  title: string;
  imageAlt: string;
}

export const ProjectScreenshotMock: React.FC<ProjectScreenshotMockProps> = ({ projectId, title, imageAlt }) => {
  if (projectId === 'dronevision') {
    return (
      <div className="w-full h-full relative overflow-hidden select-none group bg-slate-950">
        {/* Real Drone Photo Background */}
        <img
          src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1000&q=80"
          alt={imageAlt || 'DroneVision Electro-Optical Detection'}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
          referrerPolicy="no-referrer"
        />

        {/* Electro-Optical / Thermal Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />

        {/* Real-time Computer Vision Detection Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Bounding Box 1: Primary Target Lock Graphic */}
        <div className="absolute top-[28%] left-[38%] sm:left-[42%] w-24 h-20 border-2 border-emerald-400/90 bg-emerald-500/10 rounded-sm shadow-[0_0_12px_rgba(16,185,129,0.4)] flex items-end justify-end p-1.5">
          <Crosshair className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        {/* Bounding Box 2: Secondary Tracking Graphic */}
        <div className="absolute bottom-[32%] right-[24%] w-16 h-14 border border-amber-400/80 bg-amber-400/10 rounded-sm" />

        {/* HUD Crosshair Center Graphic */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-12 h-[1px] bg-emerald-400" />
          <div className="h-12 w-[1px] bg-emerald-400 absolute" />
        </div>
      </div>
    );
  }

  if (projectId === 'swarmtally') {
    return (
      <div className="w-full h-full relative overflow-hidden select-none group bg-slate-950">
        {/* Real Swarm Quadcopter Photo Background */}
        <img
          src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80"
          alt={imageAlt || 'SwarmTally Multi-Drone Detection'}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />

        {/* Multi-Drone Bounding Boxes (Graphics only) */}
        <div className="absolute top-[22%] left-[25%] w-20 h-16 border-2 border-cyan-400/80 bg-cyan-500/10 rounded shadow-[0_0_10px_rgba(34,211,238,0.3)]" />
        <div className="absolute top-[38%] right-[32%] w-22 h-18 border-2 border-blue-400/80 bg-blue-500/10 rounded shadow-[0_0_10px_rgba(96,165,250,0.3)]" />
        <div className="absolute bottom-[36%] left-[48%] w-18 h-14 border-2 border-emerald-400/80 bg-emerald-500/10 rounded" />
      </div>
    );
  }

  if (projectId === 'cinecurator') {
    return (
      <div className="w-full h-full relative overflow-hidden select-none group bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80"
          alt={imageAlt || 'CineCurator AI movie discovery platform'}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-85 contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />
      </div>
    );
  }

  if (projectId === 'mcp-doctor') {
    return (
      <div className="w-full h-full relative overflow-hidden select-none group bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
          alt={imageAlt || 'MCP Doctor diagnostic toolkit'}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-85 contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />
      </div>
    );
  }

  if (projectId === 'google-flow-automation') {
    return (
      <div className="w-full h-full relative overflow-hidden select-none group bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
          alt={imageAlt || 'Google Flow Automation Chrome extension'}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-85 contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />
      </div>
    );
  }

  // Fallback
  return (
    <div className="w-full h-full relative overflow-hidden select-none group bg-slate-950">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
        alt={imageAlt || title}
        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-85"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
    </div>
  );
};
