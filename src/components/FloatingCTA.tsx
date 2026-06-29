'use client';
import { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.5 }
    );
    const hero = document.getElementById('hero');
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#contact"
      aria-label="Go to contact section"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg glow-button transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <MessageSquare size={15} aria-hidden="true" />
      Let&apos;s Talk
    </a>
  );
}
