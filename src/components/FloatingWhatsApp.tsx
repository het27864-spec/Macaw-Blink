import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { StoreConfig, buildWhatsAppUrl } from '../data/storeData';

interface FloatingWhatsAppProps {
  config: StoreConfig;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ config }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    `Hi ${config.name}, I found your website and would like to know more about your latest collection.`
  );

  return (
    <div className="fixed bottom-20 lg:bottom-8 right-6 z-40 flex items-center gap-3">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-zinc-900 px-3.5 py-2 border border-zinc-200 shadow-xl text-xs font-medium animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Chat with Macaw Blink</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss chat tooltip"
            className="text-zinc-400 hover:text-zinc-700 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Macaw Blink on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
