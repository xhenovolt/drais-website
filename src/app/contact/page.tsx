"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MessageSquare, ArrowRight, CheckCircle2, Fingerprint } from "lucide-react";
import PublicLayout from "@/components/public/PublicLayout";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", school: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <PublicLayout>
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100/80">
            Have questions about DRAIS? Want a live demo? We&apos;re here to help you set up fingerprint attendance for your school.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">Contact Options</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                We typically respond within 1 business day. For urgent support, please use the phone number or WhatsApp.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "drais@xhenvolt.com", note: "General enquiries and support", link: "mailto:drais@xhenvolt.com" },
                  { icon: Phone, label: "Phone / WhatsApp", value: "0741 341 483", note: "Available Mon–Sat, 8am–6pm EAT" },
                  { icon: Phone, label: "Phone / WhatsApp", value: "0760 700 954", note: "Sales and demo scheduling" },
                  { icon: Phone, label: "Phone / WhatsApp", value: "0745 726 350", note: "Technical support" },
                  { icon: MessageSquare, label: "Live Demo Request", value: "Use the form →", note: "We will schedule a screen share demo for your school" },
                ].map(({ icon: Icon, label, value, note, link }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{label}</p>
                      {link ? (
                        <a href={link} className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-500 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">{value}</p>
                      )}
                      <p className="text-xs text-gray-500 dark:text-gray-500">{note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center gap-3 mb-3">
                  <Fingerprint className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <p className="font-bold text-gray-900 dark:text-white">Ready to start right now?</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  You don&apos;t need to contact us first. Create your school account and start the free trial immediately.
                </p>
                <Link href="/signup" className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-colors">
                  Create School Account <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Received!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We will get back to you within 1 business day.
                  </p>
                  <Link href="/" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                    Back to homepage
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="School Admin Name"
                        className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">School Name *</label>
                      <input
                        required
                        type="text"
                        name="school"
                        value={form.school}
                        onChange={handleChange}
                        placeholder="Your School Name"
                        className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="admin@school.com"
                      className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+256 700 000 000"
                      className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      What can we help you with? *
                    </label>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your school, the number of students, and what you need help with..."
                      className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
