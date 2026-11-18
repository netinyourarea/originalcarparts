import { Logo } from "@/components/Logo";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { PHONE, PHONE_HREF, BRANDS, CATEGORIES } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Carefully sourced auto parts, backed by real fitment help and straightforward phone ordering.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-secondary transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/catalog" className="hover:text-primary">Catalog</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary">How It Works</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary">Categories</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link to="/catalog" search={{ category: c.slug }} className="hover:text-primary">
                    {c.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-primary">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <a href={PHONE_HREF} className="hover:text-primary">{PHONE}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <a href="mailto:parts@originalcarparts.us" className="hover:text-primary">parts@originalcarparts.us</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>2400 Industrial Pkwy, Detroit, MI 48201</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Brands We Support</div>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-display text-lg tracking-wider text-foreground/60">
            {BRANDS.map((b) => <span key={b}>{b}</span>)}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} ORIGINAL CARPARTS. All rights reserved.</div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary">Privacy</Link>
            <Link to="/terms" className="hover:text-primary">Terms</Link>
          </div>
          <div>Phone-direct orders only — no online checkout.</div>
        </div>
      </div>
    </footer>
  );
}
