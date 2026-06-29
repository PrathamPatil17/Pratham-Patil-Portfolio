// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certificate {
  readonly url: string;
  readonly title: string;
  readonly year: string;
  readonly credentialId: string;
}

interface Certification {
  readonly id: number;
  readonly title: string;
  readonly provider: string;
  readonly year: string;
  readonly description: string;
  readonly certificates?: readonly Certificate[];
  readonly skills: readonly string[];
}

interface CertificationCardProps {
  cert: Certification;
  index: number;
}

interface ProviderTheme {
  ring: string;
  glow: string;
  badgeText: string;
  badgeBg: string;
  initial: string;
}

const getProviderTheme = (provider: string): ProviderTheme => {
  const p = provider.toLowerCase();
  if (p.includes('linkedin')) {
    return {
      ring: 'hover:border-[#0a66c2]/60',
      glow: 'from-[#0a66c2]/25',
      badgeText: 'text-[#4aa3ff]',
      badgeBg: 'bg-[#0a66c2]/15 border-[#0a66c2]/30',
      initial: 'in'
    };
  }
  if (p.includes('microsoft')) {
    return {
      ring: 'hover:border-primary/60',
      glow: 'from-primary/25',
      badgeText: 'text-primary',
      badgeBg: 'bg-primary/15 border-primary/30',
      initial: 'MS'
    };
  }
  if (p.includes('google')) {
    return {
      ring: 'hover:border-[#ea4335]/60',
      glow: 'from-[#ea4335]/25',
      badgeText: 'text-[#ff7a6e]',
      badgeBg: 'bg-[#ea4335]/15 border-[#ea4335]/30',
      initial: 'G'
    };
  }
  return {
    ring: 'hover:border-accent/60',
    glow: 'from-accent/25',
    badgeText: 'text-accent',
    badgeBg: 'bg-accent/15 border-accent/30',
    initial: provider.charAt(0)
  };
};

const CertificationCard: React.FC<CertificationCardProps> = ({ cert, index }) => {
  const theme = getProviderTheme(cert.provider);
  const primaryCert = cert.certificates?.[0];

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl glass-card p-6 ${theme.ring} animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Provider glow */}
      <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${theme.glow} to-transparent opacity-60 blur-2xl`} aria-hidden="true" />

      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className={`grid h-12 w-12 place-items-center rounded-xl border text-sm font-bold ${theme.badgeBg} ${theme.badgeText}`}>
          <Award size={22} aria-hidden="true" />
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <Calendar size={14} aria-hidden="true" />
          {cert.year}
        </span>
      </div>

      {/* Body */}
      <div className="flex-1">
        <span className={`mb-2 inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${theme.badgeBg} ${theme.badgeText}`}>
          {cert.provider}
        </span>
        <h3 className="mb-2 text-lg font-bold text-foreground">{cert.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{cert.description}</p>

        <div className="flex flex-wrap gap-2">
          {cert.skills.map((skill) => (
            <span key={skill} className="tag-chip">{skill}</span>
          ))}
        </div>
      </div>

      {/* Footer link */}
      {primaryCert?.url && (
        <a
          href={primaryCert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
        >
          <ExternalLink size={15} aria-hidden="true" />
          View Credential
        </a>
      )}
    </div>
  );
};

export default CertificationCard;
