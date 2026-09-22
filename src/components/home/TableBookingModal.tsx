import React, { useState } from 'react';
import { X, Calendar, Clock, Users, ArrowUpRight, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { VenueRecord } from '../../data/venueDatabase';

export interface TableBookingModalProps {
  venue: VenueRecord | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TableBookingModal: React.FC<TableBookingModalProps> = ({
  venue,
  isOpen,
  onClose
}) => {
  const [confirmed, setConfirmed] = useState(false);
  const [guests, setGuests] = useState('4');
  const [time, setTime] = useState('7:00 PM');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');

  if (!isOpen || !venue) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E7E2D9] overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-[#121314] text-white p-6 flex items-center justify-between border-b border-neutral-800">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C7A379] block">
              TABLE RESERVATION
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              {venue.venueName}
            </h3>
            <p className="text-xs text-neutral-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C7A379]" /> {venue.address}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {confirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-neutral-900">
                Reservation Request Confirmed!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
                Your table for <strong>{guests} guests</strong> at <strong>{venue.venueName}</strong> at <strong>{time}</strong> has been logged. An SMS confirmation will be sent to <strong>{guestPhone}</strong>.
              </p>
              <div className="pt-2">
                <Button variant="primary" size="sm" onClick={handleReset}>
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="space-y-4">
              <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EBE6DC] text-xs text-neutral-600 flex items-center justify-between">
                <span className="font-semibold text-neutral-800">Trading Hours:</span>
                <span>{venue.openingHours}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Number of Guests
                  </label>
                  <select
                    className="w-full px-3 py-2 bg-white border border-[#E2DDD4] rounded-lg text-xs sm:text-sm text-neutral-900"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8 Guests</option>
                    <option value="10+">10+ Guests (Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    className="w-full px-3 py-2 bg-white border border-[#E2DDD4] rounded-lg text-xs sm:text-sm text-neutral-900"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option value="12:30 PM">12:30 PM (Lunch)</option>
                    <option value="1:30 PM">1:30 PM (Lunch)</option>
                    <option value="6:00 PM">6:00 PM (Dinner)</option>
                    <option value="7:00 PM">7:00 PM (Dinner)</option>
                    <option value="8:30 PM">8:30 PM (Late Sitting)</option>
                    <option value="10:00 PM">10:00 PM (Supper & Drinks)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. David Miller"
                    className="w-full px-3 py-2 bg-white border border-[#E2DDD4] rounded-lg text-xs sm:text-sm text-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Mobile Phone
                  </label>
                  <input
                    required
                    type="tel"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="e.g. 0400 123 456"
                    className="w-full px-3 py-2 bg-white border border-[#E2DDD4] rounded-lg text-xs sm:text-sm text-neutral-900"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-[#EFECE6]">
                <a
                  href={venue.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#A47844] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Direct Booking Portal <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" type="button" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button variant="primary" size="sm" type="submit">
                    Confirm Table
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
