import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'green' | 'neutral' | 'outline' | 'pulse';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  className,
  icon,
}) => {
  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-[11px] font-medium gap-1',
    md: 'px-3 py-1 text-xs font-semibold gap-1.5',
  };

  const variantStyles = {
    cyan: 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25',
    green: 'bg-accent-green/10 text-accent-green border border-accent-green/25',
    neutral: 'bg-surface-elevated text-text-secondary border border-white/10',
    outline: 'bg-transparent text-text-secondary border border-white/15',
    pulse: 'bg-accent-green/15 text-accent-green border border-accent-green/30 shadow-glow-green',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-mono tracking-wide select-none',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {variant === 'pulse' && (
        <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-ping inline-block mr-0.5" />
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
