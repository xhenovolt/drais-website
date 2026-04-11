"use client";
import React from "react";
import Link from "next/link";
import {
  Fingerprint, Shield, Star, Zap, Users, ArrowRight, Cloud,
  Eye, Target, Heart, Globe, CheckCircle2,
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
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function AboutPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-28 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-indigo-500/30">
            <Fingerprint className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl font-extrabold mb-5">
            About DRAIS
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl text-blue-100/80 max-w-2xl mx-auto">
            An attendance-first intelligence system built to give school directors the control and visibility they&apos;ve always needed.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                Every School Deserves Real-Time Visibility
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We built DRAIS because school attendance management in Africa is still largely manual — paper registers, proxy sign-ins, and end-of-term summaries compiled by hand. This wastes time, creates accountability gaps, and leaves parents in the dark.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Our mission is to give every school — regardless of size — access to a professional, biometric-powered system that saves time, ensures accountability, and keeps parents informed in real time.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-3xl p-8 border border-indigo-200 dark:border-indigo-800">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "37+", label: "Schools Supported" },
                    { value: "10,000+", label: "Students Managed" },
                    { value: "500K+", label: "Attendance Records" },
                    { value: "5+", label: "Education Programs" },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center">
                      <p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">{value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">What We Stand For</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Every decision we make is guided by these principles.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Fingerprint, title: "Attendance First", desc: "Attendance tracking is the core of DRAIS. Every feature is built around knowing exactly who is in school and when." },
              { icon: Shield, title: "Data Security", desc: "School data is sensitive. DRAIS isolates each school's data completely and uses encrypted connections for all communication." },
              { icon: Star, title: "Built for Africa", desc: "Designed specifically for African schools — SMS notifications, offline-tolerant hardware, and local workflows." },
              { icon: Zap, title: "Simplicity", desc: "Complex systems get abandoned. DRAIS is designed to be used by administrators with minimal technical training." },
              { icon: Cloud, title: "Cloud Reliability", desc: "Access your school from anywhere. DRAIS runs in the cloud — no server hardware to install or maintain." },
              { icon: Users, title: "Parent Inclusion", desc: "Parents are essential to accountability. DRAIS keeps them informed automatically without requiring an app." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} variants={fadeUp} custom={i}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why We Built DRAIS */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-10">Why We Built DRAIS</h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Traditional school management software was not built with African schools in mind. Most systems are expensive, complex, and require dedicated IT departments. They are designed for schools that already have strong infrastructure.
              </p>
              <p>
                DRAIS takes a fundamentally different approach. We start with the most impactful feature — <strong className="text-gray-900 dark:text-white">biometric attendance</strong> — and build everything else around it. The system is designed to be set up by a school administrator in a single day, with no technical background required.
              </p>
              <p>
                The fingerprint device connects to the DRAIS cloud and handles attendance automatically. Parents receive SMS notifications. Reports generate in one click. The administration sees live data on any device. <strong className="text-gray-900 dark:text-white">That&apos;s the vision — attendance-first intelligence.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Xhenvolt */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">A Product Of</p>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
              <a href="https://xhenvolt.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Xhenvolt
              </a>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Xhenvolt builds technology solutions for African institutions. DRAIS is our flagship product — designed to solve the most critical challenge facing schools: knowing who is in school, in real time.
            </p>
            <Link href="https://sims.drais.pro" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg">
              Get In Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">Join the Schools Using DRAIS</h2>
            <p className="text-indigo-100 text-lg mb-8">Set up your school in a single day and start monitoring attendance the smart way.</p>
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