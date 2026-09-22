import React from 'react';
import { ArrowUpRight, Phone, Mail, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export interface FinalCtaSectionProps {
  onExploreVenues: () => void;
  onPlanEvent: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onExploreVenues, onPlanEvent }) => {
  return (
    <section className="relative py-24 lg:py-36 bg-[#0B0C0D] text-white overflow-hidden">
      {/* Subtle Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2000&auto=format&fit=crop"
          alt="Atmospheric Sydney nightlife lights"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0D] via-[#0B0C0D]/80 to-[#0B0C0D]/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[#A47844]/20 text-[#C7A379] border border-[#A47844]/40 mx-auto">
          <Sparkles className="w-3.5 h-3.5" />
          The Sydney Social Standard
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal leading-[0.95] tracking-tight text-[#FAF8F5]">
          WHEREVER THE NIGHT TAKES YOU.
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
          From sunset spritzes on Stanley Street to midnight feasts, drag spectaculars, and boutique stays. Experience Sydney's most dynamic hospitality ecosystem.
        </p>

        {/* Conversion Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onExploreVenues}
            iconRight={<ArrowUpRight className="w-4 h-4" />}
          >
            EXPLORE ALL 16 VENUES
          </Button>

          <Button
            variant="dark"
            size="lg"
            onClick={onPlanEvent}
            className="border-neutral-700 bg-white/10 hover:bg-white/15 text-white"
          >
            PLAN AN EVENT
          </Button>
        </div>

        {/* Fast Contact Strip */}
        <div className="pt-8 border-t border-neutral-800/80 max-w-md mx-auto flex items-center justify-center gap-6 text-xs text-neutral-400">
          <a href="tel:0280807000" className="flex items-center gap-2 hover:text-[#C7A379] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#C7A379]" /> (02) 8080 7000
          </a>
          <span>•</span>
          <a href="mailto:info@universalhotels.com.au" className="flex items-center gap-2 hover:text-[#C7A379] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#C7A379]" /> info@universalhotels.com.au
          </a>
        </div>

      </div>
    </section>
  );
};
