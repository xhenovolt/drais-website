"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Fingerprint, CheckCircle2, XCircle, Clock, Bell, BarChart3,
  Users, ArrowRight, Zap, Monitor, Shield, Smartphone, Eye,
  Star, UserCheck, AlertTriangle, Radio, Server, Cpu, Globe,
  MessageSquare, FileText, ChevronRight, Play,
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

// ─── HERO ─────────────────────────────────────────────────────────────────────
function AttendanceHero() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <Fingerprint className="w-4 h-4" />
          The Core of DRAIS
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
          Attendance That
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">Closes Every Gap</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-2xl text-blue-100/80 font-light max-w-3xl mx-auto mb-10">
          Fingerprint-powered, device-integrated, cloud-connected attendance tracking that gives you <strong className="text-white font-semibold">real-time control</strong> over every student and teacher in your school.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="https://sims.drais.pro" className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-1 text-lg">
            Request a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/demo" className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm text-lg">
            <Play className="w-5 h-5" /> Watch Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── ANIMATED FLOW (MOST IMPORTANT VISUAL) ────────────────────────────────────
function AttendanceFlow() {
  const steps = [
    {
      icon: Fingerprint,
      title: "Student Scans",
      description: "Student places their finger on the biometric device at the school entrance. Identification takes under 2 seconds.",
      color: "bg-indigo-600",
      ring: "ring-indigo-500/30",
      bgLight: "bg-indigo-50 dark:bg-indigo-900/30",
    },
    {
      icon: Zap,
      title: "System Logs",
      description: "DRAIS instantly records the arrival with an exact timestamp. Late arrivals are automatically detected and flagged.",
      color: "bg-blue-600",
      ring: "ring-blue-500/30",
      bgLight: "bg-blue-50 dark:bg-blue-900/30",
    },
    {
      icon: Monitor,
      title: "Admin Sees",
      description: "The attendance dashboard updates in real time. School administrators see who is present, late, or absent — live.",
      color: "bg-purple-600",
      ring: "ring-purple-500/30",
      bgLight: "bg-purple-50 dark:bg-purple-900/30",
    },
    {
      icon: Bell,
      title: "Parent Informed",
      description: "Parents receive an SMS instantly confirming their child has arrived safely. Absence alerts are sent automatically.",
      color: "bg-cyan-600",
      ring: "ring-cyan-500/30",
      bgLight: "bg-cyan-50 dark:bg-cyan-900/30",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">How It Works</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">From Finger Scan to Parent Notification</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The entire process takes seconds. No manual input. No human error. Complete automation.
          </p>
        </motion.div>

        {/* SVG Flow Diagram */}
        <div className="hidden lg:block mb-16">
          <div className="relative max-w-5xl mx-auto">
            <svg className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" /><stop offset="33%" stopColor="#3b82f6" />
                  <stop offset="66%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <rect width="100%" height="4" rx="2" fill="url(#flowGrad)" opacity="0.3" />
              <rect width="100%" height="4" rx="2" fill="url(#flowGrad)" opacity="0.8">
                <animate attributeName="width" from="0%" to="100%" dur="3s" fill="freeze" />
              </rect>
            </svg>
            <div className="relative grid grid-cols-4 gap-8">
              {steps.map(({ icon: Icon, title, description, color, ring, bgLight }, idx) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 mx-auto ${color} rounded-3xl flex items-center justify-center shadow-xl ring-4 ${ring} mb-5 relative z-10`}>
                    <Icon className="w-10 h-10 text-white" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-white dark:bg-gray-800 rounded-full border-2 border-current flex items-center justify-center text-xs font-black text-gray-900 dark:text-white shadow">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile card-based flow */}
        <div className="lg:hidden space-y-4">
          {steps.map(({ icon: Icon, title, description, color, bgLight }, idx) => (
            <motion.div key={title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className={`${bgLight} rounded-2xl p-6 border border-gray-200 dark:border-gray-700 flex gap-4 items-start`}>
              <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center shrink-0 shadow-lg`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-gray-400">STEP {idx + 1}</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MACHINE INTEGRATION ──────────────────────────────────────────────────────
function MachineIntegration() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">Device Integration</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Professional Biometric Hardware, Seamlessly Connected
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              DRAIS integrates with professional-grade fingerprint terminals from Dahua and ZKTeco. The device sits at your school entrance and communicates directly with the DRAIS cloud — no middleman, no delays.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Cpu, text: "Dahua & ZKTeco biometric terminals supported" },
                { icon: Globe, text: "Cloud-connected via school internet — works over WiFi or ethernet" },
                { icon: Server, text: "Device management from the DRAIS dashboard — remote commands" },
                { icon: Shield, text: "Encrypted communication between device and cloud" },
                { icon: Radio, text: "Real-time sync — attendance appears on dashboard in seconds" },
                { icon: Users, text: "Supports thousands of enrolled fingerprints per device" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium pt-2">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border border-purple-200 dark:border-purple-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 text-center">Device ↔ Cloud Architecture</h3>
              
              {/* Architecture diagram */}
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 text-center">
                  <Cpu className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <p className="font-bold text-gray-900 dark:text-white text-sm">Biometric Terminal</p>
                  <p className="text-xs text-gray-500 mt-1">Dahua / ZKTeco at school entrance</p>
                </div>

                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-gradient-to-b from-purple-400 to-blue-400" />
                    <span className="text-xs font-bold text-purple-500 bg-purple-50 dark:bg-purple-900/50 px-2 py-1 rounded">Encrypted Connection</span>
                    <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-indigo-400" />
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 text-center">
                  <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <p className="font-bold text-gray-900 dark:text-white text-sm">DRAIS Cloud</p>
                  <p className="text-xs text-gray-500 mt-1">Processing, storage, notifications</p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Monitor, label: "Admin Dashboard" },
                    { icon: Bell, label: "SMS to Parents" },
                    { icon: FileText, label: "Auto Reports" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700 text-center">
                      <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mx-auto mb-1" />
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── REAL-TIME LOGS ───────────────────────────────────────────────────────────
function RealTimeLogs() {
  const logs = [
    { time: "07:31:04", name: "Amina Nakibuuka", status: "On Time", type: "success" },
    { time: "07:33:17", name: "Hassan Lubega", status: "On Time", type: "success" },
    { time: "07:35:22", name: "Fatima Namuli", status: "On Time", type: "success" },
    { time: "07:41:08", name: "Ibrahim Ssekandi", status: "On Time", type: "success" },
    { time: "07:55:44", name: "Aisha Namutebi", status: "On Time", type: "success" },
    { time: "08:12:31", name: "Yusuf Mwanga", status: "Late", type: "warning" },
    { time: "08:23:15", name: "Safia Nantale", status: "Late", type: "warning" },
    { time: "—", name: "Khalid Ouma", status: "Absent", type: "danger" },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Simulated live log */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-yellow-500/70" /><div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-gray-500 font-medium">Attendance Log — April 11, 2026</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-500 font-semibold">LIVE</span>
                </div>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-700/50">
                {logs.map((log, idx) => (
                  <motion.div
                    key={log.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-gray-400 w-16">{log.time}</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{log.name}</span>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      log.type === "success" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400" :
                      log.type === "warning" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400" :
                      "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"
                    }`}>{log.status}</span>
                  </motion.div>
                ))}
              </div>
              <div className="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Showing 8 of 354 records</span>
                  <div className="flex gap-4">
                    <span className="text-green-500 font-semibold">312 On Time</span>
                    <span className="text-yellow-500 font-semibold">18 Late</span>
                    <span className="text-red-500 font-semibold">24 Absent</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">Live Monitoring</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Real-Time Attendance Logs You Can Trust
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Every fingerprint scan creates an immutable, timestamped record. No teacher can forge it. No student can fake it. The data is absolute.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Exact arrival time recorded to the second",
                "Automatic late detection based on your thresholds",
                "Absent students highlighted immediately after cutoff",
                "Filter by class, date, student, or status",
                "Export to PDF, Excel, or CSV in one click",
                "Historical data available for any date range",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── DEVICE-BASED TRACKING ────────────────────────────────────────────────────
function DeviceTracking() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">Device Management</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Command Your Devices from the Cloud
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Every biometric device connected to DRAIS can be monitored and controlled remotely from your dashboard.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Monitor, title: "Device Status Monitoring", desc: "See which devices are online, offline, or need attention — in real time.", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/30" },
            { icon: Users, title: "Remote Fingerprint Enrollment", desc: "Enroll student fingerprints from the device and sync them to the cloud instantly.", color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-900/30" },
            { icon: Zap, title: "Remote Commands", desc: "Reboot devices, sync data, open doors, or update firmware — all from your dashboard.", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/30" },
            { icon: Shield, title: "Multi-Device Support", desc: "Connect multiple devices across different school buildings or entrances.", color: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/30" },
            { icon: BarChart3, title: "Device Analytics", desc: "Track device usage patterns, peak scan times, and performance metrics.", color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-900/30" },
            { icon: Bell, title: "Alert System", desc: "Get notified instantly when a device goes offline or encounters an error.", color: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-900/30" },
          ].map(({ icon: Icon, title, desc, color, bg }, i) => (
            <motion.div key={title} variants={fadeUp} custom={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── PARENT AWARENESS ─────────────────────────────────────────────────────────
function ParentAwareness() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">Parent Notifications</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Parents Know Their Child Is Safe — Automatically
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              The moment a student scans their fingerprint, their parent receives an SMS. No app required. No internet needed on the parent&apos;s side. Just a simple text message that builds trust.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Arrival SMS: \"Your child Abdullah arrived at school at 7:42 AM\"",
                "Absence SMS: \"Your child was not recorded at school today\"",
                "Late notification: \"Your child arrived late at 8:17 AM\"",
                "Works on any phone — no smartphone required",
                "Delivery tracking — know every SMS was received",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            {/* SMS mockup */}
            <div className="max-w-sm mx-auto">
              <div className="bg-gray-900 rounded-[2rem] p-3 shadow-2xl border border-gray-700">
                <div className="bg-gray-800 rounded-[1.5rem] overflow-hidden">
                  {/* Phone status bar */}
                  <div className="flex items-center justify-between px-6 py-2 bg-gray-900">
                    <span className="text-xs text-gray-400">7:42 AM</span>
                    <div className="w-20 h-5 bg-gray-800 rounded-full" />
                    <span className="text-xs text-gray-400">100%</span>
                  </div>
                  {/* Message header */}
                  <div className="px-5 py-3 bg-gray-800 border-b border-gray-700">
                    <p className="text-sm font-bold text-white">DRAIS School Alert</p>
                    <p className="text-xs text-gray-400">SMS • Now</p>
                  </div>
                  {/* Messages */}
                  <div className="p-4 space-y-3 bg-gray-850">
                    <div className="bg-indigo-600 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm text-white leading-relaxed">
                        ✅ Your child <strong>Abdullah Hassan</strong> has arrived at school at <strong>07:42 AM</strong>. Thank you for choosing our school. — DRAIS
                      </p>
                    </div>
                    <div className="bg-yellow-600 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm text-white leading-relaxed">
                        ⚠️ Your child <strong>Ibrahim Musa</strong> arrived <strong>late</strong> at <strong>08:17 AM</strong>. The school day begins at 8:00 AM. — DRAIS
                      </p>
                    </div>
                    <div className="bg-red-600 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm text-white leading-relaxed">
                        🚨 <strong>Khalid Ouma</strong> was not recorded at school today. Please confirm your child&apos;s absence. — DRAIS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── COMPARISON TABLE ─────────────────────────────────────────────────────────
function ComparisonSection() {
  const rows = [
    { feature: "Attendance recording time", manual: "15+ minutes", drais: "Under 2 seconds" },
    { feature: "Proxy attendance possible", manual: "Yes (anyone can sign)", drais: "Impossible (fingerprint)" },
    { feature: "Parent notification", manual: "None", drais: "Instant SMS" },
    { feature: "Reports generation", manual: "Hours of manual work", drais: "One click" },
    { feature: "Late detection", manual: "Teacher remembers (maybe)", drais: "Automatic" },
    { feature: "Data accuracy", manual: "Questionable", drais: "100% tamper-proof" },
    { feature: "Teacher accountability", manual: "Honour system", drais: "Tracked & verified" },
    { feature: "Historical data access", manual: "Search through papers", drais: "Instant digital search" },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Manual vs. DRAIS</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">The difference is night and day.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800">
          <div className="grid grid-cols-3 bg-gray-100 dark:bg-gray-900 font-bold text-sm">
            <div className="px-5 py-4 text-gray-700 dark:text-gray-300">Feature</div>
            <div className="px-5 py-4 text-red-600 dark:text-red-400 text-center">Manual System</div>
            <div className="px-5 py-4 text-green-600 dark:text-green-400 text-center">DRAIS</div>
          </div>
          {rows.map(({ feature, manual, drais }, idx) => (
            <div key={feature} className={`grid grid-cols-3 text-sm ${idx % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50/50 dark:bg-gray-750"} border-t border-gray-100 dark:border-gray-700/50`}>
              <div className="px-5 py-4 font-medium text-gray-900 dark:text-white">{feature}</div>
              <div className="px-5 py-4 text-center text-gray-500 flex items-center justify-center gap-1.5">
                <XCircle className="w-4 h-4 text-red-400" /> {manual}
              </div>
              <div className="px-5 py-4 text-center text-gray-900 dark:text-white font-semibold flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> {drais}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function AttendanceCTA() {
  return (
    <section className="py-28 bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <Fingerprint className="w-16 h-16 text-white/30 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Stop Guessing. Start Knowing.
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            DRAIS attendance tracking is the most powerful tool available for Ugandan schools. See it in action and make the decision that transforms your school.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://sims.drais.pro" className="group flex items-center gap-2 px-10 py-5 bg-white text-indigo-700 font-bold rounded-xl shadow-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 text-lg">
              Book a Live Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/pricing" className="flex items-center gap-2 px-10 py-5 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/30 transition-all duration-300 hover:-translate-y-1 text-lg">
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function AttendancePage() {
  return (
    <PublicLayout>
      <AttendanceHero />
      <AttendanceFlow />
      <MachineIntegration />
      <RealTimeLogs />
      <DeviceTracking />
      <ParentAwareness />
      <ComparisonSection />
      <AttendanceCTA />
    </PublicLayout>
  );
}
