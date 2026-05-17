# Copilot Instructions — Taha Landscaping

All project context, design system, architecture rules, content rules, and build instructions are maintained in a single shared file:

**Read `docs/PROJECT.md` before making any suggestions or generating code.**

Key rules to always follow:
- TypeScript strict mode — no `any` types
- `next/image` for all images, `next/link` for all internal links
- Tailwind CSS only — no inline styles, no CSS modules
- Design tokens are in `tailwind.config.ts` under `brand-*` (e.g. `bg-brand-green`, `text-brand-terracotta`)
- Buttons use `rounded-md` — never `rounded-full`
- No em-dashes in copy
- No fabricated content — testimonials, prices, warranty promises are strictly controlled
- `FullYardCTA` component must appear on every page
