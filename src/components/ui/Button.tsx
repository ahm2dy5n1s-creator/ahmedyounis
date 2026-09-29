import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  href,
  target,
  rel,
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs font-medium gap-1.5 rounded-md',
    md: 'px-5 py-2.5 text-sm font-semibold gap-2 rounded-lg',
    lg: 'px-7 py-3.5 text-base font-semibold gap-2.5 rounded-xl',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-accent-cyan to-accent-green text-[#0D1117] font-bold shadow-glow-cyan hover:shadow-glow-green hover:opacity-95 transition-all duration-300 active:scale-[0.98]',
    secondary:
      'bg-surface-elevated text-text-primary border border-white/10 hover:border-accent-cyan/50 hover:bg-[#2A2A3C] transition-all duration-300 active:scale-[0.98]',
    outline:
      'bg-transparent text-text-primary border border-white/15 hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300 active:scale-[0.98]',
    ghost:
      'bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all duration-200',
    glow:
      'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 hover:bg-accent-cyan/20 hover:border-accent-cyan/60 transition-all duration-300 shadow-glow-cyan',
  };

  const baseStyles =
    'inline-flex items-center justify-center font-sans transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer select-none';

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};
