// Universal Hotels Sydney - Technical SEO, Local SEO, Schema & AEO Engine
import { VENUE_DATABASE, VenueRecord } from '../data/venueDatabase';
import { VENUE_DETAILS, VenueDetailRecord } from '../data/venueDetails';

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article' | 'place' | 'restaurant';
  ogImage?: string;
  keywords?: string[];
  noindex?: boolean;
}

// 1. Organization Schema (Headquarters & Portfolio)
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Universal Hotels Australia',
  legalName: 'Universal Hotels Group Pty Ltd',
  url: 'https://universalhotels.com.au',
  logo: 'https://universalhotels.com.au/assets/universal-hotels-logo.png',
  foundingDate: '1998',
  founders: [
    {
      '@type': 'Person',
      name: 'Jim Kospetas'
    }
  ],
  telephone: '+61-2-8080-7000',
  email: 'info@universalhotels.com.au',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suite 203, Level 2, 255 Castlereagh St',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    postalCode: '2000',
    addressCountry: 'AU'
  },
  sameAs: [
    'https://www.instagram.com/universalhotels',
    'https://www.facebook.com/universalhotelsau',
    'https://www.linkedin.com/company/universal-hotels-australia'
  ],
  description: 'Independent family-owned hospitality group curating 16 iconic pubs, boutique accommodation, live entertainment spaces, and private event venues across Sydney, Australia.'
};

// 2. WebSite Schema
export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Universal Hotels Australia',
  url: 'https://universalhotels.com.au',
  description: 'Sydney pubs, bars, boutique accommodation, drag spectacles, live music, and private function spaces.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://universalhotels.com.au/venues?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

// 3. Dynamic LocalBusiness / Restaurant / BarOrPub / Hotel Schema Generator
export const generateVenueLocalBusinessSchema = (venue: VenueRecord, detail?: VenueDetailRecord) => {
  let schemaType: string = detail?.seo?.schemaType || 'BarOrPub';
  if (venue.accommodation && venue.accommodation.trim() !== '') {
    schemaType = 'Hotel';
  } else if (venue.venueType.toLowerCase().includes('dining') || venue.venueType.toLowerCase().includes('taverna') || venue.venueType.toLowerCase().includes('bistro')) {
    schemaType = 'Restaurant';
  }

  // Address parsing
  const addressParts = venue.address.split(',');
  const street = addressParts[0]?.trim() || venue.address;
  const suburb = venue.locationSuburb || 'Sydney';
  const stateZip = addressParts[1]?.trim() || 'NSW 2000';

  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: venue.venueName,
    image: detail?.heroImage || 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1600',
    telephone: venue.phone || '+61-2-8080-7000',
    url: `https://universalhotels.com.au${venue.url}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: street,
      addressLocality: suburb,
      addressRegion: 'NSW',
      postalCode: '2000',
      addressCountry: 'AU'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.8688,
      longitude: 151.2093
    },
    servesCuisine: venue.dining ? [venue.dining] : ['Modern Australian', 'Bistro', 'Cocktails'],
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.venueName + ' ' + venue.address)}`,
    publicAccess: true,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '10:00',
        closes: '00:00'
      }
    ]
  };

  const bookingTarget = detail?.bookingUrl || venue.bookingUrl;
  if (bookingTarget) {
    schema.potentialAction = {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: bookingTarget,
        inLanguage: 'en-AU',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform'
        ]
      },
      result: {
        '@type': 'FoodEstablishmentReservation',
        name: `Table Reservation at ${venue.venueName}`
      }
    };
  }

  return schema;
};

// 4. BreadcrumbList Schema Generator
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http') ? crumb.url : `https://universalhotels.com.au${crumb.url}`
    }))
  };
};

// 5. FAQPage Schema Generator
export const generateFaqSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

// 6. 301 Migration Redirect Map (Old Legacy URL -> New Clean Architecture URL)
export interface RedirectRule {
  from: string;
  to: string;
  statusCode: 301;
  reason: string;
}

export const SEO_REDIRECT_MAP: RedirectRule[] = [
  // Legacy Venue URLs
  { from: '/the-imperial', to: '/venues/the-imperial-hotel-erskineville', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/imperial-hotel', to: '/venues/the-imperial-hotel-erskineville', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/imperial', to: '/venues/the-imperial-hotel-erskineville', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/universal', to: '/venues/universal-sydney', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/civic', to: '/venues/civic-hotel-sydney', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/civic-hotel', to: '/venues/civic-hotel-sydney', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/crown-hotel', to: '/venues/crown-hotel-surry-hills', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/tudor-hotel', to: '/venues/the-tudor-hotel-redfern', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/tudor', to: '/venues/the-tudor-hotel-redfern', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/riley-hotel', to: '/venues/the-riley-hotel-darlinghurst', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/the-riley', to: '/venues/the-riley-hotel-darlinghurst', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/harold-park-hotel', to: '/venues/the-harold-hotel-forest-lodge', statusCode: 301, reason: 'Former hotel name migration' },
  { from: '/the-harold', to: '/venues/the-harold-hotel-forest-lodge', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/lord-roberts', to: '/venues/lord-roberts-hotel-east-sydney', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/oxford-hotel', to: '/venues/the-oxford-hotel-darlinghurst', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/evening-star', to: '/venues/the-evening-star-hotel-surry-hills', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/riverview-hotel', to: '/venues/riverview-hotel-tempe', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/moko', to: '/venues/moko-eastwood', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/palace-hotel', to: '/venues/palace-hotel-sydney', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/vbar', to: '/venues/v-bar-sydney', statusCode: 301, reason: 'Short slug to canonical' },

  // Legacy Hub & Feature URLs
  { from: '/events', to: '/whats-on', statusCode: 301, reason: 'Redirect to central event discovery hub' },
  { from: '/calendar', to: '/whats-on', statusCode: 301, reason: 'Redirect calendar to whats-on' },
  { from: '/stay', to: '/accommodation', statusCode: 301, reason: 'Redirect legacy stay to accommodation portal' },
  { from: '/rooms', to: '/accommodation', statusCode: 301, reason: 'Redirect rooms to accommodation' },
  { from: '/hotel-rooms', to: '/accommodation', statusCode: 301, reason: 'Redirect hotel rooms to accommodation' },
  { from: '/functions-events', to: '/functions', statusCode: 301, reason: 'Consolidated commercial functions hub' },
  { from: '/private-dining', to: '/functions/private-functions', statusCode: 301, reason: 'Mapped to private functions' },
  { from: '/birthdays', to: '/functions/birthday-parties', statusCode: 301, reason: 'Mapped to birthday parties intent' },
  { from: '/corporate', to: '/functions/corporate-events', statusCode: 301, reason: 'Mapped to corporate events intent' },
  { from: '/weddings', to: '/functions/engagement-parties', statusCode: 301, reason: 'Mapped to engagement & celebration intent' },
  { from: '/christmas', to: '/functions/christmas-parties', statusCode: 301, reason: 'Mapped to seasonal Christmas parties' }
];

export const checkRedirect = (path: string): string | null => {
  const normalized = path.replace(/\/$/, '');
  const match = SEO_REDIRECT_MAP.find(r => r.from === normalized);
  return match ? match.to : null;
};

// 7. Keyword Mapping Matrix for Sydney Hospitality & Local SEO
export interface KeywordMappingRecord {
  targetUrl: string;
  pageType: 'Hub' | 'Venue' | 'Intent' | 'Accommodation' | 'What\'s On';
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'Commercial' | 'Informational' | 'Transactional' | 'Navigational';
  titleTag: string;
}

export const KEYWORD_MAPPING_MATRIX: KeywordMappingRecord[] = [
  {
    targetUrl: '/',
    pageType: 'Hub',
    primaryKeyword: 'Universal Hotels Sydney',
    secondaryKeywords: ['Sydney hospitality group', 'Sydney pubs and bars', 'Sydney event venues', 'independent Sydney hotels'],
    searchIntent: 'Commercial',
    titleTag: 'Universal Hotels Australia | Sydney Hospitality Ecosystem'
  },
  {
    targetUrl: '/venues',
    pageType: 'Hub',
    primaryKeyword: 'Sydney pub directory',
    secondaryKeywords: ['best pubs in Sydney', 'Sydney bars directory', 'Darlinghurst pubs', 'Surry Hills sports bars', 'Inner West heritage pubs'],
    searchIntent: 'Commercial',
    titleTag: 'Sydney Venues Directory | Universal Hotels 16 Properties'
  },
  {
    targetUrl: '/functions',
    pageType: 'Hub',
    primaryKeyword: 'Sydney function venues',
    secondaryKeywords: ['event space hire Sydney', 'party venues Sydney', 'Sydney private dining rooms', 'cocktail party spaces'],
    searchIntent: 'Commercial',
    titleTag: 'Functions & Event Spaces Sydney | Universal Hotels Concierge'
  },
  {
    targetUrl: '/functions/corporate-events',
    pageType: 'Intent',
    primaryKeyword: 'Sydney corporate event venues',
    secondaryKeywords: ['CBD conference rooms', 'EOD drinks venue Sydney', 'corporate Christmas party Sydney', 'gala dinner spaces'],
    searchIntent: 'Transactional',
    titleTag: 'Corporate Event Venues Sydney | Universal Hotels Functions'
  },
  {
    targetUrl: '/functions/birthday-parties',
    pageType: 'Intent',
    primaryKeyword: 'birthday party venues Sydney',
    secondaryKeywords: ['21st birthday venues Sydney', '30th birthday bar hire', 'private party spaces Sydney', 'cocktail birthday venue'],
    searchIntent: 'Transactional',
    titleTag: 'Birthday Party Venues Sydney | Universal Hotels'
  },
  {
    targetUrl: '/whats-on',
    pageType: 'What\'s On',
    primaryKeyword: 'What’s on Sydney tonight',
    secondaryKeywords: ['Sydney drag shows', 'live music Sydney pubs', 'Sydney nightlife events', 'weekend events Sydney', 'Oxford St drag'],
    searchIntent: 'Commercial',
    titleTag: 'What’s On Across Sydney | Universal Hotels Event Hub'
  },
  {
    targetUrl: '/accommodation',
    pageType: 'Accommodation',
    primaryKeyword: 'boutique hotel Surry Hills Sydney',
    secondaryKeywords: ['Sydney pub accommodation', 'rooms near Sydney airport', 'Cooks River hotel', 'cheap accommodation Sydney'],
    searchIntent: 'Transactional',
    titleTag: 'Boutique Accommodation Sydney | Universal Hotels Stays'
  },
  {
    targetUrl: '/venues/the-imperial-hotel-erskineville',
    pageType: 'Venue',
    primaryKeyword: 'The Imperial Erskineville',
    secondaryKeywords: ['Imperial Hotel Sydney', 'Priscilla’s drag and dine', 'Erskineville rooftop bar', 'Imperial basement club'],
    searchIntent: 'Transactional',
    titleTag: 'The Imperial Hotel Erskineville | Priscilla’s & Rooftop'
  },
  {
    targetUrl: '/venues/universal-sydney',
    pageType: 'Venue',
    primaryKeyword: 'Universal Sydney Oxford Street',
    secondaryKeywords: ['Universal drag show', 'Oxford Street nightclub', 'Sydney gay bar', 'Universal 7 night drag'],
    searchIntent: 'Transactional',
    titleTag: 'Universal Sydney | Oxford Street 7-Night Drag & Superclub'
  },
  {
    targetUrl: '/venues/civic-hotel-sydney',
    pageType: 'Venue',
    primaryKeyword: 'Civic Hotel Sydney CBD',
    secondaryKeywords: ['Civic Underground', 'Civic Hotel Greek dining', 'Sydney CBD heritage pub', 'Pitt St function rooms'],
    searchIntent: 'Transactional',
    titleTag: 'Civic Hotel Sydney CBD | Civic Underground & Dining'
  },
  {
    targetUrl: '/venues/crown-hotel-surry-hills',
    pageType: 'Venue',
    primaryKeyword: 'Crown Hotel Surry Hills',
    secondaryKeywords: ['Surry Hills sports bar', 'Crown Hotel accommodation', 'Crown St pub near SCG', 'Allianz stadium pub'],
    searchIntent: 'Transactional',
    titleTag: 'Crown Hotel Surry Hills | Sports Bar & Boutique Stays'
  }
];

// 8. Client-side DOM Metadata Applicator
export const applySeoMetadata = (meta: SeoMetadata) => {
  if (typeof document === 'undefined') return;

  // Title
  document.title = meta.title;

  // Helper
  const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Standard Meta
  setMetaTag('name', 'description', meta.description);
  if (meta.keywords && meta.keywords.length > 0) {
    setMetaTag('name', 'keywords', meta.keywords.join(', '));
  }
  setMetaTag('name', 'robots', meta.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');

  // OpenGraph
  setMetaTag('property', 'og:title', meta.title);
  setMetaTag('property', 'og:description', meta.description);
  setMetaTag('property', 'og:url', meta.canonicalUrl);
  setMetaTag('property', 'og:type', meta.ogType || 'website');
  setMetaTag('property', 'og:site_name', 'Universal Hotels Australia');
  if (meta.ogImage) {
    setMetaTag('property', 'og:image', meta.ogImage);
  }

  // Twitter Cards
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', meta.title);
  setMetaTag('name', 'twitter:description', meta.description);
  if (meta.ogImage) {
    setMetaTag('name', 'twitter:image', meta.ogImage);
  }

  // Canonical Tag
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', meta.canonicalUrl);
};
