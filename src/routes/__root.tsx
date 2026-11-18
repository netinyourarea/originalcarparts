import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
} from "@tanstack/react-router";

import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { StickyCallButton, CallPopup } from "@/components/CallPrompts";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="font-display text-8xl text-primary">404</div>
        <h2 className="mt-4 font-heading text-2xl font-semibold uppercase tracking-widest">Part Not Found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This page is out of stock. Try heading back home.</p>
        <Link to="/" className="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 font-display tracking-wider text-primary-foreground hover:bg-primary-glow">
          Go Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl tracking-wider text-primary">Something Broke</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error instanceof Error ? error.message : String(error)}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-xl bg-primary px-6 py-3 font-display tracking-wider text-primary-foreground"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { title: "Original Carparts — Premium OEM & Tested Salvage Auto Parts" },
      { name: "description", content: "Inspected engines, transmissions, and genuine replacement parts. Verified fitment and ordered by phone with an auto specialist." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <HeadContent />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1"><Outlet /></main>
          <Footer />
          <CartDrawer />
          <StickyCallButton />
          <CallPopup />
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}
