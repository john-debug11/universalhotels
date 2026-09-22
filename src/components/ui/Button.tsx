import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'nightlife' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  iconRight,
  iconLeft,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-lg';

  const sizeStyles = {
    sm: 'text-[11px] px-3.5 py-1.5 gap-1.5 font-semibold',
    md: 'text-xs px-5 py-2.5 gap-2 font-semibold',
    lg: 'text-xs sm:text-sm px-6 py-3.5 gap-2.5 font-semibold'
  };

  const variantStyles = {
    primary: 'bg-[#A47844] text-white hover:bg-[#8E6433] shadow-xs active:scale-[0.98]',
    secondary: 'bg-[#121314] text-white hover:bg-[#232527] shadow-xs active:scale-[0.98]',
    dark: 'bg-[#0B0C0D] text-[#FAF8F5] border border-neutral-800 hover:border-[#A47844] hover:text-[#C7A379]',
    outline: 'bg-transparent text-[#121314] border border-[#121314] hover:bg-[#121314] hover:text-white',
    ghost: 'bg-transparent text-[#121314] hover:bg-[#EFECE6]',
    nightlife: 'bg-[#D9383A] text-white hover:bg-[#BD2C2E] shadow-xs active:scale-[0.98]'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </button>
  );
};
