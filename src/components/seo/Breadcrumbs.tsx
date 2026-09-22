import React, { useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from '../../utils/seo';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (url: string) => void;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  onNavigate,
  className = ''
}) => {
  const fullItems: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
    ...items
  ];

  // Dynamic injection of BreadcrumbList schema
  useEffect(() => {
    const scriptId = 'breadcrumbs-json-ld';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(generateBreadcrumbSchema(fullItems));

    return () => {
      // Cleanup on unmount if needed
    };
  }, [items]);

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs text-neutral-500 py-2.5 overflow-x-auto no-scrollbar ${className}`}
    >
      <ol className="inline-flex items-center space-x-1 sm:space-x-2">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;

          return (
            <li key={item.url} className="inline-flex items-center">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400 mx-1 flex-shrink-0" />
              )}

              {isLast ? (
                <span
                  aria-current="page"
                  className="font-semibold text-[#121314] truncate max-w-[220px] sm:max-w-xs"
                >
                  {item.name}
                </span>
              ) : (
                <button
                  onClick={() => onNavigate?.(item.url)}
                  className="hover:text-[#A47844] transition-colors flex items-center gap-1 cursor-pointer font-medium"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5 text-[#A47844]" />}
                  <span>{item.name}</span>
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
