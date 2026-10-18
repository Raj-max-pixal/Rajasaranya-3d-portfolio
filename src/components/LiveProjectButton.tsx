import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  className = '',
  label = 'Live Project',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:border-white hover:text-white active:scale-95 cursor-pointer whitespace-nowrap shrink-0 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base flex items-center justify-center gap-2 ${className}`}
    >
      <span>{label}</span>
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </button>
  );
};
