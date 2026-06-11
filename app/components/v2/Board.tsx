"use client";

import { useEffect, useState } from "react";

const board = [
  {
    name: "invobilling.com",
    desc: "GST invoicing SaaS — founder & sole developer",
    status: "LIVE",
    live: true,
    href: "https://invobilling.com",
  },
  {
    name: "ralasclinic.com",
    desc: "Client site — design, build, SEO",
    status: "LIVE",
    live: true,
    href: "https://ralasclinic.com",
  },
  {
    name: "presentsz",
    desc: "BLE attendance — Expo · Go · ESP32",
    status: "IN DEV",
    live: false,
  },
  {
    name: "rangdaan",
    desc: "iOS price lists for paint dealers — SwiftUI",
    status: "IN DEV",
    live: false,
  },
] as const;

export default function Board() {
  // how many rows have appeared / resolved their status
  const [shown, setShown] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(board.length);
      setResolved(board.length);
      return;
    }
    let i = 0;
    const appear = setInterval(() => {
      i++;
      setShown(i);
      if (i >= board.length) clearInterval(appear);
    }, 220);
    let j = 0;
    const resolve = setInterval(() => {
      j++;
      setResolved(j);
      if (j >= board.length) clearInterval(resolve);
    }, 420);
    return () => {
      clearInterval(appear);
      clearInterval(resolve);
    };
  }, []);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mt-16 overflow-hidden rounded-xl border hairline bg-[var(--surface)]">
      <div className="flex items-center justify-between border-b hairline px-5 py-3">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--muted)]">
          production board
        </span>
        <span className="font-mono text-[0.7rem] text-[var(--muted)]">
          IST {time || "--:--:--"}
        </span>
      </div>
      <ul>
        {board.map((p, idx) => {
          const isShown = idx < shown;
          const isResolved = idx < resolved;
          return (
            <li
              key={p.name}
              className={`board-row flex items-center gap-4 border-b hairline px-5 py-4 last:border-b-0 ${
                isShown ? "on" : ""
              }`}
            >
              <span
                className={`dot ${
                  !isResolved ? "dot-wait" : p.live ? "dot-live" : "dot-dev"
                }`}
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                {"href" in p && p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-[var(--text)] hover:text-[var(--accent)]"
                  >
                    {p.name}
                  </a>
                ) : (
                  <span className="font-mono text-sm text-[var(--text)]">{p.name}</span>
                )}
                <p className="truncate text-xs text-[var(--muted)]">{p.desc}</p>
              </div>
              <span
                className={`font-mono text-[0.7rem] tracking-[0.14em] ${
                  !isResolved
                    ? "text-[var(--muted)]"
                    : p.live
                    ? "text-[var(--accent)]"
                    : "text-[var(--amber)]"
                }`}
                aria-label={p.status}
              >
                {isResolved ? p.status : "···"}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
