import Board from "./Board";
import Reveal from "./interactive/Reveal";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-24 pt-32 sm:px-8 sm:pt-44">
      <Reveal>
        <p className="eyebrow">Full-stack developer — Bengaluru, India</p>

        <h1 className="font-display mt-5 max-w-3xl text-5xl font-extrabold leading-[1.04] sm:text-7xl">
          I build software that businesses <span className="grad">actually run on.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          Go backends, SwiftUI &amp; React Native apps, Next.js frontends —
          shipped to production, not just to GitHub.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="btn-lift rounded-full bg-[var(--accent)] px-6 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--bg)] hover:opacity-90"
          >
            View work
          </a>
          <a
            href="/resume.pdf"
            className="btn-lift rounded-full border hairline px-6 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-[var(--text)] hover:border-[var(--accent)]"
          >
            Resume
          </a>
        </div>
      </Reveal>

      {/* Signature: production board with boot sequence + live clock */}
      <Board />
    </section>
  );
}
