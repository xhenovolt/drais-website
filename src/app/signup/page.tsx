"use client";
import React from "react";
import Link from "next/link";
import { Fingerprint, ArrowLeft, Mail, School, User, Phone } from "lucide-react";
import PublicLayout from "@/components/public/PublicLayout";

export default function SignupPage() {
  return (
    <PublicLayout>
      <section className="min-h-[90vh] bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 flex items-center justify-center py-20">
        <div className="max-w-lg w-full mx-4">
          <div className="bg-white dark:bg-gray-900/90 rounded-2xl shadow-2xl p-8 border border-white/10">
            {/* Header */}
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center gap-2 mb-6">
                <ArrowLeft className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">Back to homepage</span>
              </Link>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <Fingerprint className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Start Your DRAIS Trial</h1>
              <p className="text-gray-600 dark:text-gray-400">Join 30+ East African schools using DRAIS</p>
            </div>

            {/* Demo Notice */}
            <div className="bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-6">
              <p className="text-sm text-green-700 dark:text-green-300 text-center">
                <strong>Free Setup:</strong> Complete setup assistance included. No setup fees for qualifying schools.
              </p>
            </div>

            {/* Form Placeholder */}
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    School Name
                  </label>
                  <div className="relative">
                    <School className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      disabled
                      placeholder="Your School Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      disabled
                      placeholder="Principal/Admin Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  School Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    disabled
                    placeholder="admin@yourschool.edu"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    disabled
                    placeholder="+256 XXX XXX XXX"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <button
                type="button"
                disabled
                className="w-full bg-gray-300 text-gray-500 py-3 rounded-xl font-semibold cursor-not-allowed"
              >
                Contact Us for Trial Setup
              </button>
            </form>

            {/* Contact CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/50 dark:to-blue-950/50 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ready to get started?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Contact our team for a personalized demo and setup assistance. We'll help you get DRAIS running in your school within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm font-medium text-center transition-colors"
                >
                  Contact Sales Team
                </Link>
                <Link
                  href="/attendance-demo"
                  className="flex-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium text-center transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Watch Demo First
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}