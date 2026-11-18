import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, ShieldCheck, Truck, Search, PhoneCall, CheckCircle2, Star } from "lucide-react";
import heroImg from "@/assets/hero-auto-parts-yard.jpg";
import ctaImg from "@/assets/cta-engine-workshop.jpg";
import benchImg from "@/assets/home-inspection-bench.jpg";
import { BRANDS, TESTIMONIALS, PHONE, PHONE_HREF } from "@/lib/data";
import { ProductShowcase, TrustBar, CategoriesSection, WhyChooseUs, Stats, Faq } from "@/components/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Original Carparts | Premium OEM & Tested Salvage Auto Parts" },
      { name: "description", content: "Inspected engines, transmissions, and genuine replacement parts. Verified fitment and ordered by phone directly with an auto specialist." },
      { property: "og:title", content: "Original Carparts | Premium OEM & Tested Salvage Auto Parts" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <BrandTicker />
      <TrustBar />
      <CategoriesSection />
      <ProductShowcase />
      <WhyChooseUs />
      <InspectionBench />
      <OrderingSteps />
      <Stats />
      <CallCTA />
      <Testimonials />
      <Faq />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Stocked auto parts yard with a pickup truck" className="h-full w-full object-cover" width={1600} height={1008} />
        <div className="hero-image-overlay absolute inset-0" />
      </div>
      <div className="on-dark relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-36">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" /> 90-Day Warranty on Every Part
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            PREMIUM OEM &amp; TESTED SALVAGE AUTO PARTS
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90">
            Inspected engines, transmissions, and genuine replacement parts. Verified fitment and ordered by phone directly with an auto specialist.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-4 font-display text-base font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" /> Call Specialist Now
            </a>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 rounded-xl border border-white/50 bg-white/10 px-7 py-4 font-display text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Browse 3 Core Categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandTicker() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section className="border-y border-border bg-card py-8">
      <div className="mb-5 text-center text-xs font-bold uppercase tracking-[0.35em] text-primary">Parts for the brands you drive</div>
      <div className="marquee overflow-hidden" aria-label="Supported manufacturers">
        <div className="marquee-track flex gap-4">
          {loop.map((b, i) => (
            <div
              key={`${b}-${i}`}
              aria-hidden={i >= BRANDS.length}
              className="flex h-16 w-44 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-background"
            >
              <span className="font-display text-xl font-bold tracking-wide text-foreground/70">{b.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTS = [
  "Compression check",
  "Fluid purity",
  "Gear tooth inspection",
  "Bore scope check",
  "Spin test",
  "Crack detection",
  "Electrical bench test",
];

function InspectionBench() {
  return (
    <section className="border-t border-border bg-muted/50 px-4 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
          <img src={benchImg} alt="Technician testing parts on the inspection bench" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.35em] text-primary">Quality Inspection Bench</div>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">7-Point Quality Inspection</h2>
          <p className="mt-3 text-muted-foreground">Every part passes these seven tests before it is listed, so you receive a part we would install ourselves.</p>
          <ol className="mt-6 space-y-3">
            {TESTS.map((t, i) => (
              <li key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">{i + 1}</span>
                <span className="font-semibold">{t}</span>
                <CheckCircle2 className="ml-auto h-5 w-5 text-success" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function OrderingSteps() {
  const steps = [
    { icon: Search, title: "Find your part", text: "Find your part or request fitment." },
    { icon: PhoneCall, title: "Call with your VIN", text: "Call our hotline with your vehicle's VIN." },
    { icon: Truck, title: "Pallet freight delivery", text: "Fast pallet freight delivery directly to your garage or repair shop." },
  ];
  return (
    <section className="px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.35em] text-primary">Simple Process</div>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">3-Step Phone Ordering</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7 brand-glow-hover">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
                <span className="font-display text-5xl font-extrabold text-primary/15">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">Step {i + 1}: {title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaImg} alt="Specialist inspecting an engine at a workshop stand" loading="lazy" className="h-full w-full object-cover" />
        <div className="hero-image-overlay absolute inset-0" />
      </div>
      <div className="on-dark relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl">NEED A PART FAST?</h2>
          <p className="mt-4 text-lg text-white/90">Talk directly with our parts specialists. We confirm fitment, lock pricing, and arrange freight.</p>
          <a href={PHONE_HREF} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-display text-xl font-bold text-accent-foreground">
            <Phone className="h-5 w-5" /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 font-display text-3xl font-bold sm:text-4xl">Trusted by drivers and shops</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-7 brand-glow-hover">
              <div className="flex gap-1 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4 text-sm leading-relaxed">"{t.text}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <div className="font-display font-bold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.vehicle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
