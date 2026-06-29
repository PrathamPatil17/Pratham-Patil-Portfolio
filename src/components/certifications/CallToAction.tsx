import React from 'react';
import ScrollButton from '@/components/ScrollButton';

const CallToAction: React.FC = () => {
  return (
    <div className="text-center mt-16">
      <p className="text-muted-foreground mb-6">
        Committed to staying current with the latest technologies and best practices
      </p>
      <ScrollButton
        targetId="contact"
        className="glow-button rounded-full px-8 py-3 text-base font-semibold"
        ariaLabel="Scroll to contact section"
      >
        Discuss Collaboration
      </ScrollButton>
    </div>
  );
};

export default CallToAction;
