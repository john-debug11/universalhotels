// Universal Hotels Sydney - Technical SEO, Local SEO, Schema & AEO Engine
import { VENUE_DATABASE, VenueRecord } from '../data/venueDatabase';
import { VENUE_DETAILS, VenueDetailRecord } from '../data/venueDetails';

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article' | 'place' | 'restaurant';
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  keywords?: string[];
  noindex?: boolean;
  schemaJson?: Record<string, any> | Array<Record<string, any>>;
}

// 1. Organization Schema (Headquarters & Portfolio)
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Universal Hotels Australia',
  legalName: 'Universal Hotels Group Pty Ltd',
  url: 'https://universalhotels.com.au',
  logo: 'https://universalhotels.com.au/assets/Universalhotels-Masterblack-removebg-preview.png',
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
  // Legacy Venue URLs to Exact Canonical Routes
  { from: '/the-imperial', to: '/venues/imperial-hotel-erskineville', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/imperial-hotel', to: '/venues/imperial-hotel-erskineville', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/imperial', to: '/venues/imperial-hotel-erskineville', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/venues/the-imperial-hotel-erskineville', to: '/venues/imperial-hotel-erskineville', statusCode: 301, reason: 'Long slug to canonical' },
  { from: '/universal', to: '/venues/universal-sydney', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/civic', to: '/venues/civic-hotel', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/civic-hotel', to: '/venues/civic-hotel', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/venues/civic-hotel-sydney', to: '/venues/civic-hotel', statusCode: 301, reason: 'Long slug to canonical' },
  { from: '/crown-hotel', to: '/venues/crown-hotel-surry-hills', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/tudor-hotel', to: '/venues/the-tudor-hotel', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/tudor', to: '/venues/the-tudor-hotel', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/venues/the-tudor-hotel-redfern', to: '/venues/the-tudor-hotel', statusCode: 301, reason: 'Long slug to canonical' },
  { from: '/riley-hotel', to: '/venues/the-riley-hotel', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/the-riley', to: '/venues/the-riley-hotel', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/venues/the-riley-hotel-darlinghurst', to: '/venues/the-riley-hotel', statusCode: 301, reason: 'Long slug to canonical' },
  { from: '/harold-park-hotel', to: '/venues/the-harold', statusCode: 301, reason: 'Former hotel name migration' },
  { from: '/the-harold', to: '/venues/the-harold', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/venues/the-harold-hotel-forest-lodge', to: '/venues/the-harold', statusCode: 301, reason: 'Long slug to canonical' },
  { from: '/lord-roberts', to: '/venues/the-lord-roberts-hotel', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/the-lord-roberts', to: '/venues/the-lord-roberts-hotel', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/venues/lord-roberts-hotel-east-sydney', to: '/venues/the-lord-roberts-hotel', statusCode: 301, reason: 'Long slug to canonical' },
  { from: '/oxford-hotel', to: '/venues/the-oxford-hotel', statusCode: 301, reason: 'Legacy venue alias to canonical' },
  { from: '/venues/the-oxford-hotel-darlinghurst', to: '/venues/the-oxford-hotel', statusCode: 301, reason: 'Long slug to canonical' },
  { from: '/evening-star', to: '/venues/the-evening-star', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/venues/the-evening-star-hotel-surry-hills', to: '/venues/the-evening-star', statusCode: 301, reason: 'Long slug to canonical' },
  { from: '/riverview-hotel', to: '/venues/riverview-hotel-tempe', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/moko', to: '/venues/moko-eastwood', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/palace-hotel', to: '/venues/palace-hotel', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/venues/palace-hotel-sydney', to: '/venues/palace-hotel', statusCode: 301, reason: 'Long slug to canonical' },
  { from: '/vbar', to: '/venues/v-bar', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/venues/v-bar-sydney', to: '/venues/v-bar', statusCode: 301, reason: 'Long slug to canonical' },
  { from: '/tempe', to: '/venues/tempe-hotel', statusCode: 301, reason: 'Short slug to canonical' },
  { from: '/enfield', to: '/venues/enfield-hotel', statusCode: 301, reason: 'Short slug to canonical' },

  // About and Contact Aliases
  { from: '/about-us', to: '/about', statusCode: 301, reason: 'Standardize to /about' },
  { from: '/contact-us', to: '/contact', statusCode: 301, reason: 'Standardize to /contact' },

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

// 8. Client-side DOM Metadata Applicator with Open Graph, Twitter & Schema Support
export const applySeoMetadata = (meta: SeoMetadata): (() => void) => {
  if (typeof document === 'undefined') return () => {};

  // 1. Title
  document.title = meta.title;

  // Tag helper
  const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 2. Standard Search Meta
  setMetaTag('name', 'description', meta.description);
  if (meta.keywords && meta.keywords.length > 0) {
    setMetaTag('name', 'keywords', meta.keywords.join(', '));
  }
  setMetaTag('name', 'robots', meta.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');

  // 3. OpenGraph Tags
  const ogTitle = meta.ogTitle || meta.title;
  const ogDescription = meta.ogDescription || meta.description;
  const ogImage = meta.ogImage || 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200';

  setMetaTag('property', 'og:title', ogTitle);
  setMetaTag('property', 'og:description', ogDescription);
  setMetaTag('property', 'og:url', meta.canonicalUrl);
  setMetaTag('property', 'og:type', meta.ogType || 'website');
  setMetaTag('property', 'og:site_name', 'Universal Hotels Australia');
  setMetaTag('property', 'og:locale', 'en_AU');
  setMetaTag('property', 'og:image', ogImage);
  setMetaTag('property', 'og:image:alt', ogTitle);

  // 4. Twitter / X Card Tags
  const twitterTitle = meta.twitterTitle || ogTitle;
  const twitterDescription = meta.twitterDescription || ogDescription;
  const twitterImage = meta.twitterImage || ogImage;

  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:site', '@universalhotelsau');
  setMetaTag('name', 'twitter:title', twitterTitle);
  setMetaTag('name', 'twitter:description', twitterDescription);
  setMetaTag('name', 'twitter:image', twitterImage);
  setMetaTag('name', 'twitter:image:alt', twitterTitle);

  // 5. Canonical Tag
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', meta.canonicalUrl);

  // 6. Schema.org JSON-LD structured data (page-specific)
  const schemaScriptId = 'schema-page-active';
  let schemaScript = document.getElementById(schemaScriptId) as HTMLScriptElement | null;
  if (meta.schemaJson) {
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaScriptId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.text = JSON.stringify(meta.schemaJson);
  } else if (schemaScript) {
    schemaScript.remove();
  }

  // Cleanup on component unmount
  return () => {
    const existingSchema = document.getElementById(schemaScriptId);
    if (existingSchema) {
      existingSchema.remove();
    }
  };
};

// 9. Specific Open Graph & Twitter Presets for Target Sections

export const SEO_DASHBOARD_METADATA: SeoMetadata = {
  title: 'SEO & AEO Architecture Dashboard | Universal Hotels Australia',
  description: 'Technical SEO architecture, JSON-LD schema graphs, local landing matrix, 301 redirects, and AI engine optimization for Universal Hotels\' 16 Sydney venues.',
  canonicalUrl: 'https://universalhotels.com.au/seo',
  ogType: 'website',
  ogTitle: 'SEO & AEO Architecture Dashboard | Universal Hotels Sydney',
  ogDescription: 'Live technical SEO framework, dynamic LocalBusiness JSON-LD schemas, 301 canonical redirects, and Perplexity/Gemini AI engine optimization for 16 Sydney venues.',
  ogImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200',
  twitterTitle: 'Universal Hotels Sydney | SEO & AEO Technical Architecture',
  twitterDescription: 'Explore the technical SEO framework, schema graph, and local search architecture powering Universal Hotels across Sydney.',
  twitterImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200',
  keywords: ['Universal Hotels SEO', 'Sydney hospitality SEO', 'Local SEO Sydney pubs', 'Schema.org LocalBusiness', 'AEO AI optimization', 'Sydney venue architecture'],
  schemaJson: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    name: 'Universal Hotels Sydney SEO & AEO Architecture',
    headline: 'Technical SEO & AI Engine Optimization Framework for Universal Hotels Australia',
    description: 'Comprehensive technical architecture, structured data graph, and canonical routing matrix for Universal Hotels\' 16 properties across Sydney.',
    url: 'https://universalhotels.com.au/seo',
    author: {
      '@type': 'Organization',
      name: 'Universal Hotels Australia'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Universal Hotels Australia',
      logo: {
        '@type': 'ImageObject',
        url: 'https://universalhotels.com.au/assets/Universalhotels-Masterblack-removebg-preview.png'
      }
    }
  }
};

export const FUNCTIONS_HUB_METADATA: SeoMetadata = {
  title: 'Functions & Event Spaces Sydney | Universal Hotels Concierge',
  description: 'Explore function rooms, private bars, rooftops, and event spaces across Sydney with Universal Hotels. Tailored packages for birthdays, corporate events, and private dining.',
  canonicalUrl: 'https://universalhotels.com.au/functions',
  ogType: 'website',
  ogTitle: 'Functions & Event Spaces in Sydney | Universal Hotels Australia',
  ogDescription: 'From intimate private dining and rooftop celebrations to 500-guest venue takeovers across 16 iconic Sydney destinations. Browse spaces and enquire online.',
  ogImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
  twitterTitle: 'Functions & Event Spaces Sydney | Universal Hotels',
  twitterDescription: 'Host your corporate seminar, cocktail celebration, or private dinner across 16 Sydney venues with Universal Hotels concierge.',
  twitterImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
  keywords: ['Sydney function spaces', 'event venues Sydney', 'Sydney rooftop party hire', 'private dining rooms Sydney', 'corporate events Sydney', 'party venues Sydney CBD'],
  schemaJson: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Universal Hotels Sydney Functions & Event Concierge',
    serviceType: 'Event Planning & Venue Hire',
    provider: {
      '@type': 'Organization',
      name: 'Universal Hotels Australia',
      telephone: '+61-2-8080-7000',
      email: 'functions@universalhotels.com.au'
    },
    areaServed: {
      '@type': 'City',
      name: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU'
    },
    description: 'Bespoke event planning and space hire across 16 iconic Sydney pubs, rooftop cocktail lounges, underground clubs, and private dining spaces.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'AUD',
      lowPrice: '500',
      offerCount: '25'
    }
  }
};

export const generateFunctionsIntentSeoMetadata = (
  slug: string,
  title: string,
  seoTitle: string,
  seoDescription: string,
  heroImage?: string,
  faqs?: Array<{ question: string; answer: string }>
): SeoMetadata => {
  const imageUrl = heroImage || 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200';
  const canonicalUrl = `https://universalhotels.com.au/functions/${slug}`;

  const schemas: any[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${title} Hire Sydney | Universal Hotels`,
      serviceType: `${title} Space Hire`,
      description: seoDescription,
      url: canonicalUrl,
      provider: {
        '@type': 'Organization',
        name: 'Universal Hotels Australia',
        telephone: '+61-2-8080-7000'
      },
      areaServed: 'Sydney NSW'
    }
  ];

  if (faqs && faqs.length > 0) {
    schemas.push(generateFaqSchema(faqs));
  }

  return {
    title: `${seoTitle} | Universal Hotels Australia`,
    description: seoDescription,
    canonicalUrl,
    ogType: 'website',
    ogTitle: `${title} Venues & Packages Sydney | Universal Hotels`,
    ogDescription: seoDescription,
    ogImage: imageUrl,
    twitterTitle: `${title} Venues Sydney | Universal Hotels`,
    twitterDescription: seoDescription,
    twitterImage: imageUrl,
    keywords: [
      `${title.toLowerCase()} Sydney`,
      `${title.toLowerCase()} venue hire`,
      `Sydney ${title.toLowerCase()} spaces`,
      'Universal Hotels functions'
    ],
    schemaJson: schemas.length === 1 ? schemas[0] : schemas
  };
};

// 10. Venue Detail SEO & Social Metadata Generator
export const generateVenueSeoMetadata = (venue: VenueDetailRecord): SeoMetadata => {
  const title = `${venue.seo.title} | Universal Hotels Australia`;
  const description = venue.seo.metaDescription;
  const canonicalUrl = `https://universalhotels.com.au/venues/${venue.slug}`;
  const ogTitle = (venue.seo as any)?.ogTitle || `${venue.venueName} | Universal Hotels Sydney`;
  const ogDescription = (venue.seo as any)?.ogDescription || venue.seo.metaDescription;
  const ogImage = (venue.seo as any)?.ogImage || venue.heroImage || 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200';

  let ogType: 'restaurant' | 'place' | 'website' = 'restaurant';
  if (venue.accommodation) {
    ogType = 'website';
  }

  return {
    title,
    description,
    canonicalUrl,
    ogType,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle: ogTitle,
    twitterDescription: ogDescription,
    twitterImage: ogImage,
    keywords: [
      venue.venueName,
      `${venue.venueName} ${venue.locationSuburb}`,
      `${venue.locationSuburb} pubs`,
      `${venue.locationSuburb} dining`,
      'Universal Hotels Sydney'
    ]
  };
};

// 11. Re-export SEO Audit Engine
export * from './seoAudit';
