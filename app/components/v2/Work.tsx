import Reveal from "./interactive/Reveal";
import SpotlightCard from "./interactive/SpotlightCard";
import DeviceTilt from "./interactive/DeviceTilt";
import InvoPhone from "./InvoPhone";

type Study = {
  eyebrow: string;
  title: string;
  oneLiner: string;
  href?: string;
  problem: string;
  built: string;
  highlights: { label: string; text: string }[];
  stack: string[];
};

const studies: Study[] = [
  {
    eyebrow: "Case study — live SaaS",
    title: "Invo Billing",
    oneLiner:
      "GST-compliant invoicing for Indian businesses — from iOS app to production backend.",
    href: "https://invobilling.com",
    problem:
      "Small Indian businesses need invoices that are actually GST-compliant — correct CGST/SGST/IGST breakdowns, HSN/SAC codes, amounts in words — and most global tools get this wrong or overcharge for it.",
    built:
      "A complete invoicing platform: a SwiftUI iOS app with a minimalist design system, backed by a Go (Gin) + PostgreSQL API deployed on Azure Container Apps under a custom domain.",
    highlights: [
      {
        label: "GST-correct PDF engine",
        text: "Multi-page invoice PDFs with full GST breakdowns, HSN/SAC codes, and Indian-Rupee amount-in-words — built in Go, no third-party PDF service.",
      },
      {
        label: "Email delivery",
        text: "SendGrid integration sends invoices straight to the client's inbox, sharing one PDF pipeline between download and email paths.",
      },
      {
        label: "Production operations",
        text: "Docker Buildx images, Azure CLI release workflow, environment separation between TestFlight and production, and real incident debugging.",
      },
    ],
    stack: ["Swift / SwiftUI", "Go / Gin", "PostgreSQL", "Docker", "Azure", "SendGrid"],
  },
  {
    eyebrow: "Case study — client work",
    title: "Ralas Hearing Clinic",
    oneLiner:
      "A fast, SEO-first website for a hearing care clinic — designed, built, and shipped solo.",
    href: "https://ralasclinic.com",
    problem:
      "A local clinic needed to be found on Google by patients searching for hearing care, load fast on budget Android phones, and publish health articles without a developer.",
    built:
      "A Next.js 16 site styled entirely with Tailwind CSS v4 utilities, with dynamic article routes, comprehensive on-page SEO, and Google Analytics to measure what actually brings patients in.",
    highlights: [
      {
        label: "SEO as architecture",
        text: "Semantic markup, per-page metadata, and dynamic routes built for long-tail health search queries — not bolted on afterwards.",
      },
      {
        label: "Performance on real devices",
        text: "Optimized images and utility-only styling keep the site fast on the low-end phones most patients actually use.",
      },
      {
        label: "Delivered to a real client",
        text: "Scoped, built, deployed, and handed over — including the communication and revision cycles real client work demands.",
      },
    ],
    stack: ["Next.js 16", "Tailwind v4", "Vercel", "Google Analytics"],
  },
  {
    eyebrow: "Case study — hardware + software",
    title: "Presentsz",
    oneLiner:
      "Bluetooth-based attendance for colleges — students check in by walking into the room.",
    problem:
      "Roll-call attendance wastes lecture time and is trivially gamed by proxies. Presentsz verifies physical presence instead: an ESP32 BLE beacon in the classroom, detected by the student's phone.",
    built:
      "A React Native (Expo) app that scans for the room's BLE beacon and checks the student in, backed by a Go (Gin) + PostgreSQL API managing classes, sessions, and attendance records.",
    highlights: [
      {
        label: "Embedded to backend",
        text: "Custom-flashed ESP32 beacons broadcasting unique room IDs, consumed by mobile BLE APIs and persisted through a relational backend — one system, three domains.",
      },
      {
        label: "Honest status",
        text: "App and API are functional; end-to-end BLE testing on physical devices is in progress. It's here because it shows range, not because it's finished.",
      },
    ],
    stack: ["React Native / Expo", "Go / Gin", "PostgreSQL", "ESP32 / BLE"],
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <p className="eyebrow">Selected work</p>
      <h2 className="font-display mt-4 text-4xl font-extrabold sm:text-5xl">
        Shipped, live, maintained.
      </h2>

      <div className="mt-12 space-y-12">
        {studies.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <SpotlightCard className="hover-border rounded-xl border hairline bg-[var(--surface)] p-6 sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr,1.4fr]">
              {/* Left: identity */}
              <div>
                <p className="eyebrow">{s.eyebrow}</p>
                <h3 className="font-display mt-3 text-2xl font-extrabold sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {s.oneLiner}
                </p>
                {s.href && (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent arrow-link mt-4 inline-block font-mono text-xs uppercase tracking-[0.14em]"
                  >
                    {s.href.replace("https://", "")} <span className="arr">↗</span>
                  </a>
                )}
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.stack.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                {s.title === "Invo Billing" && (
                  <div className="mt-10 flex justify-center md:justify-start">
                    <DeviceTilt>
                      <InvoPhone />
                    </DeviceTilt>
                  </div>
                )}
              </div>

              {/* Right: substance */}
              <div className="space-y-6 text-sm leading-relaxed">
                <div>
                  <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                    The problem
                  </h4>
                  <p className="mt-2 text-[var(--text)]">{s.problem}</p>
                </div>
                <div>
                  <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                    What I built
                  </h4>
                  <p className="mt-2 text-[var(--text)]">{s.built}</p>
                </div>
                <div>
                  <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Highlights
                  </h4>
                  <ul className="mt-2 space-y-3">
                    {s.highlights.map((h) => (
                      <li key={h.label}>
                        <span className="font-medium text-[var(--accent)]">
                          {h.label}.
                        </span>{" "}
                        <span className="text-[var(--text)]">{h.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
