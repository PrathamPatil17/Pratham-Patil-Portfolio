'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail, type ContactFormData } from '@/lib/actions/contact';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const inputClass =
  'w-full rounded-xl border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:border-primary/50 focus:bg-secondary/50 focus:ring-1 focus:ring-primary/30';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'Portfolio Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail(formData as ContactFormData);
      if (result.success) {
        toast({
          title: 'Message sent!',
          description: result.message,
          action: <CheckCircle className="h-5 w-5 text-green-500" />,
        });
        setFormData({ name: '', email: '', subject: 'Portfolio Inquiry', message: '' });
      } else {
        toast({
          title: 'Failed to send',
          description: result.message,
          variant: 'destructive',
          action: <AlertCircle className="h-5 w-5 text-red-500" />,
        });
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col gap-4">
      <div>
        <p className="text-lg font-semibold text-foreground">Send a message</p>
        <p className="mt-0.5 text-sm text-foreground/45">I&apos;ll reply within 24 hours</p>
      </div>

      {/* Name + Email row */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground/70">
            Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Pratham Patil"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground/70">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm font-medium text-foreground/70">
          Subject <span className="text-primary">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project collaboration, job opportunity…"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div className="flex flex-1 flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground/70">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell me about what you're working on, your timeline, and how I can help…"
          className={`${inputClass} resize-none flex-1`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="glow-button flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
