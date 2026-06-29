import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Twitter, MapPin } from 'lucide-react';
import ScrollButton from '../ScrollButton';
import ProfileImage from './ProfileImage';
import personalInfo from '@/data/personal-info.json';

const marqueeTech = [
  'Python', 'LangChain', 'LangGraph', 'RAG Pipelines', 'ChromaDB',
  'FastAPI', 'OpenAI', 'Google Gemini', 'Pinecone', 'RAGAS',
  'Langfuse', 'MLflow', 'Docker', 'GitHub Actions', 'Next.js',
  'Hugging Face', 'Vector Databases', 'Agentic Systems',
];

const socials = [
  { href: personalInfo.social.github.url,   label: `GitHub — ${personalInfo.social.github.username}`,   icon: <Github   size={17} /> },
  { href: personalInfo.social.linkedin.url, label: `LinkedIn — ${personalInfo.social.linkedin.username}`, icon: <Linkedin size={17} /> },
  { href: personalInfo.social.twitter.url,  label: `Twitter — ${personalInfo.social.twitter.username}`,  icon: <Twitter  size={17} /> },
  { href: personalInfo.social.email,        label: `Email — ${personalInfo.personal.email}`,             icon: <Mail     size={17} /> },
];

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden"
    >
      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-35" aria-hidden="true" />

      {/* Single aurora blob — one color, no distraction */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="aurora-blob aurora-float h-[44rem] w-[44rem] -top-40 -left-24" />
        <div className="aurora-blob aurora-float-2 h-[32rem] w-[32rem] top-1/3 -right-20 opacity-[0.07]" />
      </div>

      {/* ── Content grid ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-28 pb-28 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:pt-24 lg:pb-20">

        {/* ── LEFT — text ── */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

          {/* Mobile profile image */}
          <div className="mb-8 lg:hidden">
            <ProfileImage size="small" />
          </div>

          {/* Availability badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-primary" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="mb-5 leading-[1.0] tracking-[-0.03em]">
            {/* Annotation — deliberately small, airy, annotation-weight */}
            <span className="mb-1 block text-lg font-normal tracking-wide text-foreground/30 sm:text-xl">
              Hi, I&apos;m
            </span>
            {/* Display name — the hero, full weight */}
            <span className="block text-[3.2rem] font-bold gradient-text sm:text-[4rem] lg:text-[5rem] xl:text-[5.5rem]">
              {personalInfo.personal.name}
            </span>
          </h1>

          {/* Role chips — both same style */}
          <div className="mb-5 flex flex-wrap justify-center gap-2 lg:justify-start">
            <span className="rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary">
              AI / ML Engineer
            </span>
            <span className="rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-sm font-medium text-foreground/60">
              Software Developer
            </span>
          </div>

          {/* Location */}
          <p className="mb-5 inline-flex items-center gap-1.5 text-sm text-foreground/40">
            <MapPin size={12} aria-hidden="true" />
            {personalInfo.personal.location}
          </p>

          {/* Bio */}
          <p className="mb-8 max-w-lg text-[0.95rem] leading-[1.8] text-foreground/60 sm:text-base">
            {personalInfo.personal.bio}
          </p>

          {/* CTAs */}
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <ScrollButton
              targetId="contact"
              className="glow-button rounded-full px-8 py-3 text-sm font-semibold"
              ariaLabel="Scroll to contact section"
            >
              Get In Touch
            </ScrollButton>
            <a
              href={personalInfo.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-8 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
          </div>

          {/* Social icons */}
          <div className="mt-6 flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT — profile ── */}
        <div className="relative hidden flex-col items-center lg:flex">
          {/* Purple ambient glow */}
          <div
            className="absolute h-72 w-72 rounded-full opacity-25 blur-3xl"
            style={{ background: 'radial-gradient(circle, hsl(160,76%,44%) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          {/* Profile image */}
          <div className="relative z-10">
            <ProfileImage size="large" />
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/40 bg-background/60 py-3 backdrop-blur-sm">
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee gap-10">
            {[...marqueeTech, ...marqueeTech].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="whitespace-nowrap text-[11px] font-medium tracking-widest uppercase text-muted-foreground/70"
                aria-hidden={i >= marqueeTech.length ? 'true' : undefined}
              >
                {tech}
                <span className="ml-10 text-primary/25">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-14 left-1/2 hidden -translate-x-1/2 lg:block">
        <ScrollButton
          targetId="about"
          className="animate-bounce text-muted-foreground/40 transition-colors duration-300 hover:text-primary"
          ariaLabel="Scroll to about section"
        >
          <ArrowDown size={20} />
        </ScrollButton>
      </div>
    </section>
  );
};

export default Hero;
