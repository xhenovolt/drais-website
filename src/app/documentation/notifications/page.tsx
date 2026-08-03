import React from "react";
import Link from "next/link";
import DocLayout from "@/components/public/DocLayout";
import { Callout, DefTable, Screenshot, Steps, Step, Where } from "@/components/public/DocBits";

export const metadata = {
  title: "SMS & Notifications | DRAIS Documentation",
  description:
    "Automatic guardian alerts, message templates, bulk SMS and controlling what your school sends.",
};

export default function NotificationsPage() {
  return (
    <DocLayout
      title="SMS & Notifications"
      description="Arrival alerts, absence notices, fee reminders and announcements — on your terms."
    >
      <p>
        For most schools, SMS is the feature parents notice. A message when a child arrives at school changes
        how families feel about the institution, and it is the single most common reason schools adopt DRAIS.
      </p>

      <p>
        This guide covers what DRAIS can send, how to control it, and how to keep the cost sensible.
      </p>

      <h2>How it works</h2>

      <p>
        Things happen in DRAIS — a learner arrives, a learner is absent, a payment is received. Each of those
        is an <strong>event</strong>. Your school decides which events send a message, to whom, and whether it
        goes automatically or waits for a staff member to review it.
      </p>

      <Screenshot label="Notification rules screen" />

      <DefTable
        rows={[
          ["Event", <>Something that happened — an arrival, an absence, a payment.</>],
          ["Rule", <>Your decision: for this event, message these people, using this template.</>],
          ["Template", <>The wording, with placeholders for the learner name, time, amount and so on.</>],
          ["Audience", <>Who receives it — guardians, class teacher, administrators.</>],
        ]}
      />

      <h2>What DRAIS can notify on</h2>

      <ul>
        <li><strong>Arrival</strong> — a learner scanned in. The most-used alert by a wide margin.</li>
        <li><strong>Departure</strong> — a learner scanned out.</li>
        <li><strong>Absence</strong> — no scan by a cut-off time you set.</li>
        <li><strong>Pass-out</strong> — a learner left the premises during the day, and when they returned.</li>
        <li><strong>Fee reminders</strong> — outstanding balance, with the amount inserted.</li>
        <li><strong>Payment received</strong> — confirmation to the payer.</li>
        <li><strong>Results released</strong> — report cards available in the portal.</li>
        <li><strong>Announcements</strong> — anything you write, sent to a group you choose.</li>
      </ul>

      <h2>Automatic or reviewed</h2>

      <p>This is the setting worth thinking about before you switch anything on.</p>

      <DefTable
        rows={[
          [
            "Automatic",
            <>
              The message sends as soon as the event happens. Right for arrival alerts — a message an hour
              later is worth much less than one at 7:42.
            </>,
          ],
          [
            "Reviewed",
            <>
              The message is prepared and held. A staff member reads the queue and sends. Right for absence
              notices and anything sensitive, where a wrong message costs more than a delayed one.
            </>,
          ],
        ]}
      />

      <p>
        The setting is per rule, so arrival alerts can be automatic while absence notices wait for review.
        Held messages appear in <Where>Communication → Queue</Where>.
      </p>

      <Callout kind="tip" title="Start reviewed, then relax">
        <p>
          New schools often switch everything to automatic on day one and spend the first week apologising for
          messages sent to the wrong number or about the wrong child. Start with review, watch the queue for a
          few days, and turn on automatic once the data is clean.
        </p>
      </Callout>

      <h2>Templates</h2>

      <p>
        Edit wording in <Where>Communication → Templates</Where>. Placeholders are filled in when the message
        sends:
      </p>

      <pre><code>{`{{studentName}} arrived at school at {{time}}.
{{schoolName}}`}</code></pre>

      <p>
        Each event has its own template, and templates can be written per language where your school
        communicates in more than one.
      </p>

      <Callout kind="warning" title="Keep messages short">
        <p>
          SMS is billed per 160 characters. A message that runs to 170 characters costs twice as much as one
          that runs to 150 — for every parent, every day. Trim the school name, drop pleasantries, and check
          the character count before saving a template you will send ten thousand times.
        </p>
      </Callout>

      <h2>Quiet hours</h2>

      <p>
        Set a window during which DRAIS will not send. Messages generated overnight are held rather than
        delivered at 3am. Boarding schools in particular should set this before enabling departure alerts.
      </p>

      <h2>Bulk messages</h2>

      <p>
        For one-off announcements, use <Where>Communication → Send Message</Where>. Choose an audience — all
        guardians, a class, a stream, all staff, defaulters above an amount — write the message, and DRAIS
        shows how many recipients and roughly what it will cost before you send.
      </p>

      <Steps>
        <Step title="Pick the audience">
          The recipient count updates as you narrow it.
        </Step>
        <Step title="Write the message">
          The character count and estimated segments are shown live.
        </Step>
        <Step title="Review the cost estimate">
          Recipients × segments. Worth a second look for a whole-school send.
        </Step>
        <Step title="Send">
          Delivery status is recorded per recipient, so you can see which numbers failed.
        </Step>
      </Steps>

      <h2>Message credits</h2>

      <p>
        Your school has an SMS allocation. <Where>Communication → Usage</Where> shows what has been used, what
        remains, and where it went by message type.
      </p>

      <Callout kind="note">
        <p>
          Arrival alerts are by far the largest consumer — one message per learner per day. A school of 600
          learners sending arrival alerts every day uses roughly 12,000 messages a month. Budget for that
          before switching it on, and consider sending arrival alerts only for the lower classes if the number
          is uncomfortable.
        </p>
      </Callout>

      <h2>Delivery and failures</h2>

      <p>
        Every message is logged with its delivery status. Failures are almost always one of:
      </p>

      <ul>
        <li><strong>Wrong number format</strong> — missing country code, or a stale number on the learner record.</li>
        <li><strong>Unreachable</strong> — phone off or out of network. Usually delivers later.</li>
        <li><strong>Credits exhausted</strong> — check usage.</li>
      </ul>

      <p>
        Run the delivery report after your first week. A cluster of failures in one class usually means a
        contact list that was imported badly rather than a network problem.
      </p>

      <h2>Related</h2>
      <ul>
        <li><Link href="/documentation/attendance">How Attendance Works</Link></li>
        <li><Link href="/documentation/parent-portal">The Parent Portal</Link></li>
        <li><Link href="/documentation/fees">Fees &amp; Payments</Link></li>
      </ul>
    </DocLayout>
  );
}
