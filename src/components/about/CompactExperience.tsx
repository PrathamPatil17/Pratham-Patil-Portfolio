import React from 'react';
import Image from 'next/image';
import { MapPin, CalendarDays } from 'lucide-react';
import personalInfo from '@/data/personal-info.json';

const CompactExperience: React.FC = () => {
  const experiences = personalInfo.experience;

  return (
    <div>
      <h3 className="mb-6 text-xl font-semibold text-foreground">Experience</h3>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="glass-card gradient-border rounded-2xl p-5 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              {/* Logo */}
              {exp.logo ? (
                <div className="flex-shrink-0 h-12 w-12 overflow-hidden rounded-xl border border-border bg-card/80 p-1.5">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={44}
                    height={44}
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : (
                <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl iconic text-sm font-bold">
                  {exp.company.charAt(0)}
                </div>
              )}

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-[0.95rem] font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-sm font-medium text-primary/80">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-xs text-foreground/40">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays size={11} aria-hidden="true" />
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={11} aria-hidden="true" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key achievements */}
                <ul className="mt-3 space-y-1.5">
                  {exp.achievements.slice(0, 3).map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2 text-[0.85rem] leading-relaxed text-foreground/60">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.technologies.slice(0, 6).map((tech) => (
                    <span key={tech} className="tag-chip text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompactExperience;
