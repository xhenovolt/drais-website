"use client";
import React from "react";
import Link from "next/link";
import {
  Fingerprint, CheckCircle2, ArrowRight, Play, Monitor,
  Bell, Users, Eye, Shield, Zap, Clock, BarChart3, Star,
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

export default function DemoPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-500/10 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/15 border border-red-400/30 text-red-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Play className="w-4 h-4" /> Live System Demo
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl font-extrabold mb-5">
            See DRAIS In Action
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl text-blue-100/80 max-w-2xl mx-auto">
            Watch how schools across Uganda use DRAIS to track attendance, manage students, and communicate with parents — all from one platform.
          </motion.p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* YouTube embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl mb-16"
          >
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/xMNjDNg8iKA?rel=0&modestbranding=1"
                title="DRAIS School Management System Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* What You're Seeing */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
              What You&apos;re Seeing in This Demo
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Fingerprint,
                  title: "Fingerprint Attendance in Real Time",
                  description: "Watch a student place their finger on the biometric device and see their attendance recorded instantly on the dashboard. The entire process takes under 2 seconds.",
                },
                {
                  icon: Monitor,
                  title: "Live Administrator Dashboard",
                  description: "See the dashboard that school directors use every day — real-time attendance counts, late arrivals flagged in yellow, absent students in red, all updating live.",
                },
                {
                  icon: Bell,
                  title: "Automatic Parent Notifications",
                  description: "The moment a student scans, their parent receives an SMS. Watch how the system sends arrival confirmations, late alerts, and absence notifications automatically.",
                },
                {
                  icon: Users,
                  title: "Complete Student Management",
                  description: "Student profiles with photos, guardian details, class assignments, attendance history, exam results — everything a school needs in one place.",
                },
              ].map(({ icon: Icon, title, description }, i) => (
                <motion.div key={title} variants={fadeUp} custom={i}
                  className="bg-gray-50 dark:bg-gray-800/60 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why This Matters */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
              Why This Matters for Your School
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-center">
              Every feature you see in this demo is solving a problem that school directors deal with every single day.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Eye, title: "Total Visibility", desc: "Know exactly who is in school at any moment. No more guessing or relying on teacher reports." },
                { icon: Shield, title: "Absolute Accountability", desc: "Fingerprints can't be faked. Every record is tamper-proof with an exact timestamp." },
                { icon: Zap, title: "Instant Automation", desc: "Reports, notifications, and alerts happen automatically. No manual work required." },
                { icon: Clock, title: "Hours Saved Daily", desc: "What used to take 15+ minutes per class now happens in seconds — automatically." },
                { icon: BarChart3, title: "Data-Driven Decisions", desc: "Real-time analytics help you identify attendance patterns and take action early." },
                { icon: Star, title: "Parent Trust", desc: "Parents receive proof that their child is safe at school. Satisfaction and trust increase." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} variants={fadeUp} custom={i}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems This Solves */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Problems DRAIS Eliminates
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Every one of these problems disappears the day you install DRAIS.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
            {[
              "Students arriving late without anyone knowing",
              "Teachers marking attendance carelessly or not at all",
              "Parents with no visibility into their child's daily attendance",
              "Hours wasted compiling manual attendance reports",
              "Paper registers getting lost, damaged, or falsified",
              "No data to identify attendance trends or at-risk students",
              "Inability to prove attendance records to parents or inspectors",
              "Communication gaps between the school and parents",
            ].map((problem, i) => (
              <motion.div key={problem} variants={fadeUp} custom={i}
                className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium line-through decoration-red-400 decoration-2">{problem}</span>
                <span className="ml-auto text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2.5 py-1 rounded-full shrink-0">SOLVED</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to See DRAIS in Your School?
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Book a live demo tailored to your school&apos;s specific needs. Our team will walk you through every feature.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://sims.drais.pro" className="group flex items-center gap-2 px-10 py-5 bg-white text-indigo-700 font-bold rounded-xl shadow-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 text-lg">
                Book a Live Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/pricing" className="flex items-center gap-2 px-10 py-5 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/30 transition-all duration-300 hover:-translate-y-1 text-lg">
                View Pricing Plans
              </Link>
            </div>
            <p className="mt-8 text-indigo-200 text-sm">No commitment · Free consultation · See it working live</p>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}
