// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import { Mail, Phone, MapPin, type LucideIcon } from 'lucide-react';
import personalInfo from '@/data/personal-info.json';

interface ContactItem {
  readonly icon: LucideIcon;
  readonly label: string;
  readonly value: string;
  readonly href: string;
}

const ContactInfo: React.FC = () => {
  const contactDetails: ContactItem[] = [
    { icon: Mail, label: 'Email', value: personalInfo.personal.email, href: personalInfo.social.email },
    { icon: Phone, label: 'Phone', value: personalInfo.personal.phone, href: personalInfo.social.phone },
    { icon: MapPin, label: 'Location', value: personalInfo.personal.location, href: '#' }
  ];

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h3 className="mb-6 text-xl font-semibold text-foreground">Contact Information</h3>
      <div className="space-y-4">
        {contactDetails.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center gap-4 rounded-xl border border-border bg-secondary/30 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50"
            >
              <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl iconic transition-transform duration-300 group-hover:scale-110">
                <Icon size={18} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
                <p className="truncate font-medium text-foreground group-hover:text-primary">{item.value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
