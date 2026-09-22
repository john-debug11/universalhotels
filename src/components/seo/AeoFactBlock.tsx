import React, { useState, useEffect } from 'react';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Clock,
  Sparkles,
  ShieldCheck,
  Building2,
  Calendar,
  Bed,
  ArrowRight
} from 'lucide-react';
import { VenueRecord } from '../../data/venueDatabase';
import { VenueDetailRecord } from '../../data/venueDetails';
import { generateFaqSchema, getEnrichedVenueFaqs } from '../../utils/seo';

export interface AeoFactBlockProps {
  venue: VenueRecord;
  detail?: VenueDetailRecord;
  onNavigate?: (path: string) => void;
  className?: string;
}

export const AeoFactBlock: React.FC<AeoFactBlockProps> = ({
  venue,
  detail,
  onNavigate,
  className = ''
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Derive factual FAQs for AEO/GEO including Parking, Accessibility, and Booking
  const faqs = detail ? getEnrichedVenueFaqs(detail) : [
    {
      question: `What are the opening hours of ${venue.venueName}?`,
      answer: `${venue.venueName} is open Monday to Sunday. Opening hours: ${venue.openingHours}.`
    },
    {
      question: `Does ${venue.venueName} host private functions and events?`,
      answer: `${venue.venueName} offers flexible event spaces accommodating groups up to ${venue.functionCapacity || '200+'} guests with dedicated food & beverage packages.`
    },
    {
      question: `Is accommodation available at ${venue.venueName}?`,
      answer: venue.accommodation && venue.accommodation.trim() !== ''
        ? `Yes, boutique accommodation is available with direct booking: ${venue.accommodation}.`
        : `Accommodation is not offered on-site at ${venue.venueName}, but Universal Hotels operates boutique lodging at Crown Hotel Surry Hills and Riverview Hotel Tempe.`
    },
    {
      question: `How do I make a table or group reservation at ${venue.venueName}?`,
      answer: `Reservations can be made online via the official Universal Hotels portal, or by calling ${venue.phone}.`
    },
    {
      question: `What are the parking and accessibility details for ${venue.venueName}?`,
      answer: `${venue.venueName} is located at ${venue.address}. Street parking and nearby transport hubs are available. Primary public areas provide step-free access and assistance animals are welcomed.`
    }
  ];

  // Unique script ID
  const venueId = venue.url.replace(/\//g, '-');

  // Inject FAQPage Schema only if not already provided by venue detail template graph
  useEffect(() => {
    // If VenueDetailTemplate already has injected schema-venue, skip separate injection to prevent duplicate schema
    if (detail && document.getElementById(`schema-venue-${detail.slug}`)) {
      return;
    }

    const scriptId = `faq-json-ld-${venueId}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(generateFaqSchema(faqs));

    return () => {
      const el = document.getElementById(scriptId);
      if (el) {
        el.remove();
      }
    };
  }, [faqs, venueId, detail]);

  const hasAccommodation = Boolean(venue.accommodation && venue.accommodation.trim() !== '');

  return (
    <section 
      aria-label={`${venue.venueName} Factual Overview and FAQs`}
      className={`bg-white rounded-2xl border border-[#E7E2D9] p-6 sm:p-8 shadow-xs space-y-8 ${className}`}
    >
      {/* Header with AEO Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EFECE6] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#A47844]/10 text-[#A47844] text-[10px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" />
            Verified Venue Factsheet & AEO Summary
          </div>
          <h3 className="font-serif font-bold text-2xl text-[#121314]">
            {venue.venueName} • Key Operational Facts
          </h3>
          <p className="text-xs text-neutral-500 mt-0.5">
            Structured reference data for visitors, concierges, and search engines.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-neutral-600 bg-[#FAF8F5] px-3.5 py-2 rounded-xl border border-[#E8E3D8]">
          <ShieldCheck className="w-4 h-4 text-[#A47844]" />
          <span>Universal Hotels Group Verified</span>
        </div>
      </div>

      {/* Factual Matrix (Answer Engine Extraction Block) */}
      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Fact 1: Venue & Type */}
        <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] space-y-1">
          <dt className="text-[10px] uppercase font-bold text-neutral-400 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-[#A47844]" />
            Venue Type & Precinct
          </dt>
          <dd className="font-bold text-neutral-900 text-sm">{venue.venueType}</dd>
          <dd className="text-neutral-500">{venue.locationSuburb}, Sydney</dd>
        </div>

        {/* Fact 2: Address */}
        <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] space-y-1">
          <dt className="text-[10px] uppercase font-bold text-neutral-400 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#A47844]" />
            Physical Address
          </dt>
          <dd className="font-bold text-neutral-900 text-sm leading-snug">{venue.address}</dd>
          <dd className="text-neutral-500">Google Maps Geocoded</dd>
        </div>

        {/* Fact 3: Capacity & Functions */}
        <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] space-y-1">
          <dt className="text-[10px] uppercase font-bold text-neutral-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#A47844]" />
            Capacity & Functions
          </dt>
          <dd className="font-bold text-neutral-900 text-sm">Up to {venue.functionCapacity || '200+'} Guests</dd>
          <dd className="text-neutral-500">
            {detail?.functionSpaces?.length ? `${detail.functionSpaces.length} Private Function Spaces` : 'Group & Private Hire'}
          </dd>
        </div>

        {/* Fact 4: Contact & Bookings */}
        <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] space-y-1">
          <dt className="text-[10px] uppercase font-bold text-neutral-400 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#A47844]" />
            Phone & Direct Booking
          </dt>
          <dd className="font-bold text-[#A47844] text-sm">{venue.phone}</dd>
          <dd className="text-neutral-500">
            {hasAccommodation ? 'Boutique Rooms Available' : 'Instant Table Reservations'}
          </dd>
        </div>
      </dl>

      {/* Structured Accordion FAQs (Injected into FAQPage JSON-LD) */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h4 className="font-serif font-bold text-lg text-neutral-900 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#A47844]" />
            Frequently Asked Questions & Answers
          </h4>
          <span className="text-[11px] text-neutral-400 font-mono">schema.org/FAQPage</span>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-xl border border-[#E8E3D8] overflow-hidden transition-colors"
              >
                <button
                  id={`faq-btn-${venueId}-${idx}`}
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4 bg-[#FAF8F5] hover:bg-[#F5F1EA] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#A47844] focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${venueId}-${idx}`}
                >
                  <span className="font-semibold text-xs sm:text-sm text-neutral-900">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${venueId}-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${venueId}-${idx}`}
                    className="p-4 bg-white text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-[#E8E3D8]"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Internal Linking Pathway Footer */}
      <div className="pt-4 border-t border-[#EFECE6] flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className="text-neutral-500">
          Need assistance or custom event catering?
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate?.('/functions')}
            className="text-[#A47844] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            Explore Event Hire <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
