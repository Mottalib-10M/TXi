export function Logo({ className = "text-xl" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" width="32" height="32" alt="" className="shrink-0" />
      <span className="font-semibold tracking-tight">
        <span className="text-neutral-600 font-normal">Taxi</span>
        <span className="text-neutral-950 font-bold">Neo</span>
      </span>
    </span>
  );
}
