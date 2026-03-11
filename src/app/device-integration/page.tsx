"use client";
import React from "react";
import Link from "next/link";
import PublicLayout from "@/components/public/PublicLayout";
import {
  Cpu,
  Fingerprint,
  Wifi,
  WifiOff,
  RefreshCw,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Settings,
  Smartphone,
  Monitor,
} from "lucide-react";

/* ── SVG: Device-to-Dashboard Flow ─────────────────────────────────── */
function DeviceFlowDiagram() {
  return (
    <svg
      viewBox="0 0 900 300"
      className="w-full max-w-4xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="900" height="300" rx="16" className="fill-slate-50 dark:fill-slate-900" />

      {/* Step 1: Fingerprint Device */}
      <rect x="30" y="80" width="170" height="140" rx="12" className="fill-white dark:fill-slate-800" stroke="#f59e0b" strokeWidth="2" />
      <text x="115" y="115" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400" fontSize="12" fontWeight="700">Fingerprint Device</text>
      <rect x="65" y="130" width="100" height="50" rx="8" className="fill-amber-50 dark:fill-amber-950/30" stroke="#f59e0b" strokeWidth="1" />
      <text x="115" y="152" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400" fontSize="10">Student scans</text>
      <text x="115" y="168" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400" fontSize="10">finger here</text>
      <circle cx="115" cy="200" r="6" className="fill-green-500" />
      <text x="115" y="215" textAnchor="middle" className="fill-green-600 dark:fill-green-400" fontSize="9" fontWeight="600">2 sec</text>

      {/* Arrow 1 */}
      <line x1="200" y1="150" x2="270" y2="150" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-d)" />
      <text x="235" y="140" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="9">Encrypted</text>

      {/* Step 2: DRAIS Cloud */}
      <rect x="270" y="60" width="200" height="180" rx="12" className="fill-white dark:fill-slate-800" stroke="#6366f1" strokeWidth="2" />
      <text x="370" y="95" textAnchor="middle" className="fill-indigo-600 dark:fill-indigo-400" fontSize="12" fontWeight="700">DRAIS Cloud</text>
      <rect x="295" y="110" width="150" height="35" rx="6" className="fill-indigo-50 dark:fill-indigo-950/30" stroke="#6366f1" strokeWidth="1" />
      <text x="370" y="132" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400" fontSize="10">Identity Match</text>
      <rect x="295" y="155" width="150" height="35" rx="6" className="fill-indigo-50 dark:fill-indigo-950/30" stroke="#6366f1" strokeWidth="1" />
      <text x="370" y="177" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400" fontSize="10">Record Attendance</text>
      <rect x="295" y="200" width="150" height="25" rx="6" className="fill-green-50 dark:fill-green-950/30" stroke="#10b981" strokeWidth="1" />
      <text x="370" y="217" textAnchor="middle" className="fill-green-600 dark:fill-green-400" fontSize="10">Trigger SMS</text>

      {/* Arrow 2 → Dashboard */}
      <line x1="470" y1="120" x2="540" y2="120" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-d2)" />
      <text x="505" y="110" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="9">Real-time</text>

      {/* Arrow 2 → Parent */}
      <line x1="470" y1="212" x2="540" y2="212" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-d3)" />
      <text x="505" y="202" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="9">SMS</text>

      {/* Step 3: Admin Dashboard */}
      <rect x="540" y="60" width="170" height="100" rx="12" className="fill-white dark:fill-slate-800" stroke="#3b82f6" strokeWidth="2" />
      <text x="625" y="95" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400" fontSize="12" fontWeight="700">Admin Dashboard</text>
      <text x="625" y="118" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Live attendance</text>
      <text x="625" y="135" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Reports & alerts</text>

      {/* Step 4: Parent Phone */}
      <rect x="540" y="180" width="170" height="80" rx="12" className="fill-white dark:fill-slate-800" stroke="#10b981" strokeWidth="2" />
      <text x="625" y="210" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400" fontSize="12" fontWeight="700">Parent&apos;s Phone</text>
      <text x="625" y="232" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">&quot;Your child arrived at 7:42&quot;</text>

      {/* Offline cache note */}
      <rect x="720" y="60" width="160" height="80" rx="10" className="fill-yellow-50 dark:fill-yellow-950/20" stroke="#eab308" strokeWidth="1" strokeDasharray="4 2" />
      <text x="800" y="85" textAnchor="middle" className="fill-yellow-700 dark:fill-yellow-400" fontSize="10" fontWeight="600">Offline Fallback</text>
      <text x="800" y="102" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="9">Device caches data</text>
      <text x="800" y="117" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="9">locally &amp; syncs later</text>
      <text x="800" y="132" textAnchor="middle" className="fill-green-600 dark:fill-green-400" fontSize="9">No data lost ✓</text>

      <defs>
        <marker id="arrow-d" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#f59e0b" />
        </marker>
        <marker id="arrow-d2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#6366f1" />
        </marker>
        <marker id="arrow-d3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#10b981" />
        </marker>
      </defs>
    </svg>
  );
}

/* ── Page ───────────────────────────────────────────────────────────── */
export default function DeviceIntegrationPage() {
  const scenarios = [
    {
      icon: WifiOff,
      title: "Internet Goes Down",
      scenario: "The school's internet drops during morning arrivals.",
      solution:
        "The fingerprint device continues capturing attendance locally. Once the connection is restored, all records sync automatically to the cloud. No data is lost.",
      color: "amber",
    },
    {
      icon: AlertTriangle,
      title: "Device Hardware Failure",
      scenario: "The fingerprint scanner stops responding or is damaged.",
      solution:
        "Our support team ships a replacement device or guides you through fallback manual entry options. Meanwhile, teachers can record attendance via the admin dashboard.",
      color: "red",
    },
    {
      icon: Fingerprint,
      title: "Student's Fingerprint Not Recognized",
      scenario: "A student's finger is wet, dirty, or was never enrolled.",
      solution:
        "The device prompts a retry. If enrollment is missing, staff can quickly enrol the student in under 30 seconds. Dashboard-based manual attendance is also available.",
      color: "blue",
    },
    {
      icon: RefreshCw,
      title: "Power Outage",
      scenario: "A power cut hits the school during school hours.",
      solution:
        "The biometric device has built-in battery backup that lasts hours. Attendance captured during the outage syncs as soon as power and internet are restored.",
      color: "purple",
    },
  ];

  const compatibleDevices = [
    "Dahua ASI6214J face & fingerprint terminal",
    "ZKTeco fingerprint standalone readers",
    "USB-connected fingerprint scanners",
    "Custom API-compatible devices",
  ];

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-amber-950 via-orange-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-sm font-medium mb-6">
            <Cpu className="w-4 h-4" />
            Device Integration
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            What Happens If the{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Device Fails?
            </span>
          </h1>
          <p className="text-xl text-amber-100/80 max-w-2xl mx-auto">
            Nothing stops attendance. DRAIS is designed with multiple fallback
            layers so your school never misses a record — even when hardware
            has issues.
          </p>
        </div>
      </section>

      {/* Flow diagram */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-4">
            Fingerprint → System → Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl mx-auto mb-12">
            See how a single fingerprint scan flows through the system to record
            attendance, alert parents, and update dashboards.
          </p>
          <DeviceFlowDiagram />
        </div>
      </section>

      {/* Failure scenarios */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-4">
            Failure Scenarios & How We Handle Them
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl mx-auto mb-12">
            We&apos;ve thought through every common failure point so your school
            doesn&apos;t have to.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {scenarios.map(({ icon: Icon, title, scenario, solution, color }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      color === "amber"
                        ? "bg-amber-50 dark:bg-amber-900/30"
                        : color === "red"
                        ? "bg-red-50 dark:bg-red-900/30"
                        : color === "blue"
                        ? "bg-blue-50 dark:bg-blue-900/30"
                        : "bg-purple-50 dark:bg-purple-900/30"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        color === "amber"
                          ? "text-amber-600 dark:text-amber-400"
                          : color === "red"
                          ? "text-red-600 dark:text-red-400"
                          : color === "blue"
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-purple-600 dark:text-purple-400"
                      }`}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                </div>
                <div className="mb-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-lg p-3">
                  <p className="text-sm text-red-800 dark:text-red-300">
                    <span className="font-semibold">Scenario: </span>
                    {scenario}
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50 rounded-lg p-3">
                  <p className="text-sm text-green-800 dark:text-green-300">
                    <span className="font-semibold">Solution: </span>
                    {solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible devices */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                Compatible Devices
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                DRAIS works with a range of biometric hardware. We help you
                choose the best option for your school&apos;s size, budget, and
                environment.
              </p>
              <ul className="space-y-3">
                {compatibleDevices.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            {/* Illustration */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 rounded-3xl border border-amber-200 dark:border-amber-800" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                  <Fingerprint className="w-16 h-16 text-amber-600 dark:text-amber-400" />
                  <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                    <ArrowRight className="w-4 h-4" />
                    <Monitor className="w-8 h-8" />
                    <ArrowRight className="w-4 h-4" />
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                    Scan → Dashboard → Parent SMS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-14 bg-gray-50 dark:bg-gray-900 text-center">
        <Link
          href="/#questions"
          className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold hover:underline text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Questions
        </Link>
      </section>
    </PublicLayout>
  );
}
