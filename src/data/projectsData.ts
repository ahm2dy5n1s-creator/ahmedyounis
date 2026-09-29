import { CaseStudy } from '@/types';

export const projectsData: CaseStudy[] = [
  {
    id: "superstore-sales",
    title: "Superstore Sales & Profitability Dashboard",
    category: "Data Analytics · Microsoft Excel",
    subtitle: "DEPI Capstone Project · End-to-End Interactive Retail Analytics",
    overview: "As part of my training at the Digital Egypt Pioneers Initiative (DEPI), I engineered an end-to-end interactive Excel dashboard utilizing the Superstore retail dataset to transform raw, unstructured data into actionable business intelligence.",
    challenge: "Raw, messy retail transaction records and a disconnected returns sheet created critical blind spots in assessing true profitability, evaluating return rate drivers, and understanding regional customer behavior.",
    approach: [
      "Data Auditing & Cleansing: Thoroughly audited raw records to resolve data integrity issues and ensure analytical accuracy.",
      "Data Integration: Merged the Returns sheet with the primary sales dataset to precisely track and evaluate 800 return instances.",
      "Advanced Modeling: Implemented calculated columns (including a 12% Profit Margin) and structured Pivot Tables to analyze regional performance, customer segments, and financial trends.",
      "Dashboard Design: Built an interactive executive dashboard featuring dynamic KPI cards ($2.3M Total Sales, $286K Profit), visual Pivot Charts, and connected Slicers for seamless data filtering."
    ],
    solution: "Built a fully synchronized, interactive Excel dashboard with dynamic KPI cards, custom Pivot Charts (Segment pie, return volume bars, quarterly sales trends, and regional totals), and linked Category/Region/Segment slicers.",
    features: [
      "Data Auditing & Integrity Cleansing across raw order logs",
      "Returns Sheet Integration (Audited & evaluated 800 return instances)",
      "Strategic Regional Revenue Analysis ($726.5K West Region top generator)",
      "Customer Segment Breakdown ($1.16M Consumer primary growth driver)",
      "Dynamic Multi-Parameter Slicers synced across all Pivot visuals"
    ],
    metrics: [
      { label: "Total Sales", value: "$2.3M", subtext: "Audited dataset revenue" },
      { label: "Total Profit", value: "$286K", subtext: "Post-returns profit" },
      { label: "Profit Margin", value: "12%", subtext: "Calculated margin ratio" },
      { label: "Top Region (West)", value: "$726.5K", subtext: "Top revenue generator" }
    ],
    impact: "Transformed disconnected spreadsheets into an intuitive analytical decision-support tool, pinpointing the West region ($726.5K) and Consumer segment ($1.16M) as core business growth drivers.",
    technologies: [
      "Microsoft Excel",
      "Advanced Pivot Tables",
      "Data Modeling",
      "Data Auditing & Cleansing",
      "Dynamic Slicers",
      "KPI Design"
    ],
    images: [
      {
        url: "/projects/superstore-excel.png",
        title: "Superstore Sales & Profitability Dashboard",
        caption: "Interactive Excel executive dashboard with KPI cards, segment pie chart, return distribution, and synchronized slicers."
      }
    ],
    disclaimer: "DEPI Capstone Project developed as part of the Digital Egypt Pioneers Initiative applied training curriculum.",
    type: "analytics"
  },
  {
    id: "retail-power-bi",
    title: "Retail Sales & Operations Dashboard",
    category: "Business Intelligence · Power BI",
    subtitle: "Multi-Page Executive Intelligence & Operational BI Solution",
    overview: "Rebuilt and scaled retail sales analysis into a structured, high-performance Power BI business intelligence solution designed to provide deep executive visibility and operational efficiency.",
    challenge: "Static tabular reports hindered leadership from tracking year-over-year growth trajectories, isolating product-line loss leaders, and monitoring shipping bottlenecks across delivery modes.",
    approach: [
      "Relational Schema: Designed a robust star-schema data model complete with a dedicated Calendar Table for precise time-intelligence calculations.",
      "Data Integration: Seamlessly linked order records directly with returns data and product hierarchies to monitor operational bottlenecks.",
      "Advanced DAX Architecture: Centralized calculations in a dedicated Measures Table, engineering core KPIs including Total Sales ($2.90M), Total Profit ($360K), 12.41% Profit Margin, 55% YoY Growth, and Running Totals.",
      "Custom Dark-Mode UI: Crafted an executive-ready, 2-page dark-mode dashboard tailored with a professional brand identity and optimized visual hierarchy.",
      "Multipage Structure: Divided strategic insights seamlessly into Executive Analysis and Product Performance & Operations sections."
    ],
    solution: "Engineered a 2-page high-performance Power BI suite featuring custom DAX time-intelligence metrics, synchronized cross-filtering, interactive category loss matrices, and shipping mode fulfillment analytics.",
    features: [
      "Star-Schema Relational Data Model with Dedicated Calendar Table",
      "Centralized Measures Table with Custom DAX Calculations",
      "2-Page Structure: Executive Analysis & Product Performance / Operations",
      "Fulfillment & Shipping Lag Analytics by Delivery Mode",
      "Synchronized Cross-Filtering, Custom Navigation, & Dynamic Slicers"
    ],
    metrics: [
      { label: "Total Sales", value: "$2.90M", subtext: "Dataset analyzed" },
      { label: "Total Profit", value: "$360K", subtext: "Net operating profit" },
      { label: "Profit Margin", value: "12.41%", subtext: "Across product categories" },
      { label: "YoY Growth", value: "+55%", subtext: "Annual expansion rate" }
    ],
    impact: "Delivered comprehensive executive visibility into revenue trends, regional profits, and delivery status by ship mode, enabling targeted operational interventions.",
    technologies: [
      "Power BI",
      "DAX Architecture",
      "Power Query",
      "Star Schema Data Modeling",
      "Time Intelligence",
      "Executive UI Design"
    ],
    images: [
      {
        url: "/projects/powerbi-page1.png",
        title: "Page 1 — Executive Analysis",
        caption: "Revenue & profit by region, sales by segment donut chart, top cities, monthly trend line, and top KPI banner."
      },
      {
        url: "/projects/powerbi-page2.png",
        title: "Page 2 — Product Performance & Operations",
        caption: "Category sales and profit table with loss indicators, profitability bar chart, return ratio donut, and delivery status by ship mode."
      }
    ],
    disclaimer: "Advanced Business Intelligence project developed during the DEPI Data Analysis Track.",
    type: "bi"
  },
  {
    id: "vetfarm-pro",
    title: "VetFarm Pro — Smart Farm Management System",
    category: "Business Solutions · Python & Web",
    subtitle: "Multi-Species Livestock Operations, Clinical & Financial Management Platform",
    overview: "Designed and developed a comprehensive management platform powered by Python (Flask) and a responsive frontend to digitize farm operations, health protocols, and financial analytics for multi-species livestock (Poultry, Cattle, and Sheep).",
    challenge: "Traditional livestock and farm management relies heavily on disconnected paper logs or basic spreadsheets, causing delayed medical interventions, missed vaccination schedules, and untracked batch-level feed expenditures.",
    approach: [
      "Multi-Species Batch Lifecycle Tracking: Engineered a dynamic tracking engine supporting diverse livestock types, calculating real-time mortality rates, flock/herd counts, and growth timelines.",
      "Automated Vaccination & Health Engine: Built a pre-defined scheduling system that automatically computes required vaccines based on animal species (e.g., Newcastle for poultry, FMD for cattle/sheep) equipped with smart overdue alert logic.",
      "Clinical & Medical Ledgers: Integrated treatment tracking modules to monitor disease cases, administered medications, treatment durations, and veterinary expenditures per batch.",
      "Financial & Inventory Analytics: Developed daily feed consumption logs, expense/sales ledgers, and dynamic ROI calculators to deliver granular batch-level profit and loss (P&L) reporting."
    ],
    solution: "Constructed a complete full-stack web application with responsive Arabic/English interface, live dashboard summary cards, active batch manager, automated vaccination alerts, and integrated financial ledgers.",
    features: [
      "Multi-Species Batch Lifecycle Tracking (Poultry, Cattle, Sheep)",
      "Automated Vaccination Engine with Smart Overdue Alert Logic",
      "Clinical & Medical Ledgers for Disease Cases & Veterinary Spend",
      "Daily Feed Consumption Logs & Inventory Tracking",
      "Batch-Level Financial Ledger & Dynamic ROI / P&L Reporting"
    ],
    metrics: [
      { label: "Target Species", value: "Multi-Species", subtext: "Poultry, Cattle, Sheep" },
      { label: "Core Modules", value: "6 Integrated", subtext: "Batches, Vaccines, Treatments, Feed, Finance, Reports" },
      { label: "Alert Logic", value: "Automated", subtext: "Smart overdue vaccine tracking" },
      { label: "Architecture", value: "Full Stack", subtext: "Python (Flask) + Relational DB" }
    ],
    impact: "Bridges veterinary medical rigor with modern software automation, providing farm managers with real-time operational clarity, disease prevention reminders, and accurate unit economics.",
    technologies: [
      "Python",
      "Flask",
      "Relational Databases",
      "Responsive UI",
      "Domain Logic",
      "Veterinary Protocols"
    ],
    images: [
      {
        url: "/projects/vetfarm.png",
        title: "VetFarm Pro Dashboard",
        caption: "Main control center featuring active batch metrics, upcoming & overdue vaccination alerts, monthly profit & cost summaries, and batch initiation workflow."
      }
    ],
    disclaimer: "Independent software development project combining veterinary clinical domain expertise with full-stack web development.",
    type: "automation"
  },
  {
    id: "aqlid",
    title: "Aqlid Publisher (عقليد) — Mental Math EdTech SaaS",
    category: "Data Parsing · EdTech SaaS",
    subtitle: "Automated Mental Arithmetic Worksheet Publishing Engine & Print Studio",
    overview: "A specialized EdTech SaaS publishing platform designed for mental arithmetic academies and instructors to instantly transform raw spreadsheet drill data into customizable, print-calibrated practice worksheets.",
    challenge: "Mental arithmetic educators waste hours each week manually formatting, calculating, and aligning repetitive mathematical drill exercises into printable formats, facing errors with Arabic/Hindi numeral alignment and margins.",
    approach: [
      "Direct Excel Data Ingestion: Built an instant clipboard parser allowing instructors to copy raw tables directly from Excel (Ctrl+C → Ctrl+V) and build structured drill grids in one click.",
      "Multi-Format Arithmetic Engine: Implemented customizable operation types (vertical addition/subtraction, multi-tier drills) and support for both Eastern Arabic (٢١٠) and Western Arabic numeral formats.",
      "Interactive Layout Studio: Developed drag-and-drop formatting tools, automatic column auto-fit (ملاءمة تلقائية), randomized drill shuffling (خلط عشوائي), and custom academy headers.",
      "Print-Calibrated PDF Engine: Engineered zero-margin A4 PDF rendering (استخراج PDF) with automated answer key generation (الإجابات ✨) for effortless classroom distribution."
    ],
    solution: "Engineered an end-to-end web publishing studio featuring instant Excel data parsing, dynamic worksheet canvas previews, customizable styling panels (Margins, Typography, Layouts), automated answer sheets, and one-click PDF export.",
    features: [
      "Instant Excel Data Ingestion (Copy & Paste table parser 🚀)",
      "Bilingual Numeral Formatting (Eastern Arabic ٢١٠ & Western digits)",
      "Automated Layout Auto-Fit & Random Drill Shuffling Engine",
      "Modular Studio Tabs (Data, Templates, Typography, Margins, Styling)",
      "Automated Answer Key Generator (الإجابات ✨)",
      "Zero-Bleed High-Resolution PDF Export Engine (استخراج PDF 🖨️)"
    ],
    metrics: [
      { label: "Target Domain", value: "Mental Math Academies", subtext: "Specialized EdTech publishing" },
      { label: "Data Parsing", value: "Instant Excel Sync", subtext: "Ctrl+C to worksheet in <1s" },
      { label: "Export Calibration", value: "Zero-Bleed A4", subtext: "Pixel-perfect printable PDFs" },
      { label: "Core Feature", value: "Auto-Answer Keys", subtext: "Automated grading solution" }
    ],
    impact: "Reduces worksheet preparation time from hours to seconds for mental arithmetic teachers, eliminating formatting errors and standardizing professional printed educational materials.",
    technologies: [
      "AI-Assisted Development",
      "Web Technologies",
      "Data Parsing Engine",
      "Print Engine (PDF Generation)",
      "Interactive Studio UI",
      "Arabic Typography"
    ],
    images: [
      {
        url: "/projects/aqlid.png",
        title: "Aqlid Publisher Studio",
        caption: "Main workspace featuring the live drill sheet canvas on the left, and the data-import panel with Excel pasting, operation format selectors, auto-fit, and PDF export controls on the right."
      }
    ],
    disclaimer: "Independent EdTech SaaS platform designed and engineered to solve manual curriculum preparation bottlenecks for arithmetic academies.",
    type: "saas"
  }
];
