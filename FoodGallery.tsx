import React, { useState } from 'react';
import {
  Maximize2,
  X,
  Camera,
  Upload,
  Sparkles,
  RotateCcw,
  Info,
  CheckCircle2,
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/businessInfo.ts';
import { GalleryItem } from '../types.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';

export const FoodGallery: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [userUploadedPhotos, setUserUploadedPhotos] = useState<Record<string, string>>({});

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, itemId: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setUserUploadedPhotos((prev) => ({
        ...prev,
        [itemId]: objectUrl,
      }));
    }
  };

  const handleResetPhoto = (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation();
    setUserUploadedPhotos((prev) => {
      const copy = { ...prev };
      delete copy[itemId];
      return copy;
    });
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#123B2D]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold mb-2.5">
            <Camera className="w-4 h-4" />
            <span>Visual Dining Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F7F3EA] tracking-tight mb-3">
            The Al Madni Experience
          </h2>

          <p className="text-sm sm:text-base text-[#D8D2C4] leading-relaxed">
            A visual showcase of Pakistani culinary traditions: sizzling cast-iron karahis, live charcoal grills, steaming tandoori breads, and refreshing coolers.
          </p>

          {/* Owner Notice & Photo Replacement Note */}
          <div className="mt-4 inline-flex items-center gap-2 text-[11px] sm:text-xs text-[#C6A15B] bg-[#171A17]/80 border border-[#C6A15B]/30 px-3.5 py-1.5 rounded-full shadow-sm text-balance">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>
              Sample culinary photography &middot; Restaurant owner can click &ldquo;Preview Real Photo&rdquo; on any card to test actual kitchen pictures
            </span>
          </div>
        </div>

        {/* Gallery Bento Grid with 8 Separate Images & Mobile-Optimized Heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 mb-10">
          {GALLERY_ITEMS.map((item, index) => {
            // Mobile-optimized heights to prevent oversized empty containers
            const colSpan =
              index === 0
                ? 'lg:col-span-7 h-64 sm:h-80 lg:h-96'
                : index === 1
                ? 'lg:col-span-5 h-60 sm:h-80 lg:h-96'
                : index === 2
                ? 'lg:col-span-4 h-56 sm:h-72'
                : index === 3
                ? 'lg:col-span-4 h-56 sm:h-72'
                : index === 4
                ? 'lg:col-span-4 h-56 sm:h-72'
                : index === 5
                ? 'lg:col-span-6 h-60 sm:h-80'
                : index === 6
                ? 'lg:col-span-3 h-56 sm:h-80'
                : 'lg:col-span-3 h-56 sm:h-80';

            const displayImage = userUploadedPhotos[item.id] || item.image;
            const hasCustomPhoto = !!userUploadedPhotos[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setLightboxItem({ ...item, image: displayImage })}
                className={`${colSpan} relative rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#C6A15B]/60 transition-all duration-300 shadow-xl flex flex-col justify-end bg-[#171A17]`}
              >
                <ImageWithFallback
                  src={displayImage}
                  alt={item.title}
                  category={item.category}
                  title={item.title}
                  containerClassName="absolute inset-0 w-full h-full"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                {/* Top badges & owner upload action */}
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between z-10">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#DFBE7E] bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                    {hasCustomPhoto && (
                      <button
                        onClick={(e) => handleResetPhoto(e, item.id)}
                        title="Reset to sample photograph"
                        className="p-1 rounded-lg bg-black/70 text-[#D8D2C4] hover:text-white transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    )}

                    <label
                      title="Restaurant Owner: Click to preview your own food photo"
                      className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#123B2D]/90 hover:bg-[#123B2D] border border-[#C6A15B]/40 text-[#C6A15B] text-[10px] font-semibold cursor-pointer transition-all shadow-sm"
                    >
                      <Upload className="w-3 h-3" />
                      <span>{hasCustomPhoto ? 'Custom' : 'Preview Photo'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, item.id)}
                      />
                    </label>
                  </div>
                </div>

                {/* Bottom Title & Subtitle */}
                <div className="relative z-10 p-4 sm:p-6 flex items-end justify-between pointer-events-none">
                  <div className="max-w-[85%]">
                    <h3 className="text-base sm:text-xl font-serif font-bold text-white group-hover:text-[#DFBE7E] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#D8D2C4] mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="p-2 rounded-full bg-black/60 text-[#C6A15B] opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Helper Notice */}
        <div className="p-4 rounded-xl bg-[#202420] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D8D2C4]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              All 8 photography slots feature high-resolution individual culinary imagery representative of Pakistani hospitality.
            </span>
          </div>
          <span className="text-[#C6A15B] font-mono whitespace-nowrap">
            Al Madni Hotel &middot; Gujranwala
          </span>
        </div>
      </div>

      {/* Lightbox Modal with Responsive Mobile Containment */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full bg-[#171A17] border border-[#C6A15B]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/75 text-white hover:text-[#C6A15B] transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="relative w-full bg-black flex-1 min-h-0 flex items-center justify-center">
              <ImageWithFallback
                src={lightboxItem.image}
                alt={lightboxItem.title}
                category={lightboxItem.category}
                title={lightboxItem.title}
                containerClassName="w-full h-full max-h-[60vh] sm:max-h-[70vh]"
                className="object-contain"
              />
            </div>

            <div className="p-4 sm:p-6 bg-[#202420] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shrink-0">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
                  {lightboxItem.category}
                </span>
                <h3 className="text-lg sm:text-2xl font-serif font-bold text-[#F7F3EA] mt-0.5">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D8D2C4] mt-0.5">
                  {lightboxItem.subtitle}
                </p>
              </div>

              <button
                onClick={() => setLightboxItem(null)}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-[#C6A15B] hover:bg-[#D7B46F] text-[#171A17] text-xs font-semibold uppercase tracking-wider self-start sm:self-auto cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
