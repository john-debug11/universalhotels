export interface AccommodationRoom {
  name: string;
  bedType: string;
  maxGuests: number;
  description: string;
  features: string[];
  rateNote?: string;
  imageUrl?: string;
}

export interface AccommodationProperty {
  id: string;
  slug: string;
  propertyName: string;
  venueName: string;
  venueSlug: string;
  tagline: string;
  suburb: string;
  address: string;
  phone: string;
  email: string;
  websiteUrl: string;
  bookingUrl: string;
  heroImage: string;
  checkInTime: string;
  checkOutTime: string;
  parkingPolicy: string;
  receptionHours: string;
  shortDescription: string;
  fullOverview: string[];
  rooms: AccommodationRoom[];
  amenities: {
    title: string;
    description: string;
    icon: string;
  }[];
  nearbyAttractions: {
    name: string;
    distance: string;
    description: string;
  }[];
  venueFacilities: {
    name: string;
    description: string;
  }[];
  gallery: {
    url: string;
    caption: string;
    category: 'room' | 'venue' | 'exterior';
  }[];
}

export const ACCOMMODATION_PROPERTIES: AccommodationProperty[] = [
  {
    id: 'crown-hotel-accommodation',
    slug: 'crown-hotel-surry-hills',
    propertyName: 'Crown Hotel Boutique Stays',
    venueName: 'Crown Hotel Surry Hills',
    venueSlug: 'crown-hotel-surry-hills',
    tagline: 'Boutique hospitality above iconic Crown Street, minutes from SCG & Central Station.',
    suburb: 'Surry Hills',
    address: '587-589 Crown St, Surry Hills NSW 2010',
    phone: '(02) 8080 7050',
    email: 'stay@crownhotel.com.au',
    websiteUrl: 'https://crownhotel.com.au',
    bookingUrl: 'https://crownhotel.com.au/stay/',
    heroImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1600&auto=format&fit=crop',
    checkInTime: 'From 2:00pm',
    checkOutTime: 'Until 10:00am',
    parkingPolicy: 'Street parking along surrounding Surry Hills streets (Cleveland St and residential zones).',
    receptionHours: 'Managed via the Ground Floor Main Bar (10:00am – late). Late check-in available by arrangement.',
    shortDescription: 'Refurbished boutique guest rooms in the heart of Surry Hills. Ideal for sporting weekends, business trips, and cultural getaways with SCG, Allianz Stadium, and Sydney CBD right at your doorstep.',
    fullOverview: [
      'Perched above the historic Crown Hotel at the prominent corner of Crown and Cleveland Streets, our boutique guest rooms combine the warmth of traditional Sydney pub hospitality with contemporary creature comforts.',
      'Each guest room features commercial-grade double glazing and sound insulation, en-suite bathroom, individually controlled air conditioning, and complimentary high-speed Wi-Fi. Staying guests enjoy immediate downstairs access to the vibrant sports bar, sunny streetfront verandah, and bistro counter dining.',
      'Whether you are visiting Sydney for a marquee cricket or AFL match at the SCG (a relaxed 10-minute walk down Cleveland Street), attending meetings in the CBD, or exploring Surry Hills’ legendary culinary and specialty coffee scene, Crown Hotel provides an unbeatable inner-city base.'
    ],
    rooms: [
      {
        name: 'Deluxe Queen with En-Suite',
        bedType: '1 Queen Bed',
        maxGuests: 2,
        description: 'Thoughtfully appointed private room with plush queen mattress, private en-suite bathroom, smart TV, and work desk.',
        features: ['Private En-Suite Bathroom', 'Reverse-Cycle Air Conditioning', 'Smart TV with Streaming', 'High-Speed Wi-Fi', 'Tea & Coffee Amenities'],
        rateNote: 'Rates subject to seasonal dates and matchday schedules. Check live availability.',
        imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Standard Queen Room',
        bedType: '1 Queen Bed',
        maxGuests: 2,
        description: 'Comfortable and private room with queen bedding, sound-insulated windows, and contemporary amenities.',
        features: ['En-Suite Shower', 'Quiet Double-Glazed Windows', 'Mini Refrigerator', 'Clothes Hanging Rail', 'Crisp Hotel Linens'],
        rateNote: 'Direct booking best rate guarantee via venue portal.',
        imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Twin Share Room',
        bedType: '2 Single Beds',
        maxGuests: 2,
        description: 'Ideal for friends or sports fans attending fixtures at Allianz Stadium or the SCG.',
        features: ['Two Single Beds', 'En-Suite Bathroom', 'Air Conditioning', 'Flat-Screen TV', 'Free Wi-Fi'],
        rateNote: 'Check live portal for group and multi-night tariffs.',
        imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop'
      }
    ],
    amenities: [
      { title: 'En-Suite Bathrooms', description: 'Private bathrooms with hot rain showers and complimentary bath essentials.', icon: 'Bath' },
      { title: 'Air Conditioning', description: 'Individual climate control in every room for year-round comfort.', icon: 'Wind' },
      { title: 'High-Speed Wi-Fi', description: 'Reliable high-speed wireless internet throughout all guest rooms.', icon: 'Wifi' },
      { title: 'Downstairs Bistro & Bar', description: 'Hearty counter meals, tap beers, and sports bar screens just steps downstairs.', icon: 'Utensils' },
      { title: 'Sound Insulation', description: 'Commercial-grade double glazing for a quiet and peaceful sleep above the street.', icon: 'ShieldCheck' },
      { title: 'Smart TVs', description: 'Modern televisions with streaming capabilities and local digital channels.', icon: 'Tv' }
    ],
    nearbyAttractions: [
      { name: 'Sydney Cricket Ground (SCG)', distance: '850m • 10 min walk', description: 'Australia’s iconic home of cricket and AFL Swans matches.' },
      { name: 'Allianz Stadium', distance: '900m • 11 min walk', description: 'World-class rectangular stadium hosting NRL, rugby, and international football.' },
      { name: 'Central Railway Station', distance: '950m • 12 min walk', description: 'Sydney’s main transit hub connecting trains, airport line, and metro.' },
      { name: 'Surry Hills Light Rail Stop', distance: '500m • 6 min walk', description: 'Devonshire Street light rail platform providing fast connections to Circular Quay and Randwick.' },
      { name: 'Crown Street Dining Corridor', distance: 'On your doorstep', description: 'Dozens of award-winning wine bars, bistros, and third-wave coffee roasters.' }
    ],
    venueFacilities: [
      { name: 'Crown Hotel Sports Bar', description: 'Massive HD screens broadcasting live NRL, AFL, Premier League, and UFC events with TAB wagering.' },
      { name: 'Crown Street Verandah', description: 'Alfresco sidewalk tables ideal for afternoon beers, people-watching, and pub lunches.' },
      { name: 'The Sapphire Lounge (Level 2)', description: 'Glamorous private function room with cocktail bar available for milestone gatherings.' },
      { name: 'Bistro Counter Dining', description: 'Famous chicken parmigianas, Angus burgers, steaks, and craft beer taps.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop', caption: 'Deluxe Queen guest room with en-suite', category: 'room' },
      { url: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1200&auto=format&fit=crop', caption: 'Heritage pub facade on Crown & Cleveland Streets', category: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop', caption: 'Contemporary guest bedding and amenities', category: 'room' },
      { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop', caption: 'Level 2 Sapphire Lounge cocktail bar', category: 'venue' },
      { url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop', caption: 'Vibrant ground floor sports bar and public saloon', category: 'venue' }
    ]
  },

  {
    id: 'riverview-hotel-accommodation',
    slug: 'riverview-hotel-tempe',
    propertyName: 'Riverview Hotel Waterfront Stays',
    venueName: 'Riverview Hotel',
    venueSlug: 'riverview-hotel-tempe',
    tagline: 'Refurbished boutique stays along Cooks River with Stix Hellenic dining, 7 minutes to Sydney Airport.',
    suburb: 'Tempe',
    address: '960 Princes Hwy, Tempe NSW 2044',
    phone: '(02) 8080 7030',
    email: 'info@riverviewhoteltempe.com.au',
    websiteUrl: 'https://riverviewhoteltempe.com.au',
    bookingUrl: 'https://riverviewhoteltempe.com.au/',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop',
    checkInTime: 'From 2:00pm',
    checkOutTime: 'Until 10:00am',
    parkingPolicy: 'Complimentary private on-site car park for staying guests and patrons.',
    receptionHours: 'Managed via the main hotel bar counter daily from 10:00am.',
    shortDescription: 'Modern refurbished boutique lodging positioned along the scenic Cooks River. Featuring authentic Greek dining at Stix Hellenic Taverna, free on-site parking, and rapid transit to Sydney Airport and Sydenham Metro.',
    fullOverview: [
      'Following a comprehensive revitalization, the Riverview Hotel on the Cooks River provides contemporary boutique lodging tailored for leisure guests, business travelers, and flight connections.',
      'The guest rooms offer calm, neutral interiors, comfortable bedding, en-suite bathrooms, air conditioning, and fast Wi-Fi. Staying at Riverview gives you front-row access to Stix Hellenic Taverna downstairs — where woodfired charcoal meats, Greek meze, and regional wines deliver an authentic Mediterranean culinary escape.',
      'Conveniently positioned just 7 minutes (4.5 km) from Sydney Domestic and International Terminals and an 8-minute walk from Sydenham Metro Station, Riverview Hotel bridges scenic waterfront leisure with effortless Sydney transit.'
    ],
    rooms: [
      {
        name: 'Refurbished King Room',
        bedType: '1 King Bed',
        maxGuests: 2,
        description: 'Spacious renovated room featuring premium king mattress, en-suite bathroom, smart television, and air conditioning.',
        features: ['Plush King Bed', 'Private En-Suite Bathroom', 'Air Conditioning', 'Fast Wi-Fi', 'Coffee & Tea Station'],
        rateNote: 'Verified direct booking via venue site.',
        imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Deluxe Double Room',
        bedType: '1 Double Bed',
        maxGuests: 2,
        description: 'Modern and peaceful retreat with contemporary finishings, suitable for solo travelers or couples.',
        features: ['Double Bedding', 'En-Suite Facilities', 'Flat-Screen TV', 'Sound Proofing', 'Complimentary Parking'],
        rateNote: 'Check live reservation system for dates.',
        imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Riverview Balcony Room',
        bedType: '1 King or Queen Bed',
        maxGuests: 2,
        description: 'Upgraded room offering direct access to an outdoor balcony space overlooking the surrounding parklands.',
        features: ['Balcony Access', 'King/Queen Bed', 'Air Conditioning', 'Work Desk', 'En-Suite Bathroom'],
        rateNote: 'Limited inventory. Subject to availability.',
        imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop'
      }
    ],
    amenities: [
      { title: 'Complimentary Parking', description: 'Free dedicated on-site patron and guest car park.', icon: 'Car' },
      { title: 'Stix Hellenic Taverna', description: 'Renowned authentic Greek charcoal dining and taverna banquets downstairs.', icon: 'Utensils' },
      { title: 'Airport Proximity', description: 'Only 7 minutes drive from Sydney Domestic & International Terminals.', icon: 'Plane' },
      { title: 'Sydenham Metro Transit', description: '8 minutes walk to Sydenham Station for ultra-fast metro connection to CBD.', icon: 'Train' },
      { title: 'Cooks River Parklands', description: 'Walking and cycling trails immediately adjacent to the venue.', icon: 'Trees' },
      { title: 'Fast Wi-Fi & Smart TV', description: 'High-speed internet and digital streaming capabilities in all rooms.', icon: 'Wifi' }
    ],
    nearbyAttractions: [
      { name: 'Sydney Airport (SYD)', distance: '4.5 km • 7 min drive', description: 'Sydney’s main international and domestic airport terminal precinct.' },
      { name: 'Sydenham Metro & Train Station', distance: '700m • 8 min walk', description: 'Direct metro service to Martin Place & Barangaroo in under 12 minutes.' },
      { name: 'Cooks River Foreshore Parklands', distance: '100m • 2 min walk', description: 'Scenic green corridors, pedestrian tracks, and dog-friendly recreation spaces.' },
      { name: 'Marrickville Brewery Precinct', distance: '1.8 km • 4 min drive', description: 'Sydney’s premier craft brewing district featuring dozens of independent taprooms.' }
    ],
    venueFacilities: [
      { name: 'Stix Hellenic Taverna', description: 'Slow-cooked lamb souvla over ironbark coals, saganaki cheese flambé, fresh seafood, and Mediterranean banquets.' },
      { name: 'Riverfront Beer Garden', description: 'Spacious sun-drenched outdoor courtyard seating along the Cooks River corridor.' },
      { name: 'Private Balcony Function Space', description: 'Refurbished 50-guest private space with open-air balcony for celebrations and dining feasts.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop', caption: 'Stix Hellenic Taverna Greek dining hall', category: 'venue' },
      { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop', caption: 'Refurbished King guest room interior', category: 'room' },
      { url: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1200&auto=format&fit=crop', caption: 'Scenic Riverview Hotel exterior along Princes Hwy', category: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop', caption: 'Open-air balcony and outdoor courtyard', category: 'venue' }
    ]
  },

  {
    id: 'tempe-hotel-accommodation',
    slug: 'tempe-hotel',
    propertyName: 'Tempe Hotel Budget Lodging',
    venueName: 'Tempe Hotel',
    venueSlug: 'tempe-hotel',
    tagline: 'Practical pub accommodation with free parking and beer garden, convenient for contractors and airport travelers.',
    suburb: 'Tempe',
    address: '835 Princes Hwy, Tempe NSW 2044',
    phone: '(02) 8080 7045',
    email: 'info@tempehotel.com.au',
    websiteUrl: 'https://tempehotel.com.au',
    bookingUrl: 'https://tempehotel.com.au/',
    heroImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop',
    checkInTime: 'From 2:00pm',
    checkOutTime: 'Until 10:00am',
    parkingPolicy: 'Expansive complimentary on-site customer parking suitable for cars, trade utes, and vans.',
    receptionHours: 'Check-in managed at the main pub bar during regular trading hours.',
    shortDescription: 'Straightforward, practical pub guest rooms located on the Princes Highway corridor. Free parking, expansive picnic beer garden, and generous counter meals minutes from IKEA Tempe and Sydney Airport.',
    fullOverview: [
      'The Tempe Hotel offers honest, affordable pub accommodation designed for tradespeople, contractors, commuters, and budget-conscious travelers seeking comfortable lodging in Sydney’s Inner South.',
      'Rooms are functional, clean, and equipped with essentials including air conditioning, television, and bedding. Downstairs, guests have full access to an expansive classic public bar, complete TAB wagering facilities, a 150-capacity function hall, and an umbrella-shaded beer garden serving classic counter parmigianas, steaks, and cold beers.',
      'Located directly along the Princes Highway corridor with extensive free parking on site, Tempe Hotel provides easy vehicular transit across Sydney’s south and inner west.'
    ],
    rooms: [
      {
        name: 'Standard Single Room',
        bedType: '1 Single Bed',
        maxGuests: 1,
        description: 'Practical, straightforward private room for solo travelers, workers, and contractors.',
        features: ['Single Bedding', 'Air Conditioning', 'Flat-Screen TV', 'Free Wi-Fi Access', 'Shared/En-Suite Facilities'],
        rateNote: 'Budget-friendly weekly and nightly tariffs available on enquiry.',
        imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Standard Double Room',
        bedType: '1 Double Bed',
        maxGuests: 2,
        description: 'Clean and comfortable double room with air conditioning and on-site parking included.',
        features: ['Double Bed', 'Air Conditioning', 'Flat-Screen TV', 'Linen Provided', 'Free On-Site Parking'],
        rateNote: 'Contact venue directly or via portal for live rates.',
        imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop'
      },
      {
        name: 'Twin Share Room',
        bedType: '2 Single Beds',
        maxGuests: 2,
        description: 'Two single beds suitable for workmates or travelers sharing a room.',
        features: ['Two Single Beds', 'Air Conditioning', 'Television', 'Free Parking for Work Utes/Vans'],
        rateNote: 'Enquire for short- or extended-stay commercial bookings.',
        imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop'
      }
    ],
    amenities: [
      { title: 'Free On-Site Parking', description: 'Large parking lot with capacity for trades vehicles, utes, and cars.', icon: 'Car' },
      { title: 'Air Conditioned Rooms', description: 'Climate-controlled cooling and heating in all accommodation.', icon: 'Wind' },
      { title: 'Classic Pub Bistro', description: 'Hearty counter meals, steaks, schnitzels, and daily lunch specials.', icon: 'Utensils' },
      { title: 'Expansive Beer Garden', description: 'Picnic tables, umbrellas, and outdoor social areas.', icon: 'Sun' },
      { title: 'Late 4am Trading', description: 'Licensed until 4:00am Monday to Saturday for flexible schedules.', icon: 'Clock' },
      { title: 'Highway Accessibility', description: 'Direct arterial access to Princes Highway, M8 tunnel, and Sydney Airport.', icon: 'MapPin' }
    ],
    nearbyAttractions: [
      { name: 'IKEA Tempe', distance: '400m • 5 min walk', description: 'Australia’s largest home furnishings destination across the highway.' },
      { name: 'Sydney Domestic & Int. Airport', distance: '5 km • 8 min drive', description: 'Fast vehicular transfer to flight departure gates.' },
      { name: 'Tempe Railway Station', distance: '600m • 7 min walk', description: 'T4 Eastern Suburbs & Illawarra line connecting to Central.' },
      { name: 'Sydney Park St Peters', distance: '1.5 km • 3 min drive', description: 'Expansive 40-hectare park with wetlands, sports fields, and cafe.' }
    ],
    venueFacilities: [
      { name: '150-Capacity Function Hall', description: 'Indoor/outdoor event room with 4 indoor TVs, LED lighting, microphone, and private courtyard.' },
      { name: 'Beer Garden Courtyard', description: 'Large outdoor area with 6 umbrella-shaded picnic benches.' },
      { name: 'Sports Bar & TAB', description: 'Full betting terminals, televised racing and NRL/AFL broadcasts.' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop', caption: 'Clean, air-conditioned pub accommodation', category: 'room' },
      { url: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1200&auto=format&fit=crop', caption: 'Tempe Hotel Princes Highway venue frontage', category: 'exterior' },
      { url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop', caption: 'Public sports bar and counter bistro dining', category: 'venue' }
    ]
  }
];
