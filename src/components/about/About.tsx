import React from 'react';
import { UserRound } from 'lucide-react';
import Education from './Education';
import MyJourney from './MyJourney';
import CompactExperience from './CompactExperience';
import CertBadges from './CertBadges';
import Reveal from '@/components/Reveal';

const About: React.FC = () => {
  return (
    <>
      <hr className="section-divider" />
      <section id="about" className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-10">
            <span className="section-label mb-3">
              <UserRound size={12} aria-hidden="true" />
              About Me
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Building AI that ships to{' '}
              <span className="gradient-text">production</span>
            </h2>
          </div>

          {/* Education strip — at the top */}
          <Education />

          {/* Two columns: Story (left) | Experience (right) */}
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={0}>
              <MyJourney />
            </Reveal>
            <Reveal delay={120}>
              <CompactExperience />
            </Reveal>
          </div>

          {/* Credentials strip */}
          <Reveal delay={80}>
            <CertBadges />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default About;
