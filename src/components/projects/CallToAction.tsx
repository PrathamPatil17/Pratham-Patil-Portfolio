import React from 'react';
import ScrollButton from '@/components/ScrollButton';

const CallToAction: React.FC = () => {
  return (
    <div className="text-center mt-16">
      <p className="text-muted-foreground mb-6">
        Interested in collaborating on innovative AI/ML projects?
      </p>
      <ScrollButton
        targetId="contact"
        className="glow-button rounded-full px-8 py-3 text-base font-semibold"
        ariaLabel="Scroll to contact section"
      >
        Let&apos;s Work Together
      </ScrollButton>
    </div>
  );
};

export default CallToAction;
