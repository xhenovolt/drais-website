import React from "react";
import Link from "next/link";
import { Fingerprint, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Attendance Demo", href: "/attendance-demo" },
    { label: "Pricing", href: "/pricing" },
    { label: "Screenshots", href: "/screenshots" },
  ],
  Documentation: [
    { label: "Getting Started", href: "/documentation/getting-started" },
    { label: "Taking Attendance", href: "/documentation/attendance" },
    { label: "Admitting Students", href: "/documentation/admitting-students" },
    { label: "Exam Management", href: "/documentation/exams" },
    { label: "Generating Reports", href: "/documentation/reports" },
  ],
  Company: [
    { label: "About DRAIS", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Sign In", href: "/login" },
  ],
};

export default function PublicFooter() {
  return (
    <footer className="bg-gray-950 dark:bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                <Fingerprint className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-extrabold text-white">DRAIS</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 mb-1 max-w-xs">
              Fingerprint-powered school attendance and management system built for modern African schools.
            </p>
            <p className="text-xs text-indigo-400/70 mb-4">A product of <a href="https://xhenvolt.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">Xhenvolt</a></p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href="mailto:drais@xhenvolt.com" className="hover:text-white transition-colors">drais@xhenvolt.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>0741 341 483</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>0760 700 954</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>0745 726 350</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold text-sm mb-4">{section}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-indigo-900/60 to-blue-900/60 border border-indigo-700/30 p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg">Ready to modernise your school?</p>
            <p className="text-indigo-300 text-sm">Start your free trial — no credit card required.</p>
          </div>
          <Link
            href="/signup"
            className="shrink-0 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
          >
            Create Free Account
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} DRAIS School Management System — A product of <a href="https://xhenvolt.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-400 transition-colors">Xhenvolt</a>. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
