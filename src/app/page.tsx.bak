"use client";
import React from "react";
import Link from "next/link";
import {
  Fingerprint,
  CheckCircle2,
  XCircle,
  Clock,
  Bell,
  BarChart3,
  Users,
  BookOpen,
  GraduationCap,
  MessageSquare,
  Shield,
  Cloud,
  Zap,
  ArrowRight,
  Play,
  Star,
  Monitor,
  UserCheck,
} from "lucide-react";
import PublicLayout from "@/components/public/PublicLayout";
import MicroDemoCarousel from "@/components/landing/MicroDemoCarousel";
import ClientLogosSection from "@/components/landing/ClientLogosSection";
import EnhancedTestimonialsSection from "@/components/landing/EnhancedTestimonialsSection";
import ObjectionCrusherSection from "@/components/landing/ObjectionCrusherSection";

// ─── 1. HERO ──────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* Glows */}
      <div className="absolute top-24 left-16 w-80 h-80 bg-blue-500/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-24 right-16 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-8">
          <Fingerprint className="w-4 h-4" />
          Attendance-First School Management System
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Know Exactly When{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Every Student Arrives
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl text-blue-100/80 font-light max-w-2xl mx-auto mb-10">
          Fingerprint-powered attendance monitoring and school management system. Trusted by 30+ East African schools serving 8,500+ students daily.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/signup"
            className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-200 hover:-translate-y-0.5 text-lg"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/attendance-demo"
            className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm text-lg"
          >
            <Play className="w-5 h-5" />
            Watch System Demo
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-6 py-3 text-indigo-300 hover:text-white font-semibold transition-colors text-base"
          >
            <MessageSquare className="w-4 h-4" />
            Book Live Demo
          </Link>
        </div>

        {/* Live dashboard mockup */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-gray-900/80 backdrop-blur">
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-gray-500">DRAIS Attendance Dashboard — Live View</span>
          </div>
          <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Present", value: "312", color: "text-green-400", icon: UserCheck },
              { label: "Late", value: "18", color: "text-yellow-400", icon: Clock },
              { label: "Absent", value: "24", color: "text-red-400", icon: XCircle },
              { label: "Total", value: "354", color: "text-blue-400", icon: Users },
            ].map(({ label, value, color, icon: Icon }) => (
              <div key={label} className="bg-gray-800/60 rounded-xl p-4 text-center border border-white/5">
                <Icon className={`w-6 h-6 ${color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${color}`}>{value}</div>
                <div className="text-xs text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
          <div className="px-6 pb-6">
            <div className="bg-gray-800/60 rounded-xl p-4 border border-white/5">
              <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">Today&apos;s Arrival Timeline</p>
              <div className="space-y-2">
                {[
                  { name: "Abdullah Hassan", time: "07:42 AM", status: "On Time", late: false },
                  { name: "Fatima Al-Rashied", time: "07:58 AM", status: "On Time", late: false },
                  { name: "Ibrahim Musa", time: "08:17 AM", status: "Late", late: true },
                ].map((student) => (
                  <div key={student.name} className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${student.late ? "bg-yellow-400" : "bg-green-400"}`} />
                      <span className="text-sm text-gray-300">{student.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-gray-500">{student.time}</span>
                      <span className={student.late ? "text-yellow-400" : "text-green-400"}>{student.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* YouTube Video Placeholder */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/15 border border-red-400/30 text-red-300 text-sm font-medium mb-4">
              <Play className="w-4 h-4" />
              Watch Our System Demo
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">See DRAIS in Action</h3>
            <p className="text-blue-100/70">Watch how our fingerprint attendance system works in real schools</p>
          </div>
          <div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="aspect-video flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg mb-4">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">DRAIS System Demonstration</h4>
                <p className="text-gray-400 text-sm text-center max-w-md">Click to watch how East African schools are using DRAIS for fingerprint attendance, student management, and automated parent notifications</p>
              </div>
            </div>
            {/* YouTube-style overlay */}
            <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
              5:24
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. THE BIG PROBLEM ───────────────────────────────────────────────────────
function ProblemSection() {
  const problems = [
    "Manual attendance registers take 15+ minutes every morning",
    "Students sneak in late without accountability",
    "Parents have no idea whether their child arrived safely",
    "Hours wasted compiling monthly attendance reports",
    "Paper registers get lost, damaged, or falsified",
    "Late detection relies on teachers remembering",
  ];
  const solutions = [
    "Fingerprint scan records attendance in under 2 seconds",
    "Late arrivals are automatically detected and flagged",
    "Parents receive instant SMS when child arrives or is absent",
    "Generate full attendance reports in one click",
    "Tamper-proof digital records stored securely in the cloud",
    "Real-time alerts to administration and parents",
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            The Problem Every School Has
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Manual attendance doesn&apos;t just waste time — it creates accountability gaps.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-900 dark:text-red-300">Without DRAIS</h3>
            </div>
            <ul className="space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-red-800 dark:text-red-300/80 text-sm">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-green-900 dark:text-green-300">With DRAIS</h3>
            </div>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-green-800 dark:text-green-300/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. ATTENDANCE BREAKTHROUGH ───────────────────────────────────────────────
function AttendanceBreakthroughSection() {
  const steps = [
    {
      step: "01",
      icon: Fingerprint,
      title: "Student Places Finger",
      description: "Student arrives and places their finger on the biometric device at the school entrance.",
      cardClass: "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800",
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
      step: "02",
      icon: Zap,
      title: "Instantly Recorded",
      description: "DRAIS identifies the student and records their arrival with a timestamp in under 2 seconds.",
      cardClass: "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      step: "03",
      icon: Bell,
      title: "Parent Notified",
      description: "Parent receives an SMS instantly confirming their child has arrived safely at school.",
      cardClass: "bg-cyan-50 dark:bg-cyan-900/30 border-cyan-200 dark:border-cyan-800",
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      step: "04",
      icon: Monitor,
      title: "Live Admin View",
      description: "Administrative staff sees live attendance data, late arrivals flagged, and absent students highlighted.",
      cardClass: "bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
            Core Functionality
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Fingerprint Attendance in Action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From student arrival to parent notification in seconds — completely automated.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ step, icon: Icon, title, description, cardClass, iconColor }) => (
            <div
              key={step}
              className={`relative rounded-2xl p-6 border ${cardClass} transition-transform hover:-translate-y-1 duration-200`}
            >
              <span className="absolute top-4 right-4 text-5xl font-black text-gray-100 dark:text-gray-800 select-none leading-none">
                {step}
              </span>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center mb-4">
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/attendance-demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-md"
          >
            <Play className="w-4 h-4" />
            See Full Attendance Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 4. CORE FEATURES ─────────────────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    {
      icon: Fingerprint,
      title: "Biometric Attendance",
      description: "Fingerprint-based check-in eliminates proxy attendance. Tamper-proof and automatic.",
      highlight: true,
    },
    { icon: Users, title: "Student Information", description: "Complete student profiles, admissions, and document management.", highlight: false },
    { icon: GraduationCap, title: "Exams & Reports", description: "Enter marks, compute grades, and generate professional report cards.", highlight: false },
    { icon: BookOpen, title: "Class Management", description: "Create classes, assign teachers/subjects, manage streams and years.", highlight: false },
    { icon: Bell, title: "Parent Notifications", description: "SMS alerts for arrivals, absences, results, and announcements.", highlight: false },
    { icon: BarChart3, title: "Analytics", description: "Dashboards, attendance trends, class performance, exportable reports.", highlight: false },
    { icon: MessageSquare, title: "Communication", description: "Broadcast messages to parents, staff, or individual classes.", highlight: false },
    { icon: Shield, title: "Secure & Isolated", description: "Each school's data is completely private. Role-based access control.", highlight: false },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
            Everything Your School Needs
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Powerful Modules, One Platform
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Attendance is at the heart of DRAIS — and a full school management suite surrounds it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, description, highlight }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                highlight
                  ? "bg-indigo-600 dark:bg-indigo-700 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                  highlight ? "bg-white/20" : "bg-indigo-50 dark:bg-indigo-900/30"
                }`}
              >
                <Icon className={`w-5 h-5 ${highlight ? "text-white" : "text-indigo-600 dark:text-indigo-400"}`} />
              </div>
              <h3 className={`font-bold mb-2 ${highlight ? "text-white" : "text-gray-900 dark:text-white"}`}>{title}</h3>
              <p className={`text-sm leading-relaxed ${highlight ? "text-indigo-100" : "text-gray-600 dark:text-gray-400"}`}>
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 font-semibold rounded-xl transition-colors"
          >
            View All Features <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 5. HOW IT WORKS ─────────────────────────────────────────────────────────
function HowItWorksSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Up and Running in 3 Steps</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Getting started with DRAIS is straightforward — even without technical expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: "1", icon: Fingerprint, title: "Install Fingerprint Device", desc: "Mount the biometric scanner at your school entrance. Compatible with standard fingerprint readers." },
            { n: "2", icon: Cloud, title: "Connect to DRAIS Cloud", desc: "Link the device to your school account. Enrol student fingerprints once and the system handles the rest." },
            { n: "3", icon: Monitor, title: "Monitor in Real Time", desc: "Track live attendance on your dashboard. Reports and parent notifications run automatically." },
          ].map(({ n, icon: Icon, title, desc }) => (
            <div key={n} className="text-center">
              <div className="relative inline-flex mb-5">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-600 text-indigo-600 text-xs font-black flex items-center justify-center">
                  {n}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. SOCIAL PROOF STATS ────────────────────────────────────────────────────
function SocialProofBanner() {
  const stats = [
    { value: "30+", label: "Schools Using DRAIS" },
    { value: "10,000+", label: "Student Records Managed" },
    { value: "500K+", label: "Attendance Records Captured" },
    { value: "5+", label: "Education Program Types" },
  ];
  return (
    <section className="py-14 bg-indigo-700 dark:bg-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-indigo-200 text-sm font-semibold uppercase tracking-widest mb-8">
          Trusted across Uganda and East Africa
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold text-white mb-1">{value}</p>
              <p className="text-indigo-200 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6b. TRUST ────────────────────────────────────────────────────────────────
function TrustSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Built to Be Trusted</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            School data is sensitive. DRAIS is built with security and reliability at its core.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Shield, title: "Data Isolation", desc: "Each school's data is private and completely separated from other schools." },
            { icon: Cloud, title: "Cloud Powered", desc: "Access your school from anywhere, on any device, at any time." },
            { icon: Zap, title: "Real-Time Sync", desc: "Attendance updates in seconds across all administrator devices." },
            { icon: Star, title: "Built for Africa", desc: "Designed specifically for African school environments and workflows." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6c. TESTIMONIALS ─────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: "DRAIS has transformed how we handle attendance and reporting. The customizable report system means we can present results exactly the way our board expects. Highly recommend it to any serious school administrator.",
    name: "Ngobi Peter",
    position: "General Director",
    school: "Northgate Schools",
  },
  {
    quote: "DRAIS is the only school management system that has truly adapted to Quran memorization programs. It understands our structure and gives us the tools we need to monitor every student's progress with confidence.",
    name: "Wagogo Husama",
    position: "Headteacher",
    school: "Albayan Quran Memorization Center",
  },
  {
    quote: "We needed a system that could help us structure our school programs and keep accurate records. DRAIS delivered exactly that — it's simple for teachers to use but powerful enough for management.",
    name: "Shk Hassan Mwita",
    position: "Director",
    school: "Excel Islamic Nursery and Primary School",
  },
  {
    quote: "The attendance monitoring in DRAIS is extremely effective. Our parents now trust us more because we can show them accurate, timestamped records of when their daughters arrive and leave school.",
    name: "Shk Hassan Mwita",
    position: "Principal",
    school: "Ibun Baz Girls Secondary School",
  },
  {
    quote: "As a school administrator, I was looking for a tool with strong attendance monitoring. DRAIS exceeded my expectations — setup was fast and the support team was helpful throughout the process.",
    name: "Mwondha Hassan",
    position: "School Administrator",
    school: "Ibun Baz",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-5">
            <Star className="w-4 h-4 fill-current" />
            From our schools
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">What School Leaders Are Saying</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real feedback from principals, headteachers, and administrators who trust DRAIS every day.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.name + t.school} className="bg-gray-50 dark:bg-gray-800/60 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{t.position}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{t.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/testimonials" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:underline">
            Read all testimonials <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 7. FINAL CTA ─────────────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
          Start Monitoring Student Attendance the Smart Way.
        </h2>
        <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
          Join schools that trust DRAIS to manage attendance, students, exams, and reports — all in one platform.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-colors text-lg"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/30 transition-colors text-lg"
          >
            Request a Demo
          </Link>
        </div>
        <p className="mt-6 text-indigo-200 text-sm">
          No credit card required · Set up in minutes · Cancel anytime
        </p>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <PublicLayout>
      <HeroSection />
      <ClientLogosSection />
      <MicroDemoCarousel />
      <ProblemSection />
      <AttendanceBreakthroughSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SocialProofBanner />
      <TrustSection />
      <ObjectionCrusherSection />
      <EnhancedTestimonialsSection />
      <FinalCTASection />
    </PublicLayout>
  );
}