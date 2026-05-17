import sharp from 'sharp';
import path from 'path';

async function convertImages() {
  console.log('🖼️  Converting images to WebP...\n');

  const images = [
    {
      input: '/Users/samit/TL-Claude/public/images/hero/frontpage.png',
      output: '/Users/samit/TL-Claude/public/images/hero/hero-calgary-landscaping.webp',
      width: 1920,
      height: 1080,
      type: 'Hero',
    },
    {
      input: '/Users/samit/TL-Claude/public/images/cta/image.png',
      output: '/Users/samit/TL-Claude/public/images/cta/calgary-full-yard-transformation.webp',
      width: 1920,
      height: 1080,
      type: 'CTA',
    },
  ];

  for (const img of images) {
    try {
      console.log(`⏳ Converting ${img.type}...`);
      await sharp(img.input)
        .resize(img.width, img.height, {
          fit: 'cover',
          position: 'center',
        })
        .webp({ quality: 80 })
        .toFile(img.output);

      console.log(`✅ ${img.type}: ${path.basename(img.output)}\n`);
    } catch (error) {
      console.error(`❌ Error processing ${img.type}:`, error);
    }
  }

  console.log('✨ Done! Images are ready.');
}

convertImages().catch(console.error);
