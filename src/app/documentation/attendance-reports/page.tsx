import React from "react";
import Link from "next/link";
import DocLayout from "@/components/public/DocLayout";
import { Callout, DefTable, Screenshot, Where } from "@/components/public/DocBits";

export const metadata = {
  title: "Attendance Reports | DRAIS Documentation",
  description:
    "Reading daily registers, term summaries and absence patterns — and how DRAIS decides who was present.",
};

export default function AttendanceReportsPage() {
  return (
    <DocLayout
      title="Attendance Reports"
      description="Turning scans into registers, summaries and the answers inspectors ask for."
    >
      <p>
        Recording attendance is only half of it. This guide covers reading it back: the daily register, term
        summaries, absence patterns, and how DRAIS decides whether a learner counts as present, late or
        absent.
      </p>

      <h2>How present, late and absent are decided</h2>

      <p>
        DRAIS keeps every scan exactly as it happened, then applies your school&apos;s rules on top. The rules
        live in <Where>Settings → Attendance</Where> and are yours to set.
      </p>

      <DefTable
        rows={[
          [
            "Present",
            <>A scan arrived within the window your school considers on time.</>,
          ],
          [
            "Late",
            <>
              A scan arrived after the cut-off time you configured. Still present — but counted separately, so
              lateness is visible rather than hidden inside a presence figure.
            </>,
          ],
          [
            "Absent",
            <>No scan for that learner on a day the school was open to them.</>,
          ],
          [
            "Excused",
            <>
              Marked by staff — sickness, permission, a school trip. Excused days are separated from
              unexplained absence in every summary.
            </>,
          ],
        ]}
      />

      <Callout kind="note" title="Rules apply at reading time, not recording time">
        <p>
          If you change your late cut-off from 8:00 to 8:15, past attendance is re-read under the new rule.
          The underlying scans never change — only the interpretation. This is what lets a school adjust its
          policy without corrupting its history.
        </p>
      </Callout>

      <h2>The daily register</h2>

      <p>
        Go to <Where>Attendance → Daily</Where>, choose a class and a date. You get the register as your
        teachers expect it: every learner, their status, and the actual arrival time where there was a scan.
      </p>

      <ul>
        <li>Sort by status to see absences together.</li>
        <li>Mark excused absences directly in the register.</li>
        <li>Add a manual entry for a learner whose scan failed — it is recorded as manual, not passed off as a device reading.</li>
        <li>Export or print for filing.</li>
      </ul>

      <Screenshot label="Daily register for a class" />

      <Callout kind="tip">
        <p>
          The distinction between a device scan and a manual entry is preserved everywhere. When an inspector
          asks how you know a learner was present, you can answer precisely — and a register that is entirely
          manual entries looks different from one that is entirely scans, which is exactly as it should be.
        </p>
      </Callout>

      <h2>Live attendance</h2>

      <p>
        <Where>Attendance → Live</Where> shows arrivals as they happen. During the morning rush you see each
        learner appear with their name, class and photo seconds after they scan.
      </p>

      <p>Schools use it for:</p>
      <ul>
        <li>confirming a newly enrolled fingerprint works, without waiting for a report;</li>
        <li>spotting a device that has stopped reporting mid-morning;</li>
        <li>a visible presence at the gate on the first days of term.</li>
      </ul>

      <h2>Term summaries</h2>

      <p>
        <Where>Attendance → Summary</Where> gives the figures that go into report cards and board meetings:
        days open, days attended, days absent, days late, and attendance percentage — per learner, per class,
        or for the whole school.
      </p>

      <DefTable
        rows={[
          ["Per learner", <>Goes onto the report card. Parents ask about this one.</>],
          ["Per class", <>Compare classes and streams. Useful for identifying a class with a pattern rather than a problem child.</>],
          ["Whole school", <>The headline figure, and the trend across terms.</>],
        ]}
      />

      <h2>Finding patterns</h2>

      <p>
        The reports most worth running are the ones that surface a problem before anyone complains:
      </p>

      <ul>
        <li>
          <strong>Consecutive absence</strong> — learners absent several days running. Often the first sign a
          child has quietly stopped coming.
        </li>
        <li>
          <strong>Chronic lateness</strong> — repeatedly late but never absent, so never flagged by a
          presence figure.
        </li>
        <li>
          <strong>Day-of-week patterns</strong> — absence clustered on particular days.
        </li>
        <li>
          <strong>Never scanned</strong> — learners with no scan all term. Usually an enrolment problem, not
          an attendance problem: check their fingerprint status first.
        </li>
      </ul>

      <Callout kind="warning" title="Read a zero carefully">
        <p>
          A learner showing 0% attendance is far more likely to have a broken fingerprint link than to have
          missed an entire term. Check the learner profile&apos;s fingerprint panel before contacting the
          family.
        </p>
      </Callout>

      <h2>Attendance on report cards</h2>

      <p>
        Attendance figures can be printed on report cards — days attended out of days open, and a percentage.
        The values are frozen into the report card when it is generated, so a reprint shows the same figures
        as the original. See <Link href="/documentation/reports">Report Cards</Link>.
      </p>

      <h2>Exporting</h2>

      <p>
        Every attendance view can be exported for your own records or for a ministry return. Where a report is
        going outside the school, print or export it from DRAIS rather than retyping — the figures then match
        what the system holds, and can be checked against it later.
      </p>

      <h2>Related</h2>
      <ul>
        <li><Link href="/documentation/attendance">How Attendance Works</Link></li>
        <li><Link href="/documentation/devices">Fingerprint Devices</Link></li>
        <li><Link href="/documentation/notifications">SMS &amp; Notifications</Link></li>
      </ul>
    </DocLayout>
  );
}
