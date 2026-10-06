# Fermor Homepage

A polished, production-ready homepage for **Fermor** — a personal finance platform making financial decisions simpler, clearer, and more accessible for India.

---

## Live Demo

[Deploy to Vercel — see instructions below](#deployment)

---

## Tech Stack

| Tool | Version | Why |
|------|---------|-----|
| [Next.js](https://nextjs.org/) | 16 (App Router) | Production-grade React framework with SSR, routing, and font optimization |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety across all components |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first CSS for rapid, consistent styling |
| [Google Fonts](https://fonts.google.com/) | — | **Inter** (body) + **Sora** (headings) for premium typography |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd fermor-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with fonts & SEO metadata
│   ├── globals.css      # Design system: tokens, animations, utilities
│   └── page.tsx         # Homepage — composes all sections
└── components/
    ├── Navbar.tsx           # Scroll-aware nav with glassmorphism + mobile menu
    ├── HeroSection.tsx      # Hero + waitlist form + live dashboard preview
    ├── TrustBar.tsx         # 4 trust pillars + scrolling marquee
    ├── CalculatorsSection.tsx  # Live SIP / EMI / FD / Tax calculators
    ├── AskSection.tsx       # AI "ask anything" demo with typewriter
    ├── HowItWorksSection.tsx   # 4-step process + stats
    ├── TestimonialsSection.tsx # User reviews in masonry layout
    ├── WaitlistSection.tsx  # CTA with email capture
    └── Footer.tsx           # Links, brand, disclaimer
```

---

## Design Decisions

### Visual Direction
I went with a **dark-first** design anchored in `#0D0F10` — the same ground colour used by Fermor's existing product. Fermor's brand green (`#75FB90`) is used sparingly as the primary accent: CTAs, highlights, active states, and data callouts. This keeps it punchy without becoming noisy.

Typography uses **Sora** for headings (rounded, modern, trustworthy) and **Inter** for body copy (legible, neutral, familiar). Both are variable-weight Google Fonts loaded via `next/font`.

### Section Strategy
The page follows a deliberate narrative arc:
1. **Hero** — What is Fermor and why should I care? (clear value prop + waitlist)
2. **Trust bar** — Address the natural scepticism around financial apps
3. **Calculators** — Prove the product works, *right now*, without asking for anything
4. **Ask** — Differentiate with AI — the future direction of the platform
5. **How it works** — Remove friction by making the flow obvious
6. **Testimonials** — Social proof from real-feeling Indian users
7. **Waitlist CTA** — Convert interest into early access sign-ups

### Key Technical Choices

**All calculator math runs in the browser.** This is a core Fermor brand promise. No data is sent to any server — the `compute` functions in `CalculatorsSection.tsx` are pure JavaScript.

**Range sliders with live updates** make the calculators tactile and satisfying. Users can drag to explore scenarios rather than typing individual numbers.

**Typewriter effect in AskSection** simulates an AI response to give a sense of what the Fermor AI product will feel like, without shipping a real LLM integration.

**Scroll-aware navbar** transitions from transparent → glassmorphism as the user scrolls, keeping the interface clean at the top while remaining navigable throughout.

**Responsive by default.** Every section is tested at 375px (iPhone SE), 768px (tablet), and 1440px (desktop). Tailwind's `sm:` / `md:` / `lg:` breakpoints are used consistently.

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or import the repository directly on [vercel.com](https://vercel.com/new).

### Netlify

```bash
npm run build
# Deploy the .next folder or connect via Git on netlify.com
```

---

## What I'd Build Next

- **Scroll-triggered animations** using Framer Motion or GSAP (intentionally kept off to avoid bundle bloat at MVP)
- **Real waitlist backend** with a simple API route posting to a database or email provider
- **Dark/light theme toggle** — Fermor's existing site uses a light mode; a theme switch would serve both audiences
- **More calculators** — PPF, NPS, Capital Gains (STCG/LTCG), HRA
- **Blog section** — surfacing Fermor's existing content to drive SEO

---

## License

MIT
