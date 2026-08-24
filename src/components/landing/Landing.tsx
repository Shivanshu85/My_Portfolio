import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { contentStagger, EASE_OUT, itemReveal } from '../../motion';

interface LandingProps {
  onGoToWorkspace: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onGoToWorkspace }) => {
  const shouldReduceMotion = useReducedMotion();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] bg-[#090D16] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/40 via-[#0B132B] to-[#050811] text-white flex flex-col justify-between p-6 sm:p-12 lg:p-16 select-none overflow-hidden">
      {/* Ambient lighting orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar: Minimal "KNOW MORE v" Link */}
      <motion.div
        className="w-full flex justify-end items-center pt-2 relative z-10"
        initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
      >
        <button
          onClick={onGoToWorkspace}
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-sky-500 hover:text-white border border-slate-800 hover:border-sky-400 text-xs font-mono font-medium tracking-wider text-slate-200 transition-all duration-200 cursor-pointer shadow-md shadow-black/20"
          aria-label="Navigate to portfolio workspace"
        >
          <span>KNOW MORE</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-sky-400 group-hover:text-white" />
        </button>
      </motion.div>

      {/* Bottom-Left Hero: Greeting & Tagline */}
      <motion.div
        className="mt-auto mb-8 sm:mb-12 max-w-4xl w-full px-2 sm:px-6 relative z-10"
        variants={contentStagger}
        initial="hidden"
        animate="visible"
      >
        <div className="relative inline-block">
          {/* Tiny 3D Decorative Symbol above the name */}
          <div className="absolute -top-7 left-32 text-sky-400 text-sm animate-subtle-3d opacity-90 pointer-events-none">
            ◇
          </div>

          <motion.h1 variants={itemReveal} className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
            Hi there, I am{' '}
            <span className="font-extrabold text-sky-400">Shivanshu Tiwari</span>
          </motion.h1>
        </div>

        <motion.p variants={itemReveal} className="mt-4 text-xl sm:text-3xl lg:text-4xl text-slate-300 font-normal tracking-tight leading-snug max-w-3xl">
          I build intelligent systems with AI, models and data.
        </motion.p>
      </motion.div>

      {/* Bottom Center: Scroll Indicator */}
      <motion.div
        className="w-full flex flex-col items-center justify-center pb-4 relative z-10"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE_OUT, delay: shouldReduceMotion ? 0 : 0.2 }}
      >
        <button
          onClick={onGoToWorkspace}
          className="flex flex-col items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors cursor-pointer group"
          aria-label="Scroll down to workspace"
        >
          <span className="font-semibold tracking-wider">Scroll down</span>
          <div className="p-2 rounded-full bg-slate-900/90 border border-slate-800 shadow-lg group-hover:border-sky-500/50 group-hover:bg-slate-800 transition-all">
            <ChevronDown className="w-4 h-4 animate-scroll-bounce text-sky-400" />
          </div>
        </button>
      </motion.div>
    </section>
  );
};
