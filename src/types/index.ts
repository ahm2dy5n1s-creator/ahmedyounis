export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectImage {
  url: string;
  title: string;
  caption?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  overview: string;
  challenge: string;
  approach: string[];
  solution: string;
  features: string[];
  metrics: ProjectMetric[];
  impact: string;
  technologies: string[];
  images: ProjectImage[];
  disclaimer?: string;
  type: 'analytics' | 'bi' | 'automation' | 'saas';
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    iconName?: string;
  }[];
}

export interface BackgroundItem {
  type: 'education' | 'training' | 'experience';
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface AchievementItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  badgeType: 'certification' | 'selection';
}
