export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Original Carparts logo">
      <rect width="48" height="48" rx="12" fill="var(--primary)" />
      {/* gear ring */}
      <circle cx="24" cy="24" r="12" fill="none" stroke="var(--primary-foreground)" strokeWidth="4" strokeDasharray="5.2 3.2" />
      <circle cx="24" cy="24" r="8" fill="none" stroke="var(--primary-foreground)" strokeWidth="2.5" />
      {/* checkmark = verified original */}
      <path d="M19.5 24.5l3.3 3.3 6-7" fill="none" stroke="var(--accent)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight">
          ORIGINAL<span className="text-primary"> CARPARTS</span>
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">OEM &amp; Tested Salvage</span>
      </span>
    </span>
  );
}
