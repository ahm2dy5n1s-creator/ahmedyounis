"use client";

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { siteConfig } from '@/data/portfolioData';
import { 
  Send, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  Phone,
  MessageCircle,
  Sparkles
} from 'lucide-react';

export const ContactCTA: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState('Power BI Dashboard');
  const [copied, setCopied] = useState(false);

  const topics = [
    'Power BI Dashboard',
    'Excel Data Modeling',
    'VetFarm & Farm Systems',
    'Workflow Automation',
    'Custom Data Solution',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoSubject = encodeURIComponent(`Project Inquiry: ${selectedTopic} — Ahmed Younis Portfolio`);
  const mailtoBody = encodeURIComponent(
    `Hello Ahmed,\n\nI came across your portfolio and would like to discuss a project regarding ${selectedTopic}.\n\nHere is a brief summary of our business requirements / data challenge:\n\n[Describe your operational challenge or dataset]\n\nBest regards,\n`
  );
  const mailtoLink = `mailto:${siteConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const whatsappMessage = encodeURIComponent(
    `Hello Ahmed! I saw your portfolio and would like to discuss a ${selectedTopic} project.`
  );
  const whatsappLink = `${siteConfig.whatsappUrl}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#181824]/80">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-accent-cyan/10 via-accent-green/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Box */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-b from-[#222234] to-[#1A1A28] border border-white/10 shadow-2xl space-y-8 text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20 text-xs font-mono font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            Let&apos;s Build Practical Value
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight">
              Have a business bottleneck?{' '}
              <span className="text-gradient-cyan-green block sm:inline">Let&apos;s solve it.</span>
            </h2>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed pt-2 font-sans">
              Whether you need an executive Power BI dashboard, structured Excel data modeling, or a tailored workflow management system, let&apos;s discuss how to streamline your operations.
            </p>
          </div>

          {/* Interactive Topic Selector */}
          <div className="space-y-3 pt-2 max-w-xl mx-auto">
            <div className="text-xs font-mono text-text-muted">
              Select inquiry focus:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedTopic === topic
                      ? 'bg-accent-cyan text-[#0D1117] font-bold shadow-glow-cyan'
                      : 'bg-surface text-text-secondary border border-white/5 hover:border-white/20 hover:text-text-primary'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            {/* WhatsApp Direct Chat */}
            <Button
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={<MessageCircle className="w-4 h-4 text-[#0D1117]" />}
            >
              Chat on WhatsApp
            </Button>

            {/* Email Contact */}
            <Button
              href={mailtoLink}
              variant="secondary"
              size="lg"
              icon={<Send className="w-4 h-4" />}
            >
              Send Email ({selectedTopic})
            </Button>

            {/* LinkedIn */}
            <Button
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<Linkedin className="w-4 h-4 text-[#0077B5]" />}
            >
              LinkedIn
            </Button>

            {/* Telegram */}
            <Button
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<Send className="w-4 h-4 text-[#229ED9]" />}
            >
              Telegram
            </Button>
          </div>

          {/* Direct Contact Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-text-muted">
            
            {/* Email Card with Copy */}
            <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-xl border border-white/5">
              <Mail className="w-4 h-4 text-accent-cyan" />
              <span className="text-text-primary">{siteConfig.email}</span>
              <button
                onClick={handleCopyEmail}
                className="ml-1 p-1 rounded hover:bg-white/10 text-text-muted hover:text-text-primary transition-colors focus:outline-none"
                title="Copy email address"
              >
                {copied ? (
                  <span className="flex items-center gap-1 text-accent-green text-[11px]">
                    <Check className="w-3.5 h-3.5" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* WhatsApp Number */}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-surface px-4 py-2 rounded-xl border border-white/5 hover:border-accent-green/40 hover:text-accent-green transition-colors text-text-primary"
            >
              <MessageCircle className="w-4 h-4 text-accent-green" />
              <span>{siteConfig.phone}</span>
            </a>

            {/* Telegram Username */}
            <a
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-surface px-4 py-2 rounded-xl border border-white/5 hover:border-[#229ED9]/40 hover:text-[#229ED9] transition-colors text-text-primary"
            >
              <Send className="w-4 h-4 text-[#229ED9]" />
              <span>{siteConfig.telegram}</span>
            </a>

          </div>

          <p className="text-xs text-text-muted font-sans max-w-md mx-auto">
            Tell me about the problem you&apos;re facing, and let&apos;s explore how data and technology can help.
          </p>

        </div>

      </div>
    </section>
  );
};
