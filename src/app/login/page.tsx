"use client";
import React from "react";
import Link from "next/link";
import { Fingerprint, ArrowLeft, Mail, Lock } from "lucide-react";
import PublicLayout from "@/components/public/PublicLayout";

export default function LoginPage() {
  return (
    <PublicLayout>
      <section className="min-h-[90vh] bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 flex items-center justify-center py-20">
        <div className="max-w-md w-full mx-4">
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
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Sign In to DRAIS</h1>
              <p className="text-gray-600 dark:text-gray-400">Access your school management dashboard</p>
            </div>

            {/* Demo Notice */}
            <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
              <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                <strong>Demo Site:</strong> This is the marketing website. The actual DRAIS system requires institutional setup and credentials.
              </p>
            </div>

            {/* Form Placeholder */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  School Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    disabled
                    placeholder="admin@yourschool.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    disabled
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <button
                type="button"
                disabled
                className="w-full bg-gray-300 text-gray-500 py-3 rounded-xl font-semibold cursor-not-allowed"
              >
                Login Disabled (Demo Site)
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center space-y-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Need access to DRAIS? <Link href="/contact" className="text-indigo-600 hover:text-indigo-500 font-medium">Contact us</Link>
              </p>
              <p className="text-xs text-gray-500">
                Schools interested in DRAIS: <Link href="/pricing" className="text-indigo-600 hover:text-indigo-500">View pricing and setup</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}