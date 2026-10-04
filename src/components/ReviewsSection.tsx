import React from 'react';
import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import { ReviewItem, StoreConfig } from '../data/storeData';

interface ReviewsSectionProps {
  reviews: ReviewItem[];
  config: StoreConfig;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, config }) => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F4F3EE] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Rating Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
              PUBLIC REPUTATION
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
              WHAT OUR CUSTOMERS SAY
            </h2>
          </div>

          {/* Social Proof Aggregate Badge */}
          <div className="bg-white p-5 border border-zinc-200/90 shadow-xs flex items-center gap-6">
            <div className="text-center border-r border-zinc-200 pr-6">
              <div className="font-editorial text-3xl sm:text-4xl font-semibold text-zinc-950 tabular-nums">
                {config.googleRating}
              </div>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest font-semibold text-zinc-900">
                Google Reviews
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">
                Over <span className="font-medium text-zinc-800">{config.reviewCount.toLocaleString()}+</span> customer reviews
              </div>
              <a
                href={config.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-zinc-950 hover:underline mt-2"
              >
                <span>Read More Reviews</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 border border-zinc-200 flex flex-col justify-between shadow-xs transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-zinc-700 font-light leading-relaxed mb-6 italic">
                  "{rev.review}"
                </p>
              </div>

              {/* Author & Verification metadata */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-zinc-950 tracking-wide">
                    {rev.author}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-light">
                    {rev.source}
                  </div>
                </div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="mt-12 text-center">
          <a
            href={config.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors shadow-xs"
          >
            <span>View All Google Reviews on Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
