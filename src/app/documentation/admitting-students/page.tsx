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

export default function AdmittingStudentsPage() {
  return (
    <DocLayout
      title="Admitting a Student"
      description="How to register a new student in DRAIS, including setting up their profile and enrolling their fingerprint."
    >
      <p>
        When a new student joins your school, you need to register them in DRAIS before they can appear in classes or attendance records. This guide walks you through the full admission process.
      </p>

      <h2>Step 1: Open the Student Admission Form</h2>
      <p>From the main menu, go to <strong>Students</strong> and click the <strong>Admit Student</strong> button in the top right corner.</p>

      <Screenshot label="Students List Page with Admit Button" />

      <h2>Step 2: Fill in the Student&apos;s Personal Details</h2>
      <p>Complete the following fields:</p>
      <ul>
        <li><strong>First Name</strong> and <strong>Last Name</strong> — Enter the student&apos;s full legal name.</li>
        <li><strong>Date of Birth</strong> — Required for report cards and age verification.</li>
        <li><strong>Gender</strong> — Male or Female.</li>
        <li><strong>Student ID / Admission Number</strong> — Either enter a custom ID or let DRAIS generate one automatically.</li>
        <li><strong>Photo</strong> — Upload a passport-size photo (optional but recommended).</li>
      </ul>

      <Screenshot label="Student Personal Details Form" />

      <h2>Step 3: Assign the Student to a Class</h2>
      <p>
        Under the <strong>Academic Placement</strong> section:
      </p>
      <ul>
        <li>Select the <strong>Academic Year</strong> (e.g., 2025/2026)</li>
        <li>Select the <strong>Class</strong> (e.g., Primary 3 or Senior 2)</li>
        <li>Select the <strong>Stream</strong> if your school has streams (e.g., A, B, North, South)</li>
      </ul>

      <Note>Make sure the class exists before admitting the student. If the class is missing, create it first in the Classes section.</Note>

      <h2>Step 4: Add Guardian Information</h2>
      <p>Under <strong>Guardian/Parent Details</strong>, enter:</p>
      <ul>
        <li><strong>Guardian Name</strong> — The parent or guardian&apos;s full name.</li>
        <li><strong>Relationship</strong> — Father, Mother, Guardian, etc.</li>
        <li><strong>Phone Number</strong> — This number receives attendance SMS notifications.</li>
        <li><strong>Email</strong> — Optional, for email notifications.</li>
      </ul>

      <Screenshot label="Guardian Details Section" />

      <h2>Step 5: Save the Student Record</h2>
      <p>
        Click <strong>Save Student</strong>. The student now appears in the class list and attendance records.
      </p>

      <h2>Step 6: Enrol the Student&apos;s Fingerprint (If Using Biometric Device)</h2>
      <p>
        If your school uses a fingerprint scanner for attendance:
      </p>
      <ol>
        <li>Go to <strong>Attendance → Fingerprint Enrolment</strong> or open the student&apos;s profile and click <strong>Enrol Fingerprint</strong>.</li>
        <li>Ask the student to place their finger on the device as prompted.</li>
        <li>The system will capture 3 readings to ensure accuracy.</li>
        <li>Click <strong>Save Fingerprint</strong>.</li>
      </ol>

      <Screenshot label="Fingerprint Enrolment Screen" />

      <Note>
        Fingerprint enrolment must be done physically at the fingerprint device. The student only needs to be enrolled once. After that, they can check in every morning by simply placing their finger on the scanner.
      </Note>

      <h2>What Happens Next?</h2>
      <p>
        Once the student is admitted and (optionally) enrolled, they will:
      </p>
      <ul>
        <li>Appear in attendance records from their first day of school</li>
        <li>Be included in class exam results</li>
        <li>Have their guardian receive SMS notifications when they arrive or are absent</li>
      </ul>

      <p>
        Next, learn how to{" "}
        <Link href="/documentation/attendance" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          Take Attendance
        </Link>{" "}
        using the fingerprint device or manual entry.
      </p>
    </DocLayout>
  );
}
