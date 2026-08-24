import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SOCIAL_LINKS } from '../../data/profile';
import { ArrowUp } from 'lucide-react';
import { contentStagger, itemReveal } from '../../motion';

interface ThankYouProps {
  onBackToTop: () => void;
}

export const ThankYou: React.FC<ThankYouProps> = ({ onBackToTop }) => {
  const shouldReduceMotion = useReducedMotion();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] bg-[#090D16] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/40 via-[#0B132B] to-[#050811] text-white flex flex-col justify-between p-6 sm:p-12 lg:p-16 select-none overflow-hidden">
      {/* Ambient lighting orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Empty top for balanced vertical rhythm */}
      <div className="w-full h-8" />

      {/* Main Content */}
      <motion.div
        className="my-auto max-w-3xl mx-auto w-full px-2 sm:px-6 space-y-6 relative z-10"
        variants={contentStagger}
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
      >
        <motion.div variants={itemReveal} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold">
          <span>◇</span>
          <span>GET IN TOUCH</span>
        </motion.div>

        <motion.h2 variants={itemReveal} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Thank you for stopping by.
        </motion.h2>

        <motion.p variants={itemReveal} className="text-xl sm:text-3xl text-slate-300 font-normal tracking-tight">
          Let's build something remarkable together.
        </motion.p>

        {/* Social Links Row as Dark Glass Pills */}
        <motion.div variants={itemReveal} className="pt-6 flex flex-wrap items-center gap-3 text-sm sm:text-base font-medium">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-sky-500/50 transition-all duration-200 shadow-md shadow-black/20"
            >
              <span>{link.platform}</span>
              <span className="text-xs text-sky-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Center: Back to Top */}
      <div className="w-full flex justify-center pb-4 relative z-10">
        <button
          onClick={onBackToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 hover:bg-sky-500 hover:text-white border border-slate-800 hover:border-sky-400 text-xs font-mono font-medium text-slate-400 transition-all duration-200 cursor-pointer shadow-lg"
          aria-label="Return to landing page"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 text-sky-400 group-hover:text-white" />
        </button>
      </div>
    </section>
  );
};
