// Presentational component for mobile slide-down menu
import React from 'react';
import { Download } from 'lucide-react';
import personalInfo from '@/data/personal-info.json';

interface NavItem {
  readonly name: string;
  readonly href: string;
}

interface MobileNavigationProps {
  readonly navItems: NavItem[];
  readonly isOpen: boolean;
  readonly scrollToSection: (href: string) => void;
  readonly activeSection?: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ navItems, isOpen, scrollToSection, activeSection }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden mt-3" role="menu" aria-label="Mobile navigation">
      <div className="rounded-3xl p-3 backdrop-blur-xl border border-white/10 bg-card/90 shadow-[0_8px_32px_rgba(0,0,0,0.5)] space-y-1 animate-fade-in-up">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1);
          return (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              role="menuitem"
              aria-current={isActive ? 'true' : undefined}
              className={`block w-full text-left px-4 py-3 rounded-2xl text-base font-medium transition-all duration-200 ${
                isActive
                  ? 'text-white bg-primary/15'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
            >
              {item.name}
            </button>
          );
        })}
        <a
          href={personalInfo.social.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 px-4 py-3 mt-2 rounded-2xl text-base font-semibold text-white glow-button"
        >
          <Download size={18} aria-hidden="true" />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default MobileNavigation;
