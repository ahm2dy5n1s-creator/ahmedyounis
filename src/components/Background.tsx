import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { backgroundData } from '@/data/portfolioData';
import { GraduationCap, Award, Briefcase, CheckCircle2 } from 'lucide-react';

const typeIcons = {
  education: <GraduationCap className="w-5 h-5 text-accent-cyan" />,
  training: <Award className="w-5 h-5 text-accent-green" />,
  experience: <Briefcase className="w-5 h-5 text-accent-cyan" />,
};

const typeBadges = {
  education: { label: "Academic Degree", color: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20" },
  training: { label: "Applied Training", color: "text-accent-green bg-accent-green/10 border-accent-green/20" },
  experience: { label: "Project Development", color: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20" },
};

export const Background: React.FC = () => {
  return (
    <section id="background" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Journey & Milestones"
          title="Education, Applied Training &amp; Development"
          highlightWord="Development"
          description="A structured timeline of academic foundations, intensive data analytics training, and hands-on solution building."
        />

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          
          {backgroundData.map((item, idx) => {
            const badge = typeBadges[item.type];

            return (
              <div key={idx} className="relative group">
                
                {/* Timeline Node Point */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-surface-elevated border-2 border-accent-cyan group-hover:border-accent-green group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan group-hover:bg-accent-green" />
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-white/5 hover:border-accent-cyan/30 hover:bg-surface-elevated transition-all duration-300 shadow-subtle">
                  
                  {/* Header info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${badge.color}`}>
                      {badge.label}
                    </span>
                    <span className="text-xs font-mono text-text-muted">
                      {item.period}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <div className="text-sm font-medium text-accent-cyan mt-0.5 mb-3">
                    {item.institution}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 font-sans">
                    {item.description}
                  </p>

                  {/* Highlight bullets */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="pt-3 border-t border-white/5 space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-green shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
