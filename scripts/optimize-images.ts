import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import piexif from 'piexif';

interface ImageOptimizationConfig {
  category: string;
  location: string;
  keywords: string[];
  altText: string;
}

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  'softscaping-garden-design': [
    'garden design', 'sod installation', 'plant installation',
    'shrub trimming', 'mulching', 'seasonal planting', 'tree removal', 'artificial turf'
  ],
  'hardscaping-outdoor-living': [
    'patio design', 'walkway installation', 'retaining wall',
    'fence installation', 'deck construction', 'pergola', 'fire pit', 'outdoor kitchen', 'landscape lighting'
  ],
  'grading-drainage-irrigation': [
    'grading', 'drainage', 'french drain', 'sprinkler system',
    'irrigation', 'downspout management', 'surface water'
  ],
  'calgary-lawn-services': [
    'lawn mowing', 'lawn maintenance', 'fertilization', 'aeration',
    'overseeding', 'dethatching', 'weed control', 'seasonal cleanup'
  ],
  'full-yard-landscaping': [
    'full yard transformation', 'complete landscaping', 'yard design',
    'property transformation', 'landscape design'
  ]
};

const CALGARY_NEIGHBORHOODS = [
  'Aspen Woods', 'Bridgeland', 'Cranston', 'Dalhousie', 'Elbow Park',
  'Fairview', 'Garrison Woods', 'Hillhurst', 'Inglewood', 'Kensington',
  'Lake Bonavista', 'Mount Royal', 'Panorama Hills', 'Ramsay', 'Signal Hill',
  'Tuscany', 'University District', 'Varsity', 'West Springs', 'Woodbine',
];

interface ImageMetadata {
  filename: string;
  category: string;
  keywords: string[];
  altText: string;
  location: string;
  optimizedPath: string;
  sizes: {
    thumbnail: string;
    gallery: string;
    hero?: string;
  };
}

async function getRandomLocation(): Promise<string> {
  return CALGARY_NEIGHBORHOODS[Math.floor(Math.random() * CALGARY_NEIGHBORHOODS.length)];
}

function generateAltText(category: string, keywords: string[], location: string, index: number): string {
  const keyword = keywords[index % keywords.length];
  return `${keyword} project in ${location}, Calgary by Taha Landscaping`;
}

function generateKeywordFilename(category: string, keywords: string[], index: number): string {
  const keyword = keywords[index % keywords.length]
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
  return `calgary-${keyword}-${index}`;
}

async function optimizeImage(
  inputPath: string,
  outputDir: string,
  config: ImageOptimizationConfig,
  index: number
): Promise<ImageMetadata | null> {
  try {
    const filename = path.basename(inputPath, path.extname(inputPath));
    const newFilename = generateKeywordFilename(config.category, config.keywords, index);

    // Create output directory
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    if (!metadata.width || !metadata.height) {
      console.warn(`Skipping ${inputPath}: unable to read dimensions`);
      return null;
    }

    const altText = generateAltText(
      config.category,
      config.keywords,
      config.location,
      index
    );

    // Optimize for gallery (1200x800)
    const galleryPath = path.join(outputDir, `${newFilename}-gallery.webp`);
    await sharp(inputPath)
      .resize(1200, 800, { fit: 'cover', position: 'center' })
      .webp({ quality: 80 })
      .toFile(galleryPath);

    // Optimize for thumbnail (300x300)
    const thumbnailPath = path.join(outputDir, `${newFilename}-thumb.webp`);
    await sharp(inputPath)
      .resize(300, 300, { fit: 'cover', position: 'center' })
      .webp({ quality: 75 })
      .toFile(thumbnailPath);

    console.log(`✓ Optimized: ${newFilename}`);

    return {
      filename: newFilename,
      category: config.category,
      keywords: config.keywords,
      altText,
      location: config.location,
      optimizedPath: path.join(config.category, `${newFilename}-gallery.webp`),
      sizes: {
        thumbnail: `/gallery/${config.category}/${newFilename}-thumb.webp`,
        gallery: `/gallery/${config.category}/${newFilename}-gallery.webp`,
      }
    };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
    return null;
  }
}

async function batchOptimizeGalleryImages() {
  console.log('🖼️  Starting image optimization...\n');

  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  const imageMetadata: ImageMetadata[] = [];

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    const categoryDir = path.join(galleryDir, category);

    if (!fs.existsSync(categoryDir)) {
      console.log(`⊘ Skipping ${category}: directory not found`);
      continue;
    }

    const files = fs.readdirSync(categoryDir)
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort();

    if (files.length === 0) {
      console.log(`⊘ No images in ${category}`);
      continue;
    }

    console.log(`\n📁 Processing ${category} (${files.length} images)`);

    for (let i = 0; i < files.length; i++) {
      const imagePath = path.join(categoryDir, files[i]);
      const location = await getRandomLocation();

      const result = await optimizeImage(imagePath, categoryDir, {
        category,
        location,
        keywords,
        altText: ''
      }, i);

      if (result) {
        imageMetadata.push(result);
      }
    }
  }

  // Save metadata to manifest
  const manifestPath = path.join(process.cwd(), 'public', 'image-metadata.json');
  fs.writeFileSync(manifestPath, JSON.stringify(imageMetadata, null, 2));

  console.log(`\n✅ Optimization complete!`);
  console.log(`📊 Processed ${imageMetadata.length} images`);
  console.log(`📄 Metadata saved to: public/image-metadata.json`);
}

batchOptimizeGalleryImages().catch(console.error);
