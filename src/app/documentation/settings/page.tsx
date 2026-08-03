import React from "react";
import Link from "next/link";
import DocLayout from "@/components/public/DocLayout";
import { Callout, DefTable, Screenshot, Where } from "@/components/public/DocBits";

export const metadata = {
  title: "Settings & Modules | DRAIS Documentation",
  description:
    "School profile, academic structure, attendance rules, modules and the settings worth reviewing each year.",
};

export default function SettingsPage() {
  return (
    <DocLayout
      title="Settings & Modules"
      description="The configuration that shapes how DRAIS behaves for your school."
    >
      <p>
        Most of DRAIS adapts to your school rather than the other way round. This page is a tour of the
        settings that matter, and which ones to revisit at the start of each year.
      </p>

      <h2>School profile</h2>

      <p><Where>Settings → School Information</Where></p>

      <p>
        Name, address, phone, email, motto and logo. These are not cosmetic — they appear on every report card,
        receipt and printed document, and they are frozen into report cards at the moment those are generated.
      </p>

      <Callout kind="tip">
        <p>
          Upload the highest-quality logo you have. It is scaled down for the screen but printed at full
          resolution, and a blurred logo on four hundred report cards is noticed.
        </p>
      </Callout>

      <h2>Academic structure</h2>

      <p><Where>Settings → Academic Years</Where> and <Where>Classes</Where></p>

      <DefTable
        rows={[
          [
            "Academic year",
            <>Create the new year before the year begins. Terms live inside it.</>,
          ],
          [
            "Terms",
            <>
              Term 1, 2, 3 with their start and end dates. Dates matter — they define which days count for
              attendance and which term new records attach to.
            </>,
          ],
          [
            "Current term",
            <>
              The term DRAIS assumes when someone records something without saying otherwise.{" "}
              <strong>Set this at the start of every term.</strong> Forgetting is the most common configuration
              mistake schools make, and it files a whole week of records against the wrong term.
            </>,
          ],
          ["Classes and streams", <>Your levels and their divisions.</>],
          ["Subjects", <>What is taught, and which classes take each subject.</>],
        ]}
      />

      <Callout kind="warning" title="Start-of-term checklist">
        <p>
          Create the term · set it as current · confirm class lists after promotion · check the attendance
          calendar for holidays · confirm fee structures for the term. Five minutes that prevents most of the
          problems schools report in week one.
        </p>
      </Callout>

      <h2>Attendance rules</h2>

      <p><Where>Settings → Attendance</Where></p>

      <ul>
        <li><strong>School day start</strong> — when the day begins.</li>
        <li><strong>Late cut-off</strong> — after this time an arrival counts as late.</li>
        <li><strong>Absence cut-off</strong> — after this, a learner with no scan is absent, and absence notices can go out.</li>
        <li><strong>Working days</strong> — which days of the week count.</li>
        <li><strong>Holidays and closures</strong> — days excluded from attendance figures entirely.</li>
      </ul>

      <p>
        These are applied when attendance is read rather than when it is recorded, so adjusting a cut-off
        re-reads history under the new rule without altering the underlying scans.
      </p>

      <h2>Grading</h2>

      <p><Where>Settings → Grading</Where></p>

      <p>
        The grade scale — the bands, their labels and remarks. DRAIS ships with the standard UCE scale
        (D1–F9) and schools using something else can change it.
      </p>

      <p>
        Aggregate and division thresholds are set here too, along with which subjects contribute to them.
      </p>

      <Callout kind="warning">
        <p>
          Changing the grade scale mid-year affects how existing marks are displayed. Report cards already
          generated keep the grades they were printed with; new ones use the new scale. Change scales between
          years wherever possible.
        </p>
      </Callout>

      <h2>Modules</h2>

      <p><Where>Settings → Modules</Where></p>

      <p>
        Optional areas of DRAIS, enabled per school as part of your subscription. Disabling a module hides it
        from everyone at your school and blocks its features entirely.
      </p>

      <DefTable
        rows={[
          ["Tahfiz", <>Qur&apos;an memorisation tracking for schools running a theology programme.</>],
          ["Payroll", <>Staff salaries and payslips.</>],
          ["Examinations", <>Formal examination management beyond ordinary termly marks.</>],
          ["Pass-outs", <>Gate control for learners leaving during the day, and visitation cards.</>],
          ["Cafeteria / pocket money", <>Custodial learner accounts for boarding schools.</>],
          ["Inventory", <>School assets and stock.</>],
        ]}
      />

      <Callout kind="note">
        <p>
          A disabled module is unavailable to everyone, Super Admins included. Modules reflect what the school
          has, not who the person is. To enable one, speak to DRAIS support.
        </p>
      </Callout>

      <h2>Parent portal visibility</h2>

      <p><Where>Settings → Parent Portal</Where></p>

      <p>
        Choose what guardians can see — attendance, results, fees, announcements. Changes take effect
        immediately. See <Link href="/documentation/parent-portal">The Parent Portal</Link>.
      </p>

      <h2>Communication</h2>

      <p><Where>Settings → Communication</Where></p>

      <p>
        Sender name, whether messages send automatically or await review, quiet hours, and which events
        generate messages. See <Link href="/documentation/notifications">SMS &amp; Notifications</Link>.
      </p>

      <h2>Language</h2>

      <p>
        DRAIS runs in English and Arabic, including right-to-left layout. The interface language is per user,
        so staff can each work in the language they prefer while the school prints report cards in whichever
        language each design specifies.
      </p>

      <Screenshot label="Settings overview" />

      <h2>What to review each year</h2>

      <ol>
        <li>Create the new academic year and its terms.</li>
        <li>Set the current term.</li>
        <li>Run promotion, then verify a sample of class lists.</li>
        <li>Confirm fee structures for the new year.</li>
        <li>Review staff accounts — disable leavers, add new staff.</li>
        <li>Enter the year&apos;s holidays into the attendance calendar.</li>
        <li>Reprint one report card from the previous year to confirm nothing has shifted.</li>
      </ol>

      <h2>Related</h2>
      <ul>
        <li><Link href="/documentation/roles-permissions">Users, Roles &amp; Permissions</Link></li>
        <li><Link href="/documentation/getting-started">Setting Up Your School</Link></li>
        <li><Link href="/documentation/data-safety">Data Safety &amp; Backups</Link></li>
      </ul>
    </DocLayout>
  );
}
