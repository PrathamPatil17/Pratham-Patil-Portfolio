// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import { Github, Linkedin, BookOpenText, ArrowUpRight, type LucideIcon } from 'lucide-react';
import personalInfo from '@/data/personal-info.json';

interface SocialItem {
  readonly icon: LucideIcon;
  readonly label: string;
  readonly href: string;
  readonly username: string;
}

const SocialLinks: React.FC = () => {
  const socialLinks: SocialItem[] = [
    { icon: Github, label: 'GitHub', href: personalInfo.social.github.url, username: personalInfo.social.github.username },
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.social.linkedin.url, username: personalInfo.social.linkedin.username },
    { icon: BookOpenText, label: 'Medium', href: personalInfo.social.medium.url, username: personalInfo.social.medium.username }
  ];

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h3 className="mb-6 text-xl font-semibold text-foreground">Follow Me</h3>
      <div className="space-y-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-secondary/30 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl iconic transition-transform duration-300 group-hover:scale-110">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{social.label}</p>
                  <p className="text-sm text-muted-foreground">{social.username}</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:text-primary group-hover:opacity-100" aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
