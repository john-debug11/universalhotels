import React from 'react';
import { ArrowUpRight, Beer, Wine, Utensils, Moon, Bed, Users } from 'lucide-react';

export interface ExperienceCategory {
  id: string;
  title: string;
  tagline: string;
  featuredVenues: string;
  imageUrl: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ExperiencesSectionProps {
  onSelectExperience: (categoryId: string) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onSelectExperience }) => {
  const categories: ExperienceCategory[] = [
    {
      id: 'pubs',
      title: 'Pubs & Locals',
      tagline: 'Cold draught beers, Sunday roasts, sunny beer gardens & live sport.',
      featuredVenues: 'The Tudor • The Harold • The Riley • Bat & Ball',
      imageUrl: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1000&auto=format&fit=crop',
      icon: Beer
    },
    {
      id: 'bars',
      title: 'Bars & Rooftops',
      tagline: 'Sunlit open-air cocktail terraces and atmospheric city skyline views.',
      featuredVenues: 'The Lord Roberts • Imperial Rooftop • Polo Lounge',
      imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
      icon: Wine
    },
    {
      id: 'dining',
      title: 'Dining & Banquets',
      tagline: 'From Priscilla’s Drag & Dine to Stix Hellenic Taverna & Ni Hao Cantonese.',
      featuredVenues: 'Priscilla’s • Stix Hellenic • Ni Hao • Satang Thai',
      imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop',
      icon: Utensils
    },
    {
      id: 'nightlife',
      title: 'Nightlife & Drag',
      tagline: 'Sydney’s premier 4am LGBTQIA+ superclubs, drag halls & DJ basements.',
      featuredVenues: 'Universal Sydney • Civic Underground • Oxford Underground',
      imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop',
      icon: Moon
    },
    {
      id: 'accommodation',
      title: 'Boutique Stays',
      tagline: 'Modern guest rooms in Surry Hills and on the Cooks River airport corridor.',
      featuredVenues: 'Crown Hotel Surry Hills • Riverview Hotel • Tempe Hotel',
      imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop',
      icon: Bed
    },
    {
      id: 'functions',
      title: 'Functions & Events',
      tagline: 'Private lounges, heritage saloons, and rooftops from 40 to 350+ guests.',
      featuredVenues: 'Sapphire Lounge • Civic Saloon • Bob’s Lounge',
      imageUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1000&auto=format&fit=crop',
      icon: Users
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#E7E2D9] pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
              SECTION 02 • HOSPITALITY PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#121314] tracking-tight">
              Find Your Experience
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              Six distinctive ways to enjoy Sydney. Whether dropping in for a counter lunch, booking a skyline terrace, or celebrating until 4am.
            </p>
          </div>

          <div className="text-xs text-neutral-500 font-medium">
            Curated across 16 Sydney destinations
          </div>
        </div>

        {/* 6 Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectExperience(cat.id)}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6 border border-black/10"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={cat.imageUrl}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle darkening overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                </div>

                {/* Top Badge & Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#C7A379]">
                    <Icon className="w-5 h-5" />
                  </span>

                  <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#A47844] text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-2 text-white">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-[#C7A379] transition-colors leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-200 line-clamp-2 leading-relaxed font-normal">
                    {cat.tagline}
                  </p>
                  <div className="pt-2 text-[11px] text-[#C7A379] font-medium tracking-wide border-t border-white/15">
                    {cat.featuredVenues}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
