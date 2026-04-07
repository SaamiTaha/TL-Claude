# Taha Landscaping: Content & UI Implementation (Continuation)

You are continuing a multi-session build of a premium Calgary landscaping website. Read ALL project files before making any changes. The previous session completed the homepage. You are picking up to finish the remaining 47 pages.

---

## CRITICAL RULES (learned from previous session)

1. **NEVER make changes without explicit approval.** Present your proposal, wait for a "go ahead", then implement. No exceptions.
2. **NEVER use em-dashes (—) in any copy.** The owner flagged this as making the site "look like AI slop." Use periods, commas, colons, or restructured sentences instead.
3. **Writing tone:** The owner is a 49-year-old landscaping professional who serves luxury clients. Copy must sound like a seasoned tradesman wrote it: direct, confident, craft-focused. No filler, no flowery language, no AI patterns. Ask yourself "would a 49-year-old tradesman say this?" before writing any copy.
4. **NEVER use:** "family business", "passion for landscaping", "we treat your yard like our own", or any salesy/folksy language.
5. **Heading fonts:** All h1-h4 tags get `font-family: var(--font-display)` via CSS. If you change a heading to a `<p>` or `<div>`, the font breaks. Never change heading tag types without understanding this.
6. **No category landing pages.** Categories (Lawn Services, Softscaping, Hardscaping, Grading) are sections within the Homepage and Services Hub only. There are NO standalone `/services/lawn-services` pages.

---

## Project State

### What's DONE (homepage — do not modify unless asked)
- **Hero:** SR-only H1 "Landscaping Calgary" for SEO + visible H2 "Calgary's Leading Luxury Landscaping". Full viewport height (`h-[calc(100vh-72px)]`), animated scroll indicator, "Get a Quote" + "View Our Work" CTAs.
- **TrustBar:** 4 trust signals (5-Star, Licensed, Warranty, 500+ Projects)
- **ServiceCategories:** 4 category sections with real copy, all left-aligned, links to all 30 service pages
- **FullYardCTA (full variant):** Frosted glass card over background image, "Explore Full Yard Services" + "Call Now" buttons. Sits AFTER ServiceCategories on homepage.
- **WhyUs:** 6 points, all real content
- **PortfolioStrip:** 8-image grid (needs real images later)
- **Testimonials:** 3 REAL Google reviews (Zach Newman, Patricia Gottlieb, Melissa Hartwell)
- **ServiceAreaTeaser:** 15 Calgary neighborhoods + 6 surrounding communities
- **ProcessSteps:** 4-step process (Consultation → Design → Build → Completion)
- **FAQ:** 7 questions with FAQ schema for rich snippets
- **ContactSectionDark:** Contact info cards on left, single unified ContactForm on right, Google Maps placeholder below, Footer at bottom
- **No compact FullYardCTA on homepage** (removed to avoid collision with contact section)
- **No compact FullYardCTA on contact page** (not needed there)
- **Footer:** Category links point to `/services#slug` anchors (not standalone pages)
- **All em-dashes removed** from every component

### What's NOT done (your job)

**Tier 1 — Priority Pages:**
1. `/services/full-yard-landscaping-calgary` — PRIMARY CONVERSION PAGE. Currently has placeholder copy in all sections. Needs 1000-1500 words.
2. `/services` (Services Hub) — Category descriptions are placeholder. Needs 800-1200 words.

**Tier 2 — 30 Service Pages (all via `/services/[service]`):**
Every section is placeholder template. Each needs 500-700 words. All use the same dynamic route component at `app/services/[service]/page.tsx`.
- Lawn Services (7): lawn-mowing-maintenance, lawn-fertilization-weed-control, lawn-aeration-overseeding, sod-installation, artificial-turf-installation, lawn-dethatching, seasonal-lawn-cleanups
- Softscaping (6): garden-bed-design-installation, plant-shrub-tree-installation, hedge-shrub-trimming, mulching-decorative-rock, seasonal-annual-planting, tree-trimming-removal
- Hardscaping (10): patio-design-installation, walkway-pathway-installation, retaining-wall-construction, fence-installation, deck-construction, outdoor-steps-staircase, outdoor-kitchen-fire-pit, pergola-shade-structures, landscape-lighting, stamped-decorative-concrete
- Grading & Drainage (7): lot-yard-grading, bobcat-skid-steer-services, french-drain-drainage, downspout-surface-water, sprinkler-system-installation, irrigation-repair-winterization, smart-irrigation-controllers

**Tier 3 — Supporting Pages:**
3. `/about` — All sections placeholder
4. `/gallery` — Placeholder copy, needs real images later
5. `/contact` — Very thin (just Navbar + ContactSectionDark), needs a proper page hero + intro content

**Tier 4 — Service Area Pages (11 total):**
6. `/service-areas` — Hub page, placeholder copy
7. `/service-areas/[suburb]` — 10 suburb pages, all placeholder (suburbs defined in service-areas hub)

**Tier 5 — Utility:**
8. `/thank-you` — Placeholder copy, needs conversion tracking

---

## Workflow for Each Page

The owner will provide:
- The page to work on
- 2 competitor URLs (or their content)

You will:
1. Read the keyword bank at `docs/keyword-map.md` — extract the PRIMARY and SUPPORTING keywords for that specific page
2. Analyze the competitors (structure, depth, keywords, gaps)
3. Generate content that matches/exceeds competitors while staying truthful
4. Review all UI components for premium quality
5. Present everything for approval in the output format below
6. **Wait for explicit approval before implementing**

### Output Format
```
## Page: [Name & Route]

### Competitor Analysis
[Strengths, gaps, our strategy]

### Keywords (from bank)
Primary: [keyword]
Secondary: [keywords]
Meta title: [suggested]
Meta description: [suggested, ~155 chars]

### Proposed Content
[Section by section with actual copy]

### UI Changes (if any)
[Component] — what changes and why

### Ready for implementation? Awaiting your approval.
```

---

## Key Files to Know

| File | Purpose |
|------|---------|
| `docs/keyword-map.md` | Keyword bank — READ THIS FIRST. Primary + supporting keywords for every page. |
| `lib/service-data.ts` | All 30 services + categories + Featured Service. Slugs have `-calgary` suffix. |
| `app/services/[service]/page.tsx` | Dynamic service page template. Currently all [PLACEHOLDER]. |
| `app/services/full-yard-landscaping-calgary/page.tsx` | Static page for primary conversion. |
| `app/services/page.tsx` | Services hub. Category sections with jump links. |
| `components/sections/ContactForm.tsx` | Unified form. Supports dark/light variants + preselectedService prop. |
| `components/sections/FullYardCTA.tsx` | Two variants: "full" (frosted card over bg image) and "compact" (dark banner). |
| `components/sections/ContactSectionDark.tsx` | Dark contact section with info cards + form + map placeholder + footer. |
| `components/sections/Testimonials.tsx` | 3 real Google reviews. |
| `app/globals.css` | Contains `headline-mixed` class and scroll-bounce animation. |
| `CLAUDE.md` | Project instructions — design system, architecture rules, brand voice. |

## Real Google Reviews (use on service pages as relevant)

```
Omer Yagoub: "Taha Landscaping was recommended to us by a friend and we couldn't be happier with the results. Kal and the team were skilled, efficient, and respectful by offering great suggestions and delivering beyond our expectations."

Zach Newman: "Kal (owner) was quick in responding and always made himself available to discuss our landscaping. The work he did was extremely high quality, quick and priced fairly. We'll be using Taha again next summer." (Note: installed black chain link fencing, gates and sod)

Patricia Gottlieb: "Khal and Sammy were absolutely terrific. From design to implementation, they were punctual, accommodating, helpful and talented. We have two beautiful gardens to show for their efforts."

Melissa Hartwell: "We have had a fence built and it was perfect, on time and great value! And we have had a 750 square foot stone patio that has increased our outdoor living space and we love it!"

Mosab Said: "Taha Landscaping turned our plain yard into something truly special. The crew worked with care, and exceeded expectations."

Moad Belanteur: "Kal and his team were super easy to deal with, friendly, professional, and really cared about getting things done right. They handled everything smoothly and the end result turned out even better than I expected."

Ebrahim Taha: "The team was incredibly professional and knowledgeable. They listened carefully to my vision for the yard, offered brilliant suggestions... Not only did they transform my outdoor space into a beautiful oasis, but they also completed the project on time and within budget."

Araiz Asad: "Sammy was easy to work with and listened to exactly what I wanted. The crew showed up on time and did a great job. The new fence looks fantastic!"

Sure Color: "Built my fence, quality work and affordable price."

Moez Arhuoma: "Great crew and professional service. Great to work with and their timelines are great."

Maher Edriss: "Great service and pricing. Honest people and nowhere better to go for any landscaping needs."

Seham Hammoud: "If you are looking for quality work, professional service and an overall well-done yard project, Taha Landscaping comes with years of experience and knowledge that will exceed your expectations!"

Ahmedh Shamsudeen: "Kal and his crew were great. Would definitely use them for any of my future projects."

Ibbysannin: "Great company. Did a marvellous job!"
```

Match reviews to service pages by relevance (e.g., Melissa's review on fence and patio pages, Zach's on fencing/sod pages, Patricia's on garden pages).

## Design System Quick Reference
- bg: `#EDE8DF` | surface: `#F7F4EF` | dark: `#1E1C18` | green: `#2D4A35` | terracotta: `#A0785A`
- Display: Cormorant Garamond (mixed upright/italic via `headline-mixed` + `<em>`)
- Body: DM Sans
- Buttons: `rounded-md` only. NEVER `rounded-full`.
- Eyebrows: `uppercase tracking-widest text-[13px] text-brand-terracotta font-sans`

## Recommended Page Order
1. Full Yard Landscaping (primary conversion page)
2. Services Hub
3. 30 service pages (batch by category)
4. About, Gallery, Contact
5. Service Areas hub + 10 suburb pages
6. Thank You

---

**Start by reading `docs/keyword-map.md` and `lib/service-data.ts`, then confirm you're ready for the first page.**
