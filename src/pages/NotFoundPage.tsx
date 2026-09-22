import React from 'react';
import { Compass, Search, Home, Building2, Calendar, Users, Bed, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export interface NotFoundPageProps {
  onNavigate?: (path: string) => void;
  attemptedPath?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate, attemptedPath = '' }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-[#E7E2D9] shadow-xs">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A47844]/15 text-[#A47844] text-xs font-bold uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5" />
          404 • Page Not Found
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#121314]">
            Lost In The Ecosystem?
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-lg mx-auto leading-relaxed">
            The page you are looking for ({attemptedPath || 'this URL'}) has moved or does not exist. Our 16 iconic venues, function spaces, and boutique stays are ready for you below.
          </p>
        </div>

        {/* Popular Pathways */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <button
            onClick={() => onNavigate?.('/venues')}
            className="p-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#E8E3D8] transition-all group cursor-pointer"
          >
            <Building2 className="w-5 h-5 text-[#A47844] mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xs text-neutral-900 block">16 Venues</span>
            <span className="text-[10px] text-neutral-500">Browse Pubs & Bars</span>
          </button>

          <button
            onClick={() => onNavigate?.('/functions')}
            className="p-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#E8E3D8] transition-all group cursor-pointer"
          >
            <Users className="w-5 h-5 text-[#A47844] mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xs text-neutral-900 block">Functions</span>
            <span className="text-[10px] text-neutral-500">Hire Event Spaces</span>
          </button>

          <button
            onClick={() => onNavigate?.('/whats-on')}
            className="p-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#E8E3D8] transition-all group cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#A47844] mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xs text-neutral-900 block">What's On</span>
            <span className="text-[10px] text-neutral-500">Drag, DJs & Dining</span>
          </button>

          <button
            onClick={() => onNavigate?.('/accommodation')}
            className="p-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#E8E3D8] transition-all group cursor-pointer"
          >
            <Bed className="w-5 h-5 text-[#A47844] mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xs text-neutral-900 block">Stays</span>
            <span className="text-[10px] text-neutral-500">Boutique Lodging</span>
          </button>
        </div>

        {/* Primary Action */}
        <div className="pt-2">
          <Button
            variant="primary"
            size="md"
            onClick={() => onNavigate?.('/')}
            className="inline-flex items-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            Return to Universal Hotels Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};
