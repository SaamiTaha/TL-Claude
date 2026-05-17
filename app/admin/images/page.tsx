import { ImageUploadDropZone } from '@/components/sections/ImageUploadDropZone';

export default function ImageUploadPage() {
  return (
    <div className="min-h-screen bg-brand-bg px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-display text-brand-text mb-2">Image Upload Manager</h1>
        <p className="text-brand-muted mb-12">Upload optimized images for your website sections</p>

        <div className="space-y-16">
          {/* Hero Section */}
          <section className="bg-white rounded-lg p-8 border border-brand-border">
            <div className="mb-6">
              <h2 className="text-2xl font-display text-brand-text mb-2">Homepage Hero Section</h2>
              <p className="text-brand-muted text-sm">
                Full-screen background image for the homepage hero. Recommended: Premium landscape project or yard transformation.
              </p>
              <div className="mt-3 p-3 bg-brand-surface rounded text-xs text-brand-muted">
                📍 Component: <code className="text-brand-text">Hero.tsx</code> |
                File: <code className="text-brand-text">/images/hero/hero-calgary-landscaping.webp</code>
              </div>
            </div>
            <ImageUploadDropZone uploadPath="hero" imageType="hero" />
          </section>

          {/* CTA Section */}
          <section className="bg-white rounded-lg p-8 border border-brand-border">
            <div className="mb-6">
              <h2 className="text-2xl font-display text-brand-text mb-2">Full Yard Landscaping CTA</h2>
              <p className="text-brand-muted text-sm">
                Background image for the full yard landscaping call-to-action section. Recommended: Complete yard transformation or before/after showcase.
              </p>
              <div className="mt-3 p-3 bg-brand-surface rounded text-xs text-brand-muted">
                📍 Component: <code className="text-brand-text">FullYardCTA.tsx</code> |
                File: <code className="text-brand-text">/images/cta/calgary-full-yard-transformation.webp</code>
              </div>
            </div>
            <ImageUploadDropZone uploadPath="cta" imageType="cta" />
          </section>

          {/* Category Thumbnails */}
          <section className="bg-white rounded-lg p-8 border border-brand-border">
            <div className="mb-6">
              <h2 className="text-2xl font-display text-brand-text mb-2">Category Thumbnails (Optional)</h2>
              <p className="text-brand-muted text-sm">
                Representative images for each service category. These can be used to enhance the service categories section with visual elements.
              </p>
              <div className="mt-3 space-y-2 text-xs text-brand-muted">
                <div className="p-3 bg-brand-surface rounded">
                  🌱 <code className="text-brand-text">Softscaping & Garden Design</code> - File: <code className="text-brand-text">softscaping-garden-design.webp</code>
                </div>
                <div className="p-3 bg-brand-surface rounded">
                  🏗️ <code className="text-brand-text">Hardscaping & Outdoor Living</code> - File: <code className="text-brand-text">hardscaping-outdoor-living.webp</code>
                </div>
                <div className="p-3 bg-brand-surface rounded">
                  💧 <code className="text-brand-text">Grading, Drainage & Irrigation</code> - File: <code className="text-brand-text">grading-drainage-irrigation.webp</code>
                </div>
                <div className="p-3 bg-brand-surface rounded">
                  🌾 <code className="text-brand-text">Calgary Lawn Services</code> - File: <code className="text-brand-text">calgary-lawn-services.webp</code>
                </div>
              </div>
            </div>
            <ImageUploadDropZone uploadPath="category-thumbnails" imageType="category-thumbnail" />
          </section>

          {/* Info Section */}
          <section className="bg-brand-surface rounded-lg p-8 border border-brand-border">
            <h3 className="text-lg font-display text-brand-text mb-4">📋 Image Requirements</h3>
            <div className="space-y-4 text-sm text-brand-muted">
              <div>
                <strong className="text-brand-text">Format:</strong> WebP (recommended), JPEG, or PNG
              </div>
              <div>
                <strong className="text-brand-text">Dimensions:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Hero: 1920×1080px (16:9 aspect ratio)</li>
                  <li>• CTA: 1920×1080px (16:9 aspect ratio)</li>
                  <li>• Category Thumbnails: 600×400px (3:2 aspect ratio)</li>
                </ul>
              </div>
              <div>
                <strong className="text-brand-text">File Size:</strong> Maximum 10MB per image
              </div>
              <div>
                <strong className="text-brand-text">Optimization:</strong> Run the optimization script before uploading for best performance
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
