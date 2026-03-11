"use client";
import React from "react";
import Link from "next/link";
import PublicLayout from "@/components/public/PublicLayout";
import {
  Server,
  Activity,
  Database,
  RefreshCw,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  Cloud,
  HardDrive,
} from "lucide-react";

/* ── SVG: Uptime Architecture Diagram ──────────────────────────────── */
function UptimeArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 800 360"
      className="w-full max-w-3xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="800" height="360" rx="16" className="fill-slate-50 dark:fill-slate-900" />

      {/* Cloud region box */}
      <rect x="200" y="20" width="400" height="140" rx="12" className="fill-indigo-50 dark:fill-indigo-950/40" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="400" y="46" textAnchor="middle" className="fill-indigo-600 dark:fill-indigo-400" fontSize="13" fontWeight="600">Cloud Infrastructure (99.9% Uptime SLA)</text>

      {/* Primary server */}
      <rect x="240" y="65" width="130" height="75" rx="10" className="fill-white dark:fill-slate-800" stroke="#6366f1" strokeWidth="1.5" />
      <text x="305" y="95" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize="12" fontWeight="600">Primary Server</text>
      <text x="305" y="115" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Active</text>
      <circle cx="265" cy="125" r="5" className="fill-green-500" />

      {/* Backup server */}
      <rect x="430" y="65" width="130" height="75" rx="10" className="fill-white dark:fill-slate-800" stroke="#6366f1" strokeWidth="1.5" />
      <text x="495" y="95" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize="12" fontWeight="600">Backup Server</text>
      <text x="495" y="115" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Standby</text>
      <circle cx="455" cy="125" r="5" className="fill-yellow-500" />

      {/* Arrow between servers */}
      <line x1="370" y1="102" x2="430" y2="102" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arrow-r)" />
      <text x="400" y="96" textAnchor="middle" className="fill-indigo-500" fontSize="9">Sync</text>

      {/* Database */}
      <rect x="310" y="200" width="180" height="60" rx="10" className="fill-white dark:fill-slate-800" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="400" y="225" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize="12" fontWeight="600">Encrypted Database</text>
      <text x="400" y="245" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Automated Daily Backups</text>

      {/* School nodes */}
      <rect x="40" y="280" width="160" height="55" rx="10" className="fill-white dark:fill-slate-800" stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="120" y="305" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize="11" fontWeight="600">School A — Dashboard</text>
      <text x="120" y="320" textAnchor="middle" className="fill-green-600 dark:fill-green-400" fontSize="10">● Online</text>

      <rect x="320" y="280" width="160" height="55" rx="10" className="fill-white dark:fill-slate-800" stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="400" y="305" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize="11" fontWeight="600">School B — Dashboard</text>
      <text x="400" y="320" textAnchor="middle" className="fill-green-600 dark:fill-green-400" fontSize="10">● Online</text>

      <rect x="600" y="280" width="160" height="55" rx="10" className="fill-white dark:fill-slate-800" stroke="#0ea5e9" strokeWidth="1.5" />
      <text x="680" y="305" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize="11" fontWeight="600">School C — Dashboard</text>
      <text x="680" y="320" textAnchor="middle" className="fill-green-600 dark:fill-green-400" fontSize="10">● Online</text>

      {/* Connections to database */}
      <line x1="400" y1="160" x2="400" y2="200" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 2" />
      <line x1="120" y1="280" x2="350" y2="260" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="400" y1="260" x2="400" y2="280" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 2" />
      <line x1="680" y1="280" x2="450" y2="260" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 2" />

      <defs>
        <marker id="arrow-r" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#6366f1" />
        </marker>
      </defs>
    </svg>
  );
}

/* ── Page ───────────────────────────────────────────────────────────── */
export default function ReliabilityPage() {
  const guarantees = [
    {
      icon: Cloud,
      title: "Cloud-Hosted Infrastructure",
      desc: "DRAIS is hosted on enterprise-grade cloud servers with automatic scaling. If traffic spikes during exam or reporting season, performance stays smooth.",
    },
    {
      icon: Database,
      title: "Automated Daily Backups",
      desc: "Every school's database is backed up automatically every 24 hours. In the unlikely event of data loss, we can restore your records within minutes.",
    },
    {
      icon: RefreshCw,
      title: "Failover & Redundancy",
      desc: "Standby servers are always ready. If the primary server has an issue, traffic automatically routes to the backup — often before you notice anything.",
    },
    {
      icon: Activity,
      title: "Continuous Monitoring",
      desc: "Our team monitors system health around the clock. We detect and resolve performance issues proactively, not reactively.",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Uptime Target",
      desc: "We engineer for 99.9% uptime. That's less than 9 hours of possible downtime per year — and most of it is scheduled maintenance outside school hours.",
    },
    {
      icon: HardDrive,
      title: "Offline-Aware Devices",
      desc: "If the internet drops momentarily, fingerprint devices cache attendance locally and sync automatically when the connection is restored.",
    },
  ];

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6">
            <Server className="w-4 h-4" />
            System Reliability
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Built to Stay{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Online
            </span>
          </h1>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
            Your school depends on DRAIS every single day. That's why reliability
            is designed into every layer of our architecture — not bolted on
            afterward.
          </p>
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-4">
            How Our Infrastructure Works
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl mx-auto mb-12">
            Every school connects through redundant, monitored cloud servers with
            automatic backup and failover.
          </p>
          <UptimeArchitectureDiagram />
        </div>
      </section>

      {/* Guarantee cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            Our Reliability Guarantees
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
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

      {/* Uptime commitment */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/40 rounded-2xl border border-indigo-200 dark:border-indigo-800 p-10 text-center">
            <div className="text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-3">
              99.9%
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Target Uptime
            </h3>
            <ul className="inline-block text-left space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {[
                "Redundant cloud infrastructure",
                "Automated failover in under 60 seconds",
                "Daily encrypted backups",
                "Proactive 24/7 monitoring",
                "Scheduled maintenance outside school hours",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-14 bg-gray-50 dark:bg-gray-900 text-center">
        <Link
          href="/#questions"
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Questions
        </Link>
      </section>
    </PublicLayout>
  );
}
