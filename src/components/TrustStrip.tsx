import React from 'react';
import { Star, MapPin, Clock, Award } from 'lucide-react';
import { StoreConfig } from '../data/storeData';

interface TrustStripProps {
  config: StoreConfig;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ config }) => {
  return (
    <section className="bg-zinc-900 text-white border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          
          {/* Trust 1 */}
          <div className="pt-2 md:pt-0 md:px-6 flex flex-col justify-center items-center md:items-start">
            <div className="flex items-center gap-1.5 text-amber-400 mb-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-lg tracking-tight text-white tabular-nums">
                {config.googleRating} / 5.0
              </span>
            </div>
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
              Google Rating
            </div>
          </div>

          {/* Trust 2 */}
          <div className="pt-2 md:pt-0 md:px-6 flex flex-col justify-center items-center md:items-start">
            <div className="flex items-center gap-1.5 text-zinc-100 mb-1">
              <Award className="w-4 h-4 text-zinc-400" />
              <span className="font-semibold text-lg tracking-tight text-white tabular-nums">
                {config.reviewCount.toLocaleString()}+
              </span>
            </div>
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
              Verified Reviews
            </div>
          </div>

          {/* Trust 3 */}
          <div className="pt-4 md:pt-0 md:px-6 flex flex-col justify-center items-center md:items-start">
            <div className="flex items-center gap-1.5 text-zinc-100 mb-1">
              <MapPin className="w-4 h-4 text-zinc-400" />
              <span className="font-semibold text-sm sm:text-base tracking-tight text-white">
                Judges Bungalow Rd
              </span>
            </div>
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
              Ahmedabad Store
            </div>
          </div>

          {/* Trust 4 */}
          <div className="pt-4 md:pt-0 md:px-6 flex flex-col justify-center items-center md:items-start">
            <div className="flex items-center gap-1.5 text-zinc-100 mb-1">
              <Clock className="w-4 h-4 text-zinc-400" />
              <span className="font-semibold text-sm sm:text-base tracking-tight text-white">
                10:30 AM – 10:30 PM
              </span>
            </div>
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
              Open Daily
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
