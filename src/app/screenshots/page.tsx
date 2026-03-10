"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Fingerprint, Users, GraduationCap, BarChart3, Settings, Monitor,
  BookOpen, Bell, ArrowRight,
} from "lucide-react";
import PublicLayout from "@/components/public/PublicLayout";

const categories = [
  { id: "all", label: "All" },
  { id: "attendance", label: "Attendance" },
  { id: "students", label: "Students" },
  { id: "exams", label: "Exams" },
  { id: "reports", label: "Reports" },
  { id: "dashboard", label: "Dashboard" },
];

const screenshots = [
  {
    id: 1,
    category: "attendance",
    title: "Live Attendance Dashboard",
    description: "Real-time view of student arrivals, late students and absences.",
    icon: Fingerprint,
    color: "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400",
  },
  {
    id: 2,
    category: "attendance",
    title: "Arrival Timeline",
    description: "Chronological log of every student check-in for the day.",
    icon: Monitor,
    color: "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400",
  },
  {
    id: 3,
    category: "attendance",
    title: "Late Arrival Flags",
    description: "Students who arrived after the deadline are automatically flagged.",
    icon: Bell,
    color: "bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-700 text-yellow-600 dark:text-yellow-400",
  },
  {
    id: 4,
    category: "students",
    title: "Student List",
    description: "Searchable and filterable list of all enrolled students.",
    icon: Users,
    color: "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700 text-green-600 dark:text-green-400",
  },
  {
    id: 5,
    category: "students",
    title: "Student Profile",
    description: "Complete student record with personal details, guardian info, and history.",
    icon: Users,
    color: "bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-700 text-teal-600 dark:text-teal-400",
  },
  {
    id: 6,
    category: "students",
    title: "Admission Form",
    description: "Online student admission with document uploads.",
    icon: BookOpen,
    color: "bg-cyan-50 dark:bg-cyan-900/30 border-cyan-200 dark:border-cyan-700 text-cyan-600 dark:text-cyan-400",
  },
  {
    id: 7,
    category: "exams",
    title: "Mark Entry Interface",
    description: "Simple mark entry form for teachers by subject.",
    icon: GraduationCap,
    color: "bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400",
  },
  {
    id: 8,
    category: "exams",
    title: "Class Results Table",
    description: "Full class results with grades, positions, and aggregates.",
    icon: GraduationCap,
    color: "bg-violet-50 dark:bg-violet-900/30 border-violet-200 dark:border-violet-700 text-violet-600 dark:text-violet-400",
  },
  {
    id: 9,
    category: "exams",
    title: "Report Card",
    description: "Professional printable report card with school branding.",
    icon: GraduationCap,
    color: "bg-pink-50 dark:bg-pink-900/30 border-pink-200 dark:border-pink-700 text-pink-600 dark:text-pink-400",
  },
  {
    id: 10,
    category: "reports",
    title: "Attendance Report",
    description: "Monthly attendance summary with percentage breakdowns.",
    icon: BarChart3,
    color: "bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-700 text-orange-600 dark:text-orange-400",
  },
  {
    id: 11,
    category: "reports",
    title: "Academic Performance Report",
    description: "Class-by-class academic performance analysis.",
    icon: BarChart3,
    color: "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700 text-red-600 dark:text-red-400",
  },
  {
    id: 12,
    category: "dashboard",
    title: "Admin Dashboard",
    description: "Central overview with key school metrics and alerts.",
    icon: Monitor,
    color: "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400",
  },
];

export default function ScreenshotsPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? screenshots : screenshots.filter((s) => s.category === active);

  return (
    <PublicLayout>
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold mb-4">Product Screenshots</h1>
          <p className="text-xl text-blue-100/80 max-w-xl mx-auto mb-8">
            See what DRAIS looks like in action. Explore the attendance dashboard, student management, exams, and more.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-xl transition-all hover:-translate-y-0.5">
            Try It Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-10 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active === id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(({ id, title, description, icon: Icon, color }) => (
              <div
                key={id}
                className={`rounded-2xl border p-6 ${color} flex flex-col items-center text-center min-h-[240px] justify-center transition-transform hover:-translate-y-1 duration-200`}
              >
                <Icon className="w-12 h-12 mb-4 opacity-50" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                <p className="text-xs text-gray-400 dark:text-gray-600 mt-3">[ Screenshot Placeholder ]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to see DRAIS at your school?
          </h2>
          <p className="text-indigo-100 mb-8">
            Start your free trial and have fingerprint attendance running within days.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
