"use client";
/**
 * SystemThemeWrapper
 * Applies `dark` class to its root div based on the OS / browser
 * prefers-color-scheme media feature.
 *
 * Because Tailwind is configured with `darkMode: 'class'`, placing the
 * `dark` class on any ancestor element activates all `dark:` utilities
 * for its descendants — so every public page wrapped here automatically
 * honours the user's system theme without touching the app's own
 * class-based theme customiser.
 */
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SystemThemeWrapper({ children, className = "" }: Props) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className={`${isDark ? "dark" : ""} ${className}`}>
      {children}
    </div>
  );
}
