import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CategoryItem } from '../data/storeData';

interface CollectionEditProps {
  categories: CategoryItem[];
  onSelectCategory: (categoryName: string) => void;
}

export const CollectionEdit: React.FC<CollectionEditProps> = ({
  categories,
  onSelectCategory,
}) => {
  return (
    <section id="collection" className="py-20 lg:py-28 bg-[#F4F3EE] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
              CURATED CATEGORIES
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
              THE LATEST EDIT
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 max-w-md font-light">
            Carefully curated collections crafted for modern men. Discover timeless staples, sharp tailoring, and casual statements.
          </p>
        </div>

        {/* Categories Grid: Large Visual Cards with Hover Overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.name)}
              className="group text-left relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-200/60 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 cursor-pointer"
            >
              {/* Category Image */}
              <img
                src={category.imageUrl}
                alt={`${category.name} - Macaw Blink Ahmedabad`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 opacity-90 group-hover:opacity-100"
              />

              {/* Scrim Overlay that darkens slightly on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/50" />

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                <span className="text-[11px] tracking-widest text-zinc-300 uppercase font-medium mb-1 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  Category
                </span>
                
                <h3 className="font-editorial text-2xl sm:text-3xl font-light text-white tracking-wide mb-2 group-hover:text-amber-200 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-xs text-zinc-300 font-light line-clamp-2 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {category.subtitle}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-amber-300 transition-colors">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
