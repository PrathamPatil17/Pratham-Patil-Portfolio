import React from 'react';
import { GraduationCap, CalendarDays, Award } from 'lucide-react';
import personalInfo from '@/data/personal-info.json';

const Education: React.FC = () => {
  return (
    <div>
      <div className="glass-card flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
        <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl iconic">
          <GraduationCap size={22} aria-hidden="true" />
        </div>

        <div className="flex-1">
          <h4 className="text-base font-semibold text-foreground">{personalInfo.education.degree}</h4>
          <p className="text-sm text-foreground/50">{personalInfo.education.institution}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-sm text-foreground/45">
            <CalendarDays size={13} aria-hidden="true" />
            {personalInfo.education.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Award size={13} aria-hidden="true" />
            CGPA {personalInfo.education.cgpa}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
