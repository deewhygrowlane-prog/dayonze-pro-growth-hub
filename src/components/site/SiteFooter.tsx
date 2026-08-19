import { ArrowUp, Facebook, Instagram, Mail } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_EMAIL } from "@/lib/brand";
import { BrandMark } from "@/components/site/BrandMark";

export function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Social Media Marketing",
  "Content Marketing",
  "Digital Advertising",
  "SEO & Visibility",
  "Lead Generation",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface text-surface-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandMark />
            <p className="mt-5 max-w-xs text-sm text-surface-foreground/65">
              Digital marketing solutions designed to help brands grow, connect, and convert online.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-surface-foreground/65 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="text-surface-foreground/65 transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold">Get In Touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2.5 text-surface-foreground/70 transition-colors hover:text-primary"
                >
                  <Mail className="size-4 text-primary" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-surface-foreground/70 transition-colors hover:text-primary"
                >
                  <Facebook className="size-4 text-primary" />
                  facebook.com/profile.php?id=61593136096226
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-surface-foreground/70 transition-colors hover:text-primary"
                >
                  <Instagram className="size-4 text-primary" />
                  instagram.com/dayonzepro/
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-surface-foreground/70 transition-colors hover:text-primary"
                >
                  <XIcon className="size-4 text-primary" />
                  x.com/DayonzePro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
          <p className="text-xs text-surface-foreground/60">
            © 2026 Dayonze Pro. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dayonze Pro on Facebook"
              className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dayonze Pro on Instagram"
              className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dayonze Pro on Twitter / X"
              className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <XIcon className="size-4" />
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="flex size-9 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <ArrowUp className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
