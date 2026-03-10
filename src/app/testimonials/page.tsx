"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Star, UserCheck, ArrowRight, MessageSquare, Fingerprint } from "lucide-react";
import PublicLayout from "@/components/public/PublicLayout";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  school: string;
  message: string;
  photo_url?: string | null;
  created_at: string;
}

// Hardcoded testimonials from real users (per requirements)
const SEED_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ngobi Peter",
    position: "Director",
    school: "Northgate Schools",
    message:
      "DRAIS has completely transformed our attendance monitoring. The fingerprint system is incredibly fast and reliable. Our parents now have full confidence in our accountability systems because they receive real-time notifications when their children arrive or are absent.",
    photo_url: "/testimonial_photos/ngobi-peter.svg",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Wagogo Husama",
    position: "Headteacher", 
    school: "Albayan Quran Memorization Center",
    message:
      "As an Islamic school focused on Quran memorization, we needed a system that understood our unique needs. DRAIS not only handles our attendance perfectly but also helps us track our students' Quranic studies progress with specialized tools designed for Islamic education.",
    photo_url: "/testimonial_photos/wagogo-husama.svg",
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Shk Hassan Mwaita",
    position: "School Principal",
    school: "Excel Islamic Nursery and Primary School",
    message:
      "The setup process was remarkably straightforward, and the training was excellent. Our teachers adapted to DRAIS within days. The automated parent notifications have significantly improved our parent-school communication and trust levels.",
    photo_url: "/testimonial_photos/hassan-mwaita.svg",
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Mr Mwondha Hassan",
    position: "School Administrator",
    school: "Ibun Baz Educational Complex",
    message:
      "Managing attendance for over 400 students was a nightmare before DRAIS. Now, our morning routine is smooth and efficient. The detailed attendance reports save us hours every month, and parents love receiving instant arrival confirmations.",
    photo_url: "/testimonial_photos/mwondha-hassan.svg",
    created_at: new Date().toISOString(),
  },
];

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(SEED_TESTIMONIALS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((r) => r.json())
      .then((j) => {
        if (j.success && j.data?.length > 0) {
          setTestimonials(j.data);
        }
      })
      .catch(() => {
        // keep seed data on error
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <PublicLayout>
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            30+ Schools Trust DRAIS
          </div>
          <h1 className="text-5xl font-extrabold mb-4">What Schools Are Saying</h1>
          <p className="text-xl text-blue-100/80">
            Real experiences from principals, headteachers, and administrators across East Africa.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-52 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-gray-50 dark:bg-gray-800/60 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col"
                >
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic flex-1 mb-5">
                    &ldquo;{t.message}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center shrink-0">
                      {t.photo_url ? (
                        <img
                          src={t.photo_url}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">
                          {t.name.split(' ').map(word => word[0]).join('')}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</p>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{t.position}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{t.school}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Submit CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 border border-indigo-200 dark:border-indigo-700 p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
              Using DRAIS at Your School?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              We&apos;d love to hear your experience. Share your story and help other school leaders discover what DRAIS can do.
            </p>
            <Link
              href="/testimonials/submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-md"
            >
              Share Your Experience <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Fingerprint className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3">
            Ready to Join These Schools?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Start your free trial today — no credit card required.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors shadow-lg"
          >
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
