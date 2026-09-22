import React, { useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Users, 
  Wine, 
  Utensils, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Building2,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { VenueFinder } from '../components/functions/VenueFinder';
import { MakeAnEnquiryForm } from '../components/functions/MakeAnEnquiryForm';
import { EVENT_TYPES_DATA } from '../data/functionsData';
import { FUNCTIONS_HUB_METADATA, applySeoMetadata } from '../utils/seo';

export interface FunctionsHubPageProps {
  onNavigate: (path: string) => void;
}

export const FunctionsHubPage: React.FC<FunctionsHubPageProps> = ({ onNavigate }) => {
  // SEO & Social Meta (Open Graph, Twitter Cards, Service Schema)
  useEffect(() => {
    const cleanupSeo = applySeoMetadata(FUNCTIONS_HUB_METADATA);
    return cleanupSeo;
  }, []);

  const eventCategories = Object.values(EVENT_TYPES_DATA);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B0C0D] text-white overflow-hidden py-16 sm:py-24 border-b border-neutral-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
            alt="Functions & Events in Sydney"
            className="w-full h-full object-cover opacity-25 scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0D] via-[#0B0C0D]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-white/80">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Functions & Events', href: '/functions' }
              ]}
            />
          </div>

          <div className="max-w-3xl space-y-4 pt-2">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#C7A379] block">
              UNIVERSAL HOTELS HOSPITALITY SPACES
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FAF8F5] tracking-tight leading-[1]">
              FUNCTIONS & EVENTS IN SYDNEY
            </h1>
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
              Whether you are planning an intimate dinner for 20, a vibrant 30th birthday on a sunlit rooftop, a seamless corporate networking seminar, or a 500-guest full venue takeover, Universal Hotels offers character-rich spaces across Sydney.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#enquiry-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#A47844] hover:bg-[#8D6433] text-white transition-colors shadow-sm"
              >
                MAKE AN ENQUIRY
              </a>
              <a
                href="#venue-finder"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              >
                Explore Function Spaces
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EVENT TYPES / INTENT SHORTCUTS */}
      <section className="py-12 bg-white border-b border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#A47844] block">
                SPECIALIST EVENT OCCASIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900">
                Explore Events by Occasion
              </h2>
            </div>
            <span className="text-xs text-neutral-500">Dedicated packages & bespoke spaces</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {eventCategories.map(cat => (
              <div
                key={cat.id}
                onClick={() => onNavigate(`/functions/${cat.slug}`)}
                className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E7E2D9] hover:border-[#A47844] hover:bg-white transition-all cursor-pointer group flex flex-col justify-between space-y-4 shadow-2xs"
              >
                <div className="space-y-2">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#A47844] block">
                    {cat.badge}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-[#A47844] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2">
                    {cat.heroDescription}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#EFECE6] flex items-center justify-between text-xs text-[#A47844] font-semibold">
                  <span>View Spaces & Packages</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE VENUE FINDER */}
      <section id="venue-finder" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <VenueFinder onNavigate={onNavigate} />
      </section>

      {/* 4. BEVERAGE & FOOD PACKAGES OVERVIEW */}
      <section className="py-16 bg-[#F5F1EA] border-y border-[#E7E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
              CATERING & LIBATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#121314]">
              Tailored Event Packages
            </h2>
            <p className="text-sm text-neutral-600">
              Universal Hotels provides chef-crafted catering from casual cocktail canapés to formal seated feasts, paired with flexible beverage tabs and free-flowing packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Canapé Package */}
            <div className="bg-white rounded-2xl p-7 border border-[#E7E2D9] space-y-4">
              <div className="flex items-center gap-2 text-[#A47844]">
                <Utensils className="w-5 h-5" />
                <h3 className="font-serif text-xl font-bold text-neutral-900">Cocktail Canapés</h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Perfect for social standing celebrations, birthdays, and lively networking mixers.
              </p>
              <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-[#F0ECE4]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A47844] mt-0.5" />
                  <span>Chef selections of 6 to 10 bite-sized hot & cold canapés</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A47844] mt-0.5" />
                  <span>Substantial slider & bao bun additions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A47844] mt-0.5" />
                  <span>Gluten-free, vegan, and halal-friendly options</span>
                </li>
              </ul>
            </div>

            {/* Beverage Package */}
            <div className="bg-white rounded-2xl p-7 border border-[#E7E2D9] space-y-4">
              <div className="flex items-center gap-2 text-[#A47844]">
                <Wine className="w-5 h-5" />
                <h3 className="font-serif text-xl font-bold text-neutral-900">Beverage Packages</h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Flexible options from timed free-flowing packages to customized bar tabs.
              </p>
              <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-[#F0ECE4]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A47844] mt-0.5" />
                  <span>2, 3, or 4-hour beverage packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A47844] mt-0.5" />
                  <span>Australian craft and classic tap beers & ciders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A47844] mt-0.5" />
                  <span>Curated regional NSW & South Australian wines & prosecco</span>
                </li>
              </ul>
            </div>

            {/* Sit-Down Banquets */}
            <div className="bg-white rounded-2xl p-7 border border-[#E7E2D9] space-y-4">
              <div className="flex items-center gap-2 text-[#A47844]">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-serif text-xl font-bold text-neutral-900">Seated Feasting</h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Generous multi-course shared banquets or alternate drop dining.
              </p>
              <ul className="space-y-2 text-xs text-neutral-700 pt-2 border-t border-[#F0ECE4]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A47844] mt-0.5" />
                  <span>2 or 3-course sit down dining experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A47844] mt-0.5" />
                  <span>Shared Mediterranean and modern Australian tables</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A47844] mt-0.5" />
                  <span>Dessert towers and celebration cake presentation</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. MAKE AN ENQUIRY FORM SECTION */}
      <section id="enquiry-form" className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <MakeAnEnquiryForm />
      </section>

    </div>
  );
};
