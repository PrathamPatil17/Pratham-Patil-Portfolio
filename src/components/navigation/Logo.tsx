import React from 'react';
import personalInfo from '@/data/personal-info.json';

interface LogoProps {
  readonly scrollToSection: (href: string) => void;
}

const Logo: React.FC<LogoProps> = ({ scrollToSection }) => {
  const initials = personalInfo.personal.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <button
      onClick={() => scrollToSection('#hero')}
      aria-label="Back to top"
      className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg text-xs font-bold text-white iconic"
    >
      {initials}
    </button>
  );
};

export default Logo;
