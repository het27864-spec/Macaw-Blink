import React from 'react';
import { ArrowDown, MapPin, Sparkles, Navigation } from 'lucide-react';
import { StoreConfig, getStoreStatus } from '../data/storeData';

interface HeroProps {
  config: StoreConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const storeStatus = getStoreStatus(config);

  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center bg-zinc-950 overflow-hidden text-white">
      {/* Background Hero Image with Measured Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_mens_fashion_1791124810869.jpg"
          alt="Contemporary Menswear Model - Macaw Blink Ahmedabad"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top sm:object-center opacity-75 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured scrims: dark at bottom and left for contrast, preserving model lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-3xl">
          
          {/* Location & Status Kicker */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>{config.city.toUpperCase()} • {config.state.toUpperCase()}</span>
            </span>
            <span className="text-zinc-600" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-medium tracking-wide text-zinc-200 bg-zinc-900/80 border border-zinc-700/60 backdrop-blur-sm">
              <span className={`w-2 h-2 rounded-full ${storeStatus.dotClass}`} />
              <span>{storeStatus.statusText}</span>
              <span className="text-zinc-400 font-light">({storeStatus.detailText})</span>
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08] mb-6 text-balance">
            STYLE THAT SPEAKS BEFORE YOU DO.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl mb-10 text-balance">
            {config.subTagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#collection"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold tracking-widest uppercase text-zinc-950 bg-white hover:bg-zinc-200 transition-all shadow-lg text-center"
            >
              EXPLORE COLLECTION
            </a>
            <a
              href="#store"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold tracking-widest uppercase text-white bg-transparent border border-white/60 hover:bg-white/10 hover:border-white transition-all text-center"
            >
              <Navigation className="w-3.5 h-3.5" />
              VISIT OUR STORE
            </a>
          </div>

          {/* Quiet Trust Proof adjacent to Hero CTA */}
          <div className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold text-sm">★ {config.googleRating}</span>
              <span>Based on {config.reviewCount.toLocaleString()}+ verified Google reviews</span>
            </div>
            <span className="hidden sm:inline text-zinc-700" aria-hidden="true">·</span>
            <div>Opposite Pride Plaza Hotel, Judges Bungalow Road</div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-6 right-8 hidden lg:flex items-center gap-3 text-xs tracking-widest uppercase text-zinc-400">
        <span>Scroll to discover</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
