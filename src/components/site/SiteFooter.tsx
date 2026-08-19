import { Facebook, Instagram, Mail } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_EMAIL } from "@/lib/brand";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient font-display text-lg font-bold text-brand-foreground">
                D
              </span>
              <span className="font-display text-lg font-bold">Dayonze Pro</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-surface-foreground/70">
              “Digital marketing solutions designed to help brands grow, connect, and convert
              online.”
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-surface-foreground/60">
              Contact
            </h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-surface-foreground/85 transition-colors hover:text-brand-soft"
            >
              <Mail className="size-4" />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-surface-foreground/60">
              Social Media
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dayonze Pro on Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-surface-foreground/20 transition-colors hover:bg-brand hover:text-brand-foreground"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dayonze Pro on Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-surface-foreground/20 transition-colors hover:bg-brand hover:text-brand-foreground"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dayonze Pro on Twitter / X"
                className="flex size-10 items-center justify-center rounded-full border border-surface-foreground/20 transition-colors hover:bg-brand hover:text-brand-foreground"
              >
                <XIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-surface-foreground/15 pt-6 text-xs text-surface-foreground/60">
          © 2026 Dayonze Pro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
