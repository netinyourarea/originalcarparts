import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

const search = z.object({ category: z.string().optional() });

export const Route = createFileRoute("/catalog")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Parts Catalog — Original Carparts" },
      { name: "description", content: "Browse inspected engines, transmissions, and other parts. Call a specialist to confirm fitment and order." },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  const { category } = Route.useSearch();
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const filtered = PRODUCTS.filter(
    (p) =>
      (!category || p.category === category) &&
      (!term || `${p.title} ${p.fitment} ${p.sku}`.toLowerCase().includes(term)),
  );
  const activeCat = CATEGORIES.find((c) => c.slug === category);
  const pill = (active: boolean) =>
    `block rounded-xl border px-4 py-2 text-sm font-semibold transition-colors ${
      active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary hover:text-primary"
    }`;

  return (
    <div className="px-4 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-[0.35em] text-primary">Catalog</div>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">{activeCat ? activeCat.name : "All Parts"}</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside>
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Categories</div>
            <ul className="mt-3 flex flex-wrap gap-2 lg:flex-col">
              <li><Link to="/catalog" className={pill(!category)}>All</Link></li>
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link to="/catalog" search={{ category: c.slug }} className={pill(category === c.slug)}>{c.short}</Link>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by part, vehicle or SKU"
                className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <div className="mb-4 text-sm text-muted-foreground">{filtered.length} parts found</div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
            {filtered.length === 0 && (
              <div className="rounded-xl border border-border bg-card p-12 text-center">
                <div className="font-display text-2xl font-bold text-muted-foreground">No parts match</div>
                <p className="mt-2 text-sm text-muted-foreground">Call us — we may have it in our sourcing network.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
