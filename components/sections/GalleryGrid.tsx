"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const GALLERY_IMAGES = Array.from({ length: 16 }).map((_, i) => ({
  src: `https://placehold.co/800x600/EDE8DF/A09080?text=Gallery+${i + 1}`,
  alt: `[PLACEHOLDER] Gallery image ${i + 1}`,
}));

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {GALLERY_IMAGES.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelectedImage(img.src)}
            className="block w-full break-inside-avoid rounded-2xl overflow-hidden group"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-brand-dark border-none">
          <DialogTitle className="sr-only">[PLACEHOLDER] Gallery Image</DialogTitle>
          {selectedImage && (
            <div className="relative aspect-[4/3]">
              <Image
                src={selectedImage}
                alt="[PLACEHOLDER] Gallery image enlarged"
                fill
                className="object-cover"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
