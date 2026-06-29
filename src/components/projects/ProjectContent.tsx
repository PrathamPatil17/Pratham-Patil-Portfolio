import React from 'react';
import { Github, ExternalLink, Lock, Zap } from 'lucide-react';

interface ProjectContentProps {
  project: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    technologies: readonly string[];
    github: string;
    featured: boolean;
    status: string;
  };
}

// Key impact metrics per project — quick proof of real results
const projectHighlights: Record<number, string> = {
  1: 'Dual-pipeline agentic · Multi-language · 3 voice styles',
  2: 'MMR semantic reranking · GPT-4 · Bearer auth',
  3: '89% faithfulness · 84% context recall · RAGAS eval',
  4: '32% latency cut · $0.0023/query · CI/CD eval pipeline',
  5: 'PDF · DOCX · TXT · Docker deployed',
  6: 'MySQL + PostgreSQL · EDA pipeline · Kaggle API',
  7: 'Tableau Public · Attrition & workforce trends',
};

const isExternalLink = (url: string) => /tableau|public/i.test(url);

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  const hasLink = project.github.trim().length > 0;
  const external = isExternalLink(project.github);
  const highlight = projectHighlights[project.id];

  return (
    <div className="flex flex-1 flex-col gap-3 p-4">
      {/* Impact metric badge */}
      {highlight && (
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium text-primary self-start">
          <Zap size={10} aria-hidden="true" />
          {highlight}
        </div>
      )}

      {/* Description */}
      <p className="text-[0.85rem] leading-[1.7] text-foreground/60 line-clamp-3">
        {project.description}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 5).map((tech) => (
          <span key={tech} className="tag-chip">
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="tag-chip opacity-60">+{project.technologies.length - 5}</span>
        )}
      </div>

      {/* Link */}
      <div className="mt-auto pt-1">
        {hasLink ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
          >
            {external ? <ExternalLink size={13} aria-hidden="true" /> : <Github size={13} aria-hidden="true" />}
            {external ? 'View Dashboard' : 'View Code'}
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/30 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <Lock size={12} aria-hidden="true" />
            Private Repo
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectContent;
