import React, { useState } from 'react';
import { Building2, ArrowUpRight, Search, MapPin } from 'lucide-react';
import { VenueCard } from '../ui/VenueCard';
import { FilterBar } from '../ui/FilterBar';
import { Button } from '../ui/Button';
import { VENUE_DATABASE, VenueRecord } from '../../data/venueDatabase';
import { VENUE_PHOTOGRAPHY } from '../../data/imagery';

export interface VenuesSectionProps {
  onBookVenue: (venue: VenueRecord) => void;
  onExploreVenue: (venue: VenueRecord) => void;
}

export const VenuesSection: React.FC<VenuesSectionProps> = ({ onBookVenue, onExploreVenue }) => {
  const [selectedPrecinct, setSelectedPrecinct] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const precinctOptions = [
    { id: 'all', label: 'All Venues', count: VENUE_DATABASE.length },
    { id: 'cbd', label: 'CBD & Haymarket', count: 3 },
    { id: 'darlinghurst', label: 'Darlinghurst & Oxford St', count: 4 },
    { id: 'surry', label: 'Surry Hills & Redfern', count: 3 },
    { id: 'innerwest', label: 'Inner West', count: 3 },
    { id: 'tempe', label: 'Tempe & Cooks River', count: 2 },
    { id: 'north', label: 'Eastwood', count: 1 }
  ];

  const filteredVenues = VENUE_DATABASE.filter(venue => {
    // Precinct filter
    if (selectedPrecinct === 'cbd' && !['Sydney CBD', 'Haymarket / Chinatown'].includes(venue.locationSuburb)) return false;
    if (selectedPrecinct === 'darlinghurst' && !['Darlinghurst', 'Darlinghurst / East Sydney'].includes(venue.locationSuburb)) return false;
    if (selectedPrecinct === 'surry' && !['Surry Hills', 'Redfern', 'Surry Hills / Central'].includes(venue.locationSuburb)) return false;
    if (selectedPrecinct === 'innerwest' && !['Erskineville', 'Forest Lodge', 'Enfield'].includes(venue.locationSuburb)) return false;
    if (selectedPrecinct === 'tempe' && !venue.locationSuburb.includes('Tempe')) return false;
    if (selectedPrecinct === 'north' && !venue.locationSuburb.includes('Eastwood')) return false;

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        venue.venueName.toLowerCase().includes(q) ||
        venue.locationSuburb.toLowerCase().includes(q) ||
        venue.venueType.toLowerCase().includes(q) ||
        venue.description.toLowerCase().includes(q)
      );
    }

    return true;
  });

  return (
    <section id="venues-section" className="py-20 lg:py-28 bg-[#F5F1EA] border-y border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
              SECTION 03 • MASTER DIRECTORY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#121314] tracking-tight">
              Explore Our Venues
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              Every venue has its own personality, history, and culinary identity. Explore 16 hospitality destinations across Sydney.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, suburb, pub..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#E2DDD4] rounded-lg text-xs text-neutral-800 placeholder:text-neutral-400 focus:outline-hidden focus:border-[#A47844]"
            />
          </div>
        </div>

        {/* Precinct Filter Pills */}
        <div className="mb-10">
          <FilterBar
            options={precinctOptions}
            selectedId={selectedPrecinct}
            onSelect={setSelectedPrecinct}
          />
        </div>

        {/* Venues Grid */}
        {filteredVenues.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#E7E2D9] space-y-3">
            <Building2 className="w-8 h-8 text-neutral-400 mx-auto" />
            <h3 className="font-serif text-xl text-neutral-800">No matching venues found</h3>
            <p className="text-xs text-neutral-500">Try adjusting your search terms or filter selection.</p>
            <Button variant="outline" size="sm" onClick={() => { setSelectedPrecinct('all'); setSearchQuery(''); }}>
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVenues.map(venue => {
              // Find matching curated photo
              const photoKey = venue.url.split('/').pop() || '';
              const curatedPhoto = VENUE_PHOTOGRAPHY[photoKey]?.[0]?.url;

              return (
                <VenueCard
                  key={venue.url}
                  venue={venue}
                  imageUrl={curatedPhoto}
                  onBook={onBookVenue}
                  onExplore={onExploreVenue}
                />
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
