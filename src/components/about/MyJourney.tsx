import React from 'react';
import personalInfo from '@/data/personal-info.json';

const MyJourney: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h3 className="mb-4 text-lg font-semibold text-foreground">My Story</h3>
      <div className="relative space-y-4 border-l-2 border-border pl-5">
        <span
          className="absolute left-[-1px] top-0 h-2/3 w-[2px]"
          style={{ background: 'linear-gradient(to bottom, hsl(160,76%,44%), transparent)' }}
          aria-hidden="true"
        />
        {personalInfo.personal.story.map((paragraph) => (
          <p key={paragraph} className="text-[0.925rem] leading-[1.85]">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MyJourney;
