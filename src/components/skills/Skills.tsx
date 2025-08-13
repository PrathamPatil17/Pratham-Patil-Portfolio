// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import { Code2, Brain, Server, Monitor, Cloud, type LucideIcon } from 'lucide-react';
import SkillCategory from './SkillCategory';
import SkillsSummary from './SkillsSummary';
import personalInfo from '@/data/personal-info.json';

interface Skill {
  readonly name: string;
  readonly context: string;
  readonly category: string;
  readonly icon: string;
}

interface SkillCategoryData {
  readonly title: string;
  readonly icon: LucideIcon;
  readonly skills: readonly Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: readonly SkillCategoryData[] = [
    {
      title: 'Programming & Scripting Languages',
      icon: Code2,
      skills: personalInfo.skills.languages
    },
    {
      title: 'AI / ML & Data Science',
      icon: Brain,
      skills: personalInfo.skills.ai_ml
    },
    {
      title: 'Backend & Application Development',
      icon: Server,
      skills: personalInfo.skills.backend
    },
    {
      title: 'Databases & Cloud',
      icon: Cloud,
      skills: personalInfo.skills.cloud_databases
    },
    {
      title: 'Tools & Platforms',
      icon: Monitor,
      skills: personalInfo.skills.frontend
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technologies I&apos;ve worked with in real-world projects and professional environments
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={categoryIndex}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>

        {/* Skills Summary */}
        <SkillsSummary />
      </div>
    </section>
  );
};

export default Skills;
