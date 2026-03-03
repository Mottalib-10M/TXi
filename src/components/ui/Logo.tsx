export function Logo({ className = "text-xl" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="36" height="36" rx="8" fill="#0a0a0a" />
        {/* Horizontal bar — road */}
        <line x1="8" y1="12" x2="28" y2="12" stroke="white" strokeWidth="3" strokeLinecap="round" />
        {/* Vertical bar — road, cut at intersection */}
        <line x1="18" y1="15" x2="18" y2="27" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="font-semibold tracking-tight">
        <span className="text-neutral-600 font-normal">Taxi</span>
        <span className="text-neutral-950 font-bold">Noir</span>
      </span>
    </span>
  );
}
