"use client";
import React from "react";
import SystemThemeWrapper from "./SystemThemeWrapper";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";

interface Props {
  children: React.ReactNode;
}

/**
 * Layout used by every public / marketing page.
 * - Wraps content in SystemThemeWrapper so dark: Tailwind utilities
 *   automatically follow the OS/browser prefers-color-scheme setting.
 * - Renders PublicNavbar at the top and PublicFooter at the bottom.
 * - Does NOT include the dashboard Sidebar or Navbar.
 */
export default function PublicLayout({ children }: Props) {
  return (
    <SystemThemeWrapper className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased">
      <PublicNavbar />
      <main className="pt-16">{children}</main>
      <PublicFooter />
    </SystemThemeWrapper>
  );
}
