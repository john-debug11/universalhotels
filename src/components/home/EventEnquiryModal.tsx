import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send, Users, Calendar, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { FormField, Input } from '../ui/FormField';
import { VENUE_DATABASE } from '../../data/venueDatabase';

export interface EventEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedVenue?: string;
}

export const EventEnquiryModal: React.FC<EventEnquiryModalProps> = ({
  isOpen,
  onClose,
  preSelectedVenue
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Birthday Party',
    guestCount: '80',
    preferredVenue: preSelectedVenue || 'Any Qualifying Venue',
    preferredDate: '',
    budgetOrNotes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#E7E2D9] overflow-hidden">
        
        {/* Modal Top Banner */}
        <div className="bg-[#121314] text-white p-6 sm:p-7 flex items-center justify-between border-b border-neutral-800">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C7A379] block">
              UNIVERSAL HOTELS FUNCTIONS CONCIERGE
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Plan Your Sydney Event
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-neutral-900">
                Enquiry Received!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our dedicated Universal Hotels events team will review your requirements for <strong>{formData.guestCount} guests</strong> and contact you within 24 business hours with floorplans and tailored beverage packages.
              </p>
              <div className="pt-4">
                <Button variant="primary" size="md" onClick={handleReset}>
                  Close Window
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Your Name" id="ev-name" required>
                  <Input
                    id="ev-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jessica Taylor"
                  />
                </FormField>

                <FormField label="Contact Email" id="ev-email" required>
                  <Input
                    id="ev-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jessica@example.com"
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Phone Number" id="ev-phone" required>
                  <Input
                    id="ev-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0412 345 678"
                  />
                </FormField>

                <FormField label="Expected Guest Count" id="ev-guests" required>
                  <Input
                    id="ev-guests"
                    type="number"
                    required
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    placeholder="e.g. 80"
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Event Type" id="ev-type" required>
                  <select
                    id="ev-type"
                    className="w-full px-4 py-2.5 bg-white border border-[#E2DDD4] rounded-lg text-xs sm:text-sm text-neutral-900 focus:outline-hidden focus:border-[#A47844]"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  >
                    <option value="Birthday Party">Birthday Party (21st, 30th, etc.)</option>
                    <option value="Corporate Event">Corporate Networking / EOY</option>
                    <option value="Engagement / Wedding">Engagement / Civil Reception</option>
                    <option value="Rooftop Drinks">Rooftop Cocktail Gathering</option>
                    <option value="Private Dining">Private Dining / Banquet Feast</option>
                    <option value="Club / Venue Hire">Full Club / Venue Takeover</option>
                  </select>
                </FormField>

                <FormField label="Preferred Venue / Location" id="ev-venue">
                  <select
                    id="ev-venue"
                    className="w-full px-4 py-2.5 bg-white border border-[#E2DDD4] rounded-lg text-xs sm:text-sm text-neutral-900 focus:outline-hidden focus:border-[#A47844]"
                    value={formData.preferredVenue}
                    onChange={(e) => setFormData({ ...formData, preferredVenue: e.target.value })}
                  >
                    <option value="Any Qualifying Venue">Match Me with the Best Space</option>
                    {VENUE_DATABASE.map(v => (
                      <option key={v.url} value={v.venueName}>
                        {v.venueName} ({v.locationSuburb})
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              <FormField label="Notes & Special Requests" id="ev-notes" helperText="Dietary, AV, beverage style, preferred dates">
                <textarea
                  id="ev-notes"
                  rows={2}
                  value={formData.budgetOrNotes}
                  onChange={(e) => setFormData({ ...formData, budgetOrNotes: e.target.value })}
                  placeholder="Tell us about your event concept or preferred date..."
                  className="w-full px-4 py-2 bg-white border border-[#E2DDD4] rounded-lg text-xs sm:text-sm text-neutral-900 focus:outline-hidden focus:border-[#A47844]"
                />
              </FormField>

              <div className="pt-2 flex items-center justify-end gap-3">
                <Button variant="ghost" size="sm" type="button" onClick={onClose}>
                  Cancel
                </Button>
                <Button variant="primary" size="md" type="submit" iconRight={<Send className="w-3.5 h-3.5" />}>
                  Submit Event Enquiry
                </Button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
