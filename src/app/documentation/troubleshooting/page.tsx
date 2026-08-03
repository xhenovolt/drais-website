import React from "react";
import Link from "next/link";
import DocLayout from "@/components/public/DocLayout";
import { Callout, Where } from "@/components/public/DocBits";

export const metadata = {
  title: "Troubleshooting | DRAIS Documentation",
  description:
    "The problems schools actually report, and how to resolve them before contacting support.",
};

export default function TroubleshootingPage() {
  return (
    <DocLayout
      title="Troubleshooting"
      description="The issues schools report most often — and what they usually turn out to be."
    >
      <p>
        Most support requests resolve to one of a dozen causes. Working through the relevant section below
        will usually get you there faster than waiting for a reply.
      </p>

      <h2>Attendance</h2>

      <h3>A learner shows 0% attendance for the whole term</h3>
      <p>
        Nearly always an enrolment problem, not an attendance problem. Open the learner profile and check the
        fingerprint panel. If it says not enrolled, or enrolled but never distributed to a device, that is your
        answer — re-enrol them.
      </p>

      <h3>Scans are happening but nothing reaches DRAIS</h3>
      <p>
        Check <Where>Devices</Where> for the device&apos;s last-seen time. If it is stale, the device has lost
        its network connection; records are usually stored locally and arrive when it reconnects. If the device
        is online, look in <Where>Devices → Reconciliation</Where> for unlinked PINs — the scans are arriving
        but cannot be matched to a learner.
      </p>

      <h3>Attendance is credited to the wrong learner</h3>
      <p>
        The identity link is wrong. Use <strong>Correct Identity</strong> from the learner profile. DRAIS shows
        what will change before you confirm, moves the PIN to the right learner, and re-attributes the affected
        history. The original scans are preserved.
      </p>

      <h3>Arrival times are hours off</h3>
      <p>
        The device clock has drifted. DRAIS records the true arrival instant regardless, so your data is not
        wrong — but correct the device clock, and tell support if it recurs on the same device.
      </p>

      <h3>Learners marked absent who were present</h3>
      <p>
        Check the absence cut-off time in <Where>Settings → Attendance</Where>. A cut-off earlier than your
        actual assembly time marks late arrivals as absent.
      </p>

      <h2>Marks and report cards</h2>

      <h3>Marks were entered but do not appear</h3>
      <p>
        Check the term. Marks entered while the wrong term was set as current are filed against that term.
        Look at <Where>Settings → Academic Years</Where> to confirm the current term, then check the term
        selector on the marks screen.
      </p>

      <h3>A report card shows old marks</h3>
      <p>
        Report cards are fixed copies taken at generation time — that is what makes a reprint reproduce the
        original. If marks have since been corrected, generate the report cards again to pick them up.
      </p>

      <h3>Aggregate or division looks wrong</h3>
      <p>
        Check which subjects are configured to contribute. Electives and religious education do not count
        toward aggregates by default, which is usually correct but occasionally not what a particular school
        intends. Review it in <Where>Settings → Grading</Where>.
      </p>

      <h3>A learner is missing from the class results</h3>
      <p>
        Confirm their enrolment is in that class for that term, and that they have not been marked as left.
      </p>

      <h3>The report card layout is wrong on paper</h3>
      <p>
        Print a single learner first. Check paper size (A4 versus letter) and that the design is
        <strong> published</strong> rather than still in draft — a draft is not used for printing.
      </p>

      <h2>Fees</h2>

      <h3>A balance does not match the receipts</h3>
      <p>
        Open the learner&apos;s statement — every charge and payment is listed in order. The discrepancy is
        almost always either a charge applied twice by two billing runs, or a payment recorded against the
        wrong term.
      </p>

      <h3>An imported payment went to the wrong learner</h3>
      <p>
        This happens when a row was matched by name. Reverse the payment with a correcting entry and record it
        against the right learner. Both entries stay visible, which is correct.
      </p>

      <h3>A money location balance does not match the cash</h3>
      <p>
        Usually missing transfers. Cash banked at the end of the day must be recorded as a transfer from the
        cash location to the bank location, or the cash location keeps showing money that is no longer there.
      </p>

      <h2>Messages</h2>

      <h3>Guardians are not receiving SMS</h3>
      <p>Check in this order:</p>
      <ol>
        <li>Message credits — <Where>Communication → Usage</Where>.</li>
        <li>Whether the rule is set to reviewed rather than automatic; the messages may be sitting in the queue.</li>
        <li>Quiet hours — messages generated inside the window are held.</li>
        <li>The delivery report, for failures against specific numbers.</li>
      </ol>

      <h3>One family never receives messages</h3>
      <p>
        Check the number on the learner record, including the country code. A number saved without it will
        never deliver.
      </p>

      <h3>Credits are being consumed faster than expected</h3>
      <p>
        Arrival alerts are usually the cause — one message per learner per day. Check the usage breakdown by
        message type, and check your template length: a message over 160 characters costs double.
      </p>

      <h2>Access</h2>

      <h3>A staff member cannot see something they should</h3>
      <p>
        Check their role&apos;s permissions first, then check whether the relevant module is enabled. A
        disabled module is invisible to everyone, including Super Admins.
      </p>

      <h3>A guardian cannot sign in to the portal</h3>
      <p>
        Confirm the phone number on the learner record matches the phone they are using, and that their link
        has been approved rather than left pending in <Where>Parents → Link Requests</Where>.
      </p>

      <h3>Nobody can sign in as an administrator</h3>
      <p>Contact DRAIS support. This is why keeping two Super Admins is worth doing.</p>

      <h2>Records</h2>

      <h3>Something has disappeared</h3>
      <p>
        Check <Where>Settings → Trash</Where> and restore it. This is the answer more often than any other
        single item on this page.
      </p>

      <h3>A learner appears twice</h3>
      <p>
        Merge them from <Where>Learners → Duplicates</Where>. DRAIS shows what will move before you confirm,
        and archives rather than destroys the record you do not keep.
      </p>

      <h3>Something changed and nobody knows who changed it</h3>
      <p>Check <Where>Settings → Audit Log</Where>.</p>

      <Callout kind="tip" title="Before you contact support">
        <p>Having these to hand turns a long exchange into a short one:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>What you expected to happen, and what happened instead.</li>
          <li>The learner or record involved — name and admission number.</li>
          <li>The date and term.</li>
          <li>A screenshot, including the whole window rather than just the message.</li>
          <li>Whether it affects one record or many.</li>
        </ul>
      </Callout>

      <h2>Still stuck?</h2>
      <p>
        Reach the DRAIS team through the{" "}
        <Link href="/contact">Contact page</Link> or the{" "}
        <Link href="/support">Support page</Link>. Support can see your school&apos;s configuration and, with
        your permission, look at the same screens you are looking at.
      </p>
    </DocLayout>
  );
}
