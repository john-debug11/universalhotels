/**
 * Universal Hotels Australia - Design System Tokens
 * Editorial + Premium + Energetic + Modern + Australian
 */

export const DESIGN_TOKENS = {
  typography: {
    primaryFont: 'Instrument Serif, Georgia, serif',
    secondaryFont: 'Plus Jakarta Sans, system-ui, -apple-system, sans-serif',
    accentDisplayFont: 'Syne, sans-serif',
    scale: {
      displayHero: { size: 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl', lineHeight: 'leading-[0.95]', tracking: 'tracking-tight', font: 'font-serif' },
      h1: { size: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl', lineHeight: 'leading-[1.05]', tracking: 'tracking-tight', font: 'font-serif' },
      h2: { size: 'text-2xl sm:text-3xl md:text-4xl', lineHeight: 'leading-tight', tracking: 'tracking-tight', font: 'font-serif' },
      h3: { size: 'text-xl sm:text-2xl', lineHeight: 'leading-snug', tracking: 'tracking-normal', font: 'font-serif' },
      h4: { size: 'text-lg sm:text-xl', lineHeight: 'leading-normal', tracking: 'tracking-normal', font: 'font-sans font-semibold' },
      subheading: { size: 'text-sm sm:text-base', lineHeight: 'leading-relaxed', tracking: 'tracking-wide', font: 'font-sans font-medium' },
      bodyLarge: { size: 'text-base sm:text-lg', lineHeight: 'leading-relaxed', tracking: 'tracking-normal', font: 'font-sans' },
      bodyRegular: { size: 'text-sm sm:text-base', lineHeight: 'leading-relaxed', tracking: 'tracking-normal', font: 'font-sans' },
      bodySmall: { size: 'text-xs sm:text-sm', lineHeight: 'leading-normal', tracking: 'tracking-normal', font: 'font-sans' },
      eyebrow: { size: 'text-[11px] sm:text-xs', lineHeight: 'leading-none', tracking: 'tracking-[0.18em]', font: 'font-sans font-bold uppercase' },
      caption: { size: 'text-[10px] sm:text-xs', lineHeight: 'leading-tight', tracking: 'tracking-wider', font: 'font-sans uppercase' }
    }
  },
  colors: {
    neutrals: {
      deepCharcoal: '#121314', // Primary text and dark luxury surfaces
      onyx: '#0D0E0F',         // Hero headers and late-night accents
      surfaceDark: '#1A1B1D',  // Dark mode cards / bars
      warmCanvas: '#FAF8F5',   // Primary light editorial background
      warmSand: '#F3EFEA',     // Secondary background and pill fills
      warmCream: '#EAE5DC',    // Subtle dividers and card borders
      cardBg: '#FFFFFF',       // Primary surface card
      borderMuted: '#E2DDD4',  // Card borders
      textPrimary: '#141414',  // Primary body text
      textSecondary: '#5C5852',// Secondary descriptions (WCAG AA 4.8:1)
      textMuted: '#857F75'     // Captions and timestamps
    },
    accents: {
      bronzePrimary: '#A47844', // Primary brand bronze
      bronzeHover: '#8E6433',   // Darker hover
      bronzeLight: '#F5EFE6',   // Subtle tint for badge backgrounds
      goldHighlight: '#C7A379', // Accent metallic gold
      nightlifeCoral: '#D9383A',// High-energy pulse (live drag, late night 4am)
      nightlifeCoralMuted: '#FDECEC',
      sydneySun: '#C85A32'      // Terraces, rooftop spritzes
    },
    semantic: {
      openGreen: '#1B5E20',
      openGreenBg: '#E8F5E9',
      eventPurple: '#5E35B1',
      eventPurpleBg: '#EDE7F6',
      stayAmber: '#B45309',
      stayAmberBg: '#FEF3C7',
      skyFunctions: '#0369A1',
      skyFunctionsBg: '#E0F2FE'
    }
  },
  spacing: {
    containerMaxWidth: 'max-w-7xl',
    sectionPaddingDesktop: 'py-20 lg:py-28',
    sectionPaddingMobile: 'py-12 sm:py-16',
    gridGapDesktop: 'gap-8',
    gridGapMobile: 'gap-4',
    cardPadding: 'p-6 sm:p-8',
    cardPaddingCompact: 'p-4 sm:p-5'
  },
  radii: {
    badge: 'rounded-full',
    button: 'rounded-lg',
    card: 'rounded-2xl',
    innerCard: 'rounded-xl',
    input: 'rounded-lg'
  },
  shadows: {
    editorialSubtle: 'shadow-[0_4px_20px_-4px_rgba(18,19,20,0.05)]',
    editorialElevated: 'shadow-[0_12px_36px_-6px_rgba(18,19,20,0.08)]',
    editorialHover: 'shadow-[0_20px_45px_-8px_rgba(18,19,20,0.12)]'
  }
};
