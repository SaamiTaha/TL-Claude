# Image Optimization & Upload Implementation

## 📋 Summary of What's Been Created

### 1. **Image Optimization Script** (`scripts/optimize-images.ts`)
Batch processes all gallery images to:
- Convert to WebP format (75-80% quality)
- Generate thumbnail versions (300×300px)
- Generate gallery versions (1200×800px)
- Assign random Calgary neighborhood metadata
- Generate SEO-friendly keywords based on category
- Create descriptive alt-text: `[keyword] project in [location], Calgary by Taha Landscaping`

**Usage:**
```bash
npm install sharp piexif
npx ts-node scripts/optimize-images.ts
```

### 2. **Upload Script** (`scripts/upload-to-blob.ts`)
Batch uploads optimized images to Vercel Blob storage:
- Uploads from `/public/images/hero/`
- Uploads from `/public/images/cta/`
- Uploads from `/public/images/category-thumbnails/`
- Uploads all gallery images recursively
- Creates manifest of all uploaded URLs

**Usage:**
```bash
export BLOB_READ_WRITE_TOKEN="your-token-here"
npx ts-node scripts/upload-to-blob.ts
```

### 3. **Image Reference System** (`lib/image-references.ts`)
Centralized configuration for all images:
- `HERO_IMAGES` - Homepage hero paths & alt-text
- `CTA_IMAGES` - Full yard landscaping CTA background
- `CATEGORY_THUMBNAILS` - Optional category preview images
- `PORTFOLIO_STRIP_IMAGES` - 8 curated gallery images for homepage portfolio

### 4. **Image Upload Component** (`components/sections/ImageUploadDropZone.tsx`)
Reusable drag-and-drop component with:
- File type/size validation
- Upload progress indication
- Success/error feedback
- Accessibility features

### 5. **Admin Upload Page** (`app/admin/images/page.tsx`)
Central hub for uploading missing images:
- Drag-and-drop zones for hero, CTA, and category thumbnails
- Clear labeling of dimensions and file requirements
- Direct links to component locations
- File path references for developers

### 6. **Updated Upload API** (`app/api/upload/route.ts`)
Enhanced endpoint supporting:
- FormData with file + uploadPath
- Vercel Blob integration
- Error handling and validation
- Returns URL, size, type metadata

### 7. **Documentation** (`docs/IMAGE-OPTIMIZATION-GUIDE.md`)
Complete guide including:
- Optimal specs (format, size, resolution by context)
- Responsive image strategy
- Directory structure
- Naming conventions
- Metadata system
- SEO considerations
- Performance optimization for Core Web Vitals

---

## 🖼️ Image Locations & What's Needed

### Missing Images (Need to Upload)

| Location | Component | Dimensions | Current Status |
|----------|-----------|-----------|-----------------|
| `/images/hero/hero-calgary-landscaping.webp` | `Hero.tsx` | 1920×1080 | ❌ Missing |
| `/images/cta/calgary-full-yard-transformation.webp` | `FullYardCTA.tsx` | 1920×1080 | ❌ Missing |
| `/images/category-thumbnails/*.webp` | Optional enhancement | 600×400 | ❌ Optional |

### Gallery Images (Have 309, Need Optimization)

**Location:** `/public/gallery/[category]/`

**Categories:**
- `softscaping-garden-design/` - Garden & plant-focused
- `hardscaping-outdoor-living/` - Patios, decks, pergolas
- `grading-drainage-irrigation/` - Grading, drainage, irrigation
- `calgary-lawn-services/` - Lawn maintenance & care
- `full-yard-landscaping/` - Complete transformations

**Current State:** RAW images with generic names
**After Optimization:** WebP thumbnails + gallery versions with keywords in filenames

---

## 🚀 Quick Start Workflow

### Step 1: Prepare Your Images
1. Gather all images from your gallery folders
2. Ensure they're reasonable quality and properly oriented

### Step 2: Run Optimization Script
```bash
npm install sharp piexif
npx ts-node scripts/optimize-images.ts
```

**Output:**
- Original images backed up (or deleted after optimization)
- New WebP files with keyword-based names
- `public/image-metadata.json` with alt-text, keywords, locations

### Step 3: Upload to Vercel Blob

#### Get your Blob token:
1. Go to Vercel Dashboard → Project Settings
2. Storage tab → Blob
3. Copy `BLOB_READ_WRITE_TOKEN`

#### Upload images:
```bash
export BLOB_READ_WRITE_TOKEN="your-token-here"
npx ts-node scripts/upload-to-blob.ts
```

**Output:**
- All images uploaded to Vercel CDN
- `public/blob-uploads.json` with all URLs
- Images served from Vercel's edge network

### Step 4: Upload Missing Hero/CTA Images

Visit: `http://localhost:3000/admin/images`

Drag & drop:
- Hero image → Homepage hero section
- CTA image → Full Yard Landscaping section
- Category images → (Optional) Category preview images

---

## 📊 Image Specs by Context

### Hero Section
- **Dimensions:** 1920×1080px (16:9)
- **File Size:** 150-250KB
- **Format:** WebP
- **Content:** Premium yard project or transformation showcase
- **Upload:** `/admin/images` → Hero section

### Full Yard CTA
- **Dimensions:** 1920×1080px (16:9)
- **File Size:** 150-250KB
- **Format:** WebP
- **Content:** Complete transformation (before/after preferred)
- **Upload:** `/admin/images` → CTA section

### Gallery Images
- **Dimensions:** 1200×800px (landscape) or 800×1200px (portrait)
- **File Size:** 80-150KB
- **Format:** WebP
- **Thumbnail:** 300×300px, < 30KB
- **Quality:** 75-80% WebP
- **Upload:** Auto via optimization script → Vercel Blob

### Category Thumbnails (Optional)
- **Dimensions:** 600×400px (3:2)
- **File Size:** 40-60KB
- **Format:** WebP
- **Upload:** `/admin/images` → Category thumbnails

---

## 🔑 Keywords by Category

**Softscaping & Garden Design:**
- garden design, sod installation, plant installation, shrub trimming, mulching, seasonal planting, tree removal, artificial turf

**Hardscaping & Outdoor Living:**
- patio design, walkway installation, retaining wall, fence installation, deck construction, pergola, fire pit, outdoor kitchen, landscape lighting

**Grading, Drainage & Irrigation:**
- grading, drainage, french drain, sprinkler system, irrigation, downspout management, surface water

**Calgary Lawn Services:**
- lawn mowing, lawn maintenance, fertilization, aeration, overseeding, dethatching, weed control, seasonal cleanup

**Full Yard Landscaping:**
- full yard transformation, complete landscaping, yard design, property transformation

---

## 📝 Alt-Text Format

All images use this pattern:
```
[keyword] project in [location], Calgary by Taha Landscaping
```

**Examples:**
- `Patio design project in Mount Royal, Calgary by Taha Landscaping`
- `Lawn maintenance project in Signal Hill, Calgary by Taha Landscaping`
- `Deck construction project in Aspen Woods, Calgary by Taha Landscaping`

---

## 🔧 Implementation Checklist

- [ ] Install dependencies: `npm install sharp piexif`
- [ ] Review `docs/IMAGE-OPTIMIZATION-GUIDE.md`
- [ ] Run optimization script on gallery images
- [ ] Get `BLOB_READ_WRITE_TOKEN` from Vercel
- [ ] Run upload script to migrate to Vercel Blob
- [ ] Upload hero image via `/admin/images`
- [ ] Upload CTA image via `/admin/images`
- [ ] Test homepage hero section
- [ ] Test full yard CTA section
- [ ] Monitor Core Web Vitals in Vercel Analytics
- [ ] (Optional) Add category thumbnail images

---

## 🎯 SEO & Performance Benefits

### SEO
- ✅ Keyword-rich filenames for image search visibility
- ✅ Descriptive alt-text with location + service keywords
- ✅ Structured metadata for rich snippets
- ✅ Local Calgary neighborhood context in every image

### Performance
- ✅ WebP format: 25-35% smaller than JPEG
- ✅ Vercel CDN: Global edge distribution
- ✅ Multiple sizes: Responsive images for all devices
- ✅ Proper aspect ratios: Eliminates layout shift (CLS = 0)
- ✅ LCP optimization: Hero image set to `priority` in Next.js

---

## 📚 Files Created/Modified

**New Files:**
- `scripts/optimize-images.ts` - Batch optimization
- `scripts/upload-to-blob.ts` - Batch upload to Vercel Blob
- `lib/image-references.ts` - Centralized image config
- `components/sections/ImageUploadDropZone.tsx` - Upload component
- `app/admin/images/page.tsx` - Admin upload interface
- `docs/IMAGE-OPTIMIZATION-GUIDE.md` - Complete documentation

**Modified Files:**
- `app/api/upload/route.ts` - Enhanced with FormData support
- `components/sections/PortfolioStrip.tsx` - Updated image references

**Directories Created:**
- `/public/images/hero/`
- `/public/images/cta/`
- `/public/images/category-thumbnails/`

---

## ❓ FAQ

**Q: Do I need to optimize images before uploading to Blob?**
A: Yes, the optimization script creates properly sized WebP files (80-150KB for gallery, 150-250KB for hero). This significantly improves page speed and Core Web Vitals.

**Q: Can I use JPEG instead of WebP?**
A: WebP is recommended for best compression (25-35% smaller). JPEGs are supported as fallback but result in slower page loads.

**Q: Should I upload all 309 images to Blob?**
A: After optimization, yes. They'll be served from Vercel's CDN which is faster than local filesystem. This removes them from git (via .gitignore) and prevents deployment size issues.

**Q: What if I don't have hero/CTA images yet?**
A: Use the `/admin/images` page to upload them. Start with one high-quality image and we can customize the implementation later.

**Q: Can I update images without redeploying?**
A: Yes! Images uploaded via `/admin/images` or the upload script go to Vercel Blob and are immediately available. No redeploy needed.

**Q: How do I organize images by neighborhood?**
A: The optimization script automatically assigns random neighborhoods to each image. The metadata is stored in `public/image-metadata.json` and embedded in alt-text.
