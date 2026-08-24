import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sidebar } from './Sidebar';
import { MobileHeader } from './MobileHeader';
import { Hero } from './Hero';
import { ProjectGrid } from './ProjectGrid';
import { ExperienceSection } from './ExperienceSection';
import { HowIBuildSection } from './HowIBuildSection';
import { CapabilitiesSection } from './CapabilitiesSection';
import { AboutSection } from './AboutSection';
import { EndWorkspace } from './EndWorkspace';
import { sectionReveal } from '../../motion';

interface WorkspaceProps {
  onGoToClosing: () => void;
}

export const Workspace: React.FC<WorkspaceProps> = ({ onGoToClosing }) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // IntersectionObserver for scroll-spy navigation
  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'experience', 'capabilities', 'about', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 flex flex-col md:flex-row relative">
      {/* Fixed Left Sidebar for Desktop & Tablet Workspace */}
      <Sidebar
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
      />

      {/* Main Workspace Wrapper (Offset for Left Sidebar on Desktop/Tablet) */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-60 lg:ml-64 pt-16 md:pt-8 pb-12">
        {/* Mobile Header with Hamburger Toggle (Mobile Only) */}
        <MobileHeader
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
        />

        {/* Workspace Content Container */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-4 sm:space-y-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={sectionReveal}
          >
            <Hero onScrollToProjects={() => handleSelectSection('projects')} />
          </motion.div>

          <div className="border-t border-neutral-300/60" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={sectionReveal}
          >
            <ProjectGrid />
          </motion.div>

          <div className="border-t border-neutral-300/60" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={sectionReveal}
          >
            <ExperienceSection />
          </motion.div>

          <div className="border-t border-neutral-300/60" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={sectionReveal}
          >
            <HowIBuildSection />
          </motion.div>

          <div className="border-t border-neutral-300/60" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={sectionReveal}
          >
            <CapabilitiesSection />
          </motion.div>

          <div className="border-t border-neutral-300/60" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={sectionReveal}
          >
            <AboutSection />
          </motion.div>

          <div className="border-t border-neutral-300/60" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={sectionReveal}
          >
            <EndWorkspace onGoToClosing={onGoToClosing} />
          </motion.div>
        </main>
      </div>
    </div>
  );
};
