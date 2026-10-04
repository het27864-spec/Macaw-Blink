import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { LookbookItem } from '../data/storeData';

interface LookbookSectionProps {
  lookbook: LookbookItem[];
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({ lookbook }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + lookbook.length) % lookbook.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % lookbook.length);
    }
  };

  return (
    <section id="lookbook" className="py-20 lg:py-28 bg-[#18181B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-2">
              EDITORIAL CAMPAIGN
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight">
              THE MACAW BLINK LOOKBOOK
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-light">
            An artistic lens on contemporary menswear. Combining sharp modern tailoring, breathable textures, and comfortable everyday aesthetics.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {lookbook.map((item, index) => {
            // Asymmetric span layout for rich editorial rhythm
            let colSpan = 'md:col-span-6';
            if (index === 0) colSpan = 'md:col-span-7 lg:col-span-7';
            else if (index === 1) colSpan = 'md:col-span-5 lg:col-span-5';
            else if (index === 2) colSpan = 'md:col-span-12';
            else if (index === 3) colSpan = 'md:col-span-5';
            else if (index === 4) colSpan = 'md:col-span-7';

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer shadow-lg ${colSpan}`}
              >
                <div className={`relative w-full ${item.aspect} max-h-[600px] overflow-hidden`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  {/* Subtle darkening scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:from-black/90" />

                  {/* Caption & hover icon */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold mb-1 block">
                          Look {index + 1}
                        </span>
                        <h3 className="font-editorial text-xl sm:text-2xl font-light text-white tracking-wide">
                          {item.title}
                        </h3>
                        <p className="text-xs text-zinc-300 font-light mt-1">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="p-2 bg-white/20 backdrop-blur-sm text-white group-hover:bg-white group-hover:text-black transition-colors rounded-none">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 text-white/80 hover:text-white p-3 bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lookbook[activeImageIndex].imageUrl}
              alt={lookbook[activeImageIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto object-contain border border-zinc-800 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="font-editorial text-2xl text-white">
                {lookbook[activeImageIndex].title}
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                {lookbook[activeImageIndex].subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 text-white/80 hover:text-white p-3 bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
