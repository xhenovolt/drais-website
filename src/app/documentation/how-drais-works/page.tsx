import React from "react";
import Link from "next/link";
import DocLayout from "@/components/public/DocLayout";
import { Callout, DefTable, Screenshot } from "@/components/public/DocBits";

export const metadata = {
  title: "How DRAIS Works | DRAIS Documentation",
  description:
    "The ideas behind DRAIS — schools, terms, learners, enrolment and identity — and how the parts fit together.",
};

export default function HowDraisWorksPage() {
  return (
    <DocLayout
      title="How DRAIS Works"
      description="The handful of ideas everything else is built on. Ten minutes here saves hours later."
    >
      <p>
        DRAIS is a school management system built around one simple claim: <strong>a school should be able to
        prove what happened.</strong> Who came to school, on which day, at what time. What each learner scored.
        What was paid, by whom, and when. Every feature in DRAIS exists to make one of those facts recordable,
        checkable and printable.
      </p>

      <p>
        This page explains the concepts the rest of the documentation assumes. You do not need any technical
        background, but you will get much more out of DRAIS if you read it once before setting up.
      </p>

      <h2>The vocabulary</h2>

      <DefTable
        rows={[
          [
            "School",
            <>
              Your institution. Everything in DRAIS belongs to exactly one school — learners, staff, marks,
              money, devices. Two schools using DRAIS never see each other&apos;s data, even if they share a
              director or a fingerprint device.
            </>,
          ],
          [
            "Academic year",
            <>The year your school runs, for example 2025/2026. Terms live inside it.</>,
          ],
          [
            "Term",
            <>
              A period within the academic year — Term 1, Term 2, Term 3. Almost everything in DRAIS is
              recorded <em>against a term</em>: marks, fees, attendance summaries, report cards.
            </>,
          ],
          [
            "Class and stream",
            <>
              A class is a level (Senior 1, Primary 4). A stream is a division within it (S1 East, S1 West).
              Streams are optional — schools without them simply use classes.
            </>,
          ],
          [
            "Learner",
            <>
              A student at your school. In DRAIS a learner has a permanent identity that survives changing
              class, changing stream, and moving from one year to the next.
            </>,
          ],
          [
            "Enrolment",
            <>
              The link that says <em>this learner is in this class, this term</em>. A learner has one active
              enrolment at a time and a history of previous ones. This is why last year&apos;s report card
              still says the class they were in last year.
            </>,
          ],
          [
            "Staff member",
            <>
              A teacher, bursar, director of studies or administrator. Staff have accounts and roles;
              what they can see and do comes from their role.
            </>,
          ],
        ]}
      />

      <Callout kind="tip" title="Why enrolment matters">
        <p>
          The distinction between a <strong>learner</strong> and an <strong>enrolment</strong> is the single
          most useful idea in DRAIS. The learner is the child. The enrolment is where they sat this term. Keeping
          them separate is what lets DRAIS promote a whole class into the next year without losing a single
          historical mark or attendance record.
        </p>
      </Callout>

      <h2>The shape of the system</h2>

      <p>DRAIS has five working areas. Most schools switch them on gradually rather than all at once.</p>

      <h3>1. People</h3>
      <p>
        Learners and staff. Admissions, profiles, guardians and contact details, transfers between classes,
        and the record of who left and when. This is the foundation — every other area refers back to it.
      </p>

      <h3>2. Attendance</h3>
      <p>
        Fingerprint devices at the gate record arrivals and departures automatically. DRAIS turns those raw
        scans into daily attendance, flags absences, and can notify guardians. Manual attendance is supported
        for schools without devices, and for the days when a device is down.
      </p>
      <p>
        Read <Link href="/documentation/attendance">How Attendance Works</Link> for the full picture — it is the
        part of DRAIS most schools care about most.
      </p>

      <h3>3. Academics</h3>
      <p>
        Subjects, exams, marks, grading and report cards. DRAIS computes totals, averages, positions,
        aggregates and divisions, and prints report cards from a design your school controls.
      </p>

      <h3>4. Finance</h3>
      <p>
        Fee structures, per-learner charges, payments, receipts and balances. Every balance in DRAIS is
        calculated from the payment history rather than stored as a number someone can edit — which is what
        makes the figures defensible during an audit.
      </p>

      <h3>5. Communication</h3>
      <p>
        SMS to guardians: arrival and departure alerts, absence notices, fee reminders, announcements.
        Your school decides which events send messages and whether they go automatically or after a staff
        member reviews them.
      </p>

      <Screenshot label="DRAIS dashboard showing the five areas" />

      <h2>Three principles worth knowing</h2>

      <h3>Records are kept, not overwritten</h3>
      <p>
        When something is corrected in DRAIS, the original is preserved alongside the correction. A fingerprint
        mapped to the wrong learner is re-pointed, not deleted. A staff member who is promoted gets a new
        employment record, not an edited one. A payment entered by mistake is reversed with a compensating
        entry rather than erased.
      </p>
      <p>
        This is deliberate. A system that lets you quietly rewrite the past cannot be used to prove anything
        about it.
      </p>

      <h3>Deleting is reversible</h3>
      <p>
        Almost nothing is truly deleted. Removing a learner, a class or a subject moves it to
        <strong> Trash</strong>, where an administrator can restore it. Permanent deletion is a separate,
        deliberately awkward action that requires confirmation and is written to the audit log.
      </p>

      <h3>A printed report card does not change</h3>
      <p>
        When you generate report cards, DRAIS takes a fixed copy of the marks at that moment. Reprinting the
        same report card next term produces the same document, even if marks have since been corrected. If you
        need the corrected version, you generate again — and both are traceable.
      </p>

      <Callout kind="note">
        <p>
          Every printed report card carries a QR code. Scanning it opens a page that confirms the document is
          genuine and shows what DRAIS recorded — so a parent or a receiving school can verify a report card
          without phoning your office.
        </p>
      </Callout>

      <h2>Who sees what</h2>

      <p>DRAIS has three separate kinds of user, and they are kept strictly apart:</p>

      <DefTable
        rows={[
          [
            "School staff",
            <>
              Sign in to the school system. What each person sees is controlled by their role — a bursar sees
              finance, a class teacher sees their class, an administrator sees everything.
            </>,
          ],
          [
            "Parents and guardians",
            <>
              Sign in to the parent portal with their phone number. They see only their own children — never
              another family&apos;s learner, under any circumstances.
            </>,
          ],
          [
            "DRAIS support",
            <>
              The Xhenvolt team operates the platform itself. Support staff can assist your school when asked,
              and every such action is recorded in an audit trail your administrator can read.
            </>,
          ],
        ]}
      />

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/documentation/getting-started">Setting Up Your School</Link> — the practical first-day
          checklist.
        </li>
        <li>
          <Link href="/documentation/roles-permissions">Users, Roles &amp; Permissions</Link> — decide who can
          see what before you add staff.
        </li>
        <li>
          <Link href="/documentation/attendance">How Attendance Works</Link> — if fingerprint attendance is why
          you came to DRAIS.
        </li>
      </ul>
    </DocLayout>
  );
}
