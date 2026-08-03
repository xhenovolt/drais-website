import React from "react";
import Link from "next/link";
import DocLayout from "@/components/public/DocLayout";
import { Callout, DefTable, Screenshot, Steps, Step, Where } from "@/components/public/DocBits";

export const metadata = {
  title: "Managing Learners | DRAIS Documentation",
  description:
    "Transfers, promotions, leavers and corrections — keeping learner records accurate over the years.",
};

export default function ManagingLearnersPage() {
  return (
    <DocLayout
      title="Managing Learners"
      description="What happens after admission — transfers, promotion, leavers, duplicates and corrections."
    >
      <p>
        Admitting a learner is a one-off. Everything after that is the long work: they change stream, repeat a
        year, go on to the next class, leave and sometimes come back. This guide covers keeping those records
        right, and the few operations that need care.
      </p>

      <h2>The learner profile</h2>

      <p>
        Open any learner from <Where>Learners</Where>. The profile brings together everything DRAIS knows about
        them in one place:
      </p>

      <ul>
        <li><strong>Details</strong> — name, admission number, date of birth, gender, photo.</li>
        <li><strong>Enrolment</strong> — current class and stream, and the history of previous ones.</li>
        <li><strong>Guardians</strong> — contacts, and which of them have parent portal access.</li>
        <li><strong>Attendance</strong> — daily record and summary for the term.</li>
        <li><strong>Results</strong> — marks by term, and report cards generated for them.</li>
        <li><strong>Fees</strong> — charges, payments and current balance.</li>
        <li><strong>Fingerprint</strong> — enrolment status and which device holds it.</li>
      </ul>

      <Screenshot label="Learner profile with the section tabs" />

      <Callout kind="tip">
        <p>
          The fingerprint panel tells you not just whether a learner is enrolled but <em>where in the process
          it is stuck</em> if they are not — captured but not distributed, distributed but never scanned, and
          so on. That is usually enough to fix the problem without contacting support.
        </p>
      </Callout>

      <h2>Moving a learner between classes or streams</h2>

      <Steps>
        <Step title="Open the learner and choose Change Class">
          From the profile, or in bulk from <Where>Learners → Reassign</Where> when moving several at once.
        </Step>
        <Step title="Pick the new class, stream and term">
          DRAIS closes the current enrolment and opens a new one.
        </Step>
        <Step title="Confirm">
          Previous marks, attendance and fees stay exactly where they were — attached to the enrolment they
          were recorded under.
        </Step>
      </Steps>

      <Callout kind="note" title="Why history does not follow them">
        <p>
          A learner who moves from S1 East to S1 West in Term 2 keeps their Term 1 record under S1 East.
          That is correct: the Term 1 report card should say S1 East, because that is where they were. DRAIS
          never rewrites past enrolments to match the present one.
        </p>
      </Callout>

      <h2>End of year: promotion</h2>

      <p>
        At the end of an academic year you move whole classes up at once from
        <Where>Learners → Promotion</Where>.
      </p>

      <Steps>
        <Step title="Choose the year you are closing and the year you are opening">
          Create the new academic year and its terms first if you have not already.
        </Step>
        <Step title="Map each class to its successor">
          P4 → P5, S3 → S4, and so on. Final-year classes map to <strong>Leaving</strong>.
        </Step>
        <Step title="Mark the exceptions">
          Repeaters stay in their current class. Learners not returning are marked as leaving.
        </Step>
        <Step title="Preview, then run">
          DRAIS shows exactly how many learners move where before anything is written. Read that screen
          properly — it is much easier than unwinding afterwards.
        </Step>
      </Steps>

      <Callout kind="warning">
        <p>
          Run promotion once, after results are final. Running it twice creates a second set of enrolments.
          If you are unsure whether it has already been run, check the current class of a few learners
          before proceeding.
        </p>
      </Callout>

      <h2>Learners who leave</h2>

      <p>
        Mark a learner as left from their profile — with a reason and a date. They stop appearing in class
        lists, registers and mark sheets from that point, while everything they accumulated stays intact and
        searchable.
      </p>

      <p>Two follow-ups are worth doing at the same time:</p>
      <ul>
        <li>
          <strong>Remove their fingerprint from the device.</strong> Otherwise the device keeps recognising
          them locally. DRAIS can queue this for you from the learner profile.
        </li>
        <li>
          <strong>Settle or write off the fee balance</strong>, so your outstanding figures stay meaningful.
        </li>
      </ul>

      <h3>If they come back</h3>
      <p>
        Do not admit them again as a new learner. Find the existing record and re-enrol them. Re-admitting
        creates a duplicate, splits their history in two, and takes far longer to fix than to avoid.
      </p>

      <h2>Duplicates</h2>

      <p>
        Duplicates happen — the same child admitted twice with slightly different spellings, or once by the
        office and once during a bulk import. The symptom is usually attendance that looks wrong: half the
        days under one record, half under the other.
      </p>

      <p>
        Go to <Where>Learners → Duplicates</Where>. DRAIS groups likely duplicates by name and shows you what
        each record holds. You choose which record to keep, preview exactly what will move, and merge.
      </p>

      <ul>
        <li>All attendance, marks and payments move to the record you keep.</li>
        <li>The other record is archived — recoverable, not destroyed.</li>
        <li>The whole operation is logged.</li>
      </ul>

      <Callout kind="tip" title="Prevent them instead">
        <p>
          Most duplicates are created at admission by staff who search for &quot;Nakato&quot;, find nothing
          because the record says &quot;Nakatto&quot;, and create a new one. Search by admission number, or by
          part of a name rather than the whole name, before admitting.
        </p>
      </Callout>

      <h2>Correcting details</h2>

      <p>
        Names, dates of birth and guardian contacts can be edited directly on the profile. Changes are
        recorded in the audit log with who made them and when.
      </p>

      <DefTable
        rows={[
          [
            "Admission number",
            <>
              Changeable, but think first — it appears on printed documents already issued. If the number is
              simply wrong, correct it. If the learner has a new number for administrative reasons, consider
              whether that is really the same record.
            </>,
          ],
          [
            "Name",
            <>
              Safe to correct. Note that if the fingerprint was enrolled on the device keypad under the old
              spelling, the device will still show the old name until it is re-synced.
            </>,
          ],
          [
            "Class",
            <>Use Change Class rather than editing — it keeps the enrolment history right.</>,
          ],
        ]}
      />

      <h2>Deleting a learner</h2>

      <p>
        Removing a learner moves them to <Where>Trash</Where>, where an administrator can restore them.
        Before permanent deletion, DRAIS shows what else would be affected — the reports, attendance records
        and payments attached to them.
      </p>

      <Callout kind="warning">
        <p>
          In almost every case the right action is to mark a learner as <strong>left</strong>, not to delete
          them. Deleting is for genuine mistakes — a record created twice, or a test entry. A learner who
          actually attended your school should keep their history.
        </p>
      </Callout>

      <h2>Related</h2>
      <ul>
        <li><Link href="/documentation/admitting-students">Admitting a Student</Link></li>
        <li><Link href="/documentation/parent-portal">The Parent Portal</Link></li>
        <li><Link href="/documentation/data-safety">Data Safety &amp; Backups</Link></li>
      </ul>
    </DocLayout>
  );
}
