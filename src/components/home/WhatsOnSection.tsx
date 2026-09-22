import React, { useState } from 'react';
import { Calendar, Ticket, Sparkles, Filter } from 'lucide-react';
import { EventCard, EventItem } from '../ui/EventCard';
import { FilterBar } from '../ui/FilterBar';
import { Button } from '../ui/Button';
import { VENUE_PHOTOGRAPHY, SYDNEY_LIFESTYLE_IMAGERY } from '../../data/imagery';

export interface WhatsOnSectionProps {
  onSelectEvent: (event: EventItem) => void;
  onNavigate?: (path: string) => void;
}

export const WhatsOnSection: React.FC<WhatsOnSectionProps> = ({ onSelectEvent, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const verifiedEvents: EventItem[] = [
    {
      id: 'ev-drag-universal',
      title: 'Universal Nights: 7-Day Live Drag Production',
      venueName: 'Universal Sydney',
      suburb: 'Darlinghurst',
      dateStr: 'Tonight & Every Night',
      dayNumber: '25',
      monthStr: 'OCT',
      timeStr: '8:00pm – Late',
      category: 'Drag & Cabaret',
      description: 'Sydney’s flagship drag production featuring Australia’s leading drag royalty, precision choreography, and late-night party anthems.',
      ticketPrice: 'Free Entry Downstairs',
      imageUrl: VENUE_PHOTOGRAPHY['universal-sydney']?.[1]?.url || SYDNEY_LIFESTYLE_IMAGERY.dragEntertainment
    },
    {
      id: 'ev-imperial-drag-dine',
      title: 'Priscilla’s Drag & Dine Banquet Feast',
      venueName: 'The Imperial Erskineville',
      suburb: 'Erskineville',
      dateStr: 'Every Friday & Saturday',
      dayNumber: '26',
      monthStr: 'OCT',
      timeStr: '6:30pm & 8:30pm sittings',
      category: 'Drag & Cabaret',
      description: 'Multi-course culinary banquet paired with world-class queer theatrical stage performances in the spiritual home of Priscilla, Queen of the Desert.',
      ticketPrice: 'From $89pp (Includes Banquet + Show)',
      imageUrl: VENUE_PHOTOGRAPHY['imperial-hotel-erskineville']?.[0]?.url
    },
    {
      id: 'ev-civic-underground',
      title: 'Civic Underground: Subterranean Electronic Club Sessions',
      venueName: 'Civic Hotel',
      suburb: 'Sydney CBD',
      dateStr: 'This Saturday Night',
      dayNumber: '27',
      monthStr: 'OCT',
      timeStr: '10:00pm – 4:00am',
      category: 'Live Music & Clubbing',
      description: 'Underground house, techno and live indie showcases inside Sydney’s acoustically tuned basement featuring custom Allen & Heath sound.',
      ticketPrice: 'Early Bird $25 / Door $35',
      imageUrl: VENUE_PHOTOGRAPHY['civic-hotel']?.[1]?.url
    },
    {
      id: 'ev-tudor-trivia',
      title: 'Redfern Wednesday Pub Trivia & Craft Pints',
      venueName: 'The Tudor Hotel',
      suburb: 'Redfern',
      dateStr: 'Every Wednesday Evening',
      dayNumber: '29',
      monthStr: 'OCT',
      timeStr: '7:00pm – 9:30pm',
      category: 'Pub Rituals',
      description: 'Neighbourhood trivia in the upstairs terrace bar. Weekly jackpot cash prizes, craft beer jugs, and parmigiana specials.',
      ticketPrice: 'Free Entry (Book Table)',
      imageUrl: VENUE_PHOTOGRAPHY['the-tudor-hotel']?.[0]?.url
    },
    {
      id: 'ev-crown-ufc',
      title: 'UFC Main Card Broadcast Live & Loud',
      venueName: 'Crown Hotel Surry Hills',
      suburb: 'Surry Hills',
      dateStr: 'Sunday Afternoon',
      dayNumber: '02',
      monthStr: 'NOV',
      timeStr: '12:00pm – 4:00pm',
      category: 'Live Sport',
      description: 'World title pay-per-view broadcast live across all screens in the sports bar. Full TAB terminals, chicken schnitzels, and jugs of local lager.',
      ticketPrice: 'Free General Admission',
      imageUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'ev-harold-sunday-roast',
      title: 'Traditional Sunday Roasts & Live Acoustic Sessions',
      venueName: 'The Harold',
      suburb: 'Forest Lodge',
      dateStr: 'Every Sunday',
      dayNumber: '03',
      monthStr: 'NOV',
      timeStr: '12:00pm until sold out',
      category: 'Pub Rituals',
      description: 'Slow-cooked roast sirloin with Yorkshire puddings, rosemary potatoes, Dutch carrots, and rich bone marrow gravy on Ross Street.',
      ticketPrice: 'Walk-ins Welcome ($28)',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const categoryFilters = [
    { id: 'all', label: 'All Events', count: verifiedEvents.length },
    { id: 'drag', label: 'Drag & Cabaret', count: 2 },
    { id: 'music', label: 'Live Music & Clubbing', count: 1 },
    { id: 'sport', label: 'Live Sport', count: 1 },
    { id: 'rituals', label: 'Pub Rituals', count: 2 }
  ];

  const filteredEvents = verifiedEvents.filter(ev => {
    if (selectedCategory === 'drag') return ev.category === 'Drag & Cabaret';
    if (selectedCategory === 'music') return ev.category === 'Live Music & Clubbing';
    if (selectedCategory === 'sport') return ev.category === 'Live Sport';
    if (selectedCategory === 'rituals') return ev.category === 'Pub Rituals';
    return true;
  });

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 border-b border-[#E7E2D9] pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
              SECTION 05 • ENTERTAINMENT ENGINE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#121314] tracking-tight">
              What’s On Across Sydney
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              From nightly drag spectaculars and basement indie sets to Sunday roasts and major UFC cards. Explore what's happening this week.
            </p>
          </div>

          <div className="text-xs text-neutral-500 font-medium">
            Live recurring rituals & ticketed shows
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10">
          <FilterBar
            options={categoryFilters}
            selectedId={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEvents.map(event => (
            <EventCard
              key={event.id}
              event={event}
              onSelectTicket={onSelectEvent}
            />
          ))}
        </div>

        {/* View All Events CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate?.('/whats-on')}
            className="cursor-pointer"
          >
            Explore Full Sydney What's On Hub (Tonight, This Weekend, Near Me)
          </Button>
        </div>

      </div>
    </section>
  );
};
