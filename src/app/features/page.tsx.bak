"use client";
import React from "react";
import Link from "next/link";
import {
  Fingerprint, Users, GraduationCap, BookOpen, Bell, BarChart3,
  MessageSquare, Shield, Cloud, Zap, Clock, Monitor, ArrowRight,
  CheckCircle2, Database, Smartphone,
} from "lucide-react";
import PublicLayout from "@/components/public/PublicLayout";

const features = [
  {
    id: "attendance",
    icon: Fingerprint,
    title: "Biometric Attendance Monitoring",
    badge: "Flagship Feature",
    badgeColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300",
    description:
      "DRAIS's most powerful module. Fingerprint-based check-in eliminates proxy attendance and provides real-time arrival tracking with automatic parent notifications.",
    bullets: [
      "Fingerprint scanner integration (Dahua, ZKTeco, and compatible devices)",
      "Under 2-second identification per student",
      "Late arrival detection with configurable thresholds",
      "Real-time parent SMS on arrival or absence",
      "Daily, weekly, and monthly attendance reports",
      "Export to PDF, Excel, or CSV",
    ],
    screenshotAlt: "Attendance Dashboard Screenshot",
    color: "indigo",
  },
  {
    id: "students",
    icon: Users,
    title: "Student Information System",
    badge: null,
    description:
      "Maintain comprehensive student records from admission to graduation. Every detail stored, organised, and accessible.",
    bullets: [
      "Student admission with document uploads",
      "Class and stream assignment",
      "Guardian/parent information and contacts",
      "Medical information and special needs",
      "Enrolment history and transfers",
      "Student ID and photo management",
    ],
    screenshotAlt: "Student Management Screenshot",
    color: "blue",
  },
  {
    id: "exams",
    icon: GraduationCap,
    title: "Exam Management & Report Cards",
    badge: null,
    description:
      "Run complete examination cycles — from mark entry to professional report card generation — with automated grading.",
    bullets: [
      "Subject mark entry by teacher",
      "Automatic grade computation",
      "Class position and aggregate scoring",
      "Professional report card PDF generation",
      "Term and cumulative result tracking",
      "Deadline management for marks submission",
    ],
    screenshotAlt: "Exam Results Screenshot",
    color: "purple",
  },
  {
    id: "classes",
    icon: BookOpen,
    title: "Class & Curriculum Management",
    badge: null,
    description:
      "Organise your school structure from academic years to streams, subjects, and teacher assignments.",
    bullets: [
      "Academic year and term management",
      "Class and stream creation",
      "Subject assignment per class",
      "Teacher-subject linking",
      "Timetable support",
      "Promotion and graduation handling",
    ],
    screenshotAlt: "Class Management Screenshot",
    color: "green",
  },
  {
    id: "parents",
    icon: Bell,
    title: "Parent Communication",
    badge: null,
    description:
      "Keep parents informed at every step — from daily attendance to exam results — through automated and manual notifications.",
    bullets: [
      "Automated arrival/absence SMS",
      "Exam result notifications",
      "Broadcast announcements to all parents",
      "Class-specific messages",
      "Notification history and delivery logs",
      "Custom message templates",
    ],
    screenshotAlt: "Parent Notifications Screenshot",
    color: "orange",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Reporting",
    badge: null,
    description:
      "Make data-driven decisions with powerful dashboards, attendance trends, and academic performance analytics.",
    bullets: [
      "Real-time attendance dashboard",
      "Attendance trend charts by class/student",
      "Academic performance comparison",
      "Late arrival frequency analysis",
      "Exportable PDF and Excel reports",
      "Admin summary views",
    ],
    screenshotAlt: "Analytics Dashboard Screenshot",
    color: "cyan",
  },
];

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800",
  blue: "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800",
  purple: "bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800",
  green: "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800",
  orange: "bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800",
  cyan: "bg-cyan-50 dark:bg-cyan-900/30 border-cyan-200 dark:border-cyan-800",
};

const iconColorMap: Record<string, string> = {
  indigo: "text-indigo-600 dark:text-indigo-400",
  blue: "text-blue-600 dark:text-blue-400",
  purple: "text-purple-600 dark:text-purple-400",
  green: "text-green-600 dark:text-green-400",
  orange: "text-orange-600 dark:text-orange-400",
  cyan: "text-cyan-600 dark:text-cyan-400",
};

export default function FeaturesPage() {
  return (
    <PublicLayout>
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6">
            <Fingerprint className="w-4 h-4" />
            Complete Feature Set
          </div>
          <h1 className="text-5xl font-extrabold mb-4">
            Every Feature Your School Needs
          </h1>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-8">
            DRAIS is an attendance-first school management system with a complete suite of modules for modern school operations.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-xl transition-all hover:-translate-y-0.5"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Feature Sections */}
      <div className="bg-white dark:bg-gray-950">
        {features.map(({ id, icon: Icon, title, badge, badgeColor, description, bullets, screenshotAlt, color }, idx) => (
          <section
            key={id}
            className={`py-20 ${idx % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50 dark:bg-gray-900"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                {/* Text */}
                <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                  {badge && (
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${badgeColor}`}>
                      {badge}
                    </span>
                  )}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${colorMap[color]}`}>
                    <Icon className={`w-7 h-7 ${iconColorMap[color]}`} />
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">{title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{description}</p>
                  <ul className="space-y-2.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Screenshot placeholder */}
                <div className={`${colorMap[color]} rounded-2xl border p-8 flex flex-col items-center justify-center min-h-[280px] text-center ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <Icon className={`w-20 h-20 ${iconColorMap[color]} mb-4 opacity-40`} />
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">[ {screenshotAlt} ]</p>
                  <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">Placeholder — replace with actual screenshot</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-blue-700 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Bring DRAIS to Your School?
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Start your free trial today and transform how your school tracks attendance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
              Start Free Trial
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/30 transition-colors">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
