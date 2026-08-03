import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Compass,
  Fingerprint,
  Users,
  UserCheck,
  GraduationCap,
  BarChart3,
  Palette,
  Wallet,
  MessageSquare,
  ShieldCheck,
  Settings2,
  DatabaseBackup,
  LifeBuoy,
  HardDrive,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import DocLayout from "@/components/public/DocLayout";
import { Callout } from "@/components/public/DocBits";

const sections = [
  {
    title: "Getting Started",
    blurb: "Read these two first. Everything else assumes them.",
    guides: [
      {
        href: "/documentation/how-drais-works",
        icon: Compass,
        title: "How DRAIS Works",
        desc: "The concepts everything else is built on — schools, terms, learners, enrolment, and the three principles behind the system.",
        time: "10 min read",
      },
      {
        href: "/documentation/getting-started",
        icon: BookOpen,
        title: "Setting Up Your School",
        desc: "Create your account, build your academic structure, and get ready for day one.",
        time: "5 min read",
      },
    ],
  },
  {
    title: "Students",
    blurb: "Admission through to leaving, and everything in between.",
    guides: [
      {
        href: "/documentation/admitting-students",
        icon: Users,
        title: "Admitting a Student",
        desc: "Registering a new learner, including guardian details and fingerprint enrolment.",
        time: "4 min read",
      },
      {
        href: "/documentation/managing-learners",
        icon: UserCheck,
        title: "Managing Learners",
        desc: "Transfers, end-of-year promotion, leavers, duplicates and corrections.",
        time: "8 min read",
      },
      {
        href: "/documentation/parent-portal",
        icon: ShieldCheck,
        title: "The Parent Portal",
        desc: "How guardians get access, what they see, and how your school stays in control of it.",
        time: "7 min read",
      },
    ],
  },
  {
    title: "Attendance",
    blurb: "The part of DRAIS most schools come for.",
    guides: [
      {
        href: "/documentation/attendance",
        icon: Fingerprint,
        title: "How Attendance Works",
        desc: "From a fingerprint at the gate to a daily register, and how to handle absences.",
        time: "6 min read",
      },
      {
        href: "/documentation/devices",
        icon: HardDrive,
        title: "Fingerprint Devices",
        desc: "Connecting a device, enrolling fingerprints, reconciliation, and what to do when something looks wrong.",
        time: "10 min read",
      },
      {
        href: "/documentation/attendance-reports",
        icon: CalendarCheck,
        title: "Attendance Reports",
        desc: "Daily registers, term summaries, absence patterns, and how present, late and absent are decided.",
        time: "7 min read",
      },
    ],
  },
  {
    title: "Academics",
    blurb: "Marks in, report cards out.",
    guides: [
      {
        href: "/documentation/exams",
        icon: GraduationCap,
        title: "Exams & Marks",
        desc: "Entering marks, grading, and producing class results.",
        time: "5 min read",
      },
      {
        href: "/documentation/reports",
        icon: BarChart3,
        title: "Report Cards",
        desc: "Generating, checking and printing report cards, and what makes a reprint reproducible.",
        time: "4 min read",
      },
      {
        href: "/documentation/report-designer",
        icon: Palette,
        title: "Designing Report Cards",
        desc: "Build your school's own layout — sections, branding, comment rules and bilingual output.",
        time: "9 min read",
      },
    ],
  },
  {
    title: "Finance & Communication",
    blurb: "Money in, messages out.",
    guides: [
      {
        href: "/documentation/fees",
        icon: Wallet,
        title: "Fees & Payments",
        desc: "Fee structures, charging learners, receipts, balances, imports and reconciliation.",
        time: "9 min read",
      },
      {
        href: "/documentation/notifications",
        icon: MessageSquare,
        title: "SMS & Notifications",
        desc: "Arrival alerts, absence notices, fee reminders and bulk messages — and keeping the cost sensible.",
        time: "8 min read",
      },
    ],
  },
  {
    title: "Administration",
    blurb: "Set these up once, review them each year.",
    guides: [
      {
        href: "/documentation/roles-permissions",
        icon: ShieldCheck,
        title: "Users, Roles & Permissions",
        desc: "Adding staff and giving each person exactly the access their job needs.",
        time: "7 min read",
      },
      {
        href: "/documentation/settings",
        icon: Settings2,
        title: "Settings & Modules",
        desc: "School profile, academic structure, attendance rules, grading and optional modules.",
        time: "7 min read",
      },
      {
        href: "/documentation/data-safety",
        icon: DatabaseBackup,
        title: "Data Safety & Backups",
        desc: "Recovering something deleted, taking your own backup, and the audit trail.",
        time: "6 min read",
      },
    ],
  },
  {
    title: "Help",
    blurb: "When something is not behaving.",
    guides: [
      {
        href: "/documentation/troubleshooting",
        icon: LifeBuoy,
        title: "Troubleshooting",
        desc: "The problems schools actually report, and what they usually turn out to be.",
        time: "8 min read",
      },
    ],
  },
];

function GuideCard({
  href,
  icon: Icon,
  title,
  desc,
  time,
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  desc: string;
  time: string;
}) {
  return (
    <Link
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
  );
}

export default function DocumentationIndexPage() {
  return (
    <DocLayout
      title="DRAIS Documentation"
      description="Everything a school administrator needs to run DRAIS well. No technical background required."
    >
      <p>
        These guides are written for the people who actually run a school — administrators, bursars, directors
        of studies and class teachers. They explain not just which button to press but{" "}
        <strong>why DRAIS behaves the way it does</strong>, because that is what makes the difference when
        something unexpected happens.
      </p>

      <Callout kind="tip" title="New to DRAIS? Read these two first.">
        <p>
          <Link href="/documentation/how-drais-works">How DRAIS Works</Link> explains the handful of ideas
          everything else is built on. <Link href="/documentation/getting-started">Setting Up Your School</Link>{" "}
          then walks you through the first day. Ten minutes on the first one saves hours later.
        </p>
      </Callout>

      {sections.map(({ title, blurb, guides }) => (
        <div key={title}>
          <h2>{title}</h2>
          <p>{blurb}</p>
          <div className="not-prose grid sm:grid-cols-2 gap-4 mt-4 mb-8">
            {guides.map((g) => (
              <GuideCard key={g.href} {...g} />
            ))}
          </div>
        </div>
      ))}

      <h2>Need something that is not here?</h2>
      <p>
        These guides cover using DRAIS. If you need help with your subscription, adding a module, or something
        specific to your school&apos;s setup, contact the team through the{" "}
        <Link href="/contact">Contact page</Link> or the <Link href="/support">Support page</Link>.
      </p>
      <p>
        If you tried to find something here and could not, tell us. Gaps in documentation are worth knowing
        about.
      </p>
    </DocLayout>
  );
}
