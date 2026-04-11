"use client";
import React from "react";
import Link from "next/link";
import {
  Fingerprint, Users, GraduationCap, Bell, BarChart3,
  MessageSquare, Shield, Zap, ArrowRight, CheckCircle2,
  XCircle, Clock, Monitor, DollarSign, FileText, Eye,
  Smartphone, Star, BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import PublicLayout from "@/components/public/PublicLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const features = [
  {
    id: "attendance",
    icon: Fingerprint,
    title: "Attendance Tracking",
    badge: "Flagship Feature",
    badgeColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300",
    problem: "Manual registers waste 15+ minutes every morning. Students fake attendance. Parents have no idea if their child arrived. Teachers mark carelessly with zero accountability.",
    solution: "DRAIS connects fingerprint devices at your school entrance directly to a cloud dashboard. Every scan is recorded with an exact timestamp. Late arrivals are auto-detected. Parents get SMS immediately.",
    benefit: "You gain complete visibility over every student and teacher — in real time. Accountability becomes automatic. Parent trust increases. Reports that used to take hours now take one click.",
    bullets: [
      "Under 2-second fingerprint identification",
      "Configurable late detection thresholds",
      "Real-time parent SMS on arrival or absence",
      "Daily, weekly, and monthly auto-reports",
      "Export to PDF, Excel, or CSV",
      "Works with Dahua & ZKTeco devices",
    ],
    color: "indigo",
    href: "/attendance",
  },
  {
    id: "exams",
    icon: GraduationCap,
    title: "Results Management",
    badge: null,
    problem: "Manual mark entry is error-prone. Calculating grades, positions, and aggregates by hand takes days. Report cards are inconsistent and unprofessional.",
    solution: "DRAIS provides a complete exam management system — from subject mark entry to automated grade computation, class positions, and professional PDF report cards.",
    benefit: "Teachers save days of work. Report cards are consistent, professional, and generated in seconds. Academic performance is tracked across terms and years for every student.",
    bullets: [
      "Subject mark entry by teacher with deadlines",
      "Automatic grade computation & class ranking",
      "Professional PDF report card generation",
      "Term and cumulative result tracking",
      "Customisable grading scales",
      "Performance comparison across classes",
    ],
    color: "purple",
    href: "/features",
  },
  {
    id: "finance",
    icon: DollarSign,
    title: "Fees Tracking",
    badge: null,
    problem: "Fee records are scattered across notebooks and spreadsheets. It is impossible to know exactly who has paid, who owes, and how much. Accountability is weak.",
    solution: "DRAIS tracks every payment against every student. Generate receipts, view balances, send payment reminders, and produce financial reports — all from one dashboard.",
    benefit: "Finance becomes transparent. You know exactly how much is owed and by whom. Collection rates improve because reminders are automatic. Receipts are digital and permanent.",
    bullets: [
      "Fee structure setup per class/term",
      "Payment recording with receipt generation",
      "Outstanding balance tracking per student",
      "Automated SMS payment reminders",
      "Financial summary reports",
      "Export for accountant review",
    ],
    color: "green",
    href: "/features",
  },
  {
    id: "parents",
    icon: MessageSquare,
    title: "Communication System",
    badge: null,
    problem: "Communicating with hundreds of parents is impossible without a system. Important notices get lost. Parents feel disconnected from the school.",
    solution: "DRAIS sends automated attendance SMS and allows broadcast messages to all parents, specific classes, or individual students. Every message is logged with delivery status.",
    benefit: "Parents feel connected and informed. Communication is instant and reliable. School reputation improves because parents see professionalism. Delivery tracking ensures nothing is missed.",
    bullets: [
      "Automated arrival/absence SMS notifications",
      "Broadcast announcements to all parents",
      "Class-specific and individual messaging",
      "Delivery tracking and message logs",
      "Custom SMS templates",
      "Works on any phone — no app needed",
    ],
    color: "orange",
    href: "/features",
  },
];

const colorMap: Record<string, { card: string; icon: string; badge: string }> = {
  indigo: {
    card: "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800",
    icon: "text-indigo-600 dark:text-indigo-400",
    badge: "bg-indigo-100 dark:bg-indigo-900/50",
  },
  purple: {
    card: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
    icon: "text-purple-600 dark:text-purple-400",
    badge: "bg-purple-100 dark:bg-purple-900/50",
  },
  green: {
    card: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    icon: "text-green-600 dark:text-green-400",
    badge: "bg-green-100 dark:bg-green-900/50",
  },
  orange: {
    card: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
    icon: "text-orange-600 dark:text-orange-400",
    badge: "bg-orange-100 dark:bg-orange-900/50",
  },
};

export default function FeaturesPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" /> Complete Feature Set
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl font-extrabold mb-5">
            Every Feature Your School Needs
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-8">
            DRAIS is an attendance-first intelligence system with a complete suite of modules built for schools that demand control, visibility, and automation.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <Link href="https://sims.drais.pro" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-xl transition-all hover:-translate-y-0.5">
              Request a Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Sections — Problem → Solution → Benefit */}
      <div className="bg-white dark:bg-gray-950">
        {features.map(({ id, icon: Icon, title, badge, badgeColor, problem, solution, benefit, bullets, color, href }, idx) => {
          const colors = colorMap[color];
          return (
            <section key={id} id={id} className={`py-24 ${idx % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50 dark:bg-gray-900"}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-16 items-start ${idx % 2 !== 0 ? "" : ""}`}>
                  {/* Content side */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                    {badge && (
                      <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider ${badgeColor}`}>
                        {badge}
                      </span>
                    )}
                    <div className={`w-16 h-16 rounded-2xl ${colors.card} border flex items-center justify-center mb-5`}>
                      <Icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-8">{title}</h2>

                    {/* Problem - Solution - Benefit */}
                    <div className="space-y-6 mb-8">
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-5 border border-red-200 dark:border-red-900/50">
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="w-5 h-5 text-red-500" />
                          <h3 className="font-bold text-red-800 dark:text-red-300 text-sm uppercase tracking-wider">The Problem</h3>
                        </div>
                        <p className="text-red-700 dark:text-red-300/80 text-sm leading-relaxed">{problem}</p>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-5 border border-blue-200 dark:border-blue-900/50">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-5 h-5 text-blue-500" />
                          <h3 className="font-bold text-blue-800 dark:text-blue-300 text-sm uppercase tracking-wider">The Solution</h3>
                        </div>
                        <p className="text-blue-700 dark:text-blue-300/80 text-sm leading-relaxed">{solution}</p>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-5 border border-green-200 dark:border-green-900/50">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <h3 className="font-bold text-green-800 dark:text-green-300 text-sm uppercase tracking-wider">The Benefit</h3>
                        </div>
                        <p className="text-green-700 dark:text-green-300/80 text-sm leading-relaxed">{benefit}</p>
                      </div>
                    </div>

                    {id === "attendance" && (
                      <Link href={href} className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20">
                        Deep Dive: Attendance System <ArrowRight className="w-5 h-5" />
                      </Link>
                    )}
                  </motion.div>

                  {/* Bullets side */}
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 !== 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={idx % 2 !== 0 ? "lg:order-1" : ""}
                  >
                    <div className={`${colors.card} rounded-3xl border p-8`}>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">What&apos;s Included</h3>
                      <ul className="space-y-4">
                        {bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Additional features grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">And So Much More</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Every module is designed to save time and increase accountability.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Users, title: "Student Information System", desc: "Complete student profiles from admission to graduation." },
              { icon: BookOpen, title: "Class Management", desc: "Academic years, streams, subjects, and teacher assignments." },
              { icon: BarChart3, title: "Analytics & Dashboards", desc: "Attendance trends, academic performance, and exportable reports." },
              { icon: Shield, title: "Security & Data Isolation", desc: "Each school's data is completely private. Role-based access control." },
              { icon: Monitor, title: "Multi-Device Support", desc: "Access from any computer, tablet, or phone." },
              { icon: FileText, title: "Report Generation", desc: "PDF, Excel, CSV exports for every data point." },
              { icon: Star, title: "Tahfiz / Quran Programs", desc: "Specialised modules for Islamic education programs." },
              { icon: Eye, title: "Enterprise Dashboard", desc: "Multi-school analytics for education organisations." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">Ready to Transform Your School?</h2>
            <p className="text-indigo-100 text-lg mb-8">See all these features working together in a live demo tailored to your school.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://sims.drais.pro" className="group flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:-translate-y-0.5">
                Request a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/attendance" className="px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/30 transition-all hover:-translate-y-0.5">
                See Attendance System
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}