// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import { FolderGit2 } from 'lucide-react';
import ProjectGrid from './ProjectGrid';
import personalInfo from '@/data/personal-info.json';

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

const Projects: React.FC = () => {
  const projects: readonly Project[] = personalInfo.projects
    .slice()
    .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));

  const allCategories = projects.flatMap((p) => p.categories);
  const uniqueCategories = Array.from(new Set(allCategories)).sort((a, b) =>
    a.localeCompare(b)
  );
  const categories = ['All', ...uniqueCategories];

  return (
    <>
      <hr className="section-divider" />
      <section id="projects" className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-label mb-3">
                <FolderGit2 size={12} aria-hidden="true" />
                Work
              </span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Featured <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground sm:max-w-[200px] sm:text-right">
              {projects.length} projects · AI · Data · Full-Stack
            </p>
          </div>

          <ProjectGrid projects={projects} categories={categories} />
        </div>
      </section>
    </>
  );
};

export default Projects;
