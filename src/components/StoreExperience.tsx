import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { StoreConfig, getStoreStatus, buildWhatsAppUrl } from '../data/storeData';

interface StoreExperienceProps {
  config: StoreConfig;
}

export const StoreExperience: React.FC<StoreExperienceProps> = ({ config }) => {
  const storeStatus = getStoreStatus(config);
  const whatsappUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    `Hi ${config.name}, I am planning to visit your store on Judges Bungalow Road today. Could you share your location and current timings?`
  );

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <section id="store" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
            PHYSICAL FLAGSHIP
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight mb-4">
            COME FIND YOUR STYLE.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            Step into our Ahmedabad boutique to explore our full ready-to-wear collection in person. Feel fabrics, try fits, and consult our styling team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Store Location Details & Hours Card */}
          <div className="lg:col-span-5 bg-white border border-zinc-200 p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Live Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium border mb-6 bg-zinc-50 border-zinc-200">
                <span className={`w-2 h-2 rounded-full ${storeStatus.dotClass}`} />
                <span className="font-semibold text-zinc-900">{storeStatus.statusText}</span>
                <span className="text-zinc-500">· {storeStatus.detailText}</span>
              </div>

              {/* Store Title & Address */}
              <h3 className="font-editorial text-2xl sm:text-3xl text-zinc-950 font-semibold mb-3">
                {config.name} Flagship
              </h3>

              <div className="space-y-1 text-sm text-zinc-700 leading-relaxed font-light mb-6">
                <div className="font-medium text-zinc-900">{config.addressLine1}</div>
                <div>{config.addressLine2}</div>
                <div className="text-zinc-600">{config.addressLandmark}</div>
                <div className="text-zinc-600">{config.city}, {config.state} {config.pincode}</div>
              </div>

              {/* Hours Schedule */}
              <div className="pt-6 border-t border-zinc-200 mb-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">
                  <Clock className="w-3.5 h-3.5 text-zinc-700" />
                  <span>Store Hours</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  {days.map((day) => (
                    <div key={day} className="flex justify-between items-center text-zinc-600 py-0.5">
                      <span className="font-medium text-zinc-800">{day}</span>
                      <span className="tabular-nums">10:30 AM – 10:30 PM</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-6 border-t border-zinc-200">
              <a
                href={config.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-900 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Store</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-900 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Google Maps Embed + Store Photography */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Map Frame */}
            <div className="w-full h-80 sm:h-96 bg-zinc-200 border border-zinc-200 overflow-hidden relative shadow-xs">
              <iframe
                title="Macaw Blink Ahmedabad Store Location Map"
                src="https://maps.google.com/maps?q=Judges+Bungalow+Road+opposite+Pride+Plaza+Hotel+Ahmedabad+Gujarat+380015&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-110"
              />

              {/* Map Floating Location Pin Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-sm p-3.5 border border-zinc-200 shadow-md text-xs max-w-sm pointer-events-none">
                <div className="font-semibold text-zinc-950 font-editorial text-base">
                  Macaw Blink
                </div>
                <div className="text-zinc-600 mt-0.5">
                  Rudra Square, Basement 42–47, Judges Bungalow Rd
                </div>
                <div className="text-emerald-700 font-medium text-[11px] mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Opposite Pride Plaza Hotel
                </div>
              </div>
            </div>

            {/* Store Photos Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[16/9] overflow-hidden bg-zinc-100 border border-zinc-200">
                <img
                  src="/src/assets/images/store_interior_luxury_1791124826476.jpg"
                  alt="Macaw Blink Boutique Display"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="aspect-[16/9] overflow-hidden bg-zinc-100 border border-zinc-200">
                <img
                  src="/src/assets/images/category_menswear_detail_1791124867792.jpg"
                  alt="Folded Men's Cotton Shirts"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
