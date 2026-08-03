import React from "react";
import Link from "next/link";
import DocLayout from "@/components/public/DocLayout";
import { Callout, DefTable, Screenshot, Steps, Step, Where } from "@/components/public/DocBits";

export const metadata = {
  title: "The Parent Portal | DRAIS Documentation",
  description:
    "How guardians sign in, how they are linked to their children, and what your school chooses to show them.",
};

export default function ParentPortalPage() {
  return (
    <DocLayout
      title="The Parent Portal"
      description="What guardians can see, how they get access, and how your school stays in control of it."
    >
      <p>
        The parent portal lets a guardian sign in and see their own child&apos;s attendance, results and fees.
        It is the part of DRAIS that faces families directly, so it is built around one rule that is never
        relaxed:
      </p>

      <Callout kind="warning" title="A guardian sees their own children. Only ever their own children.">
        <p>
          Every screen in the portal is filtered to the specific learners a guardian has been approved for.
          There is no URL, no link and no search that will show a guardian another family&apos;s child. This
          is enforced in the system itself, not by hiding buttons.
        </p>
      </Callout>

      <h2>How a guardian gets access</h2>

      <p>
        Access is granted in two stages, and the distinction between them is what keeps it safe.
      </p>

      <DefTable
        rows={[
          [
            "Evidence",
            <>
              The guardian&apos;s phone number appears on a learner&apos;s contact record at your school. This
              is a <em>reason to ask</em> for access. It is not access.
            </>,
          ],
          [
            "Approval",
            <>
              Your school confirms the link. Only after this can the guardian see anything. Schools can choose
              to auto-approve when the phone number matches, or to hold every request for staff review.
            </>,
          ],
        ]}
      />

      <p>
        Because contact details in real schools are often incomplete or inconsistent, DRAIS never treats a
        phone-number match as proof on its own. A messy contact list becomes a list of requests for your office
        to work through — not a list of families who can already see each other&apos;s children.
      </p>

      <h3>The guardian&apos;s experience</h3>

      <Steps>
        <Step title="They open the portal and enter their phone number">
          The same number your school holds on the learner&apos;s record.
        </Step>
        <Step title="They receive a code by SMS">
          A six-digit code, valid for a few minutes. This confirms they hold the phone.
        </Step>
        <Step title="DRAIS shows the learners their number is on">
          They request access to their children.
        </Step>
        <Step title="Your school approves">
          Unless auto-approval is switched on, a staff member confirms the link from
          <Where>Parents → Link Requests</Where>.
        </Step>
        <Step title="They are signed in">
          The device is remembered for about three months, so they are not asked for a code every visit.
          A new device requires a new code.
        </Step>
      </Steps>

      <Screenshot label="Parent portal home showing linked learners" />

      <Callout kind="tip" title="A guardian with children at more than one school">
        <p>
          One phone number, one sign-in, all their children — even when those children attend different schools
          that both use DRAIS. Each school still controls its own approvals and its own visibility settings.
        </p>
      </Callout>

      <h2>What your school chooses to show</h2>

      <p>
        The portal is configurable per school. Go to <Where>Settings → Parent Portal</Where> to turn areas on
        and off.
      </p>

      <DefTable
        rows={[
          [
            "Attendance",
            <>Daily arrivals and absences. The most-used part of the portal by a wide margin.</>,
          ],
          [
            "Results",
            <>Marks and report cards. Many schools switch this on only after results are officially released.</>,
          ],
          [
            "Fees",
            <>
              Balances and payment history. <strong>On by default</strong>, because it reduces the volume of
              enquiries at the bursar&apos;s window — but schools that prefer to handle fees in person can
              switch it off.
            </>,
          ],
          ["Announcements", <>School-wide notices pushed to the portal.</>],
        ]}
      />

      <Callout kind="note">
        <p>
          These settings are yours to change at any time and take effect immediately. If your school is not
          ready to show results online, start with attendance only and add more later.
        </p>
      </Callout>

      <h2>Managing links from the school side</h2>

      <p>Staff work with parent links from <Where>Parents</Where>:</p>

      <ul>
        <li><strong>Pending requests</strong> — approve or decline access requests.</li>
        <li><strong>Active links</strong> — see which guardian is linked to which learner.</li>
        <li><strong>Revoke</strong> — remove a link. Access ends immediately, on every device.</li>
      </ul>

      <p>
        Revoking is instant and complete. A guardian whose link is removed loses visibility of that learner
        straight away, even if they are currently signed in.
      </p>

      <Callout kind="warning" title="Separated families and custody">
        <p>
          Approve links deliberately. DRAIS will do exactly what your office tells it, and a link approved in
          haste can show a parent information they should not have. When in doubt, decline the request and
          resolve it with the family in person.
        </p>
      </Callout>

      <h2>Common questions</h2>

      <h3>A guardian says they never received the code</h3>
      <p>
        Confirm the number on the learner&apos;s record matches the phone they are using, including the
        country code. If the number is wrong, correct it on the learner profile and ask them to try again.
      </p>

      <h3>Can a guardian have more than one number?</h3>
      <p>
        Yes — each verified number that appears on the learner&apos;s contact record can request access.
        Both parents can have their own sign-in.
      </p>

      <h3>What if a guardian shares their phone?</h3>
      <p>
        Access follows the phone number. If a family shares a handset, they share the view. Revoke and re-link
        to a different number if that becomes a problem.
      </p>

      <h3>Does the portal cost anything extra?</h3>
      <p>
        The portal itself is part of DRAIS. The SMS codes used for sign-in draw on your school&apos;s message
        allocation, the same as any other SMS.
      </p>

      <h2>Related</h2>
      <ul>
        <li><Link href="/documentation/notifications">SMS &amp; Notifications</Link></li>
        <li><Link href="/documentation/managing-learners">Managing Learners</Link></li>
        <li><Link href="/documentation/settings">Settings &amp; Modules</Link></li>
      </ul>
    </DocLayout>
  );
}
