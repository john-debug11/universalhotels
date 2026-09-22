import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Compass, 
  ArrowRight, 
  Building2, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Info,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { VENUE_DATABASE, VenueRecord } from '../../data/venueDatabase';
import { VENUE_PHOTOGRAPHY } from '../../data/imagery';

export interface SuburbMapNode {
  id: string;
  suburbName: string;
  precinctName: string;
  precinctId: string;
  gridArea: string; // CSS grid positioning or coordinate representation
  geoDirection: 'North' | 'CBD' | 'East' | 'Inner West' | 'South' | 'Airport Corridor';
  description: string;
  venues: string[]; // venue names
  distanceFromCbd: string;
  vibe: string;
}

export const SYDNEY_SUBURB_NODES: SuburbMapNode[] = [
  {
    id: 'Eastwood',
    suburbName: 'Eastwood',
    precinctName: 'Northern Suburbs & Ryde',
    precinctId: 'northern-suburbs-eastwood',
    gridArea: 'col-span-1 lg:col-span-2 lg:col-start-1 lg:row-start-1',
    geoDirection: 'North',
    description: 'Bustling multi-cultural dining hub in Sydney’s North-West known for vibrant late-night Asian supper spots and lounges.',
    venues: ['Moko Eastwood'],
    distanceFromCbd: '17 km North-West',
    vibe: 'Modern Asian Dining & Cocktails'
  },
  {
    id: 'Sydney CBD',
    suburbName: 'Sydney CBD',
    precinctName: 'Sydney CBD & Haymarket',
    precinctId: 'sydney-cbd-haymarket',
    gridArea: 'col-span-1 lg:col-span-2 lg:col-start-3 lg:row-start-1',
    geoDirection: 'CBD',
    description: 'Historic Art Deco drinking landmarks, underground music basements with 4am trade, and Chinatown energy.',
    venues: ['Civic Hotel', 'Palace Hotel Sydney', 'V Bar'],
    distanceFromCbd: 'City Centre (0 km)',
    vibe: 'Heritage Pubs, Late-Night Thai, 4am Club'
  },
  {
    id: 'Darlinghurst',
    suburbName: 'Darlinghurst',
    precinctName: 'Darlinghurst & Oxford Street',
    precinctId: 'darlinghurst-oxford-street',
    gridArea: 'col-span-1 lg:col-span-2 lg:col-start-5 lg:row-start-1',
    geoDirection: 'East',
    description: 'The pulsing heart of Sydney queer entertainment, historic multi-level pubs, drag theatre, and sunny street terraces.',
    venues: ['The Oxford Hotel', 'Universal Sydney', 'The Riley Hotel', 'The Lord Roberts Hotel'],
    distanceFromCbd: '1.5 km East',
    vibe: 'Drag Spectacles, Rooftop Terraces, LGBTQIA+ Nightlife'
  },
  {
    id: 'Enfield',
    suburbName: 'Enfield',
    precinctName: 'Inner West & Enfield',
    precinctId: 'inner-west-erskineville',
    gridArea: 'col-span-1 lg:col-span-2 lg:col-start-1 lg:row-start-2',
    geoDirection: 'Inner West',
    description: 'Classic western suburbs pub hospitality on Liverpool Road with massive sports screens, bistro dining, and motel stays.',
    venues: ['Enfield Hotel'],
    distanceFromCbd: '11 km West',
    vibe: 'Live Sports, Family Bistro & Motel Stays'
  },
  {
    id: 'Forest Lodge',
    suburbName: 'Forest Lodge',
    precinctName: 'Inner West & Glebe Fringe',
    precinctId: 'inner-west-erskineville',
    gridArea: 'col-span-1 lg:col-span-2 lg:col-start-3 lg:row-start-2',
    geoDirection: 'Inner West',
    description: 'Leafy village corner bistro and family neighbourhood sanctuary bordering Glebe and the university precinct.',
    venues: ['The Harold'],
    distanceFromCbd: '3.5 km West',
    vibe: 'Boutique Craft Beer, Courtyard Dining, Village Pub'
  },
  {
    id: 'Surry Hills',
    suburbName: 'Surry Hills',
    precinctName: 'Surry Hills & Crown Street',
    precinctId: 'surry-hills-redfern',
    gridArea: 'col-span-1 lg:col-span-2 lg:col-start-5 lg:row-start-2',
    geoDirection: 'CBD',
    description: 'Boutique hotel rooms above lively public bars, craft beers, and sun-drenched street terraces near Central Station.',
    venues: ['Crown Hotel Surry Hills', 'The Evening Star'],
    distanceFromCbd: '2 km South-East',
    vibe: 'Boutique Hotel Accommodation, Sunny Terraces'
  },
  {
    id: 'Erskineville',
    suburbName: 'Erskineville',
    precinctName: 'Inner West & Erskineville',
    precinctId: 'inner-west-erskineville',
    gridArea: 'col-span-1 lg:col-span-2 lg:col-start-2 lg:row-start-3',
    geoDirection: 'Inner West',
    description: 'Sydney’s cultural icon and birthplace of Priscilla Queen of the Desert drag cabaret, rooftop pizza, and basement rave sanctuary.',
    venues: ['The Imperial Erskineville'],
    distanceFromCbd: '4.5 km South-West',
    vibe: 'Priscilla Cabaret, Rooftop Dining, Queer Institution'
  },
  {
    id: 'Redfern',
    suburbName: 'Redfern',
    precinctName: 'Surry Hills & Redfern',
    precinctId: 'surry-hills-redfern',
    gridArea: 'col-span-1 lg:col-span-2 lg:col-start-4 lg:row-start-3',
    geoDirection: 'South',
    description: 'Historic village tavern on Chalmers Street with a leafy beer garden, Sunday roasts, and true local community spirit.',
    venues: ['The Tudor Hotel'],
    distanceFromCbd: '3 km South',
    vibe: 'Corner Pub, Beer Garden, Dog-Friendly'
  },
  {
    id: 'Tempe',
    suburbName: 'Tempe',
    precinctName: 'Tempe & Cooks River Corridor',
    precinctId: 'tempe-cooks-river',
    gridArea: 'col-span-1 lg:col-span-2 lg:col-start-3 lg:row-start-4',
    geoDirection: 'Airport Corridor',
    description: 'Princes Highway hub featuring traditional Greek charcoal dining at Stix Taverna, spacious function halls, and airport traveler lodging.',
    venues: ['Riverview Hotel', 'Tempe Hotel'],
    distanceFromCbd: '8 km South',
    vibe: 'Greek Taverna, 150-Guest Functions, Traveler Rooms'
  }
];

export interface SydneySuburbsInteractiveMapProps {
  selectedLocation: string;
  onSelectLocation: (suburbId: string) => void;
  onNavigateVenue: (path: string) => void;
  onBookVenue?: (venue: VenueRecord) => void;
}

export const SydneySuburbsInteractiveMap: React.FC<SydneySuburbsInteractiveMapProps> = ({
  selectedLocation,
  onSelectLocation,
  onNavigateVenue,
  onBookVenue
}) => {
  const [activeHoverSuburb, setActiveHoverSuburb] = useState<string | null>(null);

  // Active suburb node (or CBD as fallback when all is selected)
  const activeSuburbNode = useMemo(() => {
    if (selectedLocation === 'all') {
      return SYDNEY_SUBURB_NODES.find(n => n.id === 'Sydney CBD') || SYDNEY_SUBURB_NODES[0];
    }
    return SYDNEY_SUBURB_NODES.find(n => n.id === selectedLocation) || SYDNEY_SUBURB_NODES[0];
  }, [selectedLocation]);

  // Venues belonging to the active suburb
  const activeVenues = useMemo(() => {
    if (!activeSuburbNode) return [];
    return VENUE_DATABASE.filter(v => 
      activeSuburbNode.venues.some(name => v.venueName.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(v.venueName.toLowerCase()))
    );
  }, [activeSuburbNode]);

  return (
    <div className="bg-[#121314] text-white rounded-2xl border border-neutral-800 overflow-hidden shadow-xl">
      {/* Map Header & Controls */}
      <div className="p-6 sm:p-8 border-b border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#161719]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#C7A379]/15 border border-[#C7A379]/40 text-[#C7A379] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
              <Compass className="w-3 h-3" />
              Sydney Geographic Layout
            </span>
            <span className="text-xs text-neutral-400 hidden sm:inline">
              16 Venues Across 9 Key Suburbs
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Interactive Sydney Precinct Map
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl">
            Click any Sydney suburb below to zoom directly into its local hospitality precinct, inspect iconic properties, and filter directory listings.
          </p>
        </div>

        {/* Global Reset / Overview Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectLocation('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              selectedLocation === 'all'
                ? 'bg-[#C7A379] text-neutral-950 shadow-md'
                : 'bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 border border-neutral-700'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Sydney ({VENUE_DATABASE.length})</span>
          </button>
        </div>
      </div>

      {/* Main Map Body: Visual Grid Representation + Precinct Inspector */}
      <div className="p-6 sm:p-8 lg:p-10 space-y-8">
        {/* Cardinal Direction Compass Indicators */}
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-neutral-500 border-b border-neutral-800 pb-3">
          <span>← West / Inner West</span>
          <span className="text-[#C7A379] font-bold">▲ North (Ryde & Eastwood)</span>
          <span>East (Oxford St & Beaches) →</span>
        </div>

        {/* The Visual Grid of Sydney Suburbs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {SYDNEY_SUBURB_NODES.map((node) => {
            const isSelected = selectedLocation === node.id;
            const isHovered = activeHoverSuburb === node.id;
            const venueCount = node.venues.length;

            return (
              <div
                key={node.id}
                onClick={() => onSelectLocation(node.id)}
                onMouseEnter={() => setActiveHoverSuburb(node.id)}
                onMouseLeave={() => setActiveHoverSuburb(null)}
                className={`relative rounded-xl p-4 transition-all duration-200 cursor-pointer text-left border flex flex-col justify-between group ${
                  node.gridArea
                } ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#23211D] to-[#171614] border-[#C7A379] shadow-lg shadow-[#C7A379]/10 ring-1 ring-[#C7A379]'
                    : isHovered
                    ? 'bg-[#1C1D20] border-neutral-600 shadow-md translate-y-[-2px]'
                    : 'bg-[#18191B] border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Active Indicator Pin */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                    isSelected
                      ? 'bg-[#C7A379]/20 text-[#C7A379] border-[#C7A379]/50'
                      : 'bg-neutral-800/80 text-neutral-400 border-neutral-700'
                  }`}>
                    {node.geoDirection}
                  </span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    isSelected 
                      ? 'bg-[#C7A379] text-neutral-950' 
                      : 'bg-neutral-800 text-neutral-300'
                  }`}>
                    {venueCount} {venueCount === 1 ? 'Venue' : 'Venues'}
                  </span>
                </div>

                <div className="space-y-1 my-2">
                  <div className="flex items-center gap-1.5">
                    <MapPin className={`w-4 h-4 flex-shrink-0 ${
                      isSelected ? 'text-[#C7A379]' : 'text-neutral-500 group-hover:text-[#C7A379]'
                    }`} />
                    <h3 className={`font-serif font-bold text-base sm:text-lg ${
                      isSelected ? 'text-white' : 'text-neutral-200 group-hover:text-white'
                    }`}>
                      {node.suburbName}
                    </h3>
                  </div>
                  <p className="text-[11px] text-neutral-400 line-clamp-1">
                    {node.vibe}
                  </p>
                </div>

                {/* Micro Venue Pills inside the Tile */}
                <div className="pt-2 border-t border-neutral-800/80 flex flex-wrap gap-1">
                  {node.venues.map((vName, idx) => (
                    <span 
                      key={idx}
                      className={`text-[10px] px-1.5 py-0.5 rounded font-medium truncate max-w-full ${
                        isSelected 
                          ? 'bg-[#C7A379]/15 text-[#EAD6B8]' 
                          : 'bg-neutral-800 text-neutral-400'
                      }`}
                    >
                      {vName}
                    </span>
                  ))}
                </div>

                {/* Suburb Distance label */}
                <span className="text-[9px] font-mono text-neutral-500 pt-2 block">
                  📍 {node.distanceFromCbd}
                </span>
              </div>
            );
          })}
        </div>

        {/* South indicator */}
        <div className="text-center text-[11px] font-mono uppercase tracking-widest text-[#C7A379] pt-1">
          ▼ South (Tempe, Cooks River & Airport)
        </div>

        {/* Selected Precinct Detail Showcase */}
        {activeSuburbNode && (
          <div className="rounded-xl bg-[#18191B] border border-neutral-800 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#C7A379]/20 text-[#C7A379] text-[10px] font-bold uppercase tracking-wider">
                    {activeSuburbNode.geoDirection} Precinct
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    {activeSuburbNode.distanceFromCbd}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                  <span>{activeSuburbNode.suburbName}</span>
                  <span className="text-sm font-sans font-normal text-neutral-400">
                    — {activeSuburbNode.precinctName}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-3xl leading-relaxed">
                  {activeSuburbNode.description}
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => {
                    onSelectLocation(activeSuburbNode.id);
                    // Smooth scroll down to venues grid
                    const el = document.getElementById('venues-directory-results');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2.5 bg-[#C7A379] hover:bg-[#B59268] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Filter {activeSuburbNode.suburbName} Listings</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Direct Venue Listings in this Suburb */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                Iconic Venues in {activeSuburbNode.suburbName} ({activeVenues.length})
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeVenues.map(venue => {
                  const photoKey = venue.url.split('/').pop() || '';
                  const photo = VENUE_PHOTOGRAPHY[photoKey]?.[0]?.url;

                  return (
                    <div
                      key={venue.url}
                      className="group bg-[#121314] rounded-xl border border-neutral-800 p-4 hover:border-[#C7A379]/60 transition-all flex flex-col justify-between space-y-3"
                    >
                      <div className="flex items-start gap-3">
                        {photo && (
                          <img
                            src={photo}
                            alt={venue.venueName}
                            className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-neutral-700"
                          />
                        )}
                        <div className="space-y-1 min-w-0 flex-1">
                          <h4 className="font-serif font-bold text-white text-base truncate group-hover:text-[#C7A379] transition-colors">
                            {venue.venueName}
                          </h4>
                          <span className="text-[11px] text-[#C7A379] block truncate font-medium">
                            {venue.venueType}
                          </span>
                          <span className="text-[10px] text-neutral-400 block truncate">
                            {venue.address}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                        {venue.description}
                      </p>

                      <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs">
                        <button
                          onClick={() => onNavigateVenue(venue.url)}
                          className="text-[#C7A379] hover:text-white font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <span>Explore Venue</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        {onBookVenue && (
                          <button
                            onClick={() => onBookVenue(venue)}
                            className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-[11px] font-medium transition-colors cursor-pointer"
                          >
                            Book Table
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
