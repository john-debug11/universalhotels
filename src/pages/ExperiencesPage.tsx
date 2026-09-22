import React from 'react';
import { 
  Utensils, 
  Music, 
  Sparkles, 
  Bed, 
  Users, 
  Tv, 
  Sun, 
  ArrowRight,
  MapPin,
  Clock,
  Compass
} from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { applySeoMetadata } from '../utils/seo';

export interface ExperiencesPageProps {
  onNavigate?: (path: string) => void;
}

export const ExperiencesPage: React.FC<ExperiencesPageProps> = ({ onNavigate }) => {
  React.useEffect(() => {
    applySeoMetadata({
      title: 'Experiences Across Sydney | Dining, Nightlife, Drag & Pubs | Universal Hotels',
      description: 'Explore the full spectrum of experiences across Universal Hotels: 4am nightlife, live drag shows, Greek tavernas, rooftop bars, and boutique accommodation.',
      canonicalUrl: 'https://universalhotels.com.au/experiences',
      ogType: 'website'
    });
  }, []);

  const experiences = [
    {
      id: 'nightlife',
      title: 'Late-Night Culture & 4am Underground',
      badge: '4:00AM LATE LICENSES',
      description: 'Subterranean electronic sound rooms, dual-level superclubs, and high-energy basement parties with state-of-the-art acoustic tuning.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200',
      venues: [
        { name: 'Civic Underground (Civic Hotel)', url: '/venues/civic-hotel' },
        { name: 'Universal Superclub', url: '/venues/universal-sydney' },
        { name: 'Oxford Underground (The Oxford)', url: '/venues/the-oxford-hotel' },
        { name: 'The Imperial Basement', url: '/venues/imperial-hotel-erskineville' }
      ]
    },
    {
      id: 'drag',
      title: 'Live Drag Spectacles & Cabaret',
      badge: '7 NIGHTS A WEEK',
      description: 'Australia’s home of drag excellence. Spectacular stage productions, Drag & Dine banquet dinners, aerialists, and weekend cabaret.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200',
      venues: [
        { name: 'Universal Sydney (Ground Floor Drag Bar)', url: '/venues/universal-sydney' },
        { name: 'Priscilla’s at The Imperial', url: '/venues/imperial-hotel-erskineville' },
        { name: 'Gingers at The Oxford', url: '/venues/the-oxford-hotel' }
      ]
    },
    {
      id: 'dining',
      title: 'Destination Dining & Tavernas',
      badge: 'CULINARY EXCELLENCE',
      description: 'Authentic Greek feasts, Hong Kong golden-age dim sum, artisan woodfired Neapolitan pizzas, and classic pub gastro-bistros.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200',
      venues: [
        { name: 'Stix Hellenic Taverna (Riverview Hotel)', url: '/venues/riverview-hotel-tempe' },
        { name: 'Ni Hao Bar (Civic Hotel)', url: '/venues/civic-hotel' },
        { name: 'Pizza Bros Rooftop (The Imperial)', url: '/venues/imperial-hotel-erskineville' },
        { name: 'The Harold Dining Room', url: '/venues/the-harold' }
      ]
    },
    {
      id: 'rooftops',
      title: 'Rooftop Terraces & Al Fresco Drinks',
      badge: 'OPEN-AIR SOCIALIZING',
      description: 'Sun-drenched terraces, open-air skyline cocktails, leafy beer gardens, and breezy streetfront people watching.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
      venues: [
        { name: 'The Rooftop (The Lord Roberts Hotel)', url: '/venues/the-lord-roberts-hotel' },
        { name: 'Imperial Rooftop Terrace', url: '/venues/imperial-hotel-erskineville' },
        { name: 'Upstairs Balcony (The Tudor Hotel)', url: '/venues/the-tudor-hotel' },
        { name: 'Al Fresco Terrace (The Riley)', url: '/venues/the-riley-hotel' }
      ]
    },
    {
      id: 'accommodation',
      title: 'Boutique Accommodation & Pub Stays',
      badge: 'HERITAGE STAYS',
      description: 'Comfortable, stylish guest rooms positioned above vibrant Sydney hospitality in Surry Hills, Tempe, and near Sydney Airport.',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
      venues: [
        { name: 'Crown Hotel Boutique Rooms (Surry Hills)', url: '/accommodation' },
        { name: 'Riverview Hotel Boutique Rooms (Tempe)', url: '/accommodation' },
        { name: 'Tempe Hotel Value Lodging', url: '/accommodation' }
      ]
    },
    {
      id: 'sports',
      title: 'Sports Bars, TAB & Live Broadcasts',
      badge: 'WALL-TO-WALL BIG SCREENS',
      description: 'Massive multi-screen sports lounges, full TAB wagering facilities, craft draught beers, and hearty counter lunches.',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200',
      venues: [
        { name: 'The Evening Star (Central Station)', url: '/venues/the-evening-star' },
        { name: 'Enfield Hotel Sports Lounge', url: '/venues/enfield-hotel' },
        { name: 'Crown Hotel Sports Bar', url: '/venues/crown-hotel-surry-hills' },
        { name: 'Palace Hotel Haymarket', url: '/venues/palace-hotel' },
        { name: 'V Bar World Square', url: '/venues/v-bar' }
      ]
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-[#121314] text-white pt-12 pb-16 lg:pb-24 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Experiences', isCurrent: true }
            ]}
            onNavigate={onNavigate}
            className="text-neutral-400"
          />

          <div className="max-w-3xl space-y-3">
            <Badge variant="precinct" size="sm">
              DISCOVER BY MOOD & OCCASION
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
              Hospitality Experiences
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              From family-friendly local pubs and Greek tavernas to late-night 4am basements and boutique stays, explore how Universal Hotels shapes Sydney life.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EXPERIENCES GRID */}
      <section className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map(exp => (
            <article
              key={exp.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E7E2D9] shadow-xs flex flex-col justify-between group hover:border-[#A47844] transition-all"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#C7A379] border border-white/10">
                      {exp.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h2 className="font-serif text-2xl font-bold text-neutral-900 leading-snug">
                    {exp.title}
                  </h2>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="pt-3 border-t border-[#EFECE6] space-y-2">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">
                      Featured Venues
                    </span>
                    <ul className="space-y-1.5 text-xs">
                      {exp.venues.map((v, i) => (
                        <li key={i}>
                          <button
                            onClick={() => onNavigate?.(v.url)}
                            className="text-[#A47844] hover:text-[#8D6433] font-semibold inline-flex items-center gap-1.5 cursor-pointer text-left"
                          >
                            <span>{v.name}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => onNavigate?.('/venues')}
                >
                  View All Matching Venues
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. BOTTOM CALL TO ACTION */}
      <section className="py-16 bg-[#121314] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="precinct" size="sm">
            PRIVATE FUNCTIONS & CELEBRATIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Planning a Group Gathering or Event?
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Our dedicated events concierge coordinates private rooftop bars, intimate dining rooms, and full club takeovers across our Sydney portfolio.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate?.('/functions')}
            >
              Explore Function Spaces
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white/20 hover:bg-white/10"
              onClick={() => onNavigate?.('/venues')}
            >
              Find a Venue Near You
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
