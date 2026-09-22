// Universal Hotels Sydney - Analytics & Conversion Tracking Architecture
// Integrates with Google Analytics 4 (GA4) and Google Tag Manager (GTM)

export type ConversionEventType =
  | 'booking_click'
  | 'phone_click'
  | 'email_click'
  | 'function_enquiry'
  | 'accommodation_click'
  | 'menu_click'
  | 'event_click'
  | 'newsletter_signup'
  | 'page_view';

export interface AnalyticsEventPayload {
  event: ConversionEventType;
  venue_name?: string;
  venue_slug?: string;
  location_suburb?: string;
  category?: string;
  label?: string;
  value?: number | string;
  guest_count?: number | string;
  booking_provider?: string;
  target_url?: string;
  timestamp?: string;
}

// In-memory debug log for developer audit and QA verification
const eventLog: AnalyticsEventPayload[] = [];
type EventListener = (event: AnalyticsEventPayload) => void;
const listeners: Set<EventListener> = new Set();

export const subscribeToAnalytics = (listener: EventListener) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const getRecentAnalyticsEvents = (): AnalyticsEventPayload[] => {
  return [...eventLog];
};

/**
 * Universal tracking dispatcher that safely dispatches to GTM dataLayer,
 * GA4 gtag, and the internal audit stream.
 */
export const trackConversion = (payload: AnalyticsEventPayload) => {
  const timestampedPayload: AnalyticsEventPayload = {
    ...payload,
    timestamp: new Date().toISOString()
  };

  // 1. In-memory audit
  eventLog.unshift(timestampedPayload);
  if (eventLog.length > 50) {
    eventLog.pop();
  }
  listeners.forEach(fn => fn(timestampedPayload));

  // 2. Google Tag Manager dataLayer
  if (typeof window !== 'undefined') {
    const win = window as any;
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({
      event: payload.event,
      venue_name: payload.venue_name,
      venue_slug: payload.venue_slug,
      location_suburb: payload.location_suburb,
      category: payload.category,
      label: payload.label,
      value: payload.value,
      guest_count: payload.guest_count,
      booking_provider: payload.booking_provider,
      target_url: payload.target_url
    });

    // 3. GA4 direct gtag if present
    if (typeof win.gtag === 'function') {
      win.gtag('event', payload.event, {
        venue: payload.venue_name,
        category: payload.category,
        label: payload.label,
        value: payload.value
      });
    }

    // 4. Console log for staging/dev verification
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Analytics Event: ${payload.event}]`, payload);
    }
  }
};

// Convenience action dispatchers for high-value conversions
export const trackBookingClick = (venueName: string, venueSlug?: string, provider = 'Direct/Resy') => {
  trackConversion({
    event: 'booking_click',
    venue_name: venueName,
    venue_slug: venueSlug,
    booking_provider: provider,
    label: `Table Booking: ${venueName}`
  });
};

export const trackPhoneClick = (venueName: string, phoneNumber: string) => {
  trackConversion({
    event: 'phone_click',
    venue_name: venueName,
    value: phoneNumber,
    label: `Phone Call: ${venueName} (${phoneNumber})`
  });
};

export const trackEmailClick = (venueName: string, email: string) => {
  trackConversion({
    event: 'email_click',
    venue_name: venueName,
    value: email,
    label: `Email Contact: ${venueName} (${email})`
  });
};

export const trackFunctionEnquiry = (venueName: string, eventType: string, guestCount: string | number) => {
  trackConversion({
    event: 'function_enquiry',
    venue_name: venueName,
    category: eventType,
    guest_count: guestCount,
    label: `Function Form Submission: ${venueName} - ${eventType} (${guestCount} guests)`
  });
};

export const trackAccommodationClick = (propertyName: string, targetUrl?: string) => {
  trackConversion({
    event: 'accommodation_click',
    venue_name: propertyName,
    target_url: targetUrl,
    label: `Accommodation Direct Booking: ${propertyName}`
  });
};

export const trackMenuClick = (venueName: string, menuType: string) => {
  trackConversion({
    event: 'menu_click',
    venue_name: venueName,
    category: menuType,
    label: `Menu View: ${venueName} - ${menuType}`
  });
};

export const trackEventClick = (eventName: string, venueName: string, ticketPrice?: string) => {
  trackConversion({
    event: 'event_click',
    venue_name: venueName,
    category: 'What\'s On',
    value: ticketPrice,
    label: `Event Ticket/Details: ${eventName} @ ${venueName}`
  });
};

export const trackNewsletterSignup = (email: string) => {
  trackConversion({
    event: 'newsletter_signup',
    category: 'Universal Social Club',
    label: `Newsletter VIP Subscription: ${email}`
  });
};
