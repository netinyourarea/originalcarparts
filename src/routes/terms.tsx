import { createFileRoute } from "@tanstack/react-router";

import { PHONE, PHONE_HREF } from "@/lib/data";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [{ title: "Terms & Conditions — Original Carparts" }],
  }),
  component: Page,
});

function Page() {
  void PHONE; void PHONE_HREF;
  return (
    <div className="px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-xs font-bold uppercase tracking-[0.35em] text-primary">Legal</div>
        <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Terms of Sale</h1>
        <div className="mt-10 space-y-5">
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Warranty</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>All parts include a 90-day parts-only warranty covering defects in the part itself.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Returns</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>Uninstalled parts may be returned within 30 days of delivery in the condition shipped. Returns need an authorization number from our parts counter.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Restocking fee</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>A 20% restocking fee applies to approved returns of uninstalled parts.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Core charges</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>Where a core charge applies, the core must be returned within the core charge return window (30 days) to receive a refund.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Labor excluded</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>Labor, diagnostic, towing, rental and other installation costs are not covered under any warranty or return.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Orders by phone</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>All orders are confirmed by phone after fitment is verified with your VIN. There is no online checkout.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
