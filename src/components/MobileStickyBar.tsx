import React from 'react';
import { Phone, MessageCircle, Navigation, Compass } from 'lucide-react';
import { StoreConfig, buildWhatsAppUrl } from '../data/storeData';

interface MobileStickyBarProps {
  config: StoreConfig;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ config }) => {
  const whatsappUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    `Hi ${config.name}, I would like to inquire about your menswear collection.`
  );

  return (
    <aside
      aria-label="Quick Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 text-white shadow-2xl safe-area-bottom"
    >
      <div className="grid grid-cols-4 divide-x divide-zinc-800 text-center py-2 px-1">
        
        {/* Call */}
        <a
          href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
          className="flex flex-col items-center justify-center py-1 text-zinc-300 hover:text-white transition-colors"
        >
          <Phone className="w-4 h-4 mb-0.5 text-zinc-400" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider font-semibold">WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={config.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-zinc-300 hover:text-white transition-colors"
        >
          <Navigation className="w-4 h-4 mb-0.5 text-zinc-400" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Directions</span>
        </a>

        {/* Explore */}
        <a
          href="#collection"
          className="flex flex-col items-center justify-center py-1 text-zinc-300 hover:text-white transition-colors"
        >
          <Compass className="w-4 h-4 mb-0.5 text-zinc-400" />
          <span className="text-[10px] uppercase tracking-wider font-medium">Explore</span>
        </a>

      </div>
    </aside>
  );
};
