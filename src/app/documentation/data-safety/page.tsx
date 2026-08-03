import React from "react";
import Link from "next/link";
import DocLayout from "@/components/public/DocLayout";
import { Callout, DefTable, Screenshot, Where } from "@/components/public/DocBits";

export const metadata = {
  title: "Data Safety & Backups | DRAIS Documentation",
  description:
    "Where your school's data lives, how to recover something deleted, and how to take a copy you control.",
};

export default function DataSafetyPage() {
  return (
    <DocLayout
      title="Data Safety & Backups"
      description="What happens to your data, how to get something back, and how to hold your own copy."
    >
      <p>
        Your school&apos;s records are the reason DRAIS exists. This page explains where they live, what
        protects them, and — most practically — how to recover something when a member of staff deletes the
        wrong thing.
      </p>

      <h2>Where your data lives</h2>

      <p>
        DRAIS runs on managed cloud infrastructure with automatic backups at the platform level. Your
        school&apos;s data is stored separately from every other school&apos;s and is only ever accessible
        through your own sign-ins.
      </p>

      <p>
        Schools that need to work without reliable internet can run DRAIS locally on a machine at the school.
        Speak to support about which arrangement suits you.
      </p>

      <h2>Recovering something deleted</h2>

      <p>
        This is the situation schools actually face, and it is usually a two-minute fix.
      </p>

      <p>
        <strong>Almost nothing in DRAIS is deleted immediately.</strong> Removing a learner, class, subject,
        staff member or payment moves it to <Where>Settings → Trash</Where>, where an administrator can put it
        back.
      </p>

      <DefTable
        rows={[
          ["Find it", <>Open Trash and pick the type of thing that went missing. Search by name.</>],
          ["Check it", <>Trash shows what was deleted, when, and by whom.</>],
          ["Restore it", <>The record returns with its history intact.</>],
        ]}
      />

      <Screenshot label="Trash with restorable records" />

      <Callout kind="tip" title="Look in Trash first">
        <p>
          When someone reports that a learner &quot;disappeared&quot;, check Trash before anything else. It is
          the answer far more often than not, and it takes seconds.
        </p>
      </Callout>

      <h3>Permanent deletion</h3>

      <p>
        Emptying something from Trash permanently is deliberately harder: it requires an administrator, an
        explicit confirmation, and DRAIS first shows what else would be affected — the reports, attendance
        records and payments attached to the record.
      </p>

      <Callout kind="warning">
        <p>
          Permanent deletion cannot be undone from within DRAIS. Unless you are clearing an obvious mistake —
          a duplicate created in error, a test record — leave things in Trash. Trash costs you nothing.
        </p>
      </Callout>

      <h2>Taking your own backup</h2>

      <p>
        Platform backups protect the service. A backup you hold protects you. From
        <Where>Settings → Backup</Where> an administrator can generate a complete copy of your school&apos;s
        data.
      </p>

      <ul>
        <li>It covers your school only — never any other school&apos;s records.</li>
        <li>It is a standard database file, not a proprietary format.</li>
        <li>It is stored securely and can be downloaded.</li>
        <li>Large schools receive it in several parts, which are recombined before use.</li>
      </ul>

      <Callout kind="note" title="What a backup is for">
        <p>
          It is your independent copy — for your own peace of mind, for a board that wants assurance, or for a
          handover. Restoring one is a support operation rather than a button in the interface, so contact
          DRAIS if you ever need to use it.
        </p>
      </Callout>

      <h3>How often</h3>

      <p>
        Once a term is enough for most schools, taken at a natural boundary: after results are finalised, or at
        the end of term. Keep the file somewhere that is not the same laptop everything else is on.
      </p>

      <Callout kind="warning" title="A backup contains real learner data">
        <p>
          Treat the file the way you would treat a filing cabinet of learner records. Do not email it, do not
          leave it on a shared machine, and do not upload it anywhere your school does not control.
        </p>
      </Callout>

      <h2>The audit trail</h2>

      <p>
        DRAIS records who did what and when. <Where>Settings → Audit Log</Where> shows the significant actions
        — records created, changed and deleted, sign-ins, permission changes, and corrections.
      </p>

      <p>
        This is not only for investigating problems. It is what lets you answer a parent&apos;s question about
        a changed mark with a fact rather than an assurance.
      </p>

      <h2>Corrections keep their history</h2>

      <p>Across DRAIS, a correction adds to the record rather than replacing it:</p>

      <ul>
        <li>A fingerprint credited to the wrong learner is re-pointed; the original scans are untouched and the correction is logged.</li>
        <li>A payment entered wrongly is reversed with a correcting entry; both remain visible.</li>
        <li>Merging duplicate learners archives the record you did not keep rather than destroying it.</li>
        <li>Report cards already generated stay exactly as printed.</li>
      </ul>

      <Callout kind="success">
        <p>
          The point of all of this is simple: when someone asks your school to prove something — a parent, a
          board, an inspector — you can. A system that lets the past be quietly rewritten cannot do that.
        </p>
      </Callout>

      <h2>Your responsibilities</h2>

      <p>DRAIS protects the data. A few things remain yours:</p>

      <ul>
        <li><strong>Individual accounts.</strong> Shared logins destroy the audit trail.</li>
        <li><strong>Disable leavers promptly.</strong> Same day, every time.</li>
        <li><strong>Keep Super Admins few.</strong> Two is usually right.</li>
        <li><strong>Review the audit log occasionally</strong>, rather than only when something has gone wrong.</li>
        <li><strong>Take a termly backup</strong> and store it somewhere sensible.</li>
      </ul>

      <h2>Related</h2>
      <ul>
        <li><Link href="/documentation/roles-permissions">Users, Roles &amp; Permissions</Link></li>
        <li><Link href="/documentation/managing-learners">Managing Learners</Link></li>
        <li><Link href="/documentation/troubleshooting">Troubleshooting</Link></li>
      </ul>
    </DocLayout>
  );
}
