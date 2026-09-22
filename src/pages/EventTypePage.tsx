import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Wine, 
  Utensils, 
  Plus, 
  Calendar,
  Building2,
  Phone
} from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { EventTypeConfig } from '../data/functionsData';
import { VENUE_DETAILS } from '../data/venueDetails';
import { MakeAnEnquiryForm } from '../components/functions/MakeAnEnquiryForm';
import { EventEnquiryModal } from '../components/home/EventEnquiryModal';
import { generateFunctionsIntentSeoMetadata, applySeoMetadata } from '../utils/seo';

export interface EventTypePageProps {
  config: EventTypeConfig;
  onNavigate: (path: string) => void;
}

export const EventTypePage: React.FC<EventTypePageProps> = ({ config, onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedSpaceEnquiry, setSelectedSpaceEnquiry] = useState<string | null>(null);

  // Recommended Venues for this Event Intent
  const recommendedVenues = config.recommendedVenueSlugs
    .map(slug => ({ slug, data: VENUE_DETAILS[slug] }))
    .filter(v => !!v.data);

  // Apply Specific Open Graph, Twitter, and Schema Metadata for this Event Intent
  useEffect(() => {
    const heroImg = recommendedVenues[0]?.data?.heroImage;
    const meta = generateFunctionsIntentSeoMetadata(
      config.slug,
      config.title,
      config.seoTitle,
      config.seoDescription,
      heroImg,
      config.faqs
    );
    const cleanup = applySeoMetadata(meta);
    return cleanup;
  }, [config.slug, config.title, config.seoTitle, config.seoDescription]);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B0C0D] text-white py-16 sm:py-24 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={recommendedVenues[0]?.data.heroImage || 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'}
            alt={config.title}
            className="w-full h-full object-cover opacity-25 scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0D] via-[#0B0C0D]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-white/80">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Functions & Events', href: '/functions' },
                { label: config.title, href: `/functions/${config.slug}` }
              ]}
            />
          </div>

          <div className="max-w-3xl space-y-4 pt-2">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C7A379] block">
              {config.badge}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FAF8F5] tracking-tight leading-[1]">
              {config.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
              {config.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="#recommended-spaces"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#A47844] hover:bg-[#8D6433] text-white transition-colors"
              >
                Browse Recommended Spaces
              </a>
              <a
                href="#enquiry-section"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              >
                Make an Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY VALUE PROPOSITION & PACKAGE OVERVIEW */}
      <section className="py-14 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#A47844] block">
                WHY HOST WITH UNIVERSAL HOTELS
              </span>
              <h2 className="text-3xl font-serif text-neutral-900">
                Crafted for {config.title} in Sydney
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {config.targetAudience} Our team provides end-to-end event management, seamless audiovisual coordination, tailored chef menus, and customized beverage selections across iconic Sydney locations.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {config.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packages Highlight Card */}
            <div className="lg:col-span-6 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#E7E2D9] space-y-4">
              <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Package Inclusions
                </span>
                <span className="text-xs text-[#A47844] font-semibold">Flexible Formats</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="space-y-1">
                  <span className="font-bold text-neutral-900 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-[#A47844]" /> Food & Canapés
                  </span>
                  <p className="text-neutral-600 leading-relaxed">{config.packagesHighlight.canapes}</p>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#EAE5DC]">
                  <span className="font-bold text-neutral-900 flex items-center gap-1.5">
                    <Wine className="w-3.5 h-3.5 text-[#A47844]" /> Beverage Packages & Tabs
                  </span>
                  <p className="text-neutral-600 leading-relaxed">{config.packagesHighlight.beverage}</p>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#EAE5DC]">
                  <span className="font-bold text-neutral-900 flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5 text-[#A47844]" /> Event Enhancements
                  </span>
                  <p className="text-neutral-600 leading-relaxed">{config.packagesHighlight.additions}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. RECOMMENDED VENUES & SPACES */}
      <section id="recommended-spaces" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
            VERIFIED VENUES
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900">
            Top Spaces for {config.title}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            Explore handpicked function spaces configured specifically for this event format.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedVenues.map(({ slug, data }) => {
            const primarySpace = data.functionSpaces[0];

            return (
              <div
                key={slug}
                className="bg-white rounded-2xl border border-[#E7E2D9] overflow-hidden shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={data.heroImage}
                      alt={data.venueName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md">
                        {data.locationSuburb}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#A47844] tracking-wider block mb-1">
                        {data.venueType}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-neutral-900">
                        {data.venueName}
                      </h3>
                    </div>

                    <p className="text-xs text-neutral-600 line-clamp-2">
                      {data.tagline}
                    </p>

                    {/* Spaces count */}
                    <div className="py-2 border-y border-[#F0ECE4] text-xs">
                      <div className="flex justify-between items-center text-neutral-700">
                        <span>Function Spaces:</span>
                        <span className="font-semibold text-neutral-900">{data.functionSpaces.length} Available</span>
                      </div>
                      {primarySpace && (
                        <div className="flex justify-between items-center text-neutral-500 pt-1 text-[11px]">
                          <span>Featured Space:</span>
                          <span className="text-neutral-700 font-medium">{primarySpace.spaceName} ({primarySpace.capacityStanding} st)</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full justify-center text-xs"
                    onClick={() => setSelectedSpaceEnquiry(data.venueName)}
                  >
                    Enquire for {data.venueName}
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-center text-xs"
                    onClick={() => onNavigate(`/venues/${slug}`)}
                  >
                    View Venue & Spaces
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. EVENT FAQS SECTION */}
      <section className="py-16 bg-[#F5F1EA] border-y border-[#E7E2D9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
              QUESTIONS & PLANNING
            </span>
            <h2 className="text-3xl font-serif text-neutral-900">
              {config.title} FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {config.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E7E2D9] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left text-sm font-semibold text-neutral-900 hover:text-[#A47844] cursor-pointer"
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
        </div>
      </section>

      {/* 5. MAKE AN ENQUIRY FORM SECTION */}
      <section id="enquiry-section" className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <MakeAnEnquiryForm initialEventType={config.title} />
      </section>

      {/* Modal for Instant Space Enquiry */}
      <EventEnquiryModal
        isOpen={!!selectedSpaceEnquiry}
        onClose={() => setSelectedSpaceEnquiry(null)}
        preSelectedVenue={selectedSpaceEnquiry || undefined}
      />

    </div>
  );
};
