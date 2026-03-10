import React from "react";
import Link from "next/link";
import { BookOpen, Fingerprint, Users, GraduationCap, BarChart3, ArrowRight } from "lucide-react";
import DocLayout from "@/components/public/DocLayout";

const guides = [
  {
    href: "/documentation/getting-started",
    icon: BookOpen,
    title: "Getting Started",
    desc: "Create your school account, set up users, and prepare DRAIS for daily use.",
    time: "5 min read",
  },
  {
    href: "/documentation/admitting-students",
    icon: Users,
    title: "Admitting a Student",
    desc: "Step-by-step guide to registering a new student in DRAIS, including fingerprint enrolment.",
    time: "4 min read",
  },
  {
    href: "/documentation/attendance",
    icon: Fingerprint,
    title: "Taking Attendance",
    desc: "Understand how fingerprint attendance works, how to view daily records, and how to handle absences.",
    time: "6 min read",
  },
  {
    href: "/documentation/exams",
    icon: GraduationCap,
    title: "Exams & Marks",
    desc: "Enter student marks, understand grading, and generate class results.",
    time: "5 min read",
  },
  {
    href: "/documentation/reports",
    icon: BarChart3,
    title: "Generating Reports",
    desc: "Create attendance reports, academic performance summaries, and printable report cards.",
    time: "4 min read",
  },
];

export default function DocumentationIndexPage() {
  return (
    <DocLayout
      title="DRAIS Documentation"
      description="Guides to help school administrators use DRAIS effectively — no technical background required."
    >
      <p>
        Welcome to the DRAIS documentation. These guides are written for school administrators and staff who want to learn how to use DRAIS efficiently. No technical background is required.
      </p>

      <p>
        Start with the <strong>Getting Started</strong> guide if you are new to DRAIS. If you are already set up, use the navigation on the left to jump directly to the topic you need.
      </p>

      <div className="not-prose grid sm:grid-cols-2 gap-4 mt-8">
        {guides.map(({ href, icon: Icon, title, desc, time }) => (
          <Link
            key={href}
            href={href}
            className="group flex gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 bg-white dark:bg-gray-900 hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                {title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{desc}</p>
              <p className="text-xs text-indigo-500 dark:text-indigo-400 mt-2">{time}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 shrink-0 self-start mt-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>

      <h2>Need Help?</h2>
      <p>
        If you cannot find what you are looking for in the documentation, reach out to our support team via the{" "}
        <Link href="/contact" className="text-indigo-600 dark:text-indigo-400 hover:underline">Contact page</Link>.
      </p>
    </DocLayout>
  );
}
