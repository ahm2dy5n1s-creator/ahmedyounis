import React from 'react';
import { trustPillars } from '@/data/portfolioData';
import { GraduationCap, BarChart3, Cpu } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-accent-cyan" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-accent-green" />,
  Cpu: <Cpu className="w-5 h-5 text-accent-cyan" />,
};

export const TrustStrip: React.FC = () => {
  return (
    <section className="relative z-20 border-y border-white/5 bg-[#171722]/80 backdrop-blur-md py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {trustPillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`flex items-center gap-4 py-4 md:py-1 ${
                idx === 0
                  ? 'md:pr-8'
                  : idx === 1
                  ? 'md:px-8'
                  : 'md:pl-8'
              }`}
            >
              <div className="p-3 rounded-xl bg-surface-elevated border border-white/5 shrink-0 shadow-subtle">
                {iconMap[pillar.icon]}
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono uppercase tracking-wider text-accent-cyan font-semibold">
                  {pillar.badge}
                </span>
                <span className="text-sm font-display font-bold text-text-primary mt-0.5">
                  {pillar.title}
                </span>
                <span className="text-xs text-text-muted mt-0.5">
                  {pillar.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
