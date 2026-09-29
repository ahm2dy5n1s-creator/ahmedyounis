"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CaseStudy } from '@/types';
import { Button } from './ui/Button';
import { AqlidPreview } from './ui/InteractiveCharts';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  TrendingUp, 
  Info, 
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Cpu,
  FileSpreadsheet,
  LayoutDashboard
} from 'lucide-react';

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  // Reset selected image when project changes
  useEffect(() => {
    setSelectedImageIdx(0);
  }, [project]);

  // Lock scroll when open and handle Escape key
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasImages = project.images && project.images.length > 0;
  const currentImage = hasImages ? project.images[selectedImageIdx] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-[#1C1C2A] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#222234] border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan font-semibold">
                {project.category}
              </span>
              <span className="text-[11px] font-mono text-text-muted">•</span>
              <span className="text-xs font-mono text-accent-green font-medium">
                {project.subtitle}
              </span>
            </div>
            <h3 id="case-study-title" className="text-lg sm:text-2xl font-display font-extrabold text-text-primary mt-0.5">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-surface text-text-secondary hover:text-text-primary hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-xl bg-surface border border-white/5 shadow-subtle">
                <div className="text-[11px] font-mono text-text-muted uppercase">{m.label}</div>
                <div className="text-xl sm:text-2xl font-display font-extrabold text-accent-cyan mt-1">
                  {m.value}
                </div>
                {m.subtext && <div className="text-[11px] text-text-secondary mt-0.5">{m.subtext}</div>}
              </div>
            ))}
          </div>

          {/* Screenshot Gallery / Visual Evidence Showcase */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-text-muted">
              <span className="flex items-center gap-1.5 text-text-primary font-semibold">
                <LayoutDashboard className="w-4 h-4 text-accent-cyan" />
                Visual Evidence &amp; System Showcase
              </span>
              {hasImages && project.images.length > 1 && (
                <span className="text-accent-green">
                  View {selectedImageIdx + 1} of {project.images.length}
                </span>
              )}
            </div>

            {hasImages && currentImage ? (
              <div className="space-y-3">
                {/* Main High-Res Image Display */}
                <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#101018] shadow-elevated">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={currentImage.url}
                      alt={currentImage.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      priority
                    />
                  </div>
                  
                  {/* Next / Previous arrows if multiple images */}
                  {project.images.length > 1 && (
                    <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
                      <button
                        type="button"
                        onClick={() => setSelectedImageIdx((prev) => (prev > 0 ? prev - 1 : project.images.length - 1))}
                        className="p-2 rounded-full bg-black/70 hover:bg-black text-white pointer-events-auto transition-colors border border-white/10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedImageIdx((prev) => (prev < project.images.length - 1 ? prev + 1 : 0))}
                        className="p-2 rounded-full bg-black/70 hover:bg-black text-white pointer-events-auto transition-colors border border-white/10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Image Caption & Selector Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-surface/80 border border-white/5">
                  <div className="text-xs text-text-secondary font-sans leading-normal">
                    <span className="font-semibold text-text-primary">{currentImage.title}: </span>
                    {currentImage.caption}
                  </div>

                  {project.images.length > 1 && (
                    <div className="flex items-center gap-2 shrink-0">
                      {project.images.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedImageIdx(idx)}
                          className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                            selectedImageIdx === idx
                              ? 'bg-accent-cyan text-[#0D1117] font-bold shadow-glow-cyan'
                              : 'bg-surface-elevated text-text-secondary hover:text-white border border-white/10'
                          }`}
                        >
                          Page {idx + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden border border-white/10 p-4 bg-[#141420]">
                <AqlidPreview />
              </div>
            )}
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
              Project Overview
            </h4>
            <p className="text-base text-text-primary leading-relaxed font-sans">
              {project.overview}
            </p>
          </div>

          {/* Challenge & Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-surface border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-sm font-display font-bold text-rose-400">
                <AlertCircle className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed font-sans">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-sm font-display font-bold text-accent-green">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Workflow & Key Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
              Key Workflow &amp; Technical Implementation
            </h4>
            <div className="space-y-2.5">
              {project.approach.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-surface/60 border border-white/5">
                  <span className="w-5 h-5 rounded-full bg-accent-cyan/15 text-accent-cyan flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-text-secondary font-sans leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Implemented Features List */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
              Strategic Insights &amp; Implemented Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2.5 text-sm text-text-secondary p-2.5 rounded-lg bg-surface/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Impact Statement */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-accent-cyan/10 to-accent-green/10 border border-accent-cyan/25 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-cyan font-bold">
              <TrendingUp className="w-4 h-4" />
              <span>Business Impact &amp; Results</span>
            </div>
            <p className="text-sm sm:text-base text-text-primary font-medium leading-relaxed font-sans">
              {project.impact}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
              Tools &amp; Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-surface-elevated text-xs font-mono font-medium text-text-primary border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Factual Disclaimer */}
          {project.disclaimer && (
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-text-muted font-sans">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-accent-cyan" />
              <span>{project.disclaimer}</span>
            </div>
          )}

        </div>

        {/* Modal Bottom Sticky Bar */}
        <div className="sticky bottom-0 z-30 px-6 py-4 bg-[#222234] border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-text-muted">Ahmed Younis · Case Study</span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Case Study
          </Button>
        </div>

      </div>

    </div>
  );
};
