import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  Users, 
  Clock, 
  Award,
  Heart,
  Calendar,
  Compass
} from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { applySeoMetadata } from '../utils/seo';
import { UniversalHotelsLogo } from '../components/brand/UniversalHotelsLogo';

export interface AboutPageProps {
  onNavigate?: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Apply SEO metadata
  React.useEffect(() => {
    applySeoMetadata({
      title: 'About Us | Where It All Started | Universal Hotels Australia',
      description: 'Universal Hotels is a family-owned hospitality and property group owned and operated by the Kospetas family since 1998, with 16 premier venues across Sydney.',
      canonicalUrl: 'https://universalhotels.com.au/about-us',
      ogType: 'website'
    });
  }, []);

  const videoChannels = [
    {
      title: 'Universal Hotels Showreel',
      subtitle: 'The Spirit of Sydney Hospitality',
      src: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-cheering-with-glasses-in-a-bar-41400-large.mp4',
      poster: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1600'
    },
    {
      title: 'Craft Cocktails & Culinary Craft',
      subtitle: 'Award-winning gastronomy & mixology',
      src: 'https://assets.mixkit.co/videos/preview/mixkit-bartender-pouring-a-cocktail-in-a-glass-41399-large.mp4',
      poster: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=1600'
    },
    {
      title: 'Sydney Nightlife & Energy',
      subtitle: 'Basement sound rooms & late trading',
      src: 'https://assets.mixkit.co/videos/preview/mixkit-disco-ball-illuminated-in-a-club-41398-large.mp4',
      poster: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1600'
    }
  ];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-[#121314] text-white pt-12 pb-16 lg:pb-24 border-b border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#C7A379_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'About Us', isCurrent: true }
            ]}
            onNavigate={onNavigate}
            className="text-neutral-400"
          />

          <div className="max-w-3xl space-y-4">
            <div className="pb-2">
              <UniversalHotelsLogo
                variant="light"
                height={50}
                showWordmark={true}
                showSubtitle={true}
                subtitleText="Established 1998 • Sydney, Australia"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1]">
              Where it all started.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              Universal Hotels is a family-owned hospitality and property group based in New South Wales, proudly delivering a diverse range of pub, bar, restaurant, and nightclub experiences across Sydney.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-800">
            <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C7A379]">1998</span>
              <p className="text-xs text-neutral-400">Founded by Kospetas Family</p>
            </div>
            <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C7A379]">16</span>
              <p className="text-xs text-neutral-400">Sydney Landmark Venues</p>
            </div>
            <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C7A379]">4:00am</span>
              <p className="text-xs text-neutral-400">Late Night Culture Trade</p>
            </div>
            <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 space-y-1">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C7A379]">100%</span>
              <p className="text-xs text-neutral-400">Family Owned & Operated</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CINEMATIC VIDEO EXPERIENCE SECTION */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121314] rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
          <div className="relative aspect-video w-full bg-black">
            <video
              ref={videoRef}
              src={videoChannels[activeVideoIndex].src}
              poster={videoChannels[activeVideoIndex].poster}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Video Overlay Top Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 bg-[#121314]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#C7A379] animate-pulse" />
              <span>{videoChannels[activeVideoIndex].title}</span>
            </div>

            {/* Video Controls Bar */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between gap-3 bg-[#121314]/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/10 text-white">
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={handleTogglePlay}
                  className="w-10 h-10 rounded-xl bg-[#A47844] hover:bg-[#8F6636] text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>

                <button
                  onClick={handleToggleMute}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <div className="hidden sm:block text-xs">
                  <span className="font-bold text-white block">{videoChannels[activeVideoIndex].title}</span>
                  <span className="text-neutral-400 text-[11px]">{videoChannels[activeVideoIndex].subtitle}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleFullscreen}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Video Selector Channels */}
          <div className="p-4 sm:p-6 bg-neutral-950 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {videoChannels.map((channel, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveVideoIndex(idx);
                  setIsPlaying(true);
                }}
                className={`p-3 text-left rounded-xl transition-all cursor-pointer border ${
                  activeVideoIndex === idx
                    ? 'bg-neutral-800 border-[#C7A379] shadow-sm'
                    : 'bg-neutral-900/50 border-transparent hover:bg-neutral-900 text-neutral-400'
                }`}
              >
                <span className={`text-xs font-bold block ${activeVideoIndex === idx ? 'text-white' : 'text-neutral-300'}`}>
                  {channel.title}
                </span>
                <span className="text-[11px] text-neutral-400 block mt-0.5">
                  {channel.subtitle}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OFFICIAL COPY SECTION */}
      <section className="py-12 lg:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#E7E2D9] shadow-sm space-y-8 text-neutral-800">
          <div className="border-b border-[#EFECE6] pb-6 space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
              HERITAGE & PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#121314]">
              Where it all started.
            </h2>
          </div>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-neutral-700">
            <p>
              Universal Hotels is a family-owned hospitality and property group based in New South Wales, proudly delivering a diverse range of pub, bar, restaurant, and nightclub experiences across Sydney. Owned and operated by the Kospetas family since 1998, the group has built a long-standing reputation for quality venues, vibrant atmosphere, and community-focused hospitality.
            </p>

            <p>
              With a portfolio of 16 venues located throughout Sydney CBD, Darlinghurst, Surry Hills, and surrounding suburbs, Universal Hotels caters to a wide range of guests — from family-friendly local pubs and casual dining to late-night bars, nightclubs, and entertainment venues.
            </p>

            <div className="p-6 bg-[#FAF8F5] rounded-2xl border-l-4 border-[#A47844] italic text-neutral-800 font-serif text-lg sm:text-xl">
              "Our venues are designed to suit every occasion. Whether you're looking for a relaxed meal with family, after-work drinks, a night out in Sydney, or a place to celebrate, Universal Hotels offers welcoming spaces backed by exceptional service, food, and beverage experiences."
            </div>

            <p>
              In addition to everyday dining and nightlife, Universal Hotels also specialises in private functions, group bookings, and event hosting. Our venues provide flexible function spaces ideal for corporate events, birthday celebrations, engagement parties, and social gatherings, with tailored packages to suit a variety of styles and group sizes.
            </p>

            <p className="font-medium text-neutral-900">
              Driven by strong family values and decades of industry experience, Universal Hotels continues to evolve with Sydney’s hospitality scene — offering destinations where people can connect, celebrate, dine, and unwind.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#EFECE6]">
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3D8] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#A47844]/10 text-[#A47844] flex items-center justify-center font-bold">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-neutral-900">Family Values</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Independent stewardship prioritizing human hospitality, team welfare, and community longevity.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3D8] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#A47844]/10 text-[#A47844] flex items-center justify-center font-bold">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-neutral-900">16 Sydney Venues</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Curating iconic heritage spaces across CBD, Oxford Street, Surry Hills, and Inner West.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3D8] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#A47844]/10 text-[#A47844] flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-neutral-900">Celebration & Events</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Specialists in private functions, milestone birthdays, corporate summits, and cultural gatherings.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-8 border-t border-[#EFECE6] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="w-4 h-4" />}
              onClick={() => onNavigate?.('/venues')}
            >
              Explore Our 16 Venues
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate?.('/functions')}
            >
              Make a Function Enquiry
            </Button>
          </div>
        </article>
      </section>

      {/* 4. HERITAGE TIMELINE */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#A47844]">
            MILESTONES & GROWTH
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#121314]">
            Decades of Sydney Hospitality
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            From the initial founding by the Kospetas family in 1998 to establishing one of Sydney's most dynamic hospitality portfolios.
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-white rounded-2xl border border-[#E7E2D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#A47844] uppercase tracking-wider">1998 — The Beginning</span>
              <h3 className="font-serif text-xl font-bold text-neutral-900">Founding by the Kospetas Family</h3>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-2xl">
                Jim Kospetas establishes Universal Hotels with a core focus on welcoming community venues, customer-first service, and long-term property stewardship in New South Wales.
              </p>
            </div>
            <Badge variant="editorial" size="sm">Milestone</Badge>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E7E2D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#A47844] uppercase tracking-wider">2018 — Oxford Street Renaissance</span>
              <h3 className="font-serif text-xl font-bold text-neutral-900">Transformation of Midnight Shift to Universal Sydney</h3>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-2xl">
                Redeveloping the iconic Midnight Shift site into Universal Sydney, introducing a 7-night-a-week live drag venue and dual-level Superclub that restored energy to Oxford Street.
              </p>
            </div>
            <Badge variant="precinct" size="sm">Cultural Icon</Badge>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E7E2D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#A47844] uppercase tracking-wider">2023 — Inner West Cultural Landmark</span>
              <h3 className="font-serif text-xl font-bold text-neutral-900">Acquisition of The Imperial Erskineville</h3>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-2xl">
                Universal Hotels acquires the historic Imperial Hotel in Erskineville, safeguarding the spiritual home of Priscilla, Queen of the Desert with Drag & Dine, Pizza Bros rooftop, and basement clubbing.
              </p>
            </div>
            <Badge variant="precinct" size="sm">$20M Preservation</Badge>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E7E2D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#A47844] uppercase tracking-wider">Today & Beyond</span>
              <h3 className="font-serif text-xl font-bold text-neutral-900">16 Premier Sydney Destinations</h3>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-2xl">
                Operating 16 venues spanning heritage pubs, rooftop terraces, boutique hotels, Greek tavernas, and 4am entertainment hubs across Sydney.
              </p>
            </div>
            <Badge variant="editorial" size="sm">Present</Badge>
          </div>
        </div>
      </section>
    </div>
  );
};
