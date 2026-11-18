import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/data";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [{ title: "How It Works — Original Carparts" }],
  }),
  component: Page,
});

function Page() {
  void PHONE; void PHONE_HREF;
  return (
    <div className="px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-xs font-bold uppercase tracking-[0.35em] text-primary">Process</div>
        <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">How Original Carparts Works</h1>
        <p className="mt-4 text-lg text-foreground/80">From salvage yard to your garage: how we source, test, ship and stand behind every part.</p>
        <div className="mt-10 space-y-5">
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Salvage sourcing</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>We buy late-model vehicles from insurance auctions and fleet disposals, then pull engines, transmissions and body parts in our yard. Each part is cleaned, tagged with a SKU and logged against its donor vehicle's VIN and mileage.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">7-point inspection</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>Before listing, every part is tested: compression check, fluid purity, gear tooth inspection, bore scope check, spin test, crack detection and an electrical bench test where applicable.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">90-day warranty</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>Every part carries a 90-day standard parts-only warranty from the delivery date. If a part fails due to a defect, we repair, replace or refund the part. Labor, towing and consequential costs are not covered.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Freight logistics</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>Large items ship by pallet freight to your garage or repair shop. A specialist confirms the delivery address, liftgate needs and transit time when you call. Please inspect the shipment at delivery and note any damage on the bill of lading.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Core charge returns</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>Some parts carry a refundable core charge. Return your old unit in the same packaging within 30 days of delivery, complete and uncracked, and the core charge is refunded.</p>
            </div>
          </section>
        </div>
        <a href={PHONE_HREF} className="mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-display text-lg font-bold text-primary-foreground transition-colors hover:bg-primary-glow">
          <Phone className="h-5 w-5" /> Call {PHONE}
        </a>
      </div>
    </div>
  );
}
