import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Younis | Data Analyst & Business Solutions Builder",
  description:
    "Portfolio of Ahmed Younis — Data Analyst & Business Solutions Builder. Turning raw data into clear decisions, interactive Power BI dashboards, Excel analytics, and automated digital workflows.",
  keywords: [
    "Ahmed Younis",
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "Microsoft Excel",
    "VetFarm Pro",
    "Workflow Automation",
    "DEPI",
    "Mansoura University",
    "Data Visualization",
    "SaaS Prototyping",
  ],
  authors: [{ name: "Ahmed Younis" }],
  creator: "Ahmed Younis",
  metadataBase: new URL("https://ahmedyounis.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmedyounis.dev",
    title: "Ahmed Younis | Data Analyst & Business Solutions Builder",
    description:
      "Turning Raw Data into Clear Decisions & Efficient Workflows. Explore Power BI dashboards, Excel analytics, and automated business solutions.",
    siteName: "Ahmed Younis Portfolio",
    images: [
      {
        url: "/ahmed-younis.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Younis — Data Analyst & Business Solutions Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Younis | Data Analyst & Business Solutions Builder",
    description:
      "Turning Raw Data into Clear Decisions & Efficient Workflows. Explore Power BI dashboards, Excel analytics, and automated business solutions.",
    images: ["/ahmed-younis.png"],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1A24",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-background text-text-primary antialiased selection:bg-accent-cyan/20 selection:text-accent-cyan">
        {children}
      </body>
    </html>
  );
}
