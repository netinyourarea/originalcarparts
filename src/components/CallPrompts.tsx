import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Phone, X, ShieldCheck } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/data";

export function StickyCallButton() {
  return (
    <a
      href={PHONE_HREF}
      aria-label={`Call ${PHONE}`}
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 font-display text-sm font-bold text-accent-foreground shadow-elevated transition-transform hover:-translate-y-0.5 sm:bottom-6 sm:right-6"
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-foreground/30" />
        <Phone className="relative h-4 w-4" />
      </span>
      <span className="hidden sm:inline">Call {PHONE}</span>
      <span className="sm:hidden">Call Now</span>
    </a>
  );
}

export function CallPopup() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  // Re-arm on every page: popup appears 5 seconds after landing on any route.
  useEffect(() => {
    setOpen(false);
    const id = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(id);
  }, [path]);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="call-popup-title"
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-up relative w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-elevated"
      >
        <button onClick={close} aria-label="Close" className="absolute right-3 top-3 rounded-full p-2 text-muted-foreground hover:bg-secondary">
          <X className="h-5 w-5" />
        </button>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Phone className="h-7 w-7" />
        </div>
        <h2 id="call-popup-title" className="mt-5 font-display text-2xl font-extrabold">Need a part? Call us now</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Have your VIN ready and a specialist will confirm fitment and arrange pallet delivery.
        </p>
        <a
          href={PHONE_HREF}
          onClick={close}
          className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-display text-xl font-bold text-primary-foreground transition-colors hover:bg-primary-glow"
        >
          <Phone className="h-5 w-5" /> {PHONE}
        </a>
        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" /> 90-day warranty on every part
        </div>
        <button onClick={close} className="mt-3 text-xs font-semibold text-muted-foreground hover:text-foreground">
          Maybe later
        </button>
      </div>
    </div>
  );
}
