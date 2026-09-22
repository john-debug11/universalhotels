import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'status' | 'precinct' | 'accommodation' | 'functions' | 'editorial' | 'nightlife' | 'verified';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'editorial',
  size = 'md',
  className = '',
  icon
}) => {
  const baseStyles = 'inline-flex items-center gap-1.5 rounded-full font-medium tracking-wider uppercase select-none';

  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5 font-semibold',
    md: 'text-[11px] px-3 py-1 font-semibold'
  };

  const variantStyles = {
    editorial: 'bg-[#F3EFEA] text-[#121314] border border-[#E2DDD4]',
    precinct: 'bg-[#FAF8F5] text-[#A47844] border border-[#DFD8CC]',
    status: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    verified: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    nightlife: 'bg-[#FDECEC] text-[#D9383A] border border-[#F9C5C6]',
    accommodation: 'bg-amber-50 text-amber-900 border border-amber-200',
    functions: 'bg-sky-50 text-sky-900 border border-sky-200'
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
