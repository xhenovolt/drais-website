"use client";
import React from "react";
import Link from "next/link";
import { Fingerprint, Shield, Star, Zap, Users, ArrowRight, Cloud } from "lucide-react";
import PublicLayout from "@/components/public/PublicLayout";

export default function AboutPage() {
  return (
    <PublicLayout>
      {/* Header */}
      <section className="py-24 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-500/30">
            <Fingerprint className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-extrabold mb-4">About DRAIS</h1>
          <p className="text-xl text-blue-100/80 max-w-xl mx-auto">
            DRAIS is a fingerprint-first school management system designed for the needs of modern African schools.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            We built DRAIS because school attendance management in Africa is still largely manual — paper registers, proxy sign-ins, and end-of-term summaries compiled by hand. This wastes teachers&apos; time, creates accountability gaps, and leaves parents in the dark.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Our mission is to give every school — regardless of size — access to a professional, biometric-powered attendance system that saves time, ensures accountability, and keeps parents informed in real time.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Fingerprint,
                title: "Attendance First",
                desc: "Attendance tracking is not an afterthought — it is the core of DRAIS. Every feature is built around knowing exactly who is in school and when.",
              },
              {
                icon: Shield,
                title: "Data Security",
                desc: "School data is sensitive. DRAIS isolates each school's data completely and uses encrypted connections for all communication.",
              },
              {
                icon: Star,
                title: "Built for Africa",
                desc: "DRAIS is specifically designed for the African school context — including SMS parent notifications, offline-tolerant hardware, and local workflows.",
              },
              {
                icon: Zap,
                title: "Simplicity",
                desc: "Complex systems get abandoned. DRAIS is designed to be used by school administrators with minimal technical training.",
              },
              {
                icon: Cloud,
                title: "Cloud Reliability",
                desc: "Access your school from anywhere. DRAIS runs in the cloud so you never have to install or maintain server hardware.",
              },
              {
                icon: Users,
                title: "Parent Inclusion",
                desc: "Parents are an essential part of school accountability. DRAIS keeps them informed automatically without requiring a parent app.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-10">Why We Built DRAIS</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto text-gray-600 dark:text-gray-400 space-y-5">
            <p>
              Traditional school management software was not built with African schools in mind. Most systems are expensive, complex, and require internet connectivity for every operation. They are designed for schools with dedicated IT departments.
            </p>
            <p>
              DRAIS takes a different approach. We start with the most impactful feature — biometric attendance — and build everything else around it. The system is designed to be set up by a school administrator in a single day, with no technical background required.
            </p>
            <p>
              The fingerprint device connects to the DRAIS cloud and handles attendance automatically. Parents receive SMS notifications. Reports generate in one click. The administration sees live data on any device.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-blue-700 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white mb-5">Join the Schools Using DRAIS</h2>
          <p className="text-indigo-100 text-lg mb-8">
            Set up your school in minutes and start monitoring attendance the smart way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
              Start Free Trial
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/30 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
