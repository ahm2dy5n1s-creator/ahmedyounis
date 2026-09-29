import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { achievementsData } from '@/data/portfolioData';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 relative bg-[#181824]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Recognitions & Certifications"
          title="Verified Achievements &amp; Track Selections"
          highlightWord="Achievements"
          description="Formal recognitions in artificial intelligence and national digital capability initiatives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-surface border border-white/5 hover:border-accent-green/40 hover:bg-surface-elevated transition-all duration-300 shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-accent-green/10 border border-accent-green/20 text-accent-green">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-text-muted bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-text-primary mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-accent-cyan font-medium mb-3">
                  {item.issuer}
                </div>

                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-accent-green font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Recognition</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
