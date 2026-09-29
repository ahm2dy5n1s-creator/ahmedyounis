import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Zap, Eye, BrainCircuit, Microscope, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const strengths = [
    {
      title: "Efficiency",
      description: "Automating repetitive tasks and data entry so teams can focus on more valuable work.",
      icon: <Zap className="w-5 h-5 text-accent-cyan" />,
      tag: "Process Optimization"
    },
    {
      title: "Visibility",
      description: "Building dashboards that make business performance easier to understand at a glance.",
      icon: <Eye className="w-5 h-5 text-accent-green" />,
      tag: "Clear Reporting"
    },
    {
      title: "Smart Problem Solving",
      description: "Using modern AI tools to prototype and build practical business solutions rapidly.",
      icon: <BrainCircuit className="w-5 h-5 text-accent-cyan" />,
      tag: "AI-Assisted"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Profile & Philosophy"
          title="Bridging Scientific Precision with Practical Business Analytics"
          highlightWord="Practical"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Editorial Text Column (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-text-secondary leading-relaxed font-sans">
            <p className="text-text-primary text-lg sm:text-xl font-medium leading-relaxed">
              I&apos;m a <span className="text-accent-cyan font-semibold">Veterinary Medicine student at Mansoura University</span> and a <span className="text-accent-green font-semibold">Data Analysis trainee at the Digital Egypt Pioneers Initiative (DEPI)</span>.
            </p>

            <p>
              I combine scientific precision, systematic observation, and a pragmatic problem-solving mindset to turn raw data into practical business value.
            </p>

            <p>
              When I look at a business, I look for bottlenecks. Whether it&apos;s building an interactive dashboard or creating a digital system to automate manual work, my goal is to make business processes clearer and more efficient.
            </p>

            {/* Scientific Mindset Highlight Banner */}
            <div className="mt-8 p-5 rounded-2xl bg-surface-elevated/90 border border-white/10 shadow-subtle flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 shrink-0 text-accent-cyan mt-0.5">
                <Microscope className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-display font-bold text-text-primary">
                  The Analytical Advantage
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary leading-normal">
                  Medical education instills diagnostic discipline: isolate variables, verify symptoms, test hypotheses, and prescribe accurate solutions. I apply this exact methodology to business data pipelines.
                </p>
              </div>
            </div>
          </div>

          {/* Strengths / Capability Column (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-text-muted mb-2">
              Three Core Strengths
            </div>

            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="group p-5 rounded-2xl bg-surface border border-white/5 hover:border-accent-cyan/30 hover:bg-surface-elevated transition-all duration-300 shadow-subtle"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-surface-elevated border border-white/10 group-hover:border-accent-cyan/40 transition-colors">
                      {strength.icon}
                    </div>
                    <h3 className="font-display font-bold text-text-primary text-base sm:text-lg">
                      {strength.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-text-muted border border-white/5">
                    {strength.tag}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pl-1">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
