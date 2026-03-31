# Project: [Business Name] — Calgary Landscaping Website

## Business Context
- Premium landscaping company, Calgary Alberta
- 23+ years in operation
- Licensed, insured, satisfaction guarantee, same-day response
- Positioning: established industry leader
- NEVER USE: "family business", "passion for landscaping", "we treat your yard like our own"
- Target: affluent homeowners + commercial property managers / HOAs
- Tone: confident, authoritative, craft-focused — never salesy

## Tech Stack
- Next.js 14 App Router
- React + TypeScript (strict — no `any`)
- Tailwind CSS + shadcn/ui
- Supabase (quotes + bookings tables)
- Vercel hosting
- GA4 + PostHog analytics
- next-sitemap
- Fonts: Cormorant Garamond (display) + DM Sans (body)

## Design System — DO NOT MODIFY
- bg: #EDE8DF (warm off-white — page base)
- surface: #F7F4EF (card backgrounds)
- dark: #1E1C18 (footer + contact section ONLY)
- green: #2D4A35 (CTA buttons ONLY)
- terracotta: #A0785A (eyebrow labels, stars, accents ONLY)
- text: #1C1C1A (primary body)
- muted: #7A7570 (secondary text)
- border: #D9D3C9
- Display font: Cormorant Garamond — mixed upright/italic headlines are the visual signature
- Body font: DM Sans
- Buttons: rounded-md (8px) — NEVER rounded-full
- Eyebrow labels: uppercase tracking-widest text-xs text-brand-terracotta DM Sans — on every section

## Architecture Rules
- FullYardCTA component on EVERY page — non-negotiable
- ContactSectionDark on: homepage bottom, /services/full-yard-landscaping bottom, /contact page
- No HTML <form> tags — React onSubmit only
- next/link for ALL internal links — no <a> tags
- next/image for ALL images
- generateMetadata() on every page
- NAP identical in footer on every page
- Strict TypeScript — no `any` types

## Primary Conversion Page
/services/full-yard-landscaping
This is the most important page. FullYardCTA links here from every other page.

## Gallery System
- Images live in /public/gallery/[service-slug]/
- Manifest: /public/gallery/gallery-manifest.json
- Auto-regenerates on every build via prebuild script
- ServiceGallery reads manifest — falls back to full gallery preview if folder empty

## SEO Strategy
- Core 30 method — 31 pages total
- One primary keyword per page — zero cannibalization
- Content silo structure — homepage → categories → services
- Skill files in /skills/ define structure for every page type

## Supabase Tables
- quotes: id, name, phone, email, service, preferred_date, message, source_page, created_at
- bookings: id, name, phone, email, service, preferred_date, preferred_time, notes, status, created_at

## Environment Variables Needed
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
