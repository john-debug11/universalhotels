import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Users, 
  Bed, 
  Sparkles, 
  ArrowUpRight, 
  ChevronRight, 
  Compass, 
  Utensils, 
  Wine, 
  Moon, 
  Music, 
  Tv, 
  Sun, 
  Train, 
  Car, 
  CheckCircle2, 
  HelpCircle, 
  ExternalLink,
  Share2,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { VenueDetailRecord, DetailedFunctionSpace } from '../../data/venueDetails';
import { VENUE_DATABASE, VenueRecord } from '../../data/venueDatabase';
import { TableBookingModal } from '../home/TableBookingModal';
import { EventEnquiryModal } from '../home/EventEnquiryModal';
import { AeoFactBlock } from '../seo/AeoFactBlock';
import { trackBookingClick, trackPhoneClick, trackFunctionEnquiry, trackAccommodationClick } from '../../utils/analytics';

export interface VenueDetailTemplateProps {
  venue: VenueDetailRecord;
  onNavigate: (path: string) => void;
}

export const VenueDetailTemplate: React.FC<VenueDetailTemplateProps> = ({ venue, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'food' | 'functions' | 'accommodation' | 'gallery'>('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedSpaceForEnquiry, setSelectedSpaceForEnquiry] = useState<string | undefined>(undefined);
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  // SEO: Dynamically update document title and meta description
  useEffect(() => {
    document.title = `${venue.seo.title} | Universal Hotels Australia`;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', venue.seo.metaDescription);
    }

    // Set canonical tag
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', `https://universalhotels.com.au/venues/${venue.slug}`);

    // Inject JSON-LD Schema.org structured data
    const schemaScriptId = `schema-venue-${venue.slug}`;
    let existingScript = document.getElementById(schemaScriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = schemaScriptId;
      script.type = 'application/ld+json';
      const schemaData = {
        '@context': 'https://schema.org',
        '@type': venue.seo.schemaType || 'BarOrPub',
        name: venue.venueName,
        description: venue.seo.metaDescription,
        address: {
          '@type': 'PostalAddress',
          streetAddress: venue.address,
          addressLocality: venue.locationSuburb,
          addressRegion: 'NSW',
          postalCode: venue.address.match(/\d{4}/)?.[0] || '2000',
          addressCountry: 'AU'
        },
        telephone: venue.phone,
        url: `https://www.universalhotels.com.au/venues/${venue.slug}`,
        openingHours: venue.openingHours,
        priceRange: '$$',
        servesCuisine: venue.foodAndDrink.concept
      };
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById(schemaScriptId);
      if (script) {
        script.remove();
      }
    };
  }, [venue]);

  // Find matching raw venue record for booking modal
  const rawVenueRecord = VENUE_DATABASE.find(v => v.url.includes(venue.slug)) || {
    venueName: venue.venueName,
    url: `/venues/${venue.slug}`,
    locationSuburb: venue.locationSuburb,
    address: venue.address,
    phone: venue.phone,
    openingHours: venue.openingHours,
    venueType: venue.venueType,
    description: venue.tagline,
    dining: venue.foodAndDrink.concept,
    bar: 'Full Bar',
    nightlife: '',
    entertainment: '',
    functions: '',
    accommodation: '',
    bookingUrl: venue.bookingUrl,
    externalWebsite: venue.externalWebsite,
    socialLinks: {},
    functionCapacity: '',
    functionSpaces: [],
    notes: ''
  };

  // Nearby Sister Venues in Same or Adjacent Precincts
  const nearbyVenues = VENUE_DATABASE.filter(v => 
    !v.url.includes(venue.slug) && 
    (v.locationSuburb.toLowerCase().includes(venue.locationSuburb.toLowerCase()) || 
     (venue.locationSuburb.includes('Darlinghurst') && v.locationSuburb.includes('Surry Hills')) ||
     (venue.locationSuburb.includes('CBD') && v.locationSuburb.includes('Haymarket')))
  ).slice(0, 3);

  const breadcrumbsItems = [
    { label: 'Home', href: '/' },
    { label: 'Venues', href: '/venues' },
    { label: venue.locationSuburb, href: `/venues?location=${encodeURIComponent(venue.locationSuburb)}` },
    { label: venue.venueName, href: `/venues/${venue.slug}` }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#121314] min-h-screen pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-between bg-[#0B0C0D] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={venue.heroImage}
            alt={venue.venueName}
            className="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-1000"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0D] via-[#0B0C0D]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0D]/80 via-transparent to-transparent" />
        </div>

        {/* Top Breadcrumbs & Badges */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-white/80">
              <Breadcrumbs items={breadcrumbsItems} />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase border border-white/30 text-white bg-black/40 backdrop-blur-md">
                <MapPin className="w-3 h-3 text-[#C7A379]" /> {venue.locationSuburb}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#A47844] text-white">
                {venue.venueType}
              </span>
            </div>
          </div>
        </div>

        {/* Main Hero Typography & CTAs */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C7A379] block">
              UNIVERSAL HOTELS SYDNEY
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-[#FAF8F5] tracking-tight leading-[1]">
              {venue.venueName}
            </h1>
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
              {venue.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsBookingModalOpen(true)}
                iconRight={<Calendar className="w-4 h-4" />}
                className="font-bold tracking-wider"
              >
                BOOK
              </Button>

              <Button
                variant="dark"
                size="lg"
                onClick={() => {
                  setSelectedSpaceForEnquiry(undefined);
                  setIsEventModalOpen(true);
                }}
                className="bg-white/10 hover:bg-white/20 border-white/20 text-white font-bold tracking-wider"
              >
                FUNCTIONS
              </Button>

              <a
                href={`tel:${venue.phone.replace(/[^\d+]/g, '')}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-colors"
                aria-label={`Call ${venue.venueName} at ${venue.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#C7A379]" /> CALL
              </a>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(venue.venueName + ' ' + venue.address)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-colors"
                aria-label={`Directions to ${venue.venueName}`}
              >
                <MapPin className="w-3.5 h-3.5 text-[#C7A379]" /> DIRECTIONS
              </a>

              {venue.accommodation && (
                <a
                  href={venue.accommodation.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#A47844]/40 hover:bg-[#A47844]/60 text-white border border-[#A47844]/60 backdrop-blur-md transition-colors"
                >
                  <Bed className="w-4 h-4 text-[#C7A379]" /> BOOK STAY
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Fast Action Bar */}
        <div className="relative z-10 border-t border-neutral-800/80 bg-[#0B0C0D]/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C7A379] flex-shrink-0" />
              <span className="font-semibold text-white">Trading Hours:</span>
              <span className="truncate">{venue.openingHours}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="px-3 py-1.5 rounded-md bg-[#A47844] text-white font-bold hover:bg-[#8D6433] transition-colors cursor-pointer"
              >
                BOOK
              </button>
              <a 
                href={`tel:${venue.phone.replace(/[^\d+]/g, '')}`} 
                className="px-3 py-1.5 rounded-md bg-white/10 text-white font-bold hover:bg-white/20 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3 h-3 text-[#C7A379]" /> CALL
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(venue.venueName + ' ' + venue.address)}`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-md bg-white/10 text-white font-bold hover:bg-white/20 transition-colors flex items-center gap-1"
              >
                <MapPin className="w-3 h-3 text-[#C7A379]" /> DIRECTIONS
              </a>
              <button 
                onClick={() => {
                  setSelectedSpaceForEnquiry(undefined);
                  setIsEventModalOpen(true);
                }}
                className="px-3 py-1.5 rounded-md bg-white/10 text-white font-bold hover:bg-white/20 transition-colors cursor-pointer"
              >
                FUNCTIONS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK FACTS PANEL */}
      <section className="bg-white border-b border-[#E7E2D9] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Address</span>
              <p className="font-medium text-neutral-900 leading-snug">{venue.address}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Phone</span>
              <p className="font-medium text-neutral-900">
                <a href={`tel:${venue.phone.replace(/[^\d+]/g, '')}`} className="hover:text-[#A47844]">{venue.phone}</a>
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Hours</span>
              <p className="font-medium text-neutral-900 leading-snug">{venue.openingHours}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Venue Type</span>
              <p className="font-medium text-neutral-900">{venue.venueType}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Functions</span>
              <p className="font-medium text-neutral-900">
                {venue.functionSpaces.length > 0 ? `${venue.functionSpaces.length} Spaces Available` : 'Enquire Group Dining'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Accommodation</span>
              <p className="font-medium text-neutral-900">
                {venue.accommodation ? 'Boutique Rooms On-Site' : 'None on-site'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION & EXPERIENCES */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: About Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
                HERITAGE & CHARACTER
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#121314]">
                About {venue.venueName}
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              {venue.aboutParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Experiences Grid */}
            <div className="pt-6 border-t border-[#E7E2D9]">
              <span className="text-xs uppercase font-bold tracking-wider text-neutral-500 block mb-4">
                Signature Experiences at this Venue
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {venue.experiences.map((exp, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl border border-[#E7E2D9] space-y-1 shadow-2xs">
                    <div className="flex items-center gap-2 text-[#A47844]">
                      <Sparkles className="w-4 h-4" />
                      <span className="font-bold text-xs text-neutral-900">{exp.title}</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Fast Booking Widget */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E2DDD4]">
              <img
                src={venue.gallery[1]?.url || venue.heroImage}
                alt={`${venue.venueName} interior`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <span className="font-semibold block">{venue.gallery[1]?.caption || venue.venueName}</span>
              </div>
            </div>

            {/* Fast Reservation Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E7E2D9] shadow-xs space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#A47844] block">Table Reservations</span>
                <h3 className="text-xl font-serif text-neutral-900">Join Us for Dining & Drinks</h3>
                <p className="text-xs text-neutral-600">Walk-ins are always welcomed, or secure a reserved table in advance.</p>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full justify-center"
                >
                  Reserve a Table Online
                </Button>
                
                <a
                  href={`tel:${venue.phone.replace(/[^\d+]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 py-2 text-xs font-semibold text-neutral-700 hover:text-[#A47844] border border-[#E2DDD4] rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Call {venue.phone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FOOD & DRINK SECTION */}
      <section className="py-16 lg:py-24 bg-[#F5F1EA] border-y border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
              CULINARY FOCUS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#121314]">
              Food & Drink
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal">
              {venue.foodAndDrink.concept}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Signature Dishes */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E7E2D9] space-y-4">
              <div className="flex items-center gap-2.5 text-[#A47844]">
                <Utensils className="w-5 h-5" />
                <h3 className="font-serif text-lg font-bold text-neutral-900">Signature Plates</h3>
              </div>
              <ul className="space-y-3">
                {venue.foodAndDrink.signatureDishes.map((dish, i) => (
                  <li key={i} className="text-xs text-neutral-700 leading-relaxed border-b border-[#F0ECE4] pb-2 last:border-b-0 last:pb-0 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A47844] mt-1.5 flex-shrink-0" />
                    <span>{dish}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signature Cocktails & Taps */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E7E2D9] space-y-4">
              <div className="flex items-center gap-2.5 text-[#A47844]">
                <Wine className="w-5 h-5" />
                <h3 className="font-serif text-lg font-bold text-neutral-900">Bar & Libations</h3>
              </div>
              <ul className="space-y-3">
                {venue.foodAndDrink.signatureDrinks.map((drink, i) => (
                  <li key={i} className="text-xs text-neutral-700 leading-relaxed border-b border-[#F0ECE4] pb-2 last:border-b-0 last:pb-0 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A47844] mt-1.5 flex-shrink-0" />
                    <span>{drink}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dietary & Kitchen Hours */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E7E2D9] space-y-4">
              <div className="flex items-center gap-2.5 text-[#A47844]">
                <CheckCircle2 className="w-5 h-5" />
                <h3 className="font-serif text-lg font-bold text-neutral-900">Dietary & Hours</h3>
              </div>
              <div className="space-y-3 text-xs text-neutral-600 leading-relaxed">
                <div>
                  <span className="font-bold text-neutral-800 block mb-1">Dietary Policy:</span>
                  <p>{venue.foodAndDrink.dietaryHighlights}</p>
                </div>
                <div className="pt-2 border-t border-[#F0ECE4]">
                  <span className="font-bold text-neutral-800 block mb-1">Kitchen Service:</span>
                  <p>{venue.foodAndDrink.operatingHoursNotes}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. WHAT'S ON AT THIS VENUE */}
      {venue.whatsOn.length > 0 && (
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-[#E7E2D9] pb-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
                LIVE ENTERTAINMENT & RITUALS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#121314]">
                What’s On at {venue.venueName}
              </h2>
            </div>
            <span className="text-xs text-neutral-500">Recurring programming & shows</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {venue.whatsOn.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#E7E2D9] shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#A47844]/15 text-[#A47844]">
                      {item.schedule}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#A47844]" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFECE6] flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-medium">Walk-ins welcome</span>
                  <Button variant="outline" size="sm" onClick={() => setIsBookingModalOpen(true)}>
                    Book Table
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. FUNCTIONS & EVENT SPACES */}
      {venue.functionSpaces.length > 0 && (
        <section className="py-16 lg:py-24 bg-[#121314] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-neutral-800 pb-8">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C7A379]">
                  PRIVATE HIRE & CELEBRATIONS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF8F5]">
                  Function Spaces at {venue.venueName}
                </h2>
                <p className="text-sm text-neutral-300">
                  Choose from {venue.functionSpaces.length} distinct spaces. Tailored food and beverage packages, private bars, and dedicated event management.
                </p>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setSelectedSpaceForEnquiry(undefined);
                  setIsEventModalOpen(true);
                }}
              >
                Plan An Event Here
              </Button>
            </div>

            {/* Function Spaces Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {venue.functionSpaces.map((space, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-900 rounded-2xl p-6 sm:p-7 border border-neutral-800 flex flex-col justify-between space-y-6 hover:border-[#A47844] transition-colors"
                >
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#C7A379] tracking-wider block mb-1">
                        SPACE 0{idx + 1}
                      </span>
                      <h3 className="text-2xl font-serif text-white font-bold">
                        {space.spaceName}
                      </h3>
                    </div>

                    {/* Capacities */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-neutral-800 text-xs">
                      <div>
                        <span className="text-neutral-500 block text-[10px] uppercase font-bold">Standing Cocktail</span>
                        <span className="font-bold text-white text-base">{space.capacityStanding} Guests</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block text-[10px] uppercase font-bold">Seated Banquet</span>
                        <span className="font-bold text-white text-base">{space.capacitySeated} Guests</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">Key Features</span>
                      <ul className="space-y-1.5">
                        {space.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-neutral-300 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A379] flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Suitable Event Types */}
                    <div className="pt-2">
                      <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider block mb-1.5">Ideal For</span>
                      <div className="flex flex-wrap gap-1.5">
                        {space.eventTypes.map((et, eIdx) => (
                          <span key={eIdx} className="px-2 py-0.5 rounded text-[10px] bg-neutral-800 text-neutral-300 border border-neutral-700">
                            {et}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-800">
                    <Button
                      variant="dark"
                      size="sm"
                      onClick={() => {
                        setSelectedSpaceForEnquiry(`${venue.venueName} - ${space.spaceName}`);
                        setIsEventModalOpen(true);
                      }}
                      className="w-full justify-center bg-white/10 hover:bg-white/20 text-white border-white/20"
                    >
                      Enquire for this Space
                    </Button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 7. ACCOMMODATION (IF APPLICABLE) */}
      {venue.accommodation && (
        <section className="py-16 lg:py-24 bg-[#F5F1EA] border-t border-[#E7E2D9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E7E2D9] shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-[#A47844] font-bold text-xs uppercase tracking-wider">
                    <Bed className="w-4 h-4" /> BOUTIQUE HOTEL ACCOMMODATION ON-SITE
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900">
                    {venue.accommodation.propertyName}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {venue.accommodation.proximityNotes}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">Available Room Types</span>
                      <ul className="text-xs text-neutral-700 space-y-1">
                        {venue.accommodation.roomTypes.map((rt, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A47844]" /> {rt}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase text-neutral-400 block mb-1">Guest Amenities</span>
                      <ul className="text-xs text-neutral-700 space-y-1">
                        {venue.accommodation.amenities.map((am, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#A47844]" /> {am}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href={venue.accommodation.bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#121314] hover:bg-neutral-800 text-white transition-colors"
                    >
                      Book Rooms Direct <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <span className="text-xs text-neutral-500 font-medium">{venue.accommodation.rateHint}</span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                    <img
                      src={venue.gallery.find(g => g.category === 'accommodation')?.url || 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop'}
                      alt={venue.accommodation.propertyName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. GALLERY SECTION */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-8">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
            PHOTOGRAPHY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#121314]">
            Gallery & Spaces
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {venue.gallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveGalleryImage(img.url)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-neutral-900 border border-[#E7E2D9]"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                <span className="text-white text-xs font-medium">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. LOCATION, TRANSIT & OPENING HOURS */}
      <section className="py-16 lg:py-24 bg-[#F5F1EA] border-t border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Transit & Access */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
                  FINDING US
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#121314]">
                  Location & Transit
                </h2>
                <p className="text-sm text-neutral-600">
                  {venue.address} — {venue.locationSuburb}, Sydney NSW
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="bg-white p-5 rounded-xl border border-[#E7E2D9] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#A47844] font-bold">
                    <Train className="w-4 h-4" /> Train & Metro
                  </div>
                  <p className="text-neutral-700">{venue.transit.trainStation}</p>
                  {venue.transit.lightRailOrMetro && (
                    <p className="text-neutral-500 pt-1">{venue.transit.lightRailOrMetro}</p>
                  )}
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#E7E2D9] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#A47844] font-bold">
                    <Car className="w-4 h-4" /> Buses & Parking
                  </div>
                  <p className="text-neutral-700">{venue.transit.busRoutes}</p>
                  <p className="text-neutral-500 pt-1">{venue.transit.parking}</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(venue.venueName + ' ' + venue.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white hover:bg-neutral-50 text-neutral-900 border border-[#DCD6CA] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#A47844]" /> Open in Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Opening Hours Schedule */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E2D9] shadow-xs space-y-4">
              <div className="space-y-1 border-b border-[#EFECE6] pb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A47844] block">Weekly Schedule</span>
                <h3 className="font-serif text-xl text-neutral-900">Opening Hours</h3>
              </div>

              <div className="space-y-2 text-xs divide-y divide-[#F4F0E8]">
                {venue.openingHoursWeekly.map((slot, i) => (
                  <div key={i} className="flex items-center justify-between pt-2 first:pt-0">
                    <span className="font-semibold text-neutral-700">{slot.day}</span>
                    <span className="text-neutral-900 font-mono text-[11px]">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. FAQS SECTION */}
      <section className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#121314]">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-3">
          {venue.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E7E2D9] overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left text-sm font-semibold text-neutral-900 hover:text-[#A47844]"
              >
                <span>{faq.question}</span>
                {openFaqIndex === idx ? (
                  <ChevronUp className="w-4 h-4 text-neutral-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-400" />
                )}
              </button>

              {openFaqIndex === idx && (
                <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-[#F5F1EA]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* AEO / GEO Machine-Extractable Facts & Structured FAQs */}
        <div className="pt-10">
          <AeoFactBlock
            venue={rawVenueRecord}
            detail={venue}
            onNavigate={onNavigate}
          />
        </div>

        {/* Cross-Taxonomy Internal Linking Matrix */}
        <div className="pt-8 border-t border-[#E7E2D9] mt-10">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#A47844] block mb-3">
            EXPLORE THE ECOSYSTEM
          </span>
          <div className="flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => onNavigate(`/venues?location=${encodeURIComponent(venue.locationSuburb)}`)}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#E7E2D9] text-neutral-700 hover:text-[#A47844] transition-colors cursor-pointer font-medium"
            >
              All {venue.locationSuburb} Venues →
            </button>
            <button
              onClick={() => onNavigate('/functions')}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#E7E2D9] text-neutral-700 hover:text-[#A47844] transition-colors cursor-pointer font-medium"
            >
              Sydney Function Spaces Hire →
            </button>
            <button
              onClick={() => onNavigate('/functions/corporate-events')}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#E7E2D9] text-neutral-700 hover:text-[#A47844] transition-colors cursor-pointer font-medium"
            >
              Corporate Event Venues →
            </button>
            <button
              onClick={() => onNavigate('/functions/birthday-parties')}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#E7E2D9] text-neutral-700 hover:text-[#A47844] transition-colors cursor-pointer font-medium"
            >
              Birthday Parties & Celebrations →
            </button>
            <button
              onClick={() => onNavigate('/whats-on')}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#E7E2D9] text-neutral-700 hover:text-[#A47844] transition-colors cursor-pointer font-medium"
            >
              What's On Across Sydney Tonight →
            </button>
            <button
              onClick={() => onNavigate('/accommodation')}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#E7E2D9] text-neutral-700 hover:text-[#A47844] transition-colors cursor-pointer font-medium"
            >
              Boutique Accommodation Stays →
            </button>
          </div>
        </div>
      </section>

      {/* 11. NEARBY SISTER VENUES (INTERNAL LINKING FOR SEO) */}
      {nearbyVenues.length > 0 && (
        <section className="py-16 bg-[#F5F1EA] border-t border-[#E7E2D9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-2 mb-8">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
                MORE IN THIS NEIGHBOURHOOD
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#121314]">
                Explore Nearby Universal Hotels
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nearbyVenues.map(nv => (
                <div
                  key={nv.url}
                  onClick={() => onNavigate(nv.url)}
                  className="bg-white rounded-xl p-5 border border-[#E7E2D9] hover:border-[#A47844] cursor-pointer transition-colors shadow-2xs space-y-2 group"
                >
                  <span className="text-[10px] uppercase font-bold text-[#A47844] tracking-wider block">
                    {nv.locationSuburb}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-[#A47844] transition-colors">
                    {nv.venueName}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2">{nv.description}</p>
                  <div className="pt-2 flex items-center gap-1 text-xs text-[#A47844] font-semibold">
                    View Venue <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 12. FINAL CONVERSION SECTION */}
      <section className="relative py-20 bg-[#0B0C0D] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C7A379] block">
            READY TO JOIN US?
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#FAF8F5]">
            Experience {venue.venueName}
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Book a table for dining and drinks, or speak with our events team about private spaces.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book Table Online
            </Button>
            {venue.functionSpaces.length > 0 && (
              <Button
                variant="dark"
                size="lg"
                onClick={() => {
                  setSelectedSpaceForEnquiry(undefined);
                  setIsEventModalOpen(true);
                }}
                className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
              >
                Plan An Event
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BOTTOM DOCK (PRIORITIZING BOOK, DIRECTIONS, CALL, FUNCTIONS) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#121314]/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2.5 flex items-center justify-around text-[10px] text-neutral-300 font-bold uppercase tracking-wider">
        <button
          onClick={() => setIsBookingModalOpen(true)}
          className="flex flex-col items-center gap-1 text-[#C7A379] cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book</span>
        </button>

        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(venue.venueName + ' ' + venue.address)}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 hover:text-white cursor-pointer"
        >
          <MapPin className="w-4 h-4" />
          <span>Directions</span>
        </a>

        <a
          href={`tel:${venue.phone.replace(/[^\d+]/g, '')}`}
          className="flex flex-col items-center gap-1 hover:text-white cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          <span>Call</span>
        </a>

        {venue.functionSpaces.length > 0 && (
          <button
            onClick={() => {
              setSelectedSpaceForEnquiry(undefined);
              setIsEventModalOpen(true);
            }}
            className="flex flex-col items-center gap-1 hover:text-white cursor-pointer"
          >
            <Users className="w-4 h-4" />
            <span>Functions</span>
          </button>
        )}
      </div>

      {/* Interactive Modals */}
      <TableBookingModal
        venue={rawVenueRecord}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <EventEnquiryModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        preSelectedVenue={selectedSpaceForEnquiry || venue.venueName}
      />

      {/* Fullscreen Lightbox Modal */}
      {activeGalleryImage && (
        <div
          onClick={() => setActiveGalleryImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
        >
          <img
            src={activeGalleryImage}
            alt="Venue space detail"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

    </div>
  );
};
