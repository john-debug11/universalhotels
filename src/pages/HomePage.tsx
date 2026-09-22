import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ExperiencesSection } from '../components/home/ExperiencesSection';
import { VenuesSection } from '../components/home/VenuesSection';
import { FunctionsSection } from '../components/home/FunctionsSection';
import { WhatsOnSection } from '../components/home/WhatsOnSection';
import { AccommodationSection } from '../components/home/AccommodationSection';
import { DiscoverSydneySection } from '../components/home/DiscoverSydneySection';
import { AboutSection } from '../components/home/AboutSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';
import { EventEnquiryModal } from '../components/home/EventEnquiryModal';
import { TableBookingModal } from '../components/home/TableBookingModal';
import { VenueRecord } from '../data/venueDatabase';
import { EventItem } from '../components/ui/EventCard';

export interface HomePageProps {
  onNavigate?: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedBookingVenue, setSelectedBookingVenue] = useState<VenueRecord | null>(null);
  const [preSelectedEventVenue, setPreSelectedEventVenue] = useState<string | undefined>(undefined);

  const scrollToVenues = () => {
    const el = document.getElementById('venues-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPlanEvent = (venueName?: string) => {
    setPreSelectedEventVenue(venueName);
    setIsEventModalOpen(true);
  };

  const handleBookTable = (venue: VenueRecord) => {
    setSelectedBookingVenue(venue);
  };

  const handleSelectEvent = (event: EventItem) => {
    // Open booking modal for event's venue or plan event
    handleOpenPlanEvent(event.venueName);
  };

  const handleSelectExperience = (catId: string) => {
    if (catId === 'functions') {
      onNavigate?.('/functions');
    } else if (catId === 'accommodation') {
      onNavigate?.('/accommodation');
    } else if (catId === 'nightlife') {
      onNavigate?.('/whats-on');
    } else {
      scrollToVenues();
    }
  };

  const handleSelectPrecinct = (slug: string) => {
    scrollToVenues();
  };

  return (
    <div className="relative bg-[#FAF8F5]">
      {/* 1. Cinematic Hero */}
      <HeroSection
        onExploreVenues={scrollToVenues}
        onPlanEvent={() => handleOpenPlanEvent()}
      />

      {/* 2. Find Your Experience */}
      <ExperiencesSection
        onSelectExperience={handleSelectExperience}
      />

      {/* 3. Explore Our Venues */}
      <VenuesSection
        onBookVenue={handleBookTable}
        onExploreVenue={(venue) => {
          onNavigate?.(venue.url);
        }}
      />

      {/* 4. Functions & Events */}
      <FunctionsSection
        onPlanEvent={() => handleOpenPlanEvent()}
        onNavigate={onNavigate}
      />

      {/* 5. What's On */}
      <WhatsOnSection
        onSelectEvent={handleSelectEvent}
        onNavigate={onNavigate}
      />

      {/* 6. Accommodation */}
      <AccommodationSection
        onNavigate={onNavigate}
      />

      {/* 7. Discover Sydney */}
      <DiscoverSydneySection
        onSelectPrecinct={handleSelectPrecinct}
      />

      {/* 8. About Universal Hotels */}
      <AboutSection
        onLearnMore={() => onNavigate?.('/about')}
      />

      {/* 9. Final CTA */}
      <FinalCtaSection
        onExploreVenues={scrollToVenues}
        onPlanEvent={() => handleOpenPlanEvent()}
      />

      {/* Interactive Modals */}
      <EventEnquiryModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        preSelectedVenue={preSelectedEventVenue}
      />

      <TableBookingModal
        venue={selectedBookingVenue}
        isOpen={!!selectedBookingVenue}
        onClose={() => setSelectedBookingVenue(null)}
      />
    </div>
  );
};
