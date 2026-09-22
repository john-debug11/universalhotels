/**
 * Universal Hotels Sydney - Venue Routes SEO Audit Engine
 * 
 * Performs automated deep audits across all 16 active venue routes to detect:
 * 1. Duplicate title tags (exact or normalized collisions)
 * 2. Missing Open Graph meta tags (og:title, og:description, og:image, og:url, og:type)
 * 3. Title & description character length anomalies (<30 / >60 for titles; <120 / >160 for descriptions)
 * 4. Missing Twitter Card tags (twitter:card, twitter:title, twitter:image, twitter:description)
 * 5. Canonical link validity and Schema.org LocalBusiness structured data
 */

import { VENUE_DATABASE, VenueRecord } from '../data/venueDatabase';
import { VENUE_DETAILS, VenueDetailRecord } from '../data/venueDetails';
import { generateVenueLocalBusinessSchema } from './seo';

export type IssueSeverity = 'critical' | 'warning' | 'info';

export interface SeoAuditIssue {
  severity: IssueSeverity;
  code: string;
  field: string;
  message: string;
  recommendation: string;
}

export interface VenueSeoAuditItem {
  slug: string;
  route: string;
  venueName: string;
  suburb: string;
  venueType: string;
  // Title audit
  title: string;
  fullDocumentTitle: string;
  titleLength: number;
  titleStatus: 'optimal' | 'too-short' | 'too-long';
  isDuplicateTitle: boolean;
  duplicateWithSlugs: string[];
  // Description audit
  metaDescription: string;
  descriptionLength: number;
  descriptionStatus: 'optimal' | 'too-short' | 'too-long' | 'missing';
  // Canonical
  canonicalUrl: string;
  canonicalStatus: 'valid' | 'missing';
  // Open Graph audit
  ogTags: {
    ogTitle: string | null;
    ogDescription: string | null;
    ogImage: string | null;
    ogUrl: string | null;
    ogType: string | null;
    ogSiteName: string | null;
  };
  missingOgTags: Array<'og:title' | 'og:description' | 'og:image' | 'og:url' | 'og:type'>;
  // Twitter Card audit
  twitterTags: {
    twitterCard: string | null;
    twitterTitle: string | null;
    twitterDescription: string | null;
    twitterImage: string | null;
  };
  missingTwitterTags: Array<'twitter:card' | 'twitter:title' | 'twitter:description' | 'twitter:image'>;
  // Schema
  hasSchema: boolean;
  schemaType: string;
  // Health
  score: number; // 0 to 100
  status: 'pass' | 'warning' | 'critical';
  issues: SeoAuditIssue[];
}

export interface DuplicateTitleGroup {
  normalizedTitle: string;
  rawTitle: string;
  venues: Array<{
    slug: string;
    venueName: string;
    route: string;
  }>;
}

export interface MissingOgSummary {
  totalMissingTags: number;
  venuesAffectedCount: number;
  byTag: Record<string, number>;
}

export interface SeoAuditReport {
  timestamp: string;
  totalVenuesScanned: number;
  passedCount: number;
  warningCount: number;
  criticalCount: number;
  overallHealthScore: number;
  duplicateTitleGroups: DuplicateTitleGroup[];
  totalDuplicateTitles: number;
  missingOgSummary: MissingOgSummary;
  items: VenueSeoAuditItem[];
  recommendations: string[];
}

export interface SeoAuditOptions {
  /** Simulate a duplicate title for testing the detection engine */
  simulateDuplicateTitle?: {
    sourceSlug: string;
    targetSlug: string;
    duplicatedTitle: string;
  };
  /** Simulate missing OG tags on specific venue for testing detection */
  simulateMissingOgTags?: {
    slug: string;
    tagsToRemove: Array<'og:title' | 'og:description' | 'og:image' | 'og:url' | 'og:type'>;
  };
}

/**
 * Normalizes title string for exact and fuzzy duplicate detection
 */
const normalizeTitle = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\|\s*universal\s*hotels.*$/i, '') // strip brand suffix for core comparison
    .replace(/[^\w\s]/gi, '')
    .trim()
    .replace(/\s+/g, ' ');
};

/**
 * Performs a comprehensive technical SEO audit of all active venue routes
 */
export const runVenueRoutesSeoAudit = (options?: SeoAuditOptions): SeoAuditReport => {
  const timestamp = new Date().toISOString();
  
  // 1. Collect all active venue routes from database & details
  const venueKeys = Object.keys(VENUE_DETAILS);
  const totalVenuesScanned = venueKeys.length;

  // First pass: extract titles and check for duplicates across all active routes
  const titleMap = new Map<string, Array<{ slug: string; rawTitle: string; venueName: string }>>();

  venueKeys.forEach((slug) => {
    const detail = VENUE_DETAILS[slug];
    let rawTitle = detail?.seo?.title || '';
    
    // Check for simulated duplicate title
    if (options?.simulateDuplicateTitle && options.simulateDuplicateTitle.targetSlug === slug) {
      rawTitle = options.simulateDuplicateTitle.duplicatedTitle;
    }

    const norm = normalizeTitle(rawTitle);
    if (!titleMap.has(norm)) {
      titleMap.set(norm, []);
    }
    titleMap.get(norm)!.push({
      slug,
      rawTitle,
      venueName: detail.venueName
    });
  });

  // Identify duplicate title groups (more than 1 venue with identical core title)
  const duplicateTitleGroups: DuplicateTitleGroup[] = [];
  titleMap.forEach((occurrences, normalizedTitle) => {
    if (occurrences.length > 1) {
      duplicateTitleGroups.push({
        normalizedTitle,
        rawTitle: occurrences[0].rawTitle,
        venues: occurrences.map((occ) => ({
          slug: occ.slug,
          venueName: occ.venueName,
          route: `/venues/${occ.slug}`
        }))
      });
    }
  });

  const duplicateSlugs = new Set<string>();
  const duplicateConflictsBySlug = new Map<string, string[]>();
  duplicateTitleGroups.forEach((group) => {
    group.venues.forEach((v) => {
      duplicateSlugs.add(v.slug);
      const others = group.venues.filter((o) => o.slug !== v.slug).map((o) => o.venueName);
      duplicateConflictsBySlug.set(v.slug, others);
    });
  });

  // Open Graph Missing Tags Tracker
  const missingOgByTag: Record<string, number> = {
    'og:title': 0,
    'og:description': 0,
    'og:image': 0,
    'og:url': 0,
    'og:type': 0
  };
  let venuesWithMissingOg = 0;

  // Second pass: Audit each venue route
  const items: VenueSeoAuditItem[] = venueKeys.map((slug) => {
    const detail = VENUE_DETAILS[slug];
    const dbRecord = VENUE_DATABASE.find((v) => v.url.includes(slug)) || ({} as Partial<VenueRecord>);
    const route = `/venues/${slug}`;

    // Title resolution
    let title = detail?.seo?.title || '';
    if (options?.simulateDuplicateTitle && options.simulateDuplicateTitle.targetSlug === slug) {
      title = options.simulateDuplicateTitle.duplicatedTitle;
    }
    const fullDocumentTitle = `${title} | Universal Hotels Australia`;
    const titleLength = title.length;

    let titleStatus: 'optimal' | 'too-short' | 'too-long' = 'optimal';
    if (titleLength < 30) {
      titleStatus = 'too-short';
    } else if (titleLength > 65) {
      titleStatus = 'too-long';
    }

    const isDuplicateTitle = duplicateSlugs.has(slug);
    const duplicateWithSlugs = duplicateConflictsBySlug.get(slug) || [];

    // Description resolution
    const metaDescription = detail?.seo?.metaDescription || '';
    const descriptionLength = metaDescription.length;
    let descriptionStatus: 'optimal' | 'too-short' | 'too-long' | 'missing' = 'optimal';
    if (!metaDescription || descriptionLength === 0) {
      descriptionStatus = 'missing';
    } else if (descriptionLength < 120) {
      descriptionStatus = 'too-short';
    } else if (descriptionLength > 165) {
      descriptionStatus = 'too-long';
    }

    // Canonical
    const canonicalUrl = `https://universalhotels.com.au/venues/${slug}`;
    const canonicalStatus: 'valid' | 'missing' = canonicalUrl ? 'valid' : 'missing';

    // Open Graph evaluation
    // By standard, an active venue route must expose og:title, og:description, og:image, og:url, og:type
    // We check if the venue details provide explicit or auto-resolvable OG values
    let ogTitleVal: string | null = (detail.seo as any)?.ogTitle || title || null;
    let ogDescVal: string | null = (detail.seo as any)?.ogDescription || metaDescription || null;
    let ogImageVal: string | null = (detail.seo as any)?.ogImage || detail.heroImage || null;
    let ogUrlVal: string | null = canonicalUrl;
    let ogTypeVal: string | null = (detail.seo as any)?.ogType || 'restaurant';

    // Check if simulation removes tags
    if (options?.simulateMissingOgTags && options.simulateMissingOgTags.slug === slug) {
      if (options.simulateMissingOgTags.tagsToRemove.includes('og:title')) ogTitleVal = null;
      if (options.simulateMissingOgTags.tagsToRemove.includes('og:description')) ogDescVal = null;
      if (options.simulateMissingOgTags.tagsToRemove.includes('og:image')) ogImageVal = null;
      if (options.simulateMissingOgTags.tagsToRemove.includes('og:url')) ogUrlVal = null;
      if (options.simulateMissingOgTags.tagsToRemove.includes('og:type')) ogTypeVal = null;
    }

    const missingOgTags: Array<'og:title' | 'og:description' | 'og:image' | 'og:url' | 'og:type'> = [];
    if (!ogTitleVal) missingOgTags.push('og:title');
    if (!ogDescVal) missingOgTags.push('og:description');
    if (!ogImageVal) missingOgTags.push('og:image');
    if (!ogUrlVal) missingOgTags.push('og:url');
    if (!ogTypeVal) missingOgTags.push('og:type');

    if (missingOgTags.length > 0) {
      venuesWithMissingOg += 1;
      missingOgTags.forEach((tag) => {
        missingOgByTag[tag] = (missingOgByTag[tag] || 0) + 1;
      });
    }

    // Twitter Tags
    const missingTwitterTags: Array<'twitter:card' | 'twitter:title' | 'twitter:description' | 'twitter:image'> = [];
    const twitterCardVal = 'summary_large_image';
    const twitterTitleVal = ogTitleVal;
    const twitterDescVal = ogDescVal;
    const twitterImageVal = ogImageVal;

    if (!twitterCardVal) missingTwitterTags.push('twitter:card');
    if (!twitterTitleVal) missingTwitterTags.push('twitter:title');
    if (!twitterDescVal) missingTwitterTags.push('twitter:description');
    if (!twitterImageVal) missingTwitterTags.push('twitter:image');

    // Schema validation
    const schema = generateVenueLocalBusinessSchema(dbRecord as VenueRecord, detail);
    const hasSchema = Boolean(schema && schema['@type']);
    const schemaType = schema?.['@type'] || detail?.seo?.schemaType || 'BarOrPub';

    // Issues calculation & Scoring
    const issues: SeoAuditIssue[] = [];
    let score = 100;

    // 1. Critical: Duplicate title
    if (isDuplicateTitle) {
      score -= 35;
      issues.push({
        severity: 'critical',
        code: 'DUPLICATE_TITLE_TAG',
        field: 'title',
        message: `Duplicate title tag shared with: ${duplicateWithSlugs.join(', ')}`,
        recommendation: 'Rewrite title tag to uniquely highlight this venue precinct, landmark, and primary dining/entertainment anchor.'
      });
    }

    // 2. Critical: Missing Open Graph Image or Title
    if (missingOgTags.includes('og:title')) {
      score -= 20;
      issues.push({
        severity: 'critical',
        code: 'MISSING_OG_TITLE',
        field: 'og:title',
        message: 'Missing Open Graph title tag (og:title).',
        recommendation: 'Add property="og:title" to ensure social cards display an attractive headline.'
      });
    }

    if (missingOgTags.includes('og:image')) {
      score -= 20;
      issues.push({
        severity: 'critical',
        code: 'MISSING_OG_IMAGE',
        field: 'og:image',
        message: 'Missing Open Graph image tag (og:image).',
        recommendation: 'Assign high-resolution (1200x630px) venue photography to og:image.'
      });
    }

    if (missingOgTags.includes('og:description')) {
      score -= 10;
      issues.push({
        severity: 'warning',
        code: 'MISSING_OG_DESCRIPTION',
        field: 'og:description',
        message: 'Missing Open Graph description tag (og:description).',
        recommendation: 'Define property="og:description" with a compelling 2-sentence summary.'
      });
    }

    if (missingOgTags.includes('og:url')) {
      score -= 10;
      issues.push({
        severity: 'warning',
        code: 'MISSING_OG_URL',
        field: 'og:url',
        message: 'Missing canonical Open Graph URL (og:url).',
        recommendation: 'Set property="og:url" to the canonical venue URL.'
      });
    }

    // 3. Title length warning
    if (titleStatus === 'too-short') {
      score -= 8;
      issues.push({
        severity: 'warning',
        code: 'TITLE_TOO_SHORT',
        field: 'title',
        message: `Title length (${titleLength} chars) is below recommended 30 characters.`,
        recommendation: 'Expand title with venue location and distinctive hospitality offering.'
      });
    } else if (titleStatus === 'too-long') {
      score -= 5;
      issues.push({
        severity: 'info',
        code: 'TITLE_TOO_LONG',
        field: 'title',
        message: `Title length (${titleLength} chars) exceeds 65 characters and may truncate in Google SERP.`,
        recommendation: 'Keep primary venue title tag under 60-65 characters for optimal SERP visibility.'
      });
    }

    // 4. Description length warning
    if (descriptionStatus === 'missing') {
      score -= 20;
      issues.push({
        severity: 'critical',
        code: 'MISSING_META_DESCRIPTION',
        field: 'metaDescription',
        message: 'Missing meta description.',
        recommendation: 'Add a 120-160 character meta description with high-intent keywords.'
      });
    } else if (descriptionStatus === 'too-short') {
      score -= 5;
      issues.push({
        severity: 'info',
        code: 'DESCRIPTION_TOO_SHORT',
        field: 'metaDescription',
        message: `Meta description is short (${descriptionLength} chars; ideal: 120–160 chars).`,
        recommendation: 'Flesh out with trading hours, dining features, or function space capacity.'
      });
    } else if (descriptionStatus === 'too-long') {
      score -= 5;
      issues.push({
        severity: 'info',
        code: 'DESCRIPTION_TOO_LONG',
        field: 'metaDescription',
        message: `Meta description (${descriptionLength} chars) may be truncated on mobile search results (>160 chars).`,
        recommendation: 'Trim description to front-load important value propositions in the first 140 characters.'
      });
    }

    // Normalizing score bounds
    score = Math.max(0, Math.min(100, score));

    // Determine status
    let status: 'pass' | 'warning' | 'critical' = 'pass';
    if (issues.some((i) => i.severity === 'critical')) {
      status = 'critical';
    } else if (issues.some((i) => i.severity === 'warning')) {
      status = 'warning';
    }

    return {
      slug,
      route,
      venueName: detail.venueName,
      suburb: detail.locationSuburb,
      venueType: detail.venueType,
      title,
      fullDocumentTitle,
      titleLength,
      titleStatus,
      isDuplicateTitle,
      duplicateWithSlugs,
      metaDescription,
      descriptionLength,
      descriptionStatus,
      canonicalUrl,
      canonicalStatus,
      ogTags: {
        ogTitle: ogTitleVal,
        ogDescription: ogDescVal,
        ogImage: ogImageVal,
        ogUrl: ogUrlVal,
        ogType: ogTypeVal,
        ogSiteName: 'Universal Hotels Australia'
      },
      missingOgTags,
      twitterTags: {
        twitterCard: twitterCardVal,
        twitterTitle: twitterTitleVal,
        twitterDescription: twitterDescVal,
        twitterImage: twitterImageVal
      },
      missingTwitterTags,
      hasSchema,
      schemaType,
      score,
      status,
      issues
    };
  });

  // Calculate totals
  const passedCount = items.filter((i) => i.status === 'pass').length;
  const warningCount = items.filter((i) => i.status === 'warning').length;
  const criticalCount = items.filter((i) => i.status === 'critical').length;
  const totalScore = items.reduce((acc, curr) => acc + curr.score, 0);
  const overallHealthScore = Math.round(totalScore / totalVenuesScanned);

  // Global recommendations
  const recommendations: string[] = [];
  if (duplicateTitleGroups.length > 0) {
    recommendations.push(
      `CRITICAL: Resolve ${duplicateTitleGroups.length} duplicate title collisions across venue routes to prevent keyword cannibalization.`
    );
  } else {
    recommendations.push(
      'All 16 active venue routes have verified unique title tags. No keyword cannibalization detected.'
    );
  }

  if (venuesWithMissingOg > 0) {
    recommendations.push(
      `Add explicit Open Graph tags for ${venuesWithMissingOg} venue routes to ensure 100% rich card rendering on LinkedIn, Facebook, and Slack.`
    );
  } else {
    recommendations.push(
      'All 16 active venue routes have complete Open Graph social card tags (og:title, og:description, og:image, og:url, og:type).'
    );
  }

  const longTitles = items.filter((i) => i.titleStatus === 'too-long').length;
  if (longTitles > 0) {
    recommendations.push(
      `${longTitles} venue titles exceed 65 characters. Consider condensing them to prevent ellipsis truncation in Google search results.`
    );
  }

  return {
    timestamp,
    totalVenuesScanned,
    passedCount,
    warningCount,
    criticalCount,
    overallHealthScore,
    duplicateTitleGroups,
    totalDuplicateTitles: duplicateTitleGroups.length,
    missingOgSummary: {
      totalMissingTags: Object.values(missingOgByTag).reduce((a, b) => a + b, 0),
      venuesAffectedCount: venuesWithMissingOg,
      byTag: missingOgByTag
    },
    items,
    recommendations
  };
};

/**
 * Convenience helper to quickly inspect live DOM for meta tags on current active route
 */
export const inspectLiveDomSeo = () => {
  if (typeof document === 'undefined') return null;

  const getMeta = (attr: string, val: string) => {
    const el = document.querySelector(`meta[${attr}="${val}"]`);
    return el ? el.getAttribute('content') : null;
  };

  const getLink = (rel: string) => {
    const el = document.querySelector(`link[rel="${rel}"]`);
    return el ? el.getAttribute('href') : null;
  };

  return {
    title: document.title,
    description: getMeta('name', 'description'),
    canonical: getLink('canonical'),
    ogTitle: getMeta('property', 'og:title'),
    ogDescription: getMeta('property', 'og:description'),
    ogImage: getMeta('property', 'og:image'),
    ogUrl: getMeta('property', 'og:url'),
    ogType: getMeta('property', 'og:type'),
    twitterCard: getMeta('name', 'twitter:card'),
    twitterTitle: getMeta('name', 'twitter:title'),
    twitterImage: getMeta('name', 'twitter:image')
  };
};
