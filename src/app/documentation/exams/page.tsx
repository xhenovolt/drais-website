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

export default function ExamsDocPage() {
  return (
    <DocLayout
      title="Exams & Marks"
      description="How to enter student marks, manage exams, and generate class results in DRAIS."
    >
      <p>
        DRAIS includes a complete exam management module. Teachers enter marks for their subjects, and DRAIS automatically computes grades, class positions, and aggregates. This guide covers everything from setting up an exam to generating results.
      </p>

      <h2>Step 1: Set Up an Exam</h2>
      <p>Before marks can be entered, an exam must be created:</p>
      <ol>
        <li>Go to <strong>Exams</strong> in the main menu.</li>
        <li>Click <strong>Create Exam</strong>.</li>
        <li>Fill in:
          <ul>
            <li><strong>Exam Name</strong> (e.g., &quot;End of Term 1 Exams&quot;)</li>
            <li><strong>Academic Year</strong> and <strong>Term</strong></li>
            <li><strong>Exam Date</strong> or period</li>
            <li><strong>Maximum Mark</strong> (e.g., 100)</li>
          </ul>
        </li>
        <li>Click <strong>Save Exam</strong>.</li>
      </ol>

      <Screenshot label="Create Exam Form" />

      <h2>Step 2: Enter Student Marks</h2>
      <p>
        Marks are entered per subject, per class. To enter marks:
      </p>
      <ol>
        <li>Go to <strong>Exams</strong> and select the exam you created.</li>
        <li>Click <strong>Enter Marks</strong>.</li>
        <li>Select the <strong>Class</strong> and <strong>Subject</strong>.</li>
        <li>The student list for that class appears with a mark input field next to each student&apos;s name.</li>
        <li>Type the marks for each student.</li>
        <li>Click <strong>Save Marks</strong>.</li>
      </ol>

      <Screenshot label="Mark Entry Form for a Class/Subject" />

      <Note>
        Marks can only be saved if the subject is assigned to the selected class. If a subject does not appear, check your class subject assignments under <strong>Classes → Subjects</strong>.
      </Note>

      <h2>Step 3: View Class Results</h2>
      <p>
        Once all marks for a class are entered, you can view the full class results:
      </p>
      <ol>
        <li>Go to <strong>Exams → Results</strong>.</li>
        <li>Select the <strong>Exam</strong>, <strong>Class</strong>, and <strong>Term</strong>.</li>
        <li>Click <strong>View Results</strong>.</li>
        <li>The results table shows each student&apos;s marks per subject, total score, aggregate, and class position.</li>
      </ol>

      <Screenshot label="Class Results Table" />

      <h2>Understanding Grades and Positions</h2>
      <p>DRAIS computes the following automatically:</p>
      <ul>
        <li><strong>Grade</strong> — Based on the mark percentage (e.g., 80–100% = A, 70–79% = B, etc.)</li>
        <li><strong>Class Position</strong> — Ranked from highest to lowest total score within the class.</li>
        <li><strong>Aggregate</strong> — Sum of grade points across all subjects (used for secondary school ranking).</li>
      </ul>

      <Note>
        The grading scale can be customised in <strong>Settings → Grading</strong> to match your school&apos;s marking system.
      </Note>

      <h2>Step 4: Generate Report Cards</h2>
      <p>
        To generate individual student report cards:
      </p>
      <ol>
        <li>Go to <strong>Exams → Results</strong> and open the class results.</li>
        <li>Click <strong>Generate Report Cards</strong>.</li>
        <li>DRAIS generates a printable PDF report card for each student in the class.</li>
        <li>You can print individual cards or download them all as a ZIP file.</li>
      </ol>

      <Screenshot label="Report Card Preview" />

      <h2>Frequently Asked Questions</h2>

      <h3>What if a student was absent for an exam?</h3>
      <p>
        Leave the mark field blank or enter &quot;0&quot;. You can add a note indicating the student was absent. The system will mark the subject as &quot;Absent&quot; on the report card.
      </p>

      <h3>Can different subjects have different maximum marks?</h3>
      <p>
        Yes. When entering marks, you can set the maximum mark per subject. For example, a practical subject might be marked out of 50 while a written exam is out of 100.
      </p>

      <h3>Who can enter marks?</h3>
      <p>
        By default, teachers can enter marks for subjects assigned to them. The school administrator can enter marks for any subject. This is controlled by the role permissions in <strong>Settings → Roles</strong>.
      </p>

      <p>
        See{" "}
        <Link href="/documentation/reports" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          Generating Reports
        </Link>{" "}
        for how to export attendance and academic performance summaries.
      </p>
    </DocLayout>
  );
}
