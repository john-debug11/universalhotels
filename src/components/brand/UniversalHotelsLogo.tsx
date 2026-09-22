import React from 'react';

export interface UniversalHotelsLogoProps {
  /**
   * Color variant of the logo:
   * - 'dark': Master Black for light backgrounds (default, matches uploaded asset)
   * - 'light': White for dark backgrounds
   * - 'gold': Heritage gold hue
   */
  variant?: 'dark' | 'light' | 'gold';
  /**
   * Height in pixels (width scales proportionally based on ~4.47:1 aspect ratio)
   * Defaults to 36px
   */
  height?: number;
  /**
   * Whether to include the 'UNIVERSAL HOTELS' wordmark
   * Set to false to render just the circular plate & cutlery insignia
   */
  showWordmark?: boolean;
  /**
   * Optional subtitle line (e.g. "Sydney • Hospitality Ecosystem")
   */
  showSubtitle?: boolean;
  /**
   * Optional custom subtitle text
   */
  subtitleText?: string;
  /**
   * Additional wrapper class names
   */
  className?: string;
}

export const UniversalHotelsLogo: React.FC<UniversalHotelsLogoProps> = ({
  variant = 'dark',
  height = 36,
  showWordmark = true,
  showSubtitle = false,
  subtitleText = 'Sydney • Hospitality Ecosystem',
  className = ''
}) => {
  // Master image paths
  const fullLogoDark = '/assets/Universalhotels-Masterblack-removebg-preview.png';
  const fullLogoWhite = '/assets/universal-hotels-logo-white.png';
  const emblemDark = '/assets/universal-hotels-emblem.png';
  const emblemWhite = '/assets/universal-hotels-emblem-white.png';

  // Determine active source image
  const imgSrc = showWordmark
    ? variant === 'light'
      ? fullLogoWhite
      : fullLogoDark
    : variant === 'light'
    ? emblemWhite
    : emblemDark;

  // Aspect ratio calculations:
  // Full logo: 1958 x 438 (~4.47:1)
  // Emblem: 450 x 438 (~1.03:1)
  const calculatedWidth = showWordmark ? Math.round(height * 4.47) : Math.round(height * 1.03);

  const subtitleColor =
    variant === 'light'
      ? '#D1C7BD'
      : variant === 'gold'
      ? '#A47844'
      : '#A47844';

  return (
    <div className={`inline-flex flex-col justify-center ${className}`}>
      <img
        src={imgSrc}
        alt="Universal Hotels Australia"
        style={{
          height: `${height}px`,
          width: 'auto',
          maxWidth: `${calculatedWidth}px`,
          objectFit: 'contain'
        }}
        className={`block select-none ${
          variant === 'gold' ? 'filter sepia contrast-125' : ''
        }`}
        referrerPolicy="no-referrer"
        loading="eager"
      />

      {/* Optional subtitle line */}
      {showSubtitle && (
        <span
          className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.25em] mt-1 select-none"
          style={{ color: subtitleColor }}
        >
          {subtitleText}
        </span>
      )}
    </div>
  );
};

