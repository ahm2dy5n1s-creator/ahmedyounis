import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showWordmark = true,
  className = '',
}) => {
  const iconDimensions = {
    sm: { width: 34, height: 18, container: 'h-8 px-2' },
    md: { width: 44, height: 22, container: 'h-10 px-2.5' },
    lg: { width: 60, height: 30, container: 'h-12 px-3' },
  };

  const dim = iconDimensions[size];

  return (
    <a
      href="#"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
      aria-label="Ahmed Younis - Back to top"
    >
      {/* Ahmed's Official Logo SVG */}
      <div
        className={`relative ${dim.container} flex items-center justify-center rounded-xl bg-surface-elevated border border-white/10 shadow-subtle group-hover:border-accent-cyan/40 transition-all duration-300`}
      >
        <Image
          src="/logo.svg"
          alt="Ahmed Younis Logo"
          width={dim.width}
          height={dim.height}
          className="object-contain filter brightness-110 drop-shadow-[0_0_8px_rgba(131,192,111,0.3)]"
          priority
        />
      </div>

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold text-text-primary tracking-tight text-base sm:text-lg">
            Ahmed <span className="text-gradient-cyan-green font-extrabold">Younis</span>
          </span>
          <span className="text-[10px] tracking-wider text-text-muted font-mono uppercase mt-0.5">
            Data &amp; Solutions
          </span>
        </div>
      )}
    </a>
  );
};
