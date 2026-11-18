import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from "@/lib/data";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Original Carparts" },
      { name: "description", content: "Reach our auto parts specialists by phone, callback request, email, or WhatsApp. Phone-direct ordering only." },
      { property: "og:title", content: "Contact Original Carparts" },
      { property: "og:description", content: "Reach our specialists by phone, callback, email, or WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Get In Touch</div>
        <h1 className="mt-2 font-display text-5xl tracking-wider sm:text-7xl">TALK TO A <span className="text-gradient-brand">SPECIALIST</span></h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-4 rounded-xl bg-primary p-6 text-primary-foreground transition-all hover:bg-primary-glow brand-glow"
            >
              <Phone className="h-8 w-8" />
              <div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Call Now</div>
                <div className="font-display text-2xl tracking-wider">{PHONE}</div>
              </div>
            </a>

            {[
              { icon: Mail, label: "Email", value: "parts@originalcarparts.us", href: "mailto:parts@originalcarparts.us" },
              { icon: MessageCircle, label: "WhatsApp", value: "Message Us", href: WHATSAPP_HREF },
              { icon: MapPin, label: "Address", value: "2400 Industrial Pkwy, Detroit, MI 48201" },
              { icon: Clock, label: "Hours", value: "Mon–Fri 7AM–7PM | Sat 9AM–4PM EST" },
            ].map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary">
                  <Icon className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</div>
                    <div className="font-heading text-base font-semibold">{value}</div>
                  </div>
                </div>
              );
              return href ? <a key={label} href={href}>{inner}</a> : <div key={label}>{inner}</div>;
            })}

            <div className="aspect-video overflow-hidden rounded-xl border border-border bg-card">
              <iframe
                title="Map"
                className="h-full w-full"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-83.07%2C42.32%2C-83.02%2C42.36&amp;layer=mapnik"
              />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h2 className="font-display text-3xl tracking-wider">REQUEST A CALLBACK</h2>
            <p className="mt-1 text-sm text-muted-foreground">Tell us what you're hunting for. A specialist will call you back fast.</p>

            {submitted ? (
              <div className="mt-8 rounded-xl border border-primary/40 bg-primary/10 p-6 text-center">
                <div className="font-display text-3xl tracking-wider text-primary">REQUEST RECEIVED</div>
                <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within one business hour.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="mt-6 space-y-4"
              >
                {[
                  { name: "name", label: "Full Name", type: "text" },
                  { name: "phone", label: "Phone Number", type: "tel" },
                  { name: "vehicle", label: "Year / Make / Model", type: "text" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{f.label}</label>
                    <input required type={f.type} className="mt-1 w-full rounded-xl border border-border bg-input px-4 py-3 text-sm focus:border-primary focus:outline-none" />
                  </div>
                ))}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Part You Need</label>
                  <textarea required rows={4} className="mt-1 w-full rounded-xl border border-border bg-input px-4 py-3 text-sm focus:border-primary focus:outline-none" />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-6 py-4 font-display text-lg tracking-wider text-primary-foreground transition-all hover:bg-primary-glow brand-glow"
                >
                  REQUEST CALLBACK
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
