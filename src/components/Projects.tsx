"use client";

import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { projectsData } from '@/data/projectsData';
import { CaseStudy } from '@/types';

export const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Portfolio & Case Studies"
          title="Selected Projects & Built Solutions"
          highlightWord="Solutions"
          description="A selection of analytics projects, Power BI business intelligence suites, and independent digital solutions."
        />

        {/* 2x2 Grid of Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewCaseStudy={(proj) => setSelectedCaseStudy(proj)}
              isFeatured={index === 0 || index === 1}
            />
          ))}
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
