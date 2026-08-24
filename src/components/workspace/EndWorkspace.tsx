import React from 'react';
import { ArrowDown } from 'lucide-react';

interface EndWorkspaceProps {
  onGoToClosing: () => void;
}

export const EndWorkspace: React.FC<EndWorkspaceProps> = ({ onGoToClosing }) => {
  return (
    <section id="contact" className="py-24 sm:py-36 border-t border-neutral-300/80 flex flex-col items-center justify-center text-center space-y-4 scroll-mt-12 md:scroll-mt-16">
      <p className="text-xl sm:text-2xl font-medium text-neutral-800 tracking-tight">
        That's most of what I'm building right now.
      </p>

      <button
        onClick={onGoToClosing}
        className="group flex flex-col items-center gap-2 text-xs font-mono font-medium text-[#3b82f6] hover:text-neutral-900 transition-colors pt-2 cursor-pointer"
        aria-label="Proceed to contact and closing page"
      >
        <span>Keep scrolling</span>
        <ArrowDown className="w-4 h-4 animate-scroll-bounce" />
      </button>
    </section>
  );
};
