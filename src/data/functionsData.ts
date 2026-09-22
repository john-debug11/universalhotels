import { VENUE_DATABASE } from './venueDatabase';
import { VENUE_DETAILS, DetailedFunctionSpace } from './venueDetails';

export interface EventTypeConfig {
  id: string;
  slug: string;
  title: string;
  badge: string;
  heroHeadline: string;
  heroDescription: string;
  targetAudience: string;
  recommendedVenueSlugs: string[];
  packagesHighlight: {
    canapes: string;
    beverage: string;
    additions: string;
  };
  features: string[];
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const EVENT_TYPES_DATA: Record<string, EventTypeConfig> = {
  'private-functions': {
    id: 'private-functions',
    slug: 'private-functions',
    title: 'Private Functions',
    badge: 'EXCLUSIVE CELEBRATIONS',
    heroHeadline: 'Private Function Spaces Across Sydney',
    heroDescription: 'From subterranean acoustic cellars and vibrant speakeasies to panoramic rooftop terraces and heritage saloons, Universal Hotels offers fully private and semi-private spaces for unforgettable occasions.',
    targetAudience: 'Milestone celebrations, private dinners, social club banquets, and customized gatherings.',
    recommendedVenueSlugs: ['the-harold', 'imperial-hotel-erskineville', 'the-oxford-hotel', 'the-tudor-hotel', 'crown-hotel-surry-hills'],
    packagesHighlight: {
      canapes: 'Chef-curated hot & cold canapés from $35/pp (sliders, skewers, arancini, artisan pizzas).',
      beverage: 'Standard and Premium beverage packages spanning 2 to 4 hours with Australian wines, craft beers, and spritzes.',
      additions: 'Custom cocktail on arrival, dedicated private bartender, DJ hire, and cake service.'
    },
    features: ['Exclusive room hire', 'Private bar service', 'Flexible seating & standing layouts', 'Bespoke menus & dietary catering', 'Late license options'],
    faqs: [
      {
        question: 'What is the minimum spend for private function spaces?',
        answer: 'Minimum spends vary based on day of week, season, and space. Off-peak days (Sunday–Thursday) enjoy lower minimum spends. Our functions manager provides clear quotes with zero hidden fees.'
      },
      {
        question: 'Can we bring our own decorations and cake?',
        answer: 'Yes, celebratory decorations (balloons, floral arrangements, signage) are welcomed. Cakeage can be arranged with our kitchen, including cutting, platters, and service.'
      },
      {
        question: 'What audiovisual equipment is provided?',
        answer: 'Most private spaces include wireless microphones, TV screens for slideshows/videos, and independent sound systems with AUX or Bluetooth connectivity.'
      }
    ],
    seoTitle: 'Private Function Spaces Sydney | Universal Hotels',
    seoDescription: 'Hire private function spaces across Sydney CBD, Darlinghurst, Surry Hills, and Inner West. Exclusive bars, rooftops, and dining rooms with bespoke packages.'
  },
  'birthday-parties': {
    id: 'birthday-parties',
    slug: 'birthday-parties',
    title: 'Birthday Parties',
    badge: 'MILESTONE CELEBRATIONS',
    heroHeadline: 'Sydney Birthday Party Venues & Packages',
    heroDescription: 'Celebrate your 21st, 30th, 40th, 50th or milestone birthday in iconic style. Choose from cocktail lounges, lively dancefloors, rooftop terraces, and casual pub courtyards with late closing hours.',
    targetAudience: '18th, 21st, 30th, 40th, 50th birthdays, and unforgettable friend gatherings.',
    recommendedVenueSlugs: ['the-oxford-hotel', 'the-harold', 'imperial-hotel-erskineville', 'civic-hotel', 'universal-sydney', 'crown-hotel-surry-hills'],
    packagesHighlight: {
      canapes: 'Crowd-pleasing finger food platters, bao buns, tacos, and wood-fired flatbreads.',
      beverage: 'Wristband bar tabs or timed free-flowing beverage packages tailored to your budget.',
      additions: 'Signature birthday cocktail towers, Polaroid photo station setup, and dedicated sound input.'
    },
    features: ['Dedicated party host', 'DJ setup & dancefloor areas', 'Custom birthday cocktail towers', 'Late night 2am–4am licenses', 'Flexible bar tabs'],
    faqs: [
      {
        question: 'Do you host 18th and 21st birthday parties?',
        answer: 'Yes, select Universal Hotels venues host 18th and 21st birthdays with dedicated licensed security and RSA compliance protocols to ensure a safe, fun night.'
      },
      {
        question: 'Can I set up a bar tab with drink restrictions?',
        answer: 'Absolutely. You can set a dollar limit and specify which drinks are included (e.g., tap beers, house wines, standard spirits only).'
      },
      {
        question: 'Can we stay until late after our private space closes?',
        answer: 'Yes! With venues like The Oxford Hotel (4am) and Universal Sydney (4am), you and your guests can transition seamlessly to our late-night bars and dancefloors.'
      }
    ],
    seoTitle: 'Birthday Party Venues Sydney | Universal Hotels',
    seoDescription: 'Celebrate your birthday at Sydney’s premier hospitality venues. Private bars, rooftop spaces, 4am late licenses, and customizable party packages.'
  },
  'corporate-events': {
    id: 'corporate-events',
    slug: 'corporate-events',
    title: 'Corporate Events',
    badge: 'BUSINESS & NETWORKING',
    heroHeadline: 'Corporate Venues, Seminars & Networking',
    heroDescription: 'Elevate your next company social, client networking event, team celebration, or annual EOFY gathering. Convenient CBD and fringe locations within minutes of central train and metro stations.',
    targetAudience: 'Corporate networking, product launches, team lunches, conferences, EOFY & kickoff celebrations.',
    recommendedVenueSlugs: ['civic-hotel', 'the-harold', 'the-lord-roberts-hotel', 'the-riley-hotel', 'palace-hotel', 'the-tudor-hotel'],
    packagesHighlight: {
      canapes: 'Refined corporate dining: canapé selections, grazing tables, and sit-down 2 or 3 course menus.',
      beverage: 'Sommelier-selected wine lists, premium Australian tap beers, and artisan non-alcoholic options.',
      additions: 'High-definition AV projection, wireless handheld mics, staging, and corporate billing invoicing.'
    },
    features: ['HDMI/AirPlay screens & AV', 'Microphone & sound connectivity', 'Direct proximity to Sydney CBD transit', 'Corporate accounts & invoicing', 'Day delegate packages'],
    faqs: [
      {
        question: 'Can we pay via corporate tax invoice?',
        answer: 'Yes, corporate accounts and company invoicing are supported for verified businesses, with itemized tax invoices supplied.'
      },
      {
        question: 'What AV facilities are available for presentations?',
        answer: 'Our corporate spaces feature large format HD screens, HDMI/wireless mirroring, lapel/handheld microphones, and lecterns upon request.'
      },
      {
        question: 'Are day delegate and lunch packages available?',
        answer: 'Yes, we offer morning tea, executive working lunches, afternoon refreshments, and post-conference networking cocktail packages.'
      }
    ],
    seoTitle: 'Corporate Event Venues Sydney CBD | Universal Hotels',
    seoDescription: 'Host corporate events, team lunches, client networking, and seminars in Sydney CBD. Fully equipped AV, central transit access, and premium packages.'
  },
  'engagement-parties': {
    id: 'engagement-parties',
    slug: 'engagement-parties',
    title: 'Engagement Parties',
    badge: 'LOVE & ROMANCE',
    heroHeadline: 'Sydney Engagement Party Venues',
    heroDescription: 'Celebrate your engagement in gorgeous, character-rich spaces. Romantic cocktail verandas, boutique dining rooms, and heritage lounges designed for heartfelt toasts with family and friends.',
    targetAudience: 'Engaged couples, wedding kickoff parties, rehearsal dinners, and intimate matrimonial toasts.',
    recommendedVenueSlugs: ['imperial-hotel-erskineville', 'the-harold', 'the-oxford-hotel', 'crown-hotel-surry-hills', 'the-riley-hotel'],
    packagesHighlight: {
      canapes: 'Elevated canapé reception: fresh Sydney rock oysters, kingfish ceviche, truffle arancini, and gourmet sliders.',
      beverage: 'Champagne and prosecco toasts, French and Australian wines, and bespoke "His & Hers" cocktail creations.',
      additions: 'Cake cutting & platter service, floral styling integration, easel & welcome signage.'
    },
    features: ['Romantic ambience & natural light', 'Champagne toast packages', 'Space for photo moments & speeches', 'Custom cocktail creation', 'Audio for playlist & speeches'],
    faqs: [
      {
        question: 'Can we bring a photographer and custom floral arch?',
        answer: 'Yes! Our spaces feature ample room for photo backdrops, floral installations, balloon arches, and welcome signage.'
      },
      {
        question: 'Can we play our own engagement video or slideshow?',
        answer: 'Yes, our venues have integrated screens compatible with HDMI and USB media playback for your photo and video reels.'
      },
      {
        question: 'How early can we arrive to set up styling?',
        answer: 'Setup access is generally provided 1 to 2 hours prior to guest arrival. Extended setup windows can be coordinated with your event manager.'
      }
    ],
    seoTitle: 'Engagement Party Venues Sydney | Universal Hotels',
    seoDescription: 'Discover romantic engagement party venues in Sydney. Boutique bars, heritage dining spaces, bespoke cocktails, and personalized wedding celebrations.'
  },
  'christmas-parties': {
    id: 'christmas-parties',
    slug: 'christmas-parties',
    title: 'Christmas Parties',
    badge: 'FESTIVE PACKAGES',
    heroHeadline: 'Festive & End-of-Year Christmas Parties',
    heroDescription: 'Reward your team and gather your friends for Sydney’s ultimate Christmas celebration. High-energy cocktail parties, festive sit-down lunches, and rooftop drinks across Sydney’s best entertainment hubs.',
    targetAudience: 'Company Christmas parties, department celebrations, client festive drinks, and end-of-year gatherings.',
    recommendedVenueSlugs: ['the-harold', 'civic-hotel', 'the-oxford-hotel', 'the-tudor-hotel', 'imperial-hotel-erskineville', 'the-lord-roberts-hotel'],
    packagesHighlight: {
      canapes: 'Festive canapé packages with glazed ham sliders, roast turkey bites, prawns, and holiday desserts.',
      beverage: 'All-inclusive 3 to 4 hour festive drinks packages with tap beers, sparkling, and Christmas spritzes.',
      additions: 'DJ hire, holiday photo props, bon-bons, and late-night party bar extensions.'
    },
    features: ['Festive venue decorations', 'All-inclusive packages', 'High capacity for 20–300+ guests', 'Late night party options', 'Dedicated festive event planner'],
    faqs: [
      {
        question: 'When should we book our Sydney Christmas party?',
        answer: 'November and December dates fill rapidly starting in July. We strongly recommend reserving early to secure your preferred date and private space.'
      },
      {
        question: 'Can we customize our Christmas food and drink menu?',
        answer: 'Yes, we offer flexible menus accommodating canapé cocktail parties, seated festive banquets, and all dietary requirements.'
      },
      {
        question: 'Are festive decorations included?',
        answer: 'Our spaces are tastefully styled for the holiday season, and you are welcome to bring branded items or additional festive touches.'
      }
    ],
    seoTitle: 'Christmas Party Venues Sydney | Universal Hotels',
    seoDescription: 'Book your Sydney Christmas party with Universal Hotels. Festive canapés, free-flowing drinks, private rooms, and unforgettable end-of-year events.'
  },
  'group-bookings': {
    id: 'group-bookings',
    slug: 'group-bookings',
    title: 'Group Bookings',
    badge: 'DINING & DRINKS',
    heroHeadline: 'Large Group Dining & Social Gatherings',
    heroDescription: 'Effortless group bookings for 10 to 50+ guests. Shared feasting menus, reserved pub tables, sports viewing areas, and casual courtyard spaces without high private hire minimums.',
    targetAudience: 'Casual catch-ups, sporting match viewings, family birthdays, reunion dinners, and social clubs.',
    recommendedVenueSlugs: ['the-tudor-hotel', 'the-harold', 'crown-hotel-surry-hills', 'riverview-hotel-tempe', 'palace-hotel', 'enfield-hotel'],
    packagesHighlight: {
      canapes: 'Shared feasting menus: antipasti boards, pub classics, shared smoked meats, and pizzas.',
      beverage: 'Beer jugs, wine carafes, casual bar tabs, or pay-as-you-go individual orders.',
      additions: 'Reserved priority seating, big screen sports view, and grouped tab management.'
    },
    features: ['No hefty private hire fees', 'Reserved group table zone', 'Flexible food & drinks options', 'Big screens for live sport', 'Fast online reservation confirmation'],
    faqs: [
      {
        question: 'What is the maximum group size for table reservations?',
        answer: 'We cater for groups from 10 up to 60+ in reserved dining and courtyard sections. For larger numbers, our private function spaces are ideal.'
      },
      {
        question: 'Can individual guests buy their own drinks and food?',
        answer: 'Yes! For casual group bookings, your party can order food and drinks at the bar or via QR table ordering, or you may establish a central tab.'
      },
      {
        question: 'Are minors permitted for group family dinners?',
        answer: 'Yes, in bistro and dining areas during food service hours when accompanied by a responsible adult.'
      }
    ],
    seoTitle: 'Group Dining & Bookings Sydney | Universal Hotels',
    seoDescription: 'Reserve group dining tables and pub zones across Sydney. Great food, tap beers, live sports, and effortless booking for 10 to 50+ guests.'
  },
  'venue-hire': {
    id: 'venue-hire',
    slug: 'venue-hire',
    title: 'Full Venue Hire',
    badge: 'EXCLUSIVE BUYOUTS',
    heroHeadline: 'Exclusive Full Venue Hire in Sydney',
    heroDescription: 'Command an entire multi-level Sydney hotel, historic pub, or nightclub exclusively for your brand, media production, festival, or private gala. Complete creative control and unmatched hospitality.',
    targetAudience: 'Brand launches, film/photo shoots, major industry celebrations, festivals, and VIP private events.',
    recommendedVenueSlugs: ['imperial-hotel-erskineville', 'the-oxford-hotel', 'civic-hotel', 'the-harold', 'universal-sydney'],
    packagesHighlight: {
      canapes: 'Multi-station culinary activations, roving chef creations, oyster shucking bars, and food trucks/stations.',
      beverage: 'Full venue open bar access across multiple levels, premium spirits, custom brand cocktails, and VIP table service.',
      additions: 'Full venue AV lighting rigs, multi-DJ lineups, security staffing, security sweeps, and branding takeovers.'
    },
    features: ['Multi-level capacity up to 500+ guests', 'Complete venue branding & styling', 'Full commercial kitchen buyout', 'Multiple bars & staging areas', '2am–4am licenses'],
    faqs: [
      {
        question: 'Can we brand the entire venue for an experiential launch?',
        answer: 'Yes, full buyouts permit custom signage, window decals, entrance installations, branded glassware, and media photo walls.'
      },
      {
        question: 'What is the licensing curfew for full venue buyouts?',
        answer: 'Curfews align with venue licenses, with select venues like The Oxford Hotel, Imperial Erskineville, and Universal Sydney licensed until 2am–4am.'
      },
      {
        question: 'Can we bring external production, lighting, or catering?',
        answer: 'External AV production and entertainment are warmly welcomed. Outside food catering requires prior consultation and approval.'
      }
    ],
    seoTitle: 'Full Venue Hire Sydney | Universal Hotels Buyouts',
    seoDescription: 'Exclusive full venue hire and multi-level hotel buyouts in Sydney. Perfect for brand activations, major corporate galas, and private productions.'
  }
};

export interface FlatFunctionSpaceResult {
  venueSlug: string;
  venueName: string;
  locationSuburb: string;
  venueType: string;
  spaceName: string;
  capacityStanding: number;
  capacitySeated: number;
  features: string[];
  eventTypes: string[];
  venueHeroImage: string;
  openingHours: string;
  phone: string;
  bookingUrl: string;
}

// Helper to extract all function spaces across Universal Hotels into a searchable flat matrix
export function getAllFunctionSpaces(): FlatFunctionSpaceResult[] {
  const results: FlatFunctionSpaceResult[] = [];

  for (const [slug, record] of Object.entries(VENUE_DETAILS)) {
    if (record.functionSpaces && record.functionSpaces.length > 0) {
      for (const space of record.functionSpaces) {
        results.push({
          venueSlug: slug,
          venueName: record.venueName,
          locationSuburb: record.locationSuburb,
          venueType: record.venueType,
          spaceName: space.spaceName,
          capacityStanding: space.capacityStanding,
          capacitySeated: space.capacitySeated,
          features: space.features,
          eventTypes: space.eventTypes,
          venueHeroImage: record.heroImage,
          openingHours: record.openingHours,
          phone: record.phone,
          bookingUrl: record.bookingUrl
        });
      }
    }
  }

  return results;
}
