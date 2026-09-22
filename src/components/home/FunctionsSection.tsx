import React from 'react';
import { Users, Sparkles, GlassWater, Building, CalendarCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export interface FunctionsSectionProps {
  onPlanEvent: () => void;
  onNavigate?: (path: string) => void;
}

export const FunctionsSection: React.FC<FunctionsSectionProps> = ({ onPlanEvent, onNavigate }) => {
  const eventTypes = [
    {
      slug: 'birthday-parties',
      title: 'Birthday Parties & Milestones',
      description: '21st, 30th, 40th and milestone celebrations in private cocktail lounges with bespoke beverage packages.',
      spaces: 'Sapphire Lounge • Polo Lounge • Bob’s Lounge',
      capacity: '40–200 Guests',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop'
    },
    {
      slug: 'corporate-events',
      title: 'Corporate Events & Networking',
      description: 'High-impact AV presentation rigs, cocktail mixers, product showcases, and full venue buyouts in the CBD.',
      spaces: 'Civic Underground • Civic Saloon • Sapphire Lounge',
      capacity: '50–300 Guests',
      imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop'
    },
    {
      slug: 'engagement-parties',
      title: 'Engagements & Celebrations',
      description: 'Open-air skyline rooftops, sunset spritz bars, and intimate dining rooms designed for unforgettable toasts.',
      spaces: 'The Rooftop at Lord Roberts • Imperial Rooftop',
      capacity: '50–150 Guests',
      imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop'
    },
    {
      slug: 'christmas-parties',
      title: 'Christmas & End-of-Year Parties',
      description: 'End-of-year festive celebrations with premium canapé tiers, open bars, and late-night 4am after-parties.',
      spaces: 'Ni Hao Bar • Tempe Function Hall • Oxford Underground',
      capacity: '60–350 Guests',
      imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#121314] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-neutral-800 pb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[#C7A379] font-bold text-xs tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5" /> SECTION 04 • FUNCTIONS & EVENTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#FAF8F5] tracking-tight">
              Spaces Designed for Unforgettable Moments
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
              From intimate private dining rooms and sunlit rooftop terraces to full 350-guest nightclub takeovers with 4am licenses. Our dedicated events team matches you with the perfect space.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate?.('/functions')}
              className="border-neutral-700 text-white hover:bg-neutral-800"
            >
              EXPLORE ALL SPACES
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={onPlanEvent}
              iconRight={<ArrowUpRight className="w-4 h-4" />}
            >
              PLAN YOUR EVENT
            </Button>
          </div>
        </div>

        {/* 4 Featured Event Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((et, i) => (
            <div
              key={i}
              onClick={() => onNavigate?.(`/functions/${et.slug}`)}
              className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-[#A47844] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                  <img
                    src={et.imageUrl}
                    alt={et.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#C7A379] border border-white/10">
                      {et.capacity}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C7A379] transition-colors leading-snug">
                    {et.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {et.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-neutral-800 text-[11px] text-[#C7A379]">
                  <span className="text-neutral-500 block text-[10px] uppercase font-bold tracking-wider">Recommended Spaces:</span>
                  <span className="font-medium">{et.spaces}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Guarantee Strip */}
        <div className="mt-12 bg-neutral-900/60 rounded-2xl p-6 sm:p-8 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-300">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C7A379] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white uppercase tracking-wide block">Dedicated Event Manager</span>
                <span className="text-neutral-400">Personalized planning from enquiry to execution.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C7A379] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white uppercase tracking-wide block">Tailored Food & Beverage</span>
                <span className="text-neutral-400">Canapés, banquets, craft taps & custom cocktails.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C7A379] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white uppercase tracking-wide block">Late Night Flexibility</span>
                <span className="text-neutral-400">Late licenses until 4am across select venues.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
