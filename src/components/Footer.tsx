"use client";

import React from 'react';
import { BrandLogo } from './BrandLogo';
import { navLinks, siteConfig } from '@/data/portfolioData';
import { ArrowUp, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#161620] py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Logo, Description & Nav Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-white/5">
          
          {/* Brand Info (Cols 1-6) */}
          <div className="md:col-span-6 space-y-4">
            <BrandLogo size="md" />
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed font-sans">
              Junior Data Analyst &amp; Business Solutions Builder. Turning raw, messy data into structured dashboards and practical automated digital systems.
            </p>
          </div>

          {/* Nav Links (Cols 7-9) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-text-primary font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Direct Channels (Cols 10-12) */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-text-primary font-bold">
              Direct Channels
            </div>
            <div className="flex items-center gap-2.5">
              {/* WhatsApp */}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface border border-white/5 hover:border-accent-green/50 hover:text-accent-green transition-colors text-text-secondary"
                aria-label="WhatsApp Contact"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface border border-white/5 hover:border-[#0077B5]/50 hover:text-[#0077B5] transition-colors text-text-secondary"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Telegram */}
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface border border-white/5 hover:border-[#229ED9]/50 hover:text-[#229ED9] transition-colors text-text-secondary"
                aria-label="Telegram Profile"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-2.5 rounded-xl bg-surface border border-white/5 hover:border-accent-cyan/50 hover:text-accent-cyan transition-colors text-text-secondary"
                aria-label="Email Ahmed Younis"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent-cyan transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            &copy; {currentYear} Ahmed Younis. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="text-[11px] text-text-muted">
            Mansoura University · DEPI Trainee
          </div>
        </div>

      </div>
    </footer>
  );
};
