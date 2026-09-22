import React, { useState, useEffect, useMemo } from 'react';
import { 
  Building2, 
  Search, 
  MapPin, 
  Filter, 
  Sparkles, 
  Bed, 
  Users, 
  X, 
  SlidersHorizontal,
  ArrowUpDown,
  Compass,
  Check
} from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { VenueCard } from '../components/ui/VenueCard';
import { VENUE_DATABASE, VenueRecord } from '../data/venueDatabase';
import { VENUE_PHOTOGRAPHY } from '../data/imagery';
import { TableBookingModal } from '../components/home/TableBookingModal';

export interface VenuesDirectoryPageProps {
  onNavigate: (path: string) => void;
  initialLocation?: string;
}

export const VenuesDirectoryPage: React.FC<VenuesDirectoryPageProps> = ({ onNavigate, initialLocation }) => {
  // Verified locations as mandated: Only locations with verified Universal Hotels venues!
  const VERIFIED_LOCATIONS = [
    { id: 'all', label: 'All Locations' },
    { id: 'Sydney CBD', label: 'Sydney CBD' },
    { id: 'Darlinghurst', label: 'Darlinghurst' },
    { id: 'Surry Hills', label: 'Surry Hills' },
    { id: 'Redfern', label: 'Redfern' },
    { id: 'Tempe', label: 'Tempe' },
    { id: 'Erskineville', label: 'Erskineville' },
    { id: 'Eastwood', label: 'Eastwood' },
    { id: 'Enfield', label: 'Enfield' },
    { id: 'Forest Lodge', label: 'Forest Lodge' }
  ];

  // Venue Types filter options
  const VENUE_TYPES = [
    { id: 'all', label: 'All Types' },
    { id: 'pub', label: 'Pubs & Saloons' },
    { id: 'nightlife', label: 'Nightlife & Drag' },
    { id: 'dining', label: 'Dining & Tavernas' },
    { id: 'accommodation', label: 'Boutique Hotels' },
    { id: 'rooftop', label: 'Rooftop Terraces' }
  ];

  // Experience filter options
  const EXPERIENCES = [
    { id: 'all', label: 'All Experiences' },
    { id: 'dining', label: 'Dining' },
    { id: 'bar', label: 'Bars & Cocktails' },
    { id: 'nightlife', label: 'Nightlife & 4am' },
    { id: 'drag', label: 'Drag & Cabaret' },
    { id: 'sport', label: 'Live Sport & TAB' }
  ];

  // State
  const [selectedLocation, setSelectedLocation] = useState<string>(initialLocation || 'all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedExperience, setSelectedExperience] = useState<string>('all');
  const [filterFunctionsOnly, setFilterFunctionsOnly] = useState<boolean>(false);
  const [filterAccommodationOnly, setFilterAccommodationOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBookingVenue, setSelectedBookingVenue] = useState<VenueRecord | null>(null);

  // SEO
  useEffect(() => {
    document.title = 'Sydney Venues Directory | Universal Hotels Australia';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Browse 16 verified Universal Hotels venues across Sydney. Filter by Sydney CBD, Darlinghurst, Surry Hills, Redfern, Tempe, Erskineville, and venue types.'
      );
    }
  }, []);

  // Filter logic
  const filteredVenues = useMemo(() => {
    return VENUE_DATABASE.filter(venue => {
      // Location filter
      if (selectedLocation !== 'all') {
        const matchLocation = venue.locationSuburb.toLowerCase().includes(selectedLocation.toLowerCase());
        if (!matchLocation) return false;
      }

      // Venue type filter
      if (selectedType !== 'all') {
        const typeStr = venue.venueType.toLowerCase();
        if (selectedType === 'pub' && !typeStr.includes('pub') && !typeStr.includes('saloon')) return false;
        if (selectedType === 'nightlife' && !typeStr.includes('club') && !typeStr.includes('drag') && !typeStr.includes('nightlife')) return false;
        if (selectedType === 'dining' && !typeStr.includes('dining') && !typeStr.includes('taverna') && !typeStr.includes('bistro')) return false;
        if (selectedType === 'accommodation' && !venue.accommodation.toLowerCase().includes('room') && !venue.accommodation.toLowerCase().includes('stay') && !venue.venueType.toLowerCase().includes('hotel')) return false;
        if (selectedType === 'rooftop' && !venue.description.toLowerCase().includes('rooftop') && !venue.venueType.toLowerCase().includes('rooftop')) return false;
      }

      // Experience filter
      if (selectedExperience !== 'all') {
        if (selectedExperience === 'dining' && !venue.dining) return false;
        if (selectedExperience === 'bar' && !venue.bar) return false;
        if (selectedExperience === 'nightlife' && (!venue.nightlife || venue.nightlife.includes('None'))) return false;
        if (selectedExperience === 'drag' && !venue.entertainment.toLowerCase().includes('drag') && !venue.description.toLowerCase().includes('drag')) return false;
        if (selectedExperience === 'sport' && !venue.entertainment.toLowerCase().includes('sport') && !venue.notes.toLowerCase().includes('sport') && !venue.description.toLowerCase().includes('sport')) return false;
      }

      // Functions toggle
      if (filterFunctionsOnly && (!venue.functionSpaces || venue.functionSpaces.length === 0)) {
        return false;
      }

      // Accommodation toggle
      if (filterAccommodationOnly && (venue.accommodation === 'None on site.' || !venue.accommodation)) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuery = 
          venue.venueName.toLowerCase().includes(q) ||
          venue.locationSuburb.toLowerCase().includes(q) ||
          venue.address.toLowerCase().includes(q) ||
          venue.venueType.toLowerCase().includes(q) ||
          venue.description.toLowerCase().includes(q) ||
          venue.dining.toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      return true;
    });
  }, [selectedLocation, selectedType, selectedExperience, filterFunctionsOnly, filterAccommodationOnly, searchQuery]);

  const handleResetFilters = () => {
    setSelectedLocation('all');
    setSelectedType('all');
    setSelectedExperience('all');
    setFilterFunctionsOnly(false);
    setFilterAccommodationOnly(false);
    setSearchQuery('');
  };

  const hasActiveFilters = 
    selectedLocation !== 'all' || 
    selectedType !== 'all' || 
    selectedExperience !== 'all' || 
    filterFunctionsOnly || 
    filterAccommodationOnly || 
    searchQuery.length > 0;

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      
      {/* Header Banner */}
      <section className="bg-[#121314] text-white pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Venues', href: '/venues' }
            ]}
          />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C7A379] block">
                UNIVERSAL HOTELS DIRECTORY
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#FAF8F5] tracking-tight">
                Explore All Sydney Venues
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 font-normal">
                Discover 16 authentic pubs, live entertainment venues, drag performance halls, boutique hotels, and event spaces across Sydney.
              </p>
            </div>

            {/* Quick Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search venue, suburb, keyword..."
                className="w-full pl-10 pr-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-hidden focus:border-[#A47844]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Matrix Section */}
      <section className="bg-white border-b border-[#E7E2D9] sticky top-16 z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
          
          {/* Row 1: Verified Location Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] uppercase font-bold text-neutral-400 flex items-center gap-1 mr-2 flex-shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#A47844]" /> Location:
            </span>
            {VERIFIED_LOCATIONS.map(loc => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedLocation === loc.id
                    ? 'bg-[#121314] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-neutral-700 hover:bg-[#EFECE6] border border-[#E7E2D9]'
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>

          {/* Row 2: Type, Experience & Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1 border-t border-[#F0ECE4] text-xs">
            
            <div className="flex flex-wrap items-center gap-3">
              {/* Type Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-neutral-500 font-medium">Type:</span>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-2.5 py-1.5 bg-[#FAF8F5] border border-[#E2DDD4] rounded-md text-xs text-neutral-800"
                >
                  {VENUE_TYPES.map(vt => (
                    <option key={vt.id} value={vt.id}>{vt.label}</option>
                  ))}
                </select>
              </div>

              {/* Experience Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-neutral-500 font-medium">Experience:</span>
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="px-2.5 py-1.5 bg-[#FAF8F5] border border-[#E2DDD4] rounded-md text-xs text-neutral-800"
                >
                  {EXPERIENCES.map(ex => (
                    <option key={ex.id} value={ex.id}>{ex.label}</option>
                  ))}
                </select>
              </div>

              {/* Function Spaces Toggle */}
              <button
                onClick={() => setFilterFunctionsOnly(!filterFunctionsOnly)}
                className={`px-2.5 py-1.5 rounded-md flex items-center gap-1.5 border transition-colors cursor-pointer ${
                  filterFunctionsOnly
                    ? 'bg-[#A47844] text-white border-[#A47844]'
                    : 'bg-[#FAF8F5] text-neutral-700 border-[#E2DDD4] hover:bg-[#EFECE6]'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Functions</span>
              </button>

              {/* Accommodation Toggle */}
              <button
                onClick={() => setFilterAccommodationOnly(!filterAccommodationOnly)}
                className={`px-2.5 py-1.5 rounded-md flex items-center gap-1.5 border transition-colors cursor-pointer ${
                  filterAccommodationOnly
                    ? 'bg-[#A47844] text-white border-[#A47844]'
                    : 'bg-[#FAF8F5] text-neutral-700 border-[#E2DDD4] hover:bg-[#EFECE6]'
                }`}
              >
                <Bed className="w-3.5 h-3.5" />
                <span>Accommodation</span>
              </button>
            </div>

            {/* Results Count & Clear */}
            <div className="flex items-center gap-3">
              <span className="text-neutral-500 font-medium">
                Showing <strong>{filteredVenues.length}</strong> of {VENUE_DATABASE.length} venues
              </span>

              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="text-[#A47844] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" /> Reset
                </button>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Venues Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredVenues.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#E7E2D9] max-w-lg mx-auto space-y-3">
            <Building2 className="w-10 h-10 text-neutral-400 mx-auto" />
            <h3 className="font-serif text-2xl text-neutral-900">No Venues Found</h3>
            <p className="text-xs text-neutral-600">
              No verified Universal Hotels properties match your current filter selection. Try adjusting the suburb or category.
            </p>
            <div className="pt-2">
              <Button variant="outline" size="sm" onClick={handleResetFilters}>
                Clear All Filters
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVenues.map(venue => {
              const photoKey = venue.url.split('/').pop() || '';
              const curatedPhoto = VENUE_PHOTOGRAPHY[photoKey]?.[0]?.url;

              return (
                <VenueCard
                  key={venue.url}
                  venue={venue}
                  imageUrl={curatedPhoto}
                  onBook={(v) => setSelectedBookingVenue(v)}
                  onExplore={(v) => onNavigate(v.url)}
                />
              );
            })}
          </div>
        )}
      </section>

      {/* Table Booking Modal */}
      <TableBookingModal
        venue={selectedBookingVenue}
        isOpen={!!selectedBookingVenue}
        onClose={() => setSelectedBookingVenue(null)}
      />

    </div>
  );
};
