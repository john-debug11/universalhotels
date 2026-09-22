import React, { useState, useMemo } from 'react';
import { 
  Users, 
  MapPin, 
  Sparkles, 
  Search, 
  SlidersHorizontal, 
  CheckCircle2, 
  ArrowUpRight, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Calendar,
  Layers,
  Volume2,
  Tv,
  Sun,
  Wine
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { VENUE_DETAILS, VenueDetailRecord } from '../../data/venueDetails';
import { VENUE_DATABASE, VenueRecord } from '../../data/venueDatabase';
import { EventEnquiryModal } from '../home/EventEnquiryModal';

export interface VenueFinderProps {
  onNavigate: (path: string) => void;
  defaultEventType?: string;
  defaultLocation?: string;
}

export const VenueFinder: React.FC<VenueFinderProps> = ({
  onNavigate,
  defaultEventType = 'all',
  defaultLocation = 'all'
}) => {
  // Filter Options
  const EVENT_TYPES = [
    { id: 'all', label: 'All Event Types' },
    { id: 'Birthday', label: 'Birthday Parties' },
    { id: 'Corporate', label: 'Corporate Events' },
    { id: 'Private Party', label: 'Private Party' },
    { id: 'Engagement', label: 'Engagement Parties' },
    { id: 'Christmas Party', label: 'Christmas Parties' },
    { id: 'Group Event', label: 'Group Dining' }
  ];

  const GUEST_RANGES = [
    { id: 'all', label: 'Any Guest Count', min: 1, max: 9999 },
    { id: '1-20', label: '1–20 Guests', min: 1, max: 20 },
    { id: '21-50', label: '21–50 Guests', min: 21, max: 50 },
    { id: '51-100', label: '51–100 Guests', min: 51, max: 100 },
    { id: '101-200', label: '101–200 Guests', min: 101, max: 200 },
    { id: '200+', label: '200+ Guests', min: 200, max: 9999 }
  ];

  const LOCATIONS = [
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

  const FEATURE_TAGS = [
    { id: 'private-bar', label: 'Private Bar' },
    { id: 'av', label: 'AV / Screen / Mic' },
    { id: 'rooftop', label: 'Rooftop / Terrace' },
    { id: 'late-license', label: 'Late License (2am–4am)' },
    { id: 'sound', label: 'DJ / Sound System' },
    { id: 'dining', label: 'Sit-Down Dining' }
  ];

  // States
  const [selectedEventType, setSelectedEventType] = useState<string>(defaultEventType);
  const [selectedGuestRange, setSelectedGuestRange] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>(defaultLocation);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [expandedVenueSlug, setExpandedVenueSlug] = useState<string | null>(null);
  const [enquiryModalVenue, setEnquiryModalVenue] = useState<string | null>(null);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const handleReset = () => {
    setSelectedEventType('all');
    setSelectedGuestRange('all');
    setSelectedLocation('all');
    setSelectedFeatures([]);
  };

  // Filter Universal Hotels venues with actual function spaces
  const matchingVenues = useMemo(() => {
    const guestRangeObj = GUEST_RANGES.find(g => g.id === selectedGuestRange) || GUEST_RANGES[0];

    return Object.entries(VENUE_DETAILS).filter(([slug, venue]) => {
      // Must have function spaces
      if (!venue.functionSpaces || venue.functionSpaces.length === 0) {
        return false;
      }

      // Location filter
      if (selectedLocation !== 'all') {
        if (!venue.locationSuburb.toLowerCase().includes(selectedLocation.toLowerCase())) {
          return false;
        }
      }

      // Guest Count Filter (Must have at least one space that accommodates the guest range)
      if (selectedGuestRange !== 'all') {
        const hasMatchingCapacity = venue.functionSpaces.some(space => {
          const maxCap = Math.max(space.capacityStanding, space.capacitySeated);
          const minCap = Math.min(space.capacityStanding, space.capacitySeated);
          
          if (guestRangeObj.id === '1-20') return minCap <= 20 || space.capacitySeated <= 20;
          if (guestRangeObj.id === '21-50') return maxCap >= 20 && minCap <= 60;
          if (guestRangeObj.id === '51-100') return maxCap >= 50 && minCap <= 120;
          if (guestRangeObj.id === '101-200') return maxCap >= 100;
          if (guestRangeObj.id === '200+') return maxCap >= 180;
          return true;
        });
        if (!hasMatchingCapacity) return false;
      }

      // Event Type filter
      if (selectedEventType !== 'all') {
        const matchesEvent = venue.functionSpaces.some(space => 
          space.eventTypes.some(et => et.toLowerCase().includes(selectedEventType.toLowerCase())) ||
          (selectedEventType === 'Birthday' && space.eventTypes.some(et => et.toLowerCase().includes('party') || et.toLowerCase().includes('birthday'))) ||
          (selectedEventType === 'Corporate' && space.eventTypes.some(et => et.toLowerCase().includes('corporate') || et.toLowerCase().includes('meeting') || et.toLowerCase().includes('seminar'))) ||
          (selectedEventType === 'Private Party' && space.eventTypes.some(et => et.toLowerCase().includes('private') || et.toLowerCase().includes('celebration'))) ||
          (selectedEventType === 'Group Event' && space.eventTypes.some(et => et.toLowerCase().includes('dinner') || et.toLowerCase().includes('lunch') || et.toLowerCase().includes('social')))
        );
        if (!matchesEvent) return false;
      }

      // Features filter
      if (selectedFeatures.length > 0) {
        const hasAllFeatures = selectedFeatures.every(featId => {
          if (featId === 'private-bar') {
            return venue.functionSpaces.some(s => s.features.some(f => f.toLowerCase().includes('bar')));
          }
          if (featId === 'av') {
            return venue.functionSpaces.some(s => s.features.some(f => f.toLowerCase().includes('screen') || f.toLowerCase().includes('mic') || f.toLowerCase().includes('av')));
          }
          if (featId === 'rooftop') {
            return venue.functionSpaces.some(s => s.spaceName.toLowerCase().includes('roof') || s.features.some(f => f.toLowerCase().includes('terrace') || f.toLowerCase().includes('outdoor')));
          }
          if (featId === 'late-license') {
            return venue.openingHours.toLowerCase().includes('3am') || venue.openingHours.toLowerCase().includes('4am') || venue.openingHours.toLowerCase().includes('2am') || venue.tagline.toLowerCase().includes('4am') || venue.tagline.toLowerCase().includes('late');
          }
          if (featId === 'sound') {
            return venue.functionSpaces.some(s => s.features.some(f => f.toLowerCase().includes('sound') || f.toLowerCase().includes('dj') || f.toLowerCase().includes('aux')));
          }
          if (featId === 'dining') {
            return venue.functionSpaces.some(s => s.capacitySeated >= 15);
          }
          return true;
        });
        if (!hasAllFeatures) return false;
      }

      return true;
    });
  }, [selectedEventType, selectedGuestRange, selectedLocation, selectedFeatures]);

  return (
    <div className="space-y-8">
      
      {/* Finder Controls Bar */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E2D9] shadow-xs space-y-6">
        
        <div className="border-b border-[#F0ECE4] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#A47844] block">
              FIND YOUR PERFECT EVENT SPACE
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-neutral-900">
              Interactive Function Venue Finder
            </h3>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="text-neutral-500">
              Matches: <strong>{matchingVenues.length}</strong> venues
            </span>
            {(selectedEventType !== 'all' || selectedGuestRange !== 'all' || selectedLocation !== 'all' || selectedFeatures.length > 0) && (
              <button
                onClick={handleReset}
                className="text-[#A47844] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" /> Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Filter Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          
          {/* 1. Event Type Filter */}
          <div className="space-y-1.5">
            <label className="font-bold text-neutral-700 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#A47844]" /> Event Type
            </label>
            <select
              value={selectedEventType}
              onChange={(e) => setSelectedEventType(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg text-neutral-800 font-medium"
            >
              {EVENT_TYPES.map(t => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
          </div>

          {/* 2. Guest Count Filter */}
          <div className="space-y-1.5">
            <label className="font-bold text-neutral-700 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#A47844]" /> Guest Count
            </label>
            <select
              value={selectedGuestRange}
              onChange={(e) => setSelectedGuestRange(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg text-neutral-800 font-medium"
            >
              {GUEST_RANGES.map(g => (
                <option key={g.id} value={g.id}>{g.label}</option>
              ))}
            </select>
          </div>

          {/* 3. Location Filter */}
          <div className="space-y-1.5">
            <label className="font-bold text-neutral-700 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#A47844]" /> Suburb / Location
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg text-neutral-800 font-medium"
            >
              {LOCATIONS.map(loc => (
                <option key={loc.id} value={loc.id}>{loc.label}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Feature Checkboxes */}
        <div className="pt-2 border-t border-[#F0ECE4]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-2.5">
            Must-Have Venue Features
          </span>
          <div className="flex flex-wrap gap-2">
            {FEATURE_TAGS.map(f => {
              const active = selectedFeatures.includes(f.id);
              return (
                <button
                  key={f.id}
                  onClick={() => toggleFeature(f.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#121314] text-white'
                      : 'bg-[#FAF8F5] text-neutral-700 hover:bg-[#EFECE6] border border-[#E2DDD4]'
                  }`}
                >
                  {active && <CheckCircle2 className="w-3 h-3 text-[#C7A379]" />}
                  <span>{f.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Results Grid */}
      <div className="space-y-6">
        {matchingVenues.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#E7E2D9] max-w-md mx-auto space-y-3">
            <Users className="w-10 h-10 text-neutral-400 mx-auto" />
            <h4 className="font-serif text-xl text-neutral-900">No Matching Event Spaces</h4>
            <p className="text-xs text-neutral-600">
              Try loosening your guest range or location filter to see more Universal Hotels venues.
            </p>
            <Button variant="outline" size="sm" onClick={handleReset}>
              Reset All Filters
            </Button>
          </div>
        ) : (
          matchingVenues.map(([slug, venue]) => {
            const isExpanded = expandedVenueSlug === slug;
            const maxStanding = Math.max(...venue.functionSpaces.map(s => s.capacityStanding));
            const maxSeated = Math.max(...venue.functionSpaces.map(s => s.capacitySeated));

            return (
              <div
                key={slug}
                className="bg-white rounded-2xl border border-[#E7E2D9] overflow-hidden shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  
                  {/* Image Column */}
                  <div className="lg:col-span-4 relative min-h-[220px] lg:min-h-full">
                    <img
                      src={venue.heroImage}
                      alt={venue.venueName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md">
                        {venue.locationSuburb}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#A47844] text-white">
                        {venue.functionSpaces.length} Spaces
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-8 p-6 sm:p-7 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-[#A47844] tracking-wider block">
                            {venue.venueType}
                          </span>
                          <h4 className="text-2xl font-serif text-neutral-900 font-bold">
                            {venue.venueName}
                          </h4>
                        </div>

                        {/* Capacity Summary Badge */}
                        <div className="flex items-center gap-3 bg-[#FAF8F5] px-3.5 py-2 rounded-xl border border-[#E8E3D8] text-xs">
                          <div>
                            <span className="text-neutral-400 block text-[9px] uppercase font-bold">Max Standing</span>
                            <span className="font-bold text-neutral-900">{maxStanding} pax</span>
                          </div>
                          <span className="text-neutral-300">|</span>
                          <div>
                            <span className="text-neutral-400 block text-[9px] uppercase font-bold">Max Seated</span>
                            <span className="font-bold text-neutral-900">{maxSeated} pax</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2">
                        {venue.tagline}
                      </p>

                      {/* Available Spaces Summary */}
                      <div className="space-y-1 pt-1">
                        <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">
                          Bookable Event Spaces
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {venue.functionSpaces.map((sp, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-[#FAF8F5] text-neutral-800 border border-[#E2DDD4]"
                            >
                              <span className="font-semibold">{sp.spaceName}</span>
                              <span className="text-neutral-400 text-[10px]">({sp.capacityStanding} st / {sp.capacitySeated} sd)</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-[#F0ECE4] flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => setExpandedVenueSlug(isExpanded ? null : slug)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#A47844] hover:underline cursor-pointer"
                      >
                        {isExpanded ? (
                          <>Hide Space Specifications <ChevronUp className="w-4 h-4" /></>
                        ) : (
                          <>Inspect Function Spaces ({venue.functionSpaces.length}) <ChevronDown className="w-4 h-4" /></>
                        )}
                      </button>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onNavigate(`/venues/${slug}`)}
                        >
                          Explore Venue
                        </Button>

                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => setEnquiryModalVenue(venue.venueName)}
                        >
                          Enquire For Event
                        </Button>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Expanded Detailed Spaces Matrix */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 bg-[#FAF8F5] border-t border-[#E7E2D9] space-y-6">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#A47844] tracking-wider block">
                        SPACE SPECIFICATIONS & CAPACITIES
                      </span>
                      <h5 className="font-serif text-lg text-neutral-900">
                        Function Spaces at {venue.venueName}
                      </h5>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {venue.functionSpaces.map((sp, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-white rounded-xl p-5 border border-[#E2DDD4] space-y-3 flex flex-col justify-between"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h6 className="font-serif font-bold text-neutral-900 text-base">
                                {sp.spaceName}
                              </h6>
                              <span className="text-[10px] font-bold uppercase text-[#A47844]">
                                Space #{sIdx + 1}
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 py-2 border-y border-[#F0ECE4] text-[11px]">
                              <div>
                                <span className="text-neutral-400 block text-[9px] uppercase font-bold">Standing</span>
                                <span className="font-bold text-neutral-900">{sp.capacityStanding} Guests</span>
                              </div>
                              <div>
                                <span className="text-neutral-400 block text-[9px] uppercase font-bold">Seated</span>
                                <span className="font-bold text-neutral-900">{sp.capacitySeated} Guests</span>
                              </div>
                            </div>

                            <div className="space-y-1 text-xs">
                              <span className="text-[10px] uppercase font-bold text-neutral-400 block">Features:</span>
                              <ul className="space-y-1 text-neutral-600">
                                {sp.features.map((ft, fIdx) => (
                                  <li key={fIdx} className="flex items-center gap-1.5 text-[11px]">
                                    <CheckCircle2 className="w-3 h-3 text-[#A47844] flex-shrink-0" /> {ft}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-[#F0ECE4]">
                            <Button
                              variant="dark"
                              size="sm"
                              className="w-full justify-center text-xs"
                              onClick={() => setEnquiryModalVenue(`${venue.venueName} - ${sp.spaceName}`)}
                            >
                              Enquire for {sp.spaceName}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })
        )}
      </div>

      {/* Interactive Event Enquiry Modal */}
      <EventEnquiryModal
        isOpen={!!enquiryModalVenue}
        onClose={() => setEnquiryModalVenue(null)}
        preSelectedVenue={enquiryModalVenue || undefined}
      />

    </div>
  );
};
