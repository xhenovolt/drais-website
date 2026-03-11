'use client';

import "./globals.css";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// Route to title mapping for the marketing site
const routeTitles: Record<string, string> = {
  '/': 'DRAIS - School Management & Attendance System',
  '/features': 'Features - DRAIS',
  '/attendance-demo': 'Attendance Demo - DRAIS',
  '/pricing': 'Pricing - DRAIS',
  '/screenshots': 'Screenshots - DRAIS',
  '/documentation': 'Documentation - DRAIS',
  '/about': 'About - DRAIS',
  '/contact': 'Contact - DRAIS',
  '/testimonials': 'Testimonials - DRAIS',
  '/login': 'Sign In - DRAIS',
  '/signup': 'Free Trial - DRAIS',
  '/reliability': 'Reliability - DRAIS',
  '/security': 'Security - DRAIS',
  '/device-integration': 'Device Integration - DRAIS',
  '/training': 'Training - DRAIS',
  '/support': 'Support - DRAIS',
};

function getPageTitle(pathname: string): string {
  return routeTitles[pathname] || 'DRAIS - School Management System';
}

function DynamicTitle() {
  const pathname = usePathname();
  
  useEffect(() => {
    const title = getPageTitle(pathname);
    document.title = title;
  }, [pathname]);
  
  return null;
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <DynamicTitle />
      {children}
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
