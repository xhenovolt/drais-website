"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Quote, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sheikh Hassan Mwaita",
    position: "Director",
    school: "Ibun Baz Girls Secondary School & Excel Islamic Nursery",
    students: "400+ students",
    message: "DRAIS has completely transformed our attendance monitoring across both our institutions. The fingerprint system is incredibly reliable and parents now have full confidence in our accountability systems.",
    photo: "/testimonial_photos/hassan-mwaita.svg",
    rating: 5
  },
  {
    id: 2,
    name: "Mwondha Hassan",
    position: "Head Teacher",
    school: "Hillside Ways Nursery and Primary School",
    students: "800+ students",
    message: "With over 800 students, manual attendance was becoming absolutely hectic and error-prone. DRAIS was not just an option for us - it became a necessity. Now our teachers can focus on teaching instead of spending valuable time on attendance paperwork.",
    photo: "/testimonial_photos/mwondha-hassan.svg",
    rating: 5
  },
  {
    id: 3,
    name: "Wagogo Husama",
    position: "Headteacher",
    school: "Albayan Quran Memorization Center",
    students: "300+ students",
    message: "As an Islamic school focused on Quran memorization, we needed a system that understood our unique needs. DRAIS handles our attendance perfectly and tracks our students' progress effectively.",
    photo: "/testimonial_photos/wagogo-husama.svg",
    rating: 5
  }
];

export default function EnhancedTestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Real Stories from Real Schools
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Why School Leaders Choose DRAIS
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hear from principals, headteachers, and directors across East Africa who transformed their attendance monitoring with DRAIS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              <div className="bg-white dark:bg-gray-800/60 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 h-full flex flex-col">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-indigo-500 opacity-50" fill="currentColor" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Message */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic flex-1 mb-6">
                  &ldquo;{testimonial.message}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-indigo-100 dark:bg-indigo-900/40 flex-shrink-0">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 dark:text-white text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {testimonial.school}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {testimonial.students}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800/60 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              See how DRAIS can transform your school's attendance monitoring and parent communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
              >
                Schedule Demo Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold rounded-lg transition-colors"
              >
                Read All Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}