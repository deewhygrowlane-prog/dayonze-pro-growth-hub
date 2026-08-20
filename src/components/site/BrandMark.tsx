import logoAsset from "@/assets/dayonze-pro-logo.png.asset.json";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={`group flex items-center gap-3 ${className ?? ""}`}>
      <span className="relative inline-flex shrink-0 animate-dz-float">
        <span className="absolute inset-0 rounded-full animate-dz-pulse-ring" />
        <img
          src={logoAsset.url}
          alt="Dayonze Pro logo"
          width={48}
          height={48}
          className="relative size-12 rounded-full ring-1 ring-primary/40 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
        />
      </span>
      <span className="font-display text-lg font-bold uppercase leading-[1.05] tracking-wide">
        Dayonze
        <br />
        <span className="text-primary">Pro</span>
      </span>
    </span>
  );
}
