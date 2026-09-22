import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export interface HeroSectionProps {
  onExploreVenues: () => void;
  onPlanEvent: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreVenues, onPlanEvent }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between bg-[#0B0C0D] text-white overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop"
          alt="Atmospheric Sydney pub dining and cocktail bar"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-in fade-in duration-1000"
          loading="eager"
        />
        {/* Subtle radial and linear gradients for editorial contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0D] via-[#0B0C0D]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0D]/90 via-[#0B0C0D]/50 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-12 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          
          {/* Eyebrow / Heritage Badge */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-[#A47844]/20 text-[#C7A379] border border-[#A47844]/40">
              <Sparkles className="w-3 h-3" />
              Sydney Hospitality Ecosystem • Est. 1998
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase bg-white/10 text-neutral-300 backdrop-blur-md">
              <Clock className="w-3 h-3 text-[#A47844]" /> 16 Venues • 4am Late Licenses
            </span>
          </div>

          {/* Primary Cinematic Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.95] tracking-tight text-[#FAF8F5]">
            SYDNEY VENUES.<br />
            <span className="text-[#C7A379] italic font-normal">MADE FOR GOOD TIMES.</span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl">
            Discover pubs, bars, dining, nightlife, accommodation and events across Sydney. From historic neighbourhood locals to vibrant 4am superclubs.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={onExploreVenues}
              iconRight={<ArrowUpRight className="w-4 h-4" />}
            >
              EXPLORE VENUES
            </Button>
            <Button
              variant="dark"
              size="lg"
              onClick={onPlanEvent}
              className="border-neutral-700 bg-white/5 hover:bg-white/10"
            >
              PLAN AN EVENT
            </Button>
          </div>

        </div>
      </div>

      {/* Ticker / Quick Stats Bar */}
      <div className="relative z-10 border-t border-neutral-800/80 bg-[#0B0C0D]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#C7A379] font-bold">
                16
              </div>
              <div>
                <span className="font-bold uppercase tracking-wider text-white block">Iconic Venues</span>
                <span className="text-neutral-400 text-[11px]">Across 6 Sydney Precincts</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#C7A379] font-bold">
                4AM
              </div>
              <div>
                <span className="font-bold uppercase tracking-wider text-white block">Late-Night Trade</span>
                <span className="text-neutral-400 text-[11px]">CBD, Darlinghurst & Surry Hills</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#C7A379] font-bold">
                3
              </div>
              <div>
                <span className="font-bold uppercase tracking-wider text-white block">Boutique Stays</span>
                <span className="text-neutral-400 text-[11px]">Surry Hills & Tempe Cooks River</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#C7A379] font-bold">
                350+
              </div>
              <div>
                <span className="font-bold uppercase tracking-wider text-white block">Event Capacity</span>
                <span className="text-neutral-400 text-[11px]">Rooftops, Saloons & Theatres</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
