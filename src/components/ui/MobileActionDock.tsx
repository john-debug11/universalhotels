import React from 'react';
import { Building2, Calendar, Utensils, Users, Phone } from 'lucide-react';

export interface MobileActionDockProps {
  onNavigate?: (path: string) => void;
  activePath?: string;
}

export const MobileActionDock: React.FC<MobileActionDockProps> = ({ onNavigate, activePath = '/' }) => {
  const actions = [
    { label: 'Venues', icon: Building2, path: '/venues' },
    { label: 'Book Table', icon: Utensils, path: '/venues' },
    { label: "What's On", icon: Calendar, path: '/whats-on' },
    { label: 'Functions', icon: Users, path: '/functions' },
    { label: 'Call Group', icon: Phone, href: 'tel:0280807000' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#121314] text-white border-t border-neutral-800 px-2 py-2 pb-safe shadow-[0_-8px_24px_rgba(0,0,0,0.25)]">
      <div className="grid grid-cols-5 gap-1 text-center">
        {actions.map((act, i) => {
          const Icon = act.icon;
          const isActive = act.path && activePath.startsWith(act.path);

          if (act.href) {
            return (
              <a
                key={i}
                href={act.href}
                className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg hover:bg-neutral-800 active:scale-95 transition-all text-neutral-300"
              >
                <Icon className="w-4 h-4 mb-0.5 text-[#C7A379]" />
                <span className="text-[10px] font-semibold uppercase tracking-tight">{act.label}</span>
              </a>
            );
          }

          return (
            <button
              key={i}
              onClick={() => act.path && onNavigate?.(act.path)}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-lg transition-all cursor-pointer ${
                isActive
                  ? 'bg-neutral-800 text-[#C7A379]'
                  : 'text-neutral-300 hover:bg-neutral-800 active:scale-95'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className="text-[10px] font-semibold uppercase tracking-tight">{act.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
