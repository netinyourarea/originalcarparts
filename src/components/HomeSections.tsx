import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ShieldCheck, Truck, Wrench, BadgeDollarSign, Headset, Boxes, HelpCircle } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

export function ProductShowcase() {
  const [tab, setTab] = useState<string>("all");
  const labels: Record<string, string> = { engines: "Engines & Motors", transmissions: "Transmissions", "other-parts": "Other Parts" };
  const tabs = [{ slug: "all", label: "All Parts" }, ...CATEGORIES.map((c) => ({ slug: c.slug, label: labels[c.slug] }))];
  const list = tab === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === tab);

  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [paused, setPaused] = useState(false);
  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    embla?.reInit();
    embla?.scrollTo(0, true);
  }, [embla, tab]);

  useEffect(() => {
    if (!embla || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => embla.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [embla, paused]);

  return (
    <section className="px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.35em] text-primary">Featured Inventory</div>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Tested parts, ready to ship</h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={prev} aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:border-primary hover:text-primary"><ArrowLeft className="h-4 w-4" /></button>
            <button onClick={next} aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:border-primary hover:text-primary"><ArrowRight className="h-4 w-4" /></button>
            <Link to="/catalog" className="ml-2 text-sm font-semibold text-primary hover:underline">View full catalog →</Link>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap gap-2" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.slug}
              role="tab"
              aria-selected={tab === t.slug}
              onClick={() => setTab(t.slug)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                tab === t.slug ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="-ml-5 flex">
            {list.map((p) => (
              <div key={p.id} className="min-w-0 flex-[0_0_100%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    { icon: ShieldCheck, t: "90-Day Warranty", d: "On every part" },
    { icon: Wrench, t: "7-Point Tested", d: "Before listing" },
    { icon: Truck, t: "Pallet Freight", d: "To your shop" },
    { icon: Headset, t: "Real Specialists", d: "Answer the phone" },
  ];
  return (
    <section className="px-4 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
            <div><div className="font-display font-bold">{t}</div><div className="text-xs text-muted-foreground">{d}</div></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CategoriesSection() {
  return (
    <section className="px-4 pb-10 pt-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-[0.35em] text-primary">Shop by Category</div>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Three core categories</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to="/catalog" search={{ category: c.slug }} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border brand-glow-hover">
              <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="category-image-overlay absolute inset-0" />
              <div className="on-dark absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl font-bold text-white">{c.name}</h3>
                <div className="mt-1 text-sm font-semibold text-accent">Browse 5 parts →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const items = [
    { icon: ShieldCheck, t: "Tested, not guessed", d: "Every engine and transmission is bench- or dyno-tested and documented." },
    { icon: BadgeDollarSign, t: "Fair, upfront pricing", d: "Prices are listed. No surprise fees when you call to order." },
    { icon: Headset, t: "Fitment by VIN", d: "A specialist checks your VIN so the part fits the first time." },
    { icon: Boxes, t: "Hard-to-find stock", d: "Late-model OEM units that dealers no longer carry." },
    { icon: Truck, t: "Freight handled", d: "We arrange pallet freight straight to your garage." },
    { icon: Wrench, t: "Shop friendly", d: "Core returns and clear warranty terms for repair shops." },
  ];
  return (
    <section className="border-t border-border bg-muted/50 px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.35em] text-primary">Why Original Carparts</div>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Built for drivers and repair shops</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 brand-glow-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
              <h3 className="mt-4 font-display text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const stats = [{ n: "20+", l: "Years in salvage" }, { n: "10K+", l: "Parts moved" }, { n: "98%", l: "Fitment accuracy" }, { n: "48hr", l: "Average ship time" }];
  return (
    <section className="bg-primary px-4 py-14 text-primary-foreground lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="font-display text-4xl font-extrabold text-accent">{s.n}</div>
            <div className="mt-1 text-sm opacity-90">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  const faqs = [
    { q: "Can I buy online?", a: "No. Every order is placed by phone so a specialist can confirm fitment with your VIN first." },
    { q: "What warranty do parts carry?", a: "Every part includes a 90-day parts-only warranty. Labor is not covered." },
    { q: "How does delivery work?", a: "Large parts ship by pallet freight to your garage or repair shop." },
    { q: "Can I return a part?", a: "Uninstalled parts can be returned within 30 days, subject to a 20% restocking fee." },
  ];
  return (
    <section className="px-4 pb-24 pt-4 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl"><HelpCircle className="h-7 w-7 text-primary" /> Common questions</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-border bg-card p-5">
              <summary className="cursor-pointer font-display font-bold">{f.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <Link to="/how-it-works" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">Read how it works →</Link>
      </div>
    </section>
  );
}
