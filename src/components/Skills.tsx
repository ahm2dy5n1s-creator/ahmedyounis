import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { skillGroups } from '@/data/portfolioData';
import { 
  BarChart3, 
  Database, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  SlidersHorizontal 
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Business Intelligence': <BarChart3 className="w-5 h-5 text-accent-cyan" />,
  'Data Management & Analytics': <Database className="w-5 h-5 text-[#107C41]" />,
  'AI-Assisted Development': <Sparkles className="w-5 h-5 text-accent-cyan" />,
  'Business Solutions & Systems': <Cpu className="w-5 h-5 text-accent-green" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#181824]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Technical Repertoire"
          title="Skills, Tools &amp; Methodologies"
          highlightWord="Methodologies"
          description="Disciplined analytical tools, data management techniques, and AI-accelerated development frameworks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-7 sm:p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent-cyan/30 transition-all duration-300 shadow-subtle flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-surface-elevated border border-white/10 shrink-0">
                    {categoryIcons[group.category]}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-text-secondary mb-6 font-sans">
                  {group.description}
                </p>
              </div>

              {/* Skills Chips Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                      skill.highlight
                        ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 font-semibold'
                        : 'bg-surface-elevated text-text-secondary border border-white/5 hover:text-text-primary hover:border-white/10'
                    }`}
                  >
                    {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
