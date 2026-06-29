// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react';
import ScrollButton from '@/components/ScrollButton';
import personalInfo from '@/data/personal-info.json';

interface SocialLink {
  readonly icon: LucideIcon;
  readonly href: string;
  readonly label: string;
}

const BrandSection: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: Github, href: personalInfo.social.github.url, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin.url, label: 'LinkedIn' },
    { icon: Mail, href: personalInfo.social.email, label: 'Email' }
  ];

  return (
    <div className="space-y-4 text-center md:text-left">
      <ScrollButton
        targetId="hero"
        className="inline-flex items-center gap-2 font-mono text-xl font-bold"
        ariaLabel="Scroll to top"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg text-sm font-bold text-white iconic">
          {personalInfo.personal.nickname.charAt(0)}
        </span>
        <span className="gradient-text">{`${personalInfo.personal.nickname}.dev`}</span>
      </ScrollButton>
      <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground md:mx-0">
        {personalInfo.personal.closingBio}
      </p>
      <div className="flex justify-center gap-3 md:justify-start">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/40 text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
              aria-label={social.label}
            >
              <Icon size={17} aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BrandSection;
