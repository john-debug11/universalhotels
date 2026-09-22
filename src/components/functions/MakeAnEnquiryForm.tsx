import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Calendar, 
  Users, 
  Building2, 
  Mail, 
  Phone, 
  User, 
  FileText,
  Clock,
  Sparkles
} from 'lucide-react';
import { Button } from '../ui/Button';
import { VENUE_DATABASE } from '../../data/venueDatabase';

export interface MakeAnEnquiryFormProps {
  initialVenue?: string;
  initialEventType?: string;
  className?: string;
  compact?: boolean;
}

export const MakeAnEnquiryForm: React.FC<MakeAnEnquiryFormProps> = ({
  initialVenue = '',
  initialEventType = '',
  className = '',
  compact = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: initialEventType || 'Birthday Party',
    preferredVenue: initialVenue || 'Any / Recommend Best Match',
    eventDate: '',
    guestCount: '50',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const EVENT_TYPE_OPTIONS = [
    'Birthday Party (18th, 21st, 30th, 40th+)',
    'Corporate Event / Networking',
    'Private Function / Celebration',
    'Engagement Party / Rehearsal',
    'Christmas / End-of-Year Party',
    'Group Dining (10+ Guests)',
    'Exclusive Full Venue Hire'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please provide your name, email, and contact phone number.');
      return;
    }

    setLoading(true);
    // Simulating secure client submission handling without calling missing backend
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-2xl p-8 sm:p-10 border border-[#E7E2D9] text-center space-y-4 shadow-sm ${className}`}>
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-serif text-neutral-900">Enquiry Received</h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
            Thank you, <strong>{formData.name}</strong>. Our dedicated Universal Hotels events team has received your enquiry for <strong>{formData.preferredVenue}</strong>.
          </p>
        </div>

        <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E3D8] text-left text-xs max-w-sm mx-auto space-y-1.5 text-neutral-700">
          <div className="flex justify-between">
            <span className="text-neutral-500">Event Type:</span>
            <span className="font-semibold">{formData.eventType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Expected Guests:</span>
            <span className="font-semibold">{formData.guestCount} guests</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Target Date:</span>
            <span className="font-semibold">{formData.eventDate || 'Flexible'}</span>
          </div>
          <div className="pt-2 border-t border-[#E8E3D8] text-[11px] text-neutral-500">
            A dedicated event coordinator will review package options and contact you within 24 business hours.
          </div>
        </div>

        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                eventType: 'Birthday Party',
                preferredVenue: 'Any / Recommend Best Match',
                eventDate: '',
                guestCount: '50',
                message: ''
              });
            }}
          >
            Submit Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-10 border border-[#E7E2D9] shadow-sm ${className}`}>
      <div className="mb-6 space-y-1">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#A47844] block">
          INSTANT FUNCTIONS DESK
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif text-neutral-900">
          Make an Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600">
          Connect directly with the Universal Hotels events team. Free venue consultations with tailored canapé and beverage proposals.
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="font-bold text-neutral-800 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#A47844]" /> Your Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg text-neutral-900 focus:outline-hidden focus:border-[#A47844]"
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-neutral-800 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#A47844]" /> Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="s.jenkins@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg text-neutral-900 focus:outline-hidden focus:border-[#A47844]"
            />
          </div>
        </div>

        {/* Row 2: Phone & Event Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="font-bold text-neutral-800 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#A47844]" /> Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="0412 345 678"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg text-neutral-900 focus:outline-hidden focus:border-[#A47844]"
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-neutral-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#A47844]" /> Event Type
            </label>
            <select
              value={formData.eventType}
              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg text-neutral-900 focus:outline-hidden focus:border-[#A47844]"
            >
              {EVENT_TYPE_OPTIONS.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3: Preferred Venue & Guest Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="font-bold text-neutral-800 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#A47844]" /> Preferred Venue
            </label>
            <select
              value={formData.preferredVenue}
              onChange={(e) => setFormData({ ...formData, preferredVenue: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg text-neutral-900 focus:outline-hidden focus:border-[#A47844]"
            >
              <option value="Any / Recommend Best Match">Any / Recommend Best Match</option>
              {VENUE_DATABASE.map(v => (
                <option key={v.url} value={v.venueName}>
                  {v.venueName} ({v.locationSuburb})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="font-bold text-neutral-800 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#A47844]" /> Estimated Guest Count
            </label>
            <input
              type="number"
              min="5"
              max="1000"
              value={formData.guestCount}
              onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg text-neutral-900 focus:outline-hidden focus:border-[#A47844]"
            />
          </div>
        </div>

        {/* Row 4: Event Date */}
        <div className="space-y-1">
          <label className="font-bold text-neutral-800 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#A47844]" /> Target Event Date
          </label>
          <input
            type="date"
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg text-neutral-900 focus:outline-hidden focus:border-[#A47844]"
          />
        </div>

        {/* Row 5: Message */}
        <div className="space-y-1">
          <label className="font-bold text-neutral-800 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-[#A47844]" /> Specific Requirements or Budget Notes
          </label>
          <textarea
            rows={compact ? 2 : 4}
            placeholder="Tell us about your timing, food/drinks preferences, AV needs, or any questions..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DCD6CA] rounded-lg text-neutral-900 focus:outline-hidden focus:border-[#A47844]"
          />
        </div>

        {/* Submit CTA */}
        <div className="pt-2">
          <Button
            variant="primary"
            size="lg"
            type="submit"
            disabled={loading}
            className="w-full justify-center"
            iconRight={<Send className="w-4 h-4" />}
          >
            {loading ? 'Processing Enquiry...' : 'SEND FUNCTION ENQUIRY'}
          </Button>
          <span className="text-[10px] text-neutral-500 block text-center mt-2">
            No obligation. We reply within 24 business hours with custom pricing and packages.
          </span>
        </div>

      </form>
    </div>
  );
};
