import React, { useState } from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight,
  Sparkles,
  Users,
  MessageSquare
} from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { VENUE_DATABASE } from '../data/venueDatabase';
import { applySeoMetadata } from '../utils/seo';

export interface ContactPageProps {
  onNavigate?: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General Enquiries',
    venue: 'Any / Group Level',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    applySeoMetadata({
      title: 'Contact Universal Hotels Australia | Sydney Hospitality Group',
      description: 'Get in touch with Universal Hotels Australia. Corporate head office, function bookings, venue enquiries, and career opportunities across 16 Sydney venues.',
      canonicalUrl: 'https://universalhotels.com.au/contact',
      ogType: 'website'
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-[#121314] text-white pt-12 pb-16 lg:pb-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Contact', isCurrent: true }
            ]}
            onNavigate={onNavigate}
            className="text-neutral-400"
          />

          <div className="max-w-3xl space-y-3">
            <Badge variant="precinct" size="sm">
              GET IN TOUCH
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Contact Universal Hotels
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              We welcome enquiries for group bookings, corporate functions, media, careers, or general feedback across our 16 Sydney properties.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Headquarters Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-[#E7E2D9] shadow-xs space-y-6">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844] block">
                HEAD OFFICE
              </span>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#A47844] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-serif text-base">Sydney Corporate Headquarters</strong>
                    <p className="text-neutral-600">Suite 203, Level 2, 255 Castlereagh St, Sydney NSW 2000</p>
                    <span className="text-[11px] text-neutral-400 block mt-1">Directly accessible via Museum Station & Town Hall</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#EFECE6]">
                  <Phone className="w-5 h-5 text-[#A47844] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-serif text-base">Direct Phone Lines</strong>
                    <p className="text-neutral-600">General Enquiries: <a href="tel:0280807000" className="text-[#A47844] font-semibold hover:underline">(02) 8080 7000</a></p>
                    <p className="text-neutral-600">Functions Concierge: <a href="tel:0280807010" className="text-[#A47844] font-semibold hover:underline">(02) 8080 7010</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#EFECE6]">
                  <Mail className="w-5 h-5 text-[#A47844] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-serif text-base">Email Inboxes</strong>
                    <p className="text-neutral-600">General: <a href="mailto:info@universalhotels.com.au" className="text-[#A47844] font-semibold hover:underline">info@universalhotels.com.au</a></p>
                    <p className="text-neutral-600">Events: <a href="mailto:functions@universalhotels.com.au" className="text-[#A47844] font-semibold hover:underline">functions@universalhotels.com.au</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#EFECE6]">
                  <Clock className="w-5 h-5 text-[#A47844] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-serif text-base">Corporate Office Hours</strong>
                    <p className="text-neutral-600">Monday to Friday: 9:00am – 5:30pm AEST</p>
                    <p className="text-neutral-500 text-[11px]">Individual venues trade 7 days a week, many until 4:00am.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E8E3D8] space-y-3">
              <span className="text-xs font-bold text-neutral-900 block">Looking for something specific?</span>
              <div className="space-y-2 text-xs">
                <button
                  onClick={() => onNavigate?.('/functions')}
                  className="w-full p-2.5 bg-white rounded-lg border border-[#E7E2D9] flex items-center justify-between text-neutral-800 hover:border-[#A47844] transition-colors cursor-pointer"
                >
                  <span className="font-semibold">Book a Function or Event Space</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A47844]" />
                </button>
                <button
                  onClick={() => onNavigate?.('/venues')}
                  className="w-full p-2.5 bg-white rounded-lg border border-[#E7E2D9] flex items-center justify-between text-neutral-800 hover:border-[#A47844] transition-colors cursor-pointer"
                >
                  <span className="font-semibold">Reserve a Table at a Venue</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A47844]" />
                </button>
                <button
                  onClick={() => onNavigate?.('/accommodation')}
                  className="w-full p-2.5 bg-white rounded-lg border border-[#E7E2D9] flex items-center justify-between text-neutral-800 hover:border-[#A47844] transition-colors cursor-pointer"
                >
                  <span className="font-semibold">Boutique Accommodation Reservations</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A47844]" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E7E2D9] shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844] block">
                  SEND A MESSAGE
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
                  How can we help you?
                </h2>
                <p className="text-xs text-neutral-500">
                  Fill out the form below and our group hospitality team will respond within 24 business hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-[#FAF8F5] rounded-2xl border border-[#E7E2D9] text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-bold text-neutral-900">Thank You For Contacting Us</h3>
                    <p className="text-xs text-neutral-600 max-w-md mx-auto">
                      Your message has been received by our guest relations team. We will be in touch shortly via {formData.email || 'your email'}.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        department: 'General Enquiries',
                        venue: 'Any / Group Level',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold text-neutral-700">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full p-3 rounded-xl border border-[#E7E2D9] bg-[#FAF8F5] text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#A47844]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-neutral-700">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com.au"
                        className="w-full p-3 rounded-xl border border-[#E7E2D9] bg-[#FAF8F5] text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#A47844]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold text-neutral-700">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0400 000 000"
                        className="w-full p-3 rounded-xl border border-[#E7E2D9] bg-[#FAF8F5] text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#A47844]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-neutral-700">Department</label>
                      <select
                        value={formData.department}
                        onChange={e => setFormData({ ...formData, department: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#E7E2D9] bg-[#FAF8F5] text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#A47844]"
                      >
                        <option value="General Enquiries">General Enquiries</option>
                        <option value="Functions & Event Spaces">Functions & Event Spaces</option>
                        <option value="Careers & Employment">Careers & Employment</option>
                        <option value="Media & Marketing">Media & Marketing</option>
                        <option value="Guest Feedback">Guest Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-neutral-700">Venue of Interest</label>
                    <select
                      value={formData.venue}
                      onChange={e => setFormData({ ...formData, venue: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#E7E2D9] bg-[#FAF8F5] text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#A47844]"
                    >
                      <option value="Any / Group Level">Any / Group Level</option>
                      {VENUE_DATABASE.map(v => (
                        <option key={v.venueName} value={v.venueName}>
                          {v.venueName} ({v.locationSuburb})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-neutral-700">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know how we can assist..."
                      className="w-full p-3 rounded-xl border border-[#E7E2D9] bg-[#FAF8F5] text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#A47844]"
                    />
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    iconRight={<Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Submit Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. ALL 16 VENUES DIRECTORY QUICK CONTACT */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E7E2D9] space-y-8">
        <div className="space-y-2">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844] block">
            INDIVIDUAL PROPERTIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
            Direct Contact for All 16 Venues
          </h2>
          <p className="text-xs text-neutral-600">
            Contact any of our Sydney venues directly for table bookings, lost property, or opening hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
          {VENUE_DATABASE.map(v => (
            <div 
              key={v.venueName}
              className="p-5 bg-white rounded-2xl border border-[#E7E2D9] hover:border-[#A47844] transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-[#A47844] tracking-wider block">
                  {v.locationSuburb}
                </span>
                <h3 className="font-serif text-base font-bold text-neutral-900">
                  {v.venueName}
                </h3>
                <p className="text-[11px] text-neutral-500 leading-snug">
                  {v.address}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#EFECE6]">
                <a
                  href={`tel:${v.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-1.5 text-neutral-700 hover:text-[#A47844] font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A47844]" />
                  <span>{v.phone}</span>
                </a>

                <button
                  onClick={() => onNavigate?.(v.url)}
                  className="w-full text-left pt-1 text-[11px] font-bold text-[#A47844] hover:text-[#8D6433] inline-flex items-center justify-between cursor-pointer"
                >
                  <span>View Venue Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
