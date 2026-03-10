import React from "react";
import Link from "next/link";
import DocLayout from "@/components/public/DocLayout";

function Screenshot({ label }: { label: string }) {
  return (
    <div className="not-prose my-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 text-center">
      <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">[ Screenshot: {label} ]</p>
      <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">Replace with actual screenshot</p>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-sm text-blue-800 dark:text-blue-300">
      <strong>Note:</strong> {children}
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-sm text-green-800 dark:text-green-300">
      <strong>Tip:</strong> {children}
    </div>
  );
}

export default function AttendanceDocPage() {
  return (
    <DocLayout
      title="Taking Attendance"
      description="How the fingerprint attendance system works and how to manage attendance records in DRAIS."
    >
      <p>
        DRAIS is designed around fingerprint-based attendance. Once the biometric device is connected and students are enrolled, attendance is recorded automatically every morning without any teacher involvement. This guide explains how it works and what you can do with the records.
      </p>

      <h2>How Fingerprint Attendance Works</h2>
      <p>
        The process is simple:
      </p>
      <ol>
        <li>Student arrives at school and places their finger on the biometric scanner.</li>
        <li>DRAIS identifies the student in under 2 seconds.</li>
        <li>The system records the arrival time automatically.</li>
        <li>If the student arrives after the configured late cut-off time, they are marked as <strong>Late</strong>.</li>
        <li>The student&apos;s guardian receives an SMS notification confirming arrival.</li>
        <li>The attendance dashboard updates in real time.</li>
      </ol>

      <Screenshot label="Live Attendance Dashboard" />

      <h2>Viewing Today&apos;s Attendance</h2>
      <p>To see the current day&apos;s attendance:</p>
      <ol>
        <li>Go to <strong>Attendance</strong> in the main menu.</li>
        <li>The dashboard shows a live count of present, late, and absent students.</li>
        <li>Scroll down to see the full arrival timeline — a chronological list of every student who has checked in today.</li>
        <li>To filter by class, use the <strong>Class</strong> dropdown at the top.</li>
      </ol>

      <Screenshot label="Attendance Page with Class Filter" />

      <h2>Viewing a Specific Date</h2>
      <p>
        To view attendance for a past date:
      </p>
      <ol>
        <li>Go to <strong>Attendance</strong>.</li>
        <li>Use the date picker at the top to select the date you want to view.</li>
        <li>The page will reload with attendance data for that date.</li>
      </ol>

      <h2>Marking Manual Attendance</h2>
      <p>
        If the fingerprint device is unavailable or a student was unable to scan, you can mark attendance manually:
      </p>
      <ol>
        <li>Go to <strong>Attendance</strong>.</li>
        <li>Find the student in the absent list.</li>
        <li>Click <strong>Mark Present</strong> and select their arrival time.</li>
        <li>Add a note if needed (e.g., &quot;Device was offline&quot;).</li>
      </ol>

      <Note>Manual attendance entries are marked differently from fingerprint entries so you can distinguish them in reports.</Note>

      <h2>The Late Cut-Off Time</h2>
      <p>
        The late cut-off time determines when a student is considered late. For example, if the cut-off is 8:00 AM, any student who checks in at 8:01 AM or later will be marked as Late.
      </p>
      <p>To set or change the cut-off time:</p>
      <ol>
        <li>Go to <strong>Settings → Attendance Settings</strong>.</li>
        <li>Set the <strong>Morning Cut-off Time</strong>.</li>
        <li>Click <strong>Save</strong>.</li>
      </ol>

      <Screenshot label="Attendance Settings Page" />

      <h2>Parent Notifications</h2>
      <p>
        When a student checks in, their guardian automatically receives an SMS like:
      </p>
      <blockquote>
        <em>DRAIS ALERT: Abdullah Hassan arrived at Al-Noor Academy at 07:42 AM on Monday 10 March. — DRAIS School System</em>
      </blockquote>
      <p>
        If a student does not check in by a certain time (the absence notification time), the guardian receives:
      </p>
      <blockquote>
        <em>DRAIS ALERT: Fatima did not arrive at school today (10 March). Please contact the school if you have concerns. — DRAIS</em>
      </blockquote>

      <Tip>
        Make sure guardian phone numbers are correctly entered for each student. Missing phone numbers will cause SMS notifications to fail silently.
      </Tip>

      <h2>Checking Absent Students</h2>
      <p>
        To see who has not arrived today:
      </p>
      <ol>
        <li>Go to <strong>Attendance</strong>.</li>
        <li>Use the <strong>Status</strong> filter and select <strong>Absent</strong>.</li>
        <li>The list shows all students who have not checked in for the selected date.</li>
      </ol>

      <p>
        For attendance reports, see the{" "}
        <Link href="/documentation/reports" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          Generating Reports
        </Link>{" "}
        guide.
      </p>
    </DocLayout>
  );
}
