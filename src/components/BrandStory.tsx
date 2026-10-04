import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { StoreConfig } from '../data/storeData';

interface BrandStoryProps {
  config: StoreConfig;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ config }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Editorial Fashion Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-zinc-100 shadow-md">
              <img
                src="/src/assets/images/store_interior_luxury_1791124826476.jpg"
                alt="Macaw Blink Ahmedabad Menswear Store Interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Image caption badge adhering to zero-pill rules (quiet unboxed text) */}
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90 flex justify-between items-center backdrop-blur-xs">
                <span className="font-medium tracking-wide">Rudra Square Apartment · Basement 42–47</span>
                <span className="uppercase tracking-widest text-[10px] text-zinc-300">Judges Bungalow Rd</span>
              </div>
            </div>

            {/* Overlapping secondary detail frame */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-44 h-48 bg-white p-2 shadow-xl border border-zinc-200">
              <img
                src="/src/assets/images/lookbook_casual_men_1791124840875.jpg"
                alt="Contemporary linen shirt fit detail"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Brand Story Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">
              THE MACAW BLINK EDIT
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-5xl font-light text-zinc-950 tracking-tight leading-[1.12] mb-6 text-balance">
              BUILT FOR MEN WHO KNOW THEIR STYLE.
            </h2>

            <div className="space-y-4 text-zinc-700 leading-relaxed text-base sm:text-lg font-light mb-8">
              <p>
                Macaw Blink brings together contemporary men’s fashion for those who want to look confident, feel comfortable and stay ahead of the everyday style curve.
              </p>
              <p className="text-zinc-600 text-sm sm:text-base">
                Located on Judges Bungalow Road in Bodakdev, Ahmedabad, our physical boutique focuses exclusively on contemporary ready-to-wear men’s fashion, tailored casuals, and modern western silhouettes curated for the climate, physique, and distinct sensibilities of today’s discerning Indian gentleman.
              </p>
            </div>

            {/* Statistic-Style Area: Confirmed parameters only */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-zinc-300 mb-8">
              <div>
                <div className="font-editorial text-2xl sm:text-3xl text-zinc-950 font-semibold">
                  AHMEDABAD
                </div>
                <div className="text-xs tracking-wider uppercase text-zinc-500 mt-1">
                  Gujarat, India
                </div>
              </div>

              <div>
                <div className="font-editorial text-2xl sm:text-3xl text-zinc-950 font-semibold">
                  MEN’S FASHION
                </div>
                <div className="text-xs tracking-wider uppercase text-zinc-500 mt-1">
                  Ready-To-Wear
                </div>
              </div>

              <div>
                <div className="font-editorial text-2xl sm:text-3xl text-zinc-950 font-semibold">
                  10:30 – 10:30
                </div>
                <div className="text-xs tracking-wider uppercase text-zinc-500 mt-1">
                  Open Every Day
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#store"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-950 text-white text-xs font-semibold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
              >
                <span>Visit In Ahmedabad</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-zinc-300 text-zinc-900 text-xs font-semibold uppercase tracking-widest hover:bg-zinc-100 transition-colors"
              >
                <span>Explore The Edit</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
