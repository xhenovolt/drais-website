"use client";
import React from "react";
import Link from "next/link";
import PublicLayout from "@/components/public/PublicLayout";
import {
  Shield,
  Lock,
  Eye,
  Users,
  Database,
  KeyRound,
  ArrowLeft,
  CheckCircle2,
  Layers,
  ShieldCheck,
} from "lucide-react";

/* ── SVG: Security Layers Diagram ──────────────────────────────────── */
function SecurityLayersDiagram() {
  return (
    <svg
      viewBox="0 0 800 420"
      className="w-full max-w-3xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="800" height="420" rx="16" className="fill-slate-50 dark:fill-slate-900" />

      {/* Title */}
      <text x="400" y="35" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200" fontSize="14" fontWeight="700">Security Access Layers</text>

      {/* Outer ring — Network */}
      <rect x="80" y="55" width="640" height="340" rx="16" className="fill-rose-50 dark:fill-rose-950/20" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="120" y="78" className="fill-rose-600 dark:fill-rose-400" fontSize="11" fontWeight="600">Layer 1: Network Firewall &amp; SSL/TLS</text>

      {/* Auth ring */}
      <rect x="130" y="95" width="540" height="280" rx="14" className="fill-amber-50 dark:fill-amber-950/20" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="170" y="118" className="fill-amber-600 dark:fill-amber-400" fontSize="11" fontWeight="600">Layer 2: Authentication &amp; Session Management</text>

      {/* Role ring */}
      <rect x="180" y="135" width="440" height="220" rx="12" className="fill-blue-50 dark:fill-blue-950/20" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="220" y="158" className="fill-blue-600 dark:fill-blue-400" fontSize="11" fontWeight="600">Layer 3: Role-Based Access Control</text>

      {/* Tenant isolation ring */}
      <rect x="230" y="175" width="340" height="160" rx="10" className="fill-emerald-50 dark:fill-emerald-950/20" stroke="#10b981" strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="270" y="198" className="fill-emerald-600 dark:fill-emerald-400" fontSize="11" fontWeight="600">Layer 4: Tenant Data Isolation</text>

      {/* Core data */}
      <rect x="290" y="215" width="220" height="95" rx="10" className="fill-white dark:fill-slate-800" stroke="#8b5cf6" strokeWidth="2" />
      <text x="400" y="248" textAnchor="middle" className="fill-violet-700 dark:fill-violet-300" fontSize="13" fontWeight="700">Your School Data</text>
      <text x="400" y="268" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Encrypted at Rest &amp; In Transit</text>
      <text x="400" y="290" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Isolated per School</text>

      {/* Shield icon placeholder */}
      <circle cx="400" cy="390" r="0" />
    </svg>
  );
}

/* ── Page ───────────────────────────────────────────────────────────── */
export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      desc: "All data transmitted between fingerprint devices, dashboards, and servers is encrypted using TLS 1.3. Data at rest is encrypted with AES-256.",
    },
    {
      icon: Layers,
      title: "Multi-Tenant Isolation",
      desc: "Each school's data is completely isolated. School A cannot see, modify, or access School B's records under any circumstances.",
    },
    {
      icon: KeyRound,
      title: "Role-Based Access Control",
      desc: "Administrators, teachers, accountants, and parents each see only what they're authorized to see. Permissions are granular and customizable.",
    },
    {
      icon: Eye,
      title: "Audit Logging",
      desc: "Every sensitive action — logins, data changes, exports — is recorded in an immutable audit log. You always know who did what and when.",
    },
    {
      icon: Users,
      title: "Secure Authentication",
      desc: "JWT-based sessions with automatic expiry. Passwords are hashed with bcrypt. Inactive sessions are terminated to prevent unauthorized access.",
    },
    {
      icon: Database,
      title: "Secure Backups",
      desc: "Daily encrypted database backups stored in geographically separate locations. Restoration can be completed in minutes if ever needed.",
    },
  ];

  const compliancePoints = [
    "SSL/TLS encryption on all connections",
    "No school can access another school's data",
    "Role-based permissions with least-privilege principle",
    "Password hashing with bcrypt (not plain text)",
    "Session timeout after inactivity",
    "Comprehensive audit logs for all sensitive operations",
    "Regular security reviews and updates",
  ];

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-rose-950 via-slate-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/15 border border-rose-400/30 text-rose-300 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Data Security
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Your School Data Is{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Fully Protected
            </span>
          </h1>
          <p className="text-xl text-rose-100/80 max-w-2xl mx-auto">
            Student records, financial data, and attendance logs are sensitive.
            DRAIS protects them with multiple layers of enterprise-grade security.
          </p>
        </div>
      </section>

      {/* Security layers diagram */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-4">
            Defense in Depth
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl mx-auto mb-12">
            Your data sits behind four concentric layers of protection. An
            attacker would need to breach every single one.
          </p>
          <SecurityLayersDiagram />
        </div>
      </section>

      {/* Feature cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            Security Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-rose-600 dark:text-rose-400" />
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

      {/* Compliance checklist */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/40 dark:to-pink-950/40 rounded-2xl border border-rose-200 dark:border-rose-800 p-10">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-7 h-7 text-rose-600 dark:text-rose-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Security Checklist
              </h3>
            </div>
            <ul className="space-y-3">
              {compliancePoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                  {point}
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
          className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold hover:underline text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Questions
        </Link>
      </section>
    </PublicLayout>
  );
}
