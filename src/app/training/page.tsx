"use client";
import React from "react";
import Link from "next/link";
import PublicLayout from "@/components/public/PublicLayout";
import {
  GraduationCap,
  Users,
  Monitor,
  Clock,
  BookOpen,
  Video,
  ArrowLeft,
  CheckCircle2,
  Laptop,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

/* ── SVG: Training Roadmap ─────────────────────────────────────────── */
function TrainingRoadmapDiagram() {
  return (
    <svg
      viewBox="0 0 800 280"
      className="w-full max-w-3xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="800" height="280" rx="16" className="fill-slate-50 dark:fill-slate-900" />

      {/* Timeline line */}
      <line x1="80" y1="140" x2="720" y2="140" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />

      {/* Step 1 */}
      <circle cx="120" cy="140" r="20" className="fill-emerald-500" />
      <text x="120" y="145" textAnchor="middle" className="fill-white" fontSize="14" fontWeight="700">1</text>
      <text x="120" y="90" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize="12" fontWeight="700">Day 1</text>
      <text x="120" y="108" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Device Setup</text>
      <text x="120" y="185" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300" fontSize="9">Install hardware</text>
      <text x="120" y="200" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300" fontSize="9">Configure network</text>

      {/* Step 2 */}
      <circle cx="280" cy="140" r="20" className="fill-emerald-500" />
      <text x="280" y="145" textAnchor="middle" className="fill-white" fontSize="14" fontWeight="700">2</text>
      <text x="280" y="90" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize="12" fontWeight="700">Day 1-2</text>
      <text x="280" y="108" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Staff Training</text>
      <text x="280" y="185" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300" fontSize="9">Admin walkthrough</text>
      <text x="280" y="200" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300" fontSize="9">Hands-on practice</text>

      {/* Step 3 */}
      <circle cx="440" cy="140" r="20" className="fill-emerald-500" />
      <text x="440" y="145" textAnchor="middle" className="fill-white" fontSize="14" fontWeight="700">3</text>
      <text x="440" y="90" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize="12" fontWeight="700">Day 2-3</text>
      <text x="440" y="108" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Student Enrollment</text>
      <text x="440" y="185" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300" fontSize="9">Fingerprint capture</text>
      <text x="440" y="200" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300" fontSize="9">Data import</text>

      {/* Step 4 */}
      <circle cx="600" cy="140" r="20" className="fill-emerald-500" />
      <text x="600" y="145" textAnchor="middle" className="fill-white" fontSize="14" fontWeight="700">4</text>
      <text x="600" y="90" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize="12" fontWeight="700">Day 3+</text>
      <text x="600" y="108" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Go Live</text>
      <text x="600" y="185" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300" fontSize="9">Full attendance</text>
      <text x="600" y="200" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300" fontSize="9">monitoring active</text>

      {/* Completion badge */}
      <rect x="670" y="115" width="100" height="50" rx="10" className="fill-green-100 dark:fill-green-950/40" stroke="#10b981" strokeWidth="1.5" />
      <text x="720" y="140" textAnchor="middle" className="fill-green-700 dark:fill-green-300" fontSize="11" fontWeight="700">Fully</text>
      <text x="720" y="155" textAnchor="middle" className="fill-green-700 dark:fill-green-300" fontSize="11" fontWeight="700">Operational</text>
    </svg>
  );
}

/* ── Page ───────────────────────────────────────────────────────────── */
export default function TrainingPage() {
  const trainingModules = [
    {
      icon: Monitor,
      title: "Dashboard Navigation",
      desc: "Learn the main dashboard: attendance overview, late arrivals, absent students, and quick actions. We walk your admin team through every screen.",
      duration: "45 min",
    },
    {
      icon: Users,
      title: "Student & Staff Management",
      desc: "Adding students, importing class lists, assigning classes, enrolling fingerprints — everything your registrar needs to know.",
      duration: "30 min",
    },
    {
      icon: GraduationCap,
      title: "Exams & Report Cards",
      desc: "Entering marks, computing grades, generating and printing professional report cards. Customized for your school's grading system.",
      duration: "40 min",
    },
    {
      icon: BookOpen,
      title: "Attendance Reports",
      desc: "Generating daily, weekly, and termly attendance reports. Filtering by class, date range, or individual students.",
      duration: "20 min",
    },
    {
      icon: Lightbulb,
      title: "SMS & Communication",
      desc: "Sending broadcast messages, configuring auto-alerts for attendance events, and managing parent contact information.",
      duration: "20 min",
    },
    {
      icon: Laptop,
      title: "Troubleshooting Basics",
      desc: "What to check if a device disconnects, how to re-enrol a fingerprint, and how to use manual attendance entry as backup.",
      duration: "15 min",
    },
  ];

  const trainingApproach = [
    "On-site training at your school — we come to you",
    "Hands-on practice, not just presentations",
    "Separate sessions for admins, teachers, and IT staff",
    "Training materials left behind for reference",
    "Follow-up support calls in the first 2 weeks",
    "Free refresher training if staff changes",
  ];

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4" />
            Staff Training
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Your Staff Will{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Master It Quickly
            </span>
          </h1>
          <p className="text-xl text-emerald-100/80 max-w-2xl mx-auto">
            DRAIS was designed to be intuitive. But we don&apos;t leave it to
            chance — we train every single staff member until they&apos;re
            confident.
          </p>
        </div>
      </section>

      {/* Roadmap diagram */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-4">
            From Setup to Go-Live in 3 Days
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl mx-auto mb-12">
            Our onboarding process is streamlined. Most schools are fully
            operational within 1-3 days.
          </p>
          <TrainingRoadmapDiagram />
        </div>
      </section>

      {/* Training modules */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-4">
            What We Cover
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl mx-auto mb-12">
            Every training session is hands-on. Staff practice on the live
            system with real scenarios.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingModules.map(({ icon: Icon, title, desc, duration }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="w-3 h-3" />
                    {duration}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training approach */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 p-10">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Our Training Approach
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {trainingApproach.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600 dark:bg-emerald-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Get Your Team Up to Speed?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-lg mx-auto">
            Schedule a training session and we&apos;ll come to your school.
            No tech expertise needed.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-colors text-lg"
          >
            Schedule Training
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Back link */}
      <section className="py-14 bg-gray-50 dark:bg-gray-900 text-center">
        <Link
          href="/#questions"
          className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Questions
        </Link>
      </section>
    </PublicLayout>
  );
}
