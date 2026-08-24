import React from 'react';
import { PROFILE_DATA, SOCIAL_LINKS } from '../../data/profile';
import { Home, FolderGit2, Briefcase, Cpu, User, Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSelectSection }) => {
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

  return (
    <aside className="hidden md:flex flex-col justify-between w-60 lg:w-64 h-screen fixed top-0 left-0 bg-white border-r border-slate-200 p-5 shadow-xs z-30 select-none shrink-0 overflow-y-auto">
      <div>
        {/* Top Profile Mark */}
        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-200">
          <div className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] overflow-hidden shrink-0 shadow-xs bg-slate-100">
            <img
              src={PROFILE_DATA.avatarUrl || "/profile.jpeg"}
              alt={PROFILE_DATA.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 tracking-tight">{PROFILE_DATA.name.split(' ')[0]}</h2>
            <p className="text-[11px] font-mono text-slate-500 font-medium">AI Engineer</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 hover:translate-x-0.5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Connect Section at Sidebar Bottom */}
      <div className="pt-4 border-t border-slate-200">
        <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2 px-1">
          Connect
        </div>
        <div className="space-y-1">
          {SOCIAL_LINKS.filter(s => s.platform !== 'Email').map((link) => {
            const Icon = getSocialIcon(link.platform);
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                  <span>{link.platform}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">↗</span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
