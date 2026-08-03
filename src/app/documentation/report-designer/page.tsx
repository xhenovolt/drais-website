import React from "react";
import Link from "next/link";
import DocLayout from "@/components/public/DocLayout";
import { Callout, DefTable, Screenshot, Steps, Step, Where } from "@/components/public/DocBits";

export const metadata = {
  title: "Designing Report Cards | DRAIS Documentation",
  description:
    "Build your school's own report card layout — sections, branding, comment rules and bilingual output.",
};

export default function ReportDesignerPage() {
  return (
    <DocLayout
      title="Designing Report Cards"
      description="Your report card, your layout. No developer, no waiting, no deploy."
    >
      <p>
        Most school systems give you a fixed report card and a support ticket if you want it changed. DRAIS
        gives you the designer. Your report card is a document your school builds and edits, and changes take
        effect on the next print.
      </p>

      <p>
        Open it from <Where>Academics → Report Templates</Where>. You can start from a built-in design, copy an
        existing one, or build from scratch.
      </p>

      <Screenshot label="Report card designer with the section palette" />

      <h2>How a report card is put together</h2>

      <p>
        A design is a stack of <strong>sections</strong>. You add the ones you want, order them, and set their
        options. The common ones:
      </p>

      <DefTable
        rows={[
          ["Header", <>School name, logo, motto, address. Pulled from your school profile automatically.</>],
          ["Student information", <>Name, class, admission number, photo, and any fields you choose.</>],
          ["Results table", <>The marks. Columns, grouping, ordering and totals are all configurable.</>],
          ["Assessment summary", <>Total, average, aggregate, division, position in class.</>],
          ["Grade key", <>The grading scale printed as a reference table.</>],
          ["Comments", <>Class teacher, director of studies and headteacher remarks.</>],
          ["Next term begins", <>Dates and any notes for the coming term.</>],
          ["Banner / ribbon / divider", <>Visual structure.</>],
          ["Shapes, text and images", <>Free placement for anything the standard sections do not cover.</>],
        ]}
      />

      <p>
        Sections can be nested in containers, so a design can put two blocks side by side rather than only
        stacking them down the page. Multi-page designs are supported for schools that print a second sheet.
      </p>

      <h2>Placing your own values</h2>

      <p>
        Anywhere you can type text, you can insert a value from the learner&apos;s record using curly braces:
      </p>

      <pre><code>{`Dear parent of {student.fullName},
Class: {student.className}    Term: {meta.term}`}</code></pre>

      <p>Values can be formatted as they are placed:</p>

      <pre><code>{`{next_term_begins | date:"D MMM YYYY"}
{fee_balance | number:"#,##0"}
{comments.classTeacher | coalesce:"—"}`}</code></pre>

      <Callout kind="tip">
        <p>
          The designer has a variable picker — you do not have to memorise these. It lists everything available
          on the current design with a short description of each.
        </p>
      </Callout>

      <h2>Showing a section only for some learners</h2>

      <p>
        Each section can carry a visibility rule, so one design serves learners who need different things. For
        example:
      </p>

      <ul>
        <li>show a Qur&apos;an memorisation block only where the learner takes it;</li>
        <li>show a boarding notice only to boarders;</li>
        <li>show a merit ribbon only to the top five in the class.</li>
      </ul>

      <p>
        Rules combine with AND / OR and can be nested. You build them from dropdowns — there is nothing to
        write.
      </p>

      <Callout kind="success" title="One design instead of four">
        <p>
          Schools commonly end up maintaining separate report cards for boarders, day learners, and each
          stream. Visibility rules collapse those into a single design, which means one place to fix a typo
          rather than four.
        </p>
      </Callout>

      <h2>Comment rules</h2>

      <p>
        Instead of typing the same remark for thirty learners, define rules once and let DRAIS choose. A rule
        says: when the learner&apos;s result looks like <em>this</em>, the comment is <em>that</em>.
      </p>

      <Steps>
        <Step title="Go to Settings → Report Comments">
          Comments are managed per role — class teacher, director of studies, headteacher.
        </Step>
        <Step title="Write a rule">
          For example: average of 80 or more → &quot;An excellent term. Keep it up.&quot;
        </Step>
        <Step title="Add the conditions you need">
          By average, aggregate, division, position, or a combination.
        </Step>
        <Step title="Preview against a real class">
          The live preview shows which comment each learner would receive before you commit to it.
        </Step>
      </Steps>

      <p>
        Comments can be scoped to a particular report card design, so a school running more than one design can
        give each its own comment logic.
      </p>

      <Callout kind="note">
        <p>
          Staff can still override any individual comment. Rules produce a sensible default for thirty
          learners; the teacher writes something personal for the three who need it.
        </p>
      </Callout>

      <h2>Bilingual and Arabic report cards</h2>

      <p>
        DRAIS supports English and Arabic report cards, including right-to-left layout and Arabic numerals.
        Schools running both a secular and a theology curriculum typically keep one design per curriculum.
      </p>

      <p>
        Labels come from a shared vocabulary rather than being typed into each design, so translations stay
        consistent across every report card your school prints.
      </p>

      <h2>Adjusting a single learner&apos;s report</h2>

      <p>
        Occasionally one learner needs something different — a subject hidden because they joined late, or a
        section removed. From the report preview you can apply an override to that learner only.
      </p>

      <ul>
        <li>The override affects only that learner, on that set of report cards.</li>
        <li>Their marks are not changed — only what is shown.</li>
        <li>Overrides are listed and can be removed individually or reset for the learner.</li>
      </ul>

      <h2>Publishing a design</h2>

      <p>
        Designs move through <strong>draft → submitted → approved → published</strong>. Only a published design
        is used for printing, so work in progress is never printed by accident. Every save keeps a version, and
        any version can be restored.
      </p>

      <Callout kind="warning" title="Always print one before printing four hundred">
        <p>
          Generate a single learner&apos;s report card and print it on the paper you will actually use.
          Margins, logo size and column widths look different on paper than on screen, and it is a cheap check.
        </p>
      </Callout>

      <h2>Related</h2>
      <ul>
        <li><Link href="/documentation/reports">Report Cards</Link></li>
        <li><Link href="/documentation/exams">Exams &amp; Marks</Link></li>
      </ul>
    </DocLayout>
  );
}
