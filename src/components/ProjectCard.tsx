"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { CaseStudy } from '@/types';
import { Button } from './ui/Button';
import { AqlidPreview } from './ui/InteractiveCharts';
import { ArrowUpRight, CheckCircle2, Eye, Layers, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: CaseStudy;
  onViewCaseStudy: (project: CaseStudy) => void;
  isFeatured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onViewCaseStudy,
  isFeatured = false,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const hasRealImages = project.images && project.images.length > 0;

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-surface border border-white/10 hover:border-accent-cyan/40 hover:bg-surface-elevated transition-all duration-300 shadow-subtle hover:shadow-elevated overflow-hidden">
      
      {/* Top Visual Preview Area */}
      <div className="relative bg-gradient-to-b from-[#1C1C29] to-[#171722] border-b border-white/5 overflow-hidden">
        
        {hasRealImages ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#101018]">
            <Image
              src={project.images[activeImageIdx].url}
              alt={project.images[activeImageIdx].title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Subtle Gradient Overlay for visual integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A24] via-transparent to-black/20 opacity-40 group-hover:opacity-20 transition-opacity" />

            {/* If multiple images, show page switcher pill */}
            {project.images.length > 1 && (
              <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                <span className="text-[10px] font-mono text-text-muted mr-1">Views:</span>
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIdx(idx);
                    }}
                    className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors ${
                      activeImageIdx === idx
                        ? 'bg-accent-cyan text-[#0D1117] font-bold'
                        : 'text-text-secondary hover:text-white bg-white/10'
                    }`}
                  >
                    Page {idx + 1}
                  </button>
                ))}
              </div>
            )}

            {/* Click to inspect overlay hint */}
            <button
              onClick={() => onViewCaseStudy(project)}
              className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 bg-surface-elevated/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-text-primary shadow-elevated"
            >
              <Eye className="w-3.5 h-3.5 text-accent-cyan" />
              <span>Inspect</span>
            </button>
          </div>
        ) : (
          <div className="p-4 sm:p-6">
            <AqlidPreview />
          </div>
        )}
      </div>

      {/* Card Body Information */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
        
        <div className="space-y-3">
          
          {/* Category & Status */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan font-semibold">
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-text-muted">
              {project.type === 'saas' ? 'EdTech SaaS' : project.type === 'automation' ? 'Python / Flask' : 'DEPI Applied Analytics'}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-text-primary group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>

          {/* Subtitle / Context */}
          <div className="text-xs font-mono text-accent-green font-medium">
            {project.subtitle}
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans line-clamp-3">
            {project.overview}
          </p>

          {/* Key Metrics Chips */}
          <div className="grid grid-cols-2 gap-2.5 pt-2">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label} className="p-2.5 rounded-xl bg-surface-card border border-white/5">
                <div className="text-[10px] font-mono text-text-muted uppercase">{m.label}</div>
                <div className="text-base font-extrabold text-accent-green mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar: Tech stack tags + Case Study CTA */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-text-muted border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          <Button
            onClick={() => onViewCaseStudy(project)}
            variant="outline"
            size="sm"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            className="w-full sm:w-auto shrink-0 group-hover:border-accent-cyan group-hover:text-accent-cyan"
          >
            View Case Study
          </Button>

        </div>

      </div>

    </div>
  );
};
