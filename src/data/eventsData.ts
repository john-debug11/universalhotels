export type EventCategory =
  | 'Live Music'
  | 'DJs'
  | 'Drag'
  | 'Nightlife'
  | 'Food & Drink'
  | 'Special Events'
  | 'Promotions';

export interface VerifiedEvent {
  id: string;
  slug: string;
  name: string;
  venueName: string;
  venueSlug: string;
  venueUrl: string;
  locationSuburb: string;
  address: string;
  dateDisplay: string;
  dayOfWeek: string;
  timeDisplay: string;
  isoDate: string; // YYYY-MM-DD
  endDate?: string;
  category: EventCategory;
  description: string;
  fullDetails: string[];
  imageUrl: string;
  bookingUrl: string;
  ticketPrice: string;
  isFreeEntry: boolean;
  isTonight: boolean;
  isThisWeekend: boolean;
  isThisWeek: boolean;
  ageRestriction: string;
  inclusions?: string[];
  highlights?: string[];
}

export const VERIFIED_EVENTS_DATABASE: VerifiedEvent[] = [
  {
    id: 'ev-universal-nightly-drag',
    slug: 'universal-nights-7-day-live-drag',
    name: 'Universal Nights: 7-Day Live Drag Production',
    venueName: 'Universal Sydney',
    venueSlug: 'universal-sydney',
    venueUrl: '/venues/universal-sydney',
    locationSuburb: 'Darlinghurst',
    address: '85-91 Oxford St, Darlinghurst NSW 2010',
    dateDisplay: 'Tonight & Every Night',
    dayOfWeek: 'Daily',
    timeDisplay: '8:30pm – Late (3 Spectacular Showcases)',
    isoDate: '2026-09-22',
    category: 'Drag',
    description: 'Sydney’s premier 7-night live drag spectacle on Oxford Street featuring Australia’s top drag royalty, high-energy choreography, and show-stopping theatrical anthems.',
    fullDetails: [
      'Universal Sydney presents world-class drag theatre seven nights a week on our legendary ground-floor cabaret stage.',
      'Framed by our famous golden mosaic walls and neon angel wings, each evening delivers multiple distinct production numbers with high-energy costume changes, precision routines, and audience engagement.',
      'Downstairs entry is 100% free with no tickets required. Reserved VIP booth seating with bottle service packages is available for milestone birthday celebrations and group parties.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
    bookingUrl: 'https://www.universal.sydney',
    ticketPrice: 'Free General Entry',
    isFreeEntry: true,
    isTonight: true,
    isThisWeekend: true,
    isThisWeek: true,
    ageRestriction: '18+ Photo ID Required',
    inclusions: [
      'Free general admission to ground floor stage',
      'Three full-cast drag shows starting from 8:30pm',
      'Cocktail lounge service all evening',
      'Access to late-night dancefloor'
    ],
    highlights: ['7 Nights a Week', 'Free Entry', 'Oxford Street Landmark', 'Award-Winning Cast']
  },

  {
    id: 'ev-priscillas-drag-dine',
    slug: 'priscillas-drag-dine-banquet-feast',
    name: 'Priscilla’s Drag & Dine Banquet Feast',
    venueName: 'The Imperial Erskineville',
    venueSlug: 'imperial-hotel-erskineville',
    venueUrl: '/venues/imperial-hotel-erskineville',
    locationSuburb: 'Erskineville',
    address: '35 Erskineville Rd, Erskineville NSW 2043',
    dateDisplay: 'Friday & Saturday Evenings',
    dayOfWeek: 'Friday & Saturday',
    timeDisplay: 'Sittings at 6:00pm & 8:30pm',
    isoDate: '2026-09-25',
    category: 'Drag',
    description: 'Multi-course Mediterranean culinary banquet paired with world-famous theatrical drag performances in the spiritual home of Priscilla, Queen of the Desert.',
    fullDetails: [
      'Enter the sacred hall of Australian queer cinema history. Priscilla’s at The Imperial Erskineville pairs mouth-watering Mediterranean feasts with theatrical, over-the-top drag performances.',
      'Enjoy slow-roasted lamb shoulder, smoked eggplant dips, fresh flatbreads, and decadent desserts while Sydney’s most iconic drag queens entertain you tableside and on stage.',
      'Dedicated vegan, vegetarian, and coeliac-safe banquet menus are prepared for every sitting. Bookings are essential as sessions consistently sell out in advance.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    bookingUrl: 'https://imperialhotel.com.au/drag-and-dine/',
    ticketPrice: 'From $89 per person (Banquet + Show)',
    isFreeEntry: false,
    isTonight: false,
    isThisWeekend: true,
    isThisWeek: true,
    ageRestriction: '18+ (Minors accompanied by guardian at early sitting)',
    inclusions: [
      'Multi-course Mediterranean banquet feast',
      'Theatrical Priscilla drag stage show and roving performances',
      'Full table cocktail and beverage service',
      'Complimentary access to Imperial Basement club afterwards'
    ],
    highlights: ['Iconic Cinema Heritage', 'Banquet Feast', 'Theatrical Show', 'Sells Out Weekly']
  },

  {
    id: 'ev-civic-underground-club',
    slug: 'civic-underground-electronic-club-sessions',
    name: 'Civic Underground: Subterranean Electronic Club Sessions',
    venueName: 'Civic Hotel',
    venueSlug: 'civic-hotel',
    venueUrl: '/venues/civic-hotel',
    locationSuburb: 'Sydney CBD',
    address: '388 Pitt St, Sydney NSW 2000',
    dateDisplay: 'Every Friday & Saturday Night',
    dayOfWeek: 'Friday & Saturday',
    timeDisplay: '10:00pm – 4:00am Late Trade',
    isoDate: '2026-09-26',
    category: 'Nightlife',
    description: 'Underground house, techno and minimal electronic sessions inside Sydney’s acoustically tuned basement music room featuring custom Allen & Heath sound.',
    fullDetails: [
      'Civic Underground is revered by audiophiles as Sydney’s best-sounding boutique nightclub. Built inside the heritage Art Deco basement of the Civic Hotel, the room is purpose-tuned for deep acoustic clarity.',
      'Equipped with a custom Allen & Heath V6 mixer, precision digital delay lines, and a hypnotic illuminated LED ceiling grid, Friday and Saturday nights showcase the premier underground selectors from Australia and abroad.',
      'Licensed until 4:00am with express light rail and train transit right outside on Goulburn and Pitt Streets.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
    bookingUrl: 'https://civichotelsydney.com.au/make-a-booking/',
    ticketPrice: 'Door Entry $25 / Presale $20',
    isFreeEntry: false,
    isTonight: false,
    isThisWeekend: true,
    isThisWeek: true,
    ageRestriction: '18+ Photo ID Required',
    inclusions: [
      'Admission to Civic Underground basement',
      'Full Allen & Heath acoustic club audio rig',
      'Dedicated basement cocktail and draught bar',
      'Cloakroom facilities'
    ],
    highlights: ['Allen & Heath Sound', '4am Late License', 'LED Ceiling', 'CBD Hub']
  },

  {
    id: 'ev-imperial-sunday-bingo',
    slug: 'sunday-drag-bingo-on-the-rooftop',
    name: 'Sunday Drag Bingo on the Rooftop',
    venueName: 'The Imperial Erskineville',
    venueSlug: 'imperial-hotel-erskineville',
    venueUrl: '/venues/imperial-hotel-erskineville',
    locationSuburb: 'Erskineville',
    address: '35 Erskineville Rd, Erskineville NSW 2043',
    dateDisplay: 'Every Sunday Afternoon',
    dayOfWeek: 'Sunday',
    timeDisplay: 'From 3:00pm – 6:00pm',
    isoDate: '2026-09-27',
    category: 'Drag',
    description: 'Hilarious games, prizes, spritz jugs, and woodfired Neapolitan pizza under the sun on The Imperial Rooftop.',
    fullDetails: [
      'Sundays are meant for sunshine, laughter, and rooftop spritzes. Imperial Drag Bingo brings Erskineville locals and visitors together for three uproarious rounds of bingo hosted by legendary Sydney queens.',
      'Featuring novelty prizes, bar vouchers, spritz jugs, and hot pizza fresh from the rooftop stone oven.',
      'Free to play with table reservation strongly advised.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    bookingUrl: 'https://imperialhotel.com.au/rooftop/',
    ticketPrice: 'Free to Play (Table Reservation Recommended)',
    isFreeEntry: true,
    isTonight: false,
    isThisWeekend: true,
    isThisWeek: true,
    ageRestriction: '18+',
    inclusions: [
      'Free bingo cards and markers for all guests',
      'Comedy and banter with resident host queens',
      'Cash and bar voucher prizes',
      'Rooftop spritz and woodfired pizza specials'
    ],
    highlights: ['Rooftop Views', 'Free to Play', 'Prizes & Pizza', 'Sunday Social']
  },

  {
    id: 'ev-greek-sunday-feast',
    slug: 'greek-sunday-feast-at-stix-hellenic',
    name: 'Greek Sunday Feast at Stix Hellenic Taverna',
    venueName: 'Riverview Hotel',
    venueSlug: 'riverview-hotel-tempe',
    venueUrl: '/venues/riverview-hotel-tempe',
    locationSuburb: 'Tempe',
    address: '960 Princes Hwy, Tempe NSW 2044',
    dateDisplay: 'Every Sunday Lunch',
    dayOfWeek: 'Sunday',
    timeDisplay: 'From 12:00pm – 4:00pm',
    isoDate: '2026-09-27',
    category: 'Food & Drink',
    description: 'Authentic ironbark charcoal souvla, charred meze, saganaki cheese, and regional Greek wines along the Cooks River foreshore.',
    fullDetails: [
      'Every Sunday, Stix Hellenic Taverna at Riverview Hotel fires up the ironbark rotisseries for a traditional Greek Sunday long feast.',
      'Delight in slow-turned lamb and pork souvla, crisp Greek lemon potatoes, grilled octopus, village salads, and house-made warm pita.',
      'Enjoy outdoor riverside dining with family and friends. Complimentary on-site customer parking is included for all dining guests.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    bookingUrl: 'https://riverviewhoteltempe.com.au/',
    ticketPrice: 'A La Carte & $65pp Feast Option',
    isFreeEntry: true,
    isTonight: false,
    isThisWeekend: true,
    isThisWeek: true,
    ageRestriction: 'All Ages Welcome (Family Friendly)',
    inclusions: [
      'Charcoal rotisserie meats carved straight from the coals',
      'Greek meze and signature dips',
      'Riverside beer garden and indoor taverna seating',
      'Free on-site parking'
    ],
    highlights: ['Charcoal Souvla', 'Cooks River Views', 'Free Parking', 'Family Friendly']
  },

  {
    id: 'ev-tudor-wednesday-trivia',
    slug: 'redfern-wednesday-pub-trivia-craft-pints',
    name: 'Redfern Wednesday Pub Trivia & Cash Jackpot',
    venueName: 'The Tudor Hotel',
    venueSlug: 'the-tudor-hotel',
    venueUrl: '/venues/the-tudor-hotel',
    locationSuburb: 'Redfern',
    address: '90 Pitt St, Redfern NSW 2016',
    dateDisplay: 'Every Wednesday Evening',
    dayOfWeek: 'Wednesday',
    timeDisplay: '7:00pm – 9:30pm',
    isoDate: '2026-09-23',
    category: 'Promotions',
    description: 'Beloved neighbourhood trivia in the leafy upstairs terrace bar. Weekly rolling cash jackpot, beer jugs, and chicken schnitzel specials.',
    fullDetails: [
      'Gather your cleverest mates for Redfern’s favourite midweek pub trivia night at The Tudor Hotel.',
      'Hosted in the sunny upstairs private room and outdoor balcony terrace, teams battle across pop culture, general knowledge, music mashups, and bonus rounds.',
      'Pair the trivia action with $18 schnitzel specials, local craft beer jugs, and a growing rolling cash jackpot!'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1200&auto=format&fit=crop',
    bookingUrl: 'https://www.tudorhotel.com.au',
    ticketPrice: 'Free Entry (Table Booking Advised)',
    isFreeEntry: true,
    isTonight: true,
    isThisWeekend: false,
    isThisWeek: true,
    ageRestriction: '18+',
    inclusions: [
      'Free trivia team entry',
      'Weekly rolling cash jackpot prize',
      'Pub voucher prizes for 1st, 2nd, and second-to-last place',
      '$18 Schnitzel & chip food special'
    ],
    highlights: ['Rolling Cash Jackpot', 'Schnitzel Special', 'Upstairs Balcony', 'Dog-Friendly Ground Bar']
  },

  {
    id: 'ev-riley-weekend-djs',
    slug: 'the-riley-weekend-balcony-dj-sessions',
    name: 'The Riley: Weekend Balcony DJ Sessions',
    venueName: 'The Riley Hotel',
    venueSlug: 'the-riley-hotel',
    venueUrl: '/venues/the-riley-hotel',
    locationSuburb: 'Darlinghurst',
    address: '77 Oxford St, Darlinghurst NSW 2010',
    dateDisplay: 'Friday & Saturday Nights',
    dayOfWeek: 'Friday & Saturday',
    timeDisplay: '8:00pm – 3:00am Late Trade',
    isoDate: '2026-09-25',
    category: 'DJs',
    description: 'Resident Sydney DJs spinning disco, funk, and soulful house over the Oxford Street alfresco balcony terrace.',
    fullDetails: [
      'The Riley Hotel takes weekend social drinking up a notch with resident DJs curating warm, energetic grooves on Level 1.',
      'Sip signature passionfruit spritzes, local craft beers, and modern Australian sharing plates while taking in prime people-watching over Oxford Street.',
      'Trade extends until 3:00am with zero cover charge.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    bookingUrl: 'https://therileyhotel.com.au',
    ticketPrice: 'Free Entry',
    isFreeEntry: true,
    isTonight: false,
    isThisWeekend: true,
    isThisWeek: true,
    ageRestriction: '18+ Photo ID Required',
    inclusions: [
      'Live DJ sets across Friday and Saturday',
      'Covered balcony tables overlooking Oxford St',
      'Late trading until 3am',
      'No cover charge'
    ],
    highlights: ['Balcony Views', 'Disco & House', 'Free Entry', 'Late 3am License']
  },

  {
    id: 'ev-crown-ufc-live',
    slug: 'ufc-pay-per-view-main-card-live-loud',
    name: 'UFC Pay-Per-View Main Card Live & Loud',
    venueName: 'Crown Hotel Surry Hills',
    venueSlug: 'crown-hotel-surry-hills',
    venueUrl: '/venues/crown-hotel-surry-hills',
    locationSuburb: 'Surry Hills',
    address: '587 Crown St, Surry Hills NSW 2010',
    dateDisplay: 'Sunday Fight Days',
    dayOfWeek: 'Sunday',
    timeDisplay: '12:00pm – 4:00pm',
    isoDate: '2026-09-27',
    category: 'Special Events',
    description: 'World title pay-per-view cards broadcast in full HD with stadium audio across the public sports bar.',
    fullDetails: [
      'Experience the thrill of international UFC championship bouts live and loud on massive high-definition screens at Crown Hotel.',
      'With full commentary audio piped throughout the sports bar, TAB wagering terminals on site, and signature parmigianas and beer jugs pouring all afternoon.',
      'Walk-ins are welcome; early arrival is suggested to guarantee prime seating.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200&auto=format&fit=crop',
    bookingUrl: 'https://crownhotel.com.au',
    ticketPrice: 'Free General Admission',
    isFreeEntry: true,
    isTonight: false,
    isThisWeekend: true,
    isThisWeek: true,
    ageRestriction: '18+',
    inclusions: [
      'Full main card broadcast with amplified venue audio',
      'TAB wagering facilities',
      'Pub schnitzel and burger kitchen service',
      'Ice-cold tap beer jugs'
    ],
    highlights: ['Live & Loud Audio', 'Full HD Screens', 'TAB On-Site', 'Free Entry']
  },

  {
    id: 'ev-harold-sunday-roast',
    slug: 'the-harold-famous-sunday-roast-acoustic',
    name: 'The Harold: Famous Sunday Roast & Live Acoustic',
    venueName: 'The Harold',
    venueSlug: 'the-harold',
    venueUrl: '/venues/the-harold',
    locationSuburb: 'Forest Lodge',
    address: '70A Ross St, Forest Lodge NSW 2037',
    dateDisplay: 'Every Sunday',
    dayOfWeek: 'Sunday',
    timeDisplay: '12:00pm until sold out (Live Acoustic from 2pm)',
    isoDate: '2026-09-27',
    category: 'Food & Drink',
    description: 'Slow-roasted Black Angus sirloin, golden Yorkshire puddings, duck-fat potatoes, and rich red wine gravy on leafy Ross Street.',
    fullDetails: [
      'A true Sydney Inner West Sunday ritual. The Harold’s famous Sunday roast has earned an ardent local following, pairing generous British-pub tradition with relaxed Australian gastropub charm.',
      'Every Sunday from 12:00pm, enjoy slow-roasted sirloin, golden Yorkshire puddings, glazed Dutch carrots, and rich bone-marrow gravy.',
      'Local acoustic artists play on the Ross Street verandah from 2:00pm. Tables sell out quickly — bookings recommended.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    bookingUrl: 'https://www.universalhotels.com.au/theharold',
    ticketPrice: '$32 Roast Special (Walk-ins & Bookings)',
    isFreeEntry: true,
    isTonight: false,
    isThisWeekend: true,
    isThisWeek: true,
    ageRestriction: 'All Ages (Family & Dog-Friendly)',
    inclusions: [
      'Full Sunday roast plate with trimmings',
      'Live acoustic performance on the verandah',
      'Rotational craft beer taps and wine pairings',
      'Dog-friendly outdoor tables'
    ],
    highlights: ['Yorkshire Puddings', 'Live Acoustic Music', 'Verandah Dining', 'Inner West Favourite']
  },

  {
    id: 'ev-lord-roberts-happy-hour',
    slug: 'stanley-street-aperitivo-happy-hour',
    name: 'Stanley Street Aperitivo & Twilight Happy Hour',
    venueName: 'The Lord Roberts Hotel',
    venueSlug: 'the-lord-roberts-hotel',
    venueUrl: '/venues/the-lord-roberts-hotel',
    locationSuburb: 'Darlinghurst',
    address: '64 Stanley St, Darlinghurst NSW 2010',
    dateDisplay: 'Monday to Friday',
    dayOfWeek: 'Mon–Fri',
    timeDisplay: '4:00pm – 6:00pm Daily',
    isoDate: '2026-09-22',
    category: 'Promotions',
    description: 'Discounted local tap beers, Aperol spritzes, and Italian house wines on Stanley Street’s sunny rooftop terrace.',
    fullDetails: [
      'Clock off and unwind in Sydney’s historic Little Italy corridor. The Lord Roberts Hotel hosts daily twilight aperitivo across both the ground bar and Bob’s Lounge rooftop.',
      'Enjoy $8 local pints, $12 Aperol spritzes, and bar snacks while soaking in the heritage neighbourhood atmosphere.',
      'Minutes from Hyde Park and Museum Station.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    bookingUrl: 'https://www.lordrobertshotel.com.au',
    ticketPrice: 'Free Entry (Drink Specials Available)',
    isFreeEntry: true,
    isTonight: true,
    isThisWeekend: false,
    isThisWeek: true,
    ageRestriction: '18+',
    inclusions: [
      '$8 Draught beer pints',
      '$12 Aperol & Campari spritzes',
      '$8 House red and white wines',
      'Rooftop terrace seating with city skyline glimpse'
    ],
    highlights: ['Rooftop Terrace', '$8 Pints', 'Stanley Street Hub', 'Weekdays 4-6pm']
  },

  {
    id: 'ev-moko-highball-soju',
    slug: 'moko-soju-highball-izakaya-sessions',
    name: 'Moko: Highball & Soju Izakaya Sessions',
    venueName: 'Moko Eastwood',
    venueSlug: 'moko-eastwood',
    venueUrl: '/venues/moko-eastwood',
    locationSuburb: 'Eastwood',
    address: '75 Rowe St, Eastwood NSW 2122',
    dateDisplay: 'Thursday & Friday Nights',
    dayOfWeek: 'Thursday & Friday',
    timeDisplay: 'From 5:00pm – Late',
    isoDate: '2026-09-24',
    category: 'Food & Drink',
    description: 'Japanese whisky highballs, premium Korean soju carafes, and pan-Asian sharing plates in a neon-lit lounge.',
    fullDetails: [
      'Bringing sophisticated late-night dining to Sydney’s Northern Suburbs, Moko Eastwood hosts weekly Highball & Soju Sessions.',
      'Pair smoked Japanese whisky highballs or artisan soju flights with wagyu beef tataki, crispy pork belly bao, and spicy salmon crispy rice.',
      'Open until 4:00am on Friday and Saturday for late-night supper cravings.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    bookingUrl: 'https://mokoeastwood.com.au',
    ticketPrice: 'Free Entry / Table Bookings Recommended',
    isFreeEntry: true,
    isTonight: false,
    isThisWeekend: true,
    isThisWeek: true,
    ageRestriction: '18+',
    inclusions: [
      'Cocktail and highball specials from 5pm',
      'Full izakaya sharing menu available until late',
      'Curated DJ background soundscapes'
    ],
    highlights: ['Eastwood Nightlife', 'Late 4am License', 'Japanese Whiskies', 'Wagyu Tataki']
  },

  {
    id: 'ev-oxford-gingers-cabaret',
    slug: 'gingers-piano-vocal-cabaret-nights',
    name: 'Gingers: Piano & Vocal Cabaret Nights',
    venueName: 'The Oxford Hotel',
    venueSlug: 'the-oxford-hotel',
    venueUrl: '/venues/the-oxford-hotel',
    locationSuburb: 'Darlinghurst',
    address: '134 Oxford St, Darlinghurst NSW 2010',
    dateDisplay: 'Thursday, Friday & Saturday',
    dayOfWeek: 'Thu, Fri, Sat',
    timeDisplay: '9:00pm – Late',
    isoDate: '2026-09-24',
    category: 'Live Music',
    description: 'Intimate live piano performances, Broadway singalongs, and guest cabaret vocalists inside Gingers on Level 1.',
    fullDetails: [
      'Ascend to Gingers on Level 1 of The Oxford Hotel for an intimate night of live piano, vocal theatre, and cabaret entertainment.',
      'Featuring charismatic live pianists and guest vocalists performing show tunes, classic pop anthems, and soulful ballads.',
      'Plush booth seating, signature cocktails, and free general entry.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200&auto=format&fit=crop',
    bookingUrl: 'https://www.theoxfordhotel.com.au',
    ticketPrice: 'Free Entry',
    isFreeEntry: true,
    isTonight: false,
    isThisWeekend: true,
    isThisWeek: true,
    ageRestriction: '18+',
    inclusions: [
      'Live piano performances from 9pm',
      'Cocktail bar service in Gingers showroom',
      'No door charge'
    ],
    highlights: ['Live Piano', 'Cabaret Anthems', 'Taylor Square Heritage', 'Free Entry']
  }
];

export const EVENT_CATEGORIES: EventCategory[] = [
  'Live Music',
  'DJs',
  'Drag',
  'Nightlife',
  'Food & Drink',
  'Special Events',
  'Promotions'
];

export function generateEventStructuredData(event: VerifiedEvent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: `${event.isoDate}T${event.timeDisplay.includes('10:00pm') ? '22:00:00' : event.timeDisplay.includes('8:30pm') ? '20:30:00' : '19:00:00'}+10:00`,
    endDate: `${event.isoDate}T23:59:59+10:00`,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: event.venueName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.address,
        addressLocality: event.locationSuburb,
        addressRegion: 'NSW',
        addressCountry: 'AU'
      }
    },
    image: [event.imageUrl],
    offers: {
      '@type': 'Offer',
      url: event.bookingUrl,
      price: event.isFreeEntry ? '0' : '89',
      priceCurrency: 'AUD',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01'
    },
    organizer: {
      '@type': 'Organization',
      name: 'Universal Hotels Australia',
      url: 'https://www.universalhotels.com.au'
    }
  };
}
