import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Search,
  Globe,
  FileCode,
  MapPin,
  Phone,
  Calendar,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Activity,
  Layers,
  HelpCircle,
  Sparkles,
  Link as LinkIcon,
  Tag,
  Bed,
  BarChart2,
  RefreshCw,
  Clock
} from 'lucide-react';
import { VENUE_DATABASE } from '../data/venueDatabase';
import { VENUE_DETAILS } from '../data/venueDetails';
import { 
  ORGANIZATION_SCHEMA, 
  WEBSITE_SCHEMA, 
  SEO_REDIRECT_MAP, 
  KEYWORD_MAPPING_MATRIX,
  generateVenueLocalBusinessSchema,
  checkRedirect
} from '../utils/seo';
import {
  subscribeToAnalytics,
  getRecentAnalyticsEvents,
  trackConversion,
  AnalyticsEventPayload
} from '../utils/analytics';
import { Button } from '../components/ui/Button';

export interface SeoArchitectureDashboardPageProps {
  onNavigate?: (path: string) => void;
}

export const SeoArchitectureDashboardPage: React.FC<SeoArchitectureDashboardPageProps> = ({
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'technical' | 'localseo' | 'aeo' | 'keywords' | 'redirects' | 'analytics'>('technical');
  const [testRedirectInput, setTestRedirectInput] = useState<string>('/the-imperial');
  const [testRedirectOutput, setTestRedirectOutput] = useState<string | null>(null);

  // Analytics event stream
  const [analyticsEvents, setAnalyticsEvents] = useState<AnalyticsEventPayload[]>(getRecentAnalyticsEvents());

  useEffect(() => {
    const unsubscribe = subscribeToAnalytics(() => {
      setAnalyticsEvents(getRecentAnalyticsEvents());
    });
    return unsubscribe;
  }, []);

  const handleTestRedirect = (path: string) => {
    const target = checkRedirect(path);
    setTestRedirectOutput(target);
  };

  const handleTriggerTestEvent = (eventName: any) => {
    trackConversion({
      event: eventName,
      venue_name: 'The Imperial Hotel Erskineville',
      venue_slug: 'the-imperial-hotel-erskineville',
      location_suburb: 'Erskineville',
      category: 'Test Conversion Event',
      value: '$150',
      label: `Manual Test Trigger: ${eventName}`
    });
  };

  return (
    <div className="min-w-full min-h-screen bg-[#FDFBF7] text-[#121314]">
      {/* Header Banner */}
      <section className="bg-[#121314] text-white py-12 sm:py-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A47844]/20 border border-[#A47844]/40 text-[#C7A379] text-xs font-bold tracking-widest uppercase">
                <Search className="w-3.5 h-3.5" />
                Stage 7 Complete Architecture Specification
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                Technical SEO, Local SEO, AEO/GEO & Analytics
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Complete audit blueprint: Schema.org structured data, NAP local consistency, XML sitemaps, robots.txt, 301 migration redirects, keyword mapping, and GA4/GTM conversion event dispatchers.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 inline-flex items-center gap-1.5 transition-all"
              >
                <FileCode className="w-3.5 h-3.5 text-[#C7A379]" />
                View sitemap.xml
              </a>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 inline-flex items-center gap-1.5 transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-[#C7A379]" />
                View robots.txt
              </a>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-8 border-t border-neutral-800/80 mt-8">
            {[
              { id: 'technical', label: '1. Technical SEO & Schema', icon: ShieldCheck },
              { id: 'localseo', label: '2. Local SEO & NAP Matrix', icon: MapPin },
              { id: 'aeo', label: '3. AEO / GEO AI Extraction', icon: Sparkles },
              { id: 'keywords', label: '4. Keyword Mapping Matrix', icon: Tag },
              { id: 'redirects', label: '5. 301 Migration Redirects', icon: RefreshCw },
              { id: 'analytics', label: '6. Live Analytics & Conversion Tracking', icon: BarChart2 }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#A47844] text-white shadow-sm'
                      : 'bg-white/5 hover:bg-white/10 text-neutral-300'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* TAB 1: TECHNICAL SEO & SCHEMA */}
        {activeTab === 'technical' && (
          <div className="space-y-8">
            {/* Checklist Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-[#E7E2D9] space-y-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E3D8] flex items-center justify-center text-[#A47844]">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-neutral-900">Canonical & Crawling</h3>
                <ul className="text-xs text-neutral-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                    <span>Dynamic canonical URLs (`link rel="canonical"`)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                    <span>Standardized trailing slash stripping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                    <span>Production `/robots.txt` with Sitemap reference</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                    <span>Valid `/sitemap.xml` index of all 16 canonical venues</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E7E2D9] space-y-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E3D8] flex items-center justify-center text-[#A47844]">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-neutral-900">Semantic & Social</h3>
                <ul className="text-xs text-neutral-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                    <span>Strict H1 / H2 / H3 heading hierarchy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                    <span>Descriptive descriptive image alt tags</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                    <span>OpenGraph (`og:title`, `og:image`, `og:url`)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                    <span>Twitter Summary Large Cards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E7E2D9] space-y-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#E8E3D8] flex items-center justify-center text-[#A47844]">
                  <FileCode className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-neutral-900">Structured Data (JSON-LD)</h3>
                <ul className="text-xs text-neutral-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                    <span>`schema.org/Organization` (Universal Hotels)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                    <span>`LocalBusiness` (`Restaurant`, `BarOrPub`, `Hotel`)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                    <span>`Event` schema for What's On live entertainment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A47844] flex-shrink-0" />
                    <span>`BreadcrumbList` & `FAQPage` rich snippet schemas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Schema Inspector Preview */}
            <div className="bg-white rounded-2xl border border-[#E7E2D9] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#EFECE6] pb-4">
                <div>
                  <h3 className="font-serif font-bold text-xl text-neutral-900">
                    Live Schema.org Organization Definition
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Injected into head for universal brand entity recognition across Google Knowledge Graph.
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#E8E3D8] text-[11px] font-mono text-[#A47844]">
                  application/ld+json
                </span>
              </div>

              <pre className="bg-[#121314] text-neutral-200 p-5 rounded-xl text-xs overflow-x-auto font-mono leading-relaxed border border-neutral-800">
                {JSON.stringify(ORGANIZATION_SCHEMA, null, 2)}
              </pre>
            </div>
          </div>
        )}

        {/* TAB 2: LOCAL SEO & NAP MATRIX */}
        {activeTab === 'localseo' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif font-bold text-2xl text-neutral-900">
                  Local SEO Consistency Matrix (16 Properties)
                </h3>
                <p className="text-xs text-neutral-500">
                  Guarantees 100% NAP (Name, Address, Phone) consistency across Google Business Profiles, Apple Maps, Bing Places, and TripAdvisor.
                </p>
              </div>
              <div className="text-xs font-bold text-[#A47844] bg-[#FAF8F5] px-3.5 py-2 rounded-xl border border-[#E8E3D8]">
                16 Verified Universal Venues
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E7E2D9] overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF8F5] text-neutral-600 uppercase text-[10px] tracking-wider border-b border-[#E7E2D9]">
                    <tr>
                      <th className="py-3.5 px-4 font-bold">Venue Name</th>
                      <th className="py-3.5 px-4 font-bold">Suburb & Region</th>
                      <th className="py-3.5 px-4 font-bold">Physical Address</th>
                      <th className="py-3.5 px-4 font-bold">Verified Phone</th>
                      <th className="py-3.5 px-4 font-bold">Schema Category</th>
                      <th className="py-3.5 px-4 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFECE6]">
                    {VENUE_DATABASE.map(v => (
                      <tr key={v.url} className="hover:bg-[#FAF8F5]/80 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-neutral-900 whitespace-nowrap">
                          {v.venueName}
                        </td>
                        <td className="py-3.5 px-4 text-neutral-600 whitespace-nowrap">
                          {v.locationSuburb}
                        </td>
                        <td className="py-3.5 px-4 text-neutral-600 min-w-[240px]">
                          {v.address}
                        </td>
                        <td className="py-3.5 px-4 text-[#A47844] font-semibold whitespace-nowrap">
                          {v.phone}
                        </td>
                        <td className="py-3.5 px-4 text-neutral-600 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FAF8F5] text-neutral-700 border border-[#E8E3D8]">
                            {v.accommodation && v.accommodation.trim() !== ''
                              ? 'Hotel'
                              : v.venueType.toLowerCase().includes('dining') || v.venueType.toLowerCase().includes('taverna')
                              ? 'Restaurant'
                              : 'BarOrPub'}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <button
                            onClick={() => onNavigate?.(v.url)}
                            className="text-[#A47844] hover:underline font-bold text-xs cursor-pointer inline-flex items-center gap-1"
                          >
                            View Page
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: AEO / GEO AI EXTRACTION */}
        {activeTab === 'aeo' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#E7E2D9] p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A47844]/15 text-[#A47844] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                AEO & GEO Protocol (Answer Engine & Generative Engine Optimization)
              </div>
              <h3 className="font-serif font-bold text-2xl text-neutral-900">
                Machine-Extractable Data For Generative AI Models
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
                Modern AI search engines (Perplexity, ChatGPT, Gemini, and Google SGE) prioritize authoritative, non-redundant factual entity blocks. Every Universal Hotels venue page exposes a standardized factsheet that allows AI agents to directly extract capacity, opening hours, dining styles, and booking procedures with 100% precision.
              </p>
            </div>

            {/* Visual Sample of The Imperial Hotel */}
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg text-neutral-900">
                Live Preview: AEO Extraction Box on The Imperial Hotel Erskineville
              </h4>

              <div className="bg-white rounded-2xl border border-[#E7E2D9] p-6 space-y-4">
                <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] space-y-1">
                    <dt className="text-[10px] uppercase font-bold text-neutral-400">Entity & Precinct</dt>
                    <dd className="font-bold text-neutral-900 text-sm">The Imperial Hotel</dd>
                    <dd className="text-neutral-500">Erskineville, Sydney</dd>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] space-y-1">
                    <dt className="text-[10px] uppercase font-bold text-neutral-400">Exact Geocoded Address</dt>
                    <dd className="font-bold text-neutral-900 text-sm">35 Erskineville Rd, Erskineville NSW 2043</dd>
                    <dd className="text-neutral-500">-33.8992° S, 151.1852° E</dd>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] space-y-1">
                    <dt className="text-[10px] uppercase font-bold text-neutral-400">Capacity & Spaces</dt>
                    <dd className="font-bold text-neutral-900 text-sm">Up to 450 Guests</dd>
                    <dd className="text-neutral-500">Priscilla's, Imperial Rooftop, The Basement</dd>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] space-y-1">
                    <dt className="text-[10px] uppercase font-bold text-neutral-400">Booking & Direct Contact</dt>
                    <dd className="font-bold text-[#A47844] text-sm">(02) 9516 1766</dd>
                    <dd className="text-neutral-500">Online Table Reservations Active</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: KEYWORD MAPPING MATRIX */}
        {activeTab === 'keywords' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-serif font-bold text-2xl text-neutral-900">
                Hospitality Keyword Mapping Matrix
              </h3>
              <p className="text-xs text-neutral-500">
                Targeting high-intent commercial and transactional queries without keyword stuffing.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E7E2D9] overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF8F5] text-neutral-600 uppercase text-[10px] tracking-wider border-b border-[#E7E2D9]">
                    <tr>
                      <th className="py-3.5 px-4 font-bold">Target Page</th>
                      <th className="py-3.5 px-4 font-bold">Type</th>
                      <th className="py-3.5 px-4 font-bold">Primary Keyword</th>
                      <th className="py-3.5 px-4 font-bold">Secondary Keywords</th>
                      <th className="py-3.5 px-4 font-bold">Search Intent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFECE6]">
                    {KEYWORD_MAPPING_MATRIX.map((km, i) => (
                      <tr key={i} className="hover:bg-[#FAF8F5]/80 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-[#A47844] whitespace-nowrap">
                          {km.targetUrl}
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FAF8F5] text-neutral-700 border border-[#E8E3D8]">
                            {km.pageType}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-neutral-900 whitespace-nowrap">
                          {km.primaryKeyword}
                        </td>
                        <td className="py-3.5 px-4 text-neutral-600 max-w-xs">
                          {km.secondaryKeywords.join(', ')}
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FAF8F5] text-[#A47844] border border-[#E8E3D8]">
                            {km.searchIntent}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: 301 MIGRATION REDIRECTS */}
        {activeTab === 'redirects' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#E7E2D9] p-6 sm:p-8 space-y-4">
              <h3 className="font-serif font-bold text-2xl text-neutral-900">
                SEO Migration & 301 Redirect Engine
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
                To preserve decades of accumulated page rank, backlinks from concrete publications (Broadsheet, Urban List, Concrete Playground), and Google indexation, every legacy or shorthand URL is preserved with a 301 permanent redirect rule.
              </p>

              {/* Interactive Redirect Simulator */}
              <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] space-y-3">
                <span className="text-xs uppercase font-bold text-neutral-700 block">
                  Interactive Redirect Rule Simulator
                </span>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={testRedirectInput}
                    onChange={(e) => {
                      setTestRedirectInput(e.target.value);
                      handleTestRedirect(e.target.value);
                    }}
                    placeholder="e.g. /the-imperial, /harold-park-hotel, /stay"
                    className="flex-1 px-3 py-2 bg-white rounded-lg border border-[#E7E2D9] text-xs focus:outline-none"
                  />
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleTestRedirect(testRedirectInput)}
                  >
                    Test 301
                  </Button>
                </div>

                {testRedirectOutput ? (
                  <div className="flex items-center gap-2 text-xs text-[#A47844] font-bold bg-white p-3 rounded-lg border border-[#E7E2D9]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>301 Permanent Redirect: </span>
                    <span className="font-mono text-neutral-700">{testRedirectInput}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span className="font-mono text-neutral-900">{testRedirectOutput}</span>
                  </div>
                ) : (
                  <div className="text-xs text-neutral-500 italic">
                    Type a legacy path above to view its automatic canonical resolution.
                  </div>
                )}
              </div>
            </div>

            {/* Full 301 Mapping Table */}
            <div className="bg-white rounded-2xl border border-[#E7E2D9] overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF8F5] text-neutral-600 uppercase text-[10px] tracking-wider border-b border-[#E7E2D9]">
                    <tr>
                      <th className="py-3.5 px-4 font-bold">Legacy / Source URL</th>
                      <th className="py-3.5 px-4 font-bold">Status</th>
                      <th className="py-3.5 px-4 font-bold">New Canonical Destination</th>
                      <th className="py-3.5 px-4 font-bold">Migration Reason</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFECE6]">
                    {SEO_REDIRECT_MAP.map((r, i) => (
                      <tr key={i} className="hover:bg-[#FAF8F5]/80 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-neutral-700">
                          {r.from}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-700 border border-green-200">
                            {r.statusCode} Permanent
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-[#A47844]">
                          {r.to}
                        </td>
                        <td className="py-3 px-4 text-neutral-500">
                          {r.reason}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: LIVE ANALYTICS & CONVERSION TRACKING */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#E7E2D9] p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-2xl text-neutral-900">
                    GA4 & Google Tag Manager (GTM) Conversion Engine
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Dispatches high-value hospitality conversion events to `window.dataLayer` and `window.gtag`.
                  </p>
                </div>

                {/* Conversion Trigger Test Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleTriggerTestEvent('booking_click')}
                    className="text-xs cursor-pointer"
                  >
                    Test Booking Click
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleTriggerTestEvent('phone_click')}
                    className="text-xs cursor-pointer"
                  >
                    Test Phone Click
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleTriggerTestEvent('function_enquiry')}
                    className="text-xs cursor-pointer"
                  >
                    Test Function Enquiry
                  </Button>
                </div>
              </div>

              {/* Supported Conversions Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-2">
                {[
                  { name: 'booking_click', desc: 'Table reservations' },
                  { name: 'phone_click', desc: 'Direct dial calls' },
                  { name: 'email_click', desc: 'Direct email' },
                  { name: 'function_enquiry', desc: 'Event RFP leads' },
                  { name: 'accommodation_click', desc: 'Direct room stays' },
                  { name: 'menu_click', desc: 'Menu downloads' },
                  { name: 'event_click', desc: 'Show tickets' }
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E3D8] text-center space-y-0.5">
                    <span className="font-mono text-[11px] font-bold text-[#A47844] block truncate">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-neutral-500 block">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Event Stream Monitor */}
            <div className="bg-white rounded-2xl border border-[#E7E2D9] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#EFECE6] pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#A47844] animate-pulse" />
                  <h4 className="font-serif font-bold text-lg text-neutral-900">
                    Real-Time Dispatched Events Stream ({analyticsEvents.length})
                  </h4>
                </div>
                <span className="text-xs text-neutral-500 font-mono">
                  dataLayer.push & gtag active
                </span>
              </div>

              {analyticsEvents.length === 0 ? (
                <div className="text-center py-8 text-xs text-neutral-400">
                  No events fired in this session yet. Click any test button above or click around the live app to observe dispatches.
                </div>
              ) : (
                <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                  {analyticsEvents.map((evt, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E3D8] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded font-mono font-bold text-[10px] bg-[#A47844] text-white">
                          {evt.event}
                        </span>
                        <span className="font-bold text-neutral-900">{evt.label}</span>
                      </div>
                      <div className="flex items-center gap-3 text-neutral-500 text-[11px]">
                        <span>{evt.venue_name}</span>
                        <span>•</span>
                        <span className="font-mono text-[10px]">
                          {evt.timestamp ? new Date(evt.timestamp).toLocaleTimeString() : ''}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </main>
    </div>
  );
};
