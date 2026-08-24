import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Desktop-only inertial scrolling. Touch devices retain their native scroll
 * physics, and reduced-motion users receive the browser default experience.
 */
export const SmoothScroll = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches || reducedMotion.matches) return;

    const lenis = new Lenis({
      lerp: 0.09,
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
};
