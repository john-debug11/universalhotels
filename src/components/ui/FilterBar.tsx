import React from 'react';

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterBarProps {
  options: FilterOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  className?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  options,
  selectedId,
  onSelect,
  className = ''
}) => {
  return (
    <div className={`flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1 ${className}`}>
      {options.map(opt => {
        const isSelected = selectedId === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
              isSelected
                ? 'bg-[#121314] text-white shadow-xs'
                : 'bg-white text-neutral-600 hover:bg-[#F3EFEA] hover:text-[#121314] border border-[#E7E2D9]'
            }`}
          >
            <span>{opt.label}</span>
            {opt.count !== undefined && (
              <span className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                isSelected ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-500'
              }`}>
                {opt.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
