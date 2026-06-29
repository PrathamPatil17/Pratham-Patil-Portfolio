'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ProjectCard from './ProjectCard';
import Reveal from '@/components/Reveal';

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

interface ProjectGridProps {
  projects: readonly Project[];
  categories: readonly string[];
}

const INITIAL_COUNT = 4;

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, categories }) => {
  const [selected, setSelected] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = selected === 'All'
    ? projects
    : projects.filter((p) => p.categories.includes(selected));

  // Reset load-more when filter changes
  useEffect(() => { setShowAll(false); }, [selected]);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hiddenCount = filtered.length - INITIAL_COUNT;

  return (
    <>
      {/* Category filter pills */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => {
          const active = selected === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                active
                  ? 'glow-button text-white'
                  : 'border border-border bg-secondary/50 text-muted-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          );
        })}
      </div>

      {/* Bento grid — staggered reveal */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <Reveal key={project.id} delay={index * 60} className="flex flex-col">
            <ProjectCard
              project={project}
              index={index}
              cardNumber={project.id}
            />
          </Reveal>
        ))}
      </div>

      {/* Load more / collapse */}
      {filtered.length > INITIAL_COUNT && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
          >
            {showAll ? (
              <>
                <ChevronUp size={15} aria-hidden="true" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={15} aria-hidden="true" />
                {hiddenCount} More Project{hiddenCount !== 1 ? 's' : ''}
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectGrid;
