"use client";
import React from "react";
import Link from "next/link";
import {
  Fingerprint, Clock, Bell, BarChart3, Shield, Zap,
  Users, CheckCircle2, ArrowRight, Play, Monitor, AlertCircle,
} from "lucide-react";
import PublicLayout from "@/components/public/PublicLayout";

function PlaceholderImage({ label, icon: Icon, className = "" }: { label: string; icon: React.ElementType; className?: string }) {
  return (
    <div className={`rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center py-14 px-8 text-center ${className}`}>
      <Icon className="w-16 h-16 text-indigo-400 mb-3 opacity-60" />
      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">[ {label} ]</p>
      <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">Replace with actual image or screenshot</p>
    </div>
  );
}

export default function AttendanceDemoPage() {
  return (
    <PublicLayout>
      {/* Header */}
      <section className="py-24 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6">
            <Fingerprint className="w-4 h-4" />
            Attendance System Demo
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-5">
            See How Fingerprint Attendance Works
          </h1>
          <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
            Watch how DRAIS transforms morning attendance from a 15-minute manual process to a fully automated, 2-second fingerprint scan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all hover:-translate-y-0.5">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all hover:-translate-y-0.5">
              Request Live Demo
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
              Demo Video
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Watch the fingerprint attendance system in action.
            </p>
          </div>
          {/* YouTube embed placeholder */}
          <div className="rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 aspect-video flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center mb-4 shadow-lg">
              <Play className="w-9 h-9 text-white ml-1" />
            </div>
            <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">[ YouTube Video Embed Here ]</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Replace with: &lt;iframe src=&quot;https://www.youtube.com/embed/VIDEO_ID&quot; /&gt;</p>
          </div>
        </div>
      </section>

      {/* Fingerprint Device Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                The Fingerprint Device
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                DRAIS works with standard biometric fingerprint scanners. Mount the device at your school entrance, and it connects directly to your DRAIS cloud account.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Supports Dahua and ZKTeco fingerprint devices",
                  "Stores up to 10,000 fingerprint templates",
                  "Works offline and syncs when connected",
                  "Wall-mountable, weatherproof design",
                  "Network-connected via LAN or Wi-Fi",
                  "Easy fingerprint enrolment for new students",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <PlaceholderImage label="Fingerprint Scanner Device Photo" icon={Fingerprint} />
          </div>
        </div>
      </section>

      {/* Real-time Dashboard */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <PlaceholderImage label="Attendance Dashboard Screenshot" icon={Monitor} />
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                Real-Time Attendance Dashboard
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                As students arrive, the dashboard updates in real time. See exactly who is present, who is late, and who is absent — all at a glance.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Users, title: "Class-by-Class View", desc: "Filter attendance by class, stream, or individual student." },
                  { icon: Clock, title: "Arrival Timeline", desc: "Chronological list of every student's arrival time for the day." },
                  { icon: AlertCircle, title: "Late Flags", desc: "Students arriving after the configured cut-off time are instantly flagged." },
                  { icon: Monitor, title: "Admin Overview", desc: "School-wide attendance percentage visible from the main dashboard." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Late Detection */}
      <section className="py-20 bg-indigo-50 dark:bg-indigo-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                Automatic Late Arrival Detection
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Set your school&apos;s arrival deadline once. DRAIS automatically marks any student who checks in after that time as &quot;Late&quot; and notifies their parent.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-indigo-100 dark:border-indigo-900/50 space-y-3">
                {[
                  { name: "Amina Kamara", time: "07:45 AM", status: "On Time", color: "text-green-600 dark:text-green-400", dot: "bg-green-500" },
                  { name: "Yusuf Okonkwo", time: "07:59 AM", status: "On Time", color: "text-green-600 dark:text-green-400", dot: "bg-green-500" },
                  { name: "Blessing Adeyemi", time: "08:12 AM", status: "Late", color: "text-yellow-600 dark:text-yellow-400", dot: "bg-yellow-500" },
                  { name: "Mariam Diallo", time: "08:34 AM", status: "Late", color: "text-red-600 dark:text-red-400", dot: "bg-red-500" },
                ].map((s) => (
                  <div key={s.name} className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full ${s.dot}`} />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{s.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-gray-500">{s.time}</span>
                      <span className={`font-semibold ${s.color}`}>{s.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <PlaceholderImage label="Late Arrival Detection Screenshot" icon={Clock} />
          </div>
        </div>
      </section>

      {/* Parent Notification */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <PlaceholderImage label="Parent SMS Notification Screenshot" icon={Bell} />
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                Instant Parent Notifications
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Parents receive an SMS the moment their child checks in. No more morning phone calls asking &quot;did my child arrive?&quot;.
              </p>
              <div className="bg-gray-900 rounded-2xl p-5 font-mono text-sm">
                <p className="text-gray-400 text-xs mb-3">Example SMS message</p>
                <p className="text-green-400">
                  DRAIS ALERT: Abdullah Hassan arrived at Al-Noor Academy at 07:42 AM on Monday 10 March. Have a great day! — DRAIS School System
                </p>
              </div>
              <div className="mt-4 bg-orange-900/20 border border-orange-700/30 rounded-xl p-4">
                <p className="text-orange-300 text-sm font-mono">
                  DRAIS ABSENT ALERT: Fatima did not arrive at school today (10 March). Please contact the school if you have concerns. — DRAIS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attendance Reports */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
              Comprehensive Attendance Reports
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Generate detailed attendance reports for any period — daily, weekly, monthly, or custom range.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: BarChart3, title: "Daily Reports", desc: "Full attendance log for any single day." },
              { icon: Users, title: "Student Reports", desc: "Individual attendance history for any student." },
              { icon: Monitor, title: "Class Reports", desc: "Class-wide attendance overview and trends." },
              { icon: Shield, title: "Export Options", desc: "Download as PDF, Excel, or CSV." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4">
            <PlaceholderImage label="Attendance Report Screenshot" icon={BarChart3} className="w-full max-w-3xl" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-blue-700 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Automate Your School Attendance?
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Start your free trial and have fingerprint attendance running in your school within days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
              Start Free Trial
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/30 transition-colors">
              Request Live Demo
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
