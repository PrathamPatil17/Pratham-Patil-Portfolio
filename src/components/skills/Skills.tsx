// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import { Code2, Brain, Network, BarChart2, Layers, Cloud, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SkillCategory from './SkillCategory';
import Reveal from '@/components/Reveal';
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
    { title: 'Programming Languages', icon: Code2,     skills: personalInfo.skills.languages },
    { title: 'Generative AI & LLMs',  icon: Brain,     skills: personalInfo.skills.gen_ai_llms },
    { title: 'RAG & Agentic Systems', icon: Network,   skills: personalInfo.skills.rag_agentic },
    { title: 'Eval & Observability',  icon: BarChart2, skills: personalInfo.skills.eval_observability },
    { title: 'APIs & Frameworks',     icon: Layers,    skills: personalInfo.skills.apis_frameworks },
    { title: 'MLOps, Cloud & Data',   icon: Cloud,     skills: personalInfo.skills.mlops_cloud_data },
  ];

  return (
    <>
      <hr className="section-divider" />
      <section id="skills" className="relative py-16 sm:py-20 section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header — split layout */}
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-label mb-3">
                <Cpu size={12} aria-hidden="true" />
                Tech Stack
              </span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Technical <span className="gradient-text">Expertise</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground sm:max-w-[220px] sm:text-right">
              6 categories · 49 technologies across AI, backend, cloud &amp; data
            </p>
          </div>

          {/* 3-column grid — each card reveals with stagger */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category, i) => (
              <Reveal key={category.title} delay={i * 70}>
                <SkillCategory
                  title={category.title}
                  icon={category.icon}
                  skills={category.skills}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
