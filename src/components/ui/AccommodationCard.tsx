import React from 'react';
import { Bed, MapPin, CheckCircle2, ArrowUpRight, Wifi, Wind, Coffee } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';

export interface AccommodationItem {
  id: string;
  name: string;
  suburb: string;
  venueName: string;
  tagline: string;
  description: string;
  roomTypes: string[];
  amenities: string[];
  locationHighlight: string;
  rateHint: string;
  bookingUrl: string;
  imageUrl?: string;
}

export interface AccommodationCardProps {
  property: AccommodationItem;
}

export const AccommodationCard: React.FC<AccommodationCardProps> = ({ property }) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#E7E2D9] hover:border-[#C7A379] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        {property.imageUrl && (
          <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
            <img
              src={property.imageUrl}
              alt={`${property.name} boutique guest room`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3">
              <Badge variant="accommodation" size="sm">
                {property.suburb}
              </Badge>
            </div>
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold text-[#C7A379] tracking-wider block">
                Boutique Hotel Stays
              </span>
              <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                {property.name}
              </h3>
            </div>
          </div>
        )}

        <div className="p-5 sm:p-6 space-y-4">
          <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
            {property.description}
          </p>

          {/* Location Proximity Highlight */}
          <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EBE6DC] text-xs text-neutral-700 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#A47844] mt-0.5 flex-shrink-0" />
            <span>{property.locationHighlight}</span>
          </div>

          {/* Amenities Row */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider block">
              Included Amenities:
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-neutral-700">
              {property.amenities.slice(0, 4).map((am, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                  <span className="truncate">{am}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 pt-0 border-t border-[#EFECE6] mt-4 flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] text-neutral-500 uppercase font-semibold block">Best Direct Rate</span>
          <span className="text-xs font-semibold text-neutral-900">{property.rateHint}</span>
        </div>

        <a
          href={property.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex"
        >
          <Button
            variant="primary"
            size="sm"
            iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            BOOK
          </Button>
        </a>
      </div>
    </article>
  );
};
