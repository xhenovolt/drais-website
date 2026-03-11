"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Fingerprint, Star, Zap } from "lucide-react";
import PublicLayout from "@/components/public/PublicLayout";

const plans = [
  {
    name: "Professional",
    tagline: "Ideal for small to medium schools getting started",
    installFee: "1,000,000",
    annualFee: "200,000",
    highlight: false,
    badge: null,
    features: [
      "Fingerprint attendance system",
      "Real-time parent SMS alerts",
      "Student information system",
      "Up to 500 students",
      "Daily attendance reports",
      "Basic reporting & dashboards",
      "Email & phone support",
    ],
    cta: "Get Started",
    ctaHref: "/contact",
  },
  {
    name: "Premium",
    tagline: "Complete school management for growing institutions",
    installFee: "1,800,000",
    annualFee: "350,000",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Professional",
      "Full exam & report card system",
      "Advanced analytics & dashboards",
      "Up to 2,000 students",
      "Mobile app access",
      "Parent communication portal",
      "SMS broadcast messaging",
      "Priority support",
    ],
    cta: "Get Started",
    ctaHref: "/contact",
  },
  {
    name: "Gold",
    tagline: "Enterprise-grade for large schools & multi-campus",
    installFee: "2,500,000",
    annualFee: "500,000",
    highlight: false,
    badge: null,
    features: [
      "Everything in Premium",
      "Unlimited students",
      "Multi-campus support",
      "Custom integrations",
      "Dedicated account manager",
      "On-site setup assistance",
      "Custom reporting",
      "24/7 dedicated support",
    ],
    cta: "Get Started",
    ctaHref: "/contact",
  },
];

const faqs = [
  {
    q: "How does the free trial work?",
    a: "Create your school account and start immediately. You can explore all features during the trial period with no credit card required.",
  },
  {
    q: "What fingerprint devices are compatible?",
    a: "DRAIS supports Dahua biometric terminals and ZKTeco fingerprint readers. Our team will guide you on compatible hardware during onboarding.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes. You can upgrade your plan at any time as your school grows. Data and settings carry over seamlessly.",
  },
  {
    q: "Is the data secure?",
    a: "Absolutely. Each school's data is completely isolated from other schools. We use encrypted connections and secure cloud infrastructure.",
  },
  {
    q: "Do you offer on-site setup assistance?",
    a: "Enterprise plan customers receive on-site setup assistance. All other plans include comprehensive online documentation and support.",
  },
];

export default function PricingPage() {
  return (
    <PublicLayout>
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6">
            <Fingerprint className="w-4 h-4" />
            Simple, transparent pricing
          </div>
          <h1 className="text-5xl font-extrabold mb-4">
            Pricing Built for Schools
          </h1>
          <p className="text-xl text-blue-100/80 max-w-xl mx-auto">
            Choose the plan that fits your school size. All plans include fingerprint attendance as the core feature.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map(({ name, tagline, installFee, annualFee, highlight, badge, features, cta, ctaHref }) => (
              <div
                key={name}
                className={`rounded-2xl p-8 border relative transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                  highlight
                    ? "bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-500/20"
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                }`}
              >
                {badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow">
                    {badge}
                  </span>
                )}

                <div className="mb-6">
                  <h2 className={`text-2xl font-extrabold mb-1 ${highlight ? "text-white" : "text-gray-900 dark:text-white"}`}>
                    {name}
                  </h2>
                  <p className={`text-sm ${highlight ? "text-indigo-100" : "text-gray-500 dark:text-gray-400"}`}>
                    {tagline}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-8 space-y-3">
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${highlight ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>
                      Installation Fee (one-time)
                    </span>
                    <div className={`text-3xl font-extrabold ${highlight ? "text-white" : "text-gray-900 dark:text-white"}`}>
                      UGX {installFee}
                    </div>
                  </div>
                  <div className={`pt-3 border-t ${highlight ? "border-indigo-400/40" : "border-gray-200 dark:border-gray-600"}`}>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${highlight ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>
                      Annual Subscription
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-2xl font-extrabold ${highlight ? "text-emerald-300" : "text-emerald-600 dark:text-emerald-400"}`}>
                        UGX {annualFee}
                      </span>
                      <span className={`text-sm ${highlight ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>
                        / year
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${highlight ? "text-indigo-50" : "text-gray-700 dark:text-gray-300"}`}>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${highlight ? "text-indigo-200" : "text-green-500"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={ctaHref}
                  className={`block w-full text-center px-6 py-3 rounded-xl font-bold transition-colors ${
                    highlight
                      ? "bg-white text-indigo-700 hover:bg-gray-50"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white"
                  }`}
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
            All prices are in Ugandan Shillings (UGX). Installation fee is a one-time payment. Annual subscription renews yearly.
          </p>
        </div>
      </section>

      {/* Feature comparison note */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            All plans include core attendance features
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
            Fingerprint Attendance Is Always Included
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
            Regardless of plan, every DRAIS school gets: biometric attendance, real-time dashboard, parent notifications, and attendance reports. Plans differ in school size, features, and support level.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-gray-200 dark:border-gray-800 pb-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{q}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Not sure which plan is right for you?
          </h2>
          <p className="text-indigo-100 mb-8">
            Contact us and we&apos;ll recommend the best plan for your school.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
            Talk to us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
