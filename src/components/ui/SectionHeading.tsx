import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightWord?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightWord,
  description,
  align = 'left',
  className,
}) => {
  const isCentered = align === 'center';

  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        isCentered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold tracking-widest uppercase text-accent-cyan',
            isCentered && 'justify-center'
          )}
        >
          <span className="w-2 h-0.5 bg-accent-cyan rounded-full inline-block" />
          <span>{eyebrow}</span>
          <span className="w-2 h-0.5 bg-accent-cyan rounded-full inline-block" />
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-text-primary tracking-tight leading-tight">
        {highlightWord && title.includes(highlightWord) ? (
          <>
            {title.split(highlightWord)[0]}
            <span className="text-gradient-cyan-green">{highlightWord}</span>
            {title.split(highlightWord)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className="mt-3.5 text-base sm:text-lg text-text-secondary leading-relaxed font-sans font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
