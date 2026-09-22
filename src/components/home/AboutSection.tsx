import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, History, Award, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { UniversalHotelsLogo } from '../brand/UniversalHotelsLogo';

export interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F1EA] border-t border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-neutral-300">
              <img
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1000&auto=format&fit=crop"
                alt="Historic Art Deco facade in Sydney CBD"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C7A379] block">
                  HERITAGE & STEWARDSHIP
                </span>
                <p className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                  Independent & Family-Owned Since 1998
                </p>
              </div>
            </div>

            {/* Float Card */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-white p-5 rounded-2xl border border-[#E2DDD4] shadow-lg max-w-xs space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#A47844] block">Kospetas Family Vision</span>
              <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                Preserving Sydney's heritage pub fabric while pioneering inclusive queer nightlife and authentic gastronomy.
              </p>
            </div>
          </div>

          {/* Right Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <UniversalHotelsLogo
                variant="dark"
                height={40}
                showWordmark={true}
                showSubtitle={true}
                subtitleText="Established 1998 • Kospetas Family Hospitality"
              />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#121314] tracking-tight">
                Sydney Hospitality with Soul, History & Character
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              Founded in 1998 by the <strong>Kospetas family</strong>, Universal Hotels Australia has grown from a single CBD venue into an independent Sydney hospitality ecosystem encompassing 16 iconic properties.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              We operate across diverse hospitality disciplines: custodians of centennial heritage corner pubs, champions of world-renowned LGBTQIA+ entertainment at Universal Sydney and The Imperial Erskineville, curators of intimate rooftop cocktail sanctuaries, and providers of boutique accommodation.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-white rounded-xl border border-[#E2DDD4] space-y-1">
                <History className="w-5 h-5 text-[#A47844]" />
                <span className="font-bold text-xs text-neutral-900 block pt-1">Heritage Preservation</span>
                <p className="text-[11px] text-neutral-500">Restoring centennial venues like The Oxford, Civic, and Tudor.</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E2DDD4] space-y-1">
                <HeartHandshake className="w-5 h-5 text-[#A47844]" />
                <span className="font-bold text-xs text-neutral-900 block pt-1">Inclusive Culture</span>
                <p className="text-[11px] text-neutral-500">World-class drag performance art and safe community spaces.</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E2DDD4] space-y-1">
                <ShieldCheck className="w-5 h-5 text-[#A47844]" />
                <span className="font-bold text-xs text-neutral-900 block pt-1">Independent Group</span>
                <p className="text-[11px] text-neutral-500">Family-owned and operated in Sydney for over 28 years.</p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                onClick={onLearnMore}
                iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Learn More About Our Story
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
