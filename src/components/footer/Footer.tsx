import React from 'react';
import ScrollButton from '@/components/ScrollButton';
import personalInfo from '@/data/personal-info.json';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/30 py-6">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, hsl(160,76%,44%,0.4), hsl(178,68%,46%,0.3), transparent)' }}
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-8">
        <ScrollButton
          targetId="hero"
          className="text-sm font-semibold gradient-text"
          ariaLabel="Back to top"
        >
          {personalInfo.personal.name}
        </ScrollButton>
        <p className="text-xs text-muted-foreground">
          © {year} · Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
