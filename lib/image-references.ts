import blobManifest from "@/public/blob-uploads.json";

export interface ImageMetadata {
  id: string;
  filename: string;
  category: 'softscaping-garden-design' | 'hardscaping-outdoor-living' | 'grading-drainage-irrigation' | 'calgary-lawn-services' | 'full-yard-landscaping';
  primaryKeyword: string;
  keywords: string[];
  altText: string;
  location: string;
  galleryPath: string;
  thumbnailPath: string;
  heroBgPath?: string;
}

export const GALLERY_METADATA: ImageMetadata[] = [];

const manifest = blobManifest as Array<{ filename: string; url: string; category: string }>;

const getHeroUrl = () => manifest.find(img => img.category === 'hero')?.url || '/images/hero/hero-calgary-landscaping.webp';
const getCTAUrl = () => manifest.find(img => img.category === 'cta')?.url || '/images/cta/calgary-full-yard-transformation.webp';

export const HERO_IMAGES = {
  homepage: {
    path: getHeroUrl(),
    alt: 'Premium landscaping project transformation in Calgary by Taha Landscaping',
  },
};

export const CTA_IMAGES = {
  fullYard: {
    path: getCTAUrl(),
    alt: 'Complete yard transformation in Calgary by Taha Landscaping',
  },
};

export const CATEGORY_THUMBNAILS = {
  'softscaping-garden-design': {
    path: '/images/category-thumbnails/softscaping-garden-design.webp',
    alt: 'Softscaping and garden design services in Calgary',
  },
  'hardscaping-outdoor-living': {
    path: '/images/category-thumbnails/hardscaping-outdoor-living.webp',
    alt: 'Hardscaping and outdoor living services in Calgary',
  },
  'grading-drainage-irrigation': {
    path: '/images/category-thumbnails/grading-drainage-irrigation.webp',
    alt: 'Grading, drainage and irrigation services in Calgary',
  },
  'calgary-lawn-services': {
    path: '/images/category-thumbnails/calgary-lawn-services.webp',
    alt: 'Professional lawn services in Calgary',
  },
};

const fullYardImages = manifest.filter(
  img => img.category === 'gallery' && img.filename.includes('full-yard-landscaping')
).slice(0, 8);

export const PORTFOLIO_STRIP_IMAGES = fullYardImages.length > 0
  ? fullYardImages.map(img => ({
      src: img.url,
      alt: 'Landscaping project in Calgary by Taha Landscaping',
      category: 'full-yard-landscaping',
    }))
  : [
      {
        src: '/gallery/full-yard-landscaping/166FE502-B25F-4844-9D6B-FDA65E0D7CCB.JPG',
        alt: 'Full yard landscaping transformation project in Calgary by Taha Landscaping',
        category: 'full-yard-landscaping',
      },
      {
        src: '/gallery/full-yard-landscaping/1CD827E7-89C7-4DC1-B04E-C2836EF993E4.JPG',
        alt: 'Complete yard transformation in Calgary by Taha Landscaping',
        category: 'full-yard-landscaping',
      },
      {
        src: '/gallery/full-yard-landscaping/322BB29E-1141-45B6-9D3F-6AA32D9A19F0.JPG',
        alt: 'Professional landscaping project in Calgary by Taha Landscaping',
        category: 'full-yard-landscaping',
      },
      {
        src: '/gallery/full-yard-landscaping/333F0F8D-5345-41E2-9A0B-B603EBEC0241.JPG',
        alt: 'Yard transformation in Calgary by Taha Landscaping',
        category: 'full-yard-landscaping',
      },
      {
        src: '/gallery/full-yard-landscaping/352241C7-6B17-4BE3-A614-9B6D7D5FCDF3.JPG',
        alt: 'Landscaping design project in Calgary by Taha Landscaping',
        category: 'full-yard-landscaping',
      },
      {
        src: '/gallery/full-yard-landscaping/3836DC62-A947-4896-9070-99B2A798D97E.JPG',
        alt: 'Custom landscaping in Calgary by Taha Landscaping',
        category: 'full-yard-landscaping',
      },
      {
        src: '/gallery/full-yard-landscaping/3FEEDD5B-9F81-44B4-8FB5-571F66850BE2.JPG',
        alt: 'Property transformation in Calgary by Taha Landscaping',
        category: 'full-yard-landscaping',
      },
      {
        src: '/gallery/full-yard-landscaping/417214F6-207F-4101-88B5-546FEDAABA90.JPG',
        alt: 'Expert landscaping in Calgary by Taha Landscaping',
        category: 'full-yard-landscaping',
      },
    ];
