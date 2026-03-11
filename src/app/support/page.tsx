"use client";
import React from "react";
import Link from "next/link";
import PublicLayout from "@/components/public/PublicLayout";
import {
  Headphones,
  MessageCircle,
  Phone,
  Monitor,
  Clock,
  Shield,
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  RefreshCw,
} from "lucide-react";

/* ── SVG: Support Channels Diagram ─────────────────────────────────── */
function SupportChannelsDiagram() {
  return (
    <svg
      viewBox="0 0 800 340"
      className="w-full max-w-3xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="800" height="340" rx="16" className="fill-slate-50 dark:fill-slate-900" />

      {/* Center hub */}
      <circle cx="400" cy="170" r="55" className="fill-violet-100 dark:fill-violet-950/40" stroke="#8b5cf6" strokeWidth="2" />
      <text x="400" y="165" textAnchor="middle" className="fill-violet-700 dark:fill-violet-300" fontSize="13" fontWeight="700">DRAIS</text>
      <text x="400" y="182" textAnchor="middle" className="fill-violet-700 dark:fill-violet-300" fontSize="13" fontWeight="700">Support</text>

      {/* WhatsApp channel */}
      <rect x="40" y="40" width="160" height="90" rx="12" className="fill-white dark:fill-slate-800" stroke="#22c55e" strokeWidth="1.5" />
      <text x="120" y="70" textAnchor="middle" className="fill-green-600 dark:fill-green-400" fontSize="12" fontWeight="700">WhatsApp</text>
      <text x="120" y="90" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Quick questions</text>
      <text x="120" y="105" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Screenshots &amp; videos</text>
      <text x="120" y="122" textAnchor="middle" className="fill-green-600 dark:fill-green-400" fontSize="9" fontWeight="600">Response: &lt; 2 hours</text>
      <line x1="200" y1="85" x2="345" y2="155" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" />

      {/* Phone channel */}
      <rect x="600" y="40" width="160" height="90" rx="12" className="fill-white dark:fill-slate-800" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="680" y="70" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400" fontSize="12" fontWeight="700">Phone Call</text>
      <text x="680" y="90" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Urgent issues</text>
      <text x="680" y="105" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Live troubleshooting</text>
      <text x="680" y="122" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400" fontSize="9" fontWeight="600">Response: Immediate</text>
      <line x1="600" y1="85" x2="455" y2="155" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" />

      {/* Remote Access channel */}
      <rect x="40" y="210" width="160" height="90" rx="12" className="fill-white dark:fill-slate-800" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="120" y="240" textAnchor="middle" className="fill-violet-600 dark:fill-violet-400" fontSize="12" fontWeight="700">Remote Access</text>
      <text x="120" y="260" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">We fix it for you</text>
      <text x="120" y="275" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Screen sharing</text>
      <text x="120" y="292" textAnchor="middle" className="fill-violet-600 dark:fill-violet-400" fontSize="9" fontWeight="600">Response: Same day</text>
      <line x1="200" y1="255" x2="345" y2="190" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 2" />

      {/* On-site channel */}
      <rect x="600" y="210" width="160" height="90" rx="12" className="fill-white dark:fill-slate-800" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="680" y="240" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400" fontSize="12" fontWeight="700">On-Site Visit</text>
      <text x="680" y="260" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Hardware issues</text>
      <text x="680" y="275" textAnchor="middle" className="fill-gray-500 dark:fill-gray-400" fontSize="10">Training refreshers</text>
      <text x="680" y="292" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400" fontSize="9" fontWeight="600">Response: 24-48 hours</text>
      <line x1="600" y1="255" x2="455" y2="190" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />
    </svg>
  );
}

/* ── Page ───────────────────────────────────────────────────────────── */
export default function SupportPage() {
  const supportFeatures = [
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      desc: "Send a message anytime. Get quick answers, share screenshots, or send videos of issues. Most questions answered within 2 hours during business hours.",
    },
    {
      icon: Phone,
      title: "Direct Phone Line",
      desc: "For urgent issues, call us directly. Our support engineers can walk you through troubleshooting in real time.",
    },
    {
      icon: Monitor,
      title: "Remote Access Support",
      desc: "With your permission, we can connect to your system remotely and fix issues directly — no waiting for a technician to visit.",
    },
    {
      icon: Users,
      title: "On-Site Visits",
      desc: "For hardware issues, device replacements, or major updates, our team visits your school in person. Available within 24-48 hours.",
    },
    {
      icon: RefreshCw,
      title: "Free Refresher Training",
      desc: "Staff changed? No problem. We provide free refresher training sessions whenever your school needs them.",
    },
    {
      icon: Zap,
      title: "System Updates",
      desc: "DRAIS is continuously improved. New features and improvements are deployed automatically — no action needed from your side.",
    },
  ];

  const commitments = [
    "Dedicated support contact for every school",
    "WhatsApp response within 2 business hours",
    "Phone support during business hours (Mon-Sat)",
    "Remote access troubleshooting same day",
    "On-site visits within 24-48 hours for critical issues",
    "Free training refreshers whenever needed",
    "No support fees hidden in fine print",
    "Ongoing system updates at no extra cost",
  ];

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-violet-950 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-sm font-medium mb-6">
            <Headphones className="w-4 h-4" />
            Ongoing Support
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            We Don&apos;t Disappear{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              After Setup
            </span>
          </h1>
          <p className="text-xl text-violet-100/80 max-w-2xl mx-auto">
            Every DRAIS school gets dedicated, ongoing support. Whether it&apos;s
            a quick question or a critical issue, our team is reachable and
            responsive.
          </p>
        </div>
      </section>

      {/* Support channels diagram */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-4">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl mx-auto mb-12">
            Choose the channel that works best for your situation. We monitor
            all of them actively.
          </p>
          <SupportChannelsDiagram />
        </div>
      </section>

      {/* Support features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            What Our Support Covers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
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

      {/* Support SLA */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/40 dark:to-purple-950/40 rounded-2xl border border-violet-200 dark:border-violet-800 p-10">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-7 h-7 text-violet-600 dark:text-violet-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Our Support Commitments
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {commitments.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Response time cards */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white text-center mb-10">
            Typical Response Times
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                channel: "WhatsApp",
                time: "< 2 hours",
                note: "Business hours",
                color: "emerald",
              },
              {
                channel: "Phone",
                time: "Immediate",
                note: "Mon–Sat, 8AM–6PM",
                color: "blue",
              },
              {
                channel: "On-Site",
                time: "24–48 hrs",
                note: "Critical issues",
                color: "amber",
              },
            ].map(({ channel, time, note, color }) => (
              <div
                key={channel}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center"
              >
                <p
                  className={`text-3xl font-extrabold mb-1 ${
                    color === "emerald"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : color === "blue"
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-amber-600 dark:text-amber-400"
                  }`}
                >
                  {time}
                </p>
                <p className="font-bold text-gray-900 dark:text-white text-sm">
                  {channel}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-violet-600 dark:bg-violet-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Need Help Right Now?
          </h2>
          <p className="text-violet-100 mb-8 max-w-lg mx-auto">
            Our support team is here for you. Reach out on WhatsApp or schedule
            a call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-700 font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-colors text-lg"
            >
              Contact Support
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-14 bg-gray-50 dark:bg-gray-900 text-center">
        <Link
          href="/#questions"
          className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 font-semibold hover:underline text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Questions
        </Link>
      </section>
    </PublicLayout>
  );
}
