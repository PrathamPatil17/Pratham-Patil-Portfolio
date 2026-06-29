import React from 'react';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceHeaderProps {
  experience: {
    id: number;
    title: string;
    company: string;
    location: string;
    logo: string;
    duration: string;
  };
  index: number;
}

const ExperienceHeader: React.FC<ExperienceHeaderProps> = ({ experience, index }) => {
  return (
    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start">
      {/* Company logo */}
      <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-xl border border-white/10 bg-white p-2 shadow-lg">
        <Image
          src={experience.logo}
          alt={`${experience.company} logo`}
          width={48}
          height={48}
          className="h-full w-full object-contain"
          priority={index === 0}
        />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-foreground sm:text-xl">{experience.title}</h3>
        <h4 className="mb-2 font-semibold text-primary">{experience.company}</h4>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} className="text-accent" aria-hidden="true" />
            {experience.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} className="text-accent" aria-hidden="true" />
            {experience.location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceHeader;
