import React from 'react';
import { Compass, Sparkles, Shirt, Store } from 'lucide-react';

export const WhyMacawBlink: React.FC = () => {
  const pillars = [
    {
      num: '01',
      icon: Compass,
      title: 'CONTEMPORARY STYLE',
      description:
        'Fashion-forward clothing designed for modern men who value clean cuts, balanced silhouettes, and quiet individuality.',
    },
    {
      num: '02',
      icon: Sparkles,
      title: 'QUALITY & COMFORT',
      description:
        'Clothing selected with everyday comfort, breathable fabric weights, and all-day wearability in mind for Ahmedabad’s seasons.',
    },
    {
      num: '03',
      icon: Shirt,
      title: 'CURATED COLLECTION',
      description:
        'A carefully presented selection spanning tailored shirts, structured tees, comfortable trousers, and essential accessories.',
    },
    {
      num: '04',
      icon: Store,
      title: 'PERSONAL IN-STORE EXPERIENCE',
      description:
        'Visit our flagship at Rudra Square to experience fabrics, try sizes, and receive personalized styling guidance in person.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
            THE IN-STORE ADVANTAGE
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight mb-4">
            WHY MACAW BLINK?
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            More than just a clothing store — an intentional wardrobe destination in Ahmedabad dedicated to authentic fit, comfort, and modern masculine style.
          </p>
        </div>

        {/* 4 Elegant Feature Cards with Hairline Dividers (Anti-Slop Zero-Pill) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white p-8 border border-zinc-200 flex flex-col justify-between transition-all duration-300 hover:border-zinc-400 hover:shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-editorial text-2xl text-zinc-400 font-light group-hover:text-zinc-900 transition-colors">
                      {pillar.num}
                    </span>
                    <Icon className="w-5 h-5 text-zinc-700 group-hover:text-zinc-950 transition-colors" />
                  </div>

                  <h3 className="font-editorial text-xl font-semibold tracking-wide text-zinc-950 mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center text-[11px] font-semibold tracking-wider uppercase text-zinc-400 group-hover:text-zinc-900 transition-colors">
                  <span>Store Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
