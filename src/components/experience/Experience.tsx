// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import personalInfo from '@/data/personal-info.json';

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

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = personalInfo.experience;

  return (
    <>
      <hr className="section-divider" />
      <section id="experience" className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="relative mb-10 text-center">
            <span className="section-number" aria-hidden="true">04</span>
            <div className="relative z-10">
              <span className="section-label mb-5">
                <Briefcase size={13} aria-hidden="true" />
                Experience
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Professional <span className="gradient-text">Journey</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Applying AI and data-driven thinking to real product and business problems.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 sm:pl-10">
            <div
              className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent"
              aria-hidden="true"
            />
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceCard key={experience.id} experience={experience} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
