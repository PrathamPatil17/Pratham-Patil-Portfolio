import React from 'react';
import { type LucideIcon } from 'lucide-react';
import TechnologyIcon from './TechnologyIcon';

interface Skill {
  readonly name: string;
  readonly context: string;
  readonly category: string;
  readonly icon: string;
}

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: readonly Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  const Icon = icon;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_0_24px_hsla(160,76%,44%,0.1)]">
      {/* Subtle top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-[1.5px] rounded-t-2xl"
        style={{ background: 'linear-gradient(to right, hsl(160,76%,44%), hsl(178,68%,46%), transparent)' }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg iconic" aria-hidden="true">
            <Icon size={14} strokeWidth={2} />
          </div>
          <h3 className="text-sm font-semibold text-foreground/90">{title}</h3>
        </div>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
          {skills.length}
        </span>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap content-start items-start gap-1.5">
        {skills.map((skill) => (
          <span key={skill.name} className="tag-chip" title={skill.context}>
            <TechnologyIcon
              src={skill.icon || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'}
              alt=""
              size={11}
            />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
