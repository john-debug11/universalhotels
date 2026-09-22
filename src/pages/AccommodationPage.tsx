import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Calendar,
  Clock,
  Car,
  Wifi,
  Wind,
  Bath,
  Tv,
  Utensils,
  Plane,
  Train,
  CheckCircle2,
  ShieldCheck,
  Building,
  BedDouble,
  Users,
  ChevronRight,
  Info
} from 'lucide-react';
import { ACCOMMODATION_PROPERTIES, AccommodationProperty } from '../data/accommodationData';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export interface AccommodationPageProps {
  onNavigate?: (path: string) => void;
  initialPropertySlug?: string;
}

export const AccommodationPage: React.FC<AccommodationPageProps> = ({
  onNavigate,
  initialPropertySlug
}) => {
  const [selectedPropertySlug, setSelectedPropertySlug] = useState<string>(
    initialPropertySlug && ACCOMMODATION_PROPERTIES.some(p => p.slug === initialPropertySlug)
      ? initialPropertySlug
      : ACCOMMODATION_PROPERTIES[0].slug
  );

  const activeProperty: AccommodationProperty =
    ACCOMMODATION_PROPERTIES.find(p => p.slug === selectedPropertySlug) ||
    ACCOMMODATION_PROPERTIES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bath': return <Bath className="w-5 h-5 text-[#A47844]" />;
      case 'Wind': return <Wind className="w-5 h-5 text-[#A47844]" />;
      case 'Wifi': return <Wifi className="w-5 h-5 text-[#A47844]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#A47844]" />;
      case 'Tv': return <Tv className="w-5 h-5 text-[#A47844]" />;
      case 'Car': return <Car className="w-5 h-5 text-[#A47844]" />;
      case 'Plane': return <Plane className="w-5 h-5 text-[#A47844]" />;
      case 'Train': return <Train className="w-5 h-5 text-[#A47844]" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#A47844]" />;
    }
  };

  return (
    <div className="min-w-full min-h-screen bg-[#FDFBF7] text-[#121314]">
      {/* 1. Global Accommodation Hero */}
      <section className="relative bg-[#121314] text-white py-16 sm:py-24 border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1920&auto=format&fit=crop"
            alt="Universal Hotels Accommodation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121314] via-[#121314]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A47844]/20 border border-[#A47844]/40 text-[#C7A379] text-xs font-bold tracking-widest uppercase">
              <Building className="w-3.5 h-3.5" />
              Universal Hotels Accommodation Portfolio
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              Boutique Lodging & Pub Stays in Sydney
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Experience warm Sydney hospitality with on-site accommodation situated directly above our historic pubs and dining destinations. From vibrant Surry Hills near the SCG to riverside stays minutes from Sydney Airport.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#A47844]" /> Verified Live Site Properties
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Utensils className="w-4 h-4 text-[#A47844]" /> Downstairs Bistro & Bar Access
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#A47844]" /> Best Direct Booking Assurance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Property Selector Tabs */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E7E2D9] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 overflow-x-auto py-3 no-scrollbar">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider mr-2 hidden md:inline">
                Select Property:
              </span>
              {ACCOMMODATION_PROPERTIES.map((prop) => {
                const isActive = prop.slug === activeProperty.slug;
                return (
                  <button
                    key={prop.id}
                    onClick={() => setSelectedPropertySlug(prop.slug)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#121314] text-white shadow-sm font-semibold'
                        : 'bg-[#FAF8F5] text-neutral-600 hover:bg-[#EFECE6] hover:text-neutral-900 border border-[#E7E2D9]'
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-[#C7A379]' : 'text-neutral-400'}`} />
                    <span>{prop.propertyName}</span>
                    <span className="text-[10px] opacity-75 font-normal">({prop.suburb})</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3 text-xs text-neutral-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#A47844]" /> Check-in: 2pm | Check-out: 10am
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Selected Property Detailed View */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
        {/* A. Property Hero & Quick Facts */}
        <div className="bg-white rounded-2xl border border-[#E7E2D9] overflow-hidden shadow-xs">
          <div className="relative aspect-[21/9] min-h-[320px] sm:min-h-[420px] bg-neutral-900 overflow-hidden">
            <img
              src={activeProperty.heroImage}
              alt={activeProperty.propertyName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#A47844] text-white">
                  {activeProperty.suburb}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {activeProperty.venueName}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                {activeProperty.propertyName}
              </h2>

              <p className="text-sm sm:text-base text-neutral-200 max-w-2xl font-light">
                {activeProperty.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={activeProperty.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#A47844] hover:bg-[#8F6636] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                >
                  Book Live Rates
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onNavigate?.(activeProperty.venueSlug ? `/venues/${activeProperty.venueSlug}` : '/venues')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Explore Downstairs Venue
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EFECE6] bg-[#FAF8F5] border-t border-[#E7E2D9] text-xs">
            <div className="p-4 sm:p-5 space-y-1">
              <span className="text-neutral-500 uppercase tracking-wider font-semibold block text-[10px]">Location</span>
              <p className="font-bold text-neutral-900 leading-snug">{activeProperty.address}</p>
            </div>

            <div className="p-4 sm:p-5 space-y-1">
              <span className="text-neutral-500 uppercase tracking-wider font-semibold block text-[10px]">Check-In / Out</span>
              <p className="font-bold text-neutral-900 leading-snug">{activeProperty.checkInTime} / {activeProperty.checkOutTime}</p>
            </div>

            <div className="p-4 sm:p-5 space-y-1">
              <span className="text-neutral-500 uppercase tracking-wider font-semibold block text-[10px]">Parking Policy</span>
              <p className="font-medium text-neutral-800 line-clamp-2">{activeProperty.parkingPolicy}</p>
            </div>

            <div className="p-4 sm:p-5 space-y-1">
              <span className="text-neutral-500 uppercase tracking-wider font-semibold block text-[10px]">Direct Enquiries</span>
              <p className="font-bold text-[#A47844]">{activeProperty.phone}</p>
            </div>
          </div>
        </div>

        {/* B. Property Information & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
                Property Overview
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#121314]">
                Comfortable Lodging With Genuine Sydney Character
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              {activeProperty.fullOverview.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3D8] flex items-start gap-3">
              <Info className="w-5 h-5 text-[#A47844] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-600 space-y-1">
                <span className="font-bold text-neutral-900 block">Verified Accommodation Policy:</span>
                <p>
                  Universal Hotels properties maintain strictly verified rates and availability directly via our live reservation engines. Room allocations, exact rates, and cancellation policies are confirmed dynamically at the time of reservation.
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Reception Box */}
          <div className="bg-white rounded-2xl p-6 border border-[#E7E2D9] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-[#A47844] block">
                Reception & Contact
              </span>

              <h4 className="font-serif font-bold text-lg text-neutral-900">
                Direct Host Communication
              </h4>

              <div className="space-y-3 text-xs text-neutral-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#A47844] flex-shrink-0 mt-0.5" />
                  <span>{activeProperty.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                  <a href={`tel:${activeProperty.phone}`} className="font-semibold text-neutral-900 hover:text-[#A47844]">
                    {activeProperty.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                  <a href={`mailto:${activeProperty.email}`} className="text-neutral-900 hover:text-[#A47844]">
                    {activeProperty.email}
                  </a>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-[#EFECE6]">
                  <Clock className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" />
                  <p className="text-[11px] leading-relaxed text-neutral-500">
                    {activeProperty.receptionHours}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={activeProperty.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-xl bg-[#121314] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              BOOK DIRECT
            </a>
          </div>
        </div>

        {/* C. Rooms Showcase */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
                Verified Room Configurations
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#121314]">
                Available Guest Rooms
              </h3>
            </div>
            <p className="text-xs text-neutral-500 max-w-md">
              Room rates and real-time inventory vary by season and match schedules. Enquire directly through the official booking portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeProperty.rooms.map((room, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#E7E2D9] hover:border-[#C7A379] transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  {room.imageUrl && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                      <img
                        src={room.imageUrl}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white">
                        Max {room.maxGuests} {room.maxGuests === 1 ? 'Guest' : 'Guests'}
                      </div>
                    </div>
                  )}

                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-serif font-bold text-lg text-neutral-900">
                        {room.name}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#A47844] font-semibold">
                      <BedDouble className="w-4 h-4" />
                      <span>{room.bedType}</span>
                    </div>

                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="pt-2 border-t border-[#EFECE6] space-y-1.5">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                        Inclusions & Amenities:
                      </span>
                      <ul className="text-xs text-neutral-600 space-y-1">
                        {room.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#A47844] flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 space-y-3">
                  {room.rateNote && (
                    <p className="text-[11px] text-neutral-500 italic bg-[#FAF8F5] p-2.5 rounded-lg border border-[#E8E3D8]">
                      {room.rateNote}
                    </p>
                  )}

                  <a
                    href={activeProperty.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center py-2.5 rounded-xl bg-[#A47844] hover:bg-[#8F6636] text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    BOOK ROOM
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* D. Amenities Matrix */}
        <div className="space-y-6">
          <div className="space-y-1.5">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
              Guest Comforts
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#121314]">
              Key Amenities & In-Room Inclusions
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeProperty.amenities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-[#E7E2D9] flex items-start gap-3.5 shadow-xs"
              >
                <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8E3D8] flex-shrink-0">
                  {getIcon(item.icon)}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-neutral-900">{item.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* E. Venue Facilities (Downstairs Pub/Bistro) */}
        <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-10 border border-[#E7E2D9] space-y-6">
          <div className="space-y-1.5">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
              On-Site Hospitality
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#121314]">
              Downstairs Venue Facilities & Dining
            </h3>
            <p className="text-xs text-neutral-600 max-w-2xl">
              Guests staying at {activeProperty.propertyName} enjoy direct access to our bustling downstairs hospitality offerings, bars, and bistro spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeProperty.venueFacilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-[#E7E2D9] space-y-1.5 shadow-xs"
              >
                <h4 className="font-serif font-bold text-base text-neutral-900">{fac.name}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{fac.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* F. Nearby Attractions & Location */}
        <div className="space-y-6">
          <div className="space-y-1.5">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
              Precinct Highlights
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#121314]">
              Nearby Attractions & Transit Links
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeProperty.nearbyAttractions.map((att, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-[#E7E2D9] space-y-2 shadow-xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-sm text-neutral-900">{att.name}</h4>
                  <span className="text-[11px] font-semibold text-[#A47844] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#E8E3D8]">
                    {att.distance}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {att.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* G. Visual Gallery */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
                Photo Tour
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#121314]">
                Property Gallery
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeProperty.gallery.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-[#E7E2D9] shadow-xs"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-medium leading-tight">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H. Verified Portfolio Comparison */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7E2D9] space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
              Portfolio Comparison
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#121314]">
              All Verified Universal Hotels Lodging
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#E7E2D9] text-neutral-500 uppercase font-semibold">
                  <th className="py-3 px-4">Property</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Primary Stays</th>
                  <th className="py-3 px-4">Parking</th>
                  <th className="py-3 px-4">Key Advantage</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFECE6]">
                {ACCOMMODATION_PROPERTIES.map((p) => (
                  <tr key={p.id} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="py-4 px-4 font-bold text-neutral-900">
                      {p.propertyName}
                    </td>
                    <td className="py-4 px-4 text-neutral-600">
                      {p.suburb}
                    </td>
                    <td className="py-4 px-4 text-neutral-600">
                      {p.rooms.map(r => r.name).join(', ')}
                    </td>
                    <td className="py-4 px-4 text-neutral-600">
                      {p.id === 'tempe-hotel-accommodation' || p.id === 'riverview-hotel-accommodation'
                        ? 'Free on-site customer parking'
                        : 'Surry Hills street parking'}
                    </td>
                    <td className="py-4 px-4 text-neutral-600">
                      {p.id === 'crown-hotel-accommodation'
                        ? 'Walk to SCG, Allianz & Central'
                        : p.id === 'riverview-hotel-accommodation'
                        ? '7 min to SYD Airport & Stix Greek Dining'
                        : 'Princes Hwy Corridor & IKEA Tempe'}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => setSelectedPropertySlug(p.slug)}
                        className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#121314] hover:text-white border border-[#E7E2D9] font-bold text-[11px] transition-colors cursor-pointer"
                      >
                        View Property
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* I. Final Booking CTA */}
        <div className="bg-[#121314] rounded-2xl p-8 sm:p-12 text-white text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C7A379]">
              Live Reservation Portal
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Ready to Book Your Sydney Stay?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Book directly through official venue reservation portals for guaranteed best rates, confirmed instant bookings, and direct hotel team support.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={activeProperty.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-[#A47844] hover:bg-[#8F6636] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              Book {activeProperty.propertyName} Now
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => onNavigate?.('/venues')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Browse All Universal Venues
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
