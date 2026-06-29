import React from 'react';
import { ExternalLink, BadgeCheck } from 'lucide-react';
import personalInfo from '@/data/personal-info.json';

const CertBadges: React.FC = () => {
  const certs = personalInfo.certifications;
  if (!certs?.length) return null;

  return (
    <div className="mt-10">
      <div className="mb-4 flex items-center gap-2">
        <BadgeCheck size={13} className="text-primary" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Credentials
        </p>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-3">
        {certs.map((cert) => {
          const link = cert.certificates?.[0]?.url ?? '';

          const card = (
            <div className="group flex items-start gap-3 rounded-xl border border-border bg-card/40 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary/5">
              {/* Provider initial — uniform violet */}
              <div className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg bg-primary/12 text-xs font-bold text-primary">
                {cert.provider.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground leading-tight">
                  {cert.title}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {cert.provider} · {cert.year}
                </p>
              </div>
              {link && (
                <ExternalLink size={12} className="flex-shrink-0 text-muted-foreground/40 transition-colors group-hover:text-primary" aria-hidden="true" />
              )}
            </div>
          );

          return link ? (
            <a key={cert.id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`${cert.title} — ${cert.provider}`}>
              {card}
            </a>
          ) : (
            <div key={cert.id}>{card}</div>
          );
        })}
      </div>
    </div>
  );
};

export default CertBadges;
