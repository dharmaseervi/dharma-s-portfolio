"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { toggleTheme } from "./theme";

type Item = { label: string; hint: string; run: () => void };

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: Item[] = useMemo(
    () => [
      { label: "Go to Work", hint: "section", run: () => (location.hash = "#work") },
      { label: "Go to About", hint: "section", run: () => (location.hash = "#about") },
      { label: "Go to Stack", hint: "section", run: () => (location.hash = "#stack") },
      { label: "Go to Contact", hint: "section", run: () => (location.hash = "#contact") },
      { label: "Open Invo Billing", hint: "link", run: () => window.open("https://invobilling.com", "_blank") },
      { label: "Open Ralas Clinic", hint: "link", run: () => window.open("https://ralasclinic.com", "_blank") },
      { label: "Open GitHub", hint: "link", run: () => window.open("https://www.github.com/dharmaseervi", "_blank") },
      { label: "Open LinkedIn", hint: "link", run: () => window.open("https://www.linkedin.com/in/dharmaseervi", "_blank") },
      { label: "Toggle theme", hint: "action", run: () => toggleTheme() },
      {
        label: "Copy email",
        hint: "action",
        // TODO: replace with your real email
        run: () => navigator.clipboard?.writeText("hello@dharmaseervi.com"),
      },
      { label: "Download resume", hint: "file", run: () => window.open("/resume.pdf", "_blank") },
      { label: "Open terminal", hint: "easter egg", run: () => (window.location.href = "/terminal") },
    ],
    []
  );

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(q.trim().toLowerCase())
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-cmdk", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-cmdk", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      setIdx(0);
      const t = setTimeout(() => inputRef.current?.focus(), 10);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const runItem = (item: Item) => {
    setOpen(false);
    item.run();
  };

  return (
    <>
      <div className="cmdk-backdrop" onClick={() => setOpen(false)} />
      <div className="cmdk" role="dialog" aria-label="Command palette">
        <input
          ref={inputRef}
          value={q}
          placeholder="Type a command…"
          onChange={(e) => {
            setQ(e.target.value);
            setIdx(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setIdx((i) => Math.min(i + 1, filtered.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setIdx((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter" && filtered[idx]) {
              runItem(filtered[idx]);
            }
          }}
        />
        <div className="max-h-72 overflow-y-auto py-1">
          {filtered.length === 0 && (
            <p className="px-[18px] py-3 text-sm text-[var(--muted)]">No matches.</p>
          )}
          {filtered.map((item, i) => (
            <button
              key={item.label}
              className="cmdk-item"
              data-active={i === idx}
              onMouseEnter={() => setIdx(i)}
              onClick={() => runItem(item)}
            >
              <span>{item.label}</span>
              <span className="cmdk-hint">{item.hint}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
