import { Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Gauge } from "lucide-react";
import { Product, PHONE_HREF } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card brand-glow-hover">
      <Link to="/product/$id" params={{ id: product.id }} className="relative aspect-square overflow-hidden bg-background">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            {product.condition}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-card/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
            <Gauge className="h-3 w-3 text-primary" /> {product.mileage}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link to="/product/$id" params={{ id: product.id }}>
          <h3 className="font-heading text-base font-semibold leading-tight transition-colors hover:text-primary">
            {product.title}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{product.fitment}</p>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="font-display text-2xl font-bold text-primary">${product.price.toLocaleString()}</div>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
            <ShieldCheck className="h-3 w-3" /> 90-Day Warranty
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2.5 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary-glow"
          >
            <Phone className="h-3.5 w-3.5" /> Call to Inquire
          </a>
          <Link
            to="/product/$id"
            params={{ id: product.id }}
            className="flex items-center justify-center rounded-xl border border-border bg-secondary px-3 py-2.5 text-xs font-bold transition-colors hover:border-primary hover:text-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
