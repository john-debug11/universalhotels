import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  onNavigate?: (href: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '', onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs text-neutral-500 ${className}`}>
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li className="inline-flex items-center">
          <button
            onClick={() => onNavigate?.('/')}
            className="inline-flex items-center gap-1 text-neutral-500 hover:text-[#121314] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
              {isLast || item.isCurrent ? (
                <span className="font-semibold text-neutral-900" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => item.href && onNavigate?.(item.href)}
                  className="hover:text-[#121314] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
