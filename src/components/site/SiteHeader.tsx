import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/site/BrandMark";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
        <a href="#top" aria-label="Dayonze Pro home">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={
                i === 0
                  ? "border-b-2 border-primary pb-0.5 text-sm font-medium text-primary"
                  : "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="hero" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        <button
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-surface px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>
                Get Started
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
