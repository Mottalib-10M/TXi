export function Logo({ className = "text-xl" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight ${className}`}>
      <span className="text-neutral-600 font-normal">Taxi</span>
      <span className="text-neutral-950 font-bold">Noir</span>
    </span>
  );
}
