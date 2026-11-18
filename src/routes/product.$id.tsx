import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone, ShoppingCart, ShieldCheck, Truck, Wrench, Check } from "lucide-react";
import { PRODUCTS, PHONE, PHONE_HREF } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { useState } from "react";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.title} — Original Carparts` },
      { name: "description", content: loaderData?.product.description ?? "" },
      { property: "og:title", content: loaderData?.product.title ?? "" },
      { property: "og:description", content: loaderData?.product.description ?? "" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  notFoundComponent: () => (
    <div className="px-4 py-20 text-center">
      <div className="font-display text-6xl text-primary">404</div>
      <p className="mt-2">Part not found.</p>
      <Link to="/catalog" className="mt-4 inline-block text-primary underline">Back to catalog</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [zoom, setZoom] = useState(false);

  return (
    <div className="px-4 py-12 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/catalog" className="hover:text-primary">Catalog</Link> / {product.title}
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div
              className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card cursor-zoom-in"
              onClick={() => setZoom(!zoom)}
            >
              <img
                src={product.image}
                alt={product.title}
                className={`h-full w-full object-cover transition-transform duration-500 ${zoom ? "scale-150" : "scale-100"}`}
              />
              <div className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                <ShieldCheck className="mr-1 inline h-3.5 w-3.5" /> Inspected &amp; Verified
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary">SKU {product.sku}</div>
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">{product.title}</h1>

            <div className="mt-6 flex items-baseline gap-3">
              <div className="font-display text-4xl font-bold text-primary">
                {product.price ? `$${product.price.toLocaleString()}` : "Call for Price"}
              </div>
              <span className="rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-success">
                {product.stock}
              </span>
            </div>

            <div className="mt-6 space-y-3 rounded-xl border border-border bg-card p-5">
              <div className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div><span className="font-bold">Fitment:</span> {product.fitment}</div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div><span className="font-bold">Warranty:</span> {product.warranty}</div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Truck className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div><span className="font-bold">Shipping:</span> Pallet freight, nationwide</div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Wrench className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <div><span className="font-bold">Mileage / Condition:</span> {product.mileage} · {product.condition}</div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

            <div className="mt-6 rounded-2xl border-2 border-primary/40 bg-primary/5 p-5">
              <div className="font-display text-lg font-bold text-primary">Phone orders only</div>
              <p className="mt-1 text-sm text-foreground/80">
                This part is reserved by phone only. Call our parts counter with your VIN to confirm gear ratios/fitment and arrange pallet delivery.
              </p>
              <a href={PHONE_HREF} className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-display text-lg font-bold text-primary-foreground transition-colors hover:bg-primary-glow">
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
              <button
                onClick={() => add({ id: product.id, title: product.title, image: product.image, price: product.price, fitment: product.fitment })}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" /> Add to Call List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
