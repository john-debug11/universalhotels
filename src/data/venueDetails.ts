/**
 * Universal Hotels Australia - Comprehensive Venue Detail Specifications
 * Enriches each verified venue with Function Spaces, Menus, Experiences, FAQs, Transit, and SEO Data.
 */

export interface DetailedFunctionSpace {
  spaceName: string;
  capacityTotal: number;
  capacitySeated: number;
  capacityStanding: number;
  features: string[];
  eventTypes: string[];
  minimumSpendHint?: string;
}

export interface DetailedFoodAndDrink {
  concept: string;
  signatureDishes: string[];
  signatureDrinks: string[];
  dietaryHighlights: string;
  operatingHoursNotes: string;
}

export interface DetailedFaq {
  question: string;
  answer: string;
}

export interface DetailedAccommodation {
  propertyName: string;
  roomTypes: string[];
  amenities: string[];
  rateHint: string;
  bookingUrl: string;
  proximityNotes: string;
}

export interface VenueDetailRecord {
  slug: string;
  venueName: string;
  locationSuburb: string;
  address: string;
  phone: string;
  email: string;
  openingHours: string;
  openingHoursWeekly: { day: string; hours: string }[];
  venueType: string;
  tagline: string;
  heroImage: string;
  gallery: { url: string; caption: string; category: string }[];
  aboutParagraphs: string[];
  foodAndDrink: DetailedFoodAndDrink;
  experiences: { title: string; description: string; iconName: string }[];
  whatsOn: { title: string; schedule: string; description: string }[];
  functionSpaces: DetailedFunctionSpace[];
  accommodation?: DetailedAccommodation;
  transit: {
    trainStation: string;
    lightRailOrMetro?: string;
    busRoutes: string;
    parking: string;
  };
  faqs: DetailedFaq[];
  seo: {
    title: string;
    metaDescription: string;
    canonicalPath: string;
    h1: string;
    schemaType: 'BarOrPub' | 'Restaurant' | 'Hotel' | 'NightClub';
  };
  bookingUrl: string;
  externalWebsite: string;
}

export const VENUE_DETAILS: Record<string, VenueDetailRecord> = {
  'civic-hotel': {
    slug: 'civic-hotel',
    venueName: 'Civic Hotel',
    locationSuburb: 'Sydney CBD',
    address: '388 Pitt St, Sydney NSW 2000',
    phone: '(02) 8080 7015',
    email: 'info@civichotelsydney.com.au',
    openingHours: 'Monday to Sunday: 10:00am – 4:00am',
    openingHoursWeekly: [
      { day: 'Monday', hours: '10:00am – 4:00am' },
      { day: 'Tuesday', hours: '10:00am – 4:00am' },
      { day: 'Wednesday', hours: '10:00am – 4:00am' },
      { day: 'Thursday', hours: '10:00am – 4:00am' },
      { day: 'Friday', hours: '10:00am – 4:00am' },
      { day: 'Saturday', hours: '10:00am – 4:00am' },
      { day: 'Sunday', hours: '10:00am – 4:00am' }
    ],
    venueType: 'Heritage Multi-Level Pub, Nightclub & Dining',
    tagline: 'Grand 1940 Art Deco landmark featuring subterranean clubbing, Cantonese banquets, and late 4am trade.',
    heroImage: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop', caption: '1940 Art Deco exterior on Pitt & Goulburn Streets', category: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop', caption: 'Civic Underground tuned basement sound room', category: 'nightlife' },
      { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop', caption: 'Ni Hao Bar golden-age Cantonese dining', category: 'dining' },
      { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop', caption: 'Heritage Saloon Bar social booths', category: 'interior' }
    ],
    aboutParagraphs: [
      'An iconic fixture of the Sydney CBD since 1940, the Civic Hotel stands as a monument to classic Art Deco architecture and modern Sydney nightlife. Occupying the high-visibility corner of Pitt and Goulburn Streets, the three-level destination connects daytime business lunches with late-night underground cultural experiences.',
      'Across three distinct levels, guests can gather in the bustling ground-floor Civic Saloon for cold local tap beers, dine upstairs in the neon-lit Cantonese dining room of Ni Hao Bar, or descend into Civic Underground—widely celebrated by sound engineers and electronic music fans as one of Australia’s finest acoustically tuned basements.',
      'With an invaluable 4:00am late license operating seven days a week, Civic Hotel remains an anchor of the southern CBD entertainment precinct.'
    ],
    foodAndDrink: {
      concept: 'Hong Kong Golden-Age Cantonese Banquets & Modern Pub Classics',
      signatureDishes: [
        'Steamed Dim Sum Baskets with Truffle Prawn Har Gao',
        'Crispy Pork Belly with Spicy Plum Glaze & Pickled Cucumber',
        'Civic Wagyu Cheeseburger with Beer-Battered Shoestring Fries',
        'Wok-Tossed Wagyu Beef Hor Fun with Chilli Crunch'
      ],
      signatureDrinks: [
        'Lychee Chilli Blossom Spritz',
        'Smoked Szechuan Old Fashioned',
        'Sydney Craft Draught on Tap (Balter, Stone & Wood, Reschs)'
      ],
      dietaryHighlights: 'Extensive vegan, vegetarian, and gluten-friendly dim sum and banquet options clearly marked.',
      operatingHoursNotes: 'Lunch available from 12pm; full dinner menu until 10pm; late-night bar bites available until 2:30am.'
    },
    experiences: [
      { title: 'Acoustic Sound Cellar', description: 'Civic Underground features a custom Allen & Heath sound array and LED ceiling for immersive club nights.', iconName: 'Music' },
      { title: 'Cantonese Speakeasy', description: 'Ni Hao Bar provides vibrant neon interiors, craft Asian cocktails, and late-night supper.', iconName: 'Utensils' },
      { title: '4am CBD License', description: 'One of the southern CBD’s rare venues operating 7 nights a week until 4am.', iconName: 'Clock' },
      { title: 'Live Sports Lounge', description: 'Ground floor public bar screening international cricket, Premier League, NRL, and AFL.', iconName: 'Tv' }
    ],
    whatsOn: [
      { title: 'Civic Underground Electronic Sessions', schedule: 'Friday & Saturday Nights: 10pm – 4am', description: 'Resident underground selectors and international touring DJs in Sydney’s most tuned basement.' },
      { title: 'Dim Sum & Highball Lunches', schedule: 'Monday – Friday: 12pm – 3pm', description: 'Express dumpling baskets and complimentary green tea or house highball for CBD workers.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Civic Underground',
        capacityTotal: 300,
        capacitySeated: 80,
        capacityStanding: 300,
        features: ['Custom Allen & Heath sound system', 'Programmable LED ceiling grid', 'Dedicated underground private bar', 'Private green room & DJ booth', 'Private restrooms & cloakroom'],
        eventTypes: ['Full Club Takeovers', 'Corporate End-of-Year Celebrations', 'Album Launches', 'Private 21st & 30th Birthdays']
      },
      {
        spaceName: 'Ni Hao Bar & Dining',
        capacityTotal: 120,
        capacitySeated: 80,
        capacityStanding: 120,
        features: ['Neon Hong Kong aesthetic', 'Cocktail bar station', 'Flexible seated banquet layouts', 'Integrated audio for private playlists'],
        eventTypes: ['Private Dining Banquets', 'Corporate Dinners', 'Engagement Parties', 'Cocktail Mixers']
      },
      {
        spaceName: 'Civic Saloon Section',
        capacityTotal: 150,
        capacitySeated: 60,
        capacityStanding: 150,
        features: ['Art Deco architectural windows', 'Direct access to main draught bar', 'High top communal tables', 'Live sports TV integration'],
        eventTypes: ['Casual After-Work Mixers', 'Sports Socials', 'Group Gatherings']
      }
    ],
    transit: {
      trainStation: 'Museum Station (2 min walk) & Central Station (5 min walk)',
      lightRailOrMetro: 'Capitol Square Light Rail (3 min walk) / Chinatown Light Rail',
      busRoutes: 'Castlereagh & Elizabeth Street trunk bus routes',
      parking: 'Secure Parking at World Square (opposite) with discounted evening rates'
    },
    faqs: [
      { question: 'What is the dress code for Civic Hotel?', answer: 'Neat casual attire is welcomed at all times. In Civic Underground club events after 10:00pm, festival fashion and elevated nightlife attire are encouraged. No dirty workwear or thongs after 8:00pm.' },
      { question: 'Do I need a ticket for Civic Underground?', answer: 'Friday and Saturday club nights are ticketed via Resident Advisor or door sales. The ground floor Civic Saloon and Ni Hao Bar are always free entry for walk-in patrons.' },
      { question: 'Are minors permitted in the venue?', answer: 'Minors are permitted in the Ni Hao Dining area during lunch and early dinner sittings when strictly accompanied by a parent or legal guardian. Civic Underground is strictly 18+ at all times.' },
      { question: 'Can we book a table for just drinks?', answer: 'Yes! Both Civic Saloon and Ni Hao Bar take drink reservations as well as walk-in guests. Large groups of 10+ are advised to book in advance.' }
    ],
    seo: {
      title: 'Civic Hotel Sydney | CBD Pub, Ni Hao Cantonese & Civic Underground',
      metaDescription: 'Discover Civic Hotel on Pitt St in Sydney CBD. 1940 Art Deco heritage pub, Cantonese banquets at Ni Hao Bar, tuned acoustic basement clubbing until 4am.',
      canonicalPath: '/venues/civic-hotel',
      h1: 'Civic Hotel Sydney CBD',
      schemaType: 'BarOrPub'
    },
    bookingUrl: 'https://civichotelsydney.com.au/make-a-booking/',
    externalWebsite: 'https://civichotelsydney.com.au/'
  },

  'the-oxford-hotel': {
    slug: 'the-oxford-hotel',
    venueName: 'The Oxford Hotel',
    locationSuburb: 'Darlinghurst',
    address: '134 Oxford St, Darlinghurst NSW 2010',
    phone: '(02) 8080 7080',
    email: 'info@theoxfordhotel.com.au',
    openingHours: 'Monday to Sunday: 10:00am – 4:00am',
    openingHoursWeekly: [
      { day: 'Monday to Sunday', hours: '10:00am – 4:00am' }
    ],
    venueType: 'Historic LGBTQIA+ Multi-Story Venue & Nightclub',
    tagline: 'Taylor Square’s 4-level cultural landmark hosting drag cabaret, cocktail terraces, and 4am basement clubbing.',
    heroImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop', caption: 'The Oxford Hotel facade commanding Taylor Square', category: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop', caption: 'Polo Lounge fireplace and cocktail bar on Level 3', category: 'interior' },
      { url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop', caption: 'Gingers cabaret performance stage on Level 1', category: 'nightlife' },
      { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop', caption: 'Streetfront Bistro dining overlooking Oxford Street', category: 'dining' }
    ],
    aboutParagraphs: [
      'Standing proud on Taylor Square for more than a century, The Oxford Hotel is one of Australia’s most historically significant hospitality institutions. As a pioneer of LGBTQIA+ community empowerment and late-night nightlife, it has stood at the vanguard of Sydney’s queer cultural movement since the 1970s.',
      'Today, The Oxford Hotel is ingeniously configured across four vibrant levels: the energetic ground-floor public bar with streetfront dining, Gingers performance room on Level 1 with full cabaret staging, the intimate top-floor Polo Lounge with open fireplace and skyline balcony, and the dark, bass-fuelled Oxford Underground club basement.',
      'Open until 4am seven days a week, it welcomes everyone with inclusive hospitality, weekly drag showcases, and community warmth.'
    ],
    foodAndDrink: {
      concept: 'Classic Australian Pub Fare, Gourmet Burgers & High-Energy Cocktails',
      signatureDishes: [
        'Oxford Famous Chicken Parmigiana with Double-Smoked Ham & Melted Mozzarella',
        '250g Black Angus Rump Steak with Herb Garlic Butter & Rustic Fries',
        'Crispy Halloumi & Saltbush Bites with Harissa Aioli',
        'Taylor Square Double Wagyu Smash Burger on Milk Bun'
      ],
      signatureDrinks: [
        'Taylor Square Passionfruit Chilli Margarita',
        'Polo Lounge Espresso Martini',
        'Cold Jugs of Carlton Draught & Local Craft Ales'
      ],
      dietaryHighlights: 'Plant-based schnitzels, gluten-free pizza bases, and fresh salads available daily.',
      operatingHoursNotes: 'Bistro open daily from 12pm to 10pm; late-night pizza and snack menu available until 3am.'
    },
    experiences: [
      { title: 'Taylor Square People Watching', description: 'Sunny open-air tables overlooking Oxford Street and Taylor Square.', iconName: 'Sun' },
      { title: 'Gingers Cabaret & Drag', description: 'Level 1 vintage performance room with velvet booths and pro audio-visual stage.', iconName: 'Sparkles' },
      { title: 'Polo Lounge Sanctuary', description: 'Cosy open fireplace, piano, craft cocktails, and leafy private balcony.', iconName: 'Wine' },
      { title: 'Underground Dancefloor', description: 'Bass-heavy basement operating until 4am with weekly queer house and techno resident DJs.', iconName: 'Moon' }
    ],
    whatsOn: [
      { title: 'Gingers Live Drag Revue', schedule: 'Friday & Saturday: 8:30pm & 10:30pm', description: 'Sydney’s top drag queens and live performers on the iconic Gingers stage.' },
      { title: 'Taylor Square Sunday Socials', schedule: 'Every Sunday: 2pm – 8pm', description: 'Live DJ sets, jugs of spritz, and relaxed community atmosphere across all levels.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Polo Lounge (Level 3)',
        capacityTotal: 100,
        capacitySeated: 70,
        capacityStanding: 100,
        features: ['Working open fireplace', 'Private balcony with Taylor Square views', 'Dedicated cocktail bar', 'Baby grand piano & private audio'],
        eventTypes: ['Boutique Weddings', 'Milestone 30th & 40th Birthdays', 'Private Corporate Dinners', 'Cocktail Receptions']
      },
      {
        spaceName: 'Gingers (Level 1)',
        capacityTotal: 140,
        capacitySeated: 100,
        capacityStanding: 140,
        features: ['Pro theatrical stage & spotlights', 'DJ booth & club sound', 'Dedicated cocktail bar', 'Plush booth seating'],
        eventTypes: ['Cabaret & Comedy Shows', 'Brand Showcases', 'Engagement Parties', 'Fundraiser Galas']
      },
      {
        spaceName: 'Oxford Underground (Basement)',
        capacityTotal: 220,
        capacitySeated: 30,
        capacityStanding: 220,
        features: ['Sunken dancefloor', 'Sub-bass sound rig & laser lighting', 'Dedicated bar & cloakroom', 'Private entry'],
        eventTypes: ['Club Nights', 'Private DJ Parties', 'Late-Night Afterparties']
      }
    ],
    transit: {
      trainStation: 'Museum Station (10 min walk) & Kings Cross Station (12 min walk)',
      busRoutes: 'Direct 333, 373, 396 bus stop right at Taylor Square outside venue',
      parking: 'Street parking along Flinders St and metered parking off Bourke St'
    },
    faqs: [
      { question: 'Is The Oxford Hotel strictly LGBTQIA+?', answer: 'The Oxford Hotel is a proud historic LGBTQIA+ venue that warmly welcomes all respectful community members, allies, and visitors to Sydney.' },
      { question: 'What time does the kitchen close?', answer: 'The main bistro kitchen serves until 10:00pm daily, with a late-night supper and pizza menu operating until 3:00am.' },
      { question: 'Can I book a function on the weekend?', answer: 'Yes, Polo Lounge and Gingers are available for private hire on Friday and Saturday nights with bespoke food and beverage packages.' }
    ],
    seo: {
      title: 'The Oxford Hotel Darlinghurst | Iconic Taylor Square Pub, Cabaret & Club',
      metaDescription: 'The Oxford Hotel on Taylor Square in Darlinghurst. Historic 4-level LGBTQIA+ pub with Gingers cabaret, Polo Lounge cocktail bar, and Oxford Underground.',
      canonicalPath: '/venues/the-oxford-hotel',
      h1: 'The Oxford Hotel Darlinghurst',
      schemaType: 'BarOrPub'
    },
    bookingUrl: 'https://www.theoxfordhotel.com.au',
    externalWebsite: 'https://www.theoxfordhotel.com.au'
  },

  'universal-sydney': {
    slug: 'universal-sydney',
    venueName: 'Universal Sydney',
    locationSuburb: 'Darlinghurst',
    address: '85-91 Oxford St, Darlinghurst NSW 2010',
    phone: '(02) 8080 7065',
    email: 'info@universalsydney.com.au',
    openingHours: 'Ground Floor: Mon–Sun 12pm–Late; Superclub: Fri–Sun 10pm–4am',
    openingHoursWeekly: [
      { day: 'Monday to Thursday', hours: '12:00pm – 3:00am' },
      { day: 'Friday & Saturday', hours: '12:00pm – 4:00am' },
      { day: 'Sunday', hours: '12:00pm – 3:00am' }
    ],
    venueType: 'Superclub, Drag Performance Hall & Cocktail Lounge',
    tagline: 'Sydney’s premier LGBTQIA+ entertainment venue with nightly live drag productions and dual-level 4am Superclub.',
    heroImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop', caption: 'High-energy Universal Superclub main dancefloor', category: 'nightlife' },
      { url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop', caption: 'Nightly drag spectaculars on the ground-floor stage', category: 'entertainment' },
      { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop', caption: 'Cocktail lounge with signature mosaic wings', category: 'interior' }
    ],
    aboutParagraphs: [
      'Universal Sydney is Australia’s flagship LGBTQIA+ entertainment destination, situated in the hallowed nightlife building formerly known as The Midnight Shift on Oxford Street. Since 2018, the venue has delivered a completely reimagined entertainment standard with state-of-the-art staging, sound, and lighting.',
      'On the ground floor, Universal presents sensational drag productions seven nights a week with free entry, pairing world-class choreography and high-energy performance with craft cocktails and a vibrant social atmosphere.',
      'Upstairs, the sprawling dual-level Universal Superclub welcomes top international and local DJs, featuring immersive laser shows, stadium-grade audio, and Sydney’s most electric weekend dancefloors.'
    ],
    foodAndDrink: {
      concept: 'Nightclub Grazing & Party Cocktails',
      signatureDishes: [
        'Universal Loaded Nachos with Guacamole, Pico de Gallo & Sour Cream',
        'Crispy Southern Fried Chicken Tenders with Chipotle Aioli',
        'Salt & Pepper Calamari with Lemon Garlic Aioli',
        'Gourmet Slider Trio (Cheeseburger, Pulled Pork, Crispy Halloumi)'
      ],
      signatureDrinks: [
        'Universal Glitter Cosmo',
        'Passionfruit Caipiroska',
        'Tequila Sunrise Jugs',
        'Chilled Draught Beers & Seltzers'
      ],
      dietaryHighlights: 'Fast, high-energy party food with vegan and vegetarian options available all night.',
      operatingHoursNotes: 'Food served from 5pm until late evening.'
    },
    experiences: [
      { title: '7-Night Drag Spectacular', description: 'Australia’s only venue featuring high-production drag shows every single night of the week.', iconName: 'Sparkles' },
      { title: 'Dual-Level Superclub', description: 'Top-tier clubbing upstairs with international guest DJs and immersive laser installations.', iconName: 'Music' },
      { title: 'Signature Photo Moments', description: 'Famous gold and pink mosaic wings and neon installations throughout.', iconName: 'Camera' },
      { title: 'Free Entry Ground Floor', description: 'Walk-ins are welcomed 7 nights a week with no cover charge on the ground floor.', iconName: 'Ticket' }
    ],
    whatsOn: [
      { title: 'Universal Live: Nightly Drag Revue', schedule: '7 Nights a Week from 8:30pm', description: 'Sydney’s best drag performers in rotating choreographed routines and interactive crowd moments.' },
      { title: 'Superclub Saturdays', schedule: 'Saturday Nights: 10pm – 4am', description: 'Multi-level queer anthems, circuit beats, and euphoric festival production upstairs.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Universal Superclub Exclusive',
        capacityTotal: 350,
        capacitySeated: 60,
        capacityStanding: 350,
        features: ['Dual-level mezzanine layout', 'Massive LED video walls & laser rigs', 'Dual express service bars', 'Full concert sound array'],
        eventTypes: ['Exclusive Brand Activations', 'Mardi Gras Production Parties', 'Corporate Bashes', 'Private Club Hire']
      },
      {
        spaceName: 'Cocktail Lounge Mezzanine',
        capacityTotal: 100,
        capacitySeated: 40,
        capacityStanding: 100,
        features: ['Elevated view over the ground stage', 'Dedicated private bar', 'Cocktail booth seating'],
        eventTypes: ['VIP Birthday Parties', 'Hens Nights', 'Celebratory Mixers']
      }
    ],
    transit: {
      trainStation: 'Museum Station (6 min walk) & Central Station (12 min walk)',
      busRoutes: 'Oxford Street buses (333, 373, 396) right outside',
      parking: 'Wilson Parking at St Margarets (Darlinghurst)'
    },
    faqs: [
      { question: 'Is there an entry fee for the drag shows?', answer: 'The ground floor drag shows are 100% free entry every single night of the week! Upstairs club nights on weekends may have a cover charge after 10:00pm.' },
      { question: 'Do you take bookings for birthdays or hens parties?', answer: 'Yes! We offer reserved VIP booth areas downstairs for groups wanting front-row seats to the drag shows with bottle service packages.' },
      { question: 'What time do the drag shows start?', answer: 'Shows begin at approximately 8:30pm with multiple high-energy sets continuing throughout the night until late.' }
    ],
    seo: {
      title: 'Universal Sydney | Oxford St Superclub & 7-Night Drag Venue',
      metaDescription: 'Universal Sydney on Oxford Street. Australia’s premier LGBTQIA+ nightclub featuring free nightly drag productions, dual-level 4am Superclub, and cocktails.',
      canonicalPath: '/venues/universal-sydney',
      h1: 'Universal Sydney Oxford Street',
      schemaType: 'NightClub'
    },
    bookingUrl: 'https://www.universalsydney.com.au',
    externalWebsite: 'https://www.universalsydney.com.au'
  },

  'imperial-hotel-erskineville': {
    slug: 'imperial-hotel-erskineville',
    venueName: 'The Imperial Erskineville',
    locationSuburb: 'Erskineville',
    address: '35 Erskineville Rd, Erskineville NSW 2043',
    phone: '(02) 8080 7070',
    email: 'info@imperialhotel.com.au',
    openingHours: 'Wednesday to Sunday: 12:00pm – Late; Mon–Tue: Closed',
    openingHoursWeekly: [
      { day: 'Wednesday & Thursday', hours: '4:00pm – 12:00am' },
      { day: 'Friday & Saturday', hours: '12:00pm – 3:00am' },
      { day: 'Sunday', hours: '12:00pm – 10:00pm' },
      { day: 'Monday & Tuesday', hours: 'Closed' }
    ],
    venueType: 'Cultural Icon, Drag Dining, Rooftop & Basement Club',
    tagline: 'The world-famous spiritual home of Priscilla, Queen of the Desert. Drag & Dine banquets and sun-drenched rooftop terrace.',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop', caption: 'Priscilla’s Drag & Dine banquet hall', category: 'dining' },
      { url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop', caption: 'Imperial Rooftop cocktail bar and pizza oven', category: 'bar' },
      { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop', caption: 'Subterranean dance basement at The Imperial', category: 'nightlife' }
    ],
    aboutParagraphs: [
      'The Imperial Hotel Erskineville is one of Australia’s most celebrated cultural monuments. Internationally immortalized in the opening scenes of "The Adventures of Priscilla, Queen of the Desert" (1994), this landmark has been the sacred home of Sydney queer culture, drag theatre, and joyous celebration for over 40 years.',
      'Sensitively revitalized under the stewardship of Universal Hotels, The Imperial spans multiple extraordinary spaces. Priscilla’s Restaurant delivers theatrical Drag & Dine experiences pairing multi-course Mediterranean feasts with world-class stage performances.',
      'Upstairs, The Imperial Rooftop serves Italian-inspired stone-baked pizzas, spritzes, and sunset views over Erskineville. Downstairs, the basement dancefloor pulsates with underground house and techno till the early hours.'
    ],
    foodAndDrink: {
      concept: 'Theatrical Mediterranean Banquets at Priscilla’s & Woodfired Pizza on the Rooftop',
      signatureDishes: [
        'Priscilla’s Feast: Slow-Roasted Lamb Shoulder with Chimichurri & Pomegranate',
        'Smoked Eggplant & Burrata Dip with Warm Za’atar Flatbread',
        'Imperial Rooftop Prosciutto & Truffle Mushroom Woodfired Pizza',
        'Salted Caramel & Dark Chocolate Torte'
      ],
      signatureDrinks: [
        'Priscilla’s Glamour Queen Spritz',
        'Watermelon & Basil Mezcalita',
        'Local Inner West Craft Taps (Grifter, Young Henrys)'
      ],
      dietaryHighlights: 'Dedicated 100% vegan Drag & Dine banquet menus and coeliac-safe options available for every sitting.',
      operatingHoursNotes: 'Drag & Dine sittings at 6:00pm & 8:30pm on Friday & Saturday; Sunday Long Lunch from 1pm.'
    },
    experiences: [
      { title: 'Priscilla’s Drag & Dine', description: 'Sydney’s most famous dinner theatre combining banquet feasts with theatrical drag acts.', iconName: 'Sparkles' },
      { title: 'The Imperial Rooftop', description: 'Airy open-air terrace with woodfired pizza, spritz jugs, and sunset views.', iconName: 'Sun' },
      { title: 'Basement Clubbing', description: 'Late-night queer dance party sanctuary in the subterranean vaults.', iconName: 'Moon' },
      { title: 'Community Drag Trivia', description: 'Weekly trivia and bingo nights bringing Erskineville locals together.', iconName: 'Award' }
    ],
    whatsOn: [
      { title: 'Priscilla’s Drag & Dine Show', schedule: 'Friday & Saturday: 6pm & 8:30pm Sittings', description: 'Full Mediterranean banquet accompanied by Australia’s most theatrical drag production.' },
      { title: 'Sunday Drag Bingo on the Rooftop', schedule: 'Sundays from 3:00pm', description: 'Hilarious games, prizes, spritz specials, and pizza in the sunshine.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Priscilla’s Dining Room',
        capacityTotal: 250,
        capacitySeated: 180,
        capacityStanding: 250,
        features: ['Fully equipped theatrical stage & lighting', 'Custom dining banquet furniture', 'Integrated AV for speeches & presentations', 'Dedicated cocktail bar'],
        eventTypes: ['Drag Dinners', 'Corporate Awards Nights', 'Weddings & Receptions', 'Milestone Celebrations']
      },
      {
        spaceName: 'The Imperial Rooftop',
        capacityTotal: 160,
        capacitySeated: 90,
        capacityStanding: 160,
        features: ['Retractable weather awnings', 'Dedicated woodfired pizza bar', 'Indoor-outdoor cocktail deck', 'Private sound zone'],
        eventTypes: ['Sunset Cocktail Receptions', 'Engagement Parties', 'Christmas Bashes', 'Summer Mixers']
      },
      {
        spaceName: 'The Basement Vault',
        capacityTotal: 200,
        capacitySeated: 20,
        capacityStanding: 200,
        features: ['Subterranean concrete sound vault', 'Private basement bar', 'DJ booth & club sound'],
        eventTypes: ['Private Club Events', 'Underground Dance Parties', 'Afterparties']
      }
    ],
    transit: {
      trainStation: 'Erskineville Station (3 min walk) & Newtown Station (8 min walk)',
      busRoutes: '355 bus route on Erskineville Road',
      parking: 'Street parking in Erskineville village and nearby park'
    },
    faqs: [
      { question: 'How do I book Drag & Dine at Priscilla’s?', answer: 'Drag & Dine bookings are made in advance via our website. Sittings are available on Friday and Saturday evenings (6:00pm and 8:30pm) and Sunday lunch.' },
      { question: 'Is the rooftop covered if it rains?', answer: 'Yes! The Imperial Rooftop features high-tech retractable weather awnings and heated indoor-outdoor seating to ensure celebrations continue rain or shine.' },
      { question: 'Can we hold our wedding at The Imperial?', answer: 'Absolutely. The Imperial is one of Sydney’s most beloved LGBTQIA+ and inclusive wedding destinations, offering full-day ceremony, dinner, and rooftop party packages.' }
    ],
    seo: {
      title: 'The Imperial Erskineville | Priscilla Drag & Dine, Rooftop & Club',
      metaDescription: 'The Imperial Hotel in Erskineville. World-famous home of Priscilla Queen of the Desert. Drag & Dine banquets, woodfired rooftop pizza, and late-night dancing.',
      canonicalPath: '/venues/imperial-hotel-erskineville',
      h1: 'The Imperial Hotel Erskineville',
      schemaType: 'BarOrPub'
    },
    bookingUrl: 'https://imperialhotel.com.au/drag-and-dine/',
    externalWebsite: 'https://imperialhotel.com.au/'
  },

  'crown-hotel-surry-hills': {
    slug: 'crown-hotel-surry-hills',
    venueName: 'Crown Hotel Surry Hills',
    locationSuburb: 'Surry Hills',
    address: '587 Crown St, Surry Hills NSW 2010',
    phone: '(02) 8080 7050',
    email: 'info@crownhotel.com.au',
    openingHours: 'Monday to Saturday: 10:00am – 12:00am; Sunday: 10:00am – 10:00pm',
    openingHoursWeekly: [
      { day: 'Monday to Saturday', hours: '10:00am – 12:00am' },
      { day: 'Sunday', hours: '10:00am – 10:00pm' }
    ],
    venueType: 'Heritage Pub, Boutique Hotel & Sapphire Lounge',
    tagline: 'Corner pub heritage on iconic Crown Street featuring boutique hotel accommodation and the private Sapphire Lounge.',
    heroImage: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1200&auto=format&fit=crop', caption: 'Heritage facade on Crown & Cleveland Streets', category: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop', caption: 'Boutique Queen guest room on upper floor', category: 'accommodation' },
      { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop', caption: 'Sapphire Lounge private cocktail bar', category: 'functions' }
    ],
    aboutParagraphs: [
      'Commanding the prominent corner of Crown and Cleveland Streets, the Crown Hotel is a beloved Surry Hills neighbourhood anchor combining historic pub warmth with contemporary boutique hospitality.',
      'On the ground floor, guests enjoy an authentic Sydney sports bar atmosphere, sunny streetfront seating for afternoon beers, and bistro counter classics. Upstairs, the private Sapphire Lounge provides a glamorous private cocktail sanctuary for milestone functions.',
      'The upper levels house thoughtfully refurbished boutique accommodation, offering contemporary comfort within walking distance of Central Station, the SCG, and Allianz Stadium.'
    ],
    foodAndDrink: {
      concept: 'Elevated Surry Hills Pub Bistro Classics & Craft Beers',
      signatureDishes: [
        'Crown Signature Hand-Crumbed Chicken Parmigiana with Sugo & Provolone',
        'Slow-Braised Lamb Shank with Creamy Mash & Gremolata',
        'Crispy Barramundi Fillet with Lemon Caper Butter & Kipfler Potatoes',
        'Angus Beef Burger with Smoked Cheddar, Bacon Jam & Pickles'
      ],
      signatureDrinks: [
        'Crown Street Spicy Margarita',
        'Surry Hills Negroni',
        'Rotational NSW Craft Beer Taps'
      ],
      dietaryHighlights: 'Gluten-free parmigianas, vegan burgers, and daily dietary specials.',
      operatingHoursNotes: 'Bistro open daily 12pm–3pm and 5pm–9:30pm.'
    },
    experiences: [
      { title: 'Live Sports Hub', description: 'Massive HD screens broadcasting NRL, AFL, Premier League, and UFC events.', iconName: 'Tv' },
      { title: 'Boutique Hotel Stays', description: 'Refurbished rooms ideal for sporting weekends and business travelers.', iconName: 'Bed' },
      { title: 'Sapphire Lounge Hire', description: 'Exclusive level 1 private cocktail space with private bar and lounge booths.', iconName: 'Sparkles' },
      { title: 'Crown Street Verandah', description: 'Streetfront tables for relaxed afternoon drinks and people-watching.', iconName: 'Sun' }
    ],
    whatsOn: [
      { title: 'UFC Live & Loud', schedule: 'Major Sunday Pay-Per-View Cards', description: 'Full audio broadcast across all screens with pub schnitzel specials.' },
      { title: 'SCG Matchday Pre-Drinks', schedule: 'Matchdays during AFL & NRL seasons', description: '10-minute walk to the Sydney Cricket Ground with express beer service.' }
    ],
    functionSpaces: [
      {
        spaceName: 'The Sapphire Lounge',
        capacityTotal: 100,
        capacitySeated: 50,
        capacityStanding: 100,
        features: ['Dedicated marble cocktail bar', 'Plush sapphire velvet booth seating', 'Private sound system with Bluetooth connectivity', 'Crown Street balcony access'],
        eventTypes: ['Milestone Birthdays (21st, 30th, 40th)', 'Engagement Parties', 'Corporate Socials', 'Private Cocktail Receptions']
      }
    ],
    accommodation: {
      propertyName: 'Crown Hotel Boutique Stays',
      roomTypes: ['Standard Queen Room', 'Deluxe Queen with En-Suite', 'Twin Share Room'],
      amenities: ['En-Suite Bathrooms', 'Individual Air Conditioning', 'High-Speed Wi-Fi', 'Downstairs Bistro & Bar', 'Smart TVs with Streaming'],
      rateHint: 'From $175 / night',
      bookingUrl: 'https://crownhotel.com.au/stay/',
      proximityNotes: '10 min walk to Central Station • 10 min walk to SCG & Allianz Stadium'
    },
    transit: {
      trainStation: 'Central Station (10 min walk)',
      lightRailOrMetro: 'Surry Hills Light Rail Stop on Devonshire St (6 min walk)',
      busRoutes: 'Crown & Cleveland Street bus routes right outside',
      parking: 'Street parking along Cleveland St and residential surrounding streets'
    },
    faqs: [
      { question: 'How close is Crown Hotel to the Sydney Cricket Ground (SCG)?', answer: 'Crown Hotel is an easy 10-minute walk down Cleveland Street to the SCG and Allianz Stadium, making it Sydney’s favourite pre- and post-match watering hole.' },
      { question: 'Are the hotel rooms noisy above the pub?', answer: 'All guest rooms on the upper floors feature commercial-grade double glazing and sound insulation for a quiet, restful stay.' },
      { question: 'Is breakfast included with the accommodation?', answer: 'While breakfast is not included in room rates, Surry Hills’ world-famous specialty cafes are located immediately outside our front door on Crown Street.' }
    ],
    seo: {
      title: 'Crown Hotel Surry Hills | Heritage Pub, Accommodation & Sapphire Lounge',
      metaDescription: 'Crown Hotel on Crown St in Surry Hills. Classic corner pub near SCG and Central Station, boutique guest accommodation, and the private Sapphire Lounge for functions.',
      canonicalPath: '/venues/crown-hotel-surry-hills',
      h1: 'Crown Hotel Surry Hills',
      schemaType: 'Hotel'
    },
    bookingUrl: 'https://crownhotel.com.au/make-a-booking/',
    externalWebsite: 'https://crownhotel.com.au/'
  },

  'the-tudor-hotel': {
    slug: 'the-tudor-hotel',
    venueName: 'The Tudor Hotel',
    locationSuburb: 'Redfern',
    address: '90 Pitt St, Redfern NSW 2016',
    phone: '(02) 8080 7040',
    email: 'info@tudorhotel.com.au',
    openingHours: 'Monday to Saturday: 10:00am – 12:00am; Sunday: 10:00am – 10:00pm',
    openingHoursWeekly: [
      { day: 'Monday to Saturday', hours: '10:00am – 12:00am' },
      { day: 'Sunday', hours: '10:00am – 10:00pm' }
    ],
    venueType: 'Classic Redfern Community Pub & Terrace Bar',
    tagline: 'Authentic Redfern local corner pub featuring craft beers, community trivia, meat raffles, and sunny upstairs terrace.',
    heroImage: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1200&auto=format&fit=crop', caption: 'Historic Tudor Hotel corner in leafy Redfern', category: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop', caption: 'Upstairs terrace cocktail bar', category: 'bar' },
      { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop', caption: 'Bistro counter parmigiana and steaks', category: 'dining' }
    ],
    aboutParagraphs: [
      'The Tudor Hotel is the true heart of Redfern. An authentic inner-city neighbourhood local, it provides a warm, unpretentious meeting ground where long-time locals, young creatives, and families gather together.',
      'From cold craft draught beers on tap to weekly meat raffles and Wednesday night trivia, The Tudor celebrates everything that makes Australian pub culture enduring and beloved.',
      'Upstairs, the sun-dappled terrace bar provides an airy escape for afternoon spritzes and private milestone gatherings.'
    ],
    foodAndDrink: {
      concept: 'Hearty Community Pub Classics & Cold Craft Taps',
      signatureDishes: [
        'Tudor Famous Chicken Parmigiana with Chips & Slaw',
        '250g Grain-Fed Sirloin with Peppercorn Sauce',
        'Fish & Chips with Crispy Ale Batter & Tartare',
        'Salt & Pepper Squid Basket'
      ],
      signatureDrinks: [
        'Tudor Draught Lager on Tap',
        'Reschs & Balter Hazy IPA',
        'Aperol Spritz Jugs'
      ],
      dietaryHighlights: 'Vegetarian burgers, gluten-free steaks, and kids menu available.',
      operatingHoursNotes: 'Lunch & dinner served 7 days.'
    },
    experiences: [
      { title: 'Wednesday Pub Trivia', description: 'Redfern’s most competitive weekly pub quiz with jackpot cash prizes.', iconName: 'Award' },
      { title: 'Friday Meat Raffles', description: 'Traditional community meat tray raffles supporting local sports clubs.', iconName: 'Sparkles' },
      { title: 'Upstairs Terrace', description: 'Sunny open-air balcony bar for private events and weekend pints.', iconName: 'Sun' }
    ],
    whatsOn: [
      { title: 'Redfern Wednesday Trivia', schedule: 'Wednesdays: 7:00pm', description: 'Free entry trivia with beer prizes and parmigiana specials.' },
      { title: 'Friday Night Raffle & Live Acoustic', schedule: 'Fridays: 6:00pm', description: 'Community raffle and local acoustic singers.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Upstairs Terrace & Lounge',
        capacityTotal: 80,
        capacitySeated: 40,
        capacityStanding: 80,
        features: ['Dedicated private bar', 'Open-air terrace balcony', 'Independent sound system'],
        eventTypes: ['Birthdays', 'Casual Engagements', 'Corporate Socials']
      }
    ],
    transit: {
      trainStation: 'Redfern Station (4 min walk)',
      busRoutes: 'Pitt St & Chalmers St bus routes',
      parking: 'Street parking on Pitt Street'
    },
    faqs: [
      { question: 'Is The Tudor dog-friendly?', answer: 'Yes! Well-behaved dogs on leashes are warmly welcomed in our ground floor bar and outdoor seating.' },
      { question: 'Do I need to book for Wednesday trivia?', answer: 'Yes, table reservations are strongly recommended as trivia consistently books out by 6:30pm.' }
    ],
    seo: {
      title: 'The Tudor Hotel Redfern | Classic Community Pub & Upstairs Terrace',
      metaDescription: 'The Tudor Hotel on Pitt St in Redfern. Authentic local pub with cold craft beers, Wednesday pub trivia, Friday raffles, and private terrace bar hire.',
      canonicalPath: '/venues/the-tudor-hotel',
      h1: 'The Tudor Hotel Redfern',
      schemaType: 'BarOrPub'
    },
    bookingUrl: 'https://tudorhotel.com.au',
    externalWebsite: 'https://tudorhotel.com.au'
  },

  'the-harold': {
    slug: 'the-harold',
    venueName: 'The Harold',
    locationSuburb: 'Forest Lodge',
    address: '70 Ross St, Forest Lodge NSW 2037',
    phone: '(02) 8080 7060',
    email: 'info@theharold.com.au',
    openingHours: 'Monday to Sunday: 11:30am – 11:00pm',
    openingHoursWeekly: [
      { day: 'Monday to Sunday', hours: '11:30am – 11:00pm' }
    ],
    venueType: 'Heritage Inner-West Gastro Pub & Rooftop Bar',
    tagline: 'Leafy Forest Lodge corner pub opposite the historic Harold Park Paceway, famous for Sunday roasts and rooftop garden.',
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop', caption: 'The Harold on Ross St opposite Harold Park', category: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop', caption: 'Rooftop cocktail terrace', category: 'bar' }
    ],
    aboutParagraphs: [
      'Overlooking the historic Harold Park grounds on Ross Street in Forest Lodge, The Harold is a beloved Inner West sanctuary. Formerly known as the Harold Park Hotel, it blends traditional pub hospitality with a modern bistro and sun-soaked rooftop terrace.',
      'A true neighbourhood cornerstone for Glebe and Forest Lodge residents, university academics, and young families, it delivers exceptional food, chilled natural wines, and craft beer in a warm, dog-friendly environment.'
    ],
    foodAndDrink: {
      concept: 'Elevated Gastro Pub Cooking & Signature Sunday Roasts',
      signatureDishes: [
        'Traditional Sunday Roast Sirloin with Yorkshire Pudding & Bone Marrow Gravy',
        'Crumbed Pork Cutlet with Apple Slaw & Mustard Cream',
        'Wood-Roasted Beetroot & Goat’s Curd Salad',
        'The Harold Double Wagyu Cheeseburger'
      ],
      signatureDrinks: [
        'Harold Park Spritz',
        'Local Inner West Craft Draughts',
        'Natural & Organic Australian Wines'
      ],
      dietaryHighlights: 'Vegan roast option on Sundays, extensive gluten-free bistro menu.',
      operatingHoursNotes: 'Lunch 12pm–3pm; Dinner 5pm–9:30pm daily.'
    },
    experiences: [
      { title: 'Sunday Roast Ritual', description: 'Famous Sunday roasts served with Yorkshire puddings from 12pm until sold out.', iconName: 'Utensils' },
      { title: 'Rooftop Garden Bar', description: 'Open-air cocktail terrace overlooking Ross Street greenery.', iconName: 'Sun' },
      { title: 'Dog Friendly Local', description: 'Four-legged companions welcome in the outdoor courtyard.', iconName: 'Heart' }
    ],
    whatsOn: [
      { title: 'Sunday Roast & Acoustic Sounds', schedule: 'Sundays from 12:00pm', description: 'Slow-cooked Sunday roasts and live acoustic afternoon sessions.' }
    ],
    functionSpaces: [
      {
        spaceName: 'The Harold Rooftop',
        capacityTotal: 120,
        capacitySeated: 60,
        capacityStanding: 120,
        features: ['Dedicated outdoor bar', 'Weather awnings', 'Views over Harold Park'],
        eventTypes: ['Engagement Parties', 'Milestone Birthdays', 'Corporate Mixers']
      }
    ],
    transit: {
      trainStation: 'Jubilee Park Light Rail (5 min walk)',
      busRoutes: '433, 470 bus routes along Ross Street and Minogue Crescent',
      parking: 'Plentiful street parking on Ross St and surrounding avenues'
    },
    faqs: [
      { question: 'Do I need to pre-order the Sunday roast?', answer: 'We recommend booking a lunch table as the Sunday roasts frequently sell out by 2:30pm.' }
    ],
    seo: {
      title: 'The Harold Forest Lodge | Historic Gastro Pub & Rooftop Bar near Glebe',
      metaDescription: 'The Harold on Ross St in Forest Lodge. Iconic Inner West gastro pub with legendary Sunday roasts, craft beers, dog-friendly courtyard, and rooftop terrace.',
      canonicalPath: '/venues/the-harold',
      h1: 'The Harold Forest Lodge',
      schemaType: 'BarOrPub'
    },
    bookingUrl: 'https://theharold.com.au',
    externalWebsite: 'https://theharold.com.au'
  },

  'riverview-hotel-tempe': {
    slug: 'riverview-hotel-tempe',
    venueName: 'Riverview Hotel',
    locationSuburb: 'Tempe',
    address: '960 Princes Hwy, Tempe NSW 2044',
    phone: '(02) 8080 7030',
    email: 'info@riverviewhoteltempe.com.au',
    openingHours: 'Monday to Sunday: 10:00am – 12:00am',
    openingHoursWeekly: [
      { day: 'Monday to Sunday', hours: '10:00am – 12:00am' }
    ],
    venueType: 'Waterfront Pub, Stix Hellenic Taverna & Boutique Stays',
    tagline: 'Cooks River landmark featuring authentic Greek charcoal dining at Stix Hellenic, large beer garden, and boutique rooms near the airport.',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop', caption: 'Stix Hellenic charcoal dining at Riverview Hotel', category: 'dining' },
      { url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop', caption: 'Refurbished guest room near Sydney Airport', category: 'accommodation' },
      { url: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1200&auto=format&fit=crop', caption: 'Cooks River frontage beer garden', category: 'exterior' }
    ],
    aboutParagraphs: [
      'Situated along the scenic banks of the Cooks River in Tempe, the Riverview Hotel is an expansive multi-dimensional hospitality destination. Newly refurbished, it seamlessly blends authentic Mediterranean dining with modern boutique accommodation.',
      'The venue is home to Stix Hellenic Taverna, where charcoal-grilled meats, fresh seafood, and warm Greek hospitality take center stage in a sunlit dining hall and riverfront beer garden.',
      'For interstate guests and travelers, the hotel offers contemporary boutique accommodation just seven minutes from Sydney Airport and minutes from the new Sydenham Metro transit line.'
    ],
    foodAndDrink: {
      concept: 'Authentic Greek Charcoal Taverna Dining at Stix Hellenic',
      signatureDishes: [
        'Slow-Roasted Lamb Souvla over Ironbark Coals',
        'Charred Octopus with Lemon, Oregano & Extra Virgin Olive Oil',
        'Saganaki Cheese Flambé with Honey & Sesame',
        'Greek Lemon Potatoes & Village Salad'
      ],
      signatureDrinks: [
        'Santorini Spritz with Mastiha & Prosecco',
        'Mythos Greek Beer & Local Australian Draughts',
        'Greek Regional Red & White Wines'
      ],
      dietaryHighlights: 'Extensive gluten-free and Mediterranean vegetarian dishes.',
      operatingHoursNotes: 'Lunch & dinner served Wednesday to Sunday.'
    },
    experiences: [
      { title: 'Greek Charcoal Feasts', description: 'Authentic souvla and meze sharing banquets at Stix Hellenic.', iconName: 'Utensils' },
      { title: 'Riverfront Beer Garden', description: 'Expansive outdoor seating along the Cooks River parklands.', iconName: 'Sun' },
      { title: 'Airport Proximity Stays', description: 'Refurbished rooms just 7 minutes from Sydney International Airport.', iconName: 'Bed' }
    ],
    whatsOn: [
      { title: 'Greek Sunday Feast', schedule: 'Sundays from 12:00pm', description: 'Whole lamb on the spit, live Greek music, and family feast banquets.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Stix Hellenic Dining Hall',
        capacityTotal: 150,
        capacitySeated: 120,
        capacityStanding: 150,
        features: ['Charcoal rotisserie view', 'Private dining section', 'High ceilings & natural light'],
        eventTypes: ['Christenings & Family Milestones', 'Corporate Dinners', 'Engagement Feasts']
      }
    ],
    accommodation: {
      propertyName: 'Riverview Hotel Waterfront Stays',
      roomTypes: ['Refurbished King Room', 'Deluxe Double Room', 'Balcony Room'],
      amenities: ['Riverfront Proximity', 'Stix Hellenic Taverna On-Site', 'Smart TV & Fast Wi-Fi', 'Rapid Metro Transit to CBD'],
      rateHint: 'From $160 / night',
      bookingUrl: 'https://riverviewhoteltempe.com.au/',
      proximityNotes: '7 min drive to Sydney Airport • 2 min walk to Sydenham Metro'
    },
    transit: {
      trainStation: 'Sydenham Metro & Train Station (8 min walk) / Tempe Station (10 min walk)',
      busRoutes: 'Princes Highway buses right at doorstep',
      parking: 'Complimentary private guest parking lot on site'
    },
    faqs: [
      { question: 'How close is Riverview Hotel to Sydney Airport?', answer: 'Riverview Hotel is situated just 7 minutes (4.5 km) from Sydney Domestic and International Terminals by taxi or rideshare.' },
      { question: 'Is parking free for dining and hotel guests?', answer: 'Yes! Riverview Hotel offers free dedicated on-site parking for all patrons and staying guests.' }
    ],
    seo: {
      title: 'Riverview Hotel Tempe | Greek Taverna Dining & Airport Accommodation',
      metaDescription: 'Riverview Hotel in Tempe on the Cooks River. Stix Hellenic Greek charcoal dining, riverfront beer garden, free parking, and boutique rooms near Sydney Airport.',
      canonicalPath: '/venues/riverview-hotel-tempe',
      h1: 'Riverview Hotel Tempe',
      schemaType: 'Hotel'
    },
    bookingUrl: 'https://riverviewhoteltempe.com.au/',
    externalWebsite: 'https://riverviewhoteltempe.com.au/'
  },

  'the-riley-hotel': {
    slug: 'the-riley-hotel',
    venueName: 'The Riley Hotel',
    locationSuburb: 'Darlinghurst',
    address: '273 Oxford St, Darlinghurst NSW 2010',
    phone: '(02) 8080 7075',
    email: 'info@therileyhotel.com.au',
    openingHours: 'Monday to Sunday: 10:00am – 3:00am',
    openingHoursWeekly: [
      { day: 'Monday to Sunday', hours: '10:00am – 3:00am' }
    ],
    venueType: 'Boutique Corner Bar, Bistro & Late Night Lounge',
    tagline: 'Chic Oxford Street corner venue featuring cocktail lounges, balcony dining, and late-night weekend trade.',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop', caption: 'The Riley interior cocktail lounge', category: 'interior' }
    ],
    aboutParagraphs: [
      'Situated on upper Oxford Street in Darlinghurst, The Riley Hotel brings stylish hospitality to the vibrant east side. Known for its sophisticated cocktail program, warm atmosphere, and open-air balcony views over Oxford Street, it serves as a favourite rendezvous point for locals and visitors.'
    ],
    foodAndDrink: {
      concept: 'Modern Australian Bistro Classics & Craft Cocktails',
      signatureDishes: ['Truffle Parmesan Fries', 'Gourmet Wagyu Slider Trio', 'Pan-Seared Salmon with Asparagus'],
      signatureDrinks: ['Riley Passionfruit Spritz', 'Smoked Old Fashioned'],
      dietaryHighlights: 'Gluten-free and vegetarian options available.',
      operatingHoursNotes: 'Bistro open daily until late.'
    },
    experiences: [
      { title: 'Oxford Street Balcony', description: 'Sunny balcony seating overlooking Oxford Street nightlife.', iconName: 'Sun' },
      { title: 'Cocktail Hour', description: 'Signature cocktails and daily happy hours from 4pm to 6pm.', iconName: 'Wine' }
    ],
    whatsOn: [
      { title: 'Weekend DJ Sessions', schedule: 'Friday & Saturday from 8pm', description: 'Resident DJs spinning house and disco grooves.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Level 1 Cocktail Lounge',
        capacityTotal: 100,
        capacitySeated: 50,
        capacityStanding: 100,
        features: ['Private bar', 'Balcony access', 'Sound integration'],
        eventTypes: ['Birthdays', 'Corporate Mixers', 'Private Parties']
      }
    ],
    transit: {
      trainStation: 'Kings Cross Station (8 min walk)',
      busRoutes: '333, 373 bus stop directly outside',
      parking: 'Street parking along surrounding streets'
    },
    faqs: [
      { question: 'Do you take table bookings?', answer: 'Yes, table reservations are available online or by calling the venue directly.' }
    ],
    seo: {
      title: 'The Riley Hotel Darlinghurst | Oxford St Bar, Bistro & Functions',
      metaDescription: 'The Riley Hotel on Oxford St in Darlinghurst. Modern corner pub with cocktail balcony, gourmet bistro dining, and private function spaces.',
      canonicalPath: '/venues/the-riley-hotel',
      h1: 'The Riley Hotel Darlinghurst',
      schemaType: 'BarOrPub'
    },
    bookingUrl: 'https://therileyhotel.com.au',
    externalWebsite: 'https://therileyhotel.com.au'
  },

  'the-lord-roberts-hotel': {
    slug: 'the-lord-roberts-hotel',
    venueName: 'The Lord Roberts Hotel',
    locationSuburb: 'Darlinghurst',
    address: '64 Stanley St, Darlinghurst NSW 2010',
    phone: '(02) 8080 7055',
    email: 'info@lordrobertshotel.com.au',
    openingHours: 'Monday to Saturday: 11:00am – 12:00am; Sunday: 12:00pm – 10:00pm',
    openingHoursWeekly: [
      { day: 'Monday to Saturday', hours: '11:00am – 12:00am' },
      { day: 'Sunday', hours: '12:00pm – 10:00pm' }
    ],
    venueType: 'Heritage East Sydney Corner Pub & Rooftop Bar',
    tagline: 'Historic 1800s pub tucked into culinary Stanley Street featuring Bob’s Lounge rooftop and leafy beer garden.',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop', caption: 'Bob’s Lounge rooftop cocktail terrace', category: 'bar' }
    ],
    aboutParagraphs: [
      'Dating back to the late 19th century, The Lord Roberts Hotel (affectionately known as "The Nobby") is an East Sydney treasure on Stanley Street. Blending heritage timber architecture with the lively Bob’s Lounge rooftop, it offers cold craft beers, hearty bistro steaks, and an intimate neighbourhood feel just moments from the Sydney CBD.'
    ],
    foodAndDrink: {
      concept: 'Heritage Pub Counter Feasts & Rooftop Cocktails',
      signatureDishes: ['250g Black Angus Rump with Herb Butter', 'Handmade Beef & Guinness Pie', 'Classic Chicken Schnitzel'],
      signatureDrinks: ['Lord Roberts Draught Lager', 'Aperol Spritz', 'Australian Red Wines'],
      dietaryHighlights: 'Gluten-free and vegetarian options available.',
      operatingHoursNotes: 'Lunch & dinner served 7 days.'
    },
    experiences: [
      { title: 'Bob’s Lounge Rooftop', description: 'Open-air cocktail terrace overlooking historic East Sydney terraces.', iconName: 'Sun' },
      { title: 'Stanley Street Dining Corridor', description: 'Nestled within Sydney’s historic Little Italy dining precinct.', iconName: 'MapPin' }
    ],
    whatsOn: [
      { title: 'Stanley Street Happy Hour', schedule: 'Monday – Friday: 4pm – 6pm', description: 'Draught beer and house wine specials.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Bob’s Lounge Rooftop',
        capacityTotal: 70,
        capacitySeated: 40,
        capacityStanding: 70,
        features: ['Rooftop cocktail bar', 'Terrace skyline view', 'Private audio'],
        eventTypes: ['Intimate Birthdays', 'Corporate Celebrations', 'Engagement Drinks']
      }
    ],
    transit: {
      trainStation: 'Museum Station (6 min walk)',
      busRoutes: 'College St & William St bus routes',
      parking: 'Street parking along Stanley St and Riley St'
    },
    faqs: [
      { question: 'Is the rooftop covered?', answer: 'Bob’s Lounge rooftop has covered sections with umbrellas and heaters for cooler evenings.' }
    ],
    seo: {
      title: 'The Lord Roberts Hotel East Sydney | Historic Pub & Rooftop Bar on Stanley St',
      metaDescription: 'The Lord Roberts Hotel on Stanley St in East Sydney / Darlinghurst. Historic 19th-century corner pub with Bob’s Lounge rooftop bar and hearty bistro dining.',
      canonicalPath: '/venues/the-lord-roberts-hotel',
      h1: 'The Lord Roberts Hotel East Sydney',
      schemaType: 'BarOrPub'
    },
    bookingUrl: 'https://lordrobertshotel.com.au',
    externalWebsite: 'https://lordrobertshotel.com.au'
  },

  'the-evening-star': {
    slug: 'the-evening-star',
    venueName: 'The Evening Star',
    locationSuburb: 'Surry Hills',
    address: '360 Elizabeth St, Surry Hills NSW 2010',
    phone: '(02) 8080 7020',
    email: 'info@eveningstarhotel.com.au',
    openingHours: 'Monday to Sunday: 10:00am – 4:00am',
    openingHoursWeekly: [
      { day: 'Monday to Sunday', hours: '10:00am – 4:00am' }
    ],
    venueType: 'Surry Hills Landmark Pub, Sports Bar & Late Night',
    tagline: 'Directly opposite Central Station’s eastern portal, featuring 4am late license, sports hub, and streetfront terrace.',
    heroImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop', caption: 'The Evening Star exterior on Elizabeth St', category: 'exterior' }
    ],
    aboutParagraphs: [
      'Standing proudly opposite Central Station on Elizabeth Street, The Evening Star is a landmark Surry Hills destination. Renowned for its late-night 4:00am license, high-definition sports screens, and hearty pub bistro menu, it connects commuters, sports enthusiasts, and night owls with genuine Sydney hospitality.'
    ],
    foodAndDrink: {
      concept: 'High-Energy Sports Pub Fare & Cold Draught Taps',
      signatureDishes: ['Chicken Parmigiana', 'Crispy Wings with Buffalo Sauce', 'Bacon & Cheese Smash Burger'],
      signatureDrinks: ['Ice-Cold Reschs Draught', 'Great Northern Super Crisp', 'Jug Specials'],
      dietaryHighlights: 'Vegetarian and gluten-friendly options available.',
      operatingHoursNotes: 'Kitchen open until late daily.'
    },
    experiences: [
      { title: 'Central Station Convenience', description: 'Steps from Central Station train and light rail platforms.', iconName: 'Train' },
      { title: '4am Late Trading', description: 'Open until 4:00am seven days a week for night-shift and late-night patrons.', iconName: 'Clock' }
    ],
    whatsOn: [
      { title: 'Live NRL & AFL Matches', schedule: 'Weekly live broadcasts', description: 'Broadcast live and loud across multiple screens.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Sports Bar Section',
        capacityTotal: 60,
        capacitySeated: 30,
        capacityStanding: 60,
        features: ['Dedicated screens', 'High bar tables', 'Direct bar access'],
        eventTypes: ['Sports Gatherings', 'Casual Farewell Drinks']
      }
    ],
    transit: {
      trainStation: 'Central Station (30 seconds walk)',
      lightRailOrMetro: 'Central Chalmers St Light Rail Stop (1 min walk)',
      busRoutes: 'Elizabeth Street bus corridor',
      parking: 'Surry Hills metered street parking'
    },
    faqs: [
      { question: 'What time does the kitchen open?', answer: 'Lunch is served from 11:30am, with dinner and snacks available until late.' }
    ],
    seo: {
      title: 'The Evening Star Surry Hills | Central Station Pub, Sports Bar & 4am Late License',
      metaDescription: 'The Evening Star on Elizabeth St opposite Central Station in Surry Hills. Landmark Sydney sports pub with 4am late license, draught beer, and hearty bistro classics.',
      canonicalPath: '/venues/the-evening-star',
      h1: 'The Evening Star Surry Hills',
      schemaType: 'BarOrPub'
    },
    bookingUrl: 'https://eveningstarhotel.com.au',
    externalWebsite: 'https://eveningstarhotel.com.au'
  },

  'palace-hotel': {
    slug: 'palace-hotel',
    venueName: 'Palace Hotel',
    locationSuburb: 'Haymarket',
    address: '730-742 George St, Haymarket NSW 2000',
    phone: '(02) 8080 7025',
    email: 'info@palacehotelsydney.com.au',
    openingHours: 'Monday to Sunday: 10:00am – 4:00am',
    openingHoursWeekly: [
      { day: 'Monday to Sunday', hours: '10:00am – 4:00am' }
    ],
    venueType: 'George Street Heritage Pub & Haymarket Landmark',
    tagline: 'Historic George Street corner pub adjacent to Chinatown and Capitol Theatre, offering cold beers, TAB, and 4am trade.',
    heroImage: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop', caption: 'Palace Hotel on George Street in Haymarket', category: 'exterior' }
    ],
    aboutParagraphs: [
      'The Palace Hotel is a storied landmark on lower George Street in Haymarket. Located directly opposite the Capitol Square light rail stop and steps from Chinatown, this grand heritage venue provides a welcoming meeting point for theatregoers, shoppers, and late-night Sydneysiders.'
    ],
    foodAndDrink: {
      concept: 'Traditional Counter Lunches & Pre-Theatre Pub Classics',
      signatureDishes: ['Chicken Schnitzel with Gravy', 'Classic Fish & Chips', 'Wagyu Burger with Beer Battered Chips'],
      signatureDrinks: ['Carlton Draught', 'Cascade Light', 'Spirits and highballs'],
      dietaryHighlights: 'Gluten-free and vegetarian options available.',
      operatingHoursNotes: 'Kitchen open daily from 11:30am.'
    },
    experiences: [
      { title: 'Chinatown & Capitol Theatre Proximity', description: 'The perfect pre-theatre dining and post-show drinking spot.', iconName: 'Sparkles' },
      { title: '4am George Street Trade', description: 'Operating until 4am seven days a week.', iconName: 'Clock' }
    ],
    whatsOn: [
      { title: 'Pre-Theatre Quick Meals', schedule: 'Daily from 5:00pm', description: 'Fast counter service meals before curtain call at Capitol Theatre.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Mezzanine Bar Section',
        capacityTotal: 60,
        capacitySeated: 30,
        capacityStanding: 60,
        features: ['Elevated view', 'Bar access'],
        eventTypes: ['Casual Socials', 'Group Gatherings']
      }
    ],
    transit: {
      trainStation: 'Central Station (3 min walk)',
      lightRailOrMetro: 'Capitol Square Light Rail Stop directly outside',
      busRoutes: 'George & Pitt Street bus routes',
      parking: 'Market City & Capitol Square parking stations nearby'
    },
    faqs: [
      { question: 'Is the Palace Hotel close to Capitol Theatre?', answer: 'Yes! We are directly across the road from the Capitol Theatre, ideal for pre- and post-theatre drinks.' }
    ],
    seo: {
      title: 'Palace Hotel Haymarket | George St Pub near Chinatown & Capitol Theatre',
      metaDescription: 'Palace Hotel on George St in Haymarket. Heritage Sydney CBD pub near Chinatown and Capitol Theatre with cold beers, sports screens, and 4am late license.',
      canonicalPath: '/venues/palace-hotel',
      h1: 'Palace Hotel Haymarket',
      schemaType: 'BarOrPub'
    },
    bookingUrl: 'https://palacehotelsydney.com.au',
    externalWebsite: 'https://palacehotelsydney.com.au'
  },

  'v-bar': {
    slug: 'v-bar',
    venueName: 'V Bar',
    locationSuburb: 'Sydney CBD',
    address: '111 Liverpool St, Sydney NSW 2000',
    phone: '(02) 8080 7035',
    email: 'info@vbar.com.au',
    openingHours: 'Monday to Sunday: 10:00am – 4:00am',
    openingHoursWeekly: [
      { day: 'Monday to Sunday', hours: '10:00am – 4:00am' }
    ],
    venueType: 'CBD Sports Lounge & Late-Night Bar',
    tagline: 'Vibrant Liverpool Street venue featuring live sports screens, authentic Thai dining, and 4am nightlife trade.',
    heroImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop', caption: 'V Bar Liverpool Street lounge', category: 'interior' }
    ],
    aboutParagraphs: [
      'Conveniently situated on Liverpool Street between George and Pitt Streets, V Bar is a dynamic Sydney CBD venue known for its high-energy sports broadcasts, authentic late-night Thai cuisine from Satang Thai, and generous trading hours until 4:00am.'
    ],
    foodAndDrink: {
      concept: 'Authentic Thai Street Food & Pub Favourites',
      signatureDishes: ['Pad Thai with King Prawns', 'Crispy Pork with Chinese Broccoli', 'Tom Yum Soup with Lemongrass'],
      signatureDrinks: ['Thai Basil Mojito', 'Singha Beer on Tap', 'House Cocktails'],
      dietaryHighlights: 'Extensive vegan, vegetarian, and dairy-free Thai dishes.',
      operatingHoursNotes: 'Thai kitchen open until late.'
    },
    experiences: [
      { title: 'Live Sport Broadcasts', description: 'High-definition screens for English Premier League, NBA, and UFC.', iconName: 'Tv' },
      { title: 'Satang Thai Dining', description: 'Authentic wok-tossed Thai favourites paired with cold beers.', iconName: 'Utensils' }
    ],
    whatsOn: [
      { title: 'Premier League Live', schedule: 'Weekend match schedules', description: 'Late-night football screenings with Thai snacks.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Lounge Section',
        capacityTotal: 70,
        capacitySeated: 35,
        capacityStanding: 70,
        features: ['Screen integration', 'Bar access'],
        eventTypes: ['Casual Socials', 'Sports Parties']
      }
    ],
    transit: {
      trainStation: 'Museum Station (2 min walk) & Town Hall Station (5 min walk)',
      busRoutes: 'Liverpool & Castlereagh Street routes',
      parking: 'World Square parking garage'
    },
    faqs: [
      { question: 'Is Thai food served late at V Bar?', answer: 'Yes! Delicious authentic Thai food is prepared fresh and served until late evening.' }
    ],
    seo: {
      title: 'V Bar Sydney CBD | Liverpool St Sports Lounge, Thai Food & 4am Trade',
      metaDescription: 'V Bar on Liverpool St in Sydney CBD. High-definition sports bar with authentic Thai street dining, draught beer, and 4am late license near Museum Station.',
      canonicalPath: '/venues/v-bar',
      h1: 'V Bar Sydney CBD',
      schemaType: 'BarOrPub'
    },
    bookingUrl: 'https://vbar.com.au',
    externalWebsite: 'https://vbar.com.au'
  },

  'enfield-hotel': {
    slug: 'enfield-hotel',
    venueName: 'Enfield Hotel',
    locationSuburb: 'Enfield',
    address: '8-10 Coronation Pde, Enfield NSW 2136',
    phone: '(02) 8080 7085',
    email: 'info@enfieldhotel.com.au',
    openingHours: 'Monday to Sunday: 10:00am – 12:00am',
    openingHoursWeekly: [
      { day: 'Monday to Sunday', hours: '10:00am – 12:00am' }
    ],
    venueType: 'Suburban Community Pub, Bistro & Sports Bar',
    tagline: 'Inner West family-friendly community hotel featuring expansive sports lounge, bistro steaks, and sunny beer garden.',
    heroImage: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1200&auto=format&fit=crop', caption: 'Enfield Hotel Coronation Parade exterior', category: 'exterior' }
    ],
    aboutParagraphs: [
      'Serving the Enfield, Burwood, and Strathfield communities, the Enfield Hotel is an unpretentious suburban haven. With generous bistro portions, an expansive sports lounge with full TAB facilities, and a relaxed beer garden, it offers authentic local hospitality for groups and families.'
    ],
    foodAndDrink: {
      concept: 'Generous Family Bistro Classics & Steaks',
      signatureDishes: ['300g Grain-Fed T-Bone Steak', 'Monster Chicken Parmigiana', 'Crispy Flathead Fillets'],
      signatureDrinks: ['Tooheys New on Tap', 'Carlton Draught', 'Family Jug Specials'],
      dietaryHighlights: 'Kids menu, vegetarian options, and gluten-friendly meals.',
      operatingHoursNotes: 'Lunch & dinner served 7 days.'
    },
    experiences: [
      { title: 'Family Friendly Bistro', description: 'Spacious dining room with high chairs and kids meals.', iconName: 'Users' },
      { title: 'Suburban Sports Lounge', description: 'Large screens with complete racing and sports coverage.', iconName: 'Tv' }
    ],
    whatsOn: [
      { title: 'Weekend Bistro Specials', schedule: 'Every Saturday & Sunday', description: 'Steak and parmigiana specials for local families.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Bistro Dining Area',
        capacityTotal: 100,
        capacitySeated: 70,
        capacityStanding: 100,
        features: ['Flexible seating', 'Bistro service'],
        eventTypes: ['Family Birthdays', 'Club Presentation Nights']
      }
    ],
    transit: {
      trainStation: 'Strathfield Station & Burwood Station (5 min bus ride)',
      busRoutes: '464, 466 bus routes on Coronation Parade',
      parking: 'Large free on-site patron car park'
    },
    faqs: [
      { question: 'Is parking free at Enfield Hotel?', answer: 'Yes! We have an expansive on-site customer car park with free parking.' }
    ],
    seo: {
      title: 'Enfield Hotel | Family Bistro, Sports Bar & Beer Garden in Sydney Inner West',
      metaDescription: 'Enfield Hotel on Coronation Pde. Friendly Sydney Inner West community pub near Burwood and Strathfield with generous bistro steaks, TAB sports, and free parking.',
      canonicalPath: '/venues/enfield-hotel',
      h1: 'Enfield Hotel Sydney',
      schemaType: 'BarOrPub'
    },
    bookingUrl: 'https://enfieldhotel.com.au',
    externalWebsite: 'https://enfieldhotel.com.au'
  },

  'tempe-hotel': {
    slug: 'tempe-hotel',
    venueName: 'Tempe Hotel',
    locationSuburb: 'Tempe',
    address: '835 Princes Hwy, Tempe NSW 2044',
    phone: '(02) 8080 7045',
    email: 'info@tempehotel.com.au',
    openingHours: 'Monday to Sunday: 10:00am – 12:00am',
    openingHoursWeekly: [
      { day: 'Monday to Sunday', hours: '10:00am – 12:00am' }
    ],
    venueType: 'Princes Highway Local Pub, Bistro & Budget Lodging',
    tagline: 'Practical pub accommodation, expansive beer garden, and counter bistro along the Princes Highway corridor.',
    heroImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop', caption: 'Tempe Hotel pub guest lodging', category: 'accommodation' }
    ],
    aboutParagraphs: [
      'The Tempe Hotel provides straightforward, welcoming Australian pub hospitality along the Princes Highway. Ideal for contractors, interstate travelers, and locals, it features comfortable accommodation rooms, an open beer garden, and classic counter meals.'
    ],
    foodAndDrink: {
      concept: 'Classic Pub Counter Meals & Cold Draughts',
      signatureDishes: ['Traditional Parmigiana', 'Rump Steak with Mushroom Sauce', 'Crispy Fish & Chips'],
      signatureDrinks: ['VB and Carlton Draught on Tap', 'Cold Pints and Jugs'],
      dietaryHighlights: 'Straightforward pub dining with gluten-friendly steak options.',
      operatingHoursNotes: 'Kitchen open 7 days.'
    },
    experiences: [
      { title: 'Budget Traveler Lodging', description: 'Clean, practical rooms convenient for Sydney Airport access.', iconName: 'Bed' },
      { title: 'On-Site Parking', description: 'Free parking for cars, trade vans, and travelers.', iconName: 'Car' }
    ],
    whatsOn: [
      { title: 'Weekly Local Meat Raffles', schedule: 'Fridays: 5:30pm', description: 'Traditional community meat tray raffles.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Function & Sports Lounge',
        capacityTotal: 100,
        capacitySeated: 50,
        capacityStanding: 100,
        features: ['Bar access', 'Outdoor courtyard access'],
        eventTypes: ['Trade Gatherings', 'Casual Celebrations']
      }
    ],
    accommodation: {
      propertyName: 'Tempe Hotel Budget Lodging',
      roomTypes: ['Standard Single Room', 'Double Room', 'Twin Share'],
      amenities: ['Air Conditioning & Flat TV', 'Bistro & Beer Garden Downstairs', 'Free On-Site Parking', 'Direct Highway Access'],
      rateHint: 'From $120 / night',
      bookingUrl: 'https://tempehotel.com.au/',
      proximityNotes: 'Direct Princes Highway corridor • Close to IKEA Tempe & airport'
    },
    transit: {
      trainStation: 'Tempe Station (6 min walk)',
      busRoutes: 'Princes Highway buses right outside',
      parking: 'Complimentary private guest parking lot on site'
    },
    faqs: [
      { question: 'Is check-in available late?', answer: 'Yes, hotel check-in is managed via the main pub counter during operating hours.' }
    ],
    seo: {
      title: 'Tempe Hotel | Princes Highway Pub Accommodation & Bistro near Airport',
      metaDescription: 'Tempe Hotel on Princes Hwy in Tempe. Budget-friendly pub accommodation with free parking, sunny beer garden, and classic counter bistro meals near Sydney Airport.',
      canonicalPath: '/venues/tempe-hotel',
      h1: 'Tempe Hotel Princes Highway',
      schemaType: 'Hotel'
    },
    bookingUrl: 'https://tempehotel.com.au/',
    externalWebsite: 'https://tempehotel.com.au/'
  },

  'moko-eastwood': {
    slug: 'moko-eastwood',
    venueName: 'Moko Eastwood',
    locationSuburb: 'Eastwood',
    address: 'Eastwood NSW 2122',
    phone: '(02) 8080 7090',
    email: 'info@mokoeastwood.com.au',
    openingHours: 'Wednesday to Sunday: 5:00pm – 2:00am',
    openingHoursWeekly: [
      { day: 'Wednesday to Sunday', hours: '5:00pm – 2:00am' },
      { day: 'Monday & Tuesday', hours: 'Closed' }
    ],
    venueType: 'Contemporary Asian Dining, Lounge & Nightlife',
    tagline: 'Dynamic Northern Suburbs lounge pairing modern East-Asian gastronomy with craft cocktails and late-night social energy.',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop', caption: 'Moko Eastwood modern dining lounge', category: 'interior' }
    ],
    aboutParagraphs: [
      'Bringing Universal Hotels’ signature flair to Sydney’s Northern Suburbs, Moko Eastwood is an energetic dining lounge destination. Known for its sophisticated Japanese and pan-Asian sharing plates, bespoke soju and whisky cocktail list, and sleek atmospheric interiors, it offers a stylish evening retreat.'
    ],
    foodAndDrink: {
      concept: 'Contemporary Pan-Asian Izakaya & Craft Cocktails',
      signatureDishes: ['Wagyu Beef Tataki with Ponzu Truffle', 'Crispy Pork Belly Bao Buns', 'Spicy Salmon Crispy Rice'],
      signatureDrinks: ['Yuzu Choya Spritz', 'Smoked Japanese Whisky Highball', 'Premium Soju and Sake Flights'],
      dietaryHighlights: 'Gluten-free, pescatarian, and vegetarian pan-Asian sharing plates.',
      operatingHoursNotes: 'Dinner & late-night supper from 5pm.'
    },
    experiences: [
      { title: 'Modern Izakaya Dining', description: 'Artfully prepared sharing plates for groups and couples.', iconName: 'Utensils' },
      { title: 'Craft Highball Bar', description: 'Japanese whisky and artisan soju cocktails.', iconName: 'Wine' }
    ],
    whatsOn: [
      { title: 'Soju & Highball Sessions', schedule: 'Thursday & Friday Nights', description: 'Cocktail specials and late-night Asian supper.' }
    ],
    functionSpaces: [
      {
        spaceName: 'Private Dining Booths',
        capacityTotal: 40,
        capacitySeated: 30,
        capacityStanding: 40,
        features: ['Intimate dining atmosphere', 'Dedicated table service'],
        eventTypes: ['Private Dinners', 'Birthday Celebrations']
      }
    ],
    transit: {
      trainStation: 'Eastwood Station (3 min walk)',
      busRoutes: 'Eastwood bus interchange',
      parking: 'Eastwood council car parks nearby'
    },
    faqs: [
      { question: 'Do I need a reservation for Moko Eastwood?', answer: 'We strongly recommend reservations for dinner sittings, though walk-ins for drinks and bar snacks are always welcome.' }
    ],
    seo: {
      title: 'Moko Eastwood | Modern Asian Dining, Highball Lounge & Nightlife',
      metaDescription: 'Moko Eastwood in Sydney Northern Suburbs. Contemporary pan-Asian izakaya dining, craft Japanese whisky cocktails, soju bar, and stylish late-night social atmosphere.',
      canonicalPath: '/venues/moko-eastwood',
      h1: 'Moko Eastwood',
      schemaType: 'Restaurant'
    },
    bookingUrl: 'https://mokoeastwood.com.au',
    externalWebsite: 'https://mokoeastwood.com.au'
  }
};
