/**
 * Universal Hotels Australia - Curated High-Fidelity Photography Asset Catalog
 * Focus: Authentic Sydney hospitality, venue architecture, dining, cocktails, nightlife & drag culture
 */

export interface VenueImageItem {
  id: string;
  venueName: string;
  category: 'exterior' | 'interior' | 'dining' | 'cocktails' | 'nightlife' | 'accommodation' | 'functions';
  url: string;
  alt: string;
  caption: string;
}

export const VENUE_PHOTOGRAPHY: Record<string, VenueImageItem[]> = {
  'civic-hotel': [
    {
      id: 'civic-1',
      venueName: 'Civic Hotel',
      category: 'exterior',
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop',
      alt: 'Art Deco architectural building corner in Sydney CBD',
      caption: 'The 1940 Art Deco heritage facade at the junction of Pitt and Goulburn Streets.'
    },
    {
      id: 'civic-2',
      venueName: 'Civic Underground',
      category: 'nightlife',
      url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
      alt: 'Intimate acoustically tuned basement music venue with atmospheric lighting',
      caption: 'Civic Underground: Sydney’s premier subterranean music room with tuned Allen & Heath sound.'
    },
    {
      id: 'civic-3',
      venueName: 'Ni Hao Bar & Dining',
      category: 'dining',
      url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
      alt: 'Cantonese banquet feast and dim sum baskets in a neon-lit bar setting',
      caption: 'Ni Hao Bar & Dining golden-age Cantonese banquet and craft cocktails.'
    }
  ],
  'the-oxford-hotel': [
    {
      id: 'oxford-1',
      venueName: 'The Oxford Hotel',
      category: 'exterior',
      url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop',
      alt: 'Historic multi-level pub terrace overlooking Taylor Square',
      caption: 'The historic 4-storey corner landmark at Taylor Square on Oxford Street.'
    },
    {
      id: 'oxford-2',
      venueName: 'Polo Lounge',
      category: 'functions',
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
      alt: 'Elegant private lounge with fireplace, cocktail bar, and ambient lighting',
      caption: 'The top-floor Polo Lounge featuring a grand fireplace, piano, and private balcony.'
    },
    {
      id: 'oxford-3',
      venueName: 'Gingers Cabaret',
      category: 'nightlife',
      url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
      alt: 'Cabaret stage with dramatic spotlighting and intimate booth seating',
      caption: 'Gingers: Heritage stage hosting drag, cabaret, and live performances.'
    }
  ],
  'universal-sydney': [
    {
      id: 'universal-1',
      venueName: 'Universal Sydney',
      category: 'nightlife',
      url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
      alt: 'Electrifying high-energy nightclub dancefloor with lasers and lights',
      caption: 'The Universal Superclub dual-level dancefloor hosting international party productions.'
    },
    {
      id: 'universal-2',
      venueName: 'Universal Sydney Drag Bar',
      category: 'nightlife',
      url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop',
      alt: 'Dramatic live stage drag queen performance under neon lights',
      caption: 'World-famous live drag performances 7 nights a week on Oxford Street.'
    }
  ],
  'imperial-hotel-erskineville': [
    {
      id: 'imperial-1',
      venueName: 'The Imperial Erskineville',
      category: 'dining',
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
      alt: 'Bustling banquet dining room filled with patrons enjoying a lively celebration',
      caption: 'Priscilla’s Drag & Dine: Sydney’s quintessential queer banquet experience.'
    },
    {
      id: 'imperial-2',
      venueName: 'Imperial Rooftop',
      category: 'dining',
      url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',
      alt: 'Artisan wood-fired pizza with bubbling mozzarella and fresh basil on an open-air terrace',
      caption: 'Artisan Neapolitan pizzas by Pizza Bros on the sunlit Imperial Rooftop.'
    }
  ],
  'crown-hotel-surry-hills': [
    {
      id: 'crown-1',
      venueName: 'Crown Hotel Surry Hills',
      category: 'exterior',
      url: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200&auto=format&fit=crop',
      alt: 'Surry Hills pub corner with warm timber windows and outdoor tables',
      caption: 'Crown Hotel: Corner of Crown and Cleveland Streets in Surry Hills.'
    },
    {
      id: 'crown-2',
      venueName: 'Crown Hotel Accommodation',
      category: 'accommodation',
      url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
      alt: 'Modern boutique hotel bedroom with luxury linens and warm minimalist aesthetic',
      caption: 'Boutique guest rooms on upper floors, minutes from SCG, Allianz Stadium, and CBD.'
    },
    {
      id: 'crown-3',
      venueName: 'Sapphire Lounge',
      category: 'functions',
      url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop',
      alt: 'Private function lounge with ambient lighting and private cocktail bar',
      caption: 'Sapphire Lounge: Level 2 private events floor for up to 200 guests.'
    }
  ],
  'the-lord-roberts-hotel': [
    {
      id: 'roberts-1',
      venueName: 'The Lord Roberts Hotel',
      category: 'functions',
      url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
      alt: 'Open-air rooftop bar terrace with cocktails overlooking city skyline',
      caption: 'The Rooftop: Retractable weather awning and panoramic Sydney skyline views.'
    },
    {
      id: 'roberts-2',
      venueName: 'The Lord Roberts Hotel',
      category: 'cocktails',
      url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
      alt: 'Vibrant sunset spritz cocktails garnished with fresh citrus and mint',
      caption: 'Rooftop sunset spritzes on Stanley Street.'
    }
  ],
  'the-tudor-hotel': [
    {
      id: 'tudor-1',
      venueName: 'The Tudor Hotel',
      category: 'exterior',
      url: 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?q=80&w=1200&auto=format&fit=crop',
      alt: 'Sunny outdoor pub courtyard terrace with greenery and picnic benches',
      caption: 'The sunny upstairs courtyard terrace at The Tudor in Redfern.'
    }
  ],
  'riverview-hotel-tempe': [
    {
      id: 'riverview-1',
      venueName: 'Riverview Hotel',
      category: 'dining',
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
      alt: 'Chargrilled Hellenic lamb skewers, warm pita bread, and Mediterranean mezze platters',
      caption: 'Stix Hellenic Taverna chargrilled feast and Greek banquets at Riverview Hotel.'
    },
    {
      id: 'riverview-2',
      venueName: 'Riverview Hotel Accommodation',
      category: 'accommodation',
      url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
      alt: 'Refurbished contemporary boutique hotel room near airport corridor',
      caption: 'Contemporary refurbished boutique rooms near Sydenham Metro and Sydney Airport.'
    }
  ]
};

export const SYDNEY_LIFESTYLE_IMAGERY = {
  heroNightlife: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',
  sydneyDining: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop',
  craftBeerTaps: 'https://images.unsplash.com/photo-1538488881522-4326c36da635?q=80&w=1200&auto=format&fit=crop',
  cocktailPour: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop',
  dragEntertainment: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop',
  rooftopSunset: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop'
};
