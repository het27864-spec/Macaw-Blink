import React, { useState } from 'react';
import { MessageCircle, Eye, SlidersHorizontal, Check } from 'lucide-react';
import { ProductItem, StoreConfig, buildWhatsAppUrl } from '../data/storeData';

interface FeaturedProductsProps {
  products: ProductItem[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  config: StoreConfig;
  onQuickView: (product: ProductItem) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  config,
  onQuickView,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['ALL', 'SHIRTS', 'T-SHIRTS', 'JEANS', 'TROUSERS', 'WESTERN WEAR'];

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === 'ALL' ||
      p.category.toUpperCase() === selectedCategory.toUpperCase();
    const matchesSearch =
      searchTerm === '' ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
              FEATURED CATALOG
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">
              FIND YOUR NEXT FAVORITE
            </h2>
          </div>

          <div className="text-sm text-zinc-600 max-w-sm">
            Hand-picked selections available at our Ahmedabad flagship. Enquire directly on WhatsApp for real-time size availability or visit in person.
          </div>
        </div>

        {/* Filter Controls (Buttons with working handlers per Zero-Pill guideline) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-zinc-200">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory.toUpperCase() === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap border ${
                    active
                      ? 'bg-zinc-950 text-white border-zinc-950 shadow-xs'
                      : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search collection..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-white border border-zinc-300 focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-400"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white border border-zinc-200 p-8">
            <p className="text-zinc-600 text-sm mb-4">
              No pieces match your selected filter "{selectedCategory}".
            </p>
            <button
              onClick={() => {
                onSelectCategory('ALL');
                setSearchTerm('');
              }}
              className="px-5 py-2.5 bg-zinc-950 text-white text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const whatsappUrl = buildWhatsAppUrl(
                config.whatsappNumber,
                `Hi ${config.name}, I am interested in ${product.name} (${product.category}). Could you please share availability and details?`
              );

              return (
                <article
                  key={product.id}
                  className="group bg-white border border-zinc-200/90 flex flex-col justify-between transition-all duration-300 hover:shadow-md"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                    <img
                      src={product.imageUrl}
                      alt={`${product.name} - Macaw Blink Menswear`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Subtle Tag (quiet editorial label, no garish pill badge) */}
                    <div className="absolute top-3 left-3 bg-zinc-950/85 text-zinc-100 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 backdrop-blur-xs">
                      {product.tag}
                    </div>

                    {/* Quick View Button overlay */}
                    <button
                      onClick={() => onQuickView(product)}
                      className="absolute bottom-3 right-3 p-2.5 bg-white/90 hover:bg-white text-zinc-900 shadow-md transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                      title="Quick Details"
                      aria-label={`View details for ${product.name}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Product Details (Contiguous Card Information) */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Quiet Category Metadata */}
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500 mb-1">
                        {product.category}
                      </div>

                      {/* Title */}
                      <h3 className="font-editorial text-xl sm:text-2xl text-zinc-950 font-medium mb-2 leading-snug">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-zinc-600 font-light line-clamp-2 mb-4 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div>
                      {/* Sizes and Price Row */}
                      <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs mb-4">
                        <div className="text-zinc-500">
                          Sizes:{' '}
                          <span className="text-zinc-900 font-medium">
                            {product.sizes.join(' · ')}
                          </span>
                        </div>
                        <div className="text-zinc-800 font-medium text-right">
                          {product.price || 'Price on Request'}
                        </div>
                      </div>

                      {/* Action Button: WhatsApp Enquiry */}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
