'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileMenuButton from './MobileMenuButton';
import MobileNavigation from './MobileNavigation';
import personalInfo from '@/data/personal-info.json';

interface NavItem {
  readonly name: string;
  readonly href: string;
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems: NavItem[] = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScroll = useCallback(() => {
    const sections = navItems.map(item => item.href.slice(1));
    const current = sections.find(section => {
      const el = document.getElementById(section);
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top <= 120 && rect.bottom >= 120;
    });
    if (current) setActiveSection(current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleScroll();
    let timer: ReturnType<typeof setTimeout>;
    const debounced = () => {
      clearTimeout(timer);
      timer = setTimeout(handleScroll, 50);
    };
    window.addEventListener('scroll', debounced, { passive: true });
    return () => {
      window.removeEventListener('scroll', debounced);
      clearTimeout(timer);
    };
  }, [handleScroll]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-between gap-4 rounded-full px-4 py-2 backdrop-blur-xl border border-white/10 bg-card/80 shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
          <Logo scrollToSection={scrollToSection} />

          <DesktopNavigation
            navItems={navItems}
            scrollToSection={scrollToSection}
            activeSection={activeSection}
          />

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:text-primary"
            >
              Resume
            </a>
            <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>

        <MobileNavigation
          navItems={navItems}
          isOpen={isOpen}
          scrollToSection={scrollToSection}
          activeSection={activeSection}
        />
      </div>
    </nav>
  );
};

export default Navigation;
