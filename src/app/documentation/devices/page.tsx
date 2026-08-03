import React from "react";
import Link from "next/link";
import DocLayout from "@/components/public/DocLayout";
import { Callout, DefTable, Screenshot, Steps, Step, Where } from "@/components/public/DocBits";

export const metadata = {
  title: "Fingerprint Devices | DRAIS Documentation",
  description:
    "Connecting fingerprint devices to DRAIS, enrolling fingerprints, and keeping devices healthy.",
};

export default function DevicesPage() {
  return (
    <DocLayout
      title="Fingerprint Devices"
      description="Connecting a device, enrolling fingerprints, and what to do when something looks wrong."
    >
      <p>
        A fingerprint device is a small terminal mounted at your gate or entrance. A learner or staff member
        places a finger on it, it recognises them in under a second, and the record reaches DRAIS. From there
        attendance, guardian SMS and reports all follow automatically.
      </p>

      <p>
        This guide covers connecting a device, getting fingerprints onto it, and reading the health
        information DRAIS shows you.
      </p>

      <h2>How a device talks to DRAIS</h2>

      <p>
        The device holds two things: a list of people (a PIN and a name for each) and their fingerprint
        templates. When someone scans, the device works out <em>which PIN</em> matched and sends that to DRAIS.
        DRAIS then looks up which learner or staff member that PIN belongs to.
      </p>

      <p>That means two separate things have to be right:</p>

      <DefTable
        rows={[
          [
            "The fingerprint",
            <>
              Stored on the device. Good enrolment — a clean, well-positioned finger, captured more than once —
              is what makes recognition fast and reliable.
            </>,
          ],
          [
            "The identity link",
            <>
              Stored in DRAIS. It says &quot;PIN 41 on this device is Nakato Sarah&quot;. If this is wrong, the
              device will recognise the finger perfectly and credit the wrong learner.
            </>,
          ],
        ]}
      />

      <Callout kind="warning" title="This is the mistake to watch for">
        <p>
          Almost every attendance problem schools report turns out to be an identity link problem, not a
          fingerprint problem. The device is working; it is simply pointing at the wrong person. DRAIS gives
          you tools to find and fix these — see <strong>Identity &amp; Reconciliation</strong> below.
        </p>
      </Callout>

      <h2>Adding a device</h2>

      <Steps>
        <Step title="Mount and power the device">
          Fit it where learners pass on arrival, at a comfortable height for the youngest learner who will use
          it. Avoid direct sunlight on the sensor — it interferes with reading.
        </Step>
        <Step title="Connect it to your network">
          The device needs to reach the internet to send records to DRAIS. Either your school Wi-Fi or a
          network cable is fine. Note the device serial number; you will need it.
        </Step>
        <Step title="Register it in DRAIS">
          Go to <Where>Devices → Add Device</Where> and enter the serial number and a name you will recognise
          (&quot;Main Gate&quot;, &quot;Boarding Wing&quot;). The device is now claimed by your school.
        </Step>
        <Step title="Confirm it is reporting">
          The device list shows a status and a last-seen time. Once it has checked in, the status turns
          active. If it does not appear within a few minutes, check the network connection first.
        </Step>
      </Steps>

      <Screenshot label="Devices list showing status and last-seen" />

      <Callout kind="note" title="Devices belong to one school at a time">
        <p>
          A device is owned by exactly one school. Moving a physical device to a different school is a
          deliberate two-step handover — the current school releases it, then the new school claims it. This
          prevents a device from quietly reporting one school&apos;s learners into another school&apos;s
          records. Contact DRAIS support to arrange a transfer.
        </p>
      </Callout>

      <h2>Enrolling fingerprints</h2>

      <p>There are two ways to get a learner&apos;s fingerprint onto a device.</p>

      <h3>From DRAIS (recommended)</h3>
      <p>
        Open the learner&apos;s profile, choose <strong>Enrol Fingerprint</strong>, and follow the prompts.
        DRAIS assigns the PIN itself and creates the identity link at the same moment the fingerprint is
        captured — so the link is correct by construction.
      </p>

      <h3>On the device keypad</h3>
      <p>
        You can also enrol directly on the device. This works, but DRAIS then only knows there is a new PIN
        with whatever name was typed on the keypad. It will try to match that name to a learner, and:
      </p>
      <ul>
        <li>
          if the name matches exactly one learner and nothing else is plausible, DRAIS links it automatically;
        </li>
        <li>
          if the name is ambiguous, misspelt, or matches two learners, DRAIS puts it in a queue for you to
          resolve rather than guessing.
        </li>
      </ul>

      <Callout kind="tip">
        <p>
          DRAIS deliberately refuses to guess. A near-match that silently links a fingerprint to the wrong
          child is far more damaging than an item sitting in a queue waiting for thirty seconds of your
          attention.
        </p>
      </Callout>

      <h3>Enrolment tips that actually matter</h3>
      <ul>
        <li>Capture more than one finger where the device allows it — a cut or a plaster should not stop a learner getting in.</li>
        <li>Clean, dry hands. Wipe the sensor between learners during a bulk enrolment session.</li>
        <li>Enrol the whole class in one sitting; it is far faster than one at a time across a week.</li>
        <li>Check the first few scans the next morning rather than assuming the session worked.</li>
      </ul>

      <h2>Identity &amp; Reconciliation</h2>

      <p>
        Over time a device and DRAIS can drift apart — a learner leaves and their fingerprint stays on the
        device, someone is enrolled twice, a PIN is reused. DRAIS gives you a reconciliation view that
        compares what the device actually holds against what DRAIS believes.
      </p>

      <p>Go to <Where>Devices → Reconciliation</Where>. You will see specific, actionable categories rather than a vague warning:</p>

      <ul>
        <li><strong>Unlinked PINs</strong> — the device knows someone DRAIS cannot identify.</li>
        <li><strong>Ambiguous matches</strong> — a device name that could be two different learners.</li>
        <li><strong>Stale entries</strong> — fingerprints for learners who have left.</li>
        <li><strong>Missing on device</strong> — learners DRAIS expects to be enrolled but the device does not hold.</li>
      </ul>

      <p>Each item can be resolved, ignored, or quarantined, and the outcome is recorded.</p>

      <Screenshot label="Reconciliation view with mismatch categories" />

      <h3>Correcting a wrong identity link</h3>
      <p>
        If a fingerprint has been credited to the wrong learner, use <strong>Correct Identity</strong> on the
        learner profile or from the reconciliation view. DRAIS will:
      </p>
      <ul>
        <li>show you exactly what will change before you confirm;</li>
        <li>move the PIN to the correct learner;</li>
        <li>re-attribute the historical attendance records that were affected;</li>
        <li>record who made the correction, when, and why.</li>
      </ul>
      <p>
        The original scan records are never deleted. The time, the device and the finger stay exactly as they
        were — only the name attached to them changes.
      </p>

      <h2>Device health</h2>

      <p>
        DRAIS watches your devices and surfaces problems rather than waiting for you to notice them. The
        device list and dashboard show:
      </p>

      <DefTable
        rows={[
          ["Online / offline", <>Whether the device has checked in recently.</>],
          [
            "Clock health",
            <>
              Whether the device clock agrees with real time. A drifting device clock is a common and
              genuinely confusing fault — it makes arrivals appear at the wrong hour. DRAIS detects and
              corrects for it, and flags the device so you can fix it properly.
            </>,
          ],
          ["Enrolment count", <>How many people the device is holding, compared with what DRAIS expects.</>],
          ["Last successful scan", <>A device that is online but has recorded nothing all morning is worth checking.</>],
        ]}
      />

      <Callout kind="warning" title="If a device goes offline">
        <p>
          Scans are not lost. Most devices store records locally and send them when the connection returns.
          Take attendance manually for the affected period if you need same-day accuracy, and DRAIS will
          reconcile when the device reconnects.
        </p>
      </Callout>

      <h2>Common problems</h2>

      <h3>A learner scans but nothing appears in DRAIS</h3>
      <p>
        Check the device is online and its last-seen time is recent. If it is, look in Reconciliation for an
        unlinked PIN — the scan probably arrived but could not be matched to a learner.
      </p>

      <h3>The device does not recognise a learner</h3>
      <p>
        Re-enrol the finger. Recognition quality degrades with worn or damaged fingertips, and a fresh capture
        usually resolves it. Enrol a second finger while you are there.
      </p>

      <h3>Arrival times are all wrong by several hours</h3>
      <p>
        The device clock has drifted. DRAIS detects this and records the true arrival instant, but you should
        still correct the device clock. Contact support if it recurs.
      </p>

      <h3>Two learners with the same name</h3>
      <p>
        Enrol both from DRAIS rather than the device keypad, so the link is made against the specific learner
        record rather than a name. If they were enrolled on the keypad, resolve the ambiguous entries in
        Reconciliation.
      </p>

      <h2>Related</h2>
      <ul>
        <li><Link href="/documentation/attendance">How Attendance Works</Link></li>
        <li><Link href="/documentation/attendance-reports">Attendance Reports</Link></li>
        <li><Link href="/documentation/troubleshooting">Troubleshooting</Link></li>
      </ul>
    </DocLayout>
  );
}
