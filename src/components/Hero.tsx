"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { HeroSalesMetricCard, HeroWorkflowPill } from './ui/InteractiveCharts';
import { 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  BarChart3, 
  FileSpreadsheet, 
  Workflow,
  CheckCircle2,
  Phone,
  Send,
  MessageCircle
} from 'lucide-react';
import { siteConfig } from '@/data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-40" />
      
      {/* Subtle radial ambient lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Narrative & Action Hierarchy (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Eyebrow / Status Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="cyan" size="md" icon={<Sparkles className="w-3.5 h-3.5" />}>
                DATA ANALYST &amp; BUSINESS SOLUTIONS BUILDER
              </Badge>
              <Badge variant="pulse" size="sm">
                Available for Projects
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-text-primary tracking-tight leading-[1.1]">
                Ahmed{' '}
                <span className="relative inline-block">
                  <span className="text-gradient-cyan-green font-black">Younis</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-green opacity-70 rounded-full" />
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-text-primary tracking-tight mt-3">
                &ldquo;Turning Raw Data into Clear Decisions &amp; Efficient Workflows.&rdquo;
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl font-sans">
              I transform messy data into meaningful insights and build practical digital solutions that help businesses work smarter.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Projects
              </Button>
              <Button
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                icon={<MessageCircle className="w-4 h-4 text-accent-green" />}
              >
                Let&apos;s Connect (WhatsApp)
              </Button>
            </div>

            {/* Capability Badges & Trust Summary */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono text-text-muted">
              <span className="text-text-secondary font-semibold mr-1">Core Stack:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated border border-white/5 text-text-primary">
                <BarChart3 className="w-3.5 h-3.5 text-accent-cyan" />
                Power BI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated border border-white/5 text-text-primary">
                <FileSpreadsheet className="w-3.5 h-3.5 text-[#107C41]" />
                Excel
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated border border-white/5 text-text-primary">
                <Workflow className="w-3.5 h-3.5 text-accent-green" />
                Workflow Automation
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: Portrait Frame with Zero-Obstruction Layout (Cols 8-12) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Background Halo */}
            <div className="absolute inset-0 max-w-md mx-auto aspect-square rounded-full bg-gradient-to-tr from-accent-cyan/15 via-[#252538] to-accent-green/10 blur-2xl -z-10" />

            {/* Main Portrait Frame */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] mx-auto pb-12 sm:pb-8">
              
              {/* Backing Card Layer */}
              <div className="absolute inset-x-2 bottom-6 top-16 rounded-3xl bg-gradient-to-b from-[#252538]/60 to-[#1D1D2B] border border-white/10 -z-10 shadow-2xl backdrop-blur-sm" />

              {/* Ahmed's Portrait - 100% Completely Clear at Top & Face */}
              <div className="relative z-10 flex justify-center overflow-hidden rounded-b-3xl pt-2">
                <Image
                  src="/ahmed-younis.png"
                  alt="Ahmed Younis - Data Analyst & Business Solutions Builder"
                  width={460}
                  height={580}
                  priority
                  className="object-contain max-h-[480px] sm:max-h-[520px] w-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
                />
              </div>

              {/* Floating Sales Metric Card — Positioned at Lower Right (Well Below Face & Shoulders) */}
              <div className="absolute bottom-6 -right-2 sm:-right-6 lg:-right-8 z-20 w-48 sm:w-56">
                <HeroSalesMetricCard />
              </div>

              {/* Floating Workflow Step Pill — Positioned at Bottom Left (Below Chest/Arms) */}
              <div className="absolute -bottom-2 -left-2 sm:-left-6 z-20">
                <HeroWorkflowPill />
              </div>

              {/* DEPI Status Chip — Positioned on Top-Left Edge away from head */}
              <div className="absolute top-8 -left-2 sm:-left-6 z-20 bg-surface-elevated/95 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl shadow-elevated flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-accent-green" />
                <span className="font-mono text-text-primary font-medium text-[11px]">DEPI Trainee</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
