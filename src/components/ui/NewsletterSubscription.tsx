import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { trackNewsletterSignup } from '../../utils/analytics';

export interface NewsletterSubscriptionProps {
  className?: string;
}

export const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [subscribedEmail, setSubscribedEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmed = email.trim();
    if (!trimmed) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    // Simulate swift luxury API response & track analytics
    setTimeout(() => {
      trackNewsletterSignup(trimmed);
      try {
        localStorage.setItem('universal_club_member', trimmed);
      } catch {
        // Safe fallback in restricted environments
      }
      setSubscribedEmail(trimmed);
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <div
      id="universal-newsletter-club"
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#18191B] to-[#121314] border border-neutral-800/90 p-6 sm:p-8 lg:p-10 ${className}`}
    >
      {/* Subtle Warm Gold Glow Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7A379]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial & Value Proposition */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C7A379]/10 border border-[#C7A379]/30 text-[#C7A379] text-[10px] font-bold uppercase tracking-[0.2em]">
              <Sparkles className="w-3 h-3" />
              The Universal Circle
            </span>
            <span className="text-[11px] text-neutral-400 uppercase tracking-widest hidden sm:inline">
              Exclusive Member Privileges
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
            Priority Access & Hospitality Previews
          </h3>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
            Join the club for curated invitations to private cellar tastings, headline drag premieres at Universal, rooftop preview nights, and priority function bookings across our 16 Sydney destinations.
          </p>

          <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 pt-1 text-[11px] text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A379]" />
              First release event & festival tickets
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A379]" />
              Bespoke dining and cocktail offers
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7A379]" />
              Zero spam • One-click opt out
            </span>
          </div>
        </div>

        {/* Right Column: Interaction Form or Success State */}
        <div className="lg:col-span-5">
          {status === 'success' ? (
            <div
              id="newsletter-success-state"
              className="p-6 rounded-xl bg-neutral-900/90 border border-[#C7A379]/40 space-y-3"
            >
              <div className="flex items-center gap-2.5 text-[#C7A379]">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="font-serif font-bold text-base text-white">
                  Welcome to the Club
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Thank you for joining. An invitation and your VIP Sydney hospitality privileges guide have been sent to{' '}
                <span className="text-white font-medium underline decoration-[#C7A379]">{subscribedEmail}</span>.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-[11px] text-[#C7A379] hover:underline pt-1 cursor-pointer block"
              >
                Register another email address
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3" noValidate>
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <div className="relative flex-1">
                  <label htmlFor="newsletter-email-input" className="sr-only">
                    Email Address
                  </label>
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="newsletter-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address..."
                    aria-label="Email address for club membership"
                    disabled={status === 'loading'}
                    className={`w-full pl-10 pr-4 py-3 bg-neutral-900/90 border rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 transition-all focus:outline-none focus:ring-1 focus:ring-[#C7A379] ${
                      status === 'error'
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-neutral-700 hover:border-neutral-600 focus:border-[#C7A379]'
                    }`}
                  />
                </div>

                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-[#C7A379] hover:bg-[#B59268] active:bg-[#A47844] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex-shrink-0"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                      <span>Confirming...</span>
                    </span>
                  ) : (
                    <>
                      <span>Join the Club</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              {status === 'error' && (
                <p id="newsletter-error-message" className="text-xs text-red-400 flex items-center gap-1.5 pl-1">
                  <span>{errorMessage}</span>
                </p>
              )}

              <div className="flex items-center gap-2 text-[10px] text-neutral-500 pl-1">
                <Shield className="w-3 h-3 text-neutral-400 flex-shrink-0" />
                <span>Strict privacy guarantee. Unsubscribe anytime in accordance with Australian privacy laws.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
