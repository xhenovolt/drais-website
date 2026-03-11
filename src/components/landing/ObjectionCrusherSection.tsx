"use client";
import React from "react";
import Link from "next/link";
import {
  Server,
  Shield,
  Cpu,
  GraduationCap,
  Headphones,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

const objections = [
  {
    icon: Server,
    question: "Is the system reliable?",
    answer:
      "DRAIS runs on enterprise-grade cloud infrastructure with 99.9% uptime — your attendance data is always available.",
    href: "/reliability",
    color: "indigo",
    gradient: "from-indigo-500 to-blue-600",
    bgLight: "bg-indigo-50 dark:bg-indigo-950/30",
    borderLight: "border-indigo-200 dark:border-indigo-800/50",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/50",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: GraduationCap,
    question: "Will our staff manage it easily?",
    answer:
      "We provide hands-on training for every staff member. Most schools are fully operational within a single day.",
    href: "/training",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50 dark:bg-emerald-950/30",
    borderLight: "border-emerald-200 dark:border-emerald-800/50",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Cpu,
    question: "What happens if the biometric device fails?",
    answer:
      "Built-in fallback modes ensure attendance continues uninterrupted. We also provide same-day device support.",
    href: "/device-integration",
    color: "amber",
    gradient: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50 dark:bg-amber-950/30",
    borderLight: "border-amber-200 dark:border-amber-800/50",
    iconBg: "bg-amber-100 dark:bg-amber-900/50",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: Shield,
    question: "Is our school data secure?",
    answer:
      "Every school's data is fully isolated with encryption at rest and in transit. Role-based access keeps information private.",
    href: "/security",
    color: "rose",
    gradient: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50 dark:bg-rose-950/30",
    borderLight: "border-rose-200 dark:border-rose-800/50",
    iconBg: "bg-rose-100 dark:bg-rose-900/50",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  {
    icon: Headphones,
    question: "What happens if we need help later?",
    answer:
      "Our dedicated support team responds within hours — via WhatsApp, phone, or remote access. We don't disappear after setup.",
    href: "/support",
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50 dark:bg-violet-950/30",
    borderLight: "border-violet-200 dark:border-violet-800/50",
    iconBg: "bg-violet-100 dark:bg-violet-900/50",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
];

export default function ObjectionCrusherSection() {
  return (
    <section id="questions" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="objection-grid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#objection-grid)"
            className="text-gray-900 dark:text-white"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium mb-5">
            <HelpCircle className="w-4 h-4" />
            Common Concerns, Honest Answers
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Questions Schools Ask Before{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Choosing DRAIS
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Every school has concerns before adopting new technology. Here&apos;s
            how we&apos;ve already addressed the most common ones.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {objections.map(
            ({
              icon: Icon,
              question,
              answer,
              href,
              bgLight,
              borderLight,
              iconBg,
              iconColor,
            }) => (
              <div
                key={question}
                className={`group relative rounded-2xl p-6 border ${bgLight} ${borderLight} transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>

                {/* Question */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {question}
                </h3>

                {/* Short answer */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-4">
                  {answer}
                </p>

                {/* Learn more link */}
                <Link
                  href={href}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${iconColor} group-hover:underline transition-colors`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            )
          )}
        </div>

        {/* Bottom reassurance */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Still have questions?{" "}
            <Link
              href="/contact"
              className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            >
              Talk to our team
            </Link>{" "}
            — we&apos;re happy to walk you through everything.
          </p>
        </div>
      </div>
    </section>
  );
}
