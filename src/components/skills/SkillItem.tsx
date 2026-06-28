import React from 'react';
import TechnologyIcon from './TechnologyIcon';

interface Skill {
  readonly name: string;
  readonly context: string;
  readonly category: string;
  readonly icon: string;
}

interface SkillItemProps {
  skill: Skill;
}

const getFallbackIcon = (): string => {
  return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
};

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className="flex items-center py-1.5 px-2 rounded-md bg-secondary/30 hover:bg-primary/10 transition-colors duration-200">
      <div className="lg:flex items-center gap-2 min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-shrink-0">
          <TechnologyIcon
            src={skill.icon || getFallbackIcon()}
            alt={`${skill.name} icon`}
            size={16}
          />
          <span className="font-normal md:font-medium text-foreground text-xs md:text-sm text-nowrap">
            {skill.name}
          </span>
        </div>
        <span className="text-xs text-muted-foreground hidden sm:inline">•</span>
        <span className="text-xs text-muted-foreground hidden sm:inline truncate">
          {skill.context}
        </span>
      </div>
    </div>
  );
};

export default SkillItem;
