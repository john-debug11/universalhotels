import React from 'react';
import { Users, Wine, Volume2, Maximize2, ArrowUpRight } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';

export interface FunctionSpaceItem {
  id: string;
  name: string;
  venueName: string;
  suburb: string;
  standingCapacity: number;
  seatedCapacity?: number;
  description: string;
  features: string[];
  idealFor: string[];
  imageUrl?: string;
}

export interface FunctionSpaceCardProps {
  space: FunctionSpaceItem;
  onEnquire?: (space: FunctionSpaceItem) => void;
}

export const FunctionSpaceCard: React.FC<FunctionSpaceCardProps> = ({ space, onEnquire }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E7E2D9] hover:border-[#C7A379] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        {space.imageUrl && (
          <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
            <img
              src={space.imageUrl}
              alt={space.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3">
              <Badge variant="precinct" size="sm" className="bg-black/70 backdrop-blur-md text-white border-white/10">
                {space.suburb}
              </Badge>
            </div>
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-bold text-[#C7A379] tracking-wider block">
                {space.venueName}
              </span>
              <h3 className="text-xl font-serif font-bold text-white leading-tight">
                {space.name}
              </h3>
            </div>
          </div>
        )}

        <div className="p-5 sm:p-6 space-y-4">
          {!space.imageUrl && (
            <div>
              <span className="text-[10px] uppercase font-bold text-[#A47844] tracking-wider block">
                {space.venueName} • {space.suburb}
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#121314] mt-0.5">
                {space.name}
              </h3>
            </div>
          )}

          {/* Capacity Matrix Badges */}
          <div className="grid grid-cols-2 gap-3 bg-[#FAF8F5] p-3 rounded-xl border border-[#EBE6DC] text-center">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase font-semibold block">Standing</span>
              <span className="text-lg font-serif font-bold text-neutral-900">{space.standingCapacity} pax</span>
            </div>
            {space.seatedCapacity ? (
              <div className="border-l border-neutral-200">
                <span className="text-[10px] text-neutral-500 uppercase font-semibold block">Seated Banquet</span>
                <span className="text-lg font-serif font-bold text-neutral-900">{space.seatedCapacity} pax</span>
              </div>
            ) : (
              <div className="border-l border-neutral-200 flex items-center justify-center text-xs text-neutral-500">
                Cocktail Format
              </div>
            )}
          </div>

          <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
            {space.description}
          </p>

          {/* Features Highlights */}
          <div className="space-y-1 pt-1">
            <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider block">
              Space Specifications:
            </span>
            <ul className="text-xs text-neutral-700 space-y-1">
              {space.features.slice(0, 3).map((f, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A47844]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 pt-0 border-t border-[#EFECE6] mt-4 flex items-center gap-3">
        <Button
          variant="primary"
          size="sm"
          fullWidth
          onClick={() => onEnquire?.(space)}
        >
          Check Availability
        </Button>
      </div>
    </div>
  );
};
