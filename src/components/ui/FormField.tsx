import React from 'react';

export interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  error,
  helperText,
  required,
  children,
  className = ''
}) => {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
          {label} {required && <span className="text-[#A47844]">*</span>}
        </label>
        {helperText && !error && (
          <span className="text-[11px] text-neutral-400">{helperText}</span>
        )}
      </div>

      {children}

      {error && (
        <p id={`${id}-error`} className="text-xs text-rose-600 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  hasError?: boolean;
}

export const Input: React.FC<InputProps> = ({ id, hasError, className = '', ...props }) => {
  return (
    <input
      id={id}
      className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:outline-hidden focus:ring-2 ${
        hasError
          ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200'
          : 'border-[#E2DDD4] focus:border-[#A47844] focus:ring-[#FAF2E8]'
      } ${className}`}
      {...props}
    />
  );
};
