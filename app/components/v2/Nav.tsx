"use client";

import { useEffect, useState } from "react";
import { toggleTheme } from "./interactive/theme";

const links = [
  { href: "#work", id: "work", label: "Work" },
  { href: "#about", id: "about", label: "About" },
  { href: "#stack", id: "stack", label: "Stack" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-[var(--nav-bg)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="font-mono text-sm text-[var(--text)]">
          dharma<span className="text-[var(--accent)]">.</span>seervi
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden items-center gap-5 sm:flex sm:gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`nav-link font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--text)] ${
                    active === l.id ? "active" : ""
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => window.dispatchEvent(new Event("open-cmdk"))}
            className="kbd cursor-pointer transition-colors hover:border-[var(--line-hover)] hover:text-[var(--text)]"
            aria-label="Open command palette"
          >
            ⌘K
          </button>
          <button
            onClick={toggleTheme}
            className="cursor-pointer text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            aria-label="Toggle light/dark theme"
          >
            ◐
          </button>
        </div>
      </nav>
    </header>
  );
}
