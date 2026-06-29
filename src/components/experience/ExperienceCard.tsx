import React from 'react';
import ExperienceHeader from './ExperienceHeader';
import ExperienceContent from './ExperienceContent';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  logo: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <span
        className="absolute -left-[26px] sm:-left-[34px] top-6 h-4 w-4 rounded-full bg-gradient-main ring-4 ring-background"
        aria-hidden="true"
      />

      <div className="glass-card rounded-2xl p-5 sm:p-6">
        <ExperienceHeader experience={experience} index={index} />
        <ExperienceContent experience={experience} index={index} />
      </div>
    </div>
  );
};

export default ExperienceCard;
