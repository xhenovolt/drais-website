"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Fingerprint, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PublicLayout from "@/components/public/PublicLayout";

type Category = "All" | "Attendance" | "Dashboard" | "Reports" | "Finance";

interface Screenshot {
  src: string;
  label: string;
  category: Category[];
}

const screenshots: Screenshot[] = [
  { src: "/screenshots/drais-attendance-dashboard.png", label: "Attendance Dashboard", category: ["Attendance", "Dashboard"] },
  { src: "/screenshots/drais-attendance-dashboard-dark.png", label: "Attendance Dashboard (Dark Mode)", category: ["Attendance", "Dashboard"] },
  { src: "/screenshots/drais-main-dashboard.png", label: "Main Dashboard", category: ["Dashboard"] },
  { src: "/screenshots/drais-enerprise-dashboard.png", label: "Enterprise Dashboard", category: ["Dashboard"] },
  { src: "/screenshots/drais-student-profile.png", label: "Student Profile", category: ["Dashboard"] },
  { src: "/screenshots/drais-students-list.png", label: "Students List", category: ["Dashboard"] },
  { src: "/screenshots/DRAIS-staff-overview.png", label: "Staff Overview", category: ["Dashboard"] },
  { src: "/screenshots/drais-device-command-center.png", label: "Device Command Center", category: ["Attendance"] },
  { src: "/screenshots/drais-device-control.png", label: "Device Control Panel", category: ["Attendance"] },
  { src: "/screenshots/drais-reports-template-kitchen.png", label: "Reports Template Kitchen", category: ["Reports"] },
  { src: "/screenshots/drais-RBAC.png", label: "Role-Based Access Control", category: ["Dashboard"] },
  { src: "/screenshots/drais-admission.png", label: "Student Admission", category: ["Dashboard"] },
];

const categories: Category[] = ["All", "Attendance", "Dashboard", "Reports", "Finance"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ScreenshotsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? screenshots
    : screenshots.filter((s) => s.category.includes(activeCategory));

  const openLightbox = useCallback((idx: number) => setLightboxIdx(idx), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prev = useCallback(() => setLightboxIdx((i) => (i !== null && i > 0 ? i - 1 : filtered.length - 1)), [filtered.length]);
  const next = useCallback(() => setLightboxIdx((i) => (i !== null && i < filtered.length - 1 ? i + 1 : 0)), [filtered.length]);

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6">
            <Monitor className="w-4 h-4" /> Product Screenshots
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl font-extrabold mb-5">
            See Every Screen of DRAIS
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl text-blue-100/80 max-w-2xl mx-auto">
            Browse the actual interfaces that school administrators use every day. Click any image to view full-size.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((shot, idx) => (
                <motion.div
                  key={shot.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(idx)}
                >
                  <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800">
                    <div className="relative aspect-video bg-gray-100 dark:bg-gray-900 overflow-hidden">
                      <Image
                        src={shot.src}
                        alt={shot.label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                          <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{shot.label}</p>
                      <div className="flex gap-1.5 mt-2">
                        {shot.category.map((c) => (
                          <span key={c} className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button onClick={closeLightbox} className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10">
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10">
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={filtered[lightboxIdx].src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full max-h-[85vh] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIdx].src}
                alt={filtered[lightboxIdx].label}
                fill
                className="object-contain rounded-lg"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-semibold text-lg">{filtered[lightboxIdx].label}</p>
              <p className="text-gray-400 text-sm mt-1">{lightboxIdx + 1} / {filtered.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PublicLayout>
  );
}