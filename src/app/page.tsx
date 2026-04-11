"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Fingerprint, CheckCircle2, XCircle, Clock, Bell, BarChart3,
  Users, GraduationCap, MessageSquare, Shield, Zap, ArrowRight,
  Play, Star, Monitor, UserCheck, AlertTriangle, Eye, ChevronRight,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PublicLayout from "@/components/public/PublicLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

// ─── 1. HERO ──────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g1" cx="30%" cy="40%" r="60%"><stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" /><stop offset="100%" stopColor="transparent" /></radialGradient>
            <radialGradient id="g2" cx="70%" cy="60%" r="50%"><stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" /><stop offset="100%" stopColor="transparent" /></radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g1)" /><rect width="100%" height="100%" fill="url(#g2)" />
        </svg>
      </div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <Fingerprint className="w-4 h-4" />
          An Attendance-First Intelligence System for Schools
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
          Finally Know Who Is In School<br />
          <span className="bg-gradient-to-r from-indigo-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">— In Real Time</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-2xl text-blue-100/80 font-light max-w-3xl mx-auto mb-10">
          DRAIS gives school directors <strong className="text-white font-semibold">real-time attendance visibility</strong>, automated parent notifications, and total operational control — powered by fingerprint technology.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="https://sims.drais.pro" className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-1 text-lg">
            Request Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/attendance" className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm text-lg">
            <Eye className="w-5 h-5" /> See Attendance System
          </Link>
        </motion.div>

        {/* Live dashboard mockup */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-gray-900/80 backdrop-blur">
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-yellow-500/70" /><div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-gray-500">DRAIS Attendance Dashboard — Live View</span>
          </div>
          <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Present", value: "312", color: "text-green-400", icon: UserCheck },
              { label: "Late", value: "18", color: "text-yellow-400", icon: Clock },
              { label: "Absent", value: "24", color: "text-red-400", icon: XCircle },
              { label: "Total", value: "354", color: "text-blue-400", icon: Users },
            ].map(({ label, value, color, icon: Icon }) => (
              <div key={label} className="bg-gray-800/60 rounded-xl p-4 text-center border border-white/5">
                <Icon className={`w-6 h-6 ${color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold ${color}`}>{value}</div>
                <div className="text-xs text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
          <div className="px-6 pb-6">
            <div className="bg-gray-800/60 rounded-xl p-4 border border-white/5">
              <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">Today&apos;s Arrival Timeline</p>
              <div className="space-y-2">
                {[
                  { name: "Abdullah Hassan", time: "07:42 AM", status: "On Time", late: false },
                  { name: "Fatima Al-Rashied", time: "07:58 AM", status: "On Time", late: false },
                  { name: "Ibrahim Musa", time: "08:17 AM", status: "Late", late: true },
                ].map((s) => (
                  <div key={s.name} className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${s.late ? "bg-yellow-400" : "bg-green-400"}`} />
                      <span className="text-sm text-gray-300">{s.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-gray-500">{s.time}</span>
                      <span className={s.late ? "text-yellow-400" : "text-green-400"}>{s.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. TRUST / CLIENT LOGOS ──────────────────────────────────────────────────
function TrustLogosSection() {
  const logos = [
    { src: "/client_logos/northgateschool.png", alt: "Northgate Schools" },
    { src: "/client_logos/albayan.png", alt: "Albayan Center" },
    { src: "/client_logos/excelschool.png", alt: "Excel Islamic School" },
    { src: "/client_logos/AlhananLogo.png", alt: "Alhanan" },
    { src: "/client_logos/Bugembe.jpeg", alt: "Bugembe" },
    { src: "/client_logos/Walugogologo-Photoroom.png", alt: "Walugogo" },
    { src: "/client_logos/bumwenascrap-Photoroom.png", alt: "Bumwena" },
    { src: "/client_logos/Hillsideways badge.png", alt: "Hillsideways" },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">Trusted Across Uganda</p>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">37+ Organizations Supported</h2>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.alt} className="relative w-20 h-20 sm:w-24 sm:h-24">
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="96px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. PROBLEM SECTION ───────────────────────────────────────────────────────
function ProblemSection() {
  const pains = [
    { icon: AlertTriangle, title: "Manual attendance is unreliable", description: "Paper registers get lost, faked, or filled incorrectly. You never actually know the true attendance numbers." },
    { icon: Eye, title: "You don\u2019t know who is in school", description: "Students sneak in late, skip classes or leave early \u2014 and nobody catches it until it\u2019s too late." },
    { icon: Clock, title: "Reports come too late", description: "Attendance data only becomes useful at the end of term \u2014 when it\u2019s already too late to act." },
    { icon: XCircle, title: "Parents are left in the dark", description: "Parents trust that their child arrived safely. They have no way to verify \u2014 until something goes wrong." },
    { icon: Users, title: "No teacher accountability", description: "Teachers arrive late, skip classes, or mark attendance carelessly. There\u2019s no way to hold them accountable." },
    { icon: BarChart3, title: "Data-driven decisions impossible", description: "Without accurate real-time data, school management is guesswork. You can\u2019t improve what you can\u2019t measure." },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">The Problem</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Your School Has a Visibility Problem</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            If you&apos;re still using manual attendance, you don&apos;t have control — you have a report that arrives too late.
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map(({ icon: Icon, title, description }, i) => (
            <motion.div key={title} variants={fadeUp} custom={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-red-200/50 dark:border-red-900/30 hover:border-red-300 dark:hover:border-red-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/30 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-red-500 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. SOLUTION SECTION ──────────────────────────────────────────────────────
function SolutionSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">The Solution</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">DRAIS Gives You Total Visibility and Control</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              DRAIS is an attendance-first intelligence system that connects fingerprint devices at your school entrance directly to a cloud dashboard. The moment a student places their finger, you know they&apos;re in school — and so does their parent.
            </p>
            <ul className="space-y-4 mb-8">
              {["Real-time fingerprint attendance tracking", "Instant parent SMS notifications", "Live admin dashboard with late/absent alerts", "Automated daily & monthly reports", "Full student, exam, and finance management", "Works with Dahua & ZKTeco biometric devices"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/attendance" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20">
              See How Attendance Works <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-3xl p-8 border border-indigo-200 dark:border-indigo-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-8 text-center">How DRAIS Works</h3>
              <div className="space-y-6">
                {[
                  { step: "1", icon: Fingerprint, label: "Student Scans Finger", color: "bg-indigo-600", desc: "At school gate" },
                  { step: "2", icon: Zap, label: "System Logs Instantly", color: "bg-blue-600", desc: "Under 2 seconds" },
                  { step: "3", icon: Monitor, label: "Admin Sees Live Data", color: "bg-purple-600", desc: "Real-time dashboard" },
                  { step: "4", icon: Bell, label: "Parent Gets SMS", color: "bg-cyan-600", desc: "Automatic notification" },
                ].map(({ step, icon: Icon, label, color, desc }, idx) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center shrink-0 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 dark:text-white">{label}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
                    </div>
                    {idx < 3 && <ChevronRight className="w-5 h-5 text-indigo-400 rotate-90 sm:rotate-0" />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 5. SYSTEMS PREVIEW ───────────────────────────────────────────────────────
function SystemsPreviewSection() {
  const systems = [
    { icon: Fingerprint, title: "Attendance System", description: "Fingerprint-powered real-time tracking. Know who is in school every second.", href: "/attendance", color: "from-indigo-500 to-blue-600", highlight: true },
    { icon: GraduationCap, title: "Academics & Exams", description: "Mark entry, grading, report cards, and performance tracking — all automated.", href: "/features", color: "from-purple-500 to-pink-600", highlight: false },
    { icon: DollarSign, title: "Finance & Fees", description: "Track fees, generate receipts, monitor payments with complete financial visibility.", href: "/features", color: "from-green-500 to-emerald-600", highlight: false },
    { icon: MessageSquare, title: "Communication", description: "SMS broadcasts, parent notifications, class-specific messages and delivery tracking.", href: "/features", color: "from-orange-500 to-red-600", highlight: false },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">Complete Platform</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">One System. Total Control.</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">DRAIS isn&apos;t just attendance — it&apos;s a complete school intelligence platform.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {systems.map(({ icon: Icon, title, description, href, color, highlight }, i) => (
            <motion.div key={title} variants={fadeUp} custom={i}>
              <Link href={href} className={`block rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${highlight ? "bg-gradient-to-br from-indigo-600 to-blue-700 border-indigo-500 text-white shadow-xl shadow-indigo-500/20" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${highlight ? "bg-white/20" : `bg-gradient-to-br ${color} shadow-lg`}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${highlight ? "text-white" : "text-gray-900 dark:text-white"}`}>{title}</h3>
                <p className={`text-sm leading-relaxed mb-4 ${highlight ? "text-indigo-100" : "text-gray-600 dark:text-gray-400"}`}>{description}</p>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all ${highlight ? "text-indigo-200" : "text-indigo-600 dark:text-indigo-400"}`}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 6. SCREENSHOT CAROUSEL ──────────────────────────────────────────────────
function ScreenshotCarousel() {
  const screenshots = [
    { src: "/screenshots/drais-main-dashboard.png", label: "Main Dashboard" },
    { src: "/screenshots/drais-attendance-dashboard.png", label: "Attendance Dashboard" },
    { src: "/screenshots/drais-student-profile.png", label: "Student Profile" },
    { src: "/screenshots/drais-students-list.png", label: "Students List" },
    { src: "/screenshots/drais-device-command-center.png", label: "Device Command Center" },
    { src: "/screenshots/drais-reports-template-kitchen.png", label: "Reports & Templates" },
    { src: "/screenshots/drais-enerprise-dashboard.png", label: "Enterprise Dashboard" },
    { src: "/screenshots/DRAIS-staff-overview.png", label: "Staff Overview" },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-bold rounded-full mb-4 uppercase tracking-wider">See It In Action</span>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">A Glimpse Inside DRAIS</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Clean, powerful interfaces designed for school administrators who need clarity.</p>
        </motion.div>
        <Swiper modules={[Autoplay, Pagination]} spaceBetween={24} slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 3500, disableOnInteraction: false }} pagination={{ clickable: true }} className="pb-12">
          {screenshots.map((shot) => (
            <SwiperSlide key={shot.label}>
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800 group">
                <div className="relative aspect-video bg-gray-100 dark:bg-gray-900">
                  <Image src={shot.src} alt={shot.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" />
                </div>
                <div className="p-4"><p className="text-sm font-semibold text-gray-900 dark:text-white">{shot.label}</p></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-6">
          <Link href="/screenshots" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            View all screenshots <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 7. SOCIAL PROOF ──────────────────────────────────────────────────────────
function SocialProofBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-700 dark:from-indigo-800 dark:via-blue-800 dark:to-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "37+", label: "Organizations Supported" },
            { value: "10,000+", label: "Student Records Managed" },
            { value: "500K+", label: "Attendance Records Captured" },
            { value: "99.9%", label: "System Uptime" },
          ].map(({ value, label }, i) => (
            <motion.div key={label} variants={fadeUp} custom={i}>
              <p className="text-4xl sm:text-5xl font-extrabold text-white mb-1">{value}</p>
              <p className="text-indigo-200 text-sm font-medium">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 8. TESTIMONIAL (DOMINANT) ────────────────────────────────────────────────
function TestimonialSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300 text-sm font-medium mb-5">
            <Star className="w-4 h-4 fill-current" /> What School Leaders Say
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Real Results from Real Schools</h2>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-10 border border-indigo-200 dark:border-indigo-800 shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500" />
          <div className="flex items-center gap-1 text-yellow-400 mb-6">
            {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
          </div>
          <blockquote className="text-xl sm:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed mb-8 font-medium italic">
            &ldquo;Before DRAIS, tracking learners and teachers was a constant struggle. Our manual systems failed to give us the control we needed. With DRAIS, we now have real-time visibility and confidence in our operations. It solved a problem we had lived with for years.&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg">
              <UserCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">Sheikh Isabirye Bilaal</p>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold">Director</p>
            </div>
          </div>
        </motion.div>

        {/* Secondary testimonials */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "DRAIS has transformed how we handle attendance and reporting. The customizable report system means we can present results exactly the way our board expects.", name: "Ngobi Peter", position: "General Director", school: "Northgate Schools" },
            { quote: "DRAIS is the only school management system that has truly adapted to Quran memorization programs. It understands our structure completely.", name: "Wagogo Husama", position: "Headteacher", school: "Albayan Quran Memorization Center" },
            { quote: "The attendance monitoring is extremely effective. Parents trust us more because we show accurate, timestamped records of arrivals and departures.", name: "Shk Hassan Mwita", position: "Principal", school: "Ibun Baz Girls Secondary School" },
          ].map((t, i) => (
            <motion.div key={t.name + t.school} variants={fadeUp} custom={i}
              className="bg-white dark:bg-gray-800/60 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic flex-1 mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{t.position}</p>
                  <p className="text-xs text-gray-500">{t.school}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 9. FINAL CTA ─────────────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="py-28 bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">Book a Demo Today</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join 37+ organizations that trust DRAIS to manage attendance, students, exams, and reports — all from one platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://sims.drais.pro" className="group flex items-center gap-2 px-10 py-5 bg-white text-indigo-700 font-bold rounded-xl shadow-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 text-lg">
              Request a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/demo" className="flex items-center gap-2 px-10 py-5 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl border border-white/30 transition-all duration-300 hover:-translate-y-1 text-lg">
              <Play className="w-5 h-5" /> Watch Demo Video
            </Link>
          </div>
          <p className="mt-8 text-indigo-200 text-sm">No credit card required · Set up in one day · Full support included</p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <PublicLayout>
      <HeroSection />
      <TrustLogosSection />
      <ProblemSection />
      <SolutionSection />
      <SystemsPreviewSection />
      <ScreenshotCarousel />
      <SocialProofBanner />
      <TestimonialSection />
      <FinalCTASection />
    </PublicLayout>
  );
}