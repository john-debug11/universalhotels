import React from 'react';
import { MapPin, Clock, ArrowUpRight, Bed, Users, Sparkles } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';
import { VenueRecord } from '../../data/venueDatabase';

export interface VenueCardProps {
  venue: VenueRecord;
  imageUrl?: string;
  onExplore?: (venue: VenueRecord) => void;
  onBook?: (venue: VenueRecord) => void;
}

export const VenueCard: React.FC<VenueCardProps> = ({
  venue,
  imageUrl,
  onExplore,
  onBook
}) => {
  const fallbackImage = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop';
  const displayImage = imageUrl || fallbackImage;

  const isLateNight = venue.openingHours.includes('4:00am') || venue.openingHours.includes('5:00am');

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#E7E2D9] hover:border-[#C7A379] shadow-[0_4px_20px_-4px_rgba(18,19,20,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(18,19,20,0.10)] transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Visual Media Header */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
          <img
            src={displayImage}
            alt={`${venue.venueName} interior or facade`}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
            <Badge variant="precinct" size="sm" className="bg-black/70 backdrop-blur-md text-[#C7A379] border-white/10">
              {venue.locationSuburb}
            </Badge>

            {isLateNight && (
              <Badge variant="nightlife" size="sm" className="bg-[#121314]/90 backdrop-blur-md text-white border-red-500/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9383A] animate-pulse" />
                Open to 4am
              </Badge>
            )}
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C7A379] block mb-0.5">
              {venue.venueType}
            </span>
            <h3 className="text-2xl font-serif font-bold leading-tight drop-shadow-xs">
              {venue.venueName}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
            {venue.description}
          </p>

          {/* Meta Details */}
          <div className="space-y-2 text-xs bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EBE6DC]">
            <div className="flex items-start gap-2 text-neutral-700">
              <MapPin className="w-3.5 h-3.5 text-[#A47844] mt-0.5 flex-shrink-0" />
              <span className="truncate">{venue.address}</span>
            </div>
            <div className="flex items-start gap-2 text-neutral-700">
              <Clock className="w-3.5 h-3.5 text-[#A47844] mt-0.5 flex-shrink-0" />
              <span className="truncate">{venue.openingHours}</span>
            </div>
          </div>

          {/* Features Highlights */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {venue.accommodation && venue.accommodation !== 'None on site.' && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200">
                <Bed className="w-3 h-3" /> Boutique Stays
              </span>
            )}
            {venue.functionSpaces.length > 0 && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-sky-50 text-sky-900 px-2 py-0.5 rounded border border-sky-200">
                <Users className="w-3 h-3" /> Functions ({venue.functionCapacity.split('.')[0]})
              </span>
            )}
            {venue.dining && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#F1EDE5] text-neutral-700 px-2 py-0.5 rounded">
                <Sparkles className="w-3 h-3 text-[#A47844]" /> Dining
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 sm:p-6 pt-0 flex items-center gap-3">
        <Button 
          variant="primary" 
          size="sm" 
          fullWidth
          onClick={() => onBook?.(venue)}
        >
          Book Table
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          fullWidth
          iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
          onClick={() => onExplore?.(venue)}
        >
          View Venue
        </Button>
      </div>
    </article>
  );
};
