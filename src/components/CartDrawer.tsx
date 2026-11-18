import { useCart } from "@/lib/cart";
import { X, Phone, Trash2, Plus, Minus } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/data";

export function CartDrawer() {
  const { open, setOpen, items, remove, setQty, subtotal } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-card shadow-elevated transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <h3 className="font-display text-2xl tracking-wider">YOUR PARTS LIST</h3>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {items.length} item{items.length !== 1 ? "s" : ""} selected
            </p>
          </div>
          <button onClick={() => setOpen(false)} className="rounded-xl p-2 hover:bg-secondary" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="font-display text-5xl text-primary/30">EMPTY</div>
              <p className="mt-3 text-sm text-muted-foreground">No parts selected yet.<br />Browse the catalog to begin.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="flex gap-3 rounded-xl border border-border bg-background/50 p-3">
                  <img src={it.image} alt={it.title} className="h-20 w-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <div className="font-heading text-sm font-semibold leading-tight">{it.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{it.fitment}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => setQty(it.id, it.qty - 1)} className="flex h-6 w-6 items-center justify-center rounded-xl border border-border hover:border-primary"><Minus className="h-3 w-3" /></button>
                        <span className="w-6 text-center text-sm font-bold">{it.qty}</span>
                        <button onClick={() => setQty(it.id, it.qty + 1)} className="flex h-6 w-6 items-center justify-center rounded-xl border border-border hover:border-primary"><Plus className="h-3 w-3" /></button>
                      </div>
                      <div className="text-sm font-bold text-primary">
                        {it.price ? `$${(it.price * it.qty).toLocaleString()}` : "Call for Price"}
                      </div>
                    </div>
                  </div>
                  <button onClick={() => remove(it.id)} className="self-start rounded-xl p-1 text-muted-foreground hover:text-primary" aria-label="Remove">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5">
            <div className="mb-1 flex justify-between text-sm text-muted-foreground">
              <span>Estimated Subtotal</span>
              <span className="font-semibold text-foreground">${subtotal.toLocaleString()}</span>
            </div>
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
              Final pricing, fitment confirmation, and shipping confirmed by phone.
            </p>
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
              <div className="font-display text-lg tracking-wider text-primary">CALL TO COMPLETE YOUR ORDER</div>
              <p className="mt-1 text-xs text-muted-foreground">Your selected parts are ready. Speak with our parts specialist to place your order.</p>
              <a
                href={PHONE_HREF}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-display text-lg tracking-wider text-primary-foreground transition-all hover:bg-primary-glow brand-glow"
              >
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
              <a href={PHONE_HREF} className="mt-2 block w-full rounded-xl border border-border bg-secondary px-4 py-2 text-center text-sm font-semibold transition-colors hover:border-primary">
                Call Us Now
              </a>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
