"use client";

import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Button } from './ui/Button';
import { navLinks, siteConfig } from '@/data/portfolioData';
import { Menu, X, ArrowUpRight, MessageSquareCode } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section tracker
      const sections = ['about', 'services', 'projects', 'skills', 'background', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A1A24]/90 backdrop-blur-md border-b border-white/10 shadow-subtle py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <BrandLogo size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-surface/80 border border-white/5 px-4 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-accent-cyan bg-accent-cyan/10 font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Let&apos;s Connect
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-surface border border-white/10 text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1D1D2B] border-b border-white/10 px-6 py-6 space-y-4 shadow-elevated animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-secondary hover:text-accent-cyan text-base font-medium py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
              icon={<MessageSquareCode className="w-4 h-4" />}
            >
              Let&apos;s Connect
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
