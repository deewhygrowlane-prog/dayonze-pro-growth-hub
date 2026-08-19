export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className ?? ""}`}>
      <span className="relative flex size-11 items-center justify-center rounded-full border-2 border-primary">
        <span className="font-display text-lg font-bold leading-none text-primary">DP</span>
      </span>
      <span className="font-display text-lg font-bold uppercase leading-[1.05] tracking-wide">
        Dayonze
        <br />
        <span className="text-primary">Pro</span>
      </span>
    </span>
  );
}
