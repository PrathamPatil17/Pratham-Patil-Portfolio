import React from 'react';
import { Telescope, BarChart2, Rocket, Layers } from 'lucide-react';

interface Principle {
  readonly icon: React.ReactElement;
  readonly title: string;
  readonly description: string;
}

const HowIWork: React.FC = () => {
  const principles: Principle[] = [
    {
      icon: <Telescope size={24} className="text-black stroke-2" />,
      title: "Curiosity as a Skill",
      description: "Treating every new paper, framework, or dataset as an opportunity to build something better than yesterday."
    },
    {
      icon: <BarChart2 size={24} className="text-black stroke-2" />,
      title: "From Raw to Insight",
      description: "Transforming messy, unstructured data into clean pipelines and dashboards that business teams can actually act on."
    },
    {
      icon: <Rocket size={24} className="text-black stroke-2" />,
      title: "Model Meets Reality",
      description: "Bridging the gap between research and production — every model I build is evaluated, monitored, and deployed with real-world constraints in mind."
    },
    {
      icon: <Layers size={24} className="text-black stroke-2" />,
      title: "Full Stack of Intelligence",
      description: "From raw data ingestion to model inference to front-end dashboards — I connect the entire intelligence stack, not just one layer of it."
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-foreground">How I Work</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {principles.map((principle, index) => (
          <div key={principle.title} className="glass-card p-6 rounded-xl group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg iconic mr-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center flex-shrink-0">
                {principle.icon}
              </div>
              <h4 className="font-semibold text-foreground">{principle.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowIWork;
