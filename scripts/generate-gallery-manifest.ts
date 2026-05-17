import fs from 'fs'
import path from 'path'

const CATEGORY_SLUGS = [
  'softscaping-garden-design',
  'hardscaping-outdoor-living',
  'grading-drainage-irrigation',
  'calgary-lawn-services',
  'full-yard-landscaping',
]

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp']
const galleryBase = path.join(process.cwd(), 'public', 'gallery')
const categories: Record<string, { hasImages: boolean; images: string[]; count: number }> = {}
const allImages: { src: string; category: string }[] = []

for (const slug of CATEGORY_SLUGS) {
  const folderPath = path.join(galleryBase, slug)
  if (!fs.existsSync(folderPath)) {
    categories[slug] = { hasImages: false, images: [], count: 0 }
    continue
  }
  const files = fs.readdirSync(folderPath)
    .filter(f => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()))
    .sort()
  categories[slug] = { hasImages: files.length > 0, images: files, count: files.length }
  for (const file of files) {
    allImages.push({ src: `/gallery/${slug}/${file}`, category: slug })
  }
}

const manifest = { categories, allImages, generatedAt: new Date().toISOString() }
fs.writeFileSync(path.join(galleryBase, 'gallery-manifest.json'), JSON.stringify(manifest, null, 2))
console.log(`Manifest: ${allImages.length} images across ${CATEGORY_SLUGS.length} categories`)
