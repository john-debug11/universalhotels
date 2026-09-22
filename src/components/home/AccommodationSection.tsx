import React from 'react';
import { Bed, MapPin, Sparkles, CheckCircle2, ArrowUpRight, Building } from 'lucide-react';
import { AccommodationCard, AccommodationItem } from '../ui/AccommodationCard';
import { VENUE_PHOTOGRAPHY } from '../../data/imagery';
import { Button } from '../ui/Button';

export interface AccommodationSectionProps {
  onNavigate?: (path: string) => void;
}

export const AccommodationSection: React.FC<AccommodationSectionProps> = ({ onNavigate }) => {
  const verifiedProperties: AccommodationItem[] = [
    {
      id: 'acc-crown',
      name: 'Crown Hotel Boutique Stays',
      suburb: 'Surry Hills',
      venueName: 'Crown Hotel Surry Hills',
      tagline: 'Modern boutique rooms near SCG, Allianz Stadium & Central Station',
      description: 'Refined boutique guest rooms on upper floors of the iconic Crown Hotel. En-suite bathrooms, luxury linens, guest kitchenette, and downstairs dining.',
      roomTypes: ['Standard Queen Room', 'Deluxe Queen with En-Suite', 'Twin Share Room'],
      amenities: ['Private En-Suite Bathrooms', 'Individual Climate A/C', 'Complimentary High-Speed Wi-Fi', 'Downstairs Sports Bar & Dining'],
      locationHighlight: '10 min walk to Central Station • 10 min to SCG & Allianz Stadium',
      rateHint: 'From $175 / night',
      bookingUrl: 'https://crownhotel.com.au/stay/',
      imageUrl: VENUE_PHOTOGRAPHY['crown-hotel-surry-hills']?.[1]?.url
    },
    {
      id: 'acc-riverview',
      name: 'Riverview Hotel Waterfront Stays',
      suburb: 'Tempe',
      venueName: 'Riverview Hotel',
      tagline: 'Contemporary refurbished rooms on the Cooks River airport fringe',
      description: 'Modern, quiet boutique accommodation adjacent to Sydenham Metro and minutes from Sydney Airport. Features Stix Hellenic Taverna on the ground floor.',
      roomTypes: ['Refurbished King Room', 'Deluxe Double Room', 'Balcony Room'],
      amenities: ['Riverfront Proximity', 'Stix Hellenic Taverna On-Site', 'Smart TV & Fast Wi-Fi', 'Rapid Metro Transit to CBD'],
      locationHighlight: '7 min drive to Sydney Airport • 2 min walk to Sydenham Metro',
      rateHint: 'From $160 / night',
      bookingUrl: 'https://riverviewhoteltempe.com.au/',
      imageUrl: VENUE_PHOTOGRAPHY['riverview-hotel-tempe']?.[1]?.url
    },
    {
      id: 'acc-tempe',
      name: 'Tempe Hotel Budget Lodging',
      suburb: 'Tempe',
      venueName: 'Tempe Hotel',
      tagline: 'Comfortable, clean pub corridor accommodation along Princes Highway',
      description: 'Straightforward, practical lodging ideal for contractors, interstate trades, and budget-conscious travelers. Features free on-site parking and a bistro.',
      roomTypes: ['Standard Single Room', 'Double Room', 'Twin Share'],
      amenities: ['Air Conditioning & Flat TV', 'Bistro & Beer Garden Downstairs', 'Free On-Site Parking', 'Direct Highway Access'],
      locationHighlight: 'Direct Princes Highway corridor • Close to IKEA Tempe & airport',
      rateHint: 'From $120 / night',
      bookingUrl: 'https://tempehotel.com.au/',
      imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F1EA] border-t border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-[#E7E2D9] pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
              SECTION 06 • BOUTIQUE LODGING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#121314] tracking-tight">
              Stay With Universal Hotels
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              Thoughtfully refurbished boutique rooms and comfortable pub accommodation across key Sydney locations. From Surry Hills sports weekends to Cooks River airport stays.
            </p>
          </div>

          <div className="text-xs text-neutral-500 font-medium">
            3 Verified Properties • Best Rate Guaranteed Direct
          </div>
        </div>

        {/* 3 Accommodation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {verifiedProperties.map(property => (
            <AccommodationCard
              key={property.id}
              property={property}
            />
          ))}
        </div>

        {/* View All Accommodation Portal CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate?.('/accommodation')}
            className="cursor-pointer inline-flex items-center gap-2"
          >
            <Building className="w-4 h-4" />
            Explore Accommodation Property Guides & Live Portals
          </Button>
        </div>

      </div>
    </section>
  );
};
