import React from 'react';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';

export interface EventItem {
  id: string;
  title: string;
  venueName: string;
  suburb: string;
  dateStr: string;
  dayNumber: string;
  monthStr: string;
  timeStr: string;
  category: 'Drag & Cabaret' | 'Live Music & Clubbing' | 'Live Sport' | 'Pub Rituals';
  description: string;
  ticketPrice?: string;
  ticketUrl?: string;
  imageUrl?: string;
}

export interface EventCardProps {
  event: EventItem;
  onSelectTicket?: (event: EventItem) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelectTicket }) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#E7E2D9] hover:border-[#C7A379] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        {event.imageUrl && (
          <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 right-3">
              <Badge variant={event.category.includes('Drag') ? 'nightlife' : 'editorial'} size="sm">
                {event.category}
              </Badge>
            </div>
          </div>
        )}

        <div className="p-5 sm:p-6 flex items-start gap-4">
          {/* Visual Date Tile */}
          <div className="flex-shrink-0 w-12 sm:w-14 rounded-xl bg-[#FAF8F5] border border-[#E2DDD4] p-2 text-center flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase font-bold text-[#A47844] tracking-wider block">
              {event.monthStr}
            </span>
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#121314] leading-none mt-0.5">
              {event.dayNumber}
            </span>
          </div>

          <div className="space-y-1.5 min-w-0">
            <div className="flex items-center gap-2 text-[11px] text-neutral-500">
              <span className="font-semibold text-neutral-800">{event.venueName}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#A47844]" /> {event.suburb}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#121314] leading-snug group-hover:text-[#A47844] transition-colors">
              {event.title}
            </h3>

            <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
              {event.description}
            </p>

            <div className="flex items-center gap-3 text-xs text-neutral-500 pt-1">
              <span className="flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#A47844]" /> {event.timeStr}
              </span>
              {event.ticketPrice && (
                <span className="font-semibold text-neutral-900 bg-[#F1EDE5] px-2 py-0.5 rounded text-[11px]">
                  {event.ticketPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 pt-0 border-t border-[#EFECE6] mt-4 flex items-center justify-between">
        <span className="text-xs text-neutral-500 font-medium">
          {event.dateStr}
        </span>
        <Button
          variant="secondary"
          size="sm"
          iconRight={<Ticket className="w-3.5 h-3.5" />}
          onClick={() => onSelectTicket?.(event)}
        >
          VIEW EVENT
        </Button>
      </div>
    </article>
  );
};
