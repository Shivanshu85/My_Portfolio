import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PROFILE_DATA } from '../../data/profile';
import { Download } from 'lucide-react';
import { contentStagger, itemReveal } from '../../motion';

interface HeroProps {
  onScrollToProjects?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.section
      id="hero"
      className="py-12 sm:py-20 lg:py-24 space-y-10 sm:space-y-14 scroll-mt-12 md:scroll-mt-16"
      variants={contentStagger}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate="visible"
    >
      {/* Editorial Title Block & Profile Picture Header Grid */}
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 lg:gap-12">
        {/* Editorial Title Block */}
        <motion.div variants={itemReveal} className="space-y-3 max-w-2xl">
          <div className="text-xs font-mono font-bold tracking-widest text-[#3b82f6] uppercase">
            HELLO, I'M SHIVANSHU
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-xs font-mono font-bold">
            <span>ML Intern @ DRDO</span>
            <span>•</span>
            <span>GenAI & LLM Engineer</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.05]">
            GenAI, LLM & <br className="hidden sm:inline" />
            <span className="text-[#3b82f6]">ML Engineer.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-neutral-600 font-normal leading-relaxed pt-2">
            {PROFILE_DATA.shortBio}
          </p>
        </motion.div>

        {/* Circular Profile Picture Box with Thick Border (Top Right) */}
        <motion.div variants={itemReveal} className="shrink-0 self-start md:self-center">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full border-[4px] border-[#1a1a1a] bg-white p-1 shadow-[6px_6px_0px_#1a1a1a] hover:shadow-[8px_8px_0px_#1a1a1a] transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-neutral-200 relative bg-neutral-100">
              <img
                src={PROFILE_DATA.avatarUrl || "/profile.jpeg"}
                alt={PROFILE_DATA.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Status Indicator Badge on circular edge */}
            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-6 h-6 sm:w-7 sm:h-7 bg-emerald-500 border-2 sm:border-3 border-[#1a1a1a] rounded-full flex items-center justify-center shadow-xs" title="Available for opportunities">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Availability Status Card with Black Download Resume Button */}
      <motion.div variants={itemReveal} className="bg-white rounded-2xl p-4 sm:p-5 border border-neutral-300/80 shadow-3d-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-3xl">
        <div className="flex items-start gap-3">
          <span className="relative flex h-3 w-3 mt-1 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <div>
            <h3 className="text-sm font-bold text-neutral-900">{PROFILE_DATA.status.text}</h3>
            <p className="text-xs text-neutral-500 mt-0.5">{PROFILE_DATA.status.subtext}</p>
          </div>
        </div>

        <a
          href={PROFILE_DATA.resumeUrl || '#'}
          download="Shivanshu_Tiwari-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="self-start sm:self-center text-xs font-semibold font-mono text-white bg-[#171717] hover:bg-[#3b82f6] shadow-3d-button flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-colors cursor-pointer shrink-0"
        >
          <Download className="w-3.5 h-3.5 text-white" />
          <span>Download Resume</span>
        </a>
      </motion.div>

      {/* Quick Context Strip (4 Columns) */}
      <motion.div variants={itemReveal} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-neutral-200/80">
        <div>
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">
            CURRENTLY
          </div>
          <div className="text-xs sm:text-sm font-semibold text-neutral-800">
            {PROFILE_DATA.quickContext.currently}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">
            FOCUS
          </div>
          <div className="text-xs sm:text-sm font-semibold text-neutral-800">
            {PROFILE_DATA.quickContext.focus}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">
            RECENTLY
          </div>
          <div className="text-xs sm:text-sm font-semibold text-neutral-800">
            {PROFILE_DATA.quickContext.recently}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">
            BASED IN
          </div>
          <div className="text-xs sm:text-sm font-semibold text-neutral-800">
            {PROFILE_DATA.quickContext.basedIn}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
