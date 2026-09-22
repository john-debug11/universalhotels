import React, { useState, useMemo, useEffect } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Search,
  Filter,
  Sparkles,
  ExternalLink,
  Flame,
  ChevronRight,
  X,
  Music,
  Disc,
  Utensils,
  Trophy,
  Tag,
  Moon,
  Compass,
  CheckCircle2,
  Share2
} from 'lucide-react';
import {
  VERIFIED_EVENTS_DATABASE,
  VerifiedEvent,
  EventCategory,
  EVENT_CATEGORIES,
  generateEventStructuredData
} from '../data/eventsData';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export interface WhatsOnPageProps {
  onNavigate?: (path: string) => void;
  initialEventSlug?: string;
}

export const WhatsOnPage: React.FC<WhatsOnPageProps> = ({
  onNavigate,
  initialEventSlug
}) => {
  // Filters
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedVenue, setSelectedVenue] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<'all' | 'tonight' | 'this-weekend' | 'this-week'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected event modal
  const [activeEvent, setActiveEvent] = useState<VerifiedEvent | null>(
    initialEventSlug
      ? VERIFIED_EVENTS_DATABASE.find(e => e.slug === initialEventSlug) || null
      : null
  );

  // Injected JSON-LD structured data for SEO when event modal is open
  useEffect(() => {
    if (activeEvent) {
      const scriptId = 'event-json-ld';
      let existingScript = document.getElementById(scriptId);
      if (!existingScript) {
        existingScript = document.createElement('script');
        existingScript.id = scriptId;
        existingScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(existingScript);
      }
      existingScript.textContent = JSON.stringify(generateEventStructuredData(activeEvent));
    }
  }, [activeEvent]);

  // Unique venues and locations for dropdowns
  const uniqueVenues = useMemo(() => {
    const set = new Set(VERIFIED_EVENTS_DATABASE.map(e => e.venueName));
    return Array.from(set).sort();
  }, []);

  const uniqueLocations = useMemo(() => {
    const set = new Set(VERIFIED_EVENTS_DATABASE.map(e => e.locationSuburb));
    return Array.from(set).sort();
  }, []);

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return VERIFIED_EVENTS_DATABASE.filter(event => {
      // Category filter
      if (selectedCategory !== 'all' && event.category !== selectedCategory) {
        return false;
      }

      // Location filter
      if (selectedLocation !== 'all' && event.locationSuburb !== selectedLocation) {
        return false;
      }

      // Venue filter
      if (selectedVenue !== 'all' && event.venueName !== selectedVenue) {
        return false;
      }

      // Date filter
      if (dateFilter === 'tonight' && !event.isTonight) {
        return false;
      }
      if (dateFilter === 'this-weekend' && !event.isThisWeekend) {
        return false;
      }
      if (dateFilter === 'this-week' && !event.isThisWeek) {
        return false;
      }

      // Text query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = event.name.toLowerCase().includes(q);
        const matchesVenue = event.venueName.toLowerCase().includes(q);
        const matchesDesc = event.description.toLowerCase().includes(q);
        const matchesSuburb = event.locationSuburb.toLowerCase().includes(q);
        if (!matchesName && !matchesVenue && !matchesDesc && !matchesSuburb) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedLocation, selectedVenue, dateFilter, searchQuery]);

  const getCategoryIcon = (category: EventCategory) => {
    switch (category) {
      case 'Live Music': return <Music className="w-3.5 h-3.5" />;
      case 'DJs': return <Disc className="w-3.5 h-3.5" />;
      case 'Drag': return <Sparkles className="w-3.5 h-3.5" />;
      case 'Nightlife': return <Moon className="w-3.5 h-3.5" />;
      case 'Food & Drink': return <Utensils className="w-3.5 h-3.5" />;
      case 'Special Events': return <Trophy className="w-3.5 h-3.5" />;
      case 'Promotions': return <Tag className="w-3.5 h-3.5" />;
      default: return <Calendar className="w-3.5 h-3.5" />;
    }
  };

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedLocation('all');
    setSelectedVenue('all');
    setDateFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="min-w-full min-h-screen bg-[#FDFBF7] text-[#121314]">
      {/* 1. Header & Cinematic Hero */}
      <section className="relative bg-[#121314] text-white py-16 sm:py-24 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop"
            alt="Sydney Nightlife & Entertainment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121314] via-[#121314]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A47844]/20 border border-[#A47844]/40 text-[#C7A379] text-xs font-bold tracking-widest uppercase">
              <Calendar className="w-3.5 h-3.5" />
              Sydney Central Event Discovery Hub
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              What’s On Across Sydney
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              Explore verified events, live drag productions, acoustic music, underground electronic club sessions, Greek feasts, and UFC broadcasts across the Universal Hotels collection.
            </p>

            {/* Quick Discovery Shortcuts: Tonight, This Weekend, Near Me */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider mr-1">
                Quick Discover:
              </span>

              <button
                onClick={() => {
                  setDateFilter('tonight');
                  setSelectedCategory('all');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  dateFilter === 'tonight'
                    ? 'bg-[#A47844] text-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-amber-300" />
                What’s Happening Tonight?
              </button>

              <button
                onClick={() => {
                  setDateFilter('this-weekend');
                  setSelectedCategory('all');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  dateFilter === 'this-weekend'
                    ? 'bg-[#A47844] text-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                What’s Happening This Weekend?
              </button>

              <button
                onClick={() => {
                  setSelectedLocation('Darlinghurst');
                  setDateFilter('all');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedLocation === 'Darlinghurst'
                    ? 'bg-[#A47844] text-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-amber-300" />
                What’s Happening Near Me? (Oxford St / CBD)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Discovery Filter Bar */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E7E2D9] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 space-y-3">
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#121314] text-white'
                  : 'bg-[#FAF8F5] text-neutral-600 hover:bg-[#EFECE6] border border-[#E7E2D9]'
              }`}
            >
              All Categories ({VERIFIED_EVENTS_DATABASE.length})
            </button>

            {EVENT_CATEGORIES.map(cat => {
              const count = VERIFIED_EVENTS_DATABASE.filter(e => e.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#A47844] text-white font-bold shadow-xs'
                      : 'bg-[#FAF8F5] text-neutral-600 hover:bg-[#EFECE6] border border-[#E7E2D9]'
                  }`}
                >
                  {getCategoryIcon(cat)}
                  <span>{cat}</span>
                  <span className="text-[10px] opacity-75">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Secondary Controls: Date, Location, Venue & Search */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
            {/* Date Quick Selector */}
            <div className="flex items-center bg-[#FAF8F5] rounded-xl border border-[#E7E2D9] px-3 py-1.5">
              <Calendar className="w-4 h-4 text-[#A47844] mr-2 flex-shrink-0" />
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value as any)}
                className="w-full bg-transparent text-xs font-semibold text-neutral-800 focus:outline-none cursor-pointer"
              >
                <option value="all">All Dates & Schedules</option>
                <option value="tonight">Happening Tonight</option>
                <option value="this-weekend">This Weekend (Fri–Sun)</option>
                <option value="this-week">This Week</option>
              </select>
            </div>

            {/* Location Selector */}
            <div className="flex items-center bg-[#FAF8F5] rounded-xl border border-[#E7E2D9] px-3 py-1.5">
              <MapPin className="w-4 h-4 text-[#A47844] mr-2 flex-shrink-0" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-neutral-800 focus:outline-none cursor-pointer"
              >
                <option value="all">All Sydney Locations</option>
                {uniqueLocations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Venue Selector */}
            <div className="flex items-center bg-[#FAF8F5] rounded-xl border border-[#E7E2D9] px-3 py-1.5">
              <Filter className="w-4 h-4 text-[#A47844] mr-2 flex-shrink-0" />
              <select
                value={selectedVenue}
                onChange={(e) => setSelectedVenue(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-neutral-800 focus:outline-none cursor-pointer"
              >
                <option value="all">All Universal Venues</option>
                {uniqueVenues.map(ven => (
                  <option key={ven} value={ven}>{ven}</option>
                ))}
              </select>
            </div>

            {/* Text Search Field */}
            <div className="flex items-center bg-[#FAF8F5] rounded-xl border border-[#E7E2D9] px-3 py-1.5">
              <Search className="w-4 h-4 text-neutral-400 mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search artists, shows, food..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-neutral-400 hover:text-neutral-600">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Event Results Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Results Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#EFECE6]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-neutral-900">
              Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'Verified Event' : 'Verified Events'}
            </span>
            {(selectedCategory !== 'all' || selectedLocation !== 'all' || selectedVenue !== 'all' || dateFilter !== 'all' || searchQuery) && (
              <button
                onClick={resetAllFilters}
                className="text-xs font-semibold text-[#A47844] hover:underline cursor-pointer ml-2"
              >
                Reset All Filters
              </button>
            )}
          </div>

          <div className="text-xs text-neutral-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#A47844]" />
            <span>CMS-Ready Verified Hospitality Feed</span>
          </div>
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#E7E2D9] space-y-4 max-w-md mx-auto">
            <Calendar className="w-12 h-12 text-neutral-300 mx-auto" />
            <h3 className="text-lg font-serif font-bold text-neutral-900">No events match this filter</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Try adjusting your category, precinct, or date filter to view upcoming entertainment and dining sessions.
            </p>
            <Button variant="outline" size="sm" onClick={resetAllFilters}>
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                onClick={() => setActiveEvent(event)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E7E2D9] hover:border-[#C7A379] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Event Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                    <img
                      src={event.imageUrl}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
                        {getCategoryIcon(event.category)}
                        {event.category}
                      </span>
                    </div>

                    {/* Date / Time Tag */}
                    <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#C7A379]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{event.dateDisplay}</span>
                      </div>
                      <p className="text-[11px] text-neutral-300">{event.timeDisplay}</p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span className="font-bold text-neutral-800">{event.venueName}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#A47844]" />
                        {event.locationSuburb}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#121314] group-hover:text-[#A47844] transition-colors line-clamp-2 leading-snug">
                      {event.name}
                    </h3>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Highlights tags */}
                    {event.highlights && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {event.highlights.slice(0, 3).map((hl, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#FAF8F5] text-neutral-600 border border-[#E8E3D8]"
                          >
                            {hl}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="p-5 sm:p-6 pt-0 border-t border-[#EFECE6] flex items-center justify-between gap-3 text-xs pt-4">
                  <span className="font-semibold text-neutral-900 bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E8E3D8]">
                    {event.ticketPrice}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[#A47844] font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    VIEW EVENT
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* 4. Full Event Modal / Detail Page View */}
      {activeEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="relative bg-white w-full max-w-3xl rounded-2xl overflow-hidden border border-[#E7E2D9] shadow-2xl max-h-[90vh] flex flex-col justify-between animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header Media */}
            <div className="relative aspect-[21/9] min-h-[220px] bg-neutral-950 overflow-hidden">
              <img
                src={activeEvent.imageUrl}
                alt={activeEvent.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              <button
                onClick={() => setActiveEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#A47844] text-white inline-block">
                  {activeEvent.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                  {activeEvent.name}
                </h2>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Event Quick Facts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Host Venue</span>
                  <button
                    onClick={() => {
                      setActiveEvent(null);
                      onNavigate?.(activeEvent.venueUrl);
                    }}
                    className="font-bold text-neutral-900 hover:text-[#A47844] text-left underline cursor-pointer"
                  >
                    {activeEvent.venueName}
                  </button>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Date & Day</span>
                  <p className="font-bold text-neutral-900">{activeEvent.dateDisplay}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Time Schedule</span>
                  <p className="font-bold text-neutral-900">{activeEvent.timeDisplay}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Admission</span>
                  <p className="font-bold text-[#A47844]">{activeEvent.ticketPrice}</p>
                </div>
              </div>

              {/* Location Address */}
              <div className="flex items-start gap-2.5 text-xs text-neutral-600 bg-white p-3 rounded-lg border border-[#E7E2D9]">
                <MapPin className="w-4 h-4 text-[#A47844] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-neutral-900">Event Location: </span>
                  <span>{activeEvent.address} ({activeEvent.locationSuburb})</span>
                </div>
              </div>

              {/* Event Description */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#A47844]">
                  About This Event
                </h4>
                <div className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                  {activeEvent.fullDetails.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Inclusions / Highlights */}
              {activeEvent.inclusions && activeEvent.inclusions.length > 0 && (
                <div className="space-y-3 pt-2 border-t border-[#EFECE6]">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-900">
                    What To Expect:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-600">
                    {activeEvent.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Age Restriction */}
              <div className="text-[11px] text-neutral-500 italic bg-[#FAF8F5] p-3 rounded-lg border border-[#E8E3D8]">
                Policy: {activeEvent.ageRestriction}. Universal Hotels practices the responsible service of alcohol.
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 sm:p-6 bg-[#FAF8F5] border-t border-[#E7E2D9] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => {
                  const url = activeEvent.venueUrl;
                  setActiveEvent(null);
                  onNavigate?.(url);
                }}
                className="text-xs font-bold text-neutral-700 hover:text-neutral-900 flex items-center gap-1.5 cursor-pointer"
              >
                <span>View {activeEvent.venueName} Full Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={activeEvent.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#A47844] hover:bg-[#8F6636] text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Ticket className="w-4 h-4" />
                  {activeEvent.isFreeEntry ? 'Book Free Table / Entry' : 'Book Tickets / Session'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
