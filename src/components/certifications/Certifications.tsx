// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import { BadgeCheck } from 'lucide-react';
import CertificationCard from './CertificationCard';
import CallToAction from './CallToAction';
import personalInfo from '@/data/personal-info.json';

interface Certificate {
  readonly url: string;
  readonly title: string;
  readonly year: string;
  readonly credentialId: string;
}

interface Certification {
  readonly id: number;
  readonly title: string;
  readonly provider: string;
  readonly year: string;
  readonly description: string;
  readonly certificates?: readonly Certificate[];
  readonly skills: readonly string[];
}

const Certifications: React.FC = () => {
  const certifications: readonly Certification[] = personalInfo.certifications;

  return (
    <>
      <hr className="section-divider" />
      <section id="certifications" className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="relative mb-10 text-center">
            <span className="section-number" aria-hidden="true">05</span>
            <div className="relative z-10">
              <span className="section-label mb-5">
                <BadgeCheck size={13} aria-hidden="true" />
                Credentials
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Professional <span className="gradient-text">Certifications</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Continuous learning across cutting-edge AI, cloud, and data technologies.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>

          <CallToAction />
        </div>
      </section>
    </>
  );
};

export default Certifications;
