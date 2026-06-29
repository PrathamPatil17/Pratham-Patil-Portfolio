// Server-friendly presentational component
import React from 'react';

interface NavItem {
  readonly name: string;
  readonly href: string;
}

interface DesktopNavigationProps {
  readonly navItems: NavItem[];
  readonly scrollToSection: (href: string) => void;
  readonly activeSection?: string;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ navItems, scrollToSection, activeSection }) => {
  return (
    <div className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = activeSection === item.href.slice(1);
        return (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            aria-current={isActive ? 'true' : undefined}
            className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'text-white bg-white/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
            }`}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default DesktopNavigation;
