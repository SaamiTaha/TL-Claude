import blobManifest from "@/public/blob-uploads.json";

// Generate gallery manifest from blob uploads
const manifest = blobManifest as Array<{
  filename: string;
  url: string;
  category: string;
}>;

const galleryImages = manifest
  .filter(img => img.category === "gallery")
  .map(img => {
    // Extract category from filename
    let category = "all";
    if (img.filename.includes("calgary-lawn-services")) {
      category = "calgary-lawn-services";
    } else if (img.filename.includes("softscaping")) {
      category = "softscaping-garden-design";
    } else if (img.filename.includes("hardscaping")) {
      category = "hardscaping-outdoor-living";
    } else if (img.filename.includes("grading")) {
      category = "grading-drainage-irrigation";
    }

    return {
      src: img.url,
      category,
    };
  });

export const galleryManifest = {
  allImages: galleryImages,
};

export default galleryManifest;
