import Reveal from "./interactive/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <Reveal>
      <div className="grid gap-10 md:grid-cols-[1fr,2fr]">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="font-display mt-4 text-4xl font-extrabold sm:text-5xl">
            I learn by shipping.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-[var(--muted)]">
          <p>
            I&apos;m Dharma Seervi, a full-stack developer based in Bengaluru.
            Instead of collecting certificates, I built and deployed{" "}
            <a href="https://invobilling.com" className="link-accent">
              Invo Billing
            </a>{" "}
            — a GST-compliant invoicing platform running in production on Azure
            — and took on real client work like the website for{" "}
            <a href="https://ralasclinic.com" className="link-accent">
              Ralas Hearing Clinic
            </a>
            . Everything on this page is live, used by real people, and
            maintained by me.
          </p>
          <p>
            My core stack is Go and PostgreSQL on the backend, with SwiftUI,
            React Native, and Next.js on the front. I&apos;m comfortable owning
            everything in between: API design, schemas, PDF generation, payment
            and email integrations, and the unglamorous production bugs that
            only show up after launch.
          </p>
          <p>
            I&apos;m especially interested in building for India — tools that
            handle GST correctly, fit local business workflows, and work for
            vernacular-language users. Currently open to full-stack, backend,
            and mobile roles in Bengaluru or remote across India.
          </p>
        </div>
      </div>
      </Reveal>
    </section>
  );
}

export function NowBuilding() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <Reveal>
      <div className="hover-border flex flex-col gap-4 rounded-xl border hairline bg-[var(--accent-dim)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="eyebrow">Now building</p>
          <h3 className="font-display mt-2 text-xl font-extrabold">Rangdaan</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            An iOS app for paint dealers: upload a company price-list PDF, and
            it extracts every item using the Claude API, then computes dealer,
            GST-inclusive, and cost prices on the spot. SwiftUI + SwiftData,
            MVVM.
          </p>
        </div>
        <span className="dot dot-dev sm:ml-6" aria-hidden />
      </div>
      </Reveal>
    </section>
  );
}

const groups = [
  { name: "Backend", items: ["Go (Gin)", "PostgreSQL", "REST API design", "PDF generation", "SendGrid", "Resend"] },
  { name: "Mobile", items: ["SwiftUI", "SwiftData", "React Native (Expo)", "TestFlight releases"] },
  { name: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "TypeScript"] },
  { name: "Infra & tools", items: ["Docker", "Azure Container Apps", "Vercel", "Git", "Razorpay"] },
];

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <Reveal>
      <p className="eyebrow">Stack</p>
      <h2 className="font-display mt-4 text-4xl font-extrabold sm:text-5xl">
        Tools I ship with.
      </h2>
      <div className="mt-10 grid gap-px overflow-hidden rounded-xl border hairline bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <div key={g.name} className="bg-[var(--surface)] p-6">
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--accent)]">
              {g.name}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </Reveal>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-28 sm:px-8">
      <Reveal>
      <p className="eyebrow">Contact</p>
      <h2 className="font-display mt-4 text-5xl font-extrabold sm:text-6xl">
        Let&apos;s talk.
      </h2>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)]">
        Open to full-stack, backend, and mobile roles — Bengaluru or remote
        within India. If you&apos;re hiring, or want to talk Go, SwiftUI, or
        building for the Indian market, my inbox is open.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        {/* TODO: replace with your real email */}
        <a
          href="mailto:hello@dharmaseervi.com"
          className="btn-lift rounded-full bg-[var(--accent)] px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--bg)] hover:opacity-90"
        >
          Email me
        </a>
        {[
          { label: "GitHub", href: "https://www.github.com/dharmaseervi" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/dharmaseervi" },
          { label: "Twitter", href: "https://www.twitter.com/dharmaseervi" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-link font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            {s.label} <span className="arr">↗</span>
          </a>
        ))}
      </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 font-mono text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} Dharma Seervi</span>
        <span>Built with Next.js — designed and written by me.</span>
      </div>
    </footer>
  );
}
