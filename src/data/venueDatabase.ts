export interface VenueRecord {
  venueName: string;
  url: string;
  locationSuburb: string;
  address: string;
  phone: string;
  openingHours: string;
  venueType: string;
  description: string;
  dining: string;
  bar: string;
  nightlife: string;
  entertainment: string;
  functions: string;
  accommodation: string;
  bookingUrl: string;
  externalWebsite: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
  };
  functionCapacity: string;
  functionSpaces: string[];
  notes: string;
}

export const VENUE_DATABASE: VenueRecord[] = [
  {
    venueName: 'Civic Hotel',
    url: '/venues/civic-hotel',
    locationSuburb: 'Sydney CBD',
    address: '388 Pitt St, Sydney NSW 2000',
    phone: '(02) 8080 7015',
    openingHours: 'Monday to Sunday: 10:00am – 4:00am',
    venueType: 'Heritage Multi-Level Pub, Nightclub & Dining',
    description: 'A grand Art Deco landmark dating back to 1940 on the corner of Pitt and Goulburn Streets. Spanning three distinct levels, it encompasses the subterranean Civic Underground, the bustling street-level Civic Saloon, and Ni Hao Bar & Dining.',
    dining: 'Ni Hao Bar & Dining offers nostalgic Hong Kong golden-age Cantonese dining, banquet sharing menus, dim sum, and modern Asian bar snacks.',
    bar: 'Full public saloon bar with extensive local and craft tap beers, plus an Asian-fusion cocktail program at Ni Hao Bar.',
    nightlife: 'Civic Underground is Sydney premier boutique basement music room, featuring state-of-the-art acoustic tuning and late trade until 4am.',
    entertainment: 'Live bands, indie club nights, electronic music showcases, and private ticketed DJ performances.',
    functions: 'Versatile multi-level corporate events, milestone birthdays, and private parties accommodating from 20 up to 300 guests.',
    accommodation: 'None on site.',
    bookingUrl: 'https://civichotelsydney.com.au/make-a-booking/',
    externalWebsite: 'https://civichotelsydney.com.au/',
    socialLinks: {
      instagram: 'https://www.instagram.com/civichotelsydney/',
      facebook: 'https://www.facebook.com/civichotelsydney/'
    },
    functionCapacity: 'Up to 300 standing in Civic Underground; 250 in Civic Saloon / Ni Hao Bar.',
    functionSpaces: [
      'Civic Underground (Cap: 300 standing, 100 seated) - Tuned Allen & Heath sound, stage, LED ceiling, private bar, cloak room',
      'Civic Saloon (Cap: 150 standing) - Heritage Art Deco ground-floor bar',
      'Ni Hao Bar & Dining (Cap: 120 standing, 80 seated) - Neon-lit Hong Kong aesthetic'
    ],
    notes: 'Historic 1940 architectural landmark. Critical Sydney CBD nightlife anchor with a rare 4am license.'
  },
  {
    venueName: 'The Oxford Hotel',
    url: '/venues/the-oxford-hotel',
    locationSuburb: 'Darlinghurst',
    address: '134 Oxford St, Darlinghurst NSW 2010',
    phone: '(02) 8080 7080',
    openingHours: 'Monday to Sunday: 10:00am – 4:00am',
    venueType: 'Historic LGBTQIA+ Multi-Story Venue & Nightclub',
    description: 'Standing proudly on Taylor Square for over a century, The Oxford Hotel is a cornerstone of Oxford Street culture. It is configured across four dynamic levels including Polo Lounge, Gingers, Oxford Underground, and the streetfront Bistro terrace.',
    dining: 'Classic pub meals, burgers, schnitzels, share platters, and casual bistro dining on the ground-floor terrace overlooking Taylor Square.',
    bar: 'Multiple cocktail bars including Polo Lounge signature cocktails, Gingers show bar, and Oxford Bar craft beers on tap.',
    nightlife: 'High-energy basement parties at Oxford Underground, club nights, and weekly dance parties until 4am 7 days a week.',
    entertainment: 'Weekly drag spectacles, resident DJs, cabaret showcases, piano performances in Gingers, and queer community gatherings.',
    functions: 'Four distinct hireable spaces ideal for milestone birthdays, corporate mixers, community galas, and late-night dance parties.',
    accommodation: 'None on site.',
    bookingUrl: 'https://www.theoxfordhotel.com.au',
    externalWebsite: 'https://www.theoxfordhotel.com.au',
    socialLinks: {
      instagram: 'https://www.instagram.com/theoxfordhotel/',
      facebook: 'https://www.facebook.com/theoxfordhotel/'
    },
    functionCapacity: 'Polo Lounge: 100 standing / 70 seated; Gingers: 140 standing / 100 seated; Oxford Underground: 220 standing.',
    functionSpaces: [
      'Polo Lounge (Level 3 - Cap: 100 standing, 70 seated) - Fireplace, piano, private bar, Taylor Square balcony',
      'Gingers (Level 1 - Cap: 140 standing, 100 seated) - Heritage stage, DJ booth, lighting rig, private bar, booth seating',
      'Oxford Underground (Basement - Cap: 220 standing) - Sunken dancefloor, DJ booth, private bar, cloakroom'
    ],
    notes: 'More than 100 years of continuous hospitality on Taylor Square. One of the most historically significant LGBTQIA+ venues in Australia.'
  },
  {
    venueName: 'Universal Sydney',
    url: '/venues/universal-sydney',
    locationSuburb: 'Darlinghurst',
    address: '85-91 Oxford St, Darlinghurst NSW 2010',
    phone: '(02) 8080 7065',
    openingHours: 'Downstairs: Mon to Sun 12:00pm – Late; Upstairs Superclub: Event-driven weekend club schedule',
    venueType: 'Superclub, Drag Performance Hall & Cocktail Lounge',
    description: 'Occupying the historic former Midnight Shift site, Universal Sydney was established in 2018. It features world-famous pink and gold mosaic tiled walls, neon wings, a ground-floor drag bar, and a state-of-the-art dual-level Superclub upstairs.',
    dining: 'Gourmet bar snacks, share baskets, and cocktail-friendly grazing platters.',
    bar: 'Bespoke cocktail lounge downstairs and high-volume express service bars across all levels of the Superclub.',
    nightlife: 'World-renowned LGBTQIA+ nightlife temple with cutting-edge lighting, laser arrays, and national/international guest DJs.',
    entertainment: 'Sensational live drag productions 7 nights a week, aerialists, themed club nights, and community dance events.',
    functions: 'Exclusive hire for private club takeovers, brand showcases, Mardi Gras activations, and production launches.',
    accommodation: 'None on site.',
    bookingUrl: 'https://www.universal.sydney',
    externalWebsite: 'https://www.universal.sydney',
    socialLinks: {
      instagram: 'https://www.instagram.com/universalsydney/',
      facebook: 'https://www.facebook.com/universalsydney/'
    },
    functionCapacity: 'Up to 500+ across entire multi-level venue [CONTENT TO VERIFY specific private split].',
    functionSpaces: [
      'Ground Floor Drag Bar - Cabaret stage, neon wings photo wall, cocktail bar',
      'Universal Superclub (Upstairs) - Dual-level dancefloor, mezzanine viewing, festival-grade laser and sound rig'
    ],
    notes: 'Rebranded from the iconic Midnight Shift in 2018. Symbol of Oxford Street renaissance.'
  },
  {
    venueName: 'The Imperial Erskineville',
    url: '/venues/imperial-hotel-erskineville',
    locationSuburb: 'Erskineville',
    address: '35 Erskineville Rd, Erskineville NSW 2043',
    phone: '(02) 8080 7060',
    openingHours: 'Main Bar: Wed-Thu 4pm–12am, Fri 4pm–3am, Sat 4pm–4am; Rooftop: Mon-Fri 4pm–10pm, Sat-Sun 12pm–10pm; Basement: Event nights',
    venueType: 'Queer Cultural Landmark, Dining Institution & Underground Club',
    description: 'Since 1983, The Imperial has been a beacon of LGBTQIA+ culture and the spiritual birthplace of Priscilla, Queen of the Desert. Features Priscilla Drag & Dine in the Main Bar, an open-air rooftop pizzeria with Pizza Bros, and an underground performance bunker.',
    dining: 'Priscilla’s Drag & Dine multi-course banquet menus and artisan Neapolitan pizzas from Pizza Bros on the Rooftop.',
    bar: 'Curated craft spritzes, queer-themed signature cocktails, local natural wines, and tap beers.',
    nightlife: 'Basement club nights hosting community collectives including Birdcage, Superficial, and Dumpster Dive until 4am.',
    entertainment: 'Drag Bingo, drag trivia on Wednesdays, weekend Drag & Dine stage shows, and late-night underground DJ raves.',
    functions: 'Weddings, civil ceremonies, milestone birthdays, and private terrace gatherings.',
    accommodation: 'None on site.',
    bookingUrl: 'https://imperialerskineville.com.au/make-a-booking/',
    externalWebsite: 'https://imperialerskineville.com.au/',
    socialLinks: {
      instagram: 'https://www.instagram.com/theimperialerskineville/',
      facebook: 'https://www.facebook.com/imperialerskineville/'
    },
    functionCapacity: 'Up to 350 combined standing / 180 seated.',
    functionSpaces: [
      'Priscilla’s Main Bar & Restaurant - Full performance stage, drag dining setup',
      'Imperial Rooftop - Sunlit open-air terrace, Pizza Bros bar, Inner West views',
      'Imperial Basement - Underground sound bunker, performance stage, club lighting'
    ],
    notes: 'National cultural institution immortalised in Australian cinema history. Acquired by Universal Hotels in 2023 for $20M.'
  },
  {
    venueName: 'Crown Hotel Surry Hills',
    url: '/venues/crown-hotel-surry-hills',
    locationSuburb: 'Surry Hills',
    address: '587-589 Crown St, Surry Hills NSW 2010',
    phone: '(02) 8080 7095',
    openingHours: 'Monday to Sunday: 10:00am – 4:00am [CONTENT TO VERIFY exact Sunday close]',
    venueType: 'Boutique Hotel Accommodation, Sports Bar & Function Venue',
    description: 'Located at the bustling junction of Crown and Cleveland Streets, Crown Hotel Surry Hills combines boutique guest rooms, an active sports & TAB bar, and the private Level 2 Sapphire Lounge.',
    dining: 'Elevated pub fare, craft burgers, parmesan truffle chips, steaks, salads, and seasonal specials.',
    bar: 'Extensive tap beers, rotating craft selections, wine lists, and classic cocktails.',
    nightlife: 'Relaxed social buzz with late-night trading and evening sports screenings.',
    entertainment: 'Live NRL, AFL, cricket, UFC broadcasts across high-definition sports screens; TAB wagering.',
    functions: 'Sapphire Lounge on Level 2 is a dedicated private function sanctuary for up to 200 guests.',
    accommodation: 'Boutique hotel rooms on upper floors featuring en-suite bathrooms, air conditioning, free Wi-Fi, and communal guest lounge.',
    bookingUrl: 'https://crownhotel.com.au/stay/',
    externalWebsite: 'https://crownhotel.com.au/',
    socialLinks: {
      instagram: 'https://www.instagram.com/crownhotel_surryhills/',
      facebook: 'https://www.facebook.com/crownhotelsurryhills/'
    },
    functionCapacity: 'Sapphire Lounge: 200 standing / 100 seated.',
    functionSpaces: [
      'Sapphire Lounge (Level 2) - 2 conjoined rooms, private bar, balcony overlooking Crown St, private unisex bathrooms, AV/mic'
    ],
    notes: 'Key accommodation asset situated minutes from SCG, Allianz Stadium, and Central Station.'
  },
  {
    venueName: 'The Riley Hotel',
    url: '/venues/the-riley-hotel',
    locationSuburb: 'Darlinghurst',
    address: '77 Oxford St, Darlinghurst NSW 2010',
    phone: '(02) 8080 7090',
    openingHours: 'Sunday to Thursday: 8:00am – 2:00am; Friday to Saturday: 8:00am – 5:00am',
    venueType: 'Heritage Gastro Pub with Al Fresco Dining',
    description: 'Anchoring the corner of Oxford and Riley Streets, this heritage-listed venue (previously The Brighton Hotel) combines Victorian timber craftsmanship with breezy streetfront dining and late weekend trading.',
    dining: 'Fresh local pub classics, counter lunches, seafood dishes, and share platters.',
    bar: 'Carefully curated tap beer line-up, Australian wines, and contemporary cocktail list.',
    nightlife: 'Late 5am weekend trading with resident weekend DJs and Oxford Street people-watching.',
    entertainment: 'Weekend DJ residencies, sports screenings, and social corner pub activations.',
    functions: 'Semi-private group bookings, celebration tables, and casual terrace gatherings.',
    accommodation: 'None on site.',
    bookingUrl: 'https://therileyhotel.com.au/',
    externalWebsite: 'https://therileyhotel.com.au/',
    socialLinks: {
      instagram: 'https://www.instagram.com/therileyhotel/'
    },
    functionCapacity: 'Group bookings up to 80 guests.',
    functionSpaces: [
      'Riley Street Al Fresco Terrace - Sun-drenched street dining',
      'Public Saloon Bar - Heritage wood and marble bar'
    ],
    notes: 'Heritage-listed property transformed from The Brighton Hotel into The Riley.'
  },
  {
    venueName: 'The Tudor Hotel',
    url: '/venues/the-tudor-hotel',
    locationSuburb: 'Redfern',
    address: '90 Pitt St, Redfern NSW 2016',
    phone: '(02) 8080 7026',
    openingHours: 'Monday to Saturday: 10:00am – 1:00am; Sunday: 10:00am – 12:00am',
    venueType: 'Community Neighbourhood Pub & Rooftop Terrace',
    description: 'Located at the corner of Pitt and Redfern Streets, The Tudor is a community favourite known for its leafy upstairs terrace, weekly trivia, Friday meat raffles, and traditional Sunday roasts.',
    dining: 'Honest pub classics, daily specials, traditional Sunday roasts, and modern vegetarian offerings.',
    bar: 'Cold local tap beers, ciders, boutique seltzers, and neighbourhood drink prices.',
    nightlife: 'Warm, low-key evening social atmosphere with local craft banter.',
    entertainment: 'Wednesday night trivia, Friday night meat and vegetable raffles, Jackpot Joker, live sports on big screens.',
    functions: 'Upstairs function room with sunny private outdoor terrace for birthdays, engagements, and work celebrations.',
    accommodation: 'None on site.',
    bookingUrl: 'https://tudorhotel.com.au/functions/',
    externalWebsite: 'https://www.tudorhotel.com.au',
    socialLinks: {
      instagram: 'https://www.instagram.com/tudorhotelredfern/',
      facebook: 'https://www.facebook.com/tudorhotelredfern/'
    },
    functionCapacity: 'Upstairs Terrace & Room: 60 standing / 30 seated.',
    functionSpaces: [
      'Upstairs Private Room & Terrace - Indoor tables and chairs, adjoining sunny outdoor balcony terrace, TVs with USB, Bluetooth sound'
    ],
    notes: 'Redfern local staple with a strong community loyalty and dog-friendly outdoor areas.'
  },
  {
    venueName: 'The Lord Roberts Hotel',
    url: '/venues/the-lord-roberts-hotel',
    locationSuburb: 'Darlinghurst',
    address: '64 Stanley St, Darlinghurst NSW 2010',
    phone: '(02) 8080 7012',
    openingHours: 'Monday to Wednesday: 10:00am – 12:00am; Thursday to Saturday: 10:00am – 1:00am; Sunday: [CONTENT TO VERIFY]',
    venueType: 'Heritage Multi-Level Pub & Rooftop Bar',
    description: 'Established in the late 19th century on vibrant Stanley Street, The Lord Roberts spans multiple storeys including an atmospheric ground-floor public bar, Bob’s Lounge on Level 1, and an open-air rooftop.',
    dining: 'Gastropub steaks, hearty burgers, schnitzels, and bar snacks.',
    bar: 'Classic tap lineup, Australian wines, and rooftop aperitivo cocktails.',
    nightlife: 'Intimate evening drinks and rooftop social gatherings.',
    entertainment: 'Live televised sports, relaxed music, and open-air skyline viewing.',
    functions: 'Two exceptional event spaces: Bob’s Lounge (private bar & balcony) and The Rooftop (retractable awning & city skyline views).',
    accommodation: 'None on site.',
    bookingUrl: 'https://www.lordrobertshotel.com.au',
    externalWebsite: 'https://www.lordrobertshotel.com.au',
    socialLinks: {
      instagram: 'https://www.instagram.com/thelordroberts/'
    },
    functionCapacity: "Bob's Lounge: 80 standing / 50 seated; The Rooftop: 120 standing / 60 seated.",
    functionSpaces: [
      "Bob's Lounge (Level 1) - Private bar, private Stanley St balcony, dancefloor, AV equipment, private bathrooms",
      'The Rooftop (Level 2) - Open-air with retractable weather awning, city skyline views'
    ],
    notes: 'Acquired and refurbished by Universal Hotels, preserving its beloved heritage charm on Stanley Street.'
  },
  {
    venueName: 'The Harold',
    url: '/venues/the-harold',
    locationSuburb: 'Forest Lodge',
    address: '70A Ross St, Forest Lodge NSW 2037',
    phone: '(02) 8080 7030',
    openingHours: 'Monday to Saturday: 10:00am – 12:00am; Sunday: 10:00am – 10:00pm',
    venueType: 'Suburban Heritage Pub & Dining Room',
    description: 'Nestled in the residential streets of Forest Lodge near Glebe and the University of Sydney, The Harold offers craft beers, honest food, and charming leafy outdoor tables.',
    dining: 'Famous Sunday roasts, chicken schnitzels, craft burgers, and share plates.',
    bar: 'Curated craft beer taps, local natural wines, and family-friendly hospitality.',
    nightlife: 'Low-key evening dining and relaxed community gatherings.',
    entertainment: 'Weekend sports, relaxed family lunches, and pub trivia.',
    functions: 'Charming group bookings, birthday celebrations, and family gatherings.',
    accommodation: 'None on site.',
    bookingUrl: 'https://www.universalhotels.com.au/theharold',
    externalWebsite: 'https://www.universalhotels.com.au/theharold',
    socialLinks: {},
    functionCapacity: 'Group bookings up to 70 guests.',
    functionSpaces: [
      'Ross Street Verandah - Leafy outdoor covered seating',
      'Dining Room - Heritage bistro seating'
    ],
    notes: 'Prime inner-west neighbourhood dining spot close to USYD and Glebe.'
  },
  {
    venueName: 'The Evening Star',
    url: '/venues/the-evening-star',
    locationSuburb: 'Surry Hills',
    address: '360 Elizabeth St, Surry Hills NSW 2010',
    phone: '(02) 8080 7063',
    openingHours: 'Monday to Sunday: 10:00am – 4:00am',
    venueType: 'High-Energy Transit Sports Bar & TAB',
    description: 'Directly opposite Central Railway Station on Elizabeth Street, The Evening Star is a fast-paced transit pub serving commuters, sports fans, and workers around the clock with 4am late trading.',
    dining: 'Fast pub classics, burgers, steaks, hot chips, and counter meals.',
    bar: 'Ice-cold draught beer taps, canned craft brews, and spirits.',
    nightlife: 'Late 4am license catering to late-shift workers, travelers, and sports supporters.',
    entertainment: 'Extensive live sports screens broadcast across the venue; full TAB wagering facilities.',
    functions: 'Casual group sports gatherings and post-commute catchups.',
    accommodation: 'None on site.',
    bookingUrl: 'https://www.eveningstarhotel.com.au',
    externalWebsite: 'https://www.eveningstarhotel.com.au',
    socialLinks: {},
    functionCapacity: 'Casual groups up to 40 guests.',
    functionSpaces: [
      'Central Sports Lounge - Big-screen viewing zone',
      'Elizabeth Street Outdoor Perch'
    ],
    notes: 'Crucial transport-hub destination across from Sydney Central Station.'
  },
  {
    venueName: 'Palace Hotel',
    url: '/venues/palace-hotel',
    locationSuburb: 'Haymarket',
    address: 'Capital Square Building, 730-742 George St, Haymarket NSW 2000',
    phone: '(02) 8080 7085',
    openingHours: 'Monday to Sunday: 10:00am – 4:00am',
    venueType: 'Bustling Chinatown & Theatre District Pub',
    description: 'Positioned inside the Capital Square complex on George Street, the Palace Hotel caters to Chinatown shoppers, Capitol Theatre patrons, and sports enthusiasts with 4am trading 7 days.',
    dining: 'Asian-fusion bar food, burgers, wings, and hearty pub classics.',
    bar: 'Full-service bar with domestic and international beers, spirits, and quick-service taps.',
    nightlife: 'Late 4am night venue on the light rail corridor.',
    entertainment: 'Multi-screen sports broadcasting, TAB terminals, and lively George Street buzz.',
    functions: 'Informal gatherings and post-theatre drinks.',
    accommodation: 'None on site.',
    bookingUrl: 'https://palacesydney.com.au/',
    externalWebsite: 'https://palacesydney.com.au/',
    socialLinks: {},
    functionCapacity: 'Group bookings up to 60 guests.',
    functionSpaces: [
      'Capital Square Sports Bar - George Street light rail frontage'
    ],
    notes: 'Directly adjacent to Capitol Theatre and Chinatown.'
  },
  {
    venueName: 'Tempe Hotel',
    url: '/venues/tempe-hotel',
    locationSuburb: 'Tempe',
    address: '735 Princes Hwy, Tempe NSW 2044',
    phone: '(02) 8080 7075',
    openingHours: 'Monday to Saturday: 10:00am – 4:00am; Sunday: 10:00am – 2:00am',
    venueType: 'Suburban Pub, Beer Garden, Function Hall & Accommodation',
    description: 'A spacious suburban institution along the Princes Highway corridor, Tempe Hotel provides a 150-capacity indoor-outdoor function room, umbrella-shaded picnic beer garden, full TAB, and budget lodging.',
    dining: 'Hearty bistro menu, steaks, schnitzels, pizzas, and family-friendly meals.',
    bar: 'Generous public bar with cold beer taps and sports lounge.',
    nightlife: 'Late license trading until 4am Monday through Saturday.',
    entertainment: 'Comprehensive sports broadcasts, TAB wagering, and weekend community gatherings.',
    functions: 'Versatile 150-capacity indoor/outdoor function room equipped with 4 indoor TVs, microphone, Bluetooth audio, and outdoor picnic tables.',
    accommodation: 'Straightforward pub accommodation rooms suitable for contractors, commuters, and airport travellers.',
    bookingUrl: 'https://tempehotel.com.au/functions-at-tempe-hotel/',
    externalWebsite: 'https://tempehotel.com.au/',
    socialLinks: {},
    functionCapacity: 'Function Hall: 150 standing / 80 seated.',
    functionSpaces: [
      'The Tempe Function Room & Garden (Cap: 150) - 4 indoor TVs, LED lights, plug-in mic, 6 outdoor picnic tables with umbrellas'
    ],
    notes: 'Key community asset with both large-scale function spaces and on-site lodging.'
  },
  {
    venueName: 'Riverview Hotel',
    url: '/venues/riverview-hotel-tempe',
    locationSuburb: 'Tempe',
    address: '900 Princes Hwy, Tempe NSW 2044',
    phone: '(02) 8080 7072',
    openingHours: 'Monday to Sunday: 10:00am – 12:00am',
    venueType: 'Contemporary Gastropub, Greek Taverna & Boutique Lodging',
    description: 'Positioned near the Cooks River in Tempe, the Riverview Hotel underwent a comprehensive renewal, establishing Stix Hellenic Taverna on site, private balcony event spaces, and refurbished hotel rooms.',
    dining: 'Modern Greek gastronomy by Stix Hellenic Taverna: slow-cooked meats, fresh seafood, chargrilled pita, dips, and Hellenic banquets.',
    bar: 'Curated Mediterranean wine list, ouzo, signature cocktails, and craft beer taps.',
    nightlife: 'Relaxed dining conviviality and weekend celebratory dinners.',
    entertainment: 'Acoustic background music, Greek banquet dining experiences, and celebrations.',
    functions: 'Newly refurbished 50-guest private space with open-air balcony, catered with Stix Hellenic Taverna banquets.',
    accommodation: 'Newly refurbished contemporary boutique guest rooms close to Sydenham Metro and Sydney Airport.',
    bookingUrl: 'https://riverviewhoteltempe.com.au/',
    externalWebsite: 'https://riverviewhoteltempe.com.au/',
    socialLinks: {
      instagram: 'https://www.instagram.com/riverviewhoteltempe/'
    },
    functionCapacity: 'Balcony & Taverna Space: 50 guests maximum.',
    functionSpaces: [
      'Riverview Balcony & Taverna Room - Indoor dining flowing to scenic balcony, Stix Hellenic banquet menu'
    ],
    notes: 'Major 2024-2025 hospitality transformation establishing a destination dining identity.'
  },
  {
    venueName: 'Enfield Hotel',
    url: '/venues/enfield-hotel',
    locationSuburb: 'Enfield',
    address: '14 Coronation Parade, Enfield NSW 2136',
    phone: '(02) 8080 7023',
    openingHours: 'Monday to Saturday: 10:00am – 4:00am; Sunday: 10:00am – 12:00am',
    venueType: 'Inner West Sports Bar, Bistro & Entertainment Pub',
    description: 'A community cornerstone in Sydney’s Inner West delivering live sport on massive screens, bistro dining, and late trading.',
    dining: 'Substantial bistro steaks, burgers, chicken parmigianas, and family favourites.',
    bar: 'Spacious sports bar, wide tap selection, and happy hours (Mon-Fri 4-6pm & weekends 12-3pm).',
    nightlife: 'Late 4am trade on weeknights and weekends.',
    entertainment: 'Wall-to-wall live sports coverage, big screen matches, and TAB wagering.',
    functions: 'Spacious areas available for social sports gatherings and casual parties.',
    accommodation: 'None on site.',
    bookingUrl: 'https://theenfieldhotel.com.au/',
    externalWebsite: 'https://theenfieldhotel.com.au/',
    socialLinks: {
      instagram: 'https://www.instagram.com/enfieldhotel/',
      facebook: 'https://www.facebook.com/enfieldhotel/'
    },
    functionCapacity: 'Groups up to 100 [CONTENT TO VERIFY dedicated room spec].',
    functionSpaces: [
      'Sports Lounge & Bistro Seating'
    ],
    notes: 'Acquired and revitalised by Universal Hotels to serve the Inner West sports demographic.'
  },
  {
    venueName: 'Moko Eastwood',
    url: '/venues/moko-eastwood',
    locationSuburb: 'Eastwood',
    address: '75 Rowe St, Eastwood NSW 2122',
    phone: '(02) 8080 7022',
    openingHours: 'Monday to Saturday: 10:00am – 4:00am; Sunday: 10:00am – 2:00am',
    venueType: 'Contemporary Dining, Cocktail Bar & Late Lounge',
    description: 'Located in Eastwood’s bustling Rowe Street precinct, Moko combines modern Asian culinary creations with mixology cocktails and a sleek lounge environment.',
    dining: 'Modern Asian-fusion share plates, skewers, bao, and late-night supper.',
    bar: 'Artisan cocktails, Japanese whiskeys, soju cocktails, and premium beers.',
    nightlife: 'Late 4am trade catering to northern suburbs nightlife and late dinners.',
    entertainment: 'Curated DJ sets, ambient lighting, and social dining buzz.',
    functions: 'Private dining bookings and celebratory cocktail parties.',
    accommodation: 'None on site.',
    bookingUrl: 'https://mokoeastwood.com.au/',
    externalWebsite: 'https://mokoeastwood.com.au/',
    socialLinks: {},
    functionCapacity: 'Group bookings up to 70 guests.',
    functionSpaces: [
      'Moko Lounge & Dining Floor'
    ],
    notes: 'Northern suburbs presence expanding Universal Hotels footprint into multicultural northwest Sydney.'
  },
  {
    venueName: 'V Bar',
    url: '/venues/v-bar',
    locationSuburb: 'Sydney CBD',
    address: '111 Liverpool St, Sydney NSW 2000',
    phone: '(02) 8080 7020',
    openingHours: 'Monday to Sunday: 10:00am – 4:00am',
    venueType: 'CBD Sports Bar, TAB & Satang Thai Kitchen',
    description: 'Located at World Square, V Bar pairs high-energy sports and TAB betting with authentic Thai street food from Satang Thai until 4am every night.',
    dining: 'Authentic Thai street food from Satang Thai: pad thai, boat noodles, tom yum, crispy pork belly, and wok dishes.',
    bar: 'Cold draught beers, Asian bottled beers, spirits, and quick CBD drinks.',
    nightlife: 'Continuous 4am trading 7 days a week.',
    entertainment: 'Multi-screen live international sports, racing, and full TAB wagering.',
    functions: 'Informal corporate group lunches and post-work drinks.',
    accommodation: 'None on site.',
    bookingUrl: 'https://vbar.com.au/',
    externalWebsite: 'https://vbar.com.au/',
    socialLinks: {},
    functionCapacity: 'Casual groups up to 50.',
    functionSpaces: [
      'V Bar Sports Floor & Satang Dining'
    ],
    notes: 'Renowned CBD late-night spot popular for spicy Thai meals and late-night drinks.'
  }
];

export const PARTNERSHIP_VENUES = [
  {
    venueName: 'Bat & Ball Hotel',
    locationSuburb: 'Redfern / Surry Hills',
    address: '483 Cleveland St, Redfern NSW 2016',
    notes: 'Historic sporting pub held in operational partnership with Working Holiday Group.'
  },
  {
    venueName: 'Carlisle Castle Hotel',
    locationSuburb: 'Newtown',
    address: '19 Albermarle St, Newtown NSW 2042',
    notes: 'Iconic backstreet Newtown pub acquired in 2026, operated in partnership with Working Holiday Group.'
  }
];
