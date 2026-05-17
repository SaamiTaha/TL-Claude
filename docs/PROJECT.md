# Taha Landscaping — Project Context

> Shared context for all AI assistants (Claude, Copilot, etc.). This is the single source of truth.
> Update this file when patterns, architecture, or conventions change.

## Business Context

- Premium landscaping company, Calgary Alberta
- 23+ years in operation
- Licensed, insured, satisfaction guarantee, same-day response
- Positioning: established industry leader
- Target: affluent homeowners + commercial property managers / HOAs
- Tone: confident, authoritative, craft-focused — never salesy
- NEVER USE: "family business", "passion for landscaping", "we treat your yard like our own"
- No em-dashes in copy
- No fabricated testimonials — only the 3 real reviews in the Testimonials component
- No specific prices, no warranty promises, no overpromising on materials/techniques

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** React + TypeScript (strict — no `any`)
- **Styling:** Tailwind CSS + shadcn/ui (Radix primitives)
- **Database:** Supabase (quotes + bookings tables)
- **Hosting:** Vercel
- **Analytics:** GA4 + PostHog
- **Sitemap:** next-sitemap (runs as postbuild)
- **Animations:** Framer Motion via LazyMotion (`lib/motion.ts`)
- **Fonts:** Cormorant Garamond (display) + DM Sans (body)

## Design System — DO NOT MODIFY

| Token | Value | Usage |
|-------|-------|-------|
| bg | #EDE8DF | Warm off-white page base |
| surface | #F7F4EF | Card backgrounds |
| dark | #1E1C18 | Footer, contact section, CTA bands |
| green | #2D4A35 | CTA buttons ONLY |
| terracotta | #A0785A | Eyebrow labels, stars, accents ONLY |
| text | #1C1C1A | Primary body text |
| muted | #7A7570 | Secondary text |
| border | #D9D3C9 | Borders, dividers |

- Display font: Cormorant Garamond — mixed upright/italic headlines (`headline-mixed` class)
- Body font: DM Sans
- Buttons: `rounded-md` (8px) — NEVER `rounded-full`
- Eyebrow labels: `uppercase tracking-widest text-xs text-brand-terracotta font-sans` on every section

## Architecture Rules

- `FullYardCTA` component on EVERY page — non-negotiable
- `ContactSectionDark` on every page that has a footer. Pass `flush` prop when directly preceded by FullYardCTA
- No HTML `<form>` tags — React `onSubmit` only
- `next/link` for ALL internal links — no `<a>` tags
- `next/image` for ALL images
- `generateMetadata()` on every page with dynamic routes; `export const metadata` on static pages
- NAP (name, address, phone) identical in footer on every page
- Strict TypeScript — no `any` types

## Logo Files

- `/public/images/logo.png` — Green logo for light backgrounds (navbar, mobile menu)
- `/public/images/logo-white.png` — White logo for dark backgrounds (footer)

## Page Structure

### Service Pages (`app/services/[service]/page.tsx`)
Section order is defined in `skills/service-page.md`. Non-negotiable order:
1. Breadcrumb + Hero
2. What's Included (6 features)
3. Gallery (ServiceGallery component)
4. Why Choose Us (3 cards)
5. Testimonials (shared component, all 3 real reviews)
6. FAQ (5-6 questions, keyword-rich)
7. FullYardCTA variant="compact"
8. Related Services
9. ContactSectionDark

### Service Content System
- Content split by category: `lib/content/hardscaping.ts`, `softscaping.ts`, `grading.ts`, `lawn.ts`
- Merged in `lib/service-content.ts` via `getServiceContent(slug)`
- Each entry includes `primaryKeyword`, `supportingKeywords` from `docs/keyword-map.md`
- Reference example: fence installation in `lib/content/hardscaping.ts`
- Quality checklist in `skills/service-page.md`

### Gallery System
- Images organized by category: `/public/gallery/[category-slug]/` (5 folders)
  - `softscaping-garden-design`, `hardscaping-outdoor-living`, `grading-drainage-irrigation`, `calgary-lawn-services`, `full-yard-landscaping`
- Manifest: `/public/gallery/gallery-manifest.json` (auto-generated)
- Prebuild script: `scripts/generate-gallery-manifest.ts`
- GalleryGrid component accepts `category` prop for filtering
- ServiceGallery reads images from the category folder at build time

## Key File Locations

| Purpose | Path |
|---------|------|
| Service data (slugs, categories) | `lib/service-data.ts` |
| Service content (SEO, features, FAQs) | `lib/service-content.ts` |
| Content by category | `lib/content/*.ts` |
| Keyword map | `docs/keyword-map.md` |
| Service page skill/template | `skills/service-page.md` |
| Gallery manifest script | `scripts/generate-gallery-manifest.ts` |
| Animation utilities | `lib/motion.ts` |
| Navbar | `components/layout/Navbar.tsx` |
| Footer | `components/layout/Footer.tsx` |
| Contact form | `components/sections/ContactForm.tsx` |
| Full yard CTA | `components/sections/FullYardCTA.tsx` |

## SEO Strategy

- Core 30 method — 31 pages total
- One primary keyword per page — zero cannibalization
- Content silo: homepage -> categories -> services
- Keywords sourced from `docs/keyword-map.md`
- Primary keyword must appear in: metaTitle, metaDescription, heroIntro, at least one FAQ

## Supabase Tables

- **quotes:** id, name, phone, email, service, preferred_date, message, source_page, created_at
- **bookings:** id, name, phone, email, service, preferred_date, preferred_time, notes, status, created_at

## Environment Variables

Required in `.env.local` (never commit this file):
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

These must also be set in Vercel project settings for production builds.

## Build & Deploy

```bash
npm run dev          # Local development
npm run build        # Production build (runs prebuild manifest + postbuild sitemap)
npm run lint         # ESLint
npx vercel           # Preview deployment
npx vercel --prod    # Production deployment
```

- Prebuild: `npm run generate-manifest` generates gallery manifest
- Postbuild: `next-sitemap` generates sitemap
- Deploy target: Vercel (project already linked)

## Content Rules (for generating service page copy)

- No specific dollar amounts or price ranges
- No warranty promises (no durations, no "guaranteed")
- No overpromising on materials or techniques
- No services not listed in `service-data.ts`
- No "family business", "passion for landscaping", "we treat your yard like our own"
- No em-dashes
- No fabricated testimonials
- FAQ answers stay broad/vague on cost, timeline, warranty
- metaDescription under 160 characters
