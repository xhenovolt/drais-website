import React from "react";
import Link from "next/link";
import DocLayout from "@/components/public/DocLayout";
import { Callout, DefTable, Screenshot, Steps, Step, Where } from "@/components/public/DocBits";

export const metadata = {
  title: "Users, Roles & Permissions | DRAIS Documentation",
  description:
    "Adding staff, choosing roles, and controlling exactly what each person can see and do.",
};

export default function RolesPermissionsPage() {
  return (
    <DocLayout
      title="Users, Roles & Permissions"
      description="Give each staff member exactly the access their job needs — and nothing beyond it."
    >
      <p>
        Everyone who signs in to DRAIS is a user. What they can see and do comes from their role. Getting this
        right early is worth the twenty minutes it takes, because it is much harder to take access away later
        than to grant it in the first place.
      </p>

      <h2>Users, roles and permissions</h2>

      <DefTable
        rows={[
          ["User", <>One person with a sign-in. A teacher, the bursar, the headteacher.</>],
          [
            "Role",
            <>
              A named job — Teacher, Bursar, Director of Studies. A role carries a set of permissions, and
              users are given roles rather than individual permissions.
            </>,
          ],
          [
            "Permission",
            <>
              One specific ability, such as viewing results or recording a payment. DRAIS has around 170,
              grouped by area.
            </>,
          ],
        ]}
      />

      <p>
        You will spend nearly all your time working with roles. Permissions matter when you want to build a
        role that does not already exist.
      </p>

      <h2>The built-in roles</h2>

      <DefTable
        rows={[
          [
            "Super Admin",
            <>
              Everything, including managing other users. Usually the director or head. <strong>Keep the number
              of Super Admins small</strong> — two is sensible, so nobody is locked out if one is unavailable.
            </>,
          ],
          ["Admin", <>Day-to-day administration across most areas, without user management.</>],
          ["Director of Studies", <>Academics: subjects, exams, marks, report cards.</>],
          ["Teacher", <>Their classes: marks entry, attendance, learner profiles.</>],
          ["Bursar", <>Finance: fee structures, payments, receipts, balances.</>],
          ["Receptionist", <>Admissions and front-desk work, without finance or results.</>],
        ]}
      />

      <p>These are starting points. Every one can be adjusted, and you can create your own.</p>

      <h2>Adding a staff member</h2>

      <Steps>
        <Step title="Add them under Staff">
          Name, role at the school, contact details. This is their staff record.
        </Step>
        <Step title="Create their user account">
          Give them an email or username. They will set their own password on first sign-in.
        </Step>
        <Step title="Assign a role">
          Pick the closest built-in role. Adjust afterwards if their job does not fit neatly.
        </Step>
        <Step title="Have them sign in once while you are there">
          Ten seconds of checking now prevents a support call in the middle of mark entry week.
        </Step>
      </Steps>

      <Screenshot label="Staff list with roles" />

      <h2>Creating your own role</h2>

      <p>
        Go to <Where>Settings → Roles</Where> and create a role. Permissions are shown as a tree grouped by
        area, so you tick what the role should be able to do.
      </p>

      <p>
        Permissions come in pairs across most areas — <strong>view</strong> and <strong>manage</strong>.
        View lets someone look; manage lets them change. A common and useful role is one with view across
        several areas and manage in none, for a deputy who needs oversight rather than control.
      </p>

      <Callout kind="tip" title="Grant a whole area at once">
        <p>
          You can grant an entire area rather than ticking each permission inside it. Doing so means the role
          automatically gains any new ability added to that area in future — usually what you intended when
          you decided &quot;the bursar handles finance&quot;.
        </p>
      </Callout>

      <h2>Deciding who gets what</h2>

      <p>Three rules that save trouble:</p>

      <h3>Start narrow</h3>
      <p>
        Give the minimum that lets someone do their job, and widen when they ask. Starting wide means nobody
        ever asks, and you find out the scale of the access during an incident.
      </p>

      <h3>Separate money from marks</h3>
      <p>
        The person entering results and the person recording payments should rarely be the same person with
        the same login. This is ordinary good practice and DRAIS makes it easy.
      </p>

      <h3>Do not share accounts</h3>
      <p>
        A shared staffroom login destroys the audit trail — every action becomes &quot;someone&quot;. Individual
        accounts cost nothing and are the difference between knowing who changed a mark and guessing.
      </p>

      <Callout kind="warning" title="When a staff member leaves">
        <p>
          Disable their account the same day. Their record and everything they entered remains; only the
          ability to sign in ends. Do not delete the user — that would obscure the history of what they did.
        </p>
      </Callout>

      <h2>Modules: a separate control</h2>

      <p>
        Alongside permissions, DRAIS has <strong>modules</strong> — optional areas such as Tahfiz, Payroll or
        Examinations. These are enabled per school as part of your subscription.
      </p>

      <p>The two controls answer different questions:</p>

      <DefTable
        rows={[
          ["Permission", <>Is this person allowed to do it?</>],
          ["Module", <>Does this school have it at all?</>],
        ]}
      />

      <Callout kind="note">
        <p>
          A module that is not enabled is unavailable to everyone, including Super Admins. That is intentional
          — modules reflect what your school has subscribed to, not seniority. See{" "}
          <Link href="/documentation/settings">Settings &amp; Modules</Link>.
        </p>
      </Callout>

      <h2>The audit log</h2>

      <p>
        <Where>Settings → Audit Log</Where> records significant actions: who did what, when, and from where.
        Use it when a mark changed unexpectedly, a learner disappeared from a list, or a payment does not look
        right.
      </p>

      <p>
        Checking the audit log first usually turns a mystery into an ordinary conversation with a colleague.
      </p>

      <h2>Related</h2>
      <ul>
        <li><Link href="/documentation/settings">Settings &amp; Modules</Link></li>
        <li><Link href="/documentation/data-safety">Data Safety &amp; Backups</Link></li>
        <li><Link href="/documentation/getting-started">Setting Up Your School</Link></li>
      </ul>
    </DocLayout>
  );
}
