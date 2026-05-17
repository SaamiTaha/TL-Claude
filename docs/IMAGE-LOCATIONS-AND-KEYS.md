# Images Required - Directory & Checklist

## 📁 Directory Structure

```
public/
├── images/
│   ├── hero/
│   │   └── hero-calgary-landscaping.webp         (1920×1080px)
│   ├── cta/
│   │   └── calgary-full-yard-transformation.webp (1920×1080px)
│   └── service-thumbnails/
│       ├── sod-installation.webp                 (400×300px)
│       ├── patio-design-installation.webp        (400×300px)
│       ├── ... (30 total, one per service)
│       └── seasonal-lawn-cleanups.webp           (400×300px)
│
└── gallery/
    ├── softscaping-garden-design/
    ├── hardscaping-outdoor-living/
    ├── grading-drainage-irrigation/
    ├── calgary-lawn-services/
    └── full-yard-landscaping/
        └── (your 309 existing images here)
```

## ✅ Complete Image Checklist

### Required Images (2 total)

- [ ] **Homepage Hero** 
  - Path: `/public/images/hero/hero-calgary-landscaping.webp`
  - Dimensions: 1920×1080px
  - Component: `Hero.tsx`
  - Content: Premium landscaping project or yard showcase

- [ ] **Full Yard CTA Background**
  - Path: `/public/images/cta/calgary-full-yard-transformation.webp`
  - Dimensions: 1920×1080px
  - Component: `FullYardCTA.tsx`
  - Content: Complete yard transformation

### Service Thumbnails (30 total - used in "Explore More" section)

Each service page shows 4 related services with thumbnail images. These are displayed on every service page in the "Explore More" section.

- [ ] **Service Thumbnails (one for each service)**
  - Path: `/public/images/service-thumbnails/[service-slug].webp`
  - Dimensions: 400×300px (4:3 aspect ratio)
  - Component: `app/services/[service]/page.tsx` (line 214)
  - Current state: Using placeholder images
  - Content: Representative project for that service

**Services that need thumbnails (30 total):**
```
Softscaping & Garden Design (8):
- sod-installation
- artificial-turf-installation
- garden-bed-design-installation
- plant-shrub-tree-installation
- hedge-shrub-trimming
- mulching-decorative-rock
- seasonal-annual-planting
- tree-trimming-removal

Hardscaping & Outdoor Living (10):
- patio-design-installation
- walkway-pathway-installation
- retaining-wall-construction
- fence-installation
- deck-construction
- outdoor-steps-staircase
- outdoor-kitchen-fire-pit
- pergola-shade-structures
- landscape-lighting
- stamped-decorative-concrete

Grading, Drainage & Irrigation (7):
- lot-yard-grading
- bobcat-skid-steer-services
- french-drain-drainage
- downspout-surface-water
- sprinkler-system-installation
- irrigation-repair-winterization
- smart-irrigation-controllers

Calgary Lawn Services (5):
- lawn-mowing-maintenance
- lawn-fertilization-weed-control
- lawn-aeration-overseeding
- lawn-dethatching
- seasonal-lawn-cleanups
```

### Gallery Images (Already have 309)

- ✅ Existing: 309 images across 5 category folders
- Location: `/public/gallery/[category]/`
- Current use: `ServiceGallery.tsx` on service pages
- Status: Can stay as-is OR optimize to WebP for better performance

---

## 🔑 Environment Variables - Where to Get Them

### 1. **NEXT_PUBLIC_SUPABASE_URL** & **NEXT_PUBLIC_SUPABASE_ANON_KEY**

**Where to get:**
1. Go to https://supabase.com (sign in)
2. Select your project
3. Click "Settings" → "API"
4. Copy:
   - `URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Note:** These are safe to expose (NEXT_PUBLIC prefix means public). They're used for database queries and auth, but Supabase's row-level security (RLS) restricts access.

### 2. **NEXT_PUBLIC_GA_MEASUREMENT_ID**

**Where to get:**
1. Go to https://analytics.google.com
2. Select your property
3. Go to "Admin" → "Data Streams"
4. Click your web stream
5. Copy the "Measurement ID" (starts with G-)

### 3. **NEXT_PUBLIC_POSTHOG_KEY** & **NEXT_PUBLIC_POSTHOG_HOST**

**Where to get:**
1. Go to https://posthog.com (sign in)
2. Go to "Settings" → "Project settings"
3. Copy "Project API Key" → `NEXT_PUBLIC_POSTHOG_KEY`
4. `NEXT_PUBLIC_POSTHOG_HOST` is always: `https://app.posthog.com`

---

## 🔐 Environment Variables - Security Best Practices

### Local Development (.env.local)

```bash
# .env.local (DO NOT COMMIT - in .gitignore)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1...
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Optional for Vercel Blob (needed for image upload scripts)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxx
```

**Important:** `.env.local` is in `.gitignore` - it won't be committed to GitHub.

### Production Deployment (Vercel)

**Your `.env.local` is NOT used in production.** Instead:

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Environment Variables"
3. Add each variable:
   - For each variable, set it for: **Preview** + **Production**
   - Copy from your `.env.local`

**Example:**
```
NEXT_PUBLIC_SUPABASE_URL = https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1...
NEXT_PUBLIC_GA_MEASUREMENT_ID = G-XXXXXXXXXX
NEXT_PUBLIC_POSTHOG_KEY = phc_xxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST = https://app.posthog.com
```

### Why "NEXT_PUBLIC" is Safe

- `NEXT_PUBLIC_*` variables are **embedded in client-side code** and visible in the browser
- These are intentionally public keys designed for client use
- Sensitive secrets (API keys, database passwords) should NOT have `NEXT_PUBLIC_` prefix
- Your Supabase key is safe because it only has SELECT/INSERT permissions via Row Level Security (RLS)

---

## ✅ Deployment Verification Checklist

Before deploying:

1. **Local Development**
   - [ ] Create `.env.local` with all keys
   - [ ] Run `npm run dev`
   - [ ] Test homepage loads (hero image shows)
   - [ ] Test full yard CTA section loads
   - [ ] Test gallery images load on service pages
   - [ ] Test contact form (submits to Supabase)

2. **Vercel Environment Setup**
   - [ ] Go to Vercel Dashboard → Project Settings → Environment Variables
   - [ ] Add all 5 variables for **Preview** and **Production**
   - [ ] Do NOT add `.env.local` file to repo
   - [ ] Do NOT commit API keys to GitHub

3. **After Deployment**
   - [ ] Visit production URL (https://tahalandscaping.ca)
   - [ ] Test hero image loads
   - [ ] Test CTA section loads
   - [ ] Test form submission works
   - [ ] Check Vercel logs for errors (Deployments → Runtime Logs)

---

## 🚀 Steps to Get Website Live

1. **Add images to folders** (see directory structure above)
   - Add 2 required images (hero + CTA)
   - Optionally add 4 category thumbnails
   - Your 309 gallery images already exist

2. **Set up .env.local** locally
   ```bash
   # Copy template from CLAUDE.md
   # Get keys from services above
   ```

3. **Test locally**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   # Verify everything loads and works
   ```

4. **Set up Vercel environment variables**
   - Go to Vercel Dashboard
   - Settings → Environment Variables
   - Add same 5 variables

5. **Push to GitHub & deploy**
   ```bash
   git add .
   git commit -m "add environment variable configuration"
   git push origin main
   ```

6. **Vercel auto-deploys** when you push to main
   - Check Dashboard for build status
   - Visit deployed URL when ready
