"use client";
import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  strings: string[];
  speed?: number;
  pause?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ strings, speed = 70, pause = 1200, className }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= strings.length) {
      setIndex(0);
      setSubIndex(0);
      setDeleting(false);
      return;
    }
    if (!deleting && subIndex === strings[index].length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(strings[index].substring(0, subIndex + (deleting ? -1 : 1)));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, strings, speed, pause]);

  return <span className={className}>{text}<span className="animate-blink">|</span></span>;
};

export default Typewriter;
