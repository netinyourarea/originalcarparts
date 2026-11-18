import { Logo } from "@/components/Logo";
import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { PHONE, PHONE_HREF } from "@/lib/data";

const navLinks = [
  { to: "/catalog", label: "Catalog" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const { count, setOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 glass-strong border-b border-border/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-heading text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                path === l.to ? "text-primary" : "text-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow md:flex"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
          <button
            onClick={() => setOpen(true)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary transition-colors hover:border-primary hover:bg-primary/10"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/40 lg:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="py-3 font-heading font-semibold text-foreground/80 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
