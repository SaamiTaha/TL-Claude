# Image Optimization Guide

## Optimal Image Specifications

### Format & Quality
- **Primary format:** WebP (best compression)
- **Fallback format:** JPEG (for older browsers)
- **Quality setting:** 75-80% (excellent compression with minimal quality loss)
- **Compression:** Lossless PNG → WebP saves 25-35% file size

### Image Sizes by Context

| Context | Dimensions | File Size Target | Use Case |
|---------|-----------|------------------|----------|
| **Thumbnail** | 300×300px | < 30KB | Gallery grid previews, portfolio strip |
| **Gallery Full** | 1200×800px | 80-150KB | Service gallery display |
| **Hero/CTA Background** | 1920×1080px | 150-250KB | Full-screen hero section |
| **Category Preview** | 600×400px | 40-60KB | Service category cards |
| **Mobile Hero** | 1080×720px | 80-120KB | Mobile hero optimization |

### Responsive Image Strategy
For each image, generate multiple sizes:
```
original.jpg (source)
├── optimized-thumb.webp (300×300)
├── optimized-gallery.webp (1200×800)
├── optimized-gallery@2x.webp (2400×1600) — optional for high-DPI
└── optimized-hero.webp (1920×1080)
```

## Image Organization

### Directory Structure
```
public/
├── images/
│   ├── hero/                    # Homepage hero section
│   │   └── hero-calgary-landscaping.webp
│   ├── category-thumbnails/     # Optional: category preview images
│   │   ├── softscaping-garden-design.webp
│   │   ├── hardscaping-outdoor-living.webp
│   │   ├── grading-drainage-irrigation.webp
│   │   └── calgary-lawn-services.webp
│   └── cta/                     # Full yard landscaping CTA
│       └── calgary-full-yard-transformation.webp
│
└── gallery/
    ├── softscaping-garden-design/
    ├── hardscaping-outdoor-living/
    ├── grading-drainage-irrigation/
    ├── calgary-lawn-services/
    └── full-yard-landscaping/
        ├── calgary-keyword-0-thumb.webp
        ├── calgary-keyword-0-gallery.webp
        └── ...
```

## Image Naming Convention

**Format:** `calgary-[keyword]-[index].[format]`

**Examples:**
- `calgary-patio-design-0-gallery.webp`
- `calgary-lawn-mowing-2-thumb.webp`
- `calgary-deck-construction-5-gallery.webp`

**Rules:**
- Start with "calgary-" for local SEO
- Use primary service keyword
- Include size suffix (-thumb, -gallery, -hero)
- Lowercase, hyphen-separated

## Metadata System

### Keywords by Category

**Softscaping & Garden Design:**
- garden design, sod installation, plant installation
- shrub trimming, mulching, seasonal planting, tree removal, artificial turf

**Hardscaping & Outdoor Living:**
- patio design, walkway installation, retaining wall
- fence installation, deck construction, pergola, fire pit, outdoor kitchen, landscape lighting

**Grading, Drainage & Irrigation:**
- grading, drainage, french drain, sprinkler system
- irrigation, downspout management, surface water

**Calgary Lawn Services:**
- lawn mowing, lawn maintenance, fertilization, aeration
- overseeding, dethatching, weed control, seasonal cleanup

**Full Yard Landscaping:**
- full yard transformation, complete landscaping, yard design
- property transformation, landscape design

### Location Metadata

Each image is randomly assigned one of 20 Calgary neighborhoods for meta tags:
- Aspen Woods, Bridgeland, Cranston, Dalhousie, Elbow Park
- Fairview, Garrison Woods, Hillhurst, Inglewood, Kensington
- Lake Bonavista, Mount Royal, Panorama Hills, Ramsay, Signal Hill
- Tuscany, University District, Varsity, West Springs, Woodbine

### Alt-Text Format

**Template:** `[keyword] project in [location], Calgary by Taha Landscaping`

**Examples:**
- `Patio design project in Mount Royal, Calgary by Taha Landscaping`
- `Lawn maintenance service in Signal Hill, Calgary by Taha Landscaping`
- `Deck construction in Aspen Woods, Calgary by Taha Landscaping`

## Performance Considerations

### Core Web Vitals Impact
- **LCP (Largest Contentful Paint):** Optimize hero image < 2.5s
  - Use `priority` prop on next/image for hero
  - Serve WebP format
  - Set explicit width/height to prevent layout shift

- **CLS (Cumulative Layout Shift):** Use `aspect-ratio` on all image containers
  - Gallery grid: `aspect-[4/3]`
  - Hero section: `aspect-[16/9]`

- **FID (First Input Delay):** Not directly affected by images

### SEO Benefits
- Keyword-rich filenames improve image search visibility
- Alt-text with location + service + brand improves local SEO
- Structured metadata enables rich snippets
- Proper image sizing improves overall page speed (Core Web Vitals)

## Optimization Workflow

### 1. Install Dependencies
```bash
npm install sharp piexif
npm install --save-dev @types/sharp
```

### 2. Run Optimization Script
```bash
npx ts-node scripts/optimize-images.ts
```

This will:
- Convert all gallery images to WebP
- Generate thumbnail and gallery versions
- Create alt-text with keywords and locations
- Save metadata to `public/image-metadata.json`
- Randomize location assignment per image

### 3. Upload to Vercel Blob (Next Step)
After optimization, use the upload API to move images to Vercel Blob:
```bash
npx ts-node scripts/upload-to-blob.ts
```

## Where to Add Images

### Hero Section
**File:** `/public/images/hero/hero-calgary-landscaping.webp`
**Component:** `components/sections/Hero.tsx` (line 9)
**Dimensions:** 1920×1080px
**Content:** Full-yard landscaping or premium project showcase
**Drag-drop area:** Coming soon

### Full Yard CTA Section
**File:** `/public/images/cta/calgary-full-yard-transformation.webp`
**Component:** `components/sections/FullYardCTA.tsx` (line 46)
**Dimensions:** 1920×1080px
**Content:** Complete yard transformation (before/after preferred)
**Drag-drop area:** Coming soon

### Portfolio Strip (Homepage)
**Files:** Use gallery images from each category (auto-selected)
**Component:** `components/sections/PortfolioStrip.tsx`
**Dimensions:** 1200×800px (will be cropped to 4:3 aspect ratio)
**Count:** 8 images (2 per category)
**Selection:** Updated in component code

### Category Thumbnails (Optional)
**Directory:** `/public/images/category-thumbnails/`
**Files:** One 600×400px image per category
**Component:** `ServiceCategories.tsx` (enhancement)
**Current state:** Using icon-only design (no images)

## Tools

- **Image Editor:** Pixlr, Figma, Adobe Photoshop
- **Batch Conversion:** ImageMagick, XnConvert
- **Optimization:** TinyPNG (online), pngquant (CLI)
- **EXIF Editor:** exiftool (command line)
