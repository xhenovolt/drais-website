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

export default function ReportsDocPage() {
  return (
    <DocLayout
      title="Generating Reports"
      description="How to create attendance reports, academic performance summaries, and printable documents from DRAIS."
    >
      <p>
        DRAIS can generate a variety of reports for attendance, academic performance, and school administration. All reports can be viewed on screen and exported as PDF or Excel.
      </p>

      <h2>Attendance Reports</h2>
      <p>Attendance reports summarise student arrival and absence data over any period of time.</p>

      <h3>How to Generate an Attendance Report</h3>
      <ol>
        <li>Go to <strong>Attendance</strong> in the main menu.</li>
        <li>Click <strong>Reports</strong> at the top of the page.</li>
        <li>Select the filters:
          <ul>
            <li><strong>Date Range</strong> — Choose start and end dates.</li>
            <li><strong>Class</strong> — Specific class or all classes.</li>
            <li><strong>Student</strong> — Individual student report or all students.</li>
          </ul>
        </li>
        <li>Click <strong>Generate Report</strong>.</li>
      </ol>

      <Screenshot label="Attendance Report Filters and Preview" />

      <h3>What the Report Shows</h3>
      <p>The attendance report includes:</p>
      <ul>
        <li>Total school days in the selected period</li>
        <li>Days present, days late, and days absent per student</li>
        <li>Attendance percentage per student</li>
        <li>Overall class attendance rate</li>
      </ul>

      <h3>Exporting the Report</h3>
      <p>After generating the report, click:</p>
      <ul>
        <li><strong>Download PDF</strong> — For printing or sharing as a document.</li>
        <li><strong>Download Excel</strong> — For further analysis in a spreadsheet.</li>
      </ul>

      <Screenshot label="Report Download Options" />

      <h2>Academic Performance Reports</h2>
      <p>These reports show student and class performance across exams and subjects.</p>

      <h3>How to Generate an Academic Report</h3>
      <ol>
        <li>Go to <strong>Exams → Results</strong>.</li>
        <li>Select the <strong>Exam</strong>, <strong>Class</strong>, and <strong>Term</strong>.</li>
        <li>Click <strong>Generate Report</strong>.</li>
        <li>Choose between <strong>Class Summary</strong> (all students, all subjects) or <strong>Subject Analysis</strong> (performance per subject).</li>
      </ol>

      <Screenshot label="Academic Performance Report" />

      <h2>Student Report Cards</h2>
      <p>
        Individual report cards are generated from exam results. See the{" "}
        <Link href="/documentation/exams" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          Exams &amp; Marks
        </Link>{" "}
        guide for instructions on generating report cards.
      </p>

      <h2>Dashboard Overview</h2>
      <p>
        The main DRAIS dashboard gives you a quick summary of:
      </p>
      <ul>
        <li>Today&apos;s attendance (present, late, absent counts)</li>
        <li>Total students enrolled</li>
        <li>Recent activity</li>
        <li>Quick links to common tasks</li>
      </ul>

      <Screenshot label="Admin Dashboard Overview" />

      <h2>Tips for Better Reports</h2>
      <ul>
        <li>Run attendance reports at the end of each week to catch patterns early.</li>
        <li>Generate class performance reports after each exam to identify struggling students.</li>
        <li>Download attendance reports each month and keep records for school inspection purposes.</li>
        <li>Use individual student reports for parent-teacher meetings to show specific attendance history.</li>
      </ul>

      <p>
        If you need additional reporting features, <Link href="/contact" className="text-indigo-600 dark:text-indigo-400 hover:underline">contact our support team</Link> or check the{" "}
        <Link href="/documentation" className="text-indigo-600 dark:text-indigo-400 hover:underline">documentation index</Link> for more guides.
      </p>
    </DocLayout>
  );
}
