"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ChevronRight, Menu, X } from "lucide-react";
import PublicLayout from "@/components/public/PublicLayout";

const docNav = [
  {
    section: "Getting Started",
    items: [
      { label: "Introduction", href: "/documentation" },
      { label: "Getting Started", href: "/documentation/getting-started" },
    ],
  },
  {
    section: "Students",
    items: [
      { label: "Admitting a Student", href: "/documentation/admitting-students" },
    ],
  },
  {
    section: "Attendance",
    items: [
      { label: "Taking Attendance", href: "/documentation/attendance" },
    ],
  },
  {
    section: "Academics",
    items: [
      { label: "Exams & Marks", href: "/documentation/exams" },
      { label: "Generating Reports", href: "/documentation/reports" },
    ],
  },
];

interface Props {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function DocLayout({ children, title, description }: Props) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Sidebar = () => (
    <nav className="w-64 shrink-0">
      <div className="sticky top-24">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span className="font-bold text-gray-900 dark:text-white">Documentation</span>
        </div>
        {docNav.map(({ section, items }) => (
          <div key={section} className="mb-6">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 px-2">
              {section}
            </p>
            <ul className="space-y-0.5">
              {items.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      pathname === href
                        ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-semibold"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <ChevronRight className="w-3 h-3 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-14 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-indigo-300 text-sm mb-3">
            <Link href="/documentation" className="hover:text-white transition-colors">Documentation</Link>
            {pathname !== "/documentation" && (
              <>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white">{title}</span>
              </>
            )}
          </div>
          <h1 className="text-4xl font-extrabold">{title}</h1>
          {description && <p className="text-blue-100/80 mt-2 text-lg">{description}</p>}
        </div>
      </section>

      {/* Content area */}
      <div className="bg-white dark:bg-gray-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Mobile sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden flex items-center gap-2 mb-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            {sidebarOpen ? "Close Menu" : "Browse Documentation"}
          </button>

          <div className="flex gap-10">
            {/* Desktop sidebar */}
            <div className="hidden lg:block">
              <Sidebar />
            </div>
            {/* Mobile sidebar */}
            {sidebarOpen && (
              <div className="lg:hidden mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <Sidebar />
              </div>
            )}

            {/* Main content */}
            <main className="flex-1 min-w-0">
              <div className="prose prose-gray dark:prose-invert max-w-none
                prose-headings:font-extrabold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-gray-900 dark:prose-h2:text-white
                prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed
                prose-li:text-gray-600 dark:prose-li:text-gray-400
                prose-strong:text-gray-900 dark:prose-strong:text-white
                prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              ">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
