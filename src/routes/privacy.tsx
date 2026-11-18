import { createFileRoute } from "@tanstack/react-router";

import { PHONE, PHONE_HREF } from "@/lib/data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [{ title: "Privacy Policy — Original Carparts" }],
  }),
  component: Page,
});

function Page() {
  void PHONE; void PHONE_HREF;
  return (
    <div className="px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-xs font-bold uppercase tracking-[0.35em] text-primary">Legal</div>
        <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>
        <div className="mt-10 space-y-5">
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Phone calls</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>When you call us, we may record or take notes on the call for quality and order accuracy. We use what you tell us only to identify the right part and complete your order.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Callback request forms</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>If you submit a callback form we store your name, phone number, vehicle and part request so a specialist can contact you. We do not sell this information.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Shipping addresses</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>We collect delivery addresses only to arrange freight and share them with the carrier handling your shipment.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Vehicle VIN storage</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>We store the VIN you give us to confirm fitment and to support your warranty. VINs are kept with your order record.</p>
            </div>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Your choices</h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-foreground/80">
            <p>You can ask us to access or delete your information by calling or emailing parts@originalcarparts.us. We retain order records as required for warranty and tax purposes.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
