import logoAsset from "@/assets/dayonze-pro-logo.png.asset.json";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className ?? ""}`}>
      <img
        src={logoAsset.url}
        alt="Dayonze Pro logo"
        width={48}
        height={48}
        className="size-12 rounded-full"
      />
      <span className="font-display text-lg font-bold uppercase leading-[1.05] tracking-wide">
        Dayonze
        <br />
        <span className="text-primary">Pro</span>
      </span>
    </span>
  );
}
