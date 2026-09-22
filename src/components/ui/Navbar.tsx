import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, MapPin, Calendar, Users, Bed, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { UniversalHotelsLogo } from '../brand/UniversalHotelsLogo';

export interface NavbarProps {
  activePath?: string;
  onNavigate?: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePath = '/', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [venuesDropdownOpen, setVenuesDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Venues', path: '/venues', hasDropdown: true },
    { label: 'Experiences', path: '/experiences' },
    { label: 'Functions & Events', path: '/functions' },
    { label: "What's On", path: '/whats-on' },
    { label: 'Accommodation', path: '/accommodation' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const precinctLinks = [
    { name: 'Sydney CBD & Haymarket', blurb: 'Civic Hotel, Palace Hotel, V Bar', path: '/venues/sydney-cbd-haymarket' },
    { name: 'Darlinghurst & Oxford St', blurb: 'The Oxford, Universal Sydney, The Riley, Lord Roberts', path: '/venues/darlinghurst-oxford-street' },
    { name: 'Surry Hills & Redfern', blurb: 'Crown Hotel, The Tudor, The Evening Star', path: '/venues/surry-hills-redfern' },
    { name: 'Inner West & Erskineville', blurb: 'The Imperial, The Harold, Enfield Hotel', path: '/venues/inner-west-erskineville' },
    { name: 'Tempe & Cooks River', blurb: 'Riverview Hotel, Tempe Hotel', path: '/venues/tempe-cooks-river' },
    { name: 'Northern Suburbs', blurb: 'Moko Eastwood', path: '/venues/northern-suburbs-eastwood' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <button
            onClick={() => onNavigate?.('/')}
            className="flex items-center text-left group cursor-pointer focus:outline-none"
            aria-label="Universal Hotels Home"
          >
            <UniversalHotelsLogo
              variant="dark"
              height={38}
              showWordmark={true}
              showSubtitle={true}
              subtitleText="Sydney • Hospitality Ecosystem"
              className="group-hover:opacity-90 transition-opacity"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-neutral-700">
            {navLinks.map(link => {
              const isActive = activePath.startsWith(link.path);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setVenuesDropdownOpen(true)}
                    onMouseLeave={() => setVenuesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => onNavigate?.(link.path)}
                      aria-haspopup="true"
                      aria-expanded={venuesDropdownOpen}
                      aria-controls="venues-mega-menu"
                      className={`flex items-center gap-1 py-2 hover:text-[#A47844] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#A47844] focus:outline-none rounded-md px-1 ${
                        isActive ? 'text-[#121314] border-b-2 border-[#A47844]' : ''
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </button>

                    {/* Mega Dropdown for Venues */}
                    {venuesDropdownOpen && (
                      <div 
                        id="venues-mega-menu"
                        role="region"
                        aria-label="Venues by Precinct"
                        className="absolute top-full -left-20 w-[540px] bg-white rounded-2xl border border-[#E7E2D9] shadow-xl p-5 grid grid-cols-2 gap-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      >
                        {precinctLinks.map(precinct => (
                          <button
                            key={precinct.path}
                            onClick={() => {
                              onNavigate?.(precinct.path);
                              setVenuesDropdownOpen(false);
                            }}
                            className="p-3 text-left rounded-xl hover:bg-[#FAF8F5] transition-colors border border-transparent hover:border-[#EAE5DC] focus-visible:ring-2 focus-visible:ring-[#A47844] focus:outline-none"
                          >
                            <span className="font-serif text-sm font-bold text-[#121314] block">
                              {precinct.name}
                            </span>
                            <span className="text-[11px] text-neutral-500 line-clamp-1 block mt-0.5 normal-case tracking-normal">
                              {precinct.blurb}
                            </span>
                          </button>
                        ))}
                        <div className="col-span-2 pt-2 border-t border-[#EFECE6] flex items-center justify-between text-xs">
                          <span className="text-neutral-500 normal-case tracking-normal">16 venues across Sydney</span>
                          <button
                            onClick={() => {
                              onNavigate?.('/venues');
                              setVenuesDropdownOpen(false);
                            }}
                            className="text-[#A47844] font-bold inline-flex items-center gap-1 hover:text-[#121314] focus-visible:ring-2 focus-visible:ring-[#A47844] focus:outline-none rounded px-1"
                          >
                            View Master Directory <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.path}
                  onClick={() => onNavigate?.(link.path)}
                  className={`py-2 hover:text-[#A47844] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#A47844] focus:outline-none rounded-md px-1 ${
                    isActive ? 'text-[#121314] border-b-2 border-[#A47844]' : ''
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate?.('/functions')}
            >
              Plan Event
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onNavigate?.('/venues')}
            >
              Book a Table
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden gap-2">
            <Button
              variant="primary"
              size="sm"
              className="text-[10px] px-2.5 py-1.5"
              onClick={() => onNavigate?.('/venues')}
            >
              Book
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:bg-[#EFECE6] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#A47844] focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          role="dialog"
          aria-label="Mobile Navigation"
          className="lg:hidden bg-[#FAF8F5] border-b border-[#E7E2D9] px-4 pt-4 pb-8 space-y-4 animate-in slide-in-from-top-4 duration-200"
        >
          <nav aria-label="Mobile Navigation Links" className="space-y-1">
            {navLinks.map(link => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate?.(link.path);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-3 px-3 rounded-lg font-serif text-lg font-bold text-neutral-900 hover:bg-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#EAE5DC] space-y-2">
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                onNavigate?.('/functions');
                setMobileMenuOpen(false);
              }}
            >
              Functions & Events Concierge
            </Button>
            <Button
              variant="outline"
              size="md"
              fullWidth
              onClick={() => {
                onNavigate?.('/accommodation');
                setMobileMenuOpen(false);
              }}
            >
              Boutique Accommodation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
