import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectContent from './ProjectContent';

interface Project {
  readonly id: number;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly longDescription: string;
  readonly technologies: readonly string[];
  readonly github: string;
  readonly featured: boolean;
  readonly categories: readonly string[];
  readonly image: string;
  readonly status: string;
  readonly priority?: number;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  cardNumber: number;
}

// Bento layout: index 0 → wide (col-span-2), index 1 → normal
// index 5 → wide (col-span-2), others normal
// This gives a nice alternating wide pattern
const isWide = (index: number) => index === 0 || index === 5;

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, cardNumber }) => {
  const wide = isWide(index);

  return (
    <div
      data-project-categories={project.categories.join(',')}
      className={`group relative flex flex-col overflow-hidden rounded-2xl glass-card gradient-border h-full ${
        wide ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Decorative card number */}
      <span
        className="card-number pointer-events-none absolute right-4 top-2 z-10 select-none leading-none opacity-60"
        aria-hidden="true"
      >
        {String(cardNumber).padStart(2, '0')}
      </span>

      <ProjectImage project={project} wide={wide} />
      <ProjectContent project={project} />
    </div>
  );
};

export default ProjectCard;
