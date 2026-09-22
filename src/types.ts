/**
 * Universal Hotels Australia - Data & Information Architecture Types
 */

export interface VenueAddress {
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  full: string;
  googleMapsUrl?: string;
}

export interface VenueHours {
  regular: string;
  breakdown?: {
    days: string;
    hours: string;
    notes?: string;
  }[];
}

export interface VenueContact {
  phone: string;
  email: string;
  website?: string;
  bookingUrl?: string;
  menuUrl?: string;
  instagram?: string;
  facebook?: string;
}

export interface FunctionSpace {
  id: string;
  name: string;
  venueName: string;
  venueId: string;
  standingCapacity: number;
  seatedCapacity?: number;
  description: string;
  features: string[];
  idealFor: string[];
  imageUrl?: string;
}

export interface AccommodationRoom {
  id: string;
  name: string;
  venueName: string;
  venueId: string;
  description: string;
  features: string[];
  rateHint?: string;
  bookingUrl?: string;
}

export type VenueCategory = 
  | 'pub'
  | 'entertainment_nightlife'
  | 'dining_eatery'
  | 'sports_bar'
  | 'heritage_pub'
  | 'neighbourhood_local';

export type SydneyRegion = 
  | 'Sydney CBD & Haymarket'
  | 'Darlinghurst & Oxford St'
  | 'Surry Hills & Redfern'
  | 'Inner West & Erskineville'
  | 'Tempe & South'
  | 'Northern Suburbs & Eastwood';

export interface Venue {
  id: string;
  name: string;
  tagline: string;
  category: VenueCategory;
  region: SydneyRegion;
  address: VenueAddress;
  hours: VenueHours;
  contact: VenueContact;
  description: string;
  features: string[];
  atmosphere: string;
  hasAccommodation: boolean;
  hasFunctions: boolean;
  hasDining: boolean;
  hasNightlife: boolean;
  hasSportsTab: boolean;
  originalUrl: string;
  externalWebsite?: string;
  historicalNotes?: string;
  verificationStatus: 'VERIFIED' | 'CONTENT TO VERIFY';
  images?: string[];
}

export interface AuditReportData {
  generatedAt: string;
  headquarters: {
    address: string;
    phone: string;
    email: string;
    abn?: string;
    groupOverview: string;
  };
  venuesCount: number;
  accommodationPropertiesCount: number;
  functionSpacesCount: number;
}
