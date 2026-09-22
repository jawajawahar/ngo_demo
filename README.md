# Everroot Foundation — NGO Website

A premium, editorial-style NGO website built with Next.js (App Router), TypeScript,
Tailwind CSS v4, GSAP + ScrollTrigger, Lenis smooth scrolling, and Lucide React.

> **This is a demonstration site.** Everroot Foundation is a fictional organization.
> All statistics, stories, testimonials, partnerships, and figures are clearly marked
> placeholder/demo content — replace them with real information before launch.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Design system

| Token | Value |
|---|---|
| Deep forest (primary) | `#12372A` |
| Sage (secondary) | `#4F7D61` |
| Gold (accent) | `#F4B942` |
| Warm off-white (background) | `#F8F7F2` |
| Ink (text) | `#111613` |
| Muted | `#6B746E` |
| Display font | DM Serif Display |
| UI / body font | Inter |

12-column grid, 1200–1440px max content width, 8px spacing scale.

## Structure

```
app/                      Routes (App Router) — one folder per page
components/
  layout/                 Navbar, Footer, Container, PageHero
  hero/                   Homepage hero
  sections/               Homepage & inner-page sections
  cards/                  Program, Story, Team cards
  forms/                  Newsletter, Volunteer, Donate, Contact forms
  animations/             GSAP/Lenis/ScrollTrigger primitives
  ui/                     Button, SectionHeading, FaqAccordion, DemoBadge, Logo
data/                     Content as data (programs, stories, impact, campaigns, team, nav)
lib/                      gsap registration, utils
types/                    Shared TypeScript types
```

Content lives in `data/*.ts`, not hardcoded in JSX — swap in real content or wire up
a CMS (Sanity/Strapi) without touching component code.

## Notes

- Photography is sourced from Unsplash as documentary-style placeholders — replace
  with the organization's real photography (`data/images.ts`).
- Donation, volunteer, and contact forms are functional demos (client-side validation
  and state) but do not submit to a real backend or payment processor.
- Respects `prefers-reduced-motion` throughout; animations use `transform`/`opacity`.
