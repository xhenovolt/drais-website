import React from "react";
import { Info, AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";

/**
 * Shared building blocks for documentation pages.
 *
 * Every block is `not-prose` so it renders as a designed component inside the
 * prose container rather than inheriting typography styles.
 */

export function Screenshot({ label }: { label: string }) {
  return (
    <div className="not-prose my-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 text-center">
      <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">[ Screenshot: {label} ]</p>
      <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">Replace with actual screenshot</p>
    </div>
  );
}

type CalloutKind = "note" | "warning" | "tip" | "success";

const CALLOUT: Record<CalloutKind, { icon: React.ElementType; ring: string; bg: string; fg: string; label: string }> = {
  note: {
    icon: Info,
    ring: "border-blue-200 dark:border-blue-900",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    fg: "text-blue-700 dark:text-blue-300",
    label: "Note",
  },
  warning: {
    icon: AlertTriangle,
    ring: "border-amber-200 dark:border-amber-900",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    fg: "text-amber-700 dark:text-amber-300",
    label: "Important",
  },
  tip: {
    icon: Lightbulb,
    ring: "border-indigo-200 dark:border-indigo-900",
    bg: "bg-indigo-50 dark:bg-indigo-950/40",
    fg: "text-indigo-700 dark:text-indigo-300",
    label: "Tip",
  },
  success: {
    icon: CheckCircle2,
    ring: "border-emerald-200 dark:border-emerald-900",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    fg: "text-emerald-700 dark:text-emerald-300",
    label: "Good to know",
  },
};

export function Callout({
  kind = "note",
  title,
  children,
}: {
  kind?: CalloutKind;
  title?: string;
  children: React.ReactNode;
}) {
  const c = CALLOUT[kind];
  const Icon = c.icon;
  return (
    <div className={`not-prose my-6 rounded-xl border ${c.ring} ${c.bg} p-5`}>
      <div className={`flex items-center gap-2 font-bold text-sm ${c.fg} mb-2`}>
        <Icon className="w-4 h-4 shrink-0" />
        {title ?? c.label}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

/** A numbered walkthrough. Each step is a heading plus free-form body. */
export function Steps({ children }: { children: React.ReactNode }) {
  const items = React.Children.toArray(children);
  return (
    <ol className="not-prose my-6 space-y-5">
      {items.map((child, i) => (
        <li key={i} className="flex gap-4">
          <span className="w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
            {i + 1}
          </span>
          <div className="flex-1 min-w-0 pt-0.5">{child}</div>
        </li>
      ))}
    </ol>
  );
}

export function Step({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div>
      <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">{title}</p>
      {children && (
        <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">{children}</div>
      )}
    </div>
  );
}

/** Compact definition table — term on the left, meaning on the right. */
export function DefTable({ rows }: { rows: Array<[string, React.ReactNode]> }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
      <table className="w-full text-sm">
        <tbody>
          {rows.map(([term, meaning], i) => (
            <tr
              key={i}
              className={i % 2 ? "bg-gray-50 dark:bg-gray-900/50" : "bg-white dark:bg-gray-900"}
            >
              <td className="align-top px-4 py-3 font-bold text-gray-900 dark:text-white whitespace-nowrap">
                {term}
              </td>
              <td className="align-top px-4 py-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                {meaning}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** "Where to find it" breadcrumb chip for in-app navigation paths. */
export function Where({ children }: { children: React.ReactNode }) {
  return (
    <span className="not-prose inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-sm font-semibold text-gray-800 dark:text-gray-200">
      {children}
    </span>
  );
}
