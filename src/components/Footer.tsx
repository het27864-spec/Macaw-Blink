import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, SlidersHorizontal, ArrowUp } from 'lucide-react';
import { StoreConfig, buildWhatsAppUrl } from '../data/storeData';

interface FooterProps {
  config: StoreConfig;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-zinc-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <a
              href="#"
              className="font-editorial text-3xl tracking-widest font-semibold text-white uppercase inline-block mb-3"
            >
              {config.name}
            </a>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm mb-6">
              Contemporary men’s fashion in Ahmedabad. Where modern styling, comfort, and individuality come together.
            </p>

            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <span className="text-amber-400 font-semibold">★ {config.googleRating} Google Rating</span>
              <span className="text-zinc-700">·</span>
              <span>{config.reviewCount.toLocaleString()}+ Reviews</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-zinc-300 font-semibold mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-light">
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  The Latest Edit
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Macaw Blink
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-white transition-colors">
                  Fashion Lookbook
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#store" className="hover:text-white transition-colors">
                  Visit Store & Directions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Store & Timings */}
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest text-zinc-300 font-semibold mb-4">
              Flagship Boutique
            </div>
            
            <div className="space-y-3 text-xs text-zinc-300 font-light mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <span>
                  {config.addressLine1}, {config.addressLine2}, {config.addressLandmark}, {config.city}, {config.state} {config.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                <a href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {config.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>{config.hoursDisplay}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={buildWhatsAppUrl(config.whatsappNumber, `Hi ${config.name}, I am visiting from your website.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-200 text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={config.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-200 text-xs transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>Directions</span>
              </a>

              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-zinc-400 hover:text-white text-xs transition-colors ml-auto"
                title="Store Owner CMS Editor"
              >
                <SlidersHorizontal className="w-3 h-3" />
                <span>Owner CMS</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-light">
          <div>
            © 2026 {config.name}. All rights reserved. Ahmedabad, Gujarat, India.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-zinc-400">
              Men’s Fashion & Clothing Store Ahmedabad
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
