import React from 'react';

interface SparkleIconProps {
  className?: string;
}

export const SparkleIcon: React.FC<SparkleIconProps> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    aria-hidden="true"
    className={`fill-current ${className}`}
    viewBox="0 0 24 24"
  >
    <path d="M12 0L14.7 9.3L24 12L14.7 14.7L12 24L9.3 14.7L0 12L9.3 9.3L12 0Z" />
  </svg>
);
