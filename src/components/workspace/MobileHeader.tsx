import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Menu, X, Home, FolderGit2, Briefcase, Cpu, User, Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { PROFILE_DATA, SOCIAL_LINKS } from '../../data/profile';
import { EASE_OUT } from '../../motion';

interface MobileHeaderProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ activeSection, onSelectSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'capabilities', label: 'Capabilities', icon: Cpu },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub': return Github;
      case 'LinkedIn': return Linkedin;
      case 'X': return Twitter;
      case 'Instagram': return Instagram;
      default: return Mail;
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = (id: string) => {
    onSelectSection(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Top Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-neutral-200 px-5 py-3 flex items-center justify-between shadow-xs">
        {/* Brand mark */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] overflow-hidden shrink-0 shadow-xs bg-neutral-100">
            <img
              src={PROFILE_DATA.avatarUrl || "/profile.jpeg"}
              alt={PROFILE_DATA.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-bold text-neutral-900">{PROFILE_DATA.name}</span>
        </div>

        {/* 3-line Hamburger Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-neutral-800 hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Drawer Overlay - Solid White Background */}
      <AnimatePresence>
        {isOpen && (
        <motion.div
          className="md:hidden fixed inset-0 z-50 bg-white p-6 flex flex-col justify-between overflow-y-auto"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 12 }}
          transition={{ duration: 0.24, ease: EASE_OUT }}
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio navigation"
        >
          {/* Top Header Row inside Overlay */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-[#1a1a1a] overflow-hidden shrink-0 shadow-xs bg-neutral-100">
                <img
                  src={PROFILE_DATA.avatarUrl || "/profile.jpeg"}
                  alt={PROFILE_DATA.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-sm font-bold text-neutral-900">{PROFILE_DATA.name}</h2>
                <p className="text-[11px] font-mono text-neutral-500">AI Engineer</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors cursor-pointer"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto py-6 space-y-2">
            <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-400 mb-3 px-1">
              Navigation
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-[#171717] text-white shadow-md'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-neutral-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Mobile Resume Download Button */}
            <a
              href={PROFILE_DATA.resumeUrl}
              download="Shivanshu_Tiwari_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-sm font-bold shadow-md transition-colors cursor-pointer"
            >
              <span>Download Resume (PDF)</span>
              <span>↓</span>
            </a>
          </nav>

          {/* Connect Section at Bottom */}
          <div className="pt-4 border-t border-neutral-200">
            <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-400 mb-3 px-1">
              Connect
            </div>
            <div className="grid grid-cols-2 gap-2">
              {SOCIAL_LINKS.filter(s => s.platform !== 'Email').map((link) => {
                const Icon = getSocialIcon(link.platform);
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-neutral-700 bg-neutral-50 hover:bg-neutral-100 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-neutral-500" />
                    <span>{link.platform}</span>
                    <span className="ml-auto text-[10px] text-neutral-400">↗</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
