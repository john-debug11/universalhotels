import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Eye, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Info,
  Sparkles,
  Building2
} from 'lucide-react';

// Navigation & Layout
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { MobileActionDock } from './components/ui/MobileActionDock';

// Pages
import { HomePage } from './pages/HomePage';
import { VenuesDirectoryPage } from './pages/VenuesDirectoryPage';
import { VenueDetailTemplate } from './components/venue/VenueDetailTemplate';
import { FunctionsHubPage } from './pages/FunctionsHubPage';
import { EventTypePage } from './pages/EventTypePage';
import { AccommodationPage } from './pages/AccommodationPage';
import { WhatsOnPage } from './pages/WhatsOnPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SeoArchitectureDashboardPage } from './pages/SeoArchitectureDashboardPage';

// SEO & Analytics
import { checkRedirect, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from './utils/seo';

// Architecture & Design System Data
import { VENUE_DATABASE } from './data/venueDatabase';
import { VENUE_DETAILS, VenueDetailRecord } from './data/venueDetails';
import { EVENT_TYPES_DATA } from './data/functionsData';
import { LOCATION_TAXONOMY, FUNCTIONS_TAXONOMY, COMPETITOR_ANALYSIS_SOLOTEL } from './data/informationArchitecture';

// Canonical Slug Aliases & Precinct Mappings to prevent any 404s
const VENUE_SLUG_ALIASES: Record<string, string> = {
  'civic': 'civic-hotel',
  'civic-hotel-sydney': 'civic-hotel',
  'the-imperial-hotel-erskineville': 'imperial-hotel-erskineville',
  'the-imperial-hotel': 'imperial-hotel-erskineville',
  'imperial-hotel': 'imperial-hotel-erskineville',
  'the-imperial': 'imperial-hotel-erskineville',
  'imperial': 'imperial-hotel-erskineville',
  'the-tudor-hotel-redfern': 'the-tudor-hotel',
  'the-tudor': 'the-tudor-hotel',
  'tudor-hotel': 'the-tudor-hotel',
  'tudor': 'the-tudor-hotel',
  'the-riley-hotel-darlinghurst': 'the-riley-hotel',
  'the-riley': 'the-riley-hotel',
  'riley-hotel': 'the-riley-hotel',
  'riley': 'the-riley-hotel',
  'the-harold-hotel-forest-lodge': 'the-harold',
  'the-harold-hotel': 'the-harold',
  'harold-hotel': 'the-harold',
  'harold': 'the-harold',
  'lord-roberts-hotel-east-sydney': 'the-lord-roberts-hotel',
  'lord-roberts-hotel': 'the-lord-roberts-hotel',
  'lord-roberts': 'the-lord-roberts-hotel',
  'the-lord-roberts': 'the-lord-roberts-hotel',
  'the-oxford-hotel-darlinghurst': 'the-oxford-hotel',
  'the-oxford': 'the-oxford-hotel',
  'oxford-hotel': 'the-oxford-hotel',
  'oxford': 'the-oxford-hotel',
  'universal': 'universal-sydney',
  'universal-hotel': 'universal-sydney',
  'the-evening-star-hotel-surry-hills': 'the-evening-star',
  'the-evening-star-hotel': 'the-evening-star',
  'the-evening-star': 'the-evening-star',
  'evening-star': 'the-evening-star',
  'palace-hotel-sydney': 'palace-hotel',
  'palace': 'palace-hotel',
  'v-bar-sydney': 'v-bar',
  'vbar': 'v-bar',
  'crown-hotel': 'crown-hotel-surry-hills',
  'crown-hotel-sydney': 'crown-hotel-surry-hills',
  'the-crown-hotel': 'crown-hotel-surry-hills',
  'crown': 'crown-hotel-surry-hills',
  'riverview-hotel': 'riverview-hotel-tempe',
  'riverview': 'riverview-hotel-tempe',
  'tempe': 'tempe-hotel',
  'tempe-hotel-tempe': 'tempe-hotel',
  'moko': 'moko-eastwood',
  'moko-hotel': 'moko-eastwood',
  'enfield': 'enfield-hotel',
  'enfield-hotel-enfield': 'enfield-hotel'
};

const PRECINCT_SLUG_MAP: Record<string, string> = {
  'sydney-cbd-haymarket': 'Sydney CBD',
  'darlinghurst-oxford-street': 'Darlinghurst',
  'surry-hills-redfern': 'Surry Hills',
  'inner-west-erskineville': 'Erskineville',
  'tempe-cooks-river': 'Tempe',
  'northern-suburbs-eastwood': 'Eastwood',
  'cbd': 'Sydney CBD',
  'haymarket': 'Sydney CBD',
  'darlinghurst': 'Darlinghurst',
  'oxford-street': 'Darlinghurst',
  'surry-hills': 'Surry Hills',
  'redfern': 'Redfern',
  'erskineville': 'Erskineville',
  'tempe': 'Tempe',
  'eastwood': 'Eastwood'
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const rawPath = window.location.pathname || '/';
    const redirected = checkRedirect(rawPath);
    return redirected || rawPath;
  });
  const [activeInspectorView, setActiveInspectorView] = useState<'none' | 'architectureSpecs' | 'designSystemSpecs'>('none');

  // Inject Global Organization & WebSite Schemas into head
  useEffect(() => {
    const orgScriptId = 'schema-root-organization';
    if (!document.getElementById(orgScriptId)) {
      const script = document.createElement('script');
      script.id = orgScriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(ORGANIZATION_SCHEMA);
      document.head.appendChild(script);
    }

    const websiteScriptId = 'schema-root-website';
    if (!document.getElementById(websiteScriptId)) {
      const script = document.createElement('script');
      script.id = websiteScriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(WEBSITE_SCHEMA);
      document.head.appendChild(script);
    }
  }, []);

  // Sync route with browser history and handle 301 redirects
  useEffect(() => {
    const handlePopState = () => {
      const rawPath = window.location.pathname || '/';
      const redirected = checkRedirect(rawPath);
      if (redirected) {
        setCurrentPath(redirected);
        try {
          window.history.replaceState(null, '', redirected);
        } catch (e) {}
      } else {
        setCurrentPath(rawPath);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    const resolvedPath = checkRedirect(path) || path;
    setCurrentPath(resolvedPath);
    setActiveInspectorView('none');
    
    // Update browser URL without reloading
    try {
      window.history.pushState(null, '', resolvedPath);
    } catch (e) {
      // Ignore if iframe sandboxed
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine current page to render
  const renderCurrentPage = () => {
    // 1. Check if an inspector view is active
    if (activeInspectorView === 'architectureSpecs') {
      return renderArchitectureSpecs();
    }
    if (activeInspectorView === 'designSystemSpecs') {
      return renderDesignSystemSpecs();
    }

    // 2. SEO & AEO Architecture Dashboard
    if (currentPath === '/seo' || currentPath === '/seo-architecture' || currentPath === '/seo-dashboard') {
      return <SeoArchitectureDashboardPage onNavigate={handleNavigate} />;
    }

    // 3. About Us Page
    if (currentPath === '/about' || currentPath === '/about/' || currentPath === '/about-us' || currentPath === '/about-us/') {
      return <AboutPage onNavigate={handleNavigate} />;
    }

    // 4. Contact Page
    if (currentPath === '/contact' || currentPath === '/contact/' || currentPath === '/contact-us' || currentPath === '/contact-us/') {
      return <ContactPage onNavigate={handleNavigate} />;
    }

    // 5. Experiences Page
    if (currentPath === '/experiences' || currentPath === '/experiences/') {
      return <ExperiencesPage onNavigate={handleNavigate} />;
    }

    // 6. Check for single venue page or precinct: /venues/:slug
    if (currentPath.startsWith('/venues/') && currentPath.length > 8) {
      const rawSlug = currentPath.replace('/venues/', '').replace(/\/$/, '');
      const slug = rawSlug.toLowerCase();

      // Check if this is a precinct URL from the navbar
      if (PRECINCT_SLUG_MAP[slug]) {
        return <VenuesDirectoryPage onNavigate={handleNavigate} initialLocation={PRECINCT_SLUG_MAP[slug]} />;
      }

      // Check canonical alias or direct match in VENUE_DETAILS
      const resolvedSlug = VENUE_SLUG_ALIASES[slug] || slug;
      const venueDetail = VENUE_DETAILS[resolvedSlug] || VENUE_DETAILS[slug];

      if (venueDetail) {
        return <VenueDetailTemplate venue={venueDetail} onNavigate={handleNavigate} />;
      }

      // Fallback: search VENUE_DATABASE for matching venue
      const dbMatch = VENUE_DATABASE.find(v => {
        const vSlug = v.url.replace('/venues/', '').toLowerCase();
        return vSlug === slug || vSlug === resolvedSlug || v.url === currentPath;
      });
      if (dbMatch) {
        const vSlug = dbMatch.url.replace('/venues/', '');
        if (VENUE_DETAILS[vSlug]) {
          return <VenueDetailTemplate venue={VENUE_DETAILS[vSlug]} onNavigate={handleNavigate} />;
        }
      }
    }

    // 7. Check for venue directory: /venues
    if (currentPath === '/venues' || currentPath === '/venues/' || currentPath.startsWith('/venues?')) {
      const urlParams = new URLSearchParams(window.location.search);
      const initialLoc = urlParams.get('location') || undefined;
      return <VenuesDirectoryPage onNavigate={handleNavigate} initialLocation={initialLoc} />;
    }

    // 8. Check for functions and intent pages: /functions
    if (currentPath === '/functions' || currentPath === '/functions/') {
      return <FunctionsHubPage onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith('/functions/')) {
      const intentSlug = currentPath.replace('/functions/', '').replace(/\/$/, '');
      const eventConfig = EVENT_TYPES_DATA[intentSlug];

      if (eventConfig) {
        return <EventTypePage config={eventConfig} onNavigate={handleNavigate} />;
      }
      return <FunctionsHubPage onNavigate={handleNavigate} />;
    }

    // 9. Check for accommodation: /accommodation
    if (currentPath === '/accommodation' || currentPath === '/accommodation/') {
      return <AccommodationPage onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith('/accommodation/')) {
      const propSlug = currentPath.replace('/accommodation/', '').replace(/\/$/, '');
      return <AccommodationPage onNavigate={handleNavigate} initialPropertySlug={propSlug} />;
    }

    // 10. Check for what's on: /whats-on
    if (currentPath === '/whats-on' || currentPath === '/whats-on/') {
      return <WhatsOnPage onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith('/whats-on/')) {
      const eventSlug = currentPath.replace('/whats-on/', '').replace(/\/$/, '');
      return <WhatsOnPage onNavigate={handleNavigate} initialEventSlug={eventSlug} />;
    }

    // 11. Homepage
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    // 12. 404 Fallback for unrecognized routes
    return <NotFoundPage onNavigate={handleNavigate} attemptedPath={currentPath} />;
  };

  const renderArchitectureSpecs = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7E2D9] shadow-xs space-y-4">
        <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844] block">
          STAGE 1 SPECIFICATION ARCHIVE
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#121314]">
          Information Architecture, Venue Database & SEO Blueprint
        </h2>
        <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
          Universal Hotels encompasses 16 verified venues across 6 distinct Sydney geographic clusters. Doorway pages are eliminated by aggregating individual venue microsites into rich, precinct-level editorial guides.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#EFECE6]">
          <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] space-y-1 text-xs">
            <span className="font-bold text-neutral-900 block text-sm">16 Verified Venues</span>
            <p className="text-neutral-600">Full operational dataset with addresses, phones, 4am hours, and function spaces.</p>
          </div>

          <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] space-y-1 text-xs">
            <span className="font-bold text-neutral-900 block text-sm">6 Geographic Hubs</span>
            <p className="text-neutral-600">Sydney CBD, Darlinghurst, Surry Hills & Redfern, Inner West, Tempe, and Eastwood.</p>
          </div>

          <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] space-y-1 text-xs">
            <span className="font-bold text-neutral-900 block text-sm">Commercial Intent</span>
            <p className="text-neutral-600">High-converting funnels for birthdays, corporate networking, rooftops, and private dining.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E2D9] shadow-xs space-y-4">
        <h3 className="text-xl font-serif text-[#121314]">Verified Venues Directory (16 Properties)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#E7E2D9] text-[11px] uppercase tracking-wider text-neutral-500 font-bold bg-[#FAF8F5]">
                <th className="p-3">Venue</th>
                <th className="p-3">Location</th>
                <th className="p-3">Type</th>
                <th className="p-3">Trading Hours</th>
                <th className="p-3">Phone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFECE6]">
              {VENUE_DATABASE.map(v => (
                <tr 
                  key={v.url} 
                  onClick={() => handleNavigate(v.url)}
                  className="hover:bg-[#FAF8F5] cursor-pointer transition-colors"
                >
                  <td className="p-3 font-semibold text-neutral-900 flex items-center gap-1.5">
                    {v.venueName} <ArrowRight className="w-3 h-3 text-[#A47844]" />
                  </td>
                  <td className="p-3 text-neutral-600">{v.locationSuburb}</td>
                  <td className="p-3 text-neutral-600">{v.venueType}</td>
                  <td className="p-3 text-neutral-600">{v.openingHours}</td>
                  <td className="p-3 text-neutral-600 font-mono text-[11px]">{v.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderDesignSystemSpecs = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E7E2D9] shadow-xs space-y-4">
        <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844] block">
          STAGE 2 DESIGN SYSTEM TOKENS
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#121314]">
          Editorial + Premium + Energetic + Modern + Australian
        </h2>
        <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
          The visual direction enforces strict anti-slop guidelines: no purple gradients, no ghost cards, no nested containers, and zero generic AI clichés. Designed for WCAG 2.2 AA accessibility and instantaneous performance.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#EFECE6]">
          <div className="p-4 rounded-xl border border-[#E2DDD4] space-y-1 bg-[#FAF8F5]">
            <span className="font-bold text-xs text-neutral-900 block">Warm Sand (#FAF8F5)</span>
            <span className="text-[10px] text-neutral-500 block">Primary Canvas • 17.2:1 AAA</span>
          </div>
          <div className="p-4 rounded-xl border border-[#E2DDD4] space-y-1 bg-[#121314] text-white">
            <span className="font-bold text-xs text-white block">Charcoal (#121314)</span>
            <span className="text-[10px] text-neutral-400 block">Dark Luxury • 17.2:1 AAA</span>
          </div>
          <div className="p-4 rounded-xl border border-[#E2DDD4] space-y-1 bg-[#A47844] text-white">
            <span className="font-bold text-xs text-white block">Sydney Bronze (#A47844)</span>
            <span className="text-[10px] text-neutral-200 block">Primary Accent • 4.7:1 AA</span>
          </div>
          <div className="p-4 rounded-xl border border-[#E2DDD4] space-y-1 bg-[#D9383A] text-white">
            <span className="font-bold text-xs text-white block">Nightlife Coral (#D9383A)</span>
            <span className="text-[10px] text-neutral-200 block">Drag & 4am Pulse • 4.8:1 AA</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141414] selection:bg-[#A47844] selection:text-white flex flex-col justify-between">
      
      {/* Skip to Main Content (WCAG 2.2 AA Keyboard Navigation) */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#121314] focus:text-[#C7A379] focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A47844] font-semibold text-xs shadow-lg"
      >
        Skip to main content
      </a>

      {/* Top Protocol Status Bar */}
      <div className="bg-[#121314] text-[#F3EFEA] border-b border-neutral-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#A47844] text-white">
              Stage 8 Verified
            </span>
            <span className="text-neutral-300 font-medium text-[11px]">
              Universal Hotels Australia • Production Hospitality Platform | Responsive QA & WCAG 2.2 AA Polish
            </span>
          </div>

          {/* Quick Route & Inspector Navigation */}
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <button
              onClick={() => handleNavigate('/')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                currentPath === '/' && activeInspectorView === 'none'
                  ? 'bg-white/20 text-[#C7A379] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Home
            </button>
            <span className="text-neutral-600">•</span>
            <button
              onClick={() => handleNavigate('/venues')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                currentPath.startsWith('/venues') && activeInspectorView === 'none'
                  ? 'bg-white/20 text-[#C7A379] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Venues
            </button>
            <span className="text-neutral-600">•</span>
            <button
              onClick={() => handleNavigate('/functions')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                currentPath.startsWith('/functions') && activeInspectorView === 'none'
                  ? 'bg-white/20 text-[#C7A379] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Functions
            </button>
            <span className="text-neutral-600">•</span>
            <button
              onClick={() => handleNavigate('/whats-on')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                currentPath.startsWith('/whats-on') && activeInspectorView === 'none'
                  ? 'bg-white/20 text-[#C7A379] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              What's On
            </button>
            <span className="text-neutral-600">•</span>
            <button
              onClick={() => handleNavigate('/accommodation')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                currentPath.startsWith('/accommodation') && activeInspectorView === 'none'
                  ? 'bg-white/20 text-[#C7A379] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Accommodation
            </button>
            <span className="text-neutral-600">•</span>
            <button
              onClick={() => handleNavigate('/seo')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                currentPath === '/seo' && activeInspectorView === 'none'
                  ? 'bg-white/20 text-[#C7A379] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              SEO & AEO
            </button>
            <span className="text-neutral-600">•</span>
            <button
              onClick={() => setActiveInspectorView('architectureSpecs')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                activeInspectorView === 'architectureSpecs'
                  ? 'bg-white/20 text-[#C7A379] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              IA
            </button>
            <span className="text-neutral-600">•</span>
            <button
              onClick={() => setActiveInspectorView('designSystemSpecs')}
              className={`px-2.5 py-0.5 rounded transition-colors cursor-pointer ${
                activeInspectorView === 'designSystemSpecs'
                  ? 'bg-white/20 text-[#C7A379] font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Specs
            </button>
          </div>
        </div>
      </div>

      {/* Global Header / Navbar */}
      <Navbar activePath={currentPath} onNavigate={handleNavigate} />

      {/* Main Dynamic View */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Bottom Action Dock */}
      <MobileActionDock onNavigate={handleNavigate} activePath={currentPath} />

    </div>
  );
}
