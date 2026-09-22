import React from 'react';
import { ArrowUpRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { LOCATION_TAXONOMY } from '../../data/informationArchitecture';

export interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#121314] text-[#F3EFEA] pt-16 pb-24 lg:pb-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Branding & Heritage Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-neutral-800 pb-12">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C7A379]">
              Est. 1998 • Sydney, Australia
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-bold">
              Universal Hotels Australia
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-1">
              Independent, family-owned hospitality group founded by the Kospetas family. Curating 16 iconic venues, heritage pubs, world-class nightlife, and boutique stays across Sydney.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-neutral-300">
            <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#C7A379] block">Corporate Headquarters</span>
              <p className="font-semibold text-white">Suite 203, Level 2, 255 Castlereagh St, Sydney NSW 2000</p>
              <div className="flex items-center gap-4 text-neutral-400 pt-1">
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-[#C7A379]" /> (02) 8080 7000</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-[#C7A379]" /> info@universalhotels.com.au</span>
              </div>
            </div>
          </div>
        </div>

        {/* Venues Directory by Precinct */}
        <div className="space-y-4">
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#C7A379] block">
            Sydney Venues Directory (16 Properties)
          </span>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-xs">
            {LOCATION_TAXONOMY.map(loc => (
              <div key={loc.regionId} className="space-y-2">
                <span className="font-serif font-bold text-white text-sm block border-b border-neutral-800 pb-1">
                  {loc.regionName.split('&')[0]}
                </span>
                <ul className="space-y-1.5 text-neutral-400">
                  {loc.venues.map((v, i) => (
                    <li key={i}>
                      <button
                        onClick={() => onNavigate?.('/venues')}
                        className="hover:text-white transition-colors text-left"
                      >
                        {v}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Navigation & Legal */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-neutral-400">
          <div className="flex flex-wrap gap-6">
            <button onClick={() => onNavigate?.('/venues')} className="hover:text-white cursor-pointer">Venues</button>
            <button onClick={() => onNavigate?.('/functions')} className="hover:text-white cursor-pointer">Functions & Events</button>
            <button onClick={() => onNavigate?.('/functions/private-functions')} className="hover:text-white cursor-pointer">Private Dining</button>
            <button onClick={() => onNavigate?.('/functions/birthday-parties')} className="hover:text-white cursor-pointer">Birthdays</button>
            <button onClick={() => onNavigate?.('/functions/corporate-events')} className="hover:text-white cursor-pointer">Corporate</button>
            <button onClick={() => onNavigate?.('/functions/christmas-parties')} className="hover:text-white cursor-pointer">Christmas</button>
            <button onClick={() => onNavigate?.('/whats-on')} className="hover:text-white cursor-pointer">What's On</button>
            <button onClick={() => onNavigate?.('/accommodation')} className="hover:text-white cursor-pointer">Boutique Stays</button>
            <button onClick={() => onNavigate?.('/seo')} className="text-[#C7A379] hover:text-white cursor-pointer font-semibold">SEO & AEO Architecture</button>
            <button onClick={() => onNavigate?.('/about')} className="hover:text-white cursor-pointer">About Heritage</button>
            <button onClick={() => onNavigate?.('/contact')} className="hover:text-white cursor-pointer">Contact</button>
          </div>

          <div className="space-y-1 text-right text-[11px] text-neutral-500">
            <p>© {new Date().getFullYear()} Universal Hotels Australia. All rights reserved.</p>
            <p>Universal Hotels supports the Responsible Service of Alcohol and Responsible Conduct of Gambling.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
