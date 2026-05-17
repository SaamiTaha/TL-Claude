"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { MotionProvider, m, AnimatePresence, motionFeatures } from "@/lib/motion";
import { galleryManifest } from "@/lib/gallery-manifest";
import posthog from "posthog-js";

interface GalleryImage {
  src: string;
  category: string;
}

interface GalleryGridProps {
  category?: string;
}

export function GalleryGrid({ category }: GalleryGridProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const all: GalleryImage[] = galleryManifest.allImages ?? [];
    setImages(
      category && category !== "all"
        ? all.filter((img) => img.category === category)
        : all
    );
  }, [category]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null && images.length > 0 ? (prev + 1) % images.length : null
    );
  }, [images.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null && images.length > 0
        ? (prev - 1 + images.length) % images.length
        : null
    );
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, goNext, goPrev]);

  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-brand-muted font-sans text-lg">
          Photos coming soon. Check back as we add our latest Calgary projects.
        </p>
      </div>
    );
  }

  return (
    <MotionProvider features={motionFeatures}>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-5">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => {
              setSelectedIndex(i);
              posthog.capture("gallery_image_opened", { category: img.category, image_src: img.src });
            }}
            className="block w-full rounded-xl overflow-hidden group"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={img.src}
                alt={`${img.category.replace(/-/g, " ")} project in Calgary`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Full-screen lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && images[selectedIndex] && (
          <m.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white p-2"
              aria-label="Close lightbox"
            >
              <X className="h-7 w-7" />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-2 sm:left-4 z-10 text-white/70 hover:text-white p-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div
              className="relative w-full h-full max-w-5xl max-h-[85vh] mx-4 sm:mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].src}
                alt={`${images[selectedIndex].category.replace(/-/g, " ")} project in Calgary`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-2 sm:right-4 z-10 text-white/70 hover:text-white p-2"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-sans">
              {selectedIndex + 1} / {images.length}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </MotionProvider>
  );
}
