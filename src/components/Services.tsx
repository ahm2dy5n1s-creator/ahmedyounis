import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { servicesData } from '@/data/portfolioData';
import { LayoutDashboard, Workflow, LineChart, CheckCircle, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-accent-cyan" />,
  Workflow: <Workflow className="w-6 h-6 text-accent-green" />,
  LineChart: <LineChart className="w-6 h-6 text-accent-cyan" />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative bg-[#181824]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Capabilities & Services"
          title="Practical Solutions for Clearer Insights & Efficient Operations"
          highlightWord="Insights"
          description="Transforming data chaos into structured visibility and automated workflows designed for operational clarity."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.number}
              className="group relative flex flex-col justify-between p-7 lg:p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent-cyan/40 hover:bg-surface-elevated transition-all duration-300 shadow-subtle hover:shadow-elevated"
            >
              {/* Top Row: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-accent-cyan/70 tracking-widest bg-accent-cyan/10 px-2.5 py-1 rounded-md border border-accent-cyan/20">
                    SERVICE {service.number}
                  </span>
                  <div className="p-3 rounded-xl bg-surface-elevated border border-white/10 group-hover:border-accent-cyan/40 transition-colors shadow-subtle">
                    {iconMap[service.icon]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-accent-cyan transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="pt-5 border-t border-white/5 space-y-2.5">
                <div className="text-[11px] font-mono uppercase text-text-muted tracking-wider mb-3">
                  Key Capabilities
                </div>
                {service.capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2.5 text-xs sm:text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                    <CheckCircle className="w-4 h-4 text-accent-green shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
