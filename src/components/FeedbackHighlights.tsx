import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { ShieldCheck, CheckCircle2, MessageSquareQuote, FileCheck, Layers } from 'lucide-react';

export const FeedbackHighlights: React.FC = () => {
  const deliveryHighlights = [
    {
      title: "Data Cleansing & Integrity",
      desc: "Auditing missing records, handling returns sheets, and formulating clean data relational schemas.",
      tag: "Applied Precision"
    },
    {
      title: "Actionable KPI Hierarchy",
      desc: "Structuring executive summaries that highlight net margin, YoY variance, and territory distribution.",
      tag: "Decision Ready"
    },
    {
      title: "Pragmatic Solution Architecture",
      desc: "Building digital tools that directly target and eliminate repetitive operational bottlenecks.",
      tag: "Business Impact"
    }
  ];

  return (
    <section id="feedback" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Standards & Evaluation"
          title="Project Quality Standards &amp; Applied Highlights"
          highlightWord="Standards"
          description="A commitment to factual data modeling, rigorous returns reconciliation, and clean user-centered design."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 3 Quality Highlights Cards (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-4">
            {deliveryHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-surface border border-white/5 hover:border-accent-cyan/30 transition-all duration-300 shadow-subtle flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-surface-elevated border border-white/10 text-accent-cyan shrink-0 mt-0.5">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-display font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-accent-green">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Training Track Evaluation Note (Cols 8-12) */}
          <div className="lg:col-span-5 p-7 rounded-3xl bg-gradient-to-b from-[#202030] to-[#191925] border border-accent-cyan/20 shadow-elevated flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                  <MessageSquareQuote className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-text-muted">
                  DEPI Training Project Review
                </span>
              </div>

              <blockquote className="text-base sm:text-lg text-text-primary font-serif italic leading-relaxed pt-2">
                &ldquo;Ahmed&apos;s Superstore interactive dashboard project demonstrated highly accurate data merging and actionable KPIs.&rdquo;
              </blockquote>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-text-primary">
                  DEPI Junior Data Analysis Track
                </div>
                <div className="text-[11px] text-accent-cyan">
                  Applied Project Evaluation Feedback
                </div>
              </div>
              <div className="p-2 rounded-full bg-accent-green/10 text-accent-green">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
