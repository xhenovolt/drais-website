import React from "react";
import Link from "next/link";
import DocLayout from "@/components/public/DocLayout";
import { Callout, DefTable, Screenshot, Steps, Step, Where } from "@/components/public/DocBits";

export const metadata = {
  title: "Fees & Payments | DRAIS Documentation",
  description:
    "Fee structures, charging learners, recording payments, receipts, balances and reconciliation.",
};

export default function FeesPage() {
  return (
    <DocLayout
      title="Fees & Payments"
      description="Charging fees, recording payments, and producing balances your bursar can defend."
    >
      <p>
        DRAIS finance is built for one outcome: at any moment you can say what a learner owes and show exactly
        how that figure was arrived at. Everything below serves that.
      </p>

      <Callout kind="success" title="Balances are calculated, never typed">
        <p>
          No balance in DRAIS is a stored number that someone can edit. Every balance is computed from the
          charges and payments behind it, every time it is displayed. That is slower than keeping a running
          total — and it is the reason the figures still add up a year later.
        </p>
      </Callout>

      <h2>Setting up fees</h2>

      <Steps>
        <Step title="Create fee items">
          Go to <Where>Finance → Fee Structure</Where>. A fee item is one line — Tuition, Lunch, Transport,
          Boarding, Examination.
        </Step>
        <Step title="Set the amount per class and term">
          Different classes usually pay different amounts. Set them per class, per term.
        </Step>
        <Step title="Add eligibility rules where a fee is not universal">
          Transport applies only to learners who use it; boarding only to boarders. Rules can key off boarding
          status, gender, class range, programme or stream.
        </Step>
        <Step title="Run the billing">
          DRAIS applies the structure to the learners it matches and creates their charges for the term.
        </Step>
      </Steps>

      <Screenshot label="Fee structure by class and term" />

      <Callout kind="tip" title="Rules beat spreadsheets">
        <p>
          A rule such as &quot;boarders in S1–S4&quot; is evaluated against each learner&apos;s actual record.
          When a day learner becomes a boarder, the next billing run charges them correctly with no list to
          maintain.
        </p>
      </Callout>

      <h3>Per-learner amounts</h3>
      <p>
        Where a learner has an individually agreed amount — a bursary, a sibling discount, a negotiated rate —
        import or set it directly. Re-importing replaces the previous figure for that learner and item rather
        than adding a second charge.
      </p>

      <h2>Recording a payment</h2>

      <p>
        From <Where>Finance → Payments → Record Payment</Where>: find the learner, enter the amount, choose
        where the money went, and save. DRAIS produces a receipt with a unique number.
      </p>

      <DefTable
        rows={[
          ["Amount", <>What was actually received. Part payments are normal and fully supported.</>],
          [
            "Money location",
            <>
              Where the cash went — bursar&apos;s cash box, headteacher, a named bank account, mobile money,
              School Pay, SurePay. This is what makes the money traceable rather than merely recorded.
            </>,
          ],
          ["Paid by", <>Who handed it over. Often not the registered guardian.</>],
          ["Reference", <>Bank slip or mobile money transaction number, where there is one.</>],
        ]}
      />

      <h3>Receipts</h3>
      <p>
        Every payment produces a printable receipt carrying a QR code. Scanning it opens a verification page
        confirming the receipt is genuine and matches what DRAIS recorded — so a forged or altered receipt does
        not survive a check at the office.
      </p>

      <h2>Money locations</h2>

      <p>
        A money location is anywhere cash actually sits. DRAIS tracks each one separately and derives its
        balance from opening balance, payments in, transfers in and out, and expenses paid from it.
      </p>

      <p>
        Recording transfers between locations — cash banked at the end of the day, for instance — keeps each
        location&apos;s figure real. Skipping transfers is the most common reason a location balance stops
        matching the physical cash.
      </p>

      <h2>Importing payments</h2>

      <p>
        Schools receiving payments through a bank or a mobile money aggregator can import them in bulk from
        <Where>Finance → Import</Where>. Supported sources include School Pay, SurePay, bank statements,
        mobile money and plain spreadsheets.
      </p>

      <p><strong>Import happens in two stages, and nothing is posted until you confirm.</strong></p>

      <Steps>
        <Step title="Upload and map the columns">
          Tell DRAIS which column holds the admission number, the amount, the date and the reference.
        </Step>
        <Step title="Review the preview">
          DRAIS matches each row to a learner, flags duplicates against payments already recorded <em>and</em>
          duplicates within the file itself, and summarises what will happen.
        </Step>
        <Step title="Resolve what needs attention">
          Rows matched by name rather than admission number always require your confirmation.
        </Step>
        <Step title="Commit">
          Only the rows you approved are posted — through the same path as a payment typed at the desk, so
          they get the same receipt, ledger entry and audit record.
        </Step>
      </Steps>

      <Callout kind="warning" title="Name matches are never automatic">
        <p>
          DRAIS will not post a payment to a learner matched only by name. Two learners share a name far more
          often than schools expect, and a payment credited to the wrong child is discovered at the worst
          possible moment.
        </p>
      </Callout>

      <h2>Balances and defaulters</h2>

      <p>From <Where>Finance → Balances</Where> you can see:</p>
      <ul>
        <li>a single learner&apos;s statement — charges, payments, running balance;</li>
        <li>outstanding balances by class or stream;</li>
        <li>defaulters above a threshold you set;</li>
        <li>total expected, total collected and total outstanding for the term.</li>
      </ul>

      <p>
        Balances can be shown to guardians in the parent portal. This is on by default and can be switched off
        — see <Link href="/documentation/parent-portal">The Parent Portal</Link>.
      </p>

      <h2>Fee reminders</h2>

      <p>
        SMS reminders can be sent to guardians with outstanding balances, filtered by class and by amount, with
        the balance inserted into the message. See{" "}
        <Link href="/documentation/notifications">SMS &amp; Notifications</Link>.
      </p>

      <h2>Budgets, expenses and pocket money</h2>

      <DefTable
        rows={[
          [
            "Budgets",
            <>
              Plan spend by term, department, project or activity. Spent is derived from the expenses linked to
              the budget, with remaining, percentage used and a threshold warning before you overspend.
            </>,
          ],
          [
            "Expenses",
            <>Recorded against a money location, so the location balance reflects them.</>,
          ],
          [
            "Pocket money",
            <>
              A custodial account per learner for boarding schools. Deposits and withdrawals are logged and the
              balance derived. Withdrawals cannot overdraw the account.
            </>,
          ],
        ]}
      />

      <h2>Correcting a mistake</h2>

      <p>
        A payment entered wrongly is reversed with a correcting entry rather than deleted, and both entries
        remain visible. The balance ends up right and the history explains itself.
      </p>

      <Callout kind="note">
        <p>
          This is deliberate. A finance record that can be silently edited proves nothing. One that shows the
          mistake and the correction is worth having during an audit.
        </p>
      </Callout>

      <h2>Related</h2>
      <ul>
        <li><Link href="/documentation/parent-portal">The Parent Portal</Link></li>
        <li><Link href="/documentation/roles-permissions">Users, Roles &amp; Permissions</Link></li>
        <li><Link href="/documentation/notifications">SMS &amp; Notifications</Link></li>
      </ul>
    </DocLayout>
  );
}
