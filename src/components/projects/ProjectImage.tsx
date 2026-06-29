import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface ProjectImageProps {
  project: {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    github: string;
    featured: boolean;
    status: string;
  };
  wide?: boolean;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ project, wide = false }) => {
  return (
    <div className={`relative overflow-hidden ${wide ? 'aspect-[16/7]' : 'aspect-video'}`}>
      <Image
        src={project.image}
        alt={`${project.title} - ${project.subtitle}`}
        fill
        loading="lazy"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" aria-hidden="true" />

      {/* Badges */}
      <div className="absolute left-3 top-3 flex gap-2">
        {project.featured && (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            <Star size={11} aria-hidden="true" />
            Featured
          </span>
        )}
      </div>
      <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
        {project.status}
      </span>

      {/* Title on image */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-lg font-bold text-white leading-snug">{project.title}</h3>
        <p className="mt-0.5 text-xs font-medium text-white/55">{project.subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectImage;
