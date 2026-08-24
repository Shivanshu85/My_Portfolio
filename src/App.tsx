import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PortfolioStage } from './types';
import { Landing } from './components/landing/Landing';
import { Workspace } from './components/workspace/Workspace';
import { ThankYou } from './components/closing/ThankYou';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { EASE_IN_OUT } from './motion';

const STAGE_ORDER: Record<PortfolioStage, number> = {
  landing: 0,
  workspace: 1,
  closing: 2,
};

export default function App() {
  const [stage, setStage] = useState<PortfolioStage>('landing');
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const isTransitioningRef = useRef(false);
  const lastEventTimeRef = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  const transitionTo = (nextStage: PortfolioStage) => {
    if (isTransitioningRef.current || stage === nextStage) return;

    const now = Date.now();
    if (now - lastEventTimeRef.current < 200) return;

    isTransitioningRef.current = true;
    lastEventTimeRef.current = now;

    const currentIdx = STAGE_ORDER[stage];
    const nextIdx = STAGE_ORDER[nextStage];
    const dir = nextIdx >= currentIdx ? 'forward' : 'backward';

    setDirection(dir);
    setStage(nextStage);

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 200);
  };

  // Global scroll / wheel / touch handling for intuitive page progression
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastEventTimeRef.current < 300 || isTransitioningRef.current) return;

      if (stage === 'landing') {
        if (e.deltaY > 15) {
          transitionTo('workspace');
        }
      } else if (stage === 'workspace') {
        const scrollHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
        const currentScroll = window.innerHeight + window.scrollY;
        const isAtBottom = currentScroll >= scrollHeight - 30;

        if (isAtBottom && e.deltaY > 25) {
          transitionTo('closing');
        }
      } else if (stage === 'closing') {
        const isAtTop = window.scrollY <= 10;
        if (isAtTop && e.deltaY < -25) {
          transitionTo('workspace');
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isTransitioningRef.current) return;
      const now = Date.now();
      if (now - lastEventTimeRef.current < 300) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (Math.abs(deltaY) < 35) return;

      if (stage === 'landing' && deltaY > 35) {
        transitionTo('workspace');
      } else if (stage === 'workspace') {
        const scrollHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
        const currentScroll = window.innerHeight + window.scrollY;
        const isAtBottom = currentScroll >= scrollHeight - 30;

        if (isAtBottom && deltaY > 35) {
          transitionTo('closing');
        }
      } else if (stage === 'closing' && deltaY < -35) {
        const isAtTop = window.scrollY <= 10;
        if (isAtTop) {
          transitionTo('workspace');
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [stage]);

  const variants = {
    initial: (dir: 'forward' | 'backward') => ({
      opacity: 0,
      filter: 'blur(16px)',
      scale: 1.01,
      y: dir === 'forward' ? 16 : -16,
    }),
    animate: {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      y: 0,
      transition: {
        duration: 0.38,
        ease: EASE_IN_OUT,
      },
      transitionEnd: {
        filter: 'none',
        transform: 'none',
      },
    },
    exit: (dir: 'forward' | 'backward') => ({
      opacity: 0,
      filter: 'blur(20px)',
      scale: 0.98,
      y: dir === 'forward' ? -16 : 16,
      transition: {
        duration: 0.28,
        ease: EASE_IN_OUT,
      },
    }),
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F7F4] font-sans antialiased selection:bg-[#3b82f6] selection:text-white overflow-x-hidden">
      <SmoothScroll />
      <AnimatePresence mode="popLayout" custom={direction}>
        {stage === 'landing' && (
          <motion.div
            key="landing"
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full min-h-screen"
          >
            <Landing onGoToWorkspace={() => transitionTo('workspace')} />
          </motion.div>
        )}

        {stage === 'workspace' && (
          <motion.div
            key="workspace"
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full min-h-screen"
          >
            <Workspace onGoToClosing={() => transitionTo('closing')} />
          </motion.div>
        )}

        {stage === 'closing' && (
          <motion.div
            key="closing"
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full min-h-screen"
          >
            <ThankYou onBackToTop={() => transitionTo('landing')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
