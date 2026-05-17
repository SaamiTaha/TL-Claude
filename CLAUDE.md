# Taha Landscaping — Claude Instructions

> Full project context is in `docs/PROJECT.md`. This file covers Claude-specific rules.
> Copilot reads from `.github/copilot-instructions.md` which also references `docs/PROJECT.md`.
> When updating project context, update `docs/PROJECT.md` so both tools stay in sync.

## Read First

Before making any changes, read `docs/PROJECT.md` for the complete project context including:
- Design system tokens and rules
- Architecture patterns and component conventions
- Content rules (no prices, no warranty, no em-dashes, no fake testimonials)
- File locations and build commands
- SEO strategy and keyword system

## Claude-Specific Rules

- NEVER USE: "family business", "passion for landscaping", "we treat your yard like our own"
- Tone: confident, authoritative, craft-focused — never salesy
- No em-dashes in copy
- Strict TypeScript — no `any` types
- `next/image` for ALL images, `next/link` for ALL internal links
- FullYardCTA component on EVERY page — non-negotiable
- ContactSectionDark: pass `flush` prop when directly preceded by FullYardCTA (full variant)
- Service page content: follow `skills/service-page.md` exactly, run quality checklist before presenting
- Keywords: source from `docs/keyword-map.md`, embed in `primaryKeyword` and `supportingKeywords` fields
- Never make changes beyond what was approved; always get explicit approval first
- Keep copy direct and natural — avoid AI-sounding patterns

## Logo Files

- `/public/images/logo.png` — Green logo for light backgrounds (navbar, mobile menu)
- `/public/images/logo-white.png` — White logo for dark backgrounds (footer)

## Environment Variables

Set in `.env.local` (never committed):
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

Must also be configured in Vercel project settings for production.
