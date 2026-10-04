import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, SlidersHorizontal, MapPin } from 'lucide-react';
import { StoreConfig, buildWhatsAppUrl, getStoreStatus } from '../data/storeData';

interface HeaderProps {
  config: StoreConfig;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const storeStatus = getStoreStatus(config);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generalWhatsAppUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    `Hi ${config.name}, I found your website and would like to know more about your latest collection.`
  );

  return (
    <>
      {/* Top micro-announcement bar */}
      <aside aria-label="Store Information" className="bg-zinc-950 text-zinc-300 text-xs py-2 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-zinc-300" />
              <span>Judges Bungalow Rd, Ahmedabad</span>
            </span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${storeStatus.dotClass}`} />
              <span className="text-zinc-300 font-medium">{storeStatus.statusText}</span>
              <span className="text-zinc-400">({storeStatus.detailText})</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{config.phone}</span>
            </a>
            <button
              onClick={onOpenAdmin}
              className="text-zinc-500 hover:text-zinc-300 text-[11px] uppercase tracking-wider transition-colors flex items-center gap-1"
              title="Store Owner CMS Editor"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span className="hidden md:inline">CMS</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md shadow-sm py-3.5 border-b border-zinc-200/80'
            : 'bg-[#FAF9F5] py-5 border-b border-zinc-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Single element wordmark (Display Face) */}
            <a
              href="#"
              className="font-editorial text-2xl sm:text-3xl tracking-wider font-semibold text-zinc-950 uppercase hover:opacity-85 transition-opacity"
            >
              {config.name}
            </a>

            {/* Zone 2: 5-6 Clean Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-zinc-700">
              <a href="#collection" className="hover:text-zinc-950 transition-colors">
                Collection
              </a>
              <a href="#products" className="hover:text-zinc-950 transition-colors">
                New Arrivals
              </a>
              <a href="#about" className="hover:text-zinc-950 transition-colors">
                About
              </a>
              <a href="#lookbook" className="hover:text-zinc-950 transition-colors">
                Lookbook
              </a>
              <a href="#reviews" className="hover:text-zinc-950 transition-colors">
                Reviews
              </a>
              <a href="#store" className="hover:text-zinc-950 transition-colors">
                Visit Store
              </a>
              <a href="#contact" className="hover:text-zinc-950 transition-colors">
                Contact
              </a>
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wider uppercase text-zinc-900 bg-white border border-zinc-300 hover:bg-zinc-50 hover:border-zinc-400 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href="#collection"
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-zinc-950 hover:bg-zinc-800 transition-colors shadow-sm"
              >
                Explore Collection
              </a>
            </div>

            {/* Mobile hamburger button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us"
                className="p-2 text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 text-zinc-800 hover:text-black transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F5] border-b border-zinc-200 px-6 py-6 animate-in slide-in-from-top-2 duration-200 shadow-xl">
            <nav className="flex flex-col gap-4 text-base font-medium text-zinc-800">
              <a
                href="#collection"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950 border-b border-zinc-100"
              >
                The Latest Edit
              </a>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950 border-b border-zinc-100"
              >
                New Arrivals
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950 border-b border-zinc-100"
              >
                About Macaw Blink
              </a>
              <a
                href="#lookbook"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950 border-b border-zinc-100"
              >
                Fashion Lookbook
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950 border-b border-zinc-100"
              >
                Customer Reviews (4.9 ★)
              </a>
              <a
                href="#store"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950 border-b border-zinc-100"
              >
                Store Location & Hours
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950"
              >
                Contact Us
              </a>
            </nav>

            <div className="mt-6 pt-4 border-t border-zinc-200 flex flex-col gap-3">
              <a
                href="#collection"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-zinc-950 text-white text-xs font-semibold uppercase tracking-wider"
              >
                Explore Collection
              </a>
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 bg-white border border-zinc-300 text-zinc-900 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
