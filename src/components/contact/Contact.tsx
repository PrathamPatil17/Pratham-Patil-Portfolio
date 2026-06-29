import React from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, BookOpenText, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';
import personalInfo from '@/data/personal-info.json';

const socialItems = [
  { icon: Github,       label: 'GitHub',    href: personalInfo.social.github.url },
  { icon: Linkedin,     label: 'LinkedIn',  href: personalInfo.social.linkedin.url },
  { icon: Twitter,      label: 'Twitter/X', href: personalInfo.social.twitter.url },
  { icon: BookOpenText, label: 'Medium',    href: personalInfo.social.medium.url },
  { icon: Mail,         label: 'Email',     href: personalInfo.social.email },
];

const Contact: React.FC = () => {
  return (
    <>
      <hr className="section-divider" />
      <section id="contact" className="relative py-14 sm:py-16 section-alt">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Compact split header */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-label mb-2">
                <MessageSquare size={12} aria-hidden="true" />
                Contact
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                Get in <span className="gradient-text">touch</span>
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-medium text-primary self-start sm:self-auto">
              <span className="relative flex h-2 w-2">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-primary" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for opportunities
            </div>
          </div>

          {/* Unified single card */}
          <div className="overflow-hidden rounded-3xl border border-border glass-card">
            <div className="grid lg:grid-cols-[280px_1fr]">

              {/* LEFT — profile contact panel */}
              <div className="flex flex-col gap-6 border-b border-border/50 bg-card/40 p-6 lg:border-b-0 lg:border-r">

                {/* Name + role */}
                <div>
                  <p className="text-lg font-bold text-foreground">{personalInfo.personal.name}</p>
                  <p className="mt-0.5 text-sm font-medium text-primary">{personalInfo.personal.title}</p>
                </div>

                <hr className="border-border/40" />

                {/* Contact details */}
                <div className="space-y-3">
                  <a
                    href={personalInfo.social.email}
                    className="group flex w-full items-center justify-start gap-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg iconic">
                      <Mail size={13} aria-hidden="true" />
                    </span>
                    <span className="truncate">{personalInfo.personal.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg iconic">
                      <MapPin size={13} aria-hidden="true" />
                    </span>
                    <span>{personalInfo.personal.location}</span>
                  </div>
                </div>

                <hr className="border-border/40" />

                {/* Social icons */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                    Connect
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {socialItems.map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="grid h-8 w-8 place-items-center rounded-full border border-border bg-secondary/50 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                      >
                        <Icon size={14} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response note */}
                <div className="mt-auto rounded-xl border border-border/40 bg-secondary/30 px-4 py-3">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Usually responds within <span className="font-semibold text-foreground">24 hours</span>. Happy to discuss roles, projects, or research ideas.
                  </p>
                </div>
              </div>

              {/* RIGHT — form */}
              <div className="p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
