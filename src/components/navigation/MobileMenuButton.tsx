// Client Component - Needs 'use client' for interactive state
'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  readonly isOpen: boolean;
  readonly setIsOpen: (isOpen: boolean) => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className="lg:hidden h-9 w-9 rounded-full flex items-center justify-center text-foreground hover:bg-white/10 transition-colors duration-200"
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
};

export default MobileMenuButton;
