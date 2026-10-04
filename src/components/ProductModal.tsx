import React from 'react';
import { X, MessageCircle, MapPin, Check, ShieldCheck } from 'lucide-react';
import { ProductItem, StoreConfig, buildWhatsAppUrl } from '../data/storeData';

interface ProductModalProps {
  product: ProductItem | null;
  config: StoreConfig;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  config,
  onClose,
}) => {
  if (!product) return null;

  const whatsappUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    `Hi ${config.name}, I am interested in ${product.name} (${product.category}) from your website. Could you please share available sizes, pricing, and details?`
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-zinc-200 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white text-zinc-900 border border-zinc-200 shadow-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image */}
          <div className="relative aspect-[3/4] bg-zinc-100">
            <img
              src={product.imageUrl}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-zinc-950 text-white text-[10px] uppercase font-semibold tracking-widest px-2.5 py-1">
              {product.tag}
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-1">
                {product.category}
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-light text-zinc-950 mb-3">
                {product.name}
              </h3>

              <div className="text-sm font-medium text-zinc-900 mb-4 pb-3 border-b border-zinc-200">
                {product.price || 'Price on Request / In-Store'}
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Sizes Available */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider font-semibold text-zinc-700 block mb-2">
                  Available Sizes
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <span
                      key={sz}
                      className="px-3 py-1.5 text-xs font-medium border border-zinc-300 text-zinc-800 bg-zinc-50"
                    >
                      {sz}
                    </span>
                  ))}
                </div>
              </div>

              {/* In-Store Notice */}
              <div className="p-3.5 bg-[#FAF9F5] border border-zinc-200 text-xs text-zinc-700 space-y-1 mb-6">
                <div className="font-medium text-zinc-950 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-700" />
                  <span>Available at Ahmedabad Flagship</span>
                </div>
                <div className="text-zinc-600">
                  Judges Bungalow Road, opp. Pride Plaza Hotel
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-4 border-t border-zinc-200">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Enquire Availability on WhatsApp</span>
              </a>

              <a
                href={config.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-900 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Store to Try On</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
