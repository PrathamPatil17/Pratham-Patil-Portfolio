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

type FormErrors = Partial<Record<keyof FormData, string>>;

const inputClass =
  'w-full rounded-xl border bg-secondary/30 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:bg-secondary/50 focus:ring-1 min-h-[44px]';

const validClass = 'border-border focus:border-primary/50 focus:ring-primary/30';
const errorClass = 'border-destructive/60 focus:border-destructive/80 focus:ring-destructive/30';

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!data.subject.trim()) errors.subject = 'Subject is required.';
  if (!data.message.trim()) errors.message = 'Message is required.';
  return errors;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'Portfolio Inquiry',
    message: '',
  });
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, ...validate({ ...formData, [name]: value }) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, ...validate(formData) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);
    const allErrors = validate(formData);
    setErrors(allErrors);
    if (Object.keys(allErrors).length > 0) {
      const firstErrorField = document.getElementById(Object.keys(allErrors)[0]);
      firstErrorField?.focus();
      return;
    }
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
        setTouched({});
        setErrors({});
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

  const fieldClass = (field: keyof FormData) =>
    `${inputClass} ${touched[field] && errors[field] ? errorClass : validClass}`;

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col gap-4" noValidate>
      <div>
        <p className="text-lg font-semibold text-foreground">Send a message</p>
        <p className="mt-0.5 text-sm text-foreground/45">I&apos;ll reply within 24 hours</p>
      </div>

      {/* Name + Email row */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground/70">
            Name <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Pratham Patil"
            aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
            aria-invalid={!!(errors.name && touched.name)}
            className={fieldClass('name')}
          />
          {errors.name && touched.name && (
            <p id="name-error" role="alert" className="text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground/70">
            Email <span className="text-primary" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
            aria-invalid={!!(errors.email && touched.email)}
            className={fieldClass('email')}
          />
          {errors.email && touched.email && (
            <p id="email-error" role="alert" className="text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm font-medium text-foreground/70">
          Subject <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          autoComplete="off"
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Project collaboration, job opportunity…"
          aria-describedby={errors.subject && touched.subject ? 'subject-error' : undefined}
          aria-invalid={!!(errors.subject && touched.subject)}
          className={fieldClass('subject')}
        />
        {errors.subject && touched.subject && (
          <p id="subject-error" role="alert" className="text-xs text-destructive">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-1 flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground/70">
          Message <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={5}
          placeholder="Tell me about what you're working on, your timeline, and how I can help…"
          aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
          aria-invalid={!!(errors.message && touched.message)}
          className={`${fieldClass('message')} resize-none flex-1`}
        />
        {errors.message && touched.message && (
          <p id="message-error" role="alert" className="text-xs text-destructive">
            {errors.message}
          </p>
        )}
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
