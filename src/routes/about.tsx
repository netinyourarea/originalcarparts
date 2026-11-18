import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Wrench, Truck, Star, Phone, Recycle, Users, Target } from "lucide-react";
import benchImg from "@/assets/home-inspection-bench.jpg";
import yardImg from "@/assets/hero-auto-parts-yard.jpg";
import { PHONE, PHONE_HREF } from "@/lib/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Original Carparts" },
      { name: "description", content: "Original Carparts is a phone-direct salvage and OEM parts specialist with inspected engines, transmissions and genuine replacement parts." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={yardImg} alt="Original Carparts salvage yard" className="h-full w-full object-cover" />
          <div className="hero-image-overlay absolute inset-0" />
        </div>
        <div className="on-dark relative mx-auto max-w-5xl px-4 py-20 lg:px-8 lg:py-28">
          <div className="text-xs font-bold uppercase tracking-[0.35em] text-accent">Our Story</div>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-white sm:text-6xl">Driven by precision, backed by people</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Original Carparts was founded by mechanics who were tired of guesswork. We answer the phone, confirm fitment by VIN and test every part before it ships.
          </p>
        </div>
      </section>

      <div className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[{ n: "20+", l: "Years Experience" }, { n: "10K+", l: "Parts Moved" }, { n: "98%", l: "Fitment Accuracy" }, { n: "48hr", l: "Average Ship Time" }].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="font-display text-4xl font-extrabold text-primary">{s.n}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          <section className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold">Why we sell by phone</h2>
              <p className="mt-4 text-foreground/80">A wrong part costs you a weekend. That is why there is no online checkout: our specialists verify your VIN, engine code and gear ratio before anything ships.</p>
              <p className="mt-3 text-foreground/80">One call replaces the return shipping, restocking fees and downtime of ordering the wrong unit.</p>
            </div>
            <img src={benchImg} alt="Inspection bench" loading="lazy" className="rounded-2xl border border-border shadow-elevated" />
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold">What we stand for</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {[
                { icon: Target, t: "Our mission", d: "Make quality used and OEM parts easy to trust by testing, documenting and standing behind each one." },
                { icon: Recycle, t: "Sustainable by nature", d: "Reusing tested salvage parts keeps good components out of landfills and costs less than new." },
                { icon: Users, t: "Shops and drivers", d: "We serve independent repair shops and individual owners with the same service and warranty." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-4 font-display text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl font-bold">Our timeline</h2>
            <ol className="mt-6 space-y-4 border-l-2 border-primary/30 pl-6">
              {[
                ["Day one", "A two-bay yard in Detroit pulling engines and transmissions."],
                ["Year 5", "Added bench testing and a written inspection sheet for every part."],
                ["Year 10", "Moved to a phone-only ordering model with VIN-verified fitment."],
                ["Today", "Pallet freight to garages and repair shops nationwide."],
              ].map(([y, d]) => (
                <li key={y} className="relative">
                  <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full bg-primary" />
                  <div className="font-display font-bold">{y}</div>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            {[
              { icon: ShieldCheck, t: "Inspected Inventory", d: "Every part tested for function and condition before listing." },
              { icon: Wrench, t: "Real Specialists", d: "Trained parts pros, not order-takers, answer every call." },
              { icon: Truck, t: "Freight Network", d: "Pallet freight covers all 50 states with tracking." },
              { icon: Star, t: "90-Day Warranty", d: "Every part is backed by a standard 90-day parts warranty." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
                <div>
                  <h3 className="font-display text-lg font-bold">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-12">
            <h2 className="font-display text-3xl font-bold">Ready to find your part?</h2>
            <p className="mt-2 opacity-90">Call with your VIN and we will confirm fitment on the spot.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-display font-bold text-accent-foreground"><Phone className="h-4 w-4" /> {PHONE}</a>
              <Link to="/catalog" className="rounded-xl border border-white/50 px-6 py-3 font-display font-bold">Browse catalog</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
