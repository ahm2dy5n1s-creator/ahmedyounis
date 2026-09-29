import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Background } from '@/components/Background';
import { Achievements } from '@/components/Achievements';
import { FeedbackHighlights } from '@/components/FeedbackHighlights';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden flex flex-col selection:bg-accent-cyan/20 selection:text-accent-cyan">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust & Capabilities Strip */}
      <TrustStrip />

      {/* About Me Section */}
      <About />

      {/* Services (What I Do) */}
      <Services />

      {/* Featured Projects Grid & Case Studies */}
      <Projects />

      {/* Skills & Technologies */}
      <Skills />

      {/* Background & Milestones */}
      <Background />

      {/* Achievements & Certifications */}
      <Achievements />

      {/* Project Quality Highlights & Feedback */}
      <FeedbackHighlights />

      {/* Final Call to Action */}
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
