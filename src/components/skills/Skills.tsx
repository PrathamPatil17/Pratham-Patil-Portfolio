// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import { Code2, Brain, Network, BarChart2, Layers, Cloud, type LucideIcon } from 'lucide-react';
import SkillCategory from './SkillCategory';
import personalInfo from '@/data/personal-info.json';

interface Skill {
  readonly name: string;
  readonly experience: string;
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
      title: 'Programming Languages',
      icon: Code2,
      skills: personalInfo.skills.languages
    },
    {
      title: 'Generative AI & LLMs',
      icon: Brain,
      skills: personalInfo.skills.gen_ai_llms
    },
    {
      title: 'RAG & Agentic Systems',
      icon: Network,
      skills: personalInfo.skills.rag_agentic
    },
    {
      title: 'Eval & Observability',
      icon: BarChart2,
      skills: personalInfo.skills.eval_observability
    },
    {
      title: 'APIs & Frameworks',
      icon: Layers,
      skills: personalInfo.skills.apis_frameworks
    },
    {
      title: 'MLOps, Cloud & Data',
      icon: Cloud,
      skills: personalInfo.skills.mlops_cloud_data
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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

      </div>
    </section>
  );
};

export default Skills;
