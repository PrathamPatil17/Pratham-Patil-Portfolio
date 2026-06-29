import React from 'react';
import { Zap } from 'lucide-react';

interface ExperienceContentProps {
  experience: {
    id: number;
    description: string;
    achievements: string[];
    technologies: string[];
  };
  index: number;
}

const ExperienceContent: React.FC<ExperienceContentProps> = ({ experience }) => {
  return (
    <>
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
        {experience.description}
      </p>

      {/* Achievements */}
      <div className="mb-5">
        <h5 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <Zap size={14} className="text-accent" aria-hidden="true" />
          Key Achievements
        </h5>
        <ul className="space-y-2">
          {experience.achievements.map((achievement) => (
            <li key={achievement} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-main" aria-hidden="true" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span key={tech} className="tag-chip">
            {tech}
          </span>
        ))}
      </div>
    </>
  );
};

export default ExperienceContent;
