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

export default function GettingStartedPage() {
  return (
    <DocLayout
      title="Getting Started"
      description="How to set up your school in DRAIS from scratch."
    >
      <h2>What you will need</h2>
      <p>Before you begin, make sure you have the following:</p>
      <ul>
        <li>Your school name and official email address</li>
        <li>A stable internet connection</li>
        <li>Administrator access to the school (you will become the Super Admin)</li>
      </ul>

      <h2>Step 1: Create Your School Account</h2>
      <p>
        Visit <Link href="/signup" className="text-indigo-600 dark:text-indigo-400 hover:underline">drais.app/signup</Link> and
        fill in the registration form:
      </p>
      <ul>
        <li><strong>School Name</strong> — Enter the full official name of your school.</li>
        <li><strong>Your Name</strong> — Enter your first and last name as the school administrator.</li>
        <li><strong>Email Address</strong> — Use your school email if possible.</li>
        <li><strong>Password</strong> — Choose a strong password of at least 8 characters.</li>
      </ul>

      <Screenshot label="Signup Form" />

      <p>
        After clicking <strong>Create Account &amp; School</strong>, you will be logged in automatically and redirected to your school dashboard.
      </p>

      <h2>Step 2: Complete Your School Profile</h2>
      <p>
        Go to <strong>Settings → School Information</strong> and fill in:
      </p>
      <ul>
        <li>School address</li>
        <li>Contact phone number</li>
        <li>School type (Primary, Secondary, etc.)</li>
        <li>School logo (optional)</li>
      </ul>

      <Screenshot label="School Settings Page" />

      <h2>Step 3: Set Up Academic Structure</h2>
      <p>Before adding students, set up your school's structure:</p>
      <ol>
        <li>
          <strong>Create an Academic Year</strong> — Go to <strong>Settings → Academic Years</strong> and add the current school year (e.g., 2025/2026).
        </li>
        <li>
          <strong>Add Terms</strong> — Add the terms within the academic year (Term 1, Term 2, Term 3).
        </li>
        <li>
          <strong>Create Classes</strong> — Go to <strong>Classes</strong> and create your school classes (e.g., Primary 1, Primary 2, Senior 1).
        </li>
        <li>
          <strong>Add Subjects</strong> — Add the subjects taught in your school.
        </li>
      </ol>

      <Screenshot label="Classes Setup Screen" />

      <h2>Step 4: Add Teachers/Staff</h2>
      <p>
        Go to <strong>Staff</strong> and click <strong>Add Staff Member</strong>. Fill in their name, role, and email address. They will receive a login invitation.
      </p>

      <h2>Step 5: Start Adding Students</h2>
      <p>
        You are now ready to admit students. See the{" "}
        <Link href="/documentation/admitting-students" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          Admitting a Student
        </Link>{" "}
        guide for step-by-step instructions.
      </p>

      <h2>Step 6: Connect the Fingerprint Device (Optional)</h2>
      <p>
        If your school has a biometric fingerprint scanner, go to <strong>Attendance → Devices</strong> and follow the device connection guide. Once connected, students can check in by fingerprint and the system records attendance automatically.
      </p>

      <h2>Need Help?</h2>
      <p>
        If you get stuck at any step, contact our support team through the{" "}
        <Link href="/contact" className="text-indigo-600 dark:text-indigo-400 hover:underline">Contact page</Link>.
      </p>
    </DocLayout>
  );
}
