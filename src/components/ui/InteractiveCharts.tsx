"use client";

import React, { useState } from 'react';
import { 
  TrendingUp, 
  Layers, 
  BarChart2, 
  CheckCircle2, 
  AlertCircle, 
  FileSpreadsheet, 
  Calendar, 
  Cpu, 
  Printer, 
  RefreshCw,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

/* =========================================================================
   01 — HERO DASHBOARD VISUALS (Separated for Clean, Unobstructed Placement)
   ========================================================================= */
export const HeroSalesMetricCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-surface-elevated/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-elevated transition-transform hover:-translate-y-1 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-text-muted">Total Sales Analyzed</div>
          <div className="text-xl sm:text-2xl font-display font-extrabold text-text-primary mt-0.5">$2.90M</div>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-accent-green/10 border border-accent-green/20 text-accent-green text-xs font-mono font-bold shrink-0">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>+55% YoY</span>
        </div>
      </div>

      {/* Mini SVG Trend Line */}
      <div className="mt-3 pt-2.5 border-t border-white/5">
        <svg viewBox="0 0 160 36" className="w-full h-8 overflow-visible">
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M0,28 Q20,24 40,26 T80,16 T120,18 T160,6"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M0,28 Q20,24 40,26 T80,16 T120,18 T160,6 L160,36 L0,36 Z"
            fill="url(#heroGradient)"
          />
          <circle cx="160" cy="6" r="3.5" fill="#00FA9A" className="animate-pulse" />
        </svg>
      </div>
    </div>
  );
};

export const HeroWorkflowPill: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-surface-elevated/95 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5 text-xs flex items-center justify-between text-text-secondary shadow-elevated ${className}`}>
      <div className="flex items-center gap-2 font-mono text-[11px]">
        <span className="text-text-muted">Raw Data</span>
        <ArrowRight className="w-3 h-3 text-accent-cyan shrink-0" />
        <span className="text-accent-cyan font-semibold">Processing</span>
        <ArrowRight className="w-3 h-3 text-accent-green shrink-0" />
        <span className="text-accent-green font-semibold">Insights</span>
      </div>
      <span className="w-2 h-2 rounded-full bg-accent-green animate-ping inline-block ml-3 shrink-0" />
    </div>
  );
};

export const HeroDashboardBadge: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <HeroSalesMetricCard />
      <HeroWorkflowPill />
    </div>
  );
};

/* =========================================================================
   02 — SUPERSTORE SALES & PROFITABILITY (Excel Interactive Preview)
   ========================================================================= */
export const SuperstorePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'returns' | 'regions'>('overview');

  return (
    <div className="w-full bg-[#181824] border border-white/10 rounded-xl overflow-hidden font-sans shadow-subtle">
      {/* Mock Excel/Dashboard Title Bar */}
      <div className="bg-[#1F1F2F] px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="w-4 h-4 text-[#107C41]" />
          <span className="text-xs font-mono font-medium text-text-secondary">Superstore_Analysis_Master.xlsx</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan/40" />
        </div>
      </div>

      {/* Tab Controls */}
      <div className="px-4 pt-3 flex items-center gap-2 border-b border-white/5 pb-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
            activeTab === 'overview'
              ? 'bg-accent-cyan/15 text-accent-cyan font-bold border border-accent-cyan/30'
              : 'text-text-muted hover:text-text-secondary'
          }`}
        >
          KPI Overview
        </button>
        <button
          onClick={() => setActiveTab('regions')}
          className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
            activeTab === 'regions'
              ? 'bg-accent-cyan/15 text-accent-cyan font-bold border border-accent-cyan/30'
              : 'text-text-muted hover:text-text-secondary'
          }`}
        >
          Regional Breakdown
        </button>
        <button
          onClick={() => setActiveTab('returns')}
          className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
            activeTab === 'returns'
              ? 'bg-accent-cyan/15 text-accent-cyan font-bold border border-accent-cyan/30'
              : 'text-text-muted hover:text-text-secondary'
          }`}
        >
          Returns Audit (800+)
        </button>
      </div>

      {/* Dynamic Content Body */}
      <div className="p-4">
        {activeTab === 'overview' && (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-[#202030] p-2.5 rounded-lg border border-white/5">
                <div className="text-[10px] text-text-muted font-mono uppercase">Consumer Sales</div>
                <div className="text-sm sm:text-base font-extrabold text-accent-cyan mt-0.5">$1.16M</div>
                <div className="text-[10px] text-text-secondary">50.5% total rev</div>
              </div>
              <div className="bg-[#202030] p-2.5 rounded-lg border border-white/5">
                <div className="text-[10px] text-text-muted font-mono uppercase">West Region</div>
                <div className="text-sm sm:text-base font-extrabold text-accent-green mt-0.5">$726.5K</div>
                <div className="text-[10px] text-text-secondary">Top territory</div>
              </div>
              <div className="bg-[#202030] p-2.5 rounded-lg border border-white/5">
                <div className="text-[10px] text-text-muted font-mono uppercase">Net Margin</div>
                <div className="text-sm sm:text-base font-extrabold text-text-primary mt-0.5">12.41%</div>
                <div className="text-[10px] text-accent-green">Post-audit</div>
              </div>
            </div>

            {/* Visual Bar Distribution */}
            <div className="bg-[#202030] p-3 rounded-lg border border-white/5">
              <div className="flex justify-between text-[11px] text-text-muted mb-1.5 font-mono">
                <span>Segment Revenue Distribution</span>
                <span>Audit Verified</span>
              </div>
              <div className="w-full h-3 bg-surface rounded-full overflow-hidden flex">
                <div className="h-full bg-accent-cyan" style={{ width: '51%' }} title="Consumer: 51%" />
                <div className="h-full bg-[#3B82F6]" style={{ width: '30%' }} title="Corporate: 30%" />
                <div className="h-full bg-accent-green" style={{ width: '19%' }} title="Home Office: 19%" />
              </div>
              <div className="flex items-center justify-between text-[10px] text-text-muted mt-2 font-mono">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent-cyan inline-block" /> Consumer ($1.16M)</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#3B82F6] inline-block" /> Corporate</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent-green inline-block" /> Home Office</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'regions' && (
          <div className="space-y-2.5">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-[#202030] border border-white/5">
                <div className="flex justify-between text-text-muted font-mono text-[10px]">
                  <span>West Region</span>
                  <span className="text-accent-green font-bold">$726,512</span>
                </div>
                <div className="w-full bg-surface h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-accent-green h-full rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#202030] border border-white/5">
                <div className="flex justify-between text-text-muted font-mono text-[10px]">
                  <span>East Region</span>
                  <span className="text-accent-cyan font-bold">$678,781</span>
                </div>
                <div className="w-full bg-surface h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-accent-cyan h-full rounded-full" style={{ width: '78%' }} />
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#202030] border border-white/5">
                <div className="flex justify-between text-text-muted font-mono text-[10px]">
                  <span>Central Region</span>
                  <span className="text-text-primary font-bold">$501,240</span>
                </div>
                <div className="w-full bg-surface h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-[#3B82F6] h-full rounded-full" style={{ width: '58%' }} />
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#202030] border border-white/5">
                <div className="flex justify-between text-text-muted font-mono text-[10px]">
                  <span>South Region</span>
                  <span className="text-text-primary font-bold">$391,722</span>
                </div>
                <div className="w-full bg-surface h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-[#8B5CF6] h-full rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
            </div>
            <div className="text-[11px] text-text-muted font-mono text-center pt-1">
              Pivot Table Slicers synced across all 4 territories
            </div>
          </div>
        )}

        {activeTab === 'returns' && (
          <div className="bg-[#202030] p-3 rounded-lg border border-white/5 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-text-primary">Returns Reconciliation Log</span>
              <span className="px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan text-[10px] font-mono">800 Rows Cleaned</span>
            </div>
            <div className="text-[11px] text-text-secondary leading-relaxed">
              Cross-referenced return tickets with primary sales orders, recomputing true net revenue and eliminating false margin inflation across high-return SKU categories.
            </div>
            <div className="flex items-center gap-2 text-[10px] text-accent-green font-mono pt-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Resolved disconnected returns sheet in Excel workbook</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* =========================================================================
   03 — RETAIL POWER BI DASHBOARD (Power BI Simulation Preview)
   ========================================================================= */
export const PowerBIPreview: React.FC = () => {
  const [activePage, setActivePage] = useState<'executive' | 'operations'>('executive');

  return (
    <div className="w-full bg-[#161622] border border-white/10 rounded-xl overflow-hidden font-sans shadow-subtle">
      {/* Power BI Brand Header */}
      <div className="bg-[#222234] px-4 py-2 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded bg-[#F2C811] flex items-center justify-center text-[#111] font-black text-[9px]">
            P
          </div>
          <span className="text-xs font-mono font-medium text-text-primary">Power BI · Retail Executive Suite</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-accent-green/10 text-accent-green text-[10px] font-mono font-bold">
            DAX Engine
          </span>
        </div>
      </div>

      {/* Power BI Page Tabs */}
      <div className="bg-[#1C1C2A] px-4 py-1.5 flex items-center gap-3 border-b border-white/5">
        <button
          onClick={() => setActivePage('executive')}
          className={`text-xs py-1 px-2.5 rounded font-mono transition-all ${
            activePage === 'executive'
              ? 'bg-accent-cyan/20 text-accent-cyan font-bold border border-accent-cyan/40'
              : 'text-text-muted hover:text-text-secondary'
          }`}
        >
          Page 1: Executive Analysis
        </button>
        <button
          onClick={() => setActivePage('operations')}
          className={`text-xs py-1 px-2.5 rounded font-mono transition-all ${
            activePage === 'operations'
              ? 'bg-accent-cyan/20 text-accent-cyan font-bold border border-accent-cyan/40'
              : 'text-text-muted hover:text-text-secondary'
          }`}
        >
          Page 2: Delivery Operations
        </button>
      </div>

      {/* Dashboard Canvas */}
      <div className="p-4">
        {activePage === 'executive' ? (
          <div className="space-y-3">
            {/* Top KPI Row */}
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-[#212133] p-2 rounded-lg border border-white/5">
                <div className="text-[9px] font-mono text-text-muted uppercase">Total Revenue</div>
                <div className="text-sm font-extrabold text-accent-cyan mt-0.5">$2.90M</div>
              </div>
              <div className="bg-[#212133] p-2 rounded-lg border border-white/5">
                <div className="text-[9px] font-mono text-text-muted uppercase">Net Profit</div>
                <div className="text-sm font-extrabold text-accent-green mt-0.5">$360K</div>
              </div>
              <div className="bg-[#212133] p-2 rounded-lg border border-white/5">
                <div className="text-[9px] font-mono text-text-muted uppercase">Profit Margin</div>
                <div className="text-sm font-extrabold text-text-primary mt-0.5">12.41%</div>
              </div>
              <div className="bg-[#212133] p-2 rounded-lg border border-white/5">
                <div className="text-[9px] font-mono text-text-muted uppercase">YoY Growth</div>
                <div className="text-sm font-extrabold text-accent-green mt-0.5">+55%</div>
              </div>
            </div>

            {/* Visual Chart Area */}
            <div className="bg-[#212133] p-3 rounded-lg border border-white/5">
              <div className="flex justify-between items-center text-[10px] font-mono text-text-muted mb-2">
                <span>Monthly Revenue & Profit Growth (Time Intelligence DAX)</span>
                <span className="text-accent-cyan">Calendar Table Model</span>
              </div>
              <div className="h-16 flex items-end gap-1.5 pt-2">
                {[35, 45, 52, 60, 68, 75, 82, 90, 85, 94, 98, 100].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                    <div
                      className="w-full bg-gradient-to-t from-accent-cyan/40 to-accent-cyan rounded-t transition-all group-hover:from-accent-green/60 group-hover:to-accent-green"
                      style={{ height: `${val}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[9px] font-mono text-text-muted mt-1.5">
                <span>Jan</span>
                <span>Apr</span>
                <span>Jul</span>
                <span>Oct</span>
                <span>Dec</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-[#212133] p-3 rounded-lg border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-text-primary">
                <span>Operational Fulfillment & Shipping Lag Analysis</span>
                <span className="text-accent-cyan font-mono text-[10px]">Operations View</span>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
                <div className="bg-surface p-2 rounded">
                  <div className="text-[9px] text-text-muted">Same Day</div>
                  <div className="text-xs font-bold text-accent-green">0.2 Days</div>
                </div>
                <div className="bg-surface p-2 rounded">
                  <div className="text-[9px] text-text-muted">First Class</div>
                  <div className="text-xs font-bold text-accent-cyan">2.1 Days</div>
                </div>
                <div className="bg-surface p-2 rounded">
                  <div className="text-[9px] text-text-muted">Standard</div>
                  <div className="text-xs font-bold text-text-primary">4.4 Days</div>
                </div>
              </div>
              <div className="text-[11px] text-text-secondary leading-relaxed pt-1">
                DAX time-delay measures identify regional transport bottlenecks and carrier performance across shipping modes.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* =========================================================================
   04 — VETFARM PRO (Farm Management SaaS Simulation)
   ========================================================================= */
export const VetFarmPreview: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<'poultry' | 'cattle' | 'sheep'>('poultry');

  return (
    <div className="w-full bg-[#181826] border border-white/10 rounded-xl overflow-hidden font-sans shadow-subtle">
      {/* App Header Bar */}
      <div className="bg-[#212135] px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-accent-green/20 border border-accent-green/40 flex items-center justify-center">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-green" />
          </div>
          <span className="text-xs font-mono font-bold text-text-primary">VetFarm Pro · Livestock Operations</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-accent-cyan/15 text-accent-cyan text-[10px] font-mono">
          Batch Tracking
        </span>
      </div>

      {/* Batch Selector */}
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedBatch('poultry')}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
              selectedBatch === 'poultry'
                ? 'bg-accent-green/20 text-accent-green font-bold border border-accent-green/40'
                : 'text-text-muted hover:text-text-secondary bg-surface'
            }`}
          >
            🐔 Broiler Batch #4B
          </button>
          <button
            onClick={() => setSelectedBatch('cattle')}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
              selectedBatch === 'cattle'
                ? 'bg-accent-green/20 text-accent-green font-bold border border-accent-green/40'
                : 'text-text-muted hover:text-text-secondary bg-surface'
            }`}
          >
            🐄 Dairy Unit 2
          </button>
          <button
            onClick={() => setSelectedBatch('sheep')}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
              selectedBatch === 'sheep'
                ? 'bg-accent-green/20 text-accent-green font-bold border border-accent-green/40'
                : 'text-text-muted hover:text-text-secondary bg-surface'
            }`}
          >
            🐑 Sheep Lot A
          </button>
        </div>

        {/* Dynamic Batch Card */}
        <div className="bg-[#222234] p-3 rounded-lg border border-white/5 space-y-2.5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-text-primary">
              {selectedBatch === 'poultry' && 'Broiler Batch #4B (5,000 Head)'}
              {selectedBatch === 'cattle' && 'Dairy Cattle Unit 2 (120 Head)'}
              {selectedBatch === 'sheep' && 'Sheep Lot A (340 Head)'}
            </span>
            <span className="text-[10px] font-mono text-accent-green bg-accent-green/10 px-2 py-0.5 rounded">
              Day 28 of Cycle
            </span>
          </div>

          {/* Vaccination Schedule Status */}
          <div className="space-y-1.5">
            <div className="text-[10px] font-mono uppercase text-text-muted">Vaccination & Medical Log</div>
            <div className="flex items-center justify-between p-2 rounded bg-surface text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-green" />
                <span className="text-text-primary text-[11px]">Gumboro 2nd Dose</span>
              </div>
              <span className="text-[10px] text-accent-green font-mono">Administered</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-surface text-xs border border-accent-cyan/20">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-accent-cyan" />
                <span className="text-text-primary text-[11px]">ND + IB Booster</span>
              </div>
              <span className="text-[10px] text-accent-cyan font-mono font-bold">Due in 2 Days</span>
            </div>
          </div>

          {/* Feed & Financial Mini Stat */}
          <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[10px]">
            <div className="bg-surface/80 p-1.5 rounded">
              <span className="text-text-muted">Cumulative Feed: </span>
              <span className="text-text-primary font-bold">14.2 Tons</span>
            </div>
            <div className="bg-surface/80 p-1.5 rounded">
              <span className="text-text-muted">Est. Batch Margin: </span>
              <span className="text-accent-green font-bold">+18.4%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   05 — AQLID (عقليد) (Worksheet Generator SaaS Simulation)
   ========================================================================= */
export const AqlidPreview: React.FC = () => {
  const [gridSize, setGridSize] = useState<'4x5' | '5x6'>('4x5');

  return (
    <div className="w-full bg-[#171724] border border-white/10 rounded-xl overflow-hidden font-sans shadow-subtle">
      {/* SaaS App Header */}
      <div className="bg-[#202030] px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-accent-cyan/20 border border-accent-cyan/40 flex items-center justify-center">
            <Printer className="w-3.5 h-3.5 text-accent-cyan" />
          </div>
          <span className="text-xs font-mono font-bold text-text-primary">Aqlid (عقليد) · Mental Math Engine</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-accent-green/15 text-accent-green text-[10px] font-mono">
          Print Calibrated
        </span>
      </div>

      <div className="p-4 space-y-3">
        {/* Controls Bar */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-text-muted text-[11px] font-mono">Layout:</span>
            <button
              onClick={() => setGridSize('4x5')}
              className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                gridSize === '4x5' ? 'bg-accent-cyan/20 text-accent-cyan font-bold' : 'text-text-muted bg-surface'
              }`}
            >
              20 Drills (4x5)
            </button>
            <button
              onClick={() => setGridSize('5x6')}
              className={`px-2 py-0.5 text-[11px] font-mono rounded ${
                gridSize === '5x6' ? 'bg-accent-cyan/20 text-accent-cyan font-bold' : 'text-text-muted bg-surface'
              }`}
            >
              30 Drills (5x6)
            </button>
          </div>
          <span className="text-[10px] font-mono text-text-muted">A4 PDF Output</span>
        </div>

        {/* Live Worksheet Paper Preview */}
        <div className="bg-white rounded-lg p-3 text-slate-900 shadow-md">
          {/* Academy Header */}
          <div className="border-b border-slate-200 pb-1.5 mb-2 flex justify-between items-center text-[10px] font-mono text-slate-600">
            <span className="font-bold text-slate-900">ACADEMY PRACTICE SHEET</span>
            <span>Date: ____/____/2026 | Score: ___/20</span>
          </div>

          {/* Drill Columns Grid */}
          <div className="grid grid-cols-4 gap-2 font-mono text-[11px] text-center">
            <div className="border border-slate-200 rounded p-1 bg-slate-50">
              <div className="text-[9px] text-slate-400">#01</div>
              <div>+24</div>
              <div>-12</div>
              <div>+35</div>
              <div className="border-t border-slate-400 mt-1 pt-0.5 font-bold text-slate-700">____</div>
            </div>
            <div className="border border-slate-200 rounded p-1 bg-slate-50">
              <div className="text-[9px] text-slate-400">#02</div>
              <div>+81</div>
              <div>-45</div>
              <div>+19</div>
              <div className="border-t border-slate-400 mt-1 pt-0.5 font-bold text-slate-700">____</div>
            </div>
            <div className="border border-slate-200 rounded p-1 bg-slate-50">
              <div className="text-[9px] text-slate-400">#03</div>
              <div>+53</div>
              <div>+26</div>
              <div>-37</div>
              <div className="border-t border-slate-400 mt-1 pt-0.5 font-bold text-slate-700">____</div>
            </div>
            <div className="border border-slate-200 rounded p-1 bg-slate-50">
              <div className="text-[9px] text-slate-400">#04</div>
              <div>+90</div>
              <div>-44</div>
              <div>+18</div>
              <div className="border-t border-slate-400 mt-1 pt-0.5 font-bold text-slate-700">____</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-text-muted">
          <span className="flex items-center gap-1 text-accent-cyan">
            <Sparkles className="w-3 h-3" />
            <span>CSV Input → Formatted Printable in &lt;100ms</span>
          </span>
          <span>Zero-bleed margins</span>
        </div>
      </div>
    </div>
  );
};
