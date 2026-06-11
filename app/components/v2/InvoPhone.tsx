/*
 * iPhone mockup for the Invo Billing case study.
 *
 * SWAP IN YOUR REAL SCREENSHOT:
 * 1. Export a screenshot from the app (1170x2532 or any 9:19.5-ish ratio)
 * 2. Save it as /public/screenshots/invo.png
 * 3. Replace everything inside <div className="phone-screen"> with:
 *      <img src="/screenshots/invo.png" alt="Invo Billing invoice screen"
 *           style={{ width: "100%", height: "100%", objectFit: "cover" }} />
 * The CSS mock below is a stand-in so the card looks finished until then.
 */

const rows = [
  { item: "Asian Paints Apex 20L", qty: "2", amt: "9,360" },
  { item: "Primer WT 10L", qty: "1", amt: "1,850" },
  { item: "Brush set — 4pc", qty: "3", amt: "540" },
];

export default function InvoPhone() {
  return (
    <div className="phone" aria-label="Invo Billing app preview">
      <div className="phone-island" aria-hidden />
      <div className="phone-screen">
        {/* status bar spacing */}
        <div style={{ height: 40 }} />

        {/* app header */}
        <div className="flex items-center justify-between px-4">
          <span className="font-display text-sm font-extrabold text-[var(--text)]">
            Invo
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--accent)]">
            INV-0042
          </span>
        </div>

        {/* client block */}
        <div className="mx-3 mt-3 rounded-lg border hairline bg-[#111815] p-3">
          <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--muted)]">
            Billed to
          </p>
          <p className="mt-1 text-[11px] font-medium text-[var(--text)]">
            Sharma Hardware &amp; Paints
          </p>
          <p className="text-[8px] text-[var(--muted)]">GSTIN 29ABCDE1234F1Z5</p>
        </div>

        {/* line items */}
        <div className="mx-3 mt-2 rounded-lg border hairline bg-[#111815] px-3 py-2">
          {rows.map((r) => (
            <div
              key={r.item}
              className="flex items-center justify-between border-b hairline py-1.5 last:border-b-0"
            >
              <div className="min-w-0 pr-2">
                <p className="truncate text-[9px] text-[var(--text)]">{r.item}</p>
                <p className="text-[7px] text-[var(--muted)]">Qty {r.qty}</p>
              </div>
              <span className="font-mono text-[9px] text-[var(--text)]">₹{r.amt}</span>
            </div>
          ))}
        </div>

        {/* GST + total */}
        <div className="mx-3 mt-2 rounded-lg border hairline bg-[#111815] px-3 py-2">
          <div className="flex justify-between text-[8px] text-[var(--muted)]">
            <span>CGST 9%</span>
            <span className="font-mono">₹1,057.50</span>
          </div>
          <div className="mt-1 flex justify-between text-[8px] text-[var(--muted)]">
            <span>SGST 9%</span>
            <span className="font-mono">₹1,057.50</span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t hairline pt-2">
            <span className="text-[9px] font-medium text-[var(--text)]">Total</span>
            <span className="font-mono text-[12px] font-medium text-[var(--accent)]">
              ₹13,865
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto px-3 pb-4">
          <div className="rounded-full bg-[var(--accent)] py-2 text-center font-mono text-[8px] font-medium uppercase tracking-[0.14em] text-[var(--bg)]">
            Send invoice
          </div>
        </div>
      </div>
    </div>
  );
}
