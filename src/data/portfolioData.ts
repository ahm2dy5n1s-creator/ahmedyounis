import { ServiceItem, SkillGroup, BackgroundItem, AchievementItem } from '@/types';

export const siteConfig = {
  name: "Ahmed Younis",
  role: "Data Analyst & Business Solutions Builder",
  tagline: "Turning Raw Data into Clear Decisions & Efficient Workflows.",
  shortBio: "I transform messy data into meaningful insights and build practical digital solutions that help businesses work smarter.",
  email: "a7m3dyo@gmail.com",
  phone: "+201019481632",
  whatsappUrl: "https://wa.me/201019481632",
  linkedin: "https://www.linkedin.com/in/a7m3dyo",
  telegram: "@a7m3dyo",
  telegramUrl: "https://t.me/a7m3dyo",
  location: "Mansoura, Egypt",
  statusBadge: "Available for Projects & Collaborations",
  url: "https://ahmedyounis.dev",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
];

export const trustPillars = [
  {
    badge: "Track",
    title: "DEPI — Data Analysis Trainee",
    subtitle: "Digital Egypt Pioneers Initiative",
    icon: "GraduationCap"
  },
  {
    badge: "Core Stack",
    title: "Power BI & Excel",
    subtitle: "Data Visualization & Relational Modeling",
    icon: "BarChart3"
  },
  {
    badge: "Methodology",
    title: "AI-Assisted Solutions",
    subtitle: "Rapid Prototyping & Workflow Automation",
    icon: "Cpu"
  }
];

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Interactive Dashboards",
    description: "Transform static spreadsheets into interactive Power BI and Excel dashboards that help businesses track KPIs, understand sales performance, and monitor profitability.",
    capabilities: [
      "KPI Dashboards & Executive Views",
      "Sales & Profitability Analysis",
      "Time Intelligence & YoY Trends",
      "Interactive Slicers & Dynamic Filtering"
    ],
    icon: "LayoutDashboard"
  },
  {
    number: "02",
    title: "Workflow Automation",
    description: "Reduce repetitive manual work through structured data processing, automation, and practical digital workflows.",
    capabilities: [
      "Automated Data Parsing & Cleansing",
      "Process Digitization & Form Systems",
      "Automated Report Generation",
      "Standardized Document Workflows"
    ],
    icon: "Workflow"
  },
  {
    number: "03",
    title: "Operational Analytics",
    description: "Build structured tracking systems that help businesses understand their operations, manage resources, and make more informed decisions.",
    capabilities: [
      "Inventory & Batch Tracking",
      "Expense & Unit Economics Auditing",
      "Operational Performance Reports",
      "Data-Driven Resource Allocation"
    ],
    icon: "LineChart"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Business Intelligence",
    description: "Visual storytelling, relational modeling, and executive KPI architecture.",
    skills: [
      { name: "Power BI", highlight: true },
      { name: "DAX Architecture", highlight: true },
      { name: "Power Query", highlight: true },
      { name: "Star Schema Modeling" },
      { name: "Executive Dashboard UI", highlight: true },
      { name: "Time Intelligence" }
    ]
  },
  {
    category: "Data Management & Analytics",
    description: "Data preparation, cleansing, auditing, and structured analysis.",
    skills: [
      { name: "Microsoft Excel", highlight: true },
      { name: "Advanced Pivot Tables", highlight: true },
      { name: "Data Auditing & Cleansing", highlight: true },
      { name: "Returns Reconciliation" },
      { name: "Calculated Columns & Logic" },
      { name: "JSON & CSV Data Parsing" }
    ]
  },
  {
    category: "Business Solutions & Systems",
    description: "Full-stack operational systems, livestock protocols, and workflow digitization.",
    skills: [
      { name: "Python & Flask", highlight: true },
      { name: "Relational Databases", highlight: true },
      { name: "Multi-Species Batch Logic" },
      { name: "Clinical & Medical Ledgers" },
      { name: "Automated Scheduling Alerts" },
      { name: "Batch P&L Reporting" }
    ]
  },
  {
    category: "AI-Assisted Development",
    description: "Modern accelerated development tools for rapid software prototyping.",
    skills: [
      { name: "AI-Assisted Prototyping", highlight: true },
      { name: "Workflow Automation" },
      { name: "SaaS Architecture" },
      { name: "Responsive UI Design" },
      { name: "Prompt Engineering" },
      { name: "Vibe Coding" }
    ]
  }
];

export const backgroundData: BackgroundItem[] = [
  {
    type: "education",
    title: "Bachelor of Veterinary Medicine",
    institution: "Mansoura University",
    period: "In Progress",
    description: "Developing research methodology, systematic observation, epidemiological and clinical data rigor, and evidence-based problem-solving skills.",
    highlights: [
      "Scientific methodology & hypothesis validation",
      "Systematic observation of operational biological workflows",
      "Applied domain expertise behind VetFarm Pro architecture"
    ]
  },
  {
    type: "training",
    title: "Junior Data Analysis Track",
    institution: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "July 2026 – Present",
    description: "Intensive applied training in data analysis, business intelligence, data auditing, relational modeling, Power BI, Excel, and structured SQL/reporting principles.",
    highlights: [
      "Hands-on retail data auditing, cleansing, and returns reconciliation",
      "Relational data modeling, DAX time-intelligence measure formulation",
      "End-to-end dashboard prototyping and business reporting"
    ]
  },
  {
    type: "experience",
    title: "Junior Data Analysis Trainee",
    institution: "DEPI Applied Projects",
    period: "July 2026 – Present",
    description: "Applied analytical workflows to real-world dataset scenarios, performing comprehensive data cleansing, relational modeling, and executive dashboard construction.",
    highlights: [
      "Audited 800+ returns in Superstore sales workbook ($2.3M Sales, $286K Profit)",
      "Constructed two-page Power BI executive suite analyzing $2.90M dataset"
    ]
  },
  {
    type: "experience",
    title: "Independent Business Solutions Builder",
    institution: "Self-Initiated Projects",
    period: "2026 – Present",
    description: "Engineering custom digital tools and SaaS platforms that solve specific operational and educational bottlenecks using Python, Flask, and AI-assisted development.",
    highlights: [
      "Architected VetFarm Pro multi-species livestock management system",
      "Built Aqlid automated mental arithmetic worksheet parsing engine"
    ]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: "Oracle — AI For You Certification",
    issuer: "Oracle University",
    date: "Issued August 2026",
    description: "Demonstrated foundational competence in artificial intelligence concepts, modern machine learning paradigms, and AI-enabled business solutions.",
    badgeType: "certification"
  },
  {
    title: "Selected Participant — Road to Digital Egypt Initiative",
    issuer: "Ministry of Communications and Information Technology (MCIT)",
    date: "Data Analysis Track · 2026",
    description: "Selected into the competitive nationwide initiative empowering youth in advanced data analysis, analytics tooling, and digital transformation.",
    badgeType: "selection"
  }
];
