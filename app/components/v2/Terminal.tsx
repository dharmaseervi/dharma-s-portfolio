"use client";

import { useEffect, useRef, useState } from "react";

// TODO: replace with your real email
const EMAIL = "hello@dharmaseervi.com";

type Line = { html: string; kind: "out" | "echo" };

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const ck = (c: string) => `<span class="term-clicky" data-c="${c}">${c}</span>`;

const PROMPT =
  '<span class="tm-user">dharma@portfolio</span><span class="tm-path">:~$</span>&nbsp;';

const PROJECTS = [
  { name: "invobilling.com", status: "LIVE", live: true, desc: "GST invoicing SaaS — founder & sole developer", url: "https://invobilling.com" },
  { name: "ralasclinic.com", status: "LIVE", live: true, desc: "Client site — design, build, SEO", url: "https://ralasclinic.com" },
  { name: "presentsz", status: "IN DEV", live: false, desc: "BLE attendance — Expo · Go · ESP32" },
  { name: "rangdaan", status: "IN DEV", live: false, desc: "iOS price lists for paint dealers — SwiftUI" },
];

const CATS: Record<string, string> = {
  invo:
    '<span class="tm-h"># Invo Billing</span>\n' +
    '<span class="tm-bri">GST-compliant invoicing for Indian businesses — iOS app to production backend.</span>\n\n' +
    '<span class="tm-acc">problem:</span>  Small Indian businesses need invoices that are actually GST-compliant\n          — CGST/SGST/IGST breakdowns, HSN/SAC codes, amounts in words.\n          Most global tools get this wrong or overcharge for it.\n\n' +
    '<span class="tm-acc">built:</span>    SwiftUI iOS app + Go (Gin) + PostgreSQL API on Azure Container Apps.\n          GST-correct multi-page PDF engine in Go (no third-party service).\n          SendGrid delivery sharing one PDF pipeline. Docker Buildx releases,\n          Azure CLI workflow, real production incident debugging.\n\n' +
    '<span class="tm-acc">stack:</span>    SwiftUI · Go/Gin · PostgreSQL · Docker · Azure · SendGrid\n' +
    '<span class="tm-acc">link:</span>     <a href="https://invobilling.com" target="_blank" rel="noopener noreferrer">https://invobilling.com</a>',
  ralas:
    '<span class="tm-h"># Ralas Hearing Clinic</span>\n' +
    '<span class="tm-bri">A fast, SEO-first clinic website — designed, built, and shipped solo.</span>\n\n' +
    '<span class="tm-acc">problem:</span>  Be found on Google by patients, load fast on budget Android phones,\n          let the clinic publish health articles without a developer.\n\n' +
    '<span class="tm-acc">built:</span>    Next.js 16 + Tailwind v4 utilities only. Dynamic article routes,\n          comprehensive on-page SEO, Google Analytics. Real client delivery\n          — scoping, revisions, handover.\n\n' +
    '<span class="tm-acc">stack:</span>    Next.js 16 · Tailwind v4 · Vercel · Google Analytics\n' +
    '<span class="tm-acc">link:</span>     <a href="https://ralasclinic.com" target="_blank" rel="noopener noreferrer">https://ralasclinic.com</a>',
  presentsz:
    '<span class="tm-h"># Presentsz</span>\n' +
    '<span class="tm-bri">Bluetooth attendance for colleges — check in by walking into the room.</span>\n\n' +
    '<span class="tm-acc">problem:</span>  Roll-call wastes lecture time and is trivially gamed by proxies.\n          Presentsz verifies physical presence via ESP32 BLE beacons.\n\n' +
    '<span class="tm-acc">built:</span>    React Native (Expo) app scanning room beacons; Go + PostgreSQL API\n          for classes, sessions, records. Custom-flashed ESP32 hardware.\n\n' +
    '<span class="tm-acc">status:</span>   <span class="tm-amb">IN DEV</span> — app and API functional; end-to-end BLE testing on\n          physical devices in progress.\n\n' +
    '<span class="tm-acc">stack:</span>    React Native/Expo · Go/Gin · PostgreSQL · ESP32/BLE',
  rangdaan:
    '<span class="tm-h"># Rangdaan</span>\n' +
    '<span class="tm-bri">iOS app for paint dealers — price lists without the spreadsheet pain.</span>\n\n' +
    '<span class="tm-acc">built:</span>    Upload a company price-list PDF; items are extracted via the\n          Claude API; dealer / GST-inclusive / cost prices computed on the spot.\n          SwiftUI + SwiftData, MVVM.\n\n' +
    '<span class="tm-acc">status:</span>   <span class="tm-amb">IN DEV</span>\n' +
    '<span class="tm-acc">stack:</span>    SwiftUI · SwiftData · Claude API',
};

const OPEN_MAP: Record<string, string> = {
  invo: "https://invobilling.com",
  invobilling: "https://invobilling.com",
  "invobilling.com": "https://invobilling.com",
  ralas: "https://ralasclinic.com",
  "ralasclinic.com": "https://ralasclinic.com",
  github: "https://www.github.com/dharmaseervi",
  linkedin: "https://www.linkedin.com/in/dharmaseervi",
};

const ALL = [
  "help", "projects", "about", "stack", "contact", "resume", "whoami", "uptime",
  "ls", "clear", "exit", "cat invo", "cat ralas", "cat presentsz", "cat rangdaan",
  "open invo", "open ralas", "open github", "open linkedin", "sudo hire dharma",
];

function runCommand(raw: string): string | "CLEAR" | "EXIT" {
  const input = raw.trim();
  const parts = input.split(/\s+/);
  const cmd = (parts[0] || "").toLowerCase();

  switch (cmd) {
    case "help":
      return (
        '<span class="tm-h">Available commands</span>\n' +
        ck("projects") + ck("about") + ck("stack") + ck("contact") + ck("resume") + "\n" +
        ck("cat invo") + ck("cat ralas") + ck("cat presentsz") + ck("cat rangdaan") + "\n" +
        ck("open invo") + ck("open ralas") + ck("open github") + ck("open linkedin") + "\n" +
        ck("whoami") + ck("uptime") + ck("ls") + ck("clear") + ck("exit") + "\n" +
        '<span class="tm-mut">tip: tab completes, ↑/↓ for history. or just click things.</span>'
      );
    case "projects": {
      let out = '<span class="tm-h">Production board</span>\n<table class="term-table"><tbody>';
      PROJECTS.forEach((p, i) => {
        const name = p.url
          ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.name}</a>`
          : p.name;
        out +=
          `<tr><td class="tm-mut">0${i + 1}</td><td class="tm-bri">${name}</td>` +
          `<td class="${p.live ? "tm-acc" : "tm-amb"}">${p.live ? "●" : "○"} ${p.status}</td></tr>` +
          `<tr><td></td><td colspan="2" class="tm-mut">${p.desc}</td></tr>`;
      });
      out += "</tbody></table>\n" +
        '<span class="tm-mut">details:</span> ' +
        ck("cat invo") + ck("cat ralas") + ck("cat presentsz") + ck("cat rangdaan");
      return out;
    }
    case "about":
      return (
        '<span class="tm-h">About</span>\n' +
        "Dharma Seervi — full-stack developer, Bengaluru, India.\n\n" +
        'I learn by shipping. Instead of collecting certificates, I built and\ndeployed <span class="tm-bri">Invo Billing</span> — a GST-compliant invoicing platform running in\nproduction on Azure — and took on real client work like <span class="tm-bri">Ralas Hearing\nClinic</span>. Everything here is live, used by real people, maintained by me.\n\n' +
        "Core stack: Go + PostgreSQL on the backend; SwiftUI, React Native and\nNext.js on the front. I own everything in between — API design, schemas,\nPDF generation, integrations, and the unglamorous production bugs.\n\n" +
        "Especially interested in building for India: tools that handle GST\ncorrectly and work for vernacular-language users.\n\n" +
        '<span class="tm-acc">→ Open to full-stack / backend / mobile roles — BLR or remote (IN)</span>'
      );
    case "stack":
      return (
        '<span class="tm-h">Stack</span>\n<table class="term-table"><tbody>' +
        '<tr><td class="tm-acc">backend</td><td>Go (Gin) · PostgreSQL · REST design · PDF generation · SendGrid</td></tr>' +
        '<tr><td class="tm-acc">mobile</td><td>SwiftUI · SwiftData · React Native (Expo) · TestFlight</td></tr>' +
        '<tr><td class="tm-acc">frontend</td><td>Next.js · React · Tailwind CSS · TypeScript</td></tr>' +
        '<tr><td class="tm-acc">infra</td><td>Docker · Azure Container Apps · Vercel · Git · Razorpay</td></tr>' +
        "</tbody></table>"
      );
    case "contact":
      return (
        '<span class="tm-h">Contact</span>\n' +
        `email:    <a href="mailto:${EMAIL}">${EMAIL}</a>\n` +
        'github:   <a href="https://www.github.com/dharmaseervi" target="_blank" rel="noopener noreferrer">github.com/dharmaseervi</a>\n' +
        'linkedin: <a href="https://www.linkedin.com/in/dharmaseervi" target="_blank" rel="noopener noreferrer">linkedin.com/in/dharmaseervi</a>\n\n' +
        '<span class="tm-mut">hiring? →</span> ' + ck("sudo hire dharma")
      );
    case "resume":
      if (typeof window !== "undefined") window.open("/resume.pdf", "_blank");
      return 'opening <span class="tm-bri">resume.pdf</span> …';
    case "whoami":
      return "a developer who ships. see " + ck("projects") + " for the receipts.";
    case "uptime":
      return (
        '<span class="tm-acc">invobilling.com</span> — in production since 2025, still shipping.\n' +
        '<span class="tm-acc">ralasclinic.com</span> — live, indexed, bringing in patients.'
      );
    case "ls":
      return (
        '<span class="tm-bri">invo.md  ralas.md  presentsz.md  rangdaan.md  resume.pdf</span>\n' +
        '<span class="tm-mut">try:</span> ' + ck("cat invo")
      );
    case "cat": {
      const f = (parts[1] || "").replace(".md", "").toLowerCase();
      if (f === "resume" || f === "resume.pdf")
        return '<span class="tm-red">binary file.</span> try: ' + ck("resume");
      return CATS[f] || `<span class="tm-red">cat: ${esc(parts[1] || "")}: no such file.</span> try ` + ck("ls");
    }
    case "open": {
      const t = (parts[1] || "").toLowerCase();
      if (OPEN_MAP[t]) {
        window.open(OPEN_MAP[t], "_blank");
        return `opening <a href="${OPEN_MAP[t]}" target="_blank" rel="noopener noreferrer">${OPEN_MAP[t]}</a> …`;
      }
      return '<span class="tm-red">open: unknown target.</span> try ' + ck("open invo") + ck("open ralas") + ck("open github");
    }
    case "sudo":
      if (input.toLowerCase().includes("hire"))
        return (
          '<span class="tm-acc">[sudo] permission granted.</span>\nexcellent decision. drafting offer letter…\n' +
          `email <a href="mailto:${EMAIL}">${EMAIL}</a> to complete the transaction.`
        );
      return '<span class="tm-red">sudo: nice try.</span>';
    case "clear":
      return "CLEAR";
    case "exit":
    case "quit":
      return "EXIT";
    default:
      return `<span class="tm-red">command not found: ${esc(cmd)}</span> — try ` + ck("help");
  }
}

const BOOT: Array<[string, number]> = [
  ['<span class="tm-mut">last login: building in Mysuru — deploying to the world</span>', 0],
  ['<span class="tm-acc">●</span> invobilling.com <span class="tm-mut">………</span> <span class="tm-acc">LIVE</span>', 350],
  ['<span class="tm-acc">●</span> ralasclinic.com <span class="tm-mut">………</span> <span class="tm-acc">LIVE</span>', 650],
  ['<span class="tm-bri">Dharma Seervi</span> — full-stack developer. I build software that businesses actually run on.', 850],
  ["type or tap " + ck("help") + " to look around, or " + ck("projects") + " to see the work.", 1000],
];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const histRef = useRef<{ items: string[]; idx: number }>({ items: [], idx: 0 });
  const booted = useRef(false);

  const push = (html: string, kind: Line["kind"] = "out") =>
    setLines((l) => [...l, { html, kind }]);

  useEffect(() => {
    if (booted.current) return;
    booted.current = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT.forEach(([html, delay]) => {
      if (reduce) push(html);
      else timers.push(setTimeout(() => push(html), delay));
    });
    timers.push(setTimeout(() => inputRef.current?.focus(), reduce ? 0 : 1100));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [lines]);

  const exec = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    const out = runCommand(trimmed);
    if (out === "CLEAR") {
      setLines([]);
    } else if (out === "EXIT") {
      push(PROMPT + `<span class="tm-echo">${esc(trimmed)}</span>`, "echo");
      push("returning to the main site…");
      setTimeout(() => (window.location.href = "/"), 500);
    } else {
      setLines((l) => [
        ...l,
        { html: PROMPT + `<span class="tm-echo">${esc(trimmed)}</span>`, kind: "echo" },
        { html: out, kind: "out" },
      ]);
    }
    histRef.current.items.push(trimmed);
    histRef.current.idx = histRef.current.items.length;
    setValue("");
    inputRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const h = histRef.current;
    if (e.key === "Enter") {
      exec(value);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (h.idx > 0) {
        h.idx--;
        setValue(h.items[h.idx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (h.idx < h.items.length - 1) {
        h.idx++;
        setValue(h.items[h.idx]);
      } else {
        h.idx = h.items.length;
        setValue("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const v = value.toLowerCase();
      if (!v) return;
      const m = ALL.filter((c) => c.startsWith(v));
      if (m.length === 1) setValue(m[0]);
      else if (m.length > 1) push(m.map(ck).join(""));
    }
  };

  const onAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const chip = (e.target as HTMLElement).closest("[data-c]");
    if (chip) {
      exec(chip.getAttribute("data-c") || "");
      return;
    }
    if (!(e.target as HTMLElement).closest("a")) inputRef.current?.focus();
  };

  return (
    <div className="term-page">
      <div className="term-frame">
        <div className="term-titlebar">
          <span className="tdot" style={{ background: "#e06c5b" }} />
          <span className="tdot" style={{ background: "#d9b034" }} />
          <span className="tdot" style={{ background: "#34d9a8" }} />
          <span className="tname">dharma@portfolio — zsh — 80×24</span>
        </div>
        <div className="term-body" role="log" aria-live="polite" onClick={onAreaClick}>
          {lines.map((l, i) => (
            <div
              key={i}
              className="term-line"
              dangerouslySetInnerHTML={{ __html: l.html }}
            />
          ))}
          <div className="term-input-row">
            <span dangerouslySetInnerHTML={{ __html: PROMPT }} />
            <input
              ref={inputRef}
              className="term-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="Terminal command input"
            />
          </div>
        </div>
      </div>
      <div className="term-quickbar" aria-label="Quick commands">
        {["help", "projects", "about", "stack", "contact", "resume", "exit"].map((c) => (
          <button key={c} onClick={() => exec(c)}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
