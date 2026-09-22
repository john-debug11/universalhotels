import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Copy,
  Check,
  ExternalLink,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Share2,
  Tag,
  Eye,
  Info,
  Layers,
  FileCode,
  Globe,
  SlidersHorizontal,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import {
  runVenueRoutesSeoAudit,
  SeoAuditReport,
  VenueSeoAuditItem,
  SeoAuditOptions
} from '../../utils/seoAudit';
import { Button } from '../ui/Button';

export interface VenueRoutesSeoAuditReportProps {
  onNavigate?: (path: string) => void;
}

export const VenueRoutesSeoAuditReport: React.FC<VenueRoutesSeoAuditReportProps> = ({
  onNavigate
}) => {
  // Audit configuration & simulation state
  const [simulationMode, setSimulationMode] = useState<'normal' | 'duplicate' | 'missing-og'>('normal');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [auditTimestamp, setAuditTimestamp] = useState<Date>(new Date());
  const [copiedReport, setCopiedReport] = useState<boolean>(false);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pass' | 'warning' | 'critical'>('all');
  const [expandedVenueSlug, setExpandedVenueSlug] = useState<string | null>(null);
  const [selectedPreviewSlug, setSelectedPreviewSlug] = useState<string>('civic-hotel');

  // Compute audit report based on options
  const auditOptions: SeoAuditOptions | undefined = useMemo(() => {
    if (simulationMode === 'duplicate') {
      return {
        simulateDuplicateTitle: {
          sourceSlug: 'civic-hotel',
          targetSlug: 'the-oxford-hotel',
          duplicatedTitle: 'Civic Hotel Sydney | CBD Pub, Ni Hao Cantonese & Civic Underground'
        }
      };
    }
    if (simulationMode === 'missing-og') {
      return {
        simulateMissingOgTags: {
          slug: 'universal-sydney',
          tagsToRemove: ['og:image', 'og:description']
        }
      };
    }
    return undefined;
  }, [simulationMode]);

  const report: SeoAuditReport = useMemo(() => {
    return runVenueRoutesSeoAudit(auditOptions);
  }, [auditOptions, auditTimestamp]);

  // Selected venue for live social preview
  const previewVenue = useMemo(() => {
    return report.items.find((v) => v.slug === selectedPreviewSlug) || report.items[0];
  }, [report, selectedPreviewSlug]);

  // Handle re-scan
  const handleReScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setAuditTimestamp(new Date());
      setIsScanning(false);
    }, 450);
  };

  // Copy JSON Report to clipboard
  const handleCopyReport = () => {
    const jsonStr = JSON.stringify(report, null, 2);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(jsonStr);
      setCopiedReport(true);
      setTimeout(() => setCopiedReport(false), 2000);
    }
  };

  // Filtered venue items
  const filteredItems = useMemo(() => {
    return report.items.filter((item) => {
      const matchesSearch =
        item.venueName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.suburb.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'pass' && item.status === 'pass') ||
        (statusFilter === 'warning' && item.status === 'warning') ||
        (statusFilter === 'critical' && item.status === 'critical');

      return matchesSearch && matchesStatus;
    });
  }, [report, searchQuery, statusFilter]);

  return (
    <div className="space-y-8">
      {/* 1. Header & Controls Card */}
      <div className="bg-white rounded-2xl border border-[#E7E2D9] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E3D8] text-[#A47844] text-[11px] font-bold tracking-widest uppercase mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              Automated Route Inspector • Universal Hotels
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
              Venue Routes Technical SEO & Open Graph Audit
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-3xl mt-1 leading-relaxed">
              Real-time audit scanning all 16 active venue routes to detect missing Open Graph tags (<code className="text-[#A47844]">og:title</code>, <code className="text-[#A47844]">og:description</code>, <code className="text-[#A47844]">og:image</code>, <code className="text-[#A47844]">og:url</code>, <code className="text-[#A47844]">og:type</code>), identify duplicate title tags, and enforce SERP length standards.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyReport}
              className="text-xs inline-flex items-center gap-1.5 cursor-pointer bg-white hover:bg-neutral-50"
            >
              {copiedReport ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Report Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Export JSON</span>
                </>
              )}
            </Button>

            <Button
              variant="primary"
              size="sm"
              onClick={handleReScan}
              disabled={isScanning}
              className="text-xs inline-flex items-center gap-2 cursor-pointer bg-[#A47844] hover:bg-[#8D6433] text-white"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
              <span>{isScanning ? 'Scanning 16 Routes...' : 'Re-Scan Active Routes'}</span>
            </Button>
          </div>
        </div>

        {/* Simulator Strip for Live Testing */}
        <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs">
            <SlidersHorizontal className="w-4 h-4 text-[#A47844] flex-shrink-0" />
            <span className="font-bold text-neutral-800">Interactive Audit Testing & Collision Simulator:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSimulationMode('normal')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                simulationMode === 'normal'
                  ? 'bg-[#121314] text-white shadow-xs'
                  : 'bg-white text-neutral-600 border border-[#E7E2D9] hover:bg-neutral-100'
              }`}
            >
              Normal Baseline (16 Verified Routes)
            </button>
            <button
              onClick={() => setSimulationMode('duplicate')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                simulationMode === 'duplicate'
                  ? 'bg-rose-700 text-white shadow-xs'
                  : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50'
              }`}
            >
              Simulate Duplicate Title Tag
            </button>
            <button
              onClick={() => setSimulationMode('missing-og')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                simulationMode === 'missing-og'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'bg-white text-amber-700 border border-amber-200 hover:bg-amber-50'
              }`}
            >
              Simulate Missing OG Tags
            </button>
          </div>
        </div>

        {/* Simulation Notice Banner */}
        {simulationMode === 'duplicate' && (
          <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2.5 text-xs text-rose-800">
            <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
            <span>
              <strong>Simulation Mode Active:</strong> Injected identical title between <em>Civic Hotel</em> and <em>The Oxford Hotel</em> to verify collision detection.
            </span>
          </div>
        )}

        {simulationMode === 'missing-og' && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-2.5 text-xs text-amber-800">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>
              <strong>Simulation Mode Active:</strong> Removed <code className="font-mono">og:image</code> and <code className="font-mono">og:description</code> from <em>Universal Sydney</em> to verify missing tag reporting.
            </span>
          </div>
        )}
      </div>

      {/* 2. Executive Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Scanned */}
        <div className="bg-white rounded-2xl border border-[#E7E2D9] p-5 space-y-2">
          <div className="flex items-center justify-between text-neutral-400">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Active Venue Routes</span>
            <Globe className="w-4 h-4 text-[#A47844]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-serif font-bold text-neutral-900">{report.totalVenuesScanned}</span>
            <span className="text-xs font-semibold text-emerald-600">100% Active</span>
          </div>
          <p className="text-[11px] text-neutral-500">
            All 16 Universal Hotels properties verified with canonical URLs.
          </p>
        </div>

        {/* Duplicate Titles */}
        <div className="bg-white rounded-2xl border border-[#E7E2D9] p-5 space-y-2">
          <div className="flex items-center justify-between text-neutral-400">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Duplicate Title Tags</span>
            <Tag className="w-4 h-4 text-[#A47844]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-serif font-bold ${report.totalDuplicateTitles > 0 ? 'text-rose-600' : 'text-neutral-900'}`}>
              {report.totalDuplicateTitles}
            </span>
            {report.totalDuplicateTitles === 0 ? (
              <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Unique Titles
              </span>
            ) : (
              <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> Collision Detected
              </span>
            )}
          </div>
          <p className="text-[11px] text-neutral-500">
            {report.totalDuplicateTitles === 0
              ? 'Zero duplicate titles across active routes. Zero cannibalization.'
              : `${report.totalDuplicateTitles} conflicting title tag group(s) require resolution.`}
          </p>
        </div>

        {/* Missing Open Graph Tags */}
        <div className="bg-white rounded-2xl border border-[#E7E2D9] p-5 space-y-2">
          <div className="flex items-center justify-between text-neutral-400">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Missing OG Tags</span>
            <Share2 className="w-4 h-4 text-[#A47844]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-serif font-bold ${report.missingOgSummary.totalMissingTags > 0 ? 'text-amber-600' : 'text-neutral-900'}`}>
              {report.missingOgSummary.totalMissingTags}
            </span>
            {report.missingOgSummary.totalMissingTags === 0 ? (
              <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Complete
              </span>
            ) : (
              <span className="text-xs font-bold text-amber-600">
                {report.missingOgSummary.venuesAffectedCount} Venue(s) Affected
              </span>
            )}
          </div>
          <p className="text-[11px] text-neutral-500">
            Auditing og:title, og:description, og:image, og:url, and og:type.
          </p>
        </div>

        {/* Overall SEO Health Score */}
        <div className="bg-white rounded-2xl border border-[#E7E2D9] p-5 space-y-2">
          <div className="flex items-center justify-between text-neutral-400">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Portfolio SEO Health</span>
            <ShieldCheck className="w-4 h-4 text-[#A47844]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-serif font-bold text-[#A47844]">
              {report.overallHealthScore}%
            </span>
            <span className="text-xs font-semibold text-neutral-600">
              {report.passedCount} / {report.totalVenuesScanned} Pass
            </span>
          </div>
          {/* Progress meter */}
          <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                report.overallHealthScore >= 90
                  ? 'bg-[#A47844]'
                  : report.overallHealthScore >= 75
                  ? 'bg-amber-500'
                  : 'bg-rose-500'
              }`}
              style={{ width: `${report.overallHealthScore}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3. Deep-Dive Section: Duplicate Title Tag Scanner Report */}
      <div className="bg-white rounded-2xl border border-[#E7E2D9] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EFECE6] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5 text-[#A47844]" />
              <h3 className="font-serif font-bold text-xl text-neutral-900">
                Duplicate Title Tags Audit Report
              </h3>
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              Identifies exact or fuzzy title collisions across active routes to protect search rankings from internal keyword cannibalization.
            </p>
          </div>

          {report.totalDuplicateTitles === 0 ? (
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              0 Collisions Detected (All Titles Unique)
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold inline-flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              {report.totalDuplicateTitles} Title Collision(s) Detected
            </span>
          )}
        </div>

        {/* If duplicate collisions exist */}
        {report.duplicateTitleGroups.length > 0 ? (
          <div className="space-y-4">
            {report.duplicateTitleGroups.map((group, idx) => (
              <div key={idx} className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl space-y-3">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                      Duplicate Title Collision #{idx + 1}
                    </span>
                    <div className="font-mono text-xs font-bold text-rose-950 bg-white/80 p-2.5 rounded border border-rose-200">
                      "{group.rawTitle}"
                    </div>
                  </div>
                </div>

                <div className="pl-8 space-y-2">
                  <span className="text-xs font-semibold text-rose-900 block">
                    Conflicting Venue Routes ({group.venues.length}):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.venues.map((v) => (
                      <div
                        key={v.slug}
                        className="bg-white p-3 rounded-lg border border-rose-200 flex items-center justify-between text-xs"
                      >
                        <div>
                          <span className="font-bold text-neutral-900 block">{v.venueName}</span>
                          <span className="font-mono text-[11px] text-[#A47844]">{v.route}</span>
                        </div>
                        <button
                          onClick={() => onNavigate?.(v.route)}
                          className="text-[#A47844] hover:underline font-bold text-xs cursor-pointer inline-flex items-center gap-1"
                        >
                          View
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div className="text-xs text-emerald-900 leading-relaxed">
              <strong>Clean Architecture Confirmation:</strong> Every one of the 16 active venue routes specifies a completely distinct, brand-aligned page title that highlights each property's specific suburb precinct (e.g. <em>Erskineville</em>, <em>Taylor Square</em>, <em>Surry Hills</em>) and anchor dining concept.
            </div>
          </div>
        )}

        {/* Quick Title Tags Catalog */}
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A47844] block">
            Active Venue Route Titles & Character Count Verification (16 Venues)
          </span>
          <div className="overflow-x-auto border border-[#E7E2D9] rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F5] text-neutral-600 uppercase text-[10px] tracking-wider border-b border-[#E7E2D9]">
                <tr>
                  <th className="py-2.5 px-4 font-bold">Venue</th>
                  <th className="py-2.5 px-4 font-bold">Page Title (&lt;title&gt;)</th>
                  <th className="py-2.5 px-4 font-bold text-center">Length</th>
                  <th className="py-2.5 px-4 font-bold text-right">Duplicate Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFECE6]">
                {report.items.map((item) => (
                  <tr key={item.slug} className="hover:bg-[#FAF8F5]/60 transition-colors">
                    <td className="py-2.5 px-4 font-bold text-neutral-900 whitespace-nowrap">
                      {item.venueName}
                    </td>
                    <td className="py-2.5 px-4 text-neutral-700 font-mono text-[11px] max-w-md truncate">
                      {item.title}
                    </td>
                    <td className="py-2.5 px-4 text-center whitespace-nowrap">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          item.titleStatus === 'optimal'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}
                      >
                        {item.titleLength} chars
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-right whitespace-nowrap">
                      {item.isDuplicateTitle ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                          Duplicate Collision
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Unique ✓
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 4. Open Graph & Social Share Previewer */}
      <div className="bg-white rounded-2xl border border-[#E7E2D9] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EFECE6] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-[#A47844]" />
              <h3 className="font-serif font-bold text-xl text-neutral-900">
                Open Graph Meta Tags & Social Share Inspector
              </h3>
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              Audits critical meta tags for Facebook, LinkedIn, Twitter/X, and Slack sharing across all 16 venue routes.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500 font-semibold">Inspect Venue:</span>
            <select
              value={selectedPreviewSlug}
              onChange={(e) => setSelectedPreviewSlug(e.target.value)}
              className="px-3 py-1.5 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] text-xs font-semibold text-neutral-800 focus:outline-none cursor-pointer"
            >
              {report.items.map((v) => (
                <option key={v.slug} value={v.slug}>
                  {v.venueName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Missing Tags Summary Status */}
        {report.missingOgSummary.totalMissingTags > 0 ? (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Missing Open Graph Tags Flagged ({report.missingOgSummary.totalMissingTags} tags across {report.missingOgSummary.venuesAffectedCount} venues):
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {Object.entries(report.missingOgSummary.byTag).map(([tag, count]) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                    count > 0
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-white text-neutral-500 border border-neutral-200'
                  }`}
                >
                  {tag}: {count} missing
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-xs text-emerald-900">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>
              <strong>100% Complete Social Tags:</strong> All active venue routes provide valid <code className="font-mono">og:title</code>, <code className="font-mono">og:description</code>, <code className="font-mono">og:image</code>, <code className="font-mono">og:url</code>, and <code className="font-mono">og:type</code> tags.
            </span>
          </div>
        )}

        {/* Side-by-side: Tags List vs Visual Card Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tags List for Selected Venue */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A47844] flex items-center justify-between">
              <span>{previewVenue.venueName} • Open Graph Tags</span>
              <span className="text-[11px] font-mono text-neutral-400">{previewVenue.route}</span>
            </h4>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#E8E3D8] space-y-1">
                <span className="text-[10px] font-bold text-neutral-400 block">property="og:title"</span>
                <span className={`block font-semibold ${previewVenue.ogTags.ogTitle ? 'text-neutral-900' : 'text-rose-600'}`}>
                  {previewVenue.ogTags.ogTitle || '✗ Missing og:title tag'}
                </span>
              </div>

              <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#E8E3D8] space-y-1">
                <span className="text-[10px] font-bold text-neutral-400 block">property="og:description"</span>
                <span className={`block text-[11px] leading-relaxed ${previewVenue.ogTags.ogDescription ? 'text-neutral-700' : 'text-rose-600'}`}>
                  {previewVenue.ogTags.ogDescription || '✗ Missing og:description tag'}
                </span>
              </div>

              <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#E8E3D8] space-y-1">
                <span className="text-[10px] font-bold text-neutral-400 block">property="og:image"</span>
                <span className={`block truncate text-[11px] ${previewVenue.ogTags.ogImage ? 'text-neutral-600' : 'text-rose-600'}`}>
                  {previewVenue.ogTags.ogImage || '✗ Missing og:image tag'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#E8E3D8] space-y-1">
                  <span className="text-[10px] font-bold text-neutral-400 block">property="og:url"</span>
                  <span className="text-neutral-700 truncate block text-[11px]">
                    {previewVenue.ogTags.ogUrl || '✗ Missing'}
                  </span>
                </div>
                <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#E8E3D8] space-y-1">
                  <span className="text-[10px] font-bold text-neutral-400 block">property="og:type"</span>
                  <span className="text-neutral-700 block text-[11px]">
                    {previewVenue.ogTags.ogType || 'restaurant'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Share Card Preview */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A47844]">
              Simulated Social Preview (LinkedIn / Slack / Twitter Card)
            </h4>

            <div className="bg-[#121314] text-white rounded-xl overflow-hidden border border-neutral-700 shadow-md">
              <div className="h-44 w-full relative overflow-hidden bg-neutral-800">
                {previewVenue.ogTags.ogImage ? (
                  <img
                    src={previewVenue.ogTags.ogImage}
                    alt={previewVenue.venueName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-rose-950/40 text-rose-300 text-xs">
                    <AlertCircle className="w-8 h-8 text-rose-500 mb-2" />
                    <span>Missing og:image Preview</span>
                  </div>
                )}
                <div className="absolute top-2 left-2 bg-black/75 backdrop-blur px-2 py-0.5 rounded text-[10px] font-mono text-[#C7A379]">
                  universalhotels.com.au
                </div>
              </div>
              <div className="p-4 space-y-1.5 bg-[#18191B]">
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                  UNIVERSAL HOTELS AUSTRALIA • {previewVenue.suburb.toUpperCase()}
                </span>
                <h5 className="font-serif font-bold text-sm text-white line-clamp-1">
                  {previewVenue.ogTags.ogTitle || previewVenue.venueName}
                </h5>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                  {previewVenue.ogTags.ogDescription || 'No description provided'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Complete Venue-by-Venue Audit Matrix */}
      <div className="bg-white rounded-2xl border border-[#E7E2D9] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EFECE6] pb-4">
          <div>
            <h3 className="font-serif font-bold text-xl text-neutral-900">
              Detailed Venue Routes Audit Matrix ({filteredItems.length} of {report.totalVenuesScanned})
            </h3>
            <p className="text-xs text-neutral-500">
              Complete status, character count validation, canonical tag, and structured data verification per property.
            </p>
          </div>

          {/* Search & Status Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search venue or route..."
                className="pl-8 pr-3 py-1.5 bg-[#FAF8F5] rounded-xl border border-[#E8E3D8] text-xs focus:outline-none w-48"
              />
            </div>

            <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-xl border border-[#E8E3D8]">
              {(['all', 'pass', 'warning', 'critical'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer transition-all uppercase tracking-wider ${
                    statusFilter === st
                      ? 'bg-[#A47844] text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Audit Table */}
        <div className="border border-[#E7E2D9] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F5] text-neutral-600 uppercase text-[10px] tracking-wider border-b border-[#E7E2D9]">
                <tr>
                  <th className="py-3 px-4 font-bold">Venue & Route</th>
                  <th className="py-3 px-4 font-bold">Title Tag Status</th>
                  <th className="py-3 px-4 font-bold">Meta Description</th>
                  <th className="py-3 px-4 font-bold">Open Graph</th>
                  <th className="py-3 px-4 font-bold">Schema</th>
                  <th className="py-3 px-4 font-bold text-center">Score</th>
                  <th className="py-3 px-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFECE6]">
                {filteredItems.map((item) => {
                  const isExpanded = expandedVenueSlug === item.slug;
                  return (
                    <React.Fragment key={item.slug}>
                      <tr className="hover:bg-[#FAF8F5]/60 transition-colors">
                        <td className="py-3 px-4">
                          <div className="space-y-0.5">
                            <span className="font-bold text-neutral-900 block">{item.venueName}</span>
                            <span className="font-mono text-[11px] text-[#A47844] block">{item.route}</span>
                          </div>
                        </td>

                        <td className="py-3 px-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              {item.isDuplicateTitle ? (
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                                  Duplicate ✗
                                </span>
                              ) : (
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  Unique ✓
                                </span>
                              )}
                              <span className="text-[10px] text-neutral-500 font-mono">
                                {item.titleLength} ch
                              </span>
                            </div>
                            <span className="text-[11px] text-neutral-600 block line-clamp-1 font-mono max-w-xs">
                              {item.title}
                            </span>
                          </div>
                        </td>

                        <td className="py-3 px-4">
                          <div className="space-y-1">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                item.descriptionStatus === 'optimal'
                                  ? 'bg-emerald-50 text-emerald-800'
                                  : 'bg-neutral-100 text-neutral-700'
                              }`}
                            >
                              {item.descriptionLength} ch
                            </span>
                            <span className="text-[11px] text-neutral-500 line-clamp-1 max-w-xs block">
                              {item.metaDescription}
                            </span>
                          </div>
                        </td>

                        <td className="py-3 px-4 whitespace-nowrap">
                          {item.missingOgTags.length === 0 ? (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> 5/5 Complete
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-800 border border-rose-200 inline-flex items-center gap-1">
                              <AlertCircle className="w-3 h-3 text-rose-600" />
                              {item.missingOgTags.length} Missing
                            </span>
                          )}
                        </td>

                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FAF8F5] text-neutral-700 border border-[#E8E3D8]">
                            {item.schemaType}
                          </span>
                        </td>

                        <td className="py-3 px-4 text-center whitespace-nowrap">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                              item.score >= 90
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                : item.score >= 70
                                ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                : 'bg-rose-50 text-rose-800 border border-rose-200'
                            }`}
                          >
                            {item.score}%
                          </span>
                        </td>

                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setExpandedVenueSlug(isExpanded ? null : item.slug)}
                              className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer inline-flex items-center gap-1"
                            >
                              {isExpanded ? 'Hide' : 'Details'}
                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </button>
                            <button
                              onClick={() => onNavigate?.(item.route)}
                              className="text-[#A47844] hover:underline font-bold text-xs cursor-pointer inline-flex items-center gap-1"
                            >
                              View
                              <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                        </td>
                      </tr>

                      {/* Expandable detail row */}
                      {isExpanded && (
                        <tr className="bg-[#FAF8F5]/80">
                          <td colSpan={7} className="p-4 space-y-3 border-t border-[#EFECE6]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                              {/* Left: Metadata Details */}
                              <div className="space-y-2 bg-white p-3.5 rounded-xl border border-[#E8E3D8]">
                                <span className="font-bold text-neutral-800 uppercase text-[10px] tracking-wider block">
                                  Full Metadata Specification
                                </span>
                                <div className="space-y-1 text-neutral-600">
                                  <div>
                                    <strong className="text-neutral-900">Canonical:</strong>{' '}
                                    <span className="font-mono text-[#A47844]">{item.canonicalUrl}</span>
                                  </div>
                                  <div>
                                    <strong className="text-neutral-900">Full &lt;title&gt;:</strong>{' '}
                                    <span className="font-mono">{item.fullDocumentTitle}</span>
                                  </div>
                                  <div>
                                    <strong className="text-neutral-900">Meta Description:</strong>{' '}
                                    <span>{item.metaDescription}</span>
                                  </div>
                                  <div>
                                    <strong className="text-neutral-900">Schema Graph:</strong>{' '}
                                    <span className="font-mono">schema.org/{item.schemaType}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Right: Issues & Recommendations */}
                              <div className="space-y-2 bg-white p-3.5 rounded-xl border border-[#E8E3D8]">
                                <span className="font-bold text-neutral-800 uppercase text-[10px] tracking-wider block">
                                  Diagnostic Findings ({item.issues.length})
                                </span>
                                {item.issues.length === 0 ? (
                                  <div className="text-emerald-700 flex items-center gap-1.5 py-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>All technical checks, Open Graph tags, and uniqueness criteria passed.</span>
                                  </div>
                                ) : (
                                  <div className="space-y-2">
                                    {item.issues.map((iss, i) => (
                                      <div
                                        key={i}
                                        className={`p-2 rounded border text-xs ${
                                          iss.severity === 'critical'
                                            ? 'bg-rose-50 border-rose-200 text-rose-900'
                                            : 'bg-amber-50 border-amber-200 text-amber-900'
                                        }`}
                                      >
                                        <div className="font-bold flex items-center gap-1">
                                          <span>[{iss.code}]</span> {iss.message}
                                        </div>
                                        <div className="text-[11px] opacity-90 mt-0.5">
                                          <strong>Action:</strong> {iss.recommendation}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 6. Actionable Audit Recommendations */}
      <div className="bg-[#FAF8F5] rounded-2xl border border-[#E8E3D8] p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#A47844]" />
          <h3 className="font-serif font-bold text-xl text-neutral-900">
            Portfolio SEO Audit Recommendations
          </h3>
        </div>
        <ul className="space-y-2 text-xs text-neutral-700 leading-relaxed">
          {report.recommendations.map((rec, i) => (
            <li key={i} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8E3D8]">
              <CheckCircle2 className="w-4 h-4 text-[#A47844] mt-0.5 flex-shrink-0" />
              <span>{rec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
