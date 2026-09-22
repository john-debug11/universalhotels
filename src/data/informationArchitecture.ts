/**
 * Universal Hotels Australia - Strategic Information Architecture, SEO Architecture & Competitor Analysis
 */

export interface LocationTaxonomyNode {
  regionId: string;
  regionName: string;
  suburbs: string[];
  venues: string[];
  seoTarget: string;
  editorialBlurb: string;
}

export const LOCATION_TAXONOMY: LocationTaxonomyNode[] = [
  {
    regionId: 'sydney-cbd-haymarket',
    regionName: 'Sydney CBD & Haymarket',
    suburbs: ['Sydney CBD', 'Haymarket', 'Chinatown', 'World Square'],
    venues: ['Civic Hotel', 'Palace Hotel', 'V Bar'],
    seoTarget: 'Pubs, sports bars, late-night dining and live music venues in Sydney CBD & Haymarket',
    editorialBlurb: 'From the 1940 Art Deco grandeur of the Civic Hotel to late-night Thai and sports at V Bar and Chinatown energy at the Palace Hotel, our central Sydney portfolio delivers unmatched late-night vitality.'
  },
  {
    regionId: 'darlinghurst-oxford-street',
    regionName: 'Darlinghurst & Oxford Street',
    suburbs: ['Darlinghurst', 'Taylor Square', 'Stanley Street'],
    venues: ['The Oxford Hotel', 'Universal Sydney', 'The Riley Hotel', 'The Lord Roberts Hotel'],
    seoTarget: 'LGBTQIA+ nightlife, historic pubs, rooftops, and drag shows in Darlinghurst & Oxford St',
    editorialBlurb: 'The beating heart of Sydney queer culture, historic corner pubs, and rooftop views. Experience world-class drag productions, multi-level clubbing, and sunny streetfront terraces.'
  },
  {
    regionId: 'surry-hills-redfern',
    regionName: 'Surry Hills & Redfern',
    suburbs: ['Surry Hills', 'Redfern', 'Central Station'],
    venues: ['Crown Hotel Surry Hills', 'The Tudor Hotel', 'The Evening Star', 'Bat & Ball Hotel (Partner)'],
    seoTarget: 'Boutique accommodation, neighbourhood pubs, sunny terraces, and sports bars in Surry Hills & Redfern',
    editorialBlurb: 'Classic village pubs steeped in local charm, community trivia, leafy upstairs terraces, and boutique pub hotel accommodation within walking distance of the SCG and Central Station.'
  },
  {
    regionId: 'inner-west-erskineville',
    regionName: 'Inner West & Erskineville',
    suburbs: ['Erskineville', 'Forest Lodge', 'Glebe', 'Enfield', 'Newtown'],
    venues: ['The Imperial Erskineville', 'The Harold', 'Enfield Hotel', 'Carlisle Castle Hotel (Partner)'],
    seoTarget: 'Priscilla drag dining, rooftop pizza, family pubs, and sports bistros in Sydney Inner West',
    editorialBlurb: 'The iconic cultural institution of The Imperial meets leafy suburban neighbourhood sanctuaries like The Harold in Forest Lodge and the high-energy sports screens of the Enfield Hotel.'
  },
  {
    regionId: 'tempe-cooks-river',
    regionName: 'Tempe & Cooks River Corridor',
    suburbs: ['Tempe', 'Marrickville South', 'Sydenham', 'Cooks River'],
    venues: ['Riverview Hotel', 'Tempe Hotel'],
    seoTarget: 'Modern Greek taverna dining, beer gardens, function halls, and airport accommodation in Tempe',
    editorialBlurb: 'A thriving hospitality precinct along the Cooks River and Princes Highway, combining authentic Greek charcoal dining at Stix Hellenic Taverna with expansive 150-guest event halls and traveler lodging.'
  },
  {
    regionId: 'northern-suburbs-eastwood',
    regionName: 'Northern Suburbs & Eastwood',
    suburbs: ['Eastwood', 'Ryde', 'Macquarie Park'],
    venues: ['Moko Eastwood'],
    seoTarget: 'Modern Asian dining, cocktail lounges, and late-night supper in Eastwood',
    editorialBlurb: 'Expanding Universal Hotels contemporary hospitality into Sydney northwest with premium Asian-fusion share plates, mixology, and late trading on Rowe Street.'
  }
];

export interface FunctionIntentNode {
  intentId: string;
  intentTitle: string;
  searchQueries: string[];
  capacityRange: string;
  recommendedSpaces: { spaceName: string; venueName: string; capacity: string }[];
  keyFeatures: string[];
}

export const FUNCTIONS_TAXONOMY: FunctionIntentNode[] = [
  {
    intentId: 'cocktail-parties-birthdays',
    intentTitle: 'Milestone Birthdays & Cocktail Parties',
    searchQueries: ['Sydney 21st birthday venues', '30th birthday function room Sydney', 'cocktail party venue Surry Hills Darlinghurst'],
    capacityRange: '40 – 220 guests',
    recommendedSpaces: [
      { spaceName: 'Polo Lounge', venueName: 'The Oxford Hotel', capacity: '100 standing' },
      { spaceName: 'Sapphire Lounge', venueName: 'Crown Hotel Surry Hills', capacity: '200 standing' },
      { spaceName: "Bob's Lounge", venueName: 'The Lord Roberts Hotel', capacity: '80 standing' },
      { spaceName: 'The Tudor Terrace', venueName: 'The Tudor Hotel', capacity: '60 standing' }
    ],
    keyFeatures: ['Private Bars', 'Dedicated DJ Booths', 'Balconies & Open-Air Terraces', 'Custom Canapé Menus']
  },
  {
    intentId: 'corporate-events-eoy',
    intentTitle: 'Corporate Functions, Networking & End-of-Year Parties',
    searchQueries: ['corporate function venue Sydney CBD', 'office Christmas party venues Sydney', 'business networking space Darlinghurst'],
    capacityRange: '50 – 300 guests',
    recommendedSpaces: [
      { spaceName: 'Civic Underground & Saloon', venueName: 'Civic Hotel', capacity: 'Up to 300 standing' },
      { spaceName: 'Sapphire Lounge', venueName: 'Crown Hotel Surry Hills', capacity: '200 standing' },
      { spaceName: 'The Tempe Function Room', venueName: 'Tempe Hotel', capacity: '150 standing' }
    ],
    keyFeatures: ['Full AV, Projectors & Microphones', 'Beverage Packages & High-End Canapés', 'Proximity to Public Transport (CBD & Central)']
  },
  {
    intentId: 'rooftop-open-air-celebrations',
    intentTitle: 'Rooftops, Balconies & Open-Air Gatherings',
    searchQueries: ['rooftop party venue Sydney', 'rooftop bar hire Darlinghurst', 'outdoor terrace function Inner West'],
    capacityRange: '40 – 150 guests',
    recommendedSpaces: [
      { spaceName: 'The Rooftop', venueName: 'The Lord Roberts Hotel', capacity: '120 standing (retractable awning & city skyline)' },
      { spaceName: 'Imperial Rooftop Pizzeria', venueName: 'The Imperial Erskineville', capacity: '150 standing' },
      { spaceName: 'Upstairs Sunny Terrace', venueName: 'The Tudor Hotel', capacity: '60 standing' }
    ],
    keyFeatures: ['Skyline Vistas', 'Retractable Weatherproof Awnings', 'Open-Air Spritz Bars', 'Day-to-Night Sunshine']
  },
  {
    intentId: 'live-entertainment-club-takeovers',
    intentTitle: 'Live Performances, Ticketed Club Nights & Brand Activations',
    searchQueries: ['hire nightclub venue Sydney', 'live music room hire CBD', 'album launch venue Oxford Street'],
    capacityRange: '150 – 400+ guests',
    recommendedSpaces: [
      { spaceName: 'Civic Underground', venueName: 'Civic Hotel', capacity: '300 standing (Acoustically tuned sound rig)' },
      { spaceName: 'Oxford Underground', venueName: 'The Oxford Hotel', capacity: '220 standing (Sunken dancefloor)' },
      { spaceName: 'Gingers Cabaret Stage', venueName: 'The Oxford Hotel', capacity: '140 standing (Full theatrical stage & lights)' },
      { spaceName: 'Imperial Basement Bunker', venueName: 'The Imperial Erskineville', capacity: '200 standing' }
    ],
    keyFeatures: ['Festival-Grade Sound & Lighting', 'Ticket Booth & Dedicated Cloakrooms', '4am Late Licenses', 'Green Rooms & Stage Facilities']
  },
  {
    intentId: 'private-dining-banquets',
    intentTitle: 'Private Banquets, Drag & Dine & Celebratory Feasts',
    searchQueries: ['private dining room Sydney pub', 'drag and dine group booking', 'Greek banquet function Tempe'],
    capacityRange: '20 – 100 seated',
    recommendedSpaces: [
      { spaceName: "Priscilla's Drag & Dine", venueName: 'The Imperial Erskineville', capacity: 'Up to 100 seated with stage view' },
      { spaceName: 'Riverview Taverna Balcony', venueName: 'Riverview Hotel', capacity: '50 seated (Stix Hellenic feast)' },
      { spaceName: 'Ni Hao Bar Private Dining', venueName: 'Civic Hotel', capacity: '80 seated (Cantonese banquet)' }
    ],
    keyFeatures: ['Curated Set Menus', 'Interactive Entertainment (Drag/Performers)', 'Shared Banquets & Premium Wine Pairings']
  }
];

export const ACCOMMODATION_STRUCTURE = {
  hubUrl: '/accommodation',
  hubTitle: 'Universal Hotels Boutique Stays & Pub Accommodation',
  metaDescription: 'Stay in the heart of Surry Hills or near Sydney Airport with Universal Hotels. Boutique rooms, en-suites, and instant dining downstairs.',
  properties: [
    {
      propertyId: 'crown-hotel-surry-hills',
      name: 'Crown Hotel Surry Hills',
      suburb: 'Surry Hills',
      positioning: 'Boutique Lifestyle Stay near SCG, Allianz Stadium & CBD',
      targetAudience: 'Weekend city breakers, sports fans (SCG/Allianz), wedding guests, and business travelers.',
      roomTypes: ['Standard Queen Room', 'Deluxe Queen with En-Suite', 'Twin Share Room'],
      amenities: ['Luxury En-Suite Bathrooms', 'Individual Climate Control / A/C', 'Complimentary High-Speed Wi-Fi', 'Guest Kitchenette & Dining Lounge', 'Express Digital Check-In', 'Downstairs Pub & Dining'],
      locationHighlights: '10 min walk to Central Station, 5 min walk to Oxford St & Taylor Square, 10 min walk to Sydney Cricket Ground (SCG).',
      directBookingUrl: 'https://crownhotel.com.au/stay/'
    },
    {
      propertyId: 'riverview-hotel-tempe',
      name: 'Riverview Hotel Tempe',
      suburb: 'Tempe',
      positioning: 'Contemporary Refurbished Stay on Cooks River & Airport Fringe',
      targetAudience: 'Airport transit travelers, corporate visitors to South Sydney, and food & wine guests.',
      roomTypes: ['Refurbished King Room', 'Double Room with En-Suite'],
      amenities: ['Newly Refurbished Contemporary Interiors', 'Air Conditioning & Flat-Screen TV', 'Free Wi-Fi', 'On-Site Stix Hellenic Taverna Dining', 'Steps to Sydenham Metro & Train Station'],
      locationHighlights: '7 minutes to Sydney Domestic & International Airports, 2 minutes to Sydenham Metro, scenic Cooks River parklands nearby.',
      directBookingUrl: 'https://riverviewhoteltempe.com.au/accommodation-riverview-hotel/'
    },
    {
      propertyId: 'tempe-hotel',
      name: 'Tempe Hotel',
      suburb: 'Tempe',
      positioning: 'Straightforward, Budget-Friendly Corridor Accommodation',
      targetAudience: 'Contractors, interstate trades, road trippers, and budget travelers.',
      roomTypes: ['Single Pub Room', 'Double Room', 'Twin Room'],
      amenities: ['Clean & Comfortable Beds', 'Air Conditioning', 'Television', 'On-Site Bistro, TAB & Beer Garden', 'Free Onsite Parking Area'],
      locationHighlights: 'Direct Princes Highway corridor access, close to IKEA Tempe and Sydney Airport.',
      directBookingUrl: 'https://tempehotel.com.au/'
    }
  ]
};

export const WHATS_ON_STRUCTURE = {
  hubUrl: '/whats-on',
  hubTitle: "What's On Across Universal Hotels Sydney",
  categories: [
    {
      id: 'drag-cabaret',
      title: 'Drag Shows & Queer Culture',
      description: 'Legendary drag productions 7 nights a week at Universal Sydney and Drag & Dine at The Imperial Erskineville.',
      recurringHighlights: ['Universal Sydney Nightly Drag Shows (Mon–Sun)', 'Imperial Drag Bingo (Thursdays 7pm)', 'Imperial Drag Trivia (Wednesdays 7pm)']
    },
    {
      id: 'live-music-clubbing',
      title: 'Live Music, DJs & Nightclub Events',
      description: 'Bass-heavy underground clubs and live music rooms operating until 4am in Sydney CBD and Oxford Street.',
      recurringHighlights: ['Civic Underground Friday & Saturday Club Nights', 'Oxford Underground Weekend DJ Takeovers', 'The Riley Weekend Resident DJs']
    },
    {
      id: 'live-sports-screenings',
      title: 'Live Sport, NRL, AFL & UFC',
      description: 'Stadium-atmosphere match broadcasts with full TAB facilities across Sydney CBD, Surry Hills, Enfield, and Tempe.',
      recurringHighlights: ['NRL & AFL Premiership Matches Live & Loud', 'UFC Pay-Per-View Sunday Screenings', 'Super Bowl & Major International Tournaments']
    },
    {
      id: 'community-specials',
      title: 'Weekly Community Pub Rituals',
      description: 'Tradition-rich neighbourhood socials that bring Sydneysiders together.',
      recurringHighlights: ['The Tudor Redfern Trivia Night (Wednesdays)', 'The Tudor Meat & Veggie Raffles (Fridays)', 'The Harold Forest Lodge Sunday Roasts', 'Daily Happy Hours across all venues (4pm–6pm)']
    }
  ]
};

export const INTERNAL_LINKING_MAP = {
  principles: [
    'Every venue page links upstream to its parent Location Precinct page and downstream to its specific Function Spaces and Food Menu.',
    'Every Function Space links directly to the Functions Enquiry Form with pre-populated space, venue, and capacity parameters.',
    'The Accommodation hub links directly to the venue dining pages (e.g. Crown Hotel Dining, Riverview Stix Hellenic Taverna) to maximize guest spend.',
    'The What’s On page links directly to the hosting venue page and external ticketing/booking links.',
    'Cross-precinct discovery modules ("Explore More Venues in this Precinct" and "Similar Vibes Across Sydney") keep users circulating in the ecosystem.'
  ],
  breadcrumbsStructure: [
    'Home > Venues > [Precinct] > [Venue Name]',
    'Home > Functions & Events > [Event Intent / Type] > [Specific Space]',
    'Home > Accommodation > [Property Name]',
    'Home > What’s On > [Event Category] > [Event Detail]'
  ]
};

export const COMPETITOR_ANALYSIS_SOLOTEL = {
  benchmark: 'Solotel Hospitality Group (solotel.com.au)',
  evaluatedDimensions: {
    navigation: {
      solotelStyle: 'Minimalist top-level with heavy dropdown mega-menus, separating "Pubs and Bars" from "Restaurants".',
      critique: 'Clean and elegant, but forces an artificial divide between pubs and dining which can confuse users when a venue offers both (e.g. pub with upscale dining room).',
      universalApproach: 'Unify under a multi-tag "Venues" directory with dynamic faceted filters (Vibe, Suburb, Food, Late Night) to reflect modern hybrid venues.'
    },
    venueDiscovery: {
      solotelStyle: 'Visual grid with high-resolution photography, filtering by suburb dropdown and venue type tab.',
      critique: 'Strong editorial presentation, but lacks quick-view operational data (such as "Open now until 4am" badges or walking proximity).',
      universalApproach: 'Adopt high-impact editorial imagery, but add real-time status badges (e.g. "Late Night 4am", "Boutique Accommodation On-Site", "Drag Shows Tonight") to accelerate decision-making.'
    },
    eventDiscovery: {
      solotelStyle: 'Separate "What\'s On" tab showcasing events across all venues with date and venue filters.',
      critique: 'Very strong for ticketed events and seasonal festivals, but sometimes buries weekly staples (like weekly trivia or happy hours).',
      universalApproach: 'Two-tier What’s On: Highlighting "Featured One-Off Events" alongside "Weekly Rituals & Entertainment" (crucial for Universal’s 7-night drag calendar).'
    },
    conversionPaths: {
      solotelStyle: 'Global "Parties & Events" button leading to an automated function enquiry form, plus individual venue booking modals.',
      critique: 'Clear conversion intention, but requires many form steps before revealing venue capacities or minimum spends.',
      universalApproach: 'Implement a frictionless "Function Concierge" where users first slide guest count (e.g. 50 pax) to instantly see qualifying rooms before filling out their details.'
    },
    mobileUx: {
      solotelStyle: 'Sticky bottom bar on mobile with "Book a Table", clean hamburger drawer with accordion sub-menus.',
      critique: 'High utility, though image-heavy pages can occasionally produce heavy scroll fatigue.',
      universalApproach: 'Adopt sticky mobile quick-action dock (Call, Find a Table, Enquire Functions, Directions) and swipeable horizontal carousels for mobile venue browsing.'
    }
  },
  patternsWorthAdopting: [
    'Editorial, photography-first storytelling that treats each venue as a distinct cultural character.',
    'Clear corporate endorsement ("A Family of Venues") establishing trustworthiness without overshadowing individual venue identities.',
    'Dedicated corporate & group event portal with downloadable packages and transparent floor plans.'
  ],
  patternsToImprove: [
    'Over-fragmented sub-brands: Solotel separates restaurants from pubs. Universal Hotels should offer unified search because Sydney guests want hybrid experiences.',
    'Lead friction: Make function capacities immediately visible upfront so corporate planners do not need to guess.',
    'Local SEO depth: Provide richer neighbourhood context on precinct pages to dominate local search.'
  ],
  thingsUniversalMustDoDifferently: [
    'Celebrate Universal’s unmatched LGBTQIA+ nightlife heritage (Universal Sydney, The Imperial, Gingers, Oxford Hotel) as a proud core differentiator.',
    'Highlight rare 4am late-night licenses across Sydney CBD and Oxford Street, which Solotel’s portfolio does not match.',
    'Promote on-site boutique accommodation (Crown Hotel, Riverview, Tempe) directly alongside dining and functions, creating full stay-and-play weekend packages.'
  ]
};
