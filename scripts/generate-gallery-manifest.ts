import fs from 'fs'
import path from 'path'

const SERVICE_SLUGS = [
  'lawn-mowing-maintenance', 'lawn-fertilization-weed-control',
  'lawn-aeration-overseeding', 'sod-installation', 'artificial-turf-installation',
  'lawn-dethatching', 'seasonal-lawn-cleanups', 'garden-bed-design-installation',
  'plant-shrub-tree-installation', 'hedge-shrub-trimming', 'mulching-decorative-rock',
  'seasonal-annual-planting', 'tree-trimming-removal', 'patio-design-installation',
  'walkway-pathway-installation', 'retaining-wall-construction', 'fence-installation',
  'deck-construction', 'outdoor-steps-staircase', 'outdoor-kitchen-fire-pit',
  'pergola-shade-structures', 'landscape-lighting', 'stamped-decorative-concrete', 'lot-yard-grading',
  'bobcat-skid-steer-services', 'french-drain-drainage', 'downspout-surface-water',
  'sprinkler-system-installation', 'irrigation-repair-winterization',
  'smart-irrigation-controllers', 'full-yard-landscaping',
]

const CATEGORY_MAP: Record<string, string> = {
  'sod-installation': 'softscaping-garden-design',
  'artificial-turf-installation': 'softscaping-garden-design',
  'garden-bed-design-installation': 'softscaping-garden-design',
  'plant-shrub-tree-installation': 'softscaping-garden-design',
  'hedge-shrub-trimming': 'softscaping-garden-design',
  'mulching-decorative-rock': 'softscaping-garden-design',
  'seasonal-annual-planting': 'softscaping-garden-design',
  'tree-trimming-removal': 'softscaping-garden-design',
  'patio-design-installation': 'hardscaping-outdoor-living',
  'walkway-pathway-installation': 'hardscaping-outdoor-living',
  'retaining-wall-construction': 'hardscaping-outdoor-living',
  'fence-installation': 'hardscaping-outdoor-living',
  'deck-construction': 'hardscaping-outdoor-living',
  'outdoor-steps-staircase': 'hardscaping-outdoor-living',
  'outdoor-kitchen-fire-pit': 'hardscaping-outdoor-living',
  'pergola-shade-structures': 'hardscaping-outdoor-living',
  'landscape-lighting': 'hardscaping-outdoor-living',
  'stamped-decorative-concrete': 'hardscaping-outdoor-living',
  'lot-yard-grading': 'grading-drainage-irrigation',
  'bobcat-skid-steer-services': 'grading-drainage-irrigation',
  'french-drain-drainage': 'grading-drainage-irrigation',
  'downspout-surface-water': 'grading-drainage-irrigation',
  'sprinkler-system-installation': 'grading-drainage-irrigation',
  'irrigation-repair-winterization': 'grading-drainage-irrigation',
  'smart-irrigation-controllers': 'grading-drainage-irrigation',
  'lawn-mowing-maintenance': 'calgary-lawn-services',
  'lawn-fertilization-weed-control': 'calgary-lawn-services',
  'lawn-aeration-overseeding': 'calgary-lawn-services',
  'lawn-dethatching': 'calgary-lawn-services',
  'seasonal-lawn-cleanups': 'calgary-lawn-services',
  'full-yard-landscaping': 'featured',
}

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp']
const galleryBase = path.join(process.cwd(), 'public', 'gallery')
const services: Record<string, { hasImages: boolean; images: string[]; count: number }> = {}
const allImages: { src: string; service: string; category: string }[] = []

for (const slug of SERVICE_SLUGS) {
  const folderPath = path.join(galleryBase, slug)
  if (!fs.existsSync(folderPath)) {
    services[slug] = { hasImages: false, images: [], count: 0 }
    continue
  }
  const files = fs.readdirSync(folderPath).filter(f =>
    IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase())
  )
  services[slug] = { hasImages: files.length > 0, images: files, count: files.length }
  for (const file of files) {
    allImages.push({ src: `/gallery/${slug}/${file}`, service: slug, category: CATEGORY_MAP[slug] ?? 'uncategorized' })
  }
}

const manifest = { services, allImages, generatedAt: new Date().toISOString() }
fs.writeFileSync(path.join(galleryBase, 'gallery-manifest.json'), JSON.stringify(manifest, null, 2))
console.log(`Manifest: ${allImages.length} images across ${SERVICE_SLUGS.length} services`)
