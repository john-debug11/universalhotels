import React from 'react';
import { MapPin, ArrowUpRight, Compass } from 'lucide-react';
import { LOCATION_TAXONOMY, LocationTaxonomyNode } from '../../data/informationArchitecture';

export interface DiscoverSydneySectionProps {
  onSelectPrecinct: (precinctSlug: string) => void;
}

export const DiscoverSydneySection: React.FC<DiscoverSydneySectionProps> = ({ onSelectPrecinct }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-[#E7E2D9] pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
              SECTION 07 • PRECINCT EXPLORER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#121314] tracking-tight">
              Discover Sydney by Precinct
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              Explore our venues across Sydney's most celebrated neighbourhoods. From the bustling CBD lights and vibrant Oxford Street strip to leafy Redfern courtyards and the Cooks River.
            </p>
          </div>

          <div className="text-xs text-neutral-500 font-medium">
            6 Connected Sydney Hospitality Hubs
          </div>
        </div>

        {/* Precincts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LOCATION_TAXONOMY.map(cluster => (
            <div
              key={cluster.regionId}
              onClick={() => onSelectPrecinct(cluster.regionId)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-[#E7E2D9] hover:border-[#C7A379] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#A47844]">
                    <MapPin className="w-3.5 h-3.5" />
                    {cluster.venues.length} Venues
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#FAF8F5] group-hover:bg-[#121314] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white" />
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#121314] group-hover:text-[#A47844] transition-colors leading-tight">
                    {cluster.regionName}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Suburbs: {cluster.suburbs.join(', ')}
                  </p>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                  {cluster.editorialBlurb}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EFECE6] space-y-2">
                <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">
                  Featured Venues in Hub:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cluster.venues.map((v, i) => (
                    <span key={i} className="text-[11px] font-medium bg-[#FAF8F5] text-neutral-700 px-2 py-0.5 rounded border border-[#EAE5DC]">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

