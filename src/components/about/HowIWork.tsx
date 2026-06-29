import React from 'react';
import { Telescope, BarChart2, Rocket, Layers, type LucideIcon } from 'lucide-react';

interface Principle {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
}

const HowIWork: React.FC = () => {
  const principles: Principle[] = [
    {
      icon: Telescope,
      title: 'Curiosity as a Skill',
      description: 'Treating every new paper, framework, or dataset as an opportunity to build something better than yesterday.',
    },
    {
      icon: BarChart2,
      title: 'From Raw to Insight',
      description: 'Transforming messy, unstructured data into clean pipelines and dashboards that teams can actually act on.',
    },
    {
      icon: Rocket,
      title: 'Model Meets Reality',
      description: 'Bridging research and production — every model is evaluated, monitored, and deployed with real-world constraints in mind.',
    },
    {
      icon: Layers,
      title: 'Full Stack of Intelligence',
      description: 'From data ingestion to inference to front-end dashboards — I connect the entire intelligence stack, not just one layer.',
    },
  ];

  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-foreground">How I Work</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {principles.map((principle) => {
          const Icon = principle.icon;
          return (
            <div
              key={principle.title}
              className="group gradient-border glass-card rounded-2xl p-5 transition-all duration-300"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl iconic transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                <Icon size={18} className="text-white" strokeWidth={2} />
              </div>
              <h4 className="mb-2 font-semibold text-foreground">{principle.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowIWork;
