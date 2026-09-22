import { Venue, FunctionSpace, AccommodationRoom, AuditReportData } from '../types';

export const AUDIT_META: AuditReportData = {
  generatedAt: '2026-09-22',
  headquarters: {
    address: 'Suite 203, Level 2, 255 Castlereagh St, Sydney, NSW 2000',
    phone: '(02) 8080 7000',
    email: 'info@universalhotels.com.au',
    groupOverview: 'Owned and operated by the Kospetas family since 1998, Universal Hotels is a premier independent hospitality and property group in New South Wales managing 16+ metropolitan pubs, live entertainment landmarks, dining destinations, and accommodation spaces across Sydney.'
  },
  venuesCount: 16,
  accommodationPropertiesCount: 3,
  functionSpacesCount: 12,
};

export const VERIFIED_VENUES: Venue[] = [
  {
    id: 'civic-hotel',
    name: 'Civic Hotel',
    tagline: 'Art Deco CBD Icon & Multi-Level Entertainment Sanctuary',
    category: 'pub',
    region: 'Sydney CBD & Haymarket',
    address: {
      street: '388 Pitt St',
      suburb: 'Sydney',
      state: 'NSW',
      postcode: '2000',
      full: '388 Pitt St, Sydney NSW 2000',
      googleMapsUrl: 'https://maps.google.com/?q=388+Pitt+St+Sydney+NSW+2000'
    },
    hours: {
      regular: 'Mon to Sun: 10am – 4am'
    },
    contact: {
      phone: '(02) 8080 7015',
      email: 'info@universalhotels.com.au',
      website: 'https://civichotelsydney.com.au/',
      instagram: 'https://www.instagram.com/civichotelsydney/'
    },
    description: 'Built in 1940, the Civic Hotel is an Art Deco architectural monument on the corner of Pitt and Goulburn Streets. Spanning three dynamic levels, it houses the legendary Civic Underground live music room, the bustling street-level Civic Saloon, and the nostalgic Ni Hao Bar & Dining.',
    features: ['Art Deco Architecture', 'Civic Underground Club', 'Ni Hao Bar & Dining', 'Late Night License 4am', 'Private Event Spaces'],
    atmosphere: 'Vibrant, historic, subterranean club culture meets golden-age Cantonese dining',
    hasAccommodation: false,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: true,
    hasSportsTab: true,
    originalUrl: 'https://www.universalhotels.com.au/https/civichotelsydneycomau',
    externalWebsite: 'https://civichotelsydney.com.au/',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'the-oxford-hotel',
    name: 'The Oxford Hotel',
    tagline: 'Centennial Oxford Street Institution Across Four Distinct Levels',
    category: 'entertainment_nightlife',
    region: 'Darlinghurst & Oxford St',
    address: {
      street: '134 Oxford St',
      suburb: 'Darlinghurst',
      state: 'NSW',
      postcode: '2010',
      full: '134 Oxford St, Darlinghurst NSW 2010',
      googleMapsUrl: 'https://maps.google.com/?q=134+Oxford+St+Darlinghurst+NSW+2010'
    },
    hours: {
      regular: 'Mon to Sun: 10am – 4am'
    },
    contact: {
      phone: '(02) 8080 7080',
      email: 'info@universalhotels.com.au',
      website: 'https://www.theoxfordhotel.com.au'
    },
    description: "Standing proudly on Taylor Square for over a century, The Oxford Hotel comprises four distinct spaces: the top-floor cocktail retreat Polo Lounge, Level 1's inclusive performance hall Gingers, the street-level Oxford Bar & Bistro terrace, and the basement club Oxford Underground.",
    features: ['Polo Lounge Balcony', "Gingers Drag & Live Stage", 'Oxford Underground Club', 'Bistro Terrace on Taylor Square', '100+ Year Heritage'],
    atmosphere: 'Inclusive, high-energy, historic LGBTQIA+ cultural flagship with diverse entertainment',
    hasAccommodation: false,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: true,
    hasSportsTab: false,
    originalUrl: 'https://www.universalhotels.com.au/the-oxford-hotel',
    externalWebsite: 'https://www.theoxfordhotel.com.au',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'universal-sydney',
    name: 'Universal Sydney',
    tagline: 'Oxford Street’s Superclub & World-Renowned Drag Theatre',
    category: 'entertainment_nightlife',
    region: 'Darlinghurst & Oxford St',
    address: {
      street: '85-91 Oxford St',
      suburb: 'Darlinghurst',
      state: 'NSW',
      postcode: '2010',
      full: '85-91 Oxford St, Darlinghurst NSW 2010',
      googleMapsUrl: 'https://maps.google.com/?q=85-91+Oxford+St+Darlinghurst+NSW+2010'
    },
    hours: {
      regular: 'Downstairs: Mon to Sun 12pm – Late | Upstairs: Event-driven club nights'
    },
    contact: {
      phone: '(02) 8080 7065',
      email: 'info@universalhotels.com.au',
      website: 'https://www.universal.sydney'
    },
    description: 'Formerly the historic Midnight Shift, Universal Sydney was reborn in 2018 under Universal Hotels. Featuring iconic pink and gold mosaic tiled walls, neon photo moments, a ground-floor cabaret drag bar, and a state-of-the-art dual-level Superclub upstairs.',
    features: ['World-Class Drag Shows 7 Days', 'Dual-Level Superclub', 'Immersive Sound & Laser Rig', 'Cocktail Lounge', 'Safe & Inclusive Dance Space'],
    atmosphere: 'Electrifying, celebratory, glitter-soaked nightlife cathedral',
    hasAccommodation: false,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: true,
    hasSportsTab: false,
    originalUrl: 'https://www.universalhotels.com.au/universalsyd',
    externalWebsite: 'https://www.universal.sydney',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'imperial-hotel-erskineville',
    name: 'Imperial Hotel Erskineville',
    tagline: 'Queer Cultural Landmark & Spiritual Home of Priscilla',
    category: 'entertainment_nightlife',
    region: 'Inner West & Erskineville',
    address: {
      street: '35 Erskineville Rd',
      suburb: 'Erskineville',
      state: 'NSW',
      postcode: '2043',
      full: '35 Erskineville Rd, Erskineville NSW 2043',
      googleMapsUrl: 'https://maps.google.com/?q=35+Erskineville+Rd+Erskineville+NSW+2043'
    },
    hours: {
      regular: 'Main Bar: Wed-Thu 4pm–12am, Fri 4pm–3am, Sat 4pm–4am | Rooftop: Mon-Fri 4pm–10pm, Sat-Sun 12pm–10pm | Basement: Event Nights'
    },
    contact: {
      phone: '(02) 8080 7060',
      email: 'info@universalhotels.com.au',
      website: 'https://imperialerskineville.com.au/'
    },
    description: 'Since 1983, The Imperial Erskineville has stood as a national treasure and beacon of LGBT+ expression. Famously featured in Priscilla, Queen of the Desert, it unites Priscilla’s Drag & Dine restaurant, a sunny open-air rooftop pizzeria with Pizza Bros, and an underground performance bunker.',
    features: ['Priscilla Drag & Dine', 'Imperial Rooftop Pizzeria', 'Subterranean Performance Basement', 'Famous Movie Heritage', 'Weddings & Celebrations'],
    atmosphere: 'Camp, warm, deeply authentic Inner West sanctuary of creative freedom',
    hasAccommodation: false,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: true,
    hasSportsTab: false,
    originalUrl: 'https://www.universalhotels.com.au/erskineville',
    externalWebsite: 'https://imperialerskineville.com.au/',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'crown-hotel-surry-hills',
    name: 'Crown Hotel Surry Hills',
    tagline: 'Boutique Stay, Sports Bar & Level 2 Sapphire Lounge',
    category: 'pub',
    region: 'Surry Hills & Redfern',
    address: {
      street: '587-589 Crown St',
      suburb: 'Surry Hills',
      state: 'NSW',
      postcode: '2010',
      full: '587-589 Crown St, Surry Hills NSW 2010',
      googleMapsUrl: 'https://maps.google.com/?q=587-589+Crown+St+Surry+Hills+NSW+2010'
    },
    hours: {
      regular: 'Mon to Sun: 10am – 4am [CONTENT TO VERIFY exact closing hour]'
    },
    contact: {
      phone: '(02) 8080 7095',
      email: 'info@universalhotels.com.au',
      website: 'https://crownhotel.com.au/'
    },
    description: 'Positioned on the vibrant corner of Crown and Cleveland Streets, Crown Hotel Surry Hills is a multi-story neighborhood staple offering boutique hotel accommodation, a lively sports and TAB lounge, classic pub dining, and the private 200-capacity Sapphire Lounge on Level 2.',
    features: ['Boutique Accommodation (Upstairs)', 'Sapphire Lounge Function Floor', 'Sports & TAB Lounge', 'Happy Hour Specials', 'Central Surry Hills Location'],
    atmosphere: 'Neighbourhood conviviality, sports camaraderie, and welcoming comfort',
    hasAccommodation: true,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: false,
    hasSportsTab: true,
    originalUrl: 'https://www.universalhotels.com.au/https/crownhotelcomau',
    externalWebsite: 'https://crownhotel.com.au/',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'the-riley-hotel',
    name: 'The Riley Hotel',
    tagline: 'Reimagined Heritage Pub with Al Fresco Dining on Oxford St',
    category: 'heritage_pub',
    region: 'Darlinghurst & Oxford St',
    address: {
      street: '77 Oxford St',
      suburb: 'Darlinghurst',
      state: 'NSW',
      postcode: '2010',
      full: '77 Oxford St, Darlinghurst NSW 2010',
      googleMapsUrl: 'https://maps.google.com/?q=77+Oxford+St+Darlinghurst+NSW+2010'
    },
    hours: {
      regular: 'Sun to Thu: 8am – 2am | Fri to Sat: 8am – 5am'
    },
    contact: {
      phone: '(02) 8080 7090',
      email: 'info@universalhotels.com.au',
      website: 'https://therileyhotel.com.au/'
    },
    description: 'Anchoring the corner of Oxford and Riley Streets, this heritage-listed venue—previously known as The Brighton Hotel—was redesigned by Universal Hotels to fuse warm original Victorian architectural features with contemporary streetfront al fresco dining, tap craft beers, and weekend resident DJs.',
    features: ['Early 8am Open & Late 5am Weekend Trade', 'Al Fresco Street Dining', 'Weekend Resident DJs', 'Fresh Local Pub Classics', 'Cocktail Program'],
    atmosphere: 'Effortlessly social, corner-perch buzz with warm timber finishes',
    hasAccommodation: false,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: true,
    hasSportsTab: true,
    originalUrl: 'https://www.universalhotels.com.au/brighton-hotel',
    externalWebsite: 'https://therileyhotel.com.au/',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'the-tudor-hotel',
    name: 'The Tudor Hotel',
    tagline: 'Heart of Redfern with Sunny Upstairs Courtyard & Local Spirit',
    category: 'neighbourhood_local',
    region: 'Surry Hills & Redfern',
    address: {
      street: '90 Pitt St',
      suburb: 'Redfern',
      state: 'NSW',
      postcode: '2016',
      full: '90 Pitt St, Redfern NSW 2016',
      googleMapsUrl: 'https://maps.google.com/?q=90+Pitt+St+Redfern+NSW+2016'
    },
    hours: {
      regular: 'Mon to Sat: 10am – 1am | Sun: 10am – 12am'
    },
    contact: {
      phone: '(02) 8080 7026',
      email: 'info@universalhotels.com.au',
      website: 'https://www.tudorhotel.com.au'
    },
    description: 'Situated on the bustling corner of Pitt and Redfern Streets, The Tudor is an authentic community gathering place featuring weekly trivia, meat raffles, sports screenings, and a sun-soaked upstairs outdoor terrace perfect for milestone celebrations.',
    features: ['Sunny Upstairs Terrace & Courtyard', 'Weekly Trivia & Meat Raffles', 'Sunday Roasts & Daily Specials', 'Dog-Friendly Outdoor Area', 'Tailored Private Functions'],
    atmosphere: 'Unpretentious, genuinely friendly local pub pride with leafy terrace charm',
    hasAccommodation: false,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: false,
    hasSportsTab: true,
    originalUrl: 'https://www.universalhotels.com.au/the-tudor',
    externalWebsite: 'https://www.tudorhotel.com.au',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'the-lord-roberts',
    name: 'The Lord Roberts Hotel',
    tagline: 'Historic Stanley Street Gem with Rooftop & Bob’s Lounge',
    category: 'heritage_pub',
    region: 'Darlinghurst & Oxford St',
    address: {
      street: '64 Stanley St',
      suburb: 'Darlinghurst',
      state: 'NSW',
      postcode: '2010',
      full: '64 Stanley St, Darlinghurst NSW 2010',
      googleMapsUrl: 'https://maps.google.com/?q=64+Stanley+St+Darlinghurst+NSW+2010'
    },
    hours: {
      regular: 'Mon to Wed: 10am – 12am | Thu to Sat: 10am – 1am | Sun: [CONTENT TO VERIFY]'
    },
    contact: {
      phone: '(02) 8080 7012',
      email: 'info@thelordroberts.com.au',
      website: 'https://www.lordrobertshotel.com.au'
    },
    description: 'A beloved east-Sydney public house established in the late 19th century, The Lord Roberts spans multiple levels on dining-dense Stanley Street. It features Bob’s Lounge on Level 1 with private balcony and an open-air rooftop with a retractable awning and city skyline views.',
    features: ['Open-Air Retractable Rooftop', 'Bob’s Lounge Function Room', 'Historic Public Bar', 'City Skyline Panoramas', 'Craft Beers & Gastropub Counter'],
    atmosphere: 'Intimate, warm heritage character with relaxed open-sky entertaining',
    hasAccommodation: false,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: false,
    hasSportsTab: true,
    originalUrl: 'https://www.universalhotels.com.au/thelordroberts',
    externalWebsite: 'https://www.lordrobertshotel.com.au',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'the-harold',
    name: 'The Harold',
    tagline: 'Forest Lodge & Glebe Community Pillar with Leafy Verandahs',
    category: 'neighbourhood_local',
    region: 'Inner West & Erskineville',
    address: {
      street: '70A Ross St',
      suburb: 'Forest Lodge',
      state: 'NSW',
      postcode: '2037',
      full: '70A Ross St, Forest Lodge NSW 2037',
      googleMapsUrl: 'https://maps.google.com/?q=70A+Ross+St+Forest+Lodge+NSW+2037'
    },
    hours: {
      regular: 'Mon to Sat: 10am – 12am | Sun: 10am – 10pm'
    },
    contact: {
      phone: '(02) 8080 7030',
      email: 'info@universalhotels.com.au',
      website: 'https://www.universalhotels.com.au/theharold'
    },
    description: 'Tucked into the heritage residential grid of Forest Lodge bordering Glebe and Camperdown, The Harold is a warm family-friendly pub offering craft beer taps, rotisserie roasts, leafy outdoor tables, and versatile group dining spaces.',
    features: ['Heritage Architecture', 'Craft Beer Taps & Fine Wine', 'Weekend Sunday Roasts', 'Family & Dog Friendly', 'Group Function Areas'],
    atmosphere: 'Relaxed leafy suburbia, gentle chatter, and satisfying honest food',
    hasAccommodation: false,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: false,
    hasSportsTab: false,
    originalUrl: 'https://www.universalhotels.com.au/theharold',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'the-evening-star',
    name: 'The Evening Star',
    tagline: 'Central Station’s Go-To Sports Bar, Cold Taps & Late Night Fare',
    category: 'sports_bar',
    region: 'Surry Hills & Redfern',
    address: {
      street: '360 Elizabeth St',
      suburb: 'Surry Hills',
      state: 'NSW',
      postcode: '2010',
      full: '360 Elizabeth St, Surry Hills NSW 2010',
      googleMapsUrl: 'https://maps.google.com/?q=360+Elizabeth+St+Surry+Hills+NSW+2010'
    },
    hours: {
      regular: 'Mon to Sun: 10am – 4am'
    },
    contact: {
      phone: '(02) 8080 7063',
      email: 'info@universalhotels.com.au',
      website: 'https://www.eveningstarhotel.com.au'
    },
    description: 'Located directly opposite Central Station on Elizabeth Street, The Evening Star is a fast-paced transit-hub pub serving commuters, sports fans, and shift workers around the clock with live sporting broadcasts, TAB facilities, and late-night eats until 4am.',
    features: ['Opposite Sydney Central Station', '4am Late Trading 7 Days', 'Comprehensive Live Sports & TAB', 'Hearty Pub Counter Meals', 'Outdoor Elizabeth St Seating'],
    atmosphere: 'Energetic, unpretentious sports-centric haven with constant momentum',
    hasAccommodation: false,
    hasFunctions: false,
    hasDining: true,
    hasNightlife: true,
    hasSportsTab: true,
    originalUrl: 'https://www.universalhotels.com.au/the-evening-star',
    externalWebsite: 'https://www.eveningstarhotel.com.au',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'palace-hotel',
    name: 'Palace Hotel',
    tagline: 'Chinatown & Haymarket Entertainment Hub at Capital Square',
    category: 'pub',
    region: 'Sydney CBD & Haymarket',
    address: {
      street: '730-742 George St',
      suburb: 'Haymarket',
      state: 'NSW',
      postcode: '2000',
      full: 'Capital Square Building, 730-742 George St, Haymarket NSW 2000',
      googleMapsUrl: 'https://maps.google.com/?q=730-742+George+St+Haymarket+NSW+2000'
    },
    hours: {
      regular: 'Mon to Sun: 10am – 4am'
    },
    contact: {
      phone: '(02) 8080 7085',
      email: 'info@universalhotels.com.au',
      website: 'https://palacesydney.com.au/'
    },
    description: 'Positioned inside the vibrant Capital Square complex at the southern end of George Street, the Palace Hotel caters to Sydney’s bustling Chinatown and Capitol Theatre theatregoers with extensive sports screening, Asian-fusion pub dining, and 4am late licenses.',
    features: ['Adjacent to Capitol Theatre', 'Chinatown & Light Rail Frontage', 'Extensive Sports Screenings & TAB', 'Late Trading until 4am', 'Hearty Group Menus'],
    atmosphere: 'Fast, brightly lit metropolitan energy with diverse entertainment',
    hasAccommodation: false,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: true,
    hasSportsTab: true,
    originalUrl: 'https://www.universalhotels.com.au/palacehotel',
    externalWebsite: 'https://palacesydney.com.au/',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'tempe-hotel',
    name: 'Tempe Hotel',
    tagline: 'Princes Highway Local with Expansive Beer Garden & Event Hall',
    category: 'pub',
    region: 'Tempe & South',
    address: {
      street: '735 Princes Hwy',
      suburb: 'Tempe',
      state: 'NSW',
      postcode: '2044',
      full: '735 Princes Hwy, Tempe NSW 2044',
      googleMapsUrl: 'https://maps.google.com/?q=735+Princes+Hwy+Tempe+NSW+2044'
    },
    hours: {
      regular: 'Mon to Sat: 10am – 4am | Sun: 10am – 2am'
    },
    contact: {
      phone: '(02) 8080 7075',
      email: 'info@universalhotels.com.au',
      website: 'https://tempehotel.com.au/'
    },
    description: 'A classic suburban hub along the Princes Highway corridor, Tempe Hotel provides a spacious venue with a 150-capacity indoor-outdoor function room, umbrella-shaded picnic tables, full TAB wagering, and commuter accommodation.',
    features: ['150-Capacity Indoor/Outdoor Function Hall', 'Large Outdoor Courtyard with Umbrellas', 'Full TAB & Sports Facilities', 'Budget Accommodation Rooms', 'Late Trading until 4am'],
    atmosphere: 'Roomy, laid-back suburban pub where tradies, families, and sports enthusiasts mix',
    hasAccommodation: true,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: false,
    hasSportsTab: true,
    originalUrl: 'https://www.universalhotels.com.au/tempe-hotel',
    externalWebsite: 'https://tempehotel.com.au/',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'riverview-hotel-tempe',
    name: 'Riverview Hotel',
    tagline: 'Cooks River Landmark with Stix Hellenic Taverna & Boutique Rooms',
    category: 'dining_eatery',
    region: 'Tempe & South',
    address: {
      street: '900 Princes Hwy',
      suburb: 'Tempe',
      state: 'NSW',
      postcode: '2044',
      full: '900 Princes Hwy, Tempe NSW 2044',
      googleMapsUrl: 'https://maps.google.com/?q=900+Princes+Hwy+Tempe+NSW+2044'
    },
    hours: {
      regular: 'Mon to Sun: 10am – 12am'
    },
    contact: {
      phone: '(02) 8080 7072',
      email: 'info@universalhotels.com.au',
      website: 'https://riverviewhoteltempe.com.au/'
    },
    description: 'Positioned near the scenic Cooks River in Tempe, Riverview Hotel underwent an extensive contemporary renewal in 2024–2025. Today it pairs elevated culinary hospitality led by Stix Hellenic Taverna with an open balcony function room and boutique accommodation.',
    features: ['Stix Hellenic Taverna Modern Greek Dining', 'Private Balcony Function Space (50 Guests)', 'Onsite Refurbished Accommodation', 'Boutique Wine & Cocktail List', 'Cooks River Proximity'],
    atmosphere: 'Warm Mediterranean hospitality, aromatic charcoal flavours, and relaxed comfort',
    hasAccommodation: true,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: false,
    hasSportsTab: false,
    originalUrl: 'https://www.universalhotels.com.au/riverviewhotel',
    externalWebsite: 'https://riverviewhoteltempe.com.au/',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'enfield-hotel',
    name: 'Enfield Hotel',
    tagline: 'Inner West Sports Landmark & Community Gathering Ground',
    category: 'sports_bar',
    region: 'Inner West & Erskineville',
    address: {
      street: '14 Coronation Parade',
      suburb: 'Enfield',
      state: 'NSW',
      postcode: '2136',
      full: '14 Coronation Parade, Enfield NSW 2136',
      googleMapsUrl: 'https://maps.google.com/?q=14+Coronation+Parade+Enfield+NSW+2136'
    },
    hours: {
      regular: 'Mon to Sat: 10am – 4am | Sun: 10am – 12am'
    },
    contact: {
      phone: '(02) 8080 7023',
      email: 'info@universalhotels.com.au',
      website: 'https://theenfieldhotel.com.au/'
    },
    description: 'Welcoming the Inner West community, the Enfield Hotel brings together generous bistro plates, stadium-grade sports screens, and a bustling social atmosphere under one expansive roof.',
    features: ['Mega Sports Viewing Screens', 'Happy Hour Mon-Fri 4-6pm & Weekends', 'Classic Pub Fare & Steaks', 'Spacious Seating for Groups', 'Late License 4am'],
    atmosphere: 'High-energy, friendly community spirit with unbeatable sports camaraderie',
    hasAccommodation: false,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: false,
    hasSportsTab: true,
    originalUrl: 'https://www.universalhotels.com.au/https/theenfieldhotelcomau',
    externalWebsite: 'https://theenfieldhotel.com.au/',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'moko-eastwood',
    name: 'Moko Eastwood',
    tagline: 'Northern Suburbs Dining, Cocktails & Modern Asian Socials',
    category: 'dining_eatery',
    region: 'Northern Suburbs & Eastwood',
    address: {
      street: '75 Rowe St',
      suburb: 'Eastwood',
      state: 'NSW',
      postcode: '2122',
      full: '75 Rowe St, Eastwood NSW 2122',
      googleMapsUrl: 'https://maps.google.com/?q=75+Rowe+St+Eastwood+NSW+2122'
    },
    hours: {
      regular: 'Mon to Sat: 10am – 4am | Sun: 10am – 2am'
    },
    contact: {
      phone: '(02) 8080 7022',
      email: 'info@universalhotels.com.au',
      website: 'https://mokoeastwood.com.au/'
    },
    description: 'Located in the heart of Eastwood’s buzzing dining strip on Rowe Street, Moko delivers a sleek fusion of dining, craft cocktails, and late-night lounge culture tailored to Sydney’s multicultural northwest.',
    features: ['Rowe Street Dining Strip Frontage', 'Late Trading until 4am', 'Curated Signature Cocktails', 'Modern Shared Plates', 'Group Bookings'],
    atmosphere: 'Contemporary, stylish, nightlife-tinged social dining',
    hasAccommodation: false,
    hasFunctions: true,
    hasDining: true,
    hasNightlife: true,
    hasSportsTab: true,
    originalUrl: 'https://www.universalhotels.com.au/moko',
    externalWebsite: 'https://mokoeastwood.com.au/',
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'v-bar',
    name: 'V Bar',
    tagline: 'CBD Liverpool Street Sports Bar & Home of Satang Thai',
    category: 'sports_bar',
    region: 'Sydney CBD & Haymarket',
    address: {
      street: '111 Liverpool St',
      suburb: 'Sydney',
      state: 'NSW',
      postcode: '2000',
      full: '111 Liverpool St, Sydney NSW 2000',
      googleMapsUrl: 'https://maps.google.com/?q=111+Liverpool+St+Sydney+NSW+2000'
    },
    hours: {
      regular: 'Mon to Sun: 10am – 4am'
    },
    contact: {
      phone: '(02) 8080 7020',
      email: 'info@universalhotels.com.au',
      website: 'https://vbar.com.au/'
    },
    description: 'Located in the bustling World Square precinct, V Bar pairs a high-octane sports and TAB lounge with the authentic wok flavours of Satang Thai, serving cold beers and street food until 4am every night.',
    features: ['Authentic Satang Thai Menu', 'Sports & TAB Lounge', 'World Square / Hyde Park Border', 'Late 4am Trading 7 Days', 'Quick Lunches & Dinners'],
    atmosphere: 'Dynamic, unpretentious, fast-paced city drinking and authentic spicy Thai dining',
    hasAccommodation: false,
    hasFunctions: false,
    hasDining: true,
    hasNightlife: false,
    hasSportsTab: true,
    originalUrl: 'https://www.universalhotels.com.au/v-bar',
    externalWebsite: 'https://vbar.com.au/',
    verificationStatus: 'VERIFIED'
  }
];

export const VERIFIED_FUNCTION_SPACES: FunctionSpace[] = [
  {
    id: 'sapphire-lounge',
    name: 'Sapphire Lounge',
    venueName: 'Crown Hotel Surry Hills',
    venueId: 'crown-hotel-surry-hills',
    standingCapacity: 200,
    seatedCapacity: 100,
    description: 'Located on the 2nd floor of Crown Hotel, Sapphire Lounge is a dedicated private events floor featuring two conjoined rooms, high-top bar tables, lounge seating, and an expansive private balcony overlooking Crown Street.',
    features: ['Private Bar', 'Private Balcony', 'Microphone & AUX/iPhone Audio', 'Private Unisex Bathrooms', 'Lounge Seating & High Tops', 'Two Conjoined Rooms'],
    idealFor: ['Milestone Birthdays', 'Corporate Mixers', 'Engagement Parties', 'Cocktail Receptions']
  },
  {
    id: 'polo-lounge',
    name: 'Polo Lounge',
    venueName: 'The Oxford Hotel',
    venueId: 'the-oxford-hotel',
    standingCapacity: 100,
    seatedCapacity: 70,
    description: 'Perched atop The Oxford Hotel, Polo Lounge boasts an exclusive private bar, natural light pouring through heritage windows, an ambient fireplace, a piano, and a secluded balcony with views over Taylor Square.',
    features: ['Dedicated Private Bar', 'Taylor Square Balcony', 'DJ Booth & Piano', 'Cozy Fireplace', 'Private Bathrooms on Floor'],
    idealFor: ['Sophisticated Cocktail Parties', 'Milestone Celebrations', 'Exclusive Social Soirées', 'Intimate Brand Launches']
  },
  {
    id: 'gingers',
    name: 'Gingers',
    venueName: 'The Oxford Hotel',
    venueId: 'the-oxford-hotel',
    standingCapacity: 140,
    seatedCapacity: 100,
    description: 'Level 1 of The Oxford Hotel hosts Gingers: a vibrant, inclusive function space steeped in heritage charm and LGBTQIA+ community pride, complete with private bar, stage, and full performance lighting.',
    features: ['Full Performance Stage', 'DJ Booth & Lighting Rig', 'Dedicated Private Bar', 'Plush Booth Seating', 'Piano & Heritage Accents'],
    idealFor: ['Cabaret & Live Performances', 'Celebratory Receptions', 'Showcase Events', 'Community Galas']
  },
  {
    id: 'oxford-underground',
    name: 'Oxford Underground',
    venueName: 'The Oxford Hotel',
    venueId: 'the-oxford-hotel',
    standingCapacity: 220,
    seatedCapacity: 0,
    description: 'With a booming sound system, sunken dancefloor, cloak room, and ticket booth, Oxford Underground is an exceptional subterranean party venue for energetic private and ticketed events.',
    features: ['Sunken Dancefloor', 'High-Spec DJ Booth & Sound Rig', 'Private Bar', 'Cloakroom & Ticket Booth', 'Lounge Seating Pockets'],
    idealFor: ['Late-Night Club Events', 'Album Launches', 'Dance Parties', 'Private DJ Nights']
  },
  {
    id: 'civic-underground',
    name: 'Civic Underground',
    venueName: 'Civic Hotel',
    venueId: 'civic-hotel',
    standingCapacity: 300,
    seatedCapacity: 100,
    description: 'Formerly the historic Civic Theatre, Civic Underground is one of Sydney’s most celebrated boutique music rooms, featuring an internationally tuned Allen & Heath audio system, LED ceiling, and full private bar.',
    features: ['Acoustically Tuned Club Sound', 'Full Stage & Performance Lighting', 'Massive Central Bar', 'Dedicated Cloak Room', 'Booth Seating & Dancefloor'],
    idealFor: ['Live Band Showcases', 'High-End Club Nights', 'Corporate Product Reveals', 'Private Birthday Bashes']
  },
  {
    id: 'civic-saloon-ni-hao',
    name: 'Civic Saloon & Ni Hao Bar',
    venueName: 'Civic Hotel',
    venueId: 'civic-hotel',
    standingCapacity: 250,
    seatedCapacity: 140,
    description: 'Versatile street-level and mezzanine dining spaces capturing Hong Kong golden age nostalgia with craft cocktails and modern Cantonese share feasts.',
    features: ['Nostalgic HK Deco Styling', 'Cantonese Banquet Menus', 'Cocktail Bar', 'Flexible Table Formations'],
    idealFor: ['Corporate Dinners', 'Holiday Celebrations', 'Team Mixers', 'Group Dining']
  },
  {
    id: 'tudor-terrace-upstairs',
    name: 'Upstairs Terrace & Private Dining',
    venueName: 'The Tudor Hotel',
    venueId: 'the-tudor-hotel',
    standingCapacity: 60,
    seatedCapacity: 30,
    description: 'A relaxed inner-city retreat in the heart of Redfern, featuring an indoor room with tables & chairs flowing directly onto a conjoined sunny outdoor terrace.',
    features: ['Indoor Room & Conjoined Outdoor Terrace', 'Large TVs with USB Input', 'Bluetooth Music Control', 'Order at Table via Me&U', 'Redfern Village Atmosphere'],
    idealFor: ['Casual Birthdays', 'Work Sundowners', 'Family Luncheons', 'Engagements']
  },
  {
    id: 'bobs-lounge',
    name: "Bob's Lounge",
    venueName: 'The Lord Roberts Hotel',
    venueId: 'the-lord-roberts',
    standingCapacity: 80,
    seatedCapacity: 50,
    description: 'A stylish indoor space with its own private balcony overlooking Stanley Street, dedicated private bar, and private bathrooms. Warm, exclusive without feeling stuffy.',
    features: ['Dedicated Private Bar', 'Private Stanley St Balcony', 'Dancefloor Area', 'AV Equipment & Display', 'Private Bathrooms'],
    idealFor: ['Milestone Birthdays', 'Corporate Drinks', 'Engagement Parties', 'Exclusive Gatherings']
  },
  {
    id: 'lord-roberts-rooftop',
    name: 'The Rooftop',
    venueName: 'The Lord Roberts Hotel',
    venueId: 'the-lord-roberts',
    standingCapacity: 120,
    seatedCapacity: 60,
    description: 'Open-air rooftop retreat with a retractable weatherproof awning and sweeping Darlinghurst and Sydney city skyline vistas. Available for shared or exclusive hire.',
    features: ['City Skyline Views', 'Weatherproof Retractable Awning', 'Open-Air Atmosphere', 'Dedicated Rooftop Service', 'Flexible Cocktail Seating'],
    idealFor: ['Summer Cocktail Parties', 'Office Holiday Drinks', 'Golden Hour Socials', 'Private Dinners']
  },
  {
    id: 'tempe-function-room',
    name: 'The Tempe Function Room & Garden',
    venueName: 'Tempe Hotel',
    venueId: 'tempe-hotel',
    standingCapacity: 150,
    seatedCapacity: 80,
    description: 'Offering seamless flow between a modern indoor room and an outdoor courtyard with picnic tables and umbrellas, perfect for corporate presentations, club presentations, and celebrations.',
    features: ['4 Large Indoor TVs with USB Input', 'Bluetooth Music System & Microphone', 'Outdoor Area with 6 Picnic Tables', 'LED Mood Lighting', 'High-Speed Wi-Fi'],
    idealFor: ['Corporate Presentations', 'Sports Club Presentations', 'Large Family Gatherings', 'Milestone Parties']
  },
  {
    id: 'riverview-taverna-balcony',
    name: 'Riverview Balcony & Taverna Room',
    venueName: 'Riverview Hotel',
    venueId: 'riverview-hotel-tempe',
    standingCapacity: 50,
    seatedCapacity: 40,
    description: 'A newly refurbished private space with options for an open-air balcony or comfortable indoor seating, catered with authentic modern Greek banquet menus by Stix Hellenic Taverna.',
    features: ['Stix Hellenic Taverna Banquet Menus', 'Private Balcony Area', 'Intimate Heritage Setting', 'Dedicated Waitstaff', 'Scenic District Aspect'],
    idealFor: ['Intimate Celebrations', 'Family Banquets', 'Boutique Corporate Dinners', 'Engagement Luncheons']
  },
  {
    id: 'imperial-spaces',
    name: 'The Imperial Spaces (Main Bar, Rooftop & Basement)',
    venueName: 'Imperial Hotel Erskineville',
    venueId: 'imperial-hotel-erskineville',
    standingCapacity: 350,
    seatedCapacity: 180,
    description: 'Sydney’s most iconic LGBTQIA+ playground offering three distinct hiring options: the glamorous Priscilla’s restaurant & stage, the open-air rooftop pizzeria, and the underground performance bunker. [CONTENT TO VERIFY specific hire packages]',
    features: ['Drag Performance Stage', 'Rooftop Pizzeria Bar', 'Basement Club Rig', 'Full AV & Lighting', 'Celebration Packages'],
    idealFor: ['Weddings & Civil Partnerships', 'Creative Brand Activations', 'Queer Celebrations', 'Major Milestones']
  }
];

export const VERIFIED_ACCOMMODATION: AccommodationRoom[] = [
  {
    id: 'crown-hotel-accommodation',
    name: 'Crown Hotel Boutique Rooms',
    venueName: 'Crown Hotel Surry Hills',
    venueId: 'crown-hotel-surry-hills',
    description: 'Contemporary boutique rooms situated on upper levels above the hotel on Crown Street. Located 10 minutes from Sydney CBD, Sydney Airport, and walking distance to Central Station, SCG, and Allianz Stadium.',
    features: [
      'Luxury En-Suite Bathrooms',
      'High-Speed Complimentary Wi-Fi',
      'Individual Climate Control / Air Conditioning',
      'Relaxed Guest Dining Area & Kitchenette',
      'Walk to Central Station, Oxford St, SCG & Allianz Stadium',
      'Direct Pub & Dining Access Downstairs'
    ],
    bookingUrl: 'https://crownhotel.com.au/stay/',
    rateHint: 'From $140/night [CONTENT TO VERIFY dynamic seasonal rates]'
  },
  {
    id: 'riverview-hotel-accommodation',
    name: 'Riverview Hotel Rooms',
    venueName: 'Riverview Hotel, Tempe',
    venueId: 'riverview-hotel-tempe',
    description: 'Refurbished comfortable hotel rooms on the Princes Highway corridor, minutes from Sydney Airport and Sydenham Metro station. Ideal for transit travellers, business guests, and visitors enjoying Stix Hellenic Taverna dining.',
    features: [
      'Recently Refurbished Interiors',
      'Proximity to Sydney Domestic & International Airports',
      'Steps to Sydenham Metro / Train Junction',
      'Free High-Speed Wi-Fi',
      'Air Conditioning & Flat-Screen TV',
      'Stix Hellenic Taverna Onsite Dining'
    ],
    bookingUrl: 'https://riverviewhoteltempe.com.au/accommodation-riverview-hotel/',
    rateHint: 'Boutique airport-fringe rates [CONTENT TO VERIFY]'
  },
  {
    id: 'tempe-hotel-accommodation',
    name: 'Tempe Hotel Budget Rooms',
    venueName: 'Tempe Hotel',
    venueId: 'tempe-hotel',
    description: 'Classic Australian pub accommodation offering clean, straightforward, budget-conscious lodging close to transport, IKEA Tempe, and Sydney Airport.',
    features: [
      'Convenient Princes Highway Access',
      'Budget-Friendly Nightly & Weekly Stays',
      'Onsite Bistro, TAB, and Beer Garden',
      'Air Conditioning & TV',
      'Convenient Airport Fringe Location'
    ],
    bookingUrl: 'https://tempehotel.com.au/',
    rateHint: 'Budget pub accommodation [CONTENT TO VERIFY]'
  }
];

export const EXISTING_SEO_PAGES = [
  { url: 'https://www.universalhotels.com.au/', title: 'Universal Hotels Sydney - Home', category: 'Core' },
  { url: 'https://www.universalhotels.com.au/about-us', title: 'Universal Hotels - About Us', category: 'Core' },
  { url: 'https://www.universalhotels.com.au/functions-events', title: 'Universal Hotels - Functions & Events', category: 'Conversion' },
  { url: 'https://www.universalhotels.com.au/the-oxford-hotel', title: 'The Oxford Hotel | Pub, Nightclub, Functions', category: 'Venue' },
  { url: 'https://www.universalhotels.com.au/universalsyd', title: 'Universal | Iconic Oxford Street Venue', category: 'Venue' },
  { url: 'https://www.universalhotels.com.au/erskineville', title: 'Imperial Hotel Erskineville', category: 'Venue' },
  { url: 'https://www.universalhotels.com.au/thelordroberts', title: 'The Lord Roberts Hotel', category: 'Venue' },
  { url: 'https://www.universalhotels.com.au/the-tudor', title: 'Tudor Hotel Redfern', category: 'Venue' },
  { url: 'https://www.universalhotels.com.au/brighton-hotel', title: 'The Riley Hotel (formerly Brighton Hotel)', category: 'Venue' },
  { url: 'https://www.universalhotels.com.au/riverviewhotel', title: 'Riverview Hotel Tempe', category: 'Venue' },
  { url: 'https://www.universalhotels.com.au/tempe-hotel', title: 'Tempe Hotel', category: 'Venue' },
  { url: 'https://www.universalhotels.com.au/theharold', title: 'The Harold Forest Lodge', category: 'Venue' },
  { url: 'https://www.universalhotels.com.au/palacehotel', title: 'Palace Hotel Haymarket', category: 'Venue' },
  { url: 'https://www.universalhotels.com.au/the-evening-star', title: 'Evening Star Surry Hills', category: 'Venue' },
  { url: 'https://www.universalhotels.com.au/moko', title: 'Moko Eastwood', category: 'Venue' },
  { url: 'https://www.universalhotels.com.au/v-bar', title: 'V Bar Sydney CBD', category: 'Venue' },
  { url: 'https://crownhotel.com.au/stay/', title: 'Crown Hotel Surry Hills - Accommodation', category: 'Accommodation' },
  { url: 'https://riverviewhoteltempe.com.au/accommodation-riverview-hotel/', title: 'Riverview Hotel Tempe - Accommodation', category: 'Accommodation' }
];

export const IA_AUDIT_RECOMMENDATIONS = [
  {
    area: 'Architecture & Hierarchy',
    currentFlaw: 'Legacy Squarespace website mixes external redirect links (e.g. `/https/civichotelsydneycomau`) with internal subpages, causing jarring redirect loops, loss of brand authority, and fractured analytics.',
    solution: 'Establish a unified, high-authority master portal with native venue microsite directories, unified function enquiry workflows, and streamlined external links.'
  },
  {
    area: 'Functions & Lead Generation',
    currentFlaw: 'Event enquiries rely on disjointed plain email mailto links or divergent third-party forms with no instant capacity filtering or date selector.',
    solution: 'Implement an interactive Functions Concierge filtering by guest count, occasion type (cocktail vs seated), and precinct, with a direct high-converting RFP lead funnel.'
  },
  {
    area: 'Accommodation Booking Funnel',
    currentFlaw: 'Accommodation is buried under nested navigation without a dedicated central landing experience for Crown Hotel, Riverview, and Tempe.',
    solution: 'Build a dedicated Accommodation hub with room visualizers, amenity badges, direct booking routing, and location proximity highlights (SCG, Sydney Airport, CBD).'
  },
  {
    area: 'What’s On & Nightlife Calendar',
    currentFlaw: 'Weekly events (Drag Shows at Universal, Drag & Dine at Imperial, trivia, live music, sports) are siloed across disconnected individual venue social pages.',
    solution: 'Create a cross-portfolio dynamic What’s On engine with day-of-week filters, entertainment categories (Drag & LGBTQIA+, Live Music & DJs, Sports & TAB, Trivia & Raffles), and direct ticket/booking CTAs.'
  },
  {
    area: 'Local SEO & Schema.org',
    currentFlaw: 'Individual subpages lack structured JSON-LD Schema (BarOrPub, Hotel, Event, LocalBusiness), missing rich snippet potential for Sydney queries.',
    solution: 'Embed automated Schema.org markup (BarOrPub, LodgingBusiness, EventVenue) with verified geocodes, openingHoursSpecification, and priceRanges for all 16 locations.'
  }
];
