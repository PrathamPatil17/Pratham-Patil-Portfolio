# Pratham Patil - Portfolio

> A modern, fully-responsive portfolio showcasing Generative AI engineering expertise, ML systems, and software development skills.

**Live:** [prathampatil.me](https://prathampatil.me)

## Overview

This portfolio is a comprehensive showcase of professional experience, technical skills, and projects in Generative AI, RAG pipelines, agentic systems, data analytics, and software development. Built with Next.js 15 and featuring a clean dark design with smooth animations.

## Sections

- **Hero** — Name, tagline, bio, social links, resume download
- **About** — My journey, how I work principles, education
- **Skills** — 6 categories covering 45+ technologies
- **Experience** — Professional experience with timeline
- **Projects** — 7 real-world AI/ML and data projects
- **Publications** — Research papers
- **Certifications** — Professional certifications
- **Contact** — Functional contact form with email integration

## Tech Stack

- **Next.js 15** — React framework with App Router & Server Components
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Shadcn UI** — Component library
- **Resend** — Contact form email service
- **Lucide React** — Icons

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PrathamPatil17/portfolio-pratham.git
   cd portfolio-pratham
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   touch .env.local
   ```
   Add the following to `.env.local`:
   ```
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL=your_email@gmail.com
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout & SEO metadata
│   ├── page.tsx            # Homepage
│   └── not-found.tsx       # Custom 404 page
├── components/             # Modular component architecture
│   ├── navigation/         # Navigation bar
│   ├── hero/               # Hero section
│   ├── about/              # About, education, principles
│   ├── skills/             # Skills by category
│   ├── experience/         # Work experience timeline
│   ├── projects/           # Project cards & filters
│   ├── publications/       # Research papers
│   ├── certifications/     # Certificates
│   ├── contact/            # Contact form & info
│   ├── footer/             # Footer
│   └── ui/                 # Reusable UI components
├── data/
│   └── personal-info.json  # All content — edit this to update the site
├── lib/
│   └── actions/contact.ts  # Resend email server action
└── hooks/                  # Custom React hooks
```

## Customization

All site content is managed from a single file:
```
src/data/personal-info.json
```

Update your name, bio, skills, projects, experience, certifications, and social links there — the entire site reflects the changes automatically.

## Contact Form

The contact form uses [Resend](https://resend.com) to send emails. On the free plan, emails can only be sent to the account owner's email. To enable:

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   CONTACT_EMAIL=your_email@gmail.com
   ```

## License

MIT
